---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643O4C4EI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQvy%2FKamkb1lCvx5pupKCWd%2FfWezVtMMEfD%2FVYhJekXAiB2wd9m7Jur4NQQRsvlGnsUvzLvJc9OUZzf4jRzRmHqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWOEb7tReRSr6%2B6JgKtwD0zyALKWfKEALb8CO7lIzR36o7SZ5fU6lTlmtUjvETt8jS9XsjHJQKri%2BYwhnuw4gzexoQp9R5oEw%2BURdcYeDUl4gRcXVuvFXzfEVlw6nJb%2F3NsQZ7tAMOgtWvj7smZ7MRit0YCgK3uVAVkoL%2FO3FCL5vurNwOT779riLAki3OAoJUlK7cok6ei5LaKsrkviCr2NEToqBXLaNscv0r7AWWmSfCjVRIQQ9ZPJmgU0Y22pRD83ufegCeFUsGSXlhUFdqEGIEP5LqArUvmT9tVGGSA%2BrtZ940VLvhVkI2gJ%2FMMZUpwRnLDhXwmPpZjUyrr%2BFF7KqNNNr2yms3hs7foEV44G%2F1KMM0vHtT9GiFxYhXkf%2Ff2zr7UtCX13lsUX3M42SkS1D6k7eyqXM3MqO4KBp7WlqeXuR4d2%2FkEwgQXez0Ki1XZI9Rc9KYimPWLEhtLwBmRvq7Tpzda6XpLUm2AOvMhdwPfkBVyvzaAcZS7AwtuJAxA97XfmqUBaWvPFz0lPM4zzE2m3SanBjRAS6h9GFMrPq1QsGR4ARV6ow410bIcgn%2Fq6gQoX3IJst9XdLk8%2Bk4cSANsTRuFn6tM8MaiPTqqx5qRvfcIBtoe%2BlfyovqXsL1zk1qsYclzYGy30wuu3ZyQY6pgG%2FD%2BUlDOtYaqtePCLv%2Br4dbCVAWTuE8BkSqmWin6RTFBg%2FrPSa5WsRVFoPDkL2JDXx%2Fd5mLzz7RJ41tzaygdypY8N0HDgN7PR6Lm%2BSf6Y2FcWMDBmuBh0RWG%2ByBjXfCIR66%2BWYq2KoEAFY0VAmJalP5SpyFFvDaeMpgrZkaU9Qwm9cBkO%2BFpyvcBbvgFpeBKMrbVfTj4IqQu63Mlc0RI%2F8zO%2Fvbkvu&X-Amz-Signature=bf74450896a7136217c0b9827a20999cf7a3b38578a85cd5d3824c9cf747b689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643O4C4EI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQvy%2FKamkb1lCvx5pupKCWd%2FfWezVtMMEfD%2FVYhJekXAiB2wd9m7Jur4NQQRsvlGnsUvzLvJc9OUZzf4jRzRmHqXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWOEb7tReRSr6%2B6JgKtwD0zyALKWfKEALb8CO7lIzR36o7SZ5fU6lTlmtUjvETt8jS9XsjHJQKri%2BYwhnuw4gzexoQp9R5oEw%2BURdcYeDUl4gRcXVuvFXzfEVlw6nJb%2F3NsQZ7tAMOgtWvj7smZ7MRit0YCgK3uVAVkoL%2FO3FCL5vurNwOT779riLAki3OAoJUlK7cok6ei5LaKsrkviCr2NEToqBXLaNscv0r7AWWmSfCjVRIQQ9ZPJmgU0Y22pRD83ufegCeFUsGSXlhUFdqEGIEP5LqArUvmT9tVGGSA%2BrtZ940VLvhVkI2gJ%2FMMZUpwRnLDhXwmPpZjUyrr%2BFF7KqNNNr2yms3hs7foEV44G%2F1KMM0vHtT9GiFxYhXkf%2Ff2zr7UtCX13lsUX3M42SkS1D6k7eyqXM3MqO4KBp7WlqeXuR4d2%2FkEwgQXez0Ki1XZI9Rc9KYimPWLEhtLwBmRvq7Tpzda6XpLUm2AOvMhdwPfkBVyvzaAcZS7AwtuJAxA97XfmqUBaWvPFz0lPM4zzE2m3SanBjRAS6h9GFMrPq1QsGR4ARV6ow410bIcgn%2Fq6gQoX3IJst9XdLk8%2Bk4cSANsTRuFn6tM8MaiPTqqx5qRvfcIBtoe%2BlfyovqXsL1zk1qsYclzYGy30wuu3ZyQY6pgG%2FD%2BUlDOtYaqtePCLv%2Br4dbCVAWTuE8BkSqmWin6RTFBg%2FrPSa5WsRVFoPDkL2JDXx%2Fd5mLzz7RJ41tzaygdypY8N0HDgN7PR6Lm%2BSf6Y2FcWMDBmuBh0RWG%2ByBjXfCIR66%2BWYq2KoEAFY0VAmJalP5SpyFFvDaeMpgrZkaU9Qwm9cBkO%2BFpyvcBbvgFpeBKMrbVfTj4IqQu63Mlc0RI%2F8zO%2Fvbkvu&X-Amz-Signature=41fddb2a8ebbd5ec1c232bed7a0cb04c1a5d188d7be50dcd3040d2ecc5d616d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

