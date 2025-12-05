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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMYIIYS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkewx52PB9L440pTOPZeZEv4JSrm2I3i3F0eRO4%2Bn%2FSAiAj8TnN1MgLWFQKM8hFilL2NC%2FIQioVgF8aM1nOidAa4Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrCqT%2B9oxSVjpDgeZKtwDUOHjesJnx3CdyCzL%2FmQKg%2Bb7Md4FNtJxgCfhWAXPWO3WWMd7g45wkCGcif7Ud8TGIMYejeHQprsvYYKRdU1UCzn9262dEm49GgfRK802k43tHnxckcMBrkUvxUNH2ZWE3W4KAJoewyjep1hlvm%2FaguQneRQFN0YiwITdJqF8VGJUHjLyvfJsitwzZ0svzjpsJfokqI8mJVoSSKqeunrdDK9c6ZVsmpix0JDoug2vrHxU2%2F788TWIl7yxjKxWVi4Yqh%2BvbczWoI8zhojJFzc76XSH%2BvAUV6P0ity6VPZKkaU50zc3bywqAn%2F3KN92KuDTOvzmWeNQxLM9DU6wXvI2eZnmTk6mTalv70G%2FzteplWhVZOI3GnAnhjPq1WJdlAUsQEsmeEVzqh%2BpVkNQDdIULmcY5JhlxDhb%2BbBHfRxMm81bwwXcPUaSitQfwqDcbdLCPsbnIR%2FvzKIDFYuewtrxSGA3Yvgz76h7jMMUkbcdWheeopW6O9gJ8JIMx9DPaHhyfu2nFEpiGR7s3jtja4RKbg9Xk5BmuQe%2FUzEjBBO3i7WeeCghM39L7k2Mw8dROG2Bz6bjqMdvEKL7HT9i%2Br3FlUbwHoe7IQBy0jhqaETzCS58gPmpi1ASS5MOaWIwkvjLyQY6pgHYSjqwXtv%2By4R3l77TUhoot11IFeohLMo6sgR%2BckCW32IkCgIzKisFMP0YYHyWdZug2TxGnssZ1FRfYOok2y86NaoGsUZHevmK1zK1%2BzxvRN%2FmjngopfnTknpJ%2BvMIFeP86p1KH0P%2FFr5JDegCTppHrV1GHMNWBwCUSglxmZ44bWMNUTtOvJqxGmQ0kcpU82icit6rSA%2BFLgQgOfeBcjEcNxyWwT9H&X-Amz-Signature=1adb92965c06f61f12af1b74500a62d9375b3bd02949e34b0cf62dd29b18d13c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROMYIIYS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGkewx52PB9L440pTOPZeZEv4JSrm2I3i3F0eRO4%2Bn%2FSAiAj8TnN1MgLWFQKM8hFilL2NC%2FIQioVgF8aM1nOidAa4Cr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMrCqT%2B9oxSVjpDgeZKtwDUOHjesJnx3CdyCzL%2FmQKg%2Bb7Md4FNtJxgCfhWAXPWO3WWMd7g45wkCGcif7Ud8TGIMYejeHQprsvYYKRdU1UCzn9262dEm49GgfRK802k43tHnxckcMBrkUvxUNH2ZWE3W4KAJoewyjep1hlvm%2FaguQneRQFN0YiwITdJqF8VGJUHjLyvfJsitwzZ0svzjpsJfokqI8mJVoSSKqeunrdDK9c6ZVsmpix0JDoug2vrHxU2%2F788TWIl7yxjKxWVi4Yqh%2BvbczWoI8zhojJFzc76XSH%2BvAUV6P0ity6VPZKkaU50zc3bywqAn%2F3KN92KuDTOvzmWeNQxLM9DU6wXvI2eZnmTk6mTalv70G%2FzteplWhVZOI3GnAnhjPq1WJdlAUsQEsmeEVzqh%2BpVkNQDdIULmcY5JhlxDhb%2BbBHfRxMm81bwwXcPUaSitQfwqDcbdLCPsbnIR%2FvzKIDFYuewtrxSGA3Yvgz76h7jMMUkbcdWheeopW6O9gJ8JIMx9DPaHhyfu2nFEpiGR7s3jtja4RKbg9Xk5BmuQe%2FUzEjBBO3i7WeeCghM39L7k2Mw8dROG2Bz6bjqMdvEKL7HT9i%2Br3FlUbwHoe7IQBy0jhqaETzCS58gPmpi1ASS5MOaWIwkvjLyQY6pgHYSjqwXtv%2By4R3l77TUhoot11IFeohLMo6sgR%2BckCW32IkCgIzKisFMP0YYHyWdZug2TxGnssZ1FRfYOok2y86NaoGsUZHevmK1zK1%2BzxvRN%2FmjngopfnTknpJ%2BvMIFeP86p1KH0P%2FFr5JDegCTppHrV1GHMNWBwCUSglxmZ44bWMNUTtOvJqxGmQ0kcpU82icit6rSA%2BFLgQgOfeBcjEcNxyWwT9H&X-Amz-Signature=11772f8469a352c15de0cae94237f02a988cebb82c6740dfbaa88ed1d46d5e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
