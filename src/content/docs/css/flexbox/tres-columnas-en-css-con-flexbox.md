---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAGNMDC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK%2FfzsXKEBLykPFR5af2B7cnbcrSvneChWjkfJZy%2BPbAIhAPXZ00lqVlLiae21czaYfvjeAS19%2F9jR6exD1GyB3EHUKv8DCFsQABoMNjM3NDIzMTgzODA1IgwqACHu2Bj420BEOzUq3AOMsRY1EtmxV8LQPB9dA%2B8xF%2By6UKQs5i%2BCCPs1TvKtBOTr2flrfT%2BF%2B2%2F8DuG6fQRQ1d4LGwfcfYSoFi2KSLQOWFK8nE7emKFhy8MrN6Y%2Fl8zfv3uc5ioyhucQel4mmK1mizdqq%2BiVoSwo067N0k2fvdXgz70A3BPNzFCKkK9pXMyOT%2FXZ3f0lBE7VMIWmvILaFhDZdQwCZwNF31fJkzY4fBdRExdX0UBs76d5QpZqQQFuGogxa8V7Sz7yZGVFwbgkaSImj0ewMZdrKYDi6iyfrkRv%2FEFSR6XZ3DJa%2F941vLqej6mTRexwBEyT8XYz1h2m%2Bq7E0qKU7GQLjASftC5RJXZf7rU84rPMOMQgKcEWAUpH6Og1eVGxFzlfLCpB1yCV9BkSzFbv33Q%2B%2FhPT2w1zvBOoRDoBYwBIpyZTgqBEReTiSMTCp6IZKydn4wjvIsi54F4sZ7RetmIMKLHEf1ME8%2FODO6Ma4WvALy0D27ZXB4nYzip7s2iXwMpTBBsia22ckZ1Pi7yBSPQuGR8dDfwCCFIwFaBeBSWO%2BMgTFSxZXRxSDyjN5dMzVUYYXRHQ4M6gciaE%2BYlgc24XxkWOtClk83ldOGp3mRgquid2qC%2FPWyp410Q7yxAJEuxOmjCo1MrJBjqkAaVRYrN00ytjRPdyJnFXSULRsxw6804EO6cQwWUB5VRyIrkkomi3wdUKbl0jTNSyYW8t7dLMNlsMLP8PJgoP4ENd%2FuBcM8naME2zXGkyZdNq%2FxI5UuXzLd%2F0P%2BotoUfM68c5TeuI%2Fbqo051KumM1%2BerBYcvvCfdm%2FqaL6s77A4BJ4l7u4j%2FP2Hc30lJLcr0%2BlMQJXvzgR%2B3ZcPaeWb2BFLwVw9eo&X-Amz-Signature=fb138c471d6c04551eb9213d7e71aedae7eb4d9700ebf776344dde388e46e61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GAGNMDC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK%2FfzsXKEBLykPFR5af2B7cnbcrSvneChWjkfJZy%2BPbAIhAPXZ00lqVlLiae21czaYfvjeAS19%2F9jR6exD1GyB3EHUKv8DCFsQABoMNjM3NDIzMTgzODA1IgwqACHu2Bj420BEOzUq3AOMsRY1EtmxV8LQPB9dA%2B8xF%2By6UKQs5i%2BCCPs1TvKtBOTr2flrfT%2BF%2B2%2F8DuG6fQRQ1d4LGwfcfYSoFi2KSLQOWFK8nE7emKFhy8MrN6Y%2Fl8zfv3uc5ioyhucQel4mmK1mizdqq%2BiVoSwo067N0k2fvdXgz70A3BPNzFCKkK9pXMyOT%2FXZ3f0lBE7VMIWmvILaFhDZdQwCZwNF31fJkzY4fBdRExdX0UBs76d5QpZqQQFuGogxa8V7Sz7yZGVFwbgkaSImj0ewMZdrKYDi6iyfrkRv%2FEFSR6XZ3DJa%2F941vLqej6mTRexwBEyT8XYz1h2m%2Bq7E0qKU7GQLjASftC5RJXZf7rU84rPMOMQgKcEWAUpH6Og1eVGxFzlfLCpB1yCV9BkSzFbv33Q%2B%2FhPT2w1zvBOoRDoBYwBIpyZTgqBEReTiSMTCp6IZKydn4wjvIsi54F4sZ7RetmIMKLHEf1ME8%2FODO6Ma4WvALy0D27ZXB4nYzip7s2iXwMpTBBsia22ckZ1Pi7yBSPQuGR8dDfwCCFIwFaBeBSWO%2BMgTFSxZXRxSDyjN5dMzVUYYXRHQ4M6gciaE%2BYlgc24XxkWOtClk83ldOGp3mRgquid2qC%2FPWyp410Q7yxAJEuxOmjCo1MrJBjqkAaVRYrN00ytjRPdyJnFXSULRsxw6804EO6cQwWUB5VRyIrkkomi3wdUKbl0jTNSyYW8t7dLMNlsMLP8PJgoP4ENd%2FuBcM8naME2zXGkyZdNq%2FxI5UuXzLd%2F0P%2BotoUfM68c5TeuI%2Fbqo051KumM1%2BerBYcvvCfdm%2FqaL6s77A4BJ4l7u4j%2FP2Hc30lJLcr0%2BlMQJXvzgR%2B3ZcPaeWb2BFLwVw9eo&X-Amz-Signature=6f8ae87332ca3335161ae907d6e2842341b0320c3ccb75a0805d04fd08304f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

