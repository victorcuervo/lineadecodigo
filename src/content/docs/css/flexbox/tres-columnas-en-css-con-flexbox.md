---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ML5KVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCafzlBZItypwtQ2aUruJ0lSqvvVJdSu%2BLnBTf76bhoLQIgCGl5xf%2BrFJgAVw5vR%2BJ3GC%2B%2BqAXwyzEEM7Q02dyV4i8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsE0OWD52Gaw5QLqSrcA5obiYmCMutGLevcOj%2F66%2BuPBYClfSk%2FQKsPhBZblabJSdgI1mUaKZQaV8aVlScYIuO2mjEbDfT3D7v1JmZeQ6E%2BUH3jHdD4UjPyKgffU7NVsLnvJAdSZerN9EcgxwA0f%2Bpjb7zOOH1YSjpY7ace1mUIUpARtuzFngoI9a9zCioq%2FOeOwvvK21vj4fkFPReZxCkckdk%2BqenPdj9czJBWtv%2BJZODF2nIEWE6XDiQtHoPMw2UTiTQDRoyYlnP28BvlEITplXxYLfbo16RykNIK2izA4Zl2IQTkRuHxf%2FpGcooaQ%2FxJtF7jyRbI2Fq5B2%2BC6U%2BMyg8DfCHkO0EcefHgud7iEm5jz%2F9BW3hKFv4TqFLMFELR6FiI3n4a6zgQ1ykeG2KGDErOoaGybwGU4rZXVDxYwxFfy8ENJZHDZt6letXADb2UtOe3Fc2XkHget4g%2BzUrkS39V00gi0%2B8WCCnfo7ctF9adAo68w3%2BeEWlOLMxZ7S3qpXmV2li%2BW9UUiAvlLMCSyM58LIq9m8KA3pk8GYP9k46Jx0SN%2B8sVpR%2B8xYXUKkZ2xvH%2BIBfK47fBmgidcm8zLhAq8ms6GnPt9sObwvbxSXsruz6HNiO8Wnu%2BhYlM%2F%2F5O%2BQxbZH9mCYrbMMaa1ckGOqUBFb%2BrCXtHWs4Y6oCjKbVP05THNrSqDANHkHv0ySx964WAxCipgebGlmuLXUhF3sZTgwSZEbmZZ%2BhiETr%2B1UFHgStCuL%2FbSHQ7iDEpHWPpGzgBrBRtIqeSR9IUAptoLCeRhk7P7VGn2oqWaBYhwxkUC1IMmpKj8yiA%2F3Tdpp1sxL%2FuRdeLqHNrrrDUngnZRraplyhva21gsBq4MOqRD5A%2B3JViArIs&X-Amz-Signature=d954ecc06a8b9aedd3378fb836c4e6eac4730a6a67b63947dd92e65826899a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654ML5KVG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T151338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCafzlBZItypwtQ2aUruJ0lSqvvVJdSu%2BLnBTf76bhoLQIgCGl5xf%2BrFJgAVw5vR%2BJ3GC%2B%2BqAXwyzEEM7Q02dyV4i8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMsE0OWD52Gaw5QLqSrcA5obiYmCMutGLevcOj%2F66%2BuPBYClfSk%2FQKsPhBZblabJSdgI1mUaKZQaV8aVlScYIuO2mjEbDfT3D7v1JmZeQ6E%2BUH3jHdD4UjPyKgffU7NVsLnvJAdSZerN9EcgxwA0f%2Bpjb7zOOH1YSjpY7ace1mUIUpARtuzFngoI9a9zCioq%2FOeOwvvK21vj4fkFPReZxCkckdk%2BqenPdj9czJBWtv%2BJZODF2nIEWE6XDiQtHoPMw2UTiTQDRoyYlnP28BvlEITplXxYLfbo16RykNIK2izA4Zl2IQTkRuHxf%2FpGcooaQ%2FxJtF7jyRbI2Fq5B2%2BC6U%2BMyg8DfCHkO0EcefHgud7iEm5jz%2F9BW3hKFv4TqFLMFELR6FiI3n4a6zgQ1ykeG2KGDErOoaGybwGU4rZXVDxYwxFfy8ENJZHDZt6letXADb2UtOe3Fc2XkHget4g%2BzUrkS39V00gi0%2B8WCCnfo7ctF9adAo68w3%2BeEWlOLMxZ7S3qpXmV2li%2BW9UUiAvlLMCSyM58LIq9m8KA3pk8GYP9k46Jx0SN%2B8sVpR%2B8xYXUKkZ2xvH%2BIBfK47fBmgidcm8zLhAq8ms6GnPt9sObwvbxSXsruz6HNiO8Wnu%2BhYlM%2F%2F5O%2BQxbZH9mCYrbMMaa1ckGOqUBFb%2BrCXtHWs4Y6oCjKbVP05THNrSqDANHkHv0ySx964WAxCipgebGlmuLXUhF3sZTgwSZEbmZZ%2BhiETr%2B1UFHgStCuL%2FbSHQ7iDEpHWPpGzgBrBRtIqeSR9IUAptoLCeRhk7P7VGn2oqWaBYhwxkUC1IMmpKj8yiA%2F3Tdpp1sxL%2FuRdeLqHNrrrDUngnZRraplyhva21gsBq4MOqRD5A%2B3JViArIs&X-Amz-Signature=9c188a70b2d963e477061c26df97fb8fe4bc8fe158c4948d085250a495f595e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

