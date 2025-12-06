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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DACNWRS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfPnCw7yfFfVMsz3aq6PMZpBMU%2Fmk8COqt%2BE%2BIv8QsmwIhAOkXW2pl8TdCNLpgysZYWsuf9j9r66wrxSakH9Gob8jXKv8DCHEQABoMNjM3NDIzMTgzODA1Igy2v%2FlpKPfjAJw%2FgyMq3APuaY%2FFjlrc3GPvXQpkkXLm6gYYBGLH16tgPuWKF9nM9YTa%2FEO2CVvbS%2FJtmmrDtp%2BH4GKZWruEJUkuRWCzGZfdMUyhX4WLUpSauqSy4hiFfK%2F8E5Qpal3wNLwwa%2Fke%2F7bzT2uhGsBuWGhZr2joJby5A8j%2F%2F%2FtzwsongAgt0myzbHvoxi0tvU3cjv8vWsPckrPaflA7xCYQekvR1cEpYJhrR4YJrNOB7l7Ofjtre4qnH5h5ZQ1usv9VB1Ce4Q10RRTETRdvccyK8nlIRVRSjQrRisDvI2oe82eiLyI87wYqDObcyvDIK3%2Br0Vv%2BfOF1rynvLz6PxejU0h2MCmlGtOTFawcyXRKSphTogYf149oF32QkJ1RBRxS9XbXWFuosx5vr%2Fj70QmSbcgkSNH5JLH%2Bfa8WcP%2BW9pqz9JHBWCSl9bNbp3xNYc7N%2BjoXVcdjoAME3RvJzrB90THg43hiK7jNPwlu75dYVtHicyiCUcaChvZAhkVWVe85c%2Bty%2Fq2kFNsArZ5GpH%2BzMeMo90WYzPpLSLm4eCATBwXY6yE8fLTC1jwtSKwLS03KfMHam8VCSjl%2BLiG3nN0xUvpgX%2FSobn6Wst9fcatuRT7oBYayfLZqMVeywkbIVcUdd%2Fw912jCqvM%2FJBjqkAYGOLThL91UUu2fw7mUwIs9tHzXOkwZMb1GG2jcmj4f11K1QsqU9%2BCuVH%2FB4xTCkAFQCRB18g%2FhbzOKfHKkbkM%2F2cHElhKb5s2ImdCc8c8b1fltk%2F24LsO2ZNwECTvVxMYcpetyhaR6DPHIGwNPALcVYABm3Xdf8V7fxYSStvZZVEpiO6sMDSqdR1y9UrH%2FGujcc62BZZPmNhldoKj0g3qMee0kM&X-Amz-Signature=78e626ededf30324695d3334dada5b163f90749f020372e0e7f419f45e53d6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DACNWRS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfPnCw7yfFfVMsz3aq6PMZpBMU%2Fmk8COqt%2BE%2BIv8QsmwIhAOkXW2pl8TdCNLpgysZYWsuf9j9r66wrxSakH9Gob8jXKv8DCHEQABoMNjM3NDIzMTgzODA1Igy2v%2FlpKPfjAJw%2FgyMq3APuaY%2FFjlrc3GPvXQpkkXLm6gYYBGLH16tgPuWKF9nM9YTa%2FEO2CVvbS%2FJtmmrDtp%2BH4GKZWruEJUkuRWCzGZfdMUyhX4WLUpSauqSy4hiFfK%2F8E5Qpal3wNLwwa%2Fke%2F7bzT2uhGsBuWGhZr2joJby5A8j%2F%2F%2FtzwsongAgt0myzbHvoxi0tvU3cjv8vWsPckrPaflA7xCYQekvR1cEpYJhrR4YJrNOB7l7Ofjtre4qnH5h5ZQ1usv9VB1Ce4Q10RRTETRdvccyK8nlIRVRSjQrRisDvI2oe82eiLyI87wYqDObcyvDIK3%2Br0Vv%2BfOF1rynvLz6PxejU0h2MCmlGtOTFawcyXRKSphTogYf149oF32QkJ1RBRxS9XbXWFuosx5vr%2Fj70QmSbcgkSNH5JLH%2Bfa8WcP%2BW9pqz9JHBWCSl9bNbp3xNYc7N%2BjoXVcdjoAME3RvJzrB90THg43hiK7jNPwlu75dYVtHicyiCUcaChvZAhkVWVe85c%2Bty%2Fq2kFNsArZ5GpH%2BzMeMo90WYzPpLSLm4eCATBwXY6yE8fLTC1jwtSKwLS03KfMHam8VCSjl%2BLiG3nN0xUvpgX%2FSobn6Wst9fcatuRT7oBYayfLZqMVeywkbIVcUdd%2Fw912jCqvM%2FJBjqkAYGOLThL91UUu2fw7mUwIs9tHzXOkwZMb1GG2jcmj4f11K1QsqU9%2BCuVH%2FB4xTCkAFQCRB18g%2FhbzOKfHKkbkM%2F2cHElhKb5s2ImdCc8c8b1fltk%2F24LsO2ZNwECTvVxMYcpetyhaR6DPHIGwNPALcVYABm3Xdf8V7fxYSStvZZVEpiO6sMDSqdR1y9UrH%2FGujcc62BZZPmNhldoKj0g3qMee0kM&X-Amz-Signature=c71e8de355224340af18998f6454cd30c431f66281f6550e4be04987b19f7ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
