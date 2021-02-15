import * as coreHttp from '@azure/core-http';

export interface CreateBlockModel {
  /**
   * ID of the group that reserved the block
   */
  groupId: string;
  /**
   * The rate plan
   */
  ratePlanId: string;
  /**
   * Start date and time from which the inventory will be blocked<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: string;
  /**
   * End date and time until which the inventory will be blocked. Cannot be more than 5 years after the start date.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: string;
  grossDailyRate: MonetaryValueModel;
  /**
   * The list of blocked units for each time slice
   */
  timeSlices?: CreateBlockTimeSliceModel[];
  /**
   * Number of units to block for the defined time period
   */
  blockedUnits?: number;
  /**
   * The promo code associated with a certain special offer
   */
  promoCode?: string;
  /**
   * The corporate code associated with a certain special offer
   */
  corporateCode?: string;
}

export interface MonetaryValueModel {
  amount: number;
  currency: string;
}

export interface CreateBlockTimeSliceModel {
  /**
   * Number of units blocked for the time slice
   */
  blockedUnits: number;
}

export interface BlockCreatedModel {
  /**
   * Block id
   */
  id: string;
}

export interface MessageItemCollection {
  /**
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly messages?: string[];
}

export interface BlockListModel {
  /**
   * List of blocks
   */
  blocks: BlockItemModel[];
  /**
   * Total count of items
   */
  count: number;
}

export interface BlockItemModel {
  /**
   * Block id
   */
  id: string;
  group: EmbeddedGroupModel;
  /**
   * Status of the block
   */
  status: BlockStatus;
  property: EmbeddedPropertyModel;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  grossDailyRate: MonetaryValueModel;
  /**
   * Start date and time from which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * End date and time until which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * Number of reservations already picked from this block
   */
  pickedReservations: number;
  /**
   * The promo code associated with a certain special offer used to create the block
   */
  promoCode?: string;
  /**
   * The corporate code associated with a certain special offer used to create the block
   */
  corporateCode?: string;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * The list of blocked units for each time slice
   */
  timeSlices?: BlockTimeSliceModel[];
  /**
   * The list of actions for this block
   */
  actions?: ActionModelBlockActionNotAllowedBlockActionReason[];
}

export interface EmbeddedGroupModel {
  /**
   * Group booking id
   */
  id: string;
  /**
   * Name of the group
   */
  name?: string;
}

export interface EmbeddedPropertyModel {
  /**
   * The property id
   */
  id: string;
  /**
   * The code for the property that can be shown in reports and table views
   */
  code?: string;
  /**
   * The name for the property
   */
  name?: string;
  /**
   * The description for the property
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
}

export interface EmbeddedRatePlanModel {
  /**
   * The rate plan id
   */
  id: string;
  /**
   * The code for the rate plan that can be shown in reports and table views
   */
  code?: string;
  /**
   * The name for the rate plan
   */
  name?: string;
  /**
   * The description for the rate plan
   */
  description?: string;
  /**
   * Whether the rate plan is subject to city tax or not
   */
  isSubjectToCityTax: boolean;
}

export interface EmbeddedUnitGroupModel {
  /**
   * The unit group id
   */
  id: string;
  /**
   * The code for the unit group that can be shown in reports and table views
   */
  code?: string;
  /**
   * The name for the unit group
   */
  name?: string;
  /**
   * The description for the unit group
   */
  description?: string;
}

export interface BlockTimeSliceModel {
  /**
   * Start date and time from which units will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * End date and time until which units will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * Number of units blocked for this time slice
   */
  blockedUnits: number;
  /**
   * Number of units which have picked reservations for this time slice
   */
  pickedUnits: number;
  baseAmount: AmountModel;
  totalGrossAmount: MonetaryValueModel;
}

export interface AmountModel {
  grossAmount: number;
  netAmount: number;
  vatType: VatType;
  vatPercent: number;
  currency: string;
}

export interface ActionModelBlockActionNotAllowedBlockActionReason {
  action: BlockAction;
  isAllowed: boolean;
  reasons?: ActionReasonModelNotAllowedBlockActionReason[];
}

export interface ActionReasonModelNotAllowedBlockActionReason {
  code: NotAllowedBlockActionReason;
  message: string;
}

export interface CountModel {
  count: number;
}

export interface BlockModel {
  /**
   * Block id
   */
  id: string;
  group: EmbeddedGroupModel;
  /**
   * Status of the block. Tentative will just mark inventory as requested, but still allows to sell it
   * through other channels. Definite will block the inventory for selling through other channels
   */
  status: BlockStatus;
  property: EmbeddedPropertyModel;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  grossDailyRate: MonetaryValueModel;
  /**
   * Start date and time from which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * End date and time until which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * Number of reservations already picked from this block
   */
  pickedReservations: number;
  /**
   * The promo code associated with a certain special offer used to create the block
   */
  promoCode?: string;
  /**
   * The corporate code associated with a certain special offer used to create the block
   */
  corporateCode?: string;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * The list of time slices for this block
   */
  timeSlices?: BlockTimeSliceModel[];
  /**
   * The list of actions for this block
   */
  actions?: ActionModelBlockActionNotAllowedBlockActionReason[];
}

export interface Operation {
  /**
   * Any object
   */
  value?: any;
  path?: string;
  op?: string;
  from?: string;
}

/**
 * With this request you can create a booking
 */
export interface CreateBookingModel {
  paymentAccount?: CreatePaymentAccountModel;
  booker: BookerModel;
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comments by the booker
   */
  bookerComment?: string;
  /**
   * List of reservations to create
   */
  reservations: CreateReservationModel[];
}

export interface CreatePaymentAccountModel {
  /**
   * The account number (e.g. masked credit card number or last 4 digits)
   */
  accountNumber: string;
  /**
   * The account holder (e.g. card holder)
   */
  accountHolder: string;
  /**
   * The credit card's expiration month
   */
  expiryMonth: string;
  /**
   * The credit card's expiration year
   */
  expiryYear: string;
  /**
   * The payment method (e.g. visa)
   */
  paymentMethod: string;
  /**
   * The email address of the shopper / customer
   */
  payerEmail?: string;
  /**
   * The reference used to uniquely identify the shopper (e.g. user ID or account ID). Used for recurring payments
   */
  payerReference?: string;
  /**
   * The reference of a payment transaction. This should be set when a payment transaction has been already initiated and should be completed upon reservation creation.
   */
  transactionReference?: string;
  /**
   * Indicates if the payment account is a virtual credit card. If not specified it defaults to 'false'
   */
  isVirtual?: boolean;
}

export interface BookerModel {
  /**
   * Title of the booker
   */
  title?: PersonTitle;
  /**
   * Gender of the booker
   */
  gender?: Gender;
  /**
   * First name of the booker
   */
  firstName?: string;
  /**
   * Middle initial of the booker
   */
  middleInitial?: string;
  /**
   * Last name of the booker
   */
  lastName: string;
  /**
   * Email address of the booker
   */
  email?: string;
  /**
   * Phone number of the booker
   */
  phone?: string;
  address?: PersonAddressModel;
  /**
   * The booker's nationality, in ISO 3166-1 alpha-2 code
   */
  nationalityCountryCode?: string;
  /**
   * The booker's identification number for the given identificationType.
   */
  identificationNumber?: string;
  /**
   * The issue date of the booker's identification document.
   */
  identificationIssueDate?: Date;
  /**
   * The type of the identificationNumber
   */
  identificationType?: IdentificationType;
  company?: PersonCompanyModel;
  /**
   * Preferred contact two-letter language code (ISO Alpha-2)
   */
  preferredLanguage?: string;
  /**
   * Birth date
   */
  birthDate?: Date;
  /**
   * The place of birth
   */
  birthPlace?: string;
}

export interface PersonAddressModel {
  addressLine1?: string;
  addressLine2?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
}

export interface PersonCompanyModel {
  /**
   * Name of the company
   */
  name?: string;
  /**
   * Tax or Vat ID of the company
   */
  taxId?: string;
}

/**
 * With this request you can create a reservation
 */
export interface CreateReservationModel {
  /**
   * Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: string;
  /**
   * Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: string;
  /**
   * Number of adults
   */
  adults: number;
  /**
   * Ages of the children
   */
  childrenAges?: number[];
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comments by the guest
   */
  guestComment?: string;
  /**
   * Code in some system
   */
  externalCode?: string;
  /**
   * Channel code
   */
  channelCode: ChannelCode;
  /**
   * Source of the reservation
   */
  source?: string;
  primaryGuest?: GuestModel;
  /**
   * Additional guests of the reservation.
   */
  additionalGuests?: GuestModel[];
  /**
   * The guarantee that has to be applied for this reservation. It has to be the same or stronger than
   * the minimum guarantee required by the selected rate plan
   */
  guaranteeType?: MinGuaranteeType;
  /**
   * Purpose of the trip, leisure or business
   */
  travelPurpose?: TravelPurpose;
  /**
   * Gross prices including services and taxes for each time slice. They will be applied to the reservation timeslices
   * in the order specified from arrival to departure
   */
  timeSlices: CreateReservationTimeSliceModel[];
  /**
   * Additional services (extras, add-ons) that should be added to the reservation
   */
  services?: BookReservationServiceModel[];
  /**
   * Set this if this reservation belongs to a company
   */
  companyId?: string;
  /**
   * Corporate code provided during creation. Used to find offers during amend.
   */
  corporateCode?: string;
  prePaymentAmount?: MonetaryValueModel;
  commission?: CommissionModel;
  /**
   * The promo code associated with a certain special offer
   */
  promoCode?: string;
}

