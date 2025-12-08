---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS2BA6M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB71iKilHAPjOcH9hky7zqLYsjRJRLp63GC80B6e0nIwIhAKPKBUSOJhZc41as%2FLgGSzb4CmYVpI6luWsp11DK1IGeKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlnTpVzwpDQlDkVa0q3APO97ZM3ldxQCJoEUuhL5NYVGgrBQwMLvWWGFxJ%2FxDB3n5yna%2B5lWEyQYvlx4nL3SMmX261%2FAnH%2Bc8bXb34DR%2Bvdz1W7NkYaEYpjhisisT%2BP8pky2Tve5HTsduTsuzumgOA%2BRh%2Bo4FrAIdSNheR%2Bsi8W8LLZ6QCFllEIRu7Auf4HrRdRouAQPdjuzeK%2BChGd9CvIS28sUn2tygjD%2B9Zm39kmn%2BXRq6txauQxzHLw5LcfE1q8sqA4ojQqLoanwyb0EsVQ9GuQ9%2FW2qgFR%2FOv1DwfOi4yfrgaft39LjzN0Z0%2Byaox98WBQ8gEZZPQLcWX8PaPXq%2FH5LeNxYfAFTGj4GXxBADY6p2PBgiKHzN5F48TKNIDaa%2BigfiPHF3xeUhrXcKO35ltgzZAYtiyFbKQCyWr5WRRDfehbv%2FJ2lvQ2aOV7Z0L1W2XN0uFT3qAJqBDi%2BlUi75rqGRqc7SAcdGqcZY7%2FVC0JGKJrAYb%2B5xxybcjZ1NCndMiePoFPhH0xoNiym6u5WFinR46DD5IjKSkzCW32mysWkSIq0KCstKgsWHx%2BDGTz1j%2BtZGAkN58dWPNbqVk4%2B8F%2F6Ok1BYXYaOA33%2Bpgzq2SCzw%2FkeqsjWvxL4D3MHuAbFCsVqrb9y%2FuTDYodjJBjqkATV12AEBc6ayH3RBrrN8dJd3gSOTk%2BJ0DtPG3CskbCsMQp0lpPqQqYL5MafucRIbqO8STEFNe1MYGZT6MPr0is78H6reDZsei%2FaN72hiIO2T5qtMXwX%2Fcs7fFlNd7bN6cS9iy2S%2Fs9svRos1BvFfU7zUARhyrJD%2BFK7plg%2FsmMq69PtU2f8iYCpsp5wNW%2FldooulYz49pPedDAcx%2BvP%2FdcoYFRxn&X-Amz-Signature=646d7e264995b92ab36c42ad7e4cf8f077d54dac8af2005ce6faa40b0c61b482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOS2BA6M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T002148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB71iKilHAPjOcH9hky7zqLYsjRJRLp63GC80B6e0nIwIhAKPKBUSOJhZc41as%2FLgGSzb4CmYVpI6luWsp11DK1IGeKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlnTpVzwpDQlDkVa0q3APO97ZM3ldxQCJoEUuhL5NYVGgrBQwMLvWWGFxJ%2FxDB3n5yna%2B5lWEyQYvlx4nL3SMmX261%2FAnH%2Bc8bXb34DR%2Bvdz1W7NkYaEYpjhisisT%2BP8pky2Tve5HTsduTsuzumgOA%2BRh%2Bo4FrAIdSNheR%2Bsi8W8LLZ6QCFllEIRu7Auf4HrRdRouAQPdjuzeK%2BChGd9CvIS28sUn2tygjD%2B9Zm39kmn%2BXRq6txauQxzHLw5LcfE1q8sqA4ojQqLoanwyb0EsVQ9GuQ9%2FW2qgFR%2FOv1DwfOi4yfrgaft39LjzN0Z0%2Byaox98WBQ8gEZZPQLcWX8PaPXq%2FH5LeNxYfAFTGj4GXxBADY6p2PBgiKHzN5F48TKNIDaa%2BigfiPHF3xeUhrXcKO35ltgzZAYtiyFbKQCyWr5WRRDfehbv%2FJ2lvQ2aOV7Z0L1W2XN0uFT3qAJqBDi%2BlUi75rqGRqc7SAcdGqcZY7%2FVC0JGKJrAYb%2B5xxybcjZ1NCndMiePoFPhH0xoNiym6u5WFinR46DD5IjKSkzCW32mysWkSIq0KCstKgsWHx%2BDGTz1j%2BtZGAkN58dWPNbqVk4%2B8F%2F6Ok1BYXYaOA33%2Bpgzq2SCzw%2FkeqsjWvxL4D3MHuAbFCsVqrb9y%2FuTDYodjJBjqkATV12AEBc6ayH3RBrrN8dJd3gSOTk%2BJ0DtPG3CskbCsMQp0lpPqQqYL5MafucRIbqO8STEFNe1MYGZT6MPr0is78H6reDZsei%2FaN72hiIO2T5qtMXwX%2Fcs7fFlNd7bN6cS9iy2S%2Fs9svRos1BvFfU7zUARhyrJD%2BFK7plg%2FsmMq69PtU2f8iYCpsp5wNW%2FldooulYz49pPedDAcx%2BvP%2FdcoYFRxn&X-Amz-Signature=d27a50fb88be6a1cb4167c301811a8fb435be7a9f210e8995d63016730b547c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

