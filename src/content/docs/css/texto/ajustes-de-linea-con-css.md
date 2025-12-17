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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKNU4OE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVtlnLiQ5nDp6vfVpa0VajTLpxaKVJIUT0Csc51VoDqAiAZxR4M8Tmy31GCOxvWHThMznU4kWo%2FeA1309%2BdmKUNyir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2F%2Bnx0jLEvxSM%2Bu9VKtwDmU2BfLHieMgn7wGsF%2BkC8Xr47ZvF%2BTYwUlm9lHwpLwB%2F0W5EqVAZ96p7E9gsFtObQNlXkGJ4O2bjF8Deu%2BSI6%2B7vL02nvw0EYZ3FUMywgsU0j1XvUcL3rYId2F%2BQLiopSfU1TXofn4EBjo8YDZHpzFGpJ34Q%2Bz9V0hOmrNxvhtAl51GU3mUolXbmUs6X9kHDMv6IS2kE6HRt%2FN0jnbq%2Ba72DLx6L0o1nVwUwtyR6%2BJaEQlPsCZEUbMKaytECqviZDXa3WxAQ5%2B0yZwRtf7o8GMk51PmckovPqx0ZwcflTdZGzivQ1Tk%2BaVrgl1QBtloZwrw8W%2BQLtpbehNpjQH%2FGNnbKZaqTieXzr7FgBlUBjWVWx0VImee4CqiwyKMs9unGx7KBaQ96laifgkIka%2FTkA8swLHjfxI61mxD%2FXHb1M1RBmeDuMKkxreDHy0HFkeURqTQ9Ex5ynvvtFz1IknhX2eNlIZznyY0rbKKbfKFM5%2FH8KM44rU1LT%2B0iYNXiKC23KCrwZr6iQN5yJ9zp8CvgTP7Ua%2BGetV%2FZ1KuS1mE3KZ2XURrzPg9i1ZdEdtqhgvIIjSVW5Xlpyo7zrzgRLhzVIJgmAO8%2BMWThjecO6vbLJSN%2Bh8gdZSEhAeoyFYsws9KJygY6pgFDSjUjB5fmdaXB%2Fqzekamfhxz76CKqxBjE%2Fb%2BfW6o%2BrulOS%2FLSS%2Fi5iEbR8eBgb4288HWVPuhwHHto8WxBv5UUpaDzB3bQ0%2FmltFrhXYR6GlfAkmYSXdpFRxev9PgSUk70o0Jsx2R%2FyhkD0YcsrgLDNb39ZN5ro%2BsixxgvzmUtb0CLpN1QyPxqaJM1yCSNWl8Gr1fk9c41xjjmaxCjQf7xwQ1F390i&X-Amz-Signature=73a64e96d1f2dd9e5e047e6bf6187a07f3308a62d10b190d04d6fee6caf4c60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAKNU4OE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGVtlnLiQ5nDp6vfVpa0VajTLpxaKVJIUT0Csc51VoDqAiAZxR4M8Tmy31GCOxvWHThMznU4kWo%2FeA1309%2BdmKUNyir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM%2F%2Bnx0jLEvxSM%2Bu9VKtwDmU2BfLHieMgn7wGsF%2BkC8Xr47ZvF%2BTYwUlm9lHwpLwB%2F0W5EqVAZ96p7E9gsFtObQNlXkGJ4O2bjF8Deu%2BSI6%2B7vL02nvw0EYZ3FUMywgsU0j1XvUcL3rYId2F%2BQLiopSfU1TXofn4EBjo8YDZHpzFGpJ34Q%2Bz9V0hOmrNxvhtAl51GU3mUolXbmUs6X9kHDMv6IS2kE6HRt%2FN0jnbq%2Ba72DLx6L0o1nVwUwtyR6%2BJaEQlPsCZEUbMKaytECqviZDXa3WxAQ5%2B0yZwRtf7o8GMk51PmckovPqx0ZwcflTdZGzivQ1Tk%2BaVrgl1QBtloZwrw8W%2BQLtpbehNpjQH%2FGNnbKZaqTieXzr7FgBlUBjWVWx0VImee4CqiwyKMs9unGx7KBaQ96laifgkIka%2FTkA8swLHjfxI61mxD%2FXHb1M1RBmeDuMKkxreDHy0HFkeURqTQ9Ex5ynvvtFz1IknhX2eNlIZznyY0rbKKbfKFM5%2FH8KM44rU1LT%2B0iYNXiKC23KCrwZr6iQN5yJ9zp8CvgTP7Ua%2BGetV%2FZ1KuS1mE3KZ2XURrzPg9i1ZdEdtqhgvIIjSVW5Xlpyo7zrzgRLhzVIJgmAO8%2BMWThjecO6vbLJSN%2Bh8gdZSEhAeoyFYsws9KJygY6pgFDSjUjB5fmdaXB%2Fqzekamfhxz76CKqxBjE%2Fb%2BfW6o%2BrulOS%2FLSS%2Fi5iEbR8eBgb4288HWVPuhwHHto8WxBv5UUpaDzB3bQ0%2FmltFrhXYR6GlfAkmYSXdpFRxev9PgSUk70o0Jsx2R%2FyhkD0YcsrgLDNb39ZN5ro%2BsixxgvzmUtb0CLpN1QyPxqaJM1yCSNWl8Gr1fk9c41xjjmaxCjQf7xwQ1F390i&X-Amz-Signature=7740ee336bfc0aed0bb46309a0b25486987af9b42044ff62727edf7d92fae017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

