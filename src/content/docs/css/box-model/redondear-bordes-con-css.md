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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3R2O3G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID56TGB9FRN659N%2FvN9AuxhdRtEoVTn1utkuG0D4jZTzAiEAj%2FVaR7WMMse3TU0R%2B0wsXkjHKq%2F8nJsOmEUrPkVqe6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGY3cyogWp8LHO5QrircA0%2BQoZF43jFQLYjoVyAEkeIT7Gkf4LkahLtXXR5Dtm5NsBMXVXw0me8PZ321xj0mac%2FclRtVuNxFoP%2B02zSFduKYjB7RL8MG1qyo%2BS7KQAUvqwM6NywdRu6LPVyYkXcOz4lJ0KA7v%2BP22SFQbqvQ%2B03tXiMuRVowAGerFg0PaSTZJiXBpEmmy5rnf9BDbBltfGMdhTGxEiH7jEULSwNTyIK2B3Pyjpl%2BMoFiB72EW75voGfeqAgIA5zIbSf1CD8JsOuljYLNRE2qX5TczRquIgBVLsDg%2BWt%2BwpKs5e6I0yUOXPosV3A5CYDL5uK4MDwznWOf4iRNQtV2lV6%2FaH75O09bnONv0MfH2m2amzqmV2pnEv0oUvJ%2BQJ4%2BAlP3wLyyVJvTFVTxpa3NZ1iCLdSSKuUk2MFdYx%2BT%2Bargu4yl4dTfylV%2FHFjLqScPKTkHe4NLluNbKzK0surejUAchZTnScSwMvsaidxu%2Fv3gSDF%2BR25k3dogbJOQt2zueMr2yvWb%2BJyZ%2F%2Fy7JGPStGK3zx3becMAtV81%2F7eUjPrpdRCaFPy7SjUigJ2m5vMz1GKLudabULZAsxBZeRwEvnYTt7CWUvOYIF0kT3uBQpIpgBNmH5EITQHmZmHgW4X1534oMPrFisoGOqUBizCPdteuLkJYoD8LXEogiQQ4W7WwXI42K653qSF2%2BIUvEBdjyupOY5fPN3r%2FuUr0J%2FtI%2FFamUZLrCJshEH2kj%2B%2FI9gF9%2FJFnl41tXlxUFRV9fB1lqED78MhtgEI2GoTFNhnJ7EVb1xrSqpzP0%2F%2FbUY5GwjySnfIvnerr%2FBS6A29XxFwS7Anvqpc4TSo0TYC0BS%2BSIuCpvql9Bk2n35WTeYsS3asR&X-Amz-Signature=758add305dffad76587ba8357f50ae0d4632cc62054d3628ce105f9bc20c1324&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G3R2O3G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID56TGB9FRN659N%2FvN9AuxhdRtEoVTn1utkuG0D4jZTzAiEAj%2FVaR7WMMse3TU0R%2B0wsXkjHKq%2F8nJsOmEUrPkVqe6Aq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDGY3cyogWp8LHO5QrircA0%2BQoZF43jFQLYjoVyAEkeIT7Gkf4LkahLtXXR5Dtm5NsBMXVXw0me8PZ321xj0mac%2FclRtVuNxFoP%2B02zSFduKYjB7RL8MG1qyo%2BS7KQAUvqwM6NywdRu6LPVyYkXcOz4lJ0KA7v%2BP22SFQbqvQ%2B03tXiMuRVowAGerFg0PaSTZJiXBpEmmy5rnf9BDbBltfGMdhTGxEiH7jEULSwNTyIK2B3Pyjpl%2BMoFiB72EW75voGfeqAgIA5zIbSf1CD8JsOuljYLNRE2qX5TczRquIgBVLsDg%2BWt%2BwpKs5e6I0yUOXPosV3A5CYDL5uK4MDwznWOf4iRNQtV2lV6%2FaH75O09bnONv0MfH2m2amzqmV2pnEv0oUvJ%2BQJ4%2BAlP3wLyyVJvTFVTxpa3NZ1iCLdSSKuUk2MFdYx%2BT%2Bargu4yl4dTfylV%2FHFjLqScPKTkHe4NLluNbKzK0surejUAchZTnScSwMvsaidxu%2Fv3gSDF%2BR25k3dogbJOQt2zueMr2yvWb%2BJyZ%2F%2Fy7JGPStGK3zx3becMAtV81%2F7eUjPrpdRCaFPy7SjUigJ2m5vMz1GKLudabULZAsxBZeRwEvnYTt7CWUvOYIF0kT3uBQpIpgBNmH5EITQHmZmHgW4X1534oMPrFisoGOqUBizCPdteuLkJYoD8LXEogiQQ4W7WwXI42K653qSF2%2BIUvEBdjyupOY5fPN3r%2FuUr0J%2FtI%2FFamUZLrCJshEH2kj%2B%2FI9gF9%2FJFnl41tXlxUFRV9fB1lqED78MhtgEI2GoTFNhnJ7EVb1xrSqpzP0%2F%2FbUY5GwjySnfIvnerr%2FBS6A29XxFwS7Anvqpc4TSo0TYC0BS%2BSIuCpvql9Bk2n35WTeYsS3asR&X-Amz-Signature=a8425c272957b3c2fff89e0fc8d7f8ca25b85e83abf3b8d8fbaa16b2d42ee767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
