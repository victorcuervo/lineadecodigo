---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUQQMTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8rVyBE87zmJfuZ%2BFDCXQ%2FH6nRIiHMaC1vxk73C8naNAiEAlpW7D9GUzHe6K8%2Fk3gEHtoXosfJnCXfAQYaCP3JnEBUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlTuCRh4EC2pXVviSrcA6GcD%2FvWx7yGPxxxxBm4UebRXxk4Di91krmmV1VQ0UYIYRrUqDl%2BaMqm0yAlBomECLUBMrSSngJR%2F%2FdoWvOafbXmeiPdxATE3woyd2%2BPVuSIOqweI3I5XpfzljDbIa2o%2BdN80s12QS5piojGNQ0nkNsLUXxfS6TZ987TvqylDLBsOu%2BhBhKG8WJ232xerOavuPvit8kQAzd4KE7il1RO0Cs7dWWVSjrdVW97o%2FN4RZ%2Fesahi5exPt8gPwI5y8oOAlz5uZzfJchAaHTTfBdSRiHDSkhXbG7lnbb1QNoDv24bTjnkgc3JcvJNsTCjMrbflmqNPdWvauX59pr592tO2s9amzL20mtLfuzfOLK0wqZBLmnv7ei4x66RJFG9UJLWYbk2%2BVbY7%2BnPM%2B16pdHOQ9ReB2BD0WQSIDkT2xfcTdcYesCzwmjAP7Kco2kj9Pj2vsUSEsEuN45ncQI7gHERdO8lWx00dZG2VCcroslJiewOik7uxLUGhaSSqkCtfhj%2BIb6beraXBG0c06w4l1ySVj1N45ZBx70CSm0jgd%2FkESLHkG6BNpw90QboT%2F5YaUeQOG4QhY4gu2wN7%2BF5HlCrqqusSI1w1IMKEew%2BkYEFpUl7l%2FBvfzecZ4yx4CH3oML2A3ckGOqUBAmB3mMS5t2F%2F4LOPVOP4NBTPq5clTvF6RZIpbBHEIrcFUlHIRX2lxIDb15BmcEQOZLq%2FTjk6XzMY7FHYnW9SFIFcw%2FYRh7oR4L9GS5jCQNy7hqp%2FI6GTSyBpWeG%2BMyS3%2Fc8HlC78mxQLV3a7CE%2BzbYHIFp5%2F6fgFnVF2iJliIgq1SGrkO9Td10Yzqi34bsfsPpYfQtJG%2FZf9vLfu1kN0iMsMwE%2FJ&X-Amz-Signature=a9841787c202428409fafff8b0b7083850c8f73e4df7f1e92447d831013a79be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUQQMTW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8rVyBE87zmJfuZ%2BFDCXQ%2FH6nRIiHMaC1vxk73C8naNAiEAlpW7D9GUzHe6K8%2Fk3gEHtoXosfJnCXfAQYaCP3JnEBUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMlTuCRh4EC2pXVviSrcA6GcD%2FvWx7yGPxxxxBm4UebRXxk4Di91krmmV1VQ0UYIYRrUqDl%2BaMqm0yAlBomECLUBMrSSngJR%2F%2FdoWvOafbXmeiPdxATE3woyd2%2BPVuSIOqweI3I5XpfzljDbIa2o%2BdN80s12QS5piojGNQ0nkNsLUXxfS6TZ987TvqylDLBsOu%2BhBhKG8WJ232xerOavuPvit8kQAzd4KE7il1RO0Cs7dWWVSjrdVW97o%2FN4RZ%2Fesahi5exPt8gPwI5y8oOAlz5uZzfJchAaHTTfBdSRiHDSkhXbG7lnbb1QNoDv24bTjnkgc3JcvJNsTCjMrbflmqNPdWvauX59pr592tO2s9amzL20mtLfuzfOLK0wqZBLmnv7ei4x66RJFG9UJLWYbk2%2BVbY7%2BnPM%2B16pdHOQ9ReB2BD0WQSIDkT2xfcTdcYesCzwmjAP7Kco2kj9Pj2vsUSEsEuN45ncQI7gHERdO8lWx00dZG2VCcroslJiewOik7uxLUGhaSSqkCtfhj%2BIb6beraXBG0c06w4l1ySVj1N45ZBx70CSm0jgd%2FkESLHkG6BNpw90QboT%2F5YaUeQOG4QhY4gu2wN7%2BF5HlCrqqusSI1w1IMKEew%2BkYEFpUl7l%2FBvfzecZ4yx4CH3oML2A3ckGOqUBAmB3mMS5t2F%2F4LOPVOP4NBTPq5clTvF6RZIpbBHEIrcFUlHIRX2lxIDb15BmcEQOZLq%2FTjk6XzMY7FHYnW9SFIFcw%2FYRh7oR4L9GS5jCQNy7hqp%2FI6GTSyBpWeG%2BMyS3%2Fc8HlC78mxQLV3a7CE%2BzbYHIFp5%2F6fgFnVF2iJliIgq1SGrkO9Td10Yzqi34bsfsPpYfQtJG%2FZf9vLfu1kN0iMsMwE%2FJ&X-Amz-Signature=3cf928def89861930a1bbe5af9e0925204342b38caeda9e17cc573fa241129f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

