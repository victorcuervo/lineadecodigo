---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFNABSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmo9Jg2T4gBjG%2FJfKyEKncsK%2FHu757A9cYsx7uP3LHZAiEAwWDGWKa6mez6GvioYfpIjc8s26a66IlqWF7zzP6XImoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALd4qqn8s%2FD0ofHOircA07kx7L6C0vTlRiLeFtHOzQ%2Frf%2FhZiNXIkwM5hAKXgKXh%2BQwnOKlovCcNlFCs7JNjLs7F7lo6nVF%2FDw%2BkXTFXei1YlrrM8Q4DF8uHTX%2Bw4ayATYXRtcRonjAg0hnOuVZC%2BpUOBBihnBif08w9EjRxRrEQ74aJaxqguwng76L2x5kbTSGP%2B4n8Sm4x6FXxzxba2dP9OEn9Ttw1MypmdJoJqGR5qr26pFx7P7%2FiaU9cnNclUl%2BqKMK%2Fn3mSJoF1jtuCqYkO9VwjJM%2BaPLqA%2BIHqKjDShrQbEjartOTZOah96G743omQ9LId8Oz9xdbECF6SNHvkw1ZeLJFRTiVXuSIwDkvQQTjEZi6mjNuz4EQFGg5xu%2BwasHWzu%2FtCAZ0MnxVJnm%2F0wfYoQG7A%2FDNWrbOzFgfK6SoyUcJPhESQXQyx2S3SmgWfmbi1CN0%2B%2BxIg7cTdtrVfubMZjpIgAtBQSq7G43%2Fh5evGYMl8vsBlLMLqfIsyE98NKuL9SwPS6tWyD47IUNx1VnriDy34cjnIjy3xTlyKtJ2gG1GnLKT1y9lOn4HVQWjCvPoiyCYyXn13vNuAnA%2FBnrHpaS1qWQLpPCbNJj9qu%2FAtpJREnKG8l1%2FoiEm%2F8MKyVN1tQ4Qczt0MLD%2B0skGOqUB2vDbebyO%2FK9nhoyojXEHeLWZZzI1Gc%2BlhOKMfqImP5EtRBli%2FjUrR2tcN5Z491glXA3MKWhiEdndiHe0UOWY74NxCliDfM9tjcrZcX10mf%2FrTde9qWdQSVhfCUYtQHYLE63Ste3gVCLslWT3rD8gP0nkNO2hBwaXBFBHhESbcllTbCEYo%2FhItSHk0KKbuKOD3F%2Bcj5lHXcuF8KE%2FzMfoeZsMGro2&X-Amz-Signature=3016becdffe37f09547df57a32e50e768ddc6256eb153eb97e17491d83d9f4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBFNABSW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T021317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmo9Jg2T4gBjG%2FJfKyEKncsK%2FHu757A9cYsx7uP3LHZAiEAwWDGWKa6mez6GvioYfpIjc8s26a66IlqWF7zzP6XImoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDALd4qqn8s%2FD0ofHOircA07kx7L6C0vTlRiLeFtHOzQ%2Frf%2FhZiNXIkwM5hAKXgKXh%2BQwnOKlovCcNlFCs7JNjLs7F7lo6nVF%2FDw%2BkXTFXei1YlrrM8Q4DF8uHTX%2Bw4ayATYXRtcRonjAg0hnOuVZC%2BpUOBBihnBif08w9EjRxRrEQ74aJaxqguwng76L2x5kbTSGP%2B4n8Sm4x6FXxzxba2dP9OEn9Ttw1MypmdJoJqGR5qr26pFx7P7%2FiaU9cnNclUl%2BqKMK%2Fn3mSJoF1jtuCqYkO9VwjJM%2BaPLqA%2BIHqKjDShrQbEjartOTZOah96G743omQ9LId8Oz9xdbECF6SNHvkw1ZeLJFRTiVXuSIwDkvQQTjEZi6mjNuz4EQFGg5xu%2BwasHWzu%2FtCAZ0MnxVJnm%2F0wfYoQG7A%2FDNWrbOzFgfK6SoyUcJPhESQXQyx2S3SmgWfmbi1CN0%2B%2BxIg7cTdtrVfubMZjpIgAtBQSq7G43%2Fh5evGYMl8vsBlLMLqfIsyE98NKuL9SwPS6tWyD47IUNx1VnriDy34cjnIjy3xTlyKtJ2gG1GnLKT1y9lOn4HVQWjCvPoiyCYyXn13vNuAnA%2FBnrHpaS1qWQLpPCbNJj9qu%2FAtpJREnKG8l1%2FoiEm%2F8MKyVN1tQ4Qczt0MLD%2B0skGOqUB2vDbebyO%2FK9nhoyojXEHeLWZZzI1Gc%2BlhOKMfqImP5EtRBli%2FjUrR2tcN5Z491glXA3MKWhiEdndiHe0UOWY74NxCliDfM9tjcrZcX10mf%2FrTde9qWdQSVhfCUYtQHYLE63Ste3gVCLslWT3rD8gP0nkNO2hBwaXBFBHhESbcllTbCEYo%2FhItSHk0KKbuKOD3F%2Bcj5lHXcuF8KE%2FzMfoeZsMGro2&X-Amz-Signature=f519add06bf35d8950c3333b1bf2efc11b90bad4a92270a56ad2ec41c08a46b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

