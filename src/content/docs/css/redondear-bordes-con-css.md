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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTFJ4O6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAXvNc%2F%2FRqhTuHgSJyERLE77ysHv7k%2FtTClnGNtnbEwIgW5gRaftcF2HbBgwArxvG4WcAj0UDy8clJ2HT8KeJ5xYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhoZukuVeqqnCx4ByrcA83ik4cgnod%2FlLHRTO0Lxktvdt6tpJyeS4DF%2BN%2BdndR1%2FAxkmHkUI4p3%2FkMehLHHXzwjKgxhDZx1brsZ%2FuvYibr8qCT6fFCCVWugGfYLdBKyGZ%2F1vC4fqJdwxD592OcuDawn1ZfCSPKEUJsyLgMFs9nUX4RDzSbfaCMNGb6bgkPaHkeA9wTzB1b2H7mR7C3VP97cpw5V8Dj74onGxAh5Q7JYZd5CP%2FXxit1ZO3pRjW3KPUejWfKT2VQLaSFRqv8nIHgeKp7wyI2mYGWuDljrpm7dLynUYAAV7vkuPFmVVYy55GLI19mkBuKgLdFaRAqa8MzuKGRXL4V92DVLjfa0iI3xwGHryxifUlYpA4efTGpFnojFjj%2BCZ%2Fhsgf7jkgqw2EK2G792gkZ63C0smuVQQIzeFTT3HeBo7JzHslHK1RNdz%2B6KL6D7CxMQIjMquKh47FsK3odrnK6UzgfZCqOMXB1EGxNneZJxvZLI7Acq266nt1mi1eLdJezRfhCLFIEyjwaqwwISTb8RHEYJ%2B4oHMUCRcmozGdlqU6CMsJwsWEhN8QSaxHsWyNANIANEEwlLS6dM2A%2B4i9WDWfhUlehjk3oAFDPSoww1FkrJrUmTY3ZYD4M%2Buza53ggHvdgOMJH90skGOqUBjzfewDzadCg%2FimNdgNbbVY4tKeSPWKmrU0XRJ08DkuwSdN9at%2BkdWu6OEFiKMODyfnvQnm8ogTRJ7yQOA%2F4kPetb8yQYV8%2FDTENCjT%2BUT9G%2FuhDEFs5WaOU7fOGbhuujrd4g6lCPWnnFU44riiG6UyfjjOqh2uNA%2F0pCi7ZPPDW4m8HwUOztKj0SS6NTM61d0fsIPpGllBiz20j2fSE2lPi%2BM%2B66&X-Amz-Signature=d11ae7246ab1c6c7e48902edf26b369ce039dd6008e6989072527841fdbfde7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGTFJ4O6%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChAXvNc%2F%2FRqhTuHgSJyERLE77ysHv7k%2FtTClnGNtnbEwIgW5gRaftcF2HbBgwArxvG4WcAj0UDy8clJ2HT8KeJ5xYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPhoZukuVeqqnCx4ByrcA83ik4cgnod%2FlLHRTO0Lxktvdt6tpJyeS4DF%2BN%2BdndR1%2FAxkmHkUI4p3%2FkMehLHHXzwjKgxhDZx1brsZ%2FuvYibr8qCT6fFCCVWugGfYLdBKyGZ%2F1vC4fqJdwxD592OcuDawn1ZfCSPKEUJsyLgMFs9nUX4RDzSbfaCMNGb6bgkPaHkeA9wTzB1b2H7mR7C3VP97cpw5V8Dj74onGxAh5Q7JYZd5CP%2FXxit1ZO3pRjW3KPUejWfKT2VQLaSFRqv8nIHgeKp7wyI2mYGWuDljrpm7dLynUYAAV7vkuPFmVVYy55GLI19mkBuKgLdFaRAqa8MzuKGRXL4V92DVLjfa0iI3xwGHryxifUlYpA4efTGpFnojFjj%2BCZ%2Fhsgf7jkgqw2EK2G792gkZ63C0smuVQQIzeFTT3HeBo7JzHslHK1RNdz%2B6KL6D7CxMQIjMquKh47FsK3odrnK6UzgfZCqOMXB1EGxNneZJxvZLI7Acq266nt1mi1eLdJezRfhCLFIEyjwaqwwISTb8RHEYJ%2B4oHMUCRcmozGdlqU6CMsJwsWEhN8QSaxHsWyNANIANEEwlLS6dM2A%2B4i9WDWfhUlehjk3oAFDPSoww1FkrJrUmTY3ZYD4M%2Buza53ggHvdgOMJH90skGOqUBjzfewDzadCg%2FimNdgNbbVY4tKeSPWKmrU0XRJ08DkuwSdN9at%2BkdWu6OEFiKMODyfnvQnm8ogTRJ7yQOA%2F4kPetb8yQYV8%2FDTENCjT%2BUT9G%2FuhDEFs5WaOU7fOGbhuujrd4g6lCPWnnFU44riiG6UyfjjOqh2uNA%2F0pCi7ZPPDW4m8HwUOztKj0SS6NTM61d0fsIPpGllBiz20j2fSE2lPi%2BM%2B66&X-Amz-Signature=b72aef8fdb5701e1e5a7e59f4ea0ee6ed5e2b6601d2a6f34e083e39f834198d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
