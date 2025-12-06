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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCDINLU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8lw6ShSjNizKbSW2lG%2Bf7kDYQyAUG6zaLRLrtbyW3YAiBl%2FB7fNlCCe%2FeVU%2BWu6oOlJMpobIdN7rzIQ6Z1x0OZ1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMjhPPeFZJATlWJwj2KtwDnTTgICGoUEY9REgCZTAMI6U5YLNFlMwZ%2FHZ93iXKl%2F6bGQxmUPBJaURqWxSwuee%2FLh0uq3MIlW2Le6kqRVG4mVBXTjlzOwXQf3S87untuTuDkXPSQqW0xToQXr8EHRMoE0cQbNFanUcgRttHxkh4ReOUp6s%2FTYG63UW7IsXqNLhANEKiL1V8uC3X1deYUfCWPLJ6IGCRw9mEgFEzKrOb0TkFZLxN5nvqDHn%2Bj5yjKab7ImKoY49yvRW4sTOhYwsTH9QSInWsxwG%2FT2%2B9tBS9mmM17qH4HrcHSmGXvdJNrQzE8TeBynwBL1tZF5%2FxQbsn95BZpIy1C1HDcSMEqLd734zsjCpjNJuOOPxs5RIBdD7Zz3ElJ0CzEadTx%2FEjVkK0rkCb3%2B12u3REYT%2Bkh9eOzYJFS%2BnQO3R0hnvi4%2Bd0Ruuty4IVvtCE7%2BqS3B%2FeJGMtkbMHlbBRYu35EBo35eG3ohq8qcTUHrF3V8uD4AnPr7eC3a5ivHsqbbvCrZMF51JkThen3v8HRFhlvXjo6WMdEMHlS%2BQCivt0CTOa5t%2BUcaMCRrB%2FI1uo57PFk075zf9LXVm2ZZMY%2BJyuKcWAPNEvEg24ibGQpZSBbgMdVoZiKcWA68vyfer3AJaHYiYw0%2FzOyQY6pgFhcxjX75It81UAKt6gQwWkw%2F2eXi770qn3SRpGqcUrFhiZNwq608t%2BOCz%2BBjGJjfUWhqKyTRyNxr7FaKYGK7GHLTn8n2j4YOwtrzvRmJq0kHwOBulYdMBnKGyjNhF577RA9GBJFA2z9hFx2Lt3czwT2uum3K52Hz%2Fhms1VApa1xN1BchnPvzd%2Fbv7usO2TD4C6osYgQwd36%2FLAGzqJPyXlnrCJ1bnj&X-Amz-Signature=65ef4088f1066ab1687d7705ef94cdc3e327062db9c350e7783b5fdc11591642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JCDINLU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8lw6ShSjNizKbSW2lG%2Bf7kDYQyAUG6zaLRLrtbyW3YAiBl%2FB7fNlCCe%2FeVU%2BWu6oOlJMpobIdN7rzIQ6Z1x0OZ1ir%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMjhPPeFZJATlWJwj2KtwDnTTgICGoUEY9REgCZTAMI6U5YLNFlMwZ%2FHZ93iXKl%2F6bGQxmUPBJaURqWxSwuee%2FLh0uq3MIlW2Le6kqRVG4mVBXTjlzOwXQf3S87untuTuDkXPSQqW0xToQXr8EHRMoE0cQbNFanUcgRttHxkh4ReOUp6s%2FTYG63UW7IsXqNLhANEKiL1V8uC3X1deYUfCWPLJ6IGCRw9mEgFEzKrOb0TkFZLxN5nvqDHn%2Bj5yjKab7ImKoY49yvRW4sTOhYwsTH9QSInWsxwG%2FT2%2B9tBS9mmM17qH4HrcHSmGXvdJNrQzE8TeBynwBL1tZF5%2FxQbsn95BZpIy1C1HDcSMEqLd734zsjCpjNJuOOPxs5RIBdD7Zz3ElJ0CzEadTx%2FEjVkK0rkCb3%2B12u3REYT%2Bkh9eOzYJFS%2BnQO3R0hnvi4%2Bd0Ruuty4IVvtCE7%2BqS3B%2FeJGMtkbMHlbBRYu35EBo35eG3ohq8qcTUHrF3V8uD4AnPr7eC3a5ivHsqbbvCrZMF51JkThen3v8HRFhlvXjo6WMdEMHlS%2BQCivt0CTOa5t%2BUcaMCRrB%2FI1uo57PFk075zf9LXVm2ZZMY%2BJyuKcWAPNEvEg24ibGQpZSBbgMdVoZiKcWA68vyfer3AJaHYiYw0%2FzOyQY6pgFhcxjX75It81UAKt6gQwWkw%2F2eXi770qn3SRpGqcUrFhiZNwq608t%2BOCz%2BBjGJjfUWhqKyTRyNxr7FaKYGK7GHLTn8n2j4YOwtrzvRmJq0kHwOBulYdMBnKGyjNhF577RA9GBJFA2z9hFx2Lt3czwT2uum3K52Hz%2Fhms1VApa1xN1BchnPvzd%2Fbv7usO2TD4C6osYgQwd36%2FLAGzqJPyXlnrCJ1bnj&X-Amz-Signature=a076083b8b23289c53193a1acd6b742f9c254bf287a6a4f524bcc9c9c44c74a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
