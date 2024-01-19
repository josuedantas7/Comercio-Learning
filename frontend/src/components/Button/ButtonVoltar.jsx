import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const ButtonVoltar = () => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };
    

  return (
    <button onClick={handleGoBack} className="absolute left-8 text-black flex items-center gap-2 max-[480px]:left-2 -translate-y-8">
        <FaArrowLeft className='text-lg'/>
        <p className='text-[20px] flex max-[600px]:hidden'>Voltar</p>
    </button>
  )
}

export default ButtonVoltar
