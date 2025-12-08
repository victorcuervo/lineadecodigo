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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKS3STPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnPUL%2FD%2F5LxgNl3gtsD9WdgJFDNvXshz0Zj9CNCUqOUgIhALKLtRiMuJOkuL9u6SxxjS6yTHuw%2F5G7XcuzP4BfqhXlKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy480lazZ%2BSp079fXUq3APdE78mC30%2BbXCZtBmPH4iqGxJ4LfnDniny2drWkklXC1v0Fmjz25dQSNPBATcXk7aIHGfHErjoZMDBU74DWiiG2tX95NEwzC3HHNuzytIMD8uF5OTtLD29DX0MZoLF8y1sD1aJEyLhzOYgTdUYcYYz3OBbsjQOcTajPEJQIqpQnQoxMn%2F4u6m9KgtSsPvpjY6rIYhEvLtrwQViSQA5PftVGTruqQ4hmBb7wJeXm4ApnvrN8K%2FA9BBolZQKmY%2Bs7r2lKrMm3rbCDXJ%2BXyXVdCssWP2fvn4A5w5lKvn%2BlLh3YwcEIGkrzGsrUb%2FJGfyLy9SjbIpcALG74R6uMfOVauPUiuCk4yMeBTNpD5QNL1Yd5Vd9Ja7ss1hStw0dZMQz4ebzlL2kC73bPUDDKUAcfCxZZu4Pehfcv%2FGd8jV5D04UjupJRuXRLSYYc4%2BXmT28jccAMTVCId7qNLhMILQU6MfocXb6hTlSg4JNu%2FxmH3%2Fqp%2Fj9k3ExeKCqcBFEH5q4G2dowwN9LKawhjJVXp%2BeY31GUDwtpJko1WEiNf1%2FD%2FbG9Wbl26qgvylAuQRVVMWdVMDXux63a55OBrd5ykQ66D0TXf%2FahUzuAUNrjZmPOf4jopOr5BjAGBsFKiO7VTCawtvJBjqkAey4C2OByiSyZv1dEw4B0ynYpMmfY6ECDlfDSKDtBMPzyOkhfeH%2B2HPiLVU9u8MjU3L0YA1v4Am2qoGJSP9UjoOJZukyRgPVJuQLogZTA62Zt13YkS30gCVnNkACYrCmeXWXSnJB2FXN54iK93pD6VzuPyQPpNBziVQ8iJBj7hE96WJN2oknjL3fnW7lXpze7L9KoHVvnfovP%2F0c5yZDpExvTI4u&X-Amz-Signature=05a89a92e6d078d8bf8cb08b712a8f71a22ad82cc512aa453c9d305c7f6ef26e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKS3STPO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T152927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnPUL%2FD%2F5LxgNl3gtsD9WdgJFDNvXshz0Zj9CNCUqOUgIhALKLtRiMuJOkuL9u6SxxjS6yTHuw%2F5G7XcuzP4BfqhXlKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy480lazZ%2BSp079fXUq3APdE78mC30%2BbXCZtBmPH4iqGxJ4LfnDniny2drWkklXC1v0Fmjz25dQSNPBATcXk7aIHGfHErjoZMDBU74DWiiG2tX95NEwzC3HHNuzytIMD8uF5OTtLD29DX0MZoLF8y1sD1aJEyLhzOYgTdUYcYYz3OBbsjQOcTajPEJQIqpQnQoxMn%2F4u6m9KgtSsPvpjY6rIYhEvLtrwQViSQA5PftVGTruqQ4hmBb7wJeXm4ApnvrN8K%2FA9BBolZQKmY%2Bs7r2lKrMm3rbCDXJ%2BXyXVdCssWP2fvn4A5w5lKvn%2BlLh3YwcEIGkrzGsrUb%2FJGfyLy9SjbIpcALG74R6uMfOVauPUiuCk4yMeBTNpD5QNL1Yd5Vd9Ja7ss1hStw0dZMQz4ebzlL2kC73bPUDDKUAcfCxZZu4Pehfcv%2FGd8jV5D04UjupJRuXRLSYYc4%2BXmT28jccAMTVCId7qNLhMILQU6MfocXb6hTlSg4JNu%2FxmH3%2Fqp%2Fj9k3ExeKCqcBFEH5q4G2dowwN9LKawhjJVXp%2BeY31GUDwtpJko1WEiNf1%2FD%2FbG9Wbl26qgvylAuQRVVMWdVMDXux63a55OBrd5ykQ66D0TXf%2FahUzuAUNrjZmPOf4jopOr5BjAGBsFKiO7VTCawtvJBjqkAey4C2OByiSyZv1dEw4B0ynYpMmfY6ECDlfDSKDtBMPzyOkhfeH%2B2HPiLVU9u8MjU3L0YA1v4Am2qoGJSP9UjoOJZukyRgPVJuQLogZTA62Zt13YkS30gCVnNkACYrCmeXWXSnJB2FXN54iK93pD6VzuPyQPpNBziVQ8iJBj7hE96WJN2oknjL3fnW7lXpze7L9KoHVvnfovP%2F0c5yZDpExvTI4u&X-Amz-Signature=d361e5055216f4a28bb83a7328801a3e037bafa412e50371e9518e56911af15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
