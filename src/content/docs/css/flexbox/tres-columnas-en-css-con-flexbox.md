---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLQAIKB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIJBrtth0zo%2F%2FkI7IYC%2FRGZsB080NkW%2FdX1qI%2BQjmaZAiBpO4Z0JziZryduvigQykADJjuUwI6tz6DMPfsOccTl4iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAuvMcEAbIIzG4gr4KtwD8mug9SFfIxFYLm4K6Z%2F8L8F%2BipixGzeBgvkU4dRlz%2Fo8utv%2FlszMTfWX3CkQnfFW3n%2BrlkJAsiJSg6XbhYMzX1WQHjiL9gkMDuN2GbIebmPrV21C6ACh9FjShqGeFgxt%2BSAdmmb3bQ1wTFwobM%2BD3OqtBivmGKGzM3sNLkU1gyeV%2BQAy5CHbrqMjuwjhrGPtQmDYmOuqVHAXs2AcnC4Lofl76q3oQwnrFDZ0kHNT18sLO5BmFiLV3fC4EvwVRpo4f8dWRN52z%2BD7%2BOI70PzmRhgxCfFNyFu6POIHWpAsZh3NeR69zI%2F0BlQDIVWD%2FVF30iFI8D4QfVw6fGYq0qVqb8OPh6pc2Qnl%2FvF0igIaNPbZIRtM%2BE1FCJhr%2BicmjobyjsMQxX1rxVsNO93ksTPKEIUSnHY1FvZyoywtejGbTvkEj2tfdlc6kVhvbOuTVNh8uBiJX62jyL81Xw4QWCMird%2BDTirFQZSYcTmsKFteokeDvb9vhhSNBscdZ1P%2BORFOdVVZFMEHTUvneZe5cfRm3k9XdUPtlC0TmBFwcEb4nqMvzLjSFc6jl2NXwlmVZyqpStgYlN6wHvv7jYU2TuAgEFKxWDQ6AIGZxyxoL335OHyXjw0%2Fjitpxji3ZAEwm8PdyQY6pgF2rGlPydJ7yJFu1ywSUNAQQ8UsBM9U%2FnThVThGd9ozMQ%2FYQn4OTdQ4aycMGvUcmwUG%2FbYhB9TgITLH1aIT8CqtBhOV5bKL5ejgf1qHxHcYSdnK5t3gBOaavCTFl7UH7iWoaeZII72zIKMTSAyYwEefPbCepD1aY29Ele4wHuEhz9TA8wPEU%2F4poa96evpDsC83IdztSbgtNWPpyJEf8AhG%2FleuzmJ6&X-Amz-Signature=f2edd9db900dce7d5115c35507de6aeb5f006f765d126e86fbbd296d5661dc67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PLQAIKB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIJBrtth0zo%2F%2FkI7IYC%2FRGZsB080NkW%2FdX1qI%2BQjmaZAiBpO4Z0JziZryduvigQykADJjuUwI6tz6DMPfsOccTl4iqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAuvMcEAbIIzG4gr4KtwD8mug9SFfIxFYLm4K6Z%2F8L8F%2BipixGzeBgvkU4dRlz%2Fo8utv%2FlszMTfWX3CkQnfFW3n%2BrlkJAsiJSg6XbhYMzX1WQHjiL9gkMDuN2GbIebmPrV21C6ACh9FjShqGeFgxt%2BSAdmmb3bQ1wTFwobM%2BD3OqtBivmGKGzM3sNLkU1gyeV%2BQAy5CHbrqMjuwjhrGPtQmDYmOuqVHAXs2AcnC4Lofl76q3oQwnrFDZ0kHNT18sLO5BmFiLV3fC4EvwVRpo4f8dWRN52z%2BD7%2BOI70PzmRhgxCfFNyFu6POIHWpAsZh3NeR69zI%2F0BlQDIVWD%2FVF30iFI8D4QfVw6fGYq0qVqb8OPh6pc2Qnl%2FvF0igIaNPbZIRtM%2BE1FCJhr%2BicmjobyjsMQxX1rxVsNO93ksTPKEIUSnHY1FvZyoywtejGbTvkEj2tfdlc6kVhvbOuTVNh8uBiJX62jyL81Xw4QWCMird%2BDTirFQZSYcTmsKFteokeDvb9vhhSNBscdZ1P%2BORFOdVVZFMEHTUvneZe5cfRm3k9XdUPtlC0TmBFwcEb4nqMvzLjSFc6jl2NXwlmVZyqpStgYlN6wHvv7jYU2TuAgEFKxWDQ6AIGZxyxoL335OHyXjw0%2Fjitpxji3ZAEwm8PdyQY6pgF2rGlPydJ7yJFu1ywSUNAQQ8UsBM9U%2FnThVThGd9ozMQ%2FYQn4OTdQ4aycMGvUcmwUG%2FbYhB9TgITLH1aIT8CqtBhOV5bKL5ejgf1qHxHcYSdnK5t3gBOaavCTFl7UH7iWoaeZII72zIKMTSAyYwEefPbCepD1aY29Ele4wHuEhz9TA8wPEU%2F4poa96evpDsC83IdztSbgtNWPpyJEf8AhG%2FleuzmJ6&X-Amz-Signature=8c432a2c7b85a341d290db21961937d4a9a641e63c689441da1343fb40b88001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

