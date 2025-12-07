---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCL76JZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4qXGlpkndl1JM3haI8xn16YGPWZkk2QJ6zPMk%2FRv3twIhAKaMPKzvEHCL4eM6u%2Fw5Tv4RvTeT8LyXFZ1hPi4k%2FI%2FaKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZcEKuTbVwBjdnkMYq3AMtQMsPMdPLK0QuOzdUf1M1OEJFW5moFZLs2PhqEDpkuY0Gj4%2BZnjHhWGQrlo70jmvQXb4wNgMpikSsA%2BaVpH4Zq76BE8ASNB59SoEBP1muofgQrUBIFJlaBcycgbGhNqqfiyeNTQErLmIZzP3ZCXllEeNbfTjGazrwBwvwL6yPzfbY3CpPfycd6zD5qFPsaFZOlXvNKV9Jg1mvnBoFuJeJPtaymvdQi7EqhoVIUEbsFmxpMgSCbD6UgHoo19%2Fts9JVHhA6X1Ssh0%2FLD8CNCtrUPxRGUOY8Np4E%2FQGb4%2FqN6yQioWdQbu6Tp%2FBl5zWvncExAKxZDqZnzCV7ysiwc8HEAuWNh9dXNxZjDD423kejtcLLAhO6j7VbXEKPGTAQ9OWa5ZjqulCF7klV92Ky%2FlfhYl56k4bcG9GxUP%2FF6%2BCH8FzYBvQc3OesNLoEh3nF%2FKb5H4FmZsk%2BdXkiHw9XkHg44D%2FB2NNVYotmEjJaUvztMvM%2Fng6SOCWQSzMhodc1GAciJ9PlolfUijOSp9%2FAmFdhQMuRU3tHNkSAEYut11u7Bmh7W2MRj%2BpobkzQlDvJYZzD0G%2FWGHefqkSwNCA09xdABgd3ggPpUXVR0DCCANCNaAXvn4OTTJ8ygDct8DCEyNfJBjqkAc0Ul2OleI4Z5xfEsxjNVU6r99MiCw3Ish3XVTuXBcv3edsnUTXhQSisOs7Brex1GE80ShL0erN6vd8yp%2B5tVLQ4gENO4Yvl3vROQyutU5FCHNdm0Hj3V9jNsLDNlK8vOtmaT2rNpYYUV5vGBwEPCKa917EjPGYePV7qfOvXyIGOYvsQBHcca8HNWDr9JuP9ARJAM%2FBlr1K6xhWwz2NoDNjbbMPv&X-Amz-Signature=6c73256dced67a8f2ab95081ed5871647dfc0a938ac7117a4a6f900bfb4e164c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCL76JZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T221658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4qXGlpkndl1JM3haI8xn16YGPWZkk2QJ6zPMk%2FRv3twIhAKaMPKzvEHCL4eM6u%2Fw5Tv4RvTeT8LyXFZ1hPi4k%2FI%2FaKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZcEKuTbVwBjdnkMYq3AMtQMsPMdPLK0QuOzdUf1M1OEJFW5moFZLs2PhqEDpkuY0Gj4%2BZnjHhWGQrlo70jmvQXb4wNgMpikSsA%2BaVpH4Zq76BE8ASNB59SoEBP1muofgQrUBIFJlaBcycgbGhNqqfiyeNTQErLmIZzP3ZCXllEeNbfTjGazrwBwvwL6yPzfbY3CpPfycd6zD5qFPsaFZOlXvNKV9Jg1mvnBoFuJeJPtaymvdQi7EqhoVIUEbsFmxpMgSCbD6UgHoo19%2Fts9JVHhA6X1Ssh0%2FLD8CNCtrUPxRGUOY8Np4E%2FQGb4%2FqN6yQioWdQbu6Tp%2FBl5zWvncExAKxZDqZnzCV7ysiwc8HEAuWNh9dXNxZjDD423kejtcLLAhO6j7VbXEKPGTAQ9OWa5ZjqulCF7klV92Ky%2FlfhYl56k4bcG9GxUP%2FF6%2BCH8FzYBvQc3OesNLoEh3nF%2FKb5H4FmZsk%2BdXkiHw9XkHg44D%2FB2NNVYotmEjJaUvztMvM%2Fng6SOCWQSzMhodc1GAciJ9PlolfUijOSp9%2FAmFdhQMuRU3tHNkSAEYut11u7Bmh7W2MRj%2BpobkzQlDvJYZzD0G%2FWGHefqkSwNCA09xdABgd3ggPpUXVR0DCCANCNaAXvn4OTTJ8ygDct8DCEyNfJBjqkAc0Ul2OleI4Z5xfEsxjNVU6r99MiCw3Ish3XVTuXBcv3edsnUTXhQSisOs7Brex1GE80ShL0erN6vd8yp%2B5tVLQ4gENO4Yvl3vROQyutU5FCHNdm0Hj3V9jNsLDNlK8vOtmaT2rNpYYUV5vGBwEPCKa917EjPGYePV7qfOvXyIGOYvsQBHcca8HNWDr9JuP9ARJAM%2FBlr1K6xhWwz2NoDNjbbMPv&X-Amz-Signature=15f1e32024622743f14f8badf344dbe1a566599a117d6648e3383bc1696a5fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

