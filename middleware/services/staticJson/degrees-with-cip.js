"use strict";
const data = [
  {
    Program: "AABFN",
    DisplayName:
      "Associate of Arts with a concentration in Business Fundamentals",
    CIP: "52.0201"
  },
  {
    Program: "AACJS",
    DisplayName: "Associate of Arts in Criminal Justice",
    CIP: "43.0199"
  },
  {
    Program: "AAITT",
    DisplayName:
      "Associate of Arts with a concentration in Information Technology",
    CIP: "11.0103"
  },
  {
    Program: "AAITT/IAS",
    DisplayName:
      "Associate of Arts with a concentration in Information Technology with an Information Assurance and Security Certificate",
    CIP: "11.0103"
  },
  {
    Program: "BA/ENG",
    DisplayName: "Bachelor of Arts in English",
    CIP: "23.0101"
  },
  {
    Program: "BS/COM",
    DisplayName: "Bachelor of Science in Communication",
    CIP: "09.0100"
  },
  {
    Program: "BS/EVS",
    DisplayName: "Bachelor of Science in Environmental Science",
    CIP: "03.0103"
  },
  {
    Program: "BSACC",
    DisplayName: "Bachelor of Science in Accounting",
    CIP: "52.0301"
  },
  {
    Program: "BSACC/BFA",
    DisplayName:
      "Bachelor of Science in Accounting with an Associate of Arts with a concentration in Business Fundamentals",
    CIP: "52.0301"
  },
  {
    Program: "BSAP/MT",
    DisplayName:
      "Bachelor of Science in Applied Psychology with a concentration in Media and Technology",
    CIP: "42.2813"
  },
  {
    Program: "BSB",
    DisplayName: "Bachelor of Science in Business ",
    CIP: "52.0201"
  },
  {
    Program: "BSB/BFA",
    DisplayName:
      "Bachelor of Science in Business with an Associate of Arts with a concentration in Business Fundamentals",
    CIP: "52.0201"
  },
  {
    Program: "BSB/FP",
    DisplayName:
      "Bachelor of Science in Business with a Financial Planning Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/HR",
    DisplayName:
      "Bachelor of Science in Business with a Human Resource Management Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/MG",
    DisplayName:
      "Bachelor of Science in Business with a General Management Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/MK",
    DisplayName: "Bachelor of Science in Business with a Marketing Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/OP2",
    DisplayName:
      "Bachelor of Science in Business with an Operations Management Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/PJ",
    DisplayName:
      "Bachelor of Science in Business with a Project Management Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/PJ2",
    DisplayName:
      "Bachelor of Science in Business with a Project Management Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/SB",
    DisplayName:
      "Bachelor of Science in Business with a Small Business Management and Entrepreneurship Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSB/SB2",
    DisplayName:
      "Bachelor of Science in Business with a Small Business and Entrepreneurship Certificate",
    CIP: "52.0201"
  },
  {
    Program: "BSCJA",
    DisplayName: "Bachelor of Science in Criminal Justice Administration",
    CIP: "43.0103"
  },
  {
    Program: "BSCJA/CJSA",
    DisplayName:
      "Bachelor of Science in Criminal Justice Administration with an Associate of Arts in Criminal Justice",
    CIP: "43.0103"
  },
  {
    Program: "BSCPSS",
    DisplayName: "Bachelor of Science in Correctional Program Support Services",
    CIP: "44.0201"
  },
  {
    Program: "BSED/E",
    DisplayName:
      "Bachelor of Science in Education/Elementary Teacher Education",
    CIP: "13.1202"
  },
  {
    Program: "BSED/ECH",
    DisplayName: "Bachelor of Science in Education/Early Childhood Education",
    CIP: "13.1210"
  },
  {
    Program: "BSHA",
    DisplayName: "Bachelor of Science in Health Administration",
    CIP: "51.0702"
  },
  {
    Program: "BSHA/LT",
    DisplayName:
      "Bachelor of Science in Health Administration with a Long Term Care Certificate",
    CIP: "51.0702"
  },
  {
    Program: "BSIOP",
    DisplayName: "Bachelor of Science in Industrial-Organizational Psychology",
    CIP: "42.2804"
  },
  {
    Program: "BSIT",
    DisplayName: "Bachelor of Science in Information Technology",
    CIP: "11.0103"
  },
  {
    Program: "BSIT/ACS",
    DisplayName:
      "Bachelor of Science in Information Technology with an Advanced Cyber Security Certificate",
    CIP: "11.0103"
  },
  {
    Program: "BSIT/ANT",
    DisplayName:
      "Bachelor of Science in Information Technology with an Advanced Networking Certificate",
    CIP: "11.0103"
  },
  {
    Program: "BSIT/ASD",
    DisplayName:
      "Bachelor of Science in Information Technology with an Advanced Software Developer Certificate",
    CIP: "11.0103"
  },
  {
    Program: "BSIT/ITA",
    DisplayName:
      "Bachelor of Science in Information Technology with an Associate of Arts with a concentration in Information Technology ",
    CIP: "11.0103"
  },
  {
    Program: "BSM",
    DisplayName: "Bachelor of Science in Management",
    CIP: "52.0201"
  },
  {
    Program: "BSM/BFA",
    DisplayName:
      "Bachelor of Science in Management with an Associate of Arts with a concentration in Business Fundamentals ",
    CIP: "52.0201"
  },
  {
    Program: "BSN",
    DisplayName: "RN to Bachelor of Science in Nursing",
    CIP: "51.3801"
  },
  {
    Program: "BSPA",
    DisplayName: "Bachelor of Science in Public Administration",
    CIP: "44.0401"
  },
  {
    Program: "BSSEC",
    DisplayName: "Bachelor of Science in Security Management ",
    CIP: "43.0112"
  },
  {
    Program: "CERT/ACS",
    DisplayName: "Advanced Cyber Security Certificate (Undergraduate)",
    CIP: "11.1003"
  },
  {
    Program: "CERT/AN",
    DisplayName: "Advanced Networking Certificate (Undergraduate)",
    CIP: "11.1001"
  },
  {
    Program: "CERT/ASD",
    DisplayName: "Advanced Software Developer Certificate (Undergraduate)",
    CIP: "11.0201"
  },
  {
    Program: "CERT/BSAN",
    DisplayName: "Business Analytics Certificate (Undergraduate)",
    CIP: "52.1301"
  },
  {
    Program: "CERT/EHRF",
    DisplayName:
      "Electronic Health Records Fundamentals Certificate (Undergraduate)",
    CIP: "51.0707"
  },
  {
    Program: "CERT/FINP",
    DisplayName: "Financial Planning Certificate (Undergraduate)",
    CIP: "52.0801"
  },
  {
    Program: "CERT/G-ACC",
    DisplayName: "Graduate Accounting Certificate",
    CIP: "52.0305"
  },
  {
    Program: "CERT/G-BA",
    DisplayName: "Graduate Business Analytics Certificate",
    CIP: "11.0501"
  },
  {
    Program: "CERT/G-CS",
    DisplayName: "Graduate Cyber Security Certificate",
    CIP: "11.1003"
  },
  {
    Program: "CERT/G-HCS",
    DisplayName: "Graduate Health Care Sustainability Management Certificate",
    CIP: "51.0701"
  },
  {
    Program: "CERT/G-HRM",
    DisplayName: "Graduate Human Resource Management Certificate",
    CIP: "52.1001"
  },
  {
    Program: "CERT/G-MKT",
    DisplayName: "Graduate Marketing Certificate",
    CIP: "52.1401"
  },
  {
    Program: "CERT/HRM",
    DisplayName: "Human Resource Management Certificate (Undergraduate)",
    CIP: "52.1001"
  },
  {
    Program: "CERT/HWAF",
    DisplayName:
      "Health and Wellness Administration Foundations Certificate (Undergraduate)",
    CIP: "51.0710"
  },
  {
    Program: "CERT/IAS",
    DisplayName:
      "Information Assurance and Security Certificate (Undergraduate)",
    CIP: "11.1003"
  },
  {
    Program: "CERT/MGT",
    DisplayName: "General Management Certificate (Undergraduate)",
    CIP: "52.0201"
  },
  {
    Program: "CERT/MKT",
    DisplayName: "Marketing Certificate (Undergraduate)",
    CIP: "52.1401"
  },
  {
    Program: "CERT/MR",
    DisplayName: "Medical Records Certificate (Undergraduate)",
    CIP: "51.0707"
  },
  {
    Program: "CERT/NAD",
    DisplayName: "Post Master's Nursing Administrators Certificate",
    CIP: "51.3802"
  },
  {
    Program: "CERT/NED",
    DisplayName: "Post Master's Nursing Educators Certificate",
    CIP: "51.3817"
  },
  {
    Program: "CERT/OPS",
    DisplayName: "Operations Management Certificate (Undergraduate)",
    CIP: "52.0205"
  },
  {
    Program: "CERT/PM",
    DisplayName: "Project Management Certificate (Undergraduate)",
    CIP: "52.0211"
  },
  {
    Program: "CERT/SBE",
    DisplayName:
      "Small Business Management and Entrepreneurship Certificate (Undergraduate)",
    CIP: "52.0201"
  },
  {
    Program: "DBA",
    DisplayName: "Doctor of Business Administration",
    CIP: "52.0201"
  },
  {
    Program: "DHA",
    DisplayName: "Doctor of Health Administration",
    CIP: "51.0701"
  },
  {
    Program: "DM",
    DisplayName: "Doctor of Management in Organizational Leadership",
    CIP: "52.0213"
  },
  {
    Program: "DM/IST",
    DisplayName:
      "Doctor of Management in Organizational Leadership with a specialization in Information Systems and Technology",
    CIP: "52.1201"
  },
  {
    Program: "EDD",
    DisplayName: "Doctor of Education in Educational Leadership",
    CIP: "13.0401"
  },
  {
    Program: "EDD/CI",
    DisplayName:
      "Doctor of Education in Educational Leadership with a specialization in Curriculum and Instruction",
    CIP: "13.0301"
  },
  {
    Program: "EDD/ET",
    DisplayName:
      "Doctor of Education in Educational Leadership with a specialization in Educational Technology",
    CIP: "13.0501"
  },
  {
    Program: "EDD/HEA",
    DisplayName:
      "Doctor of Education in Educational Leadership with a specialization in Higher Education Administration",
    CIP: "13.0406"
  },
  {
    Program: "FNP",
    DisplayName: "Post Master's Family Nurse Practitioner Certificate",
    CIP: "51.3805"
  },
  {
    Program: "GHC",
    DisplayName: "Graduate Gerontology Health Care Certificate",
    CIP: "19.0702"
  },
  {
    Program: "G-PM",
    DisplayName: "Graduate Project Management Certificate",
    CIP: "52.0211"
  },
  {
    Program: "HCI",
    DisplayName: "Graduate Health Care Informatics Certificate",
    CIP: "11.0103"
  },
  {
    Program: "HM",
    DisplayName: "Health Management Certificate (Undergraduate)",
    CIP: "51.0702"
  },
  {
    Program: "LTC",
    DisplayName: "Long Term Care Certificate (Undergraduate)",
    CIP: "51.0718"
  },
  {
    Program: "MAED/ADM",
    DisplayName: "Master of Arts in Education/Administration and Supervision",
    CIP: "13.0401"
  },
  {
    Program: "MAED/ADM2",
    DisplayName:
      "Master of Arts in Education/Administration and Supervision (Non-Licensure)",
    CIP: "13.0401"
  },
  {
    Program: "MAED/AET",
    DisplayName: "Master of Arts in Education/Adult Education and Training",
    CIP: "13.0403"
  },
  {
    Program: "MAED/CI",
    DisplayName: "Master of Arts in Education/Curriculum and Instruction",
    CIP: "13.0301"
  },
  {
    Program: "MAED/SPE",
    DisplayName: "Master of Arts in Education/Special Education",
    CIP: "13.1001"
  },
  {
    Program: "MAED/TED-E",
    DisplayName: "Master of Arts in Education/Elementary Teacher Education",
    CIP: "13.1202"
  },
  {
    Program: "MAED/TED-S",
    DisplayName: "Master of Arts in Education/Secondary Teacher Education",
    CIP: "13.1205"
  },
  {
    Program: "MBA",
    DisplayName: "Master of Business Administration",
    CIP: "52.0201"
  },
  {
    Program: "MBA/ACCC",
    DisplayName:
      "Master of Business Administration with a concentration in Accounting (Certificate Track)",
    CIP: "52.0301"
  },
  {
    Program: "MBA/HRMC",
    DisplayName:
      "Master of Business Administration with a concentration in Human Resource Management (Certificate Track)",
    CIP: "52.1001"
  },
  {
    Program: "MBA/MKTC",
    DisplayName:
      "Master of Business Administration with a concentration in Marketing (Certificate Track)",
    CIP: "52.1401"
  },
  {
    Program: "MBA/PMC",
    DisplayName:
      "Master of Business Administration with a concentration in Project Management (Certificate Track)",
    CIP: "52.0201"
  },
  {
    Program: "MHA",
    DisplayName: "Master of Health Administration",
    CIP: "51.0701"
  },
  {
    Program: "MHA/ED",
    DisplayName:
      "Master of Health Administration with a concentration in Education",
    CIP: "13.1307"
  },
  {
    Program: "MHA/GER",
    DisplayName:
      "Master of Health Administration with a concentration in Gerontology",
    CIP: "19.0702"
  },
  {
    Program: "MHA/INF",
    DisplayName:
      "Master of Health Administration with a concentration in Informatics",
    CIP: "11.0104"
  },
  {
    Program: "MHA/MBA",
    DisplayName:
      "Master of Health Administration/Master of Business Administration",
    CIP: "51.0701"
  },
  {
    Program: "MHA/SUS",
    DisplayName:
      "Master of Health Administration with a concentration in Sustainability Management",
    CIP: "51.0701"
  },
  {
    Program: "MIS",
    DisplayName: "Master of Information Systems",
    CIP: "52.1201"
  },
  {
    Program: "MIS/BA",
    DisplayName:
      "Master of Information Systems with a Graduate Business Analytics Certificate",
    CIP: "52.1201"
  },
  {
    Program: "MIS/CS",
    DisplayName:
      "Master of Information Systems with a Graduate Cyber Security Certificate",
    CIP: "52.1201"
  },
  { Program: "MM", DisplayName: "Master of Management", CIP: "52.0201" },
  {
    Program: "MPA",
    DisplayName: "Master of Public Administration",
    CIP: "44.0401"
  },
  {
    Program: "MS/AJS",
    DisplayName: "Master of Science/Administration of Justice and Security",
    CIP: "43.0103"
  },
  {
    Program: "MSC/CCMH",
    DisplayName:
      "Master of Science in Counseling/Clinical Mental Health Counseling ",
    CIP: "51.1508"
  },
  {
    Program: "MSC/MFCT",
    DisplayName:
      "Master of Science in Counseling/Marriage, Family, and Child Therapy",
    CIP: "51.1505"
  },
  {
    Program: "MSN/ADM",
    DisplayName:
      "Master of Science in Nursing with a concentration in Nurse Administration",
    CIP: "51.3802"
  },
  {
    Program: "MSN/FNP",
    DisplayName: "Master of Science in Nursing/Family Nurse Practitioner",
    CIP: "51.3805"
  },
  {
    Program: "MSN/INF",
    DisplayName:
      "Master of Science in Nursing with a concentration in Informatics",
    CIP: "51.3802"
  },
  {
    Program: "MSN/NED",
    DisplayName:
      "Master of Science in Nursing with a concentration in Nurse Education",
    CIP: "51.3817"
  },
  {
    Program: "MSP",
    DisplayName: "Master of Science in Psychology",
    CIP: "42.9999"
  },
  {
    Program: "MSP/I-O",
    DisplayName:
      "Master of Science in Psychology with a concentration in Industrial-Organizational Psychology ",
    CIP: "42.9999"
  },
  {
    Program: "NETPLUS",
    DisplayName: "Network+ Technologies Certificate (Undergraduate)",
    CIP: "11.1001"
  }
];

module.exports = data;
