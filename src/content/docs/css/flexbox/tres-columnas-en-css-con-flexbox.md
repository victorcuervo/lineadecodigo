---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSIA2PM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYkuesc0d5wbGp8DEKLpZxjaKzXkznTRzE61JEk4Oe9wIhAO6VqOXikYE30v2UMyjcfjZsncDVY1dLC64gsEbOj7F7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDjtDm5%2BO%2BKVoD7yMq3APQNLrjTPj7N55Ed9EHWFw76VvRyLfzA8vh%2FPZRJrQFYZvnJWRTHncy37Odq3OJJYnq%2FwsGoH0q2MAzp1GQ8m01UG9Ye4ULBAvNIpvXoh2ozRr2ebKzfuAjNY8O6qsFZgAskcEECs9rKMRBzSE2J%2FuHI4zM0jlnrcbkP4pEXhuXRz2yBUmMZsf6WNaSmyYOfwz3TOeALfyKYzjPOqzk1yKeQljZaR%2FreI%2BtbUuWeviU8sxIAOdjQH3Lf7Y%2BuUX8Tphq49R3MTbrjWOiynHyHc2u04ga1TzQNcAy0BzmkZVURYycU5u%2FFc%2BV37lLyn1qd3h2Pk5KeUj%2FobdGdABN3qIhvSM960AV3Ch%2Bw%2FH2x3rGorNEklcOt6%2BQyJ54QD%2FBWFeUpdzE8aLXqmPryKKhtCs8djuD77rho5%2FDO4RNGZBoIDh8ESXamkMCoibHewBgrKt320wZVl4tQ%2F8sP04wIrIo0Va2o8HH887lKnBeHlFHovjFZwQve5iPw2iE0s7nROeN%2FVJqb5udf7tnaxP4p1guMbm5dFMp5wUX%2F7b3SQYYdwA9JUxLHG13fYuhiTsIeSDxDsXtTDVmYvkxheW1XHe%2BzAJ5DWj3YdRAEP%2BvXHj5Pz2ZEGXFbjnptcEZBzDJpd%2FJBjqkAX1ripv8KIw1vSwCYBwoIp%2FGyYXY9ra4wFMc1ax0Wr0yEWqRlNY4uwcZNy2sZ%2BFvxy0QywBZChEPuoMX%2FQx9qc1YeizgUv9sFcSREugF58tJBY1gHzZkHYF2ZTJBLbMY82Pv9K04z6tpsbgAmj4taWf1wyw0xQHcpnlLp4E8s9iPTTGO4WOj0NuheXtlcv%2BPPj5SAdXPDMM1UF%2Fer%2Ffm6KiPcPXK&X-Amz-Signature=bfe1e9d8cea66507baf3fc1a43653ab43a5e62bef9946d4798626ae2a58a49f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTSIA2PM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYkuesc0d5wbGp8DEKLpZxjaKzXkznTRzE61JEk4Oe9wIhAO6VqOXikYE30v2UMyjcfjZsncDVY1dLC64gsEbOj7F7KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDjtDm5%2BO%2BKVoD7yMq3APQNLrjTPj7N55Ed9EHWFw76VvRyLfzA8vh%2FPZRJrQFYZvnJWRTHncy37Odq3OJJYnq%2FwsGoH0q2MAzp1GQ8m01UG9Ye4ULBAvNIpvXoh2ozRr2ebKzfuAjNY8O6qsFZgAskcEECs9rKMRBzSE2J%2FuHI4zM0jlnrcbkP4pEXhuXRz2yBUmMZsf6WNaSmyYOfwz3TOeALfyKYzjPOqzk1yKeQljZaR%2FreI%2BtbUuWeviU8sxIAOdjQH3Lf7Y%2BuUX8Tphq49R3MTbrjWOiynHyHc2u04ga1TzQNcAy0BzmkZVURYycU5u%2FFc%2BV37lLyn1qd3h2Pk5KeUj%2FobdGdABN3qIhvSM960AV3Ch%2Bw%2FH2x3rGorNEklcOt6%2BQyJ54QD%2FBWFeUpdzE8aLXqmPryKKhtCs8djuD77rho5%2FDO4RNGZBoIDh8ESXamkMCoibHewBgrKt320wZVl4tQ%2F8sP04wIrIo0Va2o8HH887lKnBeHlFHovjFZwQve5iPw2iE0s7nROeN%2FVJqb5udf7tnaxP4p1guMbm5dFMp5wUX%2F7b3SQYYdwA9JUxLHG13fYuhiTsIeSDxDsXtTDVmYvkxheW1XHe%2BzAJ5DWj3YdRAEP%2BvXHj5Pz2ZEGXFbjnptcEZBzDJpd%2FJBjqkAX1ripv8KIw1vSwCYBwoIp%2FGyYXY9ra4wFMc1ax0Wr0yEWqRlNY4uwcZNy2sZ%2BFvxy0QywBZChEPuoMX%2FQx9qc1YeizgUv9sFcSREugF58tJBY1gHzZkHYF2ZTJBLbMY82Pv9K04z6tpsbgAmj4taWf1wyw0xQHcpnlLp4E8s9iPTTGO4WOj0NuheXtlcv%2BPPj5SAdXPDMM1UF%2Fer%2Ffm6KiPcPXK&X-Amz-Signature=dd7c081ce5bda565d12495b64227dc942631a7ab4912e635f6e6b87acee82cd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

