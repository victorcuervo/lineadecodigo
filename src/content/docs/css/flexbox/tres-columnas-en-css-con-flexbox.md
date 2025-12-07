---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5PBK2G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZGMacEdJc201q1vpwn7xZfoy2YzXy5Hh83i4lqUzF8AiB29tQI9w12FbFtWQO%2FnFMOC8nLyjGXjat2wrNnNvSSzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOSoAS97rs4e1YDKKtwD0%2BnIzt0puCeHr9yitOil2MlraZDGIXBnLa2ptSAzcU2wOsgJvZ7j%2BDxN8ux4ZvyExTg1llAdTzRFaYWbH90yOLB8f%2FwDmCzTleAJrHBaqTv%2BtA1hyBHq%2B0Smf7XQBS1gUQX1bC7O3M1w5xShVl5dGGztCx4b5JAas0wC60FWtaaRxLpba0ERfRMKfq1If%2BD46wf051Jlcp4ju7z%2BV%2BLBKMyIdzZnBL0Gqy2S4QF08BWmUDoDDrg63O76O%2BKe3mwrsGNHPMNJGQ92VY4%2BtmmfoPg1zYiNoiqbpOQdK%2BCpQf6COhSwMReCfIFMMWL8tAT611ZIp9hvoULXOY4%2BU8evW%2BBmzFZ94GMWtcX8aKx4Y7IRyPfzkUiA9T4xCrL3iLXwMMk63qTiBlTFV2yaikq%2B9j%2BimLO2HDiPLhpWfcq4ROaHD1FDFQZ2dIU7VmHRXbRao4SbJRbgr3ojdGpl8t6GH%2FdssjTsjwicMRjzfa2GJjXgm2NAn%2FiWH1GRnE1DSIjr8nubNWSV9NThsyueLXL90N0yLdFNqlzXCDb74%2BBQPVpFUVFdLBxWI1fKznQXlE0rM3FNIWf%2FBeCJKgKl7CIeb3QYn0O%2BciUv5%2FFEcNNkicY6tovDVVo7K9e8cpgwjP7SyQY6pgHDZsconUrVqIJVIvAJICX0MDco1iO%2BTCp2lxK4%2BCAvhBsnrLJEbgU8%2FSsv2OJRmB3Qms73uJx%2FjmceMo7LCguk0eYMrL70owM%2FSkcLxxFweUouoM0GScJh%2B8XG6dMoX7lBIIJvvFzPQJNm8L242Hzv1u5K%2F8kG6cBAHct3gYlfdyKfAXQ7nq36Z8B5lwValkFWxIA97UjIPRFTx8%2FHF3%2FKsU9d%2Ft73&X-Amz-Signature=0acb7a16c58b4c084186eb8d395c6992d7bca284b5fb9f45134486915a7a7d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R5PBK2G%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZGMacEdJc201q1vpwn7xZfoy2YzXy5Hh83i4lqUzF8AiB29tQI9w12FbFtWQO%2FnFMOC8nLyjGXjat2wrNnNvSSzCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBOSoAS97rs4e1YDKKtwD0%2BnIzt0puCeHr9yitOil2MlraZDGIXBnLa2ptSAzcU2wOsgJvZ7j%2BDxN8ux4ZvyExTg1llAdTzRFaYWbH90yOLB8f%2FwDmCzTleAJrHBaqTv%2BtA1hyBHq%2B0Smf7XQBS1gUQX1bC7O3M1w5xShVl5dGGztCx4b5JAas0wC60FWtaaRxLpba0ERfRMKfq1If%2BD46wf051Jlcp4ju7z%2BV%2BLBKMyIdzZnBL0Gqy2S4QF08BWmUDoDDrg63O76O%2BKe3mwrsGNHPMNJGQ92VY4%2BtmmfoPg1zYiNoiqbpOQdK%2BCpQf6COhSwMReCfIFMMWL8tAT611ZIp9hvoULXOY4%2BU8evW%2BBmzFZ94GMWtcX8aKx4Y7IRyPfzkUiA9T4xCrL3iLXwMMk63qTiBlTFV2yaikq%2B9j%2BimLO2HDiPLhpWfcq4ROaHD1FDFQZ2dIU7VmHRXbRao4SbJRbgr3ojdGpl8t6GH%2FdssjTsjwicMRjzfa2GJjXgm2NAn%2FiWH1GRnE1DSIjr8nubNWSV9NThsyueLXL90N0yLdFNqlzXCDb74%2BBQPVpFUVFdLBxWI1fKznQXlE0rM3FNIWf%2FBeCJKgKl7CIeb3QYn0O%2BciUv5%2FFEcNNkicY6tovDVVo7K9e8cpgwjP7SyQY6pgHDZsconUrVqIJVIvAJICX0MDco1iO%2BTCp2lxK4%2BCAvhBsnrLJEbgU8%2FSsv2OJRmB3Qms73uJx%2FjmceMo7LCguk0eYMrL70owM%2FSkcLxxFweUouoM0GScJh%2B8XG6dMoX7lBIIJvvFzPQJNm8L242Hzv1u5K%2F8kG6cBAHct3gYlfdyKfAXQ7nq36Z8B5lwValkFWxIA97UjIPRFTx8%2FHF3%2FKsU9d%2Ft73&X-Amz-Signature=186e51974e3a1d2aecc08e423e02c449b73b04ebebdec7850c42440d8481d547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

