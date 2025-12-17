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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4B2MT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpk6ZOFEGZvS78HeZXhazSMBa%2B1m6eEoKIvodl11kyIwIhALObXAmYjy0%2FGeruOPxT8PyIzlP6DU88%2BK3Z4bDp74OKKv8DCHwQABoMNjM3NDIzMTgzODA1Igz7Vgo8BXil41vDw6gq3AM1ZDPb2XD7tM5zMh3hbcXr96b344KaG4HHMNPi8asBuYmm5CN2zcL8cMK%2Bgf1RYY3%2BwmObib4JFil5XpD%2FFsJuQ4PhhNzguW%2Baa9I1BRzV8SlGoFAF7eAZEeJNErKv28tAaN27legKSVt1Mah2nuNkYzgPMky6UAx1lMnglXTIKrR39S7F%2BCtySWc5LHg4zhf50g7ZDmSafeVRlT9gwCwKCo6G1GL%2Fx1WA0J1Y8Bq7%2BfMCSqdGym3HNs7semZO%2F9UbAsnU21G3oAL8iYhhdec7QTSm4XlCFc6NvGjBPx82ohh5LwvnQJly9b4zSBOlhf%2BWU6i9%2F8UYjfRM6iZhBtwOkcuOxAVZ9jqykOi7xjSy4fx8XhsxVaBwsjwpsW21PG57IBYaiiKl%2BalhwFu1FUBHGA95MlH4c9tgRmkU%2BtZbZzTaEi99YwAC5BaLV%2BYHRMSc5m15pToXhgz3uocmmGGsrPsc50NNspIii2ZVbI%2BOQyGLdPnUM%2F0AiGKxwWE%2BMbSNO2hzs0ML2NWHTYVxftiJvapcFs1tbs2olwD6VvkXfaoUks5FEZpU8D4Gk1QBbu%2BtmB4fOSro3LrXrOmMUHV7IWmPJAIGINCToCDV4ZTOaVyLRgCr6qSMGSlMzTDgjorKBjqkAXa4nRHbW9xt%2FfAVnDQjH60juqmbdkjQDoE%2B0bnjHTufckD7LiFuu%2BArSVStgcCNLzFNuxEi5L6p8NzZvW5M5rXa%2BRBS42AckvpWPVxT01xua%2FSJEFZxEfh4Qk8p67KVHl5BAdutG1WwmWZj8x%2BB215x6ccNuBFFcEWg%2Fl%2B6VF1SbL3jqMfFx0bhw7hdfQdUt49CWc9gaPmZzbKvHO9vAQc3OjL5&X-Amz-Signature=f40deb6a18d04d5cdd769ea148608b5f00df135ae894ad8a0efd1d743ef9f5a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL4B2MT4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpk6ZOFEGZvS78HeZXhazSMBa%2B1m6eEoKIvodl11kyIwIhALObXAmYjy0%2FGeruOPxT8PyIzlP6DU88%2BK3Z4bDp74OKKv8DCHwQABoMNjM3NDIzMTgzODA1Igz7Vgo8BXil41vDw6gq3AM1ZDPb2XD7tM5zMh3hbcXr96b344KaG4HHMNPi8asBuYmm5CN2zcL8cMK%2Bgf1RYY3%2BwmObib4JFil5XpD%2FFsJuQ4PhhNzguW%2Baa9I1BRzV8SlGoFAF7eAZEeJNErKv28tAaN27legKSVt1Mah2nuNkYzgPMky6UAx1lMnglXTIKrR39S7F%2BCtySWc5LHg4zhf50g7ZDmSafeVRlT9gwCwKCo6G1GL%2Fx1WA0J1Y8Bq7%2BfMCSqdGym3HNs7semZO%2F9UbAsnU21G3oAL8iYhhdec7QTSm4XlCFc6NvGjBPx82ohh5LwvnQJly9b4zSBOlhf%2BWU6i9%2F8UYjfRM6iZhBtwOkcuOxAVZ9jqykOi7xjSy4fx8XhsxVaBwsjwpsW21PG57IBYaiiKl%2BalhwFu1FUBHGA95MlH4c9tgRmkU%2BtZbZzTaEi99YwAC5BaLV%2BYHRMSc5m15pToXhgz3uocmmGGsrPsc50NNspIii2ZVbI%2BOQyGLdPnUM%2F0AiGKxwWE%2BMbSNO2hzs0ML2NWHTYVxftiJvapcFs1tbs2olwD6VvkXfaoUks5FEZpU8D4Gk1QBbu%2BtmB4fOSro3LrXrOmMUHV7IWmPJAIGINCToCDV4ZTOaVyLRgCr6qSMGSlMzTDgjorKBjqkAXa4nRHbW9xt%2FfAVnDQjH60juqmbdkjQDoE%2B0bnjHTufckD7LiFuu%2BArSVStgcCNLzFNuxEi5L6p8NzZvW5M5rXa%2BRBS42AckvpWPVxT01xua%2FSJEFZxEfh4Qk8p67KVHl5BAdutG1WwmWZj8x%2BB215x6ccNuBFFcEWg%2Fl%2B6VF1SbL3jqMfFx0bhw7hdfQdUt49CWc9gaPmZzbKvHO9vAQc3OjL5&X-Amz-Signature=144170fce61609ae042f27b4075053253380384297a97e8162d597b937adcd9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
