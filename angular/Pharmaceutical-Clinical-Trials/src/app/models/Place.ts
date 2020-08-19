export class Place {
  Quotes: {
     QuoteId: any []
     MinPrice: any []
     Direct: any []
     OutboundLeg: {
       CarrierIds: any []
       OriginId: any []
       DestinationId: any []
       DepartureDate: any []
    }
};
  Places: {
    PlaceId: any []
    IataCode: any []
    Name: any []
    Type: any []
    SkyscannerCode: any []
    CityName: any []
    CityId: any []
    CountryName: any []
  };
  Carriers: {
    CarrierId: any []
    Name: any []
  };
  Currencies: {
    Code: any []
    Symbol: any []
    ThousandsSeparator: any []
    DecimalSeparator: any []
    SymbolOnLeft: any []
    SpaceBetweenAmountAndSymbol: any []
    RoundingCoefficient: any []
    DecimalDigits: any []
  };
   }
