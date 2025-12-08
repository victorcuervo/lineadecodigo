---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IY2MYCY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChFKfVI2Cw2eTrBifoySITKMFBNx%2FXnlPn6qabYGxl8QIhAJUUZwDr1gUgVJffrnsOHK57XuttR5gk2DqKVgSbvzpxKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPzxCpkyKeEr0Ey7Eq3APSPmhBsQZ2k7osLnHVw9lLmG2gGk7ZMZ7qC%2FWmz%2B0LxDEUacETa4LlWnNbUt%2FRXFkElD9Aa39MJ4S68PeeGlE00kwl3UGZid2mbqH4tOh2M63MPRH4sIobSIEBrKcxReAA68EUy3XXz762qwKdVQybCLwmksOfAnsCtUE%2Bdg%2B15E74YK3YsO2bRKeZAn2meTPLC6MjzVJ9QsL5J%2By%2BjsZBSKrhcHGLlqcj%2BiaG7cVqK9I4xFugeO%2BfEI9SrLOqc3%2FDnsldhilA738JFJv1ZGxiXw8pFTc57q7I%2BbWIvd5RPSLlsT%2BduxPseAMYRHj%2BTt3cujmf4TRoWt2R6%2BPYdzHqIvfkjTDLP0ycCwzbMh8lYQdjUzIChc2FHGCYO5jvtlnkWIgJ3tKNwZQdhFQm%2BRayrRimC3HIVoP5qT3yrEkuHSE59NeCpU3reSGLiTTcY4zgrK1P3T8LWCXRkrT1Uhm1TDSDKVn%2FRFuA%2Fw5U4VcESpbtYsZtRmLKxLkcwEh6wqh6fCEmceJAzpjsU6Et0M3ce0q4DKuX%2BZY9aZtz6O5%2FruvN2xjFsAPoN2nNcWb7Q2RhnsyIchrDeN8EoMYHqRyxcssCWQ4%2B3tw5kyPU9vW4tULh%2BUoXnnm9DXwgKjCClNnJBjqkAaJUyZdbnoH05Adms6VjOG9FUiqQfsyrJ%2FLEc4ua1nziuIILir%2BzoaV5IGoSn2KNN8PkDC6eEg6bZ4KHebLhihQ0WCUidRKhocktK72S1YO%2BrCgBDVHqNeOXm8v8nAsiyayrCMI1jq8z497W0662JoYizB5GcFZ2Rwx8kvsfHWdoGtQ2yvfyESO2gvoPTp%2FFbolLNlcmBezYAcFWQsGUqK2hp1FN&X-Amz-Signature=ba782a72c07b6f72373dc0ea9ac4e6662089852e4b61cffb4377de2e39be1a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IY2MYCY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChFKfVI2Cw2eTrBifoySITKMFBNx%2FXnlPn6qabYGxl8QIhAJUUZwDr1gUgVJffrnsOHK57XuttR5gk2DqKVgSbvzpxKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPzxCpkyKeEr0Ey7Eq3APSPmhBsQZ2k7osLnHVw9lLmG2gGk7ZMZ7qC%2FWmz%2B0LxDEUacETa4LlWnNbUt%2FRXFkElD9Aa39MJ4S68PeeGlE00kwl3UGZid2mbqH4tOh2M63MPRH4sIobSIEBrKcxReAA68EUy3XXz762qwKdVQybCLwmksOfAnsCtUE%2Bdg%2B15E74YK3YsO2bRKeZAn2meTPLC6MjzVJ9QsL5J%2By%2BjsZBSKrhcHGLlqcj%2BiaG7cVqK9I4xFugeO%2BfEI9SrLOqc3%2FDnsldhilA738JFJv1ZGxiXw8pFTc57q7I%2BbWIvd5RPSLlsT%2BduxPseAMYRHj%2BTt3cujmf4TRoWt2R6%2BPYdzHqIvfkjTDLP0ycCwzbMh8lYQdjUzIChc2FHGCYO5jvtlnkWIgJ3tKNwZQdhFQm%2BRayrRimC3HIVoP5qT3yrEkuHSE59NeCpU3reSGLiTTcY4zgrK1P3T8LWCXRkrT1Uhm1TDSDKVn%2FRFuA%2Fw5U4VcESpbtYsZtRmLKxLkcwEh6wqh6fCEmceJAzpjsU6Et0M3ce0q4DKuX%2BZY9aZtz6O5%2FruvN2xjFsAPoN2nNcWb7Q2RhnsyIchrDeN8EoMYHqRyxcssCWQ4%2B3tw5kyPU9vW4tULh%2BUoXnnm9DXwgKjCClNnJBjqkAaJUyZdbnoH05Adms6VjOG9FUiqQfsyrJ%2FLEc4ua1nziuIILir%2BzoaV5IGoSn2KNN8PkDC6eEg6bZ4KHebLhihQ0WCUidRKhocktK72S1YO%2BrCgBDVHqNeOXm8v8nAsiyayrCMI1jq8z497W0662JoYizB5GcFZ2Rwx8kvsfHWdoGtQ2yvfyESO2gvoPTp%2FFbolLNlcmBezYAcFWQsGUqK2hp1FN&X-Amz-Signature=7a8f9947b2d26fb873f54b5754e9815ca8fd3eca6ba3aa6a4d185ecc788b7c77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

