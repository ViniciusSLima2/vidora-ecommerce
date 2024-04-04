
import Link from 'next/link'
import {useRef, useEffect} from 'react'
import styles from "./index.module.css"
import Checkbox from '../../Checkbox'
import { useRouter } from 'next/router'
import { useSearchParams } from 'next/navigation';
import { filterParameters } from '@/pages/products'
const ProductPricesFilterOptions = (props) => {
    const containerRef = useRef()
    const router = useRouter()
    const searchParams= useSearchParams()
    const search = searchParams.get('')
    const filterPrices = [{name:"R$ 0 - R$ 100", filterParams: {minValue: 0, maxValue: 100}},
    {name:"R$ 100 - R$ 400", filterParams: {minValue: 100, maxValue: 400}},
    {name:"R$ 400 - R$ 600", filterParams: {minValue: 400, maxValue: 600}},
    {name:"R$ 600 - R$ 1000", filterParams: {minValue: 600, maxValue: 1000}},
    {name:"Acima de R$ 1000", filterParams: {minValue: 1000, maxValue: 1000000}}]

    const setFilterParam = (value) => {
        Array.from(containerRef.current?.querySelectorAll("input")).map((inputItem) => 
            {if(inputItem.value != value[1])inputItem.checked = false})
        filterParameters.value = {...filterParameters.value, priceParams: {minValue: value[0], maxValue: value[1]}}
    }

    const removeFilterParam = () => {
        filterParameters.value = {...filterParameters.value, priceParams: {minValue: 0, maxValue: 100000000}}
    }
    return (
        <div ref={containerRef}>
            {filterPrices.map((rangeValue) => {return <Checkbox name={rangeValue.name} values={rangeValue.filterParams} for={"productsPriceFilter"} setFunction={setFilterParam} removeFunction={removeFilterParam}></Checkbox>} )}
        </div>
    )
}

export default ProductPricesFilterOptions;