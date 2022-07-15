import { useQuery, UseQueryOptions } from 'react-query';
import { useFetchData } from '../fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  examples__JSON: any;
};

export type Address = {
  __typename?: 'Address';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type Company = {
  __typename?: 'Company';
  address?: Maybe<Address>;
  employees?: Maybe<Array<Maybe<Person>>>;
  name?: Maybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  address?: Maybe<Address>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  company?: Maybe<Company>;
};

export enum Fake__Locale {
  Az = 'az',
  Cz = 'cz',
  De = 'de',
  DeAt = 'de_AT',
  DeCh = 'de_CH',
  En = 'en',
  EnAu = 'en_AU',
  EnBork = 'en_BORK',
  EnCa = 'en_CA',
  EnGb = 'en_GB',
  EnIe = 'en_IE',
  EnInd = 'en_IND',
  EnUs = 'en_US',
  EnAuOcker = 'en_au_ocker',
  Es = 'es',
  EsMx = 'es_MX',
  Fa = 'fa',
  Fr = 'fr',
  FrCa = 'fr_CA',
  Ge = 'ge',
  IdId = 'id_ID',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  NbNo = 'nb_NO',
  Nep = 'nep',
  Nl = 'nl',
  Pl = 'pl',
  PtBr = 'pt_BR',
  Ru = 'ru',
  Sk = 'sk',
  Sv = 'sv',
  Tr = 'tr',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_CN',
  ZhTw = 'zh_TW'
}

export enum Fake__Types {
  /** An URL for an avatar */
  AvatarUrl = 'avatarUrl',
  BankIdentifierCode = 'bankIdentifierCode',
  BitcoinAddress = 'bitcoinAddress',
  City = 'city',
  /** Configure color with option: `baseColor` */
  ColorHex = 'colorHex',
  ColorName = 'colorName',
  CompanyBs = 'companyBS',
  CompanyCatchPhrase = 'companyCatchPhrase',
  CompanyName = 'companyName',
  Country = 'country',
  CountryCode = 'countryCode',
  County = 'county',
  CurrencyCode = 'currencyCode',
  CurrencyName = 'currencyName',
  CurrencySymbol = 'currencySymbol',
  /**
   * By default returns dates beetween 2000-01-01 and 2030-01-01.
   * Configure date format with options `dateFormat` `dateFrom` `dateTo`.
   */
  Date = 'date',
  DbCollation = 'dbCollation',
  DbColumn = 'dbColumn',
  DbEngine = 'dbEngine',
  DbType = 'dbType',
  DomainName = 'domainName',
  /** Configure email provider with option: `emailProvider` */
  Email = 'email',
  FileExtension = 'fileExtension',
  Filename = 'filename',
  FinanceAccountName = 'financeAccountName',
  FinanceTransactionType = 'financeTransactionType',
  FirstName = 'firstName',
  FullName = 'fullName',
  /** Configure date format with option `dateFormat` */
  FutureDate = 'futureDate',
  HackerAbbreviation = 'hackerAbbreviation',
  HackerPhrase = 'hackerPhrase',
  /** An image url. Configure image with options: `imageCategory`, `imageWidth`, `imageHeight` and `randomizeImageUrl` */
  ImageUrl = 'imageUrl',
  InternationalBankAccountNumber = 'internationalBankAccountNumber',
  Ipv4Address = 'ipv4Address',
  Ipv6Address = 'ipv6Address',
  JobTitle = 'jobTitle',
  LastName = 'lastName',
  Latitude = 'latitude',
  Locale = 'locale',
  Longitude = 'longitude',
  /** Lorem Ipsum text. Configure size with option `loremSize` */
  Lorem = 'lorem',
  MacAddress = 'macAddress',
  MimeType = 'mimeType',
  /** Sum of money. Configure with options `minMoney`/`maxMoney` and 'decimalPlaces'. */
  Money = 'money',
  Number = 'number',
  /** Configure password with option `passwordLength` */
  Password = 'password',
  /** Configure date format with option `dateFormat` */
  PastDate = 'pastDate',
  PhoneNumber = 'phoneNumber',
  Product = 'product',
  ProductCategory = 'productCategory',
  ProductMaterial = 'productMaterial',
  ProductName = 'productName',
  /** Configure date format with option `dateFormat` */
  RecentDate = 'recentDate',
  SecondaryAddress = 'secondaryAddress',
  Semver = 'semver',
  State = 'state',
  StateAbbr = 'stateAbbr',
  /** Configure address with option `useFullAddress` */
  StreetAddress = 'streetAddress',
  StreetName = 'streetName',
  Url = 'url',
  UserAgent = 'userAgent',
  Uuid = 'uuid',
  Word = 'word',
  Words = 'words',
  ZipCode = 'zipCode'
}

export type Fake__Color = {
  blue255?: InputMaybe<Scalars['Int']>;
  green255?: InputMaybe<Scalars['Int']>;
  red255?: InputMaybe<Scalars['Int']>;
};

export type Fake__ImageSize = {
  height: Scalars['Int'];
  width: Scalars['Int'];
};

export enum Fake__LoremSize {
  Paragraph = 'paragraph',
  Paragraphs = 'paragraphs',
  Sentence = 'sentence',
  Sentences = 'sentences',
  Word = 'word',
  Words = 'words'
}

export type Fake__Options = {
  /** Only for type `colorHex`. [Details here](https://stackoverflow.com/a/43235/4989887) */
  baseColor?: InputMaybe<Fake__Color>;
  /** Only for types `*Date`. Example value: `YYYY MM DD`. [Full Specification](http://momentjs.com/docs/#/displaying/format/) */
  dateFormat?: InputMaybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `1986-11-02`. */
  dateFrom?: InputMaybe<Scalars['String']>;
  /** Only for types `betweenDate`. Example value: `2038-01-19`. */
  dateTo?: InputMaybe<Scalars['String']>;
  /** Only for type `money` */
  decimalPlaces?: InputMaybe<Scalars['Int']>;
  /** Only for type `email` */
  emailProvider?: InputMaybe<Scalars['String']>;
  /** Only for type `imageUrl`. Example value: `["nature", "water"]`. */
  imageKeywords?: InputMaybe<Array<Scalars['String']>>;
  /** Only for type `imageUrl` */
  imageSize?: InputMaybe<Fake__ImageSize>;
  /** Only for type `lorem` */
  loremSize?: InputMaybe<Fake__LoremSize>;
  /** Only for type `money` */
  maxMoney?: InputMaybe<Scalars['Float']>;
  /** Only for type `number` */
  maxNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `money` */
  minMoney?: InputMaybe<Scalars['Float']>;
  /** Only for type `number` */
  minNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `password` */
  passwordLength?: InputMaybe<Scalars['Int']>;
  /** Only for type `number` */
  precisionNumber?: InputMaybe<Scalars['Float']>;
  /** Only for type `imageUrl` */
  randomizeImageUrl?: InputMaybe<Scalars['Boolean']>;
  /** Only for type `streetAddress` */
  useFullAddress?: InputMaybe<Scalars['Boolean']>;
};

export type AddressFieldsFragment = { __typename?: 'Address', address?: string | null, city?: string | null };

export type PersonFieldsFragment = { __typename?: 'Person', name?: string | null, address?: { __typename?: 'Address', address?: string | null, city?: string | null } | null };

export type CompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type CompanyQuery = { __typename?: 'Query', company?: { __typename?: 'Company', name?: string | null, address?: { __typename?: 'Address', address?: string | null, city?: string | null } | null, employees?: Array<{ __typename?: 'Person', name?: string | null, address?: { __typename?: 'Address', address?: string | null, city?: string | null } | null } | null> | null } | null };

export const AddressFieldsFragmentDoc = /*#__PURE__*/ `
    fragment addressFields on Address {
  address
  city
}
    `;
export const PersonFieldsFragmentDoc = /*#__PURE__*/ `
    fragment personFields on Person {
  name
  address {
    ...addressFields
  }
}
    ${AddressFieldsFragmentDoc}`;
export const CompanyDocument = /*#__PURE__*/ `
    query company {
  company {
    name
    address {
      ...addressFields
    }
    employees {
      ...personFields
    }
  }
}
    ${AddressFieldsFragmentDoc}
${PersonFieldsFragmentDoc}`;
export const useCompanyQuery = <
      TData = CompanyQuery,
      TError = unknown
    >(
      variables?: CompanyQueryVariables,
      options?: UseQueryOptions<CompanyQuery, TError, TData>
    ) =>
    useQuery<CompanyQuery, TError, TData>(
      variables === undefined ? ['company'] : ['company', variables],
      useFetchData<CompanyQuery, CompanyQueryVariables>(CompanyDocument).bind(null, variables),
      options
    );
