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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHEFQJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWo4t9%2BuGpUjlaeQx6dYKgYB1Z6LV6jyttKZerOMkDZQIgRk7yEBT6IHdUnyDfM5LRurt6xCzAzsL5R2ZcGlxbJzEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDNH3Vu6SUAdU5heCyrcA0moY7veATh9H4OMCGoFZH5vXxeEeiXdzOwgKs8rp1u2DQTT70nsX39HFYtIG7kBQxIRh9c5Tv5uR%2FEUpAiPQpBzx79DkLJnehg9QNluPDoJhXf21EIImcsakceAHfFbn0uHbj84H7Y79e%2FJINrTu3gVHOz6aeO4E0yY7NdBqcId0qbzaFRKUDJwey%2FXN5UYYs0qwmfi3xbKi%2B4wJgsMRtZhKI40m3G7h4%2FJhvxUw331sMGh2KYkSJBiXX9BMBnU7WaerDX6jWR97a7RLE4I64d2hMYCdDYEjAsMY8iBcwTk2EVQ66%2FXD8dGU%2FzyUCRwvANgOoTk0WpXTYVMR0FvV27x0X53SY66Xnftz%2FKUL7q%2FTzli687o%2BOGwpZzWFJ4yDtd7t5BuyO91oKMIqjspB9SVkyKNki2A8pTJWM9G5bLQgG%2B6AXvWDbFIQeDCLzjM%2BXBc%2FVU7tZRaYSS4CgWXYDRo0O%2BKGUI6Qb%2Fo4Pl2bqxPnv99TvDvukrBIl1uNkCwoWoIYjg%2B0uXbnoqdZ8M0Qd9Zt%2FMJ%2BSTIK4a3Gkla%2BWjxpvpIh%2F%2FxdTM79BFv4OVSiN15lCi%2FGOZ76Gntpy9ibFAq6ML9bkgtpg92hMqBaPAzApg7E7dGpJYwKe3lMOD7h8oGOqUB%2FOp0aw1DQDw7AxpauThPnUyad5AzyHKtWv8lw6jDlsEPL3Gu0daAXfuHz2nDsHwcNCuGCgWMTHAxPtePRRPZ6pxvzrW7wgyd4a1fxEloHp5b7ly5a59xNw2Bdya%2FxW%2BUc2w6G%2BjoqPzHewkWEkfji%2BycPQjgoPA2%2BcQYfK%2FB16c3JsHrDykOsjxnb1PkmyKTBjolU8M8OcamQBlt71QIuBOYeFlL&X-Amz-Signature=c075d75b466344b8418ea97124f7ec2e228fe40d587cfd208033d7eb3d17c91b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPHEFQJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWo4t9%2BuGpUjlaeQx6dYKgYB1Z6LV6jyttKZerOMkDZQIgRk7yEBT6IHdUnyDfM5LRurt6xCzAzsL5R2ZcGlxbJzEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDDNH3Vu6SUAdU5heCyrcA0moY7veATh9H4OMCGoFZH5vXxeEeiXdzOwgKs8rp1u2DQTT70nsX39HFYtIG7kBQxIRh9c5Tv5uR%2FEUpAiPQpBzx79DkLJnehg9QNluPDoJhXf21EIImcsakceAHfFbn0uHbj84H7Y79e%2FJINrTu3gVHOz6aeO4E0yY7NdBqcId0qbzaFRKUDJwey%2FXN5UYYs0qwmfi3xbKi%2B4wJgsMRtZhKI40m3G7h4%2FJhvxUw331sMGh2KYkSJBiXX9BMBnU7WaerDX6jWR97a7RLE4I64d2hMYCdDYEjAsMY8iBcwTk2EVQ66%2FXD8dGU%2FzyUCRwvANgOoTk0WpXTYVMR0FvV27x0X53SY66Xnftz%2FKUL7q%2FTzli687o%2BOGwpZzWFJ4yDtd7t5BuyO91oKMIqjspB9SVkyKNki2A8pTJWM9G5bLQgG%2B6AXvWDbFIQeDCLzjM%2BXBc%2FVU7tZRaYSS4CgWXYDRo0O%2BKGUI6Qb%2Fo4Pl2bqxPnv99TvDvukrBIl1uNkCwoWoIYjg%2B0uXbnoqdZ8M0Qd9Zt%2FMJ%2BSTIK4a3Gkla%2BWjxpvpIh%2F%2FxdTM79BFv4OVSiN15lCi%2FGOZ76Gntpy9ibFAq6ML9bkgtpg92hMqBaPAzApg7E7dGpJYwKe3lMOD7h8oGOqUB%2FOp0aw1DQDw7AxpauThPnUyad5AzyHKtWv8lw6jDlsEPL3Gu0daAXfuHz2nDsHwcNCuGCgWMTHAxPtePRRPZ6pxvzrW7wgyd4a1fxEloHp5b7ly5a59xNw2Bdya%2FxW%2BUc2w6G%2BjoqPzHewkWEkfji%2BycPQjgoPA2%2BcQYfK%2FB16c3JsHrDykOsjxnb1PkmyKTBjolU8M8OcamQBlt71QIuBOYeFlL&X-Amz-Signature=11aca23343b698565b4e41eace67171bf4730ce3b5ae9db2ab65fd6286a58e37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

