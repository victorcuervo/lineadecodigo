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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z523ICEY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAifVXTKsSPs%2BO0WYDZ9g6cApvbg9%2FTuhH9HLH25JHMCAiB57CK%2FPLE0rgdX6mhjaKSRX5RZtbSgqIZBRF1a%2BNtxBSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMEUYug9xzmpvn8ZerKtwDUWEVoaWcVhe%2FdkV22XuKD8u3ogjjfyXHCReekhEOCvCtHnhSqWAp3IRsQuSdsVTxP6PSGlj942V8ug8FlWLbPEG0BtOLI4BIL5nk8Tf4c631bMUNegH9BIelw79yr8wzsvd4WDJdDBIVEUuIW37xipThml6W290EVGRzKi30n3Sq7nc%2BA2KiyM%2FNUhtK131KiTQ3vBLf8dcBhR42UVSu4vFshhcstoqMrklWdLeqp1VDR8SWbMT%2B7tb%2B3snkMl6B1bO%2BsBxmrAWWJHA2FSKvQ0HvLbX9koecOn5D4nBs0FeEKEevfOrSZNzk7iqFUhEWxhdBGB4PA0WTPWzPPBCTRDtDxf%2BREXmPBwg41H%2FA6g40RFpfQlLrulg9fqzsO1vvCY2gvpPwgSxc1U4JwLH8EAkPH0JnucE%2Btm4Q3XBNAcj86mtZfOjZpMckW%2Fo9l13oYxS2rMunDYfPK9Ne24A%2Bbcq3t8Rwud4D2z6XE4PbGA1H7mxS8ZzEechjiVILGoOd92GSl39GRpJKekjRSrfA%2F%2FnUGcfhuBg6QIWoYgilIqtxiJ7k7zq308PJEy2oyIJCtVZDwbgQ5%2F%2FN%2B0IXtRElGTjAh0DVfVtnx1orvkQUWhhk8GhRXZb7BKd7XCIwsZ2JygY6pgErUDV5gLB6Lv8yN6Or1z0TAiHKr9uLQVEw9hxAEkV4gR%2FIJtZAHK4hTkcu3VpyAUdgCbUviCdHvpAP5fdkWVBdMcYawlqnyANZyVBS1dZPSeVa%2F8dFmH8nU9PSvdZ4BFieTrfrvOCP7nIlgO0mVbqC6g3uJQNEEHHydTFUqvIfAAYTHaxJulw11eq8bQIbFBivVYZIcPcaCVI18P3gWVp0UsWsSb1t&X-Amz-Signature=d8014296614c6519c252d8612ec7cc1efe39fe48016319e052b95a286759d2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z523ICEY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAifVXTKsSPs%2BO0WYDZ9g6cApvbg9%2FTuhH9HLH25JHMCAiB57CK%2FPLE0rgdX6mhjaKSRX5RZtbSgqIZBRF1a%2BNtxBSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMEUYug9xzmpvn8ZerKtwDUWEVoaWcVhe%2FdkV22XuKD8u3ogjjfyXHCReekhEOCvCtHnhSqWAp3IRsQuSdsVTxP6PSGlj942V8ug8FlWLbPEG0BtOLI4BIL5nk8Tf4c631bMUNegH9BIelw79yr8wzsvd4WDJdDBIVEUuIW37xipThml6W290EVGRzKi30n3Sq7nc%2BA2KiyM%2FNUhtK131KiTQ3vBLf8dcBhR42UVSu4vFshhcstoqMrklWdLeqp1VDR8SWbMT%2B7tb%2B3snkMl6B1bO%2BsBxmrAWWJHA2FSKvQ0HvLbX9koecOn5D4nBs0FeEKEevfOrSZNzk7iqFUhEWxhdBGB4PA0WTPWzPPBCTRDtDxf%2BREXmPBwg41H%2FA6g40RFpfQlLrulg9fqzsO1vvCY2gvpPwgSxc1U4JwLH8EAkPH0JnucE%2Btm4Q3XBNAcj86mtZfOjZpMckW%2Fo9l13oYxS2rMunDYfPK9Ne24A%2Bbcq3t8Rwud4D2z6XE4PbGA1H7mxS8ZzEechjiVILGoOd92GSl39GRpJKekjRSrfA%2F%2FnUGcfhuBg6QIWoYgilIqtxiJ7k7zq308PJEy2oyIJCtVZDwbgQ5%2F%2FN%2B0IXtRElGTjAh0DVfVtnx1orvkQUWhhk8GhRXZb7BKd7XCIwsZ2JygY6pgErUDV5gLB6Lv8yN6Or1z0TAiHKr9uLQVEw9hxAEkV4gR%2FIJtZAHK4hTkcu3VpyAUdgCbUviCdHvpAP5fdkWVBdMcYawlqnyANZyVBS1dZPSeVa%2F8dFmH8nU9PSvdZ4BFieTrfrvOCP7nIlgO0mVbqC6g3uJQNEEHHydTFUqvIfAAYTHaxJulw11eq8bQIbFBivVYZIcPcaCVI18P3gWVp0UsWsSb1t&X-Amz-Signature=26348a343a48a0a1fd3754dab785de70444a2068fa1064b7d4bb84675129a239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

