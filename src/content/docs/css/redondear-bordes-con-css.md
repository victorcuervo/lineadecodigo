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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCACADA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwyzWYyu0MBrAzoCQgry02XNQZIUUsX3NvE5dlWalHAiAak4QMJs2C9ci9Qna7hSF0CvwptsAmj%2Bo8MkNJjzDHGCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMuPMriPOOXrBBBtz9KtwDRKjfcB%2F5DlevmVVxCRCe54iW1OTTaFd9w72Xp7%2FGEqrVdOtRiVAtKAFQB4g%2BTcYY2w6%2FZN%2FroUhIIkPEZG%2FSQRTzsWHZRhF8CXA7%2BZWIkPLjUTfUPv3btTW6l5mfwMK6nTRNrt7lZUH3SebPamVVrSpGo1b7IHGn%2BpcTJ9uOkYVJnOYSSArR8URdsk%2FTp4VVwB0r4DpYSI2eXGI0S%2FfaustUrWb6ev15vvsx9YHCcJtGJjrZH0zpX9dPC0fTqC86yxr30bCfsBx1TjybqFlO7T%2FxR%2BGWToXCx2Iv370GuHYhywqrAOgaBpxGORnDyUGVzjHlJF2DH6KlQs1uT8YnEO7T0WtkcAn%2FFxZuW8iSokRvIOvXC1A1ftIjj8w0rFw6rlyKU1dMMUk4JDqgG2hXqcSN2auq4D%2BsR6LCVe2a%2FUXHUJ4Oei8Nz%2BGRtGkqomrfpsuFWevUHGQMjQ0MXxaZRLX%2FyXSExoEnF13VofkKQtdDcu1fusyzkQfTfRVnFW23Re32Wel9bBck7enC1us%2B9BmJBlH3RcIeONWIQ7ZHECSHs07smGxkZco%2FVNrXZqxoV8Qr8o8pAoiOG6e%2B4BtqqzNnwn2nQrMNPh2%2Btl3mNVlCIfX0ccEo7mUvwrYwoMvRyQY6pgHdRzumrwgvZbbqL9Hbx1dPMKZAYfSN3AzW4Jk8AS8UKaq7PK5ge6wgIgrx8SSqv8faPPPGI8%2BY8o91TsxekQtbhY4crp7JaQhl3kVoJi3j2nxpRRMFHKF9OoCoVwq4s3c9Ckt3x8rdzxfRkVUQa0ewMbkCzAcxEMab%2FODK3Z21KqJXOKYWJxjODK%2BtR3Io3SjDOzir0vQUwEoi1TqP7zCTa7%2BlHELv&X-Amz-Signature=8716bb65f07871e12eff363924b89a3deca35f58a573dd3a154b15cb187a2b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSCACADA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhwyzWYyu0MBrAzoCQgry02XNQZIUUsX3NvE5dlWalHAiAak4QMJs2C9ci9Qna7hSF0CvwptsAmj%2Bo8MkNJjzDHGCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMuPMriPOOXrBBBtz9KtwDRKjfcB%2F5DlevmVVxCRCe54iW1OTTaFd9w72Xp7%2FGEqrVdOtRiVAtKAFQB4g%2BTcYY2w6%2FZN%2FroUhIIkPEZG%2FSQRTzsWHZRhF8CXA7%2BZWIkPLjUTfUPv3btTW6l5mfwMK6nTRNrt7lZUH3SebPamVVrSpGo1b7IHGn%2BpcTJ9uOkYVJnOYSSArR8URdsk%2FTp4VVwB0r4DpYSI2eXGI0S%2FfaustUrWb6ev15vvsx9YHCcJtGJjrZH0zpX9dPC0fTqC86yxr30bCfsBx1TjybqFlO7T%2FxR%2BGWToXCx2Iv370GuHYhywqrAOgaBpxGORnDyUGVzjHlJF2DH6KlQs1uT8YnEO7T0WtkcAn%2FFxZuW8iSokRvIOvXC1A1ftIjj8w0rFw6rlyKU1dMMUk4JDqgG2hXqcSN2auq4D%2BsR6LCVe2a%2FUXHUJ4Oei8Nz%2BGRtGkqomrfpsuFWevUHGQMjQ0MXxaZRLX%2FyXSExoEnF13VofkKQtdDcu1fusyzkQfTfRVnFW23Re32Wel9bBck7enC1us%2B9BmJBlH3RcIeONWIQ7ZHECSHs07smGxkZco%2FVNrXZqxoV8Qr8o8pAoiOG6e%2B4BtqqzNnwn2nQrMNPh2%2Btl3mNVlCIfX0ccEo7mUvwrYwoMvRyQY6pgHdRzumrwgvZbbqL9Hbx1dPMKZAYfSN3AzW4Jk8AS8UKaq7PK5ge6wgIgrx8SSqv8faPPPGI8%2BY8o91TsxekQtbhY4crp7JaQhl3kVoJi3j2nxpRRMFHKF9OoCoVwq4s3c9Ckt3x8rdzxfRkVUQa0ewMbkCzAcxEMab%2FODK3Z21KqJXOKYWJxjODK%2BtR3Io3SjDOzir0vQUwEoi1TqP7zCTa7%2BlHELv&X-Amz-Signature=b78abc5833019c49217420a72c3b5a8ec8dcab565dd821561db9c9a224767505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
