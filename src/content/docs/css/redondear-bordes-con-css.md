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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSBHW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVrcDlM4FmxoJDT42KauJCCCbxYfrDwVVDL6zxNXzeBAiEA4fMmpZ4J1Mh9vbfus9eXvGSuQuYdbpXPDejbeQpDLeEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1A%2Fgn9QRrkmgvUYircAwscSXy3%2Fqhqoupe2VMQ158133LDomiDx5Y8z6vY7RVzMpE0f1ZnA72OSmB04KnyDXZpmJrsNydmfSqE76VBQvkrje7yQtpmOBMScq3ifAphTi928NCAB2VaSMZd3TjjRz6nCW5HLbOFcDaHE5uybfNFg4nCu%2BWRIHg6LSQQWNgwX1AiOGEhnTtrxTlJfc0Gb2EjqE8znJA4sL3jrSSjaP0HctLBkaD6JJeVr4RrzXiYKO33vevo10ipUh9XHE%2BOelnseSGSxLfY%2F46DPvEMz5RCbsFf%2F07HhjffhPPc6X%2FEuj%2FZb53nblvZNIKl3xqB0xSCXXCksQQPHGci9iPCIW8%2Fcac8s0jKoDaRJrFSKw0VBW4Mx3s1xEF5ppOd6gMyoVr2O6QWQQi%2BfKpTZuZKb7ab%2F00Fi0mJUOf3oi9ohCfNtTDVdBmiJ4%2Fy6GgdpPSoskMHbyVnyhydY06bMdZk1p9pJMs%2FdylMgGo%2F0fNGJ5e57p4bN0%2B%2FCpJKXDyFcdb3T7EPKUgrfBJSfvdw006Ck596L9G8UPuiSWaJlul7lBoloQu%2BsJ3XrSBUW5iuI5S%2FQwg%2Bxg05AdWCL954WbhQsJxdGGIuHkpqABnaqSLerF0G7NbjwRLO7n34SuSfMP3G18kGOqUBnCS7hQAo6f4T2D2DeH55xwMHgKsvN96gFt9Gjr23KAXg6ceLXHuP%2FLoW14I4w1TKM1kzd4L%2FT1qeI7NffwgQ8PyAtwu0Q%2BqWvjJmuKSVWamTLEBZR4bFD9iQUwrR%2FS5QnyvFOpRqbNRid69He1A1X%2FYDqJgI6Lh0vt9YYrQkfMKeFzuM%2BbDKW6GSZfkR%2Fzpv4Dvw0VPgkktKEQPZJH14x3XoTkJN&X-Amz-Signature=b97805a8aead5bf13ed78131735db2c96eb6cdcedf03db1a602a69dee79fd404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBSBHW6T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEVrcDlM4FmxoJDT42KauJCCCbxYfrDwVVDL6zxNXzeBAiEA4fMmpZ4J1Mh9vbfus9eXvGSuQuYdbpXPDejbeQpDLeEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1A%2Fgn9QRrkmgvUYircAwscSXy3%2Fqhqoupe2VMQ158133LDomiDx5Y8z6vY7RVzMpE0f1ZnA72OSmB04KnyDXZpmJrsNydmfSqE76VBQvkrje7yQtpmOBMScq3ifAphTi928NCAB2VaSMZd3TjjRz6nCW5HLbOFcDaHE5uybfNFg4nCu%2BWRIHg6LSQQWNgwX1AiOGEhnTtrxTlJfc0Gb2EjqE8znJA4sL3jrSSjaP0HctLBkaD6JJeVr4RrzXiYKO33vevo10ipUh9XHE%2BOelnseSGSxLfY%2F46DPvEMz5RCbsFf%2F07HhjffhPPc6X%2FEuj%2FZb53nblvZNIKl3xqB0xSCXXCksQQPHGci9iPCIW8%2Fcac8s0jKoDaRJrFSKw0VBW4Mx3s1xEF5ppOd6gMyoVr2O6QWQQi%2BfKpTZuZKb7ab%2F00Fi0mJUOf3oi9ohCfNtTDVdBmiJ4%2Fy6GgdpPSoskMHbyVnyhydY06bMdZk1p9pJMs%2FdylMgGo%2F0fNGJ5e57p4bN0%2B%2FCpJKXDyFcdb3T7EPKUgrfBJSfvdw006Ck596L9G8UPuiSWaJlul7lBoloQu%2BsJ3XrSBUW5iuI5S%2FQwg%2Bxg05AdWCL954WbhQsJxdGGIuHkpqABnaqSLerF0G7NbjwRLO7n34SuSfMP3G18kGOqUBnCS7hQAo6f4T2D2DeH55xwMHgKsvN96gFt9Gjr23KAXg6ceLXHuP%2FLoW14I4w1TKM1kzd4L%2FT1qeI7NffwgQ8PyAtwu0Q%2BqWvjJmuKSVWamTLEBZR4bFD9iQUwrR%2FS5QnyvFOpRqbNRid69He1A1X%2FYDqJgI6Lh0vt9YYrQkfMKeFzuM%2BbDKW6GSZfkR%2Fzpv4Dvw0VPgkktKEQPZJH14x3XoTkJN&X-Amz-Signature=a6f614d8ddc669b730de2178cf9dd543594b719054c9e6d372057659d967d649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
