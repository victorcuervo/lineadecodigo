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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EK5IGX3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVPMIaYIo6j04BFUbd8gmXK9P2kXwUBEpOVlI%2BNpDmjAiB4nAP%2BpuZED9o9SsrIyd%2F5TZAqvGfBhPKMs5naDoxr9Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMrxXeFIyXF%2BuCFd6nKtwDBw%2F6tVJOBdqyRqDj53UlECQXX4Oag3sN%2Biw%2BxNMWrBIqxxNvWlwI2yPui%2FYdMzs%2BQCuboJtQJMyos%2Fpp6rSUJQW%2FR1FkLHPYY2WPwetAP1fYI9Gh0hjwlz3ryA7t%2Fnqaz9sF7Fb50bpwT7piH9287xI8tjpGRJ87287UCCirSFmbz5TuYni25mzlkW%2FhS6AYoGZqf%2BBCo9fT%2BmcrMVfatrdoWRHIEJ1CtI%2BqhTKh%2BCLYpJdMo0teTG74421dBD8No8tyhj21Q0tzh218O%2F5FBgVOBTM4ki%2BETDEUI0654ojWycCEZylxxyOQ%2FCgG43eCoyIqDOnGoB%2FXh2vZ8voe522D1ora%2BXiSAJtOhqeiHkVKUM4BsYfKcxcR6hI1LIp%2Fo0JV%2Fq1db%2BteRQ0LPPnTEHYrLHYqRtwb4ardTyF%2B7m9kEeOooKFo%2Fg%2F%2FSsk51U62aGpjKUvxu8MydAj4Ik8g8r3HhtvdD6yOKAtchgz3zn7sqDxLbNhUnXZIHlKI2dM9ppaaHU4yoCrUu75Vajew7Z2Pwchyr1wpKe4idVbuOPBYgrzE6u0szsjc90g%2BTPC9YhlkxHo%2BHst7pCBi6nntIRcFWPg356GJCQfJFowwE3ZMrfOTiaiQ4DZS7a8wnsaKygY6pgEjX%2BpPAck0yBxtqp0bLouXwgr1yHMfdTLlA6kq9p%2F9jH3rhJZXSoishNyMtzTie2WUc8kUNZnC%2BbMSCXMr29DlwLaJ%2FTa5AOi%2Bg6NOCBuyqyoogoWZ8fo0H9O5jaYN8RsayAgY2ZFnuooEb3nx4ybL6U1xIMgIDaAg5rgEPkcJqGjxDkI3iGZGQJ8NuI%2BsDEa%2FTBZPuzxVARVu%2FzF3d2WEch0heaoH&X-Amz-Signature=ff2bc4617767c2964cba645d00c17bfa69b6693240df32313df89663aa2dc155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EK5IGX3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVPMIaYIo6j04BFUbd8gmXK9P2kXwUBEpOVlI%2BNpDmjAiB4nAP%2BpuZED9o9SsrIyd%2F5TZAqvGfBhPKMs5naDoxr9Sr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMrxXeFIyXF%2BuCFd6nKtwDBw%2F6tVJOBdqyRqDj53UlECQXX4Oag3sN%2Biw%2BxNMWrBIqxxNvWlwI2yPui%2FYdMzs%2BQCuboJtQJMyos%2Fpp6rSUJQW%2FR1FkLHPYY2WPwetAP1fYI9Gh0hjwlz3ryA7t%2Fnqaz9sF7Fb50bpwT7piH9287xI8tjpGRJ87287UCCirSFmbz5TuYni25mzlkW%2FhS6AYoGZqf%2BBCo9fT%2BmcrMVfatrdoWRHIEJ1CtI%2BqhTKh%2BCLYpJdMo0teTG74421dBD8No8tyhj21Q0tzh218O%2F5FBgVOBTM4ki%2BETDEUI0654ojWycCEZylxxyOQ%2FCgG43eCoyIqDOnGoB%2FXh2vZ8voe522D1ora%2BXiSAJtOhqeiHkVKUM4BsYfKcxcR6hI1LIp%2Fo0JV%2Fq1db%2BteRQ0LPPnTEHYrLHYqRtwb4ardTyF%2B7m9kEeOooKFo%2Fg%2F%2FSsk51U62aGpjKUvxu8MydAj4Ik8g8r3HhtvdD6yOKAtchgz3zn7sqDxLbNhUnXZIHlKI2dM9ppaaHU4yoCrUu75Vajew7Z2Pwchyr1wpKe4idVbuOPBYgrzE6u0szsjc90g%2BTPC9YhlkxHo%2BHst7pCBi6nntIRcFWPg356GJCQfJFowwE3ZMrfOTiaiQ4DZS7a8wnsaKygY6pgEjX%2BpPAck0yBxtqp0bLouXwgr1yHMfdTLlA6kq9p%2F9jH3rhJZXSoishNyMtzTie2WUc8kUNZnC%2BbMSCXMr29DlwLaJ%2FTa5AOi%2Bg6NOCBuyqyoogoWZ8fo0H9O5jaYN8RsayAgY2ZFnuooEb3nx4ybL6U1xIMgIDaAg5rgEPkcJqGjxDkI3iGZGQJ8NuI%2BsDEa%2FTBZPuzxVARVu%2FzF3d2WEch0heaoH&X-Amz-Signature=bc70666eb451c90dae89d1c9f363669f258c5bfae8fd126217f2193d4a1c69dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
