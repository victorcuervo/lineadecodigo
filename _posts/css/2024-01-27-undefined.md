---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJSQTLC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIE6l8qIEnojF3q3bvVXU8Jeo75TqtA5IqQRrtIGlg3cCAiEAh2uZWB4yn0nYgQp8lu7BDJBvC%2FIL6WChKTjjQtXbRFUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMKYN8FQcEige8yvmyrcAyIQ9b4raHRXPr5YRLob5VYVWpfF7z5TLuPu%2Fu2EFCUklH0rlGkO7U%2BvEEbFxUVg%2Fpc%2FNURZz6X%2FWSrvVBxtTsECBZlzB5gwi5ydWnZ5shbUGI5y%2FrWo9H4eX8hUidCba6g%2BqD0Kr9YJvEwRtQbPnfRzJB9X%2BKGqO1MwJ1W07rK9VS%2FkV%2FLtOEN990VIFwhtNNWz3ljbKcLdPRnL2w4bYJ1zbuRLeO3OPgD6twiTargTkgv99ZoR2nTG5fTj8gn5MUjNiLr3Z%2F6wAY32gcXfVxXvHIvgpQ85lQXhYrxZiPWnquEGWiUXwebKInx4w8bQ792k0%2BnWuHCs7I9MeEZrdcWmOC%2FOLTNr%2FDSAfmYx0cQB1wYV9zPYHVFMD9JEcLjGjAotkacIknFNZERC21%2BKiw%2BZVLHESVB21VV8sVXtU5zU9zxpn4kjmxAgKfjvj556EjXG8lW22oOn3wLy9yuFigvSikgJE07cxGWMRlOkiILccd%2BWOLA3ZVt5lXqAOPv6w7DpMsikSw9V0DOjsAqnZSOxg%2FKyPAYHZVzu0IE7zdDLeW9O6h26l1BpJXN%2FQd%2B%2BGzpQh3zMOhZJ5msskcBtKEd9pjjWxcTMKrZVntB23%2BGIXsetJVT9Hu1%2Fc%2FYLMOiSwMkGOqUBNgC1dSpSTK2dVikmiWnqrLJLEmR28MuAMXO3%2B8HPuMOvyhCW5kTVbwkH6DOyEgFyMuJPX3Wf2ZNsRtI3%2FSUs7JJJBEsA4aaZdlzoST7NM7q8VUR6jaivWgkJha8t77KV3JoxguMM1k5ufnFM7I68Fm8skhThG7NAD6Py8neObapnO0SnzAVr37pr%2Flr1QE9JsdHG5uZs20dX%2FczaBgtS88q6co7k&X-Amz-Signature=734b5c6c32450dc05a5d028f0a5d90d06fe10b6e4aed14af5723677ccee31c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJSQTLC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIE6l8qIEnojF3q3bvVXU8Jeo75TqtA5IqQRrtIGlg3cCAiEAh2uZWB4yn0nYgQp8lu7BDJBvC%2FIL6WChKTjjQtXbRFUq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMKYN8FQcEige8yvmyrcAyIQ9b4raHRXPr5YRLob5VYVWpfF7z5TLuPu%2Fu2EFCUklH0rlGkO7U%2BvEEbFxUVg%2Fpc%2FNURZz6X%2FWSrvVBxtTsECBZlzB5gwi5ydWnZ5shbUGI5y%2FrWo9H4eX8hUidCba6g%2BqD0Kr9YJvEwRtQbPnfRzJB9X%2BKGqO1MwJ1W07rK9VS%2FkV%2FLtOEN990VIFwhtNNWz3ljbKcLdPRnL2w4bYJ1zbuRLeO3OPgD6twiTargTkgv99ZoR2nTG5fTj8gn5MUjNiLr3Z%2F6wAY32gcXfVxXvHIvgpQ85lQXhYrxZiPWnquEGWiUXwebKInx4w8bQ792k0%2BnWuHCs7I9MeEZrdcWmOC%2FOLTNr%2FDSAfmYx0cQB1wYV9zPYHVFMD9JEcLjGjAotkacIknFNZERC21%2BKiw%2BZVLHESVB21VV8sVXtU5zU9zxpn4kjmxAgKfjvj556EjXG8lW22oOn3wLy9yuFigvSikgJE07cxGWMRlOkiILccd%2BWOLA3ZVt5lXqAOPv6w7DpMsikSw9V0DOjsAqnZSOxg%2FKyPAYHZVzu0IE7zdDLeW9O6h26l1BpJXN%2FQd%2B%2BGzpQh3zMOhZJ5msskcBtKEd9pjjWxcTMKrZVntB23%2BGIXsetJVT9Hu1%2Fc%2FYLMOiSwMkGOqUBNgC1dSpSTK2dVikmiWnqrLJLEmR28MuAMXO3%2B8HPuMOvyhCW5kTVbwkH6DOyEgFyMuJPX3Wf2ZNsRtI3%2FSUs7JJJBEsA4aaZdlzoST7NM7q8VUR6jaivWgkJha8t77KV3JoxguMM1k5ufnFM7I68Fm8skhThG7NAD6Py8neObapnO0SnzAVr37pr%2Flr1QE9JsdHG5uZs20dX%2FczaBgtS88q6co7k&X-Amz-Signature=fc3f33757d2a326b5b0735fa99c93801f20023e50da5dbdb0a22d0fe980bcb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

