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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VNPAQ7I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOze7xy9fqhY4evTw%2BXeuEwFIil%2BYEDms8PUvFCCPdsQIgX8cNSwCJVBHExviB%2FH0zhhGRyNCKnMgo6KmBBZVi1%2FMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2Fw%2FO81tRcR1ek%2BgCrcA7fQ4cD5CDliPSxCOIedcPbgpRSsCNuS6m%2F69YUHrG%2F7Urk8qBdJIxIuig%2B5rc2B%2BxNGjfg1%2BcBW5KKyqRFf4fLw9kfqZk%2FHJjYXWK04aLdTkJlR1EZcKKrXMjUPK6XGzH7KSnz2b2II52SADkU62XrGxCkglQNCVixgzdAV%2BynblA3aznBRSZJk7Jrl7uOdBgLYgJkVYgBWBpix8KBs1QhqtSAC311G1D9OXo2yyBn8OBCYe%2BlXt85czIebPERTXf%2BIQ00z8horf9%2B6JE1LxWJtE52s%2FAkJ5hgyicD5nyrQaQ8wpzYLPzKo4GtdmcbkFt%2F0XO55R6EkJJWIw%2BKPwWWfPeFgcdX0fiU3371HsTpdmcQCPywXXZ2Vr3MGXW75BkId0beBBiO8r0MFeki53XCTyhWZ2FyAE6SdGSOui7M8B%2FTFd86GdqBGYZDlDeTt%2F72oKgLWIbi7%2BLyvmgqKAQJiyldyShT%2Bq06LmOULe%2Bo6OuSqY2aluctd7MezigUM0BcgnY2pUTL1ybrtvCe1eoR6ZaPMq0MuvKYbuv0O8QKkE5UtQjkVo7zBdwohajhaIcQFEFdgdvh2mmFh%2FNQhQI9gdreFKKBC9yvU0C6rCUjyrSzrLCHIaey362SUMPCei8oGOqUB7DQ%2F%2BhpJppPu8%2Fk9bMH9k%2F3mMBO52s15Gdf6UrqmNTkaM2W8mfjmy9y92T4Zer%2BdUTYbP3BTtSFgSms2%2Fz%2FryU4UmxwfL2PB%2FjpuIlLL3o1XDrzaatqGNMJEw%2By7tbOLtdrA72oWNnCA1U5Et238D%2B2prod%2FRA65499UEMzYL%2BWX5gPoVxc4Hp0HSyF%2BH9HGonWL701awwH3KzD3A2gkeHAfl5tT&X-Amz-Signature=916a7b2b9a46393633382ad777fc98d402daa871f5f673ac1f6da52de7767604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VNPAQ7I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOze7xy9fqhY4evTw%2BXeuEwFIil%2BYEDms8PUvFCCPdsQIgX8cNSwCJVBHExviB%2FH0zhhGRyNCKnMgo6KmBBZVi1%2FMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG%2Fw%2FO81tRcR1ek%2BgCrcA7fQ4cD5CDliPSxCOIedcPbgpRSsCNuS6m%2F69YUHrG%2F7Urk8qBdJIxIuig%2B5rc2B%2BxNGjfg1%2BcBW5KKyqRFf4fLw9kfqZk%2FHJjYXWK04aLdTkJlR1EZcKKrXMjUPK6XGzH7KSnz2b2II52SADkU62XrGxCkglQNCVixgzdAV%2BynblA3aznBRSZJk7Jrl7uOdBgLYgJkVYgBWBpix8KBs1QhqtSAC311G1D9OXo2yyBn8OBCYe%2BlXt85czIebPERTXf%2BIQ00z8horf9%2B6JE1LxWJtE52s%2FAkJ5hgyicD5nyrQaQ8wpzYLPzKo4GtdmcbkFt%2F0XO55R6EkJJWIw%2BKPwWWfPeFgcdX0fiU3371HsTpdmcQCPywXXZ2Vr3MGXW75BkId0beBBiO8r0MFeki53XCTyhWZ2FyAE6SdGSOui7M8B%2FTFd86GdqBGYZDlDeTt%2F72oKgLWIbi7%2BLyvmgqKAQJiyldyShT%2Bq06LmOULe%2Bo6OuSqY2aluctd7MezigUM0BcgnY2pUTL1ybrtvCe1eoR6ZaPMq0MuvKYbuv0O8QKkE5UtQjkVo7zBdwohajhaIcQFEFdgdvh2mmFh%2FNQhQI9gdreFKKBC9yvU0C6rCUjyrSzrLCHIaey362SUMPCei8oGOqUB7DQ%2F%2BhpJppPu8%2Fk9bMH9k%2F3mMBO52s15Gdf6UrqmNTkaM2W8mfjmy9y92T4Zer%2BdUTYbP3BTtSFgSms2%2Fz%2FryU4UmxwfL2PB%2FjpuIlLL3o1XDrzaatqGNMJEw%2By7tbOLtdrA72oWNnCA1U5Et238D%2B2prod%2FRA65499UEMzYL%2BWX5gPoVxc4Hp0HSyF%2BH9HGonWL701awwH3KzD3A2gkeHAfl5tT&X-Amz-Signature=9a53a643c9790529a3f0aa633da24d2c8dc861efbb52f4cc91d406cbdcbf70da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

