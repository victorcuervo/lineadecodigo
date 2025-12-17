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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SPMLWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdGbxhw27cOwWEaKHkL0wsWBEURVqWyXMPxJJeN0MYwwIgEPWlc6NJBKEWB3KCkWFxoW1WsVckYNUbtNewbnRIgJYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAwo7Jl1xvGO%2Fis%2BDSrcA2%2FVFNCb23WzfMyic%2FonXAgoNGR5YcijZ0kYF%2FlV%2FOcn0TgLznH3NQCsEztXXk%2F0f1wWTr0W%2FybKCSGcRodV4YiemlziO3RX%2BP9WarZnjXQ9KNWG6jZBFyGlB%2Fnq6W8bQH2GkcN6quJgZugIS%2Fxgrv0IAL71B%2Bv8kmljrVx5qCIL4BGDtJ%2BGw96bUYxANQgqVGT%2BxhKErLkF3ma9SLCRhD3dN494QoXYT7SaeaQ%2BR9%2Fe6Mq%2BEH5WT3eXcQwXTF5MNROp94sDxdvKP7L96cZEIhB%2BH%2Fg4QEvklevo%2BPqElzqMy29I2JTP2%2FYaTIjsTab15BbUYwDtSA689Cqa5JNWwsXFiO96zAb5orrtyv6FEQoSCYxXrPmaAvDfPVbXpnls1KI2b2F8Slh0ASuTbC1vC%2B66VmHo9%2Bs1137GDttk2WvOZKHLE52HjrD2xRgB2RWtccA0R5UdBFZma32NDLu2tCEE7aT0WSlN7UMWbmENrYEQ7JIPGUeEXqABzyEiAlhC7bZD38uhVXzRkis%2F%2BTCNP0OztzTiLY6e2kOgUC5R5M7PcODMeAId0gojoJ74CSpmKOq4JyQELTgLkP1tV%2BcD9Yj4SP7ToEX4dk0cnTMbRspr6DnxfwSYm5dLoE%2FzMLjhisoGOqUBJlN3wZkYt0k%2ByYjKZBJ2CUNI8dqKbYDhHDrSo35Id2zO4pk2gL8QF%2FdgL165enPqr7Uvuai9klL17N1WR6C2UqqNlAZt264a35AesTil5%2FwT49SzDUIUDYC032rH4dLaRyWH3Lodkz1rJ8QZ4980Qs2FlQgh2A1KRfYodl9mhnBqx6RBdXYqC0zaHLd7KN8RCda4P8VdTIgfw64ZksIbIwpeCKLT&X-Amz-Signature=168294b3420175676dc2f1c887aa6f512011208c5661014e33819885826c775d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7SPMLWZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCdGbxhw27cOwWEaKHkL0wsWBEURVqWyXMPxJJeN0MYwwIgEPWlc6NJBKEWB3KCkWFxoW1WsVckYNUbtNewbnRIgJYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDAwo7Jl1xvGO%2Fis%2BDSrcA2%2FVFNCb23WzfMyic%2FonXAgoNGR5YcijZ0kYF%2FlV%2FOcn0TgLznH3NQCsEztXXk%2F0f1wWTr0W%2FybKCSGcRodV4YiemlziO3RX%2BP9WarZnjXQ9KNWG6jZBFyGlB%2Fnq6W8bQH2GkcN6quJgZugIS%2Fxgrv0IAL71B%2Bv8kmljrVx5qCIL4BGDtJ%2BGw96bUYxANQgqVGT%2BxhKErLkF3ma9SLCRhD3dN494QoXYT7SaeaQ%2BR9%2Fe6Mq%2BEH5WT3eXcQwXTF5MNROp94sDxdvKP7L96cZEIhB%2BH%2Fg4QEvklevo%2BPqElzqMy29I2JTP2%2FYaTIjsTab15BbUYwDtSA689Cqa5JNWwsXFiO96zAb5orrtyv6FEQoSCYxXrPmaAvDfPVbXpnls1KI2b2F8Slh0ASuTbC1vC%2B66VmHo9%2Bs1137GDttk2WvOZKHLE52HjrD2xRgB2RWtccA0R5UdBFZma32NDLu2tCEE7aT0WSlN7UMWbmENrYEQ7JIPGUeEXqABzyEiAlhC7bZD38uhVXzRkis%2F%2BTCNP0OztzTiLY6e2kOgUC5R5M7PcODMeAId0gojoJ74CSpmKOq4JyQELTgLkP1tV%2BcD9Yj4SP7ToEX4dk0cnTMbRspr6DnxfwSYm5dLoE%2FzMLjhisoGOqUBJlN3wZkYt0k%2ByYjKZBJ2CUNI8dqKbYDhHDrSo35Id2zO4pk2gL8QF%2FdgL165enPqr7Uvuai9klL17N1WR6C2UqqNlAZt264a35AesTil5%2FwT49SzDUIUDYC032rH4dLaRyWH3Lodkz1rJ8QZ4980Qs2FlQgh2A1KRfYodl9mhnBqx6RBdXYqC0zaHLd7KN8RCda4P8VdTIgfw64ZksIbIwpeCKLT&X-Amz-Signature=e1717136c6370b0847d8384e4dea1e3eeb1b2b8446f66cbc170f315bd8e6d37f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

