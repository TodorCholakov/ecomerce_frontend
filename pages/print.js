import React from 'react'
import { Button, Spacer, Text } from '@nextui-org/react';
import { BsPlusSquareFill } from 'react-icons/bs';
import { FaCloudUploadAlt } from 'react-icons/fa';


const Print = () => {
  return (
    <div className="container mx-auto items-center">
         <Spacer y={0.5} />
         <Text size="$md">1. Избери една или повече снимки от компютъра:</Text>
      <Button color="secondary" auto className="p-8">
        <BsPlusSquareFill className="text-3xl " /> 
        </Button>
      <Spacer y={0.5} />
      <Spacer y={0.5} />
         <Text size="$md">2. Запиши снимките на сървъра:</Text>
      <Button color="secondary" auto className="p-8">
        <FaCloudUploadAlt className="text-3xl " /> 
        </Button>
      <Spacer y={0.5} />
  </div>
  )
}

export default Print