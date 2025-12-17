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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAEPFJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM9AUhWC5geRpGwsiHSb3AC%2FxqYUK6XWLhbkYt%2B%2B%2BVVAiEA84XvDbcjf2S40ADNKt2xt500s0A9tPz%2BuBkRukhnbeQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1BA7eRO27xyG4jXSrcA4xCHORfAMoZWK85T2Hhn%2B8%2B6Yo5x4AuxMUBHpeP6e2UCJEeWhNOot4MseX7AbB9oaWuvPk8mxgpwKjQ4jPan7hbjI9gF33PxSVhgd7IA7ysqwdyo%2FyXt5qilOF3jc0Ol1pAK4wEUQQd3NJRzmaQxhBTrfeuyFodZJ5IZQFBhNIO9if1%2FA9I7zS%2FmOTWp1i0FOG0py%2Bnn30vKAYl0u%2FXQPJJl6CzAgl2zKNUw3NpOtSjaBNoNTH%2BS46VqklQkOL39wFYUk6uPZwudJbALYkQPMurropvWql4KIudMvbrYfQom2e74q4mBf9rbrC7mb8eXmDUUs7CSqk8N4r1SqwnbKNLYLnE1pITBc1YwPhVGvCq78c%2Bo%2F6ZN6EDZH6jG23%2B6q0if7JSthlI5f9UFrTio5Hj5gLWI4n10U063W%2FyrN59TcVHQPX4Ki%2FnK9UV%2F%2F5Pej1NIRI6FqOZ7g1lBj7CkKYg9JtCp1GlEoiBvdATpzEe6SJf%2BCFO9hBObhJSYgyheZ43pVWSNycskmYIXJrQsWxeTzRgKGU58qTa4feEHi%2F5yf7DA5KazOYwll958NWKzxRRJe9aH8JXECZX9pvdESQypex5XzJb0Y%2BNH0l8W1iE0a8%2FEKLIkrTpYv2jMKmgi8oGOqUBkjygcPsvlD4ISqVf5u0D0Sb33U2gF3G6faakhGpTaDfMIzy4HwbO09YuNEmr%2FrGaXndBlpRKG8fVOrO2q%2F8TPbW2HkJNd%2FlIjtGwShCvztPC7nex0wBadW6Vwb6smFaCfmwPPnpfKxKGhAVWNrOSLn4pFcR3nOuKrsbvtKpbkIiqkn%2BfB%2FsKxEjg8TcY2hz99claz9GYS1BhrRFl%2FCW2pun2OLsE&X-Amz-Signature=e68c9cb640591136254a56c83803692c2edfdc0358ed232053a011cc3f3565f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGAEPFJA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T182137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM9AUhWC5geRpGwsiHSb3AC%2FxqYUK6XWLhbkYt%2B%2B%2BVVAiEA84XvDbcjf2S40ADNKt2xt500s0A9tPz%2BuBkRukhnbeQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD1BA7eRO27xyG4jXSrcA4xCHORfAMoZWK85T2Hhn%2B8%2B6Yo5x4AuxMUBHpeP6e2UCJEeWhNOot4MseX7AbB9oaWuvPk8mxgpwKjQ4jPan7hbjI9gF33PxSVhgd7IA7ysqwdyo%2FyXt5qilOF3jc0Ol1pAK4wEUQQd3NJRzmaQxhBTrfeuyFodZJ5IZQFBhNIO9if1%2FA9I7zS%2FmOTWp1i0FOG0py%2Bnn30vKAYl0u%2FXQPJJl6CzAgl2zKNUw3NpOtSjaBNoNTH%2BS46VqklQkOL39wFYUk6uPZwudJbALYkQPMurropvWql4KIudMvbrYfQom2e74q4mBf9rbrC7mb8eXmDUUs7CSqk8N4r1SqwnbKNLYLnE1pITBc1YwPhVGvCq78c%2Bo%2F6ZN6EDZH6jG23%2B6q0if7JSthlI5f9UFrTio5Hj5gLWI4n10U063W%2FyrN59TcVHQPX4Ki%2FnK9UV%2F%2F5Pej1NIRI6FqOZ7g1lBj7CkKYg9JtCp1GlEoiBvdATpzEe6SJf%2BCFO9hBObhJSYgyheZ43pVWSNycskmYIXJrQsWxeTzRgKGU58qTa4feEHi%2F5yf7DA5KazOYwll958NWKzxRRJe9aH8JXECZX9pvdESQypex5XzJb0Y%2BNH0l8W1iE0a8%2FEKLIkrTpYv2jMKmgi8oGOqUBkjygcPsvlD4ISqVf5u0D0Sb33U2gF3G6faakhGpTaDfMIzy4HwbO09YuNEmr%2FrGaXndBlpRKG8fVOrO2q%2F8TPbW2HkJNd%2FlIjtGwShCvztPC7nex0wBadW6Vwb6smFaCfmwPPnpfKxKGhAVWNrOSLn4pFcR3nOuKrsbvtKpbkIiqkn%2BfB%2FsKxEjg8TcY2hz99claz9GYS1BhrRFl%2FCW2pun2OLsE&X-Amz-Signature=c84921039f256101d1b1f009c136f02d4448b0aa45c66108047895ef2a451061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

