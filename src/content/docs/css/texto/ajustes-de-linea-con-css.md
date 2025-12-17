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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBMEJOGQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuslHxrz%2FfogOnX1lsbGHS%2FErhqPV1LU4%2FGmB9bi9bdgIhAJeH9%2FvSdFcvBaqho%2FcIZimtFhm4cMwaT%2BqN7J6xAsJfKv8DCHsQABoMNjM3NDIzMTgzODA1IgwU8MUJXJYNbELAmpYq3AMP5jZ6O4mFJ83bnC9aHHh77wfhnepxpHATjDGkBPJTaj5NC2Qt%2BUTBy6EnVuMEWkKm0YZfChFj79D9swyAjy0KUB5Or13WXNMZDkOzRvZ5neGKrw7Uln2GKn5bWH%2F4iemHBr3Xi4x%2BG58zadIexDNoe87OvLQe4OfQzDy%2BU2RKRJdqW62H%2Fm9aa5ohEHyAVQucT9vdZuz9l7rlLTXFq6QhJOH01imc5a3cjxIGJ5Q369Ylw0rIr5htMZ0yhgn8943k%2BCQ7%2BquWH0Xd%2BZB239GGvC8og0e0MLN%2BpMJU%2Betku8erW9Kp9uqvqQn%2Bk2hw02iZ0tGq%2BxRTev5JLYKWP%2Flteb5%2BGQ9uRqzY3H9y3jZiVORlDcA0bUGYzgaKvU9EGSeE0pBe8yBftceyK2wk0B5I3CiWsYIYWRQkpkcNCc%2F5zrpL2LUQcBOKIs1fIpOUlY0UT61k8EBu24pXaaQpqwAb9mMT0ij5tttR%2FglKZm5gH3LmGfOI6M%2BibTeVM95baCq7kSxhzyfzbInyaMhWtBHpOJ110UTMH2RC3DZuEPJo9VKbpRmxDXKIKusMyTYVeiV7U2BhKCJ2cBUlcsbi89eZvnXlPwbb8XhZTZACrnz%2FeMQA9PjYoCxFMzuSXDCS8YnKBjqkAaAUTA9T%2FZWssgQujAjpdIF7pPzFw9zSu7TCOjedl9BMXvMaWLTWJ5%2B1DpcfiZAcjpT4lt01SqE9suvnVlAp2gGutt6Q3HrAQFps3tCjoHWh5IUv7TIjnxmqkm2BRo3rymcdQC%2F7olj7tXZxV%2FLim1B6CojJmnx0vSqbwmjU7ptsQzAXTn12aV7CUcAW21sKjSHgLL90HoeFXu1EZKGXSr1Yf0bP&X-Amz-Signature=b59b8dffdb918d7079e5552640dda70afcc4e53108d94d0854076554fbf21a65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBMEJOGQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuslHxrz%2FfogOnX1lsbGHS%2FErhqPV1LU4%2FGmB9bi9bdgIhAJeH9%2FvSdFcvBaqho%2FcIZimtFhm4cMwaT%2BqN7J6xAsJfKv8DCHsQABoMNjM3NDIzMTgzODA1IgwU8MUJXJYNbELAmpYq3AMP5jZ6O4mFJ83bnC9aHHh77wfhnepxpHATjDGkBPJTaj5NC2Qt%2BUTBy6EnVuMEWkKm0YZfChFj79D9swyAjy0KUB5Or13WXNMZDkOzRvZ5neGKrw7Uln2GKn5bWH%2F4iemHBr3Xi4x%2BG58zadIexDNoe87OvLQe4OfQzDy%2BU2RKRJdqW62H%2Fm9aa5ohEHyAVQucT9vdZuz9l7rlLTXFq6QhJOH01imc5a3cjxIGJ5Q369Ylw0rIr5htMZ0yhgn8943k%2BCQ7%2BquWH0Xd%2BZB239GGvC8og0e0MLN%2BpMJU%2Betku8erW9Kp9uqvqQn%2Bk2hw02iZ0tGq%2BxRTev5JLYKWP%2Flteb5%2BGQ9uRqzY3H9y3jZiVORlDcA0bUGYzgaKvU9EGSeE0pBe8yBftceyK2wk0B5I3CiWsYIYWRQkpkcNCc%2F5zrpL2LUQcBOKIs1fIpOUlY0UT61k8EBu24pXaaQpqwAb9mMT0ij5tttR%2FglKZm5gH3LmGfOI6M%2BibTeVM95baCq7kSxhzyfzbInyaMhWtBHpOJ110UTMH2RC3DZuEPJo9VKbpRmxDXKIKusMyTYVeiV7U2BhKCJ2cBUlcsbi89eZvnXlPwbb8XhZTZACrnz%2FeMQA9PjYoCxFMzuSXDCS8YnKBjqkAaAUTA9T%2FZWssgQujAjpdIF7pPzFw9zSu7TCOjedl9BMXvMaWLTWJ5%2B1DpcfiZAcjpT4lt01SqE9suvnVlAp2gGutt6Q3HrAQFps3tCjoHWh5IUv7TIjnxmqkm2BRo3rymcdQC%2F7olj7tXZxV%2FLim1B6CojJmnx0vSqbwmjU7ptsQzAXTn12aV7CUcAW21sKjSHgLL90HoeFXu1EZKGXSr1Yf0bP&X-Amz-Signature=ebd06c95903a4b98eadccbadc383915afdca9a93ab3b44cd8d0e6a5eb7eac3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

