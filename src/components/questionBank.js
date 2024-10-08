const questionBank = [
    {
      difficulty: 'Easy',
      questions: [
        {
          question: "A small aquarium has a volume of 2.5 cubic feet. How many gallons of water can it hold? (1 cubic foot = 7.48 gallons)",
          choices: ["15.7 gallons", "17.3 gallons", "18.7 gallons", "19.5 gallons", "20.2 gallons"],
          correctAnswer: 2
        },
        {
          question: "A rectangular rug measures 6 feet by 9 feet. What is its area in square yards?",
          choices: ["5 square yards", "6 square yards", "7 square yards", "8 square yards", "9 square yards"],
          correctAnswer: 1
        },
        {
          question: "A cube has a volume of 729 cubic centimeters. What is its volume in cubic inches? (1 inch = 2.54 cm)",
          choices: ["27 cubic inches", "44.5 cubic inches", "50.3 cubic inches", "54.7 cubic inches", "60.1 cubic inches"],
          correctAnswer: 1
        },
        {
          question: "A garden plot is 3 meters by 4 meters. What is its area in square feet? (1 meter = 3.28084 feet)",
          choices: ["105.8 sq ft", "118.4 sq ft", "129.2 sq ft", "137.8 sq ft", "144.6 sq ft"],
          correctAnswer: 2
        },
        {
          question: "A cylindrical can has a volume of 500 cubic centimeters. What is this volume in liters?",
          choices: ["0.3 liters", "0.4 liters", "0.5 liters", "0.6 liters", "0.7 liters"],
          correctAnswer: 2
        },
        {
          question: "A square room measures 12 feet on each side. What is its area in square meters? (1 foot = 0.3048 meters)",
          choices: ["10.8 sq m", "12.5 sq m", "13.4 sq m", "14.2 sq m", "15.6 sq m"],
          correctAnswer: 2
        },
        {
          question: "A rectangular box measures 2 feet by 3 feet by 4 feet. What is its volume in cubic meters? (1 foot = 0.3048 meters)",
          choices: ["0.51 cu m", "0.62 cu m", "0.68 cu m", "0.74 cu m", "0.85 cu m"],
          correctAnswer: 2
        },
        {
          question: "A circular pizza has a radius of 6 inches. What is its area in square centimeters? (1 inch = 2.54 cm)",
          choices: ["456.4 sq cm", "547.4 sq cm", "638.3 sq cm", "729.7 sq cm", "821.2 sq cm"],
          correctAnswer: 1
        },
        {
          question: "A cube has a side length of 5 inches. What is its surface area in square centimeters? (1 inch = 2.54 cm)",
          choices: ["387.1 sq cm", "465.6 sq cm", "542.9 sq cm", "619.4 sq cm", "697.8 sq cm"],
          correctAnswer: 1
        },
        {
          question: "A rectangular prism measures 2 cm by 3 cm by 4 cm. What is its volume in cubic inches? (1 inch = 2.54 cm)",
          choices: ["0.12 cu in", "0.15 cu in", "0.18 cu in", "0.21 cu in", "0.24 cu in"],
          correctAnswer: 2
        }
      ]
    },
    {
      difficulty: 'Medium',
      questions: [
        {
          question: "A cylindrical water tank has a diameter of 1.8 meters and a height of 3 meters. What is its capacity in liters? (1 cubic meter = 1000 liters)",
          choices: ["6,785 liters", "7,634 liters", "8,482 liters", "9,331 liters", "10,179 liters"],
          correctAnswer: 1
        },
        {
          question: "A square field measures 100 yards on each side. What is its area in acres? (1 acre = 4,840 square yards)",
          choices: ["1.85 acres", "2.07 acres", "2.29 acres", "2.51 acres", "2.73 acres"],
          correctAnswer: 1
        },
        {
          question: "A room is 15 feet long, 12 feet wide, and 8 feet high. How many cubic meters of air does it contain? (1 foot = 0.3048 meters)",
          choices: ["27.4 cubic meters", "32.6 cubic meters", "37.8 cubic meters", "41.0 cubic meters", "45.2 cubic meters"],
          correctAnswer: 2
        },
        {
          question: "A rectangular pool is 25 meters long and 10 meters wide. What is its area in square feet? (1 meter = 3.28084 feet)",
          choices: ["2,410 sq ft", "2,691 sq ft", "2,972 sq ft", "3,253 sq ft", "3,534 sq ft"],
          correctAnswer: 1
        },
        {
          question: "A cubic container has a volume of 8 cubic feet. What is the length of one of its sides in inches?",
          choices: ["20 inches", "22 inches", "24 inches", "26 inches", "28 inches"],
          correctAnswer: 2
        },
        {
          question: "A spherical balloon has a volume of 4,188.8 cubic centimeters. What is its radius in inches? (1 inch = 2.54 cm)",
          choices: ["4 inches", "5 inches", "6 inches", "7 inches", "8 inches"],
          correctAnswer: 1
        },
        {
          question: "A rectangular piece of land measures 40 meters by 75 meters. What is its area in hectares? (1 hectare = 10,000 square meters)",
          choices: ["0.25 hectares", "0.30 hectares", "0.35 hectares", "0.40 hectares", "0.45 hectares"],
          correctAnswer: 1
        },
        {
          question: "A cylindrical oil drum has a radius of 1 foot and a height of 3 feet. What is its volume in liters? (1 cubic foot = 28.3168 liters)",
          choices: ["201.1 liters", "237.6 liters", "267.3 liters", "298.5 liters", "331.8 liters"],
          correctAnswer: 2
        },
        {
          question: "A rectangular prism measures 5 cm by 8 cm by 12 cm. What is its surface area in square inches? (1 inch = 2.54 cm)",
          choices: ["41.3 sq in", "47.2 sq in", "53.1 sq in", "59.0 sq in", "64.9 sq in"],
          correctAnswer: 2
        },
        {
          question: "A cube has a surface area of 384 square inches. What is its volume in cubic centimeters? (1 inch = 2.54 cm)",
          choices: ["4,096 cu cm", "5,451 cu cm", "6,859 cu cm", "8,192 cu cm", "9,724 cu cm"],
          correctAnswer: 3
        }
      ]
    },
    {
      difficulty: 'Hard',
      questions: [
        {
          question: "A sphere has a surface area of 100π square inches. What is its volume in cubic centimeters? (1 inch = 2.54 cm)",
          choices: ["655.7 cm³", "1048.6 cm³", "1325.5 cm³", "1572.9 cm³", "1767.1 cm³"],
          correctAnswer: 2
        },
        {
          question: "A car is traveling at 65 miles per hour. What is its speed in meters per second? (1 mile = 1609.34 meters)",
          choices: ["23.5 m/s", "26.4 m/s", "29.1 m/s", "31.8 m/s", "34.7 m/s"],
          correctAnswer: 2
        },
        {
          question: "A conical pile of sand has a base radius of 3 meters and a height of 4 meters. What is its volume in cubic yards? (1 meter = 1.09361 yards)",
          choices: ["31.7 cubic yards", "37.9 cubic yards", "42.3 cubic yards", "47.6 cubic yards", "51.8 cubic yards"],
          correctAnswer: 1
        },
        {
          question: "A rectangular field is 200 meters long and 150 meters wide. What is its area in acres? (1 acre = 4046.86 square meters)",
          choices: ["6.18 acres", "7.41 acres", "8.64 acres", "9.87 acres", "11.10 acres"],
          correctAnswer: 1
        },
        {
          question: "A cylindrical water tank has a radius of 1.5 meters and a height of 4 meters. How many gallons of water can it hold? (1 cubic meter = 264.172 gallons)",
          choices: ["3,726 gallons", "4,189 gallons", "4,652 gallons", "5,115 gallons", "5,578 gallons"],
          correctAnswer: 2
        },
        {
          question: "A cube has a diagonal length of 15 inches. What is its volume in cubic centimeters? (1 inch = 2.54 cm)",
          choices: ["5,489 cm³", "6,859 cm³", "8,230 cm³", "9,600 cm³", "10,971 cm³"],
          correctAnswer: 2
        },
        {
          question: "A spherical balloon expands from a radius of 10 cm to 20 cm. By what factor does its volume increase?",
          choices: ["2 times", "4 times", "6 times", "8 times", "10 times"],
          correctAnswer: 3
        },
        {
          question: "A rectangular prism measures 4 feet by 3 feet by 2 feet. What is the length of its main diagonal in inches?",
          choices: ["49.0 inches", "52.9 inches", "56.6 inches", "60.8 inches", "64.3 inches"],
          correctAnswer: 2
        },
        {
          question: "A cone has a volume of 1000 cubic centimeters and a height of 12 cm. What is the radius of its base in inches? (1 inch = 2.54 cm)",
          choices: ["2.17 inches", "2.56 inches", "2.95 inches", "3.34 inches", "3.73 inches"],
          correctAnswer: 2
        },
        {
          question: "A square pyramid has a base area of 100 square meters and a height of 12 meters. What is its volume in cubic feet? (1 meter = 3.28084 feet)",
          choices: ["13,378 cu ft", "14,126 cu ft", "14,874 cu ft", "15,622 cu ft", "16,370 cu ft"],
          correctAnswer: 1
        }
      ]
    },
    {
      difficulty: 'Diablo',
      questions: [
        {
          question: "A cylindrical tank with a radius of 1.2 meters and a height of 3 meters is filled with water. If the water is poured into cubic boxes with sides of 30 centimeters, how many boxes will be completely filled?",
          choices: ["118 boxes", "127 boxes", "136 boxes", "145 boxes", "154 boxes"],
          correctAnswer: 2
        },
        {
          question: "A farmer wants to cover a square field with a side length of 100 meters with a layer of topsoil 5 cm deep. How many cubic yards of topsoil does he need? (1 meter = 1.09361 yards)",
          choices: ["589 cubic yards", "653 cubic yards", "718 cubic yards", "784 cubic yards", "851 cubic yards"],
          correctAnswer: 1
        },
        {
          question: "A pool is 25 meters long, 10 meters wide, and has an average depth of 1.5 meters. How long would it take to fill this pool using a hose that delivers water at a rate of 2 cubic feet per minute? (1 meter = 3.28084 feet)",
          choices: ["4 hours 23 minutes", "5 hours 7 minutes", "5 hours 51 minutes", "6 hours 35 minutes", "7 hours 19 minutes"],
          correctAnswer: 2
        },
        {
          question: "A spherical hot air balloon expands from a radius of 3 meters to 4 meters as it heats up. By what percentage does its surface area increase? (Round to the nearest whole percent)",
          choices: ["33%", "42%", "51%", "60%", "78%"],
          correctAnswer: 3
        },
        {
          question: "A conical water tank has a base radius of 2 meters and a height of 5 meters. If water is flowing into the tank at a rate of 10 liters per second, how long will it take to fill the tank to 80% of its capacity? (π ≈ 3.14159)",
          choices: ["27 minutes 57 seconds", "31 minutes 24 seconds", "34 minutes 51 seconds", "38 minutes 18 seconds", "41 minutes 45 seconds"],
          correctAnswer: 2
        },
        {
          question: "A rectangular shipping container measures 40 feet long, 8 feet wide, and 8.5 feet high. How many cubic meters of cargo can it hold? (1 foot = 0.3048 meters)",
          choices: ["65.13 m³", "72.38 m³", "79.63 m³", "86.88 m³", "94.13 m³"],
          correctAnswer: 1
        },
        {
          question: "A cylindrical oil drum has a radius of 1 foot and a height of 4 feet. If oil costs $3.50 per gallon, what is the value of a full drum of oil? (1 cubic foot ≈ 7.48052 gallons, π ≈ 3.14159)",
          choices: ["$276.46", "$294.18", "$311.90", "$329.62", "$347.34"],
          correctAnswer: 2
        },
        {
          question: "A cube of silver (density 10.5 g/cm³) measures 5 cm on each side. What is its mass in pounds? (1 kg ≈ 2.20462 pounds)",
          choices: ["2.54 lbs", "2.89 lbs", "3.24 lbs", "3.59 lbs", "3.94 lbs"],
          correctAnswer: 2
        }
    ,]}]
    export default questionBank;
