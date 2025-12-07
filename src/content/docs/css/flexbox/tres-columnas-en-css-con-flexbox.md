---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYKE7GU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACK0GhiWpYqcSL0yZDbnCAec5eRFPrDKoVQkSZOpsRXAiEAp8j1vd26hrZX1QgjEjg8OzV2aRkMFoplRIa9xontNqwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyiGHoWp%2FYHPRhxDircAy0ckd72LNwbKUTFLoUV9TF8VxDsA1WZghtY62lraIS9BddlFJfHUgCOLLEasUZBrXyjmH%2F9UqH%2BKUNow4bPUm3rAgiJBsiZJZRKS2nm3gD02wbYvzOrTxVLVRizwvTzrf3Pw9jl80aV3oQx14cIEi%2BPJ7LvqWDdcnPbs6pcP3r7glkNhGPYpS4Mfv26qi0G%2BiRHAXp%2F4D2s48dFeVjagHWF0ne62X8Lz4r0%2Fi34rtHVF%2FgBZZKzfZOb49dZ736BlTeKtIpJ3LhHSvOPVZma8GES4DnXLnWrXSV85bHADfWWT%2BWu%2BjoSXvIElb4Tod%2FVumfI7my2M2D7I2lDx8RgRmdlesFVght%2FppmK9dlqWMbpgx5AMWdkha8%2FT8UsjNXkBAo0s%2Bdcs%2F0XN9wD7ng4IrhgkW2co8ppb81Fv14PG6sgvjb8a999DzfI7NQ90j%2FmUKSLH84bPStkndM591BmM5kqNU4ajBZnOH3y1mnVm1SDUAFV%2Bc5MM2oCTCPMpi2bjlxbgWXICN45HEq5ORTokquzlztgDS%2BmmWLq33NNqBD%2FBaiHE5sXcPxG84L7X%2FCl5Q%2FHlN7flWpoBX3PzE3ugKF%2BvEXZmlcJUmGwBpH0paX0bfDQES4ztzugxMr0MIP%2B0skGOqUBFmrzo%2BewkJOkzYifCYycWzi44jWj3j%2BFgaC4Cmd4iSN0vbiosGZGUobyjL8ssxLMzGinQLQp0LoK35dmYOs2j%2BTSqZngRfRj1VY1eGNvFbYY3VKCitwmgpKVOpipCwpT%2Bow%2FoB4nWh91G0XjT2oVWLTwMSaIM%2F%2FpyDf4iqF3GHUM%2BT%2FD6wkPmgGEqueBJVHqlE6cCA5ZRfbXFL4h1oankWRzkXU%2B&X-Amz-Signature=d91bc949008a1db88c11e6d2bb7777b8384172bb194cdc908e6aa3755bd85a7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJYKE7GU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIACK0GhiWpYqcSL0yZDbnCAec5eRFPrDKoVQkSZOpsRXAiEAp8j1vd26hrZX1QgjEjg8OzV2aRkMFoplRIa9xontNqwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJyiGHoWp%2FYHPRhxDircAy0ckd72LNwbKUTFLoUV9TF8VxDsA1WZghtY62lraIS9BddlFJfHUgCOLLEasUZBrXyjmH%2F9UqH%2BKUNow4bPUm3rAgiJBsiZJZRKS2nm3gD02wbYvzOrTxVLVRizwvTzrf3Pw9jl80aV3oQx14cIEi%2BPJ7LvqWDdcnPbs6pcP3r7glkNhGPYpS4Mfv26qi0G%2BiRHAXp%2F4D2s48dFeVjagHWF0ne62X8Lz4r0%2Fi34rtHVF%2FgBZZKzfZOb49dZ736BlTeKtIpJ3LhHSvOPVZma8GES4DnXLnWrXSV85bHADfWWT%2BWu%2BjoSXvIElb4Tod%2FVumfI7my2M2D7I2lDx8RgRmdlesFVght%2FppmK9dlqWMbpgx5AMWdkha8%2FT8UsjNXkBAo0s%2Bdcs%2F0XN9wD7ng4IrhgkW2co8ppb81Fv14PG6sgvjb8a999DzfI7NQ90j%2FmUKSLH84bPStkndM591BmM5kqNU4ajBZnOH3y1mnVm1SDUAFV%2Bc5MM2oCTCPMpi2bjlxbgWXICN45HEq5ORTokquzlztgDS%2BmmWLq33NNqBD%2FBaiHE5sXcPxG84L7X%2FCl5Q%2FHlN7flWpoBX3PzE3ugKF%2BvEXZmlcJUmGwBpH0paX0bfDQES4ztzugxMr0MIP%2B0skGOqUBFmrzo%2BewkJOkzYifCYycWzi44jWj3j%2BFgaC4Cmd4iSN0vbiosGZGUobyjL8ssxLMzGinQLQp0LoK35dmYOs2j%2BTSqZngRfRj1VY1eGNvFbYY3VKCitwmgpKVOpipCwpT%2Bow%2FoB4nWh91G0XjT2oVWLTwMSaIM%2F%2FpyDf4iqF3GHUM%2BT%2FD6wkPmgGEqueBJVHqlE6cCA5ZRfbXFL4h1oankWRzkXU%2B&X-Amz-Signature=cedd75c5fc38926f806426b1cf83685b5d373efc8062f51ede17259803d98fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

