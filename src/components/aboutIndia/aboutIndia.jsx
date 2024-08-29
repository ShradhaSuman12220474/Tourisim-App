import react from 'react';
import './aboutIndia.css';
import item from "../Assets/item.jpg";
import LocationFinder from '../LocationFinder/LocationFinder';

function aboutIndia(){
    return (
        <div className='classAboutIndia'>
            <div className='india-left'>
            <LocationFinder/>
            </div>
            <div className='india-right'>
                <h1 className='india-right-heading'>About</h1>
                <p>India, officially the Republic of India (ISO: Bhārat Gaṇarājya),[21] is a country in South Asia. It is the seventh-largest country by area; the most populous country with effect from June 2023;[22][23] and from the time of its independence in 1947, the world's most populous democracy.[24][25][26] Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand, Myanmar, and Indonesia.

Modern humans arrived on the Indian subcontinent from Africa no later than 55,000 years ago.[28][29][30] Their long occupation, initially in varying forms of isolation as hunter-gatherers, has made the region highly diverse, second only to Africa in human genetic diversity.[31] Settled life emerged on the subcontinent in the western margins of the Indus river basin 9,000 years ago</p>
            </div>
            <div></div>
        </div>
    )
}
export default aboutIndia;