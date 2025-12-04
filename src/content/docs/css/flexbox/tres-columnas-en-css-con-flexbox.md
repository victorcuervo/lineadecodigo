---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FFCYBUO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID7pTFsyvbv88xBUQk2kp8b8IjPICLuK%2BctGeWS9y5LhAiEAxleAXFpG4zt0LUwiUHWdVDtqFJEFfhPwnqb2EenkUv8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJE%2FO57grT6PblNZZCrcA4jJ806ZHKk493JUzHzqkCCMog2qPUNOzuGgvlhPfR7cABz%2BpekHVeXXtOWalICjNwQ%2FuXPoOohzNpAjE1Uk9UnoduhD2z9j6lpK4creYbZAgzTklQ48EWsotlDe9cWZ7gVBvdfNkop8f3BMZme3PGoW8Xqj12m9C2YP3gLIAxgXMoyOyKFW9zslbtvhtgjfWnPSJfXCPsnR9uz5pgoKY6hMEQo1MIq%2BhgSCayleDq%2BTRv1vfhl%2BCn115DLAr%2B5mSIKCC2hCJUGEKGRrza9lvyyzEEKHIFSJprlBskmY06LPi5ndqURW3gmc%2FJXmCaZRCmvmCqZoEkrHv7tchXSHbINfD%2BuWum8g8d%2FDUcUcB5nyJccQl%2BrUd6myEsgGwgYUPhg2LF4tnwv4U%2F57iHWuxTmODUujYP9DKWYtoicM30vQ7vX%2FP3y5GOH%2BnKL0S%2Fb8hM7hZ4GjIdB%2BrTISlGIGYlMiaLPUMZr4JwWzsyzeUAdYxBv35NnpKNtcExVkATlZHpr5gO1auRF2d0xnRLD02KcKQxA7MuKSHATC0yBjcgdsfs8m2XXaF9ifplrIaAvGn8Tq2lLnx3LRfa5yOgG3Ra9GLP6chV2pWeg84hclOhx2KnSVVshwSvantoC7MMTmxckGOqUBKQ5J87e8dzoQUCYWIQvULx0B%2FX0EATlO3e61GCaLve4qx0EYSHUtYbAwOkcnF%2Fn79kOEmUMUmG%2BHHR1ZoWInw9qN37yPN5nsOm5QIYJt7zACBd2454aTaqNulpXW3tEGXobrNaDZ3BBQggVdHRpY7BP5OEvPP4vtSvNTa9ThBvhNNDkzZhvAQMHYiXEBh%2FV8vcB5t7Q3sx1gHehP%2BPdiEeT1v7Ny&X-Amz-Signature=bee2ec0a8d61b7366d5f9831bfc9d6489d0e77b79400453e864df3b0d9a97b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FFCYBUO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID7pTFsyvbv88xBUQk2kp8b8IjPICLuK%2BctGeWS9y5LhAiEAxleAXFpG4zt0LUwiUHWdVDtqFJEFfhPwnqb2EenkUv8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDJE%2FO57grT6PblNZZCrcA4jJ806ZHKk493JUzHzqkCCMog2qPUNOzuGgvlhPfR7cABz%2BpekHVeXXtOWalICjNwQ%2FuXPoOohzNpAjE1Uk9UnoduhD2z9j6lpK4creYbZAgzTklQ48EWsotlDe9cWZ7gVBvdfNkop8f3BMZme3PGoW8Xqj12m9C2YP3gLIAxgXMoyOyKFW9zslbtvhtgjfWnPSJfXCPsnR9uz5pgoKY6hMEQo1MIq%2BhgSCayleDq%2BTRv1vfhl%2BCn115DLAr%2B5mSIKCC2hCJUGEKGRrza9lvyyzEEKHIFSJprlBskmY06LPi5ndqURW3gmc%2FJXmCaZRCmvmCqZoEkrHv7tchXSHbINfD%2BuWum8g8d%2FDUcUcB5nyJccQl%2BrUd6myEsgGwgYUPhg2LF4tnwv4U%2F57iHWuxTmODUujYP9DKWYtoicM30vQ7vX%2FP3y5GOH%2BnKL0S%2Fb8hM7hZ4GjIdB%2BrTISlGIGYlMiaLPUMZr4JwWzsyzeUAdYxBv35NnpKNtcExVkATlZHpr5gO1auRF2d0xnRLD02KcKQxA7MuKSHATC0yBjcgdsfs8m2XXaF9ifplrIaAvGn8Tq2lLnx3LRfa5yOgG3Ra9GLP6chV2pWeg84hclOhx2KnSVVshwSvantoC7MMTmxckGOqUBKQ5J87e8dzoQUCYWIQvULx0B%2FX0EATlO3e61GCaLve4qx0EYSHUtYbAwOkcnF%2Fn79kOEmUMUmG%2BHHR1ZoWInw9qN37yPN5nsOm5QIYJt7zACBd2454aTaqNulpXW3tEGXobrNaDZ3BBQggVdHRpY7BP5OEvPP4vtSvNTa9ThBvhNNDkzZhvAQMHYiXEBh%2FV8vcB5t7Q3sx1gHehP%2BPdiEeT1v7Ny&X-Amz-Signature=667019c7930152256af77e40276de9ee35318fc7dedc6cdf2c38cf087425f746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

