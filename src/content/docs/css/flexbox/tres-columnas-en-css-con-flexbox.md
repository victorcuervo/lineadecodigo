---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OPLSWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD04USdUFOiBUJxMUUvPW2JE30w2pbHecSiqHlMmAzaPgIhAJSuUStRyq45rK54LDMQre3lmjcUNU%2B230Pyy1%2FmklZQKv8DCFUQABoMNjM3NDIzMTgzODA1Igyul8mriMOTHzoqgUcq3ANnmAgMoeJrRgWM4e53txdZEcsTyimx%2FBHJIH%2BFwoUJtZDLVLS9r6E2VtOUmq8Xas952OXrgRm3w%2Fp4tIbHHSfR6LGQZLmutzco31w9dv%2BNUioK1iDNCSMfd%2BIJnyYMAn%2FDTcB0u4COx6KSoN8gdtZMN94LS6cFONPPzzg3F1M%2BC%2Bc%2BwNM16quiGd%2FzbKn0jVutN3scSfYm5O%2BryN439IYDMtitCDB8FeQFlvVYExNwhET0O%2BIyWVEmXXLgSzU0XAmadx2YGfpSyU8hKJEuv1nLffimXyqH47XxbSM%2FaU8BjIoGJcTz55V%2B05SAoF0KhitOoLlymCCrQM1r1djuYF8POYi3Kdtw2zZj0XEVp7uq8g6rqVPDcHEBmm1A%2F5N6xHmRMizojj45e1OHal22NGVjAAhcIBXwgZDDprOWZVI1qWyjcbIEYo3X7ZoTj6TVkHIDv0tBmfZC5AjF5XKs%2B%2F827yB2%2BQKx%2FS6tpkJQedj9HZ1jLrPOQL%2FsnoBVw35MxFS0fSdfR5M2wuC3sI1qB%2B10jQmSx%2FdkWolutcFtpgOc415GHCa1fnFw3a7cLw8gUSBVwxS0PozMQmV7sNkWdUNd50x6oYJAK2FERGFRZ%2BtS%2FdavlCoFoV11bi%2BJtjCzrMnJBjqkASgp7ePIBAikm61mXL3d%2BAqrnbcXE5t8fjpvnRCyj306XaJqj5%2BEjHcuXWncGmPv9eC4kChpfo266Ckaw4QHQwDtbKIJPiSDlzbN822XD8P2qxV9WAwppSGF5%2BF02j%2BHuSP19FjYQ9mBBtjU4BfkCZHLTK95%2B3MEWng5a%2BZfRhyl243cpTpbjiNgPeBpTw4i3wUtENGlxLyBWYA9sO5A0iNY8t6l&X-Amz-Signature=6c571c5ec59e1906632ab8338d679954111af6d5a86c7549b41ce991b9d9b85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625OPLSWY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD04USdUFOiBUJxMUUvPW2JE30w2pbHecSiqHlMmAzaPgIhAJSuUStRyq45rK54LDMQre3lmjcUNU%2B230Pyy1%2FmklZQKv8DCFUQABoMNjM3NDIzMTgzODA1Igyul8mriMOTHzoqgUcq3ANnmAgMoeJrRgWM4e53txdZEcsTyimx%2FBHJIH%2BFwoUJtZDLVLS9r6E2VtOUmq8Xas952OXrgRm3w%2Fp4tIbHHSfR6LGQZLmutzco31w9dv%2BNUioK1iDNCSMfd%2BIJnyYMAn%2FDTcB0u4COx6KSoN8gdtZMN94LS6cFONPPzzg3F1M%2BC%2Bc%2BwNM16quiGd%2FzbKn0jVutN3scSfYm5O%2BryN439IYDMtitCDB8FeQFlvVYExNwhET0O%2BIyWVEmXXLgSzU0XAmadx2YGfpSyU8hKJEuv1nLffimXyqH47XxbSM%2FaU8BjIoGJcTz55V%2B05SAoF0KhitOoLlymCCrQM1r1djuYF8POYi3Kdtw2zZj0XEVp7uq8g6rqVPDcHEBmm1A%2F5N6xHmRMizojj45e1OHal22NGVjAAhcIBXwgZDDprOWZVI1qWyjcbIEYo3X7ZoTj6TVkHIDv0tBmfZC5AjF5XKs%2B%2F827yB2%2BQKx%2FS6tpkJQedj9HZ1jLrPOQL%2FsnoBVw35MxFS0fSdfR5M2wuC3sI1qB%2B10jQmSx%2FdkWolutcFtpgOc415GHCa1fnFw3a7cLw8gUSBVwxS0PozMQmV7sNkWdUNd50x6oYJAK2FERGFRZ%2BtS%2FdavlCoFoV11bi%2BJtjCzrMnJBjqkASgp7ePIBAikm61mXL3d%2BAqrnbcXE5t8fjpvnRCyj306XaJqj5%2BEjHcuXWncGmPv9eC4kChpfo266Ckaw4QHQwDtbKIJPiSDlzbN822XD8P2qxV9WAwppSGF5%2BF02j%2BHuSP19FjYQ9mBBtjU4BfkCZHLTK95%2B3MEWng5a%2BZfRhyl243cpTpbjiNgPeBpTw4i3wUtENGlxLyBWYA9sO5A0iNY8t6l&X-Amz-Signature=218d451dede201e4965e4a9f8fc9ea80dc557ea4c781df9657abe180f8037067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