export interface GuestModel {
  /**
   * Title of the guest
   */
  title?: PersonTitle;
  /**
   * Gender of the booker
   */
  gender?: Gender;
  /**
   * First name of the guest
   */
  firstName?: string;
  /**
   * Middle initial of the guest
   */
  middleInitial?: string;
  /**
   * Last name of the guest
   */
  lastName: string;
  /**
   * Email address of the guest
   */
  email?: string;
  /**
   * Phone number of the guest
   */
  phone?: string;
  address?: PersonAddressModel;
  /**
   * The guest's nationality, in ISO 3166-1 alpha-2 code
   */
  nationalityCountryCode?: string;
  /**
   * The guest's identification number for the given identificationType.
   */
  identificationNumber?: string;
  /**
   * The issue date of the guest's identification document.
   */
  identificationIssueDate?: Date;
  /**
   * The type of the identificationNumber
   */
  identificationType?: IdentificationType;
  company?: PersonCompanyModel;
  /**
   * Two-letter code (ISO Alpha-2) of a language preferred for contact
   */
  preferredLanguage?: string;
  /**
   * Guest's birthdate
   */
  birthDate?: Date;
  /**
   * Guest's place of birth
   */
  birthPlace?: string;
}

export interface CreateReservationTimeSliceModel {
  /**
   * The rate plan id for this time slice
   */
  ratePlanId: string;
  totalAmount?: MonetaryValueModel;
}

export interface BookReservationServiceModel {
  /**
   * The id of the service you want to book
   */
  serviceId: string;
  /**
   * The number of services to book for each service date. It defaults to the service offer count when not specified.
   */
  count?: number;
  amount?: MonetaryValueModel;
  /**
   * The optional dates you want to book the service for; if not specified the default service pattern will be used (e.g. whole stay).
   */
  dates?: DateModel[];
}

export interface DateModel {
  /**
   * The date the service is delivered
   */
  serviceDate: Date;
  /**
   * The number of services to book for this date. It defaults to the service offer count when not specified.
   */
  count?: number;
  amount?: MonetaryValueModel;
}

export interface CommissionModel {
  commissionAmount: MonetaryValueModel;
  beforeCommissionAmount?: MonetaryValueModel;
}

export interface BookingCreatedModel {
  /**
   * Booking id
   */
  id: string;
  /**
   * List of ids for newly created reservations
   */
  reservationIds: ReservationCreatedModel[];
}

export interface ReservationCreatedModel {
  /**
   * Id of the reservation
   */
  id: string;
}

export interface BookingListModel {
  bookings: BookingItemModel[];
  /**
   * Total count of items
   */
  count: number;
}

/**
 * A booking holds all shared metadata for a set of reservations
 */
export interface BookingItemModel {
  /**
   * Booking id
   */
  id: string;
  /**
   * Group id
   */
  groupId?: string;
  booker?: BookerModel;
  paymentAccount?: PaymentAccountModel;
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the booker
   */
  bookerComment?: string;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * Reservations within this booking
   */
  reservations?: BookingReservationModel[];
}

export interface PaymentAccountModel {
  /**
   * The account number (e.g. masked credit card number or last 4 digits)
   */
  accountNumber: string;
  /**
   * The account holder (e.g. card holder)
   */
  accountHolder: string;
  /**
   * The credit card's expiration month
   */
  expiryMonth: string;
  /**
   * The credit card's expiration year
   */
  expiryYear: string;
  /**
   * The payment method (e.g. visa)
   */
  paymentMethod: string;
  /**
   * The email address of the shopper / customer
   */
  payerEmail?: string;
  /**
   * The payer reference. It is used to make recurring captures and its usage is allowed only in the scope of the booking.
   * For the reason above this is a write-only field.
   */
  payerReference?: string;
  /**
   * Indicates if the payment account is a virtual credit card. If not specified it defaults to 'false'
   */
  isVirtual?: boolean;
  /**
   * Indicates if the payment account can be used for capturing payments. A payment account is active, when it has a valid payer reference set
   */
  isActive: boolean;
}

export interface BookingReservationModel {
  /**
   * Reservation id
   */
  id: string;
  /**
   * Status of the reservation
   */
  status: ReservationStatus;
  /**
   * Code in external system
   */
  externalCode?: string;
  /**
   * Channel code
   */
  channelCode: ChannelCode;
  /**
   * Source of the reservation (e.g Hotels.com, Orbitz, etc.)
   */
  source?: string;
  paymentAccount?: PaymentAccountModel;
  /**
   * Date of arrival<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: Date;
  /**
   * Date of departure<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: Date;
  /**
   * Number of adults
   */
  adults: number;
  /**
   * The ages of the children
   */
  childrenAges?: number[];
  totalGrossAmount: MonetaryValueModel;
  property: EmbeddedPropertyModel;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  /**
   * The list of additional services (extras, add-ons) reserved for the stay
   */
  services?: ReservationServiceItemModel[];
  /**
   * Additional information and comment by the guest
   */
  guestComment?: string;
  cancellationFee: ReservationCancellationFeeModel;
  company?: EmbeddedCompanyModel;
}

export interface ReservationServiceItemModel {
  service: ServiceModel;
  totalAmount: AmountModel;
  /**
   * The dates the service will be delivered with its price
   */
  dates: ServiceDateItemModel[];
}

export interface ServiceModel {
  /**
   * The service id
   */
  id: string;
  /**
   * The code for the service
   */
  code: string;
  /**
   * The name for the service
   */
  name: string;
  /**
   * The description for the service
   */
  description: string;
  /**
   * Defines the granularity (room, person) for which this item is offered and priced
   */
  pricingUnit: PricedUnit;
  defaultGrossPrice: MonetaryValueModel;
}

export interface ServiceDateItemModel {
  /**
   * The date this service is delivered
   */
  serviceDate: Date;
  /**
   * The count of booked services
   */
  count: number;
  amount: AmountModel;
  /**
   * Rate plans can have additional services. When booking an offer for such rate plans, those services are automatically booked.
   * They are marked as mandatory and they cannot be removed.
   */
  isMandatory: boolean;
}

export interface ReservationCancellationFeeModel {
  /**
   * The id of the cancellation policy applied
   */
  id: string;
  /**
   * The code of the cancellation policy applied
   */
  code: string;
  /**
   * The name of the cancellation policy applied
   */
  name: string;
  /**
   * The description of the cancellation policy applied
   */
  description: string;
  /**
   * The date and time the cancellation fee will be due. After that time this fee will
   * be charged in case of cancellation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  dueDateTime: Date;
  fee: MonetaryValueModel;
}

export interface EmbeddedCompanyModel {
  /**
   * The company ID
   */
  id: string;
  /**
   * The code of the company
   */
  code?: string;
  /**
   * The name of the company
   */
  name?: string;
  /**
   * Whether or not the company can check out on AR
   */
  canCheckOutOnAr?: boolean;
}

/**
 * With this request you can add reservations to an existing booking
 */
export interface AddReservationsModel {
  /**
   * List of reservations to add to the existing booking
   */
  reservations: CreateReservationModel[];
}

export interface ReservationsCreatedModel {
  /**
   * List of ids for newly created reservations
   */
  reservationIds: ReservationCreatedModel[];
}

/**
 * A booking holds all shared metadata for a set of reservations
 */
export interface BookingModel {
  /**
   * Booking id
   */
  id: string;
  /**
   * Group id
   */
  groupId?: string;
  booker?: BookerModel;
  paymentAccount?: PaymentAccountModel;
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the booker
   */
  bookerComment?: string;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * Property specific values like total amount and balance
   */
  propertyValues?: PropertyValueModel[];
  /**
   * Reservations within this booking
   */
  reservations?: BookingReservationModel[];
}

export interface PropertyValueModel {
  property: EmbeddedPropertyModel;
  totalGrossAmount: MonetaryValueModel;
  balance: MonetaryValueModel;
}

/**
 * With this request you can create a group booking request
 */
export interface CreateGroupModel {
  /**
   * Name of the group
   */
  name: string;
  booker: BookerModel;
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the booker
   */
  bookerComment?: string;
  paymentAccount?: CreatePaymentAccountModel;
  /**
   * List of property ids the group booking belongs to
   */
  propertyIds: string[];
}

export interface GroupCreatedModel {
  /**
   * Id of newly created group booking
   */
  id: string;
}

export interface GroupListModel {
  groups: GroupItemModel[];
  /**
   * Total count of items
   */
  count: number;
}

export interface GroupItemModel {
  /**
   * Group id
   */
  id: string;
  /**
   * Start date and time of the earliest block for this group<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from?: Date;
  /**
   * End date and time of the latest block for this group<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  /**
   * Name of the group
   */
  name: string;
  booker?: BookerModel;
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the booker
   */
  bookerComment?: string;
  paymentAccount?: PaymentAccountModel;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * Blocks within this group
   */
  blocks?: GroupBlockModel[];
  /**
   * The list of actions for this group
   */
  actions?: ActionModelGroupActionNotAllowedGroupActionReason[];
  /**
   * The list of property ids this group belongs to
   */
  propertyIds: string[];
}

export interface GroupBlockModel {
  /**
   * Block id
   */
  id: string;
  /**
   * Status of the block
   */
  status: BlockStatus;
  property: EmbeddedPropertyModel;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  grossDailyRate: MonetaryValueModel;
  /**
   * Start date and time from which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * End date and time until which the inventory will be blocked<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * Number of units blocked
   */
  blockedUnits: number;
  /**
   * Number of reservations already picked from this block
   */
  pickedReservations: number;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
}

export interface ActionModelGroupActionNotAllowedGroupActionReason {
  action: 'Delete';
  isAllowed: boolean;
  reasons?: ActionReasonModelNotAllowedGroupActionReason[];
}

