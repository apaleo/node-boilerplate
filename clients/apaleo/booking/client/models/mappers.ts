import * as coreHttp from '@azure/core-http';

export const CreateBlockModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreateBlockModel',
    modelProperties: {
      groupId: {
        serializedName: 'groupId',
        required: true,
        type: {
          name: 'String',
        },
      },
      ratePlanId: {
        serializedName: 'ratePlanId',
        required: true,
        type: {
          name: 'String',
        },
      },
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'String',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'String',
        },
      },
      grossDailyRate: {
        serializedName: 'grossDailyRate',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CreateBlockTimeSliceModel',
            },
          },
        },
      },
      blockedUnits: {
        serializedName: 'blockedUnits',
        type: {
          name: 'Number',
        },
      },
      promoCode: {
        serializedName: 'promoCode',
        type: {
          name: 'String',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const MonetaryValueModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MonetaryValueModel',
    modelProperties: {
      amount: {
        serializedName: 'amount',
        required: true,
        type: {
          name: 'Number',
        },
      },
      currency: {
        serializedName: 'currency',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CreateBlockTimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreateBlockTimeSliceModel',
    modelProperties: {
      blockedUnits: {
        serializedName: 'blockedUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const BlockCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BlockCreatedModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const MessageItemCollection: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'MessageItemCollection',
    modelProperties: {
      messages: {
        serializedName: 'messages',
        readOnly: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const BlockListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BlockListModel',
    modelProperties: {
      blocks: {
        serializedName: 'blocks',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BlockItemModel',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const BlockItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BlockItemModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      group: {
        serializedName: 'group',
        type: {
          name: 'Composite',
          className: 'EmbeddedGroupModel',
        },
      },
      status: {
        serializedName: 'status',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['Tentative', 'Definite', 'Canceled'],
        },
      },
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      grossDailyRate: {
        serializedName: 'grossDailyRate',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      pickedReservations: {
        serializedName: 'pickedReservations',
        required: true,
        type: {
          name: 'Number',
        },
      },
      promoCode: {
        serializedName: 'promoCode',
        type: {
          name: 'String',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BlockTimeSliceModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionModelBlockActionNotAllowedBlockActionReason',
            },
          },
        },
      },
    },
  },
};

export const EmbeddedGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedGroupModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EmbeddedPropertyModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedPropertyModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        readOnly: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EmbeddedRatePlanModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedRatePlanModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      isSubjectToCityTax: {
        serializedName: 'isSubjectToCityTax',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const EmbeddedUnitGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedUnitGroupModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BlockTimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BlockTimeSliceModel',
    modelProperties: {
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      blockedUnits: {
        serializedName: 'blockedUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
      pickedUnits: {
        serializedName: 'pickedUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
      baseAmount: {
        serializedName: 'baseAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const AmountModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AmountModel',
    modelProperties: {
      grossAmount: {
        serializedName: 'grossAmount',
        required: true,
        type: {
          name: 'Number',
        },
      },
      netAmount: {
        serializedName: 'netAmount',
        required: true,
        type: {
          name: 'Number',
        },
      },
      vatType: {
        serializedName: 'vatType',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'Null',
            'VeryReduced',
            'Reduced',
            'Normal',
            'Without',
            'Special',
            'ReducedCovid19',
            'NormalCovid19',
          ],
        },
      },
      vatPercent: {
        serializedName: 'vatPercent',
        required: true,
        type: {
          name: 'Number',
        },
      },
      currency: {
        serializedName: 'currency',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActionModelBlockActionNotAllowedBlockActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionModelBlockActionNotAllowedBlockActionReason',
    modelProperties: {
      action: {
        serializedName: 'action',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'Delete',
            'Confirm',
            'Release',
            'Cancel',
            'Pickup',
            'Modify',
            'Wash',
          ],
        },
      },
      isAllowed: {
        serializedName: 'isAllowed',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      reasons: {
        serializedName: 'reasons',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionReasonModelNotAllowedBlockActionReason',
            },
          },
        },
      },
    },
  },
};

export const ActionReasonModelNotAllowedBlockActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionReasonModelNotAllowedBlockActionReason',
    modelProperties: {
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'DeleteNotAllowedForBlockWithReservations',
            'ReleaseNotAllowedForBlockWithReservations',
            'ReleaseNotAllowedForBlockInThePast',
            'ReleaseNotAllowedForBlockNotInStatusDefinite',
            'ConfirmNotAllowedForBlockNotInStatusTentative',
            'ConfirmNotAllowedForBlockInThePast',
            'CancelNotAllowedForBlockWithNotCancelledReservations',
            'CancelNotAllowedForBlockNotInStatusDefiniteOrTentative',
            'PickupNotAllowedForBlockNotInStatusDefinite',
            'PickupNotAllowedForBlockInThePast',
            'PickupNotAllowedForFullyPickedBlock',
            'ModifyNotAllowedForBlockInThePast',
            'ModifyNotAllowedForBlockInStatusCanceled',
            'WashNotAllowedForBlockNotInStatusDefinite',
            'WashNotAllowedForBlockWithoutReservations',
          ],
        },
      },
      message: {
        serializedName: 'message',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CountModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CountModel',
    modelProperties: {
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const BlockModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BlockModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      group: {
        serializedName: 'group',
        type: {
          name: 'Composite',
          className: 'EmbeddedGroupModel',
        },
      },
      status: {
        serializedName: 'status',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['Tentative', 'Definite', 'Canceled'],
        },
      },
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      grossDailyRate: {
        serializedName: 'grossDailyRate',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      pickedReservations: {
        serializedName: 'pickedReservations',
        required: true,
        type: {
          name: 'Number',
        },
      },
      promoCode: {
        serializedName: 'promoCode',
        type: {
          name: 'String',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BlockTimeSliceModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionModelBlockActionNotAllowedBlockActionReason',
            },
          },
        },
      },
    },
  },
};

export const Operation: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'Operation',
    modelProperties: {
      value: {
        serializedName: 'value',
        type: {
          name: 'any',
        },
      },
      path: {
        serializedName: 'path',
        type: {
          name: 'String',
        },
      },
      op: {
        serializedName: 'op',
        type: {
          name: 'String',
        },
      },
      from: {
        serializedName: 'from',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CreateBookingModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreateBookingModel',
    modelProperties: {
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'CreatePaymentAccountModel',
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      bookerComment: {
        serializedName: 'bookerComment',
        type: {
          name: 'String',
        },
      },
      reservations: {
        serializedName: 'reservations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CreateReservationModel',
            },
          },
        },
      },
    },
  },
};

