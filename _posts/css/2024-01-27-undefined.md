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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJJS4DR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFYDvKWsN0b3Vdwdjbjwka2ywx1Gk42o8wkMl38LqnjSAiEAn9yCECjkEiW6v7e1E5JgxXtmJRxqH2u6ndHwh2EI4Zsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJnAvbsEYopoC4a5mircAwwayJ1cbsVSGIRD2DkiZI1MCwoH7KTQOog6fGXaIuVRX%2FjN30zJ%2BPWaRZuuqnQZSFFUK93xKYiWoYZlE9dUXgm9kqJDm6J7vXMy%2FL8jkAp4v3JQvsw615eH8jFhifPcNNMxgTZMMA7xgTlmF5xQvybioSbAmlbrDfxVsIQutL6%2B2LrQuHg59rbGZIfpVy7nhrgp9Ko13FMp%2Fnr%2FpSJ8Hr7hmbbZL09dt6h%2BSnL%2FQZxPPm0%2FAm2WfABVAIyDkDR2hCxssMRTqWRoBTAhJAa4buIAlmeA%2B%2FuSWKinWKX49lj9vL1Qptz6NlU8KqpVhISTE2EENpc3C7QEGVd%2BaPZ5PAfMJ84%2BKTiPS33G2GQu41o86L01KPKk5QgpKe3LvJYIoJ5ENVCotMFnFNNXWlHvaI8ESg55r0DKIHy0rk%2F3l%2FqhaXHnQfa5JPlPCu%2FgG4oJG0RRzIGP7F%2Fsh5CHzbJGX%2BFycYe5C8PL5UErRdqkJ5yAWCmQ5tJSFuJkOyXB3Hg6hEOhg99x%2BsKjlnSvC0niZETLO7mVlryH5RAD01pBvqu7yCTZUJC98SB5dT1tFGxTB37gFlB8NrgkioTLLtvLQSA9ql6UM%2BAR5zRGoopLxb9GldYmolF%2FvCZ7AhHyMM%2B4v8kGOqUBpXt3Nl57kKgrJ2s9lGerQSN07sAO8kxgB304D5keOU0rurg3%2FLs6GD6FCvrz3AEufkxiWZ%2FUTRY76Z0ltq3f6REvbhiGDZ5alLPFVqWRnqayPx%2BseVWME95b4Uot5x9CCNyskgdkvm9ykWzNbvadBRk439YeUaOZyI%2F8qzBsMAwpymwVxO3EVRSNQJDGk4s5S0q29ml6myNRzDSyatseZ9tbsIW4&X-Amz-Signature=b2f68aa6aebf29bf6a7ec1939e5e045a5abe6aee6ed1cadd0cdbef31459b753e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAJJS4DR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIFYDvKWsN0b3Vdwdjbjwka2ywx1Gk42o8wkMl38LqnjSAiEAn9yCECjkEiW6v7e1E5JgxXtmJRxqH2u6ndHwh2EI4Zsq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDJnAvbsEYopoC4a5mircAwwayJ1cbsVSGIRD2DkiZI1MCwoH7KTQOog6fGXaIuVRX%2FjN30zJ%2BPWaRZuuqnQZSFFUK93xKYiWoYZlE9dUXgm9kqJDm6J7vXMy%2FL8jkAp4v3JQvsw615eH8jFhifPcNNMxgTZMMA7xgTlmF5xQvybioSbAmlbrDfxVsIQutL6%2B2LrQuHg59rbGZIfpVy7nhrgp9Ko13FMp%2Fnr%2FpSJ8Hr7hmbbZL09dt6h%2BSnL%2FQZxPPm0%2FAm2WfABVAIyDkDR2hCxssMRTqWRoBTAhJAa4buIAlmeA%2B%2FuSWKinWKX49lj9vL1Qptz6NlU8KqpVhISTE2EENpc3C7QEGVd%2BaPZ5PAfMJ84%2BKTiPS33G2GQu41o86L01KPKk5QgpKe3LvJYIoJ5ENVCotMFnFNNXWlHvaI8ESg55r0DKIHy0rk%2F3l%2FqhaXHnQfa5JPlPCu%2FgG4oJG0RRzIGP7F%2Fsh5CHzbJGX%2BFycYe5C8PL5UErRdqkJ5yAWCmQ5tJSFuJkOyXB3Hg6hEOhg99x%2BsKjlnSvC0niZETLO7mVlryH5RAD01pBvqu7yCTZUJC98SB5dT1tFGxTB37gFlB8NrgkioTLLtvLQSA9ql6UM%2BAR5zRGoopLxb9GldYmolF%2FvCZ7AhHyMM%2B4v8kGOqUBpXt3Nl57kKgrJ2s9lGerQSN07sAO8kxgB304D5keOU0rurg3%2FLs6GD6FCvrz3AEufkxiWZ%2FUTRY76Z0ltq3f6REvbhiGDZ5alLPFVqWRnqayPx%2BseVWME95b4Uot5x9CCNyskgdkvm9ykWzNbvadBRk439YeUaOZyI%2F8qzBsMAwpymwVxO3EVRSNQJDGk4s5S0q29ml6myNRzDSyatseZ9tbsIW4&X-Amz-Signature=74dbabb47144a74518e7f3e0bcf162f6b03e26745974ba2ca711e93ab8a77040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

