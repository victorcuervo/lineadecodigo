---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJBSPGQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCj2fngu9maDBUj4TmeoWh2ZT51cUAQmZk6WDaT9%2FHgZAIhANr8msFMs65q7IjDxYgXe7JqAuj6%2Bfswh%2BMFiTNal5p%2BKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOq70rkne74d9FG88q3AMiQ1%2BUHnu%2FVsFiJtF52FlfwEmS5ICnfAyZD8kQi6aH%2BHQjPF1mchPi%2BpiC%2FGVFblP2jfsh6XAPsGVyouuKxNj3EPgBFc9kR%2BJUqextjG%2B3yoqWyqc1xy7bcR38CsNbLyJ5Ui992iOoc3Bht5FyukxKlmtbJJOP0aM21gxnjijizcJIojOt2dmEoRoHUTcbri9e9hSt5hApbdn1x4NbIxO69%2B23mUYAuTzhc5AKExbdH%2B0buea%2BPUINIZybDU07dgu71bVEfeTK4fqhHTzVHb5GvtHL3yqXpl7bas8tmEX0x8cuSsd1odW%2Fln9UsUZeYPf8iOYFCT682ZgNm8aqHLstoqTunUGlZ1jMYv6xh6lrTZFLXrCfDEwytVav7ubkqnkcSYNbKuJLQTvumBYvGzauSdTIivDneBwSA24AI0M9dko0QAi2vFbHM38PAxIV8PZYbc4Sxfp%2BJwyyd8Qv4Lo36lSZIl1YlqGDM7hPi1zIVI5Y%2BygIgxun5czh3g08wPhlTNZtixzY5r8hZ%2FwxqlqA1RjDsVzZWXjZbiJ94hgH4lLFdJQP6WkSumU%2BxFO0ruYzx0B1t5T9i04LxAWcc69yR02deN7mSbE%2B7QltfcpZK27Q37PctQYUEVc2yzCI6cTJBjqkAePIzvFSxl%2FOhZp8hChm4VaHalKT4j8rn3i%2B1TdiWXIJ9c5AD%2FpsytxL8269L91jcp9%2BrxFJgHSi%2ByMP23DA%2BOSPH7IsxOtefVQvvgx1MaBW4XJ4%2B7Wten0tp%2Ft8S4%2ByPUsHeeXo5gLbpyYbvW%2BvL6TyWaCj0IbkyCWF2DJRS9kegZ2v76%2BGI4lmirQElA1pHcYJBgS%2Fuw%2FT%2BFSIixsqhlrLBGtg&X-Amz-Signature=7f9c6580edb740714b0a0992768886e4b28a0f507d41ad4c200bcabf11a9cfde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUJBSPGQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCj2fngu9maDBUj4TmeoWh2ZT51cUAQmZk6WDaT9%2FHgZAIhANr8msFMs65q7IjDxYgXe7JqAuj6%2Bfswh%2BMFiTNal5p%2BKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOq70rkne74d9FG88q3AMiQ1%2BUHnu%2FVsFiJtF52FlfwEmS5ICnfAyZD8kQi6aH%2BHQjPF1mchPi%2BpiC%2FGVFblP2jfsh6XAPsGVyouuKxNj3EPgBFc9kR%2BJUqextjG%2B3yoqWyqc1xy7bcR38CsNbLyJ5Ui992iOoc3Bht5FyukxKlmtbJJOP0aM21gxnjijizcJIojOt2dmEoRoHUTcbri9e9hSt5hApbdn1x4NbIxO69%2B23mUYAuTzhc5AKExbdH%2B0buea%2BPUINIZybDU07dgu71bVEfeTK4fqhHTzVHb5GvtHL3yqXpl7bas8tmEX0x8cuSsd1odW%2Fln9UsUZeYPf8iOYFCT682ZgNm8aqHLstoqTunUGlZ1jMYv6xh6lrTZFLXrCfDEwytVav7ubkqnkcSYNbKuJLQTvumBYvGzauSdTIivDneBwSA24AI0M9dko0QAi2vFbHM38PAxIV8PZYbc4Sxfp%2BJwyyd8Qv4Lo36lSZIl1YlqGDM7hPi1zIVI5Y%2BygIgxun5czh3g08wPhlTNZtixzY5r8hZ%2FwxqlqA1RjDsVzZWXjZbiJ94hgH4lLFdJQP6WkSumU%2BxFO0ruYzx0B1t5T9i04LxAWcc69yR02deN7mSbE%2B7QltfcpZK27Q37PctQYUEVc2yzCI6cTJBjqkAePIzvFSxl%2FOhZp8hChm4VaHalKT4j8rn3i%2B1TdiWXIJ9c5AD%2FpsytxL8269L91jcp9%2BrxFJgHSi%2ByMP23DA%2BOSPH7IsxOtefVQvvgx1MaBW4XJ4%2B7Wten0tp%2Ft8S4%2ByPUsHeeXo5gLbpyYbvW%2BvL6TyWaCj0IbkyCWF2DJRS9kegZ2v76%2BGI4lmirQElA1pHcYJBgS%2Fuw%2FT%2BFSIixsqhlrLBGtg&X-Amz-Signature=363aeda33c846f5deb97400c0bee4fec855bd6bacf79c4a9d1bce98d8e86cd59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

