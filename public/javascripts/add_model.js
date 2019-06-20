function getFieldValue(fieldId) {
   // 'get field' is part of Semantics form behavior API
   return $('.ui.form').form('get field', fieldId).val();
}


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

alert(formData);