export interface ActionReasonModelNotAllowedGroupActionReason {
  code: 'DeleteNotAllowedForGroupWithBlocks';
  message: string;
}

export interface GroupModel {
  /**
   * Group id
   */
  id: string;
  /**
   * Name of the group
   */
  name: string;
  /**
   * Start date and time of the earliest block for this group<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from?: Date;
  /**
   * End date and time of the latest block for this group<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  booker?: BookerModel;
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the booker
   */
  bookerComment?: string;
  paymentAccount?: PaymentAccountModel;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * Blocks within this group
   */
  blocks?: GroupBlockModel[];
  /**
   * The list of actions for this group
   */
  actions?: ActionModelGroupActionNotAllowedGroupActionReason[];
  /**
   * The list of property ids this group belongs to
   */
  propertyIds: string[];
}

/**
 * With this request you can pick up reservations to an existing group booking
 */
export interface PickUpReservationsModel {
  /**
   * List of reservations to pick up to the existing group booking
   */
  reservations: PickUpReservationModel[];
}

/**
 * With this request you can pick up a reservation
 */
export interface PickUpReservationModel {
  /**
   * ID of the block
   */
  blockId: string;
  /**
   * Additional services (extras, add-ons) that should be added to the reservation
   */
  services?: BookReservationServiceModel[];
  /**
   * Date of arrival and the optional time with UTC offset<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: string;
  /**
   * Date of departure and the optional time with UTC offset<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: string;
  /**
   * Number of adults
   */
  adults: number;
  /**
   * The ages of the children
   */
  childrenAges?: number[];
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the guest
   */
  guestComment?: string;
  primaryGuest?: GuestModel;
  /**
   * Additional guests of the reservation.
   */
  additionalGuests?: GuestModel[];
  /**
   * The purpose of the trip, leisure or business
   */
  travelPurpose?: TravelPurpose;
}

export interface StayOffersModel {
  property: EmbeddedPropertyModel;
  /**
   * List of offered unit groups with rates
   */
  offers: OfferModel[];
}

export interface OfferModel {
  /**
   * The earliest arrival date and time for this offer<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: Date;
  /**
   * The latest departure date and time for this offer<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: Date;
  unitGroup: OfferUnitGroupModel;
  /**
   * The minimum guarantee type for this offer
   */
  minGuaranteeType: MinGuaranteeType;
  /**
   * The number of available units for that offer
   */
  availableUnits: number;
  ratePlan: EmbeddedRatePlanModel;
  totalGrossAmount: MonetaryValueModel;
  cancellationFee: OfferCancellationFeeModel;
  noShowFee: OfferNoShowFeeModel;
  /**
   * The breakdown for each time slice for this offer
   */
  timeSlices: OfferTimeSliceModel[];
  /**
   * The list of the mandatory services for this offer. Such services will be automatically booked when booking this offer
   */
  services?: ServiceOfferModel[];
  /**
   * The details of the fees that will be added on top of the Apaleo.Api.Modules.Booking.Models.Offer.StayOffer.OfferModel.TotalGrossAmount when creating the booking
   */
  fees?: OfferFeeModel[];
  /**
   * Tax breakdown, displaying net and tax amount for each VAT type
   */
  taxDetails: TaxDetailModel[];
  /**
   * Validation rules that were applied to the offer and show the reason why the offer is not bookable
   */
  validationMessages?: OfferValidationMessageModel[];
  /**
   * ID of the company the offer is created for
   */
  companyId?: string;
  /**
   * The corporate rate code the offer is created for
   */
  corporateCode?: string;
  /**
   * Whether the offer is for a corporate rate plan
   */
  isCorporate: boolean;
  prePaymentAmount: MonetaryValueModel;
  cityTax?: AmountModel;
}

export interface OfferUnitGroupModel {
  /**
   * The unit group id
   */
  id: string;
  /**
   * The code for the unit group that can be shown in reports and table views
   */
  code: string;
  /**
   * The name for the unit group
   */
  name: string;
  /**
   * The description for the unit group
   */
  description: string;
  /**
   * Maximum number of persons for the unit group
   */
  maxPersons: number;
  /**
   * The unit group rank
   */
  rank?: number;
}

export interface OfferCancellationFeeModel {
  /**
   * The code of the cancellation policy applied
   */
  code: string;
  /**
   * The name of the cancellation policy applied
   */
  name: string;
  /**
   * The description of the cancellation policy applied
   */
  description: string;
  /**
   * The date and time the cancellation fee will be due. After that time this fee will
   * be charged in case of cancellation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  dueDateTime: Date;
  fee: MonetaryValueModel;
}

export interface OfferNoShowFeeModel {
  /**
   * The code of the no-show policy applied
   */
  code: string;
  fee: MonetaryValueModel;
}

export interface OfferTimeSliceModel {
  /**
   * The start date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * The end date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * The number of available units for that time slice
   */
  availableUnits: number;
  baseAmount: AmountModel;
  totalGrossAmount: MonetaryValueModel;
  /**
   * The breakdown for services included in the offer
   */
  includedServices?: OfferServiceModel[];
}

export interface OfferServiceModel {
  service: EmbeddedServiceModel;
  /**
   * The date this service is delivered
   */
  serviceDate: Date;
  /**
   * The default count of offered services. For services whose pricing unit is 'Person' it will be based on the adults and children specified, otherwise 1.
   */
  count: number;
  amount: AmountModel;
  /**
   * Whether the service price is included in or added to the base rate
   */
  pricingMode: PricingMode;
}

export interface EmbeddedServiceModel {
  /**
   * The service id
   */
  id: string;
  /**
   * The code for the service
   */
  code?: string;
  /**
   * The name for the service
   */
  name?: string;
  /**
   * The description for the service
   */
  description?: string;
}

export interface ServiceOfferModel {
  service: ServiceModel;
  /**
   * The default count of offered services. For services whose pricing unit is 'Person' it will be based on the adults and children specified, otherwise 1.
   */
  count: number;
  totalAmount: AmountModel;
  prePaymentAmount: MonetaryValueModel;
  /**
   * The details of the fees that will be added on top of the Apaleo.Api.Modules.Booking.Models.Offer.ServiceOffer.ServiceOfferModel.TotalAmount when booking the service
   */
  fees?: OfferFeeModel[];
  /**
   * The dates the service will be delivered with its price
   */
  dates: ServiceOfferItemModel[];
}

export interface OfferFeeModel {
  /**
   * The fee id
   */
  id: string;
  /**
   * The code for the fee
   */
  code: string;
  /**
   * The name for the fee
   */
  name: string;
  totalAmount: AmountModel;
}

export interface ServiceOfferItemModel {
  /**
   * The date this service is delivered
   */
  serviceDate: Date;
  amount: AmountModel;
  /**
   * Depending on the postNextDay setting of the service it will by default be posted before or after midnight.
   * Breakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day
   * are default dates and will have this flag set to true. Those are also the dates the service will be booked for if
   * you do not specify dates in the book-service call. Still, you can override this and also book the dates set to IsDefaultDate = false.
   */
  isDefaultDate: boolean;
  /**
   * Rate plans can have additional services. When booking an offer for such rate plans, those services are automatically booked.
   * They are marked as mandatory and they cannot be removed.
   */
  isMandatory: boolean;
}

export interface TaxDetailModel {
  vatType: VatType;
  vatPercent: number;
  net: MonetaryValueModel;
  tax: MonetaryValueModel;
}

export interface OfferValidationMessageModel {
  /**
   * The message Code
   */
  code: OfferValidationMessageCode;
  /**
   * The message description
   */
  message: string;
}

export interface ServiceOffersModel {
  services: ServiceOfferModel[];
}

export interface TimeSliceListModel {
  /**
   * List of time slices
   */
  timeSlices?: TimeSliceItemModel[];
  /**
   * Total count of items
   */
  count: number;
}

export interface TimeSliceItemModel {
  /**
   * Date and time the time slice begins<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * Date and time the time slice ends<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * List of offers for this time slice
   */
  offers?: TimeSliceOfferItemModel[];
}

export interface TimeSliceOfferItemModel {
  unitGroup: EmbeddedUnitGroupModel;
  /**
   * The minimum guarantee type for the offer
   */
  minGuaranteeType?: GuaranteeType;
  minAdvance?: PeriodModel;
  maxAdvance?: PeriodModel;
  /**
   * The number of available units for the offer
   */
  available: number;
  restrictions?: RateRestrictionsModel;
  /**
   * The prices for this offer
   */
  prices?: PerOccupancyPriceItemModel[];
}

export interface PeriodModel {
  /**
   * The number of hours within the period
   */
  hours?: number;
  /**
   * The number of days within the period
   */
  days?: number;
  /**
   * The number of months within the period
   */
  months?: number;
}

export interface RateRestrictionsModel {
  /**
   * The minimum length of stay in order to book the rate. If at least this number
   * of time slices are covered by the stay duration the rate will be offered.
   */
  minLengthOfStay?: number;
  /**
   * The maximum length of stay in order to book the rate. If not more than this number
   * of time slices are covered by the stay duration the rate will be offered.
   */
  maxLengthOfStay?: number;
  /**
   * Whether the rate can be booked for a stay-through reservation
   */
  closed: boolean;
  /**
   * Whether the rate can be booked on the reservation's arrival date
   */
  closedOnArrival: boolean;
  /**
   * Whether the rate can be booked on the reservation's departure date
   */
  closedOnDeparture: boolean;
}

export interface PerOccupancyPriceItemModel {
  /**
   * Number of adults
   */
  adults: number;
  price: PriceModel;
}

