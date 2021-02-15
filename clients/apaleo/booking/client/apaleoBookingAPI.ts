import * as coreHttp from '@azure/core-http';
import * as Parameters from './models/parameters';
import * as Mappers from './models/mappers';
import { ApaleoBookingAPIContext } from './apaleoBookingAPIContext';
import {
  ApaleoBookingAPIOptionalParams,
  CreateBlockModel,
  ApaleoBookingAPIBookingBlocksPostOptionalParams,
  ApaleoBookingAPIBookingBlocksPostResponse,
  ApaleoBookingAPIBookingBlocksGetOptionalParams,
  ApaleoBookingAPIBookingBlocksGetResponse,
  ApaleoBookingAPIBookingBlocksCountGetOptionalParams,
  ApaleoBookingAPIBookingBlocksCountGetResponse,
  ApaleoBookingAPIBookingBlocksByIdGetOptionalParams,
  ApaleoBookingAPIBookingBlocksByIdGetResponse,
  Operation,
  ApaleoBookingAPIBookingBlocksByIdPatchResponse,
  ApaleoBookingAPIBookingBlocksByIdDeleteResponse,
  ApaleoBookingAPIBookingBlockActionsByIdConfirmPutResponse,
  ApaleoBookingAPIBookingBlockActionsByIdReleasePutResponse,
  ApaleoBookingAPIBookingBlockActionsByIdCancelPutResponse,
  ApaleoBookingAPIBookingBlockActionsByIdWashPutResponse,
  CreateBookingModel,
  ApaleoBookingAPIBookingBookingsPostOptionalParams,
  ApaleoBookingAPIBookingBookingsPostResponse,
  ApaleoBookingAPIBookingBookingsGetOptionalParams,
  ApaleoBookingAPIBookingBookingsGetResponse,
  ApaleoBookingAPIBookingBookingsForcePostOptionalParams,
  ApaleoBookingAPIBookingBookingsForcePostResponse,
  AddReservationsModel,
  ApaleoBookingAPIBookingBookingsByIdReservationsPostOptionalParams,
  ApaleoBookingAPIBookingBookingsByIdReservationsPostResponse,
  ApaleoBookingAPIBookingBookingsByIdReservationsForcePostOptionalParams,
  ApaleoBookingAPIBookingBookingsByIdReservationsForcePostResponse,
  ApaleoBookingAPIBookingBookingsByIdGetOptionalParams,
  ApaleoBookingAPIBookingBookingsByIdGetResponse,
  ApaleoBookingAPIBookingBookingsByIdPatchResponse,
  CreateGroupModel,
  ApaleoBookingAPIBookingGroupsPostOptionalParams,
  ApaleoBookingAPIBookingGroupsPostResponse,
  ApaleoBookingAPIBookingGroupsGetOptionalParams,
  ApaleoBookingAPIBookingGroupsGetResponse,
  ApaleoBookingAPIBookingGroupsByIdGetOptionalParams,
  ApaleoBookingAPIBookingGroupsByIdGetResponse,
  ApaleoBookingAPIBookingGroupsByIdPatchResponse,
  ApaleoBookingAPIBookingGroupsByIdDeleteResponse,
  ApaleoBookingAPIBookingGroupsCountGetOptionalParams,
  ApaleoBookingAPIBookingGroupsCountGetResponse,
  PickUpReservationsModel,
  ApaleoBookingAPIBookingGroupsByIdReservationsPostOptionalParams,
  ApaleoBookingAPIBookingGroupsByIdReservationsPostResponse,
  ApaleoBookingAPIBookingOffersGetOptionalParams,
  ApaleoBookingAPIBookingOffersGetResponse,
  ApaleoBookingAPIBookingRatePlanOffersGetOptionalParams,
  ApaleoBookingAPIBookingRatePlanOffersGetResponse,
  ApaleoBookingAPIBookingServiceOffersGetOptionalParams,
  ApaleoBookingAPIBookingServiceOffersGetResponse,
  ChannelCode,
  ApaleoBookingAPIBookingOfferIndexGetOptionalParams,
  ApaleoBookingAPIBookingOfferIndexGetResponse,
  ApaleoBookingAPIBookingReservationsGetOptionalParams,
  ApaleoBookingAPIBookingReservationsGetResponse,
  ApaleoBookingAPIBookingReservationsCountGetOptionalParams,
  ApaleoBookingAPIBookingReservationsCountGetResponse,
  ApaleoBookingAPIBookingReservationsByIdGetOptionalParams,
  ApaleoBookingAPIBookingReservationsByIdGetResponse,
  ApaleoBookingAPIBookingReservationsByIdPatchResponse,
  ApaleoBookingAPIBookingReservationsByIdOffersGetOptionalParams,
  ApaleoBookingAPIBookingReservationsByIdOffersGetResponse,
  ApaleoBookingAPIBookingReservationsByIdServiceOffersGetOptionalParams,
  ApaleoBookingAPIBookingReservationsByIdServiceOffersGetResponse,
  ApaleoBookingAPIBookingReservationsByIdServicesGetResponse,
  ApaleoBookingAPIBookingReservationsByIdServicesDeleteResponse,
  ApaleoBookingAPIBookingReservationActionsByIdAssignUnitPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutOptionalParams,
  ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdUnassignUnitsPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdCheckinPutOptionalParams,
  ApaleoBookingAPIBookingReservationActionsByIdCheckinPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdCheckoutPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdCancelPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdNoshowPutResponse,
  DesiredStayDetailsModel,
  ApaleoBookingAPIBookingReservationActionsByIdAmendPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdAmendForcePutResponse,
  BookReservationServiceModel,
  ApaleoBookingAPIBookingReservationActionsByIdBookServicePutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdRemoveCityTaxPutResponse,
  ApaleoBookingAPIBookingReservationActionsByIdAddCityTaxPutResponse,
  ApaleoBookingAPIBookingTypesSourcesGetResponse,
} from './models';

