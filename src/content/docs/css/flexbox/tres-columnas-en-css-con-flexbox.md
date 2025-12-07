---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADLKQDI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqiio7tNocxxf3poDfR8U83B4hlAQx3dA%2FUZRok%2F4pbgIhAM5kkuCoxFMXQvwp9TLaUhBo2H3FX5jrbuiAwGc3yPo%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9BBdnPIhuDJiyE6wq3APtTKsA4OG1d6eAbroKwkRvdP6fPqwKmjCLHV3iw0iMmD4OR3B8om1%2F8B2e178Bb0pEKKBPT8vaqVnqMe6gXv74dWdGHAHBuB4TKfJ2PSuPzEtewEUFRDvIrGD7NiqUt%2BfhlbjEP9x81XA%2F%2F2jWW%2BE%2B9uf%2FudlGXvyV2AKKsUOK5jq2Ik7O7QwwmsdVlkdbNQxEdoCeONLB8SqtjByR5EUsSCS%2F5TMUpd5QYIhdXlzVyrtiYu6XBM00zlqeF3t1fZbIQZ6%2BlJ%2Fe0Ody8Wt7IxjYa1O8NYrGN9V66sAJGfPWazhiF4FI8H9%2BWLGfdMmZCsmgoFb9NJg2BOV8vn%2F89bW9RIWafknPar%2BeCK7gh97uyF4r7P71HOmwPGiCFh4d4fNP%2Fj1rhtVlxEpfxX99NjL2cUe%2BmdhaZzVO4F2ATdVzF5Y28J%2BLLn2QmUDoaocpT0ieN9LIima2zy%2Bcz04hJ78VtvUrnWmhk0ewt1SSVXU8oCKrbCOneM%2FZ7JhT%2Fi8gOVTkqg7GCS2%2BCup2pbx04rVATmN3lQikcaFUuf7BzI%2FR4uk79x8qqyIO4BM68N%2B0WeYyFO52DUY68XNIGEmH4cYBuA87ZCAhyfCbI3Vqsf%2B9d%2Fn9dSujq5uYRr16gDC9vtbJBjqkAd83IA%2BzSurd84fxJjw9ABN%2BQ2qKx5%2FhUXdgEx%2FIFy9h%2B2xFXrnFz%2FjsSVsmobXAEsMRTsA%2Flp8x6EXoUB1BOpN74A9rfx4ifPwnIVLB4D6bSLIdSDkUPUTcFRtAVH2JwCB%2BQeheMTjlrAiVnq9lJvtmUPwb4cLaKwHL3M4n55FcRuHatjnjJedroTi45DdTWhxlt6cGxuxr4i0TzoRGTrOLyG9e&X-Amz-Signature=c46862e47f205dd67a7fd95058e909c2bcb3b6f7636a80140ef63964bd90bdf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADLKQDI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqiio7tNocxxf3poDfR8U83B4hlAQx3dA%2FUZRok%2F4pbgIhAM5kkuCoxFMXQvwp9TLaUhBo2H3FX5jrbuiAwGc3yPo%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9BBdnPIhuDJiyE6wq3APtTKsA4OG1d6eAbroKwkRvdP6fPqwKmjCLHV3iw0iMmD4OR3B8om1%2F8B2e178Bb0pEKKBPT8vaqVnqMe6gXv74dWdGHAHBuB4TKfJ2PSuPzEtewEUFRDvIrGD7NiqUt%2BfhlbjEP9x81XA%2F%2F2jWW%2BE%2B9uf%2FudlGXvyV2AKKsUOK5jq2Ik7O7QwwmsdVlkdbNQxEdoCeONLB8SqtjByR5EUsSCS%2F5TMUpd5QYIhdXlzVyrtiYu6XBM00zlqeF3t1fZbIQZ6%2BlJ%2Fe0Ody8Wt7IxjYa1O8NYrGN9V66sAJGfPWazhiF4FI8H9%2BWLGfdMmZCsmgoFb9NJg2BOV8vn%2F89bW9RIWafknPar%2BeCK7gh97uyF4r7P71HOmwPGiCFh4d4fNP%2Fj1rhtVlxEpfxX99NjL2cUe%2BmdhaZzVO4F2ATdVzF5Y28J%2BLLn2QmUDoaocpT0ieN9LIima2zy%2Bcz04hJ78VtvUrnWmhk0ewt1SSVXU8oCKrbCOneM%2FZ7JhT%2Fi8gOVTkqg7GCS2%2BCup2pbx04rVATmN3lQikcaFUuf7BzI%2FR4uk79x8qqyIO4BM68N%2B0WeYyFO52DUY68XNIGEmH4cYBuA87ZCAhyfCbI3Vqsf%2B9d%2Fn9dSujq5uYRr16gDC9vtbJBjqkAd83IA%2BzSurd84fxJjw9ABN%2BQ2qKx5%2FhUXdgEx%2FIFy9h%2B2xFXrnFz%2FjsSVsmobXAEsMRTsA%2Flp8x6EXoUB1BOpN74A9rfx4ifPwnIVLB4D6bSLIdSDkUPUTcFRtAVH2JwCB%2BQeheMTjlrAiVnq9lJvtmUPwb4cLaKwHL3M4n55FcRuHatjnjJedroTi45DdTWhxlt6cGxuxr4i0TzoRGTrOLyG9e&X-Amz-Signature=863ae770501dc7de0689ab21e621a68add846736805557ed0560306e4c399266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