export const CreatePaymentAccountModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreatePaymentAccountModel',
    modelProperties: {
      accountNumber: {
        serializedName: 'accountNumber',
        required: true,
        type: {
          name: 'String',
        },
      },
      accountHolder: {
        serializedName: 'accountHolder',
        required: true,
        type: {
          name: 'String',
        },
      },
      expiryMonth: {
        serializedName: 'expiryMonth',
        required: true,
        type: {
          name: 'String',
        },
      },
      expiryYear: {
        serializedName: 'expiryYear',
        required: true,
        type: {
          name: 'String',
        },
      },
      paymentMethod: {
        serializedName: 'paymentMethod',
        required: true,
        type: {
          name: 'String',
        },
      },
      payerEmail: {
        serializedName: 'payerEmail',
        type: {
          name: 'String',
        },
      },
      payerReference: {
        serializedName: 'payerReference',
        type: {
          name: 'String',
        },
      },
      transactionReference: {
        serializedName: 'transactionReference',
        type: {
          name: 'String',
        },
      },
      isVirtual: {
        serializedName: 'isVirtual',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const BookerModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookerModel',
    modelProperties: {
      title: {
        serializedName: 'title',
        type: {
          name: 'Enum',
          allowedValues: ['Mr', 'Ms', 'Dr', 'Prof', 'Other'],
        },
      },
      gender: {
        serializedName: 'gender',
        type: {
          name: 'Enum',
          allowedValues: ['Female', 'Male', 'Other'],
        },
      },
      firstName: {
        serializedName: 'firstName',
        type: {
          name: 'String',
        },
      },
      middleInitial: {
        serializedName: 'middleInitial',
        type: {
          name: 'String',
        },
      },
      lastName: {
        serializedName: 'lastName',
        required: true,
        type: {
          name: 'String',
        },
      },
      email: {
        serializedName: 'email',
        type: {
          name: 'String',
        },
      },
      phone: {
        serializedName: 'phone',
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        type: {
          name: 'Composite',
          className: 'PersonAddressModel',
        },
      },
      nationalityCountryCode: {
        serializedName: 'nationalityCountryCode',
        type: {
          name: 'String',
        },
      },
      identificationNumber: {
        serializedName: 'identificationNumber',
        type: {
          name: 'String',
        },
      },
      identificationIssueDate: {
        serializedName: 'identificationIssueDate',
        type: {
          name: 'Date',
        },
      },
      identificationType: {
        serializedName: 'identificationType',
        type: {
          name: 'Enum',
          allowedValues: [
            'SocialInsuranceNumber',
            'PassportNumber',
            'IdNumber',
            'DriverLicenseNumber',
          ],
        },
      },
      company: {
        serializedName: 'company',
        type: {
          name: 'Composite',
          className: 'PersonCompanyModel',
        },
      },
      preferredLanguage: {
        serializedName: 'preferredLanguage',
        type: {
          name: 'String',
        },
      },
      birthDate: {
        serializedName: 'birthDate',
        type: {
          name: 'Date',
        },
      },
      birthPlace: {
        serializedName: 'birthPlace',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PersonAddressModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PersonAddressModel',
    modelProperties: {
      addressLine1: {
        serializedName: 'addressLine1',
        type: {
          name: 'String',
        },
      },
      addressLine2: {
        serializedName: 'addressLine2',
        type: {
          name: 'String',
        },
      },
      postalCode: {
        serializedName: 'postalCode',
        type: {
          name: 'String',
        },
      },
      city: {
        serializedName: 'city',
        type: {
          name: 'String',
        },
      },
      countryCode: {
        serializedName: 'countryCode',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const PersonCompanyModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PersonCompanyModel',
    modelProperties: {
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      taxId: {
        serializedName: 'taxId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CreateReservationModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreateReservationModel',
    modelProperties: {
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'String',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'String',
        },
      },
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      childrenAges: {
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
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      guestComment: {
        serializedName: 'guestComment',
        type: {
          name: 'String',
        },
      },
      externalCode: {
        serializedName: 'externalCode',
        type: {
          name: 'String',
        },
      },
      channelCode: {
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
      source: {
        serializedName: 'source',
        type: {
          name: 'String',
        },
      },
      primaryGuest: {
        serializedName: 'primaryGuest',
        type: {
          name: 'Composite',
          className: 'GuestModel',
        },
      },
      additionalGuests: {
        serializedName: 'additionalGuests',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GuestModel',
            },
          },
        },
      },
      guaranteeType: {
        serializedName: 'guaranteeType',
        type: {
          name: 'Enum',
          allowedValues: ['PM6Hold', 'CreditCard', 'Prepayment', 'Company'],
        },
      },
      travelPurpose: {
        serializedName: 'travelPurpose',
        type: {
          name: 'Enum',
          allowedValues: ['Business', 'Leisure'],
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CreateReservationTimeSliceModel',
            },
          },
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BookReservationServiceModel',
            },
          },
        },
      },
      companyId: {
        serializedName: 'companyId',
        type: {
          name: 'String',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      prePaymentAmount: {
        serializedName: 'prePaymentAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      commission: {
        serializedName: 'commission',
        type: {
          name: 'Composite',
          className: 'CommissionModel',
        },
      },
      promoCode: {
        serializedName: 'promoCode',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GuestModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GuestModel',
    modelProperties: {
      title: {
        serializedName: 'title',
        type: {
          name: 'Enum',
          allowedValues: ['Mr', 'Ms', 'Dr', 'Prof', 'Other'],
        },
      },
      gender: {
        serializedName: 'gender',
        type: {
          name: 'Enum',
          allowedValues: ['Female', 'Male', 'Other'],
        },
      },
      firstName: {
        serializedName: 'firstName',
        type: {
          name: 'String',
        },
      },
      middleInitial: {
        serializedName: 'middleInitial',
        type: {
          name: 'String',
        },
      },
      lastName: {
        serializedName: 'lastName',
        required: true,
        type: {
          name: 'String',
        },
      },
      email: {
        serializedName: 'email',
        type: {
          name: 'String',
        },
      },
      phone: {
        serializedName: 'phone',
        type: {
          name: 'String',
        },
      },
      address: {
        serializedName: 'address',
        type: {
          name: 'Composite',
          className: 'PersonAddressModel',
        },
      },
      nationalityCountryCode: {
        serializedName: 'nationalityCountryCode',
        type: {
          name: 'String',
        },
      },
      identificationNumber: {
        serializedName: 'identificationNumber',
        type: {
          name: 'String',
        },
      },
      identificationIssueDate: {
        serializedName: 'identificationIssueDate',
        type: {
          name: 'Date',
        },
      },
      identificationType: {
        serializedName: 'identificationType',
        type: {
          name: 'Enum',
          allowedValues: [
            'SocialInsuranceNumber',
            'PassportNumber',
            'IdNumber',
            'DriverLicenseNumber',
          ],
        },
      },
      company: {
        serializedName: 'company',
        type: {
          name: 'Composite',
          className: 'PersonCompanyModel',
        },
      },
      preferredLanguage: {
        serializedName: 'preferredLanguage',
        type: {
          name: 'String',
        },
      },
      birthDate: {
        serializedName: 'birthDate',
        type: {
          name: 'Date',
        },
      },
      birthPlace: {
        serializedName: 'birthPlace',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const CreateReservationTimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreateReservationTimeSliceModel',
    modelProperties: {
      ratePlanId: {
        serializedName: 'ratePlanId',
        required: true,
        type: {
          name: 'String',
        },
      },
      totalAmount: {
        serializedName: 'totalAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const BookReservationServiceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookReservationServiceModel',
    modelProperties: {
      serviceId: {
        serializedName: 'serviceId',
        required: true,
        type: {
          name: 'String',
        },
      },
      count: {
        serializedName: 'count',
        type: {
          name: 'Number',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      dates: {
        serializedName: 'dates',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'DateModel',
            },
          },
        },
      },
    },
  },
};

export const DateModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DateModel',
    modelProperties: {
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      count: {
        serializedName: 'count',
        type: {
          name: 'Number',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const CommissionModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CommissionModel',
    modelProperties: {
      commissionAmount: {
        serializedName: 'commissionAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      beforeCommissionAmount: {
        serializedName: 'beforeCommissionAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const BookingCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookingCreatedModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      reservationIds: {
        serializedName: 'reservationIds',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationCreatedModel',
            },
          },
        },
      },
    },
  },
};

export const ReservationCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationCreatedModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const BookingListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookingListModel',
    modelProperties: {
      bookings: {
        serializedName: 'bookings',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BookingItemModel',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const BookingItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookingItemModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      groupId: {
        serializedName: 'groupId',
        type: {
          name: 'String',
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      bookerComment: {
        serializedName: 'bookerComment',
        type: {
          name: 'String',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      reservations: {
        serializedName: 'reservations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BookingReservationModel',
            },
          },
        },
      },
    },
  },
};

export const PaymentAccountModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PaymentAccountModel',
    modelProperties: {
      accountNumber: {
        serializedName: 'accountNumber',
        required: true,
        type: {
          name: 'String',
        },
      },
      accountHolder: {
        serializedName: 'accountHolder',
        required: true,
        type: {
          name: 'String',
        },
      },
      expiryMonth: {
        serializedName: 'expiryMonth',
        required: true,
        type: {
          name: 'String',
        },
      },
      expiryYear: {
        serializedName: 'expiryYear',
        required: true,
        type: {
          name: 'String',
        },
      },
      paymentMethod: {
        serializedName: 'paymentMethod',
        required: true,
        type: {
          name: 'String',
        },
      },
      payerEmail: {
        serializedName: 'payerEmail',
        type: {
          name: 'String',
        },
      },
      payerReference: {
        serializedName: 'payerReference',
        type: {
          name: 'String',
        },
      },
      isVirtual: {
        serializedName: 'isVirtual',
        type: {
          name: 'Boolean',
        },
      },
      isActive: {
        serializedName: 'isActive',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const BookingReservationModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookingReservationModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      status: {
        serializedName: 'status',
        required: true,
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
      externalCode: {
        serializedName: 'externalCode',
        type: {
          name: 'String',
        },
      },
      channelCode: {
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
      source: {
        serializedName: 'source',
        type: {
          name: 'String',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      childrenAges: {
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
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationServiceItemModel',
            },
          },
        },
      },
      guestComment: {
        serializedName: 'guestComment',
        type: {
          name: 'String',
        },
      },
      cancellationFee: {
        serializedName: 'cancellationFee',
        type: {
          name: 'Composite',
          className: 'ReservationCancellationFeeModel',
        },
      },
      company: {
        serializedName: 'company',
        type: {
          name: 'Composite',
          className: 'EmbeddedCompanyModel',
        },
      },
    },
  },
};

export const ReservationServiceItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationServiceItemModel',
    modelProperties: {
      service: {
        serializedName: 'service',
        type: {
          name: 'Composite',
          className: 'ServiceModel',
        },
      },
      totalAmount: {
        serializedName: 'totalAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      dates: {
        serializedName: 'dates',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceDateItemModel',
            },
          },
        },
      },
    },
  },
};

