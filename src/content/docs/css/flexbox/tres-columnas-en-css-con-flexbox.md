---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVEND7VF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fn1zfgPmToIiQNwxze6v1qELwtlshMoWcX0Ix5aXfXAiEA16y9kCWMiD9tHQq34Qyq4GvfX8QjL7qm0QBIRc1Xv8kq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLIRpUDU597KiFD%2BMyrcA9pNtbe%2BGJ%2BZRYO%2FwdrDbjpoki%2F5N3j%2FQEIq06hQruUqt4Z%2FR9RDQMrfVxqUgW3siqsar9FS4XwY%2BW%2Fzp020D9hh3QA%2Bqd4ETUbyBPDBKfFHJf46b5s4LGz5XkOvpXhjSw9lrPh6dNKBYwCwKFCP9P%2BJKmt3TR57vPcFzeUjIv20CJlqCFiFEcnkx%2BWfvEG5qYeEtJXASpvfaMLzcMzSCBmGhZT6m5aJV1PqDWXBXiSEjcvJl7IC%2FAD%2FiB88U6yGutELHEyJy68McxyVGbTilM%2B6vZESWRMmq4yfyV4Yz3kmisQVONdvFrtWCECxQQFzN7%2B%2FncoLj9EyFOArYfFeLZBX6JUqkdIL1CZ0fXtdKnS89RzlgqOVZyEExrNmhAmEXY2tRR%2FUE6nQWHilPGc4GCXSRnR7IKpgibNNPYoBD3Z3GFFCl9P4BhukETMwSIdlQIsZrEndZpS8n%2BstFus7wt%2F8rSJfhGMTQzfUouw8HyT0xY1Z39a1NvWoBvq3oeoiYvmmXV9F%2BAh4w72kCThHEt6fKBA8MVrZOmUB9a3PhFQ6QEfctFUIiSXsTGG3laX2NW2Mnzqf4Y8ciT6c9uABx2QvkkaUTlxSxQQRT3ewsuRxVZDmdUxV5bwuOSv7MKzezskGOqUBGmsO2GYdxNTeCw6oXtbPDPFQpQia5nJK1eliYuqZG%2FAl0SLWgXXdgwdTjQEU4o91LAvvWm%2B8hSvVrZbD59hXkqSQw3fJ1k%2B4ICOwgIqn3LucFWZWhlaK74M1Ma8CxCNMFpzgnDBIMH22%2FAuLktrUt87qyu88%2BPnuZ0uUz1wFNYjmq0SDgjHO62Z01Jex8KDqTudezLXULUbAwwV2%2BKIwJ9YEvo5i&X-Amz-Signature=c6b767c4366bc47a9e62d5968c22545e548dbb5e05fe2dedfebff0ae03332690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVEND7VF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2Fn1zfgPmToIiQNwxze6v1qELwtlshMoWcX0Ix5aXfXAiEA16y9kCWMiD9tHQq34Qyq4GvfX8QjL7qm0QBIRc1Xv8kq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLIRpUDU597KiFD%2BMyrcA9pNtbe%2BGJ%2BZRYO%2FwdrDbjpoki%2F5N3j%2FQEIq06hQruUqt4Z%2FR9RDQMrfVxqUgW3siqsar9FS4XwY%2BW%2Fzp020D9hh3QA%2Bqd4ETUbyBPDBKfFHJf46b5s4LGz5XkOvpXhjSw9lrPh6dNKBYwCwKFCP9P%2BJKmt3TR57vPcFzeUjIv20CJlqCFiFEcnkx%2BWfvEG5qYeEtJXASpvfaMLzcMzSCBmGhZT6m5aJV1PqDWXBXiSEjcvJl7IC%2FAD%2FiB88U6yGutELHEyJy68McxyVGbTilM%2B6vZESWRMmq4yfyV4Yz3kmisQVONdvFrtWCECxQQFzN7%2B%2FncoLj9EyFOArYfFeLZBX6JUqkdIL1CZ0fXtdKnS89RzlgqOVZyEExrNmhAmEXY2tRR%2FUE6nQWHilPGc4GCXSRnR7IKpgibNNPYoBD3Z3GFFCl9P4BhukETMwSIdlQIsZrEndZpS8n%2BstFus7wt%2F8rSJfhGMTQzfUouw8HyT0xY1Z39a1NvWoBvq3oeoiYvmmXV9F%2BAh4w72kCThHEt6fKBA8MVrZOmUB9a3PhFQ6QEfctFUIiSXsTGG3laX2NW2Mnzqf4Y8ciT6c9uABx2QvkkaUTlxSxQQRT3ewsuRxVZDmdUxV5bwuOSv7MKzezskGOqUBGmsO2GYdxNTeCw6oXtbPDPFQpQia5nJK1eliYuqZG%2FAl0SLWgXXdgwdTjQEU4o91LAvvWm%2B8hSvVrZbD59hXkqSQw3fJ1k%2B4ICOwgIqn3LucFWZWhlaK74M1Ma8CxCNMFpzgnDBIMH22%2FAuLktrUt87qyu88%2BPnuZ0uUz1wFNYjmq0SDgjHO62Z01Jex8KDqTudezLXULUbAwwV2%2BKIwJ9YEvo5i&X-Amz-Signature=9ecf40d214d7d248a6c0872595beecdb27b9129b2b67512dc6100565b668173c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

