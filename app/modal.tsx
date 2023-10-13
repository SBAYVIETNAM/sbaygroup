'use client'
import Image from 'next/image'
import Link from 'next/link';

const Popup = ({handleClose}: any) => {

  return (
    // <dialog id="my_modal_1" className="modal">
    //   <div className="modal-box" style={{padding: '0.5rem' }}>
    //     <Link href={'https://giarenhat.sbaygroup.com/'} target="_blank">
    //       <Image width={0}
    //                 height={0}
    //                 sizes="100vw"
    //                 style={{ width: '100%', height: 'auto', borderRadius: '10px' }} alt='vé máy bay giá rẻ' src="/img/Popup.jpg" />
    //     </Link>
        
    //       <form method="dialog">
    //         <div className="grid grid-cols-2">
    //           <div className='modal-action'>
    //             <h2 className='text-red-600 text-lg font-bold'>Đăng ký hợp tác kinh doanh</h2>
    //           </div>
    //           <div className='modal-action'>
    //             <button className="btn">Close</button>
    //           </div>
    //         </div>            
    //       </form>
    //   </div>
    // </dialog>
      <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
             <div className="p-2 rounded-lg bg-white" style={{padding: '0.5rem' }}>
             <Link href={'https://giarenhat.sbaygroup.com/'} target="_blank">
               <Image width={0}
                         height={0}
                         sizes="100vw"
                         style={{ width: '100%', height: 'auto', borderRadius: '10px' }} alt='vé máy bay giá rẻ' src="/img/Popup.jpg" />
             </Link>
        
                 <div className="flex p-2 w-full flex-row items-center justify-between">
                   <div>
                     {/* <h2 className='text-red-600 text-lg font-bold'>Đăng ký hợp tác kinh doanh</h2> */}
                   </div>
                   <div>
                     <button type="button" onClick={handleClose} className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Đóng</button>
                   </div>
                 </div>            
           </div>
          </div>
  );
};

export default Popup;