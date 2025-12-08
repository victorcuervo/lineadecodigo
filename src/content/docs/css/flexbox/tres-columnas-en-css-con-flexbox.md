---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYULROQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCANKdB%2FBOyT%2FKwpVS9rnB83mhXmDmE9PBP9%2FXZYAjxLAIgSLMM3hURutR5vq5N%2F1emi6hoBl2iU58me3KOzBB5%2FqYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzAg1EUj%2BRIJENIkircA5SQ3cvhrkovohpr6wS85iLvCWgC4Fc52pWf1QRsoS15LQahIarMfEz7N4HCHfzDWHLX%2FXnzC67gdM0zJHPPaKefVAnFQz1b5D6h%2FwKRVeBc22OxG74bDyEL%2BmLU%2BOgBMwRrT8N0BUznpyoq%2F%2BUUjVcGcbj3sLpItZGF4MS7ieK7d%2FsQoJHR%2FayVKbqbMGc1pn7u9BW8YQlRs%2BdaIECWQ2zQ4cX9M1Et2YEl7d3vLI%2BbuZXuJSgCZbslN6dzeCS6s1uEiMBjKcDc%2FyeTpnIi7KTpWfVJo4w%2B5dfuHk5TK5t2UL%2BlmW8lXNLZkzpy2%2B70JjmrALzjB2I8y%2FDBbXPR%2BE1u%2BQ1HHRHIZST5%2Bfqt5w5ruet61GUtNNhFos230XIk8yVLkTDFTiW7HQOKGo4%2BdRg8bDBhVGKDKRTTKVZGHLesXkYxhLZOAIFZXDc3MPPorIJuOSuwO%2BBWwR96iqvlN4PHsMAFqNyIAY%2Fg9IkNvJmVw%2FGOi0O6Bgo8H9jDR81b%2BaQG8N3cap5FjY9ZGkl8PY7FVdURbXis7WCWgt56gnQr3eB5aC9PvmHsSd0W4Cs8%2FhuqOgAe7TsXTmJNAN%2B0eCHlqAbLKYLqVrmmVK2qnNZeNLpPHCpwC1XkPtfLMKfc3MkGOqUBitRXM57xDBV9s7EWM2ntLvVUxfegwuwsKGD6Svx%2FHbiH%2FcfqZofTGo5VuQ3RplJ2PuI7vX5bBFANZfM9nWaFRwqsRKFEt4Ir7ec%2B1wFfl2oWeMnJhB1C1tCmE97KBaYa%2BO7ReJbJnZo5X072XCeq9nNIxlPFQEzZ8ceqV2cCf0sg1ItNu%2Fd9IdgZcA7KaQ2lsAg2Oud9YNjeuduhF1qTI0rASLWz&X-Amz-Signature=b94bea59f3722166eb7bcfd74b6b934f83123da4a5912935dfef20a112c18f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYULROQS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T200507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCANKdB%2FBOyT%2FKwpVS9rnB83mhXmDmE9PBP9%2FXZYAjxLAIgSLMM3hURutR5vq5N%2F1emi6hoBl2iU58me3KOzBB5%2FqYqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNzAg1EUj%2BRIJENIkircA5SQ3cvhrkovohpr6wS85iLvCWgC4Fc52pWf1QRsoS15LQahIarMfEz7N4HCHfzDWHLX%2FXnzC67gdM0zJHPPaKefVAnFQz1b5D6h%2FwKRVeBc22OxG74bDyEL%2BmLU%2BOgBMwRrT8N0BUznpyoq%2F%2BUUjVcGcbj3sLpItZGF4MS7ieK7d%2FsQoJHR%2FayVKbqbMGc1pn7u9BW8YQlRs%2BdaIECWQ2zQ4cX9M1Et2YEl7d3vLI%2BbuZXuJSgCZbslN6dzeCS6s1uEiMBjKcDc%2FyeTpnIi7KTpWfVJo4w%2B5dfuHk5TK5t2UL%2BlmW8lXNLZkzpy2%2B70JjmrALzjB2I8y%2FDBbXPR%2BE1u%2BQ1HHRHIZST5%2Bfqt5w5ruet61GUtNNhFos230XIk8yVLkTDFTiW7HQOKGo4%2BdRg8bDBhVGKDKRTTKVZGHLesXkYxhLZOAIFZXDc3MPPorIJuOSuwO%2BBWwR96iqvlN4PHsMAFqNyIAY%2Fg9IkNvJmVw%2FGOi0O6Bgo8H9jDR81b%2BaQG8N3cap5FjY9ZGkl8PY7FVdURbXis7WCWgt56gnQr3eB5aC9PvmHsSd0W4Cs8%2FhuqOgAe7TsXTmJNAN%2B0eCHlqAbLKYLqVrmmVK2qnNZeNLpPHCpwC1XkPtfLMKfc3MkGOqUBitRXM57xDBV9s7EWM2ntLvVUxfegwuwsKGD6Svx%2FHbiH%2FcfqZofTGo5VuQ3RplJ2PuI7vX5bBFANZfM9nWaFRwqsRKFEt4Ir7ec%2B1wFfl2oWeMnJhB1C1tCmE97KBaYa%2BO7ReJbJnZo5X072XCeq9nNIxlPFQEzZ8ceqV2cCf0sg1ItNu%2Fd9IdgZcA7KaQ2lsAg2Oud9YNjeuduhF1qTI0rASLWz&X-Amz-Signature=ba4b0cd82c22923c1c6c5d0dc02cc8c9ecca9f24cf1a80a053769f20ea127698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

