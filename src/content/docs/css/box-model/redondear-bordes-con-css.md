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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKZ3TOG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6isLLkjwtxQVoghnY0BN9j1P7LBP9%2BjoUTdrI7kCXCAiBwr9I6HMMTRhpcwDESCCjTtg206HHvkSrOn4QfWT63qir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMKk79bnMj84AMrci9KtwDYEVNV3QFnpo9vu4R0vAwqh84CFaDfRM6je4TSO1gdkRHSXDP6mB5nZBX1tL4ojgAWaCDXcBO5e4rV6MHvMIwTyiiCT3i54s1ffYa9qhIfjT71wrTbBuQAz2PcnMOsDU5%2Bvf3ZkLSFU8Db%2FJ5GGMXkxCAPhwdJZn5D2aT%2F15PoKe8Nl4KDeHIUCrELfVnUa%2FNI9fM76jhFRFy8EQiN5LgOjQ6uU5eCQjtwal3wzg9EQHlLer3%2Bt2CkAAjo0nP1PlIofdsNlpY3QECblT%2FxQMcqv6XbdmXUdpXAMnUj3HcWbaL7FR4CJVBYnuMbQ2V9YIBYnPita31xIyqpW%2Fe9E5FHcvrzI38IhrwLNwqD7Qsu5ru8UOORHg1xXBd%2FKeaiYTcD0qt4Y72sk%2Fs7b5QRmxVd0ZmlO18Y8rr18d3iK1pDw3iufFbQYL89%2B8xbQc%2BGhH%2F1VUDJmOmimMMko5henZuIj%2FE%2Br2bthGzQ6QJU%2Bx7xF4YS%2F2Th7%2BspQmgdr9o1%2FWG6%2FnDBUyS52GyX0%2BH%2B8tB74p27x1gHLbZyWntuzHjfumkR4%2FkARYh0bo8rb0JT3aQk3Zjqioz%2BIx4qUHSr7fraVSybOK9l%2FgqhnYSWBdyfOr8lIrcCeN%2FlQuf%2Bzgwm4%2BKygY6pgG7DZeUI56HOUoe9u1bghAPsAY30aWkFjpIon3j6mtaX%2FkYneh6hxEJpGQ6RJZxetgJPDZnPLzbXpVv%2F%2FeVbf%2BwTmHYJDrdOS0oguOszKeGkiN3mGs1I26mFMrq7%2B9wgYv1jURBCL4ORTIaVbR%2Bz9CZJmA56D8jEC%2FlUxhrZ5u88eYWyE0O0L47sE2Zcm8CahoZRjHy%2BL3CggcuZvkJeRLxESUzCj%2Fo&X-Amz-Signature=e2123ea2e564a87ae2c1b2ca7f61bafba8b033aef047c5756e1a5b8bba1d98f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKZ3TOG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6isLLkjwtxQVoghnY0BN9j1P7LBP9%2BjoUTdrI7kCXCAiBwr9I6HMMTRhpcwDESCCjTtg206HHvkSrOn4QfWT63qir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMKk79bnMj84AMrci9KtwDYEVNV3QFnpo9vu4R0vAwqh84CFaDfRM6je4TSO1gdkRHSXDP6mB5nZBX1tL4ojgAWaCDXcBO5e4rV6MHvMIwTyiiCT3i54s1ffYa9qhIfjT71wrTbBuQAz2PcnMOsDU5%2Bvf3ZkLSFU8Db%2FJ5GGMXkxCAPhwdJZn5D2aT%2F15PoKe8Nl4KDeHIUCrELfVnUa%2FNI9fM76jhFRFy8EQiN5LgOjQ6uU5eCQjtwal3wzg9EQHlLer3%2Bt2CkAAjo0nP1PlIofdsNlpY3QECblT%2FxQMcqv6XbdmXUdpXAMnUj3HcWbaL7FR4CJVBYnuMbQ2V9YIBYnPita31xIyqpW%2Fe9E5FHcvrzI38IhrwLNwqD7Qsu5ru8UOORHg1xXBd%2FKeaiYTcD0qt4Y72sk%2Fs7b5QRmxVd0ZmlO18Y8rr18d3iK1pDw3iufFbQYL89%2B8xbQc%2BGhH%2F1VUDJmOmimMMko5henZuIj%2FE%2Br2bthGzQ6QJU%2Bx7xF4YS%2F2Th7%2BspQmgdr9o1%2FWG6%2FnDBUyS52GyX0%2BH%2B8tB74p27x1gHLbZyWntuzHjfumkR4%2FkARYh0bo8rb0JT3aQk3Zjqioz%2BIx4qUHSr7fraVSybOK9l%2FgqhnYSWBdyfOr8lIrcCeN%2FlQuf%2Bzgwm4%2BKygY6pgG7DZeUI56HOUoe9u1bghAPsAY30aWkFjpIon3j6mtaX%2FkYneh6hxEJpGQ6RJZxetgJPDZnPLzbXpVv%2F%2FeVbf%2BwTmHYJDrdOS0oguOszKeGkiN3mGs1I26mFMrq7%2B9wgYv1jURBCL4ORTIaVbR%2Bz9CZJmA56D8jEC%2FlUxhrZ5u88eYWyE0O0L47sE2Zcm8CahoZRjHy%2BL3CggcuZvkJeRLxESUzCj%2Fo&X-Amz-Signature=abb7550cf624abd4ec8b0d55a814cd564d3776e8bd22daeefe99822b91c104cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
