var answer;

function convert(temp, type) {

  if(type === "C") {
    console.log(((temp - 32) * (5/9)) + " " + type);

  } else if (type === "F"){

    console.log(((temp * (9/5)) + 32) + " " + type);
  }

}

convert(212, "C");
convert(32, "C");
convert(65, "C");
convert(0, "F");
