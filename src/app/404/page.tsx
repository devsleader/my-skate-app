import { Container } from "@mui/material";
import PageHeader from "../components/PageHeader";
import Link from "next/link";

export default function Page404() {
    return (
      <>
        {/* <PageHeader 
          title="404" 
          subtitle="Page not found" 
        /> */}
        <Container className="pt-12">
        <div className="flex">
        <img className="w-[33%]" src="/4.png" alt="" />
        <img className="w-[33%]" src="/Protective-Helmet-1.png" alt="" />
        <img className="w-[33%]" src="/4.png" alt="" />
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