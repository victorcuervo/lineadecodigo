---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IELQ4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77R36evF4TNdqiuaXT75lJ19Dn3HqBW2j3MfMFhOF6gIgfIfrS4VkQpRdiejZiWmKVB6yRL6LB7tRufUKAmJtKTYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDD8WueOxOELGdmxRSSrcA%2FLo7IndHGmdpysROZ6KKQMZWii6IgWFB%2Fwah04oedBdDFYMpuNEaDuFJOxdQI5sNF%2FBBkmktiRlGlOrOb6qfsr940QQrYxbcKjm1zlxObZlpM9N9rvMY1fAkzyWIuAJ0zkRIh92nzbJaablIkjCMmpWKBZoLruuZLGvlNImPfM5pUtBw1GMQzKvB9FnaMsJWCspyIeq8o8IU5DDR8Ej46dxghnjaacBzcC0ZB2QqnCnrIExgjY2UCmJrKt2islRDVb1DNMdMyG3rRcBKfjaIGlUOvE0qTFppSxe9hJaU5m2IYBuSoGzLEgHEsxXr%2F46Sv4xcf7zwWG2r%2Fjqr8gvkTUCaVznWaVipJDdiq2uijh0jPZ3s6DzK2N08RjNjgpDmGZAOqnkmPOOEf%2F0l0Dj%2FTeLZNobp3TZMvWHGbjjgGEWeBcuawJgKCXGtD6TapvOsS16%2BWnZ2FGld5iuPNPp56ENApLNx6KiyexqN3exRnKQfOxBJRNa59olvE5I28CelZ%2By8%2FjVP0gARfgfcz1ML5cM%2Bx4i1pZkkhYBf1bg0BgoIGkNAljrsExG44%2FpUtqxdFXePIwyee91AmSI4BcLy%2B0Ea1YEpbwfa6kl09G%2Btm3nHQaEJ5NJvTqRyVcRMLusyckGOqUBYMT0Ou%2FE5kzjynzntMmTqC2FyE1rzR1gwvZ8SQHfRcTl020E%2FoOJ1t2A7E3nlO1o5lJXz0PktMGp1XMS%2Fio0jgm8UAe4blqkuNAFy9UQ9L5Z1iRcjz2i8vNOoaERahtlP2oqap2%2B2SSTdlKo%2FtDx2XCzmNo%2B7EylGwNdIgrap90AX93wGJHaUaIH%2BzE0xAWFLfQBhmqped1j%2BK0YECnDdF%2FtmR7r&X-Amz-Signature=bf361928abb04e120a5b0324e20392d9249ae8413b355cfc30e394756d7bf8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IELQ4A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD77R36evF4TNdqiuaXT75lJ19Dn3HqBW2j3MfMFhOF6gIgfIfrS4VkQpRdiejZiWmKVB6yRL6LB7tRufUKAmJtKTYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDD8WueOxOELGdmxRSSrcA%2FLo7IndHGmdpysROZ6KKQMZWii6IgWFB%2Fwah04oedBdDFYMpuNEaDuFJOxdQI5sNF%2FBBkmktiRlGlOrOb6qfsr940QQrYxbcKjm1zlxObZlpM9N9rvMY1fAkzyWIuAJ0zkRIh92nzbJaablIkjCMmpWKBZoLruuZLGvlNImPfM5pUtBw1GMQzKvB9FnaMsJWCspyIeq8o8IU5DDR8Ej46dxghnjaacBzcC0ZB2QqnCnrIExgjY2UCmJrKt2islRDVb1DNMdMyG3rRcBKfjaIGlUOvE0qTFppSxe9hJaU5m2IYBuSoGzLEgHEsxXr%2F46Sv4xcf7zwWG2r%2Fjqr8gvkTUCaVznWaVipJDdiq2uijh0jPZ3s6DzK2N08RjNjgpDmGZAOqnkmPOOEf%2F0l0Dj%2FTeLZNobp3TZMvWHGbjjgGEWeBcuawJgKCXGtD6TapvOsS16%2BWnZ2FGld5iuPNPp56ENApLNx6KiyexqN3exRnKQfOxBJRNa59olvE5I28CelZ%2By8%2FjVP0gARfgfcz1ML5cM%2Bx4i1pZkkhYBf1bg0BgoIGkNAljrsExG44%2FpUtqxdFXePIwyee91AmSI4BcLy%2B0Ea1YEpbwfa6kl09G%2Btm3nHQaEJ5NJvTqRyVcRMLusyckGOqUBYMT0Ou%2FE5kzjynzntMmTqC2FyE1rzR1gwvZ8SQHfRcTl020E%2FoOJ1t2A7E3nlO1o5lJXz0PktMGp1XMS%2Fio0jgm8UAe4blqkuNAFy9UQ9L5Z1iRcjz2i8vNOoaERahtlP2oqap2%2B2SSTdlKo%2FtDx2XCzmNo%2B7EylGwNdIgrap90AX93wGJHaUaIH%2BzE0xAWFLfQBhmqped1j%2BK0YECnDdF%2FtmR7r&X-Amz-Signature=aeca109c8f8f9b75bd00530393ccdb1ad960aaaf28dc40204d6f8793e767db4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

