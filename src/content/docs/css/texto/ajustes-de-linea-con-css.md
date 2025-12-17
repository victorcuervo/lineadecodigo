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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRNWI4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbtmEDoEZw9rW9ero0KhnDMSNsLUaW4KyTeEjmnKjb0AIhAKl6mvUXeO2ygk4THIOnSd%2B1HZ7KfOPKHJAsGWvdnKGuKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykyNBjDisJFRwnFMcq3APCfpK%2FNkb4uh99lSU%2BfOArryC3EuMB0uPgIK4tg2zUKG2icgzyRoXq5vn6vNXNMCAqryUH4AHz9MkbW9EwAdmcLfzatqNW0BRq1Bh%2FWVWkW93TlIuy1Lv%2FgBMepizPDMFN%2Fdka%2F1LvIxTHy8x89L4hnOI1aQtcqADtaV89nhVtQ0jOJYFNi1p5%2FjcKWiFeqzbDl5YcgH43M7T9M6Hpk%2F%2FtLASO9qJ6syCjlMI4W6Ii3MDL3wzCv35ZKMB0o3fuPkqAgmXuFNZop085jONE%2BgYj3PCBEOaBxL2MNUYWgjxlGdgCNj34O6y6j8hc931o5dCXlGXTDKBSShRRMp5TLhutdW%2FA9akN%2FKXo87919pnuZ1Hoxswb13bHGQC5AG8TxT9CTbhJD0agqCJK6iboyjU5FxH9CzacFUsoU7x7PXOhzcoKLRvdRciCZZjexyWjTOFuyk5Cfe9XxxoBXQwEYQbO%2FaQdaneDo8mnnG1P0aFKxzlWHzSLRPTVJduN3XziqDH7kBEoCipc9maUdePUHYMqXc8gDRkqO7t6mmBH7F7Atca%2FJiGoKDjtp%2FWkg8g5HiJlzFrGJZg7aAnxVkvbbXMH0VhPNBU9yvQdf3UBTUdG32SC%2FpbVDXCNppnSxzCBgIvKBjqkAZ0f5oZsQELPCMjKNxZhYqjTLx5TBDhK%2BMqi%2FlXnDiNFSw%2F6rBg7Sswo3P6Tq0b49RbwKRl%2BpVqOx5yAeCBXmYQ6RGr7GfYR5TiMmSnda5jmFN6ifF5TdGAZhZRrqm2VC7gc2LCGw4oh8QqvqVgmEqOojvBDMEGcmQgYt46S0FIIlEFKEX1KJKOvnPsw5hO11gc13PNgyjmUIAGfPczthygpXLLE&X-Amz-Signature=0243b64aa3d7cd332307493eeda44e29ee9847aed32e6b5ca2ba731221dacbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRNWI4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbtmEDoEZw9rW9ero0KhnDMSNsLUaW4KyTeEjmnKjb0AIhAKl6mvUXeO2ygk4THIOnSd%2B1HZ7KfOPKHJAsGWvdnKGuKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykyNBjDisJFRwnFMcq3APCfpK%2FNkb4uh99lSU%2BfOArryC3EuMB0uPgIK4tg2zUKG2icgzyRoXq5vn6vNXNMCAqryUH4AHz9MkbW9EwAdmcLfzatqNW0BRq1Bh%2FWVWkW93TlIuy1Lv%2FgBMepizPDMFN%2Fdka%2F1LvIxTHy8x89L4hnOI1aQtcqADtaV89nhVtQ0jOJYFNi1p5%2FjcKWiFeqzbDl5YcgH43M7T9M6Hpk%2F%2FtLASO9qJ6syCjlMI4W6Ii3MDL3wzCv35ZKMB0o3fuPkqAgmXuFNZop085jONE%2BgYj3PCBEOaBxL2MNUYWgjxlGdgCNj34O6y6j8hc931o5dCXlGXTDKBSShRRMp5TLhutdW%2FA9akN%2FKXo87919pnuZ1Hoxswb13bHGQC5AG8TxT9CTbhJD0agqCJK6iboyjU5FxH9CzacFUsoU7x7PXOhzcoKLRvdRciCZZjexyWjTOFuyk5Cfe9XxxoBXQwEYQbO%2FaQdaneDo8mnnG1P0aFKxzlWHzSLRPTVJduN3XziqDH7kBEoCipc9maUdePUHYMqXc8gDRkqO7t6mmBH7F7Atca%2FJiGoKDjtp%2FWkg8g5HiJlzFrGJZg7aAnxVkvbbXMH0VhPNBU9yvQdf3UBTUdG32SC%2FpbVDXCNppnSxzCBgIvKBjqkAZ0f5oZsQELPCMjKNxZhYqjTLx5TBDhK%2BMqi%2FlXnDiNFSw%2F6rBg7Sswo3P6Tq0b49RbwKRl%2BpVqOx5yAeCBXmYQ6RGr7GfYR5TiMmSnda5jmFN6ifF5TdGAZhZRrqm2VC7gc2LCGw4oh8QqvqVgmEqOojvBDMEGcmQgYt46S0FIIlEFKEX1KJKOvnPsw5hO11gc13PNgyjmUIAGfPczthygpXLLE&X-Amz-Signature=101c946af1d970d77f8bb21f3e6d0a13ef25696df84f257a6cb812c2b3e01d45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

