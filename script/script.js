
    $.getJSON('data.json', (response) =>  {

        $.each(response,  (index, value) => {
            let students = '<tr>';
            students += '<td>' + value.students_name + '</td>';
            students += '<td>' + value.number + '</td>';
            students += '<td>' + value.email_id + '</td>';
            students += '<td>' + value.marks_subject1 + '</td>';
            students += '<td>' + value.marks_subject2 + '</td>';
            students += '<td>' + value.marks_subject3 + '</td>';
            students += '<td>' + value.marks_subject4 + '</td>';
            students += '<td>' + value.marks_subject5 + '</td>';
            students += '<td>' + Number(value.marks_subject1 + value.marks_subject2 + value.marks_subject3 + value.marks_subject4 + value.marks_subject5) + '/30</td>';
            students += '</tr>';
            $('#studentdatabase').append(students);
        });//end each
       
        
    });//end getjson



