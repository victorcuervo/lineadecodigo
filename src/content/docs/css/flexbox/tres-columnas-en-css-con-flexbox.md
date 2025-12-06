---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJB6YLGS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzv0DOsYcbHb%2BSLT2hS9hCgItEeU6evL80Bn%2BDaoNDLAIhAOdttS7W1f7kkLPhoCPWBxhkWFv6UqWGhAZb2%2BOeE7EpKv8DCHMQABoMNjM3NDIzMTgzODA1IgzvDz2xg%2FHvBUKRnD4q3ANEBz5SiHoLE%2FbU4tClCVeffcbivAmPRTtMT7poHxAhkkLT%2FKVm%2FgyIE4byBS9xBFo12eDG3gOpLk%2BCsPZvVyAQ1QXNQEjAWm6o%2B3n1R2KBNcq7Xk0HC%2FfJcOmBv96xXf1t9rhGX5Gb1QCMwZwrlMIQVgk%2F5sL1Gm4LhVdMbTAd4o%2FU3VHzXJOUYCKjIu0otH2uBd82aLj9AcUKQDJudUCGxdAZClOptNwYceGExzcbYC847lL0V9Hy49s4oUZCBMH6pWu7GFkmN9URGzF0IRDlfPi3NfpQqDDZ2b9RjET0GDzCDzzCtWTOMLunMzlqzYKN7g5z%2FgMH6JOTx%2FzQTGJnHaOEfpiZrqIidWFWU2u7OuPj0IVxAgg0BIepMyqMM4jqNAFI590NpyT0CTFrTLmHNUXcSMUXYrEKPKJDxdU1UCnKYTFiTPURjS%2FIXSPF8cljKjzXq8WHevCJre9TbWKpS0kdtT3rKKQFcZSWZHh6OM0yLzjsE3RsIh2KnDZGSzgI0pxjKwUy6OtDVs1PAPNDp8gOe9FRSv11TmTViLrtPl2Dye%2FdhFdCEbw3nxsPWkbB07Qsl5g2l9iGWtxNarcu0%2FmmUi%2BYErSrTNV8wYVXOmrK2%2FzWTUovvW%2FLQjCGidDJBjqkAYMMpltAL%2B8vLnh9Ilfq0qF%2F21SerLt5JcwQrlW9dKOjFyz0u6OElA3WKCQA2pgTY97M1afv4bERh%2BqjqHWBL2Avq7Y%2F6nM2rL31uhobkb4lnQ5btnd1X3GTycsAvJym8gyXEbMLhQjCnlWvEV9qPlmBuTEglwDqgsLmfSHNOERY3iVSZl3f%2BMekPPfeIK6l%2Ft%2BWPZ%2BqpL2LHzBbfxNmKVqgJWSW&X-Amz-Signature=1191cbe6645b226b182a2be64c1dd5b6904f299185e13d973394a45c409941e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJB6YLGS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzv0DOsYcbHb%2BSLT2hS9hCgItEeU6evL80Bn%2BDaoNDLAIhAOdttS7W1f7kkLPhoCPWBxhkWFv6UqWGhAZb2%2BOeE7EpKv8DCHMQABoMNjM3NDIzMTgzODA1IgzvDz2xg%2FHvBUKRnD4q3ANEBz5SiHoLE%2FbU4tClCVeffcbivAmPRTtMT7poHxAhkkLT%2FKVm%2FgyIE4byBS9xBFo12eDG3gOpLk%2BCsPZvVyAQ1QXNQEjAWm6o%2B3n1R2KBNcq7Xk0HC%2FfJcOmBv96xXf1t9rhGX5Gb1QCMwZwrlMIQVgk%2F5sL1Gm4LhVdMbTAd4o%2FU3VHzXJOUYCKjIu0otH2uBd82aLj9AcUKQDJudUCGxdAZClOptNwYceGExzcbYC847lL0V9Hy49s4oUZCBMH6pWu7GFkmN9URGzF0IRDlfPi3NfpQqDDZ2b9RjET0GDzCDzzCtWTOMLunMzlqzYKN7g5z%2FgMH6JOTx%2FzQTGJnHaOEfpiZrqIidWFWU2u7OuPj0IVxAgg0BIepMyqMM4jqNAFI590NpyT0CTFrTLmHNUXcSMUXYrEKPKJDxdU1UCnKYTFiTPURjS%2FIXSPF8cljKjzXq8WHevCJre9TbWKpS0kdtT3rKKQFcZSWZHh6OM0yLzjsE3RsIh2KnDZGSzgI0pxjKwUy6OtDVs1PAPNDp8gOe9FRSv11TmTViLrtPl2Dye%2FdhFdCEbw3nxsPWkbB07Qsl5g2l9iGWtxNarcu0%2FmmUi%2BYErSrTNV8wYVXOmrK2%2FzWTUovvW%2FLQjCGidDJBjqkAYMMpltAL%2B8vLnh9Ilfq0qF%2F21SerLt5JcwQrlW9dKOjFyz0u6OElA3WKCQA2pgTY97M1afv4bERh%2BqjqHWBL2Avq7Y%2F6nM2rL31uhobkb4lnQ5btnd1X3GTycsAvJym8gyXEbMLhQjCnlWvEV9qPlmBuTEglwDqgsLmfSHNOERY3iVSZl3f%2BMekPPfeIK6l%2Ft%2BWPZ%2BqpL2LHzBbfxNmKVqgJWSW&X-Amz-Signature=f386830e4013291f7e1fd99d0a6ef8a82aa578519af8e9c936621c6c21346e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

