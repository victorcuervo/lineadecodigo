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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTGY3FE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7nncRFHWVgR0GPkK2WWCbsa1onbC2P8LYXDGgP61DEAiEAgKt0QGqy7P7jvTWfA%2F0jAkbbtCQBgGBiawIKbJNgJ2cq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEb9WJ3O13U3VPWj2CrcA9IcBUJJDgYUQSlzvImB%2BsIddtr74v78tUmrp8gf90NUKd5NqFOD4gSmX%2FZyh9Yryl1fOZgCMDS%2BHMfxGUnDxa5TmCVGtEHru3aQftUqcvWTzNBT9Q1KsSppnrvFn%2FiK636rT0xhMP8uKj8QcbAap2iwN%2FS32YCaXzgTlRHWXgmWpolcOcUwPo757C0HQ5Ctujsq8M8tDCLk8ZjMDxT5ZlGxTrkqLWxYi3XRirdePlEvByY5I6tRF3G5WCcEpd9BVYv28869A1v1TTvVXrPHB72VvcJhvXZDHLxCJb7oAI4buTSrZV6hB%2FxtzWRJHeXWqRWC%2FS8GlAW%2BiYDMK62hanB5NoKRyptGVMkvY5oXCs2LYJhMgPUnrk8CAGmadKGcQ7VgwPfspd%2FSvb4j1%2B9Fi8rsFmCB6dKeXmRgtrHPDD67g3iR6Dz3dgnNKsETnhQqWtuyj4KzcyHL9dXS2FqGdVdHl32pcLQ%2Fi9KxMxyMoaduvge2xkd5P1e1F5mXw%2FnfD4nU%2BSWzV5U9pnHgk3rXSth9RV0unlJ8ifRsNbrS%2Bc2OOsViwGTcEoaixu6OnwzPN2iJ3Va05EczpI18UW%2BUQjLr%2B2muDsQ%2B0TuUhYuXDIJVhB4gb9%2BFSx5S6BGEMN%2FpiMoGOqUB%2BXBaiUfS%2BFfdkOK96zAlCu6wAZpcUK1JlDNStbINzqmQcDcD7vU9nQ%2FephbxcIHhANX6jmVNDuz0zwv6Su9QzPS6zCMzSsFoMYxGb81m18G%2BwHj3gORXinvnKa2HqN6KHEhESEF6eFTXUEegyuVOxPHr6p9rN%2FuCKxjFCnw9qi8cNc6iesVbhr1hFjvshc3%2B4z65ykdj2u%2Bx8C0QhHR8gWSk7YiM&X-Amz-Signature=86011a3ef68490e8bfc5f22bd51a63ce98079ea91597150b99a913cfbc746c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUTGY3FE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7nncRFHWVgR0GPkK2WWCbsa1onbC2P8LYXDGgP61DEAiEAgKt0QGqy7P7jvTWfA%2F0jAkbbtCQBgGBiawIKbJNgJ2cq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDEb9WJ3O13U3VPWj2CrcA9IcBUJJDgYUQSlzvImB%2BsIddtr74v78tUmrp8gf90NUKd5NqFOD4gSmX%2FZyh9Yryl1fOZgCMDS%2BHMfxGUnDxa5TmCVGtEHru3aQftUqcvWTzNBT9Q1KsSppnrvFn%2FiK636rT0xhMP8uKj8QcbAap2iwN%2FS32YCaXzgTlRHWXgmWpolcOcUwPo757C0HQ5Ctujsq8M8tDCLk8ZjMDxT5ZlGxTrkqLWxYi3XRirdePlEvByY5I6tRF3G5WCcEpd9BVYv28869A1v1TTvVXrPHB72VvcJhvXZDHLxCJb7oAI4buTSrZV6hB%2FxtzWRJHeXWqRWC%2FS8GlAW%2BiYDMK62hanB5NoKRyptGVMkvY5oXCs2LYJhMgPUnrk8CAGmadKGcQ7VgwPfspd%2FSvb4j1%2B9Fi8rsFmCB6dKeXmRgtrHPDD67g3iR6Dz3dgnNKsETnhQqWtuyj4KzcyHL9dXS2FqGdVdHl32pcLQ%2Fi9KxMxyMoaduvge2xkd5P1e1F5mXw%2FnfD4nU%2BSWzV5U9pnHgk3rXSth9RV0unlJ8ifRsNbrS%2Bc2OOsViwGTcEoaixu6OnwzPN2iJ3Va05EczpI18UW%2BUQjLr%2B2muDsQ%2B0TuUhYuXDIJVhB4gb9%2BFSx5S6BGEMN%2FpiMoGOqUB%2BXBaiUfS%2BFfdkOK96zAlCu6wAZpcUK1JlDNStbINzqmQcDcD7vU9nQ%2FephbxcIHhANX6jmVNDuz0zwv6Su9QzPS6zCMzSsFoMYxGb81m18G%2BwHj3gORXinvnKa2HqN6KHEhESEF6eFTXUEegyuVOxPHr6p9rN%2FuCKxjFCnw9qi8cNc6iesVbhr1hFjvshc3%2B4z65ykdj2u%2Bx8C0QhHR8gWSk7YiM&X-Amz-Signature=3a99bd112b8a7f4dddff4326b9ec696d07f5e4e7d6e8afd1d36102b2140ee34f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

