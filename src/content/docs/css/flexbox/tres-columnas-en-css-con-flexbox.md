---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULSNMQC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCcgOiesR5kdwu8dWVOSyd7R1OPqptJVqYGxKsRMM8FcgIgKdS%2FAGirwmhGtfTqrreVMvqJWGkUg1Qke2paW0Xhllgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNfssDh3oYVH9FTuEyrcAyUh6JpxlNpj9HZzBmmOtcXgsj3bFvzBvoYoNE1y1Xm%2FqUV%2BNzBz5suVk3SLBZfSH%2BlY%2FwT76zsfQUwAy4d3TtbB7DkO6HvpxG%2BevDC2jkNy%2FLB5vN6SH9fxd0dMPLEx%2B3BdIpRhv14EUuFKgIz2CS2rThZlkOC1172Ojqs8TXapDGpKrbD1uJUjGXsO%2BMoQ9nZvAx8PzrlICtwmkfkYmB%2FqIVNuESi5FZXOcNjTJBNGUTeKOkqqXyB8%2Fxq2X3krkFt%2B9Fd0gxfloTQ%2FlSqSpE5mAByKQcjV7o%2BputUQSNCF%2BOEfAdPOLcqRUht7AvpTh8ix4PAp8dQJrBniDdck6LTo%2BICauME70EN%2FcUm69S1yJBrUr6SkYuaZXJlngGc8Ylc0IZyLwEo%2B%2FJBCpMncT3Tyuk%2Flv2GoFI2dwNBe8vGKyx5rCt75SOVdUqSbEjJSV5vx0jC7gOecBRy25dAPHROSzqWpCEch7UecqR9lessE9HyQZUWJQdOHd0yCY2%2B5G3gkMTBWtQ1dCER8iWse5518PbjXVQMyuJUjZq7JJfY6AnAeN%2BcrXd6QiN17buoSHaQkPArKofOZW3OA9SMWxeXuFzS8rfDg7n%2FQUpnJ73ppBBLRkbdVib%2B21iG%2FMMaExskGOqUB5Y5qlQVuPnufNltjqv%2B4Wn7y8Gckar7t2n%2BIhVRe%2Bi7IqpRcW9yyY0%2B0Tq9ydoAeUBVD7xKQTpvb4jN1OIsZNjJv%2B9RPcFrDDz4yfbjH4G00K5CTQXc8Siao3SUqCCT1IzwUffcsEif%2BK5OWV6apZtynK5kUApkNUcEVIRsr3aCdbYzCY1bNox5CJISus9sfAnjXtqf1REpMKMsYfYN1VQlASh3G&X-Amz-Signature=00ae382f36c0240e750bd33998ed64e6f8502c671d09eae003ca5b9a424d7eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULSNMQC%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCcgOiesR5kdwu8dWVOSyd7R1OPqptJVqYGxKsRMM8FcgIgKdS%2FAGirwmhGtfTqrreVMvqJWGkUg1Qke2paW0Xhllgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNfssDh3oYVH9FTuEyrcAyUh6JpxlNpj9HZzBmmOtcXgsj3bFvzBvoYoNE1y1Xm%2FqUV%2BNzBz5suVk3SLBZfSH%2BlY%2FwT76zsfQUwAy4d3TtbB7DkO6HvpxG%2BevDC2jkNy%2FLB5vN6SH9fxd0dMPLEx%2B3BdIpRhv14EUuFKgIz2CS2rThZlkOC1172Ojqs8TXapDGpKrbD1uJUjGXsO%2BMoQ9nZvAx8PzrlICtwmkfkYmB%2FqIVNuESi5FZXOcNjTJBNGUTeKOkqqXyB8%2Fxq2X3krkFt%2B9Fd0gxfloTQ%2FlSqSpE5mAByKQcjV7o%2BputUQSNCF%2BOEfAdPOLcqRUht7AvpTh8ix4PAp8dQJrBniDdck6LTo%2BICauME70EN%2FcUm69S1yJBrUr6SkYuaZXJlngGc8Ylc0IZyLwEo%2B%2FJBCpMncT3Tyuk%2Flv2GoFI2dwNBe8vGKyx5rCt75SOVdUqSbEjJSV5vx0jC7gOecBRy25dAPHROSzqWpCEch7UecqR9lessE9HyQZUWJQdOHd0yCY2%2B5G3gkMTBWtQ1dCER8iWse5518PbjXVQMyuJUjZq7JJfY6AnAeN%2BcrXd6QiN17buoSHaQkPArKofOZW3OA9SMWxeXuFzS8rfDg7n%2FQUpnJ73ppBBLRkbdVib%2B21iG%2FMMaExskGOqUB5Y5qlQVuPnufNltjqv%2B4Wn7y8Gckar7t2n%2BIhVRe%2Bi7IqpRcW9yyY0%2B0Tq9ydoAeUBVD7xKQTpvb4jN1OIsZNjJv%2B9RPcFrDDz4yfbjH4G00K5CTQXc8Siao3SUqCCT1IzwUffcsEif%2BK5OWV6apZtynK5kUApkNUcEVIRsr3aCdbYzCY1bNox5CJISus9sfAnjXtqf1REpMKMsYfYN1VQlASh3G&X-Amz-Signature=9fe15e0f91b06ae3eb31c6571026d7a3bd7a954d15396190b51e251363c19a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