export interface PriceModel {
  /**
   * Price including all included services and VAT - <b>DEPRECATED: This field will be removed soon, use BeforeTax + Taxes.Tax instead</b>
   */
  grossAmount: number;
  /**
   * Price including all included services without VAT or any other taxes like city tax
   */
  beforeTax: number;
  /**
   * Price including all included services, VAT and any other taxes like city tax
   */
  afterTax: number;
  taxes: TaxesModel;
  /**
   * The currency for all prices and tax details
   */
  currency: string;
}

export interface TaxesModel {
  /**
   * The amount of taxes, which are VAT or Sales Taxes depending on the country of the property
   */
  tax: number;
  /**
   * The amount of City Tax including VAT
   */
  cityTax: number;
}

export interface ReservationListModel {
  /**
   * List of reservations
   */
  reservations: ReservationItemModel[];
  /**
   * Total count of items
   */
  count: number;
}

export interface ReservationItemModel {
  /**
   * Reservation id
   */
  id: string;
  /**
   * Booking id
   */
  bookingId: string;
  /**
   * Block id
   */
  blockId?: string;
  /**
   * Name of the group
   */
  groupName?: string;
  /**
   * Status of the reservation
   */
  status: ReservationStatus;
  /**
   * Time of check-in<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  checkInTime?: Date;
  /**
   * Time of check-out<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  checkOutTime?: Date;
  /**
   * Time of cancellation, if the reservation was canceled<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  cancellationTime?: Date;
  /**
   * Time of setting no-show reservation status<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  noShowTime?: Date;
  property: EmbeddedPropertyModel;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  unit?: EmbeddedUnitModel;
  totalGrossAmount: MonetaryValueModel;
  /**
   * Date of arrival<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: Date;
  /**
   * Date of departure<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: Date;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * Number of adults
   */
  adults: number;
  /**
   * The ages of the children
   */
  childrenAges?: number[];
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the guest
   */
  guestComment?: string;
  /**
   * Code in external system
   */
  externalCode?: string;
  /**
   * Channel code
   */
  channelCode: ChannelCode;
  /**
   * Source of the reservation (e.g Hotels.com, Orbitz, etc.)
   */
  source?: string;
  primaryGuest?: GuestModel;
  /**
   * Additional guests of the reservation.
   */
  additionalGuests?: GuestModel[];
  booker?: BookerModel;
  paymentAccount?: PaymentAccountModel;
  /**
   * The strongest guarantee for the rate plans booked in this reservation
   */
  guaranteeType: GuaranteeType;
  cancellationFee: ReservationCancellationFeeModel;
  noShowFee: ReservationNoShowFeeModel;
  /**
   * The purpose of the trip, leisure or business
   */
  travelPurpose?: TravelPurpose;
  balance: MonetaryValueModel;
  /**
   * The list of units assigned to this reservation
   */
  assignedUnits?: ReservationAssignedUnitModel[];
  /**
   * The list of time slices with the reserved units / unit groups for the stay
   */
  timeSlices?: TimeSliceModel[];
  /**
   * The list of additional services (extras, add-ons) reserved for the stay
   */
  services?: ReservationServiceItemModel[];
  /**
   * Validation rules are applied to reservations during their lifetime.
   * For example a reservation that was created while the house or unit group is already fully booked.
   * Whenever a rule was or is currently violated, a validation message will be added to this list.
   * They can be deleted whenever the hotel staff worked them off.
   */
  validationMessages?: ReservationValidationMessageModel[];
  /**
   * The list of actions for this reservation
   */
  actions?: ActionModelReservationActionNotAllowedReservationActionReason[];
  company?: EmbeddedCompanyModel;
  /**
   * Corporate code provided during creation. Used to find offers during amend.
   */
  corporateCode?: string;
  /**
   * Whether all folios of a reservation have an invoice
   */
  allFoliosHaveInvoice?: boolean;
  /**
   * Whether the city tax has already been added to the reservation. Set to false, if the property does not have city tax configured
   */
  hasCityTax: boolean;
  commission?: CommissionModel;
  /**
   * The promo code associated with a certain special offer used to create the reservation
   */
  promoCode?: string;
}

export interface EmbeddedUnitModel {
  /**
   * The unit id
   */
  id: string;
  /**
   * The name for the unit
   */
  name?: string;
  /**
   * The description for the unit
   */
  description?: string;
  /**
   * The unit group id
   */
  unitGroupId?: string;
}

export interface ReservationNoShowFeeModel {
  /**
   * The id of the no-show policy applied
   */
  id: string;
  /**
   * The code of the no-show policy applied
   */
  code: string;
  fee: MonetaryValueModel;
}

export interface ReservationAssignedUnitModel {
  unit: EmbeddedUnitModel;
  /**
   * The time ranges for which the unit is assigned to the reservation
   */
  timeRanges: ReservationAssignedUnitTimeRangeModel[];
}

export interface ReservationAssignedUnitTimeRangeModel {
  /**
   * The start date and time of the period for which the unit is assigned to the reservation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * The end date and time of the period for which the unit is assigned to the reservation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
}

export interface TimeSliceModel {
  /**
   * The start date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * The end date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  /**
   * The service date for this time slice
   */
  serviceDate: Date;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  unit?: EmbeddedUnitModel;
  baseAmount: AmountModel;
  totalGrossAmount: MonetaryValueModel;
  /**
   * The list of services included in the rate plan (package elements)
   */
  includedServices?: ReservationServiceModel[];
  /**
   * The list of actions allowed for this time slice
   */
  actions?: ActionModelReservationTimeSliceActionNotAllowedReservationTimeSliceActionReason[];
}

export interface ReservationServiceModel {
  service: EmbeddedServiceModel;
  /**
   * The date this service is delivered
   */
  serviceDate: Date;
  /**
   * The count of booked services
   */
  count: number;
  amount: AmountModel;
  /**
   * Whether this service is already booked as extra
   */
  bookedAsExtra: boolean;
}

export interface ActionModelReservationTimeSliceActionNotAllowedReservationTimeSliceActionReason {
  action: 'Amend';
  isAllowed: boolean;
  reasons?: ActionReasonModelNotAllowedReservationTimeSliceActionReason[];
}

export interface ActionReasonModelNotAllowedReservationTimeSliceActionReason {
  code: NotAllowedReservationTimeSliceActionReason;
  message: string;
}

export interface ReservationValidationMessageModel {
  /**
   * The message category
   */
  category: ValidationMessageCategory;
  /**
   * The message Code
   */
  code: ValidationMessageCode;
  /**
   * The message description
   */
  message: string;
}

export interface ActionModelReservationActionNotAllowedReservationActionReason {
  action: ReservationAction;
  isAllowed: boolean;
  reasons?: ActionReasonModelNotAllowedReservationActionReason[];
}

export interface ActionReasonModelNotAllowedReservationActionReason {
  code: NotAllowedReservationActionReason;
  message: string;
}

export interface ReservationModel {
  /**
   * Reservation id
   */
  id: string;
  /**
   * Booking id
   */
  bookingId: string;
  /**
   * Block id
   */
  blockId?: string;
  /**
   * Name of the group
   */
  groupName?: string;
  /**
   * Status of the reservation
   */
  status: ReservationStatus;
  /**
   * Time of check-in<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  checkInTime?: Date;
  /**
   * Time of check-out<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  checkOutTime?: Date;
  /**
   * Time of cancellation, if the reservation was canceled<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  cancellationTime?: Date;
  /**
   * Time of setting no-show reservation status<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  noShowTime?: Date;
  unit?: EmbeddedUnitModel;
  property: EmbeddedPropertyModel;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: EmbeddedUnitGroupModel;
  totalGrossAmount: MonetaryValueModel;
  /**
   * Date of arrival<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: Date;
  /**
   * Date of departure<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: Date;
  /**
   * Date of creation<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  created: Date;
  /**
   * Date of last modification<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  modified: Date;
  /**
   * Number of adults
   */
  adults: number;
  /**
   * The ages of the children
   */
  childrenAges?: number[];
  /**
   * Additional information and comments
   */
  comment?: string;
  /**
   * Additional information and comment by the guest
   */
  guestComment?: string;
  /**
   * Code in external system
   */
  externalCode?: string;
  /**
   * Channel code
   */
  channelCode: ChannelCode;
  /**
   * Source of the reservation (e.g Hotels.com, Orbitz, etc.)
   */
  source?: string;
  primaryGuest?: GuestModel;
  /**
   * Additional guests of the reservation.
   */
  additionalGuests?: GuestModel[];
  booker?: BookerModel;
  paymentAccount?: PaymentAccountModel;
  /**
   * The list of time slices with the reserved units / unit groups for the stay
   */
  timeSlices?: TimeSliceModel[];
  /**
   * The list of additional services (extras, add-ons) reserved for the stay
   */
  services?: ReservationServiceItemModel[];
  /**
   * The strongest guarantee for the rate plans booked in this reservation
   */
  guaranteeType: GuaranteeType;
  cancellationFee: ReservationCancellationFeeModel;
  noShowFee: ReservationNoShowFeeModel;
  /**
   * The purpose of the trip, leisure or business
   */
  travelPurpose?: TravelPurpose;
  balance: MonetaryValueModel;
  /**
   * Validation rules are applied to reservations during their lifetime.
   * For example a reservation that was created while the house or unit group is already fully booked.
   * Whenever a rule was or is currently violated, a validation message will be added to this list.
   * They can be deleted whenever the hotel staff worked them off.
   */
  validationMessages?: ReservationValidationMessageModel[];
  /**
   * The list of actions for this reservation
   */
  actions?: ActionModelReservationActionNotAllowedReservationActionReason[];
  company?: EmbeddedCompanyModel;
  /**
   * Corporate code provided during creation. Used to find offers during amend.
   */
  corporateCode?: string;
  /**
   * Whether all folios of a reservation have an invoice
   */
  allFoliosHaveInvoice?: boolean;
  /**
   * Tax breakdown, displaying net and tax amount for each VAT type
   */
  taxDetails: TaxDetailModel[];
  /**
   * Whether the city tax has already been added to the reservation. Set to false, if the property does not have city tax configured
   */
  hasCityTax: boolean;
  commission?: CommissionModel;
  /**
   * The promo code associated with a certain special offer used to create the reservation
   */
  promoCode?: string;
  payableAmount: PayableAmountModel;
}

