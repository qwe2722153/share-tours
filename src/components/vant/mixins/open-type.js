'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var openType = exports.openType = Behavior({
  properties: {
    openType: String
  },
  methods: {
    bindGetUserInfo: function bindGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    bindContact: function bindContact(event) {
      this.$emit('contact', event.detail);
    },
    bindGetPhoneNumber: function bindGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    bindError: function bindError(event) {
      this.$emit('error', event.detail);
    },
    bindLaunchApp: function bindLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    bindOpenSetting: function bindOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4tdHlwZS5qcyJdLCJuYW1lcyI6WyJvcGVuVHlwZSIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsIlN0cmluZyIsIm1ldGhvZHMiLCJiaW5kR2V0VXNlckluZm8iLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwiYmluZENvbnRhY3QiLCJiaW5kR2V0UGhvbmVOdW1iZXIiLCJiaW5kRXJyb3IiLCJiaW5kTGF1bmNoQXBwIiwiYmluZE9wZW5TZXR0aW5nIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLDhCQUFXQyxTQUFTO0FBQzdCQyxjQUFZO0FBQ1ZGLGNBQVVHO0FBREEsR0FEaUI7QUFJN0JDLFdBQVM7QUFDUEMscUJBQWlCLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQy9DLFdBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxNQUFNRSxNQUFoQztBQUNELEtBSE07QUFJUEMsaUJBQWEsU0FBU0EsV0FBVCxDQUFxQkgsS0FBckIsRUFBNEI7QUFDdkMsV0FBS0MsS0FBTCxDQUFXLFNBQVgsRUFBc0JELE1BQU1FLE1BQTVCO0FBQ0QsS0FOTTtBQU9QRSx3QkFBb0IsU0FBU0Esa0JBQVQsQ0FBNEJKLEtBQTVCLEVBQW1DO0FBQ3JELFdBQUtDLEtBQUwsQ0FBVyxnQkFBWCxFQUE2QkQsTUFBTUUsTUFBbkM7QUFDRCxLQVRNO0FBVVBHLGVBQVcsU0FBU0EsU0FBVCxDQUFtQkwsS0FBbkIsRUFBMEI7QUFDbkMsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0QsS0FaTTtBQWFQSSxtQkFBZSxTQUFTQSxhQUFULENBQXVCTixLQUF2QixFQUE4QjtBQUMzQyxXQUFLQyxLQUFMLENBQVcsV0FBWCxFQUF3QkQsTUFBTUUsTUFBOUI7QUFDRCxLQWZNO0FBZ0JQSyxxQkFBaUIsU0FBU0EsZUFBVCxDQUF5QlAsS0FBekIsRUFBZ0M7QUFDL0MsV0FBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEJELE1BQU1FLE1BQWhDO0FBQ0Q7QUFsQk07QUFKb0IsQ0FBVCxDQUFmIiwiZmlsZSI6Im9wZW4tdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgb3BlblR5cGUgPSBCZWhhdmlvcih7XG4gIHByb3BlcnRpZXM6IHtcbiAgICBvcGVuVHlwZTogU3RyaW5nXG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBiaW5kR2V0VXNlckluZm86IGZ1bmN0aW9uIGJpbmRHZXRVc2VySW5mbyhldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnZ2V0dXNlcmluZm8nLCBldmVudC5kZXRhaWwpO1xuICAgIH0sXG4gICAgYmluZENvbnRhY3Q6IGZ1bmN0aW9uIGJpbmRDb250YWN0KGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdjb250YWN0JywgZXZlbnQuZGV0YWlsKTtcbiAgICB9LFxuICAgIGJpbmRHZXRQaG9uZU51bWJlcjogZnVuY3Rpb24gYmluZEdldFBob25lTnVtYmVyKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdnZXRwaG9uZW51bWJlcicsIGV2ZW50LmRldGFpbCk7XG4gICAgfSxcbiAgICBiaW5kRXJyb3I6IGZ1bmN0aW9uIGJpbmRFcnJvcihldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnZXJyb3InLCBldmVudC5kZXRhaWwpO1xuICAgIH0sXG4gICAgYmluZExhdW5jaEFwcDogZnVuY3Rpb24gYmluZExhdW5jaEFwcChldmVudCkge1xuICAgICAgdGhpcy4kZW1pdCgnbGF1bmNoYXBwJywgZXZlbnQuZGV0YWlsKTtcbiAgICB9LFxuICAgIGJpbmRPcGVuU2V0dGluZzogZnVuY3Rpb24gYmluZE9wZW5TZXR0aW5nKGV2ZW50KSB7XG4gICAgICB0aGlzLiRlbWl0KCdvcGVuc2V0dGluZycsIGV2ZW50LmRldGFpbCk7XG4gICAgfVxuICB9XG59KTsiXX0=