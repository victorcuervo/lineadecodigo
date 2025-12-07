---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VDFPAD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmBvQacdn2JF8LPSBwZ3QlxIdTZxcXBSdNGRIR4EDaQIhALpfnpuoZm7EFFRJRBCYVoVmm%2F6c83ngOEf%2FOQo1HaoVKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcRdDCMPFCTfErRI4q3ANe%2B11aSNujdRaHrPZ3EGUt5wealSseA2hmXtfHTOsAx%2BAVtjIDb2Kd4fGMjb0WyvDIPSuPvIh%2BNL76P%2BiNKY90qgAtL7OEQyjBHPkexJR4jnofUVTXBvVBrzVCfSs3kWGl2kz5bnfijxrb87gANIQ0iEcHoRPrpMSA6X7m10Bt5n9h2GmWJei1mynYOwyR%2FM99dTNDkaSUwuLRk2knnwe0edKgM%2BWDA%2B4euFgmo5YLnFy900Gopuy1HfGUPeRPsbmkrqLaVkOdhd5n6Jh52yz5MLRYyEM6mLvC1eS3eClqFjGy07oPSx1LRlyyEfbJwQNkn9yePgD%2BXL1xhDHtK4%2Flf5jAUJ23QTqT5BQrxto%2BnHjKP06%2BeTN7COMbEyBVBtylkrfyqHu%2Bgb31bmJVnPh8BqNwqoOe9ZP8C3wCHQOuK95ztxZto0dAzF5bQvCiGcdsTEZjn8w6gVfSJFUkd%2Bs7Pa%2B0ebbsbR14U4SCgzen0uTF5RWYUeYlPBUxWFp0xqpVcwETGpDTzyvygYM7nIn2s97qSdAs%2F3a7pYcuUMl%2Bsy4KNqG1CDMApF2wV6Wam%2BCTb83yY6AqPtaoWAjdYzhAVCzx3ZZ8%2Fiv5g4EW2LFxysgxsuUYftyLicoqiDDvuNbJBjqkAX4YtEHtJEh9%2BVAjHF9PMGnfwhL2wWI6EuROUDv16N9fe%2BK74kydmPlfup8xQrGQlfc4vHZ2iQP7txE8vJ5gXDKwdfNeQcy3cmDRQ9BYi4OCMWWKDTuITTdPi232s6YnFI3eACAJ3SxDXMp88s%2FOCgGtlLn1wklBSQKz%2BgFvvtFdeALfgGa4kZWOnjIlCwYXvRzfLVlhu9hseSGn9cHesfnZ0Y%2F%2B&X-Amz-Signature=698a80631d2638e1417f071784bbb8f617729945e1a916520c45142e72c77b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2VDFPAD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHmBvQacdn2JF8LPSBwZ3QlxIdTZxcXBSdNGRIR4EDaQIhALpfnpuoZm7EFFRJRBCYVoVmm%2F6c83ngOEf%2FOQo1HaoVKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzcRdDCMPFCTfErRI4q3ANe%2B11aSNujdRaHrPZ3EGUt5wealSseA2hmXtfHTOsAx%2BAVtjIDb2Kd4fGMjb0WyvDIPSuPvIh%2BNL76P%2BiNKY90qgAtL7OEQyjBHPkexJR4jnofUVTXBvVBrzVCfSs3kWGl2kz5bnfijxrb87gANIQ0iEcHoRPrpMSA6X7m10Bt5n9h2GmWJei1mynYOwyR%2FM99dTNDkaSUwuLRk2knnwe0edKgM%2BWDA%2B4euFgmo5YLnFy900Gopuy1HfGUPeRPsbmkrqLaVkOdhd5n6Jh52yz5MLRYyEM6mLvC1eS3eClqFjGy07oPSx1LRlyyEfbJwQNkn9yePgD%2BXL1xhDHtK4%2Flf5jAUJ23QTqT5BQrxto%2BnHjKP06%2BeTN7COMbEyBVBtylkrfyqHu%2Bgb31bmJVnPh8BqNwqoOe9ZP8C3wCHQOuK95ztxZto0dAzF5bQvCiGcdsTEZjn8w6gVfSJFUkd%2Bs7Pa%2B0ebbsbR14U4SCgzen0uTF5RWYUeYlPBUxWFp0xqpVcwETGpDTzyvygYM7nIn2s97qSdAs%2F3a7pYcuUMl%2Bsy4KNqG1CDMApF2wV6Wam%2BCTb83yY6AqPtaoWAjdYzhAVCzx3ZZ8%2Fiv5g4EW2LFxysgxsuUYftyLicoqiDDvuNbJBjqkAX4YtEHtJEh9%2BVAjHF9PMGnfwhL2wWI6EuROUDv16N9fe%2BK74kydmPlfup8xQrGQlfc4vHZ2iQP7txE8vJ5gXDKwdfNeQcy3cmDRQ9BYi4OCMWWKDTuITTdPi232s6YnFI3eACAJ3SxDXMp88s%2FOCgGtlLn1wklBSQKz%2BgFvvtFdeALfgGa4kZWOnjIlCwYXvRzfLVlhu9hseSGn9cHesfnZ0Y%2F%2B&X-Amz-Signature=2fad568283651ff14f13667718928b27bc5b566d695d3dc509fb154208d38560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

