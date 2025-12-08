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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45U7PTU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGojfgHslJmfyZFKZ8sBEwu4kNPWsTsedPqbRp%2FM0dU6AiEA8yKEp5ldCx07pSqky2lRQMATPVRj84161Tzar%2B3Dr9wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuuVu6QjcZNgXgODyrcA%2BZNEXkDtBwmrCJbQMPWN8%2Bhf8ozpzhvWv9S9GbPMlH6HN1fPHoNhaFdFJPudO2v9Kyc2IO7k8dyL63fZK425JQrkBCDGtBIEGh6ls1QRskkiqjyxApmjJ3Dk%2F4%2FqUyYAz%2B3Wtlbhl65atWNs4EQeGNQG3zYGXpZAGzv4x6ePYwNVvebFsPL4QqtU8U2ETNVwAn3mS%2FOfyCuz3g%2FYRaZqUw6wyrXoovIUFNMkrjSNbldUHW51mzGgn8hRGOz4Yxp41qPfhooS%2BxZ9tNRD7KTryTlNjjdMeUCK5tZyivS%2FW01s0e49%2B8b9niRFvifQzsONVJwOz%2BLUmxgW7vyNR0Kw6T1lo90kGmH8rA%2BNZtT3av4EUZuc3a%2BmRPpnYBxdmWZvHfafNmxs81MZIOZUQqvYe9vqSIp6AjTrgtJQiBwyUrlIoO9No94PevX8w7PauAPCHJ1GZ46BeiZPk7iKFNsjfxOxZyacXl5xUYxWpv%2BqprPBXRv66LR4EwprYnsh3EJnbPeKhs0QsEALHK4piOo2NBJByH2sfs1Vi3j41umfP4vzOWhzUcLGyw%2F8Kt21GDT7zdQqGCV1CjKNcp2HZMEE1opvjrQ%2FNfzqUnLZeSpab0IFMOipfu0Dch%2BENulMPzt2ckGOqUBoxi5p3ZVmdCI6yomNLzPkUSlhvoCIJl7Uqgrgjn5cJ6Jg45WpCLrL0VV114m6Btk17FGuvWBUZ52AT3P4hOEwtc0LOcW5VUwrBqHxbBhIEDUgMhYXLm7g9R9iKZ4jYI0P89A2XvST6QE8wLBvWkbsKwDJAO63Di5xGijcwCRiOXXlkrVuWwabLj%2FuYVn3R5aQUOKZhBdSSlsRQez7f3LALjhEj9x&X-Amz-Signature=33e62998feadc22ffb85f07ae48d4cff09db3752edefb2feb08cc8d7bd00e32a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45U7PTU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T103913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGojfgHslJmfyZFKZ8sBEwu4kNPWsTsedPqbRp%2FM0dU6AiEA8yKEp5ldCx07pSqky2lRQMATPVRj84161Tzar%2B3Dr9wqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPuuVu6QjcZNgXgODyrcA%2BZNEXkDtBwmrCJbQMPWN8%2Bhf8ozpzhvWv9S9GbPMlH6HN1fPHoNhaFdFJPudO2v9Kyc2IO7k8dyL63fZK425JQrkBCDGtBIEGh6ls1QRskkiqjyxApmjJ3Dk%2F4%2FqUyYAz%2B3Wtlbhl65atWNs4EQeGNQG3zYGXpZAGzv4x6ePYwNVvebFsPL4QqtU8U2ETNVwAn3mS%2FOfyCuz3g%2FYRaZqUw6wyrXoovIUFNMkrjSNbldUHW51mzGgn8hRGOz4Yxp41qPfhooS%2BxZ9tNRD7KTryTlNjjdMeUCK5tZyivS%2FW01s0e49%2B8b9niRFvifQzsONVJwOz%2BLUmxgW7vyNR0Kw6T1lo90kGmH8rA%2BNZtT3av4EUZuc3a%2BmRPpnYBxdmWZvHfafNmxs81MZIOZUQqvYe9vqSIp6AjTrgtJQiBwyUrlIoO9No94PevX8w7PauAPCHJ1GZ46BeiZPk7iKFNsjfxOxZyacXl5xUYxWpv%2BqprPBXRv66LR4EwprYnsh3EJnbPeKhs0QsEALHK4piOo2NBJByH2sfs1Vi3j41umfP4vzOWhzUcLGyw%2F8Kt21GDT7zdQqGCV1CjKNcp2HZMEE1opvjrQ%2FNfzqUnLZeSpab0IFMOipfu0Dch%2BENulMPzt2ckGOqUBoxi5p3ZVmdCI6yomNLzPkUSlhvoCIJl7Uqgrgjn5cJ6Jg45WpCLrL0VV114m6Btk17FGuvWBUZ52AT3P4hOEwtc0LOcW5VUwrBqHxbBhIEDUgMhYXLm7g9R9iKZ4jYI0P89A2XvST6QE8wLBvWkbsKwDJAO63Di5xGijcwCRiOXXlkrVuWwabLj%2FuYVn3R5aQUOKZhBdSSlsRQez7f3LALjhEj9x&X-Amz-Signature=1794d79e165132f773668e0dc5415cacfe7e073898f1bbcd92f888ade1a23191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
