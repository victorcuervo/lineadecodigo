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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSO62PR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDJYGaRnjj3X1kNV%2Fxtespwg2UHzpWMMg2sno1JhzKvZgIhAOG926hD3QC2SMglzh3xHCwfTnpJMmXzacwg0GXS6L9mKv8DCCgQABoMNjM3NDIzMTgzODA1IgyfBJB3%2B9gO13ht4vAq3AMRuKYGFDe1U4ru9Yc3doxfHuwSBCvEDOVvvJNN17rocbmChxDVMfV5B%2BMR38ouIkwlwfL%2BjAHTqdBYpS9ZIaWbW%2BRW2nxD4O00su4Ow%2FhBxwcOPPaO4XHKkjtZ1pk%2FiXFLs%2B6%2FNdLIIHSX1%2BtYeBatyfhaK1lQ0B8wo86dafmrO3tSPeJAVb07tbvfqlIgOltuewKRCuv4r04u8VqhAz3jj1kXuPLlmoGOuaAumd96tX%2FcHLAcpmef5V7Wx0kvA43Go0xBmfdSFIZ0nXYDinT1zxOfgfvLXKk9DfEd3xus15WUnQH0M2ODFB6NqUXcz4vR76htC8BR241jb9OUhr%2BF4MWHA5qybsSCJxzdOUJu2BeFI9RiJmlo%2B1cLxT8XJjqfc7eOdYtEG58tx510gBNztkr0%2FQJDQvQP8bDA4uNNEp%2FEPurLp5WqSXTk8qG%2Fh4U75LIvFi0JuC1NRS9Z093Ol8y0BSBdLOcLg47Jb3fNMBNzlPwsP8fr850D9Q%2BVR2bZtL49k4rDOkQehf%2Fnko4TkJkTpY7o47KXOuGxbt5BPDae7riwF16HD7g0p97EegWzE5Nh7H3Enxs5JYPJsvBwPpaaqq3IaEpDpjdqwASUg2kyGai2l%2B38YMm4xDD0ub%2FJBjqkAX%2Fje3K9ji%2B2YyaofC%2BZQFHtcpWuq2S3Ibp2abgCeBhNx8gHdv7tMM7hz362NXoMduNHDykNoKLq5MOFNKt%2BSgC3AA13cmgZtCxS9f0A%2BHPgUypqOgzQ6fkoHrC%2FXB2mnM2evY5PjeJktm45iDy27whvoFo4nigfbRf%2FDclbfE9OO12U48mOxB5%2FS852SkkEQu6uyZoxY7GVL9iyQ7ZJC2Fq%2Fwu7&X-Amz-Signature=3408f3cde39097f78000eec12dc8eeff7e896d23820e9ffa615ad851265bcc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSO62PR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDJYGaRnjj3X1kNV%2Fxtespwg2UHzpWMMg2sno1JhzKvZgIhAOG926hD3QC2SMglzh3xHCwfTnpJMmXzacwg0GXS6L9mKv8DCCgQABoMNjM3NDIzMTgzODA1IgyfBJB3%2B9gO13ht4vAq3AMRuKYGFDe1U4ru9Yc3doxfHuwSBCvEDOVvvJNN17rocbmChxDVMfV5B%2BMR38ouIkwlwfL%2BjAHTqdBYpS9ZIaWbW%2BRW2nxD4O00su4Ow%2FhBxwcOPPaO4XHKkjtZ1pk%2FiXFLs%2B6%2FNdLIIHSX1%2BtYeBatyfhaK1lQ0B8wo86dafmrO3tSPeJAVb07tbvfqlIgOltuewKRCuv4r04u8VqhAz3jj1kXuPLlmoGOuaAumd96tX%2FcHLAcpmef5V7Wx0kvA43Go0xBmfdSFIZ0nXYDinT1zxOfgfvLXKk9DfEd3xus15WUnQH0M2ODFB6NqUXcz4vR76htC8BR241jb9OUhr%2BF4MWHA5qybsSCJxzdOUJu2BeFI9RiJmlo%2B1cLxT8XJjqfc7eOdYtEG58tx510gBNztkr0%2FQJDQvQP8bDA4uNNEp%2FEPurLp5WqSXTk8qG%2Fh4U75LIvFi0JuC1NRS9Z093Ol8y0BSBdLOcLg47Jb3fNMBNzlPwsP8fr850D9Q%2BVR2bZtL49k4rDOkQehf%2Fnko4TkJkTpY7o47KXOuGxbt5BPDae7riwF16HD7g0p97EegWzE5Nh7H3Enxs5JYPJsvBwPpaaqq3IaEpDpjdqwASUg2kyGai2l%2B38YMm4xDD0ub%2FJBjqkAX%2Fje3K9ji%2B2YyaofC%2BZQFHtcpWuq2S3Ibp2abgCeBhNx8gHdv7tMM7hz362NXoMduNHDykNoKLq5MOFNKt%2BSgC3AA13cmgZtCxS9f0A%2BHPgUypqOgzQ6fkoHrC%2FXB2mnM2evY5PjeJktm45iDy27whvoFo4nigfbRf%2FDclbfE9OO12U48mOxB5%2FS852SkkEQu6uyZoxY7GVL9iyQ7ZJC2Fq%2Fwu7&X-Amz-Signature=fe5c1cddb631e7b36d502ae4abdc29a41565313a373e71fdb8779371203eac02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

