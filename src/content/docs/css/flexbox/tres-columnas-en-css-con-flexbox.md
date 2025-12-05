---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYL2WQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OZmhw46JkLDxfwguqK0Z6GI05xIIeIgPkKqkpIeOMQIhAPAbLESfOtLZm9zwfC3Ei7wBSBGHiReht%2BaO5ooadheeKv8DCE8QABoMNjM3NDIzMTgzODA1IgyLfgVaZNk5%2F5HdBlAq3AP98gIiP%2BFAwXtAadsE5ENv4wTZFam%2F30N%2FNlgrTzyuRR%2FwX9sbGPpWtKYBdNgSc1pWqIsbZEg4uo0H2bdJrsxTTrdssXphPlWjvmoZwJOmAcTJIa8aXcylFxnbXVhWMQTkT2KKDbyUedGYmC%2FKJIwmy66%2F4PCbXHL6w%2FTGtJMpmV4R9pga1JYwFiBYCkQQC3ocIpdTBd6H7qGzMycU1Al9cS4HFS37xr0PXHn3Kcxugy%2B8rw6HWiQbNGhwPCgOIkaYWbZ4thKDciG%2BkJrbgcQq4NYIsr22C79HdjFHozhnTvZkryhaITsJMXIe33aKMA8nUxg3hycJpmyJQVMPn3awAmNW9pgySNIRxwooW8ykhh9Stkt3%2Fv4eOhrLEp%2FVhhqKK7QEjU70gYpeCIRVpiETisMVPq8q2aR9vRMuoQgHkamAvhotwzA9B8g0Zr%2FkSNOukJ9627RkQ29MPdI5FVW2A7Ir8Qb9nUkrOOvBSoRSitE5XJk6ZGiREJe58A%2BeZQwMeDdt4z3%2Bdm9hRBxIgG0bb5e0ogNMND3XN7aBvroiXVhQZlxvMK7nSE5OljZo3gCY81PKJFGrj89sy7QERoYodje6%2BrrxkQEouyxbo%2FNZ0d1kC8brP%2BR4HKm4UDDzi8jJBjqkATlmN6h0g8IA7%2FfcV2DBt8LrMjAJTAgmur1ccbhicLmqdUt%2F%2B9VMR1YlShe6ZvICrc1aRp9ShiYIBHDSMNEAXJDpnSINaOSE4hEtLTYKf78JnticsYbjR6kmmwjBwqPbEsehdABDmZSNd39EYXDoAJNlvQsYzULbIsy7d08%2BsCeevT9w3CphLbw9zUEsmNZYfY8tkx4TvNqnmvG%2Bo64CThnsGohs&X-Amz-Signature=d70a6bfe31628e770b41e7c7320fe511377f231d3c1ecbe5f4aef1351f6142dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TYL2WQA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5OZmhw46JkLDxfwguqK0Z6GI05xIIeIgPkKqkpIeOMQIhAPAbLESfOtLZm9zwfC3Ei7wBSBGHiReht%2BaO5ooadheeKv8DCE8QABoMNjM3NDIzMTgzODA1IgyLfgVaZNk5%2F5HdBlAq3AP98gIiP%2BFAwXtAadsE5ENv4wTZFam%2F30N%2FNlgrTzyuRR%2FwX9sbGPpWtKYBdNgSc1pWqIsbZEg4uo0H2bdJrsxTTrdssXphPlWjvmoZwJOmAcTJIa8aXcylFxnbXVhWMQTkT2KKDbyUedGYmC%2FKJIwmy66%2F4PCbXHL6w%2FTGtJMpmV4R9pga1JYwFiBYCkQQC3ocIpdTBd6H7qGzMycU1Al9cS4HFS37xr0PXHn3Kcxugy%2B8rw6HWiQbNGhwPCgOIkaYWbZ4thKDciG%2BkJrbgcQq4NYIsr22C79HdjFHozhnTvZkryhaITsJMXIe33aKMA8nUxg3hycJpmyJQVMPn3awAmNW9pgySNIRxwooW8ykhh9Stkt3%2Fv4eOhrLEp%2FVhhqKK7QEjU70gYpeCIRVpiETisMVPq8q2aR9vRMuoQgHkamAvhotwzA9B8g0Zr%2FkSNOukJ9627RkQ29MPdI5FVW2A7Ir8Qb9nUkrOOvBSoRSitE5XJk6ZGiREJe58A%2BeZQwMeDdt4z3%2Bdm9hRBxIgG0bb5e0ogNMND3XN7aBvroiXVhQZlxvMK7nSE5OljZo3gCY81PKJFGrj89sy7QERoYodje6%2BrrxkQEouyxbo%2FNZ0d1kC8brP%2BR4HKm4UDDzi8jJBjqkATlmN6h0g8IA7%2FfcV2DBt8LrMjAJTAgmur1ccbhicLmqdUt%2F%2B9VMR1YlShe6ZvICrc1aRp9ShiYIBHDSMNEAXJDpnSINaOSE4hEtLTYKf78JnticsYbjR6kmmwjBwqPbEsehdABDmZSNd39EYXDoAJNlvQsYzULbIsy7d08%2BsCeevT9w3CphLbw9zUEsmNZYfY8tkx4TvNqnmvG%2Bo64CThnsGohs&X-Amz-Signature=4f85bb83e98edf9137afaf9091479eafb534b6f5fea4063971df5b6068658976&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

