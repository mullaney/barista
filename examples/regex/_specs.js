describe('isPhoneNumber', function() {
  it('takes a string and returns a boolean', function() {
    expect(isPhoneNumber('')).toBe(false);
  });
  it('returns true if phone number fits 444-444-3333 pattern', function() {
    expect(isPhoneNumber('646-777-9898')).toBe(true);
    expect(isPhoneNumber('555-777-9898')).toBe(true);
    expect(isPhoneNumber('646-444-9898')).toBe(true);
    expect(isPhoneNumber('656-777-7798')).toBe(true);
  });
  it('returns false if not a phone number', function() {
    expect(isPhoneNumber('9876543210')).toBe(false);
    expect(isPhoneNumber('555')).toBe(false);
  });
  it('returns false if the first digit is 0 or 1', function() {
    expect(isPhoneNumber('046-444-9898')).toBe(false);
    expect(isPhoneNumber('156-777-7798')).toBe(false);
  });
  it('works if the first is a spaces instead', function() {
    expect(isPhoneNumber('246 444-9898')).toBe(true);
    expect(isPhoneNumber('156 777-7798')).toBe(false);
  });
  it('works if the first three numbers have parenthesis around them', function() {
    expect(isPhoneNumber('(246) 444-9898')).toBe(true);
    expect(isPhoneNumber('(156) 777-7798')).toBe(false);
    expect(isPhoneNumber('(645)444-9898')).toBe(true);
    expect(isPhoneNumber('(156) 777-9999')).toBe(false);
  });
});

describe('isEmail function', function() {
  it('takes a string and returns a boolean', function() {
    expect(isEmail('')).toBe(false);
  });
  it('recognizes basic email pattern', function() {
    expect(isEmail('name@example.com')).toBe(true);
  });
  it('requires the @ symbol be present', function() {
    expect(isEmail('name.example.com')).toBe(false);
  });
  it('works with multi level domains like .co.uk', function(){
    expect(isEmail('name@example.co.uk')).toBe(true);
  });
  it('works with capital letters', function() {
    expect(isEmail('NAME@example.io')).toBe(true);
  });
  it('returns false if the email begins with @ symbol', function() {
    expect(isEmail('@gmail.com')).toBe(false);
  });
  it('accepts numbers in all parts of the email', function() {
    expect(isEmail('kevin22@example.com')).toBe(true);
    expect(isEmail('kevin@99example.com')).toBe(true);
    expect(isEmail('kevin@example.3com')).toBe(true);
  });
  it('accepts numbers as in the name portion of the address', function() {
    expect(isEmail('kevin22@example.com')).toBe(true);
  });
  it('returns false if it begins or ends with .', function() {
    expect(isEmail('.kevin@example.com')).toBe(false);
    expect(isEmail('kevin@example.com.')).toBe(false);
  });
});
