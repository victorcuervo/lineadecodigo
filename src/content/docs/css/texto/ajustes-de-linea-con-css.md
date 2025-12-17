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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNU6XY3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAR4xdIgSw8ogP887viAJpK9MfLxZ%2Frh7UqmpvHkBdnAiEAlzH7O5hDjoo7K5qyBJGLZD3bw%2B%2FiJDUPqGhGAB85zKsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSeNtZIi3QTdewjhCrcA%2BzpiPeLygbajVFemOnQffSQSWzL7IwD%2BgZzW%2BS3M5ldHWPPQk%2F6elOFoAPWF%2BPUCyLPUtKBHeKZIff2E%2FhxMu46mweqj1KgTbPAdBaM8XU1Xry0d8Ur7oRZGw0HJ2jiryGRhXMbIXz5Kubo98LJlZ9MSOqz03mfGWHx4KxOZXb4XJTl%2BDoM58yy%2BcDB%2BeGG%2BE%2F6tHSBFwFNZDxhSpEXgiPzJMMZS%2FM7r%2FkUWDFpNb2ZasiTy0eyTVPQvcA0quRnsumqqp4IcqPf2zZnWb8no0RohleotfFuRvJhToAPmLjjXQ%2BPC1fyOKGsjRGpUPGiJGyC5muu5cJJU3VVmq1%2FeYmr1ZbTfpoS08ufQJZwkxHs1E25ojVjKez1ULto0lzmHYxKQsOs%2B%2FS7v4WpZ3VClqeMvZ73smRXV76Lc0hiJpeeJCgpeOmT75kNJVZrQDS%2F0L33c9XiyZAUpbesTwZwk1pLFKjTY1sIcZGRI1rrB%2BB4F5USTMIPFbcDnI9KZrHKOs6m7UPi%2FY7BpjLYJWF9gyrFhPOiVmaLBP3CEGNWvGZitKhuDtYgydD%2B4DimHqXT7CnhxPF4of%2Bdn%2FnFNa0tuFon3XVHdcnAdVBo2ZDVk7Go%2B0E8eZ6LkVvt318lMK2fi8oGOqUB7wk2VcrRuh7SnHw6qOIhpDkyAJSKcWPW1nl4pBNm%2B0EumWiwlIGYFzwJNqsHf1K0r6LWuGaJR%2BJ23lAeqPmIHU3LCh4DtcQFqCMVtuFQdUeBAUIOeRaVtDc9xnDDX97iZ5zGNQpBtk%2Fw5pmA4WalnrtUBOeWBZk8jGCOtm1P6wVwrites98gcFHOU8GIatQG4l0I8uq%2B%2F2yHjdJrxdFpca8f8UmN&X-Amz-Signature=21a0f3c06220dfe786bba7c3545d7c5bc39ce65abc1a1dd21269d2f0f341e03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCNU6XY3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFAR4xdIgSw8ogP887viAJpK9MfLxZ%2Frh7UqmpvHkBdnAiEAlzH7O5hDjoo7K5qyBJGLZD3bw%2B%2FiJDUPqGhGAB85zKsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSeNtZIi3QTdewjhCrcA%2BzpiPeLygbajVFemOnQffSQSWzL7IwD%2BgZzW%2BS3M5ldHWPPQk%2F6elOFoAPWF%2BPUCyLPUtKBHeKZIff2E%2FhxMu46mweqj1KgTbPAdBaM8XU1Xry0d8Ur7oRZGw0HJ2jiryGRhXMbIXz5Kubo98LJlZ9MSOqz03mfGWHx4KxOZXb4XJTl%2BDoM58yy%2BcDB%2BeGG%2BE%2F6tHSBFwFNZDxhSpEXgiPzJMMZS%2FM7r%2FkUWDFpNb2ZasiTy0eyTVPQvcA0quRnsumqqp4IcqPf2zZnWb8no0RohleotfFuRvJhToAPmLjjXQ%2BPC1fyOKGsjRGpUPGiJGyC5muu5cJJU3VVmq1%2FeYmr1ZbTfpoS08ufQJZwkxHs1E25ojVjKez1ULto0lzmHYxKQsOs%2B%2FS7v4WpZ3VClqeMvZ73smRXV76Lc0hiJpeeJCgpeOmT75kNJVZrQDS%2F0L33c9XiyZAUpbesTwZwk1pLFKjTY1sIcZGRI1rrB%2BB4F5USTMIPFbcDnI9KZrHKOs6m7UPi%2FY7BpjLYJWF9gyrFhPOiVmaLBP3CEGNWvGZitKhuDtYgydD%2B4DimHqXT7CnhxPF4of%2Bdn%2FnFNa0tuFon3XVHdcnAdVBo2ZDVk7Go%2B0E8eZ6LkVvt318lMK2fi8oGOqUB7wk2VcrRuh7SnHw6qOIhpDkyAJSKcWPW1nl4pBNm%2B0EumWiwlIGYFzwJNqsHf1K0r6LWuGaJR%2BJ23lAeqPmIHU3LCh4DtcQFqCMVtuFQdUeBAUIOeRaVtDc9xnDDX97iZ5zGNQpBtk%2Fw5pmA4WalnrtUBOeWBZk8jGCOtm1P6wVwrites98gcFHOU8GIatQG4l0I8uq%2B%2F2yHjdJrxdFpca8f8UmN&X-Amz-Signature=58a233fd56c0ae944805e6d7040e58751d4fab6150e83592c6e6a45b4b0cae9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

