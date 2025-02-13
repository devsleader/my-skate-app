import { Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    return (
      <>
        
        <Container className="pt-12">
        <div className="flex">
        <Image className="w-[33%]" src="/4.png" alt="" width={500} height={500} />
        <Image className="w-[33%]" src="/Protective-Helmet-1.png" alt="" width={500} height={500} />
        <Image className="w-[33%]" src="/4.png" alt="" width={500} height={500} />
        </div>
        </Container>
        
        {/* Add PAGE NOT FOUND header */}
        <h1 className="text-center text-5xl font-bold pt-8">PAGE NOT FOUND</h1>
        
        {/* Add Back to Home button */}
        <div className="flex justify-center mt-4">
          <Link href="/">
            <button 
              style={{ backgroundColor: '#B8E144', color: 'black', padding: '10px 20px', border: 'none', borderRadius: '25px' }}
            >
              Back to Home
            </button>
          </Link>
        </div>
      </>
    );
}
export default Page;