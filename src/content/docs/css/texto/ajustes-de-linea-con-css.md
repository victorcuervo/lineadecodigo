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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZGRKNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0NkD%2Bv7kykNMd01UtrgUa8gS9gXRRKrV4ZQPm8kL6UwIhALB2GxKTzRnGYdnbtkf1wmOi1m2G%2FhtZaKdmoUgFLiCqKv8DCHsQABoMNjM3NDIzMTgzODA1Igxn9MR3u0UmJAwEzJ8q3AMiRUPalX56yyO7839lPqVZFo1iNpCdB%2FKxbkiOOjfHRBpot%2Bd0LbwfO7bZhe8dQOkOxkalF%2Bn%2BJOBgvvASB0fI92Fh7ZUYSQkv5HZUXpVcSMz9Kg3Zrsk8dBHXXxo%2F80v5C%2B6pfWroXhS3FF8%2B2hQvVYrM2RIxOlTPgjyAi28KvKnQ9vIvobEZDv3%2B9m1YCBhvpE2xxu7fKTKXdlvZA0uI3f5IkjZAOAlkDNfIUV0%2BiIEEA19G%2F3rxidnqKWuwBSNMTy4v3PGhV87%2FW%2FsKfrgkkglCMXwBGf9YvcxPY1p4hbgi2ddbuji8TST%2FyMKpeRkzhjTDLYllakSxS7m99jge7jYSvxAa2Fax6NRptV4XcnSar1hTNKmlBvrSdB2W5x8xd6X%2BeW3CNzuVAbEjDLhy3xrVXmQWFYTimSFnEWK%2BTcHHkeiesthM5Qc66hI0yS%2BOp13MkYEku66iHl1%2BJ%2BDwVg5z7fGJSzdxY1y2Lgm0WfckaxFXj5efKUzBHk8a%2BJsMO9cDWY0eg4NUmTQdn4xs33ljH3kueyMqOajZC4JVLCbzB8EDYoXe%2FjB5JrDpTq32Bo8LYwX%2BfMhVOxmET%2BtmuJzJ6ntlWBgqu%2BHWNgihZ0ct8w1vEbyqYZyoUjDc74nKBjqkAUbbaBhUONyj46suOO%2BkBMl%2FGlrQX%2FjSLbzcpb3v%2BH5fPfE%2F4H6bwSNCC25VzjhzTjKjiNaERmnHZZbMCjZEqrm50YfEZAscNYhTWdJj52sMpM1mQ6nAfY6Cum0y%2FMOfZ9vRGwRHJBILcB2uEXiWFX6EEvNoq3TAUAZGZLtL2B%2BN9VGA48HxEVDlFumZ0SKDatnHqOlmJyGerueGRQc1a%2BVNoO%2BX&X-Amz-Signature=f933e77818d3bb3d42446b1146c706d75ae60934f44bf684fb180caff1c3e36c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZGRKNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0NkD%2Bv7kykNMd01UtrgUa8gS9gXRRKrV4ZQPm8kL6UwIhALB2GxKTzRnGYdnbtkf1wmOi1m2G%2FhtZaKdmoUgFLiCqKv8DCHsQABoMNjM3NDIzMTgzODA1Igxn9MR3u0UmJAwEzJ8q3AMiRUPalX56yyO7839lPqVZFo1iNpCdB%2FKxbkiOOjfHRBpot%2Bd0LbwfO7bZhe8dQOkOxkalF%2Bn%2BJOBgvvASB0fI92Fh7ZUYSQkv5HZUXpVcSMz9Kg3Zrsk8dBHXXxo%2F80v5C%2B6pfWroXhS3FF8%2B2hQvVYrM2RIxOlTPgjyAi28KvKnQ9vIvobEZDv3%2B9m1YCBhvpE2xxu7fKTKXdlvZA0uI3f5IkjZAOAlkDNfIUV0%2BiIEEA19G%2F3rxidnqKWuwBSNMTy4v3PGhV87%2FW%2FsKfrgkkglCMXwBGf9YvcxPY1p4hbgi2ddbuji8TST%2FyMKpeRkzhjTDLYllakSxS7m99jge7jYSvxAa2Fax6NRptV4XcnSar1hTNKmlBvrSdB2W5x8xd6X%2BeW3CNzuVAbEjDLhy3xrVXmQWFYTimSFnEWK%2BTcHHkeiesthM5Qc66hI0yS%2BOp13MkYEku66iHl1%2BJ%2BDwVg5z7fGJSzdxY1y2Lgm0WfckaxFXj5efKUzBHk8a%2BJsMO9cDWY0eg4NUmTQdn4xs33ljH3kueyMqOajZC4JVLCbzB8EDYoXe%2FjB5JrDpTq32Bo8LYwX%2BfMhVOxmET%2BtmuJzJ6ntlWBgqu%2BHWNgihZ0ct8w1vEbyqYZyoUjDc74nKBjqkAUbbaBhUONyj46suOO%2BkBMl%2FGlrQX%2FjSLbzcpb3v%2BH5fPfE%2F4H6bwSNCC25VzjhzTjKjiNaERmnHZZbMCjZEqrm50YfEZAscNYhTWdJj52sMpM1mQ6nAfY6Cum0y%2FMOfZ9vRGwRHJBILcB2uEXiWFX6EEvNoq3TAUAZGZLtL2B%2BN9VGA48HxEVDlFumZ0SKDatnHqOlmJyGerueGRQc1a%2BVNoO%2BX&X-Amz-Signature=6974b6d08fd531e830506d6d03be61b7ea179775d06b7d74906daf5b707f7dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

