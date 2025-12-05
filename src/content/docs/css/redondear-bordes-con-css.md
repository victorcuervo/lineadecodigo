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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGIODSN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJcHQPj%2B%2FZ2zHvJ%2F3Nyky1Abr6rhmpuLknbtBSeQhFRAiEArinnrZVkTDgVWWoWpNcxWr3mLC0vMp8hbKKLXonH1Isq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGCucaN%2FDTYGQID2HSrcAyACOfU688xO2wuOtcQpAzjXzNxYnzRJg3PpM2wG4dMSDvRayHE8BhHrJVjtG0c9uiafhhWiA0VKfipo%2BNTPia0u8AXBmmXivLJQ2AtxCAkEZSRqF2obkVPJzszjRxQYs6u%2Fu6h7X8NOD9iD1HkngX%2F02zaW9%2BHuWRTLrCvSkH71jlW5poV5ARgMUmNfVLs9GYnrfSiRckKtiaqEsn%2FNpU7epM%2Fm9nxQPNUTM1HeLeYuCdNAHD4zQFObFPRVFtr9YshnHN6lpSeQbQgBcOUtKrO3O9gW8FIxCM%2BYuRe902tMa8pFOO3eB4Dc5lRDoPpz8ylgtiWJ23IGYg6u5Gzr2oPyTjqFlK%2BDZATd4h7MqTEfmrCpmuiayg369pl9W9HDndP5G7DhJpuU2QRbtvtcqINw%2FCrRF%2FUG2AVYQvbI1huzwpeuNB6sYC7chVHL69QuSj41Icnd2mgxLM5uBMfHRjp48pXmx5NnlAoB9bSp4u%2BG%2B8gZZd1yQ0s3qJmhQkXhyTBgZA%2BW0JBpFaBy5MtHaEccmnvAW8Fq55%2B211PAB1sp6gc3SJ7YCNej1%2B76gDELdmK7qmaAnu0Bj2rZuwIe0RJlmQszNlwKqdDL80DN%2Bq%2Bt2DvM1zlPz%2B6xrHAwMKKsyckGOqUBfmu%2BPJJSRJvgyKNofwLI2dK%2B%2BZuntBntAeANTHQIaLkwe87e4MCC%2FPtcp7FJmOX6c8p9gYtry63r3yp3II6z0ptCuqLjWwT5%2B6bmLL1K8u2OGPULEpqdJAZMxM%2BbDdlGt4Q2je4nqY2DuJdkQNFEL6yd2zr%2FVRLLv7xhgd%2Fm7mfqB4nR9joZ%2Fh97VRHk8n5MKYaZm5nMwFcq2gAxEgMmi2w6dJIf&X-Amz-Signature=7c9af63df625c9f0b8941c33817ad06ead2fa64e8aee85eb8363e34019ffe256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYGIODSN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T055131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJcHQPj%2B%2FZ2zHvJ%2F3Nyky1Abr6rhmpuLknbtBSeQhFRAiEArinnrZVkTDgVWWoWpNcxWr3mLC0vMp8hbKKLXonH1Isq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGCucaN%2FDTYGQID2HSrcAyACOfU688xO2wuOtcQpAzjXzNxYnzRJg3PpM2wG4dMSDvRayHE8BhHrJVjtG0c9uiafhhWiA0VKfipo%2BNTPia0u8AXBmmXivLJQ2AtxCAkEZSRqF2obkVPJzszjRxQYs6u%2Fu6h7X8NOD9iD1HkngX%2F02zaW9%2BHuWRTLrCvSkH71jlW5poV5ARgMUmNfVLs9GYnrfSiRckKtiaqEsn%2FNpU7epM%2Fm9nxQPNUTM1HeLeYuCdNAHD4zQFObFPRVFtr9YshnHN6lpSeQbQgBcOUtKrO3O9gW8FIxCM%2BYuRe902tMa8pFOO3eB4Dc5lRDoPpz8ylgtiWJ23IGYg6u5Gzr2oPyTjqFlK%2BDZATd4h7MqTEfmrCpmuiayg369pl9W9HDndP5G7DhJpuU2QRbtvtcqINw%2FCrRF%2FUG2AVYQvbI1huzwpeuNB6sYC7chVHL69QuSj41Icnd2mgxLM5uBMfHRjp48pXmx5NnlAoB9bSp4u%2BG%2B8gZZd1yQ0s3qJmhQkXhyTBgZA%2BW0JBpFaBy5MtHaEccmnvAW8Fq55%2B211PAB1sp6gc3SJ7YCNej1%2B76gDELdmK7qmaAnu0Bj2rZuwIe0RJlmQszNlwKqdDL80DN%2Bq%2Bt2DvM1zlPz%2B6xrHAwMKKsyckGOqUBfmu%2BPJJSRJvgyKNofwLI2dK%2B%2BZuntBntAeANTHQIaLkwe87e4MCC%2FPtcp7FJmOX6c8p9gYtry63r3yp3II6z0ptCuqLjWwT5%2B6bmLL1K8u2OGPULEpqdJAZMxM%2BbDdlGt4Q2je4nqY2DuJdkQNFEL6yd2zr%2FVRLLv7xhgd%2Fm7mfqB4nR9joZ%2Fh97VRHk8n5MKYaZm5nMwFcq2gAxEgMmi2w6dJIf&X-Amz-Signature=1efd3ad1b13aa77c66e750290412cbddc86e9d9d07999a2639f910dd0f859013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
