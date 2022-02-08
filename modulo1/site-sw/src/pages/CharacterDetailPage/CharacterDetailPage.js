import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { BASE_URL } from "../../constants/Url";

export const CharacterDetailPage = () => {
    
    return (
        <div>
           <h1>
                DetailPage
            </h1>
            <button>
                <Link to="/">List Page</Link>
            </button>
        </div>        
    );
}