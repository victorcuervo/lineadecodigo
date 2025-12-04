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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AD2JKXG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDayHiQKk0c0LxhlK%2B8%2F4r8dOOcj1d2ymF%2BeGVverfhkAIgRrWiyZeZOdOdiDoHWWgkx2PDvjTdfQrRS8%2F0HS2StA0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMxerU3kj3qPkSB9UCrcA1t26xsMDVnn2JUfDE6mWOu43ioW%2BkA6XxAaeGIunwgrzHx7a7PhUneun%2FDr2GmUQxDmJSHXBBE9PRTziyyuOs9qe1Ct8CfuRmwiOYxnWfcGj8j5t8x04Tk%2FBJSqREM%2B%2BMtSvYXMO0%2FtUE1AtxH3tEVv5VmUMDLRw%2FoBnnO%2B5raK5sBlrfyOU8QWQeTuXtV00OiLl%2FbEcUPK5O1aWhhqSZrmONurCTyO6goY6dKUGWu2X7z1sfYJOJqeIMkqMPHJla2B9yuPgX1jVNaGGQGFD%2FNb20vMBZ9OSOgdtQVK2mRfWdm8%2Bz05SnrQXyIg4WJl4qcSVpgnwgeDQr7jkEhs0ZCAZ83LxczvIEjDD6LCsmVCpcdu2pFquoHe0PEF3c1VhpXg9xH6nD1dnYCk0x0Ojdb5Od%2BUkZIHqEPyleC%2Fzzj%2F27eHOeA6uVueK4MfGlKj51Q1RcYN%2Bnf2PFalAu4BNTA3SLwQq83mlLolTExPM17H6DFKlWOD7HLvR3h%2BGiaIamnNRV0jhMJIDMzYHQAdzt0FdjacQZdXTzuENmMYK%2F%2F%2B2qW4vUWTMPiSbMLBkPEmXzcRC%2F0w8agXmBfD86CczoqgO9x%2F3wwFd3av0EWMXzAAnre0cmIpKXKSbR5jMLqtxMkGOqUBGqdCwvqzuAaRCavoS737d4qbvxfcj%2B82sMGPwY6k9gCjLfrumeto%2FZT78%2FrzIdHUt2GUsMfY2MJKiUwM1C8o9LMX9jFmryNkDI45F%2BSW8dlbCTo04FtCqqaxM3Tm07oEfd4gwgP6umOnzegTx1y9nJwX4QajRsZO1SM7DkkhlcSLXCFkBOn36hIHcUdLWxh98veW7DHrVUYTXNX3loFfEaQifz8V&X-Amz-Signature=1236e48b1c08bbb98836f818beea1917425a90ad8a05fa1f62be5887f29d2b68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AD2JKXG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDayHiQKk0c0LxhlK%2B8%2F4r8dOOcj1d2ymF%2BeGVverfhkAIgRrWiyZeZOdOdiDoHWWgkx2PDvjTdfQrRS8%2F0HS2StA0q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMxerU3kj3qPkSB9UCrcA1t26xsMDVnn2JUfDE6mWOu43ioW%2BkA6XxAaeGIunwgrzHx7a7PhUneun%2FDr2GmUQxDmJSHXBBE9PRTziyyuOs9qe1Ct8CfuRmwiOYxnWfcGj8j5t8x04Tk%2FBJSqREM%2B%2BMtSvYXMO0%2FtUE1AtxH3tEVv5VmUMDLRw%2FoBnnO%2B5raK5sBlrfyOU8QWQeTuXtV00OiLl%2FbEcUPK5O1aWhhqSZrmONurCTyO6goY6dKUGWu2X7z1sfYJOJqeIMkqMPHJla2B9yuPgX1jVNaGGQGFD%2FNb20vMBZ9OSOgdtQVK2mRfWdm8%2Bz05SnrQXyIg4WJl4qcSVpgnwgeDQr7jkEhs0ZCAZ83LxczvIEjDD6LCsmVCpcdu2pFquoHe0PEF3c1VhpXg9xH6nD1dnYCk0x0Ojdb5Od%2BUkZIHqEPyleC%2Fzzj%2F27eHOeA6uVueK4MfGlKj51Q1RcYN%2Bnf2PFalAu4BNTA3SLwQq83mlLolTExPM17H6DFKlWOD7HLvR3h%2BGiaIamnNRV0jhMJIDMzYHQAdzt0FdjacQZdXTzuENmMYK%2F%2F%2B2qW4vUWTMPiSbMLBkPEmXzcRC%2F0w8agXmBfD86CczoqgO9x%2F3wwFd3av0EWMXzAAnre0cmIpKXKSbR5jMLqtxMkGOqUBGqdCwvqzuAaRCavoS737d4qbvxfcj%2B82sMGPwY6k9gCjLfrumeto%2FZT78%2FrzIdHUt2GUsMfY2MJKiUwM1C8o9LMX9jFmryNkDI45F%2BSW8dlbCTo04FtCqqaxM3Tm07oEfd4gwgP6umOnzegTx1y9nJwX4QajRsZO1SM7DkkhlcSLXCFkBOn36hIHcUdLWxh98veW7DHrVUYTXNX3loFfEaQifz8V&X-Amz-Signature=e513941741f27476acf9d98a581f620424d8a0252b951b3b73b56e9e64724d5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
