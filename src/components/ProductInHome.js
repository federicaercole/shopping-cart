function ProductInHome({ image, title }) {

    return (
        <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </div>)
}

export default ProductInHome;