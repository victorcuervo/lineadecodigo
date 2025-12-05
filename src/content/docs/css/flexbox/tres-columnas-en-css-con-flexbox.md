---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVR5GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3j3y2G1XOa%2F%2F5SMksQU1oKsTxOGZyTCX6PnYaP2uPsCIBxNdF%2Bfq3JKeHewLnSTc66j6X%2B9MhkZf4%2F%2B2fHt0oSeKv8DCGAQABoMNjM3NDIzMTgzODA1IgyNLuMwf0YbJG6BRYsq3AO4ucSHNPRpyCxfIm%2FUyaj1qzoknmt7l%2BkFes3lz3alhrd24Y%2FUxePOHiE%2BjMUddA62uiRSJKPb%2B5pO7%2BQtUPkj0bS%2BUbeMGqQ5rkPNN5Xk%2FHmBXGooeCaPPKVeSzei7i562BjaW6iOxGN3tP%2F7OtJg3y17L1MsCRMSVYrQCBA7GtGUBfyskdeBSlKtgJvMDNkDsj6X5OSVhd9vt3cXoQEREf3XwCepERpzx42%2FsGdPAu9Wf93Vgvi6%2BBIP%2BObHrOUlZy8gHN5vQoirkpaDcr026GR6q%2BHyinrLMGVcfJnBFUEYi3ooVn6mVW0PHTKCBJVmwnFVW3OSeyBtexKD91qYXTi%2B4zmemAHQwz6l7yXcXauJdthElXyCTuBDdKZcrGfZN6BbUdyum1mwaMpnXePyHzLD7Ll83vvC9%2F31F0pm1brqJQr8Ewh7CMXnf0V%2BGKuwu2ZNCZCoGBbTZa3DUvzvmEzbQHso7HkP1p5MA0avf3NbZwYmySGXBkZJgWU0O2V3wBgzLf0lXG43rKU52kxiEQT4sBSNsRWyBeBVhkxtHaiFxFmk6VlpMiUbPY6uiJA1USjpiOJH3Osn9YnMAW9c2JNXIxX93MhcbF7iUz5%2FLxbLLexMIe9omk0Q3zDM7cvJBjqnAQIGqEMoaJxuaq0ir9TSlQukmMwb8UTAnmF84YBpAt0AeaddqJX1D46NyBOLVRjPlZ%2FvNmkpD6KEjz6s16%2F3bQFCCDDEWu%2F0Bhx7hULs8zP2J3qMzZ03uVog1YvsNsunCjA6pGKj1Mf4fib2NXi52gpClht%2FQoUsuQbRq73lStanvflaaAEFCkeu7O5UqofXgkPCeYU0AzsHt6cA0jFLRrGpt4Wo6q3%2B&X-Amz-Signature=5b7f87a4c90db1f2f5d0a7e1bafd653f232d660e265f94b09706cf191dbd8149&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHVR5GHB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T203606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCH3j3y2G1XOa%2F%2F5SMksQU1oKsTxOGZyTCX6PnYaP2uPsCIBxNdF%2Bfq3JKeHewLnSTc66j6X%2B9MhkZf4%2F%2B2fHt0oSeKv8DCGAQABoMNjM3NDIzMTgzODA1IgyNLuMwf0YbJG6BRYsq3AO4ucSHNPRpyCxfIm%2FUyaj1qzoknmt7l%2BkFes3lz3alhrd24Y%2FUxePOHiE%2BjMUddA62uiRSJKPb%2B5pO7%2BQtUPkj0bS%2BUbeMGqQ5rkPNN5Xk%2FHmBXGooeCaPPKVeSzei7i562BjaW6iOxGN3tP%2F7OtJg3y17L1MsCRMSVYrQCBA7GtGUBfyskdeBSlKtgJvMDNkDsj6X5OSVhd9vt3cXoQEREf3XwCepERpzx42%2FsGdPAu9Wf93Vgvi6%2BBIP%2BObHrOUlZy8gHN5vQoirkpaDcr026GR6q%2BHyinrLMGVcfJnBFUEYi3ooVn6mVW0PHTKCBJVmwnFVW3OSeyBtexKD91qYXTi%2B4zmemAHQwz6l7yXcXauJdthElXyCTuBDdKZcrGfZN6BbUdyum1mwaMpnXePyHzLD7Ll83vvC9%2F31F0pm1brqJQr8Ewh7CMXnf0V%2BGKuwu2ZNCZCoGBbTZa3DUvzvmEzbQHso7HkP1p5MA0avf3NbZwYmySGXBkZJgWU0O2V3wBgzLf0lXG43rKU52kxiEQT4sBSNsRWyBeBVhkxtHaiFxFmk6VlpMiUbPY6uiJA1USjpiOJH3Osn9YnMAW9c2JNXIxX93MhcbF7iUz5%2FLxbLLexMIe9omk0Q3zDM7cvJBjqnAQIGqEMoaJxuaq0ir9TSlQukmMwb8UTAnmF84YBpAt0AeaddqJX1D46NyBOLVRjPlZ%2FvNmkpD6KEjz6s16%2F3bQFCCDDEWu%2F0Bhx7hULs8zP2J3qMzZ03uVog1YvsNsunCjA6pGKj1Mf4fib2NXi52gpClht%2FQoUsuQbRq73lStanvflaaAEFCkeu7O5UqofXgkPCeYU0AzsHt6cA0jFLRrGpt4Wo6q3%2B&X-Amz-Signature=0e2c0b16d813a3536cbb7d32110f9204b3dbea8554651e2ba46d20945dd35f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

