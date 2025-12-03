---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYVMXYO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD7RdTCVdTCVdkwTkH%2Bz%2F04mncq0VCnJ5EWZkn%2BverxlQIgZ3lNmA8Ho1BPrKpdByJl6p2V7Lby%2BpSsyWOBHwAMy3kq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDK7VfD3qAnRNC0rwCrcAzRSEDdCJNN%2FcD8qCki0gTK3%2Fgi%2Bv1t0sYss2lBdG0DXgVgpQY88NXVZYZ5QOa2TmoVi9i5MNDp6MOobu835%2FMMmm4AgAzwySu%2B4vH09hfijbqX89nWqyy4Hunrdf%2BQz3inbsvAQuvhIB7rMQ42iVrFyu%2FPmmRoJ%2B2YaLtnUb53fU2dbdDyWYDtP2SZi4Ey5s0euIZQoPYG7TvgSF%2Ff%2FfdmAoUN8yQtL30ZnfjSxAOdU2IRRbVGp%2Bed9K1e2e7%2BszE9l31FspnDFfFpHZm0AP1YxWnfvgWNPskdiyPjbM9pGFlXqvUcotyBtV6lYVY8GpMtWuPlYHHu4kemkizH4%2BumHQxjpHSiPJLs%2BxYNckUyWgXdvpBC9yY4MrGxuXkHshlsPNQTuAnZvTM6O9WE4PRLzOncIvvCqXS7Wpa5mV%2BnnOS77lK%2F6H6IawFRFcvxD8SKrOrHzNC7rPju9pCjtH2KlL%2FGPLQS8u%2FDn3UV8%2Fl62oZanE2VhIRVmohkwwDtwTldpLiQ8A9K50E34y7nDEhFVLFfrS2Q8WmhH0%2BYxOxgEC%2BcHoTRcMz9NK0aPcM%2BFUgdkD3p85Vi6ja6fBHw8ksX%2FyboUFibSjETctBmigs3ir5SPhKeG%2Bf8Pcz%2FeMJ6uwMkGOqUBjtpeweKJ2bam%2BWu66o4R%2B35%2Bpo9q%2B6H6pkiIM%2FkjwCFFW8cgMPhkdK%2BwQupIFyvbsRXQmP6XJkpj1ZhOhgkmTnMbBaFSkTeHeeRDZ%2Bd4jEQ77OUSGkPtpclV%2FC%2F2u79LSw%2BIeuNxzaVMQl7fUsSOab2PPfvqIHkRi6CWzvXxaCBNzA3FWaGKqiVGB%2F7N%2Fa5hy%2BbqiHOGUTs4rCl8YOhoThaqsB86&X-Amz-Signature=b24458eed9d79f896e37f75df1b829f19c260ffca4f736d6453de17bf25d22be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYVMXYO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQD7RdTCVdTCVdkwTkH%2Bz%2F04mncq0VCnJ5EWZkn%2BverxlQIgZ3lNmA8Ho1BPrKpdByJl6p2V7Lby%2BpSsyWOBHwAMy3kq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDDK7VfD3qAnRNC0rwCrcAzRSEDdCJNN%2FcD8qCki0gTK3%2Fgi%2Bv1t0sYss2lBdG0DXgVgpQY88NXVZYZ5QOa2TmoVi9i5MNDp6MOobu835%2FMMmm4AgAzwySu%2B4vH09hfijbqX89nWqyy4Hunrdf%2BQz3inbsvAQuvhIB7rMQ42iVrFyu%2FPmmRoJ%2B2YaLtnUb53fU2dbdDyWYDtP2SZi4Ey5s0euIZQoPYG7TvgSF%2Ff%2FfdmAoUN8yQtL30ZnfjSxAOdU2IRRbVGp%2Bed9K1e2e7%2BszE9l31FspnDFfFpHZm0AP1YxWnfvgWNPskdiyPjbM9pGFlXqvUcotyBtV6lYVY8GpMtWuPlYHHu4kemkizH4%2BumHQxjpHSiPJLs%2BxYNckUyWgXdvpBC9yY4MrGxuXkHshlsPNQTuAnZvTM6O9WE4PRLzOncIvvCqXS7Wpa5mV%2BnnOS77lK%2F6H6IawFRFcvxD8SKrOrHzNC7rPju9pCjtH2KlL%2FGPLQS8u%2FDn3UV8%2Fl62oZanE2VhIRVmohkwwDtwTldpLiQ8A9K50E34y7nDEhFVLFfrS2Q8WmhH0%2BYxOxgEC%2BcHoTRcMz9NK0aPcM%2BFUgdkD3p85Vi6ja6fBHw8ksX%2FyboUFibSjETctBmigs3ir5SPhKeG%2Bf8Pcz%2FeMJ6uwMkGOqUBjtpeweKJ2bam%2BWu66o4R%2B35%2Bpo9q%2B6H6pkiIM%2FkjwCFFW8cgMPhkdK%2BwQupIFyvbsRXQmP6XJkpj1ZhOhgkmTnMbBaFSkTeHeeRDZ%2Bd4jEQ77OUSGkPtpclV%2FC%2F2u79LSw%2BIeuNxzaVMQl7fUsSOab2PPfvqIHkRi6CWzvXxaCBNzA3FWaGKqiVGB%2F7N%2Fa5hy%2BbqiHOGUTs4rCl8YOhoThaqsB86&X-Amz-Signature=f3069f916fc5e54f6d376204b7e2997ef81dae663007f1d120b6e1a42d3e4a98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

