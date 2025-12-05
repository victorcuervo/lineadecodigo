---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WCV72D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrae0P5aq%2BL3dpBuHWzi3KMD6J1JNExmqMTYE9TV%2FHAIhAK4HYvemcRGXivU%2FPFeN2d35JTs%2FQWEDmk%2FwfrEhCUTTKv8DCGEQABoMNjM3NDIzMTgzODA1Igx%2BTwJ%2F%2FvCLOMepjE8q3AM4WLlrM65ezxeldS3bVpahTGCf0a%2FxybIEX2OdLMMah6I7nto%2FEIZauhXct0qzw2qrP2SEO8wHGSQ4VvOtSaPVeOxwivq3eJKaPvsQ7RCSGoNbIOytBYvuQBsoOJDG%2FylqCxtkqyOgL%2BWD27RUg%2BbN8yXpN1tPHtc8Fm5mNDR93Bno%2B%2BgYShTQByE87Y8%2FucD%2FZXLSfbRRheXQb0y%2BqEc%2F%2BGY%2FPg4ZdFDvLGxqImhWHNnnU6IQiSkT1i5KWs%2BCefrXag1YX2QE04XpGgjNiTYMW5LoW8fzvIj25TyDoIN0QxK5uT4cX%2F4Ubs4k0RdacmWtg5mcZscCpQOfUkJMPxhziuWS55rVFAwrKhVbVne3LOqOjhEWVkba2NlGNH3WBWN1wHAcRd%2B5BQohMVSK%2BqHeABti8MSQXn9h0mGNasDQ5IABS6gIrMI6FDObUxtQVgfyED7CeCSuWw49O1%2FIwmveXUOjp23HCrcA2Vi5o%2FI1XS3JLVVfnMdaOcbWaS0s7dtFv1f4AU6304lKCT3qQBtRTK0%2Fg3Gbsh%2FfxZwkSKh6dVkfairU%2BeF%2BnrMvWeKLkXU9EFSnysKjoKCntezxXkuFQs8F3gpgHZ%2FLcgkLGBOhoOgQBUkFzLRmI4t2%2BjCl8svJBjqkAfufDNfeH%2BnTSYn23IWIkLKWHXjtJkPL3q0py7wHkEuLRubtQHHxpsp3NYDwfbCNn5KtD11B%2BPAd2vI0A4b4jx8rhx7VqO%2FKx3y21tNwMkwgLFOuIQii3HMNjGQSxfweew1dZz2zB3Gi0tJ8wb6DT2ygZwt%2Bi9GO5szPTMVj4jkeK2RxAsT49QPZWOhPViWRMPnbWhjrNWEdYcGHDt6HnZKwOoFA&X-Amz-Signature=2b7a3c810f2e8f06e96ec8b801961436bb5f04409022fefecdfb14f656e12bd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WCV72D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T181737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrae0P5aq%2BL3dpBuHWzi3KMD6J1JNExmqMTYE9TV%2FHAIhAK4HYvemcRGXivU%2FPFeN2d35JTs%2FQWEDmk%2FwfrEhCUTTKv8DCGEQABoMNjM3NDIzMTgzODA1Igx%2BTwJ%2F%2FvCLOMepjE8q3AM4WLlrM65ezxeldS3bVpahTGCf0a%2FxybIEX2OdLMMah6I7nto%2FEIZauhXct0qzw2qrP2SEO8wHGSQ4VvOtSaPVeOxwivq3eJKaPvsQ7RCSGoNbIOytBYvuQBsoOJDG%2FylqCxtkqyOgL%2BWD27RUg%2BbN8yXpN1tPHtc8Fm5mNDR93Bno%2B%2BgYShTQByE87Y8%2FucD%2FZXLSfbRRheXQb0y%2BqEc%2F%2BGY%2FPg4ZdFDvLGxqImhWHNnnU6IQiSkT1i5KWs%2BCefrXag1YX2QE04XpGgjNiTYMW5LoW8fzvIj25TyDoIN0QxK5uT4cX%2F4Ubs4k0RdacmWtg5mcZscCpQOfUkJMPxhziuWS55rVFAwrKhVbVne3LOqOjhEWVkba2NlGNH3WBWN1wHAcRd%2B5BQohMVSK%2BqHeABti8MSQXn9h0mGNasDQ5IABS6gIrMI6FDObUxtQVgfyED7CeCSuWw49O1%2FIwmveXUOjp23HCrcA2Vi5o%2FI1XS3JLVVfnMdaOcbWaS0s7dtFv1f4AU6304lKCT3qQBtRTK0%2Fg3Gbsh%2FfxZwkSKh6dVkfairU%2BeF%2BnrMvWeKLkXU9EFSnysKjoKCntezxXkuFQs8F3gpgHZ%2FLcgkLGBOhoOgQBUkFzLRmI4t2%2BjCl8svJBjqkAfufDNfeH%2BnTSYn23IWIkLKWHXjtJkPL3q0py7wHkEuLRubtQHHxpsp3NYDwfbCNn5KtD11B%2BPAd2vI0A4b4jx8rhx7VqO%2FKx3y21tNwMkwgLFOuIQii3HMNjGQSxfweew1dZz2zB3Gi0tJ8wb6DT2ygZwt%2Bi9GO5szPTMVj4jkeK2RxAsT49QPZWOhPViWRMPnbWhjrNWEdYcGHDt6HnZKwOoFA&X-Amz-Signature=dfe31da4e0cfda38f194a5ce0ac86b5b0d1ae5fb3a5b30a1a1d80f18e3a2ae8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

