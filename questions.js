// Question data. Question wording is copied unchanged from the original quizzes.
// mc question: {q, o:[options], a:index of correct option, img?, pre?}
// rows question: {q, rows:[{l:label, o:[choices], a:correct}] or {l, n:true, a:"number"}}
const QUIZZES = [
{
"title": "q1: Theory Quiz One, Chapter One (Introduction to statistics)",
"questions": [
{
"q": "A discrete variable is",
"o": [
"All given answers are correct",
"Can assume only certain clearly separated values.",
"An example of a qualitative variable.",
"Cannot be negative."
],
"a": 1
},
{
"q": "Fill in the missing words to the quote: “ Inferential Statistical methods may be described as methods for drawing conclusions about ________ based on ____________ computed from the_________ .”",
"o": [
"populations, parameters,samples",
"statistics, populations,samples",
"statistics, samples, populations",
"parameters, statistics, samples"
],
"a": 3
},
{
"q": "Match the key terms with the Phrase in the following study,\nA study was conducted at a local college to analyze the average cumulative GPA's of students who graduated last year",
"rows": [
{
"l": "the average cumulative GPA of students who graduated from the college last year",
"o": [
"Parameter",
"Variable",
"Statistic",
"Population",
"Data",
"Sample"
],
"a": "Parameter"
},
{
"l": "the cumulative GPA of graduates from the college last year",
"o": [
"Parameter",
"Variable",
"Statistic",
"Population",
"Data",
"Sample"
],
"a": "Variable"
},
{
"l": "the average cumulative GPA of students in the study who graduated from the college last year",
"o": [
"Parameter",
"Variable",
"Statistic",
"Population",
"Data",
"Sample"
],
"a": "Statistic"
},
{
"l": "all students who graduated from the college last year",
"o": [
"Parameter",
"Variable",
"Statistic",
"Population",
"Data",
"Sample"
],
"a": "Population"
},
{
"l": "3.65, 2.80, 1.50, 3.90",
"o": [
"Parameter",
"Variable",
"Statistic",
"Population",
"Data",
"Sample"
],
"a": "Data"
},
{
"l": "a group of students who graduated from the college last year, randomly selected",
"o": [
"Parameter",
"Variable",
"Statistic",
"Population",
"Data",
"Sample"
],
"a": "Sample"
}
]
},
{
"q": "Determine the scale of measurement for each of the following:",
"rows": [
{
"l": "Daily number of books sold by a bookshop",
"o": [
"Ratio",
"Ordinal",
"Nominal",
"Interval"
],
"a": "Ratio"
},
{
"l": "Ranking sizes of dresses by (Small, Medium, large,...)",
"o": [
"Ratio",
"Ordinal",
"Nominal",
"Interval"
],
"a": "Ordinal"
},
{
"l": "A classification of Students by place of birth",
"o": [
"Ratio",
"Ordinal",
"Nominal",
"Interval"
],
"a": "Nominal"
},
{
"l": "Students nationalities",
"o": [
"Ratio",
"Ordinal",
"Nominal",
"Interval"
],
"a": "Nominal"
},
{
"l": "Distance between cities",
"o": [
"Ratio",
"Ordinal",
"Nominal",
"Interval"
],
"a": "Ratio"
},
{
"l": "The daily temperature in Ajman",
"o": [
"Ratio",
"Ordinal",
"Nominal",
"Interval"
],
"a": "Interval"
}
]
},
{
"q": "Identify the following studies as either observational or experimental",
"rows": [
{
"l": "Subjects were randomly assigned to two groups, and one group was given an herb and the other group a placebo. After six months, the numbers of respiratory tract infections each group had were compared.",
"o": [
"Experimental",
"Observational"
],
"a": "Experimental"
},
{
"l": "Patients with hypertension are randomly divided into two groups: one receives the new drug and the other receives a placebo",
"o": [
"Experimental",
"Observational"
],
"a": "Experimental"
},
{
"l": "A researcher stood at each busy intersection to see if the color of an automobile that a person drives is related to running red lights.",
"o": [
"Experimental",
"Observational"
],
"a": "Observational"
},
{
"l": "A researcher finds that people who are more hostile have higher total cholesterol levels than those who are less hostile.",
"o": [
"Experimental",
"Observational"
],
"a": "Observational"
}
]
},
{
"q": "The summaries of data, which may be tabular, graphical, or numerical, are referred to as",
"o": [
"sampling theory",
"statistical inference",
"inductive statistics",
"descriptive statistics"
],
"a": 3
},
{
"q": "A researcher for an airline interviews all of the passengers on five randomly selected flights. Simple Random sampling is used .",
"o": [
"True",
"False"
],
"a": 1
},
{
"q": "A continuous variable is measured and the precision of continuous data depends on the tool used to measure.",
"o": [
"True",
"False"
],
"a": 0
},
{
"q": "Find the TYPE OF VARIABLE for each data item.",
"rows": [
{
"l": "number of cars owned by a family",
"o": [
"Discrete",
"Continuous"
],
"a": "Discrete"
},
{
"l": "the sales of a certain brand of mobile phones",
"o": [
"Discrete",
"Continuous"
],
"a": "Discrete"
},
{
"l": "lifetime of a lamp",
"o": [
"Discrete",
"Continuous"
],
"a": "Continuous"
},
{
"l": "Number of children in family",
"o": [
"Discrete",
"Continuous"
],
"a": "Discrete"
},
{
"l": "number of books in five libraries",
"o": [
"Discrete",
"Continuous"
],
"a": "Discrete"
}
]
},
{
"q": "A bank asks customers to evaluate the customer service as excellent, good, average, or poor. Which level of measurement is this classification?",
"o": [
"Interval",
"Nominal",
"ratio",
"Ordinal"
],
"a": 3
},
{
"q": "A Descriptive measure of a sample is a",
"o": [
"statistic",
"random variable",
"qualitative response",
"Parameter"
],
"a": 0
},
{
"q": "Classify each sample as simple random, systematic, stratified or cluster",
"rows": [
{
"l": "An education researcher randomly selects a certain number of colleges professors and interviews them.",
"o": [
"Simple random",
"Stratified",
"Systematic",
"Cluster"
],
"a": "Simple random"
},
{
"l": "subjects are randomly selected from each of the three economic classes( Low.Middle.High) in the society",
"o": [
"Simple random",
"Stratified",
"Systematic",
"Cluster"
],
"a": "Stratified"
},
{
"l": "Thirty-five math majors, 33 music majors and 45 history majors are randomly selected from 251 math majors, 518 music majors and 332 history majors at the state university.",
"o": [
"Simple random",
"Stratified",
"Systematic",
"Cluster"
],
"a": "Stratified"
},
{
"l": "A sample consists of every 30th worker from a group of 1000 workers.",
"o": [
"Simple random",
"Stratified",
"Systematic",
"Cluster"
],
"a": "Systematic"
},
{
"l": "At a local technical school, five auto repair classes are randomly selected and all of the students from each class are interviewed.",
"o": [
"Simple random",
"Stratified",
"Systematic",
"Cluster"
],
"a": "Cluster"
}
]
},
{
"q": "Parking at a large university has become a very big problem. University administrators are interested in determining the average parking time (e.g. the time it takes a student to find a parking spot) of its students. An administrator inconspicuously followed 230 students and carefully recorded their parking times. Identify the population of interest to the university administration",
"o": [
"the parking times of the 230 students from whom the data were collected",
"the parking times of the entire set of students that park at the university",
"the entire set of faculty, staff, and students that park at the university",
"the students that park at the university between 9 and 10 AM on Wednesdays"
],
"a": 1
},
{
"q": "Indicate the type of each of the following variables",
"rows": [
{
"l": "life of a mobile phone battery",
"o": [
"quantitative continuous",
"quantitative discrete",
"qualitative nominal"
],
"a": "quantitative continuous"
},
{
"l": "number of left-handed people in a statistics class",
"o": [
"quantitative continuous",
"quantitative discrete",
"qualitative nominal"
],
"a": "quantitative discrete"
},
{
"l": "age of a car",
"o": [
"quantitative continuous",
"quantitative discrete",
"qualitative nominal"
],
"a": "quantitative continuous"
},
{
"l": "Marital status of Ajman University staff ( Single, married...)",
"o": [
"quantitative continuous",
"quantitative discrete",
"qualitative nominal"
],
"a": "qualitative nominal"
}
]
},
{
"q": "In an aquaculture study, the following variables were measured on each fish: initial weight(l) , Sex(0=female,1= male), weight gain(w), body temperature (C). The scale of these four variables (in order) are:",
"o": [
"Ratio, ordinal, ratio, Interval",
"Ordinal, interval, ratio, nominal",
"Ratio, nominal, ratio, Nominal",
"Ratio, nominal, ratio, interval"
],
"a": 3
},
{
"q": "Consider the following statement concerned with the collection of data, and determine the best selection of terms to complete the statement: “The entire group of objects or people about which information is wanted is called the ____. The ____ is the part that is actually examined in order to gather information. Each individual in the group is called ____ ”",
"o": [
"response group, respondents, non-response group",
"population, sample, unit",
"population, units, sample",
"sample, units, target population"
],
"a": 1
},
{
"q": "A study took two different groups of adults . They told one group to drink tea every night for a week, while they told the other group not to drink tea that week. Researchers then made the comparison when each group fell asleep. Identify this study as being either observational or experimental.",
"o": [
"Experimental Study",
"Observational Study"
],
"a": 0
},
{
"q": "What is the term for a characteristic or attribute that can assume different values?",
"o": [
"variable",
"sample",
"datum",
"exponent"
],
"a": 0
},
{
"q": "A qualitative variable",
"o": [
"Has only two possible outcomes.",
"Always refers to a sample.",
"All of the other answers are correct.",
"Is not numeric."
],
"a": 3
},
{
"q": "In a simple random sample each item in the population has",
"o": [
"no chance of being selected",
"a 50 percent chance of being selected",
"a chance of being selected",
"the same chance of being selected"
],
"a": 3
},
{
"q": "Statistics is the science of conducting studies to:",
"o": [
"solve a system of equations",
"collect, organize, summarize, analyze, and draw conclusions from data.",
"hypothesize, experiment, and form conclusions.",
"monitor, study, and report on a subject."
],
"a": 1
},
{
"q": "Which of the following is an example of descriptive statistics?",
"o": [
"Testing whether a new drug is more effective than an existing one",
"Predicting next year's sales based on past trends",
"Summarizing survey results using a bar chart",
"Estimating the average height of a population using a sample"
],
"a": 2
},
{
"q": "identify the sampling technique for each of the following samples",
"rows": [
{
"l": "A random number generator is used to select a student from the alphabetical listing of all undergraduate students in the fall semester. Starting with that student, every 50th student is chosen until 75 students are included in the sample.",
"o": [
"Systematic sample",
"Cluster sample",
"Simple Random Sample",
"Stratified sample"
],
"a": "Systematic sample"
},
{
"l": "The freshman, sophomore, junior, and senior years are numbered one, two, three, and four, respectively. A random number generator is used to pick two of those years. All students in those two years are in the sample.",
"o": [
"Systematic sample",
"Cluster sample",
"Simple Random Sample",
"Stratified sample"
],
"a": "Cluster sample"
},
{
"l": "A completely random method is used to select 75 students. Each undergraduate student in the fall semester has the same probability of being chosen at any stage of the sampling process",
"o": [
"Systematic sample",
"Cluster sample",
"Simple Random Sample",
"Stratified sample"
],
"a": "Simple Random Sample"
},
{
"l": "A sample of 100 undergraduate San Jose State students is taken by organizing the students' names by classification (freshman, sophomore, junior, or senior), and then selecting 25 students from each",
"o": [
"Systematic sample",
"Cluster sample",
"Simple Random Sample",
"Stratified sample"
],
"a": "Stratified sample"
}
]
},
{
"q": "If we are examining some of the population measurements, we are conducting a census of the population",
"o": [
"True",
"False"
],
"a": 1
},
{
"q": "Identify the following studies as either observational or experimental",
"rows": [
{
"l": "A researcher stood at each busy intersection to see if the color of an automobile that a person drives is related to running red lights.",
"o": [
"Experimental",
"Observational"
],
"a": "Observational"
},
{
"l": "A researcher finds that people who are more hostile have higher total cholesterol levels than those who are less hostile.",
"o": [
"Experimental",
"Observational"
],
"a": "Observational"
},
{
"l": "Subjects were randomly assigned to two groups, and one group was given an herb and the other group a placebo. After six months, the numbers of respiratory tract infections each group had were compared.",
"o": [
"Experimental",
"Observational"
],
"a": "Experimental"
}
]
},
{
"q": "A nominal scale variable is",
"o": [
"May assume negative values.",
"Usually the result of counting something.",
"Has a meaningful zero point",
"Cannot have more than two categories."
],
"a": 1
},
{
"q": "If a researcher manipulates one of the variables and tries to determine how the manipulation influences other variables, the researcher is conducting a(n)",
"o": [
"Observational study.",
"Experimental study.",
"Independent study.",
"Manipulative study."
],
"a": 1
},
{
"q": "Statistics describes a set of ____ that are used for describing, organizing, and interpreting information.",
"o": [
"Tools and techniques",
"Statements",
"Numbers and Letters",
"Rules and exceptions"
],
"a": 0
},
{
"q": "What is a statistical inference?",
"o": [
"A decision, estimate, prediction, or generalization about the population based on information contained in a sample.",
"A set of data selected from a larger set of data",
"A statement made about a sample based on the measurements in that sample.",
"None of these alternatives is correct",
"A decision, estimate, prediction or generalization about sample based on information contained in a population."
],
"a": 0
},
{
"q": "All of the following Data are included in the (Nominal level Data), Except one:",
"o": [
"Eye color",
"Religion",
"Gender",
"Student rank in class"
],
"a": 3
}
]
},
{
"title": "q2: Graphs and frequency distributions",
"questions": [
{
"q": "according to the following histogram which statement is not true ?",
"o": [
"30% of the households have at least 2 thermometers",
"30% of the households have at least 3 thermometers",
"5% of the households have 5 thermometers",
"50% of the households have 2 thermometers"
],
"a": 0,
"img": "q2_hist1"
},
{
"q": "from the graph below estimate the number of employees who earn more  than 14 $ per week",
"o": [
"4",
"14",
"16",
"None of the given answers is correct"
],
"a": 1,
"img": "q2_ogive"
},
{
"q": "A nurse measured the blood pressure of each person who visited her clinic. Following is a relative-frequency histogram for the systolic blood pressure readings for those people aged between 25 and 40 years. The blood pressure readings were given to the nearest whole number. Approximately what percentage of the people aged 25-40 had a systolic blood pressure reading between 110 and 139 mm Hg inclusive?",
"o": [
"100%",
"none of the other answers is correct",
"35%",
"75%"
],
"a": 3,
"img": "q2_relhist"
},
{
"q": "The histogram below represents the number of digital thermometers per household for a sample of U.S. households. What is the sample size?",
"o": [
"90 households",
"5 households",
"100 households",
"50 households"
],
"a": 2,
"img": "q2_hist1"
},
{
"q": "A study was conducted to determine the weights in pounds of 20 males.\nRead each statement and decide whether it is true or false :",
"rows": [
{
"l": "The weights less than 140 pounds are not common for males.",
"o": [
"True",
"False"
],
"a": "True"
},
{
"l": "The distribution of weights is uniform",
"o": [
"True",
"False"
],
"a": "False"
},
{
"l": "The range of weights = 159- 135 = 24 pounds.",
"o": [
"True",
"False"
],
"a": "False"
},
{
"l": "My friend has a weight of 157 pounds. Observing results in the table his weight is like many other people weights.",
"o": [
"True",
"False"
],
"a": "False"
},
{
"l": "35% of males have weights more than 150 pounds.",
"o": [
"True",
"False"
],
"a": "True"
}
],
"pre": "Class      FRQ.\n135 - 139    1\n140 - 144    4\n145 - 149    8\n150 - 154    5\n155 - 159    2"
},
{
"q": "If a data set for a qualitative variable has 20 observations spread over 5 mutually exclusive categories, then how many bars will this bar graph have?",
"o": [
"4",
"NOT mentioned",
"15",
"5",
"20"
],
"a": 3
},
{
"q": "For the following questions, refer to the following information on the number of units assembled per shift at Acme Assembly, Inc.\nThe relative frequency for the third class is",
"o": [
"0.200",
"Non of the given answers is correct",
"0.255",
"0.51"
],
"a": 2,
"img": "q2_units1"
},
{
"q": "If you wanted to examine the proportion of students in this class who are male compared to female, which of the following might you use?",
"o": [
"An Ogive",
"Frequency polygon",
"A pie chart",
"a line graph"
],
"a": 2
},
{
"q": "according to the following graph  which statement is not true ?",
"o": [
"5% of the households have 5 thermometers",
"85% of the households have at most 3 thermometers ( 3 or less)",
"20% of the households have at least 2 thermometers ( 2 or more)",
"50% of the households have 2 thermometers"
],
"a": 2,
"img": "q2_bar"
},
{
"q": "The following questions refer to the following information. It reports the number of TV sets per day at the Appliance Center.\nThe actual number of sets sold per day between 70 and79 is",
"o": [
"Cannot tell from the information given.",
"70",
"there are no values between 70 and 79 in the data set",
"70,71 ,72 ,73, 74,75 ,76,,77 ,78 ,79"
],
"a": 2,
"img": "q2_stem1"
},
{
"q": "A bar chart is used most often when",
"o": [
"You want to show frequencies by class intervals",
"you want to show frequencies as compared to total observations",
"You want to organize data along certain time interval",
"You want to display frequencies by category"
],
"a": 3
},
{
"q": "the best graph used for comparing the frequencies of the categories in two or more data sets is a pie chart",
"o": [
"True",
"False"
],
"a": 1
},
{
"q": "A chart that contains a continuous line that represents the frequencies of scores within a class interval is also known as a ____.",
"o": [
"dot plot",
"frequency histogram",
"frequency polygon",
"Time series graph"
],
"a": 2
},
{
"q": "For a stem-and-leaf display",
"o": [
"All of the given answers are correct",
"allow stems with no leaf values.",
"Arrange the leaf values from smallest to largest.",
"Make sure the leaf value is only one digit."
],
"a": 0
},
{
"q": "80 European tourists are recorded according to their nationalities This data can be appropriately summarized in a(n) ____.",
"o": [
"ungrouped frequency distribution",
"open-ended distribution",
"grouped frequency distribution",
"Categorical frequency distribution"
],
"a": 3
},
{
"q": "We learn in statistics there are many graph models to present research data. For each of the following cases, make decision about the most appropriate model to visualize the data.",
"rows": [
{
"l": "A professor has finished marking midterm exam for 100 students and wants to examine the behavior of scores on this exam.",
"o": [
"Histogram",
"Time Plot",
"Pie Chart",
"Bar Chart"
],
"a": "Histogram"
},
{
"l": "The giant Apple company intends to study the trend of sales (in thousands) of Ipad through 10 years.",
"o": [
"Histogram",
"Time Plot",
"Pie Chart",
"Bar Chart"
],
"a": "Time Plot"
},
{
"l": "Indiana university at USA has 5 colleges. Its administrators decided to demonstrate how large each college at the university in terms the students enrolled.",
"o": [
"Histogram",
"Time Plot",
"Pie Chart",
"Bar Chart"
],
"a": "Pie Chart"
},
{
"l": "Health department wants to observe the number of children born at four local hospitals through the last three weeks.",
"o": [
"Histogram",
"Time Plot",
"Pie Chart",
"Bar Chart"
],
"a": "Bar Chart"
}
]
},
{
"q": "Which of the following are among the things to remember when creating graphs?",
"o": [
"Do not label anything",
"Use a lot of text",
"All graphs communicate several ideas",
"Maintain the scale in the graph"
],
"a": 3
},
{
"q": "To find the class midpoint",
"o": [
"Divide the class width in half and add the result to the lower limit.",
"Find the difference between consecutive lower limits.",
"Divide the class frequency by the number of observations.",
"Count the number of observations in the class."
],
"a": 0
},
{
"q": "Which of the following should not be done when constructing a frequency distribution?",
"o": [
"find the range",
"use classes that are mutually exclusive",
"select the number of classes desired",
"use a class width with an even number"
],
"a": 3
},
{
"q": "A graphic representation of a frequency distribution constructed by connecting the class midpoints with lines is called a",
"o": [
"Pie chart",
"Line chart",
"Frequency polygon",
"Histogram"
],
"a": 2
},
{
"q": "For the following questions, refer to the following information on the number of units assembled per shift at Acme Assembly, Inc.\nThe lower boundary of the second class is",
"o": [
"29.5",
"29.9999",
"Non of the given answers is correct",
"30.5"
],
"a": 0,
"img": "q2_units2"
},
{
"q": "A quality control manager wants to monitor the production of its pills to be sure that the mean amount of medication does not change over time. Which of the following graphs is most helpful for that purpose",
"o": [
"Time series graph",
"Pie Chart",
"Pareto chart",
"Histogram"
],
"a": 0
},
{
"q": "The following questions refer to the following information. It reports the number of TV sets per day at the Appliance Center.\nHow many days were studied?",
"o": [
"30",
"11",
"Non of the above",
"50"
],
"a": 0,
"img": "q2_stem2"
},
{
"q": "According to the following information. that reports the number of TV sets per day at the Appliance Center.\nHow many days were there more than 50 sets sold?",
"o": [
"3",
"10",
"Non of the other answers is correct",
"15"
],
"a": 1,
"img": "q2_stem3"
},
{
"q": "To convert a frequency distribution to a relative frequency distribution",
"o": [
"Divide the class frequency by the total number of observations",
"Divide the lower limit of the first class by the class interval",
"Find the difference between consecutive lower class limits",
"Multiply the class frequency by 100"
],
"a": 0
},
{
"q": "The graphs that have their distributions as proportions instead of frequencies are called",
"o": [
"relative frequency graphs",
"histograms.",
"frequency polygons.",
"ogive graphs."
],
"a": 0
},
{
"q": "A grouping of quantitative data into classes giving the number of observations in each class is called",
"o": [
"a grouped frequency distribution",
"a categorical frequency distribution",
"All of the other answers are correct",
"an ungrouped frequency distribution"
],
"a": 0
},
{
"q": "In order to say that a distribution is positively skewed, which of the following must be true?",
"o": [
"Curve must be bell shaped",
"Right tail must be longer than left",
"Left tail must be longer than right",
"Right and left tail must be equal"
],
"a": 1
},
{
"q": "The frequency distribution below shows the height (in inches) of 49 school students. Fill in the Blanks,respectively:\nThe cumulative percentage of the third class is ---------------.The Class bounderies of the third class are .............",
"o": [
"About 24.5%, (55.5-58.5)",
"About 51%, (56.5-58.5)",
"25, (55.5-58.5)",
"About 51%, (55.5-58.5)"
],
"a": 3,
"img": "q2_height"
},
{
"q": "A sample of  faculty members were asked the number of cars they owned (including spouse's and children's cars). The results are given in the histogram below:\nWhich of the following  describe the data?",
"o": [
"There are 10 faculty members that own 1 car",
"There are no values of 6.",
"There are 15 faculty members that own 2 cars",
"There are 10 faculty members that own 7 cars",
"ALL other answers are correct"
],
"a": 4,
"img": "q2_cars"
}
]
},
{
"title": "q3: Chapter 3, Summarizing data: descriptive measures",
"note": "Your screenshots of q3 show no answer key, so the correct answers for this quiz were worked out separately. Check them against your course material.",
"questions": [
{
"q": "A student earned grades of B, B, A, C, and D. Those courses had these corresponding numbers of credit hours: 4, 5, 1, 5, 4. The grading system assigns quality points to letter grades as follows: A = 4, B = 3, C = 2, D = 1, and F = 0. Compute the grade point average (GPA) and round the result to two decimal places.",
"o": [
"1.37",
"9",
"2.37",
"3.46"
],
"a": 2
},
{
"q": "A manufacturer of computers has lowered prices for her product. A sample of 16 stores selected randomly indicate the following sales (in units) during the past week :\n0,2 ,3 ,3 ,4, 4, 5, 6,6, 6 ,8 ,8, 9, 10, 10, 11\nCalculate the mean and the median (round them to a whole number) then Compare them .\nWhat is the shape of the distribution ?",
"o": [
"Skewed to the right",
"Symmetrical",
"Skewed to the left"
],
"a": 1
},
{
"q": "Which of the following statements is true regarding the standard deviation?",
"o": [
"All other answers are correct",
"It is in the same units as the mean.",
"If it is zero, then all the data values are the same.",
"It cannot assume a negative value."
],
"a": 0
},
{
"q": "Find the outliers  in the given data set below.\n16, 14, 3, 12, 15, 17, 22, 15, 52",
"o": [
"3",
"52",
"12",
"22"
],
"a": 1
},
{
"q": "5 steel workers earn 6$ an hour,3 earn 7$ an hour, and 7 earn 5$ an hour.The average  hourly wage is :",
"o": [
"6.8$",
"4.2$",
"5.7$",
"None of the given choices is correct"
],
"a": 2
},
{
"q": "The below side-by-side boxplots represent the number of hours that 12 part-time employees at a toy store worked during the weeks before and after ‘Eid.\nwhich statement is NOT true",
"o": [
"The part time employees worked at least 12 hours before and after EID",
"All of the given statements  are true",
"50%  of the part-time employees worked more than 30 hours before EID and more than 18 hours after EID",
"The part time employees in general did more hours before than after EID",
"9 part-time employees worked more than 33.5 hours before EID and  3 part-time employees worked more than 14.5 hours after EID"
],
"a": 4,
"img": "q3_box1"
},
{
"q": "Which of the following is not a property of variance?",
"o": [
"the variance is the square root of the standard deviation",
"The units of variance are the squares of the units of the original data.",
"The value of the variance is zero only when all of the data values are the same number.",
"The value of the variance is always positive or 0."
],
"a": 0
},
{
"q": "A sample of five stocks traded on the Nasdaq revealed the following percent changes from yesterday to today.\n17.5%  -3.4%  8.4%  7.5%  0.6%\nThe median Percent change is",
"o": [
"None of the above",
"6.12%",
"7.48%",
"7.5%"
],
"a": 3
},
{
"q": "If two data sets have the same standard deviation, they must have the same coefficient of variation",
"o": [
"True",
"False"
],
"a": 1
},
{
"q": "In a left skewed distribution which of the measures of central tendency is the smallest",
"o": [
"The standard deviation",
"Can not tell",
"Mean",
"Median",
"Mode"
],
"a": 2
},
{
"q": "How will a high outlier in a data set affect the mean and median?",
"o": [
"Distribution skewed to the right, mean pulled to the right, median not affected",
"Distribution skewed to the right, mean not affected, median pulled to the right .",
"Distribution skewed to the left, mean pulled to the left, median not affected",
"Distribution skewed to the right, mean not affected, median not affected"
],
"a": 0
},
{
"q": "The median can be found for what level of measurement?",
"o": [
"All of the given answers are correct",
"Ratio",
"ordinal",
"Interval"
],
"a": 0
},
{
"q": "A company has two sections : section1 with 40 employees and section2 with  65 employees , Their average weekly wages are $450 and $300 .\nThe variances  are 81 and 144 respectively.",
"rows": [
{
"l": "Which section has a larger wage bill?",
"o": [
"section1",
"section2"
],
"a": "section2"
},
{
"l": "The coefficient of variation of the section 1 wages is (%)",
"n": true,
"a": "2"
},
{
"l": "The coefficient of variation of the section2 wages is (%)",
"n": true,
"a": "4"
},
{
"l": "The wages are more variable in",
"o": [
"section1",
"section2"
],
"a": "section2"
},
{
"l": "because",
"o": [
"the C.V. in section 2 is higher than the CV in section1",
"the C.V. in section 1 is higher than the CV in section2"
],
"a": "the C.V. in section 2 is higher than the CV in section1"
}
]
},
{
"q": "A disadvantage of the range is",
"o": [
"All answers are corret",
"It is in different units than the mean.",
"Only two values are used in its calculation.",
"It does not exist for some data sets"
],
"a": 2
},
{
"q": "Below a sample of data for a variable W\n4 5 3 6 8 34 10 4 7\nOutliers are",
"o": [
"34",
"Data  set has no extreme values",
"-1.5",
"16.5"
],
"a": 0
},
{
"q": "according to the following box-plots which statement is not true",
"o": [
"home sale prices in city 1 are less variable than in the two other cities",
"home sale prices in city 2 are more variable than in the two other cities",
"50% of the home sale prices in city 2 are ranging approximately from 65 t0 75 thousands $.",
"the average home sale price in city 3 is the lowest"
],
"a": 2,
"img": "q3_box2"
},
{
"q": "A sample of 12 observations has a standard deviation of 5. The sum of the squared deviations from the sample mean is:",
"o": [
"250",
"25",
"275",
"60"
],
"a": 2
},
{
"q": "Which ( lowest ) level of measurement is required for the mode?",
"o": [
"Ratio",
"Nominal",
"ordinal",
"Interval"
],
"a": 1
},
{
"q": "The variance of a population is",
"o": [
"The sum of all the relative frequencies of a distribution",
"The arithmetic average of the squared deviations about the population mean.",
"All of the above",
"The square root of standard deviation"
],
"a": 1
},
{
"q": "The average temperature over a 10-day period was 85 degrees. For the first six days, the average temperature was 87 degrees. Over the next 4 days, what was the average temperature?",
"o": [
"81 degrees",
"82 degrees",
"84 degrees",
"85 degrees"
],
"a": 1
},
{
"q": "In a set of observations, which measure of central tendency reports the value that occurs most often?",
"o": [
"Mean",
"Median",
"Mode",
"Geometric mean"
],
"a": 2
},
{
"q": "The sum of all squared deviations of data values from the mean is zero",
"o": [
"True",
"False"
],
"a": 1
}
]
}
];
