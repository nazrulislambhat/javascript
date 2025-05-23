const callStack = [];

function pushStack(funcName) {
  callStack.push(funcName);
  console.log(`Call -> ${funcName}`);
  console.log('Stack ->', [...callStack]);
}
function popStack() {
  const popped = callStack.pop();
  console.log(`Return -> ${popped}`);
  console.log('Stack ->', [...callStack]);
  return popped;
}

function functionA() {
  pushStack('functionA');
  functionB();
  popStack();
}

function functionB() {
  pushStack('functionB');
  functionC();
  popStack();
}

function functionC() {
  pushStack('functionC');
  popStack();
}
function main() {
  pushStack('main');
  functionA();
  popStack();
}

main();
