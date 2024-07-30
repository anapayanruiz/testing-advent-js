export const findFirstRepeated = (gifts) => {
  if(!Array.isArray(gifts)) throw new Error('parameter provided must be an array')
  if(gifts.length === 0) throw new Error('parameter provided must be an array with elements')

  const noGiftIds = []
  gifts.forEach(gift => {
    if(typeof gift !== 'number') noGiftIds.push(gift)
  })
  if(noGiftIds.length > 0) throw new Error('parameter provided must be an array with number elements')

  const uniqueGifts = new Set(gifts)
  if(uniqueGifts.size === gifts.length) return -1

  const repeatedGifts = []
  gifts.forEach((gift, index) => {
    if(gifts.indexOf(gift) !== index) {
      repeatedGifts.push(gift)
    }
  })
  
  return repeatedGifts[0]
}
