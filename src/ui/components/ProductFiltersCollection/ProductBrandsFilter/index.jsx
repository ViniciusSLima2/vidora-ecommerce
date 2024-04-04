
import Link from 'next/link'
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
import Checkbox from '../../Checkbox'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation';
import { filterParameters } from '@/pages/products'
const ProductBrandsOptions = (props) => {
    const containerRef = useRef()
    const router = useRouter()
    const searchParams= useSearchParams()
    const search = searchParams.get('')
    const filterBrands = ['Nike', 'Adidas', 'Puma', 'Reserva', 'Olympikus']
    const setFilterParam = (value) => {
        const brands = [...filterParameters.value.brands, value]
        filterParameters.value = {...filterParameters.value, brands : brands}
    }

    const removeFilterParam = (value) => {
        let brands = [...filterParameters.value.brands]
        const index = brands.indexOf(value);
        if (index !== -1) brands.splice(index, 1);
        filterParameters.value = {...filterParameters.value, brands : brands}
    }
    return (
        <div ref={containerRef}>
            {filterBrands.map((name) => {return <Checkbox name={name} for={"productsBrandsFilter"} setFunction={setFilterParam} removeFunction={removeFilterParam}></Checkbox>} )}
        </div>
    )
}

export default ProductBrandsOptions;