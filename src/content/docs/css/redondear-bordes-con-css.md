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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZFQTEB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi72j7mvAijMUtDWPeDIBuxvUFrMxecjtTjPkAUI4oHAIgMWoI84fMHKCN3N%2BGhBgZf%2FfoSI9IlhcCT0FSFS8js8Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCPEywv47E3SMaf9AyrcA%2FTUMhwHj9x7ItDDX7MZZ6rxtvIMlndtt%2BDSeuqtQkkJ8A7mfRjs62IcvfVCyaghym9L3jjrCE7rXy0wzU%2BOp0ktF08pjzjZJ3hWYfMbiMn2P0q%2B9KdGnij%2FVfTR0dwMRhF4T%2FGSbenav5UyyyyrdMIVidY4xSr%2FIYR6mmqI%2F4651IU6fGp0Vyqtl%2Fkhsqkb6yxEkjoSyMjjQNkSPzaF1usehfBjwTyatt%2BsktS1SRtMJKgId1PhBIp5e0XZ7s24DsffEOXusCrPYC8U4rxoqLDNOzSbHatDQgxJXAiF5EYAm8qP2RDu%2FzgmjUAKciGRcUGbaVglcrxM%2B49veXj4%2FC1J1gKTIYYEGlpD27PLzRWqY753AygtSEMlookslTx12%2FQDkiKukni%2FHUFXmi%2FnhAD6PBGLmHtHREyDmyLr%2Bbm63mG%2B7moWG5kh%2FJA2xLaXOqW%2BYNExraQpoaFq9OQCVFwd1bHbqhDVxyn7ur9UepELmzHYmmSGHJcaL9Lzgn2EIh25irmWnEB%2Fub1IYhWA3EfIQ2%2Fzk2s6YtS3XPTzfpdUhdLs3oeLN%2B%2Bl3epCvSfrTW7ZDYQPQTMXsM7njeKDZ4fqWF9vgDlJ6SkAWVLG%2BvA09%2BH5vdiHIf0cxoQ1MKGm0MkGOqUBcYQx%2B5%2FgBweFnZFgPFODcqFp5cLPdyPW%2Bp9yknWJNK6tn0Ghu2bCVbTUXIzyOURA39IijCqNTzE%2FY0LtpUqdZ2hLUe7WHsa9%2BcsXPINdzAkqlBX3zvWADmLfbGNtfL9ww3%2FeSohl%2FQKpEazv5tNxyNTYZdAMAUlSSyhPyR7IAeAsdqtImWu4IZIrgcbuz7FGeHYFU2nRnu5CbSK%2Fy37V8sqDE9od&X-Amz-Signature=8005d834a157f74c2f3b93a2974542d1e1937d339bcd6484353e601699a092cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZFQTEB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi72j7mvAijMUtDWPeDIBuxvUFrMxecjtTjPkAUI4oHAIgMWoI84fMHKCN3N%2BGhBgZf%2FfoSI9IlhcCT0FSFS8js8Eq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCPEywv47E3SMaf9AyrcA%2FTUMhwHj9x7ItDDX7MZZ6rxtvIMlndtt%2BDSeuqtQkkJ8A7mfRjs62IcvfVCyaghym9L3jjrCE7rXy0wzU%2BOp0ktF08pjzjZJ3hWYfMbiMn2P0q%2B9KdGnij%2FVfTR0dwMRhF4T%2FGSbenav5UyyyyrdMIVidY4xSr%2FIYR6mmqI%2F4651IU6fGp0Vyqtl%2Fkhsqkb6yxEkjoSyMjjQNkSPzaF1usehfBjwTyatt%2BsktS1SRtMJKgId1PhBIp5e0XZ7s24DsffEOXusCrPYC8U4rxoqLDNOzSbHatDQgxJXAiF5EYAm8qP2RDu%2FzgmjUAKciGRcUGbaVglcrxM%2B49veXj4%2FC1J1gKTIYYEGlpD27PLzRWqY753AygtSEMlookslTx12%2FQDkiKukni%2FHUFXmi%2FnhAD6PBGLmHtHREyDmyLr%2Bbm63mG%2B7moWG5kh%2FJA2xLaXOqW%2BYNExraQpoaFq9OQCVFwd1bHbqhDVxyn7ur9UepELmzHYmmSGHJcaL9Lzgn2EIh25irmWnEB%2Fub1IYhWA3EfIQ2%2Fzk2s6YtS3XPTzfpdUhdLs3oeLN%2B%2Bl3epCvSfrTW7ZDYQPQTMXsM7njeKDZ4fqWF9vgDlJ6SkAWVLG%2BvA09%2BH5vdiHIf0cxoQ1MKGm0MkGOqUBcYQx%2B5%2FgBweFnZFgPFODcqFp5cLPdyPW%2Bp9yknWJNK6tn0Ghu2bCVbTUXIzyOURA39IijCqNTzE%2FY0LtpUqdZ2hLUe7WHsa9%2BcsXPINdzAkqlBX3zvWADmLfbGNtfL9ww3%2FeSohl%2FQKpEazv5tNxyNTYZdAMAUlSSyhPyR7IAeAsdqtImWu4IZIrgcbuz7FGeHYFU2nRnu5CbSK%2Fy37V8sqDE9od&X-Amz-Signature=39a4ec3e4589063f1670cc156488b4a3d80dd379fda69a2a8032a91bb3ae8162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
