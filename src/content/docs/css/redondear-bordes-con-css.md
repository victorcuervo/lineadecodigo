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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZ4CY4E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDeQQCDZIzCz9lpCvsdyPTmZ53jVpeHzqoAZIw0k%2FQtmAIhAIDbFsn16jylziXvuzmUNVqzofrXMkgBL5PNrzDRmVfaKv8DCEUQABoMNjM3NDIzMTgzODA1IgxtZyjKogJygoH3jYoq3AM%2F4zNQCieAoFytaWOUb%2FBusOxXfUbNUbGMJNej66HZp1CaJN1dqaoAjCwWYxc%2FTwF2NxAuPyqqICZGyZxW9uRF6YF9xmplnR1RaMqp47dWCOCl8hDS3ezXs0ooZ3Tqju3Kxu9%2F5G1e0c1NOC%2FZrHsTlPzcYfP%2F7LiuEoGLvbXDY9XVVumNiqNdebQA842MEsIfPtRUejIos6aqi6dxnhtZ406jZ1QGuObWfCd6XbRx7JhF7K%2BxfiOgBNoU2xbjw0YR%2FdSVbyCGcPgT4O5yG6qdtsN8kCZDGFwpiN69W%2FTFvtsbuh17845xeDHOBB0VtgaEMZKTYvVHBew3NKCq7e%2F6pIivY%2BTZy2v2u1gmBFSoJlCTPyoPGLRcmfXxh%2FfSltDg1S99c0gt9zh0jeF5Hhua9Yv0WMB4oRlCDRrbhhvLe2zrZ1Yj6OfO3V21RLx1Xv6qr36seDgIwbiB12BWdmMobo%2B0zcHKtY7XZl4zTuMYlA6HFBKTWUcxXSjrM3kj1KspvQye8vXP%2FQlZdUZ6gI4M8%2Bi%2FHXJbIrjKPeYibz3G8OVPPlOBVEvSGTY1ibsMsAMq48cCNHB9x9jb3XzITJCjEAgq6SF6ANRBuWHGig7hlkTPEHU4BBycfAkh9TDS58XJBjqkAStM6hvE5BxCrUcT%2BHG%2FAh9YcycbD2ViHnFMtWXLfGobaTkv3VWHjzWKdh5LST9kwggayyvJBDZC96%2BewpLwvyzbBdEheOppwQ2Cc24qDDFYpsVfSVqUgo5iiqzCs5hXJurdB%2Ffep1QjKEenjFfUfIz9T4VAq8TW1mlhd8y8t6D3zaLXUfVclo9R0aRqWCL%2FySSjBpCSGFou0uCar75Ps1RxXeHr&X-Amz-Signature=e53078f2aba29bcea5507ad3b276fd1507dc95897c91e80042a8cd396b856075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JZ4CY4E%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDeQQCDZIzCz9lpCvsdyPTmZ53jVpeHzqoAZIw0k%2FQtmAIhAIDbFsn16jylziXvuzmUNVqzofrXMkgBL5PNrzDRmVfaKv8DCEUQABoMNjM3NDIzMTgzODA1IgxtZyjKogJygoH3jYoq3AM%2F4zNQCieAoFytaWOUb%2FBusOxXfUbNUbGMJNej66HZp1CaJN1dqaoAjCwWYxc%2FTwF2NxAuPyqqICZGyZxW9uRF6YF9xmplnR1RaMqp47dWCOCl8hDS3ezXs0ooZ3Tqju3Kxu9%2F5G1e0c1NOC%2FZrHsTlPzcYfP%2F7LiuEoGLvbXDY9XVVumNiqNdebQA842MEsIfPtRUejIos6aqi6dxnhtZ406jZ1QGuObWfCd6XbRx7JhF7K%2BxfiOgBNoU2xbjw0YR%2FdSVbyCGcPgT4O5yG6qdtsN8kCZDGFwpiN69W%2FTFvtsbuh17845xeDHOBB0VtgaEMZKTYvVHBew3NKCq7e%2F6pIivY%2BTZy2v2u1gmBFSoJlCTPyoPGLRcmfXxh%2FfSltDg1S99c0gt9zh0jeF5Hhua9Yv0WMB4oRlCDRrbhhvLe2zrZ1Yj6OfO3V21RLx1Xv6qr36seDgIwbiB12BWdmMobo%2B0zcHKtY7XZl4zTuMYlA6HFBKTWUcxXSjrM3kj1KspvQye8vXP%2FQlZdUZ6gI4M8%2Bi%2FHXJbIrjKPeYibz3G8OVPPlOBVEvSGTY1ibsMsAMq48cCNHB9x9jb3XzITJCjEAgq6SF6ANRBuWHGig7hlkTPEHU4BBycfAkh9TDS58XJBjqkAStM6hvE5BxCrUcT%2BHG%2FAh9YcycbD2ViHnFMtWXLfGobaTkv3VWHjzWKdh5LST9kwggayyvJBDZC96%2BewpLwvyzbBdEheOppwQ2Cc24qDDFYpsVfSVqUgo5iiqzCs5hXJurdB%2Ffep1QjKEenjFfUfIz9T4VAq8TW1mlhd8y8t6D3zaLXUfVclo9R0aRqWCL%2FySSjBpCSGFou0uCar75Ps1RxXeHr&X-Amz-Signature=96f8f2f22fdb9b54befe3a4c5899d37af56998fac5033877a67de559781fe239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
