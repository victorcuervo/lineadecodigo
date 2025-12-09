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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VCVZG6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvMA%2F%2FAk2Fow8hOy5H3rPIXVHnKS4C7nRxeEeGandjLQIgPI2X2n4cWHNMVLdXJUobPuE6ywOZAIEv3but%2BA6OTrQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkB3GZrCsAjNvbzHyrcA2FA8WTjKzzXchNA0uhdyj4%2B0iF3wCFqI4MxNMasUyQr4UtzUqlJJjthmZVrR2aQQQTz9KCuJjDtN92bqqNeXjTEmVRlMNYXqQH83to%2FsGe%2Fiau0n%2Fn1fZxX4wJtH7ODxedG74wL6cWFY%2F2qGQPC3f9K1P6OvIQK5vZxz4i6k62U7gUff2V12KZJaJPl1VJO%2FtRMubvwehsuZ1TzGRN%2F%2FtziGo44bDfWZifc7y48Z0cGiRfGQyJdS6f26mud3dInBgVb3kasNYUv3EEdfE0JxJaLnmf8Su8hfxIL0SPsfdabo2odruAWFFIQcK3cAxf4Bgg95%2BKP0k3AgwJUT%2BIl4B%2F4qIOIyOICCkFA%2FqT12nGuhVZYCfjul3sHgwZjC%2BNn37aDwtfv4YzGSOKJfsy1sY8vPzyTrIkRrYr75KRpoHO0LxBbaHBLBSuxdtuy00JYyOkeQbZctHVRELdYeuMEQdSa9BYDxGHwFrLr173hmpvYyYyPTaOnv%2B3PAUMF0eRE2o7PycBZufyVNLAt9UFIlk294cKeZGQH4eJLEEa%2BsYBX9ZZoQZVPZgp9LX2WYKLPPiAjAnLbaPJkreqqzHsclkJ24VcnY298XaW8wiEWKlb3OPmv0foV%2BvajZzxpMJLK3skGOqUBMxKJYHM1rjevdIMq0o02F09yj%2BbXqY0lcB5RAhZT7ij0WLffPcW1ICj1x%2BVJ65Ppj9PWWJg7rdok9nSJK8TlKe1yyG%2BH%2B6ehROULXSlemYluf6Ep3s7VpqDDHrOVjFV9%2BtJXVRgrSq2qeNgwLj8BupiktRiqIhhozJvnfrQDPQuUUGJgFQ3R7ZekioAOBZIfBBdoR71S7ZczTf%2FuRqWiddaiYnD%2B&X-Amz-Signature=34ed641325d8a1422324325e7266b12844bdf8075ac2df49462d68d8156c30fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7VCVZG6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvMA%2F%2FAk2Fow8hOy5H3rPIXVHnKS4C7nRxeEeGandjLQIgPI2X2n4cWHNMVLdXJUobPuE6ywOZAIEv3but%2BA6OTrQqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEkB3GZrCsAjNvbzHyrcA2FA8WTjKzzXchNA0uhdyj4%2B0iF3wCFqI4MxNMasUyQr4UtzUqlJJjthmZVrR2aQQQTz9KCuJjDtN92bqqNeXjTEmVRlMNYXqQH83to%2FsGe%2Fiau0n%2Fn1fZxX4wJtH7ODxedG74wL6cWFY%2F2qGQPC3f9K1P6OvIQK5vZxz4i6k62U7gUff2V12KZJaJPl1VJO%2FtRMubvwehsuZ1TzGRN%2F%2FtziGo44bDfWZifc7y48Z0cGiRfGQyJdS6f26mud3dInBgVb3kasNYUv3EEdfE0JxJaLnmf8Su8hfxIL0SPsfdabo2odruAWFFIQcK3cAxf4Bgg95%2BKP0k3AgwJUT%2BIl4B%2F4qIOIyOICCkFA%2FqT12nGuhVZYCfjul3sHgwZjC%2BNn37aDwtfv4YzGSOKJfsy1sY8vPzyTrIkRrYr75KRpoHO0LxBbaHBLBSuxdtuy00JYyOkeQbZctHVRELdYeuMEQdSa9BYDxGHwFrLr173hmpvYyYyPTaOnv%2B3PAUMF0eRE2o7PycBZufyVNLAt9UFIlk294cKeZGQH4eJLEEa%2BsYBX9ZZoQZVPZgp9LX2WYKLPPiAjAnLbaPJkreqqzHsclkJ24VcnY298XaW8wiEWKlb3OPmv0foV%2BvajZzxpMJLK3skGOqUBMxKJYHM1rjevdIMq0o02F09yj%2BbXqY0lcB5RAhZT7ij0WLffPcW1ICj1x%2BVJ65Ppj9PWWJg7rdok9nSJK8TlKe1yyG%2BH%2B6ehROULXSlemYluf6Ep3s7VpqDDHrOVjFV9%2BtJXVRgrSq2qeNgwLj8BupiktRiqIhhozJvnfrQDPQuUUGJgFQ3R7ZekioAOBZIfBBdoR71S7ZczTf%2FuRqWiddaiYnD%2B&X-Amz-Signature=738a3094c078904eb79c41c6e61e691a2ba9fbf62effc9a4677cfb2c919f1ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
