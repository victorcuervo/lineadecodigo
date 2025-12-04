---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSNMQ54%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEeLjmBFP0ZARvFfQLC908mF27PAtA06OAHUbaSmO8clAiBC%2BuTh8Qu2SCTkob7DeXyp9YrE1Oi3t9YDTiPv%2FrfzYyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMclQ1E79WufWiw2YyKtwDHmdfIVGMRC8SWP%2B8F3eAV7yC7hWv8kOZn6LNKf%2FPZpq433Z1cJnPpk9YIrYXN2U0J9WdsNRhi%2BBpl32%2F1jFSXPYO5OEZ4SutBZz5qutSSosEHQngdvZylm99dNueBq9B1Vxy4tx1q3gxryfZJWr5m9LRq5%2B3la77aaf0vBjifs1i0EYP9evu83AnoKCybhkdbEhBUd7ca2Mt8JnSW%2FEa0q73VaRp3cZqse%2F34cnGPHYiKpjRYJICEBA7Ua0o8j2D11fi5pmJLcQ22MOTtaMNzkUz6n8qUSYTvzWRQBUWqz9zHqY3FO9b%2B8W1I%2BsgDdzWEGY5M6TQvVY%2Bgws8o03%2Bekp61HujhdvTRtd9qXJHcE6NT882d%2Fm3rg3yqtIJDrHhAoIbxZW1paw6EMRhyFtUeNY7DP2yCZqtvqbSsk7NeQpJu%2BKKC2ZMQGuZpJeaqfUFQ4XqNzPDSaRI5uBZSx6sKKl77T1Zq2CY09EwSq6H%2B69xyTMYpEJWYTU4eEbLRZORoJ7qspo0BtP3MSsujjHahHz2hktXnYxMCyXcXgK4Rv7FoHMIV20FMnfMKR3%2BQuyCzeJ22g4iiFoSfpI3RaxkxqGB6xA7Qox3IkLzEVGupll4KpQ8EUibN2pOaJ0wqtTDyQY6pgEFBItL2JJzjq24vsGO0vNBqEoOolM3N5wSzQ7Tvk7Odga0G%2BY%2FuWoLRACUl%2B5UX4T3YZt7sLRkObevtCMVGF28WX0bZ8iSerGAl7CDhjiGz5ideqpMDWjL4xBDwdKnw%2B9e%2FPNKREclXBL11lGzEK%2B4gY1Cw%2B3v9nKHNTOZFwy4QU%2Bg0hW38rg%2BtifsWtGhteEwXh39s9Osj%2FDTdd0HrAx9gOHFrLOs&X-Amz-Signature=db8b4560871ec27bc90abc1e21fba45531d500ca8bf1ac5e8be7ffc4c8ff70d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBSNMQ54%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T025534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIEeLjmBFP0ZARvFfQLC908mF27PAtA06OAHUbaSmO8clAiBC%2BuTh8Qu2SCTkob7DeXyp9YrE1Oi3t9YDTiPv%2FrfzYyr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMclQ1E79WufWiw2YyKtwDHmdfIVGMRC8SWP%2B8F3eAV7yC7hWv8kOZn6LNKf%2FPZpq433Z1cJnPpk9YIrYXN2U0J9WdsNRhi%2BBpl32%2F1jFSXPYO5OEZ4SutBZz5qutSSosEHQngdvZylm99dNueBq9B1Vxy4tx1q3gxryfZJWr5m9LRq5%2B3la77aaf0vBjifs1i0EYP9evu83AnoKCybhkdbEhBUd7ca2Mt8JnSW%2FEa0q73VaRp3cZqse%2F34cnGPHYiKpjRYJICEBA7Ua0o8j2D11fi5pmJLcQ22MOTtaMNzkUz6n8qUSYTvzWRQBUWqz9zHqY3FO9b%2B8W1I%2BsgDdzWEGY5M6TQvVY%2Bgws8o03%2Bekp61HujhdvTRtd9qXJHcE6NT882d%2Fm3rg3yqtIJDrHhAoIbxZW1paw6EMRhyFtUeNY7DP2yCZqtvqbSsk7NeQpJu%2BKKC2ZMQGuZpJeaqfUFQ4XqNzPDSaRI5uBZSx6sKKl77T1Zq2CY09EwSq6H%2B69xyTMYpEJWYTU4eEbLRZORoJ7qspo0BtP3MSsujjHahHz2hktXnYxMCyXcXgK4Rv7FoHMIV20FMnfMKR3%2BQuyCzeJ22g4iiFoSfpI3RaxkxqGB6xA7Qox3IkLzEVGupll4KpQ8EUibN2pOaJ0wqtTDyQY6pgEFBItL2JJzjq24vsGO0vNBqEoOolM3N5wSzQ7Tvk7Odga0G%2BY%2FuWoLRACUl%2B5UX4T3YZt7sLRkObevtCMVGF28WX0bZ8iSerGAl7CDhjiGz5ideqpMDWjL4xBDwdKnw%2B9e%2FPNKREclXBL11lGzEK%2B4gY1Cw%2B3v9nKHNTOZFwy4QU%2Bg0hW38rg%2BtifsWtGhteEwXh39s9Osj%2FDTdd0HrAx9gOHFrLOs&X-Amz-Signature=eb775fe02518aa319bf7c7bd979b56f049307d9458d3f615a7621623f27c1ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

