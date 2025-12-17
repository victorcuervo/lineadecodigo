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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBXLY27E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHN9k9xSqGZbIB2zZAnX4JvPj%2BwzfWxmo9jY6Fk9WlswIhAJv9fw2H3mPI9Ft%2F5NM6azIAX3FfQRFFnlaDUGqrGJ7%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlMk93gO8XCJl%2FpJEq3APESZFa6bw2bCRI78CmE7d3pPzfj%2FhGu1uhJquc7J6K4QSkV3JMShQlTgtBwv%2Fy9PHCRz25pIs4507IC4xOMIeIXSsmkTpw2yPd%2BtzVz4Tqigce%2B3ITR6J5D8%2FmU0hLF2FJWS%2FvhQ7KId%2BAb1DBOld6Vso%2B6acOXVGrfjKOHBdba0FkI5tWV1gMFx546BwF%2BHQ1POt48STMHFQmZqcJKnSZzJAYBGttaOtx4hyPUR%2FX1xiBDhv%2Fy1dotjWREq%2Bjhz0G5GeHjK3StT39z8FfKAV4tq5McpWFaIfYWn36U%2FmePOfuQj8Si%2BYFW4bssWrCNwMov9GumSYfbS5Atp1GW%2FyNdpR8mXfS94VpYF2Dj3Bc550bAZUr1UTFBfrXi%2BEm4GbcCCR%2BmBf9B8QlZR0HeuYdilRwv%2F0CJi4fRei5uOe%2F%2BsUNcybhut2bfUKmVHstzbMXfrn9066zMKXM6zXJdEwXTiuAps84wqYfKHITaQmZGmqD0xkHFVagUVUnVNyGNzzaQcwqg0hoyMi%2FH9ZuH5mXhYcAGUsuueAmrYN1oKam9Xu7vu2vhWcWuceMdjncUBZIQKI6aqfuVpd3qDJbUW%2Bo0eBLheKBLwl%2F4LGuAFCfDOR5w7Q8%2FWR0pC47kTCSrozKBjqkAS0FkBvR7Chhip36a%2BEScHA9kQ0WNCjM7NYDcreZc2CirSBzjHKOFQKLkL2bOGt7%2F6GF4dB5TapMcUEwWmQr9xQjA2fnU5JSDm%2FouZmmcYTHn%2Fdr6sFeICciphZPz3D2Dxj7A0ExZt26ESxxBzjXF9M%2BHPXxrbE9TZ0%2ByPtjtTfMIMOHorv%2FS7RAuaE2yP%2Fru5LNg4%2F%2Bkoib5lfjYyLnTAd2rn%2BK&X-Amz-Signature=e8dbda0d62ef9f5f85d994133bc5f0155327c0cce23c00911743a644048bfb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBXLY27E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T215127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHN9k9xSqGZbIB2zZAnX4JvPj%2BwzfWxmo9jY6Fk9WlswIhAJv9fw2H3mPI9Ft%2F5NM6azIAX3FfQRFFnlaDUGqrGJ7%2FKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlMk93gO8XCJl%2FpJEq3APESZFa6bw2bCRI78CmE7d3pPzfj%2FhGu1uhJquc7J6K4QSkV3JMShQlTgtBwv%2Fy9PHCRz25pIs4507IC4xOMIeIXSsmkTpw2yPd%2BtzVz4Tqigce%2B3ITR6J5D8%2FmU0hLF2FJWS%2FvhQ7KId%2BAb1DBOld6Vso%2B6acOXVGrfjKOHBdba0FkI5tWV1gMFx546BwF%2BHQ1POt48STMHFQmZqcJKnSZzJAYBGttaOtx4hyPUR%2FX1xiBDhv%2Fy1dotjWREq%2Bjhz0G5GeHjK3StT39z8FfKAV4tq5McpWFaIfYWn36U%2FmePOfuQj8Si%2BYFW4bssWrCNwMov9GumSYfbS5Atp1GW%2FyNdpR8mXfS94VpYF2Dj3Bc550bAZUr1UTFBfrXi%2BEm4GbcCCR%2BmBf9B8QlZR0HeuYdilRwv%2F0CJi4fRei5uOe%2F%2BsUNcybhut2bfUKmVHstzbMXfrn9066zMKXM6zXJdEwXTiuAps84wqYfKHITaQmZGmqD0xkHFVagUVUnVNyGNzzaQcwqg0hoyMi%2FH9ZuH5mXhYcAGUsuueAmrYN1oKam9Xu7vu2vhWcWuceMdjncUBZIQKI6aqfuVpd3qDJbUW%2Bo0eBLheKBLwl%2F4LGuAFCfDOR5w7Q8%2FWR0pC47kTCSrozKBjqkAS0FkBvR7Chhip36a%2BEScHA9kQ0WNCjM7NYDcreZc2CirSBzjHKOFQKLkL2bOGt7%2F6GF4dB5TapMcUEwWmQr9xQjA2fnU5JSDm%2FouZmmcYTHn%2Fdr6sFeICciphZPz3D2Dxj7A0ExZt26ESxxBzjXF9M%2BHPXxrbE9TZ0%2ByPtjtTfMIMOHorv%2FS7RAuaE2yP%2Fru5LNg4%2F%2Bkoib5lfjYyLnTAd2rn%2BK&X-Amz-Signature=ca0999bbe21c9319d56223df208855abe87e9b09feef2f18fcac03b4a267bfcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

