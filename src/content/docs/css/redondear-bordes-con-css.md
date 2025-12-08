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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NI5A5S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXr1DXuMt%2FM6yVXOeHP0lnwWytdsjHdp4b6JTqsTu7%2FAiEA5zeIoZloYRiY0CcXBJcDQg4RZkaJQ3LMO0ec55bATEsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeqfMMZoIoJnkhUCyrcAzpDdHqIbAJ%2FN0PUFHsJoENU5cYtpgcb4uukKGWVCsXXx7kx%2FnbUh7BT1AunownrHfGIlTpFza%2BB%2Fp180TpfpswGi5S4u3JE9fg%2ByxMM2viB%2F90Y6MHbyYBZlHkDohhjkfjMH8%2BYD2htspgx5CMaJw47oEDwoyaGbAnVef0lWVHCSUTXTHVC%2BxnUZZBl%2F%2BKGtlkczYrfCqL0sCB%2F07aSuVT%2BHPSKnGFfzSirI%2FiAKMkSiCDZaNg19hPjmWpN1sbM9XQ55nuzGgDVv%2FyotN1NiVTcrfJdfeWF9Mga2ouPgk2yo0lRVC6jS2K6sUDI%2BsWNzC1DHY6tPYgQwSOLg4Hf9uNnZnFo4Ijyb6s3sQojpTtfidLmiZgng1LejL3FiYdxa6q3ve0ThL0Hp27%2FxpxTBaHCZoE1Mgy%2Foth8ILttJXe%2Fa%2FEtd2CSFyzLGKTAoMtXKteGFFdyymEQBKWC3zyXdQBDHoWKLx3rUglbZxn2YcGuTyJwCM4r0BHnUgRvV%2BQ9NFK5rZnhcqHx3HZYRgwT5LItP6LZVWsINzepn75ZrNh7%2F03yXlO5QRVI%2BJC77lJf0YysMdElU32mAs%2BWaj%2BkbeyqPsDNwtJyHS%2FTmXzfRP%2F7mlKvde4EoY1FjkuWMLrQ2ckGOqUBRvqTJtsS8V7Y%2FHetrGp3ern%2FJDYqlAXOV8RhW2r4EERXe3gkS7IgQ40BPnKvJeEMGqDozJz%2F7V72uW3DBaQ%2BLHfbfM21UzY9PfhqBEcSzesPYtyQ5ooZdlk%2BnCL393hRf2hsLweuASc3ao4G3eF0rGBqtnXO9iqmzvZcmMv9u3WV6dNVCBjXLCECzHGSe5YXxUrbL%2Bn8lEI4pN0RAbM0Fw1SiMw6&X-Amz-Signature=027fe67368f71757fb5296c7067ac4090b47a0c9693c260690b0f574d5553c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637NI5A5S%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T062326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBXr1DXuMt%2FM6yVXOeHP0lnwWytdsjHdp4b6JTqsTu7%2FAiEA5zeIoZloYRiY0CcXBJcDQg4RZkaJQ3LMO0ec55bATEsqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEeqfMMZoIoJnkhUCyrcAzpDdHqIbAJ%2FN0PUFHsJoENU5cYtpgcb4uukKGWVCsXXx7kx%2FnbUh7BT1AunownrHfGIlTpFza%2BB%2Fp180TpfpswGi5S4u3JE9fg%2ByxMM2viB%2F90Y6MHbyYBZlHkDohhjkfjMH8%2BYD2htspgx5CMaJw47oEDwoyaGbAnVef0lWVHCSUTXTHVC%2BxnUZZBl%2F%2BKGtlkczYrfCqL0sCB%2F07aSuVT%2BHPSKnGFfzSirI%2FiAKMkSiCDZaNg19hPjmWpN1sbM9XQ55nuzGgDVv%2FyotN1NiVTcrfJdfeWF9Mga2ouPgk2yo0lRVC6jS2K6sUDI%2BsWNzC1DHY6tPYgQwSOLg4Hf9uNnZnFo4Ijyb6s3sQojpTtfidLmiZgng1LejL3FiYdxa6q3ve0ThL0Hp27%2FxpxTBaHCZoE1Mgy%2Foth8ILttJXe%2Fa%2FEtd2CSFyzLGKTAoMtXKteGFFdyymEQBKWC3zyXdQBDHoWKLx3rUglbZxn2YcGuTyJwCM4r0BHnUgRvV%2BQ9NFK5rZnhcqHx3HZYRgwT5LItP6LZVWsINzepn75ZrNh7%2F03yXlO5QRVI%2BJC77lJf0YysMdElU32mAs%2BWaj%2BkbeyqPsDNwtJyHS%2FTmXzfRP%2F7mlKvde4EoY1FjkuWMLrQ2ckGOqUBRvqTJtsS8V7Y%2FHetrGp3ern%2FJDYqlAXOV8RhW2r4EERXe3gkS7IgQ40BPnKvJeEMGqDozJz%2F7V72uW3DBaQ%2BLHfbfM21UzY9PfhqBEcSzesPYtyQ5ooZdlk%2BnCL393hRf2hsLweuASc3ao4G3eF0rGBqtnXO9iqmzvZcmMv9u3WV6dNVCBjXLCECzHGSe5YXxUrbL%2Bn8lEI4pN0RAbM0Fw1SiMw6&X-Amz-Signature=6d98eb9ce23e4dfc1cee329e2db38e6d42869f1529d7cbc943cc82035e70eb83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
