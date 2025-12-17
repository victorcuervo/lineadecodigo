---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7PQCA4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLoA%2FtCR23yiJli%2BAD8eROBxVGZZsTRYNUyqYJV96IngIhAPmzeJjgHlm%2Br1rqxMMxK0uI4nbTniGenOIP%2Fb9kK6hpKv8DCHkQABoMNjM3NDIzMTgzODA1IgwcAygs%2FLdQfoBZO0oq3AOtivoXwDk8PQbWReLdQvA%2FUjA%2BMR8TdMyRZL%2FREf7vuSUJvLlV6cWAMEADugdBXrBWPP%2FWVJyumSriXv0P%2Fx6%2FbpjmM3Gew78DJoWtQhoYttwkBDC4M3GuOu5irtVZIroDZCoVc3usopg8gV5UmuW2P4VLgZabjk8SYzMmO9XjQ2rNMe3%2BATsK7FSXH7TlzQgsJQj9ChZ%2Fg76AxTnMkYOP573ofD1xuq5xGzNdoap2krWTyTJFjKLWf1ouGTVrrE6bgq4mxWK5uSGJW5hcJ%2BGPOTF6VA8VnigkjxTB1sJLAKdB%2BqeqwSkSQo%2FWNjkwXAV%2FOl2CczuiVDkWXsoj5cyuqS5Av5ve9U%2B9Ju9Xfx3QhgxB%2Fijmq81md5w4ezHsOvfdDEzH71EgVleoM2nh%2Fwjl7ZxKfG26UM5JNp2sYc0fmNkETUWFvXG4j6CxvBWJiS2q5u8F0XXEWzQuB9Vnaro%2F6XULmrYa64N4Lpax2zWfUYxkXQ9GIJRCSyibmAFjO5ZixnsggqhW2wj%2Bxgb4fA9A8rl%2FoNMPOPUyqIJvwuXjuMKGkHbnb5qFD7K8XOly4%2F2evxQi2W9kJlhiGAYTMCLw63WAN0U6ku5rtIN4okIwaPB65Dg4c4bWl1DVbzC6t4nKBjqkATWU4byRWRwmZbdPS6%2BmjNuLZ%2FtQQCz4kJAJo0LShdFnUarY96hjDY884hMg8ARa0By4GOBrQLSheIBrBTMiusv00jdmwwS7b7R0bwavfBlOl6wAkXaqM6mjwIwprOvdl1aiE6Hj5JfYw7xv0J3%2FHUVdu8UIMUSpUlT8M0KhBw6%2Bq3Kk%2BI7IIF3opbukLaZJLNpqCrugdlMkt4Mo4qlBn3%2BHLaRR&X-Amz-Signature=9c70b05c85fad342b410dbe5c8607bfa108ede541dcfbd84334e81f4fa052b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7PQCA4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLoA%2FtCR23yiJli%2BAD8eROBxVGZZsTRYNUyqYJV96IngIhAPmzeJjgHlm%2Br1rqxMMxK0uI4nbTniGenOIP%2Fb9kK6hpKv8DCHkQABoMNjM3NDIzMTgzODA1IgwcAygs%2FLdQfoBZO0oq3AOtivoXwDk8PQbWReLdQvA%2FUjA%2BMR8TdMyRZL%2FREf7vuSUJvLlV6cWAMEADugdBXrBWPP%2FWVJyumSriXv0P%2Fx6%2FbpjmM3Gew78DJoWtQhoYttwkBDC4M3GuOu5irtVZIroDZCoVc3usopg8gV5UmuW2P4VLgZabjk8SYzMmO9XjQ2rNMe3%2BATsK7FSXH7TlzQgsJQj9ChZ%2Fg76AxTnMkYOP573ofD1xuq5xGzNdoap2krWTyTJFjKLWf1ouGTVrrE6bgq4mxWK5uSGJW5hcJ%2BGPOTF6VA8VnigkjxTB1sJLAKdB%2BqeqwSkSQo%2FWNjkwXAV%2FOl2CczuiVDkWXsoj5cyuqS5Av5ve9U%2B9Ju9Xfx3QhgxB%2Fijmq81md5w4ezHsOvfdDEzH71EgVleoM2nh%2Fwjl7ZxKfG26UM5JNp2sYc0fmNkETUWFvXG4j6CxvBWJiS2q5u8F0XXEWzQuB9Vnaro%2F6XULmrYa64N4Lpax2zWfUYxkXQ9GIJRCSyibmAFjO5ZixnsggqhW2wj%2Bxgb4fA9A8rl%2FoNMPOPUyqIJvwuXjuMKGkHbnb5qFD7K8XOly4%2F2evxQi2W9kJlhiGAYTMCLw63WAN0U6ku5rtIN4okIwaPB65Dg4c4bWl1DVbzC6t4nKBjqkATWU4byRWRwmZbdPS6%2BmjNuLZ%2FtQQCz4kJAJo0LShdFnUarY96hjDY884hMg8ARa0By4GOBrQLSheIBrBTMiusv00jdmwwS7b7R0bwavfBlOl6wAkXaqM6mjwIwprOvdl1aiE6Hj5JfYw7xv0J3%2FHUVdu8UIMUSpUlT8M0KhBw6%2Bq3Kk%2BI7IIF3opbukLaZJLNpqCrugdlMkt4Mo4qlBn3%2BHLaRR&X-Amz-Signature=d6d3cc92f18e2c3b41992a3514345bdf412c9adc4190611465dff094134afb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
