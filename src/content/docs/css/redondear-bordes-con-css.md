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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAUJ76C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfus2E8w1S6sN5gKjDPVX6LoOQEhikfLuP0N005BBC7AiEAsauyWQQSM7J1WiXdtT6h8Ylu%2FwyEpJm%2BX9EIaZ2Gt7kqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD533fH9B7ewJjOWYCrcA2yuMCyqkTYfqDi8eiFYMb6ly7IAMvo3a9fHYceq7HWuFWNHEV4tir2JeIhcXlQa1OZ2FfTj611enjXZCQlc8WCX8hgc29wlaPZvxYczc501qD8BascoAKJR6YLcXj6A3gBH5znVrBRlxFmTWghwyG0xzwOb2pa%2Bs52jaecKxRmaUWeDc7teOEG5o79Gk2XiDpzRLe07V4FcPn1egIhTd5kbkClI1gHuhuLuNfzAlOtq138PXRFhTl4BMVfUx0xOYFttEE4806k5p8hfCmu5XRFNBVbn3SGHilBGj%2FDypTbjjChgcvD6N4monfjn1jjEJycRisMSqttWUhJBhZOG4P2khEzHDFnbp0JeDYhOz%2BQpcXOMVlI3%2FXpGAjB4MkkDo4BPNP%2FTdiHxuG5%2FUpnnRlxpVHDnLIp9QYpchzGfLaMKhApp80OlrDCzA18%2Feo7gft2bLg4y3XGRfraziHhuIod2UoGE%2BwZZR9V5OH7mlFfX7fUvcJra921Q51PES8wVZMi%2ByUaZeZYlBabsN5qJwqBkyCtVZbDdLYmyKZ34FWBggBVYS5CC94dHuihQvQhi4gnfmpxoTsisGgOUIc8lElB82CgSi%2FnP82dLrXBtTn%2FXl4YoH6mzR%2FVDDzDFMLbk28kGOqUBK9tV63wxbRWBXiYY%2Bx4QOltbYmP0qChOL74YMSemDpjWzjmjh0d4Sityq0jnj9xO7Yxlv2BKKyHLdSJKo8a0q%2FC3gGU9C4Yey6z%2BIhcyCSsTU2kh0rHAtGG6QRfxppxLJwG3aK0CMo2%2FsEAgDN1K0QbPi0Jp8DNCbcjnDEPA4QxiNAfmSY%2F7jG%2FHa2c1rMjGkxIGGsDuP8cBAleLfO1DISc2TiCz&X-Amz-Signature=30b6122cc6043ff57ebb759937238b518db2eee40d13ce9f8ff543d8a7384f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZAUJ76C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T164534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfus2E8w1S6sN5gKjDPVX6LoOQEhikfLuP0N005BBC7AiEAsauyWQQSM7J1WiXdtT6h8Ylu%2FwyEpJm%2BX9EIaZ2Gt7kqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD533fH9B7ewJjOWYCrcA2yuMCyqkTYfqDi8eiFYMb6ly7IAMvo3a9fHYceq7HWuFWNHEV4tir2JeIhcXlQa1OZ2FfTj611enjXZCQlc8WCX8hgc29wlaPZvxYczc501qD8BascoAKJR6YLcXj6A3gBH5znVrBRlxFmTWghwyG0xzwOb2pa%2Bs52jaecKxRmaUWeDc7teOEG5o79Gk2XiDpzRLe07V4FcPn1egIhTd5kbkClI1gHuhuLuNfzAlOtq138PXRFhTl4BMVfUx0xOYFttEE4806k5p8hfCmu5XRFNBVbn3SGHilBGj%2FDypTbjjChgcvD6N4monfjn1jjEJycRisMSqttWUhJBhZOG4P2khEzHDFnbp0JeDYhOz%2BQpcXOMVlI3%2FXpGAjB4MkkDo4BPNP%2FTdiHxuG5%2FUpnnRlxpVHDnLIp9QYpchzGfLaMKhApp80OlrDCzA18%2Feo7gft2bLg4y3XGRfraziHhuIod2UoGE%2BwZZR9V5OH7mlFfX7fUvcJra921Q51PES8wVZMi%2ByUaZeZYlBabsN5qJwqBkyCtVZbDdLYmyKZ34FWBggBVYS5CC94dHuihQvQhi4gnfmpxoTsisGgOUIc8lElB82CgSi%2FnP82dLrXBtTn%2FXl4YoH6mzR%2FVDDzDFMLbk28kGOqUBK9tV63wxbRWBXiYY%2Bx4QOltbYmP0qChOL74YMSemDpjWzjmjh0d4Sityq0jnj9xO7Yxlv2BKKyHLdSJKo8a0q%2FC3gGU9C4Yey6z%2BIhcyCSsTU2kh0rHAtGG6QRfxppxLJwG3aK0CMo2%2FsEAgDN1K0QbPi0Jp8DNCbcjnDEPA4QxiNAfmSY%2F7jG%2FHa2c1rMjGkxIGGsDuP8cBAleLfO1DISc2TiCz&X-Amz-Signature=8bd0cff77b77bb2d63cd4766dcb515c2ed24b9262d0d321fcfd474055cea3c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
