---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5EF4DB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICvsrAXoV0KD%2FjspSfHqO3pgkKshdQZa47pH48LaVwOJAiEAyt%2B5egXidwt4hGGgvaq%2BPaIlB0pgiqSC3kZ5wrwcvz0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPlu5m%2BGjaQo8bNGnCrcA5Nsb6%2F1bAw5HUb4uMROsAdLoK7g2Y76w698EHZjvZoecwusO2OIoRbh6tTpS7nli4wQq8HskfbmzoLQ73vK1UdjHb8BWsiL%2FJ3ivvLSubIX458X1mcMnCoWob9NSpVRUcmkoS%2F%2Fbmz4UDeFcb04y5chSTw%2B4Y3AAQpff9zr3L9bS0dd1k2hn%2BI2pQY2Jn46rcqi3l4xiKFsjMhQrh942n5SxgryZwK6jGZVd5ysKS9xFQXqsxZY%2BGZ%2B2MdT15VR7c9VETH%2F48l3SnBE56wO55Ou%2FayiKXu3%2FLtI30QjoTkWnX4pIoqaYhZ1wB4dkq0d2YSBz%2FGhvFrK6sQml0N9lED907XoxUiUIXw%2BAPTElUuMFRshslPF4xDhzYSNaaPG8SwmSTjVWezM8RkEjExUGHD4lqb8Xv2PtTLsoznwsZu9trcS9OcVtRIxElX8MkSd3nA%2FokwJg4SEDxr6FhziZRb8OrMDOBwAECJ2gzbp1Bfx22gHT73benFkGbwprrmwdf%2BVDS9LZjU4Ri2hnMavnWiKvaXCd5f8uMHOXbOXtB%2FRJlmh73yRQ%2FT8q4WlH2incXCQrWAe5hv%2FUe2646DzX%2BUTaXytYS9n0y%2BmkSIuLypLh2uRYpHkooYPEF11MO%2FUw8kGOqUBz5I20Uo3o55jzo0EhI3qHf6V5hekOIC4hfcel0ejUGLL%2BIczJczbzMQV7BuEm5XCFp48lQIsVvNAFl8XY9ZxUk0cscTLqoigGHfp7KMw9oNV0YzINHUwmmz6IzW8u3rLGAEwIIU2XYJMLCuUIws6ylbNLEfeX1DKo6o2Xr%2Bry7t3b5rJtguIj2jtFujDtGIfUHgNLq%2FcwJpJx6ygdAvIQ5vohlq6&X-Amz-Signature=fd333e40c39eb058a047c235069a3d2dcb58779109284cc7c6e464843ca542f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5EF4DB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICvsrAXoV0KD%2FjspSfHqO3pgkKshdQZa47pH48LaVwOJAiEAyt%2B5egXidwt4hGGgvaq%2BPaIlB0pgiqSC3kZ5wrwcvz0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPlu5m%2BGjaQo8bNGnCrcA5Nsb6%2F1bAw5HUb4uMROsAdLoK7g2Y76w698EHZjvZoecwusO2OIoRbh6tTpS7nli4wQq8HskfbmzoLQ73vK1UdjHb8BWsiL%2FJ3ivvLSubIX458X1mcMnCoWob9NSpVRUcmkoS%2F%2Fbmz4UDeFcb04y5chSTw%2B4Y3AAQpff9zr3L9bS0dd1k2hn%2BI2pQY2Jn46rcqi3l4xiKFsjMhQrh942n5SxgryZwK6jGZVd5ysKS9xFQXqsxZY%2BGZ%2B2MdT15VR7c9VETH%2F48l3SnBE56wO55Ou%2FayiKXu3%2FLtI30QjoTkWnX4pIoqaYhZ1wB4dkq0d2YSBz%2FGhvFrK6sQml0N9lED907XoxUiUIXw%2BAPTElUuMFRshslPF4xDhzYSNaaPG8SwmSTjVWezM8RkEjExUGHD4lqb8Xv2PtTLsoznwsZu9trcS9OcVtRIxElX8MkSd3nA%2FokwJg4SEDxr6FhziZRb8OrMDOBwAECJ2gzbp1Bfx22gHT73benFkGbwprrmwdf%2BVDS9LZjU4Ri2hnMavnWiKvaXCd5f8uMHOXbOXtB%2FRJlmh73yRQ%2FT8q4WlH2incXCQrWAe5hv%2FUe2646DzX%2BUTaXytYS9n0y%2BmkSIuLypLh2uRYpHkooYPEF11MO%2FUw8kGOqUBz5I20Uo3o55jzo0EhI3qHf6V5hekOIC4hfcel0ejUGLL%2BIczJczbzMQV7BuEm5XCFp48lQIsVvNAFl8XY9ZxUk0cscTLqoigGHfp7KMw9oNV0YzINHUwmmz6IzW8u3rLGAEwIIU2XYJMLCuUIws6ylbNLEfeX1DKo6o2Xr%2Bry7t3b5rJtguIj2jtFujDtGIfUHgNLq%2FcwJpJx6ygdAvIQ5vohlq6&X-Amz-Signature=0bc20217f16d4948dfcdf5e82c4254ba33688b640919b06fd3bd511a18298c62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
