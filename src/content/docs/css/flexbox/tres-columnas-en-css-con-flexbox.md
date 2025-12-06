---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OON5KL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiNlwd%2FLZAEjQVUU9o7vr%2BpQBzZ0GmKHtk0JbKo8r%2B2AIhAJUq%2BNy6ZKuiBFqXQTKr6l6SV1QrTUhwzX22WminqYlCKv8DCHEQABoMNjM3NDIzMTgzODA1IgwWIHr5kTHut%2ByceDMq3ANR0Q2u1n%2B74dx7CT5xNfS0whRMu%2BtzqOoKJDr%2FHVem%2FGQMWhctJfDLcQtgsquBIt0I5cJJuLP%2F84T0q8gFuSW94ggVxRCstwRQs61sHmFWnT9jn%2FNnQtmfEmohVQz2EsjEHdslIPoVxEIZNgISU3XZ%2Bf3VdghVOsaQvJ6kY8k%2B0piEp3404Ji1nnyCZhFBJ9%2BbfVTIqQ2WDAIGb%2FWHQ82aOi6Hkw%2FEqHyn7XubZWTLm5e2dbP9mOP8PiAFPkPEqCskyRvE3RFXghty%2F9C885Sk0o4nF2BiSbwSVK0olw3QOOzZmvdMMfUfXYFJIuY1YTlh6aVAI%2BF7P3H1zfy14MCcKWMGXxndKqd3Vdtl4xhia4DPliL0OD05qCZcCeBxo6g5feYlRwxZs9U6sb9VxTK9ChEZMVp%2FHdakQvdBorJ4UKEjbyLNGgjA870thtX3jGcOlREmeViQUc77o6n9bY0qvRQuEGQxl25z%2FiSygtEvJd4QWex9UJPyTFDL8o%2FXsPw8TVUhVqsc9vpO3bHmAamjUvr1ygAT%2B%2Fb7xdjwBCgCaIlmWejaExi9tg0lfmqSabM5gb9o83A%2BKYZM030Nh%2BPllgt6ITBlUA6dB%2FrAGjz%2FPnkMzzyeui84tyYVwzCTvM%2FJBjqkAR0ConmDHfLB5T6ZivC5jelE%2BGKmrjzEpejl0TAT7z5CrRBGJDBsJ%2FCwy%2FKTrboFnuldloQt%2BZ1Fir3FR8VpWRxnRbxU%2FyrTHrcxzH6N0amNUGm7VhID%2BGoENjNCqP0t%2FxrhOF3tfgVd6DYFHoyoVZkC5vZ1Tiey5Y9xKEnF6c%2FKTY6MTdpF4BoXNQgwDdlmZPjn4LQ7HhBtBP9Ik4x%2F3RJj6mlC&X-Amz-Signature=abe1ff18389bfa9f7dcb1036f5f92df2e94bc5fcc9688295d5a73b315ee3209b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6OON5KL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiNlwd%2FLZAEjQVUU9o7vr%2BpQBzZ0GmKHtk0JbKo8r%2B2AIhAJUq%2BNy6ZKuiBFqXQTKr6l6SV1QrTUhwzX22WminqYlCKv8DCHEQABoMNjM3NDIzMTgzODA1IgwWIHr5kTHut%2ByceDMq3ANR0Q2u1n%2B74dx7CT5xNfS0whRMu%2BtzqOoKJDr%2FHVem%2FGQMWhctJfDLcQtgsquBIt0I5cJJuLP%2F84T0q8gFuSW94ggVxRCstwRQs61sHmFWnT9jn%2FNnQtmfEmohVQz2EsjEHdslIPoVxEIZNgISU3XZ%2Bf3VdghVOsaQvJ6kY8k%2B0piEp3404Ji1nnyCZhFBJ9%2BbfVTIqQ2WDAIGb%2FWHQ82aOi6Hkw%2FEqHyn7XubZWTLm5e2dbP9mOP8PiAFPkPEqCskyRvE3RFXghty%2F9C885Sk0o4nF2BiSbwSVK0olw3QOOzZmvdMMfUfXYFJIuY1YTlh6aVAI%2BF7P3H1zfy14MCcKWMGXxndKqd3Vdtl4xhia4DPliL0OD05qCZcCeBxo6g5feYlRwxZs9U6sb9VxTK9ChEZMVp%2FHdakQvdBorJ4UKEjbyLNGgjA870thtX3jGcOlREmeViQUc77o6n9bY0qvRQuEGQxl25z%2FiSygtEvJd4QWex9UJPyTFDL8o%2FXsPw8TVUhVqsc9vpO3bHmAamjUvr1ygAT%2B%2Fb7xdjwBCgCaIlmWejaExi9tg0lfmqSabM5gb9o83A%2BKYZM030Nh%2BPllgt6ITBlUA6dB%2FrAGjz%2FPnkMzzyeui84tyYVwzCTvM%2FJBjqkAR0ConmDHfLB5T6ZivC5jelE%2BGKmrjzEpejl0TAT7z5CrRBGJDBsJ%2FCwy%2FKTrboFnuldloQt%2BZ1Fir3FR8VpWRxnRbxU%2FyrTHrcxzH6N0amNUGm7VhID%2BGoENjNCqP0t%2FxrhOF3tfgVd6DYFHoyoVZkC5vZ1Tiey5Y9xKEnF6c%2FKTY6MTdpF4BoXNQgwDdlmZPjn4LQ7HhBtBP9Ik4x%2F3RJj6mlC&X-Amz-Signature=ffbfc4fdeb9a9dd55eaa1de3d0fad0057b1a0577b673982e3e848726b3a11053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

