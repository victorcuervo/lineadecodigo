---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD33WV3A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFts4NtwVrd5iH7BXKw%2Fjj8VuF6YTBdy1JWf%2B5v1ZXdAiBH1o0eXcX0qO6RpPrvvYQ7I40ZgS6SJiH2ldwHgUw%2Bbyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM47c%2BKi13Uj0bvR%2B1KtwDR1AbZUAkSEcEz%2F7XbGPhSUc1%2Finrsz9D29fDsSSw%2BAn%2BhrHumBQ%2BLWiFHZInhhHQ5oysGB%2BvlJ%2BwSHwEl1ISOSyV4jN7niL8jPjD4bAeaWenmGKNuN0mJYIJ2Sk5AwAad0KDC%2BmzIalxQe1ar0TTi0Y8EYEhZzhld7ObT61jV7oFJD99ivP1XrxajAgD43%2F39R8vJl8RYLGl9%2BqbmY5qNk04MZgRVmZ91MqEPrIVZHBDwMdAbXxbyFiOmiTbjnUXvkjYkOzrxDBcRzlbcgo1z18kTw2NhTjaGmDkx0JBXPcvnNq8YRT6IYyV7%2FWO2nwnQIVAt14FQy6UYH42RmuIX2Z6BjCJqEmjb%2BLN52X7Sgbv8pXN%2BspRnV3waGP9e0dT93RgvU%2BO6YFY%2FZQcYp2CuI%2FrCXEQFd7F9nl8HQXIkctxZIOwzUPvHyH8pkR0h0BcqA2Jn2TS4oD4uxQgu%2BJu%2BGgr2drIO61JX7YatptLbGUDgyh98BQdCodP02sDkbmDzkRZwjFex1wIPMZZVfrEufLtDoeBbFxchYpqvtHWEdiY7iNu%2BYHmhHtEKytl5tEf25Jw2ZhQixBq7IJruGq11%2BYLdDgzFgV8nUuMcLHZan3u9XXUuZgnOyX6BtUwg%2BnLyQY6pgH6jl%2BhImbrR%2Baij%2BofalEKzYWSLGkJSTuLjkrpGTBK9zf9%2BibDUh%2BOVQ2%2FD%2Bg%2BrdbDtTqb%2BRdrCaiAhwHB1OugVo46jWZZpjqQBbnmUKirCz3CtCRQT5RuSNErkmuEETJRRDPj0b1lvXBqUsg%2BdfZpenU7wQyuZ4%2BRCHz%2BvPcTIXEUfu85OHVDZR%2BRNYJDsEywXmqyFni9%2BRsm%2B76LtQDtOtWIbmm3&X-Amz-Signature=41bee2e56c00c2d41330dc856f537abf66b0e67829f441d5bf538a170d70becd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD33WV3A%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICFts4NtwVrd5iH7BXKw%2Fjj8VuF6YTBdy1JWf%2B5v1ZXdAiBH1o0eXcX0qO6RpPrvvYQ7I40ZgS6SJiH2ldwHgUw%2Bbyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM47c%2BKi13Uj0bvR%2B1KtwDR1AbZUAkSEcEz%2F7XbGPhSUc1%2Finrsz9D29fDsSSw%2BAn%2BhrHumBQ%2BLWiFHZInhhHQ5oysGB%2BvlJ%2BwSHwEl1ISOSyV4jN7niL8jPjD4bAeaWenmGKNuN0mJYIJ2Sk5AwAad0KDC%2BmzIalxQe1ar0TTi0Y8EYEhZzhld7ObT61jV7oFJD99ivP1XrxajAgD43%2F39R8vJl8RYLGl9%2BqbmY5qNk04MZgRVmZ91MqEPrIVZHBDwMdAbXxbyFiOmiTbjnUXvkjYkOzrxDBcRzlbcgo1z18kTw2NhTjaGmDkx0JBXPcvnNq8YRT6IYyV7%2FWO2nwnQIVAt14FQy6UYH42RmuIX2Z6BjCJqEmjb%2BLN52X7Sgbv8pXN%2BspRnV3waGP9e0dT93RgvU%2BO6YFY%2FZQcYp2CuI%2FrCXEQFd7F9nl8HQXIkctxZIOwzUPvHyH8pkR0h0BcqA2Jn2TS4oD4uxQgu%2BJu%2BGgr2drIO61JX7YatptLbGUDgyh98BQdCodP02sDkbmDzkRZwjFex1wIPMZZVfrEufLtDoeBbFxchYpqvtHWEdiY7iNu%2BYHmhHtEKytl5tEf25Jw2ZhQixBq7IJruGq11%2BYLdDgzFgV8nUuMcLHZan3u9XXUuZgnOyX6BtUwg%2BnLyQY6pgH6jl%2BhImbrR%2Baij%2BofalEKzYWSLGkJSTuLjkrpGTBK9zf9%2BibDUh%2BOVQ2%2FD%2Bg%2BrdbDtTqb%2BRdrCaiAhwHB1OugVo46jWZZpjqQBbnmUKirCz3CtCRQT5RuSNErkmuEETJRRDPj0b1lvXBqUsg%2BdfZpenU7wQyuZ4%2BRCHz%2BvPcTIXEUfu85OHVDZR%2BRNYJDsEywXmqyFni9%2BRsm%2B76LtQDtOtWIbmm3&X-Amz-Signature=2ab80f8219274531b1502edc9b56109cf599caa98874eed46b1fa977f57e6056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

