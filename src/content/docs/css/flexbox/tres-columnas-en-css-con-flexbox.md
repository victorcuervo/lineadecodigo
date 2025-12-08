---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBT6YLZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdfPJ7ZxBeEi2E%2B3MpxezYABJKyyjek2TQ0cix3aw82AIhAMWtmneESIUKpwbbVPholmlE06GSZnzqdzsBpX%2BvuqgwKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFNMabkJ9DKhTlz1Mq3AMdjbvJI7IxNnhiEQJHw2tAP2wIdTD20Bi%2FhT9zRWD12qIMRj3Cl9dtfayNi%2F5u%2FII%2BGA2oyOrs6ObdJkC8D%2B35Ywu0cmOmsXO3%2FHj7WMnKNJEEnJnsr37Jmqdp3f%2FP4DG%2BUGE0P%2BqF1Q%2BWLk7GLoyARZ728mTM%2FtfrL%2BTuko5XxllP1RFUUIB2X3xDmKiv99ikfZawWL5edRFF0ZHoWpjiP49w2aGdJKJaAewue%2F2v%2Bo1LnGKQpeZwrPx7Vxizl6Fh5%2FeBK%2FNyrYrNH1QVgxV3YSSi2PoSfbUiJ4WSyOLKWF9aWK57%2BhCDUTqK9x0RLBm5KN3c%2BPvCtOdCjHYmtnlKUSK8gF3rq7WHKiqGFFO5NuDVw4Mne9gXzB2qnE0PeKE%2BasX4lHiUHLUgfYFd0lb1Ju4XbzOZIVQb5x6mZWqeouYa%2FOkceFYEomG147sznAloWDWsckdaCznrPtLQE2fMhKxlPRFyp27kjiniEu%2Fxyaj9r0tbJF0%2B6Zp0fRsHWMIEx2Jcll7iA1w%2FD2BhjwAoV9ewKI%2Bk4Ax6hnkJxuWNE5Wh96utV4POdp%2Fkcn6lNWlCNkuSC2jeISE8NxNXEs1hQFN7%2FoganNjhyJX6Lk4IJm3NQyU7QvfAG5yGfjDm0djJBjqkAUbhJYUTGTFQ%2FKIYVFLas3XirBlG16jLXDeuKGvXAe9Ps3xPwDnYh8%2BquSL0WJWMHdmAd22Dx3DT7xdMNG4csS6jStsbnIdiiamIV%2FntnEfgXhcYxpMtTCowJ2YmNmFjTwIkTyBA9oXZYO1DwPii6aiXAebj7jI%2FH8L8VtleGiRhPuJQEZ8R05cA%2FVF9BDEzPXdSTNxOkzGRlRa6s6OH71%2F7xZep&X-Amz-Signature=2d33a1b7da70b9f264d4d3d0a309ffe516a137410d716ba1906155200df2dcf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WBT6YLZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdfPJ7ZxBeEi2E%2B3MpxezYABJKyyjek2TQ0cix3aw82AIhAMWtmneESIUKpwbbVPholmlE06GSZnzqdzsBpX%2BvuqgwKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFNMabkJ9DKhTlz1Mq3AMdjbvJI7IxNnhiEQJHw2tAP2wIdTD20Bi%2FhT9zRWD12qIMRj3Cl9dtfayNi%2F5u%2FII%2BGA2oyOrs6ObdJkC8D%2B35Ywu0cmOmsXO3%2FHj7WMnKNJEEnJnsr37Jmqdp3f%2FP4DG%2BUGE0P%2BqF1Q%2BWLk7GLoyARZ728mTM%2FtfrL%2BTuko5XxllP1RFUUIB2X3xDmKiv99ikfZawWL5edRFF0ZHoWpjiP49w2aGdJKJaAewue%2F2v%2Bo1LnGKQpeZwrPx7Vxizl6Fh5%2FeBK%2FNyrYrNH1QVgxV3YSSi2PoSfbUiJ4WSyOLKWF9aWK57%2BhCDUTqK9x0RLBm5KN3c%2BPvCtOdCjHYmtnlKUSK8gF3rq7WHKiqGFFO5NuDVw4Mne9gXzB2qnE0PeKE%2BasX4lHiUHLUgfYFd0lb1Ju4XbzOZIVQb5x6mZWqeouYa%2FOkceFYEomG147sznAloWDWsckdaCznrPtLQE2fMhKxlPRFyp27kjiniEu%2Fxyaj9r0tbJF0%2B6Zp0fRsHWMIEx2Jcll7iA1w%2FD2BhjwAoV9ewKI%2Bk4Ax6hnkJxuWNE5Wh96utV4POdp%2Fkcn6lNWlCNkuSC2jeISE8NxNXEs1hQFN7%2FoganNjhyJX6Lk4IJm3NQyU7QvfAG5yGfjDm0djJBjqkAUbhJYUTGTFQ%2FKIYVFLas3XirBlG16jLXDeuKGvXAe9Ps3xPwDnYh8%2BquSL0WJWMHdmAd22Dx3DT7xdMNG4csS6jStsbnIdiiamIV%2FntnEfgXhcYxpMtTCowJ2YmNmFjTwIkTyBA9oXZYO1DwPii6aiXAebj7jI%2FH8L8VtleGiRhPuJQEZ8R05cA%2FVF9BDEzPXdSTNxOkzGRlRa6s6OH71%2F7xZep&X-Amz-Signature=989b08988abfc9a2f97333891109c245c9d64003918477d390c4710089fcff5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

