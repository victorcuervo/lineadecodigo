---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBS63GIR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE0jXnpdqKAPnoSdFIpRHfEKQhjBUnqxZH5ux9CvTMEkAiEAtQe%2BJ%2FGGff%2FIL2wTcSqAsrJaAKpQ9X%2F%2BtCREL6mInOoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBgFz7Li4nPHSg88JyrcA12Bq5TIdTOXAF%2FGalQn5i17RZKJqDq106TBf0dD4EcZL2JYsJYhd8aRsS%2ByvoFcUSiBOqv%2BCK3S%2BIc3BseR4M31wa1hhzLxA%2B8eVYLT3vClW%2BF3WNW2fF1%2BlJ%2BD07rJ7RlNY7En9gTLBwzXuG0BzWr1lnXIial8dFAuZxHkgdAR275eAsuR7XSPLWSL8R57TqdcsaUya5bBeusZ5Ovm%2FcX4mwnrLkZ3gFU80ibFXQE0tcRFbngceQbRDrXQhe61QDWniuWJxcFn66jujHbt2YLIRprI%2BZlxCG7KiinGRrRbiNKLR0SQSHOjsE94NoNjdNM%2FTYfyAvLJvPzJWOUbUfUeqhe5I6iKKH0vGrpTR9CljtpGnJyqH1mfGrTxZi8ynu%2FVidXCDBLIqJitvYeHlvQdD7GKv%2FlG4%2B8wztCHioFvPlPvCz6irRDhUeOytyJzIe90KxRe8BARa4wo3PNPotqI0lm0I%2BvupkFYe3NqKHwgQ%2B083lNokAZSuP0mjZfWuxECIaYGd2qy3SJQlL7T80xjYkbD7HkyFjyHpLs5uyUHTwdOEKERTZfNV1Bgfv3tfQTZLWp3OyMDGi1X3WJnHtZXXQqC46UUlRg%2FMqBAgtDnBsab1z5Fi4JHrMzuMLG1w8kGOqUBhOtGCqVMGAKZiuRi8VV9Nv4kd3k8fflW59v5iXHo7tWSH9BSg2z%2BvQrUGn9tHsT%2BuFxJe2tKB%2Fuht0WnE%2Bs%2F7ku3pOt6IUAulM3ySvK6erKr60h0KGuHj0tGJbBwZykRx1%2FBUfum1mfCKfHAuuAgIQ%2B2zT7RC9CR9L%2FO0gp7oAmeuhLs7AeGJ1edD8V7yg3D9bVrcsMeDN1gLBoO51aUhVQANEvY&X-Amz-Signature=b6e0482a19d5aa7abce183227e67352f073c1542cf5bd95f517075f372c30de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBS63GIR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIE0jXnpdqKAPnoSdFIpRHfEKQhjBUnqxZH5ux9CvTMEkAiEAtQe%2BJ%2FGGff%2FIL2wTcSqAsrJaAKpQ9X%2F%2BtCREL6mInOoq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDBgFz7Li4nPHSg88JyrcA12Bq5TIdTOXAF%2FGalQn5i17RZKJqDq106TBf0dD4EcZL2JYsJYhd8aRsS%2ByvoFcUSiBOqv%2BCK3S%2BIc3BseR4M31wa1hhzLxA%2B8eVYLT3vClW%2BF3WNW2fF1%2BlJ%2BD07rJ7RlNY7En9gTLBwzXuG0BzWr1lnXIial8dFAuZxHkgdAR275eAsuR7XSPLWSL8R57TqdcsaUya5bBeusZ5Ovm%2FcX4mwnrLkZ3gFU80ibFXQE0tcRFbngceQbRDrXQhe61QDWniuWJxcFn66jujHbt2YLIRprI%2BZlxCG7KiinGRrRbiNKLR0SQSHOjsE94NoNjdNM%2FTYfyAvLJvPzJWOUbUfUeqhe5I6iKKH0vGrpTR9CljtpGnJyqH1mfGrTxZi8ynu%2FVidXCDBLIqJitvYeHlvQdD7GKv%2FlG4%2B8wztCHioFvPlPvCz6irRDhUeOytyJzIe90KxRe8BARa4wo3PNPotqI0lm0I%2BvupkFYe3NqKHwgQ%2B083lNokAZSuP0mjZfWuxECIaYGd2qy3SJQlL7T80xjYkbD7HkyFjyHpLs5uyUHTwdOEKERTZfNV1Bgfv3tfQTZLWp3OyMDGi1X3WJnHtZXXQqC46UUlRg%2FMqBAgtDnBsab1z5Fi4JHrMzuMLG1w8kGOqUBhOtGCqVMGAKZiuRi8VV9Nv4kd3k8fflW59v5iXHo7tWSH9BSg2z%2BvQrUGn9tHsT%2BuFxJe2tKB%2Fuht0WnE%2Bs%2F7ku3pOt6IUAulM3ySvK6erKr60h0KGuHj0tGJbBwZykRx1%2FBUfum1mfCKfHAuuAgIQ%2B2zT7RC9CR9L%2FO0gp7oAmeuhLs7AeGJ1edD8V7yg3D9bVrcsMeDN1gLBoO51aUhVQANEvY&X-Amz-Signature=c5f9bec04185985e1cba7ee386c4e784b49db05fb47b4ac362a65d221ef63c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
