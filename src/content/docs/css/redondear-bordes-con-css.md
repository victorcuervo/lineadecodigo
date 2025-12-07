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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSBUHGO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgZ8Z2utHDf8cjEreGj4lc4kxa%2B0iycqFK0L%2BML1ZxwAiEA1xJcdJ2Q9x%2B5GNpG70rByyZmWIOtI6GHRIrmYEWMyXUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiKa6XoL%2B3xT2yzdyrcA%2BwVA5LJwsqy%2FRgQVt0Mj4pvbD1Ar6r8kc%2BIpLX0MQN8LApDxtWVwvpgkpvM%2FB8C%2BMrnfLgbZMAru4Muvaig3gQGYXbWrUWVHcfiNvOYJR9eufGXml9K3L4YF5xegqEfVqqrcGGDxcCNVnXE51TufJeAeFE0WZw9rRUDQTJxuqYSnTql7fiHqkP8cj1H682dxaVZbbgKKY5a65FIZApofCazeGt2UD1LPIMfi3H1%2BOHOTpGKa9ffAUdO%2BWJY3%2FZ3MTWUjk9uRQWTRDeKkUCAZHDVL2XP0wnITc9w%2F1tlWwBxtEs4dP8Ok6bVxxyMfC3EtnFikRcSAlmyN7E2VVikm8kjCxo8bi48l7k98GH7zhuTOFNuco%2BJnqssUCs43J9VHSBd%2F0DuOTMT8P0ZK1MMcDiPUh2PnAWHsrOBwan57GSo8JiLJBZYqkiRfxe5pvF2Y1yoc2x%2BryFmm%2Fv5G7UCzas0gL%2B2UpINY2312YXSkT26pBmLA2obuBXdvO6Vsg14NPH3DscxSHXy6WhzIPdLepQ%2BXtY38D7GLgcJxaRPfsRwTpt%2FB3afBEORD69G0%2BNTnmjyPIxR8BhIa85y2Cj6NHwOX%2Bficg59ysfyrs6sM7pC%2BU99JNSbw5zLtcR5MOzG18kGOqUBHo%2F8qAPw4Ry%2FU8vRNn8LNQRwtG5YO7pPwGbjgSF1oyFmS1USCLNHod93nS5okfAq05DnjUi7wpCR%2BFfa8F6K0awLcMhPxSISteZrBKAlafgBrxM7EZoMPJY0juRsHRbZE2gxvnvCbssKbmIAIHK6bYBmlL10iLixu6hK3YcSdcMevd9J9Aa3LkxvdkWyYZmPpGYK7m5LRtZybeasDB1rDByfaN7u&X-Amz-Signature=5d06945a4cce398b76da9804891375c9f679c7bb40e5da323a57d6efe256af59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSBUHGO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgZ8Z2utHDf8cjEreGj4lc4kxa%2B0iycqFK0L%2BML1ZxwAiEA1xJcdJ2Q9x%2B5GNpG70rByyZmWIOtI6GHRIrmYEWMyXUqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiKa6XoL%2B3xT2yzdyrcA%2BwVA5LJwsqy%2FRgQVt0Mj4pvbD1Ar6r8kc%2BIpLX0MQN8LApDxtWVwvpgkpvM%2FB8C%2BMrnfLgbZMAru4Muvaig3gQGYXbWrUWVHcfiNvOYJR9eufGXml9K3L4YF5xegqEfVqqrcGGDxcCNVnXE51TufJeAeFE0WZw9rRUDQTJxuqYSnTql7fiHqkP8cj1H682dxaVZbbgKKY5a65FIZApofCazeGt2UD1LPIMfi3H1%2BOHOTpGKa9ffAUdO%2BWJY3%2FZ3MTWUjk9uRQWTRDeKkUCAZHDVL2XP0wnITc9w%2F1tlWwBxtEs4dP8Ok6bVxxyMfC3EtnFikRcSAlmyN7E2VVikm8kjCxo8bi48l7k98GH7zhuTOFNuco%2BJnqssUCs43J9VHSBd%2F0DuOTMT8P0ZK1MMcDiPUh2PnAWHsrOBwan57GSo8JiLJBZYqkiRfxe5pvF2Y1yoc2x%2BryFmm%2Fv5G7UCzas0gL%2B2UpINY2312YXSkT26pBmLA2obuBXdvO6Vsg14NPH3DscxSHXy6WhzIPdLepQ%2BXtY38D7GLgcJxaRPfsRwTpt%2FB3afBEORD69G0%2BNTnmjyPIxR8BhIa85y2Cj6NHwOX%2Bficg59ysfyrs6sM7pC%2BU99JNSbw5zLtcR5MOzG18kGOqUBHo%2F8qAPw4Ry%2FU8vRNn8LNQRwtG5YO7pPwGbjgSF1oyFmS1USCLNHod93nS5okfAq05DnjUi7wpCR%2BFfa8F6K0awLcMhPxSISteZrBKAlafgBrxM7EZoMPJY0juRsHRbZE2gxvnvCbssKbmIAIHK6bYBmlL10iLixu6hK3YcSdcMevd9J9Aa3LkxvdkWyYZmPpGYK7m5LRtZybeasDB1rDByfaN7u&X-Amz-Signature=bf3075d7c95811dc9dad5f3b76c4d3597f509a3618186fd9462033d8415e4682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
