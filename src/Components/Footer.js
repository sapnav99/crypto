import { AiOutlineBell } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { MdOutlineExplore } from 'react-icons/md';
import { BiSolidWallet } from 'react-icons/bi';

export default function Footer() {
    return (
      <div className='footer' style={{display:'flex', justifyContent:'center', alignItems:'center', 
        fontSize:'30px', backgroundColor:'white', position:'sticky', width:'100%', margin:'5px auto', borderRadius:'100px' }}>
        <BiSolidWallet style={{ marginRight: '16px' }}/>
        <MdOutlineExplore style={{ margin: '0 16px' }} />
        <AiOutlineBell style={{ marginLeft: '16px', marginRight: '16px' }}/>
        <FiSettings style={{ marginLeft: '16px' }} />  
      </div>  
    )
  }