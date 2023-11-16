import React from 'react'

import productOne from "../images/image-product-1.jpg"

const Product = () => {
    return (
        <section>
            <div className='relative'>
                <img src={productOne} alt="image-product-one" />

                <div className='flex justify-between absolute -translate-y-1/2 left-2 right-2 top-1/2'>

                    <div className='w-11 h-11 bg-white rounded-full flex items-center justify-center '>
                        <svg
                            width="12"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="icon-previous"
                            role="button"
                        >
                            <path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                        </svg>
                    </div>

                    <div className='w-11 h-11 bg-white rounded-full flex items-center justify-center'>
                        <svg
                            width="13"
                            height="18"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label='icon-next'
                            role="button"
                        >
                            <path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product