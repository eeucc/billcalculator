//Load tariff data
const tariff_data = [
  {
    energy_consumption_tariff: {
      2017: {
        Q1: [
          0.3537, 0.9478, 1.8864, 2.4597, 2.658, 2.8474, 2.9173, 2.6057, 1.7573,
          1.3863, 2.5111,
        ],
        Q2: [
          0.4344, 1.1285, 2.1478, 2.9193, 3.1159, 3.2898, 3.3537, 3.0874,
          2.0245, 1.6077, 2.8983,
        ],
        Q3: [
          0.515, 1.3093, 2.4092, 3.379, 3.5739, 3.7321, 3.79, 3.5691, 2.2917,
          1.8291, 3.2854,
        ],
        Q4: [
          0.5957, 1.4901, 2.6706, 3.8387, 4.0318, 4.1745, 4.2263, 4.0507,
          2.5589, 2.0506, 3.6725,
        ],
      },
      2018: {
        Q1: [
          0.6764, 1.6708, 2.932, 4.2983, 4.4898, 4.6169, 4.6627, 4.5324, 2.8224,
          2.2714, 4.0596,
        ],
        Q2: [
          0.7571, 1.8516, 3.1934, 4.758, 4.9477, 5.0593, 5.099, 5.0141, 3.0889,
          2.4927, 4.4468,
        ],
        Q3: [
          0.8377, 2.0324, 3.4549, 5.2177, 5.4057, 5.5017, 5.5354, 5.4958,
          3.3553, 2.714, 4.8339,
        ],
        Q4: [
          0.9184, 2.2131, 3.7163, 5.6773, 5.8636, 5.9441, 5.9717, 5.9775,
          3.6217, 2.9353, 5.221,
        ],
      },
      2019: {
        Q1: [
          0.9991, 2.3939, 3.9777, 6.137, 6.3216, 6.3864, 6.408, 6.4592, 3.8814,
          3.1554, 5.6082,
        ],
        Q2: [
          1.0798, 2.5746, 4.2391, 6.5967, 6.7796, 6.8288, 6.8444, 6.9409, 4.147,
          3.3765, 5.9953,
        ],
        Q3: [
          1.1604, 2.7554, 4.5005, 7.0563, 7.2375, 7.2712, 7.2807, 7.4225,
          4.4127, 3.5977, 6.3824,
        ],
        Q4: [
          1.2411, 2.9362, 4.7619, 7.516, 7.6955, 7.7136, 7.717, 7.9042, 4.6783,
          3.8189, 6.7695,
        ],
      },
      2020: {
        Q1: [
          1.3218, 3.1169, 5.0233, 7.9756, 8.1534, 8.156, 8.1534, 8.3859, 4.9332,
          4.038, 7.1567,
        ],
        Q2: [
          1.4025, 3.2977, 5.2847, 8.4353, 8.5897, 8.5983, 8.6114, 8.8676, 5.198,
          4.259, 7.5438,
        ],
        Q3: [
          1.4831, 3.4785, 5.5461, 8.895, 9.026, 9.0407, 9.0693, 9.3493, 5.4628,
          4.48, 7.9309,
        ],
        Q4: [
          1.5638, 3.6592, 5.8075, 9.3546, 9.4624, 9.4831, 9.5273, 9.831, 5.7276,
          4.701, 8.3181,
        ],
      },
    },

    service_charge: {
      2017: {
        Q1: [10.24, 42.95, 3.67, 15.02, 55.13, 19.31, 55.19, 55.19, 55.19],
        Q2: [10.47, 43.9, 3.84, 15.33, 56.38, 19.71, 56.38, 56.38, 56.38],
        Q3: [10.71, 44.8, 4.01, 15.65, 57.57, 20.12, 57.57, 57.57, 57.57],
        Q4: [10.95, 45.8, 4.18, 15.97, 58.75, 20.53, 58.75, 58.75, 58.75],
      },
      2018: {
        Q1: [10.19, 46.75, 4.36, 16.28, 61.13, 20.94, 59.94, 59.94, 59.94],
        Q2: [11.42, 47.7, 4.53, 16.6, 61.32, 21.34, 61.13, 61.13, 61.13],
        Q3: [11.66, 48.65, 4.7, 16.92, 62.32, 21.75, 62.32, 62.32, 62.32],
        Q4: [11.9, 49.6, 4.87, 17.23, 63.51, 22.16, 63.51, 63.51, 63.51],
      },
      2019: {
        Q1: [12.14, 50.55, 5.04, 17.55, 64.7, 22.57, 64.7, 64.7, 64.7],
        Q2: [12.37, 51.5, 5.21, 17.87, 65.89, 22.97, 65.89, 65.89, 65.89],
        Q3: [12.61, 52.45, 5.38, 18.18, 67.07, 23.38, 67.07, 67.07, 67.07],
        Q4: [12.85, 53.4, 5.55, 18.5, 68.26, 23.79, 68.26, 68.26, 68.26],
      },
      2020: {
        Q1: [13.08, 54.35, 5.72, 18.82, 69.45, 24.19, 69.45, 69.45, 69.45],
        Q2: [13.32, 55.3, 5.89, 19.13, 70.64, 24.6, 70.64, 70.64, 70.64],
        Q3: [13.56, 56.25, 6.07, 19.45, 71.83, 25.01, 71.83, 71.83, 71.83],
        Q4: [13.8, 57.2, 6.24, 19.77, 73.02, 25.42, 73.02, 73.02, 73.02],
      },
    },

    demand_charge_tariff: {
      2017: {
        Q1: [256.88, 188.81],
        Q2: [293.76, 215.91],
        Q3: [330.64, 243.02],
        Q4: [367.52, 270.13],
      },
      2018: {
        Q1: [404.4, 297.23],
        Q2: [441.28, 324.34],
        Q3: [478.16, 351.44],
        Q4: [515.03, 378.55],
      },
      2019: {
        Q1: [551.91, 405.66],
        Q2: [588.79, 432.76],
        Q3: [625.67, 459.87],
        Q4: [662.55, 486.98],
      },
      2020: {
        Q1: [699.43, 514.08],
        Q2: [735.31, 541.19],
        Q3: [773.19, 568.29],
        Q4: [810.07, 595.4],
      },
    },
  },
];
//Calculate Bill
document
  .getElementById("calculate")
  .addEventListener("click", function calculateBill() {
    let consumption = 0;
    let energy_bill = 0;
    let service_charge = 0;
    let reg_fee = 0;
    let vat = 0;
    let ebc_fee = 0;
    let demand_charge = 0;
    let pf_punishment = 0;
    const previous_reading = document.getElementById("previous_reading");
    const current_reading = document.getElementById("current_reading");
    const year = document.getElementById("bill_year").value;
    const previousReading = parseFloat(previous_reading.value);
    const currentReading = parseFloat(current_reading.value);
    const quarter = document.getElementById("bill_term").value;
    const resultText = document.getElementById("result");
    const energyBill = document.getElementById("energyBill");
    const serviceCharge = document.getElementById("serviceCharge");
    const regulatoryFee = document.getElementById("regulatoryFee");
    const VAT = document.getElementById("vat");
    const ebcFee = document.getElementById("ebcFee");
    const total = document.getElementById("total");
    const consume = document.getElementById("consumption");
    const remark = document.getElementById("remark");
    const staff = document.getElementById("staff").value;

    resultText.textContent = "";

    // Check if fields are filled
    if (!year || !currentReading || !quarter) {
      resultText.textContent = "Please fill in all fields.";
      return;
    }

    if (
      currentReading < previousReading ||
      currentReading <= 0 ||
      previousReading < 0
    ) {
      return (resultText.textContent = "Please Enter Valid Required Data");
    } else {
      consumption = currentReading - previousReading;
      if (staff == "no") {
        switch (year) {
          case "2017":
            let tariff17 = tariff_data[0].energy_consumption_tariff[2017];
            let service17 = tariff_data[0].service_charge[2017];
            if (quarter == "Quarter1") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff17.Q1[0];
                service_charge = service17.Q1[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff17.Q1[1];
                service_charge = service17.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff17.Q1[2];
                service_charge = service17.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff17.Q1[3];
                service_charge = service17.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q1[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff17.Q1[4];
                service_charge = service17.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q1[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff17.Q1[5];
                service_charge = service17.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q1[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff17.Q1[6];
                service_charge = service17.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q1[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter2") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff17.Q2[0];
                service_charge = service17.Q2[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff17.Q2[1];
                service_charge = service17.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff17.Q2[2];
                service_charge = service17.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff17.Q2[3];
                service_charge = service17.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q2[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff17.Q2[4];
                service_charge = service17.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q2[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff17.Q2[5];
                service_charge = service17.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q2[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff17.Q2[6];
                service_charge = service17.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q2[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter3") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff17.Q3[0];
                service_charge = service17.Q3[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff17.Q3[1];
                service_charge = service17.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff17.Q3[2];
                service_charge = service17.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff17.Q3[3];
                service_charge = service17.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q3[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff17.Q3[4];
                service_charge = service17.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q3[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff17.Q3[5];
                service_charge = service17.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q3[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff17.Q3[6];
                service_charge = service17.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q3[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter4") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff17.Q4[0];
                service_charge = service17.Q4[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff17.Q4[1];
                service_charge = service17.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff17.Q4[2];
                service_charge = service17.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff17.Q4[3];
                service_charge = service17.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q4[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff17.Q4[4];
                service_charge = service17.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q4[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff17.Q4[5];
                service_charge = service17.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q4[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff17.Q4[6];
                service_charge = service17.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff17.Q4[6] + service_charge) *
                  0.15;
              }
            }
            break;
          case "2018":
            let tariff18 = tariff_data[0].energy_consumption_tariff[2018];
            let service18 = tariff_data[0].service_charge[2018];
            if (quarter == "Quarter1") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff18.Q1[0];
                service_charge = service18.Q1[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff18.Q1[1];
                service_charge = service18.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff18.Q1[2];
                service_charge = service18.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff18.Q1[3];
                service_charge = service18.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q1[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff18.Q1[4];
                service_charge = service18.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q1[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff18.Q1[5];
                service_charge = service18.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q1[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff18.Q1[6];
                service_charge = service18.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q1[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter2") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff18.Q2[0];
                service_charge = service18.Q2[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff18.Q2[1];
                service_charge = service18.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff18.Q2[2];
                service_charge = service18.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff18.Q2[3];
                service_charge = service18.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q2[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff18.Q2[4];
                service_charge = service18.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q2[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff18.Q2[5];
                service_charge = service18.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q2[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff18.Q2[6];
                service_charge = service18.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q2[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter3") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff18.Q3[0];
                service_charge = service18.Q3[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff18.Q3[1];
                service_charge = service18.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff18.Q3[2];
                service_charge = service18.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff18.Q3[3];
                service_charge = service18.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff.Q3[3] + service_charge) * 0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff18.Q3[4];
                service_charge = service18.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q3[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff18.Q3[5];
                service_charge = service18.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q3[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff18.Q3[6];
                service_charge = service18.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q3[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter4") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff18.Q4[0];
                service_charge = service18.Q4[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff18.Q4[1];
                service_charge = service18.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff18.Q4[2];
                service_charge = service18.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff18.Q4[3];
                service_charge = service18.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q4[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff18.Q4[4];
                service_charge = service18.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q4[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff18.Q4[5];
                service_charge = service18.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q4[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff18.Q4[6];
                service_charge = service18.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff18.Q4[6] + service_charge) *
                  0.15;
              }
            }
            break;
          case "2019":
            let tariff19 = tariff_data[0].energy_consumption_tariff[2019];
            let service19 = tariff_data[0].service_charge[2019];
            if (quarter == "Quarter1") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff19.Q1[0];
                service_charge = service19.Q1[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff19.Q1[1];
                service_charge = service19.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff19.Q1[2];
                service_charge = service19.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff19.Q1[3];
                service_charge = service19.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q1[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff19.Q1[4];
                service_charge = service19.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q1[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff19.Q1[5];
                service_charge = service19.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q1[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff19.Q1[6];
                service_charge = service19.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q1[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter2") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff19.Q2[0];
                service_charge = service19.Q2[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff19.Q2[1];
                service_charge = service19.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff19.Q2[2];
                service_charge = service19.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff19.Q2[3];
                service_charge = service19.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q2[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff19.Q2[4];
                service_charge = service19.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q2[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff19.Q2[5];
                service_charge = service19.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q2[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff19.Q2[6];
                service_charge = service19.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q2[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter3") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff19.Q3[0];
                service_charge = service19.Q3[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff19.Q3[1];
                service_charge = service19.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff19.Q3[2];
                service_charge = service19.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff19.Q3[3];
                service_charge = service19.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tarif9.Q3[3] + service_charge) * 0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff19.Q3[4];
                service_charge = service19.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q3[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff19.Q3[5];
                service_charge = service19.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q3[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff19.Q3[6];
                service_charge = service19.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q3[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter4") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff19.Q4[0];
                service_charge = service19.Q4[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff19.Q4[1];
                service_charge = service19.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff19.Q4[2];
                service_charge = service19.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff19.Q4[3];
                service_charge = service19.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q4[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff19.Q4[4];
                service_charge = service19.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q4[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff19.Q4[5];
                service_charge = service19.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q4[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff19.Q4[6];
                service_charge = service19.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff19.Q4[6] + service_charge) *
                  0.15;
              }
            }
            break;
          case "2020":
            let tariff20 = tariff_data[0].energy_consumption_tariff[2020];
            let service20 = tariff_data[0].service_charge[2020];
            if (quarter == "Quarter1") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff20.Q1[0];
                service_charge = service20.Q1[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff20.Q1[1];
                service_charge = service20.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff20.Q1[2];
                service_charge = service20.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff20.Q1[3];
                service_charge = service20.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q1[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff20.Q1[4];
                service_charge = service20.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q1[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff20.Q1[5];
                service_charge = service20.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q1[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff20.Q1[6];
                service_charge = service20.Q1[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q1[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter2") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff20.Q2[0];
                service_charge = service20.Q2[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff20.Q2[1];
                service_charge = service20.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff20.Q2[2];
                service_charge = service20.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff20.Q2[3];
                service_charge = service20.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q2[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff20.Q2[4];
                service_charge = service20.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q2[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff20.Q2[5];
                service_charge = service20.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q2[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff20.Q2[6];
                service_charge = service20.Q2[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q2[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter3") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff20.Q3[0];
                service_charge = service20.Q3[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff20.Q3[1];
                service_charge = service20.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff20.Q3[2];
                service_charge = service20.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff20.Q3[3];
                service_charge = service20.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q3[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff20.Q3[4];
                service_charge = service20.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q3[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff20.Q3[5];
                service_charge = service20.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q3[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff20.Q3[6];
                service_charge = service20.Q3[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q3[6] + service_charge) *
                  0.15;
              }
            } else if (quarter == "Quarter4") {
              if (consumption <= 50) {
                energy_bill = consumption * tariff20.Q4[0];
                service_charge = service20.Q4[0];
                reg_fee = (energy_bill + service_charge) * 0.005;
              } else if (consumption > 50 && consumption <= 100) {
                energy_bill = consumption * tariff20.Q4[1];
                service_charge = service20.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 100 && consumption <= 200) {
                energy_bill = consumption * tariff20.Q4[2];
                service_charge = service20.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
              } else if (consumption > 200 && consumption <= 300) {
                energy_bill = consumption * tariff20.Q4[3];
                service_charge = service20.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q4[3] + service_charge) *
                  0.15;
              } else if (consumption > 300 && consumption <= 400) {
                energy_bill = consumption * tariff20.Q4[4];
                service_charge = service20.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q4[4] + service_charge) *
                  0.15;
              } else if (consumption > 400 && consumption <= 500) {
                energy_bill = consumption * tariff20.Q4[5];
                service_charge = service20.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q4[5] + service_charge) *
                  0.15;
              } else if (consumption > 500) {
                energy_bill = consumption * tariff20.Q4[6];
                service_charge = service20.Q4[1];
                reg_fee = (energy_bill + service_charge) * 0.005;
                ebc_fee = 10;
                vat =
                  ((consumption - 200) * tariff20.Q4[6] + service_charge) *
                  0.15;
              }
            }
            break;
          default:
            break;
        }
      } else if (staff == "active" || staff == "retired") {
        return (resultText.textContent = "Under Development Coming Soon");
      }

      resultText.innerHTML +=
        "Consumption: " +
        consumption.toFixed(2) +
        " KWh<br><br>" +
        "Energy Consumption Bill: " +
        energy_bill.toFixed(2) +
        " ETB<br><br>" +
        "Service Charge: " +
        service_charge +
        " ETB<br><br>" +
        "Regulatory Fee: " +
        reg_fee.toFixed(2) +
        " ETB<br><br>" +
        "Value Added Tax (VAT): " +
        vat.toFixed(2) +
        " ETB<br><br>" +
        "EBC TV Fee: " +
        ebc_fee +
        " ETB<br><br><br>" +
        "Your total bill: " +
        (energy_bill + service_charge + reg_fee + vat + ebc_fee).toFixed(2) +
        " ETB";
    }
  });
