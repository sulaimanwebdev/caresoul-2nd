import { Fragment, useState, useEffect, useRef, } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Card = (props) => {

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
       setIsOpen(false)
     }
   
     function openModal() {
       setIsOpen(true)
     }

  return (
    <>
     <div>
                        <button onClick={openModal} className='w-full'>
                            <img src={props.parameter.image} className='grayscale select-none h-[29vh] w-full object-cover object-bottom rounded-[14px]' alt="cover" />
                            <div className="flex items-center justify-between gap-2 mt-2 ">
                            <div className='font-[500] text-[19px] leading-[36px] uppercase'>{props.parameter.text}</div>
                            <div className=''><svg width="15" height="14" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3389 4.552L2.86287 16.028L0.977539 14.1427L12.4522 2.66667H2.33887V0H17.0055V14.6667H14.3389V4.552Z" fill="black"/></svg></div>
                            </div>
                        </button>
                      </div>



                {/* Modal */}
   <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-[60]" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-blue-500 bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[800px] transform overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl transition-all">
                  
                 <div className="flex items-center justify-end">
                  <button onClick={closeModal} className='outline-none'><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="rgb(59 130 246)" className="bi bi-x" viewBox="0 0 16 16"><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg></button>
                 </div>                  
                  
                 <video id='video' controls="controls" preload='none' className='w-full mt-5' poster="https://assets.codepen.io/32795/poster.png">
                  <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
                  <p>Your user agent does not support the HTML5 Video element.</p>
                 </video>
                 
                 <button className='text-blue-500 mt-5'>#{props.parameter.category}</button>
                 <div className='font-bold text-[30px]'>{props.parameter.text}</div>
                 <div className='mt-2'>{props.parameter.description}</div>
                 <a href={props.parameter.link} className='flex w-fit rounded-md px-4 py-2.5 text-white font-semibold mt-7 bg-blue-500 transition hover:bg-blue-600'>Get Started</a>
               
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Card