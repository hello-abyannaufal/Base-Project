export default{
  process(color, round, line) {
    const preset = {
      roundLarge: {
        borderTrue: {
          success: 'rounded-lg px-5 py-2 border border-green-500 hover:border-green-600 hover:bg-slate-100',
          warning: 'rounded-lg px-5 py-2 border border-red-500 hover:border-red-600 hover:bg-slate-100',
        },
        borderFalse:{
          success: 'rounded-lg px-5 py-2 text-white bg-green-500 hover:bg-green-600',
          warning: 'rounded-lg px-5 py-2 text-white bg-red-500 hover:bg-red-600',
        }
      },
      roundFull: {
        borderTrue: {
          success: 'rounded-full px-5 py-2 border border-green-500 hover:border-green-600 hover:bg-slate-100',
          warning: 'rounded-full px-5 py-2 border border-red-500 hover:border-red-600 hover:bg-slate-100',
        },
        borderFalse: {
          success: 'rounded-full px-6 py-2 text-white bg-green-500 hover:bg-green-600',
          warning: 'rounded-full px-6 py-2 text-white bg-red-500 hover:bg-red-600',
        }
      }
    }

    if (round == true) {
      if (line == true) {
        if (color == 'success') {
          return preset.roundFull.borderTrue.success
        }
        if (color == 'warning') {
          return preset.roundFull.borderTrue.warning
        }
      }
      else {
        if (color == 'success') {
          return preset.roundFull.borderFalse.success
        }
        if (color == 'warning') {
          return preset.roundFull.borderFalse.warning
        }
      }
    }
    else {
      if (line) {
        if (color == 'success') {
          return preset.roundLarge.borderTrue.success
        }
        if (color == 'warning') {
          return preset.roundLarge.borderTrue.warning
        }
      }
      else {
        if (color == 'success') {
          return preset.roundLarge.borderFalse.success
        }
        if (color == 'warning') {
          return preset.roundLarge.borderFalse.warning
        }
      }
    }
    
  }
}
