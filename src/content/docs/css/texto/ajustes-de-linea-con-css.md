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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6WBXPO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcwWZUtRmwSwdH3KOv6tVfv9dXkUV8zo2uuP3YP6AhpgIhAP%2FxWREzUPhgvfayHQRZW%2BTlTwqCCyWg3P5f5z6rirYOKv8DCH4QABoMNjM3NDIzMTgzODA1Igz2w4DelyvBgsrVnm8q3ANNmiuGbYDDtEUf9jnLtyqFC58T%2FcvY7PMgjregn4jV3iQxwG046u45zU7noIQlqYcBEC%2FiG6ygYdiCxfmX21YHF6PJHuvzk6NtlQ9QVqo8pdnNduHQ1C07G3awqEu51LX6SMpEcq5FgWZN7wzugNW%2FqmsALfjrDxotBGnmz9OwHKQho2X7uRN7fp3YupG0WcQfLJf84JMFzfoEh1lnnUM9wDOMLmHkcFcbfuwCWrWKY1%2B4CmCarOSKGDvaUHMAUHKJ0DaIrbxCHHoLCBn1E8cLP3ESlj6FOGhldNSRn6vC1%2BQM9FryhncKiRnb005jvszAUfAEpxSPqPJ30OEbpKS3hDEDMQ6g2NSW5r5yzGiMDP72pIBPKVNGEjaJtetl8ruOztLRscHEOE%2BWcYt6%2BNBtOM5I%2FE8ArUgmBZrDTd0F%2B73kxIqu9LIjJ2BHRqiRbtDWXB2YHCGz7gytpLPo7ve%2FSu3bvG1zhTP2U%2F1bRfTanB6mh8uSEd%2BR6qSG%2FjFw%2FDDx%2BPZkEMP2nirrcbDqgCJbcFD2AEO%2FZ5oxPTJzcn%2BZJVB8rQNkyHqwG0p2oP%2Br7v2IiYf67ofeTqP5XZa6XbSDC%2B0nWduyb0E2ppnSfvVzu0BdYwHht07Ty%2FK9GDCrxorKBjqkAcG5LVCan3jH9wdqQxNTWU%2FWpsTNWEzIoruH4L%2FbaafHQTG9jYIMZe4iCC%2B%2BmwNoY4W1sRL57AIqMwMkjbtsMhV9z3HCGqsQcUWAfcE1HyR5xMTN2U%2BC0tNtFu9L8YcZiBe8Wc0YyVvEevx6Uo9vv0eqKMXJpgeSqmJY7sjsZ2rws0gtd5IC9ThA86onyJxPXdTy0VWj8vNc3Jjp67fA07Dzlrot&X-Amz-Signature=d32072ec03b63ab15ac358413679b1e1de84fd819e1880d998408a85f881e68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU6WBXPO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcwWZUtRmwSwdH3KOv6tVfv9dXkUV8zo2uuP3YP6AhpgIhAP%2FxWREzUPhgvfayHQRZW%2BTlTwqCCyWg3P5f5z6rirYOKv8DCH4QABoMNjM3NDIzMTgzODA1Igz2w4DelyvBgsrVnm8q3ANNmiuGbYDDtEUf9jnLtyqFC58T%2FcvY7PMgjregn4jV3iQxwG046u45zU7noIQlqYcBEC%2FiG6ygYdiCxfmX21YHF6PJHuvzk6NtlQ9QVqo8pdnNduHQ1C07G3awqEu51LX6SMpEcq5FgWZN7wzugNW%2FqmsALfjrDxotBGnmz9OwHKQho2X7uRN7fp3YupG0WcQfLJf84JMFzfoEh1lnnUM9wDOMLmHkcFcbfuwCWrWKY1%2B4CmCarOSKGDvaUHMAUHKJ0DaIrbxCHHoLCBn1E8cLP3ESlj6FOGhldNSRn6vC1%2BQM9FryhncKiRnb005jvszAUfAEpxSPqPJ30OEbpKS3hDEDMQ6g2NSW5r5yzGiMDP72pIBPKVNGEjaJtetl8ruOztLRscHEOE%2BWcYt6%2BNBtOM5I%2FE8ArUgmBZrDTd0F%2B73kxIqu9LIjJ2BHRqiRbtDWXB2YHCGz7gytpLPo7ve%2FSu3bvG1zhTP2U%2F1bRfTanB6mh8uSEd%2BR6qSG%2FjFw%2FDDx%2BPZkEMP2nirrcbDqgCJbcFD2AEO%2FZ5oxPTJzcn%2BZJVB8rQNkyHqwG0p2oP%2Br7v2IiYf67ofeTqP5XZa6XbSDC%2B0nWduyb0E2ppnSfvVzu0BdYwHht07Ty%2FK9GDCrxorKBjqkAcG5LVCan3jH9wdqQxNTWU%2FWpsTNWEzIoruH4L%2FbaafHQTG9jYIMZe4iCC%2B%2BmwNoY4W1sRL57AIqMwMkjbtsMhV9z3HCGqsQcUWAfcE1HyR5xMTN2U%2BC0tNtFu9L8YcZiBe8Wc0YyVvEevx6Uo9vv0eqKMXJpgeSqmJY7sjsZ2rws0gtd5IC9ThA86onyJxPXdTy0VWj8vNc3Jjp67fA07Dzlrot&X-Amz-Signature=fcb9a55afe155c014b6353ac4f7d7320a90646a15fe30163029bf5bb4f075985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

