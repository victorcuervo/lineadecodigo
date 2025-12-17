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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXBBAL2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFD4ptMF9cS0s%2F36bXQDE8YEPD7Bi5%2BVq4Fegbjf6lmCAiEA%2FBs9jCPAlSm5HiUby%2F4k6OmKcviR%2F1wcmoTqefUr%2Buwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDD6yQPDZOba7g%2BoK8yrcA8E6kuzQxGtNNFawQ9QV48rX8RDHZBFSXoWuof4SqNIpQUvrkSdcdJXsmiCCBdjwb1FFfvQp6ZAX8t823Y12UeJxQ9GO3jZVfr%2F1dXPADPiWBD02TWsXq8eXz8xLqb9llebbROQWQQohF6gtS2xEoLV5g60zLs%2FpT7%2F1NbOlWrNnxEQfpBr6sawS0HysCRem3MhYgZIM8tRaOiM%2BrBqY1LEuKY6eB8xQ3EfvCYwoJJCszxZtb52K8yPzzuDQvS%2BNUDAAVrnHExBZAXByqRZCxcskTUD7Gu4POnSghB2QEAUDI6088yHcrGzrvhqBOcXcVPY6PZbk34moF0gYN6PCxgK6yK%2FrA1iavXAWIIOI11DYXYNP4BONPTBjYVEwrDybDgcE6H%2F0K4FKIahuIvFHzi0%2Bg98dl9FazBSFK%2BrTs1IMzUKRXFTZJMvlsQ%2BT%2F4Nh9usmNprgX7RgtjMWO4E6kOfFw94WP%2FZ9n8DxUGPcxclDoEQ1WMr6f%2BelsW1xogW90Z3MwxZUgx79%2Fymb4ia0%2F45UgXuCnMY5zKPq3cr3OrnPDXdtzANORjBfphOLvrR4PdDUCrvIwrTlRelpjKObPjoRLwNx0ciNySCNGxbcYi6MAT3U6WZE6W8w5qxGMI3hisoGOqUBo87VgRme8FT08rfH9U3Stds1njoHOmU2v4oaRx%2FOU5QW9tlhpsAUg%2B%2Bpa02MLXmmM2o9it6ny1%2B0jENalg2wy9wTh1FtNrQUvOlzqkgqJoO72lkqWLgZT1Wlk2oX%2FIt7CcCAqUUeosj7GmUzNVy8l8xM1S4B8hmPOoRB%2BYR3ZCa3z493vyC%2Fx3Kmad1stHiAWo7AR8ACEZO5wlulwMtkJnL7Xng8&X-Amz-Signature=f254503bf5ef2c76c718ff506e2df1d20d0de9ff6d4663fb963b89645032899b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAXBBAL2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFD4ptMF9cS0s%2F36bXQDE8YEPD7Bi5%2BVq4Fegbjf6lmCAiEA%2FBs9jCPAlSm5HiUby%2F4k6OmKcviR%2F1wcmoTqefUr%2Buwq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDD6yQPDZOba7g%2BoK8yrcA8E6kuzQxGtNNFawQ9QV48rX8RDHZBFSXoWuof4SqNIpQUvrkSdcdJXsmiCCBdjwb1FFfvQp6ZAX8t823Y12UeJxQ9GO3jZVfr%2F1dXPADPiWBD02TWsXq8eXz8xLqb9llebbROQWQQohF6gtS2xEoLV5g60zLs%2FpT7%2F1NbOlWrNnxEQfpBr6sawS0HysCRem3MhYgZIM8tRaOiM%2BrBqY1LEuKY6eB8xQ3EfvCYwoJJCszxZtb52K8yPzzuDQvS%2BNUDAAVrnHExBZAXByqRZCxcskTUD7Gu4POnSghB2QEAUDI6088yHcrGzrvhqBOcXcVPY6PZbk34moF0gYN6PCxgK6yK%2FrA1iavXAWIIOI11DYXYNP4BONPTBjYVEwrDybDgcE6H%2F0K4FKIahuIvFHzi0%2Bg98dl9FazBSFK%2BrTs1IMzUKRXFTZJMvlsQ%2BT%2F4Nh9usmNprgX7RgtjMWO4E6kOfFw94WP%2FZ9n8DxUGPcxclDoEQ1WMr6f%2BelsW1xogW90Z3MwxZUgx79%2Fymb4ia0%2F45UgXuCnMY5zKPq3cr3OrnPDXdtzANORjBfphOLvrR4PdDUCrvIwrTlRelpjKObPjoRLwNx0ciNySCNGxbcYi6MAT3U6WZE6W8w5qxGMI3hisoGOqUBo87VgRme8FT08rfH9U3Stds1njoHOmU2v4oaRx%2FOU5QW9tlhpsAUg%2B%2Bpa02MLXmmM2o9it6ny1%2B0jENalg2wy9wTh1FtNrQUvOlzqkgqJoO72lkqWLgZT1Wlk2oX%2FIt7CcCAqUUeosj7GmUzNVy8l8xM1S4B8hmPOoRB%2BYR3ZCa3z493vyC%2Fx3Kmad1stHiAWo7AR8ACEZO5wlulwMtkJnL7Xng8&X-Amz-Signature=8a6b3e1f21f7d1b0843e1fa79f01a44448fbfe515f35fab1d9570474376cabbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

