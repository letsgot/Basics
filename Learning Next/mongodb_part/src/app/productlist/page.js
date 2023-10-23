import styles from '../../../styles/productlist.module.css'
import Link from 'next/link';

const getProducts = async()=> {
    let data = await fetch('http://localhost:3000/api/products',
    {
        method : "GET"
    });
    data = await data.json();
    console.log(data);
    if(data.success){
        return data.result;
    }
    else{
        return {success:false}
    }
}

export default async function Page() {
    let products = await getProducts();
    console.log(products);
    return (
        <div>
            <h2>Product list </h2>
            {/* <table className={styles.table}>
                <thead>
                    <tr className={styles.tr}>
                        <td className={styles.th}>Name</td>
                        <td className={styles.th}>Price</td>
                        <td className={styles.th}>Color</td>
                        <td className={styles.th}>Company</td>
                        <td className={styles.th}>Category</td>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((item) => {
                            return <tr key={item._id} className={styles.tr}>
                                <td className={styles.tr}>{item.name}</td>
                                <td className={styles.tr}>{item.price}</td>
                                <td className={styles.tr}>{item.color}</td>
                                <td className={styles.tr}>{item.company}</td>
                                <td className={styles.tr}>{item.category}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table> */}

            <Link href={"/"}><div className={styles.backButton}>Back to home</div></Link>
        </div>
    )
}