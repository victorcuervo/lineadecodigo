---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PZVT6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQClhQbmDXBZIoXKjRE3XhtwFZUUvd3GoW4iKR3blUaZRgIhAMSgML9DKifMyx0voXkoc%2B1d%2BYCvg1nx%2FR9eot7oxKzxKv8DCEcQABoMNjM3NDIzMTgzODA1IgwWgoR7bwIDIpdIADMq3APHM0jsL45cOSSO1Qr73KWRt2zj%2FR3wQfk%2FfTJcw8CFCxcuKTiz1s3hLsOKWyHJWSGAvgUyWy9gWagg3uenAmF8FLlEXiABr2okxp1zCkPZS2a%2B3LnxWykP%2FSMomCSrVo4CZvNZJv0PKrXR%2BBCPnMXUw75xxxkgDpdDyhxTQJLWPDQDXE58qVm5l4Wk8PIxToWgZ52lEGWxZ1uE4%2FlAEWr3obAu1wfD5s1WfwstxPdevhZBnWdAZxKrdeokKlKtMWnAMM5f39RzqeM28wWelUsqH2hzgFKW%2FUvchz78EDcYt9zrGywX6r1k%2BSuTC5b6f46m7oiLfrw2j4pT3ISlBfXBjhFB03ovUHSYtGbo5x6hbjw6I3vRsPjuBPOzlsalNRxZKbY76dFKlzDsG6HVujIuFCa8Cu1d6P62nTZifn6%2Bu9vj1ShLiIVlNcINOEbvCQo3s04%2BjWbCCSa0bIKSEaSLbj84AtA98BhGSYGh4P5B%2BmCDE5gLy7qNgS%2FDWoOlPOZMF%2Fs%2BaRWxboHAtF60ua%2BMlu0CaPpF8RspCCyftFM7ukdnL80vsXTzsbAavsaunbSwXv8AJLq0LcnfDifXibxyuv1pPh%2BAjSwBX6yozzuGX%2FLwQlSib%2FyGuGxrxzDOocbJBjqkAe0KSV%2BeS8HCnViz5xl6DVyHGfz%2BVwnwt%2FzT6idwnLZ0o0cYNqI9vrbx%2F4%2B2UOfuCGaiaNPu90uvyZZp7GmmgWqkj%2Ba2EvtVTceAZVNUV52ftOTaj53QxqVGyj8a1h%2FgeM3FWP6wZz0MEclooukjhrZaU4kiiSm94b35lnXR%2B0akiS83P%2Bxm%2FUA6n%2BEOO6c%2Fjcf9WIqMs5SAtFW7h%2F0M7RTGdHZt&X-Amz-Signature=b31b702400205ef12c3390cf682c92d08a1a9f8759c07f42af9fbaa351b09818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PZVT6M%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQClhQbmDXBZIoXKjRE3XhtwFZUUvd3GoW4iKR3blUaZRgIhAMSgML9DKifMyx0voXkoc%2B1d%2BYCvg1nx%2FR9eot7oxKzxKv8DCEcQABoMNjM3NDIzMTgzODA1IgwWgoR7bwIDIpdIADMq3APHM0jsL45cOSSO1Qr73KWRt2zj%2FR3wQfk%2FfTJcw8CFCxcuKTiz1s3hLsOKWyHJWSGAvgUyWy9gWagg3uenAmF8FLlEXiABr2okxp1zCkPZS2a%2B3LnxWykP%2FSMomCSrVo4CZvNZJv0PKrXR%2BBCPnMXUw75xxxkgDpdDyhxTQJLWPDQDXE58qVm5l4Wk8PIxToWgZ52lEGWxZ1uE4%2FlAEWr3obAu1wfD5s1WfwstxPdevhZBnWdAZxKrdeokKlKtMWnAMM5f39RzqeM28wWelUsqH2hzgFKW%2FUvchz78EDcYt9zrGywX6r1k%2BSuTC5b6f46m7oiLfrw2j4pT3ISlBfXBjhFB03ovUHSYtGbo5x6hbjw6I3vRsPjuBPOzlsalNRxZKbY76dFKlzDsG6HVujIuFCa8Cu1d6P62nTZifn6%2Bu9vj1ShLiIVlNcINOEbvCQo3s04%2BjWbCCSa0bIKSEaSLbj84AtA98BhGSYGh4P5B%2BmCDE5gLy7qNgS%2FDWoOlPOZMF%2Fs%2BaRWxboHAtF60ua%2BMlu0CaPpF8RspCCyftFM7ukdnL80vsXTzsbAavsaunbSwXv8AJLq0LcnfDifXibxyuv1pPh%2BAjSwBX6yozzuGX%2FLwQlSib%2FyGuGxrxzDOocbJBjqkAe0KSV%2BeS8HCnViz5xl6DVyHGfz%2BVwnwt%2FzT6idwnLZ0o0cYNqI9vrbx%2F4%2B2UOfuCGaiaNPu90uvyZZp7GmmgWqkj%2Ba2EvtVTceAZVNUV52ftOTaj53QxqVGyj8a1h%2FgeM3FWP6wZz0MEclooukjhrZaU4kiiSm94b35lnXR%2B0akiS83P%2Bxm%2FUA6n%2BEOO6c%2Fjcf9WIqMs5SAtFW7h%2F0M7RTGdHZt&X-Amz-Signature=12e08567f829fb3447cd73eb81f8a9b295d1b32e32bb47536aa7cbcf9e40ff7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

