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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CHMS6M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2F7xoxA4TQRyTeiIgDcWrfKwTTZ3jySeqQvfeG1bEwJAiEAz%2FEt%2FX%2FR7M6k8bchZijh8ii3CvzVgpcHhx1fnpWPaPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe3AiO1139w1RgDEircAx3LO6PY%2FbAtXhjXiNpd%2BW9Erl5lE81BiMpfofCXjMx2wv%2B6zrsz%2FE7oWI5jMfdQ2zvPbmoQc4N4mluJ2ISVuhp9LwILgULlhzblLel3Chi9KBznTyn0PqG%2BQQR%2BmghRjT8iEMIn5ut%2Bsp7nq%2F7lNP0zpgmP6IxtYdgfzdWmnMJ65wHtACZTzuj2A108T5Q0i2ymAkL4k3u597vSuwtR3IQhwdZk%2F32bIrAzhN53H3CGkNMUoQx26mZ1OZ4myg0kn%2FBKSUekpylfoNd%2Bz0geltwPnAH4NJ%2BaE3eSgDkGX2XSaThOvaHChAjbcljEdci6VSdinP369goGVb2Z3p1%2F0b%2BNe2B32wTDhTQ6E1M3B3WIXpK%2FOPiHjY6o%2BwWWsxQDcqZpdncM1%2FXqcXxkykA8SVp%2FbAiKFHtu2ql0LbYiFPV%2FaH4wCRk2nrNcDP85J8kZxl3F5AUwrBwkLGLIZIbwyqP71waqw84v7CxZY85MgtF36ZddR6RSSUYRj4hPD%2FxQIQGU3mwV7TpPMOEqvwBP%2F4NkwzjcH%2F%2BENUkjqJA52qYGfAbpwHeT8J5SEPbLthiTxacTpAbd80CdOiv2PGwXNn7stLlG7rR3FeaO3vTO0kVwo54SpT1sqBe6AKG%2BMNn90skGOqUB%2FfDHr8qgqccwJgg5CmI6WCTXalbTnnvvvY5CVVLSthuqkZ9FCJwmu3DShEcA6mZAinl4vgpotoLIGJpKlSeT%2FX0oMwyjvCK4eh4XfDt7zrt8xutsf14nfC2l%2B5BBQwim%2BTNDPxea6Dy7Lzn%2FkjA%2FOJ1hDkTKZYNbIWSuwiItM9XiED1o7qbFH4ZoSY8Pa%2Fg0LFlyHolS9qGqPFkLBphw4hyz%2BkvO&X-Amz-Signature=efd58c73489e32c1bef12e57a5222b813784646cf842cf62092bf2467c564e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6CHMS6M%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T015116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2F7xoxA4TQRyTeiIgDcWrfKwTTZ3jySeqQvfeG1bEwJAiEAz%2FEt%2FX%2FR7M6k8bchZijh8ii3CvzVgpcHhx1fnpWPaPgqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe3AiO1139w1RgDEircAx3LO6PY%2FbAtXhjXiNpd%2BW9Erl5lE81BiMpfofCXjMx2wv%2B6zrsz%2FE7oWI5jMfdQ2zvPbmoQc4N4mluJ2ISVuhp9LwILgULlhzblLel3Chi9KBznTyn0PqG%2BQQR%2BmghRjT8iEMIn5ut%2Bsp7nq%2F7lNP0zpgmP6IxtYdgfzdWmnMJ65wHtACZTzuj2A108T5Q0i2ymAkL4k3u597vSuwtR3IQhwdZk%2F32bIrAzhN53H3CGkNMUoQx26mZ1OZ4myg0kn%2FBKSUekpylfoNd%2Bz0geltwPnAH4NJ%2BaE3eSgDkGX2XSaThOvaHChAjbcljEdci6VSdinP369goGVb2Z3p1%2F0b%2BNe2B32wTDhTQ6E1M3B3WIXpK%2FOPiHjY6o%2BwWWsxQDcqZpdncM1%2FXqcXxkykA8SVp%2FbAiKFHtu2ql0LbYiFPV%2FaH4wCRk2nrNcDP85J8kZxl3F5AUwrBwkLGLIZIbwyqP71waqw84v7CxZY85MgtF36ZddR6RSSUYRj4hPD%2FxQIQGU3mwV7TpPMOEqvwBP%2F4NkwzjcH%2F%2BENUkjqJA52qYGfAbpwHeT8J5SEPbLthiTxacTpAbd80CdOiv2PGwXNn7stLlG7rR3FeaO3vTO0kVwo54SpT1sqBe6AKG%2BMNn90skGOqUB%2FfDHr8qgqccwJgg5CmI6WCTXalbTnnvvvY5CVVLSthuqkZ9FCJwmu3DShEcA6mZAinl4vgpotoLIGJpKlSeT%2FX0oMwyjvCK4eh4XfDt7zrt8xutsf14nfC2l%2B5BBQwim%2BTNDPxea6Dy7Lzn%2FkjA%2FOJ1hDkTKZYNbIWSuwiItM9XiED1o7qbFH4ZoSY8Pa%2Fg0LFlyHolS9qGqPFkLBphw4hyz%2BkvO&X-Amz-Signature=48c07619524bff320ed16a27dcf9f83eed432b555cff2f64d6786feaa71a2bb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
