import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

import PrimaryTitle from '../components/Text/PrimaryTitle';
import BannerHome from '../components/Banner/BannerHome';


const About = () => {
  return (
    <div className='text-gray-800 mb-32'>
        <BannerHome/>
        <PrimaryTitle title='Sobre o Comercial Luna' botaoVoltar={true}/>
        <div className='flex w-full max-[1000px]:flex-col max-[1000px]:items-center'>
          <div className='w-1/2 max-[1000px]:w-full flex pl-32 gap-4 pr-8 flex-col mt-4 max-[1000px]:pl-20 max-[650px]:pl-8 max-[460px]:pl-2'>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold'>Fundado em:</h1>
              <p>Comercial Luna foi fundado em 2013</p>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold'>Objetivo:</h1>
              <p>Trazer praticidade , agilidade nas suas compras e trazer preços acessíveis á todo público.</p>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold'>Horários de funcionamento:</h1>
              <div className='flex gap-2'>
                <p>Segunda a Sábado</p>
                <p className='font-semibold'>7:30 ás 19:00</p>
              </div>
              <div className='flex gap-2'>
                <p>Domingo</p>
                <p className='font-semibold'>7:30 ás 13:00</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <h1 className='text-2xl font-semibold'>Meios de comunicação:</h1>
              <div className='flex items-center'>
                <p className='pb-1 w-20'>Whatsapp:</p>
                <p className='font-semibold'>
                  <a href='https://wa.me//94984261969?text=Tenho%20interesse%20em%20saber%20mais%20sobre%20os%20produtos%20da%20sua%20loja%20' target='_blank' rel='noreferrer'>
                    <Tooltip title="Clique aqui para ser redirecionado" placement="top">
                      <Button>(94) 98426-1969</Button>
                    </Tooltip>
                  </a>
                </p>
              </div>
              <div className='flex gap-2 items-center'>
                <p className='pb-1'>Instagram:</p>
                <p className='font-semibold'>
                  <a href='https://instagram.com/comercialluna/' target='_blank' rel='noreferrer'>
                    <Tooltip title="Clique aqui para ser redirecionado" placement="top">
                      <Button>Comercial Luna Oficial</Button>
                    </Tooltip>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col justify-center max-[1350px]:items-center max-[1350px]:justify-start pr-32 max-[1000px]:w-full max-[1000px]:items-start pl-20 max-[1000px]:pr-0 max-[1000px]:mb-32 max-[650px]:pl-8 max-[460px]:pl-2'>
            <h1 className='text-2xl ml-2.5 mb-1 max-[430px]:ml-0 font-semibold'>Localização do estabelecimento:</h1>
            <iframe className='rounded-2xl max-[1350px]:w-[80%] max-[1350px]:h-[300px] max-[1000px]:w-[600px] max-[790px]:w-[500px] max-[560px]:w-[400px] max-[560px]:h-[300px] max-[430px]:w-[350px] max-[380px]:w-[320px] max-[430px]:mx-auto'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.332571877203!2d-49.11216538845281!3d-5.366139053675242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c3a1f1cda64667%3A0x29dbb49dcac0ab1e!2sComercial%20Luna!5e0!3m2!1spt-BR!2sbr!4v1701321040239!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="560" 
            allowFullScreen="" 
            loading="lazy"/>
          </div>
        </div>
    </div>
  )
}

export default About
