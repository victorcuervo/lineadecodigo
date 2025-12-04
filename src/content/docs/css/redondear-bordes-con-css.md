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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIXXFLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCkIly5HfFYCvN8LHdeWLGZCo2X9ukxkctIrUgHGaEntgIgaAVtm8QswM%2B6ebTROhVoDnqs3VabXoHT7l7mhERiE8kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBUtCycxFcH%2BYC65oSrcA0srFJGAE1WhHZYgh1nydI%2BraJp6lwo%2BGLGTyqZW7YEFpKAnXO8ip6m34INHQMGAMRMn6Y%2F3B7iKm7UtT%2FVdHW%2F9jUCVu%2Bkgi3oI%2FA4pRbe%2FeUziJhWcJOXCYyMC%2Bn1ygb7IqgB6WZgjVMLayTYH93NEIcpZbvqpawB3QGIFGyplM%2BKT5bZnWERjPo6LfQDelwdvMMf%2FTvQJurZMFfIMyjOVV2dCSrft3qBSIx7lOWtquedsWm%2F3YwMeLdXytksfCv5VUIVqScWuVh8jTJTZLZ1JtYHG%2FoyQy%2FStcIHyEKZWP%2FkKTK4oGaUk8OsqS13gKVOqy%2Fz0BPLi6Ct6zlMQOfUfQE4LrRdI5ztRdAgBSNY1pEBQO3V32rXI2Z%2BpzNXLK2c%2FcHZ9OHDkAQxkjHai07foHy3uqKcu8IcVhfLc1iTxSvB9hX2Uq1K7HozzGBL30Q2dus9sT5FCsPwcwfLoLj4blsdunsdmEESyBcKrlr1wQMM%2Fnb8ETcOLdiWKy0LYWNS%2Bz4CriCro4imGFp1Es87QkRG3fFHH7w4yDkkp0C6t6ulvKu9Cf24L5rirlwb7C1k2WydVOY5yTHoQ%2F%2BKeKFtzaFj2CgyUzZyWnxMcIsmUlOvOHyXejGG6ja6lMO%2FKxMkGOqUB88qFljSQOzSQY6aoEA8UdRbv016LXPiqCBE%2FTOrBtsHlR%2FV0PWnjrnWsQk%2BXiNeiAF7v7Cm6ACad%2FoHhPgshKY90IbqoFyYw4dReyptF%2BIc7jdeYU2BIv44LfNdQSqId7U%2BIyotX73Gu1dEoriJshIanDPo19d3r4KjPYwMW60E317ywUVcslztzzyr0aQsmn4NR0PS34eD0ooVdWjMnuzdhey0m&X-Amz-Signature=d3e680faef2999d3c744e81ab822bb6aaa128c738f075e55d5dd8209a9ceeb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CIXXFLI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCkIly5HfFYCvN8LHdeWLGZCo2X9ukxkctIrUgHGaEntgIgaAVtm8QswM%2B6ebTROhVoDnqs3VabXoHT7l7mhERiE8kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDBUtCycxFcH%2BYC65oSrcA0srFJGAE1WhHZYgh1nydI%2BraJp6lwo%2BGLGTyqZW7YEFpKAnXO8ip6m34INHQMGAMRMn6Y%2F3B7iKm7UtT%2FVdHW%2F9jUCVu%2Bkgi3oI%2FA4pRbe%2FeUziJhWcJOXCYyMC%2Bn1ygb7IqgB6WZgjVMLayTYH93NEIcpZbvqpawB3QGIFGyplM%2BKT5bZnWERjPo6LfQDelwdvMMf%2FTvQJurZMFfIMyjOVV2dCSrft3qBSIx7lOWtquedsWm%2F3YwMeLdXytksfCv5VUIVqScWuVh8jTJTZLZ1JtYHG%2FoyQy%2FStcIHyEKZWP%2FkKTK4oGaUk8OsqS13gKVOqy%2Fz0BPLi6Ct6zlMQOfUfQE4LrRdI5ztRdAgBSNY1pEBQO3V32rXI2Z%2BpzNXLK2c%2FcHZ9OHDkAQxkjHai07foHy3uqKcu8IcVhfLc1iTxSvB9hX2Uq1K7HozzGBL30Q2dus9sT5FCsPwcwfLoLj4blsdunsdmEESyBcKrlr1wQMM%2Fnb8ETcOLdiWKy0LYWNS%2Bz4CriCro4imGFp1Es87QkRG3fFHH7w4yDkkp0C6t6ulvKu9Cf24L5rirlwb7C1k2WydVOY5yTHoQ%2F%2BKeKFtzaFj2CgyUzZyWnxMcIsmUlOvOHyXejGG6ja6lMO%2FKxMkGOqUB88qFljSQOzSQY6aoEA8UdRbv016LXPiqCBE%2FTOrBtsHlR%2FV0PWnjrnWsQk%2BXiNeiAF7v7Cm6ACad%2FoHhPgshKY90IbqoFyYw4dReyptF%2BIc7jdeYU2BIv44LfNdQSqId7U%2BIyotX73Gu1dEoriJshIanDPo19d3r4KjPYwMW60E317ywUVcslztzzyr0aQsmn4NR0PS34eD0ooVdWjMnuzdhey0m&X-Amz-Signature=02fab8ab132c7a3383bd8051a06640d97bbfeb2c1cfe83ed555c93c0389f470d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
