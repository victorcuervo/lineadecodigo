---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POJE7AE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2F03DNYK4hRPlBmnKcZwIlIehcHZ0gb%2FFBocAfshySAIgN8QHsnhZg6viE%2BGD%2BatUNpbEKwjocq2wdNM1UQ4fDecqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk2qOvDdLZ2W%2F6wdCrcA16FYQrwjgRQU6eacF6WOwdf%2FYdeEBxB6SbSdlStnfFrwic%2BEiVO5xPAc5ddK08A2oEsn5pAjz0o1Jg4DRz%2Fy1kC4G0vND7MPLNA5jqcq%2BfqIrvdfyq2%2FJ%2Bwpv%2BSP4u5vMSIVflkHkMS785HLgi5ekKdltNzQyTJmJ1SUkFl1t8INdjKvCS4X%2BcVLpfEf1QMa5ukIohizUunHuoArqebCk45EmrutJTC%2F5uNVv3YsYWg1R8kimvLJRJJkW%2FelPeYLT8tt2cgIiKGFrsqraZWT7YwgnkC%2FTu59Tx1NME%2FWzVsl4NPkzK3oMKFRbFfhhosg1K7jBaBx35DTwLYue%2BhONqWy5vSvDeSKBf2K1WtT9iVuPS%2FKaeiQiX74Ryc1%2Bd%2Fc9wyVPPIbQDdVRqVqGFHKBO96pICyENnFlbh9tMNHa9ZCpbbcKmM%2FHf7LPvogFFVRe3PuJDjhXF8oco7QcUvh81HfLl05E0FsSE9JWk48xPC0Bip8%2BaPMo%2B%2FHmaU8v4%2BR39gJIYqEseUg8F62UGLQdpUFuQDYtbd3j6V6aUdhtJE6QpTwoSkfHV6WLCvUdFmENYITTzB6SSLbNyVIRCKg8NNQAPg8SV5MmhOB62WfOcRqk0pzQeJ%2FEeAWprLMKG03MkGOqUBEOkPBBF0genL8%2BUaofu%2F3qbCJKyy33WcL3tGrchg0C0l4nTAR9jQmA2s9W1iXZgru1U9ss5FlE6BxF6M9iSZlZGa%2BzrDRTg9g6eufqGOON3i1ctlBR89smjE18iJWLO3idQWyP6v%2BZiDW08nPBXtbJtPsrEgJggkj1czF8Y%2FVPQrX8uyXj6pbWQV72h%2FsuFi8knuy0HXMrKuXcj%2BEi7pUMqIq302&X-Amz-Signature=d07083a50c2208103dcef3801bf01d242517e7e7c5295541ba5c4b0bc3e3fa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664POJE7AE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2F03DNYK4hRPlBmnKcZwIlIehcHZ0gb%2FFBocAfshySAIgN8QHsnhZg6viE%2BGD%2BatUNpbEKwjocq2wdNM1UQ4fDecqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEk2qOvDdLZ2W%2F6wdCrcA16FYQrwjgRQU6eacF6WOwdf%2FYdeEBxB6SbSdlStnfFrwic%2BEiVO5xPAc5ddK08A2oEsn5pAjz0o1Jg4DRz%2Fy1kC4G0vND7MPLNA5jqcq%2BfqIrvdfyq2%2FJ%2Bwpv%2BSP4u5vMSIVflkHkMS785HLgi5ekKdltNzQyTJmJ1SUkFl1t8INdjKvCS4X%2BcVLpfEf1QMa5ukIohizUunHuoArqebCk45EmrutJTC%2F5uNVv3YsYWg1R8kimvLJRJJkW%2FelPeYLT8tt2cgIiKGFrsqraZWT7YwgnkC%2FTu59Tx1NME%2FWzVsl4NPkzK3oMKFRbFfhhosg1K7jBaBx35DTwLYue%2BhONqWy5vSvDeSKBf2K1WtT9iVuPS%2FKaeiQiX74Ryc1%2Bd%2Fc9wyVPPIbQDdVRqVqGFHKBO96pICyENnFlbh9tMNHa9ZCpbbcKmM%2FHf7LPvogFFVRe3PuJDjhXF8oco7QcUvh81HfLl05E0FsSE9JWk48xPC0Bip8%2BaPMo%2B%2FHmaU8v4%2BR39gJIYqEseUg8F62UGLQdpUFuQDYtbd3j6V6aUdhtJE6QpTwoSkfHV6WLCvUdFmENYITTzB6SSLbNyVIRCKg8NNQAPg8SV5MmhOB62WfOcRqk0pzQeJ%2FEeAWprLMKG03MkGOqUBEOkPBBF0genL8%2BUaofu%2F3qbCJKyy33WcL3tGrchg0C0l4nTAR9jQmA2s9W1iXZgru1U9ss5FlE6BxF6M9iSZlZGa%2BzrDRTg9g6eufqGOON3i1ctlBR89smjE18iJWLO3idQWyP6v%2BZiDW08nPBXtbJtPsrEgJggkj1czF8Y%2FVPQrX8uyXj6pbWQV72h%2FsuFi8knuy0HXMrKuXcj%2BEi7pUMqIq302&X-Amz-Signature=47cb164df52f560441adf41c545938a07384363d80c4c9dc27e20ec27cce9528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

