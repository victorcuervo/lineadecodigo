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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3VPAQJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkLP6mjJw1ej3G4RUlGvmQPEQeowFKIpB7SekYQHnB0AiB%2BbJE79nZWipYHqWruMaEZwz%2FRkKlJigYZavKfvH1Qoir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAjqygSj6u8IjOtAkKtwDoQ0ZfnK0SdRD9t7q8kkiPbEi0I1wgCQ8hNQ5qPXM%2Fh1rdpZW6H7I%2BaN1eYUSpbahvMRS0GU7P05O1OZAUjiMwd87VbRFd%2Bmy%2BAaaShFWfjLmw%2B%2FsCZ8IdyiEGSB5BQLs8MKjyoMqN91jUYuHv3g7w9IoKPY3qV1R7cbycKIrwtGyjwEpqq8AWiWJzGg90u4t2wVp%2BA6XIaItTMSv3%2FcPpEF7J%2F60rnRcTdhw4MhEIOBfJdEsGI1Ju1vwg7YD5oR27YTpwFGqmbY0aHXXxOjMwz%2F8xW32q8HE23au7sILH122k59c8Djs%2F%2BRK3stwdBhLc54dmoJBoL8%2FAgvTkR6JqryCXs63w0SL1DEef3C1hYL1Oxfhjxl%2BZHv7duqQS7qWMZvaq1d2W41sEJo%2B%2B7%2B3AyV7dkrlJOxMo%2Ftlcz0VXvaoCIAYs2YK%2F7LOwlivHoMbWBsT9dKXNrkY%2BL8jW8aqRaYprt%2B3Lxz55BBUpyLKKanLgNSVLt6qabeXghfO63%2BNtTKpKd5sZt%2Br1rGvsdUQCpHNMwBFygOh30UdphB1n7TU%2FjNCSTNmiik%2BjAxpfhfYs1HcYYEBc6w2h%2Bb0mMIDqOA4E71nFzT8QPwQIRi5k0KvhLz8yyxE%2B%2FQ95J4w9c2IygY6pgHP5XrHTzAvQtYMnkT4Pb4eSeaZl252tyJShEz3JWSuSNLhgNEqGa5OaBzWgdcFtftwIZ7Kp4SL2owJ8xYuSa2gX8P4RhiC0ecUk2EPkcY2pQFhyeoNgaVJZHq6Cg0F3PYEH5N4cS6a4bdHKGQ%2F66ahojWaAutwnTLys%2BllE8bhBtGWr2gjJRo5Zxg1gH0%2FB2wPQBx0FHufDQV7ONNyIu7WenHHRBdV&X-Amz-Signature=26c02391771c8207ec5b2c9aa5151c0a14fcd8adf326bbe5ca80ea76a0133af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QC3VPAQJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkLP6mjJw1ej3G4RUlGvmQPEQeowFKIpB7SekYQHnB0AiB%2BbJE79nZWipYHqWruMaEZwz%2FRkKlJigYZavKfvH1Qoir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMAjqygSj6u8IjOtAkKtwDoQ0ZfnK0SdRD9t7q8kkiPbEi0I1wgCQ8hNQ5qPXM%2Fh1rdpZW6H7I%2BaN1eYUSpbahvMRS0GU7P05O1OZAUjiMwd87VbRFd%2Bmy%2BAaaShFWfjLmw%2B%2FsCZ8IdyiEGSB5BQLs8MKjyoMqN91jUYuHv3g7w9IoKPY3qV1R7cbycKIrwtGyjwEpqq8AWiWJzGg90u4t2wVp%2BA6XIaItTMSv3%2FcPpEF7J%2F60rnRcTdhw4MhEIOBfJdEsGI1Ju1vwg7YD5oR27YTpwFGqmbY0aHXXxOjMwz%2F8xW32q8HE23au7sILH122k59c8Djs%2F%2BRK3stwdBhLc54dmoJBoL8%2FAgvTkR6JqryCXs63w0SL1DEef3C1hYL1Oxfhjxl%2BZHv7duqQS7qWMZvaq1d2W41sEJo%2B%2B7%2B3AyV7dkrlJOxMo%2Ftlcz0VXvaoCIAYs2YK%2F7LOwlivHoMbWBsT9dKXNrkY%2BL8jW8aqRaYprt%2B3Lxz55BBUpyLKKanLgNSVLt6qabeXghfO63%2BNtTKpKd5sZt%2Br1rGvsdUQCpHNMwBFygOh30UdphB1n7TU%2FjNCSTNmiik%2BjAxpfhfYs1HcYYEBc6w2h%2Bb0mMIDqOA4E71nFzT8QPwQIRi5k0KvhLz8yyxE%2B%2FQ95J4w9c2IygY6pgHP5XrHTzAvQtYMnkT4Pb4eSeaZl252tyJShEz3JWSuSNLhgNEqGa5OaBzWgdcFtftwIZ7Kp4SL2owJ8xYuSa2gX8P4RhiC0ecUk2EPkcY2pQFhyeoNgaVJZHq6Cg0F3PYEH5N4cS6a4bdHKGQ%2F66ahojWaAutwnTLys%2BllE8bhBtGWr2gjJRo5Zxg1gH0%2FB2wPQBx0FHufDQV7ONNyIu7WenHHRBdV&X-Amz-Signature=4509eba8bb81f120f3b94c45d88fe67a3ade4e4e71b992a6cd8628c826bf3899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
