---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3BTGBD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDYjWWIwOBUh%2BBwIYs143cjqQD1Kt4vFwRisUH%2BPZJAIhALQ6bAaois04oBWp1YQ6w0W2p%2FV3mrg11JUCFLa%2FGeH4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2QiX3j9UHlkPeTmwq3ANwkDY148mrMtlPZ2sctsrsxnxzb6UWZTDcKzKW3D071YOxA0UVQk66%2F0vyc6M37VJl3Mt74%2Bcx03TI1UxKDHrHn4ANASPzbXNJAlnSnicVUo0rJFezf0gTnTfHwRu0ybOXeaJIAf6pgH2QGI2V8YSA5P63vzGggRK7eLax85uA7ZciUQawxtN1aSlS4TV0GoCvI1RIlkzfkFPAYkkndTwiLGuKaSOXCTywTiyRMR70%2FOY0YB4ysWZIu1kBEP29vUXu4YBoayuPg8rZblHvSItE%2BN6tqyAD7kar07P%2FKfzvHyia7sTfcGTP%2BGUeb%2F%2BkwJEIURQoFf8Bdudqjn9R08xt3FZ76tDbpRNUomaxtvvMxo1GdW7FhXV2Pb4yNAMYDPUZFH2H2rgHAKaMNxg4YP3nrx3defYzi5ejtURm3vHAT%2BAg4sYeQYw2oFRkGcguZ0q8pijCzZEwmUP5pHrq1FXuVwlMelxhmzvbSltkUDXvjwyy4KMzktOQMPKQ3Q3NoVwpWbdb9zuMwy7ut0q7UIZgASooz6ySEM6%2FU7AosLAJYm7YxmsnxXN5RwPrsIPmITGv4WtLDmF9phFAE8NYtRFs%2BRoo576MwDVgf0dGiOvNm2zX1MlEw58LB%2BXNVTDNmtXJBjqkAXl9Za31njPZXz70V7KeEAB4lfnmb3OtwA0Ewl8YEoLV7uMptBRImcqoEEpnAtWUOYLgRModHu4a%2BvuIh6y0BTEaHZY4h1JUoo15YzsQj%2FB5Xd%2BRyfS5%2BqHjd5bIZnvpTarpnzRmfFaGQsouta68zonTVBNR7hBT%2BFvciDlsF9zb5L33BugNFpKIaPehdIxGqATFlXlPjHXTlevTwKAMEAGlr8%2Bj&X-Amz-Signature=acd754ac2718e6a44020184c513565749bcd3521335f9036583a27b60619f870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE3BTGBD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfDYjWWIwOBUh%2BBwIYs143cjqQD1Kt4vFwRisUH%2BPZJAIhALQ6bAaois04oBWp1YQ6w0W2p%2FV3mrg11JUCFLa%2FGeH4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2QiX3j9UHlkPeTmwq3ANwkDY148mrMtlPZ2sctsrsxnxzb6UWZTDcKzKW3D071YOxA0UVQk66%2F0vyc6M37VJl3Mt74%2Bcx03TI1UxKDHrHn4ANASPzbXNJAlnSnicVUo0rJFezf0gTnTfHwRu0ybOXeaJIAf6pgH2QGI2V8YSA5P63vzGggRK7eLax85uA7ZciUQawxtN1aSlS4TV0GoCvI1RIlkzfkFPAYkkndTwiLGuKaSOXCTywTiyRMR70%2FOY0YB4ysWZIu1kBEP29vUXu4YBoayuPg8rZblHvSItE%2BN6tqyAD7kar07P%2FKfzvHyia7sTfcGTP%2BGUeb%2F%2BkwJEIURQoFf8Bdudqjn9R08xt3FZ76tDbpRNUomaxtvvMxo1GdW7FhXV2Pb4yNAMYDPUZFH2H2rgHAKaMNxg4YP3nrx3defYzi5ejtURm3vHAT%2BAg4sYeQYw2oFRkGcguZ0q8pijCzZEwmUP5pHrq1FXuVwlMelxhmzvbSltkUDXvjwyy4KMzktOQMPKQ3Q3NoVwpWbdb9zuMwy7ut0q7UIZgASooz6ySEM6%2FU7AosLAJYm7YxmsnxXN5RwPrsIPmITGv4WtLDmF9phFAE8NYtRFs%2BRoo576MwDVgf0dGiOvNm2zX1MlEw58LB%2BXNVTDNmtXJBjqkAXl9Za31njPZXz70V7KeEAB4lfnmb3OtwA0Ewl8YEoLV7uMptBRImcqoEEpnAtWUOYLgRModHu4a%2BvuIh6y0BTEaHZY4h1JUoo15YzsQj%2FB5Xd%2BRyfS5%2BqHjd5bIZnvpTarpnzRmfFaGQsouta68zonTVBNR7hBT%2BFvciDlsF9zb5L33BugNFpKIaPehdIxGqATFlXlPjHXTlevTwKAMEAGlr8%2Bj&X-Amz-Signature=aaba14ac26524d35425c15456280a793c1db8c157edaff3c2329b0f11ef2d778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

