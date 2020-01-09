import { observable, reaction, computed, autorun } from 'mobx';

const calculator = observable({
  a: 1,
  b: 2
});

// reaction(
//   () => calculator.a,
//   (value, reaction) => {
//     console.log(`a 값이 ${value}로 변경`);
//   }
// );

// reaction(
//   () => calculator.b,
//   value => {
//     console.log(`b의 값이 ${value}로 변경`);
//   }
// );

const sum = computed(() => {
  console.log('계산중이에요 ');
  return calculator.a + calculator.b;
});

// autorun(() => console.log(`a 의 값 ${calculator.a} 로 변경`));
// autorun(() => console.log(`b 의 값 ${calculator.b} 로 변경`));
autorun(() => sum.get());

// sum.observe(() => calculator.a);
// sum.observe(() => calculator.b);

calculator.a = 10;
//autorun 으로 전달되는 함수에서 사용되는 값을 자동으로주시하여 그 값이 바뀔 때 마다 함수가 주시되도록 해줍니다.
console.log(sum.value);
calculator.b = 20;

console.log(sum.value);

calculator.a = 20;
console.log(sum.value);
