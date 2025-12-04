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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2PL42Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo99cXrZcZQYiVhCvVGB%2Fb%2FO1N4A9VEnnvK0GSNzqsdAiEAv%2FFIQHoMSs8cbnsLyynACTPC5Islnos%2BziVEUDH5FvAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPV1hR7XRm6384C0DircA0WjXMAIAc5dAqPMnoTAimE2DmAeV906vkhgquY9LABvP84ZHzN%2BLgd9XjbkuKkivUbTSb5KgiFuPPL%2BUUZEZW9H7LsjBrbsKv1rEDcfL0DcMgJw9ZS6cZX9Fw0ASP1RUfYbyEhuREQUshIY0IItF7wjh74aKYv8T9h5cCRQzKRdnK1QVEaxAJXh3AumHwkdiAfFyenKViuH6Wx9f4JlNizSSV3JPuF51A%2FPhqpJcFJCx0OiUWLVXYA6Hfn61ulRsKgGe5q9z34COf72pJqTn7vKeAuXQXt3tcqxUr95ww8MlGzh%2FyVTR6kk3x%2FvziuYPoxlegvCx6LmGOMvu3OHDzoI65RJ8UuwTSbKMw6N1r1Fy9KudSbO25PyUxPrgU9XgMECPtUSvfmrdyiC3bVlMXwmJTNl9uyF%2FE7WwK69mUsyVJD3W3uPgRfvunFWUHondf%2FdyUfca%2Bw3YHZDu%2Btt10B6JescgEvEZkqM%2Fh9eei20FuRgwwZG6lop1c8uvIW5FQJgMBRi1vrI8oy%2FHp4De3AI9FkFbhHUTX6LsgjCc5GOnNDxJhk7XassIjNvyqxEaXl%2BzHSW9txLo2nea2PKbL3ojvIwtCGqTE85IhuMibM0I27iCT5CFvQNVHbEMJSMyMkGOqUBWkb1pKKHHAEc%2FEEOXoHbwPeQUN%2B6FLLMRTL6%2FH2FUsW3TmsAsp9Me3EDmu9lzOIQRmv614knisKMcjmJ21lzqcxoTFk49pdh0k%2FAe%2BdQoYxUQG9dCGY%2BzT8IxMYq%2BqhIfUIVEkvnRCAEgRQ0d60H0nEMu%2FV%2Be7j0Sx7b%2FUBO%2FI9IyXrkYghL9KZ%2BykOnd0m4%2F8Sr%2FRObBQpA9aiz5n2WxpgR28Dx&X-Amz-Signature=8774e20cf8ceec0a0ba94e3300042f6a8c0bb3be7ddf5badb364eda123538c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YK2PL42Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAo99cXrZcZQYiVhCvVGB%2Fb%2FO1N4A9VEnnvK0GSNzqsdAiEAv%2FFIQHoMSs8cbnsLyynACTPC5Islnos%2BziVEUDH5FvAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPV1hR7XRm6384C0DircA0WjXMAIAc5dAqPMnoTAimE2DmAeV906vkhgquY9LABvP84ZHzN%2BLgd9XjbkuKkivUbTSb5KgiFuPPL%2BUUZEZW9H7LsjBrbsKv1rEDcfL0DcMgJw9ZS6cZX9Fw0ASP1RUfYbyEhuREQUshIY0IItF7wjh74aKYv8T9h5cCRQzKRdnK1QVEaxAJXh3AumHwkdiAfFyenKViuH6Wx9f4JlNizSSV3JPuF51A%2FPhqpJcFJCx0OiUWLVXYA6Hfn61ulRsKgGe5q9z34COf72pJqTn7vKeAuXQXt3tcqxUr95ww8MlGzh%2FyVTR6kk3x%2FvziuYPoxlegvCx6LmGOMvu3OHDzoI65RJ8UuwTSbKMw6N1r1Fy9KudSbO25PyUxPrgU9XgMECPtUSvfmrdyiC3bVlMXwmJTNl9uyF%2FE7WwK69mUsyVJD3W3uPgRfvunFWUHondf%2FdyUfca%2Bw3YHZDu%2Btt10B6JescgEvEZkqM%2Fh9eei20FuRgwwZG6lop1c8uvIW5FQJgMBRi1vrI8oy%2FHp4De3AI9FkFbhHUTX6LsgjCc5GOnNDxJhk7XassIjNvyqxEaXl%2BzHSW9txLo2nea2PKbL3ojvIwtCGqTE85IhuMibM0I27iCT5CFvQNVHbEMJSMyMkGOqUBWkb1pKKHHAEc%2FEEOXoHbwPeQUN%2B6FLLMRTL6%2FH2FUsW3TmsAsp9Me3EDmu9lzOIQRmv614knisKMcjmJ21lzqcxoTFk49pdh0k%2FAe%2BdQoYxUQG9dCGY%2BzT8IxMYq%2BqhIfUIVEkvnRCAEgRQ0d60H0nEMu%2FV%2Be7j0Sx7b%2FUBO%2FI9IyXrkYghL9KZ%2BykOnd0m4%2F8Sr%2FRObBQpA9aiz5n2WxpgR28Dx&X-Amz-Signature=c594a25591603644f136befd60b51eda1b86db8000d50f0bc1336f191543b7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
