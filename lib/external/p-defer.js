// The MIT License (MIT)
//
// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// This piece of code is adopted from https://github.com/sindresorhus/p-defer
// The reason why we need to fork it is because:
// - The original package published to NPM is not ES5-compliant
//    - Due to the use of arrow functions
// - create-react-app@1 does not play nice with packages that are not ES5-compliant
//    - create-react-app@2 do play nice, but it was so new that most of the people are still on @1
// Criteria to remove this package:
// - When create-react-app@2 become mainstream, or,
// - When p-defer start publishing a ES5-compliant version on NPM
'use strict';

module.exports = function () {
  var ret = {};
  ret.promise = new Promise(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leHRlcm5hbC9wLWRlZmVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJyZXQiLCJwcm9taXNlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsWUFBWTtBQUMzQixNQUFNQyxHQUFHLEdBQUcsRUFBWjtBQUVBQSxFQUFBQSxHQUFHLENBQUNDLE9BQUosR0FBYyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQkMsTUFBbkIsRUFBMkI7QUFDbkRKLElBQUFBLEdBQUcsQ0FBQ0csT0FBSixHQUFjQSxPQUFkO0FBQ0FILElBQUFBLEdBQUcsQ0FBQ0ksTUFBSixHQUFhQSxNQUFiO0FBQ0QsR0FIYSxDQUFkO0FBS0EsU0FBT0osR0FBUDtBQUNELENBVEQiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbi8vXG4vLyBDb3B5cmlnaHQgKGMpIFNpbmRyZSBTb3JodXMgPHNpbmRyZXNvcmh1c0BnbWFpbC5jb20+IChzaW5kcmVzb3JodXMuY29tKVxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbi8vIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbi8vIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbi8vIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbi8vIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuLy8gZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuLy8gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuLy8gSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4vLyBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbi8vIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbi8vIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4vLyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4vLyBUSEUgU09GVFdBUkUuXG5cbi8vIFRoaXMgcGllY2Ugb2YgY29kZSBpcyBhZG9wdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9wLWRlZmVyXG5cbi8vIFRoZSByZWFzb24gd2h5IHdlIG5lZWQgdG8gZm9yayBpdCBpcyBiZWNhdXNlOlxuLy8gLSBUaGUgb3JpZ2luYWwgcGFja2FnZSBwdWJsaXNoZWQgdG8gTlBNIGlzIG5vdCBFUzUtY29tcGxpYW50XG4vLyAgICAtIER1ZSB0byB0aGUgdXNlIG9mIGFycm93IGZ1bmN0aW9uc1xuLy8gLSBjcmVhdGUtcmVhY3QtYXBwQDEgZG9lcyBub3QgcGxheSBuaWNlIHdpdGggcGFja2FnZXMgdGhhdCBhcmUgbm90IEVTNS1jb21wbGlhbnRcbi8vICAgIC0gY3JlYXRlLXJlYWN0LWFwcEAyIGRvIHBsYXkgbmljZSwgYnV0IGl0IHdhcyBzbyBuZXcgdGhhdCBtb3N0IG9mIHRoZSBwZW9wbGUgYXJlIHN0aWxsIG9uIEAxXG5cbi8vIENyaXRlcmlhIHRvIHJlbW92ZSB0aGlzIHBhY2thZ2U6XG4vLyAtIFdoZW4gY3JlYXRlLXJlYWN0LWFwcEAyIGJlY29tZSBtYWluc3RyZWFtLCBvcixcbi8vIC0gV2hlbiBwLWRlZmVyIHN0YXJ0IHB1Ymxpc2hpbmcgYSBFUzUtY29tcGxpYW50IHZlcnNpb24gb24gTlBNXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJldCA9IHt9O1xuXG4gIHJldC5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIHJldC5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICByZXQucmVqZWN0ID0gcmVqZWN0O1xuICB9KTtcblxuICByZXR1cm4gcmV0O1xufTtcbiJdfQ==