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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HZ2YSQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPjbzkQvlwEdhxbaNguDfNJ54%2BA3iFpI3s%2F0fNb5ucagIhAMuA0iRQWLDiZHaWvQDiY7aAuut2ofgOV2UmxhEfCIYOKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3q6KnRajIfam2pWMq3APhnhYe0D1Jzp5uQT0VUzJ3eI7pZW%2BXhDyAW43%2F%2B9oUOihB2v1vNgSLTmhbi6t%2BWn45Sl9B0KKEObK70sBrYFk%2Ffs4KbsTdCxbtYDh8ID4NYdADrJ%2Be7x6NxaiiBKmPRfEWLo1PTCxvG7EpVESskfEgHxvR6p73ilEbMiWe3DLr2khr1HORBRrE9eGYgOtwSho6YnXTsX2aY%2BD7%2B3Jp1hgdh0JnBaKSbYaLcCJiMDHqU4k6Fe62iVIlpPL%2BU9w47yqdc%2F5M2Um95RURKrrFgQcSru1Kw8DFkxNSIiLj6FEisJ1LDQbCRnHTzV80aMIxMNPCuD9EBvmaD4DChrYtawcdarmdS4KMTxzTZ9Scpn2CQ6wLSf4SS5OSTzLuOpoVJfPhVZstGFfX9kDSpzIz%2FykYhdQLoi%2FT2qsuHFMa5MD4r%2Bq7%2Bs8k4vGwkh1etL5W844sOu3twzYrL6WntG3T%2Bnl0GevdCS%2FUWYXjT1e3Enr1kWf0Ue3Q7IGb1mG6qCzz4SyEyD9Cp8dDgWbBf0HyA2FFdLCmobtYfMvlIY33sxMWhkQEQYwcpT3KHr9dW4Xeix2kY0ZLfHc%2FvYSBt6Iv5K%2BD%2F7mVj71fSehH%2FMuY8zgP1e%2BIm76GrZA3lSSdMjDOrYzKBjqkAUZHrDobgYKVwbSizexZx5nArgZgEpLzg5ZNt4kTEFz6UA3XvznEoQUlatzfVNuGFTvK%2B%2BGJTTDsTIzyK0klzEfmSDP9O1LTh2sHsUTRz7PVkSaNtLSaW83I9DTc2IaRtmpK%2Fkl9eTVaCzC3RtZkoa4H9At4bL8hoFVN4qzn03RjFast8CFhd6SR18fET5uYjiPD90ZzbJq4Ub2TguiyciPQ%2B7Xj&X-Amz-Signature=d1a24011fba7da50909a26dbb9eacae66621284f7ad31687735d6751b0ec1b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642HZ2YSQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPjbzkQvlwEdhxbaNguDfNJ54%2BA3iFpI3s%2F0fNb5ucagIhAMuA0iRQWLDiZHaWvQDiY7aAuut2ofgOV2UmxhEfCIYOKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3q6KnRajIfam2pWMq3APhnhYe0D1Jzp5uQT0VUzJ3eI7pZW%2BXhDyAW43%2F%2B9oUOihB2v1vNgSLTmhbi6t%2BWn45Sl9B0KKEObK70sBrYFk%2Ffs4KbsTdCxbtYDh8ID4NYdADrJ%2Be7x6NxaiiBKmPRfEWLo1PTCxvG7EpVESskfEgHxvR6p73ilEbMiWe3DLr2khr1HORBRrE9eGYgOtwSho6YnXTsX2aY%2BD7%2B3Jp1hgdh0JnBaKSbYaLcCJiMDHqU4k6Fe62iVIlpPL%2BU9w47yqdc%2F5M2Um95RURKrrFgQcSru1Kw8DFkxNSIiLj6FEisJ1LDQbCRnHTzV80aMIxMNPCuD9EBvmaD4DChrYtawcdarmdS4KMTxzTZ9Scpn2CQ6wLSf4SS5OSTzLuOpoVJfPhVZstGFfX9kDSpzIz%2FykYhdQLoi%2FT2qsuHFMa5MD4r%2Bq7%2Bs8k4vGwkh1etL5W844sOu3twzYrL6WntG3T%2Bnl0GevdCS%2FUWYXjT1e3Enr1kWf0Ue3Q7IGb1mG6qCzz4SyEyD9Cp8dDgWbBf0HyA2FFdLCmobtYfMvlIY33sxMWhkQEQYwcpT3KHr9dW4Xeix2kY0ZLfHc%2FvYSBt6Iv5K%2BD%2F7mVj71fSehH%2FMuY8zgP1e%2BIm76GrZA3lSSdMjDOrYzKBjqkAUZHrDobgYKVwbSizexZx5nArgZgEpLzg5ZNt4kTEFz6UA3XvznEoQUlatzfVNuGFTvK%2B%2BGJTTDsTIzyK0klzEfmSDP9O1LTh2sHsUTRz7PVkSaNtLSaW83I9DTc2IaRtmpK%2Fkl9eTVaCzC3RtZkoa4H9At4bL8hoFVN4qzn03RjFast8CFhd6SR18fET5uYjiPD90ZzbJq4Ub2TguiyciPQ%2B7Xj&X-Amz-Signature=8afcf57bbd0cc25912345625eb44156c6711ad348278d47fd51c30570fa31be3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
