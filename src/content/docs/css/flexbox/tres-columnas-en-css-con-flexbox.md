---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTSXUWB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDphC2vblXPv2WXJnB1Pn31e%2B0L7ZwVAxczeVzunIbo5AIhALKIfp9Wmw8UyKlk4UcY2oWJEHHMsr1athlTCr%2BvUlCrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2BZi3iGJvAgSfH80q3AOlBLXkfeOYTLl6A7aQM1%2B3V%2FKHKYT8s3ixpbNOQRfFcXwb%2F5o6oIgKjDFo38hR1aJEp%2BKFxsL6ZEtahojceFCVDuFIfXiEH%2ByKCZexR5ngRGNWaYtxZ0AI9YqZjGDAE8dXiM0pmqfphVE%2BpOI%2BWnCFDjU0vGCuZTDKvOF%2FnI9%2BcSdY7eF9KoJ4%2B69CxSKZ3M2Ba24ZXTOwl%2FbcxJniVXMk4EtXTDHdIok6EOtuznc%2B1yToFhCLVUtNU9NJX4h4YifZ0Ys0W%2B09xlZ1AlBFwr4D5z%2FDcADL8Rg6tj%2BZ8D%2BfnyXK1yaMKOxc2b%2Flmgg6UGB1zl7BSJEJdLtr%2F7eSYip8pEpBvjsAcrXv0raPwn4iCsjDyK8CCv6gyCXs8%2B96iX3gqZPShZrjO83T8v6fy32Tn8T%2FD%2BDTyoCs8wm6RZnXsEnIgKQiZPqyZkwWlTd6HNGiAp7ZgNrepK5PB0kvBLGx7Br3l0abvp63eaRZmpk1DNpQIekXKREX288zVQEcLk%2BKk3tsLTFPzgoKiREcUi2kywUy4AFJ%2FLoyv2J6VM4q5t%2Bu19WgSPKmS3MSiVAGLoVs7kOVO5dFuvaekjLk3X8YQKh1GxOAcR5wqUWs4T5S75%2B2W3MGWLmoqk7K0jD4%2FdLJBjqkAXuR0mQi4p3ty7YT79xYW9rwFx8kdpADnANjDBBXTmWRiZoPE1aibSt9a9qHXntoBMPtsB5yotFg91XcZq3Cn7htVjWYNiKBfGq%2FWYGGNeryLgrGbsbu0Kn25unNsS0zkPKBGqRgqktqrZqO8H3itnW0b4s1i1fJ2DdPsoiv4Mofu1Xc1Q7tWnyYzBqVWsC5eXW1dpkVbkAOPbTSGVkshJIv0CJc&X-Amz-Signature=45811b1d2969e854e2612b4e68f4793d14b10e04bfd1a49b0fb517e21ebb52c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTTSXUWB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDphC2vblXPv2WXJnB1Pn31e%2B0L7ZwVAxczeVzunIbo5AIhALKIfp9Wmw8UyKlk4UcY2oWJEHHMsr1athlTCr%2BvUlCrKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz6%2BZi3iGJvAgSfH80q3AOlBLXkfeOYTLl6A7aQM1%2B3V%2FKHKYT8s3ixpbNOQRfFcXwb%2F5o6oIgKjDFo38hR1aJEp%2BKFxsL6ZEtahojceFCVDuFIfXiEH%2ByKCZexR5ngRGNWaYtxZ0AI9YqZjGDAE8dXiM0pmqfphVE%2BpOI%2BWnCFDjU0vGCuZTDKvOF%2FnI9%2BcSdY7eF9KoJ4%2B69CxSKZ3M2Ba24ZXTOwl%2FbcxJniVXMk4EtXTDHdIok6EOtuznc%2B1yToFhCLVUtNU9NJX4h4YifZ0Ys0W%2B09xlZ1AlBFwr4D5z%2FDcADL8Rg6tj%2BZ8D%2BfnyXK1yaMKOxc2b%2Flmgg6UGB1zl7BSJEJdLtr%2F7eSYip8pEpBvjsAcrXv0raPwn4iCsjDyK8CCv6gyCXs8%2B96iX3gqZPShZrjO83T8v6fy32Tn8T%2FD%2BDTyoCs8wm6RZnXsEnIgKQiZPqyZkwWlTd6HNGiAp7ZgNrepK5PB0kvBLGx7Br3l0abvp63eaRZmpk1DNpQIekXKREX288zVQEcLk%2BKk3tsLTFPzgoKiREcUi2kywUy4AFJ%2FLoyv2J6VM4q5t%2Bu19WgSPKmS3MSiVAGLoVs7kOVO5dFuvaekjLk3X8YQKh1GxOAcR5wqUWs4T5S75%2B2W3MGWLmoqk7K0jD4%2FdLJBjqkAXuR0mQi4p3ty7YT79xYW9rwFx8kdpADnANjDBBXTmWRiZoPE1aibSt9a9qHXntoBMPtsB5yotFg91XcZq3Cn7htVjWYNiKBfGq%2FWYGGNeryLgrGbsbu0Kn25unNsS0zkPKBGqRgqktqrZqO8H3itnW0b4s1i1fJ2DdPsoiv4Mofu1Xc1Q7tWnyYzBqVWsC5eXW1dpkVbkAOPbTSGVkshJIv0CJc&X-Amz-Signature=a988817573b2bf4cb365c77e38ca94c15ae65e77fe3682d965053aafde794685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