export class ApaleoBookingAPI extends ApaleoBookingAPIContext {
  /**
   * Initializes a new instance of the ApaleoBookingAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    $host: string,
    options?: ApaleoBookingAPIOptionalParams,
  ) {
    super(credentials, $host, options);
  }

  /**
   * <br>You must have at least one of these scopes: 'blocks.create, reservations.manage'.
   * @param body The details for the block you want to create.
   * @param options The options parameters.
   */
  bookingBlocksPost(
    body: CreateBlockModel,
    options?: ApaleoBookingAPIBookingBlocksPostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBlocksPostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { body, options: operationOptions },
      bookingBlocksPostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlocksPostResponse>;
  }

  /**
   * Returns a list of all blocks, filtered by the specified parameters. If no parameters are set,
   * returns the entire list.<br>You must have at least one of these scopes: 'blocks.read,
   * reservations.read, reservations.manage'.
   * @param options The options parameters.
   */
  bookingBlocksGet(
    options?: ApaleoBookingAPIBookingBlocksGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBlocksGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingBlocksGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlocksGetResponse>;
  }

  /**
   * Returns number of blocks matching the filter criteria<br>You must have at least one of these scopes:
   * 'blocks.read, reservations.read, reservations.manage'.
   * @param options The options parameters.
   */
  bookingBlocksCountGet(
    options?: ApaleoBookingAPIBookingBlocksCountGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBlocksCountGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingBlocksCountGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlocksCountGetResponse>;
  }

  /**
   * Retrieves a block, specified by its ID.<br>You must have at least one of these scopes: 'blocks.read,
   * reservations.read, reservations.manage'.
   * @param id Id of the block to be retrieved.
   * @param options The options parameters.
   */
  bookingBlocksByIdGet(
    id: string,
    options?: ApaleoBookingAPIBookingBlocksByIdGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBlocksByIdGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlocksByIdGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlocksByIdGetResponse>;
  }

  /**
   * You can replace From, To, GrossDailyRate and BlockedUnits<br>You must have at least one of these
   * scopes: 'blocks.manage, reservations.manage'.
   * @param id Id of the block to be modified.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  bookingBlocksByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBlocksByIdPatchResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingBlocksByIdPatchOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlocksByIdPatchResponse>;
  }

  /**
   * Use this call to delete a block. This is only possible as long as no reservation was picked up yet
   * even if all of
   * them are canceled<br>You must have at least one of these scopes: 'blocks.manage,
   * reservations.manage'.
   * @param id The id of the block.
   * @param options The options parameters.
   */
  bookingBlocksByIdDelete(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBlocksByIdDeleteResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlocksByIdDeleteOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlocksByIdDeleteResponse>;
  }

  /**
   * Check if a block exists by id<br>You must have at least one of these scopes: 'blocks.read,
   * reservations.read, reservations.manage'.
   * @param id The id of the block.
   * @param options The options parameters.
   */
  bookingBlocksByIdHead(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlocksByIdHeadOperationSpec,
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Confirm a specific block which is in status 'Tentative'.
   * This changes the status to 'Definite'.<br>You must have at least one of these scopes:
   * 'blocks.manage, reservations.manage'.
   * @param id Id of the block that should be processed.
   * @param options The options parameters.
   */
  bookingBlockActionsByIdConfirmPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBlockActionsByIdConfirmPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlockActionsByIdConfirmPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlockActionsByIdConfirmPutResponse>;
  }

