export function validatePanCard(panNumber) {
  // ابتدا ارقام را از اعداد غیرمجاز حذف می‌کنیم
  const sanitizedPan = panNumber.replace(/[^\d]/g, '')

  // بررسی طول صحیح بودن شماره کارت (باید 16 رقم باشد)
  if (sanitizedPan.length !== 16) {
    return 'شماره کارت نامعتبر'
  }

  // محاسبه رقم کنترل
  const panArray = sanitizedPan.split('').map(Number)
  let sum = 0
  for (let i = 0; i < 16; i++) {
    let digit = panArray[i]
    if (i % 2 === 0) {
      digit *= 2
      if (digit > 9) {
        digit -= 9
      }
    }
    sum += digit
  }

  // بررسی رقم کنترل
  if (sum % 10 !== 0) {
    return 'شماره کارت نامعتبر'
  }

  // تشخیص بانک بر اساس پیش شماره
  const first6Digits = sanitizedPan.slice(0, 6)
  const bankLookup = {
    '603799': {
      label: 'بانک ملی ایران',
      img: 'meli'
    },
    '589210': {
      label: 'بانک سپه',
      img: 'sepah'
    },
    '627648': {
      label: 'بانک توسعه صادرات',
      img: 'saderat'
    },
    '627961': {
      label: 'بانک صنعت و معدن',
      img: 'sanat-o-madan'
    },
    '603770': {
      label: 'بانک کشاورزی',
      img: 'keshavarzi'
    },
    '628023': {
      label: 'بانک مسکن',
      img: 'maskan'
    },
    '627760': {
      label: 'پست بانک ایران',
      img: 'post-bank-iran'
    },
    '502908': {
      label: 'بانک توسعه تعاون',
      img: 'tosee-taavon'
    },
    '627412': {
      label: 'بانک اقتصاد نوین',
      img: 'eghtesadnovin'
    },
    '622106': {
      label: 'بانک پارسیان',
      img: 'parsian'
    },
    '502229': {
      label: 'بانک پاسارگاد',
      img: 'pasarghad'
    },
    '639599': {
      label: 'بانک قوامین',
      img: 'image_url_9'
    },
    '627488': {
      label: 'بانک کارآفرین',
      img: 'image_url_10'
    },
    '621986': {
      label: 'بانک سامان',
      img: 'saman'
    },
    '639346': {
      label: 'بانک سینا',
      img: 'sina'
    },
    '639607': {
      label: 'بانک سرمایه',
      img: 'sarmayeh'
    },
    '504706': {
      label: 'بانک شهر',
      img: 'shahr'
    },
    '502806': {
      label: 'بانک دی',
      img: 'dey'
    },
    '502938': {
      label: 'بانک دی',
      img: 'dey'
    },
    '603769': {
      label: 'بانک صادرات',
      img: 'saderat'
    },
    '610433': {
      label: 'بانک ملت',
      img: 'mellat'
    },
    '627353': {
      label: 'بانک تجارت',
      img: 'tejarat'
    },
    '585983': {
      label: 'بانک تجارت',
      img: 'tejarat'
    },
    '589463': {
      label: 'بانک رفاه',
      img: 'refah'
    },
    '627381': {
      label: 'بانک انصار',
      img: 'image_url_22'
    },
    '639370': {
      label: 'بانک مهر اقتصاد',
      img: 'mehr-eghtesad,'
    },
    '507677': {
      label: 'موسسه اعتباری نور',
      img: 'image_url_24'
    },
    '628157': {
      label: 'موسسه اعتباری توسعه',
      img: 'image_url_25'
    },
    '505801': {
      label: 'موسسه اعتباری کوثر',
      img: 'image_url_26'
    },
    '606256': {
      label: 'موسسه اعتباری ملل (عسکریه)',
      img: 'image_url_27'
    },
    '606373': {
      label: 'بانک قرض الحسنه مهرایرانیان',
      img: 'g-h-mehr-iran'
    }
  }

  if (bankLookup[first6Digits]) {
    console.log("🚀 ~ file: index.ts:160 ~ validatePanCard ~ bankLookup[first6Digits]:", bankLookup[first6Digits])
    return bankLookup[first6Digits]
  } else {
    return 'شماره کارت معتبر (بدون تعیین بانک)'
  }
}
