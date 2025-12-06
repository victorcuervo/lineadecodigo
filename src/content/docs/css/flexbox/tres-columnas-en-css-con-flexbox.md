---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRSTH65%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4Frn0wUY%2Btn9MgERpbLA5WkOqsaSFqB3MkePvi1UqYAiEA3bpujWRRU8ur6OjAcxP1hCBMwbgQe3mCc%2FLn9j5LQsEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCY2GR3dtKCV0u0OASrcA0hC5CQxm62BNCQunh2BjdRqNiqIjPN20wHPAHw16LeaHxR%2F0Dm7dlrlTNlauXDTwRFjig9kbN3FRJVZyU%2FHhKYlJf71vWKK178PSPaHeDry4KIoHt2Gp1cj%2B1jOgIm7wPH4OnQVnToZLPd4HFfY80HPv0fMnToRBgMljDb%2BHgrH81oMsHi5BpdL6TP%2FkThnrpKQ1s9lDaa87DwUyP7HAUvZMs4qxcFHZrqXfEIlm17HewJmcG3AutF8NFno5E0tWw2WgaMzJvlkFb6cve0xL3OVDQfEcoHAbYUFGjzJ6pSy7SzYhhJxRDPbIbZym5oYc%2BXxqVeV%2FzrD41l3GccKbSCdODgC1mub1vHfMmT6IyJYskSmhhFdWBkeHQEF5CtEigheern8ESDhYjuSI7CZ3EKiKCqDSljk%2BxtXlxjoc8cC%2FBsgZYMIth23wnFOb%2FR3K5ZL4%2FLu2gkXa40V7pN5l3Cqnr6vAIJy7T31hjef2kZ05mw4p%2FYGDVvh612yIzKktfIuOM47habz31WkYdUHOZFISr1BBn0kX9jGT2EHg%2FYPhR5gArxTpA0USOc4IAIjzZ7mJwD2J5GV%2F3SOppBvIckNuf9kSR2%2BqmTAoKyVH7ybBzd2ytqdeb87z8y7MPuez8kGOqUB3AHHdJvHo4YD0iSxZ8pkVm3AaJkLUN%2BmKZuZdlw2ETDC48t7BgpNN5daWlbu%2FYyYxrl%2FpfLfxiMux%2B%2BRIOE7x7N0LVhyfiReUbBa3OWgI4%2BXeNxrSvAftqSX9anEk8rZ5fyX1JhfED4aPTBsWsayImBjvfEznq3PvZSbnHiu8Uj%2Fd%2Byxv5mxPjt9qaG67OjWz4dKQebMIucVrDsL2XDznuDGTcfI&X-Amz-Signature=1adf320f6fb18fb2232573379fa99d8237f4f7d014d998ac9301ea586b3f5c7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRSTH65%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4Frn0wUY%2Btn9MgERpbLA5WkOqsaSFqB3MkePvi1UqYAiEA3bpujWRRU8ur6OjAcxP1hCBMwbgQe3mCc%2FLn9j5LQsEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCY2GR3dtKCV0u0OASrcA0hC5CQxm62BNCQunh2BjdRqNiqIjPN20wHPAHw16LeaHxR%2F0Dm7dlrlTNlauXDTwRFjig9kbN3FRJVZyU%2FHhKYlJf71vWKK178PSPaHeDry4KIoHt2Gp1cj%2B1jOgIm7wPH4OnQVnToZLPd4HFfY80HPv0fMnToRBgMljDb%2BHgrH81oMsHi5BpdL6TP%2FkThnrpKQ1s9lDaa87DwUyP7HAUvZMs4qxcFHZrqXfEIlm17HewJmcG3AutF8NFno5E0tWw2WgaMzJvlkFb6cve0xL3OVDQfEcoHAbYUFGjzJ6pSy7SzYhhJxRDPbIbZym5oYc%2BXxqVeV%2FzrD41l3GccKbSCdODgC1mub1vHfMmT6IyJYskSmhhFdWBkeHQEF5CtEigheern8ESDhYjuSI7CZ3EKiKCqDSljk%2BxtXlxjoc8cC%2FBsgZYMIth23wnFOb%2FR3K5ZL4%2FLu2gkXa40V7pN5l3Cqnr6vAIJy7T31hjef2kZ05mw4p%2FYGDVvh612yIzKktfIuOM47habz31WkYdUHOZFISr1BBn0kX9jGT2EHg%2FYPhR5gArxTpA0USOc4IAIjzZ7mJwD2J5GV%2F3SOppBvIckNuf9kSR2%2BqmTAoKyVH7ybBzd2ytqdeb87z8y7MPuez8kGOqUB3AHHdJvHo4YD0iSxZ8pkVm3AaJkLUN%2BmKZuZdlw2ETDC48t7BgpNN5daWlbu%2FYyYxrl%2FpfLfxiMux%2B%2BRIOE7x7N0LVhyfiReUbBa3OWgI4%2BXeNxrSvAftqSX9anEk8rZ5fyX1JhfED4aPTBsWsayImBjvfEznq3PvZSbnHiu8Uj%2Fd%2Byxv5mxPjt9qaG67OjWz4dKQebMIucVrDsL2XDznuDGTcfI&X-Amz-Signature=e3f2c191124c06f8fd2bc57286b160e492bafa537f2d57a57790483619c715d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

