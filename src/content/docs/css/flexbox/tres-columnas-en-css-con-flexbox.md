---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DV6J7C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEumyn%2Fks460vqF05oA9cxQ0LgXDKZjsnVKuNwycJEpOAiBd98%2FP3ojL69%2FaamE2b7qcjZTnnmKYuIeJdVp22fmotCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJorZg0tkoci87F5dKtwDf49hPJhJG2xgiilyvpSaALd9oPOommEEM69mRNG%2FcbaQI8zpw%2F0ArN%2BV6hmKO46l0oxibnag7xvHeHYkB1%2F0ITU%2FE%2FBCL%2BRPKeWd9fZQRrG5vuJArhzacPrrTAcu5UBaCgOvDf0s%2B7842fMWD05%2BTaMeSg182%2Bxn2WSG9EG5Y6zTG273BHHQrLO%2BfTfoCc2wpSTgNsDBK0mglxLZXGduHvnLTh7Q11ACANZ588K1t7pAvwVv%2BYiEeaCz81xfE0Hargwp61zM039hpchbz0BQrXyFGlZmDdWxIfYZxz0Z%2FM6B9IWWNaaqjp43Se4E8nQg9xIkXEAsyi%2BRWOBacTRo8ht5iz5KNUecnD1crto1N184K93PbfPAVWt3hGSUPaKjf60rC0ivu%2FOdwO84Ui8EAbiUJALrESPT%2BYzQ5JnT3Ws4dZs1bwuwRolAmQYZj0U%2BRvvLuLeRskZ0fgJFLBDUaUhQwZAXcCJH6BhPkHHClUmcPT5NXhVkxSv17OI%2Ff1fAEebczBtvwiqHRdEQQZicom3xruK1CBOusAX%2FxV%2BODe7iBeTJN9oraM4D55GyW6CuPonKAb%2FsiaLulqTsETh7hdXXC0Ww0vBiirZ9C8%2Fo9%2BT4GTwxYriT1Hhk9sgwq53UyQY6pgFDmoFH94bGKEKm47CSH%2Ffw40t%2Bb7fF0av3MOahdlkOS5oQPxs19pd4OCkfKBgUnJNBJWEfefFce%2BGzg%2B%2B7IBBGAsNsgzq7Yh7TRNi6AkDl%2BNIvy1WM4b1qUNRPPPV2QgGLqDZg2FRkGcbwLt60WpY4PV2bo6Y18TX44f9pM5cpaJZzuKTp0RlpZvvyZw7ewYgtYZ%2BOXqlZL%2FOA7Hldg5QcW%2B8XCvUM&X-Amz-Signature=5406cbdb9239ef589c68c1555b1547f45ceeda4d4c924110b979a6e445af9e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6DV6J7C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEumyn%2Fks460vqF05oA9cxQ0LgXDKZjsnVKuNwycJEpOAiBd98%2FP3ojL69%2FaamE2b7qcjZTnnmKYuIeJdVp22fmotCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJorZg0tkoci87F5dKtwDf49hPJhJG2xgiilyvpSaALd9oPOommEEM69mRNG%2FcbaQI8zpw%2F0ArN%2BV6hmKO46l0oxibnag7xvHeHYkB1%2F0ITU%2FE%2FBCL%2BRPKeWd9fZQRrG5vuJArhzacPrrTAcu5UBaCgOvDf0s%2B7842fMWD05%2BTaMeSg182%2Bxn2WSG9EG5Y6zTG273BHHQrLO%2BfTfoCc2wpSTgNsDBK0mglxLZXGduHvnLTh7Q11ACANZ588K1t7pAvwVv%2BYiEeaCz81xfE0Hargwp61zM039hpchbz0BQrXyFGlZmDdWxIfYZxz0Z%2FM6B9IWWNaaqjp43Se4E8nQg9xIkXEAsyi%2BRWOBacTRo8ht5iz5KNUecnD1crto1N184K93PbfPAVWt3hGSUPaKjf60rC0ivu%2FOdwO84Ui8EAbiUJALrESPT%2BYzQ5JnT3Ws4dZs1bwuwRolAmQYZj0U%2BRvvLuLeRskZ0fgJFLBDUaUhQwZAXcCJH6BhPkHHClUmcPT5NXhVkxSv17OI%2Ff1fAEebczBtvwiqHRdEQQZicom3xruK1CBOusAX%2FxV%2BODe7iBeTJN9oraM4D55GyW6CuPonKAb%2FsiaLulqTsETh7hdXXC0Ww0vBiirZ9C8%2Fo9%2BT4GTwxYriT1Hhk9sgwq53UyQY6pgFDmoFH94bGKEKm47CSH%2Ffw40t%2Bb7fF0av3MOahdlkOS5oQPxs19pd4OCkfKBgUnJNBJWEfefFce%2BGzg%2B%2B7IBBGAsNsgzq7Yh7TRNi6AkDl%2BNIvy1WM4b1qUNRPPPV2QgGLqDZg2FRkGcbwLt60WpY4PV2bo6Y18TX44f9pM5cpaJZzuKTp0RlpZvvyZw7ewYgtYZ%2BOXqlZL%2FOA7Hldg5QcW%2B8XCvUM&X-Amz-Signature=fa44f7de086bec47c910e39d2a492b7d70c24e8c1e718e42b3372da320bf6ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

