---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ROYP5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rBQTUYVj6sSP29o528k35sj8vmQ4llY68Sssw1mgzAiAw8cq3GC4c4EiaYg48un6yIfRcyiBOeLY91KiyiVYdPir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMBxJpLZ1PLeWntU6tKtwDprLYxes5kQYY71kHGGBl4zUG%2FEzgY1DFmtbWkOzBNfNuv30M3tX0yrXzT%2BI26B7RFYS8T2nQPdBFH4AHnTs0uvl3Z1y1aULK5J1g%2Fu3k0PIcIjZhWjG2OL2JGGpXfssFjBQhLZXWyri0YKJvzO2LZwoPD4jXfxDInhw4k2BWcPFrdqowDGvyfzoLggd9Z1j6exG3ntzqlFiJpEfYJV3kCcJYeju656W6qoCc6gmEs9O77b6DCVfx3WNLZl78nBvgtvkCkPyy2en%2BYAbmUKvW4tsA2BoD%2By99mA87B6Q8gBwkU6et1%2FuYwpUj2dJtl53fsBY5tSoLUFmuzMtzWWd6dNlPha3eILjIy4%2B3851r2MN7FynEkSlnPhpCWJ1REskQ8fkc%2B2bbVkgibLlgA0xwUtEhB0KagBvmkRIplh%2BiqMHWAv8QcSQWYvyBewyDGuCy%2F4BuajxukqNm6DoG8Tqn1FYtUmli6coQrlL0KZNQfHhDLw9sygbi43t2apZjxDtH6oWRaB1Kc1lcT%2BlfWNyFw22KNyQPT3Zok6HYBABAPVunTrHBnY7s3kb5yJkYC1p9Eb7G7MnG%2BplQcUrNd%2FtsgQmx3XP4JYUN3948gaO89WVoGCtWJHXEyRn9rZ8ws%2BvPyQY6pgFDO6HMOR8zNyMl7ziuXk1oZNtiLBikUVc9BQ8NoNfivmwBVPryyY6yxPMZKUAsC%2Fe4VsOe4LJXQXmxm2GDdcGiJJ6gJuf%2FvYPOhyfREaCoGnweCa2rXcz5fq7aUqL%2FAMIaLdvJqdWFLGFILWx%2BVh0tz2za0mQ1TvXu3hQrPwngYEdDs8Fx0cx%2FCpbPTRw2jBJStKnuzOzNK5WOlHQ%2BSVVlT9aCOBU7&X-Amz-Signature=9672c52e1d46c84a88e78941b6541f1d12e7a81e131b1cc7399086887bfd9e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636ROYP5R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T095819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5rBQTUYVj6sSP29o528k35sj8vmQ4llY68Sssw1mgzAiAw8cq3GC4c4EiaYg48un6yIfRcyiBOeLY91KiyiVYdPir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMBxJpLZ1PLeWntU6tKtwDprLYxes5kQYY71kHGGBl4zUG%2FEzgY1DFmtbWkOzBNfNuv30M3tX0yrXzT%2BI26B7RFYS8T2nQPdBFH4AHnTs0uvl3Z1y1aULK5J1g%2Fu3k0PIcIjZhWjG2OL2JGGpXfssFjBQhLZXWyri0YKJvzO2LZwoPD4jXfxDInhw4k2BWcPFrdqowDGvyfzoLggd9Z1j6exG3ntzqlFiJpEfYJV3kCcJYeju656W6qoCc6gmEs9O77b6DCVfx3WNLZl78nBvgtvkCkPyy2en%2BYAbmUKvW4tsA2BoD%2By99mA87B6Q8gBwkU6et1%2FuYwpUj2dJtl53fsBY5tSoLUFmuzMtzWWd6dNlPha3eILjIy4%2B3851r2MN7FynEkSlnPhpCWJ1REskQ8fkc%2B2bbVkgibLlgA0xwUtEhB0KagBvmkRIplh%2BiqMHWAv8QcSQWYvyBewyDGuCy%2F4BuajxukqNm6DoG8Tqn1FYtUmli6coQrlL0KZNQfHhDLw9sygbi43t2apZjxDtH6oWRaB1Kc1lcT%2BlfWNyFw22KNyQPT3Zok6HYBABAPVunTrHBnY7s3kb5yJkYC1p9Eb7G7MnG%2BplQcUrNd%2FtsgQmx3XP4JYUN3948gaO89WVoGCtWJHXEyRn9rZ8ws%2BvPyQY6pgFDO6HMOR8zNyMl7ziuXk1oZNtiLBikUVc9BQ8NoNfivmwBVPryyY6yxPMZKUAsC%2Fe4VsOe4LJXQXmxm2GDdcGiJJ6gJuf%2FvYPOhyfREaCoGnweCa2rXcz5fq7aUqL%2FAMIaLdvJqdWFLGFILWx%2BVh0tz2za0mQ1TvXu3hQrPwngYEdDs8Fx0cx%2FCpbPTRw2jBJStKnuzOzNK5WOlHQ%2BSVVlT9aCOBU7&X-Amz-Signature=27f8b47ac5d80abd118d8aa28e1b1f12d055225d2d0e432239bdc1128b7d14e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

