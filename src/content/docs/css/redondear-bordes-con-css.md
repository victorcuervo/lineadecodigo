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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKNXZLZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxYDjuUPaqL%2FIRfayz4x771%2FDhMQOAd1DHuIqnBsC%2FfQIhAPXO%2BmhKZL4VOTcFrKIpjNHnAwb2UgwYO2P8ILI42NqqKv8DCGEQABoMNjM3NDIzMTgzODA1IgzMYSCcZKdL2cx4%2B8Iq3APbVsS0Vk%2Fdp3TeVzRB0XFUIG2uSEJSLUQtGPJwkf%2BUdVynqXrXu%2B5lNNkh26NTzTSmEOQYsoVXtQ8nJPkc6DDZn8CbswqcRZ7tSaJcv0jVao4SxaxRxTmeO7ZwKql%2Bdn1%2F7j74IBa8WX5RCHHW0OAxF3ujL%2FSZ%2FyCvylQCscnFR1kvb7YV%2FHEEgQEG%2FPQnyUlZFyJyrD0%2Fh3xVZkZHa3l%2FGIyoy4qe9m60UHrBhwHulV8lRrOtMBOA%2BTZbXIpr1cSajuw1D5rCfMvwzC9%2B5Gb0a43y54x%2BKhG6x8q%2BzLkJP%2BYQP834qCavlZQWWF8Ms7SQVpXog%2FT42oA2vNSTIb8CF6gDwwfF7Tcko7gHvMC8CRU0vFVufUhMkWi51uznERdTdb3TSBJCR0Ex95suoGHmO4oOwyowwcoxnXp%2FkVfyCjNPg%2FpXB4g1xsCT4SCCNvlPz63K1WNb9pxn4sBZ6rE4qFOB0DNHUsXcZ2LmGQEVUOuxlBfUnqhWgnq2oJXwCjzApNHmdKixs6q3p7DxwhY%2BAmbzNNKwovFOHFwaOYG1LADvpfC00pdkJ%2B%2F%2FLgczrasXPMNFOY%2FYLnXKTPoNCj2c7MBGc5QhP3KPEPbAzz%2FOIG6%2FIDE1YojxSSTJNjCS%2BMvJBjqkAVWwCi1%2BHVE7LUF0tmp%2BFbWjTEhkyIPuYO88i1sheFazaZwiazIqoVPue5teBFUsbCPg2rN4aJIjy0AZgt%2FsFSVTO%2B%2BRbpPNky8kAlQzDhEITfG%2FTu6q4VAX6buX2Tn1WmGfS5v2F%2BCzv0KkT2NkmuZFFdReGVJtXdzmTCUTsmJIvopP%2FrX4iUrCyxKBCVOgCPsnfQV2r4OUwuqINGhcBxhVdbR9&X-Amz-Signature=685a85ee7d930fd6fd0670ffd0c6ce8584e177086f1c1f98373e77223331f91c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDKNXZLZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T160841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxYDjuUPaqL%2FIRfayz4x771%2FDhMQOAd1DHuIqnBsC%2FfQIhAPXO%2BmhKZL4VOTcFrKIpjNHnAwb2UgwYO2P8ILI42NqqKv8DCGEQABoMNjM3NDIzMTgzODA1IgzMYSCcZKdL2cx4%2B8Iq3APbVsS0Vk%2Fdp3TeVzRB0XFUIG2uSEJSLUQtGPJwkf%2BUdVynqXrXu%2B5lNNkh26NTzTSmEOQYsoVXtQ8nJPkc6DDZn8CbswqcRZ7tSaJcv0jVao4SxaxRxTmeO7ZwKql%2Bdn1%2F7j74IBa8WX5RCHHW0OAxF3ujL%2FSZ%2FyCvylQCscnFR1kvb7YV%2FHEEgQEG%2FPQnyUlZFyJyrD0%2Fh3xVZkZHa3l%2FGIyoy4qe9m60UHrBhwHulV8lRrOtMBOA%2BTZbXIpr1cSajuw1D5rCfMvwzC9%2B5Gb0a43y54x%2BKhG6x8q%2BzLkJP%2BYQP834qCavlZQWWF8Ms7SQVpXog%2FT42oA2vNSTIb8CF6gDwwfF7Tcko7gHvMC8CRU0vFVufUhMkWi51uznERdTdb3TSBJCR0Ex95suoGHmO4oOwyowwcoxnXp%2FkVfyCjNPg%2FpXB4g1xsCT4SCCNvlPz63K1WNb9pxn4sBZ6rE4qFOB0DNHUsXcZ2LmGQEVUOuxlBfUnqhWgnq2oJXwCjzApNHmdKixs6q3p7DxwhY%2BAmbzNNKwovFOHFwaOYG1LADvpfC00pdkJ%2B%2F%2FLgczrasXPMNFOY%2FYLnXKTPoNCj2c7MBGc5QhP3KPEPbAzz%2FOIG6%2FIDE1YojxSSTJNjCS%2BMvJBjqkAVWwCi1%2BHVE7LUF0tmp%2BFbWjTEhkyIPuYO88i1sheFazaZwiazIqoVPue5teBFUsbCPg2rN4aJIjy0AZgt%2FsFSVTO%2B%2BRbpPNky8kAlQzDhEITfG%2FTu6q4VAX6buX2Tn1WmGfS5v2F%2BCzv0KkT2NkmuZFFdReGVJtXdzmTCUTsmJIvopP%2FrX4iUrCyxKBCVOgCPsnfQV2r4OUwuqINGhcBxhVdbR9&X-Amz-Signature=bae18844aac3c48fa08fd3cee29da012dd47feb653291e0489c26478f4859870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
