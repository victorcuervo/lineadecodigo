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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3IN4FHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUH4sDyf%2BtT22wjS9P3SrjMNFr604%2BspWKaacmFyy7kAiBFZkvk7LwQ%2FWzVkD5FVxsYGR8PLPNTJLbfY1rQ%2BEI2XSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsLEp4Emc%2BEvgFSJrKtwDZGc2E2mcSieME1icqa0VtAN%2FmUguCzp%2BmbUxd1raHSsqoBtZT3r4DNqmu9GfZbyp7IgqG6Z3V4AmjWSb2gP0Cz%2FAFXEA%2Bye%2FOcrdZcpFDBwpk8H%2B%2B31%2By0YWW7HCg1A%2BNcJ%2FPU7xl1zGiPB%2FvUisyaPfvzU9Orlg%2Bh80hQW0gCdLNRzxlhBDekOid9GaC9Yml2VZiBqWoo2ZaFDJiv%2BIQ%2FWdhpfn1tNI5ftKLHSyePzaiVDcbA1Wy140cmIjSqbUqcyUokBdr346EM%2Br89QNsM2KBLdE%2Fp0%2FU5hpxCf9oqPod3GBqPHR3NPulZ9d8ocre61QAPtJ38PaVSuUbdksiMpK5EK7FO15N5NdRgDyp3DtAa8XyQifthNWTyceFo5XrFH1uyNJ6CZC9O9fQFGKkXZyONmiUjUEdFvXbywKtiGtNyflp9bwNAo7ZRqT7JrHMXfWz6%2F%2FCND5EFtWGg9W3YDIJCSUAy2alQ8tpxzXjoIahMMRlTO8kDUga0yoxYJYCQ83036FHgd7r6NDZhbJhzAMzNtj75nIfom8fnM%2FKtWCyLUetAilayPOKALcf4UEqydjFtAHlQFW5sCbXQPZz21Q9huEfd85IFtsKBT1CKzExw3wdr7KcGQAwy4w%2BemIygY6pgG90MTSKmIccFz1iAFEIR87OYkYC8RH%2B0co37fj497FomuUvGa0%2BTVn1md3fMPCwjpBoZj8noS%2BlepRZ9nCUeB0KopfLTCP2Yt9sDccUdeHex%2FXftXNjMesbQu30fgcxRp63yQiqSYIttP6QIHkNXVC3se0koR%2Bj2NoHlPmi3yfv6JBbaN6ppDVVp07soG2DU93mJATdoYYbsu%2F5pe6Ft5g0fj%2Fsy01&X-Amz-Signature=cd96ccfea72967ae102e8b028d01e21c6eaceea50c0d5796cb341e2a6b49a807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3IN4FHN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUH4sDyf%2BtT22wjS9P3SrjMNFr604%2BspWKaacmFyy7kAiBFZkvk7LwQ%2FWzVkD5FVxsYGR8PLPNTJLbfY1rQ%2BEI2XSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMsLEp4Emc%2BEvgFSJrKtwDZGc2E2mcSieME1icqa0VtAN%2FmUguCzp%2BmbUxd1raHSsqoBtZT3r4DNqmu9GfZbyp7IgqG6Z3V4AmjWSb2gP0Cz%2FAFXEA%2Bye%2FOcrdZcpFDBwpk8H%2B%2B31%2By0YWW7HCg1A%2BNcJ%2FPU7xl1zGiPB%2FvUisyaPfvzU9Orlg%2Bh80hQW0gCdLNRzxlhBDekOid9GaC9Yml2VZiBqWoo2ZaFDJiv%2BIQ%2FWdhpfn1tNI5ftKLHSyePzaiVDcbA1Wy140cmIjSqbUqcyUokBdr346EM%2Br89QNsM2KBLdE%2Fp0%2FU5hpxCf9oqPod3GBqPHR3NPulZ9d8ocre61QAPtJ38PaVSuUbdksiMpK5EK7FO15N5NdRgDyp3DtAa8XyQifthNWTyceFo5XrFH1uyNJ6CZC9O9fQFGKkXZyONmiUjUEdFvXbywKtiGtNyflp9bwNAo7ZRqT7JrHMXfWz6%2F%2FCND5EFtWGg9W3YDIJCSUAy2alQ8tpxzXjoIahMMRlTO8kDUga0yoxYJYCQ83036FHgd7r6NDZhbJhzAMzNtj75nIfom8fnM%2FKtWCyLUetAilayPOKALcf4UEqydjFtAHlQFW5sCbXQPZz21Q9huEfd85IFtsKBT1CKzExw3wdr7KcGQAwy4w%2BemIygY6pgG90MTSKmIccFz1iAFEIR87OYkYC8RH%2B0co37fj497FomuUvGa0%2BTVn1md3fMPCwjpBoZj8noS%2BlepRZ9nCUeB0KopfLTCP2Yt9sDccUdeHex%2FXftXNjMesbQu30fgcxRp63yQiqSYIttP6QIHkNXVC3se0koR%2Bj2NoHlPmi3yfv6JBbaN6ppDVVp07soG2DU93mJATdoYYbsu%2F5pe6Ft5g0fj%2Fsy01&X-Amz-Signature=05add388484d88aafa6d57d7731da68efdbe80094fb6fcfdf1eda5e51f2701b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
