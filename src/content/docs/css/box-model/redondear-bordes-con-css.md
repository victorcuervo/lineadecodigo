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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPYN3M2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw25UjXqS37DXK%2BF6XItlOF%2BuOHguUfHA92RSlwWnOPAiBSzyOSGZPIg%2F%2FSghNyGwa5xO5FWGgeozaCSukqA3z3GSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDfmtrIMWdcU%2F3EHuKtwDK93GJSn7U9dly7PxLKREZNMtGNeVeLHLqOnS42RmOC1%2BYbGnEbS1A2kL814ct9f1JzsxnJhpMLmD2jQbIxgzl%2FGaYAP2wS91YCYg%2FQCrqEX9PvYWWgLXYd%2BMSHTN2ESla6fDmwfiIiIjM%2FLl%2BF35TUrWZcpBtgkERAzPM8fzTSOGfB1TF3D%2BTW5gKfxQxUaemcMtrSb%2FKU2bC2Xgg7doK4BFLyFAVx49uFKPgafkoatGZx3Bsqt0QY5hx81TmxJxT6TaWAwn7mHu1fwJNyIwrOznIygUkHaIakmkOECQHz6LpeQbPcD6zJ62vCnlfyFxz9ctBls%2BFQd84LG3sYSXfoUZIHjyi54uF17dMfbPIzA2hzXSM5dm9RQu89nViUHaHV8JVB5%2B6noQ3Gcy06KJRcHoXGWatOEgckN8URd5D%2Br8AZq7vOwUBR1YC0U1fEB6HbVab12xWRo%2BbgVOtfiI5fdvgvjoZQUMyLmN9OAHWOj0jFHTGm2kt5wBDYtO2ePBEAJP6MzHrBUm1pnx65pDPfHn%2B6Ck1T3%2B475N%2B7zyNsJZRLpj%2FnCow%2B%2BufnLf%2BdiAkhsKP0XF9QYEJtAi9%2B1hn%2Blr22MHv9oYhVCUQlL%2F801ziYsOxmbTtLO1w%2FQwyY6KygY6pgFH%2B6O7ABu6LZSbIuXLWm2tcMIepGyzs5TS6ZrN59GunBALye0BOaJQeMc%2BHVStdtd7zvobkLckFVj73McAHovs3CUm7sIJ%2BAvaM1q%2FZDOz7NWQ%2F34s59oRsG6YSGH9wCq3owDFiB%2Fn%2F%2F2Ya2nv7XAc2AIE6VzQD3bcjFEkTsWrZx%2B8zyTBH6CQNEjbU%2BqqGFyGCPCnlyzYlByciBDqduVnGzjVwvGB&X-Amz-Signature=8c1db609156aabf615ed6aa473673617e3ce965f761fb26205ce9f7a26c65a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPYN3M2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDw25UjXqS37DXK%2BF6XItlOF%2BuOHguUfHA92RSlwWnOPAiBSzyOSGZPIg%2F%2FSghNyGwa5xO5FWGgeozaCSukqA3z3GSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMDfmtrIMWdcU%2F3EHuKtwDK93GJSn7U9dly7PxLKREZNMtGNeVeLHLqOnS42RmOC1%2BYbGnEbS1A2kL814ct9f1JzsxnJhpMLmD2jQbIxgzl%2FGaYAP2wS91YCYg%2FQCrqEX9PvYWWgLXYd%2BMSHTN2ESla6fDmwfiIiIjM%2FLl%2BF35TUrWZcpBtgkERAzPM8fzTSOGfB1TF3D%2BTW5gKfxQxUaemcMtrSb%2FKU2bC2Xgg7doK4BFLyFAVx49uFKPgafkoatGZx3Bsqt0QY5hx81TmxJxT6TaWAwn7mHu1fwJNyIwrOznIygUkHaIakmkOECQHz6LpeQbPcD6zJ62vCnlfyFxz9ctBls%2BFQd84LG3sYSXfoUZIHjyi54uF17dMfbPIzA2hzXSM5dm9RQu89nViUHaHV8JVB5%2B6noQ3Gcy06KJRcHoXGWatOEgckN8URd5D%2Br8AZq7vOwUBR1YC0U1fEB6HbVab12xWRo%2BbgVOtfiI5fdvgvjoZQUMyLmN9OAHWOj0jFHTGm2kt5wBDYtO2ePBEAJP6MzHrBUm1pnx65pDPfHn%2B6Ck1T3%2B475N%2B7zyNsJZRLpj%2FnCow%2B%2BufnLf%2BdiAkhsKP0XF9QYEJtAi9%2B1hn%2Blr22MHv9oYhVCUQlL%2F801ziYsOxmbTtLO1w%2FQwyY6KygY6pgFH%2B6O7ABu6LZSbIuXLWm2tcMIepGyzs5TS6ZrN59GunBALye0BOaJQeMc%2BHVStdtd7zvobkLckFVj73McAHovs3CUm7sIJ%2BAvaM1q%2FZDOz7NWQ%2F34s59oRsG6YSGH9wCq3owDFiB%2Fn%2F%2F2Ya2nv7XAc2AIE6VzQD3bcjFEkTsWrZx%2B8zyTBH6CQNEjbU%2BqqGFyGCPCnlyzYlByciBDqduVnGzjVwvGB&X-Amz-Signature=5d503272614f037632fefd135b884c4077e4012f0a5d31f09fcf23769444752c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