export const ServiceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        required: true,
        type: {
          name: 'String',
        },
      },
      pricingUnit: {
        serializedName: 'pricingUnit',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['Room', 'Person'],
        },
      },
      defaultGrossPrice: {
        serializedName: 'defaultGrossPrice',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const ServiceDateItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceDateItemModel',
    modelProperties: {
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      isMandatory: {
        serializedName: 'isMandatory',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ReservationCancellationFeeModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationCancellationFeeModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        required: true,
        type: {
          name: 'String',
        },
      },
      dueDateTime: {
        serializedName: 'dueDateTime',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      fee: {
        serializedName: 'fee',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const EmbeddedCompanyModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedCompanyModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      canCheckOutOnAr: {
        serializedName: 'canCheckOutOnAr',
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const AddReservationsModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AddReservationsModel',
    modelProperties: {
      reservations: {
        serializedName: 'reservations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'CreateReservationModel',
            },
          },
        },
      },
    },
  },
};

export const ReservationsCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationsCreatedModel',
    modelProperties: {
      reservationIds: {
        serializedName: 'reservationIds',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationCreatedModel',
            },
          },
        },
      },
    },
  },
};

export const BookingModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'BookingModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      groupId: {
        serializedName: 'groupId',
        type: {
          name: 'String',
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      bookerComment: {
        serializedName: 'bookerComment',
        type: {
          name: 'String',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      propertyValues: {
        serializedName: 'propertyValues',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PropertyValueModel',
            },
          },
        },
      },
      reservations: {
        serializedName: 'reservations',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BookingReservationModel',
            },
          },
        },
      },
    },
  },
};

