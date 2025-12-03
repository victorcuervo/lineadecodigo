---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYZRQSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDMIMDCJJI%2B6q8qVAiTBczVWTb%2Fp89Oc%2B1rptDS8kvmRAIgfFqlbu%2F710DH516gw9CoW13FjRayJJCG98DrDBrGsugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDO2Tk4hYM%2BMc0A1weyrcA5%2BNtX9Rz0W7%2BYgjRr9U9qV%2FJolcbGPoAQYLraSDwOKCrdMjG1JFeESjiYv8QbEWyUGNQQNaZTXn0p8RV%2FzEiZkTghKeewAXbX7gnIn7ouOcbmZzunjrd7TgKmPceMVj0LkhqJOdRoFxhgahg9n3xeHgGdNc7G1YkNvu1vkSPg5QF80f7Q4GlUgVuv9OTlP57za3uX8lgdF5ylo1nuUw0qKepbI57RRroP7JjHLzV74nq6DcjURQ7z8EzRB1Urmg2pb%2BjFG7r9tz%2BjpgVkpJlz%2FwX6Vt61%2BczsPhvQPdLnLySL7XrBAl9DlydWwADtrHPSZfjZdmyE%2Fnp6pCz1gcZbbKgCBk6e98lUKqxWJ5HlZQilhjDjSeCsoto2GNYupUCVQ30L93CLOaouMWReCLIoNulWo5XSnRPrNJveHkKj4aOk%2F03TQ2uZd2Lk%2FLDr3m64cDDGTSLNhROqGNaaH4PhVwnqIH1I%2F8OeD8UWxjmhhy%2FKGv%2F1Q%2BF7RrvQTsdehxFv%2FCMOsNCtCW2SeFOEtcVhRAbtpzyTqULKeqe2q424uSogRSTvaO23U005Ky6owGNdqoznYOvkyOt%2F8vW8Nmu0UahyG7lquUQ%2FRPXqqOdkT6Xyy6zXLY33M4LrC2MNDcwskGOqUBsETrBU8NUMkj2DeaBxuho0Qd%2BZHY5S6TJZmLngO8orn9gwUrghskrFUqRvJvN5iQMMRI4AL81x%2BvjsF%2FH0vnm41IwFYHXZfXheL5bqkkfS1XLPKuzkMmfFumebs61DHuxtZsStLUNc2yeHEnc0tRBJ%2FqyUirNe1LxXpclOwFszSVkXy8u4rQA7lqD2Rjr66Nf%2FlSDnqI1j%2FjBVPA8J636i86MJhn&X-Amz-Signature=a0b395bc0cf9e5ef1b1fad5b9ae854807142b236239b8db4bc369c9cddc22479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDYZRQSX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDMIMDCJJI%2B6q8qVAiTBczVWTb%2Fp89Oc%2B1rptDS8kvmRAIgfFqlbu%2F710DH516gw9CoW13FjRayJJCG98DrDBrGsugq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDO2Tk4hYM%2BMc0A1weyrcA5%2BNtX9Rz0W7%2BYgjRr9U9qV%2FJolcbGPoAQYLraSDwOKCrdMjG1JFeESjiYv8QbEWyUGNQQNaZTXn0p8RV%2FzEiZkTghKeewAXbX7gnIn7ouOcbmZzunjrd7TgKmPceMVj0LkhqJOdRoFxhgahg9n3xeHgGdNc7G1YkNvu1vkSPg5QF80f7Q4GlUgVuv9OTlP57za3uX8lgdF5ylo1nuUw0qKepbI57RRroP7JjHLzV74nq6DcjURQ7z8EzRB1Urmg2pb%2BjFG7r9tz%2BjpgVkpJlz%2FwX6Vt61%2BczsPhvQPdLnLySL7XrBAl9DlydWwADtrHPSZfjZdmyE%2Fnp6pCz1gcZbbKgCBk6e98lUKqxWJ5HlZQilhjDjSeCsoto2GNYupUCVQ30L93CLOaouMWReCLIoNulWo5XSnRPrNJveHkKj4aOk%2F03TQ2uZd2Lk%2FLDr3m64cDDGTSLNhROqGNaaH4PhVwnqIH1I%2F8OeD8UWxjmhhy%2FKGv%2F1Q%2BF7RrvQTsdehxFv%2FCMOsNCtCW2SeFOEtcVhRAbtpzyTqULKeqe2q424uSogRSTvaO23U005Ky6owGNdqoznYOvkyOt%2F8vW8Nmu0UahyG7lquUQ%2FRPXqqOdkT6Xyy6zXLY33M4LrC2MNDcwskGOqUBsETrBU8NUMkj2DeaBxuho0Qd%2BZHY5S6TJZmLngO8orn9gwUrghskrFUqRvJvN5iQMMRI4AL81x%2BvjsF%2FH0vnm41IwFYHXZfXheL5bqkkfS1XLPKuzkMmfFumebs61DHuxtZsStLUNc2yeHEnc0tRBJ%2FqyUirNe1LxXpclOwFszSVkXy8u4rQA7lqD2Rjr66Nf%2FlSDnqI1j%2FjBVPA8J636i86MJhn&X-Amz-Signature=22dc96047462feb04bd4a3ff14fc8b42e61cd81279d5fc10efccc96c4acade41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
