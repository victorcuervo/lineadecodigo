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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFT6VHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSx6mQhOCykRUu8KLrnltXcq9XEDz567L51w0S%2FOMRTgIhAJLALY%2Fp4x8Re7KVFnunhikP5lrOhIAesd9CNvngo9NeKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiahKZ2Lc3%2F2%2BoNkkq3ANYDeaUQ%2FF3xtaqLFccKYGiC4D812Y14Paa5fDSeYiUmyaO9%2BTF1xk7n9SkA7uVleZmZmRyvHZ616h3vYxBlHZOCu7131qkRKa27L4xEdelG%2BeaFj8FqILbN390z2ppYNP4OamVwF4DgrtA0kLVMb6BjMVk%2FLlLTm162n4VXsHGQ0kWmGY%2Fc41FQ23ifrF0OiIiqPpvJDBIcJBglK8BfOBnj89fz7JAb4ZNWdpNyVoBrXXmAlI6U2eS8ILUTgaGxe3WH5wsePhcIwJR1w9nxEOOO%2FnCRUi0BhsXHtyS8YJV9rE4ONfbiXfV0VKS%2BZFLto8Z%2F7y%2B%2FKN6UO2A1RLU6EoOBuG0uFxE57mqbCsyGeUwIM7UHSjPVrsJN3TIBdQcXnzJKF1ljhavTHbuc%2FFT7kwNpPsOPdCPdQpZs3VGHpQF4ReAIBcRyZJLz5NSLNK0R%2FPncMx8580Y2vhAoqA9V4p8C6d%2Bva3%2BZ1RcJBoI752GEFwozYFQ9r9%2B2llv%2FszMl0EZC6cYjeLc1jr8zq%2BYS7e%2FNu7B801iGfUj8%2FkWJr2NDfIXbIatNgHG4qK44XKfMR%2BLPUKJHbeSFJl0ahVEk5yyJI2VxznI0w4eEgolTTDC0RNxlRwBk9be8g%2BKBzDthNjJBjqkAfBsn3ol1g6Lw9J8tmBXRmTGzSOQF2Lp%2FBN8ZNgkRaEZvq8RvSYVkd0n3JTrAzoBQ7HkCOpVNBZaXsB2%2FXx6zOVoqgATyMxNpw0pGIJ45kj9BkL317oOGWcA33CwsvC4qb71JcroB4NqGvM%2BAoRc5qTAkjTbzOHDNdcCHqCum349uKzRGCAIZWf%2B8%2BVLjk88bJCcqlcEYResCr%2B8LTAFn5B4vTxc&X-Amz-Signature=d6fdab888526ffdc66c94b63a0ef3ab98d75424894b41b83b7ff1075cda17eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NFT6VHY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSx6mQhOCykRUu8KLrnltXcq9XEDz567L51w0S%2FOMRTgIhAJLALY%2Fp4x8Re7KVFnunhikP5lrOhIAesd9CNvngo9NeKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyiahKZ2Lc3%2F2%2BoNkkq3ANYDeaUQ%2FF3xtaqLFccKYGiC4D812Y14Paa5fDSeYiUmyaO9%2BTF1xk7n9SkA7uVleZmZmRyvHZ616h3vYxBlHZOCu7131qkRKa27L4xEdelG%2BeaFj8FqILbN390z2ppYNP4OamVwF4DgrtA0kLVMb6BjMVk%2FLlLTm162n4VXsHGQ0kWmGY%2Fc41FQ23ifrF0OiIiqPpvJDBIcJBglK8BfOBnj89fz7JAb4ZNWdpNyVoBrXXmAlI6U2eS8ILUTgaGxe3WH5wsePhcIwJR1w9nxEOOO%2FnCRUi0BhsXHtyS8YJV9rE4ONfbiXfV0VKS%2BZFLto8Z%2F7y%2B%2FKN6UO2A1RLU6EoOBuG0uFxE57mqbCsyGeUwIM7UHSjPVrsJN3TIBdQcXnzJKF1ljhavTHbuc%2FFT7kwNpPsOPdCPdQpZs3VGHpQF4ReAIBcRyZJLz5NSLNK0R%2FPncMx8580Y2vhAoqA9V4p8C6d%2Bva3%2BZ1RcJBoI752GEFwozYFQ9r9%2B2llv%2FszMl0EZC6cYjeLc1jr8zq%2BYS7e%2FNu7B801iGfUj8%2FkWJr2NDfIXbIatNgHG4qK44XKfMR%2BLPUKJHbeSFJl0ahVEk5yyJI2VxznI0w4eEgolTTDC0RNxlRwBk9be8g%2BKBzDthNjJBjqkAfBsn3ol1g6Lw9J8tmBXRmTGzSOQF2Lp%2FBN8ZNgkRaEZvq8RvSYVkd0n3JTrAzoBQ7HkCOpVNBZaXsB2%2FXx6zOVoqgATyMxNpw0pGIJ45kj9BkL317oOGWcA33CwsvC4qb71JcroB4NqGvM%2BAoRc5qTAkjTbzOHDNdcCHqCum349uKzRGCAIZWf%2B8%2BVLjk88bJCcqlcEYResCr%2B8LTAFn5B4vTxc&X-Amz-Signature=68edc48a793eaf7abc964e33426d91c7aabd8201ea0d8143875b4f2227df3e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
