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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPE42RF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuSidm6MIUFs6mrcRASKJBxY3ZQjXGETI3nvQtbLdvigIgIQBal5vs4QKahXqBZrjL3mwisrRQwReCOL2ZE0pIe%2B8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDItjNy%2Feg3EnvHrTrircA8oundJfGOC%2BhUBNfEmIZPnAmN%2BUkIcB3qx5%2BLBj6sK0rCh5ezuTbjHw4l6%2FEnQip6nmJ%2FOF5LVRyZMMoLogal%2F94bC%2Bk%2BRsEtRoFx6vjoWl%2BLZxS5rQDFfA3RBI37J03LV5HzoVtog62DRnxLXGHLHVv6oTctjRRYDnPlxMmpAgAchIFL1w4E7hZb5Gh%2BfUGWtVaoyP6faTr5Kd4Xizoz8CAQZlGXU%2F%2BiiEf6Mvm5Kuf69SIMv4p03dx28KIecpVtNURZkfnhB5DHtns0h0mGWuye4K%2BCT%2Bd%2F5IYYnoA0wXiZ9KQoBAFJc2NJ2j7Zc5CMrVyqfc7lNEm3V%2BL9SLsbTXC9mAZoDqoYhwSrZ%2F4ZAT0zI6k8HwMRsSK4i3T9kVmdulJ1YsSKeTamJwUlNtlJ%2F8L%2FM6tqQPpyPQScpf8fVymq15kYIjlp1ac6a04XqFxGxoDCGXWZpKApm4u%2F4NEsUnF4Mg%2BfJnhXXQ5odcDOGWpraxrLvB4%2Feo9Q1ZF4bkt9%2B%2B6%2FHTWXTr7omVPQSwv9Ef0Jw5IEYyQ2PuJYAt8uCB3oPm4%2BchKWg%2BbyBy1RqZJwL8diPDOA0krEOW6KtOWwOwICH5wdcJMvo5GBx%2Fj4Q0nRI1d2heXyHkMyBtMPH%2FisoGOqUBb6rOgyKHzmp17Oq1hrGAK6p36SvKF%2B%2FLlOsR3KOs2YIyvXO4y0jiEoU%2B5yhd0yz9PN5AkCHAMZxZTOR47IyUPiA%2F2ZNWbg1AnfoHbjoRP8UrX7qpFNizJoVXPX%2BckyVAg0GvUSfhNZ1YnbmfqRWf%2Fc%2FEBma7lnjSMkJxM%2FHH%2BKw%2BEUnGv%2BxwgYPUTu%2FXTmP8YaBeCx0DlmHsd6WK7%2BImYipddeBq&X-Amz-Signature=d99b1377786f2ffd9029b468d421359f3d0739f7ead49877d55d64b376fecd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UPE42RF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuSidm6MIUFs6mrcRASKJBxY3ZQjXGETI3nvQtbLdvigIgIQBal5vs4QKahXqBZrjL3mwisrRQwReCOL2ZE0pIe%2B8q%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDItjNy%2Feg3EnvHrTrircA8oundJfGOC%2BhUBNfEmIZPnAmN%2BUkIcB3qx5%2BLBj6sK0rCh5ezuTbjHw4l6%2FEnQip6nmJ%2FOF5LVRyZMMoLogal%2F94bC%2Bk%2BRsEtRoFx6vjoWl%2BLZxS5rQDFfA3RBI37J03LV5HzoVtog62DRnxLXGHLHVv6oTctjRRYDnPlxMmpAgAchIFL1w4E7hZb5Gh%2BfUGWtVaoyP6faTr5Kd4Xizoz8CAQZlGXU%2F%2BiiEf6Mvm5Kuf69SIMv4p03dx28KIecpVtNURZkfnhB5DHtns0h0mGWuye4K%2BCT%2Bd%2F5IYYnoA0wXiZ9KQoBAFJc2NJ2j7Zc5CMrVyqfc7lNEm3V%2BL9SLsbTXC9mAZoDqoYhwSrZ%2F4ZAT0zI6k8HwMRsSK4i3T9kVmdulJ1YsSKeTamJwUlNtlJ%2F8L%2FM6tqQPpyPQScpf8fVymq15kYIjlp1ac6a04XqFxGxoDCGXWZpKApm4u%2F4NEsUnF4Mg%2BfJnhXXQ5odcDOGWpraxrLvB4%2Feo9Q1ZF4bkt9%2B%2B6%2FHTWXTr7omVPQSwv9Ef0Jw5IEYyQ2PuJYAt8uCB3oPm4%2BchKWg%2BbyBy1RqZJwL8diPDOA0krEOW6KtOWwOwICH5wdcJMvo5GBx%2Fj4Q0nRI1d2heXyHkMyBtMPH%2FisoGOqUBb6rOgyKHzmp17Oq1hrGAK6p36SvKF%2B%2FLlOsR3KOs2YIyvXO4y0jiEoU%2B5yhd0yz9PN5AkCHAMZxZTOR47IyUPiA%2F2ZNWbg1AnfoHbjoRP8UrX7qpFNizJoVXPX%2BckyVAg0GvUSfhNZ1YnbmfqRWf%2Fc%2FEBma7lnjSMkJxM%2FHH%2BKw%2BEUnGv%2BxwgYPUTu%2FXTmP8YaBeCx0DlmHsd6WK7%2BImYipddeBq&X-Amz-Signature=8a91368fbebd085010f1ddeb0ff426a77449425550ca5aa6f23deb8b05498b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

