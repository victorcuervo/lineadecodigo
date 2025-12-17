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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGGVN4P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWsCKxA5Xliv9oHdUgwxH7XUnXX7vO9GjaoXCYdOk5AIgHBu65a6uItQDe%2FcKNUv%2FUGdkdr0Vp8BMxsmHkqseZjUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMAdG8VFF%2BVJKYTSZSrcA7zronkFdZeGCpeIf1BeHp5vRIpSEAur9eTpgBrOsPfASJirWIo8fhSyEXapOcVvrwHoO3Y0rr%2B2KOhZf0PK9Ni93mWCfjiqYhdZnLBKrPVzMvT3WEiaWTjsgyeRXCMAFH7IqFWIGc3y3TNG5FkTd3UhwOkegdRm8PoM%2FHNXvcDPRikOLsuuVy6oRhSF9axSua4aG0vVJBhvIPwGPEyFpBHlh7HCjTovv%2F17Rd289%2F02OaxD3LtLg6D0YbvPhig0vC5psQZvMle3JLjstbBebbF3LfGJLld5ozCHdPWlKtpK%2B6JEkBeAi2w%2BDJLOAd%2F0MjqROig%2B8A%2FO85PtsYouYixDtVUAYhMs2ou4fHJ%2BgjCZRRBdb%2FPjnQLleqp%2B33aHbMrx3v7ncmJo%2FKK5L9X3h9yfRBi26YsTzrPI%2Bqvadk8PfS1FePOl4rzx3b191bZELdoTmi%2BuxxHWl557gtvWVcTX9LvY5K9mkQ7OLOgpzkB%2BW4XuxvCTVrrpVgbBwnu1X3Xx7J6nV5AO8RUgGiLKBqg9jVJV%2BoxfxFe6gufQdKjtphaad0QU5FP2YaSP3LsGenNT4y%2BrcKSw%2F1wOFcxlGt1ki6BeKAxu0eH5ymOt%2Bc3yEjl%2FoTN8aUjmtmI1MO7vicoGOqUBRPokIhPS%2F7VhACLMXpDB5y57U%2FHt0E2heQIeaxlucR%2FPhWNm%2BcM%2BCbAUmF1DJQpXMve4bevYClwkj4gRxQHxIJM0DKQ0rzswhUrsNzzLCZO%2FBsPBQH3ytPzO11jdc05bSGv1g2xrn9NJ%2FovIINUB%2FV1m4R934NYykJ0cCl%2FG8u2RuWb3iJZJpqzFfm8YEztQSxEeaYil2tUtqLDS6wptGkBvqmcX&X-Amz-Signature=6bec3893450f2f204ae450db4a65ba814a30b469eda343d16ca762a03a4665c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSGGVN4P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZWsCKxA5Xliv9oHdUgwxH7XUnXX7vO9GjaoXCYdOk5AIgHBu65a6uItQDe%2FcKNUv%2FUGdkdr0Vp8BMxsmHkqseZjUq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDMAdG8VFF%2BVJKYTSZSrcA7zronkFdZeGCpeIf1BeHp5vRIpSEAur9eTpgBrOsPfASJirWIo8fhSyEXapOcVvrwHoO3Y0rr%2B2KOhZf0PK9Ni93mWCfjiqYhdZnLBKrPVzMvT3WEiaWTjsgyeRXCMAFH7IqFWIGc3y3TNG5FkTd3UhwOkegdRm8PoM%2FHNXvcDPRikOLsuuVy6oRhSF9axSua4aG0vVJBhvIPwGPEyFpBHlh7HCjTovv%2F17Rd289%2F02OaxD3LtLg6D0YbvPhig0vC5psQZvMle3JLjstbBebbF3LfGJLld5ozCHdPWlKtpK%2B6JEkBeAi2w%2BDJLOAd%2F0MjqROig%2B8A%2FO85PtsYouYixDtVUAYhMs2ou4fHJ%2BgjCZRRBdb%2FPjnQLleqp%2B33aHbMrx3v7ncmJo%2FKK5L9X3h9yfRBi26YsTzrPI%2Bqvadk8PfS1FePOl4rzx3b191bZELdoTmi%2BuxxHWl557gtvWVcTX9LvY5K9mkQ7OLOgpzkB%2BW4XuxvCTVrrpVgbBwnu1X3Xx7J6nV5AO8RUgGiLKBqg9jVJV%2BoxfxFe6gufQdKjtphaad0QU5FP2YaSP3LsGenNT4y%2BrcKSw%2F1wOFcxlGt1ki6BeKAxu0eH5ymOt%2Bc3yEjl%2FoTN8aUjmtmI1MO7vicoGOqUBRPokIhPS%2F7VhACLMXpDB5y57U%2FHt0E2heQIeaxlucR%2FPhWNm%2BcM%2BCbAUmF1DJQpXMve4bevYClwkj4gRxQHxIJM0DKQ0rzswhUrsNzzLCZO%2FBsPBQH3ytPzO11jdc05bSGv1g2xrn9NJ%2FovIINUB%2FV1m4R934NYykJ0cCl%2FG8u2RuWb3iJZJpqzFfm8YEztQSxEeaYil2tUtqLDS6wptGkBvqmcX&X-Amz-Signature=f794a270b218cc9a5fe8fa5b88e8f592a99d05ec2f4886d09aa568428fa37757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
