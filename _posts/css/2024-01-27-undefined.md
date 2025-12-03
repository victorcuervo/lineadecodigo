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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7MUB7D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCS2LXGpW6zGCuxvKQZLdn9eY88NXCKYtOh15ECNMe1ZgIhAP78rK%2FDi7t6Wuqik8KTzZ9I1xw43XC%2FNsNEb1QfC9qMKv8DCCIQABoMNjM3NDIzMTgzODA1IgxdnP98PiF9LaXEGmUq3ANGxCRqXSnnfiFTW8Ae2BDwNSGan8KfRSySFojbZARIOKZDoRFdZLeumRwvJHAwThPh8pHL%2FIk9rEJbcd9YcIp6HE0le3S3iE13weuSbLhiJMi0ImfKIOYz82O2jHIaxx77d0OmC9zM7P1uJjumPpDthEAsPRNVZrnzrPGiFhM2HOahaKm9tB4cKkdGuJmObna79YZhsZjQ5W7DbfHOKg%2BJvhTVvM9qgSPGHME2wQyFQmiDsE6MSjzHE1%2FQnn1QadghlA6ow4oZWsstKu1bqRwWOz2JddmiIJaw%2FZgBPKIaUo2NDN45%2FkTRSopD%2FCzcVuQWNGMmWzIWEOduJYNU6sQLUJlHtzXWILWYBEcMEP%2F9guwE2kZQg32s3RPpc0DaFmSuY6FmDdSdn1PSPp7oD9Qbc7EAmN%2FS8Fr3rbeDDf02UVVd4n7SfiwkQmZSZNKjRrIA65S0RFMV4VVnAh8csfTN76CrlEYFG69Vy08akVJ4YoacDD1AIuedkJ0aE1Ku7o0CLmaSIamEBToDz9qqpL0UTv4PDuHzsfK6LykWbWLbc0OthqqAliwxfhJ%2FzB2f6Lx1A0RhCFCIZlFjddFn46AYDW27LfFFh4QPsOTbULDimAQnom7kqiZn38VuUDCwlL7JBjqkAcZ5z1r8jbWAeQ4X4GnnSpvibkxCY10GSZAzhs%2FqhsIo38UZsgb9j3kUY6dEPMeFTDfCicboqsjVdMHP1s12SEgSx5blPFQtbyUFrVdkqgS%2BAX26W1Ch4tZA6HKn3rERU%2B2mPXtrq4ITLsVkIdezFMLwuaue8ZusNpyPnRvB10hnT0hl6pfHWt4dWuc0qSwOC4Rm3IuX6WrJeG7cMwsD3gch%2BISM&X-Amz-Signature=ff77e2c288f5d50af2ae90b9ca3c1e45fe17effe74535ecb98e4c9d23a772f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP7MUB7D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T034253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCS2LXGpW6zGCuxvKQZLdn9eY88NXCKYtOh15ECNMe1ZgIhAP78rK%2FDi7t6Wuqik8KTzZ9I1xw43XC%2FNsNEb1QfC9qMKv8DCCIQABoMNjM3NDIzMTgzODA1IgxdnP98PiF9LaXEGmUq3ANGxCRqXSnnfiFTW8Ae2BDwNSGan8KfRSySFojbZARIOKZDoRFdZLeumRwvJHAwThPh8pHL%2FIk9rEJbcd9YcIp6HE0le3S3iE13weuSbLhiJMi0ImfKIOYz82O2jHIaxx77d0OmC9zM7P1uJjumPpDthEAsPRNVZrnzrPGiFhM2HOahaKm9tB4cKkdGuJmObna79YZhsZjQ5W7DbfHOKg%2BJvhTVvM9qgSPGHME2wQyFQmiDsE6MSjzHE1%2FQnn1QadghlA6ow4oZWsstKu1bqRwWOz2JddmiIJaw%2FZgBPKIaUo2NDN45%2FkTRSopD%2FCzcVuQWNGMmWzIWEOduJYNU6sQLUJlHtzXWILWYBEcMEP%2F9guwE2kZQg32s3RPpc0DaFmSuY6FmDdSdn1PSPp7oD9Qbc7EAmN%2FS8Fr3rbeDDf02UVVd4n7SfiwkQmZSZNKjRrIA65S0RFMV4VVnAh8csfTN76CrlEYFG69Vy08akVJ4YoacDD1AIuedkJ0aE1Ku7o0CLmaSIamEBToDz9qqpL0UTv4PDuHzsfK6LykWbWLbc0OthqqAliwxfhJ%2FzB2f6Lx1A0RhCFCIZlFjddFn46AYDW27LfFFh4QPsOTbULDimAQnom7kqiZn38VuUDCwlL7JBjqkAcZ5z1r8jbWAeQ4X4GnnSpvibkxCY10GSZAzhs%2FqhsIo38UZsgb9j3kUY6dEPMeFTDfCicboqsjVdMHP1s12SEgSx5blPFQtbyUFrVdkqgS%2BAX26W1Ch4tZA6HKn3rERU%2B2mPXtrq4ITLsVkIdezFMLwuaue8ZusNpyPnRvB10hnT0hl6pfHWt4dWuc0qSwOC4Rm3IuX6WrJeG7cMwsD3gch%2BISM&X-Amz-Signature=40e0b38acd19206ae4246b3161b8f461463867591a127d948e229ac0ab0f5435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

