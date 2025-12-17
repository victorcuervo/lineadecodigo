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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTWCKGWX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRMkBG1o%2F4Z73pfyGvBFp4fRwZl5vKJxyHTLMLleoZQIhAPss4rFduHbxbsGGLv2eifm1KIVwhdG8cNtOwZzfydydKv8DCHIQABoMNjM3NDIzMTgzODA1Igzy3J8EUY9puxGtDrAq3AP%2B81%2BeVh5HZSsofOxp9CfukrR9KEK1NcE4rUBUb3jmgtk1ruyJf0ls5Eawnclkv1RFhgDGG9pKwGO9p3c1EQktFcVwvLILIXYL%2B5%2BWm9iM5FFym%2BLlVBAmo13Swb3lkOkcas%2FYgDqWcj89dy3XklHwK4DWsDdQKfwAn5wTMp7H4NN8nk5ZgptppqRYwSiDBQH2mV9asOndELyWjGk64TYHjcOs%2B1RuzGyRYBkxD%2Ft947n9XANLJBdCEBW0AiN3JGUka15ab7p%2FhcYUZmvGqT3UBGPoIRujkCOlMCPo%2F0cOhkBgJbXsivraHBUHEMT6unHqIiaryWeZsJ%2F%2FaT14DTmItyeubWcr06B6gKn2eNaSna5kCE39XF3KcRTIYyOwS7kwucXf6H7flyIMC83YUEKtWwaHnE2avaH2TfHDknMX3M0Nbg2maM7TWhA4tjBdhbcaLmvtpZIow0caC0DOpalDfbSzGFuGVCrJ1js0iT1zDvtS6zyBuKYJHVDoNmxSunvKf8hFp9%2FlJf8VQDgXSJenQORp59LVLYzo2aZXXD4%2BEpefJN8y5IR1a1CSvj7ZcE9R8O%2BgBEQFL62RBLfGn%2BhwoL3snvynpd%2BTEmdBu4YvfcgEru6uSiYabdAoVjDN%2B4fKBjqkAQ7tFbsKSxTM%2F2Rb95pZbD2Ms69mqdj4JGQJ6yXh3FJMqStq0n2IbX8MQqfXroz8rfHYl16rAkpmaM4PV29peutjEq%2F3MlwTZaZE352VbVQRC4iupaJN5E5sG1PHRa%2FAj0%2F6KOMLxXcXHQRSSlLjDs8nTBZCXWtMLA%2BoQhO9dOnEQBLA4DhbzFR%2BzrQ35ChmZwyB9L8cKu0FzC%2FocXAdjfyZ%2FrwG&X-Amz-Signature=76138789e116b65a7476b484c5483d29781e2478f43da0046cbebf06496a8f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTWCKGWX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZRMkBG1o%2F4Z73pfyGvBFp4fRwZl5vKJxyHTLMLleoZQIhAPss4rFduHbxbsGGLv2eifm1KIVwhdG8cNtOwZzfydydKv8DCHIQABoMNjM3NDIzMTgzODA1Igzy3J8EUY9puxGtDrAq3AP%2B81%2BeVh5HZSsofOxp9CfukrR9KEK1NcE4rUBUb3jmgtk1ruyJf0ls5Eawnclkv1RFhgDGG9pKwGO9p3c1EQktFcVwvLILIXYL%2B5%2BWm9iM5FFym%2BLlVBAmo13Swb3lkOkcas%2FYgDqWcj89dy3XklHwK4DWsDdQKfwAn5wTMp7H4NN8nk5ZgptppqRYwSiDBQH2mV9asOndELyWjGk64TYHjcOs%2B1RuzGyRYBkxD%2Ft947n9XANLJBdCEBW0AiN3JGUka15ab7p%2FhcYUZmvGqT3UBGPoIRujkCOlMCPo%2F0cOhkBgJbXsivraHBUHEMT6unHqIiaryWeZsJ%2F%2FaT14DTmItyeubWcr06B6gKn2eNaSna5kCE39XF3KcRTIYyOwS7kwucXf6H7flyIMC83YUEKtWwaHnE2avaH2TfHDknMX3M0Nbg2maM7TWhA4tjBdhbcaLmvtpZIow0caC0DOpalDfbSzGFuGVCrJ1js0iT1zDvtS6zyBuKYJHVDoNmxSunvKf8hFp9%2FlJf8VQDgXSJenQORp59LVLYzo2aZXXD4%2BEpefJN8y5IR1a1CSvj7ZcE9R8O%2BgBEQFL62RBLfGn%2BhwoL3snvynpd%2BTEmdBu4YvfcgEru6uSiYabdAoVjDN%2B4fKBjqkAQ7tFbsKSxTM%2F2Rb95pZbD2Ms69mqdj4JGQJ6yXh3FJMqStq0n2IbX8MQqfXroz8rfHYl16rAkpmaM4PV29peutjEq%2F3MlwTZaZE352VbVQRC4iupaJN5E5sG1PHRa%2FAj0%2F6KOMLxXcXHQRSSlLjDs8nTBZCXWtMLA%2BoQhO9dOnEQBLA4DhbzFR%2BzrQ35ChmZwyB9L8cKu0FzC%2FocXAdjfyZ%2FrwG&X-Amz-Signature=c5fcbcd1fe9b5b8ffa264231e98f56da0fa8c5ebbadf169626837ce6c47f5789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
