
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('universities').del()
    .then(function () {
      // Inserts seed entries
      return knex('universities').insert([{
        name: 'Stony Brook Univerity',
        state: 'NY',
        location: 'Suburban',
        size: 17026,
        poster_url: 'https://www.suny.edu/media/suny/content-assets/images/campus-profiles/pics/StonyBrook-walkway-flag.jpg',
        keywords: 'chemistry, science, STEM, difficult, big, SUNY, State University of New York, men, commuter school, pre med, pre-med, State University of NY, sororities, sorority, frat, biology, chinese, china, korean, korea, japan, japanese, india, indian, bengali, bengal, asia, asian, greek life, clubs, LIRR, train, baseball, football, basketball, soccer, lacrosse',
        negativeKeywords: ,
        gpa: '3.8',
        cost: 26239,
      },{
        name: 'Rutgers',
        state: 'NJ',
        location: 'Urban',
        size: 67556,
        poster_url: 'https://stjenglish.com/wp-content/uploads/RUTGERS-678x381.png',
        keywords: 'expensive, public, crowded, waste, scam, bad teaching, lies, party, fraternities, sororities, math, mathematics, 5 year masters, business, huge, expansive, food, good food, greek life, clubs, baseball, football, basketball, soccer, lacrosse, softball, wrestling',
        negativeKeywords: ,
        gpa: '3.66',
        cost: 48132,
      },{
        name: 'Columbia University',
        state: 'NY',
        location: 'Urban',
        size: 32429,
        poster_url: 'https://gs.columbia.edu/files/gs/columbia-university-veteran-center-logo-coin-web.png',
        keywords: 'bernard, library, architecture, statue, NYC, UWS, ivy-league, ivy, ivy league, small, business, engineering, science,  private, leadership, activists, activism, intern, work, food, good food',
        negativeKeywords: ,
        gpa: '4.0',
        cost: 74173,
      },{
        name: 'University of Tampa',
        state: 'FL',
        location: 'Urban',
        size: 8310,
        poster_url: 'https://images.submittable.com/s3/publisher-files.submittable.com/11985/submit-header.jpg?height=220&v=1459068683',
        keywords: 'party school, great dorms, good dorms, bad parking, warm, beach, pool, greek, sorority, fraternities, fraternity, sororities, campus, beautiful, marine bio, business, science, nursing, clubs, baseball, lacrosse, city, Tampa, Study Abroad, historic, good experience, fun, good teachers, good career guidance, good advising, white, caucasian, international',
        gpa: '3.3',
        cost: 42716,
      }]);
    });
};
