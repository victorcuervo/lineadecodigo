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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KV45R3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhtxurlluwGcY27qRwsPdjCPVuAqjdu2yHX7cTtD7l6gIgLc5VwaqHX9pmzlKDO4fhL05eYWVIi0FSxdYgesKHzuUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2hNWwEUvxZ31m4EyrcA%2BaqtBCQ4Og32fbH%2BAyFRJwYJ83FXRKEOJbdEsuQDzrwripC5ZfbeYTcY%2F2WfdY%2FYOtRd63hkJ03wSewaZ9IXfPDAOjS6iVShHWcvYLe2CHq8taSNh%2BtkXaC91dLrGG7%2BA%2BVty%2B3ymFyh6%2BshXfFHONDLDuO%2FXHfPvATGACURCExBzA63JC0S0mO7ZhhKvAe8vxO%2BpiDImZJvofHqvfsgAlkMadeEd8xpU7P07MvMavFEdeoZuIxXRqVrp%2Fb1YNSM6q74NhQyDT%2Btpww6DoX%2BUee%2BqpCSl0qKxpEzYdqA9NwEMc3kAClN4ieMCuIksNlzcfZpnWUOC1vFIVk7ZlzOfHCXXA2Q4%2F0UVF1YAv6Zh6pfzQnJncG8Jjxp8WJ5JlGwMbaLYDktmsjNscQQ7NcIar2NzrrZSl7XgAq76MaTYUSibi%2BQGMpNK4Dd%2FP10tECBbboX8BbzbXn%2Bcvu23nLIGX6KWFbALD6I3xR%2F8ZlvazHrtetCpK4u4HNQSVKrj8Mefj13l0mkW3a7XQUwW71pJ8%2Fd69wo6MVQWBJsYs5kE%2FYQgAZ%2Fe%2B%2Fb0w5Qc6uGHBArct7u6OpOdR%2Bn9Kg8wI%2FAj0hEhSFpN5RRRdP2lB0gJn4ljk%2FelXnwju4g6OxMKGfi8oGOqUBtYSS6CI6rZzdSg38MecS4AvvGU2TqqMErKdWoJ4JnMiTXOH65EY2hTFmiyewZ8ixGuKm0LMEqSS6Z4%2BH63FYM7coMqGB8pD3HQkpVIl2Sj7X8ekImBNime2uWtgbbmSIZ0mIKW9jwKbhg1%2FjMNVh%2FF1PZHE4cEJip0STy8gkzOFjPmOHrHO709fZzlL08XRQG9RmdKmLNl76NaiuqCAaPnOnFZAG&X-Amz-Signature=d5dc519bfe3bfdb01c9af9ec11844f0d8a30f5846f917d9782b95aac3027e5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5KV45R3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhtxurlluwGcY27qRwsPdjCPVuAqjdu2yHX7cTtD7l6gIgLc5VwaqHX9pmzlKDO4fhL05eYWVIi0FSxdYgesKHzuUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ2hNWwEUvxZ31m4EyrcA%2BaqtBCQ4Og32fbH%2BAyFRJwYJ83FXRKEOJbdEsuQDzrwripC5ZfbeYTcY%2F2WfdY%2FYOtRd63hkJ03wSewaZ9IXfPDAOjS6iVShHWcvYLe2CHq8taSNh%2BtkXaC91dLrGG7%2BA%2BVty%2B3ymFyh6%2BshXfFHONDLDuO%2FXHfPvATGACURCExBzA63JC0S0mO7ZhhKvAe8vxO%2BpiDImZJvofHqvfsgAlkMadeEd8xpU7P07MvMavFEdeoZuIxXRqVrp%2Fb1YNSM6q74NhQyDT%2Btpww6DoX%2BUee%2BqpCSl0qKxpEzYdqA9NwEMc3kAClN4ieMCuIksNlzcfZpnWUOC1vFIVk7ZlzOfHCXXA2Q4%2F0UVF1YAv6Zh6pfzQnJncG8Jjxp8WJ5JlGwMbaLYDktmsjNscQQ7NcIar2NzrrZSl7XgAq76MaTYUSibi%2BQGMpNK4Dd%2FP10tECBbboX8BbzbXn%2Bcvu23nLIGX6KWFbALD6I3xR%2F8ZlvazHrtetCpK4u4HNQSVKrj8Mefj13l0mkW3a7XQUwW71pJ8%2Fd69wo6MVQWBJsYs5kE%2FYQgAZ%2Fe%2B%2Fb0w5Qc6uGHBArct7u6OpOdR%2Bn9Kg8wI%2FAj0hEhSFpN5RRRdP2lB0gJn4ljk%2FelXnwju4g6OxMKGfi8oGOqUBtYSS6CI6rZzdSg38MecS4AvvGU2TqqMErKdWoJ4JnMiTXOH65EY2hTFmiyewZ8ixGuKm0LMEqSS6Z4%2BH63FYM7coMqGB8pD3HQkpVIl2Sj7X8ekImBNime2uWtgbbmSIZ0mIKW9jwKbhg1%2FjMNVh%2FF1PZHE4cEJip0STy8gkzOFjPmOHrHO709fZzlL08XRQG9RmdKmLNl76NaiuqCAaPnOnFZAG&X-Amz-Signature=d5f4e7a89e70bab9fbbac97c1175539ac3a272e3f1f000f038752bb153830914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

