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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2BT2XA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoLMnybYdx2xkDfFzChdnd%2FToAT7u7939Duf7W5ns1uAiA65urdn0ArxIsaHgpzahFX16GAgpuhX9qSaOL1SnsDHSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu7aNuqwqxuKiH6DKtwDVrJBp%2FwnGOketBAR4V2ze1l8eJXlHaw3%2FEsqU%2FfjyU3Umxq1mEZWcPnRsVuOy%2BnQ9Lmhlr%2B6qbOv8OUii2knUVBAYSr8k2sXkAroqxSvDk8o6YLenPya9oRvI2B81iCVFDQM9timrm%2FUdjuxb%2FkRQu7mCNnj1frYebEm4iQXZ4lg8JCmOXj1otSsn459%2FvpQlKNJIJKikXQovpSCZ%2F1h5OwtWhhzMYgMTP5Mu8bgk75dS47XMl9U2syq%2BOBLeyYXflA2rlgtzFAJxLbBln%2BoONW7xp%2FPY391fr5os2MI%2BYc2QI7GkoSeKIi7s62hzYWIPdZvWYaxJ9ET4nb0eNLy5wYYf%2Bmq0G6Is0ZizK4%2BMoj7lwofadSp08SeQ9lnD%2BTK8ePl8VWT%2Bn2XAZJBu29wgO5%2Bo4H0AfX26ZAOBGMtkadTqS99AUwtjUmkwNHKSmisPq4hDeYz3VdI5JA5x9AtP3cXfzM4dQR0nw743wpYzNix37lbVJ70ctq%2FHOG1zdbbParHY7dOXOmKHcbjIHwybghz40uxdoSOXkosTzRVJlbhGadLBZDXc6fAbjCW6403ZBiP0m0rnG0I6SCWbJgbtdZrQ3Z5g%2FgBujznrJI7AW8KRwkUX5An%2BvxRXkcwp%2BXeyQY6pgFAqqb2HdSkyKQpeVdnrwXTMkwFJQNP3HK%2BUxXaGZHiBrXzKLvjQtAvuTdtuaFOcewxFi%2BKIVPk8W8reZ9HlfdOlPtCuGbpdWTTbTEMx3TI%2BIhrn4yNudcnked5UV0Igk%2Bk5LjuXsqxqwdXI%2FUW9P%2Fo9lhsQSti%2BUNRrjOkvdEN493qvbDGFWew%2BFC8OEiYqrFC4JpldMOwPgZSxg5oxBHP1lIAOSJ%2B&X-Amz-Signature=25154b7f673c8407ca4cda4382dcb77132d9eceac47d3deced47d33e70514704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B2BT2XA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoLMnybYdx2xkDfFzChdnd%2FToAT7u7939Duf7W5ns1uAiA65urdn0ArxIsaHgpzahFX16GAgpuhX9qSaOL1SnsDHSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDu7aNuqwqxuKiH6DKtwDVrJBp%2FwnGOketBAR4V2ze1l8eJXlHaw3%2FEsqU%2FfjyU3Umxq1mEZWcPnRsVuOy%2BnQ9Lmhlr%2B6qbOv8OUii2knUVBAYSr8k2sXkAroqxSvDk8o6YLenPya9oRvI2B81iCVFDQM9timrm%2FUdjuxb%2FkRQu7mCNnj1frYebEm4iQXZ4lg8JCmOXj1otSsn459%2FvpQlKNJIJKikXQovpSCZ%2F1h5OwtWhhzMYgMTP5Mu8bgk75dS47XMl9U2syq%2BOBLeyYXflA2rlgtzFAJxLbBln%2BoONW7xp%2FPY391fr5os2MI%2BYc2QI7GkoSeKIi7s62hzYWIPdZvWYaxJ9ET4nb0eNLy5wYYf%2Bmq0G6Is0ZizK4%2BMoj7lwofadSp08SeQ9lnD%2BTK8ePl8VWT%2Bn2XAZJBu29wgO5%2Bo4H0AfX26ZAOBGMtkadTqS99AUwtjUmkwNHKSmisPq4hDeYz3VdI5JA5x9AtP3cXfzM4dQR0nw743wpYzNix37lbVJ70ctq%2FHOG1zdbbParHY7dOXOmKHcbjIHwybghz40uxdoSOXkosTzRVJlbhGadLBZDXc6fAbjCW6403ZBiP0m0rnG0I6SCWbJgbtdZrQ3Z5g%2FgBujznrJI7AW8KRwkUX5An%2BvxRXkcwp%2BXeyQY6pgFAqqb2HdSkyKQpeVdnrwXTMkwFJQNP3HK%2BUxXaGZHiBrXzKLvjQtAvuTdtuaFOcewxFi%2BKIVPk8W8reZ9HlfdOlPtCuGbpdWTTbTEMx3TI%2BIhrn4yNudcnked5UV0Igk%2Bk5LjuXsqxqwdXI%2FUW9P%2Fo9lhsQSti%2BUNRrjOkvdEN493qvbDGFWew%2BFC8OEiYqrFC4JpldMOwPgZSxg5oxBHP1lIAOSJ%2B&X-Amz-Signature=b2ff15294527fbb84c34aa691e05aea2df5f27646d2356e65b184a6bec900815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
