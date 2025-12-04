---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42F2SQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDlG8cQnFCKX2wv8u0Nd3YeLLEiKd%2BkQm121luz5SmpXgIgXD6ymmG2cVvJYwr0L7vvyEOCDPrlZcndPq%2BGvP5zRUQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOqCeYsdSozVg7VhSCrcA1tM5AIom6tfuOljFbaUyF%2BJehknLUdNOHYlwqEsup4ddbzh2AlYyY5v07foCG%2F%2BTZvA%2BfHJxNrGwt4HSEbBIieaB1RWDL8E5qnUktstqmB%2BOjxjq9j9%2FvS%2BwRbLpHKf%2FFByzIVIizW00LNfFeYyMdKQBr1bRqvyFuwidh1rhLeSQd0GW1tN%2BZlgYMQ%2BFKuspvq7OPUjOVLd6A3BgHyCXRd3mhcN8sSxwq2CyjcDdYvhbbEGCowAJ2QC1MOnDhaoMNHwnXzvxZ7qjEaAuoifU8vedqrt6rO3ZoyhKEcTeUoRhg%2Fj1y2qzhixxZL9k9Pjs14uhIOxzC7DhRG%2FxOE0ic7t4JCnT5Gw3IdO2V67juRdsAxk%2B9Rvud7aMztq4bD7Ezp9oza0YNGRMCp1jUJXm8dVkbz1m9aqL9N2kHP%2FOYbpLaf4RzhjI07yyK%2B176eczXD7JzgeyD%2B249yZzZ2c1%2BRd5n%2FkTnOlvjMBA%2FpoBpayW2zVfzyFl6JmlJT2XFos%2BVe4t%2Bvn42jSUjynsdAszBrnQKvdSCAWwZy14NTTvnRKD4mnU24VfQFy%2FPpEFQ341EToP%2B5yrhonXsnngDafdawcvL0XldjbTwzpDM7t8NImk4xW4JRPT%2F7JY%2BwyMPW%2BxskGOqUBWGb8coZcDTCEKYwF8om6JqDezcPnknQTakDdaHexwmkp5oXYrmlQOTgb041MKDfD3gJEWh1frTPHV0t5lbhhW7NszrtaeFQn34%2FQ7wUE1kiIz4dsRbOOJJrBrTITr8hWoO9kKQZc0qBGiywHXtKhIs95JwgAZF%2FsijbmEhyb7EOg53ScLOE%2BJBSeNu6dxHYmGSLlLVjZJTVQwY6oKf8C%2Bh0upGgx&X-Amz-Signature=00d2d72b9864bf95754ef45aa6aacf8bf669721229e5765d779b4b425c39860d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42F2SQM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDlG8cQnFCKX2wv8u0Nd3YeLLEiKd%2BkQm121luz5SmpXgIgXD6ymmG2cVvJYwr0L7vvyEOCDPrlZcndPq%2BGvP5zRUQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDOqCeYsdSozVg7VhSCrcA1tM5AIom6tfuOljFbaUyF%2BJehknLUdNOHYlwqEsup4ddbzh2AlYyY5v07foCG%2F%2BTZvA%2BfHJxNrGwt4HSEbBIieaB1RWDL8E5qnUktstqmB%2BOjxjq9j9%2FvS%2BwRbLpHKf%2FFByzIVIizW00LNfFeYyMdKQBr1bRqvyFuwidh1rhLeSQd0GW1tN%2BZlgYMQ%2BFKuspvq7OPUjOVLd6A3BgHyCXRd3mhcN8sSxwq2CyjcDdYvhbbEGCowAJ2QC1MOnDhaoMNHwnXzvxZ7qjEaAuoifU8vedqrt6rO3ZoyhKEcTeUoRhg%2Fj1y2qzhixxZL9k9Pjs14uhIOxzC7DhRG%2FxOE0ic7t4JCnT5Gw3IdO2V67juRdsAxk%2B9Rvud7aMztq4bD7Ezp9oza0YNGRMCp1jUJXm8dVkbz1m9aqL9N2kHP%2FOYbpLaf4RzhjI07yyK%2B176eczXD7JzgeyD%2B249yZzZ2c1%2BRd5n%2FkTnOlvjMBA%2FpoBpayW2zVfzyFl6JmlJT2XFos%2BVe4t%2Bvn42jSUjynsdAszBrnQKvdSCAWwZy14NTTvnRKD4mnU24VfQFy%2FPpEFQ341EToP%2B5yrhonXsnngDafdawcvL0XldjbTwzpDM7t8NImk4xW4JRPT%2F7JY%2BwyMPW%2BxskGOqUBWGb8coZcDTCEKYwF8om6JqDezcPnknQTakDdaHexwmkp5oXYrmlQOTgb041MKDfD3gJEWh1frTPHV0t5lbhhW7NszrtaeFQn34%2FQ7wUE1kiIz4dsRbOOJJrBrTITr8hWoO9kKQZc0qBGiywHXtKhIs95JwgAZF%2FsijbmEhyb7EOg53ScLOE%2BJBSeNu6dxHYmGSLlLVjZJTVQwY6oKf8C%2Bh0upGgx&X-Amz-Signature=f6d2efd067373ac84f7af0df44527439760d70166bdf747c0b0386e280136068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

