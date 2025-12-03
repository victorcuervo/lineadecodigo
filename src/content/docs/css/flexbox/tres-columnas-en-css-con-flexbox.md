---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C733AS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCQNFpbVMyU%2Fv4L4SaWBDvgF86uNVNJnQODHnscEObfbQIhAM4mgNInGx%2BRYy6kPrR5fc78GbkPvQrSWaeuz2wDofa1Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxgyjhAq%2FufUGRmyHsq3AO8oJBaen1Egb8qr172eDPR6kFit33S%2FJEM%2B%2FU823E%2FyxiowmSm4%2BE8kbXAJLBaGQEJFi2AtdnLPyBrD3mG9PEHQzduZiTCXPHqMk1hAEVrEJlwN2kK9EOn%2BTjmoXB5m8EAYYJCtlOX60uHG141hk3O6wbYK8URe0XFPTGzdF%2F7QPiikJ9C0DjKb%2BntAT5Z5Ri59YxShIqXvPcDlj5RgKHzLsU8Z1HK4g1TI9eeomN%2FgDE1Sjp7XtXpArgyft5Zd5CeMrUZnXOnl5%2BbBu2urC4aWEDCLz1MCSLVAeBVk8SE11WJQBB11vxkLz1VdPMIZo5G1k9Xg3neZ1tOkSc%2FCq0%2Bc0GdSGU14AMljBFV4LfuYFeAMpnmWsJzrCRNtCFpy5cFX%2FvPXDfMn4qIPBi3w8iZmowTqWLZvmaUa5thCHoahZDDO1w%2B9WhxDaw5JxWoOQxKk7bMdvOoTLyfVKqq2L5ex3kcAwHU5OqW7xHzZpm607w22X3o%2BWefYuRoZmNqWao3pAZ3V0oRra31Ugs5sKvYeoEdyIH%2FmqgFEQgR%2BCBDi0Zdg7QLFB4tqDMclpW9TdEZQkfpZJt7QXiNGutykv67zvN1RTT1qKW2%2BWsV4mWTBYh1q7Q2h57mjcFrzDDz%2BMLJBjqkAV%2BiS8IP2hEJAJf199sUBUrio%2FoopwR6jrE1DHIeX1a2FJjg6w5uFwqam2MU%2FWcNzoE2b8c7zxyAhU6%2B8t9QcG15LaP8jf9I%2BgiisVC8lU4p7rsV99ySYGc%2FSYm8fX%2FN7L8gAUgmmZOB3tpBQO0NbCN1GhUUdajD9OmIUEbB7QLipsmvVcdJGwTmUYb1s%2FpkfGsMx3pZoJvr2ttjLlVXBjNNlStT&X-Amz-Signature=a396e2486883594e817918c61d381ed35050ab67657ec1392a2b8e30e9fb5ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C733AS3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCQNFpbVMyU%2Fv4L4SaWBDvgF86uNVNJnQODHnscEObfbQIhAM4mgNInGx%2BRYy6kPrR5fc78GbkPvQrSWaeuz2wDofa1Kv8DCDgQABoMNjM3NDIzMTgzODA1IgxgyjhAq%2FufUGRmyHsq3AO8oJBaen1Egb8qr172eDPR6kFit33S%2FJEM%2B%2FU823E%2FyxiowmSm4%2BE8kbXAJLBaGQEJFi2AtdnLPyBrD3mG9PEHQzduZiTCXPHqMk1hAEVrEJlwN2kK9EOn%2BTjmoXB5m8EAYYJCtlOX60uHG141hk3O6wbYK8URe0XFPTGzdF%2F7QPiikJ9C0DjKb%2BntAT5Z5Ri59YxShIqXvPcDlj5RgKHzLsU8Z1HK4g1TI9eeomN%2FgDE1Sjp7XtXpArgyft5Zd5CeMrUZnXOnl5%2BbBu2urC4aWEDCLz1MCSLVAeBVk8SE11WJQBB11vxkLz1VdPMIZo5G1k9Xg3neZ1tOkSc%2FCq0%2Bc0GdSGU14AMljBFV4LfuYFeAMpnmWsJzrCRNtCFpy5cFX%2FvPXDfMn4qIPBi3w8iZmowTqWLZvmaUa5thCHoahZDDO1w%2B9WhxDaw5JxWoOQxKk7bMdvOoTLyfVKqq2L5ex3kcAwHU5OqW7xHzZpm607w22X3o%2BWefYuRoZmNqWao3pAZ3V0oRra31Ugs5sKvYeoEdyIH%2FmqgFEQgR%2BCBDi0Zdg7QLFB4tqDMclpW9TdEZQkfpZJt7QXiNGutykv67zvN1RTT1qKW2%2BWsV4mWTBYh1q7Q2h57mjcFrzDDz%2BMLJBjqkAV%2BiS8IP2hEJAJf199sUBUrio%2FoopwR6jrE1DHIeX1a2FJjg6w5uFwqam2MU%2FWcNzoE2b8c7zxyAhU6%2B8t9QcG15LaP8jf9I%2BgiisVC8lU4p7rsV99ySYGc%2FSYm8fX%2FN7L8gAUgmmZOB3tpBQO0NbCN1GhUUdajD9OmIUEbB7QLipsmvVcdJGwTmUYb1s%2FpkfGsMx3pZoJvr2ttjLlVXBjNNlStT&X-Amz-Signature=6bb275e86c2e31cd0814b02f3eaf0183555bf99ac3f6eb259d42c89b7998d48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

