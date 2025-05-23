import React, { useState, useEffect, useCallback } from 'react'
import axios from '../../../utils/axios'
import Swal from "sweetalert2";
import { useParams, useNavigate } from "react-router-dom";

const EditWaste = () => {
    const { id } = useParams();
    const [bioWaste, setBioWaste] = useState(null)
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [weight, setWeight] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();


    const fetchBioWaste = useCallback(() => {
        axios.get(`/adminapi/biowastedit/${id}/`)
        .then((response) => {
            setBioWaste(response.data);
            setName(response.data.name);
            setDescription(response.data.description);
            setPrice(response.data.price);
            setWeight(response.data.weight);
            setImage(response.data.image);
            setCategory(response.data.category);
            console.log(response,"enteeeeeeeeeered")
        })
        .catch((error) => {
            console.error("Error fetching Biowaste",error)
        });
    },[id]);
    console.log("fetch waaaaaaaste",id);

    useEffect(() => {
        fetchBioWaste();
    }, [fetchBioWaste]);

    const updateBioWaste = () => {
        const updatedBioWaste = {
            ...bioWaste,
            name:name,
            description:description,
            price:price,
            weight:weight,
            image:image,
            category:category,
        };
        console.log("Thiiiiiiiiis has the updated biooooo waaaaaaste",updatedBioWaste)
        const DatasWithImage = new FormData();
        DatasWithImage.append("name", updatedBioWaste.name);
        DatasWithImage.append("description", updatedBioWaste.description);
        DatasWithImage.append("price",updatedBioWaste.price);
        DatasWithImage.append("weight",updatedBioWaste.weight);
        DatasWithImage.append("image", updatedBioWaste.image);
        DatasWithImage.append("category",updatedBioWaste.category);

        axios.patch(`/adminapi/biowastedit/${id}/`, DatasWithImage)
        .then((response) => {
            console.log("Biowaste updated Successfully:", response.data);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "BioWaste updated successfully",
                showConfirmButton: false,
                timer: 1500,
            });
            setBioWaste(response.data);
        })
        .catch((error) => {
            console.error("Error updationg in bioWaste:",error);
        })
    }
    console.log("Biooooo waste updated Successfully:", bioWaste);

    const deleteBioWaste = () =>{
        axios.delete(`/adminapi/biowastedit/${id}/`)
        .then((response) => {
            console.log("Biowaste deleted Successfully:");
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Waste category deleted successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate('/biowaste/')
        })
    }
    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImage(file);
        console.log(file);
    }
    if (!bioWaste) {
        return <p>Loading...</p>;
    }

return (
   
    <div className="max-w-2xl mx-auto p-8 mt-20 bg-opacity-60 bg-green-700 rounded-lg shadow-lg">
        <p>Bio Waste ID: {bioWaste.id}</p>

        <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">
            Name:
            </label>
            <input
            type="text"
            id="name"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            name="name"
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold text-gray-700">
            Category:
            </label>
            <input
            type="text"
            id="category"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
            />
        </div>

        <div className="mb-4">
            <label htmlFor="description" className="block mb-1 font-semibold text-gray-700">
            Description:
            </label>
            <input
            type="text"
            id="description"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            />
        </div>

        <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-700">
            Weight:
            </label>
            <input
            type="text"
            id="weight"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            name="weight"
            onChange={(e) => setWeight(e.target.value)}
            />
        </div>

        <div className="mb-4">
            <label className="block mb-1 font-semibold text-gray-700">
            Price:
            </label>
            <input
            type="text"
            id="price"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            />
        </div>

        <div className="mb-4">
            <label htmlFor="image" className="block mb-1 font-semibold text-gray-700">
            Image:
            </label>
            <input
            type="file"
            name="image"
            id="image"
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-200"
            onChange={handleImageUpload}
            />
        </div>

        <button
            type="submit"
            onClick={updateBioWaste}
            className="w-full px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
        >
            Update
        </button>

        <button
            onClick={deleteBioWaste}
            className="w-full px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200"
        >
            Delete
        </button>
        </div>
  
  
  );
};

export default EditWaste; 
