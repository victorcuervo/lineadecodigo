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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCPODIQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwHOsUjuhydUFm6KjZCTJtmsRw7wwwgfg24dRGFIs7fAiAgci4db6L2nx40hQL%2BmS1MyCDntlGanHDp2zTvevLVbiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IZpWxZNhWJOXnUFKtwDtyn7DxCPtZhBusJgZ7d9mtK73XTqc4QXiv%2FmT9YVGEOIfWFSE5I1%2FAryHEds%2F5c%2BwBUtcQr3eRSOEqzlDJvb7Yfmjg9sZSN9Lg71HaC91GqAFIR7FYp%2Fw8ZMLgHUsxP7OtS%2BY4AmF7dEAFC455t%2BtpcrMqBb0M715R8aOdl0jutFr4ywCBdy7yEKwjmfkv6A07iFPbf9E%2B5vwOL7tLkxqWX4eRD8CNhGsjmH3W0oqlb54QgadSOWyK5iGwaOEqRV65H%2F9c8XexfHH9Xldu4AgSjRUCCPx6b8rDaTRecz1NLnHi5xIVUXVzzsbSfBjAeqlRLrSVtgT5Ubnxzo8Pjs8ELI%2FNTQopzfYSTCdBvLq9iwA1nr8XPHRy9qxX8CJka5iu5x6BCXCZQ%2BPoo9qSeTwZQ9wXeB4wHLa8F0CY2tmmo9z29yzHJDBEs35b0IZJnH4N96p7MMwFGzHS4XzoT58LfDvLra%2B5CzCRL7JUqSuKwgTAwbB7TiGM%2B%2FweEED1%2BEVhbMV%2FPoRhv66p8%2BwywkcVHAYpeEPg4vHijTbqWqzD0p8qYJEW4GEUvJIenCx0H7%2FgJdgdEcelNnsJ7CVQ9oxreyHxdBzKB6KeDbqD0Cy2W0oeC%2Fb%2FpUItUUOlww2YCLygY6pgFCEZnKVTp5Z%2FDVsAxJ9dfo0yrZns%2BbI61WPt8onxPzuYHe1166fzqZoZ1KJxDDSgSvcEWIyW4mRoujtPyz8inTNGlEhw5VODRoEjnVwwCPpE4w5HRPyNzxKriZ7lTkQJBDKEzCQjCxyBvjrpVhoFn2MkOZT3%2Fe8C2E6QjVCUi39m5WJTzymZsgfHgBOZLgrakMmws8RpBzttv2nJ3q9JTzI0ackSpw&X-Amz-Signature=5844d226c99382f791629220b30eb0c4c87dc5a9e7c4f408cad42c81052f8c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTCPODIQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGwHOsUjuhydUFm6KjZCTJtmsRw7wwwgfg24dRGFIs7fAiAgci4db6L2nx40hQL%2BmS1MyCDntlGanHDp2zTvevLVbiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9IZpWxZNhWJOXnUFKtwDtyn7DxCPtZhBusJgZ7d9mtK73XTqc4QXiv%2FmT9YVGEOIfWFSE5I1%2FAryHEds%2F5c%2BwBUtcQr3eRSOEqzlDJvb7Yfmjg9sZSN9Lg71HaC91GqAFIR7FYp%2Fw8ZMLgHUsxP7OtS%2BY4AmF7dEAFC455t%2BtpcrMqBb0M715R8aOdl0jutFr4ywCBdy7yEKwjmfkv6A07iFPbf9E%2B5vwOL7tLkxqWX4eRD8CNhGsjmH3W0oqlb54QgadSOWyK5iGwaOEqRV65H%2F9c8XexfHH9Xldu4AgSjRUCCPx6b8rDaTRecz1NLnHi5xIVUXVzzsbSfBjAeqlRLrSVtgT5Ubnxzo8Pjs8ELI%2FNTQopzfYSTCdBvLq9iwA1nr8XPHRy9qxX8CJka5iu5x6BCXCZQ%2BPoo9qSeTwZQ9wXeB4wHLa8F0CY2tmmo9z29yzHJDBEs35b0IZJnH4N96p7MMwFGzHS4XzoT58LfDvLra%2B5CzCRL7JUqSuKwgTAwbB7TiGM%2B%2FweEED1%2BEVhbMV%2FPoRhv66p8%2BwywkcVHAYpeEPg4vHijTbqWqzD0p8qYJEW4GEUvJIenCx0H7%2FgJdgdEcelNnsJ7CVQ9oxreyHxdBzKB6KeDbqD0Cy2W0oeC%2Fb%2FpUItUUOlww2YCLygY6pgFCEZnKVTp5Z%2FDVsAxJ9dfo0yrZns%2BbI61WPt8onxPzuYHe1166fzqZoZ1KJxDDSgSvcEWIyW4mRoujtPyz8inTNGlEhw5VODRoEjnVwwCPpE4w5HRPyNzxKriZ7lTkQJBDKEzCQjCxyBvjrpVhoFn2MkOZT3%2Fe8C2E6QjVCUi39m5WJTzymZsgfHgBOZLgrakMmws8RpBzttv2nJ3q9JTzI0ackSpw&X-Amz-Signature=4c09c2eb35eaf444a4f0093918645af3db01fd3f61ecd7e397991513ed154bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

