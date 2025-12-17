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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3GFTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rRBpbM7osRVWWunqtsvEW7fQe0KkJZ4KgHcQf%2BfWSAiBuvTiVwbM%2FfKystAQvVD6ndB260vydVvp2K88fqrUf1Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQ%2Fb6pJpDAEO9S4nkKtwD4Q2QVc35PmH60An97YUJq%2FAQvEOlDGae%2B7TrJmXEfngzs70dNQdfWNCN8kDPco2YOO5z5EVk%2BmPjdOYeHDSsZ2jcDQxc6UsnsiGwg9%2FqMFTE2blhqwazCSfVk%2Bv5jC8TLdZUhMhv%2B1P6hXkZfB9kRwB2uhueIpUKGayT2WimW1wrkZxVdyXNJ%2BJxKqpUMn6xYGXAR7eGwZydA7pwYnQupQZ2rZEAbPD%2B%2BKldSvXTovVJUVPGAyY9l2JyEC3FC6E5B2RLg6tNlU%2FFnfzOnxqAxS%2FHQQSCiEfCW84A1ztNq1teBH1z75CugBC%2B0SUbJspRIAfHnsUaSNvJUKSus97YrP7EknCkasoktYxIk7eEiZuv72AW%2BvvWCKXiRPf08e5LNIJLPIh0LC6OvFvkxVKWYSCYwtrdIVW9XWcXl5siGIVt85Uh35ZmfbX9y8rG0FfeZ0QD0nso98pDANoTccEGqX1V1FRCsHonfphp0dbtDS8u05RyBIVBn1gTg6f2iQ9LjDP0fhMs4TemIjhHwAGpUcWEr4EU%2F5coWudVI7qcheIdWbD%2F0FToPPFNCpNVWZYLpA%2B7KTyclXFjvCs1dV9gXFQZKgdJk4KcaQqPAkGV98oH%2BjmEB4WrAk0XKRIw4%2BmIygY6pgH3JgsEIkqpYl%2FROpmQr4MhVi0VzNxeITkS8T3grziwH4PxtbbeGhfjgZmKQNtghq8TUVNIR2innCWD6dVHI%2BEKkz8xOYRcNWdVe0Up2p3DN5RADkX5YNf7UEaDrcgrZD000ug2Oo6R35jY8jfkiXTgvmyZC6EpqBpMYUG67kUKCnkilE4wPGwb3DIoUWY74dnqGlsphUbP2TP4bCshDhOuLQJDAOFB&X-Amz-Signature=efc3c68e29d949d840880de98c5005df7d62b5de600754de31be45f76de08308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPT3GFTW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0rRBpbM7osRVWWunqtsvEW7fQe0KkJZ4KgHcQf%2BfWSAiBuvTiVwbM%2FfKystAQvVD6ndB260vydVvp2K88fqrUf1Sr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMQ%2Fb6pJpDAEO9S4nkKtwD4Q2QVc35PmH60An97YUJq%2FAQvEOlDGae%2B7TrJmXEfngzs70dNQdfWNCN8kDPco2YOO5z5EVk%2BmPjdOYeHDSsZ2jcDQxc6UsnsiGwg9%2FqMFTE2blhqwazCSfVk%2Bv5jC8TLdZUhMhv%2B1P6hXkZfB9kRwB2uhueIpUKGayT2WimW1wrkZxVdyXNJ%2BJxKqpUMn6xYGXAR7eGwZydA7pwYnQupQZ2rZEAbPD%2B%2BKldSvXTovVJUVPGAyY9l2JyEC3FC6E5B2RLg6tNlU%2FFnfzOnxqAxS%2FHQQSCiEfCW84A1ztNq1teBH1z75CugBC%2B0SUbJspRIAfHnsUaSNvJUKSus97YrP7EknCkasoktYxIk7eEiZuv72AW%2BvvWCKXiRPf08e5LNIJLPIh0LC6OvFvkxVKWYSCYwtrdIVW9XWcXl5siGIVt85Uh35ZmfbX9y8rG0FfeZ0QD0nso98pDANoTccEGqX1V1FRCsHonfphp0dbtDS8u05RyBIVBn1gTg6f2iQ9LjDP0fhMs4TemIjhHwAGpUcWEr4EU%2F5coWudVI7qcheIdWbD%2F0FToPPFNCpNVWZYLpA%2B7KTyclXFjvCs1dV9gXFQZKgdJk4KcaQqPAkGV98oH%2BjmEB4WrAk0XKRIw4%2BmIygY6pgH3JgsEIkqpYl%2FROpmQr4MhVi0VzNxeITkS8T3grziwH4PxtbbeGhfjgZmKQNtghq8TUVNIR2innCWD6dVHI%2BEKkz8xOYRcNWdVe0Up2p3DN5RADkX5YNf7UEaDrcgrZD000ug2Oo6R35jY8jfkiXTgvmyZC6EpqBpMYUG67kUKCnkilE4wPGwb3DIoUWY74dnqGlsphUbP2TP4bCshDhOuLQJDAOFB&X-Amz-Signature=828a53ac3373818d709c6eb1a1c62efb6038ed2d5f8faa0158f30b088a3fc42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
