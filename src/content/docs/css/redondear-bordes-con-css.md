---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646ZUNCU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0azFo4uzd4vKFfj1Fci7GrjB8B4Q98wtNr%2FfE81WBAwIhAK9lbGdrmqT0nXNfN2qA6fOI2LYqxuYjahv6AyjJZQVjKv8DCFkQABoMNjM3NDIzMTgzODA1IgxfDHvL6ni8WORXqzEq3AP7%2FClMIVd7f2%2BcIhDe75I7sHljWaqcV4I88kliS2k1dRzRcrtlyZTn5RcojMNKxe4arNN8GI2mXsVtnSVqsSdL7Z3j94bKCLz%2Bwp9TQmR7Y0hCDY9tjDK7iqFNfLgKqtgBWBZBMVupMGIKwcPd%2FFvg1Hpxkk3pYUp4bRD9WVkNjdeY6Gdu5iP3XIWQgmLU3Ofn4wO6RvHj%2FWA06abzuJhAJMFpzp2Qq4x4SJ4uXf08KhMHfqWhCEITIytHQxS%2BcxL2TAC2O4GXbfG5tWxA9zsgNyXXl95SPDkngsqGQMRmhfOZf%2B%2ByHqM%2BkY9OMaFmma8Op9L49Qo8kviyQjS6gucRiuy1gYSOMNz2OkC6ldFDyp%2F9eHR2YoS0vMKxmetQ0cw3ldvHVzz4bJAACjurX0zw74Og25lCMvu60Nn6wV9CGUPUFmdjpq68wcORWWBGwNIsGH76lXVgQYKAOx4WYBpFde%2B9%2FbFN6a5xItV7OD3Jo5xV9dv7z4nLXkeYK1hx4o1%2FJ60vhFXE9X599FCHQFs0GifaA85%2FeXSiLOTyTrCSNKnn2ld2kvHxmoT5iwJFHP8L8teCO6YgENPs6%2BtwmcFt6uXffzQu91k8beIhOuyUB%2BzVLKokv8%2FyIbYwUzDqqMrJBjqkAf6jZW%2BaAyjwyhnGJSWt6WPW4snF5rOVYYyG6k9V40PBxC3Qdvluftf7VA5rMKzXOA6YEpFY3NQrq9zxYNNBI78Dy6G7r4RpqJGb03tHz3SZUK3WbV7e5Lv9d4ONtry58jEWRbBULROM4K9wRswxecbQ1ANWqxQrFlr0dD9RWW2tGTioOkxLKKsJmMUxMQIc7aunTVAe07nOC5I8UxMua2cs%2Bamn&X-Amz-Signature=34f5595860c27d1493ec401959089a23efbedac68e37d663ab560c4c3f0f6d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466646ZUNCU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0azFo4uzd4vKFfj1Fci7GrjB8B4Q98wtNr%2FfE81WBAwIhAK9lbGdrmqT0nXNfN2qA6fOI2LYqxuYjahv6AyjJZQVjKv8DCFkQABoMNjM3NDIzMTgzODA1IgxfDHvL6ni8WORXqzEq3AP7%2FClMIVd7f2%2BcIhDe75I7sHljWaqcV4I88kliS2k1dRzRcrtlyZTn5RcojMNKxe4arNN8GI2mXsVtnSVqsSdL7Z3j94bKCLz%2Bwp9TQmR7Y0hCDY9tjDK7iqFNfLgKqtgBWBZBMVupMGIKwcPd%2FFvg1Hpxkk3pYUp4bRD9WVkNjdeY6Gdu5iP3XIWQgmLU3Ofn4wO6RvHj%2FWA06abzuJhAJMFpzp2Qq4x4SJ4uXf08KhMHfqWhCEITIytHQxS%2BcxL2TAC2O4GXbfG5tWxA9zsgNyXXl95SPDkngsqGQMRmhfOZf%2B%2ByHqM%2BkY9OMaFmma8Op9L49Qo8kviyQjS6gucRiuy1gYSOMNz2OkC6ldFDyp%2F9eHR2YoS0vMKxmetQ0cw3ldvHVzz4bJAACjurX0zw74Og25lCMvu60Nn6wV9CGUPUFmdjpq68wcORWWBGwNIsGH76lXVgQYKAOx4WYBpFde%2B9%2FbFN6a5xItV7OD3Jo5xV9dv7z4nLXkeYK1hx4o1%2FJ60vhFXE9X599FCHQFs0GifaA85%2FeXSiLOTyTrCSNKnn2ld2kvHxmoT5iwJFHP8L8teCO6YgENPs6%2BtwmcFt6uXffzQu91k8beIhOuyUB%2BzVLKokv8%2FyIbYwUzDqqMrJBjqkAf6jZW%2BaAyjwyhnGJSWt6WPW4snF5rOVYYyG6k9V40PBxC3Qdvluftf7VA5rMKzXOA6YEpFY3NQrq9zxYNNBI78Dy6G7r4RpqJGb03tHz3SZUK3WbV7e5Lv9d4ONtry58jEWRbBULROM4K9wRswxecbQ1ANWqxQrFlr0dD9RWW2tGTioOkxLKKsJmMUxMQIc7aunTVAe07nOC5I8UxMua2cs%2Bamn&X-Amz-Signature=91f707ed5e3f0eef5aae76e29ff33673c99e1a44a76787a94cc4fb6518d7beb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
