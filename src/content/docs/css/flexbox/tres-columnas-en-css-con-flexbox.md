---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJDLNSQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDihJMzJWX13k0X%2B9aq109F4XASt%2Ff%2FRkdZ3XvoHldTLQIhAMedQHgvRJAcEwEwzIreQ2QxzcGqIoSr4ELvFhTKXiOfKv8DCDgQABoMNjM3NDIzMTgzODA1IgydbflXmzMVFzLTNE0q3ANcAZxYJtzegkq%2BTDmQXKBy5IuJ5Dcu9pj5JfKcR8xux%2FeHneSh3lVjUtuAGLOfeX9piVlmu%2F1XHYqEHkJ1xa7teQHSdyms1w7IrBhE8ApNDbdJ6JvKKXx6yU1w%2BqdSgd4QRdL1E6VEgSQxDTzmSSw58hzLWlXw6MLaVJwpEjumKZq9JXibBdbNsVeV9X%2F7Rmb%2FP0M6XsrsiXU6QH7Q8Ie6tnsvV2gd9BsptTaEcyXegsaK2ng8hCib8Uv3coqfX4NiWLw14TF8uoEDau8leIWU3G5A26KNIXX8cVXbO3ep%2BYVjde5%2B29DLw0Obh0UyV0vKI8g%2BwP0T0lZ%2BzFQ2XDZcAY0unIPLLM5oKbALWuT%2BgUI%2F4YflsMOPHqS0MFpHWaQiol3f8D7wpSb3jOkybmoB8G%2B5aATU3Tu9j6uSpoIc%2BW3udNjDAl8k3YaZIbC0Sn8F9dLwc5chk13GKuIwfcUIimWV2iLdXmOvcDQKsIVLT6C2FuQw9%2Fodv5jCXDbJJ%2Fh9nAWhS064xk3bdALykqozbbuLbp3lkZLDvHGc2mG2iC2LoZ6zUceocnxaE6BIKsoxENIfQT3FW4i%2BdHsvlYn4DPAzg8Z4htq1QGCwAo6nADfDFKc0CALSCXsIBjDs98LJBjqkAQjjzR9vCpDdRhKrYaPAVQgUKMP0CbNwOXm6UO1b%2B2fu7RtVvQq5Wp5gTy8Tm4hfRqtkdFz%2FQtNSFyOpsCWU%2FCTqh67R9RkB%2Fug6AfnPdNwJufEubDQjSCOU0MWcGOhkPhZZoDv%2F5nn9I3rJAAkSkAThSue%2F6JFmz9r3O6WJiYyanhc4kCo7OAIkS4V6WTFmLflgl61hDvwD1J4k2b9Cf%2Ftr6yOm&X-Amz-Signature=d1afa97e543e1ebf87165079f5bf25569614cfc4c8576a7254a70a7d7b9711bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBJDLNSQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDihJMzJWX13k0X%2B9aq109F4XASt%2Ff%2FRkdZ3XvoHldTLQIhAMedQHgvRJAcEwEwzIreQ2QxzcGqIoSr4ELvFhTKXiOfKv8DCDgQABoMNjM3NDIzMTgzODA1IgydbflXmzMVFzLTNE0q3ANcAZxYJtzegkq%2BTDmQXKBy5IuJ5Dcu9pj5JfKcR8xux%2FeHneSh3lVjUtuAGLOfeX9piVlmu%2F1XHYqEHkJ1xa7teQHSdyms1w7IrBhE8ApNDbdJ6JvKKXx6yU1w%2BqdSgd4QRdL1E6VEgSQxDTzmSSw58hzLWlXw6MLaVJwpEjumKZq9JXibBdbNsVeV9X%2F7Rmb%2FP0M6XsrsiXU6QH7Q8Ie6tnsvV2gd9BsptTaEcyXegsaK2ng8hCib8Uv3coqfX4NiWLw14TF8uoEDau8leIWU3G5A26KNIXX8cVXbO3ep%2BYVjde5%2B29DLw0Obh0UyV0vKI8g%2BwP0T0lZ%2BzFQ2XDZcAY0unIPLLM5oKbALWuT%2BgUI%2F4YflsMOPHqS0MFpHWaQiol3f8D7wpSb3jOkybmoB8G%2B5aATU3Tu9j6uSpoIc%2BW3udNjDAl8k3YaZIbC0Sn8F9dLwc5chk13GKuIwfcUIimWV2iLdXmOvcDQKsIVLT6C2FuQw9%2Fodv5jCXDbJJ%2Fh9nAWhS064xk3bdALykqozbbuLbp3lkZLDvHGc2mG2iC2LoZ6zUceocnxaE6BIKsoxENIfQT3FW4i%2BdHsvlYn4DPAzg8Z4htq1QGCwAo6nADfDFKc0CALSCXsIBjDs98LJBjqkAQjjzR9vCpDdRhKrYaPAVQgUKMP0CbNwOXm6UO1b%2B2fu7RtVvQq5Wp5gTy8Tm4hfRqtkdFz%2FQtNSFyOpsCWU%2FCTqh67R9RkB%2Fug6AfnPdNwJufEubDQjSCOU0MWcGOhkPhZZoDv%2F5nn9I3rJAAkSkAThSue%2F6JFmz9r3O6WJiYyanhc4kCo7OAIkS4V6WTFmLflgl61hDvwD1J4k2b9Cf%2Ftr6yOm&X-Amz-Signature=c7c210c6d859c0c3b6fd894e1e687d864b12c670e270cd730ad47fc4ab251c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

