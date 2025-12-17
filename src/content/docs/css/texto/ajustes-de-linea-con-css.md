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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMGIXC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQZl%2BnlJ%2FK9iPbwmG1kvUIQ8VM1041wWY8y9hSs5OZ6AIhAIS6%2BOl0L2hKF7yyauRuD%2B6KIdDc5%2FCmKFiNVuelu3xsKv8DCHoQABoMNjM3NDIzMTgzODA1Igy%2F8xTuVOUklAulvgcq3AOTetPllyZe7y3lnKYG5H1CciToiUa9ISR9ZB9WZt675LNsIH5mrWYsCg6W1pv2z4F17RTdkVKllEbqpV5SziK1T8pTCfLTgdRUT8TrzBY5QD7MlWso3iGovymcC9kTw4Trl2qkh3QQdw8e1bQjqwZEA3W7rAM391g%2FVg7K2Faui1NYNWCg13IM%2F2HNsh23DPFNHwqsNFkyEsA5GzgOx0fMQaHFEiL49A2FKtaKz2loH1fSeKbCfpCqfRagMZWwbD6JIExXyGYZmrfhtuRBB7kJQCGa0gj4AoNkv06ZW96cLU2EC3og1IuAPYoNhIeNE%2BB%2Bp8KC7Eaws3Xc8ggc7vQcOdUzi5qSbndmlQ26YgXc1T5bR9XkSY2yXOMa13OzPQV6REo%2B3Pv9PqR1KSzE%2BWMvRsF%2BRB%2BDchjAEgGM%2B5Fs%2FitqE3wTzU%2FXPsQPqXHHiXwKrpz1p%2FSXb7vBmBKBC6rz3rcyJ1WfVoPwvVyDJru%2BPTqbW1pnOVaCkCSUn3rASvCyNM4ECuXqlc8%2BhqXNMBViqSoIjrPDxkRet1W73GK2EAuptQP%2FjNAeu2RUkp9Iw4tDHTrfdg0JBAEXIQe8tD8Q9TJjQV20NvZKdGKWoju5%2B2XgR2oNuDWQaSJZGzCj0onKBjqkAabgCczanKw99S9X1cxpXTj42CjQZwp%2FUHxlL4e32l9Et0eSMxLlagpymn5iLIxIEMMmdClVf9A4TI89ExJqUGh0OkbvGxwnUgRrHe7F6mQkwwMIqfjBJoWWZbbYo5l0Acy09%2BLrqknXOt%2B6e7lGOhzs4YeNAEPJsd6jSWBSwyR2RSFNiQ3Njf2fXhKwXxjl%2BhefrPH0gY%2FRsGaK4AcqXWDlQ9FE&X-Amz-Signature=1b815d21e2f35ce46df2114d1502a406c41fb24b9379f5d9e16b5c25b41ccb9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMGIXC3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T082846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQZl%2BnlJ%2FK9iPbwmG1kvUIQ8VM1041wWY8y9hSs5OZ6AIhAIS6%2BOl0L2hKF7yyauRuD%2B6KIdDc5%2FCmKFiNVuelu3xsKv8DCHoQABoMNjM3NDIzMTgzODA1Igy%2F8xTuVOUklAulvgcq3AOTetPllyZe7y3lnKYG5H1CciToiUa9ISR9ZB9WZt675LNsIH5mrWYsCg6W1pv2z4F17RTdkVKllEbqpV5SziK1T8pTCfLTgdRUT8TrzBY5QD7MlWso3iGovymcC9kTw4Trl2qkh3QQdw8e1bQjqwZEA3W7rAM391g%2FVg7K2Faui1NYNWCg13IM%2F2HNsh23DPFNHwqsNFkyEsA5GzgOx0fMQaHFEiL49A2FKtaKz2loH1fSeKbCfpCqfRagMZWwbD6JIExXyGYZmrfhtuRBB7kJQCGa0gj4AoNkv06ZW96cLU2EC3og1IuAPYoNhIeNE%2BB%2Bp8KC7Eaws3Xc8ggc7vQcOdUzi5qSbndmlQ26YgXc1T5bR9XkSY2yXOMa13OzPQV6REo%2B3Pv9PqR1KSzE%2BWMvRsF%2BRB%2BDchjAEgGM%2B5Fs%2FitqE3wTzU%2FXPsQPqXHHiXwKrpz1p%2FSXb7vBmBKBC6rz3rcyJ1WfVoPwvVyDJru%2BPTqbW1pnOVaCkCSUn3rASvCyNM4ECuXqlc8%2BhqXNMBViqSoIjrPDxkRet1W73GK2EAuptQP%2FjNAeu2RUkp9Iw4tDHTrfdg0JBAEXIQe8tD8Q9TJjQV20NvZKdGKWoju5%2B2XgR2oNuDWQaSJZGzCj0onKBjqkAabgCczanKw99S9X1cxpXTj42CjQZwp%2FUHxlL4e32l9Et0eSMxLlagpymn5iLIxIEMMmdClVf9A4TI89ExJqUGh0OkbvGxwnUgRrHe7F6mQkwwMIqfjBJoWWZbbYo5l0Acy09%2BLrqknXOt%2B6e7lGOhzs4YeNAEPJsd6jSWBSwyR2RSFNiQ3Njf2fXhKwXxjl%2BhefrPH0gY%2FRsGaK4AcqXWDlQ9FE&X-Amz-Signature=d45cb70f07043b5623b0d8ea72bceff565d7708333cf3cc1958b40a01791a711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

