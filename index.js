// this does nothing and tree shaking makes this file moot, also only production dependencies
// should be listed as a peer dependency here. if it's a dev dependency in a MFE application
// it does not not need to be enforced globally

// this is ES5 and CJS on purpose
function includeMeNot() {
  return true;
}

module.exports = getName;
