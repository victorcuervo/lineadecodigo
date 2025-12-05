---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHPNXWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiEXBZwFWf4y9SMIWzYA73wVhggdG1r7ucWthexGrLFgIgDvPs1Nj19pWXkM1S%2Bcesgy9FZs6Ux3BmPfA6seHPZpQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJx971Fg9qbjKDRNISrcA30zai6A7QYO8CumyQqzEnUrGCc6yy4IQmKiomXDSQzSA%2BM%2Ba34Wb%2FUnkFG9BIIq5BgpnS5RcJqGddhnzmYWALh1cGtO%2FLJelBErSqYCGX93VaIfqVuHcTZpINdhg52o0ZQcHV331YY3LdBLOHo1vGhgBFTzsv5UQa8iEBH%2FPugjJxo5hglQch9l%2Fy19aXPoB8xbMiC7gVq57sIUq2cvt8CiaNAGP0g6nrfY260lB8Ejt6zv3k6hdo2CmVyEghJU4QtJhWVGqOUSH5u57vYRn8xTsPS5Op%2BO%2BZ2XLHzHJp5bcFCL89nBRL29JVy7yzfilwXdriyWuDYTXdRtTozI%2FX9cTQ46jaXUrMWXNdDSVX6Roaw63DsXqLUBuLLavpmjaizNkjHGGyGyryBqm7%2FG%2FTld%2B80ogi9MX96waicdZRrScOHYSuH4wZZwyu1N1kv61DuRpui0d5kscyuXx5Lie%2FjslbHFxnu4tV%2BObSqzs37%2B9OJmowcR3mnzj55QKQ9D9U9%2FzbnQZUmFxq6QDyeRcyeFKroBYBYYSogjD9A4AGSmT47EVr%2FL%2FLqd7uhgozsstdKHXGlUxWm5Td9NWFK1Jifgwa0o0t0Mx9fqJXbw7AMtgw9JryYpeXupZpw3MPmJzckGOqUBQDxpkLZkX%2FXz0FFOGLszC061Y%2BJV0ccTAfPsqbEUDHP6czmsvmJP1dUGFpEsVqQc7n1upNeXT4pfz1ZyvViNkClIagpgmXP9y4KXewM5WYhoTpXcJnEze4aoXhNoCf6gdZ%2FvdCc0702Csoml8nnQJoRhgjcP7KaY3pgAPFeLLt6vrT8rPWKik9Q5onqRuCmOd9EtLWCKqGtcvl4BTrZOnvvugnlB&X-Amz-Signature=4315507fc7d186d341de68bc51c0e8549911862330af430c01d8309dc914d915&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKHPNXWP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiEXBZwFWf4y9SMIWzYA73wVhggdG1r7ucWthexGrLFgIgDvPs1Nj19pWXkM1S%2Bcesgy9FZs6Ux3BmPfA6seHPZpQq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJx971Fg9qbjKDRNISrcA30zai6A7QYO8CumyQqzEnUrGCc6yy4IQmKiomXDSQzSA%2BM%2Ba34Wb%2FUnkFG9BIIq5BgpnS5RcJqGddhnzmYWALh1cGtO%2FLJelBErSqYCGX93VaIfqVuHcTZpINdhg52o0ZQcHV331YY3LdBLOHo1vGhgBFTzsv5UQa8iEBH%2FPugjJxo5hglQch9l%2Fy19aXPoB8xbMiC7gVq57sIUq2cvt8CiaNAGP0g6nrfY260lB8Ejt6zv3k6hdo2CmVyEghJU4QtJhWVGqOUSH5u57vYRn8xTsPS5Op%2BO%2BZ2XLHzHJp5bcFCL89nBRL29JVy7yzfilwXdriyWuDYTXdRtTozI%2FX9cTQ46jaXUrMWXNdDSVX6Roaw63DsXqLUBuLLavpmjaizNkjHGGyGyryBqm7%2FG%2FTld%2B80ogi9MX96waicdZRrScOHYSuH4wZZwyu1N1kv61DuRpui0d5kscyuXx5Lie%2FjslbHFxnu4tV%2BObSqzs37%2B9OJmowcR3mnzj55QKQ9D9U9%2FzbnQZUmFxq6QDyeRcyeFKroBYBYYSogjD9A4AGSmT47EVr%2FL%2FLqd7uhgozsstdKHXGlUxWm5Td9NWFK1Jifgwa0o0t0Mx9fqJXbw7AMtgw9JryYpeXupZpw3MPmJzckGOqUBQDxpkLZkX%2FXz0FFOGLszC061Y%2BJV0ccTAfPsqbEUDHP6czmsvmJP1dUGFpEsVqQc7n1upNeXT4pfz1ZyvViNkClIagpgmXP9y4KXewM5WYhoTpXcJnEze4aoXhNoCf6gdZ%2FvdCc0702Csoml8nnQJoRhgjcP7KaY3pgAPFeLLt6vrT8rPWKik9Q5onqRuCmOd9EtLWCKqGtcvl4BTrZOnvvugnlB&X-Amz-Signature=0a34accb3b4affc9b8b294d84c299ef89626ebf0e2a25abc7563d1c0ee1ee93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

