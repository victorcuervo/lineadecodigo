---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUGB46H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNgymwcQZ3vtOArXu4xMXpNVGWDOFSQEXxmhktMlXaRwIhAInh9%2BpNY%2B5te6xVl5zNwrSciD7EXmE13nP7vs2gCZ9OKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7Je65rcG8LCfyY8q3AMdl1rXQML2A4rudMpb1bScQBEf2WIaxAdEGJt2X9T3q9SvgCtAfv4Pkbye%2BbwtlOaM3I3wGBoR6bTSwAcOUy9%2FoHQ8DlwDgSTH%2B6bi61YOb8NGpr9dfeLB3FOPrpo39WEYV48hp3BOGVdGY%2BIwUMdkPjOapmPqLjaGK8FvOMn18sEXuwfj94RVykk3rRagou7OMRWHE5x82c5T6QW2n6WFUF8OnfQ2l1ai%2BIasjCMWswXAx5q%2FdLZdkdj0o4rdwFwAjKGBkeXVnPWXtsymT5r3%2Fun36O22ccLsfy%2Fovg%2BfzQpVXGgjLgXow5TFKtRsHp%2F9OFi%2BW0NewWBPXDazAH%2BmOPfdEP%2FjZJ7svneeOl6SthJ2mZc%2F6Wpq5mf%2BILSWZbOJtKzao7dBfMbmCGS%2FIswtox27DoceAEdN7sxYHsCKvC0GGFk19yH21UjiHgxQcsBfeknHqdvKRAJUYx7YgtcfKeBREUugANhWE3GJeyIXSXvAzpxz8i%2FhZb5AG59tEc6uy8FWNQYLfiM9%2B7sDzEMjbXXGkhpv7T1DSwQMPC7qTnXO%2BoEI%2FtLQdZ9k2HJR6NkKFauCRgbxPXCiaypprDNvzC7u8mJb1%2FOEkqDnVDs3biBomWSMvYXq0KnqfzCPuNbJBjqkAd%2B%2FNCXA6MwhXkFoRSGZ95pIpUMZN6v3fTnwA8X6Zw3%2F0mkR3NIJBgimbrt%2FBXzaTpgvI%2BSEt279L80VjXHvepuWVit7PGRvOY9wk5GxRGZD0CVq8fxZyjr%2Bs3Xoacmi9J4ehnRyLlqPE74RLsI5w2EHOa69HN8vp8L%2FEGcDZssDql93kwU3TT%2BZvYuW%2F3A%2BSOkccLaAOKmOFsx2NBKaOQQD5N34&X-Amz-Signature=723f3764f2724f2f23950e2278fc7b5095d76e853f90bdac0d0c73c35dd559f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSUGB46H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNgymwcQZ3vtOArXu4xMXpNVGWDOFSQEXxmhktMlXaRwIhAInh9%2BpNY%2B5te6xVl5zNwrSciD7EXmE13nP7vs2gCZ9OKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxU7Je65rcG8LCfyY8q3AMdl1rXQML2A4rudMpb1bScQBEf2WIaxAdEGJt2X9T3q9SvgCtAfv4Pkbye%2BbwtlOaM3I3wGBoR6bTSwAcOUy9%2FoHQ8DlwDgSTH%2B6bi61YOb8NGpr9dfeLB3FOPrpo39WEYV48hp3BOGVdGY%2BIwUMdkPjOapmPqLjaGK8FvOMn18sEXuwfj94RVykk3rRagou7OMRWHE5x82c5T6QW2n6WFUF8OnfQ2l1ai%2BIasjCMWswXAx5q%2FdLZdkdj0o4rdwFwAjKGBkeXVnPWXtsymT5r3%2Fun36O22ccLsfy%2Fovg%2BfzQpVXGgjLgXow5TFKtRsHp%2F9OFi%2BW0NewWBPXDazAH%2BmOPfdEP%2FjZJ7svneeOl6SthJ2mZc%2F6Wpq5mf%2BILSWZbOJtKzao7dBfMbmCGS%2FIswtox27DoceAEdN7sxYHsCKvC0GGFk19yH21UjiHgxQcsBfeknHqdvKRAJUYx7YgtcfKeBREUugANhWE3GJeyIXSXvAzpxz8i%2FhZb5AG59tEc6uy8FWNQYLfiM9%2B7sDzEMjbXXGkhpv7T1DSwQMPC7qTnXO%2BoEI%2FtLQdZ9k2HJR6NkKFauCRgbxPXCiaypprDNvzC7u8mJb1%2FOEkqDnVDs3biBomWSMvYXq0KnqfzCPuNbJBjqkAd%2B%2FNCXA6MwhXkFoRSGZ95pIpUMZN6v3fTnwA8X6Zw3%2F0mkR3NIJBgimbrt%2FBXzaTpgvI%2BSEt279L80VjXHvepuWVit7PGRvOY9wk5GxRGZD0CVq8fxZyjr%2Bs3Xoacmi9J4ehnRyLlqPE74RLsI5w2EHOa69HN8vp8L%2FEGcDZssDql93kwU3TT%2BZvYuW%2F3A%2BSOkccLaAOKmOFsx2NBKaOQQD5N34&X-Amz-Signature=f39768b40206007927833d13e29f0bd2f8665bb7225c5e66bd4fdf1958f2ce10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