export interface PayableAmountModel {
  guest: MonetaryValueModel;
}

export interface ReservationStayOffersModel {
  property: EmbeddedPropertyModel;
  /**
   * List of offered unit groups with rates
   */
  offers: ReservationStayOfferModel[];
}

export interface ReservationStayOfferModel {
  /**
   * The earliest arrival date and time for this offer<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: Date;
  /**
   * The latest departure date and time for this offer<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: Date;
  /**
   * The minimum guarantee type for this offer
   */
  minGuaranteeType: MinGuaranteeType;
  /**
   * The number of available units for that offer
   */
  availableUnits: number;
  totalGrossAmount: MonetaryValueModel;
  cancellationFee: OfferCancellationFeeModel;
  noShowFee: OfferNoShowFeeModel;
  /**
   * The breakdown for each time slice for this offer
   */
  timeSlices: ReservationStayOfferTimeSliceModel[];
  /**
   * The breakdown for extra services reserved for this offer
   */
  services?: ServiceOfferModel[];
  /**
   * Tax breakdown, displaying net and tax amount for each VAT type
   */
  taxDetails: TaxDetailModel[];
  /**
   * Validation rules that were applied to the offer and show the reason why the offer is not bookable
   */
  validationMessages?: OfferValidationMessageModel[];
  /**
   * ID of the company the offer is created for
   */
  companyId?: string;
  /**
   * The corporate rate code the offer is created for
   */
  corporateCode?: string;
  /**
   * Whether the offer is for a corporate rate plan
   */
  isCorporate: boolean;
  cityTax?: AmountModel;
}

export interface ReservationStayOfferTimeSliceModel {
  /**
   * The start date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * The end date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
  ratePlan: EmbeddedRatePlanModel;
  unitGroup: OfferUnitGroupModel;
  baseAmount: AmountModel;
  totalGrossAmount: MonetaryValueModel;
  /**
   * The breakdown for services included in the offer
   */
  includedServices?: ReservationStayOfferServiceModel[];
}

export interface ReservationStayOfferServiceModel {
  service: EmbeddedServiceModel;
  /**
   * The date this service is delivered
   */
  serviceDate: Date;
  /**
   * The default count of offered services. For services whose pricing unit is 'Person' it will be based on the adults and children specified, otherwise 1.
   */
  count: number;
  amount: AmountModel;
  /**
   * Whether this service is already booked as extra
   */
  bookedAsExtra: boolean;
  /**
   * Whether the service price is included in or added to the base rate
   */
  pricingMode: PricingMode;
}

export interface ReservationServiceListModel {
  /**
   * The list of services booked for the reservation
   */
  services: ReservationServiceItemModel[];
  /**
   * Total count of items
   */
  count: number;
}

export interface AutoAssignedUnitListModel {
  /**
   * The list of time slices with the respective assigned unit
   */
  timeSlices: AutoAssignedUnitItemModel[];
}

export interface AutoAssignedUnitItemModel {
  unit: EmbeddedUnitModel;
  /**
   * The start date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  from: Date;
  /**
   * The end date and time for this time slice<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to: Date;
}

export interface AssignedUnitModel {
  unit: EmbeddedUnitModel;
}

export interface DesiredStayDetailsModel {
  /**
   * Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival: string;
  /**
   * Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure: string;
  /**
   * Number of adults
   */
  adults: number;
  /**
   * Ages of the children
   */
  childrenAges?: number[];
  /**
   * Whether the prices for time slices with no change to the rate plan should be re-quoted based on current prices, or if
   * only additions like change of number of adults should be calculated. Defaults to 'false'.
   */
  requote?: boolean;
  /**
   * The list of time slices
   */
  timeSlices: DesiredTimeSliceModel[];
}

export interface DesiredTimeSliceModel {
  /**
   * The rate plan id for this time slice
   */
  ratePlanId: string;
  totalGrossAmount?: MonetaryValueModel;
}

export interface SourceListModel {
  /**
   * List of sources.
   */
  sources: string[];
}

/**
 * Defines headers for ApaleoBookingAPI_bookingBlocksPost operation.
 */
export interface ApaleoBookingAPIBookingBlocksPostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines headers for ApaleoBookingAPI_bookingBookingsPost operation.
 */
export interface ApaleoBookingAPIBookingBookingsPostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines headers for ApaleoBookingAPI_bookingBookingsForcePost operation.
 */
export interface ApaleoBookingAPIBookingBookingsForcePostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines headers for ApaleoBookingAPI_bookingBookingsByIdReservationsPost operation.
 */
export interface ApaleoBookingAPIBookingBookingsByIdReservationsPostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines headers for ApaleoBookingAPI_bookingBookingsByIdReservationsForcePost operation.
 */
export interface ApaleoBookingAPIBookingBookingsByIdReservationsForcePostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines headers for ApaleoBookingAPI_bookingGroupsPost operation.
 */
export interface ApaleoBookingAPIBookingGroupsPostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines headers for ApaleoBookingAPI_bookingGroupsByIdReservationsPost operation.
 */
export interface ApaleoBookingAPIBookingGroupsByIdReservationsPostHeaders {
  /**
   * The location of the created resource.
   */
  location?: string;
}

/**
 * Defines values for Get12ItemsItem.
 */
export type Get12ItemsItem = 'actions' | 'timeSlices' | string;
/**
 * Defines values for Enum1.
 */
export type Enum1 = 'actions' | 'timeSlices' | string;
/**
 * Defines values for Get7ItemsItem.
 */
export type Get7ItemsItem =
  | 'property'
  | 'unitGroup'
  | 'ratePlan'
  | 'services'
  | 'reservations'
  | string;
/**
 * Defines values for Enum3.
 */
export type Enum3 =
  | 'property'
  | 'unitGroup'
  | 'ratePlan'
  | 'services'
  | 'reservations'
  | 'propertyValues'
  | string;
/**
 * Defines values for Enum4.
 */
export type Enum4 = 'blocks' | 'actions' | string;
/**
 * Defines values for Enum5.
 */
export type Enum5 = 'blocks' | 'actions' | string;
/**
 * Defines values for Get21ItemsItem.
 */
export type Get21ItemsItem =
  | 'arrival:asc'
  | 'arrival:desc'
  | 'departure:asc'
  | 'departure:desc'
  | 'created:asc'
  | 'created:desc'
  | 'updated:asc'
  | 'updated:desc'
  | 'id:asc'
  | 'id:desc'
  | 'firstname:asc'
  | 'firstname:desc'
  | 'lastname:asc'
  | 'lastname:desc'
  | 'unitname:asc'
  | 'unitname:desc'
  | string;
/**
 * Defines values for Get22ItemsItem.
 */
export type Get22ItemsItem =
  | 'booker'
  | 'actions'
  | 'timeSlices'
  | 'services'
  | 'assignedUnits'
  | 'company'
  | string;
/**
 * Defines values for Enum8.
 */
export type Enum8 =
  | 'timeSlices'
  | 'services'
  | 'booker'
  | 'actions'
  | 'company'
  | string;
/**
 * Defines values for BlockStatus.
 */
export type BlockStatus = 'Tentative' | 'Definite' | 'Canceled';
/**
 * Defines values for UnitGroupType.
 */
export type UnitGroupType =
  | 'BedRoom'
  | 'MeetingRoom'
  | 'EventSpace'
  | 'ParkingLot'
  | 'Other';
/**
 * Defines values for TimeSliceTemplate.
 */
export type TimeSliceTemplate = 'DayUse' | 'OverNight';
/**
 * Defines values for VatType.
 */
export type VatType =
  | 'Null'
  | 'VeryReduced'
  | 'Reduced'
  | 'Normal'
  | 'Without'
  | 'Special'
  | 'ReducedCovid19'
  | 'NormalCovid19';
/**
 * Defines values for BlockAction.
 */
export type BlockAction =
  | 'Delete'
  | 'Confirm'
  | 'Release'
  | 'Cancel'
  | 'Pickup'
  | 'Modify'
  | 'Wash';
/**
 * Defines values for NotAllowedBlockActionReason.
 */
export type NotAllowedBlockActionReason =
  | 'DeleteNotAllowedForBlockWithReservations'
  | 'ReleaseNotAllowedForBlockWithReservations'
  | 'ReleaseNotAllowedForBlockInThePast'
  | 'ReleaseNotAllowedForBlockNotInStatusDefinite'
  | 'ConfirmNotAllowedForBlockNotInStatusTentative'
  | 'ConfirmNotAllowedForBlockInThePast'
  | 'CancelNotAllowedForBlockWithNotCancelledReservations'
  | 'CancelNotAllowedForBlockNotInStatusDefiniteOrTentative'
  | 'PickupNotAllowedForBlockNotInStatusDefinite'
  | 'PickupNotAllowedForBlockInThePast'
  | 'PickupNotAllowedForFullyPickedBlock'
  | 'ModifyNotAllowedForBlockInThePast'
  | 'ModifyNotAllowedForBlockInStatusCanceled'
  | 'WashNotAllowedForBlockNotInStatusDefinite'
  | 'WashNotAllowedForBlockWithoutReservations';
/**
 * Defines values for PersonTitle.
 */
