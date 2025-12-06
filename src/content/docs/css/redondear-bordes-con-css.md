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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2N7GY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvRQB6DuvYolMGDroThetdWLcowNHJ5wtCrU6qYiKV4QIhAO4n9CVeD%2FSQte%2B79v5e2D2hslFlNeFUHd5Qg%2BehcyyUKv8DCHEQABoMNjM3NDIzMTgzODA1IgwAXwZ%2BRAPikq4OsLwq3AMyjUU425faGzerVVw9pKX7hej4uT8mKOtyIC59x13aRIUUtnxwr8rrr1XxNa4v4CCpXtpBS6hHJZV6cSl0NSdsEcOZrS3N%2BFvMXwlumDVi9UkkC6zp%2BPDHxw14eDlc6uDKOOPkQ%2F2cnfKnyQIwxcJyK0FSbbnBbFM00Vs7oQk1jYJY%2BKWs1Uf9Y78iW1U9PDmReNzksFvLr0kOLtZIQuLuwVLgDQaidUnfHuRQ2siOTDf0Aw2oMGXUQWMCZLkRwjdURVQf3LfLsMyARMmRSpBMuXx0SMRra%2BGWFBVfCEXiVo0aOnFTpXHDvS3i9cZAddFj8931bXqqtBJ%2BB4Z95yI9XgJxdhHptF8O74kgCI211%2F6gn1iHinzjbo%2Fn6IpvIFxy4ndcx9MY60CpTP%2FGvS0hSZcpmNUkUXC1grfnU4JowlTd2dj4jvdvYcBL6m7%2Fy0puyltdqOpIila1qWPUalMj3JWQ%2BdUhuo%2FUcyVRPPTpUj%2BZzNKtBlkjdggSbsy%2FDlFOBpk8YsrGv3waXkSPCmAImZb7%2FmruIoDieHgqhj4PUQkB6Vrx5jzGNylM5S%2BWQv6PMgkDmHz3RdTE7%2F2ZVhLyMFYH5zb%2BbfBInqEBAF1AkG2Z1WbYm1Vxi8Pw1TCgvM%2FJBjqkAfRyZJdjrR15NDiUCXRyuwnLT87yueg01NVOdkg6pJKvlGUCLbFtYWCReIRxtebLQB43CNhKhwoCY9r%2FgdiS%2FwLn4i%2FNPA7HT8VHaY0ot%2F8ftG%2FzjJCFAgRqu0V1mDVnVif3enZb%2FkGP57Ys3R8%2B3NBJ8WUkNRNsvV9FocYA885M8bdvjbXrPUTCTjzawhwdvmw8DfQLpidrsJpr2OEUnn%2BqnDoh&X-Amz-Signature=43c80a955bf5d8f89899b6f462dbef40efd77144bdc4079b7f9c1873b4482c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2N7GY3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvRQB6DuvYolMGDroThetdWLcowNHJ5wtCrU6qYiKV4QIhAO4n9CVeD%2FSQte%2B79v5e2D2hslFlNeFUHd5Qg%2BehcyyUKv8DCHEQABoMNjM3NDIzMTgzODA1IgwAXwZ%2BRAPikq4OsLwq3AMyjUU425faGzerVVw9pKX7hej4uT8mKOtyIC59x13aRIUUtnxwr8rrr1XxNa4v4CCpXtpBS6hHJZV6cSl0NSdsEcOZrS3N%2BFvMXwlumDVi9UkkC6zp%2BPDHxw14eDlc6uDKOOPkQ%2F2cnfKnyQIwxcJyK0FSbbnBbFM00Vs7oQk1jYJY%2BKWs1Uf9Y78iW1U9PDmReNzksFvLr0kOLtZIQuLuwVLgDQaidUnfHuRQ2siOTDf0Aw2oMGXUQWMCZLkRwjdURVQf3LfLsMyARMmRSpBMuXx0SMRra%2BGWFBVfCEXiVo0aOnFTpXHDvS3i9cZAddFj8931bXqqtBJ%2BB4Z95yI9XgJxdhHptF8O74kgCI211%2F6gn1iHinzjbo%2Fn6IpvIFxy4ndcx9MY60CpTP%2FGvS0hSZcpmNUkUXC1grfnU4JowlTd2dj4jvdvYcBL6m7%2Fy0puyltdqOpIila1qWPUalMj3JWQ%2BdUhuo%2FUcyVRPPTpUj%2BZzNKtBlkjdggSbsy%2FDlFOBpk8YsrGv3waXkSPCmAImZb7%2FmruIoDieHgqhj4PUQkB6Vrx5jzGNylM5S%2BWQv6PMgkDmHz3RdTE7%2F2ZVhLyMFYH5zb%2BbfBInqEBAF1AkG2Z1WbYm1Vxi8Pw1TCgvM%2FJBjqkAfRyZJdjrR15NDiUCXRyuwnLT87yueg01NVOdkg6pJKvlGUCLbFtYWCReIRxtebLQB43CNhKhwoCY9r%2FgdiS%2FwLn4i%2FNPA7HT8VHaY0ot%2F8ftG%2FzjJCFAgRqu0V1mDVnVif3enZb%2FkGP57Ys3R8%2B3NBJ8WUkNRNsvV9FocYA885M8bdvjbXrPUTCTjzawhwdvmw8DfQLpidrsJpr2OEUnn%2BqnDoh&X-Amz-Signature=583394529d5a55cbb6c8d8922fe0b412fad64e3f7d045f088d5e309b7562a549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
