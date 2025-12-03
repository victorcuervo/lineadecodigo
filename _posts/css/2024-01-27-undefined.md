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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWICZWSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBiBaNpYTfVNk9Ya22ZIDf2RExaXP3G2EqXipaQFznIMAiEA4xGhti1AXZUYx2hrva8bWnb3paAh7AkvyGsdcm9IaU0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEnL%2FOpJOTPMvvDIqircAyU%2FBLt9UgqzeHl08Kj2WyAJbW6KVIXYL1tDyAiLMDMF%2FjsWmvAN6jnNrhDRUkyQiunr5fBBi9yvIxYFiBBeEhGK1LMYCdaKsdkC2Qd4zWFXTBMCzMXVjQz49srL7Hapt9gSrvY8E48EwLRiYPMAi3Uzc08LmwviLyn3BvI5N3dMqFKMgbURcuzndzKXGLgOmTuQK6lnfhPMK0OJs3ji5o4SO6VfKT%2B%2B%2BO%2B4%2BgUVbYRFii9xCRJUOntRW0ucuAnmbSCn82mHRSqAiGKZwZa6%2FrFvTyWFiJFZveNZQTpMy7P11nbwils%2F9EDXsMM2p1lEx86gJjY8xEPtCsq%2BIta1s0zYVctcYuS5Ed25NvEyZWjn65Orxa6hLn1vejfL7R9f5ScZE%2FhaC48CopuVE0%2B5h0%2F0HiqJE7ji822GW9on5hcsgeciQ9wFumoZADgAufhdJeS0uCxKgRN6a5RZyg8fZduZb8BaNcgbFAgg2w5Z9MhUKm%2BjnjmBSVqmhZ6kcr5hmo23v0JKJsDb%2F4xLa4pbq9NJ%2FL5k9f1wrtellQUyc3%2BlFIfo4YFIUZjBFUoA59dNh2kvVWrrPxD5wuR9i91AR7fbg19Fh%2FNNccbuihVJyDDBS9weANzeXTGFpW7%2FML%2F1v8kGOqUBDxXMnLnnwra9dpBcrCBV5AIkN1fW2Q2h9ghkIxRV%2F0qE3B2Fzcasq6yCCThhwrxCjWzKIv9Lak9sMznb91Rw7V6Y5Lqg%2B5jnxa40UkvkO3XhE0F1DKDroOYyJssRM2aY8hAuh4Wt%2FnsOXoQkQl8oePcPe94lJx6kOL4HdfnH1FIU8jl9ac1WL3RuxVn2HprqQx%2FnB73i5Uq0uGM%2FZTmETbkqGeZX&X-Amz-Signature=978cf469290e260bf0076692c7db3defaa0d54f1b9da73df49fc39aaddf6773f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWICZWSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIBiBaNpYTfVNk9Ya22ZIDf2RExaXP3G2EqXipaQFznIMAiEA4xGhti1AXZUYx2hrva8bWnb3paAh7AkvyGsdcm9IaU0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEnL%2FOpJOTPMvvDIqircAyU%2FBLt9UgqzeHl08Kj2WyAJbW6KVIXYL1tDyAiLMDMF%2FjsWmvAN6jnNrhDRUkyQiunr5fBBi9yvIxYFiBBeEhGK1LMYCdaKsdkC2Qd4zWFXTBMCzMXVjQz49srL7Hapt9gSrvY8E48EwLRiYPMAi3Uzc08LmwviLyn3BvI5N3dMqFKMgbURcuzndzKXGLgOmTuQK6lnfhPMK0OJs3ji5o4SO6VfKT%2B%2B%2BO%2B4%2BgUVbYRFii9xCRJUOntRW0ucuAnmbSCn82mHRSqAiGKZwZa6%2FrFvTyWFiJFZveNZQTpMy7P11nbwils%2F9EDXsMM2p1lEx86gJjY8xEPtCsq%2BIta1s0zYVctcYuS5Ed25NvEyZWjn65Orxa6hLn1vejfL7R9f5ScZE%2FhaC48CopuVE0%2B5h0%2F0HiqJE7ji822GW9on5hcsgeciQ9wFumoZADgAufhdJeS0uCxKgRN6a5RZyg8fZduZb8BaNcgbFAgg2w5Z9MhUKm%2BjnjmBSVqmhZ6kcr5hmo23v0JKJsDb%2F4xLa4pbq9NJ%2FL5k9f1wrtellQUyc3%2BlFIfo4YFIUZjBFUoA59dNh2kvVWrrPxD5wuR9i91AR7fbg19Fh%2FNNccbuihVJyDDBS9weANzeXTGFpW7%2FML%2F1v8kGOqUBDxXMnLnnwra9dpBcrCBV5AIkN1fW2Q2h9ghkIxRV%2F0qE3B2Fzcasq6yCCThhwrxCjWzKIv9Lak9sMznb91Rw7V6Y5Lqg%2B5jnxa40UkvkO3XhE0F1DKDroOYyJssRM2aY8hAuh4Wt%2FnsOXoQkQl8oePcPe94lJx6kOL4HdfnH1FIU8jl9ac1WL3RuxVn2HprqQx%2FnB73i5Uq0uGM%2FZTmETbkqGeZX&X-Amz-Signature=32dfe0ad6a93542bd0b7f5f679b338db417877c756d1a5015bc86eb2854f863b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