export type PersonTitle = 'Mr' | 'Ms' | 'Dr' | 'Prof' | 'Other';
/**
 * Defines values for Gender.
 */
export type Gender = 'Female' | 'Male' | 'Other';
/**
 * Defines values for IdentificationType.
 */
export type IdentificationType =
  | 'SocialInsuranceNumber'
  | 'PassportNumber'
  | 'IdNumber'
  | 'DriverLicenseNumber';
/**
 * Defines values for ChannelCode.
 */
export type ChannelCode =
  | 'Direct'
  | 'BookingCom'
  | 'Ibe'
  | 'ChannelManager'
  | 'Expedia'
  | 'Homelike';
/**
 * Defines values for MinGuaranteeType.
 */
export type MinGuaranteeType =
  | 'PM6Hold'
  | 'CreditCard'
  | 'Prepayment'
  | 'Company';
/**
 * Defines values for TravelPurpose.
 */
export type TravelPurpose = 'Business' | 'Leisure';
/**
 * Defines values for ReservationStatus.
 */
export type ReservationStatus =
  | 'Confirmed'
  | 'InHouse'
  | 'CheckedOut'
  | 'Canceled'
  | 'NoShow';
/**
 * Defines values for PricedUnit.
 */
export type PricedUnit = 'Room' | 'Person';
/**
 * Defines values for PricingMode.
 */
export type PricingMode = 'Included' | 'Additional';
/**
 * Defines values for OfferValidationMessageCode.
 */
export type OfferValidationMessageCode =
  | 'UnitGroupFullyBooked'
  | 'UnitGroupCapacityExceeded'
  | 'RatePlanRestrictionsViolated'
  | 'RatePlanSurchargesNotSet'
  | 'RateRestrictionsViolated'
  | 'RatePlanChannelNotSet'
  | 'RatesNotSet'
  | 'BlockFullyBooked'
  | 'IncludedServicesAmountExceededRateAmount';
/**
 * Defines values for GuaranteeType.
 */
export type GuaranteeType =
  | 'PM6Hold'
  | 'CreditCard'
  | 'Prepayment'
  | 'Company'
  | 'Ota';
/**
 * Defines values for DateFilterType.
 */
export type DateFilterType =
  | 'Arrival'
  | 'Departure'
  | 'Stay'
  | 'Creation'
  | 'Modification'
  | 'Cancellation';
/**
 * Defines values for ValidationMessageCategory.
 */
export type ValidationMessageCategory =
  | 'OfferNotAvailable'
  | 'AutoUnitAssignment';
/**
 * Defines values for NotAllowedReservationTimeSliceActionReason.
 */
export type NotAllowedReservationTimeSliceActionReason =
  | 'AmendNotAllowedWhenTimeSliceIsInThePast'
  | 'AmendNotAllowedWhenTimeSliceIsAlreadyPosted'
  | 'AmendNotAllowedForReservationInFinalStatus';
/**
 * Defines values for ValidationMessageCode.
 */
export type ValidationMessageCode =
  | 'UnitGroupFullyBooked'
  | 'UnitGroupCapacityExceeded'
  | 'RatePlanRestrictionsViolated'
  | 'RatePlanSurchargesNotSet'
  | 'RateRestrictionsViolated'
  | 'RatePlanChannelNotSet'
  | 'RatesNotSet'
  | 'BlockFullyBooked'
  | 'UnitMoved'
  | 'IncludedServicesAmountExceededRateAmount'
  | 'RatePlanCompanyRestrictionsViolated';
/**
 * Defines values for ReservationAction.
 */
export type ReservationAction =
  | 'CheckIn'
  | 'CheckOut'
  | 'Cancel'
  | 'AmendTimeSlices'
  | 'AmendArrival'
  | 'AmendDeparture'
  | 'NoShow'
  | 'AssignUnit'
  | 'UnassignUnit'
  | 'RemoveCityTax'
  | 'AddCityTax'
  | 'RemoveService';
/**
 * Defines values for NotAllowedReservationActionReason.
 */
export type NotAllowedReservationActionReason =
  | 'CheckInNotAllowedForReservationNotInStatusConfirmed'
  | 'CheckInNotAllowedBeforeArrivalDate'
  | 'CheckInNotAllowedAfterDepartureDateTime'
  | 'CheckInNotAllowedWithoutUnitAssignedForWholeStay'
  | 'CheckOutNotAllowedForReservationNotInStatusInHouse'
  | 'CheckOutNotAllowedForPastReservationNotInStatusConfirmedOrInHouse'
  | 'CheckOutNotAllowedWithDepartureDateMoreThanOneDayInTheFuture'
  | 'CancelNotAllowedForReservationNotInStatusConfirmed'
  | 'AmendNotAllowedForNotAmendableTimeSlices'
  | 'AmendArrivalNotAllowedForNotAmendableTimeSlices'
  | 'AmendArrivalNotAllowedForReservationNotInStatusConfirmed'
  | 'AmendDepartureNotAllowedForReservationNotInStatusConfirmedOrInHouse'
  | 'AmendDepartureNotAllowedForReservationDepartureDateTooFarInThePast'
  | 'NoShowNotAllowedForReservationNotInStatusConfirmed'
  | 'NoShowNotAllowedBeforeArrivalDate'
  | 'AssignUnitNotAllowedForReservationInThePast'
  | 'AssignUnitNotAllowedForReservationNotInStatusConfirmedOrInHouse'
  | 'UnassignUnitNotAllowedForReservationInThePast'
  | 'UnassignUnitNotAllowedForReservationNotInStatusConfirmed'
  | 'UnassignUnitNotAllowedForReservationWithoutUnit'
  | 'RemoveCityTaxNotAllowedForReservationNotInStatusConfirmedOrInHouse'
  | 'RemoveCityTaxNotAllowedForReservationWithPostedCharges'
  | 'RemoveCityTaxNotAllowedForReservationWithoutCityTax'
  | 'AddCityTaxNotAllowedForReservationNotInStatusConfirmedOrInHouse'
  | 'AddCityTaxNotAllowedForReservationWithCityTax'
  | 'AddCityTaxNotAllowedForReservationForRatePlanNotSubjectToCityTax'
  | 'AddCityTaxNotAllowedForReservationWithPostedCharges'
  | 'RemoveServiceNotAllowedForReservationNotInStatusConfirmedOrInHouse'
  | 'RemoveServiceNotAllowedForReservationInThePast';

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBlocksPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingBlocksPost operation.
 */
export type ApaleoBookingAPIBookingBlocksPostResponse = ApaleoBookingAPIBookingBlocksPostHeaders &
  BlockCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BlockCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingBlocksPostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBlocksGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Return blocks for the specific group
   */
  groupId?: string;
  /**
   * Return blocks filtered by properties
   */
  propertyIds?: string[];
  /**
   * Return blocks filtered by statuses
   */
  status?: BlockStatus[];
  /**
   * Return blocks with any of the specified unit groups
   */
  unitGroupIds?: string[];
  /**
   * Return blocks with any of the specified rate plans
   */
  ratePlanIds?: string[];
  /**
   * Return blocks with any of the specified time slice definitions
   */
  timeSliceDefinitionIds?: string[];
  /**
   * Return blocks with any of the specified unit group types
   */
  unitGroupTypes?: UnitGroupType[];
  /**
   * The time slice template, defaults to 'over night'
   */
  timeSliceTemplate?: TimeSliceTemplate;
  /**
   * The start of the time range. All blocks that are overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: Date;
  /**
   * The end of the time range. All blocks that are overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  /**
   * Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page.
   */
  pageNumber?: number;
  /**
   * Page size. If this is not set, the pageNumber will be ignored and all values returned.
   */
  pageSize?: number;
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.
   */
  expand?: Get12ItemsItem[];
}

/**
 * Contains response data for the bookingBlocksGet operation.
 */
export type ApaleoBookingAPIBookingBlocksGetResponse = BlockListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BlockListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBlocksCountGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Return blocks for the specific group
   */
  groupId?: string;
  /**
   * Return blocks filtered by properties
   */
  propertyIds?: string[];
  /**
   * Return blocks filtered by statuses
   */
  status?: BlockStatus[];
  /**
   * Return blocks with any of the specified unit groups
   */
  unitGroupIds?: string[];
  /**
   * Return blocks with any of the specified rate plans
   */
  ratePlanIds?: string[];
  /**
   * Return blocks with any of the specified time slice definitions
   */
  timeSliceDefinitionIds?: string[];
  /**
   * Return blocks with any of the specified unit group types
   */
  unitGroupTypes?: UnitGroupType[];
  /**
   * The time slice template, defaults to 'over night'
   */
  timeSliceTemplate?: TimeSliceTemplate;
  /**
   * The start of the time range. All blocks that are overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: Date;
  /**
   * The end of the time range. All blocks that are overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
}

/**
 * Contains response data for the bookingBlocksCountGet operation.
 */
export type ApaleoBookingAPIBookingBlocksCountGetResponse = CountModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CountModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBlocksByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: actions, timeSlices. All other values will be silently ignored.
   */
  expand?: Enum1[];
}

/**
 * Contains response data for the bookingBlocksByIdGet operation.
 */
export type ApaleoBookingAPIBookingBlocksByIdGetResponse = BlockModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BlockModel;
  };
};

/**
 * Contains response data for the bookingBlocksByIdPatch operation.
 */
export type ApaleoBookingAPIBookingBlocksByIdPatchResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingBlocksByIdDelete operation.
 */
export type ApaleoBookingAPIBookingBlocksByIdDeleteResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingBlockActionsByIdConfirmPut operation.
 */
export type ApaleoBookingAPIBookingBlockActionsByIdConfirmPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingBlockActionsByIdReleasePut operation.
 */
