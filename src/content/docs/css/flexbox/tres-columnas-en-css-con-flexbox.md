---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCHXHFB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX92%2BYiXx7JGTsbLggYu%2Fed5g0tbcsK4Bel1yU3cP%2BEAiBeqoho%2FKTm2D11fROrWzx0U1e184zb9hMqEuFMD44r1yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHpoj7NWu7JRKOCkPKtwDBgiHSu1c3UFQkJjK6xkBhvfWEX4CHWjDy9iDS87IIg1PwdfSkMQ8Gk96DeQuiKPJVq6rP9ITsc16YB6iKvrK5q8Oe8ma13TK%2F1pxRxHpVteF%2FAUyP7Rx7IyY7rqqYPgogaTQCAPUfBBJ4sFz02BSFWNKmCRrJHofyv0QZiMOyKROSkiE%2Fx9TKlXmJf7oh1lF9aOn7hslDb0AJadd3%2BZnV8VaNoA8UxGFIY%2FwyBGVeJYP8eeEQPTfFyrirGDrBsa3uF5m4Snt2yCnmGupHAJvmqqmB3TkI6hpgyLZgjylbzhMTFc%2BmukRntFxDjDPNtM2ke3dz6MSivI2fN4Mb43XcrsoF9ejyRjy8nQ%2F9QKmtNStPJpnXDE58eECfY2WLnHk9tdPYseLisFs5Z61%2BXmonm8NGJoWnKua954EcYnZUXTj5UUQx17cUZjx0n01i4u6ABSEAEimCL5syXTpOZPRtdR1rhjockLuygA2IikE4kVy4%2FBRaAX9QBsji4stBMqHb4jqapZ1ZJaxtqtc%2FSWVPl1BLPuHQm9K5gOVIKo0UbfnIziBqQKxH2qVUbpHmCMJ3K77aU6P6OGuOywtEdQBXGvrI7PGP8hMEkqFZUL%2FAO4HegFV0MH6CgdBZhEwsO3ZyQY6pgFz4ZgR4ZSkLopViEECdbVF4qDXZ60TJ0Cp7rZkHWi%2Bg61XngPcekYFGSLI6tRdyJOi2DIV2pleRedPl7E4lyd1MhJksjk1%2BHuqQi56jkts0LsIuK6dYH14Dxk6sMI%2B1789u0l8DMrXwd8PLHmGouylKb3hTUQZuhuLOInQrY4v6tR8yae83uSEBnozF7l8viqLb34zGO5NXXBnfn6FxHRtl7t0HNTY&X-Amz-Signature=971f1563e81e10340ed29f8a40f3945778b9ccc11ea017a0b6d2ffc328568e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OCHXHFB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T084356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDX92%2BYiXx7JGTsbLggYu%2Fed5g0tbcsK4Bel1yU3cP%2BEAiBeqoho%2FKTm2D11fROrWzx0U1e184zb9hMqEuFMD44r1yqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHpoj7NWu7JRKOCkPKtwDBgiHSu1c3UFQkJjK6xkBhvfWEX4CHWjDy9iDS87IIg1PwdfSkMQ8Gk96DeQuiKPJVq6rP9ITsc16YB6iKvrK5q8Oe8ma13TK%2F1pxRxHpVteF%2FAUyP7Rx7IyY7rqqYPgogaTQCAPUfBBJ4sFz02BSFWNKmCRrJHofyv0QZiMOyKROSkiE%2Fx9TKlXmJf7oh1lF9aOn7hslDb0AJadd3%2BZnV8VaNoA8UxGFIY%2FwyBGVeJYP8eeEQPTfFyrirGDrBsa3uF5m4Snt2yCnmGupHAJvmqqmB3TkI6hpgyLZgjylbzhMTFc%2BmukRntFxDjDPNtM2ke3dz6MSivI2fN4Mb43XcrsoF9ejyRjy8nQ%2F9QKmtNStPJpnXDE58eECfY2WLnHk9tdPYseLisFs5Z61%2BXmonm8NGJoWnKua954EcYnZUXTj5UUQx17cUZjx0n01i4u6ABSEAEimCL5syXTpOZPRtdR1rhjockLuygA2IikE4kVy4%2FBRaAX9QBsji4stBMqHb4jqapZ1ZJaxtqtc%2FSWVPl1BLPuHQm9K5gOVIKo0UbfnIziBqQKxH2qVUbpHmCMJ3K77aU6P6OGuOywtEdQBXGvrI7PGP8hMEkqFZUL%2FAO4HegFV0MH6CgdBZhEwsO3ZyQY6pgFz4ZgR4ZSkLopViEECdbVF4qDXZ60TJ0Cp7rZkHWi%2Bg61XngPcekYFGSLI6tRdyJOi2DIV2pleRedPl7E4lyd1MhJksjk1%2BHuqQi56jkts0LsIuK6dYH14Dxk6sMI%2B1789u0l8DMrXwd8PLHmGouylKb3hTUQZuhuLOInQrY4v6tR8yae83uSEBnozF7l8viqLb34zGO5NXXBnfn6FxHRtl7t0HNTY&X-Amz-Signature=9653a9eccd659445a84bddee00eb64399c77d1b233a90cb98071e45dca1282f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

