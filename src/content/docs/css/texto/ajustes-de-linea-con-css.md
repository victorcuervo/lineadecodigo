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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYZB3NU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtE6lf%2BXMUl0ffVxJyXHTEwpUa4nmsLMektgz%2BolrUMAiB2y%2BVnvxd7wOWXQ9PoNcrJvuI9LKMGKnlPYlhVK0XADir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDXuLGi9839JaKDRBKtwDHNA%2FABQRqnvYuFgunazf7sS6wGdsFBBEdx2EgpnoLcMrXqTRibDkUUBCaHQ9hnvyPh9%2F1ezW%2BKD7zzyQQwx9HN%2BWdNjeSV78HGpA6SkPLxsHhoMK6lw9wME%2F%2BFs9aCQt5BkeQ8ycDRir%2FFY8HnDPQrnrf1SI1z278KRABPKx9166kOG3A7MttyNL77lLVHZmlpBFY1YpEuJFTwi1Cyt7XucYDqU9qVtR%2FTkeZuVS48cSuSbHF8JML1gC%2B0Mvk4LL85dYdU1sKfTu1YOF82P7nW2FzA%2FyG3NXX22DIMT5Vj2zKTGtrObGePU9nvYlwlIiBHTNKdgGBWNlSqqQiAzu%2B%2Bl1ViJfNjifNrj0rm7pwKBUV3wdg2XGaBJbx47A3HcC9hO0eSwHdmHHsaibGAAvndulJn%2FEZhq1WOBNcxMuY4CHKiz8Gh%2BeAN2k3x2lraPAmXNZ2CpxyRKwQtbXp757JphKLPmZnjm59fG5NuhtMkxwJUtTG%2B%2FfGsytAqZehwi9oqxYmnBX%2BTUKACOcZZOlHlos7deo0dxVhNBnfgcf2ThZQs0msUZiFhW5SZNGCPe%2Bj2%2F4Q2q9wNcPN5ejqLC6OIfIVSgL9PzCm8ARE8KHjL1gOVj3HMAH9lw5NwEw95aIygY6pgGY%2F9Lf7zk5KJUa0RPHcL31SU79BPvdSSja8KXQSLl8gZ57t3xYHV29c3EudJ2%2BU4dtt%2BGEVXsAYCddm4k0pD0WbsSyY%2BX6SeXJoA2k3Yb0ooVNU36gTAL1QvMHzD4fPSw8ckGAclP8DNatSiEctgf%2BKby42POXICS4VhUNBl8XrdlAo%2B8BO5Mk1gwI5DjX%2Fz2qYkymLMd0J8z21OC6mKEiHqPl7NFw&X-Amz-Signature=5bcc80754854ad97585b98b4c5cd3162e8225b1ec1f6f2f039d4bed052b9cd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQYZB3NU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtE6lf%2BXMUl0ffVxJyXHTEwpUa4nmsLMektgz%2BolrUMAiB2y%2BVnvxd7wOWXQ9PoNcrJvuI9LKMGKnlPYlhVK0XADir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMDXuLGi9839JaKDRBKtwDHNA%2FABQRqnvYuFgunazf7sS6wGdsFBBEdx2EgpnoLcMrXqTRibDkUUBCaHQ9hnvyPh9%2F1ezW%2BKD7zzyQQwx9HN%2BWdNjeSV78HGpA6SkPLxsHhoMK6lw9wME%2F%2BFs9aCQt5BkeQ8ycDRir%2FFY8HnDPQrnrf1SI1z278KRABPKx9166kOG3A7MttyNL77lLVHZmlpBFY1YpEuJFTwi1Cyt7XucYDqU9qVtR%2FTkeZuVS48cSuSbHF8JML1gC%2B0Mvk4LL85dYdU1sKfTu1YOF82P7nW2FzA%2FyG3NXX22DIMT5Vj2zKTGtrObGePU9nvYlwlIiBHTNKdgGBWNlSqqQiAzu%2B%2Bl1ViJfNjifNrj0rm7pwKBUV3wdg2XGaBJbx47A3HcC9hO0eSwHdmHHsaibGAAvndulJn%2FEZhq1WOBNcxMuY4CHKiz8Gh%2BeAN2k3x2lraPAmXNZ2CpxyRKwQtbXp757JphKLPmZnjm59fG5NuhtMkxwJUtTG%2B%2FfGsytAqZehwi9oqxYmnBX%2BTUKACOcZZOlHlos7deo0dxVhNBnfgcf2ThZQs0msUZiFhW5SZNGCPe%2Bj2%2F4Q2q9wNcPN5ejqLC6OIfIVSgL9PzCm8ARE8KHjL1gOVj3HMAH9lw5NwEw95aIygY6pgGY%2F9Lf7zk5KJUa0RPHcL31SU79BPvdSSja8KXQSLl8gZ57t3xYHV29c3EudJ2%2BU4dtt%2BGEVXsAYCddm4k0pD0WbsSyY%2BX6SeXJoA2k3Yb0ooVNU36gTAL1QvMHzD4fPSw8ckGAclP8DNatSiEctgf%2BKby42POXICS4VhUNBl8XrdlAo%2B8BO5Mk1gwI5DjX%2Fz2qYkymLMd0J8z21OC6mKEiHqPl7NFw&X-Amz-Signature=783e67e621054fd49daf4109ab7a5aad3eba8f72a3033ad88fb44213aa39958e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