export type ApaleoBookingAPIBookingBlockActionsByIdReleasePutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingBlockActionsByIdCancelPut operation.
 */
export type ApaleoBookingAPIBookingBlockActionsByIdCancelPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingBlockActionsByIdWashPut operation.
 */
export type ApaleoBookingAPIBookingBlockActionsByIdWashPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBookingsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingBookingsPost operation.
 */
export type ApaleoBookingAPIBookingBookingsPostResponse = ApaleoBookingAPIBookingBookingsPostHeaders &
  BookingCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BookingCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingBookingsPostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBookingsGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Filter result by group id. The result set will contain all bookings having groups with the specified id
   */
  groupId?: string;
  /**
   * Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page.
   */
  pageNumber?: number;
  /**
   * Page size. If this is not set, the pageNumber will be ignored and all values returned.
   */
  pageSize?: number;
  /**
   * Filter result by reservation id. The result set will contain all bookings having reservations with the specified id
   */
  reservationId?: string;
  /**
   * Filter result by the channel code. The resul set will contain all bookings having reservations with the specified channel code
   */
  channelCode?: ChannelCode[];
  /**
   * Filter result by the external code. The result set will contain all bookings having reservations with external code starting with provided value
   */
  externalCode?: string;
  /**
   * This will filter all bookings for the provided free text. Currently it only looks up if either the lastname, firstname, email or company name of the booker
   * contains one of the provided values
   */
  textSearch?: string;
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations. All other values will be silently ignored.
   */
  expand?: Get7ItemsItem[];
}

/**
 * Contains response data for the bookingBookingsGet operation.
 */
export type ApaleoBookingAPIBookingBookingsGetResponse = BookingListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BookingListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBookingsForcePostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingBookingsForcePost operation.
 */
export type ApaleoBookingAPIBookingBookingsForcePostResponse = ApaleoBookingAPIBookingBookingsForcePostHeaders &
  BookingCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: BookingCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingBookingsForcePostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBookingsByIdReservationsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingBookingsByIdReservationsPost operation.
 */
export type ApaleoBookingAPIBookingBookingsByIdReservationsPostResponse = ApaleoBookingAPIBookingBookingsByIdReservationsPostHeaders &
  ReservationsCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationsCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingBookingsByIdReservationsPostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBookingsByIdReservationsForcePostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingBookingsByIdReservationsForcePost operation.
 */
export type ApaleoBookingAPIBookingBookingsByIdReservationsForcePostResponse = ApaleoBookingAPIBookingBookingsByIdReservationsForcePostHeaders &
  ReservationsCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationsCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingBookingsByIdReservationsForcePostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingBookingsByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: property, unitGroup, ratePlan, services, reservations, propertyValues. All other values will be silently ignored.
   */
  expand?: Enum3[];
}

/**
 * Contains response data for the bookingBookingsByIdGet operation.
 */
export type ApaleoBookingAPIBookingBookingsByIdGetResponse = BookingModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: BookingModel;
  };
};

/**
 * Contains response data for the bookingBookingsByIdPatch operation.
 */
export type ApaleoBookingAPIBookingBookingsByIdPatchResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingGroupsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingGroupsPost operation.
 */
export type ApaleoBookingAPIBookingGroupsPostResponse = ApaleoBookingAPIBookingGroupsPostHeaders &
  GroupCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: GroupCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingGroupsPostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingGroupsGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Filter result by requested properties
   */
  propertyIds?: string[];
  /**
   * The start of the time range. All groups that have blocks overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: Date;
  /**
   * The end of the time range. All groups that have blocks overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  /**
   * Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page.
   */
  pageNumber?: number;
  /**
   * Page size. If this is not set, the pageNumber will be ignored and all values returned.
   */
  pageSize?: number;
  /**
   * This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname,
   * firstname, email or company name of the booker contains one of the provided values
   */
  textSearch?: string;
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.
   */
  expand?: Enum4[];
}

/**
 * Contains response data for the bookingGroupsGet operation.
 */
export type ApaleoBookingAPIBookingGroupsGetResponse = GroupListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: GroupListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingGroupsByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: blocks, actions. All other values will be silently ignored.
   */
  expand?: Enum5[];
}

/**
 * Contains response data for the bookingGroupsByIdGet operation.
 */
export type ApaleoBookingAPIBookingGroupsByIdGetResponse = GroupModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: GroupModel;
  };
};

/**
 * Contains response data for the bookingGroupsByIdPatch operation.
 */
export type ApaleoBookingAPIBookingGroupsByIdPatchResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingGroupsByIdDelete operation.
 */
export type ApaleoBookingAPIBookingGroupsByIdDeleteResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingGroupsCountGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Filter result by requested properties
   */
  propertyIds?: string[];
  /**
   * The start of the time range. All groups that have blocks overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: Date;
  /**
   * The end of the time range. All groups that have blocks overlapping with the interval specified by from and to
   * will be returned<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  /**
   * This will filter all group bookings for the provided free text. Currently it only looks up if either the group name, lastname,
   * firstname, email or company name of the booker contains one of the provided values
   */
  textSearch?: string;
}

/**
 * Contains response data for the bookingGroupsCountGet operation.
 */
export type ApaleoBookingAPIBookingGroupsCountGetResponse = CountModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CountModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingGroupsByIdReservationsPostOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unique key for safely retrying requests without accidentally performing the same operation twice.
   * We'll always send back the same response for requests made with the same key,
   * and keys can't be reused with different request parameters. Keys expire after 24 hours.
   */
  idempotencyKey?: string;
}

/**
 * Contains response data for the bookingGroupsByIdReservationsPost operation.
 */
export type ApaleoBookingAPIBookingGroupsByIdReservationsPostResponse = ApaleoBookingAPIBookingGroupsByIdReservationsPostHeaders &
  ReservationsCreatedModel & {
    /**
     * The underlying HTTP response.
     */
    _response: coreHttp.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;

      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ReservationsCreatedModel;
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: ApaleoBookingAPIBookingGroupsByIdReservationsPostHeaders;
    };
  };

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingOffersGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Unit group IDs, used to filter rate plans
   */
  unitGroupIds?: string[];
  /**
   * Time slice definition IDs, used to filter rate plans
   */
  timeSliceDefinitionIds?: string[];
  /**
   * Unit group types, used to filter rate plans
   */
  unitGroupTypes?: UnitGroupType[];
  /**
   * The time slice template used to filter the rate plans, defaults to 'over night'
   */
  timeSliceTemplate?: TimeSliceTemplate;
  /**
   * Channel code, used to filter the rate plans
   */
  channelCode?: ChannelCode;
  /**
   * The promo code associated with a certain special offer
   */
  promoCode?: string;
  /**
   * The code associated with a corporate rate
   */
  corporateCode?: string;
  /**
   * The ages of the children you want offers for
   */
  childrenAges?: number[];
  /**
   * Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned
   */
  includeUnavailable?: boolean;
}

/**
 * Contains response data for the bookingOffersGet operation.
 */
export type ApaleoBookingAPIBookingOffersGetResponse = StayOffersModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: StayOffersModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingRatePlanOffersGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The channel code
   */
  channelCode?: ChannelCode;
  /**
   * The ages of the children you want offers for
   */
  childrenAges?: number[];
  /**
   * Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned
   */
  includeUnavailable?: boolean;
}

/**
 * Contains response data for the bookingRatePlanOffersGet operation.
 */
export type ApaleoBookingAPIBookingRatePlanOffersGetResponse = StayOffersModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: StayOffersModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingServiceOffersGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The channel code used to filter the services
   */
  channelCode?: ChannelCode;
  /**
   * The ages of the children you want offers for
   */
  childrenAges?: number[];
  /**
   * Depending on the postNextDay setting of a service it will be posted before or after midnight.
   * Breakfast is usually delivered on the next morning, having 'postNextDay' set to true. Its 'default dates' are from the day after
   * arrival until the departure day. For services like dinner 'postNextDay' is false, and default dates are day of arrival until one
   * day before departure.
   * With this query parameter set to 'false', you can also ask for dates outside of those default dates. It defaults to true.
   */
  onlyDefaultDates?: boolean;
}

/**
 * Contains response data for the bookingServiceOffersGet operation.
 */
export type ApaleoBookingAPIBookingServiceOffersGetResponse = ServiceOffersModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ServiceOffersModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingOfferIndexGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page.
   */
  pageNumber?: number;
  /**
   * Page size. If this is not set, the pageNumber will be ignored and all values returned.
   */
  pageSize?: number;
}

/**
 * Contains response data for the bookingOfferIndexGet operation.
 */
