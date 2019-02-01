"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _pDefer = _interopRequireDefault(require("./external/p-defer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventAsPromise =
/*#__PURE__*/
function () {
  function EventAsPromise() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, EventAsPromise);

    this.queue = [];
    this.defers = [];
    this.upcomingDeferred = null;
    this.eventListener = this.eventListener.bind(this);
    this.options = options;
    this.one = this.one.bind(this);
    this.upcoming = this.upcoming.bind(this);

    this[Symbol.iterator] = function () {
      return {
        next: function next() {
          return {
            done: false,
            value: _this.upcoming()
          };
        }
      };
    };
  }

  _createClass(EventAsPromise, [{
    key: "eventListener",
    value: function eventListener(event) {
      var deferred = this.defers.shift();
      var args = this.options.array ? [].slice.call(arguments) : event;

      if (deferred) {
        deferred.resolve(args);
      } else if (this.options.queue) {
        var newDeferred = (0, _pDefer.default)();
        newDeferred.resolve(args);
        this.queue.push(newDeferred.promise);
      }

      if (this.upcomingDeferred) {
        this.upcomingDeferred.resolve(args);
        this.upcomingDeferred = null;
      }
    }
  }, {
    key: "one",
    value: function one() {
      if (this.options.queue && this.queue.length > 0) {
        return this.queue.shift();
      }

      var deferred = (0, _pDefer.default)();
      this.defers.push(deferred);
      return deferred.promise;
    }
  }, {
    key: "upcoming",
    value: function upcoming() {
      if (!this.upcomingDeferred) {
        this.upcomingDeferred = (0, _pDefer.default)();
      }

      return this.upcomingDeferred.promise;
    }
  }]);

  return EventAsPromise;
}();

