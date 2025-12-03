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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TISWCHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAJmqWmmNLR3t9e%2BqXXxnjWMXQNedKnuhWjkLfSzYjdPAiAPND30SeDPY3OxtE%2BT3wyN0Xmpy%2F4isfH11%2FzSsJ9ImSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVwvLRtipqE66opw4KtwDakWE1e7cRf5awBJ1e2MCpEFXpgEMAXbIrZhal2nd4E51EwhNr6Ft3X753%2BrZUDnPPGSgmudwhXJQfXTGNI%2F%2B89JNQ9flfLkwbipjyn2PrMIO1OMFAOiPNAoQv6%2B3Chw6lLu1T5mPF9H%2B0Me41w%2FV4N9Y6yd6vYwzOlChVA0hx9hte13hVkrPFbh5GTR3TrzhiYXspvclPJAyoDVTLKozv9FkMC6CdCbuMvlyPeZoERHjSK1K4K6LKejffD6kkeSuqm2AIDKkKLeN6MHGesPBqDYikbiPJ4bjyGHe9pf5Rp0bCPp0l74dD2yI%2BvPE8L5o8m%2F30xBviz5MtEqmwANKe88C3FqHiZfI8oQpb8p4MVU7wsyZ6rArVWQ%2F1W4SxNpxz8AfPXguM9sHebrTJ98V6rlelWwMeNLDkjN7Q6AWTzHxN8lNyg0WgVxFnw44hZZhqIBvg101FS5n4kYBBF67gIUaJA031%2FTCyAmYsgqVoz0iU7K0BeyVSb5adf8XLqUslrKPVC3LxqzdmhuzIJTiFDPFY%2F892h9bUEHwEfyZ0FTFc9JMx0J3tXMtHoUMIZNSuipkSatzqlKvv%2FlokfJ6ppD9F1hz60yf8o0%2F%2FOUc%2B8xHh3QMa%2BVBDLK3MCkwkZy%2ByQY6pgFF0Liy%2BIdmA7gR78fmeJAllBw4a0lXRbs8AKez2FWVbe3d7r%2FXh1FBN1Zh3ydw8MTQdM7Qkxb%2BHj7vEuB3CJcxP8IBfP44bm5In4zesMxF6FNQ5AwtPfpSaJcYnLupHF0rGvT1Jq%2Bp4a%2Bb0X3yeUm0DgXTYy1oks79mjzAjrIb1IWkHDw%2BI6G%2F%2BwN2c0gFS%2FoGZWNb9xt8E8UJmVwg%2F5x8ofcmvjtM&X-Amz-Signature=640f48dd94180b64c1bf077779054340a57e06d78dd62b530ec400c195527835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TISWCHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAJmqWmmNLR3t9e%2BqXXxnjWMXQNedKnuhWjkLfSzYjdPAiAPND30SeDPY3OxtE%2BT3wyN0Xmpy%2F4isfH11%2FzSsJ9ImSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMVwvLRtipqE66opw4KtwDakWE1e7cRf5awBJ1e2MCpEFXpgEMAXbIrZhal2nd4E51EwhNr6Ft3X753%2BrZUDnPPGSgmudwhXJQfXTGNI%2F%2B89JNQ9flfLkwbipjyn2PrMIO1OMFAOiPNAoQv6%2B3Chw6lLu1T5mPF9H%2B0Me41w%2FV4N9Y6yd6vYwzOlChVA0hx9hte13hVkrPFbh5GTR3TrzhiYXspvclPJAyoDVTLKozv9FkMC6CdCbuMvlyPeZoERHjSK1K4K6LKejffD6kkeSuqm2AIDKkKLeN6MHGesPBqDYikbiPJ4bjyGHe9pf5Rp0bCPp0l74dD2yI%2BvPE8L5o8m%2F30xBviz5MtEqmwANKe88C3FqHiZfI8oQpb8p4MVU7wsyZ6rArVWQ%2F1W4SxNpxz8AfPXguM9sHebrTJ98V6rlelWwMeNLDkjN7Q6AWTzHxN8lNyg0WgVxFnw44hZZhqIBvg101FS5n4kYBBF67gIUaJA031%2FTCyAmYsgqVoz0iU7K0BeyVSb5adf8XLqUslrKPVC3LxqzdmhuzIJTiFDPFY%2F892h9bUEHwEfyZ0FTFc9JMx0J3tXMtHoUMIZNSuipkSatzqlKvv%2FlokfJ6ppD9F1hz60yf8o0%2F%2FOUc%2B8xHh3QMa%2BVBDLK3MCkwkZy%2ByQY6pgFF0Liy%2BIdmA7gR78fmeJAllBw4a0lXRbs8AKez2FWVbe3d7r%2FXh1FBN1Zh3ydw8MTQdM7Qkxb%2BHj7vEuB3CJcxP8IBfP44bm5In4zesMxF6FNQ5AwtPfpSaJcYnLupHF0rGvT1Jq%2Bp4a%2Bb0X3yeUm0DgXTYy1oks79mjzAjrIb1IWkHDw%2BI6G%2F%2BwN2c0gFS%2FoGZWNb9xt8E8UJmVwg%2F5x8ofcmvjtM&X-Amz-Signature=41eed3817151d4cf5e5c1c92c09316d7e45821d41b30f5459f6facdaaa5b1ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

