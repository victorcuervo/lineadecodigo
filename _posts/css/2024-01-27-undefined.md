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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXVHX5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2MgvFRNjHb0QKjhhT1egikIs6TU1JgXr%2ByGcmfctWawIhALDO167ZmsW8KuJgWFZYDfH6UisLrkUOD%2B0sheVqcZvNKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5PApOvQn%2Bl4of9ywq3APkr7YJLCIN%2FpsTRFv85m80oHUu0rNLYc3rhqKt1eMU21LgwAEh5U60TFl9HPuoJc6gyNHHKgcdoSc2k0%2BjhLuC6Ll6n%2Bkpibb9OXKbUE87MfVfWxXhqI7hW5d7Vd95fB7weXxv7OlA0CYNIjzDxWf7CIs2vLGKiW9sDOuzNnVuVxCkd18tR3O%2FZUEY55jeGDftmP2rcUs48uaK%2F%2F%2FaVAnYrNMPzqKvkod9XJ7NE454dWYv0mQCh%2FlTgmo3jbVqSVU2vjq1tZXRAWsd2A6Gk6siNaEPbHAOHj3m2J1wEzWKYs4CcImlF%2FW4DAYPE0QiTkX9T5uw%2BI9BNpc4RCkHfthOVOOCEvm2IJgbo%2Fp6Yj%2BoNozoN9P%2Faw6lUsfGEfvFHNSZV3rQH%2BDXLlr4hwzttJWzjkHMvtzDRPsBTs5FRGqL1unq365NaDftNTgQzqA6PKxH3qmVGCBWSPJFc2x86tS7rlKdzMAXGWbLAbb%2BZjS7MisISWcy%2FBN2MIk4vrmlqQYBdANTaJPnh%2BcYMrfTKzcwbTeRD74ilX5sis5cCTSMm5SeF9RAjqjVNY%2Fg7QSS2Ta8%2FRcCWFqp5x%2BlX0VJWCbW9pQ3QyTe2kV1X5i48sFX69tVsabaHKlGSHvnujDh1L%2FJBjqkAS3DO%2F8UL5B5v4KjrlyOFvAS%2BNL80trEaBoiypn2A5m%2F3hyU%2BfSAUurPDUzJ2aNpnZ1cTVwidhFI91pHXq1BQ2rHN0JPckkXbf%2BZWmI4H5aEoA8klVBgzsVGtT6YwGdpI6Kogz1mw8Ms2qcQrt8rHI5%2FDrj9MCfSJsJJuME1hQAQcZHjFteE7eT8yxHituqcrj%2FsHi%2F5ZEPYfaIBvd6ipH2lEwg1&X-Amz-Signature=cbaf74a6ea969fd49166347d5250ddaedb1c71ee94b319b961452100df1a363b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZXVHX5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T083234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQD2MgvFRNjHb0QKjhhT1egikIs6TU1JgXr%2ByGcmfctWawIhALDO167ZmsW8KuJgWFZYDfH6UisLrkUOD%2B0sheVqcZvNKv8DCCkQABoMNjM3NDIzMTgzODA1Igz5PApOvQn%2Bl4of9ywq3APkr7YJLCIN%2FpsTRFv85m80oHUu0rNLYc3rhqKt1eMU21LgwAEh5U60TFl9HPuoJc6gyNHHKgcdoSc2k0%2BjhLuC6Ll6n%2Bkpibb9OXKbUE87MfVfWxXhqI7hW5d7Vd95fB7weXxv7OlA0CYNIjzDxWf7CIs2vLGKiW9sDOuzNnVuVxCkd18tR3O%2FZUEY55jeGDftmP2rcUs48uaK%2F%2F%2FaVAnYrNMPzqKvkod9XJ7NE454dWYv0mQCh%2FlTgmo3jbVqSVU2vjq1tZXRAWsd2A6Gk6siNaEPbHAOHj3m2J1wEzWKYs4CcImlF%2FW4DAYPE0QiTkX9T5uw%2BI9BNpc4RCkHfthOVOOCEvm2IJgbo%2Fp6Yj%2BoNozoN9P%2Faw6lUsfGEfvFHNSZV3rQH%2BDXLlr4hwzttJWzjkHMvtzDRPsBTs5FRGqL1unq365NaDftNTgQzqA6PKxH3qmVGCBWSPJFc2x86tS7rlKdzMAXGWbLAbb%2BZjS7MisISWcy%2FBN2MIk4vrmlqQYBdANTaJPnh%2BcYMrfTKzcwbTeRD74ilX5sis5cCTSMm5SeF9RAjqjVNY%2Fg7QSS2Ta8%2FRcCWFqp5x%2BlX0VJWCbW9pQ3QyTe2kV1X5i48sFX69tVsabaHKlGSHvnujDh1L%2FJBjqkAS3DO%2F8UL5B5v4KjrlyOFvAS%2BNL80trEaBoiypn2A5m%2F3hyU%2BfSAUurPDUzJ2aNpnZ1cTVwidhFI91pHXq1BQ2rHN0JPckkXbf%2BZWmI4H5aEoA8klVBgzsVGtT6YwGdpI6Kogz1mw8Ms2qcQrt8rHI5%2FDrj9MCfSJsJJuME1hQAQcZHjFteE7eT8yxHituqcrj%2FsHi%2F5ZEPYfaIBvd6ipH2lEwg1&X-Amz-Signature=dc546f8e7285448d6524d2f9d031e5b3c9f000407a2482d21000e5fa64661e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

