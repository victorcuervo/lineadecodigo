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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q64GOMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiIB7z6IJD23pnDpS%2BYKC7fuSvGe%2B892UQ3h39HxW3rQIhAM55syGzyZzIy6E6w10lR9fbtw9EzWBiPAapl3pm%2FemfKv8DCHMQABoMNjM3NDIzMTgzODA1IgyWQaiAF9p4v114IQAq3AP1Et%2BcWShJY7XfTWI%2BD2DPB8LonDf0dehh9SJn%2FRcsYnO4KoULVU5cmK3EOZOoiGatG%2FroadGzIww4UF%2FgNeE9Uv40XRcJj9KUphER6h7WB5zNqFV7N6qI5mq1QuzppHBVQd0KoIO8%2BSHFKRi%2F5XTd5KOHhy3Q8wRa%2BaPNbF8iZdqezIl3uocqK9DTmjZwQdDiFwyscfgbXN0LFNe%2Fg2cBu5yoSPMFMYoDOW4QyX8%2BI2FQS%2BH3Kq6kpMiM4BusNmX4IRpRBHmRCxhMy64sOvyAOEvDpSCu3fHyeM0KxWONSGPkygLk1HQvH4t4e3XuK3c2F4gzBk7B4DimhMlwSJSDKNIbjegadUMP0gz7M9ryIv0FsuQ2nTkRGcZi2pIuMWZrkTHo4VcRZMQiiTDmsPvv8%2BFKa0AI2e%2Fi6kqHtsLMMzMgFGavNgcp9HfI94KAC8XbCqjwOA0nCgaHYX8%2BN6S2PgJ%2FD3Nl%2FbZZkWz70kSZibNK1yUiV%2BvDAA5pDmSsdW8IfyKYeNFgt5%2FNs3NVpnlMEMhLnpxthprb1Bm%2FZru3FyUZnMiq9G1N%2BvuU3QJfn%2FRlEWM0znEyl%2BQwj7IDdcyZIJ6Ur%2BSW8PQRybssXkfquYGy4q%2FhFSOoafIbIjD5l4jKBjqkAbMSScJcI36J7Mq1kBKySmcwyLlANJIGoU3vcGQA6Msr%2BC7%2FsjFRIj6%2FNMNcDbEwsDLriiKFfuqCxFcQL8J%2BAF8CSB7sHp4qqrGPzPLSf1weEYUqfGcPnTR%2F7fsjLHggXbHT3EdZxIddE0zCUtUlYYvpm2%2FufDofiOfDGPXPWp2zJ8IxIx9ajNc3aLhnqiF8AsBsVh4NK9mJcOHqfSXkRsnJoS%2Fa&X-Amz-Signature=ae332aec6eb95be3cf67b16ae41d313f9ebce5853707a5107b54389138cafebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q64GOMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiIB7z6IJD23pnDpS%2BYKC7fuSvGe%2B892UQ3h39HxW3rQIhAM55syGzyZzIy6E6w10lR9fbtw9EzWBiPAapl3pm%2FemfKv8DCHMQABoMNjM3NDIzMTgzODA1IgyWQaiAF9p4v114IQAq3AP1Et%2BcWShJY7XfTWI%2BD2DPB8LonDf0dehh9SJn%2FRcsYnO4KoULVU5cmK3EOZOoiGatG%2FroadGzIww4UF%2FgNeE9Uv40XRcJj9KUphER6h7WB5zNqFV7N6qI5mq1QuzppHBVQd0KoIO8%2BSHFKRi%2F5XTd5KOHhy3Q8wRa%2BaPNbF8iZdqezIl3uocqK9DTmjZwQdDiFwyscfgbXN0LFNe%2Fg2cBu5yoSPMFMYoDOW4QyX8%2BI2FQS%2BH3Kq6kpMiM4BusNmX4IRpRBHmRCxhMy64sOvyAOEvDpSCu3fHyeM0KxWONSGPkygLk1HQvH4t4e3XuK3c2F4gzBk7B4DimhMlwSJSDKNIbjegadUMP0gz7M9ryIv0FsuQ2nTkRGcZi2pIuMWZrkTHo4VcRZMQiiTDmsPvv8%2BFKa0AI2e%2Fi6kqHtsLMMzMgFGavNgcp9HfI94KAC8XbCqjwOA0nCgaHYX8%2BN6S2PgJ%2FD3Nl%2FbZZkWz70kSZibNK1yUiV%2BvDAA5pDmSsdW8IfyKYeNFgt5%2FNs3NVpnlMEMhLnpxthprb1Bm%2FZru3FyUZnMiq9G1N%2BvuU3QJfn%2FRlEWM0znEyl%2BQwj7IDdcyZIJ6Ur%2BSW8PQRybssXkfquYGy4q%2FhFSOoafIbIjD5l4jKBjqkAbMSScJcI36J7Mq1kBKySmcwyLlANJIGoU3vcGQA6Msr%2BC7%2FsjFRIj6%2FNMNcDbEwsDLriiKFfuqCxFcQL8J%2BAF8CSB7sHp4qqrGPzPLSf1weEYUqfGcPnTR%2F7fsjLHggXbHT3EdZxIddE0zCUtUlYYvpm2%2FufDofiOfDGPXPWp2zJ8IxIx9ajNc3aLhnqiF8AsBsVh4NK9mJcOHqfSXkRsnJoS%2Fa&X-Amz-Signature=bb00214b960f399dd96e125b0544570ad619cfdc025b490e973087deb5468ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

