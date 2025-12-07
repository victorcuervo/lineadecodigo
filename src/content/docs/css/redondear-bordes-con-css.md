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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVFRNZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYFfFxWmrnv0E7TfdHCVWDt0ntlhemkIvfJvrJAL8qQIhANcPVlFsBbxBSIvAUxQhHQURn2gKzTmVgRcY%2Fnn54dSgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQqZWdYQQoVOtOKMq3AMjskydKIV2zlvA30maw0RjnwyEtIZsZTa%2BTi7HnDzalOVrh6l7S5jfxenWTdU9aSsDZm8zofAO5HcLgmTYGNws6O%2FJsmiALPjqtQX6ywAkPKjNJK7XF6A3v2VEChQBrbt3VJHJTI1i50%2F4ontcVowI05ct0zNAeenXctrR%2BSenSFQuyxkR3k%2BlF3uHjo%2FpxZd4HtooEWeE0yrElvatDfAFfkAS%2Fe5r9gmXlPPAXnfsrLs%2BXJueCv9CAkQeWeyiLc42mQBUctQdUaAFCskwLpYZssYbeLucvdb5XCNrdAtkFMvEjdhdWJotdrieO81Bnx9UNYGHL0drccxKy0wToreuQhkScOHnad8y9N%2BSpfIvIDwtRGxnywn3DWtRLhUn65OtSzsSJVddi8zHXNRMMOT0%2FJu%2Bx8tQNPFHINg4hY3MSA1BX81ebcwC6H777hPg8afPog3ZA2TqyIaBH1Yl08kzpT96E2UA9lKLAxHBGtVX9U6v25dYyCAoqM3cp3ERVWdR1AEJZJQpgnOniZY8DF56JK6Y5siembL8pPIEXMrOzLrkKs0xB%2BdmDnU8%2Fra6rpv8LpCVGtJHbo7lZJK269uNYq4EfGu9%2Bo09ldDBUJw1hj6AiOWvl8LtDHh0mTDq%2FdLJBjqkAXkEI53vW2D7XcaXuwGYBrDmJiwCXV1AB8k6hBVJqkNoJGVQftd7IbrEdNqaZ764fWlSv89FVNC604LCDW01Fq4u81jS078Al%2FuCl3b6AFWPX0oXh6ynYizncjh9sy8NS4uFbQp9fWpO%2FelM%2FxpfYH5Y6dH2aIwNOETOQF0mBrefvJ1KQAo7%2FzXSywhbR%2Flls316e%2FQipXLi01rypsF%2B454fHKFF&X-Amz-Signature=05c1feb4c53ac8cb0854f9acdc88ceb064af33892696786d86954e245e5f4d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVFRNZD%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnYFfFxWmrnv0E7TfdHCVWDt0ntlhemkIvfJvrJAL8qQIhANcPVlFsBbxBSIvAUxQhHQURn2gKzTmVgRcY%2Fnn54dSgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwvQqZWdYQQoVOtOKMq3AMjskydKIV2zlvA30maw0RjnwyEtIZsZTa%2BTi7HnDzalOVrh6l7S5jfxenWTdU9aSsDZm8zofAO5HcLgmTYGNws6O%2FJsmiALPjqtQX6ywAkPKjNJK7XF6A3v2VEChQBrbt3VJHJTI1i50%2F4ontcVowI05ct0zNAeenXctrR%2BSenSFQuyxkR3k%2BlF3uHjo%2FpxZd4HtooEWeE0yrElvatDfAFfkAS%2Fe5r9gmXlPPAXnfsrLs%2BXJueCv9CAkQeWeyiLc42mQBUctQdUaAFCskwLpYZssYbeLucvdb5XCNrdAtkFMvEjdhdWJotdrieO81Bnx9UNYGHL0drccxKy0wToreuQhkScOHnad8y9N%2BSpfIvIDwtRGxnywn3DWtRLhUn65OtSzsSJVddi8zHXNRMMOT0%2FJu%2Bx8tQNPFHINg4hY3MSA1BX81ebcwC6H777hPg8afPog3ZA2TqyIaBH1Yl08kzpT96E2UA9lKLAxHBGtVX9U6v25dYyCAoqM3cp3ERVWdR1AEJZJQpgnOniZY8DF56JK6Y5siembL8pPIEXMrOzLrkKs0xB%2BdmDnU8%2Fra6rpv8LpCVGtJHbo7lZJK269uNYq4EfGu9%2Bo09ldDBUJw1hj6AiOWvl8LtDHh0mTDq%2FdLJBjqkAXkEI53vW2D7XcaXuwGYBrDmJiwCXV1AB8k6hBVJqkNoJGVQftd7IbrEdNqaZ764fWlSv89FVNC604LCDW01Fq4u81jS078Al%2FuCl3b6AFWPX0oXh6ynYizncjh9sy8NS4uFbQp9fWpO%2FelM%2FxpfYH5Y6dH2aIwNOETOQF0mBrefvJ1KQAo7%2FzXSywhbR%2Flls316e%2FQipXLi01rypsF%2B454fHKFF&X-Amz-Signature=2f56cc0bc027cf337d08c65cfb8c417c48a14dd97dedb0d2ca8b7b982fef84b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
