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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5P64OR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC3ewzfTXqa4RBcVC8QaJN3fiA77gYMsT3sHVOqo0nY3AiB0QFxivrfxZUwsKL8iWWKXBvLF5E%2BF%2BI75VTM%2Bi5jU3yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtK4EwgJsy46ZKl5eKtwDksqqseXa4oDggzMNxbUx4JVPuVZA%2FqGoeKHv30o5Nfskds7I1NiYuvJt9Sx7o4Z3MB0ExHmK3ffhtaZSnIMPnJPpmKZHKzPWTKCM8F8EQUeVWYDz569kgkwtRT4HyOzj%2FLBGb5m8A95ZRhGzdPSGQ4bwIT703vtBI3Ug7dXzDRvWCWDFcPBY4X7qhyH4s2rJyX1i8AJGFgLsqKxwezKAR1Q4YCQ57rBzOxY7QgKkQERk7ew5eNrZXzU8TTflz8Y2Dlx98c2%2Fz909TTurvvO%2FThyI6uCow3iT2L891hciTBE6f%2Blrl3xxPFD2m1x3zhWuIpCLKACK03hRFuMXkKosH7CrYND22UJgOItZ1dy4lKPtddZuqtksDz2wPcjYMoU0pARXCaILugHRRrVS0G7MBJWnEzg0zmq9frLVLQ3YlAE%2FSl31pfUK6OGcmTZHcdcQzG1Axf8zfV%2BKtDrVgWk6CfpYE4jn80bFwmLC1vRx6yn3eDBYi%2BY9xdv9S3xWVu4yhmitb6J84fREWz%2FfgdD%2B2kjOgLrshc1O57k3uIgnhERPB%2BjSS%2BbxBvAEmaH1AiDltxrqmSQA1aiBpWpSgFM5rC%2Ba2o15vDY2ryBtA2lYV4xb2mVKeBwFuvMU2T0wxZS%2ByQY6pgEBsGbIldtl4KmKpKTQUSfPgI7X9e05eHsux9CTqQR9sONLvzV%2FYHSUB6gqM5he2JYsX1xZZAeZZfSZ1tU7QubsqkkZ20dlXbSSyquC3mHyRgqRb7VjvIPoMA3Y2ZiiZ1I10CS9SJyoDqdXdJ9NXKZpJeSr5%2BOJfIrYcd5PD%2Blayh91eL6PZ3XfmFPgsfC612uL%2FjWfHIkV6RSbtA%2F3g%2F42IfvWx3HR&X-Amz-Signature=6a98074affe0955feb4434f753d1ff20811a0e26fd3bb269644c14c110686c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV5P64OR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIC3ewzfTXqa4RBcVC8QaJN3fiA77gYMsT3sHVOqo0nY3AiB0QFxivrfxZUwsKL8iWWKXBvLF5E%2BF%2BI75VTM%2Bi5jU3yr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtK4EwgJsy46ZKl5eKtwDksqqseXa4oDggzMNxbUx4JVPuVZA%2FqGoeKHv30o5Nfskds7I1NiYuvJt9Sx7o4Z3MB0ExHmK3ffhtaZSnIMPnJPpmKZHKzPWTKCM8F8EQUeVWYDz569kgkwtRT4HyOzj%2FLBGb5m8A95ZRhGzdPSGQ4bwIT703vtBI3Ug7dXzDRvWCWDFcPBY4X7qhyH4s2rJyX1i8AJGFgLsqKxwezKAR1Q4YCQ57rBzOxY7QgKkQERk7ew5eNrZXzU8TTflz8Y2Dlx98c2%2Fz909TTurvvO%2FThyI6uCow3iT2L891hciTBE6f%2Blrl3xxPFD2m1x3zhWuIpCLKACK03hRFuMXkKosH7CrYND22UJgOItZ1dy4lKPtddZuqtksDz2wPcjYMoU0pARXCaILugHRRrVS0G7MBJWnEzg0zmq9frLVLQ3YlAE%2FSl31pfUK6OGcmTZHcdcQzG1Axf8zfV%2BKtDrVgWk6CfpYE4jn80bFwmLC1vRx6yn3eDBYi%2BY9xdv9S3xWVu4yhmitb6J84fREWz%2FfgdD%2B2kjOgLrshc1O57k3uIgnhERPB%2BjSS%2BbxBvAEmaH1AiDltxrqmSQA1aiBpWpSgFM5rC%2Ba2o15vDY2ryBtA2lYV4xb2mVKeBwFuvMU2T0wxZS%2ByQY6pgEBsGbIldtl4KmKpKTQUSfPgI7X9e05eHsux9CTqQR9sONLvzV%2FYHSUB6gqM5he2JYsX1xZZAeZZfSZ1tU7QubsqkkZ20dlXbSSyquC3mHyRgqRb7VjvIPoMA3Y2ZiiZ1I10CS9SJyoDqdXdJ9NXKZpJeSr5%2BOJfIrYcd5PD%2Blayh91eL6PZ3XfmFPgsfC612uL%2FjWfHIkV6RSbtA%2F3g%2F42IfvWx3HR&X-Amz-Signature=6ae924ca7a894e283c8ec0b952db23ffbbcff03791b229eaf79dd9dee77f584f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

