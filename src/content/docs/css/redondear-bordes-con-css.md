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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NR3FHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCckyqniRZm9TSITb7Or%2BBNKpggQofEmXzfJWjbnHPH%2FgIhAIxlKbUBpMVN0Khi%2BvYg9oO%2BNBM5YAzqVc4AE%2F3ZN4MmKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxis4Ozl%2F66vRlvjgMq3APqEbiZ%2BBneGI6hUyj2fV8oE7fa6AIOi8OoppOemX4T0C5oXqQcrkAQDWglt2ktOCsD0ECRrGE9nRicWy9HiTuVziRwrsW0EwQcVzdP%2FY7YukeirzKQV%2FthOXBfB%2BkaQDfTpoi%2B16VdCwQQbXJq7c9FBLvBm4UsB33tgpxpmVgNKNFahourB9UUv83NTtZq%2FG6WcK72mUTDG9Cp2iF%2BmRBmJE%2FkXbkrfu9u5TxHwRPqDz6fQssjZgmJPZOqeXSaKKoy39KoyiNqFUe0nhVBpFh4qYDPMSCvq%2Fj5meO74TiATO92oS6mnV72eK9uYjo4G%2Bs%2Bh0LDcVrQW5gUUhjd8fXdtRUVMMakGpAmuNrQl75OS4gAKUBEmxuHsJxRLRTrMYrWA%2F4jd4DBWyLTNi%2BLVVyJn2P%2BvqdqEx2tnf%2FbosushgjKtF7V4m%2FfGZXH0NS%2BtfiFYCdem4ZAt5UNG0jKJk%2FpHeERingVK2aqBZAenaTwi8lV7bUixZwDTQIgQqTi%2FKyaWEs6ufjlC3%2Bb0gkZAHq8QPWjNPSrBo48yU1FDyMY7uSP2waNgqqn3xur1czTBotq0q7Bd7HysRnBnAY0LGGjWXJC7wfArru9mHrxtNrMD1vchSpUSVsjDbS1BTDkod3JBjqkATUHQNiFnm4PdSyHmo5sYoxCFdn41%2BWY6%2B55kRDi58W64%2FoERQMNjJ98wwDVktku7mTrtP4agzuVXIrdzLh%2BjUnXp2ucgY3FoTjYHgGCqoBxR0vv%2Fd5V%2FNIIcbv6Xr3Ks4X7dQtRNfXPvS8G30kxtOGHQNMAQS5eWCiwQVFeTDgFrIkgpsas2hqXZHRKp45cYe7SVrGy4WkF8BPrqS6mGm2Kd%2B0x&X-Amz-Signature=6986b91a9fb8c99022fa429f99f09f54ff875105cabbc2520f64f8d1f9c25cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NR3FHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCckyqniRZm9TSITb7Or%2BBNKpggQofEmXzfJWjbnHPH%2FgIhAIxlKbUBpMVN0Khi%2BvYg9oO%2BNBM5YAzqVc4AE%2F3ZN4MmKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxis4Ozl%2F66vRlvjgMq3APqEbiZ%2BBneGI6hUyj2fV8oE7fa6AIOi8OoppOemX4T0C5oXqQcrkAQDWglt2ktOCsD0ECRrGE9nRicWy9HiTuVziRwrsW0EwQcVzdP%2FY7YukeirzKQV%2FthOXBfB%2BkaQDfTpoi%2B16VdCwQQbXJq7c9FBLvBm4UsB33tgpxpmVgNKNFahourB9UUv83NTtZq%2FG6WcK72mUTDG9Cp2iF%2BmRBmJE%2FkXbkrfu9u5TxHwRPqDz6fQssjZgmJPZOqeXSaKKoy39KoyiNqFUe0nhVBpFh4qYDPMSCvq%2Fj5meO74TiATO92oS6mnV72eK9uYjo4G%2Bs%2Bh0LDcVrQW5gUUhjd8fXdtRUVMMakGpAmuNrQl75OS4gAKUBEmxuHsJxRLRTrMYrWA%2F4jd4DBWyLTNi%2BLVVyJn2P%2BvqdqEx2tnf%2FbosushgjKtF7V4m%2FfGZXH0NS%2BtfiFYCdem4ZAt5UNG0jKJk%2FpHeERingVK2aqBZAenaTwi8lV7bUixZwDTQIgQqTi%2FKyaWEs6ufjlC3%2Bb0gkZAHq8QPWjNPSrBo48yU1FDyMY7uSP2waNgqqn3xur1czTBotq0q7Bd7HysRnBnAY0LGGjWXJC7wfArru9mHrxtNrMD1vchSpUSVsjDbS1BTDkod3JBjqkATUHQNiFnm4PdSyHmo5sYoxCFdn41%2BWY6%2B55kRDi58W64%2FoERQMNjJ98wwDVktku7mTrtP4agzuVXIrdzLh%2BjUnXp2ucgY3FoTjYHgGCqoBxR0vv%2Fd5V%2FNIIcbv6Xr3Ks4X7dQtRNfXPvS8G30kxtOGHQNMAQS5eWCiwQVFeTDgFrIkgpsas2hqXZHRKp45cYe7SVrGy4WkF8BPrqS6mGm2Kd%2B0x&X-Amz-Signature=e16898df9997262dc3470e2bd9df60f5f79c6ca008599c3a5b3443ed8e383159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
