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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSYERX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKElD4nO1MxxVltiiP0bWJMKpINAIHY%2FGdCMnAKKu7%2FQIhANOJaiLRgfE4Dby4L5TBDIT7l5UCWzp4dyoaXPU7lPuaKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FZiB%2BiT2u%2FE5IUQq3AO1hSUZcrfVStZS7krZxv4%2FmTcaGvc4YUbwZ1a3SzxtlicH0saOQMrmHqGJScpd3DDOpgvql66vGJuY22NN2kWq8hM%2Ft05XhuWmsdWZfIf%2BaGWYscc%2BMW%2FnvLx2MJGv6kbg9Kwvo7U1UFqIJWZhB7HH%2Be3norrs%2B0x9oo3X29HYZnbSCBXwSJHP7GPg%2Fi5zY%2BNKZOVF%2FcGz0lf1uDtUlK6utA4ALWtVgdBB9NyFytyFyY34L0Xl4PsfU1F7EaXuvq4AkB3EjIyKUzpxoBC2wsNoGTYmuoC%2FCLgFPgl5UkV9h9eGd4YvSIN36qbrqaEKaM%2FGcWkBvdZ9cjvFGic%2Fvz78GqX9BvHVRc%2BB02mji1c4tGZeknlyaasuKj0w3Qr4H8x3IFG8RDSo7qVkUXKQKadGpSAVy4EKOAYYzsZOJufXsWolxTkyIPMlyfdz5aZ7A3Cmq%2FSxTJzdRPgbDJyibaxmEk%2FUDD%2FXDInTFsWmOXyyNs9Wj4HTQH8UEUvr8hmEYGqqjbXqbDXZTtIpHwkCzjqGtVnmPzRdYr9Xz2A5oFoh4UqZoNwGcm%2FjOl3MSpW%2BSENaIjXOrSiwIXJQc41tdXEjLtrlZ3vJ%2F2Za4PKoqlYR%2Ba5%2BqH653tqffR0RPjCMjIzKBjqkAQX3AztkztbYIYgLd54fXyxmfWQt184d6Dw86REtXiwLMNrnBScnPGUezBV4fmyJ%2BE1M%2BDinhx0E7NDaPsdnTPAM2KXY2GVhYVrfwjJOn3%2BXUlGrZRLNNu9sajoMziH%2BZjVPesJZfbaMFF3Qnnc5AN0Tp0t%2FZidk1jEjbZyW30AayjiIM3ow6K8ltDZTupD1vFa0m5nKL2AU3ZUzMK1J5yrOhNe7&X-Amz-Signature=0a93f6bdbc1c01feacf9cd03187bacddfb4bd83841f8bf8d4ba4835a46adaa3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMSYERX4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKElD4nO1MxxVltiiP0bWJMKpINAIHY%2FGdCMnAKKu7%2FQIhANOJaiLRgfE4Dby4L5TBDIT7l5UCWzp4dyoaXPU7lPuaKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwj%2FZiB%2BiT2u%2FE5IUQq3AO1hSUZcrfVStZS7krZxv4%2FmTcaGvc4YUbwZ1a3SzxtlicH0saOQMrmHqGJScpd3DDOpgvql66vGJuY22NN2kWq8hM%2Ft05XhuWmsdWZfIf%2BaGWYscc%2BMW%2FnvLx2MJGv6kbg9Kwvo7U1UFqIJWZhB7HH%2Be3norrs%2B0x9oo3X29HYZnbSCBXwSJHP7GPg%2Fi5zY%2BNKZOVF%2FcGz0lf1uDtUlK6utA4ALWtVgdBB9NyFytyFyY34L0Xl4PsfU1F7EaXuvq4AkB3EjIyKUzpxoBC2wsNoGTYmuoC%2FCLgFPgl5UkV9h9eGd4YvSIN36qbrqaEKaM%2FGcWkBvdZ9cjvFGic%2Fvz78GqX9BvHVRc%2BB02mji1c4tGZeknlyaasuKj0w3Qr4H8x3IFG8RDSo7qVkUXKQKadGpSAVy4EKOAYYzsZOJufXsWolxTkyIPMlyfdz5aZ7A3Cmq%2FSxTJzdRPgbDJyibaxmEk%2FUDD%2FXDInTFsWmOXyyNs9Wj4HTQH8UEUvr8hmEYGqqjbXqbDXZTtIpHwkCzjqGtVnmPzRdYr9Xz2A5oFoh4UqZoNwGcm%2FjOl3MSpW%2BSENaIjXOrSiwIXJQc41tdXEjLtrlZ3vJ%2F2Za4PKoqlYR%2Ba5%2BqH653tqffR0RPjCMjIzKBjqkAQX3AztkztbYIYgLd54fXyxmfWQt184d6Dw86REtXiwLMNrnBScnPGUezBV4fmyJ%2BE1M%2BDinhx0E7NDaPsdnTPAM2KXY2GVhYVrfwjJOn3%2BXUlGrZRLNNu9sajoMziH%2BZjVPesJZfbaMFF3Qnnc5AN0Tp0t%2FZidk1jEjbZyW30AayjiIM3ow6K8ltDZTupD1vFa0m5nKL2AU3ZUzMK1J5yrOhNe7&X-Amz-Signature=b172f80e52a0e59e5b965471ef5185eacdf2016e422d4f45d3eeca9cf7154c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

