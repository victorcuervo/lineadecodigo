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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZC5KZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj90Nzw2%2F0GIozPw9g7rnHfn%2F1DA6QddrgFBpRgAqyQQIhAP4eDbU2KO2uTM25fB3H40aeLwz1bsA9RWCMrjepEr4qKv8DCHMQABoMNjM3NDIzMTgzODA1Igzd3fqmby8iPL1rtbAq3AOgVXRwGcHh%2BMimlSMfshV2%2Fw%2FBiQ8w3YLBuWGbui9CSkHNvSn0t2sojNviHgf%2BW19GblFCteOh7k2MB1XTivBEdzAxf40%2BfW9ZrJ6J2AXpSUK8c9R3Vb0e2N9bGxF8%2FnnvuurtaxQXOP1fHfxrME3i4RvZ%2FIzFW0FO7ht9qJgPU39iDCJGDVdenm7twgpUkhfi46xrAO96Kk0yFbfSqWUPXtbG2BZtGBg6HV6dDpL%2FWCQJtlGFfpUmGvQ4Syxks3%2FCw4HFK6fb%2BIEOoj7SItmUuqMWwsd6twc0w%2BC%2Fo%2FGZUd%2F85lZRDN7x%2Bir4dZvRqRtwvlH8tni1lham2tjCtFwZ0iikZSjfJzg0ILRvJuRgOgakbASyYszNuiuw9pIp%2BC%2BdmtKzuAR7moa7cQYKdRfJruErbI1NhPlJvuRat7RO7ZlsEXhHNyZaFFe3lkfbc8lKMaFnQZQsms3Dk5WrzjhCp2n11F%2Bqj5pDgoetMKsEK8PePJ92goIJHLX1b36TttOa%2Fm82d9SWQ682qcCS91pgm6nfM%2B%2F5s3BQfHPFci6dCqyP4VTOQ%2F3xQyZGtu16i0z7LckxnRVPhmalZH88apu0DpKZFuQ0DDg%2BpU1Wy6ctrF0KwQM%2BWgmR5%2B4rCjDMlYjKBjqkAXvvu7qK5uAVt%2B9Mk0iySglU3fFZMwsRa75xDntaeu6i8zqQtkjqPImlzNZFcCz4Gcpzb4TLfoNwxgF1DKjM5Dox4rzLoLst1ygYVhiwWCtqI92kswUXJ%2FMPaVPgPNtPfWsTdICQiZWsSQ%2B4I3SuuREShJ2dAN7OmBl5mX6c%2Fo3dJkOavqQ5ALTQUrxKMtEbS58G%2BAeJburF2JdhOnxuicdz8UHG&X-Amz-Signature=6490ecce3d4171d7f204d85f3caca07c9d2542c77f9fe81d1bcd4cabf48d8adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EZC5KZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj90Nzw2%2F0GIozPw9g7rnHfn%2F1DA6QddrgFBpRgAqyQQIhAP4eDbU2KO2uTM25fB3H40aeLwz1bsA9RWCMrjepEr4qKv8DCHMQABoMNjM3NDIzMTgzODA1Igzd3fqmby8iPL1rtbAq3AOgVXRwGcHh%2BMimlSMfshV2%2Fw%2FBiQ8w3YLBuWGbui9CSkHNvSn0t2sojNviHgf%2BW19GblFCteOh7k2MB1XTivBEdzAxf40%2BfW9ZrJ6J2AXpSUK8c9R3Vb0e2N9bGxF8%2FnnvuurtaxQXOP1fHfxrME3i4RvZ%2FIzFW0FO7ht9qJgPU39iDCJGDVdenm7twgpUkhfi46xrAO96Kk0yFbfSqWUPXtbG2BZtGBg6HV6dDpL%2FWCQJtlGFfpUmGvQ4Syxks3%2FCw4HFK6fb%2BIEOoj7SItmUuqMWwsd6twc0w%2BC%2Fo%2FGZUd%2F85lZRDN7x%2Bir4dZvRqRtwvlH8tni1lham2tjCtFwZ0iikZSjfJzg0ILRvJuRgOgakbASyYszNuiuw9pIp%2BC%2BdmtKzuAR7moa7cQYKdRfJruErbI1NhPlJvuRat7RO7ZlsEXhHNyZaFFe3lkfbc8lKMaFnQZQsms3Dk5WrzjhCp2n11F%2Bqj5pDgoetMKsEK8PePJ92goIJHLX1b36TttOa%2Fm82d9SWQ682qcCS91pgm6nfM%2B%2F5s3BQfHPFci6dCqyP4VTOQ%2F3xQyZGtu16i0z7LckxnRVPhmalZH88apu0DpKZFuQ0DDg%2BpU1Wy6ctrF0KwQM%2BWgmR5%2B4rCjDMlYjKBjqkAXvvu7qK5uAVt%2B9Mk0iySglU3fFZMwsRa75xDntaeu6i8zqQtkjqPImlzNZFcCz4Gcpzb4TLfoNwxgF1DKjM5Dox4rzLoLst1ygYVhiwWCtqI92kswUXJ%2FMPaVPgPNtPfWsTdICQiZWsSQ%2B4I3SuuREShJ2dAN7OmBl5mX6c%2Fo3dJkOavqQ5ALTQUrxKMtEbS58G%2BAeJburF2JdhOnxuicdz8UHG&X-Amz-Signature=a86630dd6537c7273567ff5a32c1986d90e399eded2a4f0a8a5f9529868213c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
