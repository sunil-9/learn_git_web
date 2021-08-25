var skills = '<div class="col-md-3"><img class='imagem_artigo' src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';
var skills_array = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
var skills_new = '';
for (var i = 0; i < skills_array.length; i += 1) {
	skills_new = skills.replace('%data%', skills_array[i]);
	$('.skills-section-images').append(skills_new);
}
// experience section   
var experience = '<li><h4>%data%       ( %data1% )</h4><br><h5>%data2%</h5></li><hr>';
var experience_array = [{
	name: 'Company Name',
	years: '2012-2015',
	info: 'Company’s Information'
}, {
	name: 'Company Name',
	years: '2011-2015',
	info: 'Company’s Information'
}, {
	name: 'Company Name',
	years: '2008-2009',
	info: 'Company’s Information'
}];
var experience_new = '';
for (var i = 0; i < experience_array.length; i += 1) {
	experience_new = experience.replace('%data%', experience_array[i]['name']);
	experience_new = experience_new.replace('%data1%', experience_array[i]['years']);
	experience_new = experience_new.replace('%data2%', experience_array[i]['info']);
	$('.experience-section-info').append(experience_new);
}
var projects = '<li><h3>%data%</h3><div class="row"><div class="col-md-3"><img class='imagem_artigo' src="./img/%data1%.gif" alt="project-images" class="img-responsive"></div><div class="col-md- 9"><h3>Language(s): %data2%</h3><h5>%data3%</h5></div></div></li><br><hr>';
var projects_array = [{
	name: 'Change My voice',
	img: 'a',
	language: 'Swift',
	info: 'Project Information'
}, {
	name: 'Grapher',
	img: 'a',
	language: 'Python',
	info: 'Project Information'
}];
var projects_new = '';
for (var i = 0; i < projects_array.length; i += 1) {
	projects_new = projects.replace('%data%', projects_array[i]['name']);
	projects_new = projects_new.replace('%data1%', projects_array[i]['img']);
	projects_new = projects_new.replace('%data2%', projects_array[i]['language']);
	projects_new = projects_new.replace('%data3%', projects_array[i]['info']);
	$('.projects-section-info').append(projects_new);
}