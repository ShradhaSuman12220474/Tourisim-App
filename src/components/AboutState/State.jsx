import React from 'react';
import { useParams } from 'react-router-dom';

function State({ image, food, festival, places, history }) {
    const { name } = useParams(); // Get the state name from the URL params

    // You can use the name to fetch specific data if needed.
    
    return (
        <>
            <label className="flex cursor-pointer gap-2 mb-4">
                <span className="label-text">Current</span>
                <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                <span className="label-text">Synthwave</span>
            </label>

            <div className="p-4 max-w-4xl mx-auto">
                {/* Image Section */}
                <div className="mb-6">
                    <img src={image} alt={name} className="w-full h-auto rounded-lg shadow-lg" />
                </div>

                {/* Details Section */}
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {/* Places */}
                    <div className="flex-1 min-w-[150px] border border-red-700 rounded-lg p-4 text-center bg-white shadow-md">
                        <h2 className="text-xl font-bold text-red-700">Places</h2>
                        <ul className="list-disc list-inside mt-2">
                            {places.map((place, index) => (
                                <li key={index} className="text-gray-700">{place}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Food */}
                    <div className="flex-1 min-w-[150px] border border-green-700 rounded-lg p-4 text-center bg-white shadow-md">
                        <h2 className="text-xl font-bold text-green-700">Food</h2>
                        <ul className="list-disc list-inside mt-2">
                            {food.map((dish, index) => (
                                <li key={index} className="text-gray-700">{dish}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Festivals */}
                    <div className="flex-1 min-w-[150px] border border-blue-700 rounded-lg p-4 text-center bg-white shadow-md">
                        <h2 className="text-xl font-bold text-blue-700">Festivals</h2>
                        <ul className="list-disc list-inside mt-2">
                            {festival.map((fest, index) => (
                                <li key={index} className="text-gray-700">{fest}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* History of the State */}
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mb-6 shadow-md">
                    <h2 className="text-xl font-bold text-gray-800">History</h2>
                    <p className="mt-2 text-gray-700">{history}</p>
                </div>
            </div>
        </>
    );
}

export default State;
