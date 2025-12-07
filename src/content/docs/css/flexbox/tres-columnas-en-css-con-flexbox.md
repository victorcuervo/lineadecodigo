---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLNO72W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0pEmswL4LeDnjSMLsSP0q2gaanlKKNy13acB6lv0gfAIgDvOJCvfS7lVXaNp%2BOpEdbPq6JjgmxffZxR2RK6C53AQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqLNSJxrbTH57h9OyrcA1qOV9zb%2Bb89o9E7EFTe3iMOqyt1CIb3P2451NVUMGvehlmQQooDB09pPkoQAuHDCLlsMtddNQ5koJH8QHWMoFhBlh9kt9lHBXEHxBDkzhNNChu9PCh6BktdOz8GvoFTD1yJl26Jhnw019hpkEAaKq6Rd9hmgoupbbuIpEIQJEXPVPhNkHK621IXBVQI7wIpjwiU4M7KBuGMmd%2F%2B0MpNFwrHplopQB8fq4oeD38h5k0Zhzy9upLABxd2QlKUaTTBUvU5mu7IyBvGx6ulOZCjpKm06ubb6ke4uRJ3%2F6Cb4u6cdqcaZrdin%2BC3od%2BPtmW9h9f0vue%2FGgEJQCyThGmOLmdhs3ciQk8GlqXgk6nErra2k%2BHeAFtmXNtArJSXi%2B99EQwWPMBZb68NRH27FLmLFz1rF1xsEsYTId8hRUiNF4meU%2BPGhZTU1Oxg1dCpACEeMLhklKGl71cRd8aXPvKS2qT7LVByeeHrgpo4BG8J%2B8LipOjkfXlPSm2Iu7qB84GXe%2FdaHYV9Q0AxI%2FnaJxbQenmh3pxFpUiejsHtoq2yhE2SpAbLga7OgFOKE7jUc5OScQRWfHwAAQIN8AdEoqt%2F45AwFu7HfDSjvikixfWgDx4EyosxpwlswQ%2F4dsc%2BMKD90skGOqUBFZ9WrcNSHbsFfCwge%2BeSrtgmqWNDhWcanqPrF%2BcGUXmbvVKBzUCalIlLUclsSYa8Up83nYOPvZn5R9kDiNyEJM0xeU5IBdCh4WZ8VtK16PwsaEnv%2FisEVelBOuotC9vY81utAX1K2UvfBRSbjcOYJpM4dLSR5k3Yx%2FFb2OpjgV4l13uiEy7ac14Ue5iD0G7fDrKY0rTVcHKCF9WfMXS8RwnpBQgZ&X-Amz-Signature=346538c9b662e98a24e8fb66f0567f6e9f301f0180551ecacd4f370a7f857dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNLNO72W%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0pEmswL4LeDnjSMLsSP0q2gaanlKKNy13acB6lv0gfAIgDvOJCvfS7lVXaNp%2BOpEdbPq6JjgmxffZxR2RK6C53AQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMqLNSJxrbTH57h9OyrcA1qOV9zb%2Bb89o9E7EFTe3iMOqyt1CIb3P2451NVUMGvehlmQQooDB09pPkoQAuHDCLlsMtddNQ5koJH8QHWMoFhBlh9kt9lHBXEHxBDkzhNNChu9PCh6BktdOz8GvoFTD1yJl26Jhnw019hpkEAaKq6Rd9hmgoupbbuIpEIQJEXPVPhNkHK621IXBVQI7wIpjwiU4M7KBuGMmd%2F%2B0MpNFwrHplopQB8fq4oeD38h5k0Zhzy9upLABxd2QlKUaTTBUvU5mu7IyBvGx6ulOZCjpKm06ubb6ke4uRJ3%2F6Cb4u6cdqcaZrdin%2BC3od%2BPtmW9h9f0vue%2FGgEJQCyThGmOLmdhs3ciQk8GlqXgk6nErra2k%2BHeAFtmXNtArJSXi%2B99EQwWPMBZb68NRH27FLmLFz1rF1xsEsYTId8hRUiNF4meU%2BPGhZTU1Oxg1dCpACEeMLhklKGl71cRd8aXPvKS2qT7LVByeeHrgpo4BG8J%2B8LipOjkfXlPSm2Iu7qB84GXe%2FdaHYV9Q0AxI%2FnaJxbQenmh3pxFpUiejsHtoq2yhE2SpAbLga7OgFOKE7jUc5OScQRWfHwAAQIN8AdEoqt%2F45AwFu7HfDSjvikixfWgDx4EyosxpwlswQ%2F4dsc%2BMKD90skGOqUBFZ9WrcNSHbsFfCwge%2BeSrtgmqWNDhWcanqPrF%2BcGUXmbvVKBzUCalIlLUclsSYa8Up83nYOPvZn5R9kDiNyEJM0xeU5IBdCh4WZ8VtK16PwsaEnv%2FisEVelBOuotC9vY81utAX1K2UvfBRSbjcOYJpM4dLSR5k3Yx%2FFb2OpjgV4l13uiEy7ac14Ue5iD0G7fDrKY0rTVcHKCF9WfMXS8RwnpBQgZ&X-Amz-Signature=5a7af19d690241578814ee2a8b86083452de808f50e2ed084bffba215a0abe04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

