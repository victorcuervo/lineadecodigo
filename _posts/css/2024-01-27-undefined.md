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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXG3DIVI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD2Xplb68XvuqakJrITBLNWGcRgeUyRWpBMXn93oh6eHAIhAJdv%2FvFpqA%2BBYQnaWzfDQP8vHif8joApBEM%2FNTx1JhJqKv8DCCgQABoMNjM3NDIzMTgzODA1IgzEmwl1XNrh6h%2F5Uisq3AO5iTf10j7FQe6fgeDmqDB9hwdQPSVKWX%2BYilMhSc%2FyvvYjbZgA6ohqwGG48AUuVV4slBQZKKBEWV%2Fkd4VaRqR1SY8WWy0d8MTgC0a%2BoYe06X2ZGc6BqL05Ogepc1zGCEkmqc2I9kYFMkDoZd%2B1f37%2FRNc5v8n8QSyZ881Qxl9VS%2F5RdkcVsMTbp50YmWyFfqpg5c%2FxPQER7JVXBeqJgrfUfenuv68ZsyXYS2XlBvUxI8u3E69IqmtoD7surAWBA9DDcSPmLnLqkN6AXn1Zw61kSEMEZ4EWVVlyrIFad0d2zWNGwCMnsQxCWIy290kFi8ruAJWemQ0yP5H5Z%2Bq1TjBdhpLkfptHoK3w1SUvYKkqOlpaPsX4Yk%2FgJoHQ9H%2Bu24xnyCk7yTKxWcGc8HQdfQR7He7uXytkafoW4UPG16ThQ98RANSMAZLNv8VWCTY39rMqCw7StNRKd%2BYhvY0eP9Q6XAvtwcvDTxrCvENJc%2BwPRO4FcZBzMIdITvKMaAmenTDsQhO%2FKQS2gwDW4kpsPjLbdf9ITn1RzaSQC7927Q0TYGzQWXB5%2FwrKAXiYBO2iwY4yW%2Bsv67iWOMlsOsAd%2BU89nZQtgDgYEOQm4jB9t7qhe9dCaM%2BJ1Mg678oSuTDRub%2FJBjqkAaxS%2Bsu9Y1pvefOq5yI960YVUJlgpl9%2BLQ2RawkLDTiH%2BW8WG92wqij%2BsbFCOudnLyD9whlwnJrqcB%2F6fuORobKmM5g3%2BHJGdgj8Lbo3kDWXMW5fMDpe6TVYNWm6ZrYUpcfES6NqGLaVuEZ%2BI829q4T6u8gFs%2FkfeIaT4ll2SaBVLbb17rNGO0UJsJ22U0NTQowQFnq0PiJaLvHeTem3c6hI9N4k&X-Amz-Signature=83b024ed27d064e507e8459a4ada92364bc9b95edcfedf02b4935ce50eee8c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXG3DIVI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T071213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQD2Xplb68XvuqakJrITBLNWGcRgeUyRWpBMXn93oh6eHAIhAJdv%2FvFpqA%2BBYQnaWzfDQP8vHif8joApBEM%2FNTx1JhJqKv8DCCgQABoMNjM3NDIzMTgzODA1IgzEmwl1XNrh6h%2F5Uisq3AO5iTf10j7FQe6fgeDmqDB9hwdQPSVKWX%2BYilMhSc%2FyvvYjbZgA6ohqwGG48AUuVV4slBQZKKBEWV%2Fkd4VaRqR1SY8WWy0d8MTgC0a%2BoYe06X2ZGc6BqL05Ogepc1zGCEkmqc2I9kYFMkDoZd%2B1f37%2FRNc5v8n8QSyZ881Qxl9VS%2F5RdkcVsMTbp50YmWyFfqpg5c%2FxPQER7JVXBeqJgrfUfenuv68ZsyXYS2XlBvUxI8u3E69IqmtoD7surAWBA9DDcSPmLnLqkN6AXn1Zw61kSEMEZ4EWVVlyrIFad0d2zWNGwCMnsQxCWIy290kFi8ruAJWemQ0yP5H5Z%2Bq1TjBdhpLkfptHoK3w1SUvYKkqOlpaPsX4Yk%2FgJoHQ9H%2Bu24xnyCk7yTKxWcGc8HQdfQR7He7uXytkafoW4UPG16ThQ98RANSMAZLNv8VWCTY39rMqCw7StNRKd%2BYhvY0eP9Q6XAvtwcvDTxrCvENJc%2BwPRO4FcZBzMIdITvKMaAmenTDsQhO%2FKQS2gwDW4kpsPjLbdf9ITn1RzaSQC7927Q0TYGzQWXB5%2FwrKAXiYBO2iwY4yW%2Bsv67iWOMlsOsAd%2BU89nZQtgDgYEOQm4jB9t7qhe9dCaM%2BJ1Mg678oSuTDRub%2FJBjqkAaxS%2Bsu9Y1pvefOq5yI960YVUJlgpl9%2BLQ2RawkLDTiH%2BW8WG92wqij%2BsbFCOudnLyD9whlwnJrqcB%2F6fuORobKmM5g3%2BHJGdgj8Lbo3kDWXMW5fMDpe6TVYNWm6ZrYUpcfES6NqGLaVuEZ%2BI829q4T6u8gFs%2FkfeIaT4ll2SaBVLbb17rNGO0UJsJ22U0NTQowQFnq0PiJaLvHeTem3c6hI9N4k&X-Amz-Signature=16fff21ef06b6ef841f26d788e0633d9067e6328b92de778da4090cc623d0b58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

