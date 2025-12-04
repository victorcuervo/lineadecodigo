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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5253FD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDyRCGzdW1GiRi9I%2BRYueoWGjCngTyoLjw9I8rdmvDw4AIgb2c5JGHWpdMDCWnghl9XkIk96VMdWiJNU%2B1FaSaTUnAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNZhChP%2BLyxu%2FTGOkCrcAzijsiNlBgT6QQPIj4BC%2F9R1%2FjgARnv0O7GLXAV7ORIaz%2FL%2BvgP1LLlZUjd%2BI2dfxrXsL4zvq9BQ4ZeqXUIv5yqmvZQxTKDQRTy%2B6Qj6GpXVpKzGtR%2Bw14J6%2F9CyovNuQl3XIuYYwoVRJNefjSa4juG4a8NScxPxAKxmXOLCY4v11Ajm%2BxPDXYF0FKEZA3erLV7KdRJUAiNSFIPbRRw6Ua1TXtalW%2FWbTgPyVF0UJS8Js782QhBN9i5ARv18%2BWmo2VaONQv0k%2FceCnpIPAkqScnrXZ5RCEpRwLCieSTeekqzGdH86kIx45mwZnn4VkinBzCYn651xK%2FNzEoYnakfKH38tjcnhO6AZuaWjEG6O0R0FOmzMfJCcXUm8BVHYJ73DvGrzFDF%2F9arYEfusY%2BGNxdUpRXwwLrKgE9KduT0c5qWfjd3oYu6S8%2Ff79gyI0uHGIdR9jAbTWy4O1%2B%2BgWBk2Lm%2FKI7DhT9z9AGKsfvSdD%2BHSl3UJSR%2B6RKsJf42sjZdRGk%2BGkHHNcCy1OjUKrgXI1h1WLhKJF9bngFld2r7Rq1xX%2BEfmxAY1zwB7a1DysNNICctUaaUb2qJFUNp%2FejGifDhLDYm6T77jjsbPRSPzlU9jaVvXutJBTRvfK2kMJ%2BuxMkGOqUBI3ARKgWqPGgtk8SzsznR8ahPfcrWdeAwZziH8oBXt6BbpiwfFEHKFLEpAkg5yuclAiBpbW%2FOpCUaBsGmg%2B%2Fduj%2BiBEJm%2B1dp%2BAPYH2VlJs%2BSKkzcHYJ3CPPkQHv86T1LUp2WSwpWWdlQ5q0aa4HaB8DJ9Wvqt6dxcZreNLQ5rDJDSoIwYDm2t63Mz6a9K4WFdjYFRZCfz6ES%2FhjwwjqPKGQuIyGi&X-Amz-Signature=44522377d749a4cc48bea8e887ffa2a0f5b7f5c147c97c28ab37acb53f7a0778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QD5253FD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDyRCGzdW1GiRi9I%2BRYueoWGjCngTyoLjw9I8rdmvDw4AIgb2c5JGHWpdMDCWnghl9XkIk96VMdWiJNU%2B1FaSaTUnAq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDNZhChP%2BLyxu%2FTGOkCrcAzijsiNlBgT6QQPIj4BC%2F9R1%2FjgARnv0O7GLXAV7ORIaz%2FL%2BvgP1LLlZUjd%2BI2dfxrXsL4zvq9BQ4ZeqXUIv5yqmvZQxTKDQRTy%2B6Qj6GpXVpKzGtR%2Bw14J6%2F9CyovNuQl3XIuYYwoVRJNefjSa4juG4a8NScxPxAKxmXOLCY4v11Ajm%2BxPDXYF0FKEZA3erLV7KdRJUAiNSFIPbRRw6Ua1TXtalW%2FWbTgPyVF0UJS8Js782QhBN9i5ARv18%2BWmo2VaONQv0k%2FceCnpIPAkqScnrXZ5RCEpRwLCieSTeekqzGdH86kIx45mwZnn4VkinBzCYn651xK%2FNzEoYnakfKH38tjcnhO6AZuaWjEG6O0R0FOmzMfJCcXUm8BVHYJ73DvGrzFDF%2F9arYEfusY%2BGNxdUpRXwwLrKgE9KduT0c5qWfjd3oYu6S8%2Ff79gyI0uHGIdR9jAbTWy4O1%2B%2BgWBk2Lm%2FKI7DhT9z9AGKsfvSdD%2BHSl3UJSR%2B6RKsJf42sjZdRGk%2BGkHHNcCy1OjUKrgXI1h1WLhKJF9bngFld2r7Rq1xX%2BEfmxAY1zwB7a1DysNNICctUaaUb2qJFUNp%2FejGifDhLDYm6T77jjsbPRSPzlU9jaVvXutJBTRvfK2kMJ%2BuxMkGOqUBI3ARKgWqPGgtk8SzsznR8ahPfcrWdeAwZziH8oBXt6BbpiwfFEHKFLEpAkg5yuclAiBpbW%2FOpCUaBsGmg%2B%2Fduj%2BiBEJm%2B1dp%2BAPYH2VlJs%2BSKkzcHYJ3CPPkQHv86T1LUp2WSwpWWdlQ5q0aa4HaB8DJ9Wvqt6dxcZreNLQ5rDJDSoIwYDm2t63Mz6a9K4WFdjYFRZCfz6ES%2FhjwwjqPKGQuIyGi&X-Amz-Signature=d2ad8d8c00f9395c948e972321c294714b4ef2d78dc2c9d7cd2c921fc8917181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
