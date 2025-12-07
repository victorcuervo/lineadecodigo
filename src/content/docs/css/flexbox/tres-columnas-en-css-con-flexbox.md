---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFY6E77%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSefgLgUevcGwTkAhDAqK634uHrBa7tliI62uFoJrrdAiBEJO43VNp4m%2FD%2BaF8cv0%2FlUqYEFZ1UhKwXbjdR6bThjCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUwCap5QxXx%2FRvnbKtwDxyJeqeiISnl%2BJz7I3GW7ukc2gSM7FTMUfUHKcNyfl3j2sR32Cwx5BzGGW%2BfCzV8fjqWU6Nk568YGqulXQ%2FPzh7ailSJN15yR4qZD2fF6t%2BizlNzeQUE0y71EsxywBHhmtNEv8WLpatlINg4tt%2B3sYT89QOYADmG4aLtlIJz3Y%2BasyWG9E0CBdUqwrpdppQaDDdqgYgF3A5LEbcSDhdHZjUz%2F2FctYkgwEzCTr%2BxuDsdtVRBXRZDXKOrlvA5YPcND7WoA7r59ADMOS5MZD3kr1vBqyVW%2BdQt06RHWmlPwQu48FDkkVEtx16Bbpoq5FC8lPD31TGAa45uFtQt7LMEkOEin5y6gon8zkTUnc4fGX%2BasqR9ZdQ%2FJG7V9SQKpltOtMNrnwnRdN6w2EMBTHEAIOQR7qzyKvjeOd0lntzfm2nUunTxtuGTnCcnDlHEVwpKF9UknazRkkdzq7i%2Fk1P0Tou70inmj5c5xGUZwgYH3RqfZOPHr%2FlZOvII%2FkD%2FE0TloYZ3t9e6%2BEy7tzg7zAN6a%2Bl5e%2FmagSlCn5XceKn%2Fco8g469mNsGGSCcmROwBeA2JnVboF3SiVqzC8gsvCAuKjhwnWZc%2F6eE86KZ8DTv%2FNMPjoPRSaYzJhbAzMtP4w7ITYyQY6pgEAdInlDAA8ZuzokTTdDDJ6EEJUW4Ng%2BXaPq98hjUtv2MMJWyvEe3o07YTtAIpikRYEdTVc55FoudmXv3e9D2J41P5pfJsmobZlg6ehkXCUpiaViaP9mLA0FRfHYeOF6EzOu9lv%2FxHaHrSDtqzxGqwO8sc5EGmoAD49tkjVj%2F0Ha2%2Bdqy0aPJ59RYb%2FEbW92uwM%2BdnvhXxcskfMnTcPSnrG%2F75qxKCn&X-Amz-Signature=9cf400d782e1c2c689fd655e32e439a28e47c59518e14d72cc3d5e4ba97e6a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XKFY6E77%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSefgLgUevcGwTkAhDAqK634uHrBa7tliI62uFoJrrdAiBEJO43VNp4m%2FD%2BaF8cv0%2FlUqYEFZ1UhKwXbjdR6bThjCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJUwCap5QxXx%2FRvnbKtwDxyJeqeiISnl%2BJz7I3GW7ukc2gSM7FTMUfUHKcNyfl3j2sR32Cwx5BzGGW%2BfCzV8fjqWU6Nk568YGqulXQ%2FPzh7ailSJN15yR4qZD2fF6t%2BizlNzeQUE0y71EsxywBHhmtNEv8WLpatlINg4tt%2B3sYT89QOYADmG4aLtlIJz3Y%2BasyWG9E0CBdUqwrpdppQaDDdqgYgF3A5LEbcSDhdHZjUz%2F2FctYkgwEzCTr%2BxuDsdtVRBXRZDXKOrlvA5YPcND7WoA7r59ADMOS5MZD3kr1vBqyVW%2BdQt06RHWmlPwQu48FDkkVEtx16Bbpoq5FC8lPD31TGAa45uFtQt7LMEkOEin5y6gon8zkTUnc4fGX%2BasqR9ZdQ%2FJG7V9SQKpltOtMNrnwnRdN6w2EMBTHEAIOQR7qzyKvjeOd0lntzfm2nUunTxtuGTnCcnDlHEVwpKF9UknazRkkdzq7i%2Fk1P0Tou70inmj5c5xGUZwgYH3RqfZOPHr%2FlZOvII%2FkD%2FE0TloYZ3t9e6%2BEy7tzg7zAN6a%2Bl5e%2FmagSlCn5XceKn%2Fco8g469mNsGGSCcmROwBeA2JnVboF3SiVqzC8gsvCAuKjhwnWZc%2F6eE86KZ8DTv%2FNMPjoPRSaYzJhbAzMtP4w7ITYyQY6pgEAdInlDAA8ZuzokTTdDDJ6EEJUW4Ng%2BXaPq98hjUtv2MMJWyvEe3o07YTtAIpikRYEdTVc55FoudmXv3e9D2J41P5pfJsmobZlg6ehkXCUpiaViaP9mLA0FRfHYeOF6EzOu9lv%2FxHaHrSDtqzxGqwO8sc5EGmoAD49tkjVj%2F0Ha2%2Bdqy0aPJ59RYb%2FEbW92uwM%2BdnvhXxcskfMnTcPSnrG%2F75qxKCn&X-Amz-Signature=6f914fc2be69f3fe3d26209001e42cf42f1a5b9c87197512a0fd8c9e1eab268e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

