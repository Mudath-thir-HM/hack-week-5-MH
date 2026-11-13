/*
  ALUMNI — AFCSC Jaji, Department of Air Warfare
  SAMPLE CONTENT. Every person, rank, achievement and date in `people` is invented
  (source: Alumni_Sample_Content_v2.xlsx) and must be replaced with the client's
  verified records before real use. Course and milestone dates are from the
  committee report. Everything lives in this one file.
*/

const ALUMNI = {
  "meta": {
    "college": "Armed Forces Command and Staff College",
    "short": "AFCSC, Jaji",
    "dept": "Department of Air Warfare",
    "courses": [
      {
        "id": "jc",
        "name": "Junior Course",
        "since": "1979"
      },
      {
        "id": "sc",
        "name": "Senior Course",
        "since": "1978"
      }
    ]
  },
  "eras": [
    {
      "id": "e1978",
      "year": "1978",
      "kicker": "The beginning",
      "title": "The first course",
      "bg": "parade",
      "band": [
        [
          "1978",
          "The first Senior Course runs under the Air Faculty."
        ],
        [
          "1979",
          "The Junior Course is established."
        ]
      ],
      "text": "Two courses, one faculty. From the first intake the College taught officers to think in air, land and sea at once — and to write it down plainly enough for a commander to act on.",
      "cards": [
        "parade",
        "hall"
      ],
      "members": []
    },
    {
      "id": "e1979",
      "year": "1979",
      "kicker": "Junior Course",
      "title": "The Junior Course opens",
      "bg": "hall",
      "band": [
        [
          "1979",
          "The Junior Course is established."
        ]
      ],
      "text": "The Junior Course took the younger officers — captains, squadron leaders, lieutenant commanders — and taught them the staff method that would carry them through the rest of their careers.",
      "cards": [
        "hall",
        "line"
      ],
      "members": []
    },
    {
      "id": "e1998",
      "year": "1998—2009",
      "kicker": "First decades",
      "title": "The first names",
      "bg": "line",
      "band": [
        [
          "2002",
          "The Air Faculty becomes the Department of Air Warfare."
        ]
      ],
      "text": "The earliest alumni on this wall came back as squadron commanders, directing staff and instructors. In 2002 the Air Faculty became the Department of Air Warfare — the office that keeps this record.",
      "cards": [
        "line",
        "tarmac"
      ],
      "members": [
        "b07",
        "b08",
        "b09",
        "b10",
        "a08",
        "a07",
        "a09",
        "a10"
      ]
    },
    {
      "id": "e2011",
      "year": "2011—2019",
      "kicker": "Growth",
      "title": "A wider room",
      "bg": "flight",
      "band": [
        [
          "2011",
          "Allied officers join the courses in growing numbers."
        ]
      ],
      "text": "By the twenty-tens the syndicates were mixed — Army, Navy and Air Force, and officers from partner air forces across Africa. The work moved from the lecture hall into joint exercises.",
      "cards": [
        "flight",
        "salute"
      ],
      "members": [
        "b04",
        "b05",
        "b06",
        "a03",
        "a04",
        "a05",
        "a06"
      ]
    },
    {
      "id": "e2021",
      "year": "2021—2024",
      "kicker": "Today",
      "title": "Thirty countries and more",
      "bg": "cockpit",
      "band": [
        [
          "2024",
          "Alumni now include officers from more than 30 African countries."
        ]
      ],
      "text": "Today the alumni roll runs from Lagos to Lusaka, from Dakar to Nairobi. Every name on this wall sat in the same syndicate rooms, and every one of them left with the same method.",
      "cards": [
        "cockpit",
        "handshake"
      ],
      "members": [
        "b01",
        "b02",
        "b03",
        "a01",
        "a02"
      ]
    }
  ],
  "people": [
    {
      "id": "b01",
      "rank": "Sqn Ldr",
      "name": "Obinna Tobenna Okafor",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "jc",
      "year": 2024,
      "best": true,
      "reason": "Best participant, Junior Course 2024, for his air estimate and exercise briefing.",
      "achievements": "Best Participant, Junior Course 2024; Top brief in the end-of-course exercise",
      "rankImg": "assets/img/ranks/sqn-ldr.png",
      "milestones": [
        {
          "year": "2014",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "2019",
          "text": "Appointed Flight Commander"
        },
        {
          "year": "2024",
          "text": "Completed the Junior Course as best participant"
        },
        {
          "year": "2025",
          "text": "Posted as Staff Officer, Training"
        }
      ]
    },
    {
      "id": "b02",
      "rank": "Maj",
      "name": "Fatima Zainab Lawal",
      "service": "Army",
      "country": "Nigeria",
      "course": "jc",
      "year": 2023,
      "best": false,
      "reason": "Syndicate lead in the bi-service Air-Land exercise.",
      "achievements": "Syndicate lead, Air-Land exercise; Commended for clear staff writing",
      "rankImg": null,
      "milestones": [
        {
          "year": "2012",
          "text": "Commissioned into the Army"
        },
        {
          "year": "2018",
          "text": "Appointed Company Commander"
        },
        {
          "year": "2023",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2024",
          "text": "Posted as Staff Officer, Operations"
        }
      ]
    },
    {
      "id": "b03",
      "rank": "Sqn Ldr",
      "name": "Wanjiru Njeri Kamau",
      "service": "Air Force",
      "country": "Kenya",
      "course": "jc",
      "year": 2021,
      "best": false,
      "reason": "Allied officer who introduced a peer-learning routine during syndicate work.",
      "achievements": "Introduced a peer-learning routine; Representative of the allied students",
      "rankImg": "assets/img/ranks/sqn-ldr.png",
      "milestones": [
        {
          "year": "2011",
          "text": "Commissioned into her national air force"
        },
        {
          "year": "2017",
          "text": "Appointed Flight Commander"
        },
        {
          "year": "2021",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2023",
          "text": "Appointed Squadron Operations Officer"
        }
      ]
    },
    {
      "id": "b04",
      "rank": "Lt Cdr",
      "name": "Emeka Chinedu Obi",
      "service": "Navy",
      "country": "Nigeria",
      "course": "jc",
      "year": 2018,
      "best": true,
      "reason": "Best participant, Junior Course 2018.",
      "achievements": "Best Participant, Junior Course 2018; Maritime air-support case study",
      "rankImg": "assets/img/ranks/lt-cdr.png",
      "milestones": [
        {
          "year": "2008",
          "text": "Commissioned into the Navy"
        },
        {
          "year": "2014",
          "text": "Executive Officer of a vessel"
        },
        {
          "year": "2018",
          "text": "Completed the Junior Course as best participant"
        },
        {
          "year": "2021",
          "text": "Appointed Commanding Officer of a coastal unit"
        }
      ]
    },
    {
      "id": "b05",
      "rank": "Maj",
      "name": "Yusuf Abdullahi Sani",
      "service": "Army",
      "country": "Nigeria",
      "course": "jc",
      "year": 2015,
      "best": false,
      "reason": "Developed a targeting checklist later shared with the next set.",
      "achievements": "Targeting checklist adopted by later sets",
      "rankImg": null,
      "milestones": [
        {
          "year": "2005",
          "text": "Commissioned into the Army"
        },
        {
          "year": "2011",
          "text": "Appointed Battalion Staff Officer"
        },
        {
          "year": "2015",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2019",
          "text": "Appointed Commander of a Company-level Task Force"
        }
      ]
    },
    {
      "id": "b06",
      "rank": "Sqn Ldr",
      "name": "Mame Diarra Ndiaye",
      "service": "Air Force",
      "country": "Senegal",
      "course": "jc",
      "year": 2012,
      "best": false,
      "reason": "Allied officer who built lasting links between the College and her national air force.",
      "achievements": "Helped start an exchange visit programme",
      "rankImg": "assets/img/ranks/sqn-ldr.png",
      "milestones": [
        {
          "year": "2003",
          "text": "Commissioned into her national air force"
        },
        {
          "year": "2008",
          "text": "Appointed Flight Commander"
        },
        {
          "year": "2012",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2016",
          "text": "Appointed Operations Officer, Air Base"
        }
      ]
    },
    {
      "id": "b07",
      "rank": "Wg Cdr",
      "name": "Dapo Femi Ogunleye",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "jc",
      "year": 2009,
      "best": false,
      "reason": "Led the first student-run airpower seminar.",
      "achievements": "Led a student-run airpower seminar",
      "rankImg": "assets/img/ranks/wg-cdr.png",
      "milestones": [
        {
          "year": "1999",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "2005",
          "text": "Appointed Squadron Operations Officer"
        },
        {
          "year": "2009",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2013",
          "text": "Completed the Senior Course"
        }
      ]
    },
    {
      "id": "b08",
      "rank": "Maj",
      "name": "Grace Ifeoma Nnaji",
      "service": "Army",
      "country": "Nigeria",
      "course": "jc",
      "year": 2006,
      "best": true,
      "reason": "Best participant, Junior Course 2006.",
      "achievements": "Best Participant, Junior Course 2006",
      "rankImg": null,
      "milestones": [
        {
          "year": "1997",
          "text": "Commissioned into the Army"
        },
        {
          "year": "2002",
          "text": "Appointed Company Commander"
        },
        {
          "year": "2006",
          "text": "Completed the Junior Course as best participant"
        },
        {
          "year": "2012",
          "text": "Promoted Lieutenant Colonel"
        }
      ]
    },
    {
      "id": "b09",
      "rank": "Sqn Ldr",
      "name": "Peter Tamuno Briggs",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "jc",
      "year": 2002,
      "best": false,
      "reason": "Contributed notes that shaped an early revision of the Junior Course syllabus.",
      "achievements": "Contributed to a syllabus revision",
      "rankImg": "assets/img/ranks/sqn-ldr.png",
      "milestones": [
        {
          "year": "1993",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "1999",
          "text": "Appointed Flight Commander"
        },
        {
          "year": "2002",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2007",
          "text": "Completed the Senior Course"
        }
      ]
    },
    {
      "id": "b10",
      "rank": "Lt Cdr",
      "name": "Halima Sadiya Yakubu",
      "service": "Navy",
      "country": "Nigeria",
      "course": "jc",
      "year": 1999,
      "best": false,
      "reason": "Early graduate, now remembered by her set for founding the course alumni network.",
      "achievements": "Founded a course alumni network",
      "rankImg": "assets/img/ranks/lt-cdr.png",
      "milestones": [
        {
          "year": "1990",
          "text": "Commissioned into the Navy"
        },
        {
          "year": "1995",
          "text": "Executive Officer of a vessel"
        },
        {
          "year": "1999",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2004",
          "text": "Completed the Senior Course"
        }
      ]
    },
    {
      "id": "a01",
      "rank": "Wg Cdr",
      "name": "Ibrahim Danladi Okoro",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "sc",
      "year": 2024,
      "best": true,
      "reason": "Best participant, Senior Course 2024, for a joint air campaign plan adopted as a teaching model.",
      "achievements": "Best Participant, Senior Course 2024; Author of the course's winning air-campaign paper",
      "rankImg": "assets/img/ranks/wg-cdr.png",
      "milestones": [
        {
          "year": "2009",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "2016",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2020",
          "text": "Appointed Squadron Commander"
        },
        {
          "year": "2024",
          "text": "Completed the Senior Course as best participant"
        },
        {
          "year": "2025",
          "text": "Posted as Staff Officer, Operations, at Command level"
        }
      ]
    },
    {
      "id": "a02",
      "rank": "Col",
      "name": "Amara Chidinma Eze",
      "service": "Army",
      "country": "Nigeria",
      "course": "sc",
      "year": 2023,
      "best": false,
      "reason": "Led the syndicate that produced the Air-Land integration study used in later exercises.",
      "achievements": "Syndicate lead, Air-Land integration study; Commended for outstanding staff work",
      "rankImg": "assets/img/ranks/col.png",
      "milestones": [
        {
          "year": "2005",
          "text": "Commissioned into the Army"
        },
        {
          "year": "2013",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2018",
          "text": "Appointed Chief Instructor at a training school"
        },
        {
          "year": "2023",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2024",
          "text": "Appointed Commander of a Brigade"
        }
      ]
    },
    {
      "id": "a03",
      "rank": "Gp Capt",
      "name": "Tunde Abiodun Salako",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "sc",
      "year": 2019,
      "best": true,
      "reason": "Best participant, Senior Course 2019. Later led the Air Operations Centre.",
      "achievements": "Best Participant, Senior Course 2019; Commander, Air Operations Centre",
      "rankImg": "assets/img/ranks/gp-capt.png",
      "milestones": [
        {
          "year": "2002",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "2010",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2015",
          "text": "Appointed Operations Officer, Wing"
        },
        {
          "year": "2019",
          "text": "Completed the Senior Course as best participant"
        },
        {
          "year": "2022",
          "text": "Appointed Commander, Air Operations Centre"
        }
      ]
    },
    {
      "id": "a04",
      "rank": "Capt (N)",
      "name": "Ngozi Faith Anyanwu",
      "service": "Navy",
      "country": "Nigeria",
      "course": "sc",
      "year": 2016,
      "best": false,
      "reason": "First naval officer in her set to chair the maritime air-support working group.",
      "achievements": "Chaired the maritime air-support working group; Published two papers on joint maritime operations",
      "rankImg": "assets/img/ranks/capt.png",
      "milestones": [
        {
          "year": "1999",
          "text": "Commissioned into the Navy"
        },
        {
          "year": "2007",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2012",
          "text": "Commanded a patrol vessel"
        },
        {
          "year": "2016",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2020",
          "text": "Appointed Director of Naval Operations"
        }
      ]
    },
    {
      "id": "a05",
      "rank": "Col",
      "name": "Kwabena Osei-Mensah",
      "service": "Army",
      "country": "Ghana",
      "course": "sc",
      "year": 2014,
      "best": false,
      "reason": "Allied officer who introduced a shared planning template adopted by his national staff college.",
      "achievements": "Introduced a shared planning template; Guest lecturer at his national staff college",
      "rankImg": "assets/img/ranks/col.png",
      "milestones": [
        {
          "year": "1998",
          "text": "Commissioned into his national army"
        },
        {
          "year": "2006",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2014",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2017",
          "text": "Appointed Instructor, national staff college"
        }
      ]
    },
    {
      "id": "a06",
      "rank": "Gp Capt",
      "name": "Hauwa Bilkisu Garba",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "sc",
      "year": 2011,
      "best": false,
      "reason": "Pioneered the air mobility planning module now taught at the College.",
      "achievements": "Developed the air mobility planning module; Mentor to three later best participants",
      "rankImg": "assets/img/ranks/gp-capt.png",
      "milestones": [
        {
          "year": "1996",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "2004",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2011",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2014",
          "text": "Appointed Commander of an Air Mobility Wing"
        }
      ]
    },
    {
      "id": "a08",
      "rank": "Gp Capt",
      "name": "Mwansa Chilufya Banda",
      "service": "Air Force",
      "country": "Zambia",
      "course": "sc",
      "year": 2008,
      "best": false,
      "reason": "Led his air force's first joint air-defence exercise after returning home.",
      "achievements": "Led a national joint air-defence exercise; Exchange instructor in a later course",
      "rankImg": "assets/img/ranks/gp-capt.png",
      "milestones": [
        {
          "year": "1993",
          "text": "Commissioned into his national air force"
        },
        {
          "year": "2001",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2008",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2011",
          "text": "Appointed Director of Training"
        }
      ]
    },
    {
      "id": "a07",
      "rank": "Brig Gen",
      "name": "Chukwudi Emmanuel Nwosu",
      "service": "Army",
      "country": "Nigeria",
      "course": "sc",
      "year": 2005,
      "best": true,
      "reason": "Best participant, Senior Course 2005. Went on to senior joint appointments.",
      "achievements": "Best Participant, Senior Course 2005; Senior joint planning appointments",
      "rankImg": "assets/img/ranks/brig-gen.png",
      "milestones": [
        {
          "year": "1990",
          "text": "Commissioned into the Army"
        },
        {
          "year": "1998",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2005",
          "text": "Completed the Senior Course as best participant"
        },
        {
          "year": "2012",
          "text": "Promoted Brigadier General"
        }
      ]
    },
    {
      "id": "a09",
      "rank": "Wg Cdr",
      "name": "Seun Olamide Adekunle",
      "service": "Air Force",
      "country": "Nigeria",
      "course": "sc",
      "year": 2000,
      "best": false,
      "reason": "Early graduate who later became a long-serving instructor in the Department.",
      "achievements": "Directing Staff, Department of Air Warfare; Author of an early course handbook chapter",
      "rankImg": "assets/img/ranks/wg-cdr.png",
      "milestones": [
        {
          "year": "1988",
          "text": "Commissioned into the Air Force"
        },
        {
          "year": "1995",
          "text": "Completed the Junior Course"
        },
        {
          "year": "2000",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2003",
          "text": "Posted as Directing Staff"
        }
      ]
    },
    {
      "id": "a10",
      "rank": "Cdr",
      "name": "Aisha Musa Ibrahim",
      "service": "Navy",
      "country": "Nigeria",
      "course": "sc",
      "year": 1998,
      "best": false,
      "reason": "One of the first women from her service to complete the Senior Course.",
      "achievements": "Early female graduate of the Senior Course; Staff officer at Naval Headquarters",
      "rankImg": "assets/img/ranks/cdr.png",
      "milestones": [
        {
          "year": "1985",
          "text": "Commissioned into the Navy"
        },
        {
          "year": "1992",
          "text": "Completed the Junior Course"
        },
        {
          "year": "1998",
          "text": "Completed the Senior Course"
        },
        {
          "year": "2002",
          "text": "Appointed Staff Officer, Plans"
        }
      ]
    }
  ]
};
