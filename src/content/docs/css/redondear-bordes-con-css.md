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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QXIHTJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID33pTyhJA2826u3dpLZlBf2KVmW2rWCsFMTRy1Au6U8AiEAx1xD%2BtWyIDsv%2Bu0mVg6%2F6SLMgk5v56MEp8nGtcPv2BEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPni%2B3w1x%2BXYlmD4CrcAxEhx26HN%2BvtUr5YA5zAJms9%2F74kDFZdHr7JzhCR0%2FbFxBq7tghZkJ1Proos2gT4xLE9NV2NHzVvQsL3qEE8DA%2F1hDP5ZNhUX%2Ft%2BvxGw%2FrN4IGB4asabA0W1sis6%2FxVQMACQ3RYurKpIrtVeh6l9jlPY%2BJVdqWgG47R%2BNRy%2BSyJEdoUFL79cEJpbQ8YUB1yxVBmLd2lK0k%2FX3vHc3KBSrHpKci%2F1Ofn3%2FuxODE7QcTc8jQaQK6jz62ULtg3XL8XPky7VMNh0HBLJ3%2BFth2jBWrv6vG1hOeXmHTzQ7OlMWDlu%2BQ3rwNQnOfwBKJYw8EZwA%2F4TqMif%2FGhVYo6i7E5D%2FurrCSzU6zjSdnhEneOTHHEIgTBZ4w0E4icLdHITR4ZQyqsGGtGS%2BA562PQAQLZ8UB0KjcM7VeT9qB3ETCTFZwcSeI8tdSOnEz24C%2FBHrJkss%2FUQhhjKTk4SDQIOGL5YCVgD5b4TWkPSyzO4tKDMLCRo4Iee6F9IkUxFDl6Y0RrMpT5AgVRqw0h2D2JJgewR6E8O0WUIJP6pXGeLMP3ywyCZo5s5ef8Xk%2FDXiM4Am%2B07rLOyp6C6ouNjMNGhf0B9B1DnhEbzYwuBC5%2BpP9uLcSVjhIEA1XRbn6qo8rDbMLKa1ckGOqUBHD4qVDNbz2tj%2B2bUNpBYi4xKiZnKlN%2FhQb%2B6XMXMEO89xX54LHKM%2BCvxeeWOwBmeQvzEhu5X7cUE3LF6qW0MwOIsfJDOlBC%2BhPsYRsl9AsLhUDXlceJL5BulsXS%2BM69QUJQIoVfn0YTRZYD8m6PX9kyokxM2cP7usgHTjxAkZ7i4cMWWRJ65ZsZBCJm74ZVhw8T2qvKzGWxXpzfTcMKBTwkpjtz6&X-Amz-Signature=f319701362201d7fd575f587ae3b85dff6c718e087ae1960675e97c62f020538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637QXIHTJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID33pTyhJA2826u3dpLZlBf2KVmW2rWCsFMTRy1Au6U8AiEAx1xD%2BtWyIDsv%2Bu0mVg6%2F6SLMgk5v56MEp8nGtcPv2BEqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPni%2B3w1x%2BXYlmD4CrcAxEhx26HN%2BvtUr5YA5zAJms9%2F74kDFZdHr7JzhCR0%2FbFxBq7tghZkJ1Proos2gT4xLE9NV2NHzVvQsL3qEE8DA%2F1hDP5ZNhUX%2Ft%2BvxGw%2FrN4IGB4asabA0W1sis6%2FxVQMACQ3RYurKpIrtVeh6l9jlPY%2BJVdqWgG47R%2BNRy%2BSyJEdoUFL79cEJpbQ8YUB1yxVBmLd2lK0k%2FX3vHc3KBSrHpKci%2F1Ofn3%2FuxODE7QcTc8jQaQK6jz62ULtg3XL8XPky7VMNh0HBLJ3%2BFth2jBWrv6vG1hOeXmHTzQ7OlMWDlu%2BQ3rwNQnOfwBKJYw8EZwA%2F4TqMif%2FGhVYo6i7E5D%2FurrCSzU6zjSdnhEneOTHHEIgTBZ4w0E4icLdHITR4ZQyqsGGtGS%2BA562PQAQLZ8UB0KjcM7VeT9qB3ETCTFZwcSeI8tdSOnEz24C%2FBHrJkss%2FUQhhjKTk4SDQIOGL5YCVgD5b4TWkPSyzO4tKDMLCRo4Iee6F9IkUxFDl6Y0RrMpT5AgVRqw0h2D2JJgewR6E8O0WUIJP6pXGeLMP3ywyCZo5s5ef8Xk%2FDXiM4Am%2B07rLOyp6C6ouNjMNGhf0B9B1DnhEbzYwuBC5%2BpP9uLcSVjhIEA1XRbn6qo8rDbMLKa1ckGOqUBHD4qVDNbz2tj%2B2bUNpBYi4xKiZnKlN%2FhQb%2B6XMXMEO89xX54LHKM%2BCvxeeWOwBmeQvzEhu5X7cUE3LF6qW0MwOIsfJDOlBC%2BhPsYRsl9AsLhUDXlceJL5BulsXS%2BM69QUJQIoVfn0YTRZYD8m6PX9kyokxM2cP7usgHTjxAkZ7i4cMWWRJ65ZsZBCJm74ZVhw8T2qvKzGWxXpzfTcMKBTwkpjtz6&X-Amz-Signature=19fed5f320c2ff377b1109e679c40dcd53adfd8d5ddfdb8f11dbd255242fb8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
