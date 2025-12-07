---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSUAQT2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgt1HCeSANhx90Pzv%2BNECMb3tDGq48Z6o0VBf2AAa%2FTAiAofspkPpavfk5hUN6EHl%2F5X0zlp61Gi0YVkt%2FB5wNlKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMso1C5CyE%2FpqNkCfeKtwDwkOKVA7uayCtYixh5L%2FZ8CTcLO72T78ZAZaDsTdma39y0Sqfi3BWa4z9Prg1lXSmxBCe%2Fi%2Fl5AfcMQfV9%2B1joNBRJey2rIuFVdc%2FEiNSbpP25YXF6SLBHzNj1I5aCTP2DZ9xF0ykmWFV68OEhVQcciph4K9rM3DIrk3%2FHBQFXN2QisIMKa3k11RlkVLeWL%2Brlp7bstFbSde%2FIkQnc53IHhC4P4TfW%2BNZBZl06wAhm%2B10ObiTIfITol30WvtdBRQmIp7DCJCJr%2B2MTl1bWF3JMGNeRF80esYyhxnZUeXj56AwgEKvw9YhggJA2U3jkN4aDQh7tJITj9bfJSUwt4e5rhZkm%2Fd7ADESSy42lkJPZDGMoGu0vKOU6qW%2BNMpydMla5zqd5lAr9YYpWDh951EHkVZ38O0ZpBFgjFiEBB9KH5KpP8piycM528EXgzqrm4gESmrw%2BtDfo%2FPOu%2FE2V3G3X3J%2B32oIjKN0b%2B%2FSjSFJU%2Fi0xZ8qzSPCMTUBQgwX%2FuiR%2Bk5NjJp%2BYsBQtaakWSFN7tXYWy8u89OJb4IpsUXTqiadUmeb3sYk8KAX43U6ksbvpBWa4FgE%2F6JHTOXbq%2BAq5%2BbbyQyCQQPSjqgwIxfe8U0AAC9Dl4F%2BCbx9kbEwi%2F3SyQY6pgHFyYJtngElhNmNPaFyNJrOPIhnt6gUhEx2DvK%2Bw3in1YRNCSFPv2s8X8WYAz6MGEhIA%2BsHu1sVOOpDd31ZzDMWSRDUOUW8NOBtXDgyUXQ7SLSRak9jt4EMNGEMZGpxgp4T3kONXDn1pQbKdQWKyp1DAduNYPqiU6TiYAcQC5qx7zDd1h3l5jfN%2FmX3OdkHPj3wvxPkt2%2B8f6dZ1crc7a8IjcO2s%2FNT&X-Amz-Signature=f9bed92bd56c5e086625c9ef5b126bf7817ba179ec6887a8c2b6544dfcde4f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DSUAQT2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgt1HCeSANhx90Pzv%2BNECMb3tDGq48Z6o0VBf2AAa%2FTAiAofspkPpavfk5hUN6EHl%2F5X0zlp61Gi0YVkt%2FB5wNlKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMso1C5CyE%2FpqNkCfeKtwDwkOKVA7uayCtYixh5L%2FZ8CTcLO72T78ZAZaDsTdma39y0Sqfi3BWa4z9Prg1lXSmxBCe%2Fi%2Fl5AfcMQfV9%2B1joNBRJey2rIuFVdc%2FEiNSbpP25YXF6SLBHzNj1I5aCTP2DZ9xF0ykmWFV68OEhVQcciph4K9rM3DIrk3%2FHBQFXN2QisIMKa3k11RlkVLeWL%2Brlp7bstFbSde%2FIkQnc53IHhC4P4TfW%2BNZBZl06wAhm%2B10ObiTIfITol30WvtdBRQmIp7DCJCJr%2B2MTl1bWF3JMGNeRF80esYyhxnZUeXj56AwgEKvw9YhggJA2U3jkN4aDQh7tJITj9bfJSUwt4e5rhZkm%2Fd7ADESSy42lkJPZDGMoGu0vKOU6qW%2BNMpydMla5zqd5lAr9YYpWDh951EHkVZ38O0ZpBFgjFiEBB9KH5KpP8piycM528EXgzqrm4gESmrw%2BtDfo%2FPOu%2FE2V3G3X3J%2B32oIjKN0b%2B%2FSjSFJU%2Fi0xZ8qzSPCMTUBQgwX%2FuiR%2Bk5NjJp%2BYsBQtaakWSFN7tXYWy8u89OJb4IpsUXTqiadUmeb3sYk8KAX43U6ksbvpBWa4FgE%2F6JHTOXbq%2BAq5%2BbbyQyCQQPSjqgwIxfe8U0AAC9Dl4F%2BCbx9kbEwi%2F3SyQY6pgHFyYJtngElhNmNPaFyNJrOPIhnt6gUhEx2DvK%2Bw3in1YRNCSFPv2s8X8WYAz6MGEhIA%2BsHu1sVOOpDd31ZzDMWSRDUOUW8NOBtXDgyUXQ7SLSRak9jt4EMNGEMZGpxgp4T3kONXDn1pQbKdQWKyp1DAduNYPqiU6TiYAcQC5qx7zDd1h3l5jfN%2FmX3OdkHPj3wvxPkt2%2B8f6dZ1crc7a8IjcO2s%2FNT&X-Amz-Signature=4efaf96788f33e466371d4bbb93a07eeb7c74bbf30f1ecb51d970379cf972f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

