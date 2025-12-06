---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DR47OX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVQAMEIlHy1q%2FIgCKjuERHlvugcf22pLGDMaWphXaw4AIgcTQJ%2BUgLDcjbe3v81MVfVleHJ4SsTOSETjAJIfjgYXoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMWZo3WlRNBfvq8HmCrcA6%2BJIrshO1OC4op3fXfBFURK7JLJtdzyZPDUmvNXi8H%2B4%2FC6rNt%2F0gHzbumVqfJ7IWLBaSjjFDbOQaN06Sc4LSc3uyz8O7QskWiW6FIsCAbKKd04k63Zsx8kX8glZ%2BiZrnavlikG%2F5P62fscei1yWlCTRoRNDqfnhxzWc93zqGxz9u6%2FD8fpHvUlAkJTxUSn8xbnXWPCjfKcVINWvd5fn7EwbpLw%2FMZ5QwzSUmip7C%2FIjEQxVCj4dID%2FnlKfrvFGpw%2B3XE%2Bl0ntEWeE3oQaGcdame9XG%2B%2FXitLscxIyYHRjiGdKSchdqSLd4dBJthjeaBBOIDg9GX728zAQ84LftwQyNAVLn99eKSesgT0enSHJ6YOo0JS%2FYSqbH%2FOrJWWCGODTcAzViUktx1Oz%2FHV8gr%2BStjfgimTFwSRvZV6zOdobki60GjfxhxO3OTXyeQ6BOObhIOr2hel1HFpa8Ak86N6o%2Fpyl%2FFoF8MSs1STOEnhnQ9oSy%2FRqOLGHY2JkFJ4GwriBU%2FzHljx7K7tBQQM%2Fo4%2F6f6HbWd8l9qAL6GzvnmMk7RVwjgH3A7%2FTUQVng5e0Nl8ZJfU2qgNgYR0ZZX7s0zBwMAlmHiDK8gKaNPzRuFlu8tYxeiOLNNcO3JXQyMOW8z8kGOqUBIFmZiVSblsBn8%2ByIvst8FaQ0736tG7gxOgwLow2UjQVWXhU5tttPPS6YkyDBpk3kxXK8ZiTjBJvRq5HlnuZ9N38ufTVc5Ltb%2Brfkceu7ql0SwKa7oJjE6hTU5GTdY2OOoeGy%2BE7ph8H3mEPyDd9Dph1v0Bkq7zb1vFgTuOlpsi8QBlk4x4Wrv8sMlF2yj0XZKZoY%2FiiGwFOjlHXVz0FkP%2Bb%2FPMOU&X-Amz-Signature=9f02f8210472219e8b67cb13464f49df4932727779643b2a68af96a1a4fad19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4DR47OX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVQAMEIlHy1q%2FIgCKjuERHlvugcf22pLGDMaWphXaw4AIgcTQJ%2BUgLDcjbe3v81MVfVleHJ4SsTOSETjAJIfjgYXoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMWZo3WlRNBfvq8HmCrcA6%2BJIrshO1OC4op3fXfBFURK7JLJtdzyZPDUmvNXi8H%2B4%2FC6rNt%2F0gHzbumVqfJ7IWLBaSjjFDbOQaN06Sc4LSc3uyz8O7QskWiW6FIsCAbKKd04k63Zsx8kX8glZ%2BiZrnavlikG%2F5P62fscei1yWlCTRoRNDqfnhxzWc93zqGxz9u6%2FD8fpHvUlAkJTxUSn8xbnXWPCjfKcVINWvd5fn7EwbpLw%2FMZ5QwzSUmip7C%2FIjEQxVCj4dID%2FnlKfrvFGpw%2B3XE%2Bl0ntEWeE3oQaGcdame9XG%2B%2FXitLscxIyYHRjiGdKSchdqSLd4dBJthjeaBBOIDg9GX728zAQ84LftwQyNAVLn99eKSesgT0enSHJ6YOo0JS%2FYSqbH%2FOrJWWCGODTcAzViUktx1Oz%2FHV8gr%2BStjfgimTFwSRvZV6zOdobki60GjfxhxO3OTXyeQ6BOObhIOr2hel1HFpa8Ak86N6o%2Fpyl%2FFoF8MSs1STOEnhnQ9oSy%2FRqOLGHY2JkFJ4GwriBU%2FzHljx7K7tBQQM%2Fo4%2F6f6HbWd8l9qAL6GzvnmMk7RVwjgH3A7%2FTUQVng5e0Nl8ZJfU2qgNgYR0ZZX7s0zBwMAlmHiDK8gKaNPzRuFlu8tYxeiOLNNcO3JXQyMOW8z8kGOqUBIFmZiVSblsBn8%2ByIvst8FaQ0736tG7gxOgwLow2UjQVWXhU5tttPPS6YkyDBpk3kxXK8ZiTjBJvRq5HlnuZ9N38ufTVc5Ltb%2Brfkceu7ql0SwKa7oJjE6hTU5GTdY2OOoeGy%2BE7ph8H3mEPyDd9Dph1v0Bkq7zb1vFgTuOlpsi8QBlk4x4Wrv8sMlF2yj0XZKZoY%2FiiGwFOjlHXVz0FkP%2Bb%2FPMOU&X-Amz-Signature=05db58b1816a6e2fbadafa8dac2fcb180ea80e7915e9d5f0e9d87537ccbea509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

