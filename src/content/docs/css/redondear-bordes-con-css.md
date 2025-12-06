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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653H6ZDEZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNsMO%2BuvPFmU%2BE5jk%2FvJF1sNeHvJDNmqYUb8h2DOzn3QIgAPkbV3YMRDshd0b4X%2F9zXuPPybAr3%2FiWN%2BsYbRH5eigq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO07A%2BrahDUjpWbYzSrcA23ryjjjUV4jfCyYpjGpUfArzsKNoENRgSMMjB%2FPLwNLEK5TKJEt9pze1RzUWoY1zXFPX26ln%2Bt8wDXIPGwdF4JYRM%2FFr8GchN73kvwxN%2BMiD4gHnD%2BpZ4PESD2n9xoyXXG9RXJEuGvrlBitx6UvpVKxt1v067fUcIWHOXuLOZ56Jrva%2BnNT49MTKcLZWMYXPi7%2FI%2BHGkkVBbWcqG1dsmUso97hXTiHVPEPoIhqOvrw0cxGzvRE1%2FbCT%2FyU8OP%2FPdbQqSCPSqgaUu%2BrG54%2Fkhqh1KGTYgZ5OY3Hq3X%2BJ95X5UmpgFNtXP3Li5iCVfxILH6CyXvWPiyrnmA%2BaE5Pf1bPEHVG46GjO9RQ4XOQtBDUW%2Biu2jkvGkjzQOGfXOUvFPejxWqQyxpYxzUWucw2eDC3tuhr59hfhHQMKBToliaDkH%2Fa4ERT3Fj1UvXxihFDFep7sMx2zxEr1fD8KXzo5HrNBe0CrxZC7LZmb4iWGZphhKz7JDAaJTXkj749KhVo5xjRHcQi9i5IerFD%2FAcR190M2awN5vKzpcu2ZUrCi7HAYERuC6CFM5LqmtIHmfUCX1%2BhhEz1eUA4kDrxAnB%2F0TxG4THHrSPr7maLl4B1wYbqQeC5ZkeGmcvixoH%2FXMJDezskGOqUB%2Bkif%2B8n7BkdLfM6Wslkek0mub0FXJTCDbg2e34CSkEVRfsLZI2BMvIA9KubxzhSEMh7X0MMXa3pOomNd6iNI8PLbPgihW9gl0j1vnLNyhqMBfsnrnereIS501Px5UwA0ljAoAlY19v4WYDaYVmhLNpunNUE9dqVL7YDbu084sH3EI55YTgGkv%2F%2BIX%2FYa3JzS%2B9xM52Zq%2FyE3JSUUjiuHtichhAEi&X-Amz-Signature=ba8babe841e659da3290913b082d57619235f8ae167a57b17d9c27c0f8b451d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653H6ZDEZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNsMO%2BuvPFmU%2BE5jk%2FvJF1sNeHvJDNmqYUb8h2DOzn3QIgAPkbV3YMRDshd0b4X%2F9zXuPPybAr3%2FiWN%2BsYbRH5eigq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDO07A%2BrahDUjpWbYzSrcA23ryjjjUV4jfCyYpjGpUfArzsKNoENRgSMMjB%2FPLwNLEK5TKJEt9pze1RzUWoY1zXFPX26ln%2Bt8wDXIPGwdF4JYRM%2FFr8GchN73kvwxN%2BMiD4gHnD%2BpZ4PESD2n9xoyXXG9RXJEuGvrlBitx6UvpVKxt1v067fUcIWHOXuLOZ56Jrva%2BnNT49MTKcLZWMYXPi7%2FI%2BHGkkVBbWcqG1dsmUso97hXTiHVPEPoIhqOvrw0cxGzvRE1%2FbCT%2FyU8OP%2FPdbQqSCPSqgaUu%2BrG54%2Fkhqh1KGTYgZ5OY3Hq3X%2BJ95X5UmpgFNtXP3Li5iCVfxILH6CyXvWPiyrnmA%2BaE5Pf1bPEHVG46GjO9RQ4XOQtBDUW%2Biu2jkvGkjzQOGfXOUvFPejxWqQyxpYxzUWucw2eDC3tuhr59hfhHQMKBToliaDkH%2Fa4ERT3Fj1UvXxihFDFep7sMx2zxEr1fD8KXzo5HrNBe0CrxZC7LZmb4iWGZphhKz7JDAaJTXkj749KhVo5xjRHcQi9i5IerFD%2FAcR190M2awN5vKzpcu2ZUrCi7HAYERuC6CFM5LqmtIHmfUCX1%2BhhEz1eUA4kDrxAnB%2F0TxG4THHrSPr7maLl4B1wYbqQeC5ZkeGmcvixoH%2FXMJDezskGOqUB%2Bkif%2B8n7BkdLfM6Wslkek0mub0FXJTCDbg2e34CSkEVRfsLZI2BMvIA9KubxzhSEMh7X0MMXa3pOomNd6iNI8PLbPgihW9gl0j1vnLNyhqMBfsnrnereIS501Px5UwA0ljAoAlY19v4WYDaYVmhLNpunNUE9dqVL7YDbu084sH3EI55YTgGkv%2F%2BIX%2FYa3JzS%2B9xM52Zq%2FyE3JSUUjiuHtichhAEi&X-Amz-Signature=91f2b04d1d737ff78e60378b3fc6931d924d970ae08895dea70d9fc7a34aadc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
