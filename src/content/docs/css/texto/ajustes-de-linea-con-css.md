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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG4XAIB6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt1D7ZQkZp82GMn8WlmdvdTaDCoPQuVM5%2FV3sPwU2zfwIhALSxJPP6fiyjVPzGGabE7RExzwrG54lW0MuIrig%2BAkIXKv8DCHMQABoMNjM3NDIzMTgzODA1IgyH8WVjx8leV4jOxhgq3AM5TKhZSDdNUEJ%2B2gsh3cbXqUH8sdsuYHeSxeXzG1wWJFY9xVZiEd79hpD%2FFS84B8ebX40XyfhSopSWyLJmJlCcxxXjArtRb4R1PrV4j5oeR%2FqDpAnJWL1h06Ll5hcWGQ%2Bn%2FNBk%2BT3k2BlNc4XWwx5WSIbmye8aeMauXfAsDIAdF03qFgHZSEy6xEljzt7Z8CERDwvzMsuLg8Cu0ZR312HWikxHRnBqf7Z%2Fv6w39wRLKPydCnKyhqQD95%2BSPo%2FjPvsccqtVrxzlmDm7UGEdnltQXO4bfnXvOKaJ9aT%2FAygbcoZ3yoKYIF3%2FB3kd2KfrnU%2FFmvbYbJMeNcRSArl2YfZjsbSGKs03zVQJl%2FHvOUGaaT8%2Bxrw65Qfj1treRkkZaJ6X23zAXvmkaja%2Bmgo%2FxILLhRaO2Jcu9m5%2FaKRFwIow4%2FUML15LdZA2%2FbBGVVOnkkPBPL5QcpyBVHVKaebn%2BwlUO6tnwpIbqmZIRMlgZUTePnKl9EDVspnBUA%2FYoOQo%2BW0oI7PVwfYsAP%2FQSPvn3ARbklJUO8pRD2JhwhwQ6jLuTicPCeU%2FPJxRNsF3tSzdYoDmUe8YHfNMFlKt2rTI%2FDyW4OihHkPVIwjP0GGCzwCH%2Fqvo4CuQGnENWrRTmDD7lojKBjqkAYqbbtZ2mYJn%2B7yMoT1XGCxHk39v%2Bud%2Fc%2FhdPlZXbJIyJw9cvp31x57ZbKXgskUhLuFdMxYm9LypKXez65eR1QWyDk2XOlo5zsYNm8UiOTn3gPZn7WE%2B%2BEYsgke5s8O%2Bc8DAHFM0VHmMzMk6xP9FDOAsqldh6IPe7Kic8yRfoaAYyBfm1QSI8kNY3vargaGm1bHS144gcEJMLBMrifVhcWHnzwC%2F&X-Amz-Signature=2fe5a80d8053857c9eb19ea0ae464ad465b2bbbc94e81a32bef75ee6a38a59b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG4XAIB6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt1D7ZQkZp82GMn8WlmdvdTaDCoPQuVM5%2FV3sPwU2zfwIhALSxJPP6fiyjVPzGGabE7RExzwrG54lW0MuIrig%2BAkIXKv8DCHMQABoMNjM3NDIzMTgzODA1IgyH8WVjx8leV4jOxhgq3AM5TKhZSDdNUEJ%2B2gsh3cbXqUH8sdsuYHeSxeXzG1wWJFY9xVZiEd79hpD%2FFS84B8ebX40XyfhSopSWyLJmJlCcxxXjArtRb4R1PrV4j5oeR%2FqDpAnJWL1h06Ll5hcWGQ%2Bn%2FNBk%2BT3k2BlNc4XWwx5WSIbmye8aeMauXfAsDIAdF03qFgHZSEy6xEljzt7Z8CERDwvzMsuLg8Cu0ZR312HWikxHRnBqf7Z%2Fv6w39wRLKPydCnKyhqQD95%2BSPo%2FjPvsccqtVrxzlmDm7UGEdnltQXO4bfnXvOKaJ9aT%2FAygbcoZ3yoKYIF3%2FB3kd2KfrnU%2FFmvbYbJMeNcRSArl2YfZjsbSGKs03zVQJl%2FHvOUGaaT8%2Bxrw65Qfj1treRkkZaJ6X23zAXvmkaja%2Bmgo%2FxILLhRaO2Jcu9m5%2FaKRFwIow4%2FUML15LdZA2%2FbBGVVOnkkPBPL5QcpyBVHVKaebn%2BwlUO6tnwpIbqmZIRMlgZUTePnKl9EDVspnBUA%2FYoOQo%2BW0oI7PVwfYsAP%2FQSPvn3ARbklJUO8pRD2JhwhwQ6jLuTicPCeU%2FPJxRNsF3tSzdYoDmUe8YHfNMFlKt2rTI%2FDyW4OihHkPVIwjP0GGCzwCH%2Fqvo4CuQGnENWrRTmDD7lojKBjqkAYqbbtZ2mYJn%2B7yMoT1XGCxHk39v%2Bud%2Fc%2FhdPlZXbJIyJw9cvp31x57ZbKXgskUhLuFdMxYm9LypKXez65eR1QWyDk2XOlo5zsYNm8UiOTn3gPZn7WE%2B%2BEYsgke5s8O%2Bc8DAHFM0VHmMzMk6xP9FDOAsqldh6IPe7Kic8yRfoaAYyBfm1QSI8kNY3vargaGm1bHS144gcEJMLBMrifVhcWHnzwC%2F&X-Amz-Signature=a7952d3c781810b3db7414c4fd6bccadee8197c97d0ceede605ed55583db365a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

