---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOROQO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2FI4QIZRc8WOblA929ogrTOF%2BkXxdUDlG%2Fs08kA6Z7QIhAN%2B3NiGcxbnPFYiLPIeCbin43rV9JnFOz%2Fbmx0P8fhFTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ8VbQVOjxiR4H9K4q3APA6mEYqag3DaS2oYMPvQIMgZJ75d7TGFTLf8v4%2FiSlIoc4X2JdsHaa%2FrPGfPgHL31RCaxLnUiwm%2B847bNbFi7FLqDJ0HzJvd1eJ3O0K6a%2F7Uo%2FyB2GJjdwkpBNTIxTHu2W6pwJPJ1rRZrEhIR1Ac%2FtQ7wS6TGptxn0Sx6F2cZttB5LIRKvg8nd7qLvNwOWWPtQ%2BzFo5vrrN2lXOV15y2LK6G46brxNSGuFDrVyF5pfIUlL1dwF1mwFCUcbbOhBHe87FdNXiJmh%2BaoOkHIfRTad7nvq%2BUiiIQbok5CQh1JZLkOxdESsGXYtwTJr49CttkfL5xAxaOlt%2BdOQdleKdSgPL3xIs3Y9T2JJDVOiBWPyq2lBp3S%2BtiMDKXF%2BfrYSD%2F0qd%2BS%2BpHkAkCb32PLY9nCCC%2BjyXjyW6vBbXh7%2FWuPRSQMv1GRJT0NrMdl7p7Vy4eYSePOuOK1uAokQn%2Bpk2Ci2OWE7NZDsmikPu4lz%2FjuGfyHSEw%2BczH1OF%2BgPvXVcaijeE1aoxYGqUO6aGiU0%2F2yE422WLBppdP0QZVa%2BZ5kG4Q2yrLMokzgWlGlEB9QSxbBmoRt1tMsbBcvLhk2JsM%2FBXXO29GC4AJTVUwm2FQHngHQmqPuIxqDxm9k%2FZjCHxN%2FJBjqkAX%2BSei3Bx9iOZaN7UOG5jp%2BMFc9oP4e%2FsM08U1GspAn4uksQPNeniOtCn8gIzM8OPQOolMtZpLknW5ewYgwEZ4cmpDfwIXKR%2F0%2FRIo2RhVGEfQYgpR6P7TmYKWNf9S4ZAc9W7TfpNZQUp%2BaOa84qro1Jx9t2%2BIIBG61LjWtx4S%2BycN5bHXZ58uOzH1gqQE91pHPptV35FURaW4HNxyG3AOUazUWV&X-Amz-Signature=cb9f7bdbe39ad034fcbd340c55327b949bd68937a505ee4154e10a46bcb03717&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCOROQO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3%2FI4QIZRc8WOblA929ogrTOF%2BkXxdUDlG%2Fs08kA6Z7QIhAN%2B3NiGcxbnPFYiLPIeCbin43rV9JnFOz%2Fbmx0P8fhFTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJ8VbQVOjxiR4H9K4q3APA6mEYqag3DaS2oYMPvQIMgZJ75d7TGFTLf8v4%2FiSlIoc4X2JdsHaa%2FrPGfPgHL31RCaxLnUiwm%2B847bNbFi7FLqDJ0HzJvd1eJ3O0K6a%2F7Uo%2FyB2GJjdwkpBNTIxTHu2W6pwJPJ1rRZrEhIR1Ac%2FtQ7wS6TGptxn0Sx6F2cZttB5LIRKvg8nd7qLvNwOWWPtQ%2BzFo5vrrN2lXOV15y2LK6G46brxNSGuFDrVyF5pfIUlL1dwF1mwFCUcbbOhBHe87FdNXiJmh%2BaoOkHIfRTad7nvq%2BUiiIQbok5CQh1JZLkOxdESsGXYtwTJr49CttkfL5xAxaOlt%2BdOQdleKdSgPL3xIs3Y9T2JJDVOiBWPyq2lBp3S%2BtiMDKXF%2BfrYSD%2F0qd%2BS%2BpHkAkCb32PLY9nCCC%2BjyXjyW6vBbXh7%2FWuPRSQMv1GRJT0NrMdl7p7Vy4eYSePOuOK1uAokQn%2Bpk2Ci2OWE7NZDsmikPu4lz%2FjuGfyHSEw%2BczH1OF%2BgPvXVcaijeE1aoxYGqUO6aGiU0%2F2yE422WLBppdP0QZVa%2BZ5kG4Q2yrLMokzgWlGlEB9QSxbBmoRt1tMsbBcvLhk2JsM%2FBXXO29GC4AJTVUwm2FQHngHQmqPuIxqDxm9k%2FZjCHxN%2FJBjqkAX%2BSei3Bx9iOZaN7UOG5jp%2BMFc9oP4e%2FsM08U1GspAn4uksQPNeniOtCn8gIzM8OPQOolMtZpLknW5ewYgwEZ4cmpDfwIXKR%2F0%2FRIo2RhVGEfQYgpR6P7TmYKWNf9S4ZAc9W7TfpNZQUp%2BaOa84qro1Jx9t2%2BIIBG61LjWtx4S%2BycN5bHXZ58uOzH1gqQE91pHPptV35FURaW4HNxyG3AOUazUWV&X-Amz-Signature=7b1ed4ccb07ffe1f1c8bc05ed8267cdc2be902a673213448a027dedaaf311bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

