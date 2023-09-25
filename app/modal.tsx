import Image from 'next/image'
import Link from 'next/link';

const Popup = ({ isOpen }: any) => {
  return (
    <dialog id="my_modal_1" className="modal" open={isOpen}>
      <div className="modal-box" style={{padding: '0.5rem' }}>
        <Link href={'https://giarenhat.sbaygroup.com/'} target="_blank">
          <Image width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto', borderRadius: '10px' }} alt='vé máy bay giá rẻ' src="/img/Popup.jpg" />
        </Link>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Popup;