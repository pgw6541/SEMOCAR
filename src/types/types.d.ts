// carData.json
export interface Brand {
  kr : string
  en : string
}

export interface Name {
  kr : string
  en : string
}
export interface price {
  min : number
  max : number
}


export interface Attr {
  displacement: string
  fuelType: string
  gasMileage: string
  height: string
  length: string
  power: string
  torque: string
  width: string
}

export interface Cars {
  brand: Brand
  name : Name
  id : number
  segment : string
  imgUrl : string
  price : price
  attribute : Attr
}

// brand.json
export interface Brands {
  name : { kr : string, en: string}
  id : number
  imgUrl : string
}

// Brand.tsx
export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}