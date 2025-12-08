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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2WT27J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYtuDfyUSs%2FEKH5V%2F8IJqbusIdwhQo2e2z1U%2B2PYpjUAIgTAZJuCxygGsLPzcFNio4%2BDMyeo9XKphU%2B7NUO33HItUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2BS9wCNb5DeVBzUircAxP9KxPAbzBTxCDph%2FCvi2vRsKmQBojJC0f5QHZxd4IIzkQ6YoxCo9OGuEi2vOq513jvmSbFfAC4nMMrNfCiYxmj8YQTOWDXdYlh5FrlA1BP6XIXfie0YdWKgiLVm6ftKl%2FAsOJKmG2Ijk2xZ%2Buu36M0PyT4jA%2FMneETHAPra5VYzPU273jH%2BYJr8V8Xck4WBZuP9W937XFnpmhgmkDcn7ymblhsya0w2shLzBFIheUDFx%2B%2Bv97IHT1BuAMCdD3Y2oiI75npp%2FGVf8zx0S8QS%2B%2B4tBRTBlJ9sem5i4lzIVY%2BHRrnxvaUQnoYUQLjtfcQqa1aLpXnt6PbdN480pr54%2FJmToTwug4Uv4U0YaQXwPHjz%2FGkFAsuc17galFcFMzyQ6D2QJDmYi8DaPOsMism%2F9ROQdtXiR06dgeQSsb1zX327D6g2I%2FPxiRuHUKy6GRvGld0oSPePl%2FHZ2FUi%2Fnz5vftYm16lMSie8rYELviJUsJFHXU3Lx8tsupf%2FKUUvB8%2BQuJFlPT6ICjLT%2FkWBwP89YhxvJblMUPZjWIiTTfHPE6WN7VXSs10zuVCiATGw5j4rN%2BwYECavgFS57PLcmh5tfBjk3uSd6dgYOBo5IRVGnUNE2BjZQH%2FjTkgErEMJW03MkGOqUBUeUo60Yf8fHFJNu4%2FPakz5AvVaRUNSqUZHMBo9G5fqoQlHaqkv%2FlSV45rw3Mvd4%2F8d%2FlRS1aJAJZMUqaWNoZYxzq6Nb9g0EldX3HBCnSi1d75Sd3sN1mbTKBKFiAFHORdHehwXb9%2BDbK3cz7GNCJHp7F8S8BNVYI%2FVXh61uHI5qT6D4H3aI%2FDDihnZg3oWW6OUXc295k2t6lz3%2BsvP2WrG7caBeE&X-Amz-Signature=f322ff098b1c2baad33e2c6212881efb53253a2f2645031d4de7974f08466544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R2WT27J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYtuDfyUSs%2FEKH5V%2F8IJqbusIdwhQo2e2z1U%2B2PYpjUAIgTAZJuCxygGsLPzcFNio4%2BDMyeo9XKphU%2B7NUO33HItUqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPV%2BS9wCNb5DeVBzUircAxP9KxPAbzBTxCDph%2FCvi2vRsKmQBojJC0f5QHZxd4IIzkQ6YoxCo9OGuEi2vOq513jvmSbFfAC4nMMrNfCiYxmj8YQTOWDXdYlh5FrlA1BP6XIXfie0YdWKgiLVm6ftKl%2FAsOJKmG2Ijk2xZ%2Buu36M0PyT4jA%2FMneETHAPra5VYzPU273jH%2BYJr8V8Xck4WBZuP9W937XFnpmhgmkDcn7ymblhsya0w2shLzBFIheUDFx%2B%2Bv97IHT1BuAMCdD3Y2oiI75npp%2FGVf8zx0S8QS%2B%2B4tBRTBlJ9sem5i4lzIVY%2BHRrnxvaUQnoYUQLjtfcQqa1aLpXnt6PbdN480pr54%2FJmToTwug4Uv4U0YaQXwPHjz%2FGkFAsuc17galFcFMzyQ6D2QJDmYi8DaPOsMism%2F9ROQdtXiR06dgeQSsb1zX327D6g2I%2FPxiRuHUKy6GRvGld0oSPePl%2FHZ2FUi%2Fnz5vftYm16lMSie8rYELviJUsJFHXU3Lx8tsupf%2FKUUvB8%2BQuJFlPT6ICjLT%2FkWBwP89YhxvJblMUPZjWIiTTfHPE6WN7VXSs10zuVCiATGw5j4rN%2BwYECavgFS57PLcmh5tfBjk3uSd6dgYOBo5IRVGnUNE2BjZQH%2FjTkgErEMJW03MkGOqUBUeUo60Yf8fHFJNu4%2FPakz5AvVaRUNSqUZHMBo9G5fqoQlHaqkv%2FlSV45rw3Mvd4%2F8d%2FlRS1aJAJZMUqaWNoZYxzq6Nb9g0EldX3HBCnSi1d75Sd3sN1mbTKBKFiAFHORdHehwXb9%2BDbK3cz7GNCJHp7F8S8BNVYI%2FVXh61uHI5qT6D4H3aI%2FDDihnZg3oWW6OUXc295k2t6lz3%2BsvP2WrG7caBeE&X-Amz-Signature=b11896e011fd4f5ee727922b05862bd67d6824e62c77ea4ad78f88ef0a87755c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
