---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNCVEPD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD45Try4i%2FyEn4hesfT38i%2F2aghx5l0XfhCPZRB%2FixikAIgMisEaSxhFMdnHJib%2B6yqVms65Btbbhpo%2BBh%2B0e%2FZk2Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCea5uEhiqs5ph%2B3ryrcA8CqWFK3LgRShltDN%2BbARkYqaPdJmkaNv6%2Fynt2n8U602mkVy7J2sVXEcaLnIyNi2ngukB7%2FPZgia0x9S%2BQ%2FCb%2F5%2F7pqXzS63Hugr5aZ8xBNFpNcu2HEPMZnU4Pou5zD1vxFdzdg09XN0sIfmyOnO3E72n4q2O9BKMClAJZFG1ZcARVXsJLofhbD0IXvzGdydw9ftTNuczucMPolAPCkSKvETSEW96CXOUmaF7lZvUPqM9ZnMNKcarvJRFkr59iVAG50ZrRTDgAe8PDKkGTZx%2FDpX5%2Bftiu34hT%2F84neiOSrsB7LqBdAprPRj39UQ6br4qWGoJBAPRn1hViMdda0pVKSTGvzh61%2FRGX71IZtbvrOURVLpwUy26pF0yPtSWLTuqNo%2BEMHme4OuOIjK8g2aM9PKYlxp3FAUEP6SCZXNKT3hFgYxmn%2FcluAvvG8mahqDi1g1dS46qR9XYFVNIK4FlbwO6Xul6k0yOKjaXWvPb8XHRLDiI0Rtv3j%2Bt%2FEJAAhLSGHSNxydxoQmwQ%2Fjth7M83wvlaDGkfeYuOJobo8sSd0nstywVDZzaWizD8pGuGI0nGYKEG3xE9rdg1PuRBEGi9kx4KqfOWEJewxYbAX0bw1ChltaX%2BcbFfz7jexMJrdwskGOqUBWTeuxiGVLekor2RfDb28bac%2FP%2BFx3Ky2KviZ%2BskPhATOMyzgosUyYeQm%2F5e0qif6gHtYWKiIK6seFvM1EfouDcO54jjGyv3H6vDhMkOMU50DpVhzuUia9xSoKnn2QrcpiGY57hwfkm0fCOHcEGXIeicb1w3re1gh2p24CaYstxvbbPmc%2F%2Bi30PPS5TqguS803CQqEGPU7vT3pd0McgOaNPIiR7w%2F&X-Amz-Signature=72af07e98adce2ecd7dd83a480baf468ba6174926aec239c2153c9f64d27252b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBNCVEPD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD45Try4i%2FyEn4hesfT38i%2F2aghx5l0XfhCPZRB%2FixikAIgMisEaSxhFMdnHJib%2B6yqVms65Btbbhpo%2BBh%2B0e%2FZk2Qq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDCea5uEhiqs5ph%2B3ryrcA8CqWFK3LgRShltDN%2BbARkYqaPdJmkaNv6%2Fynt2n8U602mkVy7J2sVXEcaLnIyNi2ngukB7%2FPZgia0x9S%2BQ%2FCb%2F5%2F7pqXzS63Hugr5aZ8xBNFpNcu2HEPMZnU4Pou5zD1vxFdzdg09XN0sIfmyOnO3E72n4q2O9BKMClAJZFG1ZcARVXsJLofhbD0IXvzGdydw9ftTNuczucMPolAPCkSKvETSEW96CXOUmaF7lZvUPqM9ZnMNKcarvJRFkr59iVAG50ZrRTDgAe8PDKkGTZx%2FDpX5%2Bftiu34hT%2F84neiOSrsB7LqBdAprPRj39UQ6br4qWGoJBAPRn1hViMdda0pVKSTGvzh61%2FRGX71IZtbvrOURVLpwUy26pF0yPtSWLTuqNo%2BEMHme4OuOIjK8g2aM9PKYlxp3FAUEP6SCZXNKT3hFgYxmn%2FcluAvvG8mahqDi1g1dS46qR9XYFVNIK4FlbwO6Xul6k0yOKjaXWvPb8XHRLDiI0Rtv3j%2Bt%2FEJAAhLSGHSNxydxoQmwQ%2Fjth7M83wvlaDGkfeYuOJobo8sSd0nstywVDZzaWizD8pGuGI0nGYKEG3xE9rdg1PuRBEGi9kx4KqfOWEJewxYbAX0bw1ChltaX%2BcbFfz7jexMJrdwskGOqUBWTeuxiGVLekor2RfDb28bac%2FP%2BFx3Ky2KviZ%2BskPhATOMyzgosUyYeQm%2F5e0qif6gHtYWKiIK6seFvM1EfouDcO54jjGyv3H6vDhMkOMU50DpVhzuUia9xSoKnn2QrcpiGY57hwfkm0fCOHcEGXIeicb1w3re1gh2p24CaYstxvbbPmc%2F%2Bi30PPS5TqguS803CQqEGPU7vT3pd0McgOaNPIiR7w%2F&X-Amz-Signature=3fff29e43f306180dc2736332ebe2479c1cb3caf65377c7bb7bcceae14fd0329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

