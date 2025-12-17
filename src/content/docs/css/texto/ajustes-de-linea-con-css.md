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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3KC3GS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BnNxvEbqgETZbWUTM%2FjPBUfDR%2Fvx3vc%2BqHwEfWXuSigIgYgbtMbwDwkjf1MgicmFuL6wBhevqx0QbzJ2InLwarGAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC3XHddvOrKMJWZcgyrcA1hwR0j1xYdEPBVBYFqkVFOWiYsqRLYcZTrja5mJsLy2ZWaLWdfIL6uxSWVlbY%2FytqqfSNCxWEquTquNi30tuba7mp7Wuw5aKbB6i3xsaaY2Z4N4oE3G94SYo3VD8HkXSVzRZ4h1StzvTaKVChyK2NlIbgoJPhr3zUWnbN6tJdt3KFwH84OdlGtcGQC0j%2F7EHh1%2Ft4sM3B7csv1bp9lMqGvPOWUvxkDCjJj%2F0tNvq8A4F%2B80c5UNR8odsfG%2FD2fFdHeBPQTdhu6lyuV4TYZn6GWy%2FEcsRHCruX44BePeN%2BSq6lqp%2FiYJHvZDispGqYWatnh48lnU5CCThsXbv0lnnOx9f8MMhAHTc0W33ujttwRiLyOUf%2FeZb4to8SbgUqDtOKWgg4PSwHcJeA9MCd3e8JpQrfvfrq%2BLoxIKj4ldYpPj0s0CNwjIsCpY0d3lyZ01YD8M83YN7YY3j2A06ecsUEI0i0x%2FPAUzZHVI2PG8%2B20WL%2F0DorYwsT8CB08FC30AxMosdN0ZXTHeLUB4t5ls7lj%2BaGS8hHf7L8F7KKsoXQotxfCb6v0Gn0bbFcw0t1b9fiwuTq1XLXNMm1HsbvF5u9IfLbncqg3DEMylMtx%2F2UwxbbCQJXUx%2B9VzsQS%2FMLScicoGOqUB7HH8TX5WNdW0KkEcJebuD8lMsWe0lvnrnBYmaNFmDCPz69eJNlQBwZWX45psW7%2FPgpFGYCtBALS%2FZwng2Vz5YROkWhQYGMDhnl5wyHhqpOAG7Inpod%2BStryzgaTVhg5xh6JAvLQqlDnkQz0Kclk9zYlHcstTJKvwQd%2FzIFg7kZ5JqyKfZzXrFV%2F%2FoasY6PXdbUumjWluFrPLVykZmV%2F6vceWUTLF&X-Amz-Signature=d6ca7f0cddeb165a63c12b41a2c559fcf80eb21c56972b88e4f3a28738774a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663H3KC3GS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BnNxvEbqgETZbWUTM%2FjPBUfDR%2Fvx3vc%2BqHwEfWXuSigIgYgbtMbwDwkjf1MgicmFuL6wBhevqx0QbzJ2InLwarGAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDC3XHddvOrKMJWZcgyrcA1hwR0j1xYdEPBVBYFqkVFOWiYsqRLYcZTrja5mJsLy2ZWaLWdfIL6uxSWVlbY%2FytqqfSNCxWEquTquNi30tuba7mp7Wuw5aKbB6i3xsaaY2Z4N4oE3G94SYo3VD8HkXSVzRZ4h1StzvTaKVChyK2NlIbgoJPhr3zUWnbN6tJdt3KFwH84OdlGtcGQC0j%2F7EHh1%2Ft4sM3B7csv1bp9lMqGvPOWUvxkDCjJj%2F0tNvq8A4F%2B80c5UNR8odsfG%2FD2fFdHeBPQTdhu6lyuV4TYZn6GWy%2FEcsRHCruX44BePeN%2BSq6lqp%2FiYJHvZDispGqYWatnh48lnU5CCThsXbv0lnnOx9f8MMhAHTc0W33ujttwRiLyOUf%2FeZb4to8SbgUqDtOKWgg4PSwHcJeA9MCd3e8JpQrfvfrq%2BLoxIKj4ldYpPj0s0CNwjIsCpY0d3lyZ01YD8M83YN7YY3j2A06ecsUEI0i0x%2FPAUzZHVI2PG8%2B20WL%2F0DorYwsT8CB08FC30AxMosdN0ZXTHeLUB4t5ls7lj%2BaGS8hHf7L8F7KKsoXQotxfCb6v0Gn0bbFcw0t1b9fiwuTq1XLXNMm1HsbvF5u9IfLbncqg3DEMylMtx%2F2UwxbbCQJXUx%2B9VzsQS%2FMLScicoGOqUB7HH8TX5WNdW0KkEcJebuD8lMsWe0lvnrnBYmaNFmDCPz69eJNlQBwZWX45psW7%2FPgpFGYCtBALS%2FZwng2Vz5YROkWhQYGMDhnl5wyHhqpOAG7Inpod%2BStryzgaTVhg5xh6JAvLQqlDnkQz0Kclk9zYlHcstTJKvwQd%2FzIFg7kZ5JqyKfZzXrFV%2F%2FoasY6PXdbUumjWluFrPLVykZmV%2F6vceWUTLF&X-Amz-Signature=d03eba5eda5ee69db6b8ccf53e6c3fd4194f30c2491db02db0222ec3c2da0dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