exports.default = EventAsPromise;
module.exports = exports.default;
module.exports.default = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJFdmVudEFzUHJvbWlzZSIsIm9wdGlvbnMiLCJxdWV1ZSIsImRlZmVycyIsInVwY29taW5nRGVmZXJyZWQiLCJldmVudExpc3RlbmVyIiwiYmluZCIsIm9uZSIsInVwY29taW5nIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXZlbnQiLCJkZWZlcnJlZCIsInNoaWZ0IiwiYXJncyIsImFycmF5Iiwic2xpY2UiLCJjYWxsIiwiYXJndW1lbnRzIiwicmVzb2x2ZSIsIm5ld0RlZmVycmVkIiwicHVzaCIsInByb21pc2UiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztJQUVxQkEsYzs7O0FBQ25CLDRCQUEwQjtBQUFBOztBQUFBLFFBQWRDLE9BQWMsdUVBQUosRUFBSTs7QUFBQTs7QUFDeEIsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixLQUFLQSxhQUFMLENBQW1CQyxJQUFuQixDQUF3QixJQUF4QixDQUFyQjtBQUNBLFNBQUtMLE9BQUwsR0FBZUEsT0FBZjtBQUVBLFNBQUtNLEdBQUwsR0FBVyxLQUFLQSxHQUFMLENBQVNELElBQVQsQ0FBYyxJQUFkLENBQVg7QUFDQSxTQUFLRSxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY0YsSUFBZCxDQUFtQixJQUFuQixDQUFoQjs7QUFFQSxTQUFLRyxNQUFNLENBQUNDLFFBQVosSUFBd0I7QUFBQSxhQUFPO0FBQzdCQyxRQUFBQSxJQUFJLEVBQUU7QUFBQSxpQkFBTztBQUNYQyxZQUFBQSxJQUFJLEVBQUUsS0FESztBQUVYQyxZQUFBQSxLQUFLLEVBQUUsS0FBSSxDQUFDTCxRQUFMO0FBRkksV0FBUDtBQUFBO0FBRHVCLE9BQVA7QUFBQSxLQUF4QjtBQU1EOzs7O2tDQUVhTSxLLEVBQU87QUFDbkIsVUFBTUMsUUFBUSxHQUFHLEtBQUtaLE1BQUwsQ0FBWWEsS0FBWixFQUFqQjtBQUNBLFVBQU1DLElBQUksR0FBRyxLQUFLaEIsT0FBTCxDQUFhaUIsS0FBYixHQUFxQixHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY0MsU0FBZCxDQUFyQixHQUFnRFAsS0FBN0Q7O0FBRUEsVUFBSUMsUUFBSixFQUFjO0FBQ1pBLFFBQUFBLFFBQVEsQ0FBQ08sT0FBVCxDQUFpQkwsSUFBakI7QUFDRCxPQUZELE1BRU8sSUFBSSxLQUFLaEIsT0FBTCxDQUFhQyxLQUFqQixFQUF3QjtBQUM3QixZQUFNcUIsV0FBVyxHQUFHLHNCQUFwQjtBQUNBQSxRQUFBQSxXQUFXLENBQUNELE9BQVosQ0FBb0JMLElBQXBCO0FBQ0EsYUFBS2YsS0FBTCxDQUFXc0IsSUFBWCxDQUFnQkQsV0FBVyxDQUFDRSxPQUE1QjtBQUNEOztBQUVELFVBQUksS0FBS3JCLGdCQUFULEVBQTJCO0FBQ3pCLGFBQUtBLGdCQUFMLENBQXNCa0IsT0FBdEIsQ0FBOEJMLElBQTlCO0FBQ0EsYUFBS2IsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDRDtBQUNGOzs7MEJBRUs7QUFDSixVQUFJLEtBQUtILE9BQUwsQ0FBYUMsS0FBYixJQUFzQixLQUFLQSxLQUFMLENBQVd3QixNQUFYLEdBQW9CLENBQTlDLEVBQWlEO0FBQy9DLGVBQU8sS0FBS3hCLEtBQUwsQ0FBV2MsS0FBWCxFQUFQO0FBQ0Q7O0FBRUQsVUFBTUQsUUFBUSxHQUFHLHNCQUFqQjtBQUVBLFdBQUtaLE1BQUwsQ0FBWXFCLElBQVosQ0FBaUJULFFBQWpCO0FBRUEsYUFBT0EsUUFBUSxDQUFDVSxPQUFoQjtBQUNEOzs7K0JBRVU7QUFDVCxVQUFJLENBQUMsS0FBS3JCLGdCQUFWLEVBQTRCO0FBQzFCLGFBQUtBLGdCQUFMLEdBQXdCLHNCQUF4QjtBQUNEOztBQUVELGFBQU8sS0FBS0EsZ0JBQUwsQ0FBc0JxQixPQUE3QjtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZURlZmVycmVkIGZyb20gJy4vZXh0ZXJuYWwvcC1kZWZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QXNQcm9taXNlIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5xdWV1ZSA9IFtdO1xuICAgIHRoaXMuZGVmZXJzID0gW107XG4gICAgdGhpcy51cGNvbWluZ0RlZmVycmVkID0gbnVsbDtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy5vbmUgPSB0aGlzLm9uZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBjb21pbmcgPSB0aGlzLnVwY29taW5nLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzW1N5bWJvbC5pdGVyYXRvcl0gPSAoKSA9PiAoe1xuICAgICAgbmV4dDogKCkgPT4gKHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB0aGlzLnVwY29taW5nKClcbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBldmVudExpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgZGVmZXJyZWQgPSB0aGlzLmRlZmVycy5zaGlmdCgpO1xuICAgIGNvbnN0IGFyZ3MgPSB0aGlzLm9wdGlvbnMuYXJyYXkgPyBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cykgOiBldmVudDtcblxuICAgIGlmIChkZWZlcnJlZCkge1xuICAgICAgZGVmZXJyZWQucmVzb2x2ZShhcmdzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5xdWV1ZSkge1xuICAgICAgY29uc3QgbmV3RGVmZXJyZWQgPSBjcmVhdGVEZWZlcnJlZCgpO1xuICAgICAgbmV3RGVmZXJyZWQucmVzb2x2ZShhcmdzKTtcbiAgICAgIHRoaXMucXVldWUucHVzaChuZXdEZWZlcnJlZC5wcm9taXNlKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy51cGNvbWluZ0RlZmVycmVkKSB7XG4gICAgICB0aGlzLnVwY29taW5nRGVmZXJyZWQucmVzb2x2ZShhcmdzKTtcbiAgICAgIHRoaXMudXBjb21pbmdEZWZlcnJlZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25lKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMucXVldWUgJiYgdGhpcy5xdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWV1ZS5zaGlmdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGRlZmVycmVkID0gY3JlYXRlRGVmZXJyZWQoKTtcblxuICAgIHRoaXMuZGVmZXJzLnB1c2goZGVmZXJyZWQpO1xuXG4gICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gIH1cblxuICB1cGNvbWluZygpIHtcbiAgICBpZiAoIXRoaXMudXBjb21pbmdEZWZlcnJlZCkge1xuICAgICAgdGhpcy51cGNvbWluZ0RlZmVycmVkID0gY3JlYXRlRGVmZXJyZWQoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGNvbWluZ0RlZmVycmVkLnByb21pc2U7XG4gIH1cbn1cbiJdfQ==