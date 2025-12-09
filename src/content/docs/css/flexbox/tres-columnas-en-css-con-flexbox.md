---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXM4HKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzSZkmcT2prwEvNuO%2FLTXyeRlmQmA0ZrdMKMeqvK2yAIhAPrg7I%2B%2FOSTLVT8%2FKNgmfsNZQmUi5YMmBSmVp1JJ%2BZmuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwMTJpp%2BIBwuYGoakq3APdth1ZsQTk3ln8fiaVcE6YxV99MFl%2FIyt1oFOpCRpm1MdxBYIqvP%2Bo5N1ItypbofxbJ0VVkZnCoBgipbGL8J4%2Bwou5H2Xx%2BFK38x4fv7vfR5%2BvP2E%2BUUOm8xOExSe4ZNk8npvM2f6yjyOdEcH1jNeMNyLTq3UqpUcLB675I1QSMilailIVUM9v5jeNBAviqJGQzIMCk%2FxT%2F0MDBc%2Bw3tSHG3FYb7y0FkwVJibSOHbqVNG2fHc33v8VC%2BGyXadZ6F%2BJkJSaZSmQHcAZiyaPkYiaDyLmLx2Y3MvXsNWYRsv6qGywrewKSDWbAFsDK5nIBcs18NXTMXHRWT%2BqT7pUEzwcepH8uXlxlYkx4GFapmU3Sm4BepeEfnTab0efIDMw8U4bpkjN95PCirS9WvNi0tS7xdnQLfRneR42Dc0iPfHoHKCC4nPv18JyM6At13wJw8JEBZQzCam1wfiqycaIYLDm5Gdrf5%2Fu%2BMo10MeYQWBKRQ%2Be1f7WqaL%2FL4R8XksJuFhFM2sANuSGI2%2FtvA%2FiFOHtyEi3zgAgFeYfSXx9eswS3omoTaTWhAqIX7gxbcDu5wTuZMxsfOSMzuko05Y1pYJHGG17BLlfdtMksZTitC3GFeJ8iVXre2DU%2F931fDCJw93JBjqkAVsagvloBrT4jawx11kjH%2BXZQROR%2FdXgP9ixVH5s3L4DmQXcUavYHG1de7lNbMB8LeRfCEBxTqY8GAefsEn7%2BKda0uP%2BHvK%2F9uIA5l3h%2B5nN%2BLsQ9hqEyJcAl650wkOwkllAH42Lgbcz1T4xLloGqtGhf4mM6M3riB65%2FGslrgUqGpAQnA83f944kjCV0p7afFLNjFM2WbR1h%2Bb7KbTg65yuh15h&X-Amz-Signature=ebd8a46b73a3f91196b98e72ebbdb031eba305de93c06fd5295760837fd24667&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MXM4HKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T001531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuzSZkmcT2prwEvNuO%2FLTXyeRlmQmA0ZrdMKMeqvK2yAIhAPrg7I%2B%2FOSTLVT8%2FKNgmfsNZQmUi5YMmBSmVp1JJ%2BZmuKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwMTJpp%2BIBwuYGoakq3APdth1ZsQTk3ln8fiaVcE6YxV99MFl%2FIyt1oFOpCRpm1MdxBYIqvP%2Bo5N1ItypbofxbJ0VVkZnCoBgipbGL8J4%2Bwou5H2Xx%2BFK38x4fv7vfR5%2BvP2E%2BUUOm8xOExSe4ZNk8npvM2f6yjyOdEcH1jNeMNyLTq3UqpUcLB675I1QSMilailIVUM9v5jeNBAviqJGQzIMCk%2FxT%2F0MDBc%2Bw3tSHG3FYb7y0FkwVJibSOHbqVNG2fHc33v8VC%2BGyXadZ6F%2BJkJSaZSmQHcAZiyaPkYiaDyLmLx2Y3MvXsNWYRsv6qGywrewKSDWbAFsDK5nIBcs18NXTMXHRWT%2BqT7pUEzwcepH8uXlxlYkx4GFapmU3Sm4BepeEfnTab0efIDMw8U4bpkjN95PCirS9WvNi0tS7xdnQLfRneR42Dc0iPfHoHKCC4nPv18JyM6At13wJw8JEBZQzCam1wfiqycaIYLDm5Gdrf5%2Fu%2BMo10MeYQWBKRQ%2Be1f7WqaL%2FL4R8XksJuFhFM2sANuSGI2%2FtvA%2FiFOHtyEi3zgAgFeYfSXx9eswS3omoTaTWhAqIX7gxbcDu5wTuZMxsfOSMzuko05Y1pYJHGG17BLlfdtMksZTitC3GFeJ8iVXre2DU%2F931fDCJw93JBjqkAVsagvloBrT4jawx11kjH%2BXZQROR%2FdXgP9ixVH5s3L4DmQXcUavYHG1de7lNbMB8LeRfCEBxTqY8GAefsEn7%2BKda0uP%2BHvK%2F9uIA5l3h%2B5nN%2BLsQ9hqEyJcAl650wkOwkllAH42Lgbcz1T4xLloGqtGhf4mM6M3riB65%2FGslrgUqGpAQnA83f944kjCV0p7afFLNjFM2WbR1h%2Bb7KbTg65yuh15h&X-Amz-Signature=5f0f0c62ef444f527954fe05b2bcbc5e01b0ec32644e4483692629ff5fb68641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

