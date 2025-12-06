---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVLX7RH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1TfFxl40cPPp9kYRbEBI9XhzXVRs%2BbnnqLixt1z6buAiEA0j3E5l433YJn6GtZa5gDrRyKGvqiZX%2FD%2FaFp8aXuwcMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP08ciwZigpQP4Ku7ircAwrH%2Ff8hJwzS97dmCrZvIjPQnlCfGtCmPxTjH2WFPtphhwdYt1EICMIrqlWMsoAZ7kukCqDbpSLVPBU5A15OaJIgCk45IsXZyr8TOeb%2Bb8OmleAmDUq7J3OLVpvZwUp6LiDstZfittEbawu3UtMfovHlw5gXr6jvjNK0%2BWdgLi%2FAFIv1LyoUh0tTpqZRujzNkMhKZqTruJFg8q6UjiCec4t1O433lmpfRas9Dfq67WzxlvP1qWRg5wIrKD0ejtYR29IwGrKZfQRFWY0a4BTTdmjvk5pxmYCFvFKTJVaVEIFOMCJYC6YSOd6QgJpubLzamtlLCoyGMvflTA%2BRukdqPrkBAaEHKFr58%2BeQQEysEA%2Boyf57byHHNq52Osnjr7KmbiAvNVJkLrRA6XZHt95IC8gnciYng5tUR0hAMXpKOug%2BZSrbZaRFFyQA17w4NqxH3LX2Cx7D8s0xco8itnKqRWzvS5mR%2FpTm69CpEPXb84tVdRQ%2Fq%2BN5xSrBbbfI%2BoZcF76vPJ%2BRqeJPhkoI7ENY2uoncJgRhPo5TBnIRxlP3Z33qgTXT2GtRMV%2Fo3YfFs7pKe87w3exw%2FEGt2wwKbP%2BxOe9ZgpGjOnjMcu6%2B9mSMUzyfRpBKwRrqV%2BdGAX8MJym0MkGOqUBX1gvQxGMpUenmUvA%2F2RpeQuueg7YAVUHXKSiXQxjsNDG6eE0E6mx2z7jbM5Zbm0oTbU6qqIG9xgFyIvaamwlBbiQZ2CBQ2hs76nsvJvvJ9%2F0tCGrVB6lM%2FkgGPwVcCuCzjoBt1fx4BXm2If%2FA2CK0Xzj7G3mJgjPDoYCDGr1mlUTckfXtX7cTh%2Bw5jEngjBbBbvZ23y%2Fee1oakPWIiy6MlZDG5u5&X-Amz-Signature=94b1d68c451834e8d2ef4bddb7c9d7714e07673f037d3c81c876a7580a203691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVLX7RH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T115444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1TfFxl40cPPp9kYRbEBI9XhzXVRs%2BbnnqLixt1z6buAiEA0j3E5l433YJn6GtZa5gDrRyKGvqiZX%2FD%2FaFp8aXuwcMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP08ciwZigpQP4Ku7ircAwrH%2Ff8hJwzS97dmCrZvIjPQnlCfGtCmPxTjH2WFPtphhwdYt1EICMIrqlWMsoAZ7kukCqDbpSLVPBU5A15OaJIgCk45IsXZyr8TOeb%2Bb8OmleAmDUq7J3OLVpvZwUp6LiDstZfittEbawu3UtMfovHlw5gXr6jvjNK0%2BWdgLi%2FAFIv1LyoUh0tTpqZRujzNkMhKZqTruJFg8q6UjiCec4t1O433lmpfRas9Dfq67WzxlvP1qWRg5wIrKD0ejtYR29IwGrKZfQRFWY0a4BTTdmjvk5pxmYCFvFKTJVaVEIFOMCJYC6YSOd6QgJpubLzamtlLCoyGMvflTA%2BRukdqPrkBAaEHKFr58%2BeQQEysEA%2Boyf57byHHNq52Osnjr7KmbiAvNVJkLrRA6XZHt95IC8gnciYng5tUR0hAMXpKOug%2BZSrbZaRFFyQA17w4NqxH3LX2Cx7D8s0xco8itnKqRWzvS5mR%2FpTm69CpEPXb84tVdRQ%2Fq%2BN5xSrBbbfI%2BoZcF76vPJ%2BRqeJPhkoI7ENY2uoncJgRhPo5TBnIRxlP3Z33qgTXT2GtRMV%2Fo3YfFs7pKe87w3exw%2FEGt2wwKbP%2BxOe9ZgpGjOnjMcu6%2B9mSMUzyfRpBKwRrqV%2BdGAX8MJym0MkGOqUBX1gvQxGMpUenmUvA%2F2RpeQuueg7YAVUHXKSiXQxjsNDG6eE0E6mx2z7jbM5Zbm0oTbU6qqIG9xgFyIvaamwlBbiQZ2CBQ2hs76nsvJvvJ9%2F0tCGrVB6lM%2FkgGPwVcCuCzjoBt1fx4BXm2If%2FA2CK0Xzj7G3mJgjPDoYCDGr1mlUTckfXtX7cTh%2Bw5jEngjBbBbvZ23y%2Fee1oakPWIiy6MlZDG5u5&X-Amz-Signature=7433c6ca0e7a953934c6799cce81088716aa326bc12a39b33f56d789ced3ef0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

