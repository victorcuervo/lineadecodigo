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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6B5J73%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDPNNrU97HeARIa1fvxplAlEBKxumCRcc546L7LB%2BHFzwIhAK3VxAmVFX6HGFvIwQjR%2FWQrCi%2B470Un9%2BJgLCaatPu%2FKv8DCCIQABoMNjM3NDIzMTgzODA1IgzqjcJjZvZoN5zMOMEq3AOvmUwcSTfotXrmzgYtIpuG8MCFs%2BO%2BQeaaBb%2FOcqu8I4p%2B2G0U9vBlHkLss79x6ugBVNE84U90dnHcyLgpJvlXp3ImbyESMfKoJHJJzkIpEkLiLp%2B7UYLgdgm%2B7y1ieK90hsJRJI%2BAooYAG1DshATM5ZWV24aBUs2sWWVeU%2F6Xlcf0iFvWHlHF61Y7oDajOmtT9SYQzmMl08j5Is7cwfskL%2BYpL4%2Bhf0C0a4tK1pUka5DouXj3CGXONLeuX9UAOzwPjxgpe9wbxg2WKY0EqwEFRX%2FZx%2B8M77PyuLzORtlt3jhy1Ex3Sua4P0%2BCuzFYMtIIfzRnaQ8jK5jqFdbKun8HjVO108eb3CPdAPsVHSWuXkYbbDyRIZvgitlLOyopfaJjVwkKJxQt4UT6HrNJ24Qj0VjGB7uSKdpye6hC18nQRxoAtptpwWZ8urXVn%2B10cej6U4StF00KCsBVhhgHNNpM9QDNgEhUOko%2BUQtlB8FakGQIDovggEWtEH%2FyROUcoIS0Htch%2F3M8JreoIt%2FwrW842iH41MWsRFQOa5WyM2VnGpao3PlM5GkoT6hwHdrIB%2BMEPScCThZYGnODWOxRf6Gan2MdK%2BOJERTiYNG0ajQtzSTj%2B7iH1DUJ6HkFZjCplL7JBjqkAXYPUlpk6kXQJqh9MA5fpelWa67Bm7ckF%2FPqYAlRC8lNhcAJtG6NrgwotFCiZM7NcVZ2fYEsYgsF%2FaaYOXk3e6qOZiE1aRxu4EjSpjkNQCMIIXtU0PzVq4xHFM1jwVP86CrMH5HYeeNPc5HdqG0ApPq7%2FNBmU0ADKrjmt%2BEUog%2FYKmXIkiBgnfXp%2BaedNPFGydGfWTjCP5aj5vAI6VcCNp1f5ehX&X-Amz-Signature=e31025a98e2dc880a60481f939b42f5955e9e222a5a415bc47d2fa0a5ee7a4e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XG6B5J73%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDPNNrU97HeARIa1fvxplAlEBKxumCRcc546L7LB%2BHFzwIhAK3VxAmVFX6HGFvIwQjR%2FWQrCi%2B470Un9%2BJgLCaatPu%2FKv8DCCIQABoMNjM3NDIzMTgzODA1IgzqjcJjZvZoN5zMOMEq3AOvmUwcSTfotXrmzgYtIpuG8MCFs%2BO%2BQeaaBb%2FOcqu8I4p%2B2G0U9vBlHkLss79x6ugBVNE84U90dnHcyLgpJvlXp3ImbyESMfKoJHJJzkIpEkLiLp%2B7UYLgdgm%2B7y1ieK90hsJRJI%2BAooYAG1DshATM5ZWV24aBUs2sWWVeU%2F6Xlcf0iFvWHlHF61Y7oDajOmtT9SYQzmMl08j5Is7cwfskL%2BYpL4%2Bhf0C0a4tK1pUka5DouXj3CGXONLeuX9UAOzwPjxgpe9wbxg2WKY0EqwEFRX%2FZx%2B8M77PyuLzORtlt3jhy1Ex3Sua4P0%2BCuzFYMtIIfzRnaQ8jK5jqFdbKun8HjVO108eb3CPdAPsVHSWuXkYbbDyRIZvgitlLOyopfaJjVwkKJxQt4UT6HrNJ24Qj0VjGB7uSKdpye6hC18nQRxoAtptpwWZ8urXVn%2B10cej6U4StF00KCsBVhhgHNNpM9QDNgEhUOko%2BUQtlB8FakGQIDovggEWtEH%2FyROUcoIS0Htch%2F3M8JreoIt%2FwrW842iH41MWsRFQOa5WyM2VnGpao3PlM5GkoT6hwHdrIB%2BMEPScCThZYGnODWOxRf6Gan2MdK%2BOJERTiYNG0ajQtzSTj%2B7iH1DUJ6HkFZjCplL7JBjqkAXYPUlpk6kXQJqh9MA5fpelWa67Bm7ckF%2FPqYAlRC8lNhcAJtG6NrgwotFCiZM7NcVZ2fYEsYgsF%2FaaYOXk3e6qOZiE1aRxu4EjSpjkNQCMIIXtU0PzVq4xHFM1jwVP86CrMH5HYeeNPc5HdqG0ApPq7%2FNBmU0ADKrjmt%2BEUog%2FYKmXIkiBgnfXp%2BaedNPFGydGfWTjCP5aj5vAI6VcCNp1f5ehX&X-Amz-Signature=70ed50361a637b937afab61b3dc131f9a5d651287e19d328922db1bb98f3a2c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

