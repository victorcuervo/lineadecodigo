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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAYY4TY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPzr32leLGXmeG9w9oaLZU0ZGlWT5eY6sOG1M2TwsPAIgMTvXrVPKRCHPf98FfIBTpnuXhfvwZuKYDC02Mc5vTOUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYRjAwe8wwNSS6DiSrcA3vxsjMug8hHrh1dbExLgkHKfobPO%2BQ1IdQVR3OKylx3qOJQ7eOQKIaRRHlDhvvd91lIB6tVbI3kcX664Qz5CMIz%2BvEc5tqzA%2FdIpGLMn9cdPdRHgKF5dHH%2BAnahUO%2FcuZhiueeGRk6zSj6BoXxpnvkaKhS%2FgB%2FUfyh1Lr2B%2F%2FQCXUnjmEWJJEnAYmmeWdx3diyQrcaxrN4vAIwomC3TanMUjoDE2LbApaM%2BXKSwKDHY8ex8aulrkpBAmId5YWkvMJvNw3SqUu%2BjA6WI9wUBk95GK4SBNWz%2BVRGmqt3HhzVcDqqYEvdrdvCs6Wh7bS7EOgyQfMxrnsxz53PYPg86fH8a26iohD674VgXBB2dNlvGHElPN%2B0uHShFH2YFBq5wPJot6KcBzdltlAFVtw%2Be4mrK6Y8S76ydAoxCPZe0JvrrDkGjiqwppHno%2BTWqlmQXElB8j1iHHSa8HYU5JlOSdr51sqYPXUtIZBNBLfiN8UxCrhs33Wx2s85u1IjtxoBbYp3M3npp9wKQvoBytVwYJDllMnex7zb3T63tc%2BLjN65xim6BdVcxl33VCrK2wbC%2BONks9dw6PQVI8m8YkqxkwdRTei426Cs4TNqChgbpkiXtzB85fEnbEBF1wa9bMIjp3ckGOqUBFy6u2OAJS0wScbZQW9aMbDLMHuNzw63mZVQsTGP8LIWMQTZy0mottABt8AajpYoupgNNuTqq%2FrZLajApaRHewBPyAaoPnNvFtAk%2FjbyhpE95E96NfEbHg5BXhp8zogFkpHQg72f99y3FyY1cZtl1ocSMRrziq8xMTHYNYE1jopSY5tf38P4aBAKuNak4uxdA7QJo10pmHYyYjgR6z01pykU5vX%2BT&X-Amz-Signature=5275aad935d02d8960fb15638fec502da1f575d7e58530b59e8c509317704373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HAYY4TY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZPzr32leLGXmeG9w9oaLZU0ZGlWT5eY6sOG1M2TwsPAIgMTvXrVPKRCHPf98FfIBTpnuXhfvwZuKYDC02Mc5vTOUqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYRjAwe8wwNSS6DiSrcA3vxsjMug8hHrh1dbExLgkHKfobPO%2BQ1IdQVR3OKylx3qOJQ7eOQKIaRRHlDhvvd91lIB6tVbI3kcX664Qz5CMIz%2BvEc5tqzA%2FdIpGLMn9cdPdRHgKF5dHH%2BAnahUO%2FcuZhiueeGRk6zSj6BoXxpnvkaKhS%2FgB%2FUfyh1Lr2B%2F%2FQCXUnjmEWJJEnAYmmeWdx3diyQrcaxrN4vAIwomC3TanMUjoDE2LbApaM%2BXKSwKDHY8ex8aulrkpBAmId5YWkvMJvNw3SqUu%2BjA6WI9wUBk95GK4SBNWz%2BVRGmqt3HhzVcDqqYEvdrdvCs6Wh7bS7EOgyQfMxrnsxz53PYPg86fH8a26iohD674VgXBB2dNlvGHElPN%2B0uHShFH2YFBq5wPJot6KcBzdltlAFVtw%2Be4mrK6Y8S76ydAoxCPZe0JvrrDkGjiqwppHno%2BTWqlmQXElB8j1iHHSa8HYU5JlOSdr51sqYPXUtIZBNBLfiN8UxCrhs33Wx2s85u1IjtxoBbYp3M3npp9wKQvoBytVwYJDllMnex7zb3T63tc%2BLjN65xim6BdVcxl33VCrK2wbC%2BONks9dw6PQVI8m8YkqxkwdRTei426Cs4TNqChgbpkiXtzB85fEnbEBF1wa9bMIjp3ckGOqUBFy6u2OAJS0wScbZQW9aMbDLMHuNzw63mZVQsTGP8LIWMQTZy0mottABt8AajpYoupgNNuTqq%2FrZLajApaRHewBPyAaoPnNvFtAk%2FjbyhpE95E96NfEbHg5BXhp8zogFkpHQg72f99y3FyY1cZtl1ocSMRrziq8xMTHYNYE1jopSY5tf38P4aBAKuNak4uxdA7QJo10pmHYyYjgR6z01pykU5vX%2BT&X-Amz-Signature=3bd0eb1b215fcc25666feb856acd3b50f6cf69520b75773fa82f80e7131ef728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
