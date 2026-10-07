(function () {
  const select = document.getElementById('major-fit-select');
  const results = document.getElementById('major-fit-results');
  if (!select || !results) return;

  const fields = {
    data: {
      label: 'Data Science or Statistics',
      courses: [
        ['STAT 131A', 'Intro to Probability & Statistics for Life Scientists', 'Group 1 elective'],
        ['STAT 135', 'Concepts of Statistics', 'Group 1 elective'],
        ['STAT 140', 'Probability for Data Science', 'Group 1 elective']
      ]
    },
    economics: {
      label: 'Economics',
      courses: [
        ['DEMOG / ECON C175', 'Economic Demography', 'Required course'],
        ['ECON 140', 'Economic Statistics and Econometrics', 'Group 1 elective'],
        ['ECON 141', 'Econometric Analysis', 'Group 1 elective'],
        ['ECON 155', 'Urban Economics', 'Group 2 elective'],
        ['ECON 157', 'Health Economics', 'Group 2 elective'],
        ['ECON C171 / N171', 'Economic Development', 'Group 2 elective']
      ]
    },
    'public-health': {
      label: 'Public Health',
      courses: [
        ['PB HLTH 141', 'Introduction to Biostatistics', 'Group 1 elective'],
        ['PB HLTH 142', 'Intro to Probability & Statistics in Biology & Public Health', 'Group 1 elective'],
        ['PB HLTH 181', 'Poverty and Population', 'Group 2 elective']
      ]
    },
    sociology: {
      label: 'Sociology',
      courses: [
        ['DEMOG / SOCIOL C126', 'Sex, Death, and Data', 'Required course'],
        ['SOCIOL 106', 'Quantitative Sociological Methods', 'Group 1 elective'],
        ['SOCIOL 111 / 111AC', 'Sociology of the Family', 'Group 2 elective'],
        ['SOCIOL 130', 'Social Inequalities', 'Group 2 elective'],
        ['SOCIOL 130AC', 'Social Inequalities: American Cultures', 'Group 2 elective']
      ]
    },
    psychology: {
      label: 'Psychology',
      courses: [['PSYCH 101', 'Research and Data Analysis in Psychology', 'Group 1 elective']]
    },
    history: {
      label: 'History',
      courses: [['HISTORY 137AC', 'The Repeopling of America', 'Group 2 elective']]
    }
  };

  function courseCard(course) {
    const article = document.createElement('article');
    article.className = 'major-fit-course';
    const code = document.createElement('strong');
    code.textContent = course[0];
    const title = document.createElement('span');
    title.textContent = course[1];
    const type = document.createElement('small');
    type.textContent = course[2];
    article.append(code, title, type);
    return article;
  }

  function render() {
    const value = select.value;
    results.replaceChildren();
    if (!value) {
      const placeholder = document.createElement('div');
      placeholder.className = 'major-fit-placeholder';
      placeholder.innerHTML = '<strong>Find a possible connection</strong><p>Select your field to explore courses already included in the Demography minor.</p>';
      results.append(placeholder);
      return;
    }
    if (value === 'other') {
      const message = document.createElement('div');
      message.className = 'major-fit-message';
      message.innerHTML = '<strong>Your major may still connect.</strong><p>One upper-division course may overlap with your major. Review the full elective list and ask advising whether a course in your program can be approved.</p>';
      results.append(message);
      return;
    }
    const field = fields[value];
    const heading = document.createElement('div');
    heading.className = 'major-fit-result-heading';
    const title = document.createElement('strong');
    title.textContent = 'Published courses connected to ' + field.label;
    const explainer = document.createElement('p');
    explainer.textContent = 'These courses appear in the current Demography minor requirements. One may be eligible to overlap with your major.';
    heading.append(title, explainer);
    const grid = document.createElement('div');
    grid.className = 'major-fit-course-grid';
    field.courses.forEach(function (course) { grid.append(courseCard(course)); });
    results.append(heading, grid);
  }

  select.addEventListener('change', render);
})();
