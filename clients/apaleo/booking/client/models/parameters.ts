import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
  QueryCollectionFormat,
} from '@azure/core-http';
import {
  CreateBlockModel as CreateBlockModelMapper,
  CreateBookingModel as CreateBookingModelMapper,
  AddReservationsModel as AddReservationsModelMapper,
  CreateGroupModel as CreateGroupModelMapper,
  PickUpReservationsModel as PickUpReservationsModelMapper,
  DesiredStayDetailsModel as DesiredStayDetailsModelMapper,
  BookReservationServiceModel as BookReservationServiceModelMapper,
} from './mappers';

export const contentType: OperationParameter = {
  parameterPath: ['options', 'contentType'],
  mapper: {
    defaultValue: 'application/json',
    isConstant: true,
    serializedName: 'Content-Type',
    type: {
      name: 'String',
    },
  },
};

export const body: OperationParameter = {
  parameterPath: 'body',
  mapper: CreateBlockModelMapper,
};

export const accept: OperationParameter = {
  parameterPath: 'accept',
  mapper: {
    defaultValue: 'application/json',
    isConstant: true,
    serializedName: 'Accept',
    type: {
      name: 'String',
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: '$host',
  mapper: {
    serializedName: '$host',
    required: true,
    type: {
      name: 'String',
    },
  },
  skipEncoding: true,
};

export const idempotencyKey: OperationParameter = {
  parameterPath: ['options', 'idempotencyKey'],
  mapper: {
    serializedName: 'Idempotency-Key',
    type: {
      name: 'String',
    },
  },
};

export const accept1: OperationParameter = {
  parameterPath: 'accept',
  mapper: {
    defaultValue: 'application/json',
    isConstant: true,
    serializedName: 'Accept',
    type: {
      name: 'String',
    },
  },
};

export const groupId: OperationQueryParameter = {
  parameterPath: ['options', 'groupId'],
  mapper: {
    serializedName: 'groupId',
    type: {
      name: 'String',
    },
  },
};

export const propertyIds: OperationQueryParameter = {
  parameterPath: ['options', 'propertyIds'],
  mapper: {
    serializedName: 'propertyIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const status: OperationQueryParameter = {
  parameterPath: ['options', 'status'],
  mapper: {
    serializedName: 'status',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Enum',
          allowedValues: ['Tentative', 'Definite', 'Canceled'],
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const unitGroupIds: OperationQueryParameter = {
  parameterPath: ['options', 'unitGroupIds'],
  mapper: {
    serializedName: 'unitGroupIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const ratePlanIds: OperationQueryParameter = {
  parameterPath: ['options', 'ratePlanIds'],
  mapper: {
    serializedName: 'ratePlanIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const timeSliceDefinitionIds: OperationQueryParameter = {
  parameterPath: ['options', 'timeSliceDefinitionIds'],
  mapper: {
    serializedName: 'timeSliceDefinitionIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const unitGroupTypes: OperationQueryParameter = {
  parameterPath: ['options', 'unitGroupTypes'],
  mapper: {
    serializedName: 'unitGroupTypes',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Enum',
          allowedValues: [
            'BedRoom',
            'MeetingRoom',
            'EventSpace',
            'ParkingLot',
            'Other',
          ],
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const timeSliceTemplate: OperationQueryParameter = {
  parameterPath: ['options', 'timeSliceTemplate'],
  mapper: {
    serializedName: 'timeSliceTemplate',
    type: {
      name: 'Enum',
      allowedValues: ['DayUse', 'OverNight'],
    },
  },
};

export const fromParam: OperationQueryParameter = {
  parameterPath: ['options', 'fromParam'],
  mapper: {
    serializedName: 'from',
    type: {
      name: 'DateTime',
    },
  },
};

export const to: OperationQueryParameter = {
  parameterPath: ['options', 'to'],
  mapper: {
    serializedName: 'to',
    type: {
      name: 'DateTime',
    },
  },
};

export const pageNumber: OperationQueryParameter = {
  parameterPath: ['options', 'pageNumber'],
  mapper: {
    defaultValue: 1,
    serializedName: 'pageNumber',
    type: {
      name: 'Number',
    },
  },
};

export const pageSize: OperationQueryParameter = {
  parameterPath: ['options', 'pageSize'],
  mapper: {
    defaultValue: 100,
    serializedName: 'pageSize',
    type: {
      name: 'Number',
    },
  },
};

export const expand: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const id: OperationURLParameter = {
  parameterPath: 'id',
  mapper: {
    serializedName: 'id',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const expand1: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const body1: OperationParameter = {
  parameterPath: 'body',
  mapper: {
    serializedName: 'body',
    required: true,
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Composite',
          className: 'Operation',
        },
      },
    },
  },
};

export const body2: OperationParameter = {
  parameterPath: 'body',
  mapper: CreateBookingModelMapper,
};

export const reservationId: OperationQueryParameter = {
  parameterPath: ['options', 'reservationId'],
  mapper: {
    serializedName: 'reservationId',
    type: {
      name: 'String',
    },
  },
};

export const channelCode: OperationQueryParameter = {
  parameterPath: ['options', 'channelCode'],
  mapper: {
    serializedName: 'channelCode',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Enum',
          allowedValues: [
            'Direct',
            'BookingCom',
            'Ibe',
            'ChannelManager',
            'Expedia',
            'Homelike',
          ],
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const externalCode: OperationQueryParameter = {
  parameterPath: ['options', 'externalCode'],
  mapper: {
    serializedName: 'externalCode',
    type: {
      name: 'String',
    },
  },
};

export const textSearch: OperationQueryParameter = {
  parameterPath: ['options', 'textSearch'],
  mapper: {
    serializedName: 'textSearch',
    type: {
      name: 'String',
    },
  },
};

export const expand2: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const body3: OperationParameter = {
  parameterPath: 'body',
  mapper: AddReservationsModelMapper,
};

export const expand3: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const body4: OperationParameter = {
  parameterPath: 'body',
  mapper: CreateGroupModelMapper,
};

export const expand4: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const expand5: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const body5: OperationParameter = {
  parameterPath: 'body',
  mapper: PickUpReservationsModelMapper,
};

export const propertyId: OperationQueryParameter = {
  parameterPath: 'propertyId',
  mapper: {
    serializedName: 'propertyId',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const arrival: OperationQueryParameter = {
  parameterPath: 'arrival',
  mapper: {
    serializedName: 'arrival',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const departure: OperationQueryParameter = {
  parameterPath: 'departure',
  mapper: {
    serializedName: 'departure',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const channelCode1: OperationQueryParameter = {
  parameterPath: ['options', 'channelCode'],
  mapper: {
    serializedName: 'channelCode',
    type: {
      name: 'Enum',
      allowedValues: [
        'Direct',
        'BookingCom',
        'Ibe',
        'ChannelManager',
        'Expedia',
        'Homelike',
      ],
    },
  },
};

export const promoCode: OperationQueryParameter = {
  parameterPath: ['options', 'promoCode'],
  mapper: {
    serializedName: 'promoCode',
    type: {
      name: 'String',
    },
  },
};

export const corporateCode: OperationQueryParameter = {
  parameterPath: ['options', 'corporateCode'],
  mapper: {
    serializedName: 'corporateCode',
    type: {
      name: 'String',
    },
  },
};

export const adults: OperationQueryParameter = {
  parameterPath: 'adults',
  mapper: {
    serializedName: 'adults',
    required: true,
    type: {
      name: 'Number',
    },
  },
};

export const childrenAges: OperationQueryParameter = {
  parameterPath: ['options', 'childrenAges'],
  mapper: {
    serializedName: 'childrenAges',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Number',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const includeUnavailable: OperationQueryParameter = {
  parameterPath: ['options', 'includeUnavailable'],
  mapper: {
    serializedName: 'includeUnavailable',
    type: {
      name: 'Boolean',
    },
  },
};

export const ratePlanId: OperationQueryParameter = {
  parameterPath: 'ratePlanId',
  mapper: {
    serializedName: 'ratePlanId',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const onlyDefaultDates: OperationQueryParameter = {
  parameterPath: ['options', 'onlyDefaultDates'],
  mapper: {
    serializedName: 'onlyDefaultDates',
    type: {
      name: 'Boolean',
    },
  },
};

export const fromParam1: OperationQueryParameter = {
  parameterPath: 'fromParam',
  mapper: {
    serializedName: 'from',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const to1: OperationQueryParameter = {
  parameterPath: 'to',
  mapper: {
    serializedName: 'to',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const channelCode2: OperationQueryParameter = {
  parameterPath: 'channelCode',
  mapper: {
    serializedName: 'channelCode',
    required: true,
    type: {
      name: 'Enum',
      allowedValues: [
        'Direct',
        'BookingCom',
        'Ibe',
        'ChannelManager',
        'Expedia',
        'Homelike',
      ],
    },
  },
};

export const bookingId: OperationQueryParameter = {
  parameterPath: ['options', 'bookingId'],
  mapper: {
    serializedName: 'bookingId',
    type: {
      name: 'String',
    },
  },
};

export const companyIds: OperationQueryParameter = {
  parameterPath: ['options', 'companyIds'],
  mapper: {
    serializedName: 'companyIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const unitIds: OperationQueryParameter = {
  parameterPath: ['options', 'unitIds'],
  mapper: {
    serializedName: 'unitIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const blockIds: OperationQueryParameter = {
  parameterPath: ['options', 'blockIds'],
  mapper: {
    serializedName: 'blockIds',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const status1: OperationQueryParameter = {
  parameterPath: ['options', 'status'],
  mapper: {
    serializedName: 'status',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Enum',
          allowedValues: [
            'Confirmed',
            'InHouse',
            'CheckedOut',
            'Canceled',
            'NoShow',
          ],
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const dateFilter: OperationQueryParameter = {
  parameterPath: ['options', 'dateFilter'],
  mapper: {
    serializedName: 'dateFilter',
    type: {
      name: 'Enum',
      allowedValues: [
        'Arrival',
        'Departure',
        'Stay',
        'Creation',
        'Modification',
        'Cancellation',
      ],
    },
  },
};

export const sources: OperationQueryParameter = {
  parameterPath: ['options', 'sources'],
  mapper: {
    serializedName: 'sources',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const validationMessageCategory: OperationQueryParameter = {
  parameterPath: ['options', 'validationMessageCategory'],
  mapper: {
    serializedName: 'validationMessageCategory',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'Enum',
          allowedValues: ['OfferNotAvailable', 'AutoUnitAssignment'],
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const balanceFilter: OperationQueryParameter = {
  parameterPath: ['options', 'balanceFilter'],
  mapper: {
    serializedName: 'balanceFilter',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const allFoliosHaveInvoice: OperationQueryParameter = {
  parameterPath: ['options', 'allFoliosHaveInvoice'],
  mapper: {
    serializedName: 'allFoliosHaveInvoice',
    type: {
      name: 'Boolean',
    },
  },
};

export const sort: OperationQueryParameter = {
  parameterPath: ['options', 'sort'],
  mapper: {
    serializedName: 'sort',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const expand6: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const expand7: OperationQueryParameter = {
  parameterPath: ['options', 'expand'],
  mapper: {
    serializedName: 'expand',
    type: {
      name: 'Sequence',
      element: {
        type: {
          name: 'String',
        },
      },
    },
  },
  collectionFormat: QueryCollectionFormat.Csv,
};

export const arrival1: OperationQueryParameter = {
  parameterPath: ['options', 'arrival'],
  mapper: {
    serializedName: 'arrival',
    type: {
      name: 'String',
    },
  },
};

export const departure1: OperationQueryParameter = {
  parameterPath: ['options', 'departure'],
  mapper: {
    serializedName: 'departure',
    type: {
      name: 'String',
    },
  },
};

export const adults1: OperationQueryParameter = {
  parameterPath: ['options', 'adults'],
  mapper: {
    serializedName: 'adults',
    type: {
      name: 'Number',
    },
  },
};

export const requote: OperationQueryParameter = {
  parameterPath: ['options', 'requote'],
  mapper: {
    serializedName: 'requote',
    type: {
      name: 'Boolean',
    },
  },
};

export const serviceId: OperationQueryParameter = {
  parameterPath: 'serviceId',
  mapper: {
    serializedName: 'serviceId',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const unitId: OperationURLParameter = {
  parameterPath: 'unitId',
  mapper: {
    serializedName: 'unitId',
    required: true,
    type: {
      name: 'String',
    },
  },
};

export const fromParam2: OperationQueryParameter = {
  parameterPath: ['options', 'fromParam'],
  mapper: {
    serializedName: 'from',
    type: {
      name: 'String',
    },
  },
};

export const to2: OperationQueryParameter = {
  parameterPath: ['options', 'to'],
  mapper: {
    serializedName: 'to',
    type: {
      name: 'String',
    },
  },
};

export const withCityTax: OperationQueryParameter = {
  parameterPath: ['options', 'withCityTax'],
  mapper: {
    serializedName: 'withCityTax',
    type: {
      name: 'Boolean',
    },
  },
};

export const body6: OperationParameter = {
  parameterPath: 'body',
  mapper: DesiredStayDetailsModelMapper,
};

export const body7: OperationParameter = {
  parameterPath: 'body',
  mapper: BookReservationServiceModelMapper,
};
