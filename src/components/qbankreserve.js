const questionBank = [
    { subject: "Math",
      concepts: [
        {
          name: "Square and Cubic Units",
          difficulties: [
            {
              difficulty: "Easy",
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
              difficulty: "Medium",
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
              difficulty: "Hard",
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
              difficulty: "Diablo",
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
              ]
            }
          ]
        },
        {
          name: "Percent",
          difficulties: [
            {
              difficulty: "Easy",
              questions: [
                {
                  question: "What is 25% of 80?",
                  choices: ["15", "20", "25", "30", "35"],
                  correctAnswer: 1
                },
                {
                  question: "If 30% of a number is 45, what is the number?",
                  choices: ["120", "135", "150", "165", "180"],
                  correctAnswer: 2
                },
                {
                  question: "A shirt originally priced at $50 is on sale for 20% off. What is the sale price?",
                  choices: ["$30", "$35", "$40", "$45", "$48"],
                  correctAnswer: 2
                },
                {
                  question: "What percentage of 200 is 50?",
                  choices: ["15%", "20%", "25%", "30%", "35%"],
                  correctAnswer: 2
                },
                {
                  question: "If you increase 60 by 15%, what is the result?",
                  choices: ["66", "69", "72", "75", "78"],
                  correctAnswer: 1
                },
                {
                  question: "75 is what percent of 300?",
                  choices: ["15%", "20%", "25%", "30%", "35%"],
                  correctAnswer: 2
                },
                {
                  question: "If 40% of a number is 28, what is 60% of the same number?",
                  choices: ["36", "38", "40", "42", "44"],
                  correctAnswer: 3
                },
                {
                  question: "What is the percentage increase from 50 to 60?",
                  choices: ["10%", "15%", "20%", "25%", "30%"],
                  correctAnswer: 2
                },
                {
                  question: "If you have 80 marbles and lose 25% of them, how many do you have left?",
                  choices: ["55", "60", "65", "70", "75"],
                  correctAnswer: 1
                },
                {
                  question: "What is 150% of 40?",
                  choices: ["50", "55", "60", "65", "70"],
                  correctAnswer: 2
                }
              ]
            },
            {
              difficulty: "Medium",
              questions: [
                {
                  question: "If the price of a product increases by 20% and then decreases by 20%, what is the overall percentage change?",
                  choices: ["-4%", "-2%", "0%", "+2%", "+4%"],
                  correctAnswer: 1
                },
                {
                  question: "A store offers a 30% discount, plus an additional 15% off the discounted price. What is the total percentage discount?",
                  choices: ["40.5%", "42.5%", "45%", "47.5%", "50%"],
                  correctAnswer: 0
                },
                {
                  question: "If 85% of a number is 51, what is 120% of the same number?",
                  choices: ["60", "66", "72", "78", "84"],
                  correctAnswer: 2
                },
                {
                  question: "A company's profits increased by 15% in the first year and 25% in the second year. What was the total percentage increase over the two years?",
                  choices: ["40%", "41.25%", "42.5%", "43.75%", "45%"],
                  correctAnswer: 2
                },
                {
                  question: "If the ratio of boys to girls in a class is 3:5, what percentage of the class are boys?",
                  choices: ["30%", "35%", "37.5%", "40%", "45%"],
                  correctAnswer: 2
                },
                {
                  question: "A car depreciates by 15% in its first year and 10% in its second year. If it's worth $20,400 after two years, what was its original value?",
                  choices: ["$25,000", "$26,000", "$27,000", "$28,000", "$29,000"],
                  correctAnswer: 2
                },
                {
                  question: "If 70% of A is equal to 40% of B, and B is 120, what is the value of A?",
                  choices: ["60", "65", "68", "72", "76"],
                  correctAnswer: 2
                },
                {
                  question: "A solution contains 20% alcohol. How much water should be added to 100 ml of this solution to make it 15% alcohol?",
                  choices: ["25 ml", "30 ml", "33.33 ml", "35 ml", "40 ml"],
                  correctAnswer: 2
                },
                {
                  question: "If the population of a town increases by 5% each year, what will be the percentage increase after 3 years?",
                  choices: ["15%", "15.76%", "16.25%", "17.5%", "18.75%"],
                  correctAnswer: 1
                },
                {
                  question: "In a school, 45% of the students are boys and 55% are girls. If there are 396 girls, how many students are there in total?",
                  choices: ["680", "700", "720", "740", "760"],
                  correctAnswer: 2
                }
              ]
            },
            {
              difficulty: "Hard",
              questions: [
                {
                  question: "A company's revenue increased by 20% in 2021 and 30% in 2022. In 2023, it decreased by 10%. What was the overall percentage increase from 2020 to 2023?",
                  choices: ["38%", "40%", "42%", "44%", "46%"],
                  correctAnswer: 2
                },
                {
                  question: "If x% of y is 25, and y% of x is 36, what is the value of x + y?",
                  choices: ["55", "60", "65", "70", "75"],
                  correctAnswer: 2
                },
                {
                  question: "A mixture contains acid and water in the ratio 2:3. What percent of acid should be added to make the ratio 3:4?",
                  choices: ["10%", "20%", "30%", "40%", "50%"],
                  correctAnswer: 2
                },
                {
                  question: "In a class, 60% of the students are girls. If 10 more boys join the class, the percentage of girls drops to 50%. How many students were originally in the class?",
                  choices: ["40", "45", "50", "55", "60"],
                  correctAnswer: 2
                },
                {
                  question: "A store offers a 20% discount, but charges 8% sales tax. If you have $100 to spend, what is the most expensive item you can buy (to the nearest cent)?",
                  choices: ["$105.26", "$107.53", "$110.80", "$113.64", "$116.28"],
                  correctAnswer: 3
                },
                {
                  question: "If the price of a stock increases by x% on Monday and decreases by the same percentage on Tuesday, it will end up at 99% of its original price. What is the value of x?",
                  choices: ["5%", "7%", "9%", "10%", "12%"],
                  correctAnswer: 3
                },
                {
                  question: "A bacteria culture doubles every hour. If there are currently 10,000 bacteria, what percentage of the current population was present 3 hours ago?",
                  choices: ["10%", "12.5%", "15%", "17.5%", "20%"],
                  correctAnswer: 1
                },
                {
                  question: "In a game, your score increases by 50% for each correct answer and decreases by 40% for each wrong answer. If you answered 5 questions correctly and 3 questions incorrectly, what percentage of your initial score is your final score?",
                  choices: ["151.9%", "161.9%", "171.9%", "181.9%", "191.9%"],
                  correctAnswer: 2
                },
                {
                  question: "A car dealer offers a 15% discount on the marked price of a car. If a customer negotiates an additional 10% off the discounted price, what percentage of the original marked price will the customer pay?",
                  choices: ["73.5%", "75.5%", "76.5%", "77.5%", "78.5%"],
                  correctAnswer: 2
                },
                {
                  question: "If the ratio of two numbers is 3:4 and 75% of the larger number is 12 more than 80% of the smaller number, what is the larger number?",
                  choices: ["60", "64", "68", "72", "76"],
                  correctAnswer: 2
                }
              ]
            },
            {
              difficulty: "Diablo",
              questions: [
                {
                  question: "X is 679% greater than Y. Z/3 is 22% of Y. Z is M percent of Y. What is the value of 300M?",
                  choices: ["19,200", "19,500", "19,800", "20,100", "20,400"],
                  correctAnswer: 2
                },
                {
                  question: "X is Y% greater than Z. Y is (X/Z)% less than X. What is the value of Y?",
                  choices: ["39.4214%", "40.4214%", "41.4214%", "42.4214%", "43.4214%"],
                  correctAnswer: 2
                },
                {
                  question: "A company's profit increased by x% in 2021 and by y% in 2022. If the total increase over the two years was 69%, and x is 20% greater than y, what is the value of x?",
                  choices: ["34%", "35%", "36%", "37%", "38%"],
                  correctAnswer: 2
                },
                {
                  question: "If A is x% of B, B is y% of C, and C is z% of A, what is the product of x, y, and z?",
                  choices: ["900,000", "950,000", "1,000,000", "1,050,000", "1,100,000"],
                  correctAnswer: 2
                },
                {
                  question: "A store offers a discount of x%. After applying the discount, they add a tax of y%. If the final price is the same as the original price, and x is 5 percentage points higher than y, what is the value of x?",
                  choices: ["16.94%", "17.44%", "17.94%", "18.44%", "18.94%"],
                  correctAnswer: 2
                },
                {
                  question: "In a class, the ratio of boys to girls is 4:5. If 20% of the boys and 30% of the girls are wearing glasses, what percentage of the students wearing glasses are boys?",
                  choices: ["38.46%", "40.00%", "41.54%", "43.08%", "44.62%"],
                  correctAnswer: 2
                },
                {
                  question: "A mixture of two alloys A and B contains 60% copper. Alloy A contains 70% copper and alloy B contains 50% copper. If 100 kg of the mixture is made, how many kg of alloy A is used?",
                  choices: ["40 kg", "45 kg", "50 kg", "55 kg", "60 kg"],
                  correctAnswer: 2
                },
                {
                  question: "A salesperson's commission rate increases by 10% for every $10,000 in sales. If their base rate is 5% and they make a sale of $37,000, what is their commission on this sale?",
                  choices: ["$2,405", "$2,590", "$2,775", "$2,960", "$3,145"],
                  correctAnswer: 2
                },
                {
                  question: "In a game, your score doubles for each correct answer and halves for each incorrect answer. After 8 questions, your score is 81.25% of your starting score. How many questions did you answer correctly?",
                  choices: ["3", "4", "5", "6", "7"],
                  correctAnswer: 2
                },
                {
                  question: "A bank offers a compound interest rate of r% per annum, compounded annually. If a sum of money doubles in 12 years, what is the value of r to the nearest hundredth?",
                  choices: ["5.95%", "6.05%", "6.15%", "6.25%", "6.35%"],
                  correctAnswer: 1
                }
              ]
            }
          ]
        },