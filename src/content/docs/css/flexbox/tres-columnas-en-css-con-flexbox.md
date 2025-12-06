---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NDWNUD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDugf2R13At%2Ffs%2FBpubC2gUTzFeq3iCm0emKTTuplVkKgIhAO83K4nx%2BMdLe8IcJKp9%2B%2FbkyQ%2F38nlq53p7u9IYq1RDKv8DCHAQABoMNjM3NDIzMTgzODA1IgxdmdLvhGR7ysE9h%2BQq3APfcP3g1%2FcVqSYSOAI%2Bx0fBqxw9ER8%2FIoT9HdcetmLzmtJoBdn%2Fug1GxCR1TfWdJsk%2BMf3RfA1ozBKAWii0PD3Xp8mxsPKTHCveeMtbavalOUl6H5V0LMjhhhAKkpgyFDPDp8DZooPvqq4YnlxB6yeoNgEW6hVEaz3Jaer%2BVt2lHSr6MybnPbuyMzLpPZr35A1jRQjCnGhRHYdFEABqF2QZ4CjRPVu6Q4mb%2BvFnAm%2B26Fg4qjCfBypnESWqGqZ7Q%2Fi9OD3BZ8ULF7Ie%2BRodY3jycRumpEGSH6VAC4x41vvBXKgQJ4YS5RTdKrpIKcpp6APrJQYDNbPlvLN4UrABbfYAKFfb1Fr7kH8TYjRbJiVVMTccMFVWmthi3NBJWnLXXRrgD%2BdsKWLnkAyLtBbPgSymbS3PdTo%2BFfeEB39QUiqdM7ZiPcEfuOiVhY245t8YABOV6%2BGg8WuBOwbqWYAiduEguxkmekKy3bJNdzm01NmpgahjDd8QESUrMkMWpAmFQKEnaYJR8Upr9nwA%2FAmkfkTZbC2K7cix0by9lfIcFAPikUnleteP63EyLlEjBFQiYANx4v68sADxJgidI6LHLISjeVx2%2FEclF4DjRkCvPVrDutz0Cx%2Ft7Lb3jpiIUTChns%2FJBjqkAc31NFNAKl4LqYAqno7yaFpxBfG6pNJse6E82Pm9KWPtoTgc%2BGZ57sWczjFcDqkoFe4HXSLJWzTwuE2%2BVtFgSQd1lwkk1C3XJYUVIJU2Uj9%2FLhTC4RoofiBIqyf9QGfA3J1Ng%2Ft8mtYyw41Yz0zQBI7Rrb9qHpDL5QLUw2WgBfPiNPOO4eS8xbxyE3xnX9nQ3AgSGeL4lcTtmSt%2Bt%2F5R7QyERM9m&X-Amz-Signature=dc2d2d0eba557b477d3beb5419160edbf1c2d88d36e846d7ade2e17dd988e6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623NDWNUD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T071210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDugf2R13At%2Ffs%2FBpubC2gUTzFeq3iCm0emKTTuplVkKgIhAO83K4nx%2BMdLe8IcJKp9%2B%2FbkyQ%2F38nlq53p7u9IYq1RDKv8DCHAQABoMNjM3NDIzMTgzODA1IgxdmdLvhGR7ysE9h%2BQq3APfcP3g1%2FcVqSYSOAI%2Bx0fBqxw9ER8%2FIoT9HdcetmLzmtJoBdn%2Fug1GxCR1TfWdJsk%2BMf3RfA1ozBKAWii0PD3Xp8mxsPKTHCveeMtbavalOUl6H5V0LMjhhhAKkpgyFDPDp8DZooPvqq4YnlxB6yeoNgEW6hVEaz3Jaer%2BVt2lHSr6MybnPbuyMzLpPZr35A1jRQjCnGhRHYdFEABqF2QZ4CjRPVu6Q4mb%2BvFnAm%2B26Fg4qjCfBypnESWqGqZ7Q%2Fi9OD3BZ8ULF7Ie%2BRodY3jycRumpEGSH6VAC4x41vvBXKgQJ4YS5RTdKrpIKcpp6APrJQYDNbPlvLN4UrABbfYAKFfb1Fr7kH8TYjRbJiVVMTccMFVWmthi3NBJWnLXXRrgD%2BdsKWLnkAyLtBbPgSymbS3PdTo%2BFfeEB39QUiqdM7ZiPcEfuOiVhY245t8YABOV6%2BGg8WuBOwbqWYAiduEguxkmekKy3bJNdzm01NmpgahjDd8QESUrMkMWpAmFQKEnaYJR8Upr9nwA%2FAmkfkTZbC2K7cix0by9lfIcFAPikUnleteP63EyLlEjBFQiYANx4v68sADxJgidI6LHLISjeVx2%2FEclF4DjRkCvPVrDutz0Cx%2Ft7Lb3jpiIUTChns%2FJBjqkAc31NFNAKl4LqYAqno7yaFpxBfG6pNJse6E82Pm9KWPtoTgc%2BGZ57sWczjFcDqkoFe4HXSLJWzTwuE2%2BVtFgSQd1lwkk1C3XJYUVIJU2Uj9%2FLhTC4RoofiBIqyf9QGfA3J1Ng%2Ft8mtYyw41Yz0zQBI7Rrb9qHpDL5QLUw2WgBfPiNPOO4eS8xbxyE3xnX9nQ3AgSGeL4lcTtmSt%2Bt%2F5R7QyERM9m&X-Amz-Signature=d45b7c0a44bd455a932060fcaf44550add6ba51b4aaaa6396eb97c419af28af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

