---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4ITD43%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYI7AozXiP0sn6U9A92%2BmRyX8sO2MJJAtbwtcGUfregAiEA8E84xKxxiNvM5gdal7nKA4y5Gh%2FpOumauGiAHoXyNfgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNYtxcHyE2wFkJJrkircA8QIQTLPaJ2tVhaaHuY7H8KiOACjrdw1MufwqaxyhjRQOEBYYzTkUZESyLhsAPxCkwhAObpRiuBPwrkTZPJdU%2BxJhiyFeazREUNVUa7A8x45QMMuW0Hnhhw80ct%2FJ%2FgVKyOBnFXojIVMCzXNJZD%2BhsJioo5V91La0j5LpNgKbVTYt%2F%2BPivwjeZ3tiQkStRhODkLnGiGU9YhuD0PWSRen9%2FhEL0W744%2BWWFs80mvSW0a7HDOryHK4OS0eLOPgsppD0KmuQbEmfARAzAL7kxavVpkkA%2FnDLGMOkl9npchAzWaN2p4AQZ804OuwuXOtUDLk1gzmoz85yrCeDPBigx711KUk6GvLW6%2F2XqRApc4RK6nnVn61Nt2eAzjWJQNmiVzCz857Jo830IwRGAXGZkSlNhPopaDT3kpokVWIZA1z6po65dXaT9VpYmH0YzSTNf9vshSBhCBsDiVZy8lCKtWmyPyx5FIlXSi3ZQYeGkQBjPE1aTngj1ZzTeIf5fjOezw0tyW%2FcDmu41snwkhE31YTMPbjQE4mEs3QnrDij1TssTay6LJcef4OL0Woc96zegIGI%2BTTUD8NHamW2ZHSsTJ7jM4gP4diH9jcuob0BQu7zRBFSVdRYgzWUhtbSx9DMLGm0MkGOqUBPtf5mZ0479eOYX%2BP7Gfnm3uNVdyBsCHUXjG8JZo%2FKfqDMbgyfOjF2po54FbHy0ANIswebWU%2FIFHizl2NNSpJCBuxStz9Gv2nqOBqMCEDagqxN%2FhXtC%2BYlUMyDUKObwMsAgOmI9bHvBb3aiAw%2Fk3JbBnVb%2FPy%2Fspel1hVz%2F4HNMVTLCYEyASaC7EgjiYzk%2BCXwmbcRUNNiJGrY3rZ0ByIuSdMSb4H&X-Amz-Signature=60834edcd65eb0ac282afe0ebe7efcf1dccef68b2252a8ad4c50f78d89ec5024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RM4ITD43%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYI7AozXiP0sn6U9A92%2BmRyX8sO2MJJAtbwtcGUfregAiEA8E84xKxxiNvM5gdal7nKA4y5Gh%2FpOumauGiAHoXyNfgq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNYtxcHyE2wFkJJrkircA8QIQTLPaJ2tVhaaHuY7H8KiOACjrdw1MufwqaxyhjRQOEBYYzTkUZESyLhsAPxCkwhAObpRiuBPwrkTZPJdU%2BxJhiyFeazREUNVUa7A8x45QMMuW0Hnhhw80ct%2FJ%2FgVKyOBnFXojIVMCzXNJZD%2BhsJioo5V91La0j5LpNgKbVTYt%2F%2BPivwjeZ3tiQkStRhODkLnGiGU9YhuD0PWSRen9%2FhEL0W744%2BWWFs80mvSW0a7HDOryHK4OS0eLOPgsppD0KmuQbEmfARAzAL7kxavVpkkA%2FnDLGMOkl9npchAzWaN2p4AQZ804OuwuXOtUDLk1gzmoz85yrCeDPBigx711KUk6GvLW6%2F2XqRApc4RK6nnVn61Nt2eAzjWJQNmiVzCz857Jo830IwRGAXGZkSlNhPopaDT3kpokVWIZA1z6po65dXaT9VpYmH0YzSTNf9vshSBhCBsDiVZy8lCKtWmyPyx5FIlXSi3ZQYeGkQBjPE1aTngj1ZzTeIf5fjOezw0tyW%2FcDmu41snwkhE31YTMPbjQE4mEs3QnrDij1TssTay6LJcef4OL0Woc96zegIGI%2BTTUD8NHamW2ZHSsTJ7jM4gP4diH9jcuob0BQu7zRBFSVdRYgzWUhtbSx9DMLGm0MkGOqUBPtf5mZ0479eOYX%2BP7Gfnm3uNVdyBsCHUXjG8JZo%2FKfqDMbgyfOjF2po54FbHy0ANIswebWU%2FIFHizl2NNSpJCBuxStz9Gv2nqOBqMCEDagqxN%2FhXtC%2BYlUMyDUKObwMsAgOmI9bHvBb3aiAw%2Fk3JbBnVb%2FPy%2Fspel1hVz%2F4HNMVTLCYEyASaC7EgjiYzk%2BCXwmbcRUNNiJGrY3rZ0ByIuSdMSb4H&X-Amz-Signature=de84a2ccbf9fcf959666c8ce1da778bc8c81b8bd9a2b0950940f2df862d366c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

