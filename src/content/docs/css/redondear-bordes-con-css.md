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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOISK36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0adq9G0aSz%2BaDtpkmvAdOtCPUYJWidpEmTmqFrWgevwIhAO2J3mV6yw7In%2FkioGtPZCTD8MhV1LN9%2B7ttovaBsSxrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3qJ9P6bTMGAWOto8q3AO2%2BWvDG%2FOaqors1iaYbytmpfujGHJYhTPU%2Fbp1tA%2BI6qhw0JzV733J5UfC%2FLQeS26eTLKoHQQEX16fiNLV8tNoCYdsEFopQiwah96Ls9wpJwz0zmB9r3DcVWWkQybVuyrOO3t9GuTALmJBsBEve62wBzjsEA7VwqTiU3DN3%2FqDLk%2F%2BqzTDWRvp4Lq54bAyQbpC1NybMMEOhFawAMakmJkcahszx%2Bh%2BGsyA9hv3OfgqoKyLjMrEnt83QtsPDe%2FBbBH9OqAZRFWiYYijr%2FD7ZXgQhvOr%2BJS6AhiTfywKcm%2FwFIUFOe5kG4bTDqAcAMCCGDD2T%2FO8fWGooGQIwn%2BEauPpNtvFbp2tHpo0VUI%2Fs%2BRNow3AkwTpQgBtXPv7s2bWACD3FVnCwEIWdn5pAuaLJyRM8pncvP31PjXEWwwq3lf87o0fsci8bDwFVw8yTWydofCMkIf5HwBFCvXCOEXGrOZYr2boFBC6T5aJqw9Gf9J64PwDBEKGFaDA%2BfS445LvtAKPF6p5s6A9O3ekBtpfFv3es%2FW1ot45MQAesEe%2BpKYWaDJORkct7pKilozE%2BwdqgdaHkpLInPnVmJrPVHcnGJFwegTBWufjr4dhruWMl2tK2hCanGjvK6%2BFth07dTDKmtXJBjqkATtvZcK10V7OekbfYl58TvjRT4dRzmWsZ8KHUDseTE18ypHPxc10fwDmG5UKqKcJCQMyS1W0OjunoWfAhKkxakNrZs58fQwWTclvfzOw3rs5VTMtRfs9DhW4JFGsfFrOr3r4AoRcCSl%2F70zDIVHVxOADPKmIJjn0N8VQAlI9%2FiYltpP%2BDVbk8T%2BSraMeOLBVfqiBGSRF4NC06rNV1WuxOydsA0E6&X-Amz-Signature=7e25abbed8c1ad4e924fbdf3348cf7b6aae3c4ff98e189d18a80d79b2c1ec29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLOISK36%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0adq9G0aSz%2BaDtpkmvAdOtCPUYJWidpEmTmqFrWgevwIhAO2J3mV6yw7In%2FkioGtPZCTD8MhV1LN9%2B7ttovaBsSxrKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3qJ9P6bTMGAWOto8q3AO2%2BWvDG%2FOaqors1iaYbytmpfujGHJYhTPU%2Fbp1tA%2BI6qhw0JzV733J5UfC%2FLQeS26eTLKoHQQEX16fiNLV8tNoCYdsEFopQiwah96Ls9wpJwz0zmB9r3DcVWWkQybVuyrOO3t9GuTALmJBsBEve62wBzjsEA7VwqTiU3DN3%2FqDLk%2F%2BqzTDWRvp4Lq54bAyQbpC1NybMMEOhFawAMakmJkcahszx%2Bh%2BGsyA9hv3OfgqoKyLjMrEnt83QtsPDe%2FBbBH9OqAZRFWiYYijr%2FD7ZXgQhvOr%2BJS6AhiTfywKcm%2FwFIUFOe5kG4bTDqAcAMCCGDD2T%2FO8fWGooGQIwn%2BEauPpNtvFbp2tHpo0VUI%2Fs%2BRNow3AkwTpQgBtXPv7s2bWACD3FVnCwEIWdn5pAuaLJyRM8pncvP31PjXEWwwq3lf87o0fsci8bDwFVw8yTWydofCMkIf5HwBFCvXCOEXGrOZYr2boFBC6T5aJqw9Gf9J64PwDBEKGFaDA%2BfS445LvtAKPF6p5s6A9O3ekBtpfFv3es%2FW1ot45MQAesEe%2BpKYWaDJORkct7pKilozE%2BwdqgdaHkpLInPnVmJrPVHcnGJFwegTBWufjr4dhruWMl2tK2hCanGjvK6%2BFth07dTDKmtXJBjqkATtvZcK10V7OekbfYl58TvjRT4dRzmWsZ8KHUDseTE18ypHPxc10fwDmG5UKqKcJCQMyS1W0OjunoWfAhKkxakNrZs58fQwWTclvfzOw3rs5VTMtRfs9DhW4JFGsfFrOr3r4AoRcCSl%2F70zDIVHVxOADPKmIJjn0N8VQAlI9%2FiYltpP%2BDVbk8T%2BSraMeOLBVfqiBGSRF4NC06rNV1WuxOydsA0E6&X-Amz-Signature=99c71ce6d6bd7e6907e2b42a5ebce97c301668b74780983a2860235edfa90ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
