const bankLookup = [
  // {
  //   id: '',
  //   label: 'بانک',
  //   img: 'base'
  // },
  {
    id: '603799',
    label: 'بانک ملی ایران',
    img: 'meli'
  },
  {
    id: '589210',
    label: 'بانک سپه',
    img: 'sepah'
  },
  {
    id: '627648',
    label: 'بانک توسعه صادرات',
    img: 'saderat'
  },
  {
    id: '627961',
    label: 'بانک صنعت و معدن',
    img: 'sanat-o-madan'
  },
  {
    id: '603770',
    label: 'بانک کشاورزی',
    img: 'keshavarzi'
  },
  {
    id: '628023',
    label: 'بانک مسکن',
    img: 'maskan'
  },
  {
    id: '627760',
    label: 'پست بانک ایران',
    img: 'post-bank-iran'
  },
  {
    id: '502908',
    label: 'بانک توسعه تعاون',
    img: 'tosee-taavon'
  },
  {
    id: '627412',
    label: 'بانک اقتصاد نوین',
    img: 'eghtesadnovin'
  },
  {
    id: '622106',
    label: 'بانک پارسیان',
    img: 'parsian'
  },
  {
    id: '502229',
    label: 'بانک پاسارگاد',
    img: 'pasarghad'
  },
  {
    id: '639599',
    label: 'بانک قوامین',
    img: 'image_url_9'
  },
  {
    id: '627488',
    label: 'بانک کارآفرین',
    img: 'image_url_10'
  },
  {
    id: '621986',
    label: 'بانک سامان',
    img: 'saman'
  },
  {
    id: '639346',
    label: 'بانک سینا',
    img: 'sina'
  },
  {
    id: '639607',
    label: 'بانک سرمایه',
    img: 'sarmayeh'
  },
  {
    id: '504706',
    label: 'بانک شهر',
    img: 'shahr'
  },
  {
    id: '502806',
    label: 'بانک دی',
    img: 'dey'
  },
  {
    id: '502938',
    label: 'بانک دی',
    img: 'dey'
  },
  {
    id: '603769',
    label: 'بانک صادرات',
    img: 'saderat'
  },
  {
    id: '610433',
    label: 'بانک ملت',
    img: 'mellat'
  },
  {
    id: '627353',
    label: 'بانک تجارت',
    img: 'tejarat'
  },
  {
    id: '585983',
    label: 'بانک تجارت',
    img: 'tejarat'
  },
  {
    id: '589463',
    label: 'بانک رفاه',
    img: 'refah'
  },
  {
    id: '627381',
    label: 'بانک انصار',
    img: 'image_url_22'
  },
  {
    id: '639370',
    label: 'بانک مهر اقتصاد',
    img: 'mehr-eghtesad'
  },
  {
    id: '507677',
    label: 'موسسه اعتباری نور',
    img: 'image_url_24'
  },
  {
    id: '628157',
    label: 'موسسه اعتباری توسعه',
    img: 'image_url_25'
  },
  {
    id: '505801',
    label: 'موسسه اعتباری کوثر',
    img: 'image_url_26'
  },
  {
    id: '606256',
    label: 'موسسه اعتباری ملل (عسکریه)',
    img: 'image_url_27'
  },
  {
    id: '606373',
    label: 'بانک قرض الحسنه مهرایرانیان',
    img: 'g-h-mehr-iran'
  }
]

export function findPanCard(panNumber: string) {
  const sanitizedPan = panNumber.replace(/[^\d]/g, '')
  const first6Digits = sanitizedPan.slice(0, 6)

  const bankIndex = bankLookup.findIndex((bank) => bank.id === first6Digits)

  if (bankIndex > -1) {
    return bankLookup[bankIndex]
  } else {
    return false
  }
}

export const validateCreditCardNumber = (cardNumber: string) => {
  if (/[^0-9-\s]+/.test(cardNumber)) return false

  let nCheck = 0
  let nDigit = 0
  let bEven = false
  cardNumber = cardNumber.replace(/\D/g, '')

  for (let n = cardNumber.length - 1; n >= 0; n--) {
    const cDigit = cardNumber.charAt(n)
    nDigit = parseInt(cDigit, 10)
    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9
    }
    nCheck += nDigit
    bEven = !bEven
  }

  return nCheck % 10 === 0
}
