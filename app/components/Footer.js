import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai"

const Footer = () => {
 return(
    <div className="max-w-2xl mx-auto mt-24">
        <div>
            <ul className="flex justify-center items-center gap-x-8">
                <li><AiFillFacebook/></li>
                <li><AiOutlineInstagram/></li>
                <li><AiOutlineTwitter/></li>
                <li><AiOutlineYoutube/></li>
            </ul>
        </div>
        <div>
            <ul className="mt-10 flex justify-center items-center gap-x-2 px-6">
                <li>Conditions of Use</li>
                <li>Privacy & Policy</li>
                <li>Press Room</li>
            </ul>
        </div>
        <p className="text-center mt-4 mb-10">2021 MovieBox by Adriana Eka Prayudha</p>
    </div>
 )
}

export default Footer;