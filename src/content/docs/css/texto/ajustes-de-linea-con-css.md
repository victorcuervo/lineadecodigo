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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RXFY2V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJ0Zw2VpQPooeXukbQtubNP%2Bx%2FP7bZbGLp4%2FP58FUqlAiEA8yUb8E5ikFW6VMeRTjSKLi75afmtMtcpSgI9ZgJMqFkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOauTNmcZv%2FSBPEwyCrcA8JpzA9z59UB3sWtKOl1yc5HPyx3w6nhJOF5gY13HV5nY6dVWFEpwR65386BVyXTD2l3EQEOW%2FCAt4uyIzHWbdxHeKqZC7xNkrZFtb988tfkyLoKvMHqR23mtC13eFlkzbADcCQqIlcXfSRAtlNPYb2NtcQEg66xngSGS9i3xFzySsAjtigyLvEgAhbi6FKvtLmk2NTMDJ9G3LMDS9VMknZkxo9DAEyeXu1caiLJ60VekupgoprIbNPO7Q9C5HVeS4nzn4R7AXvnt4YtjKWip2T%2FLTiz6%2FfrG9B6MD0M3xEsEzfq36JVHjpHFeXYZ75nsKlJqfzEgXZTt88LCNj94lRYpz3j69f4LEPUdHF9gFnfjGD0%2Fnilw8%2FR0pc4M6gFmjOQB7Lerq3Na%2ByBqUF3mtK2%2F5vJcD0QIfnWQq77g13gGwn0ARxEAoKORmfky5NO3ckTCkzkV7VJTEr%2FeTQRji6d2y3pXxLZsaamSTBp6QSTMjw%2Br54RQ4E1Od%2FOshL6TVfd1q0wsco%2Fc19rJjflpiTAE61TQv8jGBxYoVgJY%2B6yVA%2BkSWCOH3EKNxel7vvX%2Bq8paBF62PTvYbwUxHqn2nDZg1LINK2xo2LWb%2B1uRWKc8QurGXV219o70llWMJWPisoGOqUBOGmGVHwJkh89NoXMJvXogvXxqsXjvJEDn%2FI72EG6P2eGc3vZHUhYuYVrtwR%2B2BkIrcd11D7hzh%2BeJ4yVORNgH07QsI4tDr5q8p71fVeiRZ6p%2FLxBCF3IMcm3UkyhTF5aHMbJyS3%2FJ0RaTChgLXlN9%2BIx9Ooth%2FrKBcCpv89SZ1c6aqTvwPGApAOm7ugv3%2BZEYaY%2FcFZNr4CUWZdhVpOxHEg6LtUh&X-Amz-Signature=0a91fc819dbbbe27303093cfb9d4bd50ce6ea5d4ed85cda24cc80ad5e3d0ab34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2RXFY2V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICJ0Zw2VpQPooeXukbQtubNP%2Bx%2FP7bZbGLp4%2FP58FUqlAiEA8yUb8E5ikFW6VMeRTjSKLi75afmtMtcpSgI9ZgJMqFkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDOauTNmcZv%2FSBPEwyCrcA8JpzA9z59UB3sWtKOl1yc5HPyx3w6nhJOF5gY13HV5nY6dVWFEpwR65386BVyXTD2l3EQEOW%2FCAt4uyIzHWbdxHeKqZC7xNkrZFtb988tfkyLoKvMHqR23mtC13eFlkzbADcCQqIlcXfSRAtlNPYb2NtcQEg66xngSGS9i3xFzySsAjtigyLvEgAhbi6FKvtLmk2NTMDJ9G3LMDS9VMknZkxo9DAEyeXu1caiLJ60VekupgoprIbNPO7Q9C5HVeS4nzn4R7AXvnt4YtjKWip2T%2FLTiz6%2FfrG9B6MD0M3xEsEzfq36JVHjpHFeXYZ75nsKlJqfzEgXZTt88LCNj94lRYpz3j69f4LEPUdHF9gFnfjGD0%2Fnilw8%2FR0pc4M6gFmjOQB7Lerq3Na%2ByBqUF3mtK2%2F5vJcD0QIfnWQq77g13gGwn0ARxEAoKORmfky5NO3ckTCkzkV7VJTEr%2FeTQRji6d2y3pXxLZsaamSTBp6QSTMjw%2Br54RQ4E1Od%2FOshL6TVfd1q0wsco%2Fc19rJjflpiTAE61TQv8jGBxYoVgJY%2B6yVA%2BkSWCOH3EKNxel7vvX%2Bq8paBF62PTvYbwUxHqn2nDZg1LINK2xo2LWb%2B1uRWKc8QurGXV219o70llWMJWPisoGOqUBOGmGVHwJkh89NoXMJvXogvXxqsXjvJEDn%2FI72EG6P2eGc3vZHUhYuYVrtwR%2B2BkIrcd11D7hzh%2BeJ4yVORNgH07QsI4tDr5q8p71fVeiRZ6p%2FLxBCF3IMcm3UkyhTF5aHMbJyS3%2FJ0RaTChgLXlN9%2BIx9Ooth%2FrKBcCpv89SZ1c6aqTvwPGApAOm7ugv3%2BZEYaY%2FcFZNr4CUWZdhVpOxHEg6LtUh&X-Amz-Signature=73d329b527ea39f68630c35f2538e2f990834f08ba8359dd72f5ab7f1e924c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