export const PropertyValueModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PropertyValueModel',
    modelProperties: {
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      balance: {
        serializedName: 'balance',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const CreateGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'CreateGroupModel',
    modelProperties: {
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      bookerComment: {
        serializedName: 'bookerComment',
        type: {
          name: 'String',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'CreatePaymentAccountModel',
        },
      },
      propertyIds: {
        serializedName: 'propertyIds',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const GroupCreatedModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupCreatedModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GroupListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupListModel',
    modelProperties: {
      groups: {
        serializedName: 'groups',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GroupItemModel',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const GroupItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupItemModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      from: {
        serializedName: 'from',
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        type: {
          name: 'DateTime',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      bookerComment: {
        serializedName: 'bookerComment',
        type: {
          name: 'String',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      blocks: {
        serializedName: 'blocks',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GroupBlockModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionModelGroupActionNotAllowedGroupActionReason',
            },
          },
        },
      },
      propertyIds: {
        serializedName: 'propertyIds',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const GroupBlockModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupBlockModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      status: {
        serializedName: 'status',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['Tentative', 'Definite', 'Canceled'],
        },
      },
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      grossDailyRate: {
        serializedName: 'grossDailyRate',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      blockedUnits: {
        serializedName: 'blockedUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
      pickedReservations: {
        serializedName: 'pickedReservations',
        required: true,
        type: {
          name: 'Number',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
    },
  },
};

export const ActionModelGroupActionNotAllowedGroupActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionModelGroupActionNotAllowedGroupActionReason',
    modelProperties: {
      action: {
        defaultValue: 'Delete',
        isConstant: true,
        serializedName: 'action',
        type: {
          name: 'String',
        },
      },
      isAllowed: {
        serializedName: 'isAllowed',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      reasons: {
        serializedName: 'reasons',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionReasonModelNotAllowedGroupActionReason',
            },
          },
        },
      },
    },
  },
};

export const ActionReasonModelNotAllowedGroupActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionReasonModelNotAllowedGroupActionReason',
    modelProperties: {
      code: {
        defaultValue: 'DeleteNotAllowedForGroupWithBlocks',
        isConstant: true,
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      message: {
        serializedName: 'message',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const GroupModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'GroupModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      from: {
        serializedName: 'from',
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        type: {
          name: 'DateTime',
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      bookerComment: {
        serializedName: 'bookerComment',
        type: {
          name: 'String',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      blocks: {
        serializedName: 'blocks',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GroupBlockModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionModelGroupActionNotAllowedGroupActionReason',
            },
          },
        },
      },
      propertyIds: {
        serializedName: 'propertyIds',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const PickUpReservationsModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PickUpReservationsModel',
    modelProperties: {
      reservations: {
        serializedName: 'reservations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PickUpReservationModel',
            },
          },
        },
      },
    },
  },
};

export const PickUpReservationModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PickUpReservationModel',
    modelProperties: {
      blockId: {
        serializedName: 'blockId',
        required: true,
        type: {
          name: 'String',
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'BookReservationServiceModel',
            },
          },
        },
      },
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'String',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'String',
        },
      },
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      childrenAges: {
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
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      guestComment: {
        serializedName: 'guestComment',
        type: {
          name: 'String',
        },
      },
      primaryGuest: {
        serializedName: 'primaryGuest',
        type: {
          name: 'Composite',
          className: 'GuestModel',
        },
      },
      additionalGuests: {
        serializedName: 'additionalGuests',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GuestModel',
            },
          },
        },
      },
      travelPurpose: {
        serializedName: 'travelPurpose',
        type: {
          name: 'Enum',
          allowedValues: ['Business', 'Leisure'],
        },
      },
    },
  },
};

export const StayOffersModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'StayOffersModel',
    modelProperties: {
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      offers: {
        serializedName: 'offers',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferModel',
            },
          },
        },
      },
    },
  },
};

export const OfferModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferModel',
    modelProperties: {
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'OfferUnitGroupModel',
        },
      },
      minGuaranteeType: {
        serializedName: 'minGuaranteeType',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['PM6Hold', 'CreditCard', 'Prepayment', 'Company'],
        },
      },
      availableUnits: {
        serializedName: 'availableUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      cancellationFee: {
        serializedName: 'cancellationFee',
        type: {
          name: 'Composite',
          className: 'OfferCancellationFeeModel',
        },
      },
      noShowFee: {
        serializedName: 'noShowFee',
        type: {
          name: 'Composite',
          className: 'OfferNoShowFeeModel',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferTimeSliceModel',
            },
          },
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceOfferModel',
            },
          },
        },
      },
      fees: {
        serializedName: 'fees',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferFeeModel',
            },
          },
        },
      },
      taxDetails: {
        serializedName: 'taxDetails',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TaxDetailModel',
            },
          },
        },
      },
      validationMessages: {
        serializedName: 'validationMessages',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferValidationMessageModel',
            },
          },
        },
      },
      companyId: {
        serializedName: 'companyId',
        type: {
          name: 'String',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      isCorporate: {
        serializedName: 'isCorporate',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      prePaymentAmount: {
        serializedName: 'prePaymentAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      cityTax: {
        serializedName: 'cityTax',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
    },
  },
};

export const OfferUnitGroupModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferUnitGroupModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        required: true,
        type: {
          name: 'String',
        },
      },
      maxPersons: {
        serializedName: 'maxPersons',
        required: true,
        type: {
          name: 'Number',
        },
      },
      rank: {
        serializedName: 'rank',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const OfferCancellationFeeModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferCancellationFeeModel',
    modelProperties: {
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        required: true,
        type: {
          name: 'String',
        },
      },
      dueDateTime: {
        serializedName: 'dueDateTime',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      fee: {
        serializedName: 'fee',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const OfferNoShowFeeModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferNoShowFeeModel',
    modelProperties: {
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      fee: {
        serializedName: 'fee',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const OfferTimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferTimeSliceModel',
    modelProperties: {
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      availableUnits: {
        serializedName: 'availableUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
      baseAmount: {
        serializedName: 'baseAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      includedServices: {
        serializedName: 'includedServices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferServiceModel',
            },
          },
        },
      },
    },
  },
};

export const OfferServiceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferServiceModel',
    modelProperties: {
      service: {
        serializedName: 'service',
        type: {
          name: 'Composite',
          className: 'EmbeddedServiceModel',
        },
      },
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      pricingMode: {
        serializedName: 'pricingMode',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['Included', 'Additional'],
        },
      },
    },
  },
};

