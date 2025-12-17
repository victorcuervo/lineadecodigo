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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKMF7AC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHyaJIzKx2zPYf74%2Bku9SzgoMxkms1z4RTX4ZawquzqkCIQCQNSsPvwbAqhRvNfaF9Slj45%2B8fiyi3WDEO8Mom5ccyyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMSqTf8lkRR%2FMxX6qfKtwDnmxa%2BkZVL6QqabQjzP0D5%2FBIpakmdiomTmYg6rniflOknPoJDTzki1o8O3xCEknIKHqGEm7Ac4COCrwXv6ybG6gyz3l7G5Gj0XejGMPVooT1IymtbVTJJr9MQrAhfsRHiTSKClyuu9OnJcSGXpKzFDnVkJs2uxg8FgNPduMdzeUZ5chajBO2bLMlHLX5X01ZC96jYUHUZEr7xexVGnwlem0rdShmb%2BW5nRCau0GJs9yM7OAqRDWVurVM5awOKVUC96H%2Bipg47t7TE2slkFEu8L66xutV9Dsr8byhdMs0kZLKz6taMjw2HCTMJ2vvTon3XaBH41p2qgYE5FIhtgD5ZpVhLw4JlUlTAApBCgPrgn12UDJDesas6vMvf8gzyZkmoWvw3YciTF0l7Z%2B6LorH8kJ7vSLaLiSMg%2F1x6ElDdxEgBYVz2JXWn8nqoEVJdtxsB6Eaj2uzZ2pYwCPXrjHNsQJ1I3JnyPjTcAgC8LinoMy%2FJvSC5xYpQ7xlfTjnStTYDvTPCnCxYtrAdxORT1UosLKAVtM3RtjetpxLDi4a2Tj%2Bd00SbvZsJLPm9NQRUCQlC4q%2F5myzmjOf1t6RqNJacK0kPKp%2B%2BEpBlPxUEUB2%2B7qRpHDWGjzfdQn0a5AwnYOJygY6pgGQYwaq8lCU%2BCTxOUZrbOGFNKsFLVn1uUAC3s%2BWT%2FMMLB%2BKY5EHknncGcXZ3NNmBTHTP60wOSrJAVj%2FF6Ti6HLB1FlqqRa%2FY3i93LiWFez3khb%2FCy250%2BAaSL%2BYBH0S9VAIIcx8v87%2BPd3xGcZMzgRPzbafOO8cZZOAqWs%2FwG3sKUDlm5hG8EjKtGUQBTF6MtGCxSSPTZVQrinErXsPJ8uE7Aj2Y3ma&X-Amz-Signature=2ab6ae03913839e86ce2aec69bc2b686d5dcfd4aae1d5241baf9988ef3a7a78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URKMF7AC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHyaJIzKx2zPYf74%2Bku9SzgoMxkms1z4RTX4ZawquzqkCIQCQNSsPvwbAqhRvNfaF9Slj45%2B8fiyi3WDEO8Mom5ccyyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMSqTf8lkRR%2FMxX6qfKtwDnmxa%2BkZVL6QqabQjzP0D5%2FBIpakmdiomTmYg6rniflOknPoJDTzki1o8O3xCEknIKHqGEm7Ac4COCrwXv6ybG6gyz3l7G5Gj0XejGMPVooT1IymtbVTJJr9MQrAhfsRHiTSKClyuu9OnJcSGXpKzFDnVkJs2uxg8FgNPduMdzeUZ5chajBO2bLMlHLX5X01ZC96jYUHUZEr7xexVGnwlem0rdShmb%2BW5nRCau0GJs9yM7OAqRDWVurVM5awOKVUC96H%2Bipg47t7TE2slkFEu8L66xutV9Dsr8byhdMs0kZLKz6taMjw2HCTMJ2vvTon3XaBH41p2qgYE5FIhtgD5ZpVhLw4JlUlTAApBCgPrgn12UDJDesas6vMvf8gzyZkmoWvw3YciTF0l7Z%2B6LorH8kJ7vSLaLiSMg%2F1x6ElDdxEgBYVz2JXWn8nqoEVJdtxsB6Eaj2uzZ2pYwCPXrjHNsQJ1I3JnyPjTcAgC8LinoMy%2FJvSC5xYpQ7xlfTjnStTYDvTPCnCxYtrAdxORT1UosLKAVtM3RtjetpxLDi4a2Tj%2Bd00SbvZsJLPm9NQRUCQlC4q%2F5myzmjOf1t6RqNJacK0kPKp%2B%2BEpBlPxUEUB2%2B7qRpHDWGjzfdQn0a5AwnYOJygY6pgGQYwaq8lCU%2BCTxOUZrbOGFNKsFLVn1uUAC3s%2BWT%2FMMLB%2BKY5EHknncGcXZ3NNmBTHTP60wOSrJAVj%2FF6Ti6HLB1FlqqRa%2FY3i93LiWFez3khb%2FCy250%2BAaSL%2BYBH0S9VAIIcx8v87%2BPd3xGcZMzgRPzbafOO8cZZOAqWs%2FwG3sKUDlm5hG8EjKtGUQBTF6MtGCxSSPTZVQrinErXsPJ8uE7Aj2Y3ma&X-Amz-Signature=cb2b5dc19ce08d730da04ff36ee48ae8dd73637110795161c49f66317a58846d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

