
import React from 'react'
import PPP1 from '/src/assets/images/PPP1.png'
import PPP2 from '/src/assets/images/PPP2.png'
import PPP3 from '/src/assets/images/PPP3.png'
import 'tw-elements';


const MolduraPPP = () => {
    return (
    
    <div className='w-full h-fit'>
        <div id="carouselExampleCaptions" class="carousel slide relative border rounded-md drop-shadow-xl" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"> 
                </button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2">
                </button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3">
                </button>
            </div>
            <div class="carousel-inner relative w-full overflow-hidden rounded-md">
                <div class="carousel-item active relative float-left w-full">
                    <img
                        src={PPP1}
                        class="block w-full"
                        alt="..."/>
                    <div class="carousel-caption hidden md:block absolute text-center drop-shadow-md">
                        <h5 class="tw-fonte-texto">Longá</h5>
                        <p>Geração distribuida de 2,38MWp.</p>
                    </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                        src={PPP3}
                        class="block w-full"
                        alt="..."/>
                    <div class="carousel-caption hidden md:block absolute text-center drop-shadow-md">
                        <h5 class="tw-fonte-texto">Altos</h5>
                        <p>Geração distribuida de 4,18MWp.</p>
                    </div>
                </div>
                <div class="carousel-item relative float-left w-full">
                    <img
                        src={PPP2}
                        class="block w-full"
                        alt="..."/>
                    <div class="carousel-caption hidden md:block absolute text-center drop-shadow-md">
                        <h5 class="tw-fonte-texto">Nova Longá</h5>
                        <p>Geração distribuida de 2,38MWp.</p>
                    </div>
                </div>
            </div>
            <button
                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
            </button>
            <button
                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span class="visually-hidden">Proximo</span>
            </button>
        </div>
    </div>
    
  )
}

export default MolduraPPP