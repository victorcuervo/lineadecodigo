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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD6ZAAH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdFqA45np9h1Q3ilGronkWEkvgfnfMffH%2Bu9xIaylDvAiEAvj5sY3UJYKQF%2F%2FYUZtKxr%2Fqpp30vQ4b59k8HRvfDUQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCn1WNvDjsJvR6ZOPircA4xFhU0WFBuUek7MY2UJ3JCYz%2BfqG%2BteT3KTqY6uJMlxQ3Ic19Ub5E2puc4SRpJPCr6kNblocNXHYz1N6Ze6W9Ja2eCiJXB%2F%2B0MyGdKYzdbmobx%2FL1ZggIEzNJLZuhjbZvPYmsRaRNcvRlchva6P%2FYlhNCux4PMURCmTaX3419nAoCUJqw%2FkIUXCEctj2oJq27LnhNcwPzY%2B6PlKdsKWRMNXrimcD8YHeBrvf7qCiIXFPOhfC0IvMHEdadNjmS0iJlOB4SaLVnZkFkIKQbLCWa5tG%2Fxq8MlLPng69eAKkgdb5AD6cHbuizYJWNyZNrk0QBkbKyAZUNlwlcS9Ihkdqliy0Uie6Xskx3yvmC1mXSd8mDEjOEamkI2OFAt41%2Bv%2FX1EFh2hY%2FUWpKl%2Fkb%2BYW2pkChVPo0MdCQTohwAoRfQUdKUXiAjxsWTh11v4QSqDUoNRuINnxVawOP%2FUUGRkfhCf0uUHIZKFZB6p9SLIJrNJkdqOb9jsli9HFJ5VfRmpuOQnSoPnjais6gJyqoRUa1OvJNq3B0L8B3BchiDZUlQrrLN8vX23aEUoriVGRI%2FVsgDSsdxL9Pv%2FPSjIDrZ0uJoztIRkPE%2F%2BOT6HRG1%2FfB3NZoTspt3XIhmadFmA2MOvpiMoGOqUBP15W7JcPe7yjFowTWoBHdgrbSjrhgezWXUiC5L%2FBiUAPNdRhqaRvfRSo%2FEIKK%2ByiHYRHBVT9IwxQ22Z85nEDvn1ZutTxP4iWgr3NgevUAoZfDTfKI3cpM2BP1w5S%2Bj%2FQNOpcesHzdjVHjsZZkCzclys0UiZ7MI4Yt0zPsxGaUOaA23tRf9NtT5xZWbOfWFmt40O0N16%2FrQHpDYFfQlkYjt1n%2BPzJ&X-Amz-Signature=a29f4a5cb4e2ac177df43a329880df9c8f97ae1fd3ecfa0bbbee216ec32b6330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXD6ZAAH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdFqA45np9h1Q3ilGronkWEkvgfnfMffH%2Bu9xIaylDvAiEAvj5sY3UJYKQF%2F%2FYUZtKxr%2Fqpp30vQ4b59k8HRvfDUQoq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCn1WNvDjsJvR6ZOPircA4xFhU0WFBuUek7MY2UJ3JCYz%2BfqG%2BteT3KTqY6uJMlxQ3Ic19Ub5E2puc4SRpJPCr6kNblocNXHYz1N6Ze6W9Ja2eCiJXB%2F%2B0MyGdKYzdbmobx%2FL1ZggIEzNJLZuhjbZvPYmsRaRNcvRlchva6P%2FYlhNCux4PMURCmTaX3419nAoCUJqw%2FkIUXCEctj2oJq27LnhNcwPzY%2B6PlKdsKWRMNXrimcD8YHeBrvf7qCiIXFPOhfC0IvMHEdadNjmS0iJlOB4SaLVnZkFkIKQbLCWa5tG%2Fxq8MlLPng69eAKkgdb5AD6cHbuizYJWNyZNrk0QBkbKyAZUNlwlcS9Ihkdqliy0Uie6Xskx3yvmC1mXSd8mDEjOEamkI2OFAt41%2Bv%2FX1EFh2hY%2FUWpKl%2Fkb%2BYW2pkChVPo0MdCQTohwAoRfQUdKUXiAjxsWTh11v4QSqDUoNRuINnxVawOP%2FUUGRkfhCf0uUHIZKFZB6p9SLIJrNJkdqOb9jsli9HFJ5VfRmpuOQnSoPnjais6gJyqoRUa1OvJNq3B0L8B3BchiDZUlQrrLN8vX23aEUoriVGRI%2FVsgDSsdxL9Pv%2FPSjIDrZ0uJoztIRkPE%2F%2BOT6HRG1%2FfB3NZoTspt3XIhmadFmA2MOvpiMoGOqUBP15W7JcPe7yjFowTWoBHdgrbSjrhgezWXUiC5L%2FBiUAPNdRhqaRvfRSo%2FEIKK%2ByiHYRHBVT9IwxQ22Z85nEDvn1ZutTxP4iWgr3NgevUAoZfDTfKI3cpM2BP1w5S%2Bj%2FQNOpcesHzdjVHjsZZkCzclys0UiZ7MI4Yt0zPsxGaUOaA23tRf9NtT5xZWbOfWFmt40O0N16%2FrQHpDYFfQlkYjt1n%2BPzJ&X-Amz-Signature=b081d3cdb8c644b44e9d2b01c7650487341dd5892a2ed5d0250af3aca7740c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

