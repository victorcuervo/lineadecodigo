---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJHHDK3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqvHtNWTxczL0w1AnpcVHDj9BFMyw6AUQtI6rms7qVuAiAjg2%2FYQM7OliSRMxWxA9FvJaxlaiJhz3bDdvprxP3SdiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM63geTlYFY%2BMe6%2F9cKtwD6v7BKmHN1oGFi4U41ZvbyVkezHWUI8S6Zw5wGDRBMJ58s9iK2ZtGLljtDaU505YubmGnbc4191XOpP8oIRGkQ8ozU%2FELVZD7o7q4aZR%2BHnnK5NaXlooN0ybAu5P7Hmh%2BmT5AMdOIREoRDy233fENkdqgIx4atFHx2eEfIj6uUP6uwUJkTDIGGFbUZElkuZj9srC0dHOWbyx6WVSpF01elNmZZxi0yn8FuU5kQLd3PYPeVuEVefFQ9ocdWlKzom%2BmA6iwOt5Gw0pK6uwUlOMNxVm2TzoDSKKK%2FlyMrWzMHb3YpkVbF8j5Rf2svPJ3syMu5jS15Tq%2BA00tVM1NEnoeRPUQvgr3ImW7E1T5EqCWXKxgHA3j8UkhRA8W1q7Iea9VBGKbbt7CR%2FXDVDSeMJzHgfm3BTyeuS9qBXMgOibOkZdRKfyfuLCmeJSujEAq%2FgpzPST8E1%2BBlx5fsHyBto8J12F4ca1TWk9SiVN88VDFEkp6cE7iLMNpsHy5P5%2BmnWEgovI2eHlo4if0Fe0Sx7TG4hGPMW70JhWw%2FobkTGuQSIPALLt%2FFh2CUayt%2FhHAzIYKlSa%2BGTFSMvbFX%2FZENk6IR6nRm0uteyvM7GNtXS0%2FNR4CMVBwedi4lGdtoJEw0aTfyQY6pgFgNHC9M42vQBpMEK%2BXqlxvy62lPppZt3n9MIXmzB%2F%2F4TMQuoc7CJEOgyERKJ6mSTH2q68dyxYmfT1FwhCHE7NyQwkbowd9vPvJN5UQI8qdWQESdkJTa9gjCcsM0XQZxPhXiwY14p0%2F671DppLNnk6EwUKqxwcq2pMeVIq6EvQFqcY2%2FVlf9VqfcBIgwAUZalXivNKqdl5xpSF8kJbHWUZCA5Dta0KC&X-Amz-Signature=75493adcbfb2734a7612fc8d1edbc080bdd45da99fbb9d17cea5b969d0f89333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJHHDK3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEqvHtNWTxczL0w1AnpcVHDj9BFMyw6AUQtI6rms7qVuAiAjg2%2FYQM7OliSRMxWxA9FvJaxlaiJhz3bDdvprxP3SdiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM63geTlYFY%2BMe6%2F9cKtwD6v7BKmHN1oGFi4U41ZvbyVkezHWUI8S6Zw5wGDRBMJ58s9iK2ZtGLljtDaU505YubmGnbc4191XOpP8oIRGkQ8ozU%2FELVZD7o7q4aZR%2BHnnK5NaXlooN0ybAu5P7Hmh%2BmT5AMdOIREoRDy233fENkdqgIx4atFHx2eEfIj6uUP6uwUJkTDIGGFbUZElkuZj9srC0dHOWbyx6WVSpF01elNmZZxi0yn8FuU5kQLd3PYPeVuEVefFQ9ocdWlKzom%2BmA6iwOt5Gw0pK6uwUlOMNxVm2TzoDSKKK%2FlyMrWzMHb3YpkVbF8j5Rf2svPJ3syMu5jS15Tq%2BA00tVM1NEnoeRPUQvgr3ImW7E1T5EqCWXKxgHA3j8UkhRA8W1q7Iea9VBGKbbt7CR%2FXDVDSeMJzHgfm3BTyeuS9qBXMgOibOkZdRKfyfuLCmeJSujEAq%2FgpzPST8E1%2BBlx5fsHyBto8J12F4ca1TWk9SiVN88VDFEkp6cE7iLMNpsHy5P5%2BmnWEgovI2eHlo4if0Fe0Sx7TG4hGPMW70JhWw%2FobkTGuQSIPALLt%2FFh2CUayt%2FhHAzIYKlSa%2BGTFSMvbFX%2FZENk6IR6nRm0uteyvM7GNtXS0%2FNR4CMVBwedi4lGdtoJEw0aTfyQY6pgFgNHC9M42vQBpMEK%2BXqlxvy62lPppZt3n9MIXmzB%2F%2F4TMQuoc7CJEOgyERKJ6mSTH2q68dyxYmfT1FwhCHE7NyQwkbowd9vPvJN5UQI8qdWQESdkJTa9gjCcsM0XQZxPhXiwY14p0%2F671DppLNnk6EwUKqxwcq2pMeVIq6EvQFqcY2%2FVlf9VqfcBIgwAUZalXivNKqdl5xpSF8kJbHWUZCA5Dta0KC&X-Amz-Signature=93fae6d1a10ff06ffdb18307a900c9b38fd668b1b1c243aa2e1b2574ff0c21ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

