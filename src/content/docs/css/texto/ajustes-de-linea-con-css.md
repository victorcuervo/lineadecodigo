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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7CKSUY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrtTKY0rqh6NOkw1WQYCKK9iGZOO5LZUEH3BXWv6%2FOTAiEAwvkHeDme0AyLdrol0BQTYY4bam45U1jUQ1X4gVjiA9gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDChrBPV4OoQqZ4b28SrcAw5gzPQij3pjojCOyZN8fdGVTPpclRYn8IP%2FogM2f6KvCl%2BfWcSJXgfQDfn73b5%2BlE73FfDvyDs7ltnZTXVoTxm0hetWCjx80b8846fx9R7D0Er63jGcBCi3MZmgshF2YJI9TcSVTt7cZVG2ujsJO%2F2uTbFnkK6onEMNtsOU4r8Rj6DgJsBe8myuy9X61xOfRneWnlohEiikRKQrWrb2okaEwLkIEhaukV%2BajgVG2wGSkWEnhZkpKK7YGA7Z0flGGOjoB6XEjWy9Qt25AAImf%2BroWqo%2FI9hxWxowXWOndVtn4TLmljNhRL1uJSiOcl41OnXKRTGPr9Y%2Ffaywevp7ttkCiXd1mU0aE6ZUDGiLaGY9I2t6vGNW57cLVPi5o3IUUdUOTXUcuBReJiBFrBq6ciD%2FKUX5xhGm6B8WG9zp%2Byvu0uH%2BIWc2wKQ2T5Gh5QwcQmQLkQtDln%2BbgCY5B%2FRneYLnhC7WiVBEiuejvbizJx9MtvwxqVuumaVswSneWARoORELP0JIRDGHPS2wUwi18HKTnwQk7nAqkHsvSBE7PcvL1yiuR9y3JPhh%2BSW4z0ks5hQgjoZdhh0%2BpSqwWxZFHWXqHLPkk9WtZ6RTY50xdww16sN2o168vX2FIyuuMOTpiMoGOqUBWFRY6p6JE491brIiat04lGkTou6zcb2%2BwNxcGnoYenAt4kP6lBDVPFneoTsDabjciYdiV0iwdCSAP%2Fmer8Tc5asUMa28SLkVl%2FH3KNG0zSzsZolmQ%2Bq1vfJYw%2BgxZ%2FXdmSBH%2BiN6KHigXMHbGOnxW2dlt2EpcrFHCjY6zYoc6zON%2BLw8LIQyjPJBNSQ2QjAbm4pTzAaQpQVgeF0M73KCTf4UXlXy&X-Amz-Signature=40d0481b2a32ce4677cdecb4db4647b0cdcc8f07f2bed6028fe20c01238fd0b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XO7CKSUY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrtTKY0rqh6NOkw1WQYCKK9iGZOO5LZUEH3BXWv6%2FOTAiEAwvkHeDme0AyLdrol0BQTYY4bam45U1jUQ1X4gVjiA9gq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDChrBPV4OoQqZ4b28SrcAw5gzPQij3pjojCOyZN8fdGVTPpclRYn8IP%2FogM2f6KvCl%2BfWcSJXgfQDfn73b5%2BlE73FfDvyDs7ltnZTXVoTxm0hetWCjx80b8846fx9R7D0Er63jGcBCi3MZmgshF2YJI9TcSVTt7cZVG2ujsJO%2F2uTbFnkK6onEMNtsOU4r8Rj6DgJsBe8myuy9X61xOfRneWnlohEiikRKQrWrb2okaEwLkIEhaukV%2BajgVG2wGSkWEnhZkpKK7YGA7Z0flGGOjoB6XEjWy9Qt25AAImf%2BroWqo%2FI9hxWxowXWOndVtn4TLmljNhRL1uJSiOcl41OnXKRTGPr9Y%2Ffaywevp7ttkCiXd1mU0aE6ZUDGiLaGY9I2t6vGNW57cLVPi5o3IUUdUOTXUcuBReJiBFrBq6ciD%2FKUX5xhGm6B8WG9zp%2Byvu0uH%2BIWc2wKQ2T5Gh5QwcQmQLkQtDln%2BbgCY5B%2FRneYLnhC7WiVBEiuejvbizJx9MtvwxqVuumaVswSneWARoORELP0JIRDGHPS2wUwi18HKTnwQk7nAqkHsvSBE7PcvL1yiuR9y3JPhh%2BSW4z0ks5hQgjoZdhh0%2BpSqwWxZFHWXqHLPkk9WtZ6RTY50xdww16sN2o168vX2FIyuuMOTpiMoGOqUBWFRY6p6JE491brIiat04lGkTou6zcb2%2BwNxcGnoYenAt4kP6lBDVPFneoTsDabjciYdiV0iwdCSAP%2Fmer8Tc5asUMa28SLkVl%2FH3KNG0zSzsZolmQ%2Bq1vfJYw%2BgxZ%2FXdmSBH%2BiN6KHigXMHbGOnxW2dlt2EpcrFHCjY6zYoc6zON%2BLw8LIQyjPJBNSQ2QjAbm4pTzAaQpQVgeF0M73KCTf4UXlXy&X-Amz-Signature=7ecd6d392c0a72a80b729c8836a8b8fd131a51b9bfbdc45aeb153b02313b3b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

