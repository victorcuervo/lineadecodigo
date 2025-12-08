---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMYU7WB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhgtZcBEegs45hhxZgqXaNCoF66MmYfN95U47hcc9pAiALTT2x1nvkAZ4mKbT%2BiJ9mVXpzDjUY2OD6VCmXJ5a5YSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGooGmv8azc1AQQmFKtwDVONNRJ5ihpTDKWlXi9VIJjwtWm7m9SQRtDT04r7RDL2oS67wa%2FUP7LMXmE8BosekUVfF3bZQtkiBY8kCbX6n7em0Jt31GOtyi3C9OEvqay%2FhxnbaN%2B5DJQLRwHIfI5C0eMKIgshNGOiUWfZdYV%2B1P4xZyFQQIu4wbj0fFIJ1QdZb5oP52hcjQdnOX45gWaWCCU8xj%2BqHN058oJuSVAVp%2BKUJ%2FQFNO2jPpWFBgKBa%2B8S%2BtFhizTn6pJZ%2BePbPC9aHhTSvZxgdBQ8cZ1v6vtD7HZZ2ZJ%2FNQPAmHIa6CgYMAwG%2By3gI8TeUIoVL8jNT9hjQf2zFdxImtzYFO4%2FMYX4h%2BxqEg%2FuMJEkMyrRR3iZbekvZatTm8koBmwJK2WmzI2ZD%2FdFHD16rLoKy%2B%2F0FPm95Jv8Izs7rwAuwyKQOexJqLNCaL0sJTIVOa4MDwPM271ieHH7NiSp5f0UWs0QVWG%2F3gbnVtOdTVGMMhWS73UN6K3gDtukh2fJPNiVjftTMyRfT130FvODvYi3s%2FLLjeCrHRTIINIHuQO9dZREOY%2BAjEJnpcIaUJTMM2vCkfVptEU46HP84WPGrdb7d6iiY4uVIIKAI35sf5Z2%2FLslneBwljidiL%2BWQW5swigaPHQYwmrTZyQY6pgHIsjCUOjCUftyO9VkFhghYXytBQW%2FSZ8wRXFxYNYZvYEdGAG4H84EZBsr%2FC7CoLpF53xmw5ukygi%2FFXXBMkzLyCxSlv2Ey8Kckm9o9aYa9v9sOakbDLBUAgRHG9omRBVPbFiiRWnNIktfpK4MkQ9XN%2BcksGj4yfKeVkawRhVkosNd9zYnzSLEcAe%2Fu%2FCkzU1EzULUGvUPIpchQtS9E1d743eqYuczM&X-Amz-Signature=9f44282e030d8eec0895406e12e98cef792c36160995840c5121e7a04d727c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HMYU7WB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhgtZcBEegs45hhxZgqXaNCoF66MmYfN95U47hcc9pAiALTT2x1nvkAZ4mKbT%2BiJ9mVXpzDjUY2OD6VCmXJ5a5YSqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGooGmv8azc1AQQmFKtwDVONNRJ5ihpTDKWlXi9VIJjwtWm7m9SQRtDT04r7RDL2oS67wa%2FUP7LMXmE8BosekUVfF3bZQtkiBY8kCbX6n7em0Jt31GOtyi3C9OEvqay%2FhxnbaN%2B5DJQLRwHIfI5C0eMKIgshNGOiUWfZdYV%2B1P4xZyFQQIu4wbj0fFIJ1QdZb5oP52hcjQdnOX45gWaWCCU8xj%2BqHN058oJuSVAVp%2BKUJ%2FQFNO2jPpWFBgKBa%2B8S%2BtFhizTn6pJZ%2BePbPC9aHhTSvZxgdBQ8cZ1v6vtD7HZZ2ZJ%2FNQPAmHIa6CgYMAwG%2By3gI8TeUIoVL8jNT9hjQf2zFdxImtzYFO4%2FMYX4h%2BxqEg%2FuMJEkMyrRR3iZbekvZatTm8koBmwJK2WmzI2ZD%2FdFHD16rLoKy%2B%2F0FPm95Jv8Izs7rwAuwyKQOexJqLNCaL0sJTIVOa4MDwPM271ieHH7NiSp5f0UWs0QVWG%2F3gbnVtOdTVGMMhWS73UN6K3gDtukh2fJPNiVjftTMyRfT130FvODvYi3s%2FLLjeCrHRTIINIHuQO9dZREOY%2BAjEJnpcIaUJTMM2vCkfVptEU46HP84WPGrdb7d6iiY4uVIIKAI35sf5Z2%2FLslneBwljidiL%2BWQW5swigaPHQYwmrTZyQY6pgHIsjCUOjCUftyO9VkFhghYXytBQW%2FSZ8wRXFxYNYZvYEdGAG4H84EZBsr%2FC7CoLpF53xmw5ukygi%2FFXXBMkzLyCxSlv2Ey8Kckm9o9aYa9v9sOakbDLBUAgRHG9omRBVPbFiiRWnNIktfpK4MkQ9XN%2BcksGj4yfKeVkawRhVkosNd9zYnzSLEcAe%2Fu%2FCkzU1EzULUGvUPIpchQtS9E1d743eqYuczM&X-Amz-Signature=12a7909398a433ef04e0303e34b972aa7d1411c14fcd66afbbc15a993e1614b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

