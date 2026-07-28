const college= {
    name :'vnc',
    class: ['11','12'],
    events: ['science fair', 'bijoy dibosh'],
    unique:{
        color: 'blue',
        result:{
            cgpa:3.9,
            merit : 'top'

        }
    }
}


console.log(college.unique.color);
console.log(college.events[0]);

college.events[1]= '16 December';

console.log(college.events);
