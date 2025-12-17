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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4IRNQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC17IjCFpAzaGF7vBazTLhhOCMqucTyHLxS0l6z6ZNDmAiBObFtVpcmMkY%2BMiaCHGO4k7FAullXZt2oBkeq%2FugCG5ir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQNgoZwbCeMfS6fEfKtwDPbPGlaFbs6jRBN2ekiAeRmaC5HLFR9AZXk6K2SVwqZQ%2F%2B8Ite5kfq%2FfMuob3ipOPxGbw2ne2xvqv8YAyiz3HVk2K45HsVuu2tHj0bxhjLLGLq5WE%2Fga4xPGS5AJPLm4CMaTrYXbXSzh5ZR%2BtvO1JLkUCw%2FbpNsoqdvHkoVvXLl%2BcgE3aT%2BfFRxH6PBD%2BlsO0JX7YAY5LGYgBy8%2FaTInn4q1xHhy90Me%2FP0mmlueJ4IJeF%2FooVEEtecC8HovD0IdvHHxJ1gszvAEvNTnn%2BAhcUcfHpjvP1rsStJBhNcEyjPP4ReXvLrdL2%2FhdH%2FYmKG6%2BT4JbBeOqRFr3ivpkfCgJO6uhAsaBugjEKQSqyD3P76i4QGRs33bcfTgX25BK1ptcJ7tRvhajfkVz1vsf4N829TgYbaYDaMtIAwNt%2BbeAkj6Z7xszgjnFtrEjxwxV8YQ3EuyYpIJT8A5xCSQ36sOXY9NOx6XlBVQZIkIk%2FbYBIiHi%2BaH11vW%2BX4UHhHWSuzQMW0wZlmCjcVCHHvYetQvvH8DZpbMAhx0yxrOAsnvPrzkvspsHvVIZzgiSjr%2F9YP5WnAGHTPrTzm5g0t9hTgb9d1cCjQTRFNjkVfYh2hRxETf%2FA32oz9EzJovyW2Iw%2FLKIygY6pgFQcg8c%2BEWPpWuNQEPe0FKwWtyeNWi1Oi4fCJiEk1mJbxMBU19GyAPWCNmZA9QDMIGFdLni0Jfj4azALDrAaqEvXLk8Bt2VqLZ%2B4fqQ7xZDix6r2dXuGPfPXHl%2BuG%2Ba7s2DER7eZxKiWMIfU9BPe5tKWxxJXu%2FYMzIIqMxXTlbzGfg2zHm5Pco1KmbImUYqOI8vy8hXXO7TnmhY2pX%2FJkRq9GD%2BUEpB&X-Amz-Signature=d9e9b0cc646e8eab2b66c0f2650615fc6f235affad3f55a64230dd46a331b6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X4IRNQS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC17IjCFpAzaGF7vBazTLhhOCMqucTyHLxS0l6z6ZNDmAiBObFtVpcmMkY%2BMiaCHGO4k7FAullXZt2oBkeq%2FugCG5ir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMQNgoZwbCeMfS6fEfKtwDPbPGlaFbs6jRBN2ekiAeRmaC5HLFR9AZXk6K2SVwqZQ%2F%2B8Ite5kfq%2FfMuob3ipOPxGbw2ne2xvqv8YAyiz3HVk2K45HsVuu2tHj0bxhjLLGLq5WE%2Fga4xPGS5AJPLm4CMaTrYXbXSzh5ZR%2BtvO1JLkUCw%2FbpNsoqdvHkoVvXLl%2BcgE3aT%2BfFRxH6PBD%2BlsO0JX7YAY5LGYgBy8%2FaTInn4q1xHhy90Me%2FP0mmlueJ4IJeF%2FooVEEtecC8HovD0IdvHHxJ1gszvAEvNTnn%2BAhcUcfHpjvP1rsStJBhNcEyjPP4ReXvLrdL2%2FhdH%2FYmKG6%2BT4JbBeOqRFr3ivpkfCgJO6uhAsaBugjEKQSqyD3P76i4QGRs33bcfTgX25BK1ptcJ7tRvhajfkVz1vsf4N829TgYbaYDaMtIAwNt%2BbeAkj6Z7xszgjnFtrEjxwxV8YQ3EuyYpIJT8A5xCSQ36sOXY9NOx6XlBVQZIkIk%2FbYBIiHi%2BaH11vW%2BX4UHhHWSuzQMW0wZlmCjcVCHHvYetQvvH8DZpbMAhx0yxrOAsnvPrzkvspsHvVIZzgiSjr%2F9YP5WnAGHTPrTzm5g0t9hTgb9d1cCjQTRFNjkVfYh2hRxETf%2FA32oz9EzJovyW2Iw%2FLKIygY6pgFQcg8c%2BEWPpWuNQEPe0FKwWtyeNWi1Oi4fCJiEk1mJbxMBU19GyAPWCNmZA9QDMIGFdLni0Jfj4azALDrAaqEvXLk8Bt2VqLZ%2B4fqQ7xZDix6r2dXuGPfPXHl%2BuG%2Ba7s2DER7eZxKiWMIfU9BPe5tKWxxJXu%2FYMzIIqMxXTlbzGfg2zHm5Pco1KmbImUYqOI8vy8hXXO7TnmhY2pX%2FJkRq9GD%2BUEpB&X-Amz-Signature=5667bafda79089ad969a52ac1ef39ae2a828b1e6124b0c10b2eb0c438776bb41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

