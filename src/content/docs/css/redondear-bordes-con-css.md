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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPF5EKRA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLBXxEaDUVO2lUkl4vO3IJE%2F799acQKqp2PB%2BAK%2BbDcAiB2IqwCi0W6rcLheFJJ8utsP3KrV0jFy0JDcQCCwdk8xSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEzIIRuOZC4%2FVlfgVKtwDAuBFKLTSswFXhwdve4AVYau6%2B9GYf2CjDkykyDOk5y2eWHqF0oWkbtPktdOG2q%2B9PEMy7rfif216ioIJ9rg0oq1uKE5IOYCnLnMI%2B6TuA4ElcMYiLXXZJ9P27eXxde9wujU8OltdpRAl1WSesQQ5OW336tnGSdpAf2%2FKqLzz1blcDwl09EcXcT8bFYVeQX4s%2BsYoA3GRj3OVQsrOBU%2FvoNs5jQH%2Fv94Wj5BvqYAMJma3K%2BE4E3KHq3VZ56l8lYBaC93Lnvxe2USggb4Tl248b4De4XN%2BX5juCOR2vl8MYpQqOCj5THqWdsf7lZ0Z%2BHTS%2F5Or2NhtkC8lEPbV8aGOeJ0HP%2BAPkGXsdIBY%2B0TM2qKDLPkbGBddJthWeWhUnHDzyX6k%2F70PSbJw82%2FB1rQA0lu4CVIwz%2FGUJtqKJlrtKhtwRobfd%2FQ%2F%2FAlHw7jSNECB6rkguWY7i9X5q5qARbiT%2BumIjCSs5Oxi4YSgZCkgiE2t2qd8sDBvAqBDuzTAhAOW1aScJmVjH2t%2BiZiIkt0nX5Hl1d7G3eA78wnNzcq6UwdCb6p1DE0R8MMyn9nDUHZ3wz92avJCVZMhQ0%2FHSEAWwqA6iY0KiElSKTftLDAMdb%2BNGX66j2DRwNmCSZown4XYyQY6pgH%2B%2F0XWP5DULaZRXc%2Bouxfgm2JkOQ%2FSYmlB%2BjbgL7NtrI2V5U9rgkk58IUdRfF6CGNZ5SU7P72xX1dHnPj9nFEfniWTpwrIHirHQ%2BoN8awrCJPhik3ioZl4OIGyxAsnbyGGhKjNVkhOIKKwvTSbQb7XBqFTdRZpQcVE9KTn9xJ5mjphLLXGfTucqVyZ6%2B6w%2ByDTH5YJW1xgfd5np869GFnUzmv9F%2BY2&X-Amz-Signature=8ab8d2b60ac3d5fccf64e0e60de976411cb8812261c3ddc39afae2abd6f4d4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPF5EKRA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T231709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDLBXxEaDUVO2lUkl4vO3IJE%2F799acQKqp2PB%2BAK%2BbDcAiB2IqwCi0W6rcLheFJJ8utsP3KrV0jFy0JDcQCCwdk8xSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEzIIRuOZC4%2FVlfgVKtwDAuBFKLTSswFXhwdve4AVYau6%2B9GYf2CjDkykyDOk5y2eWHqF0oWkbtPktdOG2q%2B9PEMy7rfif216ioIJ9rg0oq1uKE5IOYCnLnMI%2B6TuA4ElcMYiLXXZJ9P27eXxde9wujU8OltdpRAl1WSesQQ5OW336tnGSdpAf2%2FKqLzz1blcDwl09EcXcT8bFYVeQX4s%2BsYoA3GRj3OVQsrOBU%2FvoNs5jQH%2Fv94Wj5BvqYAMJma3K%2BE4E3KHq3VZ56l8lYBaC93Lnvxe2USggb4Tl248b4De4XN%2BX5juCOR2vl8MYpQqOCj5THqWdsf7lZ0Z%2BHTS%2F5Or2NhtkC8lEPbV8aGOeJ0HP%2BAPkGXsdIBY%2B0TM2qKDLPkbGBddJthWeWhUnHDzyX6k%2F70PSbJw82%2FB1rQA0lu4CVIwz%2FGUJtqKJlrtKhtwRobfd%2FQ%2F%2FAlHw7jSNECB6rkguWY7i9X5q5qARbiT%2BumIjCSs5Oxi4YSgZCkgiE2t2qd8sDBvAqBDuzTAhAOW1aScJmVjH2t%2BiZiIkt0nX5Hl1d7G3eA78wnNzcq6UwdCb6p1DE0R8MMyn9nDUHZ3wz92avJCVZMhQ0%2FHSEAWwqA6iY0KiElSKTftLDAMdb%2BNGX66j2DRwNmCSZown4XYyQY6pgH%2B%2F0XWP5DULaZRXc%2Bouxfgm2JkOQ%2FSYmlB%2BjbgL7NtrI2V5U9rgkk58IUdRfF6CGNZ5SU7P72xX1dHnPj9nFEfniWTpwrIHirHQ%2BoN8awrCJPhik3ioZl4OIGyxAsnbyGGhKjNVkhOIKKwvTSbQb7XBqFTdRZpQcVE9KTn9xJ5mjphLLXGfTucqVyZ6%2B6w%2ByDTH5YJW1xgfd5np869GFnUzmv9F%2BY2&X-Amz-Signature=8887ce7a63bad10cb5e51e2ed14812f7fc1ef803d51bdee46d0062096b1e0a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
