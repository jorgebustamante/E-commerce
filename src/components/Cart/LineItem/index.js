import React, { useContext } from 'react'

import StoreContext from '~/context/StoreContext'

const LineItem = props => {
  const { line_item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)

  const variantImage = line_item.variant.image ? (
    <img
      src={line_item.variant.image.src}
      alt={`${line_item.title} product shot`}
      className=""
    />
  ) : null

  const selectedOptions = line_item.variant.selectedOptions
    ? line_item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, line_item.id)
  }

  return (
    <div className="w-full md:w-1/4  p-6 flex flex-col hover:grow hover:shadow-lg">
      {variantImage}
      <p className="text-blue-700 text-lg font-serif font-bold">
        {line_item.title}
        {`  `}
        {line_item.variant.title === !'Default Title'
          ? line_item.variant.title
          : ''}
      </p>
      <div className="font-bold ">
        {selectedOptions}
        {line_item.quantity}
      </div>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded-full"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  )
}

export default LineItem
