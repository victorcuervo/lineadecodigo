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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZV67ME%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY0ecsD%2BcLKy3E%2Ff5tslYP0YOAekS2W02oJAcwsd3BQIgGqYsYddv%2BOJgx2Jqj5zHqJ%2FiVVfWVwE7Dcsv%2FyRhqb4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBKqGrxAZLPX9q3VfCrcA9S7vwsbyP60Hn5Dze6mC16swmyT%2FSX0xuZDV97HqUOfFPUF9Zk31BdH1k8pqzyswAddpqLlGWkrgLRY3ERFbkvl0rE6qznKnEneTheNdLNprfMKiDZFUmpltEGDTAYgSRD31Pb%2F8BBsR0NlRBjnyu2%2FwrLMr%2B6Jgb2wbxA4xi2al1pRH5obVqOxLkAwP8TeV2wfg%2FLxRpxpvjzbD6Bx6LgcEHF1QN0Rd97%2BvqWkuc9aZkVaCIAhXPM%2F9ZlATM44yw5kfWQemB7FS5vDcbotI3GsLnlDxAOId7ys3IEE%2BoFRKm69G1T1ucrDXkNld8YDP0wmDeNfkq%2FVRjJcjW3wu0vPGTbtBZS3NT%2FbpwSTV%2BE4QvwILh30g97SLiA80bnK%2Bi40VbtsfVH4BadnNezGBXkrshgApf%2BfL8DBv5kCpUkAAz5PNDb4ZZplsMckvcOgaW%2BXIUf2YXCw6%2FEbUg7P9og1LnkpaVJitk19T7BwBV6jeqxeK8ykZZJfzcUz8oHUMIha5g7IiL16Jk0U9ncrO0MsUpzdjpMChS%2Bd%2Bqq8FEk0bSkGwy75Z2abZjBulfYWTXrjxxC5%2FfwasmPYdgWp7TiPzUv8SfJR0fx4mE3QuvW12eI92YymEdNRubtsMMbeh8oGOqUBqnUlrs9FKZUZzBAV7ekmYh%2BQP6EvMBcsyiqRFnyiZn0Xqrgh3iHslf1YD6jOUGD1fZ43AGvn%2Bl4May9j6BnvXOAwYaNHZ2Zm6GX8tHGZySjf5Swk4DOZvE%2Be4ky91rwdMhKpD9jGejiHQD3Sl7A4jMhuttgbRr8AV4t7gAgHuv06r5nnLLYJdYqj06XzW4SnNPXxe%2FuBiHBcSnZ4vTelYSAZOvmf&X-Amz-Signature=4d516a9b5800f6566a56b3db820b78f356eb2d78116f1a8e209f229e5c933534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCZV67ME%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY0ecsD%2BcLKy3E%2Ff5tslYP0YOAekS2W02oJAcwsd3BQIgGqYsYddv%2BOJgx2Jqj5zHqJ%2FiVVfWVwE7Dcsv%2FyRhqb4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBKqGrxAZLPX9q3VfCrcA9S7vwsbyP60Hn5Dze6mC16swmyT%2FSX0xuZDV97HqUOfFPUF9Zk31BdH1k8pqzyswAddpqLlGWkrgLRY3ERFbkvl0rE6qznKnEneTheNdLNprfMKiDZFUmpltEGDTAYgSRD31Pb%2F8BBsR0NlRBjnyu2%2FwrLMr%2B6Jgb2wbxA4xi2al1pRH5obVqOxLkAwP8TeV2wfg%2FLxRpxpvjzbD6Bx6LgcEHF1QN0Rd97%2BvqWkuc9aZkVaCIAhXPM%2F9ZlATM44yw5kfWQemB7FS5vDcbotI3GsLnlDxAOId7ys3IEE%2BoFRKm69G1T1ucrDXkNld8YDP0wmDeNfkq%2FVRjJcjW3wu0vPGTbtBZS3NT%2FbpwSTV%2BE4QvwILh30g97SLiA80bnK%2Bi40VbtsfVH4BadnNezGBXkrshgApf%2BfL8DBv5kCpUkAAz5PNDb4ZZplsMckvcOgaW%2BXIUf2YXCw6%2FEbUg7P9og1LnkpaVJitk19T7BwBV6jeqxeK8ykZZJfzcUz8oHUMIha5g7IiL16Jk0U9ncrO0MsUpzdjpMChS%2Bd%2Bqq8FEk0bSkGwy75Z2abZjBulfYWTXrjxxC5%2FfwasmPYdgWp7TiPzUv8SfJR0fx4mE3QuvW12eI92YymEdNRubtsMMbeh8oGOqUBqnUlrs9FKZUZzBAV7ekmYh%2BQP6EvMBcsyiqRFnyiZn0Xqrgh3iHslf1YD6jOUGD1fZ43AGvn%2Bl4May9j6BnvXOAwYaNHZ2Zm6GX8tHGZySjf5Swk4DOZvE%2Be4ky91rwdMhKpD9jGejiHQD3Sl7A4jMhuttgbRr8AV4t7gAgHuv06r5nnLLYJdYqj06XzW4SnNPXxe%2FuBiHBcSnZ4vTelYSAZOvmf&X-Amz-Signature=c96f9f4352fe0ffa29d36656c1334c4bd433f4bccdaaf96c559ce17c3f2ae478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

