---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU3SZJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsGqC9WLlGjo2fwGSrLaW%2BHaU9Bkpa8sn2O2SiCG%2BhwAIhAKSsTVDwQEC7t26nchnMeaRh0lsnezpDWz8HFtiErnMJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGXIDFHMuV6JcBqqUq3APuAfZ55apfdj0RoDirRhkxb4%2FeWQr7ZOWA4MjNqPg5o6S5e8Z%2B217KSyoo50Fm%2F82kgTaEnlok0QiPRJwiVUrBdSWJVMDU0gD840VodW1%2BPNGRC6k6s093vyV1CxUHJfjovYEaBVz5C0Ngjkhw6Ibib2i1T279VAdYR%2BZ50Um50h4L7G7hW%2FbJhCvuZX7VBipJoW3lGm1lAQOsmvPPgMNWTp%2FM4ooTVvy9dplJngzQjKP4oVszxJ%2BfxN%2BatLfQaUCQDnI%2FtaGG3nfiWZ7IJiSzd5qkDmq60YFZHdvj%2Ba9PeHmuJG33iilnkWvOBUGwewPkfOBxbDe7QiZI5F4h7Ykmnp91dh40YHngibpaRT9knOl65FGWgRX6Nhz1MYcX0qcrRE%2FR%2FoQmylkQcMPIaYKWKqdk1xwHK%2BaAeatIjRVcvJd2HghHchb5yDr9SFykoWNQiXtfEo6Ywgkxb9ak1p8qg5LW8SgoFoEDinL5iemE15JVxP87kj4o%2FGq7SgRsrPnxEACf64A2VKQnd5uSkfXGmZZPknzhOidRIyz6toWbcFjaeEt9oxC%2B2VCSAN30XnVBnF7TPruHyuSb%2FRRQ6t7jSzTg9IqwLGNKTChIRm1ZCxhb7mkvWj3uHJyF8DDO89rJBjqkAcOImnJ6%2B0x%2FTV2c%2Floue%2BaAQmIz6FclGe%2F1RkEnSMTeljtljICGBRvLrKlR8gcj2DnSzM%2BwJER9eCfAOgawVJiFVYJrfgeQFidbZMgTjkQWiWGnr48DXSlBaRcjsv2%2BTli0KNTxVRSK6GKUJBdIA63pzwvMpr5vRiTZy4D%2FYeNCH9E77bbC2zX%2Fbx6X5Rt8d6xMKZqx3fyvF3hhton%2FV%2F%2BfOFzu&X-Amz-Signature=7153b4df83d049bb3376516da9b850af2fff90bb503266b8070ed8eeef2257fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QU3SZJA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T123212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsGqC9WLlGjo2fwGSrLaW%2BHaU9Bkpa8sn2O2SiCG%2BhwAIhAKSsTVDwQEC7t26nchnMeaRh0lsnezpDWz8HFtiErnMJKogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyGXIDFHMuV6JcBqqUq3APuAfZ55apfdj0RoDirRhkxb4%2FeWQr7ZOWA4MjNqPg5o6S5e8Z%2B217KSyoo50Fm%2F82kgTaEnlok0QiPRJwiVUrBdSWJVMDU0gD840VodW1%2BPNGRC6k6s093vyV1CxUHJfjovYEaBVz5C0Ngjkhw6Ibib2i1T279VAdYR%2BZ50Um50h4L7G7hW%2FbJhCvuZX7VBipJoW3lGm1lAQOsmvPPgMNWTp%2FM4ooTVvy9dplJngzQjKP4oVszxJ%2BfxN%2BatLfQaUCQDnI%2FtaGG3nfiWZ7IJiSzd5qkDmq60YFZHdvj%2Ba9PeHmuJG33iilnkWvOBUGwewPkfOBxbDe7QiZI5F4h7Ykmnp91dh40YHngibpaRT9knOl65FGWgRX6Nhz1MYcX0qcrRE%2FR%2FoQmylkQcMPIaYKWKqdk1xwHK%2BaAeatIjRVcvJd2HghHchb5yDr9SFykoWNQiXtfEo6Ywgkxb9ak1p8qg5LW8SgoFoEDinL5iemE15JVxP87kj4o%2FGq7SgRsrPnxEACf64A2VKQnd5uSkfXGmZZPknzhOidRIyz6toWbcFjaeEt9oxC%2B2VCSAN30XnVBnF7TPruHyuSb%2FRRQ6t7jSzTg9IqwLGNKTChIRm1ZCxhb7mkvWj3uHJyF8DDO89rJBjqkAcOImnJ6%2B0x%2FTV2c%2Floue%2BaAQmIz6FclGe%2F1RkEnSMTeljtljICGBRvLrKlR8gcj2DnSzM%2BwJER9eCfAOgawVJiFVYJrfgeQFidbZMgTjkQWiWGnr48DXSlBaRcjsv2%2BTli0KNTxVRSK6GKUJBdIA63pzwvMpr5vRiTZy4D%2FYeNCH9E77bbC2zX%2Fbx6X5Rt8d6xMKZqx3fyvF3hhton%2FV%2F%2BfOFzu&X-Amz-Signature=780314f792ffda671bbac8676f613545063f6f57f1f9ee9860ebd27fd8aa15c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

