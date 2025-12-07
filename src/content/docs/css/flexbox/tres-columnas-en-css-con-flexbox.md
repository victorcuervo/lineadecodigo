---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIGNGOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrItpKjLnK3XKgIBBHok5vnFbDuJdEmmHa073qrOC62AIgMypx%2B%2FvlD4mYs5hEjOuh0WViuNAEbIoyx%2BdVj5vwqXAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKuakDgBhfWpYTC5SrcA%2BveN3DHmN2XKPQ%2FhwFnR1RanRlJGsQjg4T8LRIUTjdBpzY3Ixhi2JdbS3Mu0tVXvSiUV5kASC4w4pV41tX36vQBonwH8wg3eqHdEw2SsAnBAeZ8m9JRV0is15%2Fiam1qC8h1GM9zsnWiCHlnXsigqtYwi4Sz%2F%2F%2Fwcb0v4fACPo8rJC0tRwYnWo%2FLnpKujrI6whpNJloLNKJnwq5uAOlJEK2iqX7Xzu%2BHDPywzm9%2FW2jTnS4NsErH4dBCLCdOc8eT8Hc1t3Sw5rD1Jz8l3vgTv2%2FWcOckjMADt6Kdge%2FuBY7icnSM8xpW2091BnGlnm4mYXzqzTE7MMbLAwDdo5x0JnmbEnLXh8gg9TR2ACHWbvNSQIkfSsjr37UYziRLALkdIZ4llstzxXDb%2FlKOaGHPh7GpGtSs1FOArnvnLtG4Y00i74jSCqVVg5u7H4rR7TIBt3TP%2FKKyX13qjls7hdZdYEh09dy95Najh7sQI76jGppKI3SqaiCBpw2FCvxjUV9bGwCwjxhos5ipsrB%2BXwiKNEWCiSfb94rsz1DeJoZpoMMVTO7QPqe4PepVuj8GvYye5Z92fFUSJ3cabRJtOI0tMSyNkvu2ygUZvV5ujoKnquxvP4HVBeynYoriZEDdMNa11skGOqUBKlGStvxSkeyFZ%2BuTb3LvouUm2fpIRPtz97OAT1CavZ%2Fox%2Fsx88q0W9JwlvK%2FvR%2FEHvoYOz3d64nmwe3a%2FEGYuTBrZj%2B2HJoRT9yTQvZSpRP47losdMWO4Cz3%2BTxlwwSw9Ozu3uUmANpB7HhCvNBv73ufCA0T0iqw54hfgrqn9hDIdgFlLsdM71yJNa8z1DDbCg1ZNIfKut6cCfEc9P1TfGXaBu%2FA&X-Amz-Signature=b096ee2c76116db46edf4d1bd2db97fc6ea841b3493ff5b6bdf542add8e97ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUIGNGOC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrItpKjLnK3XKgIBBHok5vnFbDuJdEmmHa073qrOC62AIgMypx%2B%2FvlD4mYs5hEjOuh0WViuNAEbIoyx%2BdVj5vwqXAqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKuakDgBhfWpYTC5SrcA%2BveN3DHmN2XKPQ%2FhwFnR1RanRlJGsQjg4T8LRIUTjdBpzY3Ixhi2JdbS3Mu0tVXvSiUV5kASC4w4pV41tX36vQBonwH8wg3eqHdEw2SsAnBAeZ8m9JRV0is15%2Fiam1qC8h1GM9zsnWiCHlnXsigqtYwi4Sz%2F%2F%2Fwcb0v4fACPo8rJC0tRwYnWo%2FLnpKujrI6whpNJloLNKJnwq5uAOlJEK2iqX7Xzu%2BHDPywzm9%2FW2jTnS4NsErH4dBCLCdOc8eT8Hc1t3Sw5rD1Jz8l3vgTv2%2FWcOckjMADt6Kdge%2FuBY7icnSM8xpW2091BnGlnm4mYXzqzTE7MMbLAwDdo5x0JnmbEnLXh8gg9TR2ACHWbvNSQIkfSsjr37UYziRLALkdIZ4llstzxXDb%2FlKOaGHPh7GpGtSs1FOArnvnLtG4Y00i74jSCqVVg5u7H4rR7TIBt3TP%2FKKyX13qjls7hdZdYEh09dy95Najh7sQI76jGppKI3SqaiCBpw2FCvxjUV9bGwCwjxhos5ipsrB%2BXwiKNEWCiSfb94rsz1DeJoZpoMMVTO7QPqe4PepVuj8GvYye5Z92fFUSJ3cabRJtOI0tMSyNkvu2ygUZvV5ujoKnquxvP4HVBeynYoriZEDdMNa11skGOqUBKlGStvxSkeyFZ%2BuTb3LvouUm2fpIRPtz97OAT1CavZ%2Fox%2Fsx88q0W9JwlvK%2FvR%2FEHvoYOz3d64nmwe3a%2FEGYuTBrZj%2B2HJoRT9yTQvZSpRP47losdMWO4Cz3%2BTxlwwSw9Ozu3uUmANpB7HhCvNBv73ufCA0T0iqw54hfgrqn9hDIdgFlLsdM71yJNa8z1DDbCg1ZNIfKut6cCfEc9P1TfGXaBu%2FA&X-Amz-Signature=f9f6c02a5a8aed302a51ff991eb9549042025cdc23799bd040cc341586b1f703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

