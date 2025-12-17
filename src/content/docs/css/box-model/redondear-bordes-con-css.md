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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PNFJD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vmWxIxCMP834zFI8VWEJekW2RTt4X4gaOS2GL2SVEgIgMQyCcaBocw3S1IKUyngXBZ6nq7EortXq5YY2VQfmuPcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBJ7PDmO%2Fy8ndcNfESrcA93I0v29PHFZVdz07DVbxKWZ2j8Or%2F8auFuJLdV0igpduGYYnM5ejA8hfQ2WMKywuqIDVTk%2BKOC8UXq%2FjqInhmbngbNUxm5zarsK2q7wGYePDicnn21OR95YUJcfFq9fTzNF%2Bx8tIYaReLNMUwkL6L9mfumOgSXd1kii47OM6TEn3NZcQK6ok7Xkn7msDopotaHqYKJ9hTi1U6oAqPEL2mtmW6BxSlAbSUOddBHZIZaqk6MSG4YopSmzd97Pu7TfzBU6tKkxZSwwJG3V4yqqcnLrzwqQVIcGs5Nc8y9K0v%2FA2v6%2FQOzBYhxUk3F4F%2Bf2iCohmoASbXXpi9KENuGlJMXcnpRdDUFMjeyN8r6dcbi5TkUgokcHCeXU2G9mLg5COjBRfXRbgX%2FUZ7mRyvDI2cwKiEBK%2F1AecLu2N56A23a4jXjc8GPTtw1YoTDEjUyyF0f24pMnjs1V8dNYTxLCgeGP3xSXZkyAdMatv94RK0F10ANWXCUMRJdfhPsPmirs6%2FNIJ0yQ3Dnie89PpL4dzq%2F2wEs6J%2FQDBJumsNEJFEK6NfhqBJY9W7reTP6kru3Tk8Qg6ZnxyHMR7UlIyZsvV4EG10bkFTS4A6fEQ5%2FT%2B7deMQRpO0NkEf11n9LJMPaOisoGOqUBf%2Ft9DW2eZSZYhCQScOG%2FDC1toa618U67WYoFELIlrflxraszdEnvAQ0IDeJ4C1RCWZLuXfcVPjdp0CLN4nCy32JhKiwpk%2Bb6KpoNdPkYjcVA4W7Fb8rIvjAnA%2FLPjxOFp86N4QV%2FtidtkzWyLr0gIkC2UPSPB7h1sMPG%2Bu%2FQnOCFVsBV5F54jimwqasV0zZclQ%2FUwA6VJ%2FyMIXKsu5ePTQv0QJry&X-Amz-Signature=03ad868e763fba0e2529908019315b89bbdccc7e02607cba0bef4a3d89fd19c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626PNFJD7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T112724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4vmWxIxCMP834zFI8VWEJekW2RTt4X4gaOS2GL2SVEgIgMQyCcaBocw3S1IKUyngXBZ6nq7EortXq5YY2VQfmuPcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDBJ7PDmO%2Fy8ndcNfESrcA93I0v29PHFZVdz07DVbxKWZ2j8Or%2F8auFuJLdV0igpduGYYnM5ejA8hfQ2WMKywuqIDVTk%2BKOC8UXq%2FjqInhmbngbNUxm5zarsK2q7wGYePDicnn21OR95YUJcfFq9fTzNF%2Bx8tIYaReLNMUwkL6L9mfumOgSXd1kii47OM6TEn3NZcQK6ok7Xkn7msDopotaHqYKJ9hTi1U6oAqPEL2mtmW6BxSlAbSUOddBHZIZaqk6MSG4YopSmzd97Pu7TfzBU6tKkxZSwwJG3V4yqqcnLrzwqQVIcGs5Nc8y9K0v%2FA2v6%2FQOzBYhxUk3F4F%2Bf2iCohmoASbXXpi9KENuGlJMXcnpRdDUFMjeyN8r6dcbi5TkUgokcHCeXU2G9mLg5COjBRfXRbgX%2FUZ7mRyvDI2cwKiEBK%2F1AecLu2N56A23a4jXjc8GPTtw1YoTDEjUyyF0f24pMnjs1V8dNYTxLCgeGP3xSXZkyAdMatv94RK0F10ANWXCUMRJdfhPsPmirs6%2FNIJ0yQ3Dnie89PpL4dzq%2F2wEs6J%2FQDBJumsNEJFEK6NfhqBJY9W7reTP6kru3Tk8Qg6ZnxyHMR7UlIyZsvV4EG10bkFTS4A6fEQ5%2FT%2B7deMQRpO0NkEf11n9LJMPaOisoGOqUBf%2Ft9DW2eZSZYhCQScOG%2FDC1toa618U67WYoFELIlrflxraszdEnvAQ0IDeJ4C1RCWZLuXfcVPjdp0CLN4nCy32JhKiwpk%2Bb6KpoNdPkYjcVA4W7Fb8rIvjAnA%2FLPjxOFp86N4QV%2FtidtkzWyLr0gIkC2UPSPB7h1sMPG%2Bu%2FQnOCFVsBV5F54jimwqasV0zZclQ%2FUwA6VJ%2FyMIXKsu5ePTQv0QJry&X-Amz-Signature=e0aadaedd6d145acce93137b816333dbd79d311abd64f3a6b4604a2dc405b3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
