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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2FIMGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfl%2B7gxasQSQEtNEZLjUmvG6nGnQ0KZEukFP%2BqByWyFAiA7gUTxsqlI1DK3brIlBIuxd5HUxH%2B5%2BpOseyymRMU4%2FCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMOhkmdImc0DdkvEnjKtwDPFtq5XASCyUqEMRH6n0WKvTPCy%2FZ7OIzNVd%2F2uEK7gyhbhb4afcywHpzSdnKTNMhWStraE%2FtYs119IEiyQ80CDl6m0wbAJFt%2Bedu7tfl31AxxhbosN73hpNIPyCf303g6l6AgZuxZ0gcbvk%2Bl2nOUgrsvAtE1RPSZ%2BUDtoZ0QT5lO%2F8%2BEfkOOZj0Lnj7M7H5a8rq1i2XMP65xUZ6s%2Fr0xSlfYN2VshMrcnMQ9Yc%2Fon5M2XYPkGRlodUFzrwTBYEMnw8f0zxkDr%2F4UbuJJTgnZnzfmxfmn8%2Bl0CUNS%2BxrMpRbtzymDtBai6L1EOh79KqbhkS82%2F1wDhjAcNRX%2BmZWuS%2BnakLRDTzSIK9w1P1TD%2BMg702XBE05lZlDBl8RA78nerr9g0TkxI2JX9m1GzFAQgBbnplVsXsExwjo9B7OdpTK6%2BqTrU5y%2BW7%2FLzWgzoaXqsXfxkKGC1ifUAlzDOEjabgHJ%2BTQaiLacnADuAUw%2FeJUgRW7ZOvzFx4f754E8t%2Bu1%2FXWce9BZQhcRyJv4YVilDH6ZzMvnnkN3soOWJEJuyweHpSmRNQhJJd32KhR%2FzM4ll%2BASzgNId0XEqlzFpxMGuFu10Q%2FtABJol9ScxmFav6T4R4gm6MlCasaFD8wkc%2BIygY6pgE2m8eeZkX3ycz94okOtrEb3v1z20Oc9T39WGs9f%2ByleShp5bWGoncbK9xOIsPmdYZFPiiwvEzKjntPKEjReGyPfbuWILZWAV4%2FfMwUSM6bBhKceGzh7yBb8uRQMsa6Y%2BWRqon73O0CEh%2FfUzG76HC2uM%2FrBvZtvaTY2XRZ%2B%2BEgQICLdgVX5P5ON4emlb0sgwteJyxo3it1Uqrj5gvnsV7KEXXq5o3O&X-Amz-Signature=03bb9438e4b01bb49d8f8aa8c877702fd16606c73edf07e34260308e65b6d94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VA2FIMGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAfl%2B7gxasQSQEtNEZLjUmvG6nGnQ0KZEukFP%2BqByWyFAiA7gUTxsqlI1DK3brIlBIuxd5HUxH%2B5%2BpOseyymRMU4%2FCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMOhkmdImc0DdkvEnjKtwDPFtq5XASCyUqEMRH6n0WKvTPCy%2FZ7OIzNVd%2F2uEK7gyhbhb4afcywHpzSdnKTNMhWStraE%2FtYs119IEiyQ80CDl6m0wbAJFt%2Bedu7tfl31AxxhbosN73hpNIPyCf303g6l6AgZuxZ0gcbvk%2Bl2nOUgrsvAtE1RPSZ%2BUDtoZ0QT5lO%2F8%2BEfkOOZj0Lnj7M7H5a8rq1i2XMP65xUZ6s%2Fr0xSlfYN2VshMrcnMQ9Yc%2Fon5M2XYPkGRlodUFzrwTBYEMnw8f0zxkDr%2F4UbuJJTgnZnzfmxfmn8%2Bl0CUNS%2BxrMpRbtzymDtBai6L1EOh79KqbhkS82%2F1wDhjAcNRX%2BmZWuS%2BnakLRDTzSIK9w1P1TD%2BMg702XBE05lZlDBl8RA78nerr9g0TkxI2JX9m1GzFAQgBbnplVsXsExwjo9B7OdpTK6%2BqTrU5y%2BW7%2FLzWgzoaXqsXfxkKGC1ifUAlzDOEjabgHJ%2BTQaiLacnADuAUw%2FeJUgRW7ZOvzFx4f754E8t%2Bu1%2FXWce9BZQhcRyJv4YVilDH6ZzMvnnkN3soOWJEJuyweHpSmRNQhJJd32KhR%2FzM4ll%2BASzgNId0XEqlzFpxMGuFu10Q%2FtABJol9ScxmFav6T4R4gm6MlCasaFD8wkc%2BIygY6pgE2m8eeZkX3ycz94okOtrEb3v1z20Oc9T39WGs9f%2ByleShp5bWGoncbK9xOIsPmdYZFPiiwvEzKjntPKEjReGyPfbuWILZWAV4%2FfMwUSM6bBhKceGzh7yBb8uRQMsa6Y%2BWRqon73O0CEh%2FfUzG76HC2uM%2FrBvZtvaTY2XRZ%2B%2BEgQICLdgVX5P5ON4emlb0sgwteJyxo3it1Uqrj5gvnsV7KEXXq5o3O&X-Amz-Signature=29b9bb32da59904ae90ab963ef71c99091f1495974cb8f145a17f974d11e6eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

