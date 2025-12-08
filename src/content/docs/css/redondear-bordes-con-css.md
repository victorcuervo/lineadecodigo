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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRNXZOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGlsP5plJZgKP9rz2SKFz1MOjDPtVmowG4W61wfM%2FJDAiApyRNhoFPnhlE1EOHpCG9VMKp5G6TYeD4l%2FAX0%2F835GyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5Uu8jl1Xb%2FJ%2BYu%2FKtwDs%2B6AsYyjDvFtrRnwZ0oatMpJ7q5hl2n6wLT%2BFt2T8gL0ICgR4WwSqHN5I7OVmP1RRAErt%2BDW%2F1PyA8Z5eQXQ%2FZPn1r1D0nsXS1csVetrqCr2138cHi1SAOu4X%2B%2B9GlCahiKT4EB1vHVAZRfR0hAod36oSj%2Bjys9hBM5q%2BdRpRgsfn9fBS48C9tYivbdxancsjNJgmpcMXzekknW330XTYSrXKee3DPHB%2F%2FrjOcuQNBTWNe5jqiE9IIP2lxqrEF5REUX65CVyYbVSJTp99Wyi9%2F%2Fmzq6n23zfXfAI6nXfflaPeD5GaBYYYNDSo7rNzb9vYcyJEkQIyaWFHOCiGjYiekQBtO9c%2FTiK4Dmb9RqLacK3KnAZTd1vlYfvnOsy1SIalVciKhqWJ0EjFrq59LW%2B2HpiZQIaCIGQWBIBXQ1qPB8%2B6Vsy9hTtols5YTS3NsAMsH%2F9BtXcWT%2FmQXCrUquVjPC0FdUU5OUqMUJjkDYWliHK7KRXHEvIEOcFBDYclmFEjnI62pEsT%2Fk6KeE%2B4u6WaAypEj%2BnFFIEBX8epmEBGxxIwnP4HDofIFAt19JxMZtuTBCAvNCRjOXAajZfdYjQcDxN9p5k1a%2B0NysfoqC8XC3xigCE%2BV%2Ba7GXOVg0wp4fcyQY6pgFIjpsUrZGHW4%2Blesw8Pm40xhq%2BHlRCCzI72%2BiKzeDgY%2FEt%2BmhfAcPlkAH%2BD00pyVigzccZDVWgrRmiNK7BtlCxy7yvD0Ra6EkpJ9Z9x9qkuNC8rrgXFnS6idPNnqL8fFxdxXReqPekaavyxm7MeWwfBBs7lnBR5M1rNm%2FG6JLb7gJs5lXtFJEqlIqkE5dceA5oYAztwXb0XEGzwrduqP591MaOMsFz&X-Amz-Signature=6a2403ac166df14de203eea708dd2dfd5b06d10d886e503885aeb23100ffaabe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYRNXZOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T181558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGlsP5plJZgKP9rz2SKFz1MOjDPtVmowG4W61wfM%2FJDAiApyRNhoFPnhlE1EOHpCG9VMKp5G6TYeD4l%2FAX0%2F835GyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC5Uu8jl1Xb%2FJ%2BYu%2FKtwDs%2B6AsYyjDvFtrRnwZ0oatMpJ7q5hl2n6wLT%2BFt2T8gL0ICgR4WwSqHN5I7OVmP1RRAErt%2BDW%2F1PyA8Z5eQXQ%2FZPn1r1D0nsXS1csVetrqCr2138cHi1SAOu4X%2B%2B9GlCahiKT4EB1vHVAZRfR0hAod36oSj%2Bjys9hBM5q%2BdRpRgsfn9fBS48C9tYivbdxancsjNJgmpcMXzekknW330XTYSrXKee3DPHB%2F%2FrjOcuQNBTWNe5jqiE9IIP2lxqrEF5REUX65CVyYbVSJTp99Wyi9%2F%2Fmzq6n23zfXfAI6nXfflaPeD5GaBYYYNDSo7rNzb9vYcyJEkQIyaWFHOCiGjYiekQBtO9c%2FTiK4Dmb9RqLacK3KnAZTd1vlYfvnOsy1SIalVciKhqWJ0EjFrq59LW%2B2HpiZQIaCIGQWBIBXQ1qPB8%2B6Vsy9hTtols5YTS3NsAMsH%2F9BtXcWT%2FmQXCrUquVjPC0FdUU5OUqMUJjkDYWliHK7KRXHEvIEOcFBDYclmFEjnI62pEsT%2Fk6KeE%2B4u6WaAypEj%2BnFFIEBX8epmEBGxxIwnP4HDofIFAt19JxMZtuTBCAvNCRjOXAajZfdYjQcDxN9p5k1a%2B0NysfoqC8XC3xigCE%2BV%2Ba7GXOVg0wp4fcyQY6pgFIjpsUrZGHW4%2Blesw8Pm40xhq%2BHlRCCzI72%2BiKzeDgY%2FEt%2BmhfAcPlkAH%2BD00pyVigzccZDVWgrRmiNK7BtlCxy7yvD0Ra6EkpJ9Z9x9qkuNC8rrgXFnS6idPNnqL8fFxdxXReqPekaavyxm7MeWwfBBs7lnBR5M1rNm%2FG6JLb7gJs5lXtFJEqlIqkE5dceA5oYAztwXb0XEGzwrduqP591MaOMsFz&X-Amz-Signature=201cc715f2559123abaf5d93a9dfa3ea6b34ab667fd2af653237dc559f910193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
