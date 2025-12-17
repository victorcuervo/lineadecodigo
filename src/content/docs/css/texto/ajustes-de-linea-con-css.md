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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOALFZXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2FNpyfyf4pK3kPMUKYCOe5vLoApXg2OUc%2BNiUo%2BzDLgIhAJfmJLwqVOih%2FfKsJCsSngbSu2EJeR6Z3pgdSTcQtgrFKv8DCH4QABoMNjM3NDIzMTgzODA1IgzO8DWKu9dz5Kbq0Egq3APpYhkHu%2B56i3dK2l7J1bt0TmL1cxdgJlspfV%2BYGtMOWrjkxMg5TnXVD982C7yl%2Bm56%2FTqiEej%2FVZ83usisuiZ6PWH0Pen8GpXJI%2BwepthjY0Mbw7zW7H923tR4Wl20spgWwl6dnu6lB3cJKr1oQOlrfEnYcPxBgagnxGTj1ZsoVdwUw35%2FxRgv1shymAj9ba75psbhABxZ9iGsjKXZDGKdBPg%2FNFdwfuj8WnGzEi2S5xvg9bkY%2BeHk8oRQ6hFpeGImh62nvMLkmgujI7a%2FtgvORqRCe4BEo3jAFheUII19GE8%2BxPfkL2LXg%2FFngFWo0Vh9KCh8eRKwVdpFYbEw4kdNsSpLNisVYSjdtkdmRRlpukwpttRFyHJ9W9IwnI8pC6Z1UPD9MLu6XAC75hcyLvYEhOHMZKnF4LrmOLEJpij99jLkfJQL2fuQnH8AbcB5%2FZTPyJTs0c1wojq%2FNbdIlVPa%2FF6A%2BcmLacdB5krCJrDRw5%2BYkDJuO%2BbGDaeWkBEbZ%2FxbBZyZbl7%2BhJomZyW1M1mImzeU%2FupDBOu9y04Vvb%2FGJUjh7bYio95gkcf4FEuBUA0s1BQPyzY4FGpcZtcqKX7MBANpZu032%2FMRAb2IYvIcejgJevT6ZtHBwrhO1zCfxorKBjqkAQD%2BQ6FVBy4b7Cnxl0c%2BDCK4i8KRPb6IGCP6oHGmNDHnl0Tagv52gcWFWQkkEo7GDnp1t52n2SPPd8DS9NcXq5keYEtRUpL9ki%2FUu0UtbGHjox3AvgCXM7wR%2FNXewzOt1ZADk6633nfKr2afqzWq5efgPfGpBVRu16vBLYB6fwTaIYcucXyJSg9NiRGjA0%2BZUyf5DITZJIExVx1JxaZxJaSd5WXv&X-Amz-Signature=0daa3bf9c91f9af049a6d47dc44a7ef45359ebcead66ad272cb2d6881e52ac47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOALFZXK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCv%2FNpyfyf4pK3kPMUKYCOe5vLoApXg2OUc%2BNiUo%2BzDLgIhAJfmJLwqVOih%2FfKsJCsSngbSu2EJeR6Z3pgdSTcQtgrFKv8DCH4QABoMNjM3NDIzMTgzODA1IgzO8DWKu9dz5Kbq0Egq3APpYhkHu%2B56i3dK2l7J1bt0TmL1cxdgJlspfV%2BYGtMOWrjkxMg5TnXVD982C7yl%2Bm56%2FTqiEej%2FVZ83usisuiZ6PWH0Pen8GpXJI%2BwepthjY0Mbw7zW7H923tR4Wl20spgWwl6dnu6lB3cJKr1oQOlrfEnYcPxBgagnxGTj1ZsoVdwUw35%2FxRgv1shymAj9ba75psbhABxZ9iGsjKXZDGKdBPg%2FNFdwfuj8WnGzEi2S5xvg9bkY%2BeHk8oRQ6hFpeGImh62nvMLkmgujI7a%2FtgvORqRCe4BEo3jAFheUII19GE8%2BxPfkL2LXg%2FFngFWo0Vh9KCh8eRKwVdpFYbEw4kdNsSpLNisVYSjdtkdmRRlpukwpttRFyHJ9W9IwnI8pC6Z1UPD9MLu6XAC75hcyLvYEhOHMZKnF4LrmOLEJpij99jLkfJQL2fuQnH8AbcB5%2FZTPyJTs0c1wojq%2FNbdIlVPa%2FF6A%2BcmLacdB5krCJrDRw5%2BYkDJuO%2BbGDaeWkBEbZ%2FxbBZyZbl7%2BhJomZyW1M1mImzeU%2FupDBOu9y04Vvb%2FGJUjh7bYio95gkcf4FEuBUA0s1BQPyzY4FGpcZtcqKX7MBANpZu032%2FMRAb2IYvIcejgJevT6ZtHBwrhO1zCfxorKBjqkAQD%2BQ6FVBy4b7Cnxl0c%2BDCK4i8KRPb6IGCP6oHGmNDHnl0Tagv52gcWFWQkkEo7GDnp1t52n2SPPd8DS9NcXq5keYEtRUpL9ki%2FUu0UtbGHjox3AvgCXM7wR%2FNXewzOt1ZADk6633nfKr2afqzWq5efgPfGpBVRu16vBLYB6fwTaIYcucXyJSg9NiRGjA0%2BZUyf5DITZJIExVx1JxaZxJaSd5WXv&X-Amz-Signature=98eb7c90251c4671e788e3674c902ec7897f2c333421ade07203e6e4158919f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

