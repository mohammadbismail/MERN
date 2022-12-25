import React from 'react'
import AllProducts from '../components/AllProducts'
import FormComp from '../components/FormComp'

const Dashboard = (props) => {

    const { products, loaded, onSubmitProp, onClickProp, errors } = props
    return (
        <div>
            <FormComp initTitle="" initPrice="" initDescription="" onSubmitProp={onSubmitProp} errors={errors} />
            {loaded && <AllProducts products={products} onClickProp={onClickProp} />}
        </div>
    )
}

export default Dashboard