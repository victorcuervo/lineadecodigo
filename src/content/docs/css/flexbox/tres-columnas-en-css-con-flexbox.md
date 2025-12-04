---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVSTOCV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGb0TP8xIOEy3g3ZKOjV94HHWW4OEshQ9yQmWmeJRETEAiAuWZdXYh5J5CG%2BWqPd%2FHIvfV60l1z9j%2F5aSQ9DDL%2BsxSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzO8sXKnNMdaxnz0KKtwDraLYZ8wRXuJIr3bosokmSrcwu4mz4FK%2BIfXnHeAJNatMDbOgHop1eqyNGifsfLWcQbM0%2FpnuFbVNty%2BdovatPGk%2FJTNx7ogN9whNyONvstkKY44j1%2B2KQwVxe7jLai39JzG1%2BjDZTSzNLaga1Tl3Xta%2FR8FKyuMM2%2BoHppe5IfjPKB7LjGNxNZhTF1F%2F7BKDlL2BEuUlCuILcSlD5dsAt5juWKf7yF0Vwj4L1Rr5pcqfVJM9UpDPvTByggibq8WVViTSSPOEfzNHC%2BEy92VtK9NPy5Mg2uIJjHlJZfikoYqezc2vytNRjLauFY8Ig3v2C5DDdIl8CgpmJuEPLFj83gtwYx7xjXZ0dMCQM183LMCtofoUliPX9bQRoE5L7WkN9ec%2F6u59FYdv3lyyMbounLAbY6ExJAfM%2BXwgNpIwfLrcYTCfyMWuTbRbaHMnefjwBYU03y%2FpXRo8XzWs7GApuK6y4J%2B3QR0P%2B9RshkbH9sHGIE59R0XToieX7LT6V90oaXax761%2FG9SFyMXhViL3JytrFZ5KizdTQB13OJgD83fsxHewX%2B7mCwkO08GjGuFNGLGk9WTcGVo%2BqF97Yy4WUfqDTtR5kRdAO%2FgI4nevBHUwHoTb4T%2Bp74TtTwgwzKDGyQY6pgGex9s7bo%2FGlk%2FEuO7a%2FSuJiPsGg8PVGvsUSbzvxVDPpQpzWN7BK7%2FFfZc58A1Fi4CJYkxePlzu48kHi8Oky%2FqI89XyY5vL47NDCECE926khUejGHX%2Brc39nLumZmQZq4TscViKusnq6qcw9d2fHXCYMXcmstcPBdiObtOw42bJUc1jn%2BvIWmcSZtBymVplBMg%2FSUxwAaOLagN1yCUXYFVKIRj6ncOX&X-Amz-Signature=044a2a0fc4bb486b4dacccfa11bd2ae58f086ee0b69e0c743e36c506b55dd2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BVSTOCV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGb0TP8xIOEy3g3ZKOjV94HHWW4OEshQ9yQmWmeJRETEAiAuWZdXYh5J5CG%2BWqPd%2FHIvfV60l1z9j%2F5aSQ9DDL%2BsxSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMzO8sXKnNMdaxnz0KKtwDraLYZ8wRXuJIr3bosokmSrcwu4mz4FK%2BIfXnHeAJNatMDbOgHop1eqyNGifsfLWcQbM0%2FpnuFbVNty%2BdovatPGk%2FJTNx7ogN9whNyONvstkKY44j1%2B2KQwVxe7jLai39JzG1%2BjDZTSzNLaga1Tl3Xta%2FR8FKyuMM2%2BoHppe5IfjPKB7LjGNxNZhTF1F%2F7BKDlL2BEuUlCuILcSlD5dsAt5juWKf7yF0Vwj4L1Rr5pcqfVJM9UpDPvTByggibq8WVViTSSPOEfzNHC%2BEy92VtK9NPy5Mg2uIJjHlJZfikoYqezc2vytNRjLauFY8Ig3v2C5DDdIl8CgpmJuEPLFj83gtwYx7xjXZ0dMCQM183LMCtofoUliPX9bQRoE5L7WkN9ec%2F6u59FYdv3lyyMbounLAbY6ExJAfM%2BXwgNpIwfLrcYTCfyMWuTbRbaHMnefjwBYU03y%2FpXRo8XzWs7GApuK6y4J%2B3QR0P%2B9RshkbH9sHGIE59R0XToieX7LT6V90oaXax761%2FG9SFyMXhViL3JytrFZ5KizdTQB13OJgD83fsxHewX%2B7mCwkO08GjGuFNGLGk9WTcGVo%2BqF97Yy4WUfqDTtR5kRdAO%2FgI4nevBHUwHoTb4T%2Bp74TtTwgwzKDGyQY6pgGex9s7bo%2FGlk%2FEuO7a%2FSuJiPsGg8PVGvsUSbzvxVDPpQpzWN7BK7%2FFfZc58A1Fi4CJYkxePlzu48kHi8Oky%2FqI89XyY5vL47NDCECE926khUejGHX%2Brc39nLumZmQZq4TscViKusnq6qcw9d2fHXCYMXcmstcPBdiObtOw42bJUc1jn%2BvIWmcSZtBymVplBMg%2FSUxwAaOLagN1yCUXYFVKIRj6ncOX&X-Amz-Signature=36798de6a8a836ed21fc7471873562cc7ba3f0a93a3f720572539f94a5c1c40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