export const EmbeddedServiceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedServiceModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceOfferModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceOfferModel',
    modelProperties: {
      service: {
        serializedName: 'service',
        type: {
          name: 'Composite',
          className: 'ServiceModel',
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
      totalAmount: {
        serializedName: 'totalAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      prePaymentAmount: {
        serializedName: 'prePaymentAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      fees: {
        serializedName: 'fees',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferFeeModel',
            },
          },
        },
      },
      dates: {
        serializedName: 'dates',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceOfferItemModel',
            },
          },
        },
      },
    },
  },
};

export const OfferFeeModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferFeeModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        required: true,
        type: {
          name: 'String',
        },
      },
      totalAmount: {
        serializedName: 'totalAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
    },
  },
};

export const ServiceOfferItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceOfferItemModel',
    modelProperties: {
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      isDefaultDate: {
        serializedName: 'isDefaultDate',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      isMandatory: {
        serializedName: 'isMandatory',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const TaxDetailModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TaxDetailModel',
    modelProperties: {
      vatType: {
        serializedName: 'vatType',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'Null',
            'VeryReduced',
            'Reduced',
            'Normal',
            'Without',
            'Special',
            'ReducedCovid19',
            'NormalCovid19',
          ],
        },
      },
      vatPercent: {
        serializedName: 'vatPercent',
        required: true,
        type: {
          name: 'Number',
        },
      },
      net: {
        serializedName: 'net',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      tax: {
        serializedName: 'tax',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const OfferValidationMessageModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'OfferValidationMessageModel',
    modelProperties: {
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'UnitGroupFullyBooked',
            'UnitGroupCapacityExceeded',
            'RatePlanRestrictionsViolated',
            'RatePlanSurchargesNotSet',
            'RateRestrictionsViolated',
            'RatePlanChannelNotSet',
            'RatesNotSet',
            'BlockFullyBooked',
            'IncludedServicesAmountExceededRateAmount',
          ],
        },
      },
      message: {
        serializedName: 'message',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ServiceOffersModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ServiceOffersModel',
    modelProperties: {
      services: {
        serializedName: 'services',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceOfferModel',
            },
          },
        },
      },
    },
  },
};

export const TimeSliceListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TimeSliceListModel',
    modelProperties: {
      timeSlices: {
        serializedName: 'timeSlices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TimeSliceItemModel',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const TimeSliceItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TimeSliceItemModel',
    modelProperties: {
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      offers: {
        serializedName: 'offers',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TimeSliceOfferItemModel',
            },
          },
        },
      },
    },
  },
};

export const TimeSliceOfferItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TimeSliceOfferItemModel',
    modelProperties: {
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      minGuaranteeType: {
        serializedName: 'minGuaranteeType',
        type: {
          name: 'Enum',
          allowedValues: [
            'PM6Hold',
            'CreditCard',
            'Prepayment',
            'Company',
            'Ota',
          ],
        },
      },
      minAdvance: {
        serializedName: 'minAdvance',
        type: {
          name: 'Composite',
          className: 'PeriodModel',
        },
      },
      maxAdvance: {
        serializedName: 'maxAdvance',
        type: {
          name: 'Composite',
          className: 'PeriodModel',
        },
      },
      available: {
        serializedName: 'available',
        required: true,
        type: {
          name: 'Number',
        },
      },
      restrictions: {
        serializedName: 'restrictions',
        type: {
          name: 'Composite',
          className: 'RateRestrictionsModel',
        },
      },
      prices: {
        serializedName: 'prices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'PerOccupancyPriceItemModel',
            },
          },
        },
      },
    },
  },
};

export const PeriodModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PeriodModel',
    modelProperties: {
      hours: {
        serializedName: 'hours',
        type: {
          name: 'Number',
        },
      },
      days: {
        serializedName: 'days',
        type: {
          name: 'Number',
        },
      },
      months: {
        serializedName: 'months',
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const RateRestrictionsModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'RateRestrictionsModel',
    modelProperties: {
      minLengthOfStay: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1,
        },
        serializedName: 'minLengthOfStay',
        type: {
          name: 'Number',
        },
      },
      maxLengthOfStay: {
        constraints: {
          InclusiveMaximum: 2147483647,
          InclusiveMinimum: 1,
        },
        serializedName: 'maxLengthOfStay',
        type: {
          name: 'Number',
        },
      },
      closed: {
        serializedName: 'closed',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      closedOnArrival: {
        serializedName: 'closedOnArrival',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      closedOnDeparture: {
        serializedName: 'closedOnDeparture',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const PerOccupancyPriceItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PerOccupancyPriceItemModel',
    modelProperties: {
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      price: {
        serializedName: 'price',
        type: {
          name: 'Composite',
          className: 'PriceModel',
        },
      },
    },
  },
};

export const PriceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PriceModel',
    modelProperties: {
      grossAmount: {
        serializedName: 'grossAmount',
        required: true,
        type: {
          name: 'Number',
        },
      },
      beforeTax: {
        serializedName: 'beforeTax',
        required: true,
        type: {
          name: 'Number',
        },
      },
      afterTax: {
        serializedName: 'afterTax',
        required: true,
        type: {
          name: 'Number',
        },
      },
      taxes: {
        serializedName: 'taxes',
        type: {
          name: 'Composite',
          className: 'TaxesModel',
        },
      },
      currency: {
        serializedName: 'currency',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const TaxesModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TaxesModel',
    modelProperties: {
      tax: {
        serializedName: 'tax',
        required: true,
        type: {
          name: 'Number',
        },
      },
      cityTax: {
        serializedName: 'cityTax',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ReservationListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationListModel',
    modelProperties: {
      reservations: {
        serializedName: 'reservations',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationItemModel',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const ReservationItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationItemModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      bookingId: {
        serializedName: 'bookingId',
        required: true,
        type: {
          name: 'String',
        },
      },
      blockId: {
        serializedName: 'blockId',
        type: {
          name: 'String',
        },
      },
      groupName: {
        serializedName: 'groupName',
        type: {
          name: 'String',
        },
      },
      status: {
        serializedName: 'status',
        required: true,
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
      checkInTime: {
        serializedName: 'checkInTime',
        type: {
          name: 'DateTime',
        },
      },
      checkOutTime: {
        serializedName: 'checkOutTime',
        type: {
          name: 'DateTime',
        },
      },
      cancellationTime: {
        serializedName: 'cancellationTime',
        type: {
          name: 'DateTime',
        },
      },
      noShowTime: {
        serializedName: 'noShowTime',
        type: {
          name: 'DateTime',
        },
      },
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      unit: {
        serializedName: 'unit',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      childrenAges: {
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
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      guestComment: {
        serializedName: 'guestComment',
        type: {
          name: 'String',
        },
      },
      externalCode: {
        serializedName: 'externalCode',
        type: {
          name: 'String',
        },
      },
      channelCode: {
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
      source: {
        serializedName: 'source',
        type: {
          name: 'String',
        },
      },
      primaryGuest: {
        serializedName: 'primaryGuest',
        type: {
          name: 'Composite',
          className: 'GuestModel',
        },
      },
      additionalGuests: {
        serializedName: 'additionalGuests',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GuestModel',
            },
          },
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      guaranteeType: {
        serializedName: 'guaranteeType',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'PM6Hold',
            'CreditCard',
            'Prepayment',
            'Company',
            'Ota',
          ],
        },
      },
      cancellationFee: {
        serializedName: 'cancellationFee',
        type: {
          name: 'Composite',
          className: 'ReservationCancellationFeeModel',
        },
      },
      noShowFee: {
        serializedName: 'noShowFee',
        type: {
          name: 'Composite',
          className: 'ReservationNoShowFeeModel',
        },
      },
      travelPurpose: {
        serializedName: 'travelPurpose',
        type: {
          name: 'Enum',
          allowedValues: ['Business', 'Leisure'],
        },
      },
      balance: {
        serializedName: 'balance',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      assignedUnits: {
        serializedName: 'assignedUnits',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationAssignedUnitModel',
            },
          },
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TimeSliceModel',
            },
          },
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationServiceItemModel',
            },
          },
        },
      },
      validationMessages: {
        serializedName: 'validationMessages',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationValidationMessageModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className:
                'ActionModelReservationActionNotAllowedReservationActionReason',
            },
          },
        },
      },
      company: {
        serializedName: 'company',
        type: {
          name: 'Composite',
          className: 'EmbeddedCompanyModel',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      allFoliosHaveInvoice: {
        serializedName: 'allFoliosHaveInvoice',
        type: {
          name: 'Boolean',
        },
      },
      hasCityTax: {
        serializedName: 'hasCityTax',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      commission: {
        serializedName: 'commission',
        type: {
          name: 'Composite',
          className: 'CommissionModel',
        },
      },
      promoCode: {
        serializedName: 'promoCode',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const EmbeddedUnitModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'EmbeddedUnitModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      name: {
        serializedName: 'name',
        type: {
          name: 'String',
        },
      },
      description: {
        serializedName: 'description',
        type: {
          name: 'String',
        },
      },
      unitGroupId: {
        serializedName: 'unitGroupId',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ReservationNoShowFeeModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationNoShowFeeModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'String',
        },
      },
      fee: {
        serializedName: 'fee',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const ReservationAssignedUnitModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationAssignedUnitModel',
    modelProperties: {
      unit: {
        serializedName: 'unit',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitModel',
        },
      },
      timeRanges: {
        serializedName: 'timeRanges',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationAssignedUnitTimeRangeModel',
            },
          },
        },
      },
    },
  },
};

export const ReservationAssignedUnitTimeRangeModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationAssignedUnitTimeRangeModel',
    modelProperties: {
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
    },
  },
};

export const TimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'TimeSliceModel',
    modelProperties: {
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      unit: {
        serializedName: 'unit',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitModel',
        },
      },
      baseAmount: {
        serializedName: 'baseAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      includedServices: {
        serializedName: 'includedServices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationServiceModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className:
                'ActionModelReservationTimeSliceActionNotAllowedReservationTimeSliceActionReason',
            },
          },
        },
      },
    },
  },
};

export const ReservationServiceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationServiceModel',
    modelProperties: {
      service: {
        serializedName: 'service',
        type: {
          name: 'Composite',
          className: 'EmbeddedServiceModel',
        },
      },
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      bookedAsExtra: {
        serializedName: 'bookedAsExtra',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
    },
  },
};

export const ActionModelReservationTimeSliceActionNotAllowedReservationTimeSliceActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className:
      'ActionModelReservationTimeSliceActionNotAllowedReservationTimeSliceActionReason',
    modelProperties: {
      action: {
        defaultValue: 'Amend',
        isConstant: true,
        serializedName: 'action',
        type: {
          name: 'String',
        },
      },
      isAllowed: {
        serializedName: 'isAllowed',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      reasons: {
        serializedName: 'reasons',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className:
                'ActionReasonModelNotAllowedReservationTimeSliceActionReason',
            },
          },
        },
      },
    },
  },
};

export const ActionReasonModelNotAllowedReservationTimeSliceActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionReasonModelNotAllowedReservationTimeSliceActionReason',
    modelProperties: {
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'AmendNotAllowedWhenTimeSliceIsInThePast',
            'AmendNotAllowedWhenTimeSliceIsAlreadyPosted',
            'AmendNotAllowedForReservationInFinalStatus',
          ],
        },
      },
      message: {
        serializedName: 'message',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ReservationValidationMessageModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationValidationMessageModel',
    modelProperties: {
      category: {
        serializedName: 'category',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['OfferNotAvailable', 'AutoUnitAssignment'],
        },
      },
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'UnitGroupFullyBooked',
            'UnitGroupCapacityExceeded',
            'RatePlanRestrictionsViolated',
            'RatePlanSurchargesNotSet',
            'RateRestrictionsViolated',
            'RatePlanChannelNotSet',
            'RatesNotSet',
            'BlockFullyBooked',
            'UnitMoved',
            'IncludedServicesAmountExceededRateAmount',
            'RatePlanCompanyRestrictionsViolated',
          ],
        },
      },
      message: {
        serializedName: 'message',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ActionModelReservationActionNotAllowedReservationActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionModelReservationActionNotAllowedReservationActionReason',
    modelProperties: {
      action: {
        serializedName: 'action',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'CheckIn',
            'CheckOut',
            'Cancel',
            'AmendTimeSlices',
            'AmendArrival',
            'AmendDeparture',
            'NoShow',
            'AssignUnit',
            'UnassignUnit',
            'RemoveCityTax',
            'AddCityTax',
            'RemoveService',
          ],
        },
      },
      isAllowed: {
        serializedName: 'isAllowed',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      reasons: {
        serializedName: 'reasons',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ActionReasonModelNotAllowedReservationActionReason',
            },
          },
        },
      },
    },
  },
};

