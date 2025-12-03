---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4AFZO24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFJeKJzr%2BmqfmatWCFDum0UeWz3VwjDeryLgZ5It5e4gIhAPuEtC6YUsCa5dlg95%2BK%2FWmnqv397mvbOwlsaTBuOsmXKv8DCC8QABoMNjM3NDIzMTgzODA1IgwYRhwoJiEzOvkdxi4q3AMLILQkqi1oLSQHEm2%2F6mkwkSefoz2eyD6nrlfWvcxKEjmJ0MzrsLSEw2SXRrrnfoHI%2FyU486%2F23mxDvAqmYniGhcj0ffY94bLJPjHztAuHnpD2LxbD6In57zjQ6AiqT8jZxGkHYxNGS6ps8fJaNdTDCPFsf4cGCTTj6zTYP013Iw3%2BBpWp%2Bsw50g1xLur0ClAdENaCGhNdCX3odWn98DKLsH2DhqTtrgh%2FvoPgQOTMMtyk6IpB2NazLv2FWb3DjEbpIe1BsiewUIcBT5PKLJCq4Xw4avAyPQkQqy4KYgKHN7o%2B56DoeN4JoC%2BAdPsMntNcHnb6SbyyO%2BzcCCPPrUAd3JokAKWZQRWOffTUuwg60wRErxJ%2BnAg1zh8PgfTzY8yYxLnSQs6G0Xbx30C4PIYNwvwWj2Gh9tvpzcIZ4jPR5MYH9qoHkLgUdkQ4E4%2B3XiyMLH4%2FgmtGp2SAeXHd63tFLXc6oSaPLLBVi2yc1ANV%2FoKaUSGUcGl4ajTNdFYE1IQkFgNpaddt19fMRW57qbP4hKt%2F2pHb16rmU9FL6q6WEQWQyOf0Z4UEb2WX8DmYWAazDS0JpcTuruHDsOB%2FqQoYCf3W4saiPNPjJGn4oR%2Fotpf4nNdG45rKsbZMNTCZiMHJBjqkAdi6YgaLIcJoTotXAA%2F2OTcw%2BSE%2F2pebDC%2Fuse4JbYY4trgUrHDoreUENyufKJ0UgLa89qsxcVlcsv4CH3kKtxKEvxhODY5e%2BZ0EZDCq93G0rmvaXb3Yt65GQWKydebkTPCLAJ79aI8TUX3xQ1GS3nz0EImfcHxVvEYKH7EHxqOo3ga0qwER1foE1wcPXkT8fKZ1gekzsjZHx2%2FOQ4gWMcVCo0qU&X-Amz-Signature=5077544285b6994b0e7d338aba61c1611fbdec9be2c2652eab16dc42a8c4cfac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4AFZO24%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T142818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFJeKJzr%2BmqfmatWCFDum0UeWz3VwjDeryLgZ5It5e4gIhAPuEtC6YUsCa5dlg95%2BK%2FWmnqv397mvbOwlsaTBuOsmXKv8DCC8QABoMNjM3NDIzMTgzODA1IgwYRhwoJiEzOvkdxi4q3AMLILQkqi1oLSQHEm2%2F6mkwkSefoz2eyD6nrlfWvcxKEjmJ0MzrsLSEw2SXRrrnfoHI%2FyU486%2F23mxDvAqmYniGhcj0ffY94bLJPjHztAuHnpD2LxbD6In57zjQ6AiqT8jZxGkHYxNGS6ps8fJaNdTDCPFsf4cGCTTj6zTYP013Iw3%2BBpWp%2Bsw50g1xLur0ClAdENaCGhNdCX3odWn98DKLsH2DhqTtrgh%2FvoPgQOTMMtyk6IpB2NazLv2FWb3DjEbpIe1BsiewUIcBT5PKLJCq4Xw4avAyPQkQqy4KYgKHN7o%2B56DoeN4JoC%2BAdPsMntNcHnb6SbyyO%2BzcCCPPrUAd3JokAKWZQRWOffTUuwg60wRErxJ%2BnAg1zh8PgfTzY8yYxLnSQs6G0Xbx30C4PIYNwvwWj2Gh9tvpzcIZ4jPR5MYH9qoHkLgUdkQ4E4%2B3XiyMLH4%2FgmtGp2SAeXHd63tFLXc6oSaPLLBVi2yc1ANV%2FoKaUSGUcGl4ajTNdFYE1IQkFgNpaddt19fMRW57qbP4hKt%2F2pHb16rmU9FL6q6WEQWQyOf0Z4UEb2WX8DmYWAazDS0JpcTuruHDsOB%2FqQoYCf3W4saiPNPjJGn4oR%2Fotpf4nNdG45rKsbZMNTCZiMHJBjqkAdi6YgaLIcJoTotXAA%2F2OTcw%2BSE%2F2pebDC%2Fuse4JbYY4trgUrHDoreUENyufKJ0UgLa89qsxcVlcsv4CH3kKtxKEvxhODY5e%2BZ0EZDCq93G0rmvaXb3Yt65GQWKydebkTPCLAJ79aI8TUX3xQ1GS3nz0EImfcHxVvEYKH7EHxqOo3ga0qwER1foE1wcPXkT8fKZ1gekzsjZHx2%2FOQ4gWMcVCo0qU&X-Amz-Signature=fc833c3ea8e1e5558c31b430f6409e9392565773a9f98e84632cede97ba087bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

