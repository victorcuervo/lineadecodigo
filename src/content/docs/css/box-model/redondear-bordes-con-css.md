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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGYVNC6H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUNy7%2F0%2B%2BFND9hOcH%2BdGpdrcksVinFwkAKkKplPjMQagIhAIFW%2FnTiuog5EeXOpXVHxvdKI6jEl3l%2BtSQRnpztmNmDKv8DCHQQABoMNjM3NDIzMTgzODA1IgwgMixC9LRV1%2FYjc78q3AMnYIQ6dbD1Ofl1lUc2F4iVKt%2BMsdctzHovoT%2BRTFseUW5h%2BzBBzJ0JLc57NLOJ4n0PU2KrKJ7a8Fh8PAqgyN%2B8hBI7Tt5Hzez2Qd8MVsLCx%2BbRkvXZQ6SfAR2UEVPlBV99BpV4KiSLR3bntLY1A75JD6fbr8KyegcufIpMP0qh1b%2FTvKVRGNtHYHOcW6F%2BCDtQgqrrRaQdyjA1PWeJi1b%2B1ljC%2BBpQWZ2wg5b2Zi2qM2F8csGMoHpNe8sm73Qlg7PpQj45Y%2B0PED%2BapbMTwgDWwPchOa9s%2BiRwFnqo7wZk9Vw6PmwwGvJry0DOXshWyJJK2hpeiQKiuknN5bdqShv9dpxJbvggyKYDpxJ%2B8vEENnSzcLKRfQLar9caPCjltwlEpL1gfwLv0Ad8yOSXrWbOly8tg9H0da2dDogbRr53%2FFT7RBNJHX5o9OK2aZsZ4PzHg5tjOPmbc2OxNHvbdLtN%2FX5fZR1mknJwe38h2D7z7uHh6mXOV2%2FhHyMgC2a3MMXyHeEPBSyR8kq4Hv%2F4hxyBx%2FwWLo%2Buw4mwD3wcjIfPEFByleIuXVoEVYUgab4EkG5SC4M08tswF6v%2Bz8wQ56Qf10RggI6WCOirnTpZmPSLn3xRQl7%2BQi9p%2BcSh9TCLsojKBjqkAfUYPfm%2Bsf2BxY4yweO4x%2FGZzhGPHM%2BK5kc%2BsdpXRG1NUiY%2BizM1%2FOk9x59HmLRtsE8vOh%2F6Foql4P1I1AKwdOXUJwiIWZHH80spPHdaK4YYFNtC1SRATdGEN7cW7NwmS7Y6Z8I2N8sGVFpWyqDxQu78j2PgIe%2BzbLbggw3QOcEve42D19OV%2Bnvs3jlYE7ecUk7vNM3u5DDohd1Tgk0OpoXRS69V&X-Amz-Signature=07898fa3c8f3c83c5b7ef6e9ede01a6a5b3c80ac2864b7d903ac94e815740943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGYVNC6H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUNy7%2F0%2B%2BFND9hOcH%2BdGpdrcksVinFwkAKkKplPjMQagIhAIFW%2FnTiuog5EeXOpXVHxvdKI6jEl3l%2BtSQRnpztmNmDKv8DCHQQABoMNjM3NDIzMTgzODA1IgwgMixC9LRV1%2FYjc78q3AMnYIQ6dbD1Ofl1lUc2F4iVKt%2BMsdctzHovoT%2BRTFseUW5h%2BzBBzJ0JLc57NLOJ4n0PU2KrKJ7a8Fh8PAqgyN%2B8hBI7Tt5Hzez2Qd8MVsLCx%2BbRkvXZQ6SfAR2UEVPlBV99BpV4KiSLR3bntLY1A75JD6fbr8KyegcufIpMP0qh1b%2FTvKVRGNtHYHOcW6F%2BCDtQgqrrRaQdyjA1PWeJi1b%2B1ljC%2BBpQWZ2wg5b2Zi2qM2F8csGMoHpNe8sm73Qlg7PpQj45Y%2B0PED%2BapbMTwgDWwPchOa9s%2BiRwFnqo7wZk9Vw6PmwwGvJry0DOXshWyJJK2hpeiQKiuknN5bdqShv9dpxJbvggyKYDpxJ%2B8vEENnSzcLKRfQLar9caPCjltwlEpL1gfwLv0Ad8yOSXrWbOly8tg9H0da2dDogbRr53%2FFT7RBNJHX5o9OK2aZsZ4PzHg5tjOPmbc2OxNHvbdLtN%2FX5fZR1mknJwe38h2D7z7uHh6mXOV2%2FhHyMgC2a3MMXyHeEPBSyR8kq4Hv%2F4hxyBx%2FwWLo%2Buw4mwD3wcjIfPEFByleIuXVoEVYUgab4EkG5SC4M08tswF6v%2Bz8wQ56Qf10RggI6WCOirnTpZmPSLn3xRQl7%2BQi9p%2BcSh9TCLsojKBjqkAfUYPfm%2Bsf2BxY4yweO4x%2FGZzhGPHM%2BK5kc%2BsdpXRG1NUiY%2BizM1%2FOk9x59HmLRtsE8vOh%2F6Foql4P1I1AKwdOXUJwiIWZHH80spPHdaK4YYFNtC1SRATdGEN7cW7NwmS7Y6Z8I2N8sGVFpWyqDxQu78j2PgIe%2BzbLbggw3QOcEve42D19OV%2Bnvs3jlYE7ecUk7vNM3u5DDohd1Tgk0OpoXRS69V&X-Amz-Signature=78930a915a1538638e5a805722a65d63cef1012db7b38023893b50f7546d8e21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
