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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWEANWH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrcyA0v%2FpL7%2FiaCzaKdn19TDTXKHC7gUlTh6gj1Bwh3AiBRQoC2UNV%2Bumk9F54Nyp%2FH%2B47axOws6woQEqAZdKgdiiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JbAD4sfNsqnWWMbKtwDA%2FkkoMrfMPyQvbPPbgtx%2BqfVvLnLbNhHqy18oWTgq6eyAFrEHeTAcatIioX7bA0Quqaxa%2BBqelxUWVBbScw4irct4j9gqgQVvVAM95rEYiYemNs98KwD4DB3BNih0NhD6ur%2BnP1zy61TsHVc2CATzI8qEkCS7ljkTf7HX9jHZf8X9P%2FKjPRS3jTgkgkz8W6vDYk%2B2HzwVrWW0r1ziouWhJgph8YOQHMuP6tv8cd4qvGazcV5cPUYdDeBaMygFW37sXx%2FUlaePtlMQWr0TN%2Bn11JkYkv2GmYH3o5BJSo%2F0Ayf7zLiB8YvOTDgfvb0i8kTthuL2fv8ivgev4WkdkEb9h6IbEGIXnsl1I0wejs39KWDJyoG3xPUYdDcIS9gr1HGauOdrQM%2Ffe%2FfbA8mYsOM%2F7I%2FJPuTYOaNq7YJvsmDHubyReJ0Jxjy9XC%2FLC2cRhwl9VuGXsRC83qbp8mNSgxLqg%2B72VP0K1DRDQirVgg4iC5mpg0O%2FX%2F5vuFbYPdrOdXvgevuWPqMxWHjfry%2BgGlpKsF%2FVWfRZ4iDh%2FHDWoJQWzmW5yPLA%2F4%2FVQx0iNbQ3o9tMsnJDpI1y%2FFo0sCESNRdcj2yj1kibfWbMaF0%2Bh2oie8fhGVmoILeZH2F4EQwkbTZyQY6pgHM9TUv58o86cEiWpnGiJSrqLIVJf5Y0kYOhLzlRdJ3yqpEIydoM20IibuISBCwkHU5UGJMpvBTQFvbHkm9h3bci7tUGyZQunh%2B29qZCCja3C3T%2BJhebbxTIkw5%2FpBfI1E7AoYZkLCVJk0ozwg%2BLnWDBNgavf%2FlL%2BbxfQAgZ%2B8inDpZr3xn53n2fwuuLBI68ZSiUszk%2F27lOBgzBnk2Et3lAStY4bTK&X-Amz-Signature=914376a8601dc1537739ffcdb251483a954f56c6d1134c57622e299cc2fe95ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWWEANWH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T053819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrcyA0v%2FpL7%2FiaCzaKdn19TDTXKHC7gUlTh6gj1Bwh3AiBRQoC2UNV%2Bumk9F54Nyp%2FH%2B47axOws6woQEqAZdKgdiiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7JbAD4sfNsqnWWMbKtwDA%2FkkoMrfMPyQvbPPbgtx%2BqfVvLnLbNhHqy18oWTgq6eyAFrEHeTAcatIioX7bA0Quqaxa%2BBqelxUWVBbScw4irct4j9gqgQVvVAM95rEYiYemNs98KwD4DB3BNih0NhD6ur%2BnP1zy61TsHVc2CATzI8qEkCS7ljkTf7HX9jHZf8X9P%2FKjPRS3jTgkgkz8W6vDYk%2B2HzwVrWW0r1ziouWhJgph8YOQHMuP6tv8cd4qvGazcV5cPUYdDeBaMygFW37sXx%2FUlaePtlMQWr0TN%2Bn11JkYkv2GmYH3o5BJSo%2F0Ayf7zLiB8YvOTDgfvb0i8kTthuL2fv8ivgev4WkdkEb9h6IbEGIXnsl1I0wejs39KWDJyoG3xPUYdDcIS9gr1HGauOdrQM%2Ffe%2FfbA8mYsOM%2F7I%2FJPuTYOaNq7YJvsmDHubyReJ0Jxjy9XC%2FLC2cRhwl9VuGXsRC83qbp8mNSgxLqg%2B72VP0K1DRDQirVgg4iC5mpg0O%2FX%2F5vuFbYPdrOdXvgevuWPqMxWHjfry%2BgGlpKsF%2FVWfRZ4iDh%2FHDWoJQWzmW5yPLA%2F4%2FVQx0iNbQ3o9tMsnJDpI1y%2FFo0sCESNRdcj2yj1kibfWbMaF0%2Bh2oie8fhGVmoILeZH2F4EQwkbTZyQY6pgHM9TUv58o86cEiWpnGiJSrqLIVJf5Y0kYOhLzlRdJ3yqpEIydoM20IibuISBCwkHU5UGJMpvBTQFvbHkm9h3bci7tUGyZQunh%2B29qZCCja3C3T%2BJhebbxTIkw5%2FpBfI1E7AoYZkLCVJk0ozwg%2BLnWDBNgavf%2FlL%2BbxfQAgZ%2B8inDpZr3xn53n2fwuuLBI68ZSiUszk%2F27lOBgzBnk2Et3lAStY4bTK&X-Amz-Signature=2885bdb1557b0465b311c296afdc15190df6f8ea8847d0b6778c97c952a6b633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
