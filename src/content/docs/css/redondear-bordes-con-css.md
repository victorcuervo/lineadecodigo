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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPV4KSZ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOcwc%2BpMnLHKan4dPQsd5XNPXRVLmFzE%2FcCeIa7iMN8AiEAnXAaEDPVKyubAvtT7mZIIduthDtHb6eok0l3UDZwohoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJu2b%2Bvig1cWttnACrcA3nspzbnA37f8hVLACN6xbXmAN8bS6QMOkn6f9oBMeu%2FD%2BBDm8twXSVmS9kwZzgad2pkj43bd7I6STzxbssF3ngoLipsvmpSGi91c2wkhr6qa%2BSVebCHHR27nd96HBvRoXVMB5k%2B2Z0gBiZzoJpnedWqh9a5H1ToO%2FIC77fX0KsWGOstpy3tMXZseawIqsWA%2Bc7DOM%2Fc7Q4nL1UJLvkibDYaVpgEjKox4oJqatAaavrl0mBxYOI211KQO7mEOpxHDCYBASSeDvIH43ODWuBy5uCmWZ8Cr8PS1VsLx4egahGe0kbmWFvlHPT2WY7r8lwxYy3Zw3OpkjltiLefmVndLW0DFNQ5hqARTt1ajFV0S6bTfFRAuX%2FUzGAOPIDoW9BYLq4WBa66vVWASv%2F3Ku1vfBiovuPLJTWfO2kQ4HRWZEW9aVr4lksb%2F1MGTUYLZM1Uqa26SRDt6BrgpZaZ35qMfFvUUwon36bCVMgjh1%2BE%2Fypt3MQnyaqRrFp5AJGHTxkFkYZ4k5vV%2FpcfjzwPXYqZtFmcGlRncxzVWCIiYbsWzqPYbQDcYKIghyjPOM6SBUkCm9Zmvm0ugM%2FDK6kR1aw%2FW5%2Fwvaj%2B9oO9S0%2B7F5Xb5Dawax%2Bt7fY4xA5u4LU6MNz90skGOqUBeWAs7U3dt2OOMnM7X35cTN%2FnMyfMJXenpPyf2qTG2yiN5k6hmrhf30i1%2BqRO%2BF8Vc1j%2BoU9QCgsIyZcYYDpO5S3XV%2FVzD0isCI76xfWwQtAzhXgbEJxhLDllEGnFoM0kvnlv%2B90MPTGAsi45YJAD0RPoTMgAyteSvWo5Z%2FWsEXYZVhxmuvr3ftfAAUY2OfYrnELtQLxda07nLeAajalYgZlMxGxM&X-Amz-Signature=a49db2eed9a37342d43052634b1868150aef7cc49a8e4359afbdd9583066fb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPV4KSZ7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOcwc%2BpMnLHKan4dPQsd5XNPXRVLmFzE%2FcCeIa7iMN8AiEAnXAaEDPVKyubAvtT7mZIIduthDtHb6eok0l3UDZwohoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJu2b%2Bvig1cWttnACrcA3nspzbnA37f8hVLACN6xbXmAN8bS6QMOkn6f9oBMeu%2FD%2BBDm8twXSVmS9kwZzgad2pkj43bd7I6STzxbssF3ngoLipsvmpSGi91c2wkhr6qa%2BSVebCHHR27nd96HBvRoXVMB5k%2B2Z0gBiZzoJpnedWqh9a5H1ToO%2FIC77fX0KsWGOstpy3tMXZseawIqsWA%2Bc7DOM%2Fc7Q4nL1UJLvkibDYaVpgEjKox4oJqatAaavrl0mBxYOI211KQO7mEOpxHDCYBASSeDvIH43ODWuBy5uCmWZ8Cr8PS1VsLx4egahGe0kbmWFvlHPT2WY7r8lwxYy3Zw3OpkjltiLefmVndLW0DFNQ5hqARTt1ajFV0S6bTfFRAuX%2FUzGAOPIDoW9BYLq4WBa66vVWASv%2F3Ku1vfBiovuPLJTWfO2kQ4HRWZEW9aVr4lksb%2F1MGTUYLZM1Uqa26SRDt6BrgpZaZ35qMfFvUUwon36bCVMgjh1%2BE%2Fypt3MQnyaqRrFp5AJGHTxkFkYZ4k5vV%2FpcfjzwPXYqZtFmcGlRncxzVWCIiYbsWzqPYbQDcYKIghyjPOM6SBUkCm9Zmvm0ugM%2FDK6kR1aw%2FW5%2Fwvaj%2B9oO9S0%2B7F5Xb5Dawax%2Bt7fY4xA5u4LU6MNz90skGOqUBeWAs7U3dt2OOMnM7X35cTN%2FnMyfMJXenpPyf2qTG2yiN5k6hmrhf30i1%2BqRO%2BF8Vc1j%2BoU9QCgsIyZcYYDpO5S3XV%2FVzD0isCI76xfWwQtAzhXgbEJxhLDllEGnFoM0kvnlv%2B90MPTGAsi45YJAD0RPoTMgAyteSvWo5Z%2FWsEXYZVhxmuvr3ftfAAUY2OfYrnELtQLxda07nLeAajalYgZlMxGxM&X-Amz-Signature=5ec5afd01a0025fa2614878172979d2c45a3a2c499ada8fd089e6b875eb00efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
