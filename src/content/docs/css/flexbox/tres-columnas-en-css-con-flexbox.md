---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSVBE64%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0dGULUsSu6m99YSufYoWIsyfSE6Yl8EDcqevpz7LN9AiAdPANw9ycsO83XEt5IeMWYKW0QtD%2FOhG8OkfrbuVOIWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRVQ5YYsFechpUG1KtwDgRGJAeBYv9b9H1ujGnNKI12QI3M%2FlJqapC6DT2yPruuKU0y6hiSnhvCo0AoKSrohN7mxfrZhy15mWU7sldIj%2Bqgjp72mcJBR7hEPtIeLuNY%2BQbdjoq4hXVTY40vcn%2FwaGdMt3%2FnokdYZjSXhY08f061WQEcWBOHyT9n9QlGB9qOAYI22bxG%2F4X2c%2BjNf5Wp5%2FwvjGzaUPMq%2BVH%2FeN2w6QAk5W9GDLA%2BRZqodGHIgtYfW1OiO1wKgvZDQxw%2FqEwqDJ7RLomUGWdUCOej4eMXRBMDKwfOrYCLVZUtHzZV%2BPkWCT7ZEf9BSUS94%2BUz1UEvD8Mb6h5DkzrX0x1JIHewYfmA%2Bt1aY1MsSvc7Ve1fhzQ8Xxp5z%2FKDhmwOcrFVVqSCHeuFk0i0BpsaXBFXCOP9mtlzf7sODbaxekGZr1IcDri45vw6mABKGBhXg5t%2FDIkX2bTad8mYK4m9dji0WsiqMAwPfsmLgjKw6ppxMSDtuFE%2FtEpOSCwQsNbF9hezMpUSF3ofyPu2S4K0wne03lhU7C%2BxaWiLDxssrbjwxF3BF609cPWyaj3tOj%2BcPxBAuhMM62dtC79U2kbZ772tCXN2SC4rThKZP0sg2prjIfr22%2Fiwp7wWcfgEIvyT1Jxgw1v3SyQY6pgHTyp4ykb18yrR0ckxN78%2BYpWoANIqv60kdE9jWPCevgxkG72On6HZSDxROrYtf%2Fw44ykBeJo%2FXDdplP2HMdiWQsdOM2Z9nROTOn%2FMSvWV7N30RBD2o%2Bnr3xMnm2wWZMsX7jg9H4Youo%2Bul4Usj0qwdQrtLAVS3UdgStBQljWPoMsn1gTCPprvIIiPdVtB7kLYeU6J2wesE%2BOLE1FnZPIVItKyJTOrF&X-Amz-Signature=69600f8ad9a1a3fa364aee4d18216a4aafe28bf235477f5aa55c960327187b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSVBE64%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T044144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0dGULUsSu6m99YSufYoWIsyfSE6Yl8EDcqevpz7LN9AiAdPANw9ycsO83XEt5IeMWYKW0QtD%2FOhG8OkfrbuVOIWSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGRVQ5YYsFechpUG1KtwDgRGJAeBYv9b9H1ujGnNKI12QI3M%2FlJqapC6DT2yPruuKU0y6hiSnhvCo0AoKSrohN7mxfrZhy15mWU7sldIj%2Bqgjp72mcJBR7hEPtIeLuNY%2BQbdjoq4hXVTY40vcn%2FwaGdMt3%2FnokdYZjSXhY08f061WQEcWBOHyT9n9QlGB9qOAYI22bxG%2F4X2c%2BjNf5Wp5%2FwvjGzaUPMq%2BVH%2FeN2w6QAk5W9GDLA%2BRZqodGHIgtYfW1OiO1wKgvZDQxw%2FqEwqDJ7RLomUGWdUCOej4eMXRBMDKwfOrYCLVZUtHzZV%2BPkWCT7ZEf9BSUS94%2BUz1UEvD8Mb6h5DkzrX0x1JIHewYfmA%2Bt1aY1MsSvc7Ve1fhzQ8Xxp5z%2FKDhmwOcrFVVqSCHeuFk0i0BpsaXBFXCOP9mtlzf7sODbaxekGZr1IcDri45vw6mABKGBhXg5t%2FDIkX2bTad8mYK4m9dji0WsiqMAwPfsmLgjKw6ppxMSDtuFE%2FtEpOSCwQsNbF9hezMpUSF3ofyPu2S4K0wne03lhU7C%2BxaWiLDxssrbjwxF3BF609cPWyaj3tOj%2BcPxBAuhMM62dtC79U2kbZ772tCXN2SC4rThKZP0sg2prjIfr22%2Fiwp7wWcfgEIvyT1Jxgw1v3SyQY6pgHTyp4ykb18yrR0ckxN78%2BYpWoANIqv60kdE9jWPCevgxkG72On6HZSDxROrYtf%2Fw44ykBeJo%2FXDdplP2HMdiWQsdOM2Z9nROTOn%2FMSvWV7N30RBD2o%2Bnr3xMnm2wWZMsX7jg9H4Youo%2Bul4Usj0qwdQrtLAVS3UdgStBQljWPoMsn1gTCPprvIIiPdVtB7kLYeU6J2wesE%2BOLE1FnZPIVItKyJTOrF&X-Amz-Signature=22d1047491eff6ffd17a20c88f97f719f6dbbff3fa43978839839eb3e3ad9bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

