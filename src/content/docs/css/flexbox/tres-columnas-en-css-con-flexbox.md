---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQAUGLS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC474SpzOyuKZk9OkKIDqPhPk2yyfZxYrgtDDJ3HwyGpQIhAMxyHGeh1xqCqn1vd%2BwSlpfHy%2FPTLz2rtfO741LapqpfKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5FmJzDRytBWY258q3APFtKrGlODMmK1TC5FE8%2FCtyRhDBwD0ZuHU2MGjMK1wheePgG4Ou7V9%2F6K1RMtxroba8TybuVa4cVGlcaGXx%2FQFFjoCWKOa%2BlT1wNwEAyOhGPhd7V2Rwylq3TXkFUSZ0dZBa6ZyA7BxmUMAdOkBoTwup5sgOgqEDRD70sDAsvdSdthzdcBakh5Rx4Nf7m%2FWr91xecvYVsVVAE7kAfBbFC3Yeu5LxbykhtILgeGJTuWmzwt2DJFTmOeJ2P7%2B8AEIdHqaSD8fEfyb6%2FhmEP1CWqifqrkCQRfZ9i4JuidoeczTItRNL4whDLMA6%2FBOzIGqlXre0fYL0eU8YT2kiWBzFfmfYaKOsK9CXjJAU4NWEAdz1hb%2BrLY%2FxU7Smnoa92unyo6pbPAdDr7uaeV8oK5UdQr1oJzlj1u01z0gJ%2BVFAfYwYCuOB0eTpnSCkbx2lrBP0B1f3sVR%2BDbcxmtQ%2FFqSkRAlMzCM3FSPrlJHvePfUNPyws2zQkvOLFSMDrB4lLgDnSekvszeSYVMXXSbRvWpcwNAB4a76hyczmtxDLTLZSwafvGI%2BJ25CQbD%2FBYlMX%2F6s9Mza2iW8g6e1zCoN7t3XhtQ%2BcELuZ0FQO6goVRmoys%2F7ihhb0vb58XCPkBrhjCFrt7JBjqkAedZUx1Fi2xXObLwI7GxO3Q90UBfo7PrrsJX2rW%2Fc9pdxyrAQm3xGXke%2Fcy5rGBTs1MUGdRtNai2gK97aQiAsKGuyt5T5PPcWn1%2F4v9kU2yxrk3sxXAyfooa6f8E4vITYgu6BrsVUTI%2BAemE18Z8y2zXh4UqULG1dLH4lb%2B6VAT4NH%2BfGJbxEeD8KFGI0RgDpFDOYtP57z6dtanRH2nAI173eSUd&X-Amz-Signature=5b5616c9436ac114df8d597adb9aa7c4f56ed624b9b89fd8a279f2f611c6278d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SQAUGLS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC474SpzOyuKZk9OkKIDqPhPk2yyfZxYrgtDDJ3HwyGpQIhAMxyHGeh1xqCqn1vd%2BwSlpfHy%2FPTLz2rtfO741LapqpfKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxY5FmJzDRytBWY258q3APFtKrGlODMmK1TC5FE8%2FCtyRhDBwD0ZuHU2MGjMK1wheePgG4Ou7V9%2F6K1RMtxroba8TybuVa4cVGlcaGXx%2FQFFjoCWKOa%2BlT1wNwEAyOhGPhd7V2Rwylq3TXkFUSZ0dZBa6ZyA7BxmUMAdOkBoTwup5sgOgqEDRD70sDAsvdSdthzdcBakh5Rx4Nf7m%2FWr91xecvYVsVVAE7kAfBbFC3Yeu5LxbykhtILgeGJTuWmzwt2DJFTmOeJ2P7%2B8AEIdHqaSD8fEfyb6%2FhmEP1CWqifqrkCQRfZ9i4JuidoeczTItRNL4whDLMA6%2FBOzIGqlXre0fYL0eU8YT2kiWBzFfmfYaKOsK9CXjJAU4NWEAdz1hb%2BrLY%2FxU7Smnoa92unyo6pbPAdDr7uaeV8oK5UdQr1oJzlj1u01z0gJ%2BVFAfYwYCuOB0eTpnSCkbx2lrBP0B1f3sVR%2BDbcxmtQ%2FFqSkRAlMzCM3FSPrlJHvePfUNPyws2zQkvOLFSMDrB4lLgDnSekvszeSYVMXXSbRvWpcwNAB4a76hyczmtxDLTLZSwafvGI%2BJ25CQbD%2FBYlMX%2F6s9Mza2iW8g6e1zCoN7t3XhtQ%2BcELuZ0FQO6goVRmoys%2F7ihhb0vb58XCPkBrhjCFrt7JBjqkAedZUx1Fi2xXObLwI7GxO3Q90UBfo7PrrsJX2rW%2Fc9pdxyrAQm3xGXke%2Fcy5rGBTs1MUGdRtNai2gK97aQiAsKGuyt5T5PPcWn1%2F4v9kU2yxrk3sxXAyfooa6f8E4vITYgu6BrsVUTI%2BAemE18Z8y2zXh4UqULG1dLH4lb%2B6VAT4NH%2BfGJbxEeD8KFGI0RgDpFDOYtP57z6dtanRH2nAI173eSUd&X-Amz-Signature=dea8cef8111a8e2d10ece2cbf81eea87f4cebd2c8d41d3b8756a3fce050c9581&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

