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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JOYNHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoNXSJJcUfQvrqkVFG194x1vw09aMnKb3jLRGKLDiXgwIhAJLDkD4CXKSma%2Fb1sts0%2FBW1ARg8Ql75tpfz1OvaY99mKv8DCHoQABoMNjM3NDIzMTgzODA1IgxVFIg0a7%2B2tuVKVicq3AMvDqy3v0sExX0aEitj9r3o49aP2IuBIqFzDEZn3UTyJALwd3YMpMigYc7OTu9jH548t9df3ewyQ4l09lxyJ7v70IcuJzETTpjRPyzAIfVzxCYwQ%2F85juYmCHkJpinju%2B3CXVxMlifMzAjZrX64p0%2FUzgBCvxRFVldCaISAJdgUpq5B5Ddv8NyORJQIUqVfczJecVl2V%2BVp32W7JolkKsaCGRD9Xc8pRyLrJtlrEkS0UhCjJPNgaFEDyaF72WiXtPoJ3vQJ3z%2BhNltn30fn9ZAF9aDVXEXfpdcYpNqociJXkuZYqoRmFuoHn6LQUMGMpOYGgziD%2BNJ3FMmyUgmoKbGHkdfKhH2j%2FFl6nxuiGEZytrK9%2FxgllcRTrkobN6kq6E30WV%2FfsYejFqYMwnO2Yocj4MloUvqwrkCWaFRhqqf%2BFoCQ1Lya%2F6UNopSDiuElQhTO1MynbacUnA7JC%2BdF2kh8PRRxXw2pTf%2FzbzA9uLCKsW7xlMyZAdvDc%2Fln2YkTFmdw%2Bmjun%2BpfYnSo9hqfjvQlUzi7aQZ4Gw4B3KQQydOermyK3K12yv2HY9VQF0govmbo02SQM3S5GW1KBUtifAG8WIXfG4kMgaQL0zCRxgEf%2Bi3TqHr9fOokngnk5DDO0YnKBjqkARYzp%2B%2FLchOPmWykl%2FGtClLQ91fymIGK%2Fo71jSeaFCXnD0YG9sWXCvcKM5%2Fn%2FjBZGy65rCk1KXcqmvzJQpnhkcc5JWbOEMAym5DVoVHqT3udTd6aUO0hQfh4%2F8sEbah3NyGnxK1TiuTaLcZ4XDHrMoKpJ7XjOE9XXqUAva7Mv9E7%2FshV2OMKjTYYYMhmqHH1v%2BbBUR%2FvukYnT9zOVQ0yebea1Wg2&X-Amz-Signature=6074f8f23d7dd400bde6ac2c0371e66d649d957e61e20f38ed9e9563fdbf89a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JOYNHK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T083119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoNXSJJcUfQvrqkVFG194x1vw09aMnKb3jLRGKLDiXgwIhAJLDkD4CXKSma%2Fb1sts0%2FBW1ARg8Ql75tpfz1OvaY99mKv8DCHoQABoMNjM3NDIzMTgzODA1IgxVFIg0a7%2B2tuVKVicq3AMvDqy3v0sExX0aEitj9r3o49aP2IuBIqFzDEZn3UTyJALwd3YMpMigYc7OTu9jH548t9df3ewyQ4l09lxyJ7v70IcuJzETTpjRPyzAIfVzxCYwQ%2F85juYmCHkJpinju%2B3CXVxMlifMzAjZrX64p0%2FUzgBCvxRFVldCaISAJdgUpq5B5Ddv8NyORJQIUqVfczJecVl2V%2BVp32W7JolkKsaCGRD9Xc8pRyLrJtlrEkS0UhCjJPNgaFEDyaF72WiXtPoJ3vQJ3z%2BhNltn30fn9ZAF9aDVXEXfpdcYpNqociJXkuZYqoRmFuoHn6LQUMGMpOYGgziD%2BNJ3FMmyUgmoKbGHkdfKhH2j%2FFl6nxuiGEZytrK9%2FxgllcRTrkobN6kq6E30WV%2FfsYejFqYMwnO2Yocj4MloUvqwrkCWaFRhqqf%2BFoCQ1Lya%2F6UNopSDiuElQhTO1MynbacUnA7JC%2BdF2kh8PRRxXw2pTf%2FzbzA9uLCKsW7xlMyZAdvDc%2Fln2YkTFmdw%2Bmjun%2BpfYnSo9hqfjvQlUzi7aQZ4Gw4B3KQQydOermyK3K12yv2HY9VQF0govmbo02SQM3S5GW1KBUtifAG8WIXfG4kMgaQL0zCRxgEf%2Bi3TqHr9fOokngnk5DDO0YnKBjqkARYzp%2B%2FLchOPmWykl%2FGtClLQ91fymIGK%2Fo71jSeaFCXnD0YG9sWXCvcKM5%2Fn%2FjBZGy65rCk1KXcqmvzJQpnhkcc5JWbOEMAym5DVoVHqT3udTd6aUO0hQfh4%2F8sEbah3NyGnxK1TiuTaLcZ4XDHrMoKpJ7XjOE9XXqUAva7Mv9E7%2FshV2OMKjTYYYMhmqHH1v%2BbBUR%2FvukYnT9zOVQ0yebea1Wg2&X-Amz-Signature=24c9f64280ebf995df4f85342c833bee7fefee77e57e6754f4c0145cdcc55303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

