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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJI6TBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjcEqTZ1Sm2VmnKrLCtCEYbVKN%2Breffj6HtvGPELdSwIgP%2F3KSKhZ5qWH2T00YhnCRCg0gzHp2hckTFaGCHmk9QMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIDY7V7379e4lW2lMCrcAxk5k7ip7vIWM9%2FsqTjINK4I79YpJuKvJHCUu3sw%2BguSyZWBFYsVJwXRYkXpIgdzpGRHg8IeuQlCG5Y%2F2nu6HPme3hEKcuo0e9gZ32cfglxhbqCegpLuecTUebMqDj%2FDh1%2FUWcr3a4bKH7DRQoPnLJk6PemIYqap53JGktm31TJVyviEjtKOfa6pQZjqNpKHswLYCTZZESBp%2BVvt%2FFHKAxdKZuaEzioI9WKQN0o%2FcO1H2%2FwgX%2BtcFgFEI5ClYpuwq0bCltLYyy0IfJ9orZrauG4sFMJiVtC%2FnQLNWIFd1qC4ZG51E6gEeGLzgyEUd4Prj6ABw8HT5QR3m%2BUeI%2BVG2Xw4a8jFycEqK7qjLykE4p76E%2Fv%2F6iRMLGZox6tbITT6c5jjce%2F4NJd2db6e7xhi%2B6Ael1vEACuRsGGx1gtliK0pFt8qyBf9agTEDPistneQzCbfCPyDhnmlA6tjg3FVmrqfOKy8UmvcbJzin7fJU814hfNX8KEfZHGQtTtE5RAkHCIp%2Beywsi8%2BTP6MJMgyKuqsyRWkvGryDeATRpVKwY2w4jmqylvbwsPT%2FVJ1PNz6uNbmfblnMkBDEMC%2BX9KuhiX%2Fpc5WlkM9jf4esQh5xIeHtgos4SDPHbAvB%2BZgMKbqiMoGOqUB83FwQBYWA6mAyuXOz9kRazjFuIOpyCTQf94w9t%2BAHe5GL1T%2BIDUBCD7EVFNUCqvW4tuPglJiN4DCvmOa4SyIvEeMELT5BaJ71%2BhOayzGDXJPXsSYXM%2Bsoj2fD1jfyJyJs9knuHRmFWEaosBIvCVZMLcIFhDOrLV%2Fdqb%2BS2Q7CJMoWWW4ca02%2FVXkvBATxP8b03IL5nL0dF3xA%2BCT3jTI3JV%2Bzz6u&X-Amz-Signature=df16c6a60c40421f2e97d989b7c1f4347e8c7aab7d30856d33b2808a880fd8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKJI6TBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHjcEqTZ1Sm2VmnKrLCtCEYbVKN%2Breffj6HtvGPELdSwIgP%2F3KSKhZ5qWH2T00YhnCRCg0gzHp2hckTFaGCHmk9QMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIDY7V7379e4lW2lMCrcAxk5k7ip7vIWM9%2FsqTjINK4I79YpJuKvJHCUu3sw%2BguSyZWBFYsVJwXRYkXpIgdzpGRHg8IeuQlCG5Y%2F2nu6HPme3hEKcuo0e9gZ32cfglxhbqCegpLuecTUebMqDj%2FDh1%2FUWcr3a4bKH7DRQoPnLJk6PemIYqap53JGktm31TJVyviEjtKOfa6pQZjqNpKHswLYCTZZESBp%2BVvt%2FFHKAxdKZuaEzioI9WKQN0o%2FcO1H2%2FwgX%2BtcFgFEI5ClYpuwq0bCltLYyy0IfJ9orZrauG4sFMJiVtC%2FnQLNWIFd1qC4ZG51E6gEeGLzgyEUd4Prj6ABw8HT5QR3m%2BUeI%2BVG2Xw4a8jFycEqK7qjLykE4p76E%2Fv%2F6iRMLGZox6tbITT6c5jjce%2F4NJd2db6e7xhi%2B6Ael1vEACuRsGGx1gtliK0pFt8qyBf9agTEDPistneQzCbfCPyDhnmlA6tjg3FVmrqfOKy8UmvcbJzin7fJU814hfNX8KEfZHGQtTtE5RAkHCIp%2Beywsi8%2BTP6MJMgyKuqsyRWkvGryDeATRpVKwY2w4jmqylvbwsPT%2FVJ1PNz6uNbmfblnMkBDEMC%2BX9KuhiX%2Fpc5WlkM9jf4esQh5xIeHtgos4SDPHbAvB%2BZgMKbqiMoGOqUB83FwQBYWA6mAyuXOz9kRazjFuIOpyCTQf94w9t%2BAHe5GL1T%2BIDUBCD7EVFNUCqvW4tuPglJiN4DCvmOa4SyIvEeMELT5BaJ71%2BhOayzGDXJPXsSYXM%2Bsoj2fD1jfyJyJs9knuHRmFWEaosBIvCVZMLcIFhDOrLV%2Fdqb%2BS2Q7CJMoWWW4ca02%2FVXkvBATxP8b03IL5nL0dF3xA%2BCT3jTI3JV%2Bzz6u&X-Amz-Signature=4ed0857e0ef7720766c235b8ac9a5274fd7f3128f3d12958bc88578070e5bb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
