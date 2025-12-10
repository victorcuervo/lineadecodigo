---
title: Combos con imágenes
description: "Cómo crear combos con imágenes en formularios HTML usando CSS para un mejor diseño visual."
lastUpdated: 2025-12-10
slug: html/combos-con-imagenes
author: victor_cuervo
---

Mientras que esperamos a que [XForms](http://www.manualweb.net/xforms/) se convierta en el estándar soportado por los navegadores para el desarrollo de formularios (espero que XHTML 2.0 lo de el impulso necesario), nos vemos obligados a realizar verdaderas virguerías con los formularios de [HTML](http://www.manualweb.net/tutorial-html/) 4.01. En este caso lo que queremos es que nuestros combos de selección nos aparezcan con imágenes y que pueda seleccionar una de ellas. ¿Es esto posible? La respuesta a esta pregunta es difícil. Podríamos decir que imposible no es. Pero que el soporte que se da desde los navegadores a este caso es mínimo. Para que nos hagamos una idea, solo funciona con los motores[Mozilla](http://www.mozilla.org/) ([FireFox](http://www.getfirefox.com/) y compañía). La idea es la siguiente. En primer lugar, utilizando hojas de estilo [CSS](http://www.manualweb.net/css/) definiremos tres elementos cuadrado, circulo y triangulo. Estos tres elementos tendrán una imagen de fondo representativa. Para indicar la imagen de fondo de un elemento utilizamos el [atributo background-image](http://w3api.com/wiki/CSS:Background-image). Veamos como quedaría definido:


```css
.circulo {
  background-image: url(circulo.jpg);
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
}
.triangulo{
  background-image: url(triangulo.jpg);
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
}
.cuadrado{
  background-image: url(cuadrado.jpg);
  height: 50px;
  width: 50px;
  background-repeat: no-repeat;
}
```


Hay que indicar que hemos utilizado otros atributos. El primero es el alto y ancho ([height](http://w3api.com/wiki/CSS:Height) y [width](http://w3api.com/wiki/CSS:Width) respectivamente). La idea es tener imágenes uniformes de 50x50 pixels. El otro atributo es [background-repeat](http://w3api.com/wiki/CSS:Background-repeat), al cual hemos dado un valor de no-repeat. Esto significa que solo se mostrará la imagen de fondo una vez. Y es que si usamos este estilo dentro de un área de 100x50 veremos que, por defecto nos aparece duplicada la imagen. Ahora solo nos quedará definir el combo y asignar los estilos necesarios en cada opción. De la siguiente forma:


```html
<select>
  <option class="cuadrado">Cuadrado</option>
  <option class="circulo">Circulo</option>
  <option class="triangulo">Triangulo</option>
</select>
```


Y ya está. Ya tenemos nuestro combo con imágenes. El cual, en [FireFox](http://www.getfirefox.com/), nos quedará de la siguiente manera:


![](http://lineadecodigo.com/wp-content/uploads/2006/12/comboconimagenes.jpg)

