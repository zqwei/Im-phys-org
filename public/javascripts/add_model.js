// obtain form values
function getFieldValue(fieldId) {
   // 'get field' is part of Semantics form behavior API
   return $('.ui.form').form('get field', fieldId).val();
}

function getFormData(){
  var formData = {
            firstname: getFieldValue('first-name'),
            lastname: getFieldValue('last-name'),
            institution: getFieldValue('Institution'),
            email: getFieldValue('email'),
            code_type: getFieldValue('code_type'),
            repo: getFieldValue('repo'),
            ref: getFieldValue('reference'),
            info : getFieldValue('info')
        };
  return formData;
}

// form validation
$('.ui.form').
  form({
      on: 'blur',
      fields:{
        firstname: {
          identifier : 'first-name',
          rules:[{type : 'empty'}]
        },
        lastname: {
          identifier : 'last-name',
          rules:[{type : 'empty'}]
        },
        repo: {
          identifier : 'repo',
          rules:[{type : 'empty'}]
        },
        email: {
          identifier : 'email',
          rules:[{type : 'email'}]
        }
      }
    });

$('.ui.form').form('validate form');