export const ActionReasonModelNotAllowedReservationActionReason: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ActionReasonModelNotAllowedReservationActionReason',
    modelProperties: {
      code: {
        serializedName: 'code',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'CheckInNotAllowedForReservationNotInStatusConfirmed',
            'CheckInNotAllowedBeforeArrivalDate',
            'CheckInNotAllowedAfterDepartureDateTime',
            'CheckInNotAllowedWithoutUnitAssignedForWholeStay',
            'CheckOutNotAllowedForReservationNotInStatusInHouse',
            'CheckOutNotAllowedForPastReservationNotInStatusConfirmedOrInHouse',
            'CheckOutNotAllowedWithDepartureDateMoreThanOneDayInTheFuture',
            'CancelNotAllowedForReservationNotInStatusConfirmed',
            'AmendNotAllowedForNotAmendableTimeSlices',
            'AmendArrivalNotAllowedForNotAmendableTimeSlices',
            'AmendArrivalNotAllowedForReservationNotInStatusConfirmed',
            'AmendDepartureNotAllowedForReservationNotInStatusConfirmedOrInHouse',
            'AmendDepartureNotAllowedForReservationDepartureDateTooFarInThePast',
            'NoShowNotAllowedForReservationNotInStatusConfirmed',
            'NoShowNotAllowedBeforeArrivalDate',
            'AssignUnitNotAllowedForReservationInThePast',
            'AssignUnitNotAllowedForReservationNotInStatusConfirmedOrInHouse',
            'UnassignUnitNotAllowedForReservationInThePast',
            'UnassignUnitNotAllowedForReservationNotInStatusConfirmed',
            'UnassignUnitNotAllowedForReservationWithoutUnit',
            'RemoveCityTaxNotAllowedForReservationNotInStatusConfirmedOrInHouse',
            'RemoveCityTaxNotAllowedForReservationWithPostedCharges',
            'RemoveCityTaxNotAllowedForReservationWithoutCityTax',
            'AddCityTaxNotAllowedForReservationNotInStatusConfirmedOrInHouse',
            'AddCityTaxNotAllowedForReservationWithCityTax',
            'AddCityTaxNotAllowedForReservationForRatePlanNotSubjectToCityTax',
            'AddCityTaxNotAllowedForReservationWithPostedCharges',
            'RemoveServiceNotAllowedForReservationNotInStatusConfirmedOrInHouse',
            'RemoveServiceNotAllowedForReservationInThePast',
          ],
        },
      },
      message: {
        serializedName: 'message',
        required: true,
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ReservationModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationModel',
    modelProperties: {
      id: {
        serializedName: 'id',
        required: true,
        type: {
          name: 'String',
        },
      },
      bookingId: {
        serializedName: 'bookingId',
        required: true,
        type: {
          name: 'String',
        },
      },
      blockId: {
        serializedName: 'blockId',
        type: {
          name: 'String',
        },
      },
      groupName: {
        serializedName: 'groupName',
        type: {
          name: 'String',
        },
      },
      status: {
        serializedName: 'status',
        required: true,
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
      checkInTime: {
        serializedName: 'checkInTime',
        type: {
          name: 'DateTime',
        },
      },
      checkOutTime: {
        serializedName: 'checkOutTime',
        type: {
          name: 'DateTime',
        },
      },
      cancellationTime: {
        serializedName: 'cancellationTime',
        type: {
          name: 'DateTime',
        },
      },
      noShowTime: {
        serializedName: 'noShowTime',
        type: {
          name: 'DateTime',
        },
      },
      unit: {
        serializedName: 'unit',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitModel',
        },
      },
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitGroupModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      created: {
        serializedName: 'created',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      modified: {
        serializedName: 'modified',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      childrenAges: {
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
      comment: {
        serializedName: 'comment',
        type: {
          name: 'String',
        },
      },
      guestComment: {
        serializedName: 'guestComment',
        type: {
          name: 'String',
        },
      },
      externalCode: {
        serializedName: 'externalCode',
        type: {
          name: 'String',
        },
      },
      channelCode: {
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
      source: {
        serializedName: 'source',
        type: {
          name: 'String',
        },
      },
      primaryGuest: {
        serializedName: 'primaryGuest',
        type: {
          name: 'Composite',
          className: 'GuestModel',
        },
      },
      additionalGuests: {
        serializedName: 'additionalGuests',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'GuestModel',
            },
          },
        },
      },
      booker: {
        serializedName: 'booker',
        type: {
          name: 'Composite',
          className: 'BookerModel',
        },
      },
      paymentAccount: {
        serializedName: 'paymentAccount',
        type: {
          name: 'Composite',
          className: 'PaymentAccountModel',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TimeSliceModel',
            },
          },
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationServiceItemModel',
            },
          },
        },
      },
      guaranteeType: {
        serializedName: 'guaranteeType',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: [
            'PM6Hold',
            'CreditCard',
            'Prepayment',
            'Company',
            'Ota',
          ],
        },
      },
      cancellationFee: {
        serializedName: 'cancellationFee',
        type: {
          name: 'Composite',
          className: 'ReservationCancellationFeeModel',
        },
      },
      noShowFee: {
        serializedName: 'noShowFee',
        type: {
          name: 'Composite',
          className: 'ReservationNoShowFeeModel',
        },
      },
      travelPurpose: {
        serializedName: 'travelPurpose',
        type: {
          name: 'Enum',
          allowedValues: ['Business', 'Leisure'],
        },
      },
      balance: {
        serializedName: 'balance',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      validationMessages: {
        serializedName: 'validationMessages',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationValidationMessageModel',
            },
          },
        },
      },
      actions: {
        serializedName: 'actions',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className:
                'ActionModelReservationActionNotAllowedReservationActionReason',
            },
          },
        },
      },
      company: {
        serializedName: 'company',
        type: {
          name: 'Composite',
          className: 'EmbeddedCompanyModel',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      allFoliosHaveInvoice: {
        serializedName: 'allFoliosHaveInvoice',
        type: {
          name: 'Boolean',
        },
      },
      taxDetails: {
        serializedName: 'taxDetails',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TaxDetailModel',
            },
          },
        },
      },
      hasCityTax: {
        serializedName: 'hasCityTax',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      commission: {
        serializedName: 'commission',
        type: {
          name: 'Composite',
          className: 'CommissionModel',
        },
      },
      promoCode: {
        serializedName: 'promoCode',
        type: {
          name: 'String',
        },
      },
      payableAmount: {
        serializedName: 'payableAmount',
        type: {
          name: 'Composite',
          className: 'PayableAmountModel',
        },
      },
    },
  },
};

