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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G33LCD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBU7PteRHcSe0gaTK6SP8YnBVNjkM1nPNLP4uQiGckmAiAu1TCZ4cD%2FN0dmtPGNR%2BTzwduhHvJtRCy0nD3MVhY%2BlSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMWfw3nG9e3vFm4NbKtwDrlD16tJ9zcxBLf0PmrX6MzZlRMHyPohPaEh9M3JqZY%2FRk2Fdwi8pQaqWIzrbKgb7sBQu4xiUoFIqdXNCgSWWwpeZe8rE85pXrIRbSXUDPxrs4oFVcSr5FNPo8St92IUo9fU4fy2w3pFnjG%2F1RfEPm3qP5K5s2OMT1e4YbgzQj2IOCCgDxSf3%2FFUU4q2QAhjNefL5KHeEBNLNtcHwU%2FlK5LrM75Uep3h2rI70WbBvor0JI0BPfGT5%2BCIGYniIwYJdxXv4FnF16qeJDymfhB4%2BJMZ3MQE%2BzLzvvPmEIvfTLkdGJNKiSXownlils5cOvPNUI6dKXxahIp4%2BSM%2BtVRBnlC%2FPOCMue62aKevpFDosKXQvzf3qWROtsHFe2i5GKEvTjoqwRV29C0CRWRspT8gIt2p1Ad4XmHr4NLLwUtrTblfXrjsVWc4aBr%2B9aITazg7fOaib6WYRgtAbVeyFFZy2dMR%2F0QVuBnnC8CTkabdRpse6pxtF3H9zzX6mGTu5xmIKzG%2B%2F1gilRIifj0zO1%2BFSPhs8JFqeM7F%2FbDnE5mCVk9OIMQflP7wBxSqSeaNr4ISLGhSwnqqEOptBCgMmGktCpj98D4W0laY9UkBmsFtwQzI1ZpjxToW6UVjjyoEw%2FZPZyQY6pgGTCO72insSqSRIO8sGn9IKjaZp3Rgmyg7uWoZ9fPz4jQLd2dqWI8Ckd1i2k50ffVNIp38U7Y%2Fd1b3wRHHT02yid7vA80fMMv9FE4e5AUuOw5Q%2Bf%2BhPVuvwdJNtoVxhA8LvUZ1GOFrCyEEaKs4WFK9afG0%2FTBlivXHDU4wbgC3MeQ3T%2BLkA8BvbmSxsrY%2FbxQAmAuCGg1My267jtMLn7nYbPSRNKYwH&X-Amz-Signature=5f834053ded17a04275c8a6d4c80cbd58edf11395dd91434cac374dad556bb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7G33LCD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBU7PteRHcSe0gaTK6SP8YnBVNjkM1nPNLP4uQiGckmAiAu1TCZ4cD%2FN0dmtPGNR%2BTzwduhHvJtRCy0nD3MVhY%2BlSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMWfw3nG9e3vFm4NbKtwDrlD16tJ9zcxBLf0PmrX6MzZlRMHyPohPaEh9M3JqZY%2FRk2Fdwi8pQaqWIzrbKgb7sBQu4xiUoFIqdXNCgSWWwpeZe8rE85pXrIRbSXUDPxrs4oFVcSr5FNPo8St92IUo9fU4fy2w3pFnjG%2F1RfEPm3qP5K5s2OMT1e4YbgzQj2IOCCgDxSf3%2FFUU4q2QAhjNefL5KHeEBNLNtcHwU%2FlK5LrM75Uep3h2rI70WbBvor0JI0BPfGT5%2BCIGYniIwYJdxXv4FnF16qeJDymfhB4%2BJMZ3MQE%2BzLzvvPmEIvfTLkdGJNKiSXownlils5cOvPNUI6dKXxahIp4%2BSM%2BtVRBnlC%2FPOCMue62aKevpFDosKXQvzf3qWROtsHFe2i5GKEvTjoqwRV29C0CRWRspT8gIt2p1Ad4XmHr4NLLwUtrTblfXrjsVWc4aBr%2B9aITazg7fOaib6WYRgtAbVeyFFZy2dMR%2F0QVuBnnC8CTkabdRpse6pxtF3H9zzX6mGTu5xmIKzG%2B%2F1gilRIifj0zO1%2BFSPhs8JFqeM7F%2FbDnE5mCVk9OIMQflP7wBxSqSeaNr4ISLGhSwnqqEOptBCgMmGktCpj98D4W0laY9UkBmsFtwQzI1ZpjxToW6UVjjyoEw%2FZPZyQY6pgGTCO72insSqSRIO8sGn9IKjaZp3Rgmyg7uWoZ9fPz4jQLd2dqWI8Ckd1i2k50ffVNIp38U7Y%2Fd1b3wRHHT02yid7vA80fMMv9FE4e5AUuOw5Q%2Bf%2BhPVuvwdJNtoVxhA8LvUZ1GOFrCyEEaKs4WFK9afG0%2FTBlivXHDU4wbgC3MeQ3T%2BLkA8BvbmSxsrY%2FbxQAmAuCGg1My267jtMLn7nYbPSRNKYwH&X-Amz-Signature=8ddd3b5864a5ea4d60c800eb41c557f5b2ff07f765a6e014c11897b5f891c65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
