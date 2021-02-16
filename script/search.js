let t = ' ';
const doc = new jsPDF();


const onFormSubmit = () => {
    if ($('#text').val() !== '') {

        $.getJSON('data.json', (response) =>  {

            $.each(response,  (index, value) => {
                const toNumber = Number(value.marks_subject1 + value.marks_subject2 + value.marks_subject3 + value.marks_subject4 + value.marks_subject5); 
                if($('#text').val().toLowerCase() == value.students_name.toLowerCase() || $('#text').val() == value.number || $('#text').val().toLowerCase() == value.email_id.toLowerCase() || $('#text').val() == toNumber  ){
                    let students = '<tr>';
                    t += 'Student Name: ' + value.students_name + '\n Student Number: ' + value.number + '\n Student Email: '+ value.email_id + '\n Student Subject1: '+ value.marks_subject1 + '\n Student Subject2: '+ value.marks_subject2 + '\n Student Subject3: '+ value.marks_subject3 + '\n Student Subject4: ' + value.marks_subject4 + '\n Student Subject5: '+ value.marks_subject5 + '\n Student Total Mark:  ' + toNumber + ', \n\n';                    students += '<td>' + value.students_name + '</td>';
                    students += '<td>' + value.number + '</td>';
                    students += '<td>' + value.email_id + '</td>';
                    students += '<td>' + value.marks_subject1 + '</td>';
                    students += '<td>' + value.marks_subject2 + '</td>';
                    students += '<td>' + value.marks_subject3 + '</td>';
                    students += '<td>' + value.marks_subject4 + '</td>';
                    students += '<td>' + value.marks_subject5 + '</td>';
                    students += '<td>' + toNumber + '/30</td>';
                    students += '</tr><button>h</button>'  
                    console.log(students);
                    console.log(t);
                    $('#searchstudent').append(students);
                    $('#text').val('');
                    // doc.text(t);
                    // doc.save("test.pdf");
                }//end if else
            })//end each
        
            
        });//end getjson
    }else{
        alert('please input either a student Fullname(e.g simon adama) , number(e.g 08056595398) , email(tt@gmail.com) or total score(e.g 30)  note you can only input only one of the above type')
    }
}

const download = () => {
    doc.text( t, 5, 5 )
    doc.save('work.pdf')
}//end download