  /**
   * Release a specific block which is in status 'Definite'.
   * This changes the status to 'Tentative'.<br>You must have at least one of these scopes:
   * 'blocks.manage, reservations.manage'.
   * @param id Id of the block that should be processed.
   * @param options The options parameters.
   */
  bookingBlockActionsByIdReleasePut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBlockActionsByIdReleasePutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlockActionsByIdReleasePutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlockActionsByIdReleasePutResponse>;
  }

  /**
   * Cancel a specific block which is in status 'Definite' or 'Tentative'.
   * This changes the status to 'Canceled'.<br>You must have at least one of these scopes:
   * 'blocks.manage, reservations.manage'.
   * @param id Id of the block that should be processed.
   * @param options The options parameters.
   */
  bookingBlockActionsByIdCancelPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBlockActionsByIdCancelPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlockActionsByIdCancelPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlockActionsByIdCancelPutResponse>;
  }

  /**
   * Wash a specific block which is in status 'Definite'.
   * This releases all unpicked units.<br>You must have at least one of these scopes: 'blocks.manage,
   * reservations.manage'.
   * @param id Id of the block that should be processed.
   * @param options The options parameters.
   */
  bookingBlockActionsByIdWashPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBlockActionsByIdWashPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBlockActionsByIdWashPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBlockActionsByIdWashPutResponse>;
  }

  /**
   * Creates a booking taking a list of reservations as input<br>You must have at least one of these
   * scopes: 'reservations.create, reservations.manage'.
   * @param body The list of reservations you want to create.
   * @param options The options parameters.
   */
  bookingBookingsPost(
    body: CreateBookingModel,
    options?: ApaleoBookingAPIBookingBookingsPostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBookingsPostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { body, options: operationOptions },
      bookingBookingsPostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsPostResponse>;
  }

  /**
   * Returns a list of all bookings, filtered by the specified parameters. If no parameters are set,
   * returns the entire list.<br>You must have at least one of these scopes: 'reservations.read,
   * reservations.manage'.
   * @param options The options parameters.
   */
  bookingBookingsGet(
    options?: ApaleoBookingAPIBookingBookingsGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBookingsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingBookingsGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsGetResponse>;
  }

  /**
   * Creates a booking taking a list of reservations as input<br>You must have at least one of these
   * scopes: 'reservations.force-create, reservations.force-manage'.
   * @param body The list of reservations you want to create.
   * @param options The options parameters.
   */
  bookingBookingsForcePost(
    body: CreateBookingModel,
    options?: ApaleoBookingAPIBookingBookingsForcePostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBookingsForcePostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { body, options: operationOptions },
      bookingBookingsForcePostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsForcePostResponse>;
  }

  /**
   * Creates new reservations and adds them to an existing booking taking a list of reservations as
   * input<br>You must have at least one of these scopes: 'reservations.create, reservations.manage'.
   * @param id Id of the booking the reservations should be attached to.
   * @param body The list of reservations you want to add.
   * @param options The options parameters.
   */
  bookingBookingsByIdReservationsPost(
    id: string,
    body: AddReservationsModel,
    options?: ApaleoBookingAPIBookingBookingsByIdReservationsPostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBookingsByIdReservationsPostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingBookingsByIdReservationsPostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsByIdReservationsPostResponse>;
  }

  /**
   * Creates new reservations and adds them to an existing booking taking a list of reservations as
   * input<br>You must have at least one of these scopes: 'reservations.force-create,
   * reservations.force-manage'.
   * @param id Id of the booking the reservations should be attached to.
   * @param body The list of reservations you want to add.
   * @param options The options parameters.
   */
  bookingBookingsByIdReservationsForcePost(
    id: string,
    body: AddReservationsModel,
    options?: ApaleoBookingAPIBookingBookingsByIdReservationsForcePostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBookingsByIdReservationsForcePostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingBookingsByIdReservationsForcePostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsByIdReservationsForcePostResponse>;
  }

  /**
   * Retrieves a booking with all its reservations.<br>You must have at least one of these scopes:
   * 'reservations.read, reservations.manage'.
   * @param id Id of the booking to be retrieved.
   * @param options The options parameters.
   */
  bookingBookingsByIdGet(
    id: string,
    options?: ApaleoBookingAPIBookingBookingsByIdGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingBookingsByIdGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingBookingsByIdGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsByIdGetResponse>;
  }

  /**
   * Here is the list of operations that are currently allowed:
   * - Add, replace and remove PaymentAccount
   * - Add, replace and remove Comment
   * - Add, replace and remove BookerComment
   * - Copy PaymentAccount, Comment and BookerComment from the booking to any reservation, or the other
   * way around
   * - Replace Booker<br>You must have this scope: 'reservations.manage'.
   * @param id Id of the booking to be modified.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  bookingBookingsByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingBookingsByIdPatchResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingBookingsByIdPatchOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingBookingsByIdPatchResponse>;
  }

  /**
   * <br>You must have at least one of these scopes: 'groups.create, reservations.manage'.
   * @param body The details of the group that should be created.
   * @param options The options parameters.
   */
  bookingGroupsPost(
    body: CreateGroupModel,
    options?: ApaleoBookingAPIBookingGroupsPostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingGroupsPostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { body, options: operationOptions },
      bookingGroupsPostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsPostResponse>;
  }

  /**
   * Returns a list of all group bookings, filtered by the specified parameters.
   * If no parameters are set, returns the entire list<br>You must have at least one of these scopes:
   * 'groups.read, reservations.read, reservations.manage'.
   * @param options The options parameters.
   */
  bookingGroupsGet(
    options?: ApaleoBookingAPIBookingGroupsGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingGroupsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingGroupsGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsGetResponse>;
  }

  /**
   * Retrieves a specific group booking with all its related blocks<br>You must have at least one of
   * these scopes: 'groups.read, reservations.read, reservations.manage'.
   * @param id Id of the group booking to be retrieved.
   * @param options The options parameters.
   */
  bookingGroupsByIdGet(
    id: string,
    options?: ApaleoBookingAPIBookingGroupsByIdGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingGroupsByIdGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingGroupsByIdGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsByIdGetResponse>;
  }

  /**
   * Here is the list of operations that are currently allowed:
   * - Add and replace Name
   * - Add, replace and remove Comment
   * - Add, replace and remove BookerComment
   * - Add, replace and remove PaymentAccount
   * - Add, replace and remove PropertyIds
   * - Replace Booker<br>You must have at least one of these scopes: 'groups.manage,
   * reservations.manage'.
   * @param id Id of the group booking to be modified.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  bookingGroupsByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingGroupsByIdPatchResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingGroupsByIdPatchOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsByIdPatchResponse>;
  }

  /**
   * Use this call to delete a group booking. This is only possible as long as no blocks exist that are
   * linked to
   * this group booking<br>You must have at least one of these scopes: 'groups.manage,
   * reservations.manage'.
   * @param id Id of the group booking to be deleted.
   * @param options The options parameters.
   */
  bookingGroupsByIdDelete(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingGroupsByIdDeleteResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingGroupsByIdDeleteOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsByIdDeleteResponse>;
  }

  /**
   * Check if a group booking exists by id<br>You must have at least one of these scopes: 'groups.read,
   * reservations.read, reservations.manage'.
   * @param id Id of the group booking to be checked for existence.
   * @param options The options parameters.
   */
  bookingGroupsByIdHead(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<coreHttp.RestResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingGroupsByIdHeadOperationSpec,
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Returns number of group bookings matching the filter criteria<br>You must have at least one of these
   * scopes: 'groups.read, reservations.read, reservations.manage'.
   * @param options The options parameters.
   */
  bookingGroupsCountGet(
    options?: ApaleoBookingAPIBookingGroupsCountGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingGroupsCountGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingGroupsCountGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsCountGetResponse>;
  }

  /**
   * Creates new reservations and adds them to an existing group booking taking a list of reservations as
   * input<br>You must have at least one of these scopes: 'groups.manage, reservations.manage'.
   * @param id Id of the group booking the reservations should be attached to.
   * @param body The list of reservations you want to create.
   * @param options The options parameters.
   */
  bookingGroupsByIdReservationsPost(
    id: string,
    body: PickUpReservationsModel,
    options?: ApaleoBookingAPIBookingGroupsByIdReservationsPostOptionalParams,
  ): Promise<ApaleoBookingAPIBookingGroupsByIdReservationsPostResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingGroupsByIdReservationsPostOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingGroupsByIdReservationsPostResponse>;
  }

  /**
   * Calculates and returns available offers for a specific property, arrival and departure date.<br>You
   * must have at least one of these scopes: 'offers.read, reservations.manage'.
   * @param propertyId The property ID
   * @param arrival Date and optional time of arrival<br />Specify either a pure date or a date and time
   *                (without fractional second part) in UTC or with UTC offset as defined in <a
   *                href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param departure Date and optional time of departure. Cannot be more than 5 years after arrival.<br
   *                  />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC
   *                  offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param adults The number of adults you want offers for
   * @param options The options parameters.
   */
  bookingOffersGet(
    propertyId: string,
    arrival: string,
    departure: string,
    adults: number,
    options?: ApaleoBookingAPIBookingOffersGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingOffersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { propertyId, arrival, departure, adults, options: operationOptions },
      bookingOffersGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingOffersGetResponse>;
  }

  /**
   * Calculates and returns available offers for a specific rate plan, arrival and departure date.<br>You
   * must have at least one of these scopes: 'offers.read, reservations.manage'.
   * @param ratePlanId The rate plan ID
   * @param arrival Date and optional time of arrival<br />Specify either a pure date or a date and time
   *                (without fractional second part) in UTC or with UTC offset as defined in <a
   *                href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param departure Date and optional time of departure. Cannot be more than 5 years after arrival.<br
   *                  />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC
   *                  offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param adults The number of adults you want offers for
   * @param options The options parameters.
   */
  bookingRatePlanOffersGet(
    ratePlanId: string,
    arrival: string,
    departure: string,
    adults: number,
    options?: ApaleoBookingAPIBookingRatePlanOffersGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingRatePlanOffersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { ratePlanId, arrival, departure, adults, options: operationOptions },
      bookingRatePlanOffersGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingRatePlanOffersGetResponse>;
  }

  /**
   * <br>You must have at least one of these scopes: 'offers.read, reservations.manage'.
   * @param ratePlanId The rate plan ID
   * @param arrival Date and optional time of arrival<br />Specify either a pure date or a date and time
   *                (without fractional second part) in UTC or with UTC offset as defined in <a
   *                href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param departure Date and optional time of departure. Cannot be more than 5 years after arrival.<br
   *                  />Specify either a pure date or a date and time (without fractional second part) in UTC or with UTC
   *                  offset as defined in <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param adults The number of adults you want offers for
   * @param options The options parameters.
   */
  bookingServiceOffersGet(
    ratePlanId: string,
    arrival: string,
    departure: string,
    adults: number,
    options?: ApaleoBookingAPIBookingServiceOffersGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingServiceOffersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { ratePlanId, arrival, departure, adults, options: operationOptions },
      bookingServiceOffersGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingServiceOffersGetResponse>;
  }

  /**
   * Calculates and returns offers per time slice for a specific rate plan, arrival and departure
   * date.<br>You must have at least one of these scopes: 'offer-index.read, offers.read'.
   * @param ratePlanId
   * @param to <br />Specify either a pure date or a date and time (without fractional second part) in
   *           UTC or with UTC offset as defined in <a
   *           href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param channelCode Channel code
   * @param fromParam <br />Specify either a pure date or a date and time (without fractional second
   *                  part) in UTC or with UTC offset as defined in <a
   *                  href="https://en.wikipedia.org/wiki/ISO_8601">ISO8601:2004</a>
   * @param options The options parameters.
   */
  bookingOfferIndexGet(
    ratePlanId: string,
    to: string,
    channelCode: ChannelCode,
    fromParam: string,
    options?: ApaleoBookingAPIBookingOfferIndexGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingOfferIndexGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { ratePlanId, to, channelCode, fromParam, options: operationOptions },
      bookingOfferIndexGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingOfferIndexGetResponse>;
  }

  /**
   * Returns a list of all reservations, filtered by the specified parameters. If no parameters are set,
   * returns the entire list.<br>You must have at least one of these scopes: 'reservations.read,
   * reservations.manage'.
   * @param options The options parameters.
   */
  bookingReservationsGet(
    options?: ApaleoBookingAPIBookingReservationsGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationsGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingReservationsGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsGetResponse>;
  }

  /**
   * If no parameters are set, returns the total count of reservations.<br>You must have at least one of
   * these scopes: 'reservations.read, reservations.manage'.
   * @param options The options parameters.
   */
  bookingReservationsCountGet(
    options?: ApaleoBookingAPIBookingReservationsCountGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationsCountGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingReservationsCountGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsCountGetResponse>;
  }

  /**
   * Retrieves a reservation, specified by its ID.<br>You must have at least one of these scopes:
   * 'reservations.read, reservations.manage'.
   * @param id Id of the reservation to be retrieved.
   * @param options The options parameters.
   */
  bookingReservationsByIdGet(
    id: string,
    options?: ApaleoBookingAPIBookingReservationsByIdGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationsByIdGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationsByIdGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsByIdGetResponse>;
  }

  /**
   * Here is the list of operations that are currently allowed:
   * - Add, replace and remove Comment
   * - Add, replace and remove GuestComment
   * - Add, replace and remove PaymentAccount
   * - Add, replace and remove TravelPurpose
   * - Add, replace and remove AdditionalGuests
   * - Add a company (using company/Id, and only if not already set)
   * - Add, replace and remove Commission
   * - Replace PrimaryGuest
   * - Remove ValidationMessages<br>You must have this scope: 'reservations.manage'.
   * @param id Id of the reservation to be modified.
   * @param body Define the list of operations to be applied to the resource. Learn more about JSON Patch
   *             here: http://jsonpatch.com/.
   * @param options The options parameters.
   */
  bookingReservationsByIdPatch(
    id: string,
    body: Operation[],
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationsByIdPatchResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingReservationsByIdPatchOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsByIdPatchResponse>;
  }

  /**
   * Calculates and returns offers for amending a specific reservation.<br>You must have at least one of
   * these scopes: 'offers.read, reservations.manage'.
   * @param id Id of the reservation to be amended.
   * @param options The options parameters.
   */
  bookingReservationsByIdOffersGet(
    id: string,
    options?: ApaleoBookingAPIBookingReservationsByIdOffersGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationsByIdOffersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationsByIdOffersGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsByIdOffersGetResponse>;
  }

  /**
   * Calculates and returns service offers for a specific reservation.<br>You must have at least one of
   * these scopes: 'offers.read, reservations.manage'.
   * @param id Id of the reservation.
   * @param options The options parameters.
   */
  bookingReservationsByIdServiceOffersGet(
    id: string,
    options?: ApaleoBookingAPIBookingReservationsByIdServiceOffersGetOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationsByIdServiceOffersGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationsByIdServiceOffersGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsByIdServiceOffersGetResponse>;
  }

  /**
   * Returns the services booked for a specific reservation.<br>You must have at least one of these
   * scopes: 'reservations.read, reservations.manage'.
   * @param id Id of the reservation.
   * @param options The options parameters.
   */
  bookingReservationsByIdServicesGet(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationsByIdServicesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationsByIdServicesGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsByIdServicesGetResponse>;
  }

  /**
   * Removes a service from a reservation. The service will not be removed if it is already posted or if
   * the service date is in the past.<br>You must have this scope: 'reservations.manage'.
   * @param id Id of the reservation.
   * @param serviceId The id of the service to delete
   * @param options The options parameters.
   */
  bookingReservationsByIdServicesDelete(
    id: string,
    serviceId: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationsByIdServicesDeleteResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, serviceId, options: operationOptions },
      bookingReservationsByIdServicesDeleteOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationsByIdServicesDeleteResponse>;
  }

  /**
   * Assigns one of the available units to a reservation which is in state 'Confirmed' or
   * 'InHouse'.<br>You must have at least one of these scopes: 'reservations.assign-unit,
   * reservations.manage'.
   * @param id Id of the reservation a unit should be assigned to.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdAssignUnitPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdAssignUnitPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdAssignUnitPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdAssignUnitPutResponse>;
  }

  /**
   * Assigns a specific unit to a reservation which is in state 'Confirmed' or 'InHouse'.<br />If the
   * unit is not available, the call will return an error, and no unit will be assigned.<br>You must have
   * at least one of these scopes: 'reservations.assign-unit, reservations.manage'.
   * @param id Id of the reservation the unit should be assigned to.
   * @param unitId The id of the unit to be assigned.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdAssignUnitByUnitIdPut(
    id: string,
    unitId: string,
    options?: ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, unitId, options: operationOptions },
      bookingReservationActionsByIdAssignUnitByUnitIdPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdAssignUnitByUnitIdPutResponse>;
  }

  /**
   * Unassigns units for all time slices of the given reservation. If no units are assigned for the
   * reservation nothing will happen. It will fail for reservations in status 'CheckedOut'.<br>You must
   * have at least one of these scopes: 'reservations.assign-unit, reservations.manage'.
   * @param id Id of the reservation the unit should be unassigned for.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdUnassignUnitsPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdUnassignUnitsPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdUnassignUnitsPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdUnassignUnitsPutResponse>;
  }

  /**
   * Check in a specific reservation which is in status 'Confirmed', and has a unit assigned. This
   * changes the status to 'InHouse', and sets the check-in date and time.<br>You must have this scope:
   * 'reservations.manage'.
   * @param id Id of the reservation that should be processed.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdCheckinPut(
    id: string,
    options?: ApaleoBookingAPIBookingReservationActionsByIdCheckinPutOptionalParams,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdCheckinPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdCheckinPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdCheckinPutResponse>;
  }

  /**
   * Check out a specific reservation which is in status 'InHouse'. This changes the status to
   * 'CheckedOut', and sets the check-out date and time.
   * All open charges on the folio will be posted.
   * <br />
   * Check-out is only possible, if the departure date is not later than tomorrow. Otherwise, first amend
   * the reservation and shorten the stay.<br>You must have this scope: 'reservations.manage'.
   * @param id Id of the reservation that should be processed.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdCheckoutPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdCheckoutPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdCheckoutPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdCheckoutPutResponse>;
  }

  /**
   * Cancel a specific reservation which is in status 'Confirmed' and where the arrival time is in the
   * future.
   * This changes the status to 'Canceled', and sets the cancellation date and time.<br>You must have
   * this scope: 'reservations.manage'.
   * @param id Id of the reservation that should be processed.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdCancelPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdCancelPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdCancelPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdCancelPutResponse>;
  }

  /**
   * Set a specific reservation to No-show which is in status 'Confirmed' and where the arrival date is
   * in the past.
   * This changes the status to 'NoShow', and sets the no-show date and time.<br>You must have this
   * scope: 'reservations.manage'.
   * @param id Id of the reservation that should be processed.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdNoshowPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdNoshowPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdNoshowPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdNoshowPutResponse>;
  }

  /**
   * Modifies the stay-related data of a reservation.<br />
   * If a reservation is 'Confirmed', you can change all fields.<br />
   * If a reservation is 'InHouse', only changes to future time slices are possible.<br />
   * Changes to reservations that are in the status 'CheckedOut' or 'Canceled' are not possible at
   * all.<br>You must have this scope: 'reservations.manage'.
   * @param id Id of the reservation that should be modified
   * @param body The new stay details that should be applied to the reservation.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdAmendPut(
    id: string,
    body: DesiredStayDetailsModel,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdAmendPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingReservationActionsByIdAmendPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdAmendPutResponse>;
  }

  /**
   * Modifies the stay-related data of a reservation.<br />
   * If a reservation is 'Confirmed', you can change all fields.<br />
   * If a reservation is 'InHouse', only changes to future time slices are possible.<br />
   * Changes to reservations that are in the status 'CheckedOut' or 'Canceled' are not possible at
   * all.<br>You must have this scope: 'reservations.force-manage'.
   * @param id Id of the reservation that should be modified
   * @param body The new stay details that should be applied to the reservation.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdAmendForcePut(
    id: string,
    body: DesiredStayDetailsModel,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdAmendForcePutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingReservationActionsByIdAmendForcePutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdAmendForcePutResponse>;
  }

  /**
   * Use this to book a service for a specific reservation.
   * Please note that when dates are specified, all desired dates must be specified or they will be
   * removed if not posted to the folio.<br>You must have this scope: 'reservations.manage'.
   * @param id Id of the reservation.
   * @param body
   * @param options The options parameters.
   */
  bookingReservationActionsByIdBookServicePut(
    id: string,
    body: BookReservationServiceModel,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdBookServicePutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, body, options: operationOptions },
      bookingReservationActionsByIdBookServicePutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdBookServicePutResponse>;
  }

  /**
   * Use this is you want to remove the city tax from a reservation before the stay.<br>You must have
   * this scope: 'reservations.manage'.
   * @param id Id of the reservation.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdRemoveCityTaxPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdRemoveCityTaxPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdRemoveCityTaxPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdRemoveCityTaxPutResponse>;
  }

  /**
   * Use this if you want to add the city tax to a reservation.<br>You must have this scope:
   * 'reservations.manage'.
   * @param id Id of the reservation.
   * @param options The options parameters.
   */
  bookingReservationActionsByIdAddCityTaxPut(
    id: string,
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingReservationActionsByIdAddCityTaxPutResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { id, options: operationOptions },
      bookingReservationActionsByIdAddCityTaxPutOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingReservationActionsByIdAddCityTaxPutResponse>;
  }

  /**
   * Returns a list of channels that could be used as a source to create bookings.
   * @param options The options parameters.
   */
  bookingTypesSourcesGet(
    options?: coreHttp.OperationOptions,
  ): Promise<ApaleoBookingAPIBookingTypesSourcesGetResponse> {
    const operationOptions: coreHttp.RequestOptionsBase = coreHttp.operationOptionsToRequestOptionsBase(
      options || {},
    );
    return this.sendOperationRequest(
      { options: operationOptions },
      bookingTypesSourcesGetOperationSpec,
    ) as Promise<ApaleoBookingAPIBookingTypesSourcesGetResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const bookingBlocksPostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.BlockCreatedModel,
      headersMapper: Mappers.ApaleoBookingAPIBookingBlocksPostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingBlocksGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.BlockListModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.groupId,
    Parameters.propertyIds,
    Parameters.status,
    Parameters.unitGroupIds,
    Parameters.ratePlanIds,
    Parameters.timeSliceDefinitionIds,
    Parameters.unitGroupTypes,
    Parameters.timeSliceTemplate,
    Parameters.fromParam,
    Parameters.to,
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.expand,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlocksCountGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks/$count',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.CountModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.groupId,
    Parameters.propertyIds,
    Parameters.status,
    Parameters.unitGroupIds,
    Parameters.ratePlanIds,
    Parameters.timeSliceDefinitionIds,
    Parameters.unitGroupTypes,
    Parameters.timeSliceTemplate,
    Parameters.fromParam,
    Parameters.to,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlocksByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks/{id}',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.BlockModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.expand1],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlocksByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks/{id}',
  httpMethod: 'PATCH',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingBlocksByIdDeleteOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks/{id}',
  httpMethod: 'DELETE',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlocksByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/blocks/{id}',
  httpMethod: 'HEAD',
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer,
};
const bookingBlockActionsByIdConfirmPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/block-actions/{id}/confirm',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlockActionsByIdReleasePutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/block-actions/{id}/release',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlockActionsByIdCancelPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/block-actions/{id}/cancel',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBlockActionsByIdWashPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/block-actions/{id}/wash',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBookingsPostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.BookingCreatedModel,
      headersMapper: Mappers.ApaleoBookingAPIBookingBookingsPostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingBookingsGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.BookingListModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.groupId,
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.reservationId,
    Parameters.channelCode,
    Parameters.externalCode,
    Parameters.textSearch,
    Parameters.expand2,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBookingsForcePostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings/$force',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.BookingCreatedModel,
      headersMapper: Mappers.ApaleoBookingAPIBookingBookingsForcePostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingBookingsByIdReservationsPostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings/{id}/reservations',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.ReservationsCreatedModel,
      headersMapper:
        Mappers.ApaleoBookingAPIBookingBookingsByIdReservationsPostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingBookingsByIdReservationsForcePostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings/{id}/reservations/$force',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.ReservationsCreatedModel,
      headersMapper:
        Mappers.ApaleoBookingAPIBookingBookingsByIdReservationsForcePostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingBookingsByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings/{id}',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.BookingModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.expand3],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingBookingsByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/bookings/{id}',
  httpMethod: 'PATCH',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingGroupsPostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.GroupCreatedModel,
      headersMapper: Mappers.ApaleoBookingAPIBookingGroupsPostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingGroupsGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.GroupListModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.fromParam,
    Parameters.to,
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.textSearch,
    Parameters.expand4,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingGroupsByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups/{id}',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.GroupModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.expand5],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingGroupsByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups/{id}',
  httpMethod: 'PATCH',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingGroupsByIdDeleteOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups/{id}',
  httpMethod: 'DELETE',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingGroupsByIdHeadOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups/{id}',
  httpMethod: 'HEAD',
  responses: { 200: {}, 400: {}, 401: {}, 403: {}, 404: {}, 500: {}, 503: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer,
};
const bookingGroupsCountGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups/$count',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.CountModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.fromParam,
    Parameters.to,
    Parameters.textSearch,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingGroupsByIdReservationsPostOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/groups/{id}/reservations',
  httpMethod: 'POST',
  responses: {
    201: {
      bodyMapper: Mappers.ReservationsCreatedModel,
      headersMapper:
        Mappers.ApaleoBookingAPIBookingGroupsByIdReservationsPostHeaders,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body5,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.idempotencyKey,
  ],
  mediaType: 'json',
  serializer,
};
const bookingOffersGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/offers',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.StayOffersModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.unitGroupIds,
    Parameters.timeSliceDefinitionIds,
    Parameters.unitGroupTypes,
    Parameters.timeSliceTemplate,
    Parameters.propertyId,
    Parameters.arrival,
    Parameters.departure,
    Parameters.channelCode1,
    Parameters.promoCode,
    Parameters.corporateCode,
    Parameters.adults,
    Parameters.childrenAges,
    Parameters.includeUnavailable,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingRatePlanOffersGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/rate-plan-offers',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.StayOffersModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.arrival,
    Parameters.departure,
    Parameters.channelCode1,
    Parameters.adults,
    Parameters.childrenAges,
    Parameters.includeUnavailable,
    Parameters.ratePlanId,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingServiceOffersGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/service-offers',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.ServiceOffersModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.arrival,
    Parameters.departure,
    Parameters.channelCode1,
    Parameters.adults,
    Parameters.childrenAges,
    Parameters.ratePlanId,
    Parameters.onlyDefaultDates,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingOfferIndexGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/offer-index',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.TimeSliceListModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.ratePlanId,
    Parameters.fromParam1,
    Parameters.to1,
    Parameters.channelCode2,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.ReservationListModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.unitGroupIds,
    Parameters.ratePlanIds,
    Parameters.unitGroupTypes,
    Parameters.fromParam,
    Parameters.to,
    Parameters.pageNumber,
    Parameters.pageSize,
    Parameters.channelCode,
    Parameters.externalCode,
    Parameters.textSearch,
    Parameters.bookingId,
    Parameters.companyIds,
    Parameters.unitIds,
    Parameters.blockIds,
    Parameters.status1,
    Parameters.dateFilter,
    Parameters.sources,
    Parameters.validationMessageCategory,
    Parameters.balanceFilter,
    Parameters.allFoliosHaveInvoice,
    Parameters.sort,
    Parameters.expand6,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsCountGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/$count',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.CountModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.propertyIds,
    Parameters.unitGroupIds,
    Parameters.ratePlanIds,
    Parameters.unitGroupTypes,
    Parameters.fromParam,
    Parameters.to,
    Parameters.channelCode,
    Parameters.externalCode,
    Parameters.textSearch,
    Parameters.bookingId,
    Parameters.companyIds,
    Parameters.unitIds,
    Parameters.blockIds,
    Parameters.status1,
    Parameters.dateFilter,
    Parameters.sources,
    Parameters.validationMessageCategory,
    Parameters.balanceFilter,
    Parameters.allFoliosHaveInvoice,
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsByIdGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/{id}',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.ReservationModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.expand7],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsByIdPatchOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/{id}',
  httpMethod: 'PATCH',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingReservationsByIdOffersGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/{id}/offers',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.ReservationStayOffersModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [
    Parameters.channelCode1,
    Parameters.promoCode,
    Parameters.childrenAges,
    Parameters.includeUnavailable,
    Parameters.arrival1,
    Parameters.departure1,
    Parameters.adults1,
    Parameters.requote,
  ],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsByIdServiceOffersGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/{id}/service-offers',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.ServiceOffersModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.channelCode1, Parameters.onlyDefaultDates],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsByIdServicesGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/{id}/services',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.ReservationServiceListModel,
    },
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationsByIdServicesDeleteOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservations/{id}/services',
  httpMethod: 'DELETE',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.serviceId],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdAssignUnitPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/assign-unit',
  httpMethod: 'PUT',
  responses: {
    200: {
      bodyMapper: Mappers.AutoAssignedUnitListModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdAssignUnitByUnitIdPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/assign-unit/{unitId}',
  httpMethod: 'PUT',
  responses: {
    200: {
      bodyMapper: Mappers.AssignedUnitModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.fromParam2, Parameters.to2],
  urlParameters: [Parameters.$host, Parameters.id, Parameters.unitId],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdUnassignUnitsPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/unassign-units',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdCheckinPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/checkin',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  queryParameters: [Parameters.withCityTax],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdCheckoutPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/checkout',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdCancelPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/cancel',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdNoshowPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/noshow',
  httpMethod: 'PUT',
  responses: {
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdAmendPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/amend',
  httpMethod: 'PUT',
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body6,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingReservationActionsByIdAmendForcePutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/amend/$force',
  httpMethod: 'PUT',
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body6,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingReservationActionsByIdBookServicePutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/book-service',
  httpMethod: 'PUT',
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    415: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  requestBody: Parameters.body7,
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: 'json',
  serializer,
};
const bookingReservationActionsByIdRemoveCityTaxPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/remove-city-tax',
  httpMethod: 'PUT',
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingReservationActionsByIdAddCityTaxPutOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/reservation-actions/{id}/add-city-tax',
  httpMethod: 'PUT',
  responses: {
    200: {},
    204: {},
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept1],
  serializer,
};
const bookingTypesSourcesGetOperationSpec: coreHttp.OperationSpec = {
  path: '/booking/v1/types/sources',
  httpMethod: 'GET',
  responses: {
    200: {
      bodyMapper: Mappers.SourceListModel,
    },
    400: {},
    401: {},
    403: {},
    404: {},
    422: {
      bodyMapper: Mappers.MessageItemCollection,
    },
    500: {},
    503: {},
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept1],
  serializer,
};
