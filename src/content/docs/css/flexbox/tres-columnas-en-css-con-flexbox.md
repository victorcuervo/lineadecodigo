---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HO4HJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8xTwyTy6Ly5n%2BaG%2B%2FQBb3rGrQ2sjW5qaWd5exaI8TnAiEAno%2BRS9eABkLwLRXsyaZcJ0mMp7ooHTT5tKeLL2iO5CMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMi6J1Eh%2FZRjq9ZPaircAxQhH0OZhWx1z%2Fl8GLZDqGr89K2yWc9UD9KQqIHuThodYt5ajjn9YAnO0yU53vEH%2FPn1MdYOd9irdrT%2BMywJn%2BHcrG1hU6vpKOYxnTZlEBM%2F0lmCkK3LfmTAEqAdLiDMgQjKUeJTLMCYgQ9gxcwo0VTpLLpHXlx7ymolupIUYk8qZZ6%2BhpWDg4T4AxwiYxpHNR8yq8IkdJLR9gnhcCW0cRPyBxzAMfbqhLXhnysbLf%2Bj%2FSfLibBcL3DGd5HH9FVTKungPUWFOh2z7%2BCyufOE7DY%2Fb0ClaxqlFZoDRRiI5etq7YnGxUpBvZkugc7Ja9dgnronoNnLmupLLZ2TFAQCEygwyZoIX47Km96HCTnbk5oRselHq9ChvQmbASfQV7WjsBF1l%2BSzP%2FukeQbNGshWG3fXGhCHZmbmDc7TNXsPo8W9pURZ9tI4bT%2BSge5MZ1eW31%2B45bOPZ9y0Y3TO0ZFGEXc7eZDanVLMbgUEOTbJKmuJKoHD1o5kgEH6X3CgcaflXieRhjxXn7RycVCsEzq0qZrRYgcso%2Fr0dJ%2FlhYBDUVfSWwkPzda88zBTz5gqgscMvB0teEqYL8c8ZWgzrbwBAUvLMfhakUbJkTYaBJOVFbZ9vl%2B%2FZxL872DaQbQsMOrDyskGOqUBe3AwlGH9gwoSNC4DNbi2ZFjaTT2ZV5Mv91dL%2FiYk5ZUGzcnDcqgwIz2xJLQWG%2BTGhfR7vcOIbNOjJH2uZRxRFrqrvpVdbYc5bMn7qSW5t8JlUzb4V38hIeIBpIuzBEbrT%2BhN2kKbMm4N0EsDHIEy7QaXpkowJhgtp7z7PWXbReO3CG1VO%2B%2FZYBEZitKSnucQU3GpkzBonkXE2zBQzSLET8xS0kA4&X-Amz-Signature=3acbf12001c734b0c318a2f0488a448c7ed54fc58f278dd9eb8358bbd3449aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6HO4HJP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8xTwyTy6Ly5n%2BaG%2B%2FQBb3rGrQ2sjW5qaWd5exaI8TnAiEAno%2BRS9eABkLwLRXsyaZcJ0mMp7ooHTT5tKeLL2iO5CMq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMi6J1Eh%2FZRjq9ZPaircAxQhH0OZhWx1z%2Fl8GLZDqGr89K2yWc9UD9KQqIHuThodYt5ajjn9YAnO0yU53vEH%2FPn1MdYOd9irdrT%2BMywJn%2BHcrG1hU6vpKOYxnTZlEBM%2F0lmCkK3LfmTAEqAdLiDMgQjKUeJTLMCYgQ9gxcwo0VTpLLpHXlx7ymolupIUYk8qZZ6%2BhpWDg4T4AxwiYxpHNR8yq8IkdJLR9gnhcCW0cRPyBxzAMfbqhLXhnysbLf%2Bj%2FSfLibBcL3DGd5HH9FVTKungPUWFOh2z7%2BCyufOE7DY%2Fb0ClaxqlFZoDRRiI5etq7YnGxUpBvZkugc7Ja9dgnronoNnLmupLLZ2TFAQCEygwyZoIX47Km96HCTnbk5oRselHq9ChvQmbASfQV7WjsBF1l%2BSzP%2FukeQbNGshWG3fXGhCHZmbmDc7TNXsPo8W9pURZ9tI4bT%2BSge5MZ1eW31%2B45bOPZ9y0Y3TO0ZFGEXc7eZDanVLMbgUEOTbJKmuJKoHD1o5kgEH6X3CgcaflXieRhjxXn7RycVCsEzq0qZrRYgcso%2Fr0dJ%2FlhYBDUVfSWwkPzda88zBTz5gqgscMvB0teEqYL8c8ZWgzrbwBAUvLMfhakUbJkTYaBJOVFbZ9vl%2B%2FZxL872DaQbQsMOrDyskGOqUBe3AwlGH9gwoSNC4DNbi2ZFjaTT2ZV5Mv91dL%2FiYk5ZUGzcnDcqgwIz2xJLQWG%2BTGhfR7vcOIbNOjJH2uZRxRFrqrvpVdbYc5bMn7qSW5t8JlUzb4V38hIeIBpIuzBEbrT%2BhN2kKbMm4N0EsDHIEy7QaXpkowJhgtp7z7PWXbReO3CG1VO%2B%2FZYBEZitKSnucQU3GpkzBonkXE2zBQzSLET8xS0kA4&X-Amz-Signature=980b443955de1edd785e62138d5b21cfbb11df835691540b858c35eff9dab223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

