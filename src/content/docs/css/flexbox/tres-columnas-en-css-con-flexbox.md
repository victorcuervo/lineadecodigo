---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNWVXQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaB3XixBQjywGoOxJRaUviT4bx4E30ctTIs6juXhyEjgIhAIT27wWwkzPgZ60DI%2BmqM0%2FEi1UBlJAn98V7UM%2FVwfPYKv8DCGsQABoMNjM3NDIzMTgzODA1Igy3h6sRuC92pSqjukkq3APxUD7G%2BxwTDTZG7wFmFOFhVn%2Bzs8OVSoc1re83iZkDgbgx01SV8lwHmEvI7aR3EqcprrseyxdXSDoMcQ6%2BGA1J%2B7ARgXTrmkDfOYkG3ndXgZJ1IpoaOF%2FgrAzmcBwetFsDGWZyiv39X7hhK%2Fh0JEG3bYVCbg7lIHVJk%2FK58ZoZ3%2FBpG2gI9LUdYtR4I0CoZ3H6tM6yTbpZWq4qPvVoTtW%2FRFEcLLNdUGIrFeJ8HKl0Dh2GwbMF2GOBjzjrXWM845%2BYUoSItiOR0Lg51mcn5Ln2l8WLGXkxFeREeA%2B%2BMTqdZoM%2B06E6yhdyFZDRXdq8b5fHKoUVPvq0y%2BB%2FpPrvQEB0oRaJnApTwO4YZ4d%2FNp6PH0kaGuy%2BgBhD3ZIUFSxKegw%2FBKN5mZQ94IohZB%2Bp%2BUhqqtCg6QebOh01YBiqrbwTw9Y%2BBXAOmadzFXVPaZVJCmkoBN227hgM85S9JANdGl6ra6MJDwrENtXi0QUqDFeFboid2yNO5ZGaSCxhWFZ1N4ny36Lpsc0gFo62jgroFZassUqPWrT3LZwliKDARlVBUmBaXhpuYTpUnnpApAOkBZ87lzK6jhSUxJZWP7RV%2BOexsVas8%2Fb8sOZeWyRAg0xvi1Mno2oTassZpW%2FmeDDIp87JBjqkAfTIl6Adesxw4iXtl3XaKfRXAnkZ5GvcroTcKpgvzjazG9CbWLDt%2Fn8SU%2Fej9YfcjrLcRnyxbQ3vL35pTt%2B885ce%2FZQNKKz9iOzzYQgIwPsTWyzHOjnzzUMZGWDA1pAkF0DjHLQu6%2FW5EgkDeQ%2BlYbyD7WwXbgzHwt857NcxBCwpWwuqiTXvvyxdHHoXzI5vfWURgBLpprB8HRHOiQQoxF2gcIh3&X-Amz-Signature=2477d9db840030713e9dfbbe0e4fc32f1da87a0c558f7224be67f35ac5b11338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDNWVXQS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaB3XixBQjywGoOxJRaUviT4bx4E30ctTIs6juXhyEjgIhAIT27wWwkzPgZ60DI%2BmqM0%2FEi1UBlJAn98V7UM%2FVwfPYKv8DCGsQABoMNjM3NDIzMTgzODA1Igy3h6sRuC92pSqjukkq3APxUD7G%2BxwTDTZG7wFmFOFhVn%2Bzs8OVSoc1re83iZkDgbgx01SV8lwHmEvI7aR3EqcprrseyxdXSDoMcQ6%2BGA1J%2B7ARgXTrmkDfOYkG3ndXgZJ1IpoaOF%2FgrAzmcBwetFsDGWZyiv39X7hhK%2Fh0JEG3bYVCbg7lIHVJk%2FK58ZoZ3%2FBpG2gI9LUdYtR4I0CoZ3H6tM6yTbpZWq4qPvVoTtW%2FRFEcLLNdUGIrFeJ8HKl0Dh2GwbMF2GOBjzjrXWM845%2BYUoSItiOR0Lg51mcn5Ln2l8WLGXkxFeREeA%2B%2BMTqdZoM%2B06E6yhdyFZDRXdq8b5fHKoUVPvq0y%2BB%2FpPrvQEB0oRaJnApTwO4YZ4d%2FNp6PH0kaGuy%2BgBhD3ZIUFSxKegw%2FBKN5mZQ94IohZB%2Bp%2BUhqqtCg6QebOh01YBiqrbwTw9Y%2BBXAOmadzFXVPaZVJCmkoBN227hgM85S9JANdGl6ra6MJDwrENtXi0QUqDFeFboid2yNO5ZGaSCxhWFZ1N4ny36Lpsc0gFo62jgroFZassUqPWrT3LZwliKDARlVBUmBaXhpuYTpUnnpApAOkBZ87lzK6jhSUxJZWP7RV%2BOexsVas8%2Fb8sOZeWyRAg0xvi1Mno2oTassZpW%2FmeDDIp87JBjqkAfTIl6Adesxw4iXtl3XaKfRXAnkZ5GvcroTcKpgvzjazG9CbWLDt%2Fn8SU%2Fej9YfcjrLcRnyxbQ3vL35pTt%2B885ce%2FZQNKKz9iOzzYQgIwPsTWyzHOjnzzUMZGWDA1pAkF0DjHLQu6%2FW5EgkDeQ%2BlYbyD7WwXbgzHwt857NcxBCwpWwuqiTXvvyxdHHoXzI5vfWURgBLpprB8HRHOiQQoxF2gcIh3&X-Amz-Signature=ebf5ac77fc435929012662e83262ef850a324c0491ddd7ad198785373705c438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

