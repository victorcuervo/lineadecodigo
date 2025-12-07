---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6NQENW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECTOamFVbc%2B6I0uc5YBUbQOHoUTofLVNv8u1CyrwevvAiEAkTPOdQM2ryq6BGhe%2FcjdjHc%2FQbMECOgFgAfER01IWG0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYJ%2FhLMnHLN%2BLVeFircA789OSGKLKvniLEiQ44QO95mUaGzp8Npi94YFBuLoBnh4f63gfeHD2uckJGpkmGUPLW113tSOlBzBxUH4Fh28%2Bwjj3i5MgowcWbp7JsaxteUVKrREY%2Fgt%2FRNEWLo0cehQ8iopS1xT1y1vSZdNf3njsC04KFJakfaDbZUz69L7e%2BPoBmafXLQHWP%2FPJdXOt9wL7hUTzJ2AJGG4bIXbG1iF4AtgSv2i828lvLHRvsbCi%2FS%2BGHGlsuxGD%2F7cSYUrY0Fnkk%2F0M7Ztsywg0mWTtM40XRxSfQRhEHVULeP0U6R7I9Efycm5J%2BsSU%2BhbiolYRldpBY6nUTmzu9jwyWW%2BJROChCw2tRm1yIdxxNw6tIcbv7vcQNChMlGxIL6wQ5o3Ck9TmeGzOSWgteiP6OKU2xbpci9N5Vkd2oLcaf3tDOu10Zpe%2Bh1o7e9hjxrkKxn0cvRDSBLq9JZ3phFeu1fgWXQ3NfASVHzPMsO18lCH68PHqVtWGVftJE2RmvLgru9%2BTby0luIMKMUed8f%2BwIY2ZDaFatEtSw9DshuZsf8Pz9MVlX7okewXZInkrf5H93IZ%2B4KLX2Ur4It%2BScwxlbQK4g0jJjJlPndXdAzPZihqlmbFjc303P8DgpbZPv20mLTMLih1MkGOqUBHr6wikbWE9HTV948Wq9mWyiQOdOJRZVGKgQxLhst63eWXxZ2EIAeXrApEbmpDaM%2FMFH9iodUGquAzw3iKhM6j6i7V2gVm%2FEUb9D4xOfqdbKreEYmB8FnnsJBV%2BEutypDJLq561YIfFMM1%2FaDdz5NJNph0on2a%2B8p%2FYl74BkmacClxDoaDMhWHreZojiV%2BMvf4LKHkaYtsqITBufFSBRufiXwtB78&X-Amz-Signature=a9d3744c7e452dcfbf7c03a5c606a7ffcdc82b3f3fad8c4c284bb0a94ad24f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UW6NQENW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECTOamFVbc%2B6I0uc5YBUbQOHoUTofLVNv8u1CyrwevvAiEAkTPOdQM2ryq6BGhe%2FcjdjHc%2FQbMECOgFgAfER01IWG0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMYJ%2FhLMnHLN%2BLVeFircA789OSGKLKvniLEiQ44QO95mUaGzp8Npi94YFBuLoBnh4f63gfeHD2uckJGpkmGUPLW113tSOlBzBxUH4Fh28%2Bwjj3i5MgowcWbp7JsaxteUVKrREY%2Fgt%2FRNEWLo0cehQ8iopS1xT1y1vSZdNf3njsC04KFJakfaDbZUz69L7e%2BPoBmafXLQHWP%2FPJdXOt9wL7hUTzJ2AJGG4bIXbG1iF4AtgSv2i828lvLHRvsbCi%2FS%2BGHGlsuxGD%2F7cSYUrY0Fnkk%2F0M7Ztsywg0mWTtM40XRxSfQRhEHVULeP0U6R7I9Efycm5J%2BsSU%2BhbiolYRldpBY6nUTmzu9jwyWW%2BJROChCw2tRm1yIdxxNw6tIcbv7vcQNChMlGxIL6wQ5o3Ck9TmeGzOSWgteiP6OKU2xbpci9N5Vkd2oLcaf3tDOu10Zpe%2Bh1o7e9hjxrkKxn0cvRDSBLq9JZ3phFeu1fgWXQ3NfASVHzPMsO18lCH68PHqVtWGVftJE2RmvLgru9%2BTby0luIMKMUed8f%2BwIY2ZDaFatEtSw9DshuZsf8Pz9MVlX7okewXZInkrf5H93IZ%2B4KLX2Ur4It%2BScwxlbQK4g0jJjJlPndXdAzPZihqlmbFjc303P8DgpbZPv20mLTMLih1MkGOqUBHr6wikbWE9HTV948Wq9mWyiQOdOJRZVGKgQxLhst63eWXxZ2EIAeXrApEbmpDaM%2FMFH9iodUGquAzw3iKhM6j6i7V2gVm%2FEUb9D4xOfqdbKreEYmB8FnnsJBV%2BEutypDJLq561YIfFMM1%2FaDdz5NJNph0on2a%2B8p%2FYl74BkmacClxDoaDMhWHreZojiV%2BMvf4LKHkaYtsqITBufFSBRufiXwtB78&X-Amz-Signature=5ee3889b32831e992a6ca22a0332da4d318a664cd5e821e0ea8ae12c9fd455ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

