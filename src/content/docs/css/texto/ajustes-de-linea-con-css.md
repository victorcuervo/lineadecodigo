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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUS3ITR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3rSZzTUE4diPy8bhqDR78pFSReZQcHVTJa%2BwJLzmOlAIhANAy9H2CKMCQtUISlgGJSd6f91GnlDisfInfvXdg%2BP1TKv8DCHkQABoMNjM3NDIzMTgzODA1IgxccKkwdweLbAk9az8q3AMYN%2FYA2IN1GM4EtKs0esGZZ19JPLKOjJ4V0CVvb7E8cKtMPXVYGbj4El3UDpR58Y13ncDOotiujeaUDYZ7L8QdQYvN2fXXLsxsDhw%2F1nIc%2FM3UATAyq8W1jIfgYzgakRqDaDNouLVIeV5sq2WK9QYxjPKQM4Pnf3IkrghEAXYilGixXbnTpvXo9vGKDSo5JFJHNGCeY5hYPrBZSjmbt7ay%2FU3ciVrbxru3frS8AiPLTtJQA5tGiy%2BphXGtdzUbrJGVAHJXQdwr1oHDMgWSgkDxZaFZW8tkQm74rMqVEO0Tx1z%2FmCCTmfWJu3%2BLip9HkjpjtGXfQTZg7%2FKSdOKCsxargZ6vKRAl1XcGEXp6QMX1MTm9QZyM033vlCpMz0YMBszSDw01DK2eqOfz%2BTxGNEceziSF5%2FZXP6f2Ccwp0jPKm9FPGo9S5zarvJQc2fQANAkSm4vIRmqoPoBUH1l%2BxcK2zlWn9jxLIMvn%2FWXyZ4zIgsKBcLbws9po8bB9aSOd4UAy635%2BDl38%2FAa1JS%2FmfSgBAWQkGut5y8WaU0vzNI9LzQ5H%2BgFZDWwpxEgHzwwrezFcM%2FnNCZ1l7QJeNes2H%2B9jVit%2F2KXQ8VfyOFDVrFY%2FEAOsme9Ias8So3a%2F4DCeuInKBjqkAZbs2mDBZ5GS2mCX%2FcRaFqNmVO4APpP0XvvcIq6Z%2BMSNioHbzJZt6wOXNlMg7ryAB6JjiXInKq%2FUypQCGTT0CWC%2FOz0yTePtdnYlHKr%2FS42MSTv1L%2Bw3Od7BDec%2BAV5AF8XJh47vknpXqHE3DFSw6N7bfq8bEvG%2FZCWCW4q7bpidoUcVxWK8p3%2FsU4GLZNo86yb6f466nE4oSxC6KhYbv9bmOZxY&X-Amz-Signature=1784cf1e60f4bd3eb3821320b794e68c023923a01588f368feb789396c2409a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EUS3ITR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3rSZzTUE4diPy8bhqDR78pFSReZQcHVTJa%2BwJLzmOlAIhANAy9H2CKMCQtUISlgGJSd6f91GnlDisfInfvXdg%2BP1TKv8DCHkQABoMNjM3NDIzMTgzODA1IgxccKkwdweLbAk9az8q3AMYN%2FYA2IN1GM4EtKs0esGZZ19JPLKOjJ4V0CVvb7E8cKtMPXVYGbj4El3UDpR58Y13ncDOotiujeaUDYZ7L8QdQYvN2fXXLsxsDhw%2F1nIc%2FM3UATAyq8W1jIfgYzgakRqDaDNouLVIeV5sq2WK9QYxjPKQM4Pnf3IkrghEAXYilGixXbnTpvXo9vGKDSo5JFJHNGCeY5hYPrBZSjmbt7ay%2FU3ciVrbxru3frS8AiPLTtJQA5tGiy%2BphXGtdzUbrJGVAHJXQdwr1oHDMgWSgkDxZaFZW8tkQm74rMqVEO0Tx1z%2FmCCTmfWJu3%2BLip9HkjpjtGXfQTZg7%2FKSdOKCsxargZ6vKRAl1XcGEXp6QMX1MTm9QZyM033vlCpMz0YMBszSDw01DK2eqOfz%2BTxGNEceziSF5%2FZXP6f2Ccwp0jPKm9FPGo9S5zarvJQc2fQANAkSm4vIRmqoPoBUH1l%2BxcK2zlWn9jxLIMvn%2FWXyZ4zIgsKBcLbws9po8bB9aSOd4UAy635%2BDl38%2FAa1JS%2FmfSgBAWQkGut5y8WaU0vzNI9LzQ5H%2BgFZDWwpxEgHzwwrezFcM%2FnNCZ1l7QJeNes2H%2B9jVit%2F2KXQ8VfyOFDVrFY%2FEAOsme9Ias8So3a%2F4DCeuInKBjqkAZbs2mDBZ5GS2mCX%2FcRaFqNmVO4APpP0XvvcIq6Z%2BMSNioHbzJZt6wOXNlMg7ryAB6JjiXInKq%2FUypQCGTT0CWC%2FOz0yTePtdnYlHKr%2FS42MSTv1L%2Bw3Od7BDec%2BAV5AF8XJh47vknpXqHE3DFSw6N7bfq8bEvG%2FZCWCW4q7bpidoUcVxWK8p3%2FsU4GLZNo86yb6f466nE4oSxC6KhYbv9bmOZxY&X-Amz-Signature=c0fb0723496d7fbcc503181de46ecaedfe06defafe64c4ffdf80620407a25ff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

