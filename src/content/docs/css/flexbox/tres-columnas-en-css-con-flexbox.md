---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BT7DHKW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmIElO%2BtrKGU7F5dYEEcA8cfe68taboqb61T9KrhZf9gIhANCDHzi0JtVoBMztp%2FZlZHhsHf01jnOQNWa6cQWENzzEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxSX13KeEU1xHY%2BoRYq3AMRbq%2FFR0wbHYpuz%2B3RxtuPKNgORRnEwX4xGNOynlxwq5gQdUshYQq4Csqyb7Oig88XN2RxuBmwbvA%2FoOsCycI4skRHOoM8ZQ0EoOTqW0I0UXt8N0odMdktDAt47diQ1jgQJC8%2FzgfVX4mkKphUtWUfKmbyVXccHi8iTNsURPPmtP04Yi5BA66Ul1eWacyEcj%2F3RMiwWUkouwvf667aQ2uZNU75oBXts%2Fs8eIpea%2BCsiyifapYJ9VgV%2F5KijPRIjkdy3ndOBOx%2BhlS8pauwUWxXfOOdCaaELVkN4xR5xC85xTnzY8OQuWqSHuBwqzpTJgjQRhWwTUuIQhgAekuOwCIMHGzxDiFXDB6Opj5UY4A6aMKxQneQnfP2Dt7LG%2BaKUh%2Byw%2BOyB0A%2B8jsb%2BsOcZVOY5OQRYHo2WDGAzT3tLCcqRRWzP4bfLKUO8O0aTMENHN1K3YQGsMvRuvwjZkKbz2d7jVM%2FJh6SW7vQ%2B29pLWfUmuJjY0SZtYGA0SqcQuj3IYJt46jc5Bw6h43LRe2%2BRfYC6eWZ3NtwzkKhu8ElpN8%2BrwmDlRbZy0OgN3QDoVLvqWEf9UX1swLFjfrJWAre%2Bs%2FgPHIh6U4jCYhzCBMyV14PjQW1Xc8ULlOcYPiv0jD2vM%2FJBjqkARTnaXD620SBBmJt3q7KNoEsNiFomlPipQ1F12U5oM09o85MIldMhcY40K5%2FFZFXXRX6PfkHAQW8m3GrKLHxI47VNuJWwMQBxCB8RYncCMrKX7oeLcN1kbUYlNE6UcIfa3ZiQoIMmihwYkd42isuL5A%2B9%2FQX1cZ%2Fep6EDs7bf0zdrWLZU%2FyRtOTIiBzBelaMJEJD%2FKpbxV6evp5bwyrrmzw5fU3U&X-Amz-Signature=7cf3edc998d235c5790bba2cfcca124bf557ddb94a9411be877faeeae2f41b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BT7DHKW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmIElO%2BtrKGU7F5dYEEcA8cfe68taboqb61T9KrhZf9gIhANCDHzi0JtVoBMztp%2FZlZHhsHf01jnOQNWa6cQWENzzEKv8DCHEQABoMNjM3NDIzMTgzODA1IgxSX13KeEU1xHY%2BoRYq3AMRbq%2FFR0wbHYpuz%2B3RxtuPKNgORRnEwX4xGNOynlxwq5gQdUshYQq4Csqyb7Oig88XN2RxuBmwbvA%2FoOsCycI4skRHOoM8ZQ0EoOTqW0I0UXt8N0odMdktDAt47diQ1jgQJC8%2FzgfVX4mkKphUtWUfKmbyVXccHi8iTNsURPPmtP04Yi5BA66Ul1eWacyEcj%2F3RMiwWUkouwvf667aQ2uZNU75oBXts%2Fs8eIpea%2BCsiyifapYJ9VgV%2F5KijPRIjkdy3ndOBOx%2BhlS8pauwUWxXfOOdCaaELVkN4xR5xC85xTnzY8OQuWqSHuBwqzpTJgjQRhWwTUuIQhgAekuOwCIMHGzxDiFXDB6Opj5UY4A6aMKxQneQnfP2Dt7LG%2BaKUh%2Byw%2BOyB0A%2B8jsb%2BsOcZVOY5OQRYHo2WDGAzT3tLCcqRRWzP4bfLKUO8O0aTMENHN1K3YQGsMvRuvwjZkKbz2d7jVM%2FJh6SW7vQ%2B29pLWfUmuJjY0SZtYGA0SqcQuj3IYJt46jc5Bw6h43LRe2%2BRfYC6eWZ3NtwzkKhu8ElpN8%2BrwmDlRbZy0OgN3QDoVLvqWEf9UX1swLFjfrJWAre%2Bs%2FgPHIh6U4jCYhzCBMyV14PjQW1Xc8ULlOcYPiv0jD2vM%2FJBjqkARTnaXD620SBBmJt3q7KNoEsNiFomlPipQ1F12U5oM09o85MIldMhcY40K5%2FFZFXXRX6PfkHAQW8m3GrKLHxI47VNuJWwMQBxCB8RYncCMrKX7oeLcN1kbUYlNE6UcIfa3ZiQoIMmihwYkd42isuL5A%2B9%2FQX1cZ%2Fep6EDs7bf0zdrWLZU%2FyRtOTIiBzBelaMJEJD%2FKpbxV6evp5bwyrrmzw5fU3U&X-Amz-Signature=3b64f3446348020893c98f3837e3e637367f21134a6a7e6b31264eb3f0417e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

