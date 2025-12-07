---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IZYBJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHvrgEkQWsMH%2BGY%2FRgLyHa%2Bje9bbvMNAiZEAJ9PAkgwIhAOEaNbmr9KIBBHkmz5fWG3om%2F2PE6tQYYvmeCQvJzIqxKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM0tzCIRZMG5gti6kq3AOy39NWS5Tq8r2KZjUPlGRVs285BC%2FFYwO22HzM2RFQvqP%2Fx6zEMF87LMF5GFdtmKtdM%2BE87PrXVtfN1zXRCjA52Oo7if1tIdeSdtvJuxWteDou5GhfwaQVAzOrs%2FAMHVANTmkgTk4sGz009Vblk4Q%2FrdkHkKmwjf0E9k1GKSgmhbRuQTZDazxGhQv%2FG67k2QHhIlwhcCLIaVeqtXMJx1dshg%2BALcZd8uGtAtP8Ac886THPU9pbEheyPgN7cQZ%2FLQLK%2FAtxcZXLpObCJZKLG2yAXUtpxM8pQkNTmCWy3eA%2Frvd2T1WHO4%2BqCXaKPNX7in57XzeovbM6Crtz8iI1bP7Nl47k81rThCpjbq3yRnUGzQMjJsigVpsIggkq1a57HEfjE70fTYLThXBjwZ0Inn6TcVSnIrGix7ImbGjxMzffs5Dr6qI8Y%2BXJL09YDGRW1sz8LhRM%2BHkXKhnUxbk%2FozGBOCV0fXxV18dkdw2DMck37nkquDKnPHxGgjzMs%2FeOwhbFUC%2B3S8bP7EkHoE6IfOIBf9JowjgAODpnINKI1FoBq7vJ0TCQp1XgLAbuTqMZL8NWYxLGB2iTpVzT%2BH45zSWw1qZl6teu0Ug%2FleE%2Bp0ZwZCTVt9DOeAFnWE1l6TD0hNjJBjqkAUmNG7VdgiEpKzNywKIYbkhddzbx6a91EGWqVP2lvEiM1mGbCv4GVoYjqNLj7ONWHKzouWUfmeb79BOgLKy0J59qG2RYjVpAmcoxsLCo5Yxl9Q0jQO0EFL1OK3wA%2BXwbCmz%2FT%2F2GF9c9xrCqyF3QQHDKbCh9q%2Fph83Pk7uu%2B0VBHDp7tJdwnuajNOF9U1z2%2BanQ%2FwaL9Fl%2F3FCSzAiX86bvx9OLT&X-Amz-Signature=27606ced863155990dcb92aa091e0379efa825a765633db56052da1b1d1f0037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4IZYBJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhHvrgEkQWsMH%2BGY%2FRgLyHa%2Bje9bbvMNAiZEAJ9PAkgwIhAOEaNbmr9KIBBHkmz5fWG3om%2F2PE6tQYYvmeCQvJzIqxKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyM0tzCIRZMG5gti6kq3AOy39NWS5Tq8r2KZjUPlGRVs285BC%2FFYwO22HzM2RFQvqP%2Fx6zEMF87LMF5GFdtmKtdM%2BE87PrXVtfN1zXRCjA52Oo7if1tIdeSdtvJuxWteDou5GhfwaQVAzOrs%2FAMHVANTmkgTk4sGz009Vblk4Q%2FrdkHkKmwjf0E9k1GKSgmhbRuQTZDazxGhQv%2FG67k2QHhIlwhcCLIaVeqtXMJx1dshg%2BALcZd8uGtAtP8Ac886THPU9pbEheyPgN7cQZ%2FLQLK%2FAtxcZXLpObCJZKLG2yAXUtpxM8pQkNTmCWy3eA%2Frvd2T1WHO4%2BqCXaKPNX7in57XzeovbM6Crtz8iI1bP7Nl47k81rThCpjbq3yRnUGzQMjJsigVpsIggkq1a57HEfjE70fTYLThXBjwZ0Inn6TcVSnIrGix7ImbGjxMzffs5Dr6qI8Y%2BXJL09YDGRW1sz8LhRM%2BHkXKhnUxbk%2FozGBOCV0fXxV18dkdw2DMck37nkquDKnPHxGgjzMs%2FeOwhbFUC%2B3S8bP7EkHoE6IfOIBf9JowjgAODpnINKI1FoBq7vJ0TCQp1XgLAbuTqMZL8NWYxLGB2iTpVzT%2BH45zSWw1qZl6teu0Ug%2FleE%2Bp0ZwZCTVt9DOeAFnWE1l6TD0hNjJBjqkAUmNG7VdgiEpKzNywKIYbkhddzbx6a91EGWqVP2lvEiM1mGbCv4GVoYjqNLj7ONWHKzouWUfmeb79BOgLKy0J59qG2RYjVpAmcoxsLCo5Yxl9Q0jQO0EFL1OK3wA%2BXwbCmz%2FT%2F2GF9c9xrCqyF3QQHDKbCh9q%2Fph83Pk7uu%2B0VBHDp7tJdwnuajNOF9U1z2%2BanQ%2FwaL9Fl%2F3FCSzAiX86bvx9OLT&X-Amz-Signature=6303fc6e1c39fcc5d59685d444c5e97359ddff66cabcada5324e583e49a7f828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

