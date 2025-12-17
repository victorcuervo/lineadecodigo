---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRV6STU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBTI1cc0df6ukCg0mWffrOjpqOz5ACjsowWneYo740lAiA890U5Gvsq77ECOaN%2FP7zXQIwfvfLa61iMuhtSM5hW7iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZFIJH5XssP83UB2AKtwDXeFZCVY8x%2FSnJ6WUM99DDcmkKgyFsEIWuuowflvByv%2F4SBRiOrFXYdAwvnb6n41KdVNdvwe2sEwL7sMPM5VFbNBPJGO6blJpGwuCWy04%2BaQv3oOrfiD%2BSo69qGnXOn0gUgTacIF9kWFw3QHcWLiWwTfK53znJfIbSxC%2ByqQfJ64XoM7Ax9pzR7r8A4vaTom0XFMbP5wTN5Aj48sK84u5uI7mLL5rfcmVR%2BF4JIkX9X0IxD1p8NvekrWg5V9LzHsJaf7UCpkcaqgouG4uULcRT8bOAw99TdyOsmtoPFDiBDRE8asxocm9hPaFXyntckArrwdfEEGhT6xk4Wx5ZYCEqTqjqVKz3yJYB248dnXu18zj%2FLSoY7cQ08HXzknhKO7GTE41wwFbhT6Ps5jSsWSsJwqUby%2BHh8UBfKf41%2FOe3EALyV9YJcdc7J%2FkwDqylup8BOk0bzbNggJRBwUR10BAN2ldAtVoSv%2BTrNdHaVLmFnOJVP123pp9lQ3dXTHVnm0tUI%2B0N3LhQtxnJjQA8X1fUb%2FJb1dKLAVz%2BDAbMuy4YIPGh%2F1WpQLBMGiXliqWA%2BP%2BBoPq6C8kTYTouhbSg2VhQC57JUw5tWpmLDcrAIewaYIiCFbJwyP%2Byw%2BH%2FRcwpqCLygY6pgHfkkMY6Ylu3qU%2FeeP5xMIQ9Z1yx1lh%2BRhjN2D0myCHco3hvqWMe8ZMrajOeq7QRuVPGlHiBUiFqUXaxzXeGKyHEkalG4cah4Zl05pUp2iIi5xe0NGkteIP0Lmi1%2FXwPSWsbScFMzkPPxjUAzkZhg8f%2FGHnXV4gh7lsyU%2BwaPVzayN9TlZ8zTfT3lsudwolGJn73tRFYE32HcMNQIxiRbV5NSVZAFgi&X-Amz-Signature=a1981f9a56e1c5a60ffcca570a3b8273fb3e37c860f1a2be3dc0fcc761a686cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRV6STU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBTI1cc0df6ukCg0mWffrOjpqOz5ACjsowWneYo740lAiA890U5Gvsq77ECOaN%2FP7zXQIwfvfLa61iMuhtSM5hW7iqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZFIJH5XssP83UB2AKtwDXeFZCVY8x%2FSnJ6WUM99DDcmkKgyFsEIWuuowflvByv%2F4SBRiOrFXYdAwvnb6n41KdVNdvwe2sEwL7sMPM5VFbNBPJGO6blJpGwuCWy04%2BaQv3oOrfiD%2BSo69qGnXOn0gUgTacIF9kWFw3QHcWLiWwTfK53znJfIbSxC%2ByqQfJ64XoM7Ax9pzR7r8A4vaTom0XFMbP5wTN5Aj48sK84u5uI7mLL5rfcmVR%2BF4JIkX9X0IxD1p8NvekrWg5V9LzHsJaf7UCpkcaqgouG4uULcRT8bOAw99TdyOsmtoPFDiBDRE8asxocm9hPaFXyntckArrwdfEEGhT6xk4Wx5ZYCEqTqjqVKz3yJYB248dnXu18zj%2FLSoY7cQ08HXzknhKO7GTE41wwFbhT6Ps5jSsWSsJwqUby%2BHh8UBfKf41%2FOe3EALyV9YJcdc7J%2FkwDqylup8BOk0bzbNggJRBwUR10BAN2ldAtVoSv%2BTrNdHaVLmFnOJVP123pp9lQ3dXTHVnm0tUI%2B0N3LhQtxnJjQA8X1fUb%2FJb1dKLAVz%2BDAbMuy4YIPGh%2F1WpQLBMGiXliqWA%2BP%2BBoPq6C8kTYTouhbSg2VhQC57JUw5tWpmLDcrAIewaYIiCFbJwyP%2Byw%2BH%2FRcwpqCLygY6pgHfkkMY6Ylu3qU%2FeeP5xMIQ9Z1yx1lh%2BRhjN2D0myCHco3hvqWMe8ZMrajOeq7QRuVPGlHiBUiFqUXaxzXeGKyHEkalG4cah4Zl05pUp2iIi5xe0NGkteIP0Lmi1%2FXwPSWsbScFMzkPPxjUAzkZhg8f%2FGHnXV4gh7lsyU%2BwaPVzayN9TlZ8zTfT3lsudwolGJn73tRFYE32HcMNQIxiRbV5NSVZAFgi&X-Amz-Signature=c88f6b92e3da465c24c4bef0ac62c93a145036fb531d22fde22de625420280ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

