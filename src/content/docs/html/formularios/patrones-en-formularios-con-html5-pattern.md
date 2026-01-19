---
title: "Patrones en formularios con HTML5 pattern"
description: "Aprende a implementar patrones en formularios con HTML5 pattern para validar entradas de usuario de manera efectiva y mejorar la experiencia en tus proyectos web."
date: 2013-03-03
updatedDate: 2026-01-19
tags: ["input","required","form","pattern"]
slug: html/formularios/patrones-en-formularios-con-html5-pattern
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Formularios/campo-con-patron.html
topic: html

---

Para realizar la validación de un formulario de lado del cliente siempre recurríamos a scripts en [JavaScript](https://www.manualweb.net/javascript/) o usar alguna librería para verificar que los inputs sean los correctos, que estén completos con datos antes de que el formulario sea enviado. En [HTML5](https://www.manualweb.net/html5/) tenemos la posibilidad de aplicar patrones con [HTML5 pattern](https://www.w3api.com/HTML/input/pattern/).


En el nuevo estándar de [HTML5](https://www.manualweb.net/html5/), nuevos atributos de los [input](https://www.w3api.com/HTML/input/) como [required](https://www.w3api.com/HTML/input/.required) y [pattern](https://www.w3api.com/HTML/input/pattern/) usados en combinación con [CSS](http://www.manualweb.net/css/) selectors nos facilita la tarea y mejora la interfaz de aviso al usuario.


## Atributo HTML5 pattern


El atributo [HTML5 pattern](https://www.w3api.com/HTML/input/pattern/) especifica una expresión regular usada para validar los valores del elemento [input](https://www.w3api.com/HTML/input/).


Este atributo funciona con los tipos de entrada [input](https://www.w3api.com/HTML/input/) siguientes: texto, búsqueda, url, teléfono, correo electrónico y contraseña.


> Usar el atributo de "title" para describir el [HTML5 pattern](https://www.w3api.com/HTML/input/pattern/) para ayudar al usuario.


## Ejemplo de uso de HTML5 pattern


Digamos que necesitamos que el [input](https://www.w3api.com/HTML/input/) tenga el siguiente formato: Las primeras 3 letras del nombre de tu país. El uso de [required](https://www.w3api.com/HTML/input/.required) y [pattern](https://www.w3api.com/HTML/input/pattern/) nos asegura que el [input](https://www.w3api.com/HTML/input/) debe ser completado y siguiendo la expresión regular. Al pararse el usuario sobre el [input](https://www.w3api.com/HTML/input/), el mensaje en el atributo title es mostrado, lo cual ayuda a darle una pista al usuario de cómo debe llenar el formulario.


```html
<form>
  <label for="country">País:</label>
  <input type="text" 
         id="country" 
         name="country_code" 
         pattern="[A-Za-z]{3}" 
         title="Tres letras del código del país"
         required>
  <input type="submit">
</form>
```


Puedes encontrar una gran cantidad de patrones en la web [HTML5 Pattern](http://html5pattern.com/).

