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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTAKKXX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh%2B54XnSCnISyd%2BGlf8X7Qw1lnuSzDmbsOYTuhkBL2UwIhAPYLY4m3TfmpdJ4%2FTWAa4KWSLjhAnL9FndcEmvvnE1mUKv8DCH8QABoMNjM3NDIzMTgzODA1Igy6eo5IgC2dMO4pk3Uq3APJDDHntv4W%2FujZCFkF4Jerhh7%2BPzhYJlC35FYpfAD26Ai8u%2F%2BI0BzH5fQvPIN%2F38WBrKzRFA8%2FmkppemFDXLFjNTc7u%2BQdBdzzBNgUdhP5OlrEz2JBKzDSVQT7rldxIugycxwCQgyoKTGHk3dXiA2FwH1%2FQfaLqynSQl0%2F0w%2FcrE1O9vU9INN%2FF07sZ1CV2gArl3nXOQaO4FJSwXp4JjEnbgWgaVHu7i9dnMlEGA%2Fi%2BOwjXoIhfbadBNY0Q0btDB0xvz8yW9pwFw2BLj7SN4bNAgOi03WlLM5n75JsCzqqCHZ7ki%2ByJOKe21k%2FxOSZIHt3B%2FkpWYVDT09PpkerQuNfleG2qL80L4zS%2Fe9NrCHYSO6nae8Tt0z1kdEq2%2FrZ%2FD2EFJSCP%2Fck18tCCMPcI1%2F1wJ7t5s47YUksQdDfiW6WZfp%2FwU9RDH0BmBz4t43canSpRiHUpNSwKu2TX9DW%2BolTIAj%2F44FrhCMS9Pu1NjUUgPCt2hJEAeXqekMbR0pg2yMERXC9kSY4kiWzytXrfEb9KtWE0xRSh3vRy3UumAFNGVx4GEH4nomLdIGNUXNYmXbRcsd%2FVUIsCGOlE3C%2F5rpYCyfNSXZTiQ3nUzUHs5QKBHRf%2FA99j7UnlqmP5jDA4YrKBjqkAXzUwn2g7W%2FS8UJKvpiIojpOQEjemZ2nUpT%2Fz7FvbTVdiIuqMGgJlVTfz6ovxyNb8Yu3DdAAfY6cx1EmnkDmoleQ0e%2F%2BIJ7gvWJx%2FIPGQXchumkCizsNK7uERTNv1VvKhazowHpLOZGtW3eIesX7fwJJmmFC9p%2FZH%2BHutRCe488fGDsdTSXOfIdc5nTToGZwLcubWNR%2BY8ieGCdLdKW69t%2BGinqK&X-Amz-Signature=ac24d1a891edc0694c72ee97c896bb8cd3033a5f27ba3ddc579acf56d051384c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CTAKKXX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDh%2B54XnSCnISyd%2BGlf8X7Qw1lnuSzDmbsOYTuhkBL2UwIhAPYLY4m3TfmpdJ4%2FTWAa4KWSLjhAnL9FndcEmvvnE1mUKv8DCH8QABoMNjM3NDIzMTgzODA1Igy6eo5IgC2dMO4pk3Uq3APJDDHntv4W%2FujZCFkF4Jerhh7%2BPzhYJlC35FYpfAD26Ai8u%2F%2BI0BzH5fQvPIN%2F38WBrKzRFA8%2FmkppemFDXLFjNTc7u%2BQdBdzzBNgUdhP5OlrEz2JBKzDSVQT7rldxIugycxwCQgyoKTGHk3dXiA2FwH1%2FQfaLqynSQl0%2F0w%2FcrE1O9vU9INN%2FF07sZ1CV2gArl3nXOQaO4FJSwXp4JjEnbgWgaVHu7i9dnMlEGA%2Fi%2BOwjXoIhfbadBNY0Q0btDB0xvz8yW9pwFw2BLj7SN4bNAgOi03WlLM5n75JsCzqqCHZ7ki%2ByJOKe21k%2FxOSZIHt3B%2FkpWYVDT09PpkerQuNfleG2qL80L4zS%2Fe9NrCHYSO6nae8Tt0z1kdEq2%2FrZ%2FD2EFJSCP%2Fck18tCCMPcI1%2F1wJ7t5s47YUksQdDfiW6WZfp%2FwU9RDH0BmBz4t43canSpRiHUpNSwKu2TX9DW%2BolTIAj%2F44FrhCMS9Pu1NjUUgPCt2hJEAeXqekMbR0pg2yMERXC9kSY4kiWzytXrfEb9KtWE0xRSh3vRy3UumAFNGVx4GEH4nomLdIGNUXNYmXbRcsd%2FVUIsCGOlE3C%2F5rpYCyfNSXZTiQ3nUzUHs5QKBHRf%2FA99j7UnlqmP5jDA4YrKBjqkAXzUwn2g7W%2FS8UJKvpiIojpOQEjemZ2nUpT%2Fz7FvbTVdiIuqMGgJlVTfz6ovxyNb8Yu3DdAAfY6cx1EmnkDmoleQ0e%2F%2BIJ7gvWJx%2FIPGQXchumkCizsNK7uERTNv1VvKhazowHpLOZGtW3eIesX7fwJJmmFC9p%2FZH%2BHutRCe488fGDsdTSXOfIdc5nTToGZwLcubWNR%2BY8ieGCdLdKW69t%2BGinqK&X-Amz-Signature=761e24e4fa076c958d5b221ce7a275f14327496504d4bbc587038c958ef8e293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

