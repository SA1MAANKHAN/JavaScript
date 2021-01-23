
function interviewQues(name){

console.log('What work do you do ?')
return function (job){
  switch (job) {
    case 'teacher':
          console.log('Hello ' + name + ', what subject do you teach ?')
          break;
    case 'Navy':
          console.log('Hello ' + name + ', On which ship do you work ?')
          break;
    case 'chef':
          console.log('Hello ' + name + ', what\'s your favorite dish ?')
          break;
  }
}
}

interviewQues('salmaan')('teacher');
