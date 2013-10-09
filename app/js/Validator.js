function Validator() {
    this.allowedsymbols = {first : ["£"], last : ["p"]};
}

Validator.prototype.validate_numeric = function(input) {
  is_numeric = /^-?\d+\.?\d*$/;
  if (is_numeric.test(input)) {
      return true;
  } else {
      return false;
  }
};

Validator.prototype.validate_allowedsymbols = function(input, allowedsymbols) {
    for (var i = 0; i < this.allowedsymbols.first.length; i++) {
        var reg = new RegExp('(^' + this.allowedsymbols.first[i] + ').*');
        if (reg.test(input)) {
            input = input.substr(1,input.length);
        }
    }
    for (var j = 0; j < this.allowedsymbols.last.length; j++) {
        var reg = new RegExp('.*(' + this.allowedsymbols.last[j] + '$)');
        if (reg.test(input)) {
            input = input.slice(0,-1);
        }
    }
    return input;
}

Validator.prototype.validate_convertfloat = function(input) {
    String(input);
    reg = /^[\d]*\.$/;
    if ((input % 1 === 0) && (reg.test(input) === false)) {
        output = parseInt(input);
    } else {
        output = parseFloat(input).toFixed(2) * 100;
    }
    return Math.round(output);
}

Validator.prototype.validate_topence = function(input) {
    input_stripped_allowed_symbols = this.validate_allowedsymbols(input, this.allowedsymbols);
    try {
        if (this.validate_numeric(input_stripped_allowed_symbols)) {
            return this.validate_convertfloat(input_stripped_allowed_symbols);
        } else {
            throw new Error("Your Input is Invalid You must only use numeric characters - input may begin with \"£\" and / or end with \"p\" e.g. 327 or 3.27 or £3.27 or 3.27p or £3.27p");
        }
    } catch (e) {
        return e.message;
    }
}