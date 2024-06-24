import * as React from "react"
const Arrow = ({style}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...style}
    >
        <path
            stroke="#94A3B8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="m4 6 4 4 4-4"
        />
    </svg>
)
export default Arrow
