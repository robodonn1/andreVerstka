import styles from './PostForm.module.css';
import { useState } from 'react';
import axios from 'axios';

function PostForm() {
    const [error, setError] = useState("");
    const [isSumbiting, setIsSumbiting] = useState(false);

    const [formData, setFormData] = useState({ name: "", price: 0, description: "", image: "" });

    const [fileName, setFileName] = useState("Выберите файл");

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData((pref) => ({
            ...pref,
            [name]: value
        }))
    }

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            image: e.target.files[0],
        }));

        setFileName('Выбранный файл: ' + e.target.files[0].name);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.price ||
            !formData.description ||
            !formData.image
        ) {
            setError("Пожалуйста, заполните все поля и выберите изображение");
            return;
        }
        setIsSumbiting(true);
        setError("");
        try {
            const data = new FormData();
            data.append("name", formData.name);
            data.append("price", formData.price);
            data.append("description", formData.description);
            data.append("image", formData.image);
            const response = await axios.post(
                "https://torguisam.ru/api/product/create-oksei-product",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            setError("Товар успешно создан!");
            setFormData({
                name: "",
                price: "",
                description: "",
                image: null,
            });
            // Сброс input файла
            const fileInput = document.querySelector('input[type="file"]');
            if (fileInput) fileInput.value = "";
            // if (onProductCreated) {
            //     onProductCreated(response.data);
            // }
        } catch (error) {
            console.error("Ошибка при создании товара:", error);
            let errorMessage = "Ошибка при создании товара: ";
            if (error.code === "ERR_NETWORK") {
                errorMessage += "Сервер недоступен. Проверьте подключение к интернету.";
            } else if (error.response) {
                errorMessage += `${error.response.status} - ${error.response.data?.message || error.response.statusText
                    }`;
            } else if (error.request) {
                errorMessage += "Сервер не отвечает. Попробуйте позже.";
            } else {
                errorMessage += error.message;
            }
            setError(errorMessage);
        } finally {
            setIsSumbiting(false);
        }
    };


    return (
        <>
            <form className={styles.postForm} onSubmit={handleSubmit} encType='multipart/form-data'>
                <input type="text" placeholder='Название товара' value={formData.name} name='name' onChange={handleInputChange} required />
                <input type="text" placeholder='Описание товара' value={formData.description} name='description' onChange={handleInputChange} required rows="4" />
             
                <input type="number" placeholder='Цена товара' value={formData.price} name='price' onChange={handleInputChange} required />
                <label htmlFor="" className={styles.vibor}>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                        required
                    />
                    <span id='spanFile'>{fileName}</span>
                </label>

                {(error) && (
                    <h1>Ошибка: {error}</h1>
                )}

                <button disabled={isSumbiting}>Сохранить</button>
            </form>
        </>
    );
}

export default PostForm;