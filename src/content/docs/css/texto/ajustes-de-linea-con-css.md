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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5UHMDY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9WJ3hGOkkTzKBfFnIxCIExo6hBcue69D6kHsL5gpC9AiBZFQ9GPY9E3Iruj14iVMYJ9nk7J%2FZZ0nXz6zFSpVd3QCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgqZeWZ1mmBKtFHkCKtwDLqW13YffLa5dOYu2om8vwpKIOANSEmD9r99oeJXsvFDC%2FzuYmy0m%2Fcv3cajJxZGI6dPsk%2FKjkSsdzEXdSWHB0U0CeW42ewiu2ERqQqG1U6FNErhWS7guK4vjzKpQzx9KHuFvbzJl8rcDYxeJHTaHVu1ybGWiXC2cZlXTkLz83ZDnspUV5GJuTAExf50CcV1gJKWmiG4NWSThq9UixWRwwgf0qbG2rXIK6DHdUX7iUK3MhEjKq1jQcP13e1MgVwRYIkb2F8ga%2BOD6CddMP%2BKZCmVpLZWEwiaQKGemhi51MMIL9dKm3TV30ZCvgWjW%2F%2BTvo6T0N0PcjJJS6hV4X48jJewHUC5JzarQJrQJ2t3riYJomZ44oAIpUNWdkQPfyEgExEHPdECWG51f0a4cwC7AIrIYRta07863yL5fUBFZcijytjQXn%2FDuE1QcUyfnz8F6yiU9qgBrksj4hJEJjezfdaWz4q7SBX8xaIzxjUpVbcDYMJHQt771V6q2CReNOI2JgEaDwrZGczZpQNHgrR4r1Rxn7o5yslRO4ZE%2B0TYkgW2TYxePVIEohsDUNSCOM2uTjwQT7DBqN3Xp7CxkWbIaMGt%2B6xC4m2zrRv0m72BSmgahIrCYK%2BtCG6vRkQsw5ouMygY6pgHytlBn3WguBqBSuoXpa2Vn7ExW%2BFP7XeNI9qxz24%2FsVkbdAjYiM%2FljlHTPtHaPhR%2FuBGkxnlUOK2iV7bm37HYA4pqzw6YdTUFNTp5vhCV1FvaTLhg9tx64Bf41eEGc8RMPfQ%2FYcK9rTFq5sf1r0rLyBC%2FQYVUH5cyauuhwr9r7PE4w0SIiBSmKDH6FW6Dym9mTRP3rmQ1T6ZwsLFj0%2Fq2xU%2FbwhPen&X-Amz-Signature=8457b78cc99a90bc07e336e67d0b3300ff9b55da2545dbf33394ed3db1b65db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B5UHMDY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T201010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9WJ3hGOkkTzKBfFnIxCIExo6hBcue69D6kHsL5gpC9AiBZFQ9GPY9E3Iruj14iVMYJ9nk7J%2FZZ0nXz6zFSpVd3QCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgqZeWZ1mmBKtFHkCKtwDLqW13YffLa5dOYu2om8vwpKIOANSEmD9r99oeJXsvFDC%2FzuYmy0m%2Fcv3cajJxZGI6dPsk%2FKjkSsdzEXdSWHB0U0CeW42ewiu2ERqQqG1U6FNErhWS7guK4vjzKpQzx9KHuFvbzJl8rcDYxeJHTaHVu1ybGWiXC2cZlXTkLz83ZDnspUV5GJuTAExf50CcV1gJKWmiG4NWSThq9UixWRwwgf0qbG2rXIK6DHdUX7iUK3MhEjKq1jQcP13e1MgVwRYIkb2F8ga%2BOD6CddMP%2BKZCmVpLZWEwiaQKGemhi51MMIL9dKm3TV30ZCvgWjW%2F%2BTvo6T0N0PcjJJS6hV4X48jJewHUC5JzarQJrQJ2t3riYJomZ44oAIpUNWdkQPfyEgExEHPdECWG51f0a4cwC7AIrIYRta07863yL5fUBFZcijytjQXn%2FDuE1QcUyfnz8F6yiU9qgBrksj4hJEJjezfdaWz4q7SBX8xaIzxjUpVbcDYMJHQt771V6q2CReNOI2JgEaDwrZGczZpQNHgrR4r1Rxn7o5yslRO4ZE%2B0TYkgW2TYxePVIEohsDUNSCOM2uTjwQT7DBqN3Xp7CxkWbIaMGt%2B6xC4m2zrRv0m72BSmgahIrCYK%2BtCG6vRkQsw5ouMygY6pgHytlBn3WguBqBSuoXpa2Vn7ExW%2BFP7XeNI9qxz24%2FsVkbdAjYiM%2FljlHTPtHaPhR%2FuBGkxnlUOK2iV7bm37HYA4pqzw6YdTUFNTp5vhCV1FvaTLhg9tx64Bf41eEGc8RMPfQ%2FYcK9rTFq5sf1r0rLyBC%2FQYVUH5cyauuhwr9r7PE4w0SIiBSmKDH6FW6Dym9mTRP3rmQ1T6ZwsLFj0%2Fq2xU%2FbwhPen&X-Amz-Signature=029f3ab6c985c1477a4cda89da950066e642c91001eb310a1e8824dcd54ffcb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

