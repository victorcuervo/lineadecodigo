---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2XOFED%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGftamYawSwrXRu9O%2ByiaMMDmQUb%2BiBmodBRsxLpmWrgIhAKjFFaVc4dBfD%2F6peI2nsQyYDl0QMGSR%2BJZbWqG27p%2BUKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPg75UivLnLkyiPhwq3AN3IyRe%2Bm7ewNXrBT8IDHmosVJwltS27QtSybmuwIWI3x%2B%2BBSMolmYmiGxgM%2BwdvWCEzaRSX%2Fp%2FnHEKdYGOE4wNNcBMZZXIOIYjKGND35Bqn9ftWsnnLWLJBJIqhoGAbUcs7t7uZi0iebmBalLl%2BhHtj0FuMykFaJlAqHtcPFpxbvx9ZmolJhjkQ%2BuvjM2NYmWn4Dm3cgeqn6y%2FCgonK7HDu9Nq5FtDg2g%2BYXrcQQhaIMCinw0F5My%2FEJWUJ7HLFR0gPF5MpTybvh9YGgrbg9M8EQJmmEDyn%2BVlw0ImjuS6Hm2C1bpcQO9gD32psAQqPYrpQOfQZnW3sqHJhEHJHMwKexaGumVSaysbZoQPNHzow8admyRcMhnC7FEznECER3VKCbWFUe73OB4chJo%2FTeSPnaGG5xMpdLNnlw2%2FX%2FIHJwobhvUqgOus%2BqoAuRl7uumNF%2FIBkLiXhYhuauQ7zLdbOEbp4bgXN6O4yE7ru9CRj3MCumAi8rSRLa8XX3MH%2BREeBY2gLKBkf8nRFqGrzkt0dvtTLbsVQRDlucPi7rmQGSA2OlsOEDLFrW9SonMYYYHB%2FRlQ6Co%2Ft22QHdAy1rtFfNM8bvrWnAE3VMD15XkGI%2FJfzxp4VS9PzwtKPTCkmdXJBjqkAcq27%2F7NutMFDZp%2BkUwPyvShPuXn2jDHw4oDMJ8sXwnmCDY%2FxVOHGnBv1gHy%2FvyLmGRTr2WEedTtFgIwyJqRtY311KbKnPm7ulCcKxhxhk%2F54QMgeYXTv%2Fam971mqwvnRxJPzLQaFIVgYCI6ZkdiTmqsqPrvKVClI%2BEQsUrBhqgYURT%2FommcGEF5DGCik3vKdJEr9qsY6tDDu1vnG%2BJgxppPRZSH&X-Amz-Signature=df37aad42cd327cbf72a093ad4c199387222b83f0227ee1d62b5cbc4ed2cc3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC2XOFED%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T120835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGftamYawSwrXRu9O%2ByiaMMDmQUb%2BiBmodBRsxLpmWrgIhAKjFFaVc4dBfD%2F6peI2nsQyYDl0QMGSR%2BJZbWqG27p%2BUKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPg75UivLnLkyiPhwq3AN3IyRe%2Bm7ewNXrBT8IDHmosVJwltS27QtSybmuwIWI3x%2B%2BBSMolmYmiGxgM%2BwdvWCEzaRSX%2Fp%2FnHEKdYGOE4wNNcBMZZXIOIYjKGND35Bqn9ftWsnnLWLJBJIqhoGAbUcs7t7uZi0iebmBalLl%2BhHtj0FuMykFaJlAqHtcPFpxbvx9ZmolJhjkQ%2BuvjM2NYmWn4Dm3cgeqn6y%2FCgonK7HDu9Nq5FtDg2g%2BYXrcQQhaIMCinw0F5My%2FEJWUJ7HLFR0gPF5MpTybvh9YGgrbg9M8EQJmmEDyn%2BVlw0ImjuS6Hm2C1bpcQO9gD32psAQqPYrpQOfQZnW3sqHJhEHJHMwKexaGumVSaysbZoQPNHzow8admyRcMhnC7FEznECER3VKCbWFUe73OB4chJo%2FTeSPnaGG5xMpdLNnlw2%2FX%2FIHJwobhvUqgOus%2BqoAuRl7uumNF%2FIBkLiXhYhuauQ7zLdbOEbp4bgXN6O4yE7ru9CRj3MCumAi8rSRLa8XX3MH%2BREeBY2gLKBkf8nRFqGrzkt0dvtTLbsVQRDlucPi7rmQGSA2OlsOEDLFrW9SonMYYYHB%2FRlQ6Co%2Ft22QHdAy1rtFfNM8bvrWnAE3VMD15XkGI%2FJfzxp4VS9PzwtKPTCkmdXJBjqkAcq27%2F7NutMFDZp%2BkUwPyvShPuXn2jDHw4oDMJ8sXwnmCDY%2FxVOHGnBv1gHy%2FvyLmGRTr2WEedTtFgIwyJqRtY311KbKnPm7ulCcKxhxhk%2F54QMgeYXTv%2Fam971mqwvnRxJPzLQaFIVgYCI6ZkdiTmqsqPrvKVClI%2BEQsUrBhqgYURT%2FommcGEF5DGCik3vKdJEr9qsY6tDDu1vnG%2BJgxppPRZSH&X-Amz-Signature=44ba8aed6b0e2edaf370d52e8400f2f57f94f7bfa2cdcf5dc2496cce141453e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