export type ApaleoBookingAPIBookingOfferIndexGetResponse = TimeSliceListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: TimeSliceListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationsGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Filter result by requested properties
   */
  propertyIds?: string[];
  /**
   * Filter result by requested unit groups
   */
  unitGroupIds?: string[];
  /**
   * Filter result by requested rate plans
   */
  ratePlanIds?: string[];
  /**
   * Filter result by requested unit group types
   */
  unitGroupTypes?: UnitGroupType[];
  /**
   * The start of the time interval. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: Date;
  /**
   * The end of the time interval, must be larger than 'from'. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  /**
   * Page number, starting from 1 and defaulting to 1. Results in 204 if there are no items on that page.
   */
  pageNumber?: number;
  /**
   * Page size. If this is not set, the pageNumber will be ignored and all values returned.
   */
  pageSize?: number;
  /**
   * Filter result by the channel code
   */
  channelCode?: ChannelCode[];
  /**
   * Filter result by the external code. The result set will contain all reservations that have an external code starting with the
   * provided value
   */
  externalCode?: string;
  /**
   * This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name,
   * primary guest first name or last name or email or company name, external code, reservation id, unit name. The search is case insensitive.
   */
  textSearch?: string;
  /**
   * Filter result by booking id
   */
  bookingId?: string;
  /**
   * Filter result by requested companies
   */
  companyIds?: string[];
  /**
   * Filter result by assigned units
   */
  unitIds?: string[];
  /**
   * Filter result by requested blocks
   */
  blockIds?: string[];
  /**
   * Filter result by reservation status
   */
  status?: ReservationStatus[];
  /**
   * Filter by date and time attributes of reservation. Use in combination with the 'To' and 'From' attributes.
   * All filters will check if the date specified by the filter type is between from (included) and to (excluded).
   * The exception being filtering for 'stay', which will return all reservations that are overlapping with the interval specified by from and to.
   */
  dateFilter?: DateFilterType;
  /**
   * Filter result by source
   */
  sources?: string[];
  /**
   * Filter result by validation message category
   */
  validationMessageCategory?: ValidationMessageCategory[];
  /**
   * This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7
   */
  balanceFilter?: string[];
  /**
   * If set to {true}, returns only reservations, in which all folios are closed and have an invoice.
   * If set to {false}, returns only reservations, in which some of the folios are open or don't have an invoice
   */
  allFoliosHaveInvoice?: boolean;
  /**
   * List of all fields that can be used to sort the results. Possible values are: arrival:asc, arrival:desc, departure:asc, departure:desc, created:asc, created:desc, updated:asc, updated:desc, id:asc, id:desc, firstname:asc, firstname:desc, lastname:asc, lastname:desc, unitname:asc, unitname:desc. All other values will be silently ignored.
   */
  sort?: Get21ItemsItem[];
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: booker, actions, timeSlices, services, assignedUnits, company. All other values will be silently ignored.
   */
  expand?: Get22ItemsItem[];
}

/**
 * Contains response data for the bookingReservationsGet operation.
 */
export type ApaleoBookingAPIBookingReservationsGetResponse = ReservationListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ReservationListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationsCountGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Filter result by requested properties
   */
  propertyIds?: string[];
  /**
   * Filter result by requested unit groups
   */
  unitGroupIds?: string[];
  /**
   * Filter result by requested rate plans
   */
  ratePlanIds?: string[];
  /**
   * Filter result by requested unit group types
   */
  unitGroupTypes?: UnitGroupType[];
  /**
   * The start of the time interval. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: Date;
  /**
   * The end of the time interval, must be larger than 'from'. When filtering by date, at least one of 'from' and 'to' has to be specified<br />A date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: Date;
  /**
   * Filter result by the channel code
   */
  channelCode?: ChannelCode[];
  /**
   * Filter result by the external code. The result set will contain all reservations that have an external code starting with the
   * provided value
   */
  externalCode?: string;
  /**
   * This will filter all reservations where the provided text is contained in: booker first name or last name or email or company name,
   * primary guest first name or last name or email or company name, external code, reservation id, unit name. The search is case insensitive.
   */
  textSearch?: string;
  /**
   * Filter result by booking id
   */
  bookingId?: string;
  /**
   * Filter result by requested companies
   */
  companyIds?: string[];
  /**
   * Filter result by assigned units
   */
  unitIds?: string[];
  /**
   * Filter result by requested blocks
   */
  blockIds?: string[];
  /**
   * Filter result by reservation status
   */
  status?: ReservationStatus[];
  /**
   * Filter by date and time attributes of reservation. Use in combination with the 'To' and 'From' attributes.
   * All filters will check if the date specified by the filter type is between from (included) and to (excluded).
   * The exception being filtering for 'stay', which will return all reservations that are overlapping with the interval specified by from and to.
   */
  dateFilter?: DateFilterType;
  /**
   * Filter result by source
   */
  sources?: string[];
  /**
   * Filter result by validation message category
   */
  validationMessageCategory?: ValidationMessageCategory[];
  /**
   * This will filter reservations based on their balance.<br />You can provide an array of string expressions which all need to apply.<br />Each expression has the form of 'OPERATION_VALUE' where VALUE needs to be of the valid format of the property type and OPERATION can be:<br />'eq' for equals<br />'neq' for not equals<br />'lt' for less than<br />'gt' for greater than<br />'lte' for less than or equals<br />'gte' for greater than or equals<br />For instance<br />'eq_5' would mean the value should equal 5<br />'lte_7' would mean the value should be less than or equal to 7
   */
  balanceFilter?: string[];
  /**
   * If set to {true}, returns only reservations, in which all folios are closed and have an invoice.
   * If set to {false}, returns only reservations, in which some of the folios are open or don't have an invoice
   */
  allFoliosHaveInvoice?: boolean;
}

/**
 * Contains response data for the bookingReservationsCountGet operation.
 */
export type ApaleoBookingAPIBookingReservationsCountGetResponse = CountModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: CountModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationsByIdGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * List of all embedded resources that should be expanded in the response. Possible values are: timeSlices, services, booker, actions, company. All other values will be silently ignored.
   */
  expand?: Enum8[];
}

/**
 * Contains response data for the bookingReservationsByIdGet operation.
 */
export type ApaleoBookingAPIBookingReservationsByIdGetResponse = ReservationModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ReservationModel;
  };
};

/**
 * Contains response data for the bookingReservationsByIdPatch operation.
 */
export type ApaleoBookingAPIBookingReservationsByIdPatchResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationsByIdOffersGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The channel code used to filter the rate plans
   */
  channelCode?: ChannelCode;
  /**
   * The promo code associated with a certain special offer, like corporate rate
   */
  promoCode?: string;
  /**
   * Ages of children
   */
  childrenAges?: number[];
  /**
   * Return also offers that are currently not publicly bookable as restrictions are violated. By default only available offers are returned
   */
  includeUnavailable?: boolean;
  /**
   * Date and optional time of arrival<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  arrival?: string;
  /**
   * Date and optional time of departure. Cannot be more than 5 years after arrival.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  departure?: string;
  /**
   * Number of adults
   */
  adults?: number;
  /**
   * Whether the offers should be re-quoted based on current prices, or only additions like change of number of adults should be calculated.
   * Defaults to 'false'
   */
  requote?: boolean;
}

/**
 * Contains response data for the bookingReservationsByIdOffersGet operation.
 */
export type ApaleoBookingAPIBookingReservationsByIdOffersGetResponse = ReservationStayOffersModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ReservationStayOffersModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationsByIdServiceOffersGetOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The channel code used to filter the services
   */
  channelCode?: ChannelCode;
  /**
   * Depending on the postNextDay setting of a service it will by default be posted before or after midnight.
   * Breakfast is usually delivered on the next morning, so all the dates from the day after arrival to the departure day
   * are default dates and will have this flag set to true. For services like a dinner it is the other way around.
   * With this query parameter, you can also ask for the dates, that usually the service will not be booked. It defaults to true.
   */
  onlyDefaultDates?: boolean;
}

/**
 * Contains response data for the bookingReservationsByIdServiceOffersGet operation.
 */
export type ApaleoBookingAPIBookingReservationsByIdServiceOffersGetResponse = ServiceOffersModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ServiceOffersModel;
  };
};

/**
 * Contains response data for the bookingReservationsByIdServicesGet operation.
 */
export type ApaleoBookingAPIBookingReservationsByIdServicesGetResponse = ReservationServiceListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: ReservationServiceListModel;
  };
};

/**
 * Contains response data for the bookingReservationsByIdServicesDelete operation.
 */
export type ApaleoBookingAPIBookingReservationsByIdServicesDeleteResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdAssignUnitPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdAssignUnitPutResponse = AutoAssignedUnitListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: AutoAssignedUnitListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * The start date and optional time for the unit assignment. If not specified, the reservation's arrival will be used.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  fromParam?: string;
  /**
   * The end date and optional time for the unit assignment. If not specified, the reservation's departure will be used.<br />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   */
  to?: string;
}

/**
 * Contains response data for the bookingReservationActionsByIdAssignUnitByUnitIdPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutResponse = AssignedUnitModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: AssignedUnitModel;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdUnassignUnitsPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdUnassignUnitsPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIBookingReservationActionsByIdCheckinPutOptionalParams
  extends coreHttp.OperationOptions {
  /**
   * Define if city tax should be added for this reservation or not. The default is "true".
   */
  withCityTax?: boolean;
}

/**
 * Contains response data for the bookingReservationActionsByIdCheckinPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdCheckinPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdCheckoutPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdCheckoutPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdCancelPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdCancelPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdNoshowPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdNoshowPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdAmendPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdAmendPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdAmendForcePut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdAmendForcePutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdBookServicePut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdBookServicePutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdRemoveCityTaxPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdRemoveCityTaxPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingReservationActionsByIdAddCityTaxPut operation.
 */
export type ApaleoBookingAPIBookingReservationActionsByIdAddCityTaxPutResponse = MessageItemCollection & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: MessageItemCollection;
  };
};

/**
 * Contains response data for the bookingTypesSourcesGet operation.
 */
export type ApaleoBookingAPIBookingTypesSourcesGetResponse = SourceListModel & {
  /**
   * The underlying HTTP response.
   */
  _response: coreHttp.HttpResponse & {
    /**
     * The response body as text (string format)
     */
    bodyAsText: string;

    /**
     * The response body as parsed JSON or XML
     */
    parsedBody: SourceListModel;
  };
};

/**
 * Optional parameters.
 */
export interface ApaleoBookingAPIOptionalParams
  extends coreHttp.ServiceClientOptions {
  /**
   * Overrides client endpoint.
   */
  endpoint?: string;
}
