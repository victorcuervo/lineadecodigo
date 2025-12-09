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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3H7HTKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6wWJA%2FOjrT%2Bj76uPxu2gcTjBv5WdQdjYYPKFxepuPKAiBhsbhqnbUxiWDC10fp%2BknNsdqtjeOcH3QDtbVA60LXIiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13Bn9NGMr%2Bpx8goKtwD1JakWSwtIhh0LCZqPERTJueZsFPhfek%2BNvex4HJziP6hilvxpCzpnk0sVAOLmg8z0lmrbCQ5%2BG6p0t2vr8b%2FFjXXosCSvHB16q0IdtjnSEdC4QSsGs6oHTclcpduHJsFevXQPYnifpiuRwx2povhQmYLOHGPuemMVYt5YTxdEAUipFaDGknaAasZK4Bf9eY3EGwhL3tQ%2BwZ9nYzfrjAzvABods2V7fDzNClEn3KdS6uCpWyV6fHc7MMcMy9geoU%2BGsf0eP4ZB2LtkGfpAb39YWrxru8Q5ZfY419gUnIDlcBk85%2F4MIfL1%2BLfCKI7C4nqP8txXXxTKUTvTSHnC8Rahe%2FXEwl63HtFDgpbBO6eHWY6I7ZD8QsEWpELQBGKWFB195ZJj4i7sC20EZ5FjXMj67%2BedDnezel%2BNLypL5bN9dAkjrn7sLfNVhm0ZVqnKd0kdpEYU12aUc%2FIKidGLMUmxFnefJ8oBLtJSYvTBqxdOYUgFhQ2NJ8AZvvKlK5miy7dW3ak%2BT3shiJQWISQINLhWTvccx%2FoqOPfsAbD0R%2FgfMP0fHpxJRGQo6RSo%2FhfHQErl9qgumwHXWPNysnv%2Bbadw897Md%2FWMy4AkH9k1skJ69RLnYqAnjQUQ1OgYdIw5sLdyQY6pgF3NJgAQW%2BcyIcqEkTsxU3vXyZsjQBLCoSgs%2BRomXXaeZ2m08fggt4fNhtthAv%2B8oa7LcxmfPEJui8uax8nGCdmb4GjAyVwSuzd38LOGYEaOV%2BWbgkPekF8WWE2EJss9xjNzJ62aDlv8%2FUiT%2B%2BxWRgrCB1oz%2B2rvBSnYGEQY4a6PSwtzPj5hluzrtRh1RQ159A7JJjdJySVuvkrd%2Fs53ma4i0QkjY2U&X-Amz-Signature=ec0aeed4dc522f053107358adfa5930c05ccc31e04dc87ee4cc076c9e24d57ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3H7HTKW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA6wWJA%2FOjrT%2Bj76uPxu2gcTjBv5WdQdjYYPKFxepuPKAiBhsbhqnbUxiWDC10fp%2BknNsdqtjeOcH3QDtbVA60LXIiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMa13Bn9NGMr%2Bpx8goKtwD1JakWSwtIhh0LCZqPERTJueZsFPhfek%2BNvex4HJziP6hilvxpCzpnk0sVAOLmg8z0lmrbCQ5%2BG6p0t2vr8b%2FFjXXosCSvHB16q0IdtjnSEdC4QSsGs6oHTclcpduHJsFevXQPYnifpiuRwx2povhQmYLOHGPuemMVYt5YTxdEAUipFaDGknaAasZK4Bf9eY3EGwhL3tQ%2BwZ9nYzfrjAzvABods2V7fDzNClEn3KdS6uCpWyV6fHc7MMcMy9geoU%2BGsf0eP4ZB2LtkGfpAb39YWrxru8Q5ZfY419gUnIDlcBk85%2F4MIfL1%2BLfCKI7C4nqP8txXXxTKUTvTSHnC8Rahe%2FXEwl63HtFDgpbBO6eHWY6I7ZD8QsEWpELQBGKWFB195ZJj4i7sC20EZ5FjXMj67%2BedDnezel%2BNLypL5bN9dAkjrn7sLfNVhm0ZVqnKd0kdpEYU12aUc%2FIKidGLMUmxFnefJ8oBLtJSYvTBqxdOYUgFhQ2NJ8AZvvKlK5miy7dW3ak%2BT3shiJQWISQINLhWTvccx%2FoqOPfsAbD0R%2FgfMP0fHpxJRGQo6RSo%2FhfHQErl9qgumwHXWPNysnv%2Bbadw897Md%2FWMy4AkH9k1skJ69RLnYqAnjQUQ1OgYdIw5sLdyQY6pgF3NJgAQW%2BcyIcqEkTsxU3vXyZsjQBLCoSgs%2BRomXXaeZ2m08fggt4fNhtthAv%2B8oa7LcxmfPEJui8uax8nGCdmb4GjAyVwSuzd38LOGYEaOV%2BWbgkPekF8WWE2EJss9xjNzJ62aDlv8%2FUiT%2B%2BxWRgrCB1oz%2B2rvBSnYGEQY4a6PSwtzPj5hluzrtRh1RQ159A7JJjdJySVuvkrd%2Fs53ma4i0QkjY2U&X-Amz-Signature=c1388ad0f109f2daa1165e524afddfcd5f63ff4d1dc531d913fa1cf688ebe88a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
