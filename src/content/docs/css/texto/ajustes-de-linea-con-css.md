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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25L26TJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmcYyGYOR%2BodccVUEilF3DHmaHuzLtBMEOn7vZmKdn3AiEA%2FtpgIrUJKOMaxdrGY8MrauNJB4rzAGGmPf5QegPx8WQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNU20wPBYUhF0iVnkSrcA169JDrWDTcZ%2Bz8wdMkQ5mdTcJaE5qh1ezRQQFx3XjYazjMovPwgnHdogVJHAZjdH5ujHqunN%2FtPS52%2BxiM8X2HOs%2BHJWSmf29Xt8h2cNOcBqU%2By%2FVEXdqnrd%2BuBt%2B2A4xoASG9L7SZGhfmirblXvWlSxTm6sUOwpEPZcVA3N2aMATHcFXxJo9AOkH4oIwtB96xT7UMs9qqkdEpMM6qz0Qy7LVTVp0t3iWRxtZOxAp%2BjYgN2bqupLv%2BGkP15NkaKtyVrVpQvYjxG41%2B6o3yiClOPjPAZm5RtPUX8E3LyJs5CvQLwOfZxG13fQMNyUhdZPtWz%2F4B5Tcp29XVuOf4UUYuXmrqMaMInItoL9FD%2FJabovhYmJulmNkRA07%2BJMAG%2BMwmqVseEul8EzvTAQkwoqfsygaN2kRS1oKa3I%2FDJYX99v6GjY3LI852m5OpnRVn6PpVFZ%2FnPyTKYSQOjdJyQZHthdeoWM%2B%2BQa5v94myYGZEEaBZRE9T1zKPJv7nI%2FOnKw9%2FPSkoHUwMxLvq43Ue2KqNM5URRgapEOsXG%2Bo6dnJUxAqF08rRQ3qjR37rA29XcUqKc40OZdL%2F2yjMon0MGZaEQ7KfxjuEq7V1r2BzexfNjadTXB6sMXTg2fNCQMITfh8oGOqUBljeTHKHnQmP480aePmcDA3FpY8feyJTALcHuRs7Bhc2SOdlYAld%2BWreeO7VGB3xnhG4DTLjsaYBp14YFKB%2BjoF%2FkZ2dV6XG7JvF6gVZjbr7ENlL8TFX1cE7t2WJumEYLxRK1Y%2Bi8nflPgv1gT3WMiDotFF1vownXLZuTB3C5Z%2B6RstRIeRCtvDIPGsPY7dkfXwkYBo1Ey%2FQDo8Oy7jvZFcfa79kC&X-Amz-Signature=6eb5fa45e533343fb31fdae56abaeff80f73cf8f38673ddb1e06ba22c31f54e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z25L26TJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmcYyGYOR%2BodccVUEilF3DHmaHuzLtBMEOn7vZmKdn3AiEA%2FtpgIrUJKOMaxdrGY8MrauNJB4rzAGGmPf5QegPx8WQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDNU20wPBYUhF0iVnkSrcA169JDrWDTcZ%2Bz8wdMkQ5mdTcJaE5qh1ezRQQFx3XjYazjMovPwgnHdogVJHAZjdH5ujHqunN%2FtPS52%2BxiM8X2HOs%2BHJWSmf29Xt8h2cNOcBqU%2By%2FVEXdqnrd%2BuBt%2B2A4xoASG9L7SZGhfmirblXvWlSxTm6sUOwpEPZcVA3N2aMATHcFXxJo9AOkH4oIwtB96xT7UMs9qqkdEpMM6qz0Qy7LVTVp0t3iWRxtZOxAp%2BjYgN2bqupLv%2BGkP15NkaKtyVrVpQvYjxG41%2B6o3yiClOPjPAZm5RtPUX8E3LyJs5CvQLwOfZxG13fQMNyUhdZPtWz%2F4B5Tcp29XVuOf4UUYuXmrqMaMInItoL9FD%2FJabovhYmJulmNkRA07%2BJMAG%2BMwmqVseEul8EzvTAQkwoqfsygaN2kRS1oKa3I%2FDJYX99v6GjY3LI852m5OpnRVn6PpVFZ%2FnPyTKYSQOjdJyQZHthdeoWM%2B%2BQa5v94myYGZEEaBZRE9T1zKPJv7nI%2FOnKw9%2FPSkoHUwMxLvq43Ue2KqNM5URRgapEOsXG%2Bo6dnJUxAqF08rRQ3qjR37rA29XcUqKc40OZdL%2F2yjMon0MGZaEQ7KfxjuEq7V1r2BzexfNjadTXB6sMXTg2fNCQMITfh8oGOqUBljeTHKHnQmP480aePmcDA3FpY8feyJTALcHuRs7Bhc2SOdlYAld%2BWreeO7VGB3xnhG4DTLjsaYBp14YFKB%2BjoF%2FkZ2dV6XG7JvF6gVZjbr7ENlL8TFX1cE7t2WJumEYLxRK1Y%2Bi8nflPgv1gT3WMiDotFF1vownXLZuTB3C5Z%2B6RstRIeRCtvDIPGsPY7dkfXwkYBo1Ey%2FQDo8Oy7jvZFcfa79kC&X-Amz-Signature=cbca8086a4bd43b028e688a6ba10066bd5976f5a8c2827817860fcf5e24daeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

