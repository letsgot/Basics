/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects : async ()=>{
        return [
            {
                source : '/redirects',
                destination : '/about',
                permanent : false
            },
            {
                source : '/users/:userid',
                destination : '/users',
                permanent : false
            }
        ]
    }
}

module.exports = nextConfig
