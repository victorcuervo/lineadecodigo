---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Q22CZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZh9e%2Ft5tPTrN3aApsIbSjAvmxKyMpD0y4PejMbR2CQIhAKgmxrHyHFpUviTJsBFfyId%2FTq7ZKSw1K4lelHLkMoTrKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2F6uxrz2F1P%2B%2B8JAq3APMOFVp7lhkt8g86VM7p9pWRrXFOMObD4dPz8z80JR%2B0lboZGQLdVnWT8SSOGoK7hf1XfNLUzHq8w9Sj%2ByNj1LEh0DBI%2B7tY3dq7Gs3gjwwUqkRlNghpiYhB%2BzQigwIjvOFx3OUHQ%2BqSIgUT4OzBGDiz%2Ftu%2BHweAzUqpi8nFPtOIZNA7NrR081QkGkNiIzoC9Uw2A7CcTxmHIKmiYztPLIrEXY4XzVt%2FCV7s5L8M%2F0FzZN55zZyYwHap16b9YXTxNwZ1V%2Bw%2B65EpngeC7HuNyS3GlYGQ4H1c5GWCBRQkzr1ZEyzI%2B%2BT09FFfb%2Fb46Ql7pbIfA53L5F6cTpKr1MzfaJJJTF9HnDpwX0D%2FdNW1yW7dJ637YhknK%2FRLKJgg7WCwJ2QXNm6IefWkQY0r1OtwWxn16gU%2BANikw5RavYvumRHMFZE1Vrc%2FdCzLAmxWZiqWPa8GrLpyJ3XIEkQGVMeO%2By9VbKBg3IvAE%2BiN0Mld1PJBqWWtTSr3HvblQRa5E%2B9Y%2BdTGmZwF%2F4rzY%2FwhWx1bA393I21LuW%2FWaAIn%2BuPlt05VsJaMUnKS2GRW8OZ9d3%2BzmiEIjV7zSSqzXl%2F98bkMooce0B5zk5wfvEj258NKnSvqPMgRCO5Inu3mTFJGTCHiN%2FJBjqkAeMDj9zUxToyg3pNgkOtbJNLBHyz4kerZXQj6KVgy6X%2BsOldcjtZmSyyK5jWt2GMMVqvMQaBJM4aI89XtH8ONUd9%2B7rdlyaGh7JFZ1uw8Eu%2BQaFLbaSxbAsLEfNeNvu7s40uwajap47mXMjchnq8aqDV2Un5eNLJMlZeoNQhtRGxn3qTwjQjtr6SKmuRgd85ZtDjeguNc1giWK7OqTJctyHG6xTM&X-Amz-Signature=17a9b16fb7667f649cb75e1866e9e5f79e3345bdaebd3e6a80f7a7bbbc630670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643Q22CZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJZh9e%2Ft5tPTrN3aApsIbSjAvmxKyMpD0y4PejMbR2CQIhAKgmxrHyHFpUviTJsBFfyId%2FTq7ZKSw1K4lelHLkMoTrKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyq%2F6uxrz2F1P%2B%2B8JAq3APMOFVp7lhkt8g86VM7p9pWRrXFOMObD4dPz8z80JR%2B0lboZGQLdVnWT8SSOGoK7hf1XfNLUzHq8w9Sj%2ByNj1LEh0DBI%2B7tY3dq7Gs3gjwwUqkRlNghpiYhB%2BzQigwIjvOFx3OUHQ%2BqSIgUT4OzBGDiz%2Ftu%2BHweAzUqpi8nFPtOIZNA7NrR081QkGkNiIzoC9Uw2A7CcTxmHIKmiYztPLIrEXY4XzVt%2FCV7s5L8M%2F0FzZN55zZyYwHap16b9YXTxNwZ1V%2Bw%2B65EpngeC7HuNyS3GlYGQ4H1c5GWCBRQkzr1ZEyzI%2B%2BT09FFfb%2Fb46Ql7pbIfA53L5F6cTpKr1MzfaJJJTF9HnDpwX0D%2FdNW1yW7dJ637YhknK%2FRLKJgg7WCwJ2QXNm6IefWkQY0r1OtwWxn16gU%2BANikw5RavYvumRHMFZE1Vrc%2FdCzLAmxWZiqWPa8GrLpyJ3XIEkQGVMeO%2By9VbKBg3IvAE%2BiN0Mld1PJBqWWtTSr3HvblQRa5E%2B9Y%2BdTGmZwF%2F4rzY%2FwhWx1bA393I21LuW%2FWaAIn%2BuPlt05VsJaMUnKS2GRW8OZ9d3%2BzmiEIjV7zSSqzXl%2F98bkMooce0B5zk5wfvEj258NKnSvqPMgRCO5Inu3mTFJGTCHiN%2FJBjqkAeMDj9zUxToyg3pNgkOtbJNLBHyz4kerZXQj6KVgy6X%2BsOldcjtZmSyyK5jWt2GMMVqvMQaBJM4aI89XtH8ONUd9%2B7rdlyaGh7JFZ1uw8Eu%2BQaFLbaSxbAsLEfNeNvu7s40uwajap47mXMjchnq8aqDV2Un5eNLJMlZeoNQhtRGxn3qTwjQjtr6SKmuRgd85ZtDjeguNc1giWK7OqTJctyHG6xTM&X-Amz-Signature=8f6112284c8d09a6773cc2b71158baa01274a1d7fb4091affda83f7ead11345a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