export const PayableAmountModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'PayableAmountModel',
    modelProperties: {
      guest: {
        serializedName: 'guest',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const ReservationStayOffersModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationStayOffersModel',
    modelProperties: {
      property: {
        serializedName: 'property',
        type: {
          name: 'Composite',
          className: 'EmbeddedPropertyModel',
        },
      },
      offers: {
        serializedName: 'offers',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationStayOfferModel',
            },
          },
        },
      },
    },
  },
};

export const ReservationStayOfferModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationStayOfferModel',
    modelProperties: {
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      minGuaranteeType: {
        serializedName: 'minGuaranteeType',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['PM6Hold', 'CreditCard', 'Prepayment', 'Company'],
        },
      },
      availableUnits: {
        serializedName: 'availableUnits',
        required: true,
        type: {
          name: 'Number',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      cancellationFee: {
        serializedName: 'cancellationFee',
        type: {
          name: 'Composite',
          className: 'OfferCancellationFeeModel',
        },
      },
      noShowFee: {
        serializedName: 'noShowFee',
        type: {
          name: 'Composite',
          className: 'OfferNoShowFeeModel',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationStayOfferTimeSliceModel',
            },
          },
        },
      },
      services: {
        serializedName: 'services',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ServiceOfferModel',
            },
          },
        },
      },
      taxDetails: {
        serializedName: 'taxDetails',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'TaxDetailModel',
            },
          },
        },
      },
      validationMessages: {
        serializedName: 'validationMessages',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'OfferValidationMessageModel',
            },
          },
        },
      },
      companyId: {
        serializedName: 'companyId',
        type: {
          name: 'String',
        },
      },
      corporateCode: {
        serializedName: 'corporateCode',
        type: {
          name: 'String',
        },
      },
      isCorporate: {
        serializedName: 'isCorporate',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      cityTax: {
        serializedName: 'cityTax',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
    },
  },
};

export const ReservationStayOfferTimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationStayOfferTimeSliceModel',
    modelProperties: {
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      ratePlan: {
        serializedName: 'ratePlan',
        type: {
          name: 'Composite',
          className: 'EmbeddedRatePlanModel',
        },
      },
      unitGroup: {
        serializedName: 'unitGroup',
        type: {
          name: 'Composite',
          className: 'OfferUnitGroupModel',
        },
      },
      baseAmount: {
        serializedName: 'baseAmount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
      includedServices: {
        serializedName: 'includedServices',
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationStayOfferServiceModel',
            },
          },
        },
      },
    },
  },
};

export const ReservationStayOfferServiceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationStayOfferServiceModel',
    modelProperties: {
      service: {
        serializedName: 'service',
        type: {
          name: 'Composite',
          className: 'EmbeddedServiceModel',
        },
      },
      serviceDate: {
        serializedName: 'serviceDate',
        required: true,
        type: {
          name: 'Date',
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
      amount: {
        serializedName: 'amount',
        type: {
          name: 'Composite',
          className: 'AmountModel',
        },
      },
      bookedAsExtra: {
        serializedName: 'bookedAsExtra',
        required: true,
        type: {
          name: 'Boolean',
        },
      },
      pricingMode: {
        serializedName: 'pricingMode',
        required: true,
        type: {
          name: 'Enum',
          allowedValues: ['Included', 'Additional'],
        },
      },
    },
  },
};

export const ReservationServiceListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ReservationServiceListModel',
    modelProperties: {
      services: {
        serializedName: 'services',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'ReservationServiceItemModel',
            },
          },
        },
      },
      count: {
        serializedName: 'count',
        required: true,
        type: {
          name: 'Number',
        },
      },
    },
  },
};

export const AutoAssignedUnitListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AutoAssignedUnitListModel',
    modelProperties: {
      timeSlices: {
        serializedName: 'timeSlices',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'AutoAssignedUnitItemModel',
            },
          },
        },
      },
    },
  },
};

export const AutoAssignedUnitItemModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AutoAssignedUnitItemModel',
    modelProperties: {
      unit: {
        serializedName: 'unit',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitModel',
        },
      },
      from: {
        serializedName: 'from',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
      to: {
        serializedName: 'to',
        required: true,
        type: {
          name: 'DateTime',
        },
      },
    },
  },
};

export const AssignedUnitModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'AssignedUnitModel',
    modelProperties: {
      unit: {
        serializedName: 'unit',
        type: {
          name: 'Composite',
          className: 'EmbeddedUnitModel',
        },
      },
    },
  },
};

export const DesiredStayDetailsModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DesiredStayDetailsModel',
    modelProperties: {
      arrival: {
        serializedName: 'arrival',
        required: true,
        type: {
          name: 'String',
        },
      },
      departure: {
        serializedName: 'departure',
        required: true,
        type: {
          name: 'String',
        },
      },
      adults: {
        serializedName: 'adults',
        required: true,
        type: {
          name: 'Number',
        },
      },
      childrenAges: {
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
      requote: {
        serializedName: 'requote',
        type: {
          name: 'Boolean',
        },
      },
      timeSlices: {
        serializedName: 'timeSlices',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'Composite',
              className: 'DesiredTimeSliceModel',
            },
          },
        },
      },
    },
  },
};

export const DesiredTimeSliceModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'DesiredTimeSliceModel',
    modelProperties: {
      ratePlanId: {
        serializedName: 'ratePlanId',
        required: true,
        type: {
          name: 'String',
        },
      },
      totalGrossAmount: {
        serializedName: 'totalGrossAmount',
        type: {
          name: 'Composite',
          className: 'MonetaryValueModel',
        },
      },
    },
  },
};

export const SourceListModel: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'SourceListModel',
    modelProperties: {
      sources: {
        serializedName: 'sources',
        required: true,
        type: {
          name: 'Sequence',
          element: {
            type: {
              name: 'String',
            },
          },
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingBlocksPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApaleoBookingAPIBookingBlocksPostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingBookingsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApaleoBookingAPIBookingBookingsPostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingBookingsForcePostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApaleoBookingAPIBookingBookingsForcePostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingBookingsByIdReservationsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApaleoBookingAPIBookingBookingsByIdReservationsPostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingBookingsByIdReservationsForcePostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className:
      'ApaleoBookingAPIBookingBookingsByIdReservationsForcePostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingGroupsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApaleoBookingAPIBookingGroupsPostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};

export const ApaleoBookingAPIBookingGroupsByIdReservationsPostHeaders: coreHttp.CompositeMapper = {
  type: {
    name: 'Composite',
    className: 'ApaleoBookingAPIBookingGroupsByIdReservationsPostHeaders',
    modelProperties: {
      location: {
        serializedName: 'location',
        type: {
          name: 'String',
        },
      },
    },
  },
};
