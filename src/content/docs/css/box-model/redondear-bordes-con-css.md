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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDPZKR2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBKDykTljH2Y%2BJBh%2BnBdFQA5lgad%2BO3QkBTtgCu9lDoAIgMvVbYfuOB3qkWXTzbk8GkPUJ%2Bb9K0lg33fTOywks8LEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAlIctP2UvX8xQb6VCrcA7psTpfM32ybSjsx9fUrh0JdSjvot%2BRzsJKzafH2t5oSSRKoB9rjzPT7nKoAMu44d4KMChRQQjZbj7W9swo%2BJybciZ%2BYt7WU2jPiQ90cbbOlswAgBDziJDTKMCe0pGYYCsXlvxDW6kbcXegLlmWbLKIZtMlqVcJ47fmQgeTTkFaeVYmf9R3alLBuHf50Y0ZM%2B7lPj7S%2FRcSCDSEZy6GGx57RH0bzaYeETyQSGy57sjxFdXPlAi1znn5KlODzb1g68E%2FYOs89Zpf1V2pEpT1uRm6EKxjkD35kVNauF2zvaQ51u0Baq7ZRZfwkSBLFI%2Bw8TwIEpwZ%2Fiqv1FeTJHwWpxFZ7sxhmt%2FEvgot1aC2cqHHbqaMpZIHSINmVIfteXulozsV3lY%2F6T5YctmZptd0mATQRKLKgTmZXsTtIqQ0Qc18gJ9OvddsJ%2Bf6Opd64okROJO9FJmgajrhd6pp%2BU4KYJjVnXYAIq2Px%2FRhNLe4hFT7PuQUpy9cRQTJy48bbUVDyRpviWsORXRWaHihSJx7pWRtDqmAboK8%2F%2FqQNnUSrUyNbehnUJvwcQ5oE6hei%2FAYCKAmzZR01hNymvRnqnoFfaSkIJnQFR23HHpy%2Ba4leOM2DySQEtU5a71fBWUDAMPnNiMoGOqUBZNterrifdU%2Bjq5y5ZFJzX%2BgeoDz%2B0J1HkS0seeeV9Y0SoQVsvdbxx8lSsrPdcWQsiriKnbpxmqbGiIOqku7qYZzZiBs3r4hRd8MnZ8IW0fVRuKJJOD5Xs9ymEXw8o5zIAVhlMEylX1D1thi4Ug7rS3MwPq0hd0lApL6IXRsfRy1HPVursCqrA%2FI7F3pAfBKxwmviMOByG9lP7jocF3Pngaif5koI&X-Amz-Signature=d934e341aed81125a383277fc1bfbee099107cb9e9cba7d7af0f9b668697fc84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDPZKR2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T043829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBKDykTljH2Y%2BJBh%2BnBdFQA5lgad%2BO3QkBTtgCu9lDoAIgMvVbYfuOB3qkWXTzbk8GkPUJ%2Bb9K0lg33fTOywks8LEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAlIctP2UvX8xQb6VCrcA7psTpfM32ybSjsx9fUrh0JdSjvot%2BRzsJKzafH2t5oSSRKoB9rjzPT7nKoAMu44d4KMChRQQjZbj7W9swo%2BJybciZ%2BYt7WU2jPiQ90cbbOlswAgBDziJDTKMCe0pGYYCsXlvxDW6kbcXegLlmWbLKIZtMlqVcJ47fmQgeTTkFaeVYmf9R3alLBuHf50Y0ZM%2B7lPj7S%2FRcSCDSEZy6GGx57RH0bzaYeETyQSGy57sjxFdXPlAi1znn5KlODzb1g68E%2FYOs89Zpf1V2pEpT1uRm6EKxjkD35kVNauF2zvaQ51u0Baq7ZRZfwkSBLFI%2Bw8TwIEpwZ%2Fiqv1FeTJHwWpxFZ7sxhmt%2FEvgot1aC2cqHHbqaMpZIHSINmVIfteXulozsV3lY%2F6T5YctmZptd0mATQRKLKgTmZXsTtIqQ0Qc18gJ9OvddsJ%2Bf6Opd64okROJO9FJmgajrhd6pp%2BU4KYJjVnXYAIq2Px%2FRhNLe4hFT7PuQUpy9cRQTJy48bbUVDyRpviWsORXRWaHihSJx7pWRtDqmAboK8%2F%2FqQNnUSrUyNbehnUJvwcQ5oE6hei%2FAYCKAmzZR01hNymvRnqnoFfaSkIJnQFR23HHpy%2Ba4leOM2DySQEtU5a71fBWUDAMPnNiMoGOqUBZNterrifdU%2Bjq5y5ZFJzX%2BgeoDz%2B0J1HkS0seeeV9Y0SoQVsvdbxx8lSsrPdcWQsiriKnbpxmqbGiIOqku7qYZzZiBs3r4hRd8MnZ8IW0fVRuKJJOD5Xs9ymEXw8o5zIAVhlMEylX1D1thi4Ug7rS3MwPq0hd0lApL6IXRsfRy1HPVursCqrA%2FI7F3pAfBKxwmviMOByG9lP7jocF3Pngaif5koI&X-Amz-Signature=351d401c705ada7e2675025eb9960920702612661ae66650a8d49de9b7062198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
