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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMVJK4KG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2pEPnO6Xt1R0ztqQ3y1pc1%2FnRp8FRR1wzNAeegVp%2FTQIhAIH7PPIolRXbKsS%2Fs%2FvaiUzxQgeW548EuQ2tl9ZUwsZCKv8DCHUQABoMNjM3NDIzMTgzODA1IgwpiQLOU4wH7Y5RnkAq3AN%2FcryZ6eteJNeTy85wThdh%2FZZsKZ5g5d8TSD5IFa3RHmuytyf9Pgq8kw3ERKSQLNOmWLGbh7MVzN4yL3jM%2B4VZX0LtLnBdvBnqFAMlATYof2RUxwaeyd%2F3okKpPBP%2BdpJm2b64LPjcC69LMn9DVPpYbT1NFmkV6C%2FfGZws2rv6fqXp1Px8x4QRVRdeP16oYK5u8PLxGzzS74X15JIgvJNkZxv0AWUBbTTZdJiurX4GvSYwKxMe52G9NkbrGr3r3p8%2BQQuWyExApNtiaAgrbrpeNlcrrD49kvcHkmfNyNlCZpBGOdSo4hIb%2FDB4oQOi5MK2OAixuIseUdKQZJ3jjBfTxEVO4wX300I2DqnERvXXDCoPQmEXDlgUtMdtHbc5QFmCFDpvcnDHDLH3xPDV98HgZkZoq2t9pLTJUnZcWbPftTauqW6QLoHJpKF%2FS43xNqMJ%2BangcR%2FYQzdFv%2FNUAH0CoFDwk%2F1eKHJEnCpd82ziObSQOSM%2BglavJ%2Fsmviw4nW2uVK4jeDfNiGVofbkREy7Md2%2F8JPtq3SeIkr4exPqVsRtpPKEOjJQ6R%2Fgwp6kV5ChEaq%2FXzyNproO%2B8T1bnGEH%2Bjj1Seg%2FXi4OBswQyKsktCHllw9w9nc3%2FCBwnDCNp9DJBjqkAYFexCliy1QAd3vRlAQxwaUSsJ4AE%2FckMYAB8Vy4LszxFPYyfgaaSNahCUHoLi51d52OdSSo4r5crd7IPbSkll60fxrA7HHga4i4Y1m%2Ba2PJf6f5AepCd5xa8foEcfahwR3ZTPo9V7%2Fgmis4RdQd1tYi%2B54LLrZg4vtPtZHcl7kAM8lPdlrpCnBo9LIg0LewAMrQnIe37LqrnTMABv5txu9WpghK&X-Amz-Signature=d3685f273e90da48d4beb0099e1ca618aa492d38f74508f171409af8ab7fa76b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMVJK4KG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2pEPnO6Xt1R0ztqQ3y1pc1%2FnRp8FRR1wzNAeegVp%2FTQIhAIH7PPIolRXbKsS%2Fs%2FvaiUzxQgeW548EuQ2tl9ZUwsZCKv8DCHUQABoMNjM3NDIzMTgzODA1IgwpiQLOU4wH7Y5RnkAq3AN%2FcryZ6eteJNeTy85wThdh%2FZZsKZ5g5d8TSD5IFa3RHmuytyf9Pgq8kw3ERKSQLNOmWLGbh7MVzN4yL3jM%2B4VZX0LtLnBdvBnqFAMlATYof2RUxwaeyd%2F3okKpPBP%2BdpJm2b64LPjcC69LMn9DVPpYbT1NFmkV6C%2FfGZws2rv6fqXp1Px8x4QRVRdeP16oYK5u8PLxGzzS74X15JIgvJNkZxv0AWUBbTTZdJiurX4GvSYwKxMe52G9NkbrGr3r3p8%2BQQuWyExApNtiaAgrbrpeNlcrrD49kvcHkmfNyNlCZpBGOdSo4hIb%2FDB4oQOi5MK2OAixuIseUdKQZJ3jjBfTxEVO4wX300I2DqnERvXXDCoPQmEXDlgUtMdtHbc5QFmCFDpvcnDHDLH3xPDV98HgZkZoq2t9pLTJUnZcWbPftTauqW6QLoHJpKF%2FS43xNqMJ%2BangcR%2FYQzdFv%2FNUAH0CoFDwk%2F1eKHJEnCpd82ziObSQOSM%2BglavJ%2Fsmviw4nW2uVK4jeDfNiGVofbkREy7Md2%2F8JPtq3SeIkr4exPqVsRtpPKEOjJQ6R%2Fgwp6kV5ChEaq%2FXzyNproO%2B8T1bnGEH%2Bjj1Seg%2FXi4OBswQyKsktCHllw9w9nc3%2FCBwnDCNp9DJBjqkAYFexCliy1QAd3vRlAQxwaUSsJ4AE%2FckMYAB8Vy4LszxFPYyfgaaSNahCUHoLi51d52OdSSo4r5crd7IPbSkll60fxrA7HHga4i4Y1m%2Ba2PJf6f5AepCd5xa8foEcfahwR3ZTPo9V7%2Fgmis4RdQd1tYi%2B54LLrZg4vtPtZHcl7kAM8lPdlrpCnBo9LIg0LewAMrQnIe37LqrnTMABv5txu9WpghK&X-Amz-Signature=a6e19ce74d46567e0834b5de8bc5631e874bb1ed7024130c93f8171fe144155c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
