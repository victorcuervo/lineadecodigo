---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQUNM3B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqUurrtecwTsDhrbgEJJec8GPlNTglTgu6YE35JcEhYgIgPK5pPmysOvZknbJB7Ns6IKjmCrn%2B5TDPTIR7rHOtzngq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCGxYhDfxVZnmLJ4%2FircAyvW0t%2Bxdw2%2Ba65FIOdY3SSFazkbON4QLwBUloH2sYT2LpmpaD340SXwwiSUdY05Oi0Rh8HRU9g0oMqdmRPtzXQorq3GnyaoaOf4MV6fGt9NWdtl2BZT3vLiVvsjK2mW0ndgwOxypu%2FRe9KIyLmWM59yrj9iDHWQ7Rv6Ba8U7SzwhQzE2syN7zbJQiZzWmm9UfWnYwSD%2Bo5c1zLf%2BQfVNixevrHLjarG9KwpqJKTd4Gk%2Fhufun%2F%2FDQ5udFvAriQtD3yGQd3frhdMEx44gKmU0AaEm9M2uyTh7lh2I6%2Bd%2Fte9toHfdFlzGxPrSvtrLAD3gFXA5zLtglzpTDg2mtBQLk%2BsgG5uQ08T7JBLbOFvSjsld8%2FXhqgnQZq0NKxHOLADGpbM85eJSVlCDlcI%2B3kd4F0NyZyaJj2lb9VWn5EwprFaZ2R%2FH8smQVoUl9JErZZo9PQQPv%2BagjB6TAGTYYHd7TKgf7%2F0rEdWvuUB7XOi%2BmWINDiHYxq9b2IuH5rCm%2FNKCk%2Bgn7lm8UM96G11o%2BkAj4ngIsAkdKcfQbRbQ3I70yTXVDmwbJSL3RvH7dAdu6dF4JsvjAgfe2AvWUeqPrdeQIc7TAnkPb0Rg7eFgZy3zTixK%2BQsqQxfMEVUwzY9MIf6xskGOqUBecRLXn01fwTb%2BclcJIkbI8bf0VxKqIi9e8ZXcC80YPBbaA36uARlg%2FMK1P0NZw3dd3tJGTacslZFLp8%2BoL6%2FBEZH4nAcxTJbtFjW%2BmBt%2BXO3k%2B31DsaZctsMO4eq%2Bb2eChRBY6xp0XDfQSsJl8APNspNx7JZU9hPWmtKyIKy%2FwvY8s0SDJ4RGbD7AQfb6e2JICE36FULxQHFkwhpJ1M8Lp2eHeUc&X-Amz-Signature=698a3cb08cff5a72d8a5fd42d490b17a98b0c7beb8415aadc3a61d38bedb763b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXQUNM3B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqUurrtecwTsDhrbgEJJec8GPlNTglTgu6YE35JcEhYgIgPK5pPmysOvZknbJB7Ns6IKjmCrn%2B5TDPTIR7rHOtzngq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDCGxYhDfxVZnmLJ4%2FircAyvW0t%2Bxdw2%2Ba65FIOdY3SSFazkbON4QLwBUloH2sYT2LpmpaD340SXwwiSUdY05Oi0Rh8HRU9g0oMqdmRPtzXQorq3GnyaoaOf4MV6fGt9NWdtl2BZT3vLiVvsjK2mW0ndgwOxypu%2FRe9KIyLmWM59yrj9iDHWQ7Rv6Ba8U7SzwhQzE2syN7zbJQiZzWmm9UfWnYwSD%2Bo5c1zLf%2BQfVNixevrHLjarG9KwpqJKTd4Gk%2Fhufun%2F%2FDQ5udFvAriQtD3yGQd3frhdMEx44gKmU0AaEm9M2uyTh7lh2I6%2Bd%2Fte9toHfdFlzGxPrSvtrLAD3gFXA5zLtglzpTDg2mtBQLk%2BsgG5uQ08T7JBLbOFvSjsld8%2FXhqgnQZq0NKxHOLADGpbM85eJSVlCDlcI%2B3kd4F0NyZyaJj2lb9VWn5EwprFaZ2R%2FH8smQVoUl9JErZZo9PQQPv%2BagjB6TAGTYYHd7TKgf7%2F0rEdWvuUB7XOi%2BmWINDiHYxq9b2IuH5rCm%2FNKCk%2Bgn7lm8UM96G11o%2BkAj4ngIsAkdKcfQbRbQ3I70yTXVDmwbJSL3RvH7dAdu6dF4JsvjAgfe2AvWUeqPrdeQIc7TAnkPb0Rg7eFgZy3zTixK%2BQsqQxfMEVUwzY9MIf6xskGOqUBecRLXn01fwTb%2BclcJIkbI8bf0VxKqIi9e8ZXcC80YPBbaA36uARlg%2FMK1P0NZw3dd3tJGTacslZFLp8%2BoL6%2FBEZH4nAcxTJbtFjW%2BmBt%2BXO3k%2B31DsaZctsMO4eq%2Bb2eChRBY6xp0XDfQSsJl8APNspNx7JZU9hPWmtKyIKy%2FwvY8s0SDJ4RGbD7AQfb6e2JICE36FULxQHFkwhpJ1M8Lp2eHeUc&X-Amz-Signature=39c3bf840e2a34de20fa52dff370dff7dac6374666be4b2e94458aa403e3f3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

