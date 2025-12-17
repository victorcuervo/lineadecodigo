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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOOLV4G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYX0dOYIXuodcfmSXVM7w%2F%2BWwjhOz7FZo7IcB67skTdAiEAqRTmxSlBQWqDcWVfUU7R7Epg5eJb4nZJ2cyZo5u3bFwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaY05zqOQ5zhJf13CrcAzP8CTp4mXadd6sc17pzH2m5PqWsByIwh9Gbe2awk9HsrVTOg802UFey3CDBttVIyXJKr0Dpko8ohmFrTeI3ojvIAuDuOTvJwbQSFzdTm5n%2F0lejVTwbbXkUIWBSzWOeaPyvZbMcxglIG7mqpj%2FAHv72e9mwjACaDgappsY57X%2FW2SUNBbkka1mAGQAUwxFjHhW9V77yg7tVwqeImBAk%2B0%2BEnH1so9vJwXYyDoNWYkW05JagVW8rh2lVSTiPhOZl7ibNpmMuC6qcO%2Fg2t6AlSH8Ku3qdUXTh3Y%2F5j%2BvgPNJyBGeMrleiONPmzAzzmHCjv%2FkeoRfvxSRxPJa3aIHXIjePD9RJx6btfymh1Rjv04BttNqo2pMM5HdI9x2seeMFbG1KS6dKEL%2F71qqSuGxp4NguXabWTAMkA4qa6LZPIEE71uWze5wGu0cITRb2n4VL53mFG0FjgVnTBwy2D1RkMpTXgRHjKy62KoFJlXSFvahO7pIVwkoYaB6TAkTVd%2F5EqBG%2BFSY4vL%2Fyv%2BIhgH3IoZ4qHiT8zmrzm4ZO9bMbsitnPghyEWxLje%2FDOoYBx0z9xGxNKG%2B2TxnFV0Z0SBJhwJOcW7rIRvH5oxQnfsqPgG1M4MsKSUev4xFZbo7jMLmgi8oGOqUBJBOIqOwMW%2B2XaykfXXoscoZHZ39rUWQGyutLQoKwxw9dPzptedi3GIuOOvULwnH6BW6YeLxezYzxxPpaX4r0STuLfNcnbXNcD8Nkvvsofz%2Fw4FT4C11vzxQ21coiE4KFzQkp1%2Fj3Q0zcR4hU9sz1HV8d9ISxo2LVpSdXlwOEQ%2Bpki%2B491X19Lih%2BCZhFGrCouROWH7qi%2F%2Fosuy0KbOMwyQtTTDQa&X-Amz-Signature=4d1be75083f7c1eb7493348972d7a8c5aa7f03f03e340e9b8cbefddd4339dcac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TOOLV4G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYX0dOYIXuodcfmSXVM7w%2F%2BWwjhOz7FZo7IcB67skTdAiEAqRTmxSlBQWqDcWVfUU7R7Epg5eJb4nZJ2cyZo5u3bFwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLaY05zqOQ5zhJf13CrcAzP8CTp4mXadd6sc17pzH2m5PqWsByIwh9Gbe2awk9HsrVTOg802UFey3CDBttVIyXJKr0Dpko8ohmFrTeI3ojvIAuDuOTvJwbQSFzdTm5n%2F0lejVTwbbXkUIWBSzWOeaPyvZbMcxglIG7mqpj%2FAHv72e9mwjACaDgappsY57X%2FW2SUNBbkka1mAGQAUwxFjHhW9V77yg7tVwqeImBAk%2B0%2BEnH1so9vJwXYyDoNWYkW05JagVW8rh2lVSTiPhOZl7ibNpmMuC6qcO%2Fg2t6AlSH8Ku3qdUXTh3Y%2F5j%2BvgPNJyBGeMrleiONPmzAzzmHCjv%2FkeoRfvxSRxPJa3aIHXIjePD9RJx6btfymh1Rjv04BttNqo2pMM5HdI9x2seeMFbG1KS6dKEL%2F71qqSuGxp4NguXabWTAMkA4qa6LZPIEE71uWze5wGu0cITRb2n4VL53mFG0FjgVnTBwy2D1RkMpTXgRHjKy62KoFJlXSFvahO7pIVwkoYaB6TAkTVd%2F5EqBG%2BFSY4vL%2Fyv%2BIhgH3IoZ4qHiT8zmrzm4ZO9bMbsitnPghyEWxLje%2FDOoYBx0z9xGxNKG%2B2TxnFV0Z0SBJhwJOcW7rIRvH5oxQnfsqPgG1M4MsKSUev4xFZbo7jMLmgi8oGOqUBJBOIqOwMW%2B2XaykfXXoscoZHZ39rUWQGyutLQoKwxw9dPzptedi3GIuOOvULwnH6BW6YeLxezYzxxPpaX4r0STuLfNcnbXNcD8Nkvvsofz%2Fw4FT4C11vzxQ21coiE4KFzQkp1%2Fj3Q0zcR4hU9sz1HV8d9ISxo2LVpSdXlwOEQ%2Bpki%2B491X19Lih%2BCZhFGrCouROWH7qi%2F%2Fosuy0KbOMwyQtTTDQa&X-Amz-Signature=caf5f3ef67c28bf7740433ca7ac14022acbc8a464490a90d4b5f2528624b532f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
