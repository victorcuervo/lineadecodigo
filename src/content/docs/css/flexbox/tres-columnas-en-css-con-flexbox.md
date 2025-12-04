---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZVR75H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD34NizZX%2F3oZzcD2vlHU%2FjjqgfmgzeTCTz2L%2FondkAHQIgXvaV7BEqkW4zzL6czD15YbZidm758uoJRG6MebWOqLgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGUoHH1f2pfRbOBkXSrcAwpYcR%2FaUaYfHkJq3HPsi01Z3uQ%2FdTq6iLG7PW%2Fkoe%2FARoa81b7VBleO%2BSo39pHaoadJeJuQFe0wS9kM3xG5exkGoriTBmmpL4%2FWDeFWYflqjQnY4oqjJjkDJkvcA1nFFiUCCEE2XcG6vlGqBeb4ZB6kUGbMyS5hwQw8rrRsEJwiyA4FjB5eQG6wSWluIOxv1nnR7gLsa512zWlM%2BH3SxnyQsklhrWf4%2F%2Bx%2BtBjYeBmeHdx25CzGCJNnzELP4nL3Ra0GHwuSJagWg3%2F9wCP9mmNbEQoVhC7q2EZ6nysGarIJQuDFIHKUSjDWdyzhP7sVFygEjT0JBjeB0eRcfk06m3BdLG39lHVkj7q0evfH84j4HTgm26RVtZz5c7gNcH5EOoS38ny89jqR6Pg8DoB3BS9rrMCYvOPrF2vQ9sNFiTKScvstzCwoSw%2Bza%2F5TFwrKnVtHd8sLVs4RsAXyFLR0gh8BSdOUVa8RZQUlU%2BpwXhc4xXcUtxjcUNBL4t0U4KSHiOVAYmpCKS%2B3gcK%2FzI4iueVbIGfcbZecF5bY%2F8CmYh6vKMhDGDuItBhYk%2F3ZDwgGiWcoIoWC7yLBFtujmYG1A9IlTO%2BvTmraAwRN5yI7ik2VXZw6ETcFczQqE9qrMJOMyMkGOqUBsvgDR2WbqZ3C2f%2BtTkh2GxNQXkZVY6UudAmRYK8eMZyZ6yzo4eZjQyHfrtbUboOSqxd1PazBBsujsZkaCaNBf47FZFoVwnaa%2FRO%2FecemTcuRf1DXrMLJRRj1UY5H40lNWYW6KPm%2BlChPSS126G29KnFrdCEgFyv%2FewKhl7RbesvLyOh48949dwcHJ5sIt7iceJzAhhOyqaRRs0eVfZFTPckG19fM&X-Amz-Signature=fd296c768274f1957fca404c0be6f9dbd0514cbcafd66083da184bf731e06654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVZVR75H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD34NizZX%2F3oZzcD2vlHU%2FjjqgfmgzeTCTz2L%2FondkAHQIgXvaV7BEqkW4zzL6czD15YbZidm758uoJRG6MebWOqLgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGUoHH1f2pfRbOBkXSrcAwpYcR%2FaUaYfHkJq3HPsi01Z3uQ%2FdTq6iLG7PW%2Fkoe%2FARoa81b7VBleO%2BSo39pHaoadJeJuQFe0wS9kM3xG5exkGoriTBmmpL4%2FWDeFWYflqjQnY4oqjJjkDJkvcA1nFFiUCCEE2XcG6vlGqBeb4ZB6kUGbMyS5hwQw8rrRsEJwiyA4FjB5eQG6wSWluIOxv1nnR7gLsa512zWlM%2BH3SxnyQsklhrWf4%2F%2Bx%2BtBjYeBmeHdx25CzGCJNnzELP4nL3Ra0GHwuSJagWg3%2F9wCP9mmNbEQoVhC7q2EZ6nysGarIJQuDFIHKUSjDWdyzhP7sVFygEjT0JBjeB0eRcfk06m3BdLG39lHVkj7q0evfH84j4HTgm26RVtZz5c7gNcH5EOoS38ny89jqR6Pg8DoB3BS9rrMCYvOPrF2vQ9sNFiTKScvstzCwoSw%2Bza%2F5TFwrKnVtHd8sLVs4RsAXyFLR0gh8BSdOUVa8RZQUlU%2BpwXhc4xXcUtxjcUNBL4t0U4KSHiOVAYmpCKS%2B3gcK%2FzI4iueVbIGfcbZecF5bY%2F8CmYh6vKMhDGDuItBhYk%2F3ZDwgGiWcoIoWC7yLBFtujmYG1A9IlTO%2BvTmraAwRN5yI7ik2VXZw6ETcFczQqE9qrMJOMyMkGOqUBsvgDR2WbqZ3C2f%2BtTkh2GxNQXkZVY6UudAmRYK8eMZyZ6yzo4eZjQyHfrtbUboOSqxd1PazBBsujsZkaCaNBf47FZFoVwnaa%2FRO%2FecemTcuRf1DXrMLJRRj1UY5H40lNWYW6KPm%2BlChPSS126G29KnFrdCEgFyv%2FewKhl7RbesvLyOh48949dwcHJ5sIt7iceJzAhhOyqaRRs0eVfZFTPckG19fM&X-Amz-Signature=d873f1a09cf78f9185728936c6ed0fd3d22dbef813f40191d9ce61c5d48251bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

