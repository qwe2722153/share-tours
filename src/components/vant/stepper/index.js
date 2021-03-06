'use strict';

var _component = require('./../common/component.js');

// Note that the bitwise operators and shift operators operate on 32-bit ints
// so in that case, the max safe integer is 2^31-1, or 2147483647

var MAX = 2147483647;
(0, _component.VantComponent)({
  field: true,
  classes: ['input-class', 'plus-class', 'minus-class'],
  props: {
    value: null,
    integer: Boolean,
    disabled: Boolean,
    asyncChange: Boolean,
    disableInput: Boolean,
    min: {
      type: null,
      value: 1
    },
    max: {
      type: null,
      value: MAX
    },
    step: {
      type: null,
      value: 1
    }
  },
  computed: {
    minusDisabled: function minusDisabled() {
      return this.data.disabled || this.data.value <= this.data.min;
    },
    plusDisabled: function plusDisabled() {
      return this.data.disabled || this.data.value >= this.data.max;
    }
  },
  watch: {
    value: function value(_value) {
      if (_value !== '') {
        this.set({
          value: this.range(_value)
        });
      }
    }
  },
  data: {
    focus: false
  },
  created: function created() {
    this.set({
      value: this.range(this.data.value)
    });
  },
  methods: {
    onFocus: function onFocus() {
      this.setData({
        focus: true
      });
    },
    // limit value range
    range: function range(value) {
      return Math.max(Math.min(this.data.max, value), this.data.min);
    },
    onInput: function onInput(event) {
      var _ref = event.detail || {},
          _ref$value = _ref.value,
          value = _ref$value === void 0 ? '' : _ref$value;

      this.triggerInput(value);
    },
    onChange: function onChange(type) {
      if (this.data[type + "Disabled"]) {
        this.$emit('overlimit', type);
        return;
      }

      var diff = type === 'minus' ? -this.data.step : +this.data.step;
      var value = Math.round((this.data.value + diff) * 100) / 100;
      this.triggerInput(this.range(value));
      this.$emit(type);
    },
    onBlur: function onBlur(event) {
      var value = this.range(this.data.value);
      this.triggerInput(value);
      this.$emit('blur', event);
    },
    onMinus: function onMinus() {
      this.onChange('minus');
    },
    onPlus: function onPlus() {
      this.onChange('plus');
    },
    triggerInput: function triggerInput(value) {
      this.set({
        value: this.data.asyncChange ? this.data.value : value
      });
      this.$emit('change', value);
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1BWCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwidmFsdWUiLCJpbnRlZ2VyIiwiQm9vbGVhbiIsImRpc2FibGVkIiwiYXN5bmNDaGFuZ2UiLCJkaXNhYmxlSW5wdXQiLCJtaW4iLCJ0eXBlIiwibWF4Iiwic3RlcCIsImNvbXB1dGVkIiwibWludXNEaXNhYmxlZCIsImRhdGEiLCJwbHVzRGlzYWJsZWQiLCJ3YXRjaCIsIl92YWx1ZSIsInNldCIsInJhbmdlIiwiZm9jdXMiLCJjcmVhdGVkIiwibWV0aG9kcyIsIm9uRm9jdXMiLCJzZXREYXRhIiwiTWF0aCIsIm9uSW5wdXQiLCJldmVudCIsIl9yZWYiLCJkZXRhaWwiLCJfcmVmJHZhbHVlIiwidHJpZ2dlcklucHV0Iiwib25DaGFuZ2UiLCIkZW1pdCIsImRpZmYiLCJyb3VuZCIsIm9uQmx1ciIsIm9uTWludXMiLCJvblBsdXMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQXFEO0FBQ3JEOztBQUVBLElBQUlBLE1BQU0sVUFBVjtBQUNBLDhCQUFjO0FBQ1pDLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsYUFBRCxFQUFnQixZQUFoQixFQUE4QixhQUE5QixDQUZHO0FBR1pDLFNBQU87QUFDTEMsV0FBTyxJQURGO0FBRUxDLGFBQVNDLE9BRko7QUFHTEMsY0FBVUQsT0FITDtBQUlMRSxpQkFBYUYsT0FKUjtBQUtMRyxrQkFBY0gsT0FMVDtBQU1MSSxTQUFLO0FBQ0hDLFlBQU0sSUFESDtBQUVIUCxhQUFPO0FBRkosS0FOQTtBQVVMUSxTQUFLO0FBQ0hELFlBQU0sSUFESDtBQUVIUCxhQUFPSjtBQUZKLEtBVkE7QUFjTGEsVUFBTTtBQUNKRixZQUFNLElBREY7QUFFSlAsYUFBTztBQUZIO0FBZEQsR0FISztBQXNCWlUsWUFBVTtBQUNSQyxtQkFBZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLGFBQU8sS0FBS0MsSUFBTCxDQUFVVCxRQUFWLElBQXNCLEtBQUtTLElBQUws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ekMsV0FBS2dCLEdBQUwsQ0FBUztBQUNQaEIsZUFBTyxLQUFLWSxJQUFMLENBQVVSLFdBQVYsR0FBd0IsS0FBS1EsSUFBTCxDQUFVWixLQUFsQyxHQUEwQ0E7QUFEMUMsT0FBVDtBQUdBLFdBQUsrQixLQUFMLENBQVcsUUFBWCxFQUFxQi9CLEtBQXJCO0FBQ0Q7QUE1Q007QUEvQ0csQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JzsgLy8gTm90ZSB0aGF0IHRoZSBiaXR3aXNlIG9wZXJhdG9ycyBhbmQgc2hpZnQgb3BlcmF0b3JzIG9wZXJhdGUgb24gMzItYml0IGludHNcbi8vIHNvIGluIHRoYXQgY2FzZSwgdGhlIG1heCBzYWZlIGludGVnZXIgaXMgMl4zMS0xLCBvciAyMTQ3NDgzNjQ3XG5cbnZhciBNQVggPSAyMTQ3NDgzNjQ3O1xuVmFudENvbXBvbmVudCh7XG4gIGZpZWxkOiB0cnVlLFxuICBjbGFzc2VzOiBbJ2lucHV0LWNsYXNzJywgJ3BsdXMtY2xhc3MnLCAnbWludXMtY2xhc3MnXSxcbiAgcHJvcHM6IHtcbiAgICB2YWx1ZTogbnVsbCxcbiAgICBpbnRlZ2VyOiBCb29sZWFuLFxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgIGFzeW5jQ2hhbmdlOiBCb29sZWFuLFxuICAgIGRpc2FibGVJbnB1dDogQm9vbGVhbixcbiAgICBtaW46IHtcbiAgICAgIHR5cGU6IG51bGwsXG4gICAgICB2YWx1ZTogMVxuICAgIH0sXG4gICAgbWF4OiB7XG4gICAgICB0eXBlOiBudWxsLFxuICAgICAgdmFsdWU6IE1BWFxuICAgIH0sXG4gICAgc3RlcDoge1xuICAgICAgdHlwZTogbnVsbCxcbiAgICAgIHZhbHVlOiAxXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIG1pbnVzRGlzYWJsZWQ6IGZ1bmN0aW9uIG1pbnVzRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA8PSB0aGlzLmRhdGEubWluO1xuICAgIH0sXG4gICAgcGx1c0Rpc2FibGVkOiBmdW5jdGlvbiBwbHVzRGlzYWJsZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmRpc2FibGVkIHx8IHRoaXMuZGF0YS52YWx1ZSA+PSB0aGlzLmRhdGEubWF4O1xuICAgIH1cbiAgfSxcbiAgd2F0Y2g6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoX3ZhbHVlKSB7XG4gICAgICBpZiAoX3ZhbHVlICE9PSAnJykge1xuICAgICAgICB0aGlzLnNldCh7XG4gICAgICAgICAgdmFsdWU6IHRoaXMucmFuZ2UoX3ZhbHVlKVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGRhdGE6IHtcbiAgICBmb2N1czogZmFsc2VcbiAgfSxcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcbiAgICB0aGlzLnNldCh7XG4gICAgICB2YWx1ZTogdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpXG4gICAgfSk7XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZm9jdXM6IHRydWVcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8gbGltaXQgdmFsdWUgcmFuZ2VcbiAgICByYW5nZTogZnVuY3Rpb24gcmFuZ2UodmFsdWUpIHtcbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih0aGlzLmRhdGEubWF4LCB2YWx1ZSksIHRoaXMuZGF0YS5taW4pO1xuICAgIH0sXG4gICAgb25JbnB1dDogZnVuY3Rpb24gb25JbnB1dChldmVudCkge1xuICAgICAgdmFyIF9yZWYgPSBldmVudC5kZXRhaWwgfHwge30sXG4gICAgICAgICAgX3JlZiR2YWx1ZSA9IF9yZWYudmFsdWUsXG4gICAgICAgICAgdmFsdWUgPSBfcmVmJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdmFsdWU7XG5cbiAgICAgIHRoaXMudHJpZ2dlcklucHV0KHZhbHVlKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0eXBlKSB7XG4gICAgICBpZiAodGhpcy5kYXRhW3R5cGUgKyBcIkRpc2FibGVkXCJdKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ292ZXJsaW1pdCcsIHR5cGUpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBkaWZmID0gdHlwZSA9PT0gJ21pbnVzJyA/IC10aGlzLmRhdGEuc3RlcCA6ICt0aGlzLmRhdGEuc3RlcDtcbiAgICAgIHZhciB2YWx1ZSA9IE1hdGgucm91bmQoKHRoaXMuZGF0YS52YWx1ZSArIGRpZmYpICogMTAwKSAvIDEwMDtcbiAgICAgIHRoaXMudHJpZ2dlcklucHV0KHRoaXMucmFuZ2UodmFsdWUpKTtcbiAgICAgIHRoaXMuJGVtaXQodHlwZSk7XG4gICAgfSxcbiAgICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cihldmVudCkge1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgdGhpcy50cmlnZ2VySW5wdXQodmFsdWUpO1xuICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50KTtcbiAgICB9LFxuICAgIG9uTWludXM6IGZ1bmN0aW9uIG9uTWludXMoKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCdtaW51cycpO1xuICAgIH0sXG4gICAgb25QbHVzOiBmdW5jdGlvbiBvblBsdXMoKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKCdwbHVzJyk7XG4gICAgfSxcbiAgICB0cmlnZ2VySW5wdXQ6IGZ1bmN0aW9uIHRyaWdnZXJJbnB1dCh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXQoe1xuICAgICAgICB2YWx1ZTogdGhpcy5kYXRhLmFzeW5jQ2hhbmdlID8gdGhpcy5kYXRhLnZhbHVlIDogdmFsdWVcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgIH1cbiAgfVxufSk7Il19