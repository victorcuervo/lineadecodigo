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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4WMAFU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIClhMgQ0pSSp5jRfY9nBt%2BCa9gFeb3ehjqrvEgIRdQX9AiAteP71via3ixM1TaNmkYsbLLf00oJTjJvIFzhHRYzMtSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1zTloYgiINmL5tXGKtwD0uX4WklU6MKN1iHP2o%2FdKIUY7I0V%2BtZ494JzPTj4kc1UOJKvG%2Ba5u3I7szDI1x9CY4xuMfWb8JtONdQMjPfzJG0eEILf6Bb8jslmPzDKEI4eiuWIYic0Yd9ZOTJ4QmFJQi9v6jDjf1aN21mlp6UhrVat5yOwzV0PJbKhECe5kxodj%2BUDN0jPjT2KEzV%2FPfv%2FhzmdmNzvh4AYOTvrduhnagMJzfgQ0q43QZiVS0RaHFABpAOIcf%2F19YyYx2qc7Sl1Gb3dts5NN51LaN26R3zIUpWANoSZiJdED0%2BUypsMrkPxAQDckD3ELDpKsGqb8mgcKmE9w14ZvVnuR1VrFXnMKFXhIo3QlzmcGgcJSu5pOxD%2B4FPHnQ0Z%2FqXHT%2F%2FfqJ7hWOi80WF88GkqDg4f0bR%2BiTO6bCv7lLk5EAOcdDlkfq3cs4ELW0yP13X2YIIsw2a1%2BS%2BKh6au8e7mEIaxuy9O%2FmR0m%2BP4nT1wz3eATrlwFGx196nOoHskVDYCwnxK9eyl92d1EtcTb1i2D8mLyNtrJtp4%2FaqVs4sLeCmTn0V%2Bil39%2BWwC8Ix1UtvvimbMF8qgoe1fC34X%2FVbX2420%2BTC%2FcOV94J%2FiWLulNQ19cWZPEolNel00xzR1tgSSVLQwysHByQY6pgFthOuVcKLwKFntyez0di8HTbZPQ4Ct7hh%2B72INuwa%2FTmJ2wksqCI246Hi17VWrwV5fRistoTlVLMUbHJ%2F3oCTg%2F0Ij%2B%2BXgY%2FYlW9nDe%2FRGkI2VpFnJN9wxGO%2Fdy1bxXgM0BHcsw34zxj0BCk%2BMVgihI4s4GmMqRv7oOA%2F8DHiMEFSL9aB282KrCZ2eQAeXuNNqN25GTJ4Fbku5EM9e95jclMFGoebE&X-Amz-Signature=255431340a2f7e277902e2516601f484e0df07b8ae0305fc4d5e62faf8daae89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4WMAFU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIClhMgQ0pSSp5jRfY9nBt%2BCa9gFeb3ehjqrvEgIRdQX9AiAteP71via3ixM1TaNmkYsbLLf00oJTjJvIFzhHRYzMtSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM1zTloYgiINmL5tXGKtwD0uX4WklU6MKN1iHP2o%2FdKIUY7I0V%2BtZ494JzPTj4kc1UOJKvG%2Ba5u3I7szDI1x9CY4xuMfWb8JtONdQMjPfzJG0eEILf6Bb8jslmPzDKEI4eiuWIYic0Yd9ZOTJ4QmFJQi9v6jDjf1aN21mlp6UhrVat5yOwzV0PJbKhECe5kxodj%2BUDN0jPjT2KEzV%2FPfv%2FhzmdmNzvh4AYOTvrduhnagMJzfgQ0q43QZiVS0RaHFABpAOIcf%2F19YyYx2qc7Sl1Gb3dts5NN51LaN26R3zIUpWANoSZiJdED0%2BUypsMrkPxAQDckD3ELDpKsGqb8mgcKmE9w14ZvVnuR1VrFXnMKFXhIo3QlzmcGgcJSu5pOxD%2B4FPHnQ0Z%2FqXHT%2F%2FfqJ7hWOi80WF88GkqDg4f0bR%2BiTO6bCv7lLk5EAOcdDlkfq3cs4ELW0yP13X2YIIsw2a1%2BS%2BKh6au8e7mEIaxuy9O%2FmR0m%2BP4nT1wz3eATrlwFGx196nOoHskVDYCwnxK9eyl92d1EtcTb1i2D8mLyNtrJtp4%2FaqVs4sLeCmTn0V%2Bil39%2BWwC8Ix1UtvvimbMF8qgoe1fC34X%2FVbX2420%2BTC%2FcOV94J%2FiWLulNQ19cWZPEolNel00xzR1tgSSVLQwysHByQY6pgFthOuVcKLwKFntyez0di8HTbZPQ4Ct7hh%2B72INuwa%2FTmJ2wksqCI246Hi17VWrwV5fRistoTlVLMUbHJ%2F3oCTg%2F0Ij%2B%2BXgY%2FYlW9nDe%2FRGkI2VpFnJN9wxGO%2Fdy1bxXgM0BHcsw34zxj0BCk%2BMVgihI4s4GmMqRv7oOA%2F8DHiMEFSL9aB282KrCZ2eQAeXuNNqN25GTJ4Fbku5EM9e95jclMFGoebE&X-Amz-Signature=c3b6c1606cc3f0edd073885dcaad90545177a5910a096e9c0f0ba78ec60bb3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

