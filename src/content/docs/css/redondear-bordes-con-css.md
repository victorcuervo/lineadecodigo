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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IMWDEY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRjnrwz1V1ENbRsetPU3RBzFSFx3NhiO%2BJHyC651u%2BdAiBq2FB2nZ%2Bwj8c6zAjsrCQNfTI0e9AZMRsLh7g4e3b6eiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiI7KIanDIhWtm5T8KtwDLxAmxjZSzQkDDJlPWZWAcZi2xBf0AwpHNyYgeyXjfrMHmRDXnJHwM9ENwuHrbDAQi47DpkDlGyH9z0MhhBobKepX5%2B0N7%2FFSu3RrnsQq4RV33Sjl1ZB7ArqJ%2BjKz1GqVL%2BKqPWnNwCQI7F2DSL9zjtBzCR8mKR9Z0QAS8tt6Thx0fhi4Su5hii9xqGsUPco3oRQkiXN8hg24OJZhEQmlZJFtfTS0vaob3jdemswf%2Bu0YRCqGPRrTcgYF08YY4V%2F87RxI99Dx1ZPlY7o5uxstJ3xzXjLuW9xdBPKXhSiIbyNedJWl3zpYPGRxgTzTh0QecEdw6%2BrsCd7YYQt%2FdnfPlv6vbZF8iJEPxjKmSs62U8n0kCmHPmLH%2FiFXkADfXEgTz3KPqDSgegyI4ctxuqdPLjrrgjdnx9H7QRKyl030ii0h3PbIBX%2FWj4EsBteL%2FYRZrJcEGKAFuLH9fuRm%2FvS4b9Eb2ekx2qC27zcxx58rEg6pcv2YKJsLJvyja4fL%2F8uvHZrLtbL3dxf0DY7QTLCJZu%2FfLXlHsaWB4RC4vDIIyHccRpsv1gK247Ii%2BRyeRBn4vRQ1uaYSTalDdf0hVJQmhpf4OUPaldymPkeCna2ZJBGFYx7IIjSDQZciZjwwkf3SyQY6pgHdsIWKkFN8ZOKa8LjbX95qeTd21Dw%2Fb1Saj9QxM4bLAd8YGYkPoPft09UoaKoE0RAL5csZdFRmkCXulINgEh6XnI2nNc7c4hW2vhC43UCZEhXLJ%2Fb4ZAtOYq9fK2Xd4lSHVy8NFuHs3h6PLPoRUk9M%2F3CMbv%2FUfNc3ONysCdpBtEYoFC25f8HjWlBVLANNtqZI5Xc23whH%2BnijxjF2Eop6T5Ks0jrj&X-Amz-Signature=153e3ad9410ac5503d74e8b2181b3d3bef9904de947b530c3733ede61c598d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IMWDEY2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRjnrwz1V1ENbRsetPU3RBzFSFx3NhiO%2BJHyC651u%2BdAiBq2FB2nZ%2Bwj8c6zAjsrCQNfTI0e9AZMRsLh7g4e3b6eiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiI7KIanDIhWtm5T8KtwDLxAmxjZSzQkDDJlPWZWAcZi2xBf0AwpHNyYgeyXjfrMHmRDXnJHwM9ENwuHrbDAQi47DpkDlGyH9z0MhhBobKepX5%2B0N7%2FFSu3RrnsQq4RV33Sjl1ZB7ArqJ%2BjKz1GqVL%2BKqPWnNwCQI7F2DSL9zjtBzCR8mKR9Z0QAS8tt6Thx0fhi4Su5hii9xqGsUPco3oRQkiXN8hg24OJZhEQmlZJFtfTS0vaob3jdemswf%2Bu0YRCqGPRrTcgYF08YY4V%2F87RxI99Dx1ZPlY7o5uxstJ3xzXjLuW9xdBPKXhSiIbyNedJWl3zpYPGRxgTzTh0QecEdw6%2BrsCd7YYQt%2FdnfPlv6vbZF8iJEPxjKmSs62U8n0kCmHPmLH%2FiFXkADfXEgTz3KPqDSgegyI4ctxuqdPLjrrgjdnx9H7QRKyl030ii0h3PbIBX%2FWj4EsBteL%2FYRZrJcEGKAFuLH9fuRm%2FvS4b9Eb2ekx2qC27zcxx58rEg6pcv2YKJsLJvyja4fL%2F8uvHZrLtbL3dxf0DY7QTLCJZu%2FfLXlHsaWB4RC4vDIIyHccRpsv1gK247Ii%2BRyeRBn4vRQ1uaYSTalDdf0hVJQmhpf4OUPaldymPkeCna2ZJBGFYx7IIjSDQZciZjwwkf3SyQY6pgHdsIWKkFN8ZOKa8LjbX95qeTd21Dw%2Fb1Saj9QxM4bLAd8YGYkPoPft09UoaKoE0RAL5csZdFRmkCXulINgEh6XnI2nNc7c4hW2vhC43UCZEhXLJ%2Fb4ZAtOYq9fK2Xd4lSHVy8NFuHs3h6PLPoRUk9M%2F3CMbv%2FUfNc3ONysCdpBtEYoFC25f8HjWlBVLANNtqZI5Xc23whH%2BnijxjF2Eop6T5Ks0jrj&X-Amz-Signature=1db209577ea518e23b759ecdc167804115d7ebc6715d6faf51c72b41542d6498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
