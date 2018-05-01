const BAIDU_MAP_API_KEY = 'kpMGimpLZNhm2r3WDjB7Gg8zWgfM8E8G';

const fakeTableData = [
	{
		"date": "May 10, 2018",
		"temperature": 51,
		"quality": 10,
		"oxygen level": 65
	},
	{
		"date": "May 18, 2017",
		"temperature": 92,
		"quality": 38,
		"oxygen level": 20
	},
	{
		"date": "Apr 8, 2017",
		"temperature": 51,
		"quality": 68,
		"oxygen level": 62
	},
	{
		"date": "Mar 20, 2019",
		"temperature": 89,
		"quality": 40,
		"oxygen level": 60
	},
	{
		"date": "May 25, 2017",
		"temperature": 14,
		"quality": 43,
		"oxygen level": 70
	},
	{
		"date": "Mar 31, 2019",
		"temperature": 43,
		"quality": 81,
		"oxygen level": 99
	},
	{
		"date": "Sep 9, 2018",
		"temperature": 88,
		"quality": 4,
		"oxygen level": 60
	},
	{
		"date": "Nov 12, 2018",
		"temperature": 17,
		"quality": 16,
		"oxygen level": 58
	},
	{
		"date": "Dec 17, 2018",
		"temperature": 97,
		"quality": 80,
		"oxygen level": 82
	},
	{
		"date": "Feb 13, 2018",
		"temperature": 41,
		"quality": 87,
		"oxygen level": 25
	},
	{
		"date": "Mar 28, 2018",
		"temperature": 37,
		"quality": 96,
		"oxygen level": 23
	},
	{
		"date": "Feb 28, 2019",
		"temperature": 2,
		"quality": 32,
		"oxygen level": 83
	},
	{
		"date": "Jul 12, 2018",
		"temperature": 71,
		"quality": 92,
		"oxygen level": 88
	},
	{
		"date": "Apr 8, 2017",
		"temperature": 10,
		"quality": 10,
		"oxygen level": 71
	},
	{
		"date": "Mar 18, 2018",
		"temperature": 31,
		"quality": 38,
		"oxygen level": 52
	},
	{
		"date": "Jun 2, 2018",
		"temperature": 57,
		"quality": 76,
		"oxygen level": 15
	},
	{
		"date": "Aug 3, 2018",
		"temperature": 98,
		"quality": 76,
		"oxygen level": 34
	},
	{
		"date": "Sep 7, 2018",
		"temperature": 4,
		"quality": 65,
		"oxygen level": 64
	},
	{
		"date": "Apr 1, 2018",
		"temperature": 33,
		"quality": 20,
		"oxygen level": 88
	},
	{
		"date": "Jan 30, 2018",
		"temperature": 83,
		"quality": 20,
		"oxygen level": 53
	},
	{
		"date": "Jul 25, 2018",
		"temperature": 12,
		"quality": 76,
		"oxygen level": 78
	},
	{
		"date": "Dec 4, 2018",
		"temperature": 11,
		"quality": 92,
		"oxygen level": 64
	},
	{
		"date": "Jul 11, 2018",
		"temperature": 58,
		"quality": 6,
		"oxygen level": 49
	},
	{
		"date": "Mar 12, 2019",
		"temperature": 68,
		"quality": 85,
		"oxygen level": 98
	},
	{
		"date": "Nov 23, 2017",
		"temperature": 33,
		"quality": 99,
		"oxygen level": 76
	},
	{
		"date": "Apr 6, 2019",
		"temperature": 10,
		"quality": 13,
		"oxygen level": 60
	},
	{
		"date": "Jun 12, 2017",
		"temperature": 94,
		"quality": 78,
		"oxygen level": 26
	},
	{
		"date": "Sep 29, 2018",
		"temperature": 84,
		"quality": 67,
		"oxygen level": 4
	},
	{
		"date": "Jun 21, 2018",
		"temperature": 5,
		"quality": 95,
		"oxygen level": 58
	},
	{
		"date": "Jan 29, 2019",
		"temperature": 91,
		"quality": 27,
		"oxygen level": 53
	},
	{
		"date": "Sep 24, 2017",
		"temperature": 10,
		"quality": 98,
		"oxygen level": 8
	},
	{
		"date": "Aug 23, 2017",
		"temperature": 95,
		"quality": 12,
		"oxygen level": 88
	},
	{
		"date": "Aug 11, 2017",
		"temperature": 28,
		"quality": 32,
		"oxygen level": 18
	},
	{
		"date": "Apr 11, 2017",
		"temperature": 70,
		"quality": 92,
		"oxygen level": 85
	},
	{
		"date": "Jul 26, 2017",
		"temperature": 77,
		"quality": 93,
		"oxygen level": 12
	},
	{
		"date": "May 17, 2017",
		"temperature": 54,
		"quality": 5,
		"oxygen level": 5
	},
	{
		"date": "Nov 11, 2018",
		"temperature": 30,
		"quality": 4,
		"oxygen level": 90
	},
	{
		"date": "Dec 1, 2017",
		"temperature": 60,
		"quality": 54,
		"oxygen level": 30
	},
	{
		"date": "Mar 2, 2017",
		"temperature": 71,
		"quality": 70,
		"oxygen level": 13
	},
	{
		"date": "Dec 16, 2018",
		"temperature": 79,
		"quality": 60,
		"oxygen level": 100
	},
	{
		"date": "Nov 22, 2017",
		"temperature": 96,
		"quality": 2,
		"oxygen level": 61
	},
	{
		"date": "Apr 21, 2018",
		"temperature": 89,
		"quality": 86,
		"oxygen level": 79
	},
	{
		"date": "Aug 25, 2017",
		"temperature": 94,
		"quality": 63,
		"oxygen level": 61
	},
	{
		"date": "Oct 27, 2017",
		"temperature": 20,
		"quality": 24,
		"oxygen level": 74
	},
	{
		"date": "Dec 22, 2017",
		"temperature": 53,
		"quality": 100,
		"oxygen level": 17
	},
	{
		"date": "Jan 11, 2019",
		"temperature": 70,
		"quality": 51,
		"oxygen level": 6
	},
	{
		"date": "Feb 13, 2019",
		"temperature": 58,
		"quality": 25,
		"oxygen level": 38
	},
	{
		"date": "Jun 1, 2017",
		"temperature": 3,
		"quality": 85,
		"oxygen level": 3
	},
	{
		"date": "Sep 29, 2018",
		"temperature": 29,
		"quality": 2,
		"oxygen level": 83
	},
	{
		"date": "Aug 10, 2018",
		"temperature": 61,
		"quality": 86,
		"oxygen level": 82
	},
	{
		"date": "Dec 27, 2018",
		"temperature": 16,
		"quality": 57,
		"oxygen level": 53
	},
	{
		"date": "Apr 19, 2017",
		"temperature": 94,
		"quality": 12,
		"oxygen level": 40
	},
	{
		"date": "Jul 16, 2017",
		"temperature": 90,
		"quality": 12,
		"oxygen level": 6
	},
	{
		"date": "Aug 23, 2017",
		"temperature": 41,
		"quality": 35,
		"oxygen level": 88
	},
	{
		"date": "Mar 7, 2018",
		"temperature": 18,
		"quality": 31,
		"oxygen level": 72
	},
	{
		"date": "Jun 22, 2018",
		"temperature": 33,
		"quality": 63,
		"oxygen level": 94
	},
	{
		"date": "May 31, 2017",
		"temperature": 67,
		"quality": 35,
		"oxygen level": 27
	},
	{
		"date": "Mar 4, 2019",
		"temperature": 23,
		"quality": 39,
		"oxygen level": 66
	},
	{
		"date": "Oct 15, 2017",
		"temperature": 68,
		"quality": 5,
		"oxygen level": 39
	},
	{
		"date": "Aug 15, 2017",
		"temperature": 4,
		"quality": 80,
		"oxygen level": 28
	},
	{
		"date": "Jul 14, 2018",
		"temperature": 5,
		"quality": 21,
		"oxygen level": 82
	},
	{
		"date": "Aug 8, 2018",
		"temperature": 46,
		"quality": 90,
		"oxygen level": 50
	},
	{
		"date": "Dec 21, 2017",
		"temperature": 45,
		"quality": 69,
		"oxygen level": 100
	},
	{
		"date": "May 6, 2017",
		"temperature": 26,
		"quality": 23,
		"oxygen level": 56
	},
	{
		"date": "Jun 27, 2017",
		"temperature": 43,
		"quality": 27,
		"oxygen level": 40
	},
	{
		"date": "Sep 18, 2018",
		"temperature": 75,
		"quality": 86,
		"oxygen level": 68
	},
	{
		"date": "Sep 2, 2018",
		"temperature": 67,
		"quality": 7,
		"oxygen level": 66
	},
	{
		"date": "Mar 4, 2019",
		"temperature": 6,
		"quality": 31,
		"oxygen level": 29
	},
	{
		"date": "Apr 17, 2017",
		"temperature": 34,
		"quality": 53,
		"oxygen level": 14
	},
	{
		"date": "May 19, 2018",
		"temperature": 66,
		"quality": 71,
		"oxygen level": 97
	},
	{
		"date": "Apr 1, 2018",
		"temperature": 3,
		"quality": 79,
		"oxygen level": 45
	},
	{
		"date": "Jan 30, 2018",
		"temperature": 10,
		"quality": 66,
		"oxygen level": 60
	},
	{
		"date": "Jun 10, 2017",
		"temperature": 9,
		"quality": 47,
		"oxygen level": 30
	},
	{
		"date": "Apr 7, 2017",
		"temperature": 92,
		"quality": 81,
		"oxygen level": 44
	},
	{
		"date": "Dec 26, 2017",
		"temperature": 94,
		"quality": 17,
		"oxygen level": 98
	},
	{
		"date": "Aug 28, 2018",
		"temperature": 52,
		"quality": 84,
		"oxygen level": 7
	},
	{
		"date": "Aug 1, 2017",
		"temperature": 23,
		"quality": 65,
		"oxygen level": 57
	},
	{
		"date": "Mar 14, 2019",
		"temperature": 87,
		"quality": 49,
		"oxygen level": 41
	},
	{
		"date": "Jul 10, 2018",
		"temperature": 10,
		"quality": 24,
		"oxygen level": 4
	},
	{
		"date": "Jun 12, 2018",
		"temperature": 92,
		"quality": 56,
		"oxygen level": 98
	},
	{
		"date": "Apr 19, 2019",
		"temperature": 88,
		"quality": 88,
		"oxygen level": 21
	},
	{
		"date": "Dec 25, 2017",
		"temperature": 90,
		"quality": 28,
		"oxygen level": 2
	},
	{
		"date": "Jul 14, 2017",
		"temperature": 59,
		"quality": 19,
		"oxygen level": 2
	},
	{
		"date": "Aug 12, 2018",
		"temperature": 19,
		"quality": 89,
		"oxygen level": 81
	},
	{
		"date": "Oct 28, 2017",
		"temperature": 43,
		"quality": 16,
		"oxygen level": 10
	},
	{
		"date": "Dec 17, 2017",
		"temperature": 4,
		"quality": 13,
		"oxygen level": 91
	},
	{
		"date": "Sep 5, 2018",
		"temperature": 32,
		"quality": 23,
		"oxygen level": 7
	},
	{
		"date": "Oct 17, 2018",
		"temperature": 29,
		"quality": 10,
		"oxygen level": 11
	},
	{
		"date": "Dec 2, 2017",
		"temperature": 11,
		"quality": 90,
		"oxygen level": 27
	},
	{
		"date": "Jan 1, 2018",
		"temperature": 84,
		"quality": 52,
		"oxygen level": 97
	},
	{
		"date": "Sep 22, 2017",
		"temperature": 84,
		"quality": 90,
		"oxygen level": 21
	},
	{
		"date": "Jun 10, 2017",
		"temperature": 16,
		"quality": 84,
		"oxygen level": 71
	},
	{
		"date": "Dec 25, 2018",
		"temperature": 90,
		"quality": 24,
		"oxygen level": 16
	},
	{
		"date": "Jun 18, 2018",
		"temperature": 39,
		"quality": 87,
		"oxygen level": 43
	},
	{
		"date": "Oct 17, 2017",
		"temperature": 80,
		"quality": 14,
		"oxygen level": 47
	},
	{
		"date": "Mar 2, 2019",
		"temperature": 2,
		"quality": 3,
		"oxygen level": 65
	},
	{
		"date": "Apr 7, 2017",
		"temperature": 73,
		"quality": 51,
		"oxygen level": 32
	},
	{
		"date": "May 8, 2017",
		"temperature": 92,
		"quality": 19,
		"oxygen level": 78
	},
	{
		"date": "Mar 16, 2017",
		"temperature": 24,
		"quality": 3,
		"oxygen level": 85
	},
	{
		"date": "Feb 4, 2018",
		"temperature": 86,
		"quality": 82,
		"oxygen level": 88
	}
];

export {
  fakeTableData,
  BAIDU_MAP_API_KEY
}