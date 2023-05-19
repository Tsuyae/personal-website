// pages/404.js
import Layout from "../components/layout"

export default function NotFoundPage(){
    return (
        <Layout>
            <div className="flex justify-center py-40">
                <h1 className="text-center font-bold text-4xl min-h-screen">404 | Page Not Found</h1>
            </div>
        </Layout>
    ) 
}