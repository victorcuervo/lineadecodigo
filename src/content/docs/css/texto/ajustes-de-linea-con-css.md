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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LYZKND%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOVxBwBKSOaFmnKvl4Q1eHjBBSO0RNTrlmkxciBuRQdAiAigdybxXV%2B82zC0aKTWuemKAtEQTOfyBRApPoifqPy5Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMfJMvE8khqx9OuOEZKtwDOlXRbXKTzQkFwPZE9Y%2BaFwU%2BS%2BKmxmE42DFgQIj5Nl1U7mlvFSa24Poesg7CkgYj%2BAWRugn3lbUGSNS9fv4b%2B9XQSKrYa2M8be2%2BQnKnzw09zT7YIxGt9PsertKLI3qbFT9ZkTstwlnXxpj86%2FyQeMOXgmWWCSfvYMxI2EpsxBwNxNgZqZIE2Ed8n%2FUU7Hp%2B7SVDvCrX%2BEKog82tpsrKUcgJJLO8KWOkUUcJFrK%2BnIaqKlqNrh9YFHb7Er8BuXf3mZSc7As8Yd9tJ3INQsUO8CPAP0wNbdGp%2FjxIMbmlxNSMVFaSXZ6helnMOWSa5RYSjvsRYTtKKGGmk%2Ftn%2BwGpi0F2Sb9GcljpoYSDGw4BokMTTuIAYJLAhNyZ3ifIBi022IwS%2F28ssHg5vhvqrMz08antR7BvYrCez5fHwADLj2zdA%2BWPvofPzbUBKJ1tA%2BB4BVFSch%2FATp3Y6SIQzpMstydlsGBluW0DzU%2BWmB3%2BjeXEMR72O6HonvHU5npnZcUaJQn2m%2FQsAv9vUohkHnptIo36y7kaLSVC%2FeC7sXFYHfW03hkBvuHjLaMaBMeErTi%2F6hjvrJDi0t%2FBiDClQTl2%2FSHDFVlE%2BfNeASarjZfER4I2rTwDzMPV1xdClcowoZyJygY6pgF%2ByvOI5dvfieWCg8c%2B8u090efT1QA0ORUx%2F%2Flmof%2FOQrf1HQOGoLYDjpa4n9ovYgDf9Sqi%2BdzSLYe1OfoQYWL4TPzqL2KBbz8FoPEiNT66pYqyI6EYN6XXbhwVxHODGu5YUnvsQHkU5kGqHMYpRQKN8bprs3xrz%2BJLaxid5rr01FC9z4HVfnFXQctoWNaqDvKJtcdWl2j6T53YDAxfgcFRu7LCIC96&X-Amz-Signature=1b4572de228e1039fa6ff173a76c63e88c4d544e2332ab8cf3ea06f7d741a5b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6LYZKND%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOVxBwBKSOaFmnKvl4Q1eHjBBSO0RNTrlmkxciBuRQdAiAigdybxXV%2B82zC0aKTWuemKAtEQTOfyBRApPoifqPy5Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMfJMvE8khqx9OuOEZKtwDOlXRbXKTzQkFwPZE9Y%2BaFwU%2BS%2BKmxmE42DFgQIj5Nl1U7mlvFSa24Poesg7CkgYj%2BAWRugn3lbUGSNS9fv4b%2B9XQSKrYa2M8be2%2BQnKnzw09zT7YIxGt9PsertKLI3qbFT9ZkTstwlnXxpj86%2FyQeMOXgmWWCSfvYMxI2EpsxBwNxNgZqZIE2Ed8n%2FUU7Hp%2B7SVDvCrX%2BEKog82tpsrKUcgJJLO8KWOkUUcJFrK%2BnIaqKlqNrh9YFHb7Er8BuXf3mZSc7As8Yd9tJ3INQsUO8CPAP0wNbdGp%2FjxIMbmlxNSMVFaSXZ6helnMOWSa5RYSjvsRYTtKKGGmk%2Ftn%2BwGpi0F2Sb9GcljpoYSDGw4BokMTTuIAYJLAhNyZ3ifIBi022IwS%2F28ssHg5vhvqrMz08antR7BvYrCez5fHwADLj2zdA%2BWPvofPzbUBKJ1tA%2BB4BVFSch%2FATp3Y6SIQzpMstydlsGBluW0DzU%2BWmB3%2BjeXEMR72O6HonvHU5npnZcUaJQn2m%2FQsAv9vUohkHnptIo36y7kaLSVC%2FeC7sXFYHfW03hkBvuHjLaMaBMeErTi%2F6hjvrJDi0t%2FBiDClQTl2%2FSHDFVlE%2BfNeASarjZfER4I2rTwDzMPV1xdClcowoZyJygY6pgF%2ByvOI5dvfieWCg8c%2B8u090efT1QA0ORUx%2F%2Flmof%2FOQrf1HQOGoLYDjpa4n9ovYgDf9Sqi%2BdzSLYe1OfoQYWL4TPzqL2KBbz8FoPEiNT66pYqyI6EYN6XXbhwVxHODGu5YUnvsQHkU5kGqHMYpRQKN8bprs3xrz%2BJLaxid5rr01FC9z4HVfnFXQctoWNaqDvKJtcdWl2j6T53YDAxfgcFRu7LCIC96&X-Amz-Signature=6a918c3e9992b64b210f1a8b5b9d4237e5509fd07d2506e2f6253dde4168c015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

