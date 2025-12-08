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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWS6KMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1Ysfw4F01%2FHiV52LHw4NWBkcVu776z9i4e6ubiF1D6AiEAjIsmizTFQAjMHSVub9%2B2Mu5co%2BSFNO6JWsU8%2FEys%2FIoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQB0ZN2W%2BSHprF%2F2ircA8IJ%2BkoKYN5WTtjgax%2Fk1Et2Pf1a5jvhdt9Hv3eBwxBYAfjOJb5pHotKie366%2B%2Bq4U0DPsug03CAAambZo3AKsA5VCQhYt%2BV5FnsCfKLhU1xGDpSdcdOL3h%2FNBz7BmB2ez8USgmk8L65k5R9u7sPZL09Tcpw7meaA2J2NcrZbta3UcSLA478QcL8wR4A11gmVuw3b8hL0rFRGaMiuTTflv%2BRSODT52dJ6yqMwgR4bnt6TjbQIGi9qtoDMEzUX7oWFSBj%2BJ1HPFkW4bA9pCYPf7gqaro93ETuaF%2BhvMe0cqbre%2BmUANWVFdwAKTfar4MoPYcp9GTVe5QkuVre9u0CKVaj2EBZPc%2B%2FKqINtsNtRBxzmUugtVAQaSA8Qwh%2Bht1PW6SS4%2BFpYdio8KQsZ8cm0vMy6a2Ri6QEqkS%2FALuuCqjZi8Ol8nbKqTM5iZwXcNQpSGt5hVzal2nzkJJasPaiKdkcvNpbDOy37WExnu0Qlw5FgTduv0fCvEot0TAmXqZs4iM8TCrZ1oYAAerCTOVWOjLqmM2ciuT7Qybm6YwQO7kpnZ0%2BA0g3khqehgT%2Bx3Zd91wu%2F2ccLC3SZHENb4vMagAXsYeYUG%2FMIwH74uoCDhifZOI4rr1NusI33NE0MO%2BP28kGOqUBw2Jx9oHDvdiuEc7cb%2BGy4igaxy%2FNm8Goq4dMru13nSGufuikW2qflQBARNpkz%2BpmJLAlsCKZ81fOGapvLxHACZRqb1ZxBPoDzNWQuBN%2FXJzVhKVIhhXcO8vkSNtAXYXotDy6VgC973GDGj5kvHXhQr82g1uJcf8iUipVNERH%2Fz1cqcZwYV7I1AEaWfnxazZYXoKzv%2Ban6VmWQRWmPHGkqDm5S%2FJV&X-Amz-Signature=a93c1157d4ec668ed0ea45570f0478d394e7a6416bd948f317796267b160dea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MWS6KMC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1Ysfw4F01%2FHiV52LHw4NWBkcVu776z9i4e6ubiF1D6AiEAjIsmizTFQAjMHSVub9%2B2Mu5co%2BSFNO6JWsU8%2FEys%2FIoqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIQB0ZN2W%2BSHprF%2F2ircA8IJ%2BkoKYN5WTtjgax%2Fk1Et2Pf1a5jvhdt9Hv3eBwxBYAfjOJb5pHotKie366%2B%2Bq4U0DPsug03CAAambZo3AKsA5VCQhYt%2BV5FnsCfKLhU1xGDpSdcdOL3h%2FNBz7BmB2ez8USgmk8L65k5R9u7sPZL09Tcpw7meaA2J2NcrZbta3UcSLA478QcL8wR4A11gmVuw3b8hL0rFRGaMiuTTflv%2BRSODT52dJ6yqMwgR4bnt6TjbQIGi9qtoDMEzUX7oWFSBj%2BJ1HPFkW4bA9pCYPf7gqaro93ETuaF%2BhvMe0cqbre%2BmUANWVFdwAKTfar4MoPYcp9GTVe5QkuVre9u0CKVaj2EBZPc%2B%2FKqINtsNtRBxzmUugtVAQaSA8Qwh%2Bht1PW6SS4%2BFpYdio8KQsZ8cm0vMy6a2Ri6QEqkS%2FALuuCqjZi8Ol8nbKqTM5iZwXcNQpSGt5hVzal2nzkJJasPaiKdkcvNpbDOy37WExnu0Qlw5FgTduv0fCvEot0TAmXqZs4iM8TCrZ1oYAAerCTOVWOjLqmM2ciuT7Qybm6YwQO7kpnZ0%2BA0g3khqehgT%2Bx3Zd91wu%2F2ccLC3SZHENb4vMagAXsYeYUG%2FMIwH74uoCDhifZOI4rr1NusI33NE0MO%2BP28kGOqUBw2Jx9oHDvdiuEc7cb%2BGy4igaxy%2FNm8Goq4dMru13nSGufuikW2qflQBARNpkz%2BpmJLAlsCKZ81fOGapvLxHACZRqb1ZxBPoDzNWQuBN%2FXJzVhKVIhhXcO8vkSNtAXYXotDy6VgC973GDGj5kvHXhQr82g1uJcf8iUipVNERH%2Fz1cqcZwYV7I1AEaWfnxazZYXoKzv%2Ban6VmWQRWmPHGkqDm5S%2FJV&X-Amz-Signature=4d85176cab3740837ac8ab2e98f37748d5baa6fa1b46f7b228af434f9fe10b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
