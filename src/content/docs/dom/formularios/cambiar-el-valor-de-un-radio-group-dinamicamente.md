---
title: "Cambiar el valor de un radio group dinámicamente"
description: "Uso de código fuente Javascript para cambiar el valor de un radio group dinámicamente."
date: 2009-09-19
updatedDate: 2026-01-12
tags: ["form","input","checked","getelementbyid","name"]
slug: dom/formularios/cambiar-el-valor-de-un-radio-group-dinamicamente
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/cambiar-estado-radio-group.html
topic: dom

---

## Crear un grupo de radio buttons


Agrupando elementos [INPUT](https://www.w3api.com/HTML/input/) de tipo radio podemos crear un grupo de opciones, en las cuales el usuario solo pueda elegir una de ellas. Esto se consigue asignando un único nombre (atributo [name](http://w3api.com/HTML/form/name/)) a todos los elementos [input radio](https://www.w3api.com/HTML/input/).


Así, podríamos construir un formulario para preguntar por el sexo del usuario:


```html
<form id="myform">
  <input id="sexo_m" name="sexo" type="radio" value="masculino">
  <label for="sexo_m">Masculino</label>
  
  <input id="sexo_f" name="sexo" type="radio" value="femenino">
  <label for="sexo_f">Femenino</label>
</form>
```


## Cambiar el valor dinámicamente con JavaScript


Si tenemos valores sobre la información del usuario, por ejemplo si está modificando su información anterior, podemos tener la necesidad de **cambiar el valor dinámicamente**. En este caso, y de no poder crear el formulario de forma dinámica, podemos utilizar [JavaScript](https://www.manualweb.net/javascript/) para cambiar el valor de forma dinámica.


Para cambiar el valor utilizaremos, en primer lugar, la función [.getElementById()](https://www.w3api.com/DOM/.getElementById()) para acceder al elemento [INPUT](https://www.w3api.com/HTML/input/) del formulario. Es por ello que es muy importante el haberle dado un valor al atributo [ID](https://www.w3api.com/HTML/id/).


Cuando accedemos al elemento [INPUT](https://www.w3api.com/HTML/input/) vemos que el atributo `checked` es el que nos informa si el elemento está chequeado o no:


```javascript
document.getElementById('sexo_m').checked = true;
```


Los valores que puede tomar el atributo `checked` son `true` y `false`. Con la línea de código anterior lo que estamos haciendo es marcar el campo `sexo_m` como activo.

