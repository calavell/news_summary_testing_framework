function it(label, callback) {
    console.log(`Test: ${label}`)
    callback()
  }

  function expect(a) {
    return {
      toEqual: function(b) {
        if (a === b) {
          console.log("Pass")
        } else {
          console.log("Fail")
        }
      },
      toThrowError: function(c) {
        try {
         a()
        } catch (err) {
        return c
        }
      }
    }
  }
