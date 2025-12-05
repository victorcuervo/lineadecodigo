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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ILWSUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM2r0mwKHv0fEdoEsQAzPf4wUdkf3mlm3CmNhW1swrsAiAn23gJp1kWpOUCH9Q3BQie82hCxMQ%2BduVKUMI4%2FS33Dir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMEoO%2BqQhc7KjjKFOBKtwDwEwqdg3uP79vVvLC8P6pZXXunMVfwDbX02nsttHTa4TOlqt99tBvTsiDYw3V78bb9fmkpklMY0q7AcUc7hCUlUUP30471R05MV2Vm%2BhcjIqlHO1sdSzJ5ADkOKPqgGVaY2KfgcZQsCXuYM4NF87tr%2F97M4qhldrVG4npn6MCEtbQ%2Bpu2cK%2B7os4hBrG6%2Fs1LK0gYhk%2BFjbCnUEqrkrP%2F8nKdI8raALL9h4QKsWEv%2BsF7tpyeLjSHLLSIxekVFudiy3y4QBeh9qlAll2muLxTKpOr96kH5BW6k3hgOlrX1jItlh%2BYI7UxVjnm%2BT55iQ6MR3y3B2gIz8VQVB6gl2%2F42rqOjN%2FyGVzk2KMtFA6TcoMEYDDcITLUXWRq2PxGUn%2BcGWf5coN4FilRq6bQwWkKg9aHM8t%2BOIf1iI40dHttiNO3BOmeynJAqpo7tYnpUTxfVkLOpcHQQxW86%2BYnJIXCLUzDK%2B%2F8FjS%2BsrnM0KJ1GRDjW8Q13ZtcPimCCkoYLQMaZP8rleik1S4OjUQrG%2BhM5UKOgoxEPUvY3ldn1WrZBjFzOvaQKAe%2FZl9Sn0K8LlDd57zcVtA22FQ2PT12nHlRKxWRX16vIBhgWS7s7jy%2BYbn4TcAn5J3OV5%2F1uf0wgarJyQY6pgFXGgSTASwwDonEVorR2lY%2BxhAZMhf0CQ9DUOlru%2BCh%2F26LI5cJMPtusDZl1ecyzUXwqIZNqiT442YedzszHDFm0t0wF%2B0BGFT%2Br3EugdnR0td7Ga4K3PHFCrUc%2FDstdCiv52fyFDWNHy8FwIkDI9hg8asKiP0pBfnIoEyMspfJy8faYs1yG4Gjm7NrqqgA%2BIbPwrC4n0z1Jfz%2Ba9rScioFrIAW7wSx&X-Amz-Signature=77635de6b32766f30e1137a0b7a310553e0631ed6635a50bd41bae3240b88ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4ILWSUE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHM2r0mwKHv0fEdoEsQAzPf4wUdkf3mlm3CmNhW1swrsAiAn23gJp1kWpOUCH9Q3BQie82hCxMQ%2BduVKUMI4%2FS33Dir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMEoO%2BqQhc7KjjKFOBKtwDwEwqdg3uP79vVvLC8P6pZXXunMVfwDbX02nsttHTa4TOlqt99tBvTsiDYw3V78bb9fmkpklMY0q7AcUc7hCUlUUP30471R05MV2Vm%2BhcjIqlHO1sdSzJ5ADkOKPqgGVaY2KfgcZQsCXuYM4NF87tr%2F97M4qhldrVG4npn6MCEtbQ%2Bpu2cK%2B7os4hBrG6%2Fs1LK0gYhk%2BFjbCnUEqrkrP%2F8nKdI8raALL9h4QKsWEv%2BsF7tpyeLjSHLLSIxekVFudiy3y4QBeh9qlAll2muLxTKpOr96kH5BW6k3hgOlrX1jItlh%2BYI7UxVjnm%2BT55iQ6MR3y3B2gIz8VQVB6gl2%2F42rqOjN%2FyGVzk2KMtFA6TcoMEYDDcITLUXWRq2PxGUn%2BcGWf5coN4FilRq6bQwWkKg9aHM8t%2BOIf1iI40dHttiNO3BOmeynJAqpo7tYnpUTxfVkLOpcHQQxW86%2BYnJIXCLUzDK%2B%2F8FjS%2BsrnM0KJ1GRDjW8Q13ZtcPimCCkoYLQMaZP8rleik1S4OjUQrG%2BhM5UKOgoxEPUvY3ldn1WrZBjFzOvaQKAe%2FZl9Sn0K8LlDd57zcVtA22FQ2PT12nHlRKxWRX16vIBhgWS7s7jy%2BYbn4TcAn5J3OV5%2F1uf0wgarJyQY6pgFXGgSTASwwDonEVorR2lY%2BxhAZMhf0CQ9DUOlru%2BCh%2F26LI5cJMPtusDZl1ecyzUXwqIZNqiT442YedzszHDFm0t0wF%2B0BGFT%2Br3EugdnR0td7Ga4K3PHFCrUc%2FDstdCiv52fyFDWNHy8FwIkDI9hg8asKiP0pBfnIoEyMspfJy8faYs1yG4Gjm7NrqqgA%2BIbPwrC4n0z1Jfz%2Ba9rScioFrIAW7wSx&X-Amz-Signature=23d426b789e37baa77bf5e000e4a5d8bcb4cf35f63d76bd4223a4c83cb9a64b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
