 export interface City {
      Version: number,
      Key: number,
      Type: string,
      Rank: number,
      LocalizedName: string,
      Country: Country,
      AdministrativeArea: AdministrativeArea
}

export interface Country{
  ID: string,
  LocalizedName: string
}
export interface AdministrativeArea{
  ID: number,
  LocalizedName: string
}
