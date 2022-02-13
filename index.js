const dayStart = '07:30';
const dayEnd = '17:45';

const meet = (start, time) => {
  const meetStart = start.split(':');
  const dayS = dayStart.split(':');
  const dayE = dayEnd.split(':');
  let meetFinish = [];

  const num = (arrTime) => {
    let myArr = [];
    for (let item of arrTime) {
      myArr.push(Number(item));
    }
    return myArr;
  }
  const ms = num(meetStart);
  const ds = num(dayS);
  const de = num(dayE);

  if (ds[0] >= ms[0] && ds[1] > ms[1]) {
    return console.log(false);
  }

  if (de[0] < ms[0]) {
    return console.log(false);
  }

  meetFinish[0] = ms[0];
  meetFinish[1] = ms[1] + time;

  if (meetFinish[1] >= 60) {
    meetFinish[0] = ms[0] + 1;
    meetFinish[1] = meetFinish[1] - 60;
  }

  const mf = num(meetFinish);

  if (mf[0] > de[0] || mf[0] == de[0] && mf[1] > de[1]) {
    return console.log(false);
  } else {
    return console.log(true);
  }
}

meet('7:00', 15);
meet('07:15', 30)
meet('07:30', 30);
meet('11:30', 60);
meet('17:00', 45);
meet('17:30', 20);
meet('18:00', 15);
