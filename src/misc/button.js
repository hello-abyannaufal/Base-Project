export default{
  init(color, round, fill) {
    const init = {
      roundLarge: {
        unfill: {
          success: 'rounded-lg px-5 py-2 border border-green-500 hover:border-green-600 hover:bg-slate-100',
          warning: 'rounded-lg px-5 py-2 border border-red-500 hover:border-red-600 hover:bg-slate-100',
        },
        fill:{
          success: 'rounded-lg px-5 py-2 text-white border bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600',
          warning: 'rounded-lg px-5 py-2 text-white border bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600',
        }
      },
      roundFull: {
        unfill: {
          success: 'rounded-full px-5 py-2 border border-green-500 hover:border-green-600 hover:bg-slate-100',
          warning: 'rounded-full px-5 py-2 border border-red-500 hover:border-red-600 hover:bg-slate-100',
        },
        fill: {
          success: 'rounded-full px-5 py-2 text-white border bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600',
          warning: 'rounded-full px-5 py-2 text-white border bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600',
        }
      }
    }

    if (round == true) {
      if (fill == true) {
        if (color == 'success') {
          return init.roundFull.unfill.success
        }
        if (color == 'warning') {
          return init.roundFull.unfill.warning
        }
      }
      else {
        if (color == 'success') {
          return init.roundFull.fill.success
        }
        if (color == 'warning') {
          return init.roundFull.fill.warning
        }
      }
    }
    else {
      if (fill) {
        if (color == 'success') {
          return init.roundLarge.unfill.success
        }
        if (color == 'warning') {
          return init.roundLarge.unfill.warning
        }
      }
      else {
        if (color == 'success') {
          return init.roundLarge.fill.success
        }
        if (color == 'warning') {
          return init.roundLarge.fill.warning
        }
      }
    }
    
  },

  custom(color, shape, fill) {
    const custom = {
      unfill: {
        parallelogram: {
          success: 'rounded -skew-x-12 px-5 py-2 border border-green-500 hover:border-green-600 hover:bg-slate-100',
          warning: 'rounded -skew-x-12 px-5 py-2 border border-red-500 hover:border-red-600 hover:bg-slate-100',
        }
      },
      fill: {
        parallelogram: {
          success: 'rounded -skew-x-12 px-5 py-2 text-white border bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600',
          warning: 'rounded -skew-x-12 px-5 py-2 text-white border bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600',
        }
      }
    }

    if(fill == true) {
      if (shape == 'parallelogram') {
        if(color == 'success') {
          return custom.fill.parallelogram.success
        } else if (color == 'warning') {
          return custom.fill.parallelogram.warning
        }
      }
    } else {
      if (shape == 'parallelogram') {
        if(color == 'success') {
          return custom.unfill.parallelogram.success
        } else if (color == 'warning') {
          return custom.unfill.parallelogram.warning
        }
      }
    }
  }
}
