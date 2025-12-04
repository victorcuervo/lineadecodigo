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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3JC6FK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDcyQSzgo04%2FPagm2PChR%2BkkB3PEhHGtvDiUAn9qMGNpAiEAkAw4Hijz2eXnfeJkpbqalCBKuVUCDGh1l0OdeJtxThwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE5VyzTyoJs2SKY%2BuCrcA%2BFGkO3AesKWugWdJncc7y6dNxkTnTdK2BVBUttsGpEtP4dGeLno5%2BGtgX0WVFqd38aA3UPlirPcEBno9bjGjdvfyOE73zPkrhZTKUNi960kvirDZpjKHbIpkopKj5%2FU8HYKC%2Bfax6XyaCa7VGDleI6L7nGQxMbbkrl3mNmC14MK1UFODhJ%2BbFHF3udP6Ee7aKeNdmELnCeEd87km9K03stFhSWsDTrkcDOAObrID9SDN%2FPPtJVNsoxDgXCGXxJuGOUlMmeZjkbG2%2FPqc51Prhsp7eiAcucJkw3dylfd5a9bpfUpAkwdWbRzgzPtvDV2PWwL2u3vMY7A04aBpv%2BVap8aLcdjNU7C1QriyDaKgE9ktWcdYDXpN5j9Koj7o%2BeSBMSXqbnFObQth%2BT%2Bfelkv3mbzIA4hexUV2bMMsFMLzJ%2BpnKGUCp6KbXFhpi3w7tM5ceTYoZpwVTR21J%2BzvXEOPNfrTiVsGN%2Bj5CV%2B81C6SzjIbknEBkEl8XZD%2BG5AnehoKrmwmSnecVGHFaLqLfBmySKWiP9uc93o22MtfA2CvLKF7M%2FBn5AgxRXmZdPi%2FMQp59t%2FS8x7Ukw%2BQ0crupCcy4BkzoxSThaTa6dcxM35sYyYBhYji%2Fizst%2FCzMAMK%2BRxMkGOqUBbhnC2qToRhO8EPemMKKeCAKa7GgjCH7UeqhdumHmSIFKQhrGOGzMZNsiaUkNSiIsbd96zLpRxcknnYDNdsS4GRpWsCAj2nIkuJbhEKNVmAVWbfnOoQqofO3lDi0fxpcbgtVJqeSAl6JJuAK3NVISkPufVu5GZIIdW66b%2BTUFYkhRsyXF55LDZ8%2B33C%2FpsgDTFCeFZpdrf%2B4FjbtKpjvouSglL1b%2B&X-Amz-Signature=8a393ddb069de521e27b626ba46e8ec12aec6343a0a776d52fdbda814a22a87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z3JC6FK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDcyQSzgo04%2FPagm2PChR%2BkkB3PEhHGtvDiUAn9qMGNpAiEAkAw4Hijz2eXnfeJkpbqalCBKuVUCDGh1l0OdeJtxThwq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE5VyzTyoJs2SKY%2BuCrcA%2BFGkO3AesKWugWdJncc7y6dNxkTnTdK2BVBUttsGpEtP4dGeLno5%2BGtgX0WVFqd38aA3UPlirPcEBno9bjGjdvfyOE73zPkrhZTKUNi960kvirDZpjKHbIpkopKj5%2FU8HYKC%2Bfax6XyaCa7VGDleI6L7nGQxMbbkrl3mNmC14MK1UFODhJ%2BbFHF3udP6Ee7aKeNdmELnCeEd87km9K03stFhSWsDTrkcDOAObrID9SDN%2FPPtJVNsoxDgXCGXxJuGOUlMmeZjkbG2%2FPqc51Prhsp7eiAcucJkw3dylfd5a9bpfUpAkwdWbRzgzPtvDV2PWwL2u3vMY7A04aBpv%2BVap8aLcdjNU7C1QriyDaKgE9ktWcdYDXpN5j9Koj7o%2BeSBMSXqbnFObQth%2BT%2Bfelkv3mbzIA4hexUV2bMMsFMLzJ%2BpnKGUCp6KbXFhpi3w7tM5ceTYoZpwVTR21J%2BzvXEOPNfrTiVsGN%2Bj5CV%2B81C6SzjIbknEBkEl8XZD%2BG5AnehoKrmwmSnecVGHFaLqLfBmySKWiP9uc93o22MtfA2CvLKF7M%2FBn5AgxRXmZdPi%2FMQp59t%2FS8x7Ukw%2BQ0crupCcy4BkzoxSThaTa6dcxM35sYyYBhYji%2Fizst%2FCzMAMK%2BRxMkGOqUBbhnC2qToRhO8EPemMKKeCAKa7GgjCH7UeqhdumHmSIFKQhrGOGzMZNsiaUkNSiIsbd96zLpRxcknnYDNdsS4GRpWsCAj2nIkuJbhEKNVmAVWbfnOoQqofO3lDi0fxpcbgtVJqeSAl6JJuAK3NVISkPufVu5GZIIdW66b%2BTUFYkhRsyXF55LDZ8%2B33C%2FpsgDTFCeFZpdrf%2B4FjbtKpjvouSglL1b%2B&X-Amz-Signature=e7a8248e577935c147f9fe0bfb457602e929999718066a3a596b30d5374f4b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
