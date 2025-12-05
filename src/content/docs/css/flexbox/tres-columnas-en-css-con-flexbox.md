---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2QQDBU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk5i%2BElB57bKlflygY1GYkjS3z8NB3II4uRMj6aE8AGgIhAJpXQdjmiJ9C%2BC5IWwh%2BNevv%2BVBvIr1wKdM6rmPFZ2jDKv8DCFsQABoMNjM3NDIzMTgzODA1IgxviyANMa6SvmJ3FrUq3AOYwzZSS5a1GGdbZXapRwFfgGNH9DYMzDwPVH%2BK962BIEVWp1dtc9f5xV7VKMpVUVYeGs0Lrdfbvce89u3M7eSSSV2V7su73%2B%2BuL%2BEINhbnJrnnsuXWzamwhJm%2F5BGRQseuBOV2UasIaJ1uNR0pFAPERoqfKIZT8lRj1xST%2FB%2FUGI2HBuvt2%2BToztyoalKYOwdSDli03w6E324roKYYwk5JsqC75pkcepVzTzI7T1khdtcV4tPdy1dq6JohTTm%2Fp3KURFgvMj8NsBf0lNauH2BpjKEbWr7TdyKEA3FOYR30tgi8AXmAM%2B4bEclUl%2BELfezWHzqcL6kCbZHaxldh3ADGD4OHhtEi2KQCdTJfLTMX7s6SFdQ0fQYtqTb3GmxqB2RevF06Gkh9fRsWk0t8tb2zRW3F8YkzATcvoO7Y%2BGrKKz9CpXQOwTSlhukUCPgPnlcCaV7PDu2BA3qgg8PM4VkA1NssAoIncC9lFsz%2BK%2F5BEifOKYUPac1tJ0mHu%2F8gFokL%2FKfylOjeDIC630kyh6jWdTSiGuAbk0lhzNJUMBPBwdgojjfup%2FLr7eTE4VARQvvdSF%2FeOJsBV82BtR16u5RmYh%2BIot7uG9edCE0nTOC4Bi2UOVcLO4yU5y6efjDg1srJBjqkAZKC752GI3v1YQty1QSGGf%2B2gfgU%2BMiOjPqhZSRv0JyJmgLZo63HyBpOiWRGFX4Ks5144%2FuWkhxNGpL2Oo5%2Fwc8QLyXY%2BJXmHRBQahNMdK7N34HZ2hw1K965rhUIxZk0frVSgJj9fTt8XWZcGbT1J%2BPBS8OYhAIFt0jf7mK7i3DPfZd%2BiSb6rr%2FECDaOozd1kAL%2FKK1zwmAcWGrGAMk5uu0mKg%2Be&X-Amz-Signature=d50c3ee9a0de535dfba7daec25f5df0b436021906fab55a9df5f8d6b56fd2631&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664A2QQDBU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk5i%2BElB57bKlflygY1GYkjS3z8NB3II4uRMj6aE8AGgIhAJpXQdjmiJ9C%2BC5IWwh%2BNevv%2BVBvIr1wKdM6rmPFZ2jDKv8DCFsQABoMNjM3NDIzMTgzODA1IgxviyANMa6SvmJ3FrUq3AOYwzZSS5a1GGdbZXapRwFfgGNH9DYMzDwPVH%2BK962BIEVWp1dtc9f5xV7VKMpVUVYeGs0Lrdfbvce89u3M7eSSSV2V7su73%2B%2BuL%2BEINhbnJrnnsuXWzamwhJm%2F5BGRQseuBOV2UasIaJ1uNR0pFAPERoqfKIZT8lRj1xST%2FB%2FUGI2HBuvt2%2BToztyoalKYOwdSDli03w6E324roKYYwk5JsqC75pkcepVzTzI7T1khdtcV4tPdy1dq6JohTTm%2Fp3KURFgvMj8NsBf0lNauH2BpjKEbWr7TdyKEA3FOYR30tgi8AXmAM%2B4bEclUl%2BELfezWHzqcL6kCbZHaxldh3ADGD4OHhtEi2KQCdTJfLTMX7s6SFdQ0fQYtqTb3GmxqB2RevF06Gkh9fRsWk0t8tb2zRW3F8YkzATcvoO7Y%2BGrKKz9CpXQOwTSlhukUCPgPnlcCaV7PDu2BA3qgg8PM4VkA1NssAoIncC9lFsz%2BK%2F5BEifOKYUPac1tJ0mHu%2F8gFokL%2FKfylOjeDIC630kyh6jWdTSiGuAbk0lhzNJUMBPBwdgojjfup%2FLr7eTE4VARQvvdSF%2FeOJsBV82BtR16u5RmYh%2BIot7uG9edCE0nTOC4Bi2UOVcLO4yU5y6efjDg1srJBjqkAZKC752GI3v1YQty1QSGGf%2B2gfgU%2BMiOjPqhZSRv0JyJmgLZo63HyBpOiWRGFX4Ks5144%2FuWkhxNGpL2Oo5%2Fwc8QLyXY%2BJXmHRBQahNMdK7N34HZ2hw1K965rhUIxZk0frVSgJj9fTt8XWZcGbT1J%2BPBS8OYhAIFt0jf7mK7i3DPfZd%2BiSb6rr%2FECDaOozd1kAL%2FKK1zwmAcWGrGAMk5uu0mKg%2Be&X-Amz-Signature=084d85f13ef20ce7191fafeed69931e6e0a85233c6f2099a609b7bd4b127e06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

