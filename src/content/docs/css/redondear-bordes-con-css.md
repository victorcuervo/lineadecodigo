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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVARIB2V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL9132B4qAhw%2FNyYPE%2BH%2FWMJFrwi1sZew9Nf2jH%2B0pJwIgMzqvrUl1Alcto11ZerEpobhWGKMK2Dmiff6nmCZt02sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMnjvqnab9Z1FaBhYCrcA%2F%2BIJDTSngfhLlMsDKjxALgyRtrd1pAYFtFTWVlxoqEx6XnNdbWnpXEKWiEQLXcZENHYc1jf97QVr2Xhkq7LUlIK4w%2Frvgt3RXpnTVQcFjFKpyIVWUHDi7AoVoyFzoouqiMd3LH%2BXq88TVbzkpgMGhIcCXfCqNNMoXzKGjMh%2FJxNGDZVCW4DqifAHh3kRmnMDXQTdbQNSZ4Vx0rfT7weyjF9EcpHdZ9m7w5xdl0Lxxf5cnocd%2Fv5N7UlcL%2BNIa2woMEDscUuVVvCLoz25PjbRIDUeVm53Fa3szUusD8C50R2pxwUdqaMoVPFCqzSpit4i7bUml8WK6g5NLR2Wv%2B1KBnuyE54uXGj8aeRLkyZ4tHJIEMMhSzQ1x1uq%2BWJG9s82eNlFN8jopoKbwRT7g4%2B8eM3uWvLRvIhLCm%2Fyn7NmwfVRN%2FWIH7gDbw0fkWWJxBVPai316jLLhbqDVbBP4VnJPzAAEPhk44niP3tOw6nLBIDBRv1DpSu5QwFCy9cZb23gt%2FDkk%2F4lpaw3wfqMs2lHRUiz6Qq5HZXsUehby6vTZI24wl4hmrrICos88Fjh82a%2FaH7tAZ%2Fcet0shFGt%2BFtL0%2B2iosCTMG8END7E9uGw1roRVKJB5gGLaP7kGBQMMGMyMkGOqUBt853TxFpU2rvvpo727D9aP4tnWk2zBV%2FnMA%2BM3DGeLCmSxE3rQEQzHWzv4jwMbUBuMQ5OKnv1yT5sUOIj%2FSDBDicgyl5bf4w4Wx5ASMJ9V7d7tKq7jzsszpZK00pCnhcUz4kLn9KYAGJkZp6WRbiUIlB0vy83RHI3FhCRnovHqaxqRuaf77cPSVVDHyp%2F%2BJjEwKdtvvwYHKg%2FvFyKF0OGtpM4WNL&X-Amz-Signature=8a088e13419af01b2458870992d2ff6d2fdf34b785686a15afe34e54cbac7b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVARIB2V%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCL9132B4qAhw%2FNyYPE%2BH%2FWMJFrwi1sZew9Nf2jH%2B0pJwIgMzqvrUl1Alcto11ZerEpobhWGKMK2Dmiff6nmCZt02sq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMnjvqnab9Z1FaBhYCrcA%2F%2BIJDTSngfhLlMsDKjxALgyRtrd1pAYFtFTWVlxoqEx6XnNdbWnpXEKWiEQLXcZENHYc1jf97QVr2Xhkq7LUlIK4w%2Frvgt3RXpnTVQcFjFKpyIVWUHDi7AoVoyFzoouqiMd3LH%2BXq88TVbzkpgMGhIcCXfCqNNMoXzKGjMh%2FJxNGDZVCW4DqifAHh3kRmnMDXQTdbQNSZ4Vx0rfT7weyjF9EcpHdZ9m7w5xdl0Lxxf5cnocd%2Fv5N7UlcL%2BNIa2woMEDscUuVVvCLoz25PjbRIDUeVm53Fa3szUusD8C50R2pxwUdqaMoVPFCqzSpit4i7bUml8WK6g5NLR2Wv%2B1KBnuyE54uXGj8aeRLkyZ4tHJIEMMhSzQ1x1uq%2BWJG9s82eNlFN8jopoKbwRT7g4%2B8eM3uWvLRvIhLCm%2Fyn7NmwfVRN%2FWIH7gDbw0fkWWJxBVPai316jLLhbqDVbBP4VnJPzAAEPhk44niP3tOw6nLBIDBRv1DpSu5QwFCy9cZb23gt%2FDkk%2F4lpaw3wfqMs2lHRUiz6Qq5HZXsUehby6vTZI24wl4hmrrICos88Fjh82a%2FaH7tAZ%2Fcet0shFGt%2BFtL0%2B2iosCTMG8END7E9uGw1roRVKJB5gGLaP7kGBQMMGMyMkGOqUBt853TxFpU2rvvpo727D9aP4tnWk2zBV%2FnMA%2BM3DGeLCmSxE3rQEQzHWzv4jwMbUBuMQ5OKnv1yT5sUOIj%2FSDBDicgyl5bf4w4Wx5ASMJ9V7d7tKq7jzsszpZK00pCnhcUz4kLn9KYAGJkZp6WRbiUIlB0vy83RHI3FhCRnovHqaxqRuaf77cPSVVDHyp%2F%2BJjEwKdtvvwYHKg%2FvFyKF0OGtpM4WNL&X-Amz-Signature=444deaa6c80a18a4ca53c34afb4a269d63eec083b9691353e9b07746af573f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
