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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWFXA47%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FsDs1K0r2jr1nVH56zD%2B7l9r1azp3iyFIBEHd6P79AIgNX4BNJTUzB3Tabb0s7C21ly1DQvH3XWC4HKPxkySUEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxOFiTCjv7KrDU13yrcA7m1132KAJypfBA39W0kp7thIbeoEFUoBiAh8%2FrO1SMsudlQPTf8nrTKMwsaJwGPwY2%2B5FQB0hn5By%2BwDk70zCdQSYe%2FUGYZfBAYTku4Vxr4tYw3i2pVdkeEkVCtN9h%2By7G5Ut5pMbmfpdlo2fbQAaVpftcGpGwLojt5ymNchFK5IJSQsJovZT4sJYxtO37yw%2B12F8IYSr8in6ICfdfQYd2Qlf5ivZRFp1vsnj47PPmo2ZVXHCf6mkG%2BGXGs3ZPymlbwcbXQ72LOe2eS4Jr5zEtzDq9UCsfwkJ4oZz%2BlmgWL58ierDMaH5IVzz8g1XV8AiI%2FE5yihbVB7QFoEGnym%2F9pD09FbZ2aO5VFbhqfhOZWRO6lyZ6e%2Ft5RVDamsbf68ggcTZZqof6AGsXI10bzDQLR7yif2NRfXF4vIM6HEtE8sq9zoQMsXVCcUoUAvTEt%2FY3hj%2Fk5RXUsxll4HBfVBNAUKLM72%2FfteDolWelCSarqIj7djLQcmPEDbLdqhrIoMt7fLh%2BPt3%2FMDMBOyIgYDS9xnxRrlHlQ4jzhboaZF6b93nisVw0ukOmlbM06po51UGgeD1wV8ufIj0GYgsiJTh6UOQgxsIykF6Nw5nsnKPR7KbeNbO3n2gd2tRvcMMifi8oGOqUBRBgAWyO%2F1aa%2FXD%2FLUeIfNaaNEkwSzdKWdRTO0BGQh6luN%2FDrdebSwVM1WK5CqOoBG1ve1xfKlvu7JpxQQ7qRsGODGu5kgSZJ9vtZ1U7hQCcugWC4kYWlXYciVI5TT63ongjDbYUiD9ykfoQeR1Eb3z2tyDdJITVm1w5ytTzgYoMypAeIRMwmLDMT0QHcPPnUyxEPp%2F8Qv5y%2FtjJIgu3zAjiqLkBP&X-Amz-Signature=ade9a61308bd37c82d2fc24bd7cc9ba79a612ae7ba24bc1248b884029ef19c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGWFXA47%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2FsDs1K0r2jr1nVH56zD%2B7l9r1azp3iyFIBEHd6P79AIgNX4BNJTUzB3Tabb0s7C21ly1DQvH3XWC4HKPxkySUEYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOxOFiTCjv7KrDU13yrcA7m1132KAJypfBA39W0kp7thIbeoEFUoBiAh8%2FrO1SMsudlQPTf8nrTKMwsaJwGPwY2%2B5FQB0hn5By%2BwDk70zCdQSYe%2FUGYZfBAYTku4Vxr4tYw3i2pVdkeEkVCtN9h%2By7G5Ut5pMbmfpdlo2fbQAaVpftcGpGwLojt5ymNchFK5IJSQsJovZT4sJYxtO37yw%2B12F8IYSr8in6ICfdfQYd2Qlf5ivZRFp1vsnj47PPmo2ZVXHCf6mkG%2BGXGs3ZPymlbwcbXQ72LOe2eS4Jr5zEtzDq9UCsfwkJ4oZz%2BlmgWL58ierDMaH5IVzz8g1XV8AiI%2FE5yihbVB7QFoEGnym%2F9pD09FbZ2aO5VFbhqfhOZWRO6lyZ6e%2Ft5RVDamsbf68ggcTZZqof6AGsXI10bzDQLR7yif2NRfXF4vIM6HEtE8sq9zoQMsXVCcUoUAvTEt%2FY3hj%2Fk5RXUsxll4HBfVBNAUKLM72%2FfteDolWelCSarqIj7djLQcmPEDbLdqhrIoMt7fLh%2BPt3%2FMDMBOyIgYDS9xnxRrlHlQ4jzhboaZF6b93nisVw0ukOmlbM06po51UGgeD1wV8ufIj0GYgsiJTh6UOQgxsIykF6Nw5nsnKPR7KbeNbO3n2gd2tRvcMMifi8oGOqUBRBgAWyO%2F1aa%2FXD%2FLUeIfNaaNEkwSzdKWdRTO0BGQh6luN%2FDrdebSwVM1WK5CqOoBG1ve1xfKlvu7JpxQQ7qRsGODGu5kgSZJ9vtZ1U7hQCcugWC4kYWlXYciVI5TT63ongjDbYUiD9ykfoQeR1Eb3z2tyDdJITVm1w5ytTzgYoMypAeIRMwmLDMT0QHcPPnUyxEPp%2F8Qv5y%2FtjJIgu3zAjiqLkBP&X-Amz-Signature=74d7bcb64bb006190f094385e2a6fd3b3197dc16b748bfe9aef718e7f3c41c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
