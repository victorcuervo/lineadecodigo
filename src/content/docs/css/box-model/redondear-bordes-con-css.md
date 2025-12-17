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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYGX5SRB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1jqoV80CPQp%2BsqpAb0m5VrH5vbGfbiUhpBTBenMTPQIgUPltXTn8pYyqZG%2FGLIIrBF2YVjlJHMHkgo9XpaQDPxwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLtlPaBTIOixd3TQ5ircA7dMwkYxLbDl8Mh0GqAMAJ%2BwBYu3pM2icIW%2FpUM0qS%2Blc4XR0SPvgRO2dJJ8YS%2B082bjqr3a0qX1CZUMoUCII3ryOq4lU98hhj7A4XWeFAJeUv4U94tu9f85zcdYRKs8fNTdPtjbRm77RwFII%2FbIvQD%2BJvX%2Fg6mLylQmud%2FNRrFTeBl30LYULRPJS2v1u67L%2B%2F3ls608FNiUHss3EVxcZSuDUXGjIQ7jr%2FGaIn5haYzp%2Bs8dzHE960CNl0%2B0IzIk%2FSaORx0eGGCJMaVJr7LS8f5a90QQAIAIrFztiSmfQHFljZM5LRjjJsHY4HmMFAz%2FB2yAmErQN31QxtH82KJGyYFOroiPNYQspYukiig2b6uqW425hpodCeZmKyc%2FCRml2N0bmU3walY46MqwIqGJPWIFzXmOzYwkRvnQaEJY5AJqGeD9I1saHewluSTurW0Tqk%2FcqwUSsaLsszwp3eSLvaYTdlV0ufj5g3GmHnyxmL8HK3MsbS0GFdnYDfroFtqUWLZO0M3jl2mfoDwMpZwNCL09zo3D1AjGHWoMt%2F8CT2nlnKGICuqpHFm7%2F4KbHBz64wMCxb9XZ18OXBIOtzZ6VaqJMJE9ESpH9LqF7m00ry8tsuVsUbxeOOyPgb7jMIi3icoGOqUBpfhVHzzxLSy5NkbYIJ95H0zZoNri34s9mdNH84%2B9b1OTOEt1CH9NOwIHfdXCV12u1ZPzfvlmYOa3aLJZga4o5iVESM0gkte35krBSXRBMI8bPfh8aRDq%2BUrVChKFKMLYdnY2cXHOqg8BgnFqIBdrf5xYRKpOuivTHf6cphCxBkw1nBHYrFss22orKramj4RPqL84HU86F%2FfmFIKldU4Wx%2BNVdEe5&X-Amz-Signature=bce28ddb264dd15f359eb18483bfe63f5e411403288939ac295234530920df09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYGX5SRB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T074735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1jqoV80CPQp%2BsqpAb0m5VrH5vbGfbiUhpBTBenMTPQIgUPltXTn8pYyqZG%2FGLIIrBF2YVjlJHMHkgo9XpaQDPxwq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLtlPaBTIOixd3TQ5ircA7dMwkYxLbDl8Mh0GqAMAJ%2BwBYu3pM2icIW%2FpUM0qS%2Blc4XR0SPvgRO2dJJ8YS%2B082bjqr3a0qX1CZUMoUCII3ryOq4lU98hhj7A4XWeFAJeUv4U94tu9f85zcdYRKs8fNTdPtjbRm77RwFII%2FbIvQD%2BJvX%2Fg6mLylQmud%2FNRrFTeBl30LYULRPJS2v1u67L%2B%2F3ls608FNiUHss3EVxcZSuDUXGjIQ7jr%2FGaIn5haYzp%2Bs8dzHE960CNl0%2B0IzIk%2FSaORx0eGGCJMaVJr7LS8f5a90QQAIAIrFztiSmfQHFljZM5LRjjJsHY4HmMFAz%2FB2yAmErQN31QxtH82KJGyYFOroiPNYQspYukiig2b6uqW425hpodCeZmKyc%2FCRml2N0bmU3walY46MqwIqGJPWIFzXmOzYwkRvnQaEJY5AJqGeD9I1saHewluSTurW0Tqk%2FcqwUSsaLsszwp3eSLvaYTdlV0ufj5g3GmHnyxmL8HK3MsbS0GFdnYDfroFtqUWLZO0M3jl2mfoDwMpZwNCL09zo3D1AjGHWoMt%2F8CT2nlnKGICuqpHFm7%2F4KbHBz64wMCxb9XZ18OXBIOtzZ6VaqJMJE9ESpH9LqF7m00ry8tsuVsUbxeOOyPgb7jMIi3icoGOqUBpfhVHzzxLSy5NkbYIJ95H0zZoNri34s9mdNH84%2B9b1OTOEt1CH9NOwIHfdXCV12u1ZPzfvlmYOa3aLJZga4o5iVESM0gkte35krBSXRBMI8bPfh8aRDq%2BUrVChKFKMLYdnY2cXHOqg8BgnFqIBdrf5xYRKpOuivTHf6cphCxBkw1nBHYrFss22orKramj4RPqL84HU86F%2FfmFIKldU4Wx%2BNVdEe5&X-Amz-Signature=495e4a8160c4722cbb8cd062621f30dfb8a20fce58490d45ad0ed01836061da9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
