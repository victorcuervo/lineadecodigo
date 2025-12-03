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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2YITDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDF6OSj%2F%2B3UahPR8NuL%2BLlmLjh2hW1cBJsnSuLU8xXaugIhAJaMPVosbRBCL1u1WqS2mFPViZWSAyZlC7SLTUJoIIx9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzhPJiMG5TBoVE6HWQq3AOEpjJqq7mL7XeNhyQnP8o9FV6OMO3sRbZSF441a1QNVdCuByEZsSc39rGI45gQgK05vl5eF9bEx3E3Ec7ehPnBBwpqUBTgFaDpGBOR3E%2FWuG8KMz6VqwD2vXpeXHFQ%2B6gIwar70NMHnnez01T%2FcDxO3fOWBWHgDXqCy5J0egrNllXDrcT0lbLpqtJi3oDeLPGEAWCP4gXqKUL6ur5AYUjNLL%2B4GTosT9pgH81f9LxbeAWh%2BorNcMWqpXMLLAULesvm4XnkzK2SHS7ICuKj4Wa%2BDGUCPNGlsFVtJpiwhxOZ9R%2FlBHYq8yj0gjmYJvmzr59t4H0ggWvD6bdaQz2c85T9rbCv8vtP0k0QXzRZEmYl41GRtssN1B4EL1%2FpIgRwbOxfR4o2h8igB4MS6KYd4rKCLtSi4lZ%2F7nz40okpudJdZOI7EQ9oS3ngJpk0d83vypw34XCi37rwCJtGrmkMyvhRsNBXigc2Imq%2Bxn37ip0Sl7xqhzN6CSSkxENydlpq%2F63taoG4fyqBg8T5FTXeYTH5Sm4C2rFmFCYCqx4rzqdPj4i7Uj2e2f%2FgCbHUV8mDCrWwK%2FXBunbp6I9JGX0cR%2FERvMPFKYYseg%2BKG9lVTcNJ%2BcV40R5oUoeNLoQrqTD9lL7JBjqkATS9vNrWoJibHHH2amF53fJEj%2FIQ89O2LKE60Zl%2F2bAhB0Ba1tafNx%2F8yIJTg80dVkBoSMZ%2FfVav2gQ%2BAbZlBjsWgBVHxJrTnTNF8Jc8OBQ8aWFebUY5xtmLva0LucNRSSlIUA1ZBc5Dt%2BKe5QwNCnZALsZoWLiBaCfNhuVwxOLOHnxNUZc4ukBV%2B6JjpUfFKXbG8oZd1xxow5A34y2R6UszpFUe&X-Amz-Signature=acf7c235211a39d74a252fbb0032517b5784456acd271d0cb8ab9713780221db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y2YITDI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDF6OSj%2F%2B3UahPR8NuL%2BLlmLjh2hW1cBJsnSuLU8xXaugIhAJaMPVosbRBCL1u1WqS2mFPViZWSAyZlC7SLTUJoIIx9Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzhPJiMG5TBoVE6HWQq3AOEpjJqq7mL7XeNhyQnP8o9FV6OMO3sRbZSF441a1QNVdCuByEZsSc39rGI45gQgK05vl5eF9bEx3E3Ec7ehPnBBwpqUBTgFaDpGBOR3E%2FWuG8KMz6VqwD2vXpeXHFQ%2B6gIwar70NMHnnez01T%2FcDxO3fOWBWHgDXqCy5J0egrNllXDrcT0lbLpqtJi3oDeLPGEAWCP4gXqKUL6ur5AYUjNLL%2B4GTosT9pgH81f9LxbeAWh%2BorNcMWqpXMLLAULesvm4XnkzK2SHS7ICuKj4Wa%2BDGUCPNGlsFVtJpiwhxOZ9R%2FlBHYq8yj0gjmYJvmzr59t4H0ggWvD6bdaQz2c85T9rbCv8vtP0k0QXzRZEmYl41GRtssN1B4EL1%2FpIgRwbOxfR4o2h8igB4MS6KYd4rKCLtSi4lZ%2F7nz40okpudJdZOI7EQ9oS3ngJpk0d83vypw34XCi37rwCJtGrmkMyvhRsNBXigc2Imq%2Bxn37ip0Sl7xqhzN6CSSkxENydlpq%2F63taoG4fyqBg8T5FTXeYTH5Sm4C2rFmFCYCqx4rzqdPj4i7Uj2e2f%2FgCbHUV8mDCrWwK%2FXBunbp6I9JGX0cR%2FERvMPFKYYseg%2BKG9lVTcNJ%2BcV40R5oUoeNLoQrqTD9lL7JBjqkATS9vNrWoJibHHH2amF53fJEj%2FIQ89O2LKE60Zl%2F2bAhB0Ba1tafNx%2F8yIJTg80dVkBoSMZ%2FfVav2gQ%2BAbZlBjsWgBVHxJrTnTNF8Jc8OBQ8aWFebUY5xtmLva0LucNRSSlIUA1ZBc5Dt%2BKe5QwNCnZALsZoWLiBaCfNhuVwxOLOHnxNUZc4ukBV%2B6JjpUfFKXbG8oZd1xxow5A34y2R6UszpFUe&X-Amz-Signature=a7f1154c0c631a71d02305d5de48cddf87842459ec6aee72fbcc432b8b46e379&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

