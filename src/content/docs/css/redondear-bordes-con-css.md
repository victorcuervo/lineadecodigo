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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5K7ET6O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiNUzf7peUUAppDYR2%2BuWXSwIRFwcWe2c5PGZFrO7nxAiEA7H9GddMjzBwtv8ZSFlIDvcJQk0bc6krClbp3NtkQ2PYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQUKZxbHKYixnNU1ircAxp9ForoWNwrhOzGsPJt%2BCkyDHBaf64vTRaBGvanu%2FE9AltFu2MU0JfT65tPezNqmRo%2BCcX%2FCVCb6VtHw94bJaLOyFDJnkX%2B7lV5BFQ2KpZJSrLioeJZkwIiLkzVufT3vPkvLDP%2BePGax%2BExxPxaGSQlDNdx5%2BHL6N2OoTBXdERzzEU7i3wCPSdLiCH3hMo1PGgyoT%2F9enZwy152FYm1iPt5NRzpuJlA5QWovWxZAePfZt5nfnaBQmD2aFBe%2BqUt3j4B4P4B0aWyL9BqkLNMlsdpyrVwcdqunD3tqYy%2B10jmT5VYBNLr7XQ16Ouhvt6hjQRn%2F%2FIMCBx00pEAyze%2BySqCW0XhPciXB8Sf1P7C3%2Bu15AmLujJ%2BjKEiAAOyIarSDIleox0Ca1SRL37eEx%2FCdI9A6asuwjs7YsGqTx5pKOt25rFzPPn%2Fo8C03b%2Fu7HbkbutjX5L2wQvpw3ywWrveIruBdU0ht8VTxmrXW%2BvNliTfCqoQ4AyToI5MIJmC4DtimeZeGTBTb2dsy5eXpxUkTUzzX%2FZWkap0WyZd5oJ7Zuwq%2Brg19%2F0XKk9wsEZwzcdu6A0pefCbcOmMKbPCpy%2FXGxnmhU9%2F0XJnJc9wry%2FYCnyjP41kU5wnCpGDJJAyMKe81skGOqUBTD%2FcUK7fmTthFPPVaw5B3VabERGREAPYrWpopQT2ueUQNjaNBNPWv1Rp%2FWlaIMB%2BRVIrdBVcCrdMqdhJfuVvuwALJLgs5i2MRNPNv4v4jzMjaSiytTMypoGrzpsG1x%2FwObxSu3Yt9SqY95lUWK3XOG0HaXGNsWQaPloxIUnFEQ%2FEZQq6XUEuz%2FkrQF5YXPhMjH%2BpEIsM9KtEWzvoQkibfoupUnIE&X-Amz-Signature=e00078558b0a48b4820e96590e750914fc9ed4424f714f293c32e77a4d58bed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5K7ET6O%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T161201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiNUzf7peUUAppDYR2%2BuWXSwIRFwcWe2c5PGZFrO7nxAiEA7H9GddMjzBwtv8ZSFlIDvcJQk0bc6krClbp3NtkQ2PYqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOQUKZxbHKYixnNU1ircAxp9ForoWNwrhOzGsPJt%2BCkyDHBaf64vTRaBGvanu%2FE9AltFu2MU0JfT65tPezNqmRo%2BCcX%2FCVCb6VtHw94bJaLOyFDJnkX%2B7lV5BFQ2KpZJSrLioeJZkwIiLkzVufT3vPkvLDP%2BePGax%2BExxPxaGSQlDNdx5%2BHL6N2OoTBXdERzzEU7i3wCPSdLiCH3hMo1PGgyoT%2F9enZwy152FYm1iPt5NRzpuJlA5QWovWxZAePfZt5nfnaBQmD2aFBe%2BqUt3j4B4P4B0aWyL9BqkLNMlsdpyrVwcdqunD3tqYy%2B10jmT5VYBNLr7XQ16Ouhvt6hjQRn%2F%2FIMCBx00pEAyze%2BySqCW0XhPciXB8Sf1P7C3%2Bu15AmLujJ%2BjKEiAAOyIarSDIleox0Ca1SRL37eEx%2FCdI9A6asuwjs7YsGqTx5pKOt25rFzPPn%2Fo8C03b%2Fu7HbkbutjX5L2wQvpw3ywWrveIruBdU0ht8VTxmrXW%2BvNliTfCqoQ4AyToI5MIJmC4DtimeZeGTBTb2dsy5eXpxUkTUzzX%2FZWkap0WyZd5oJ7Zuwq%2Brg19%2F0XKk9wsEZwzcdu6A0pefCbcOmMKbPCpy%2FXGxnmhU9%2F0XJnJc9wry%2FYCnyjP41kU5wnCpGDJJAyMKe81skGOqUBTD%2FcUK7fmTthFPPVaw5B3VabERGREAPYrWpopQT2ueUQNjaNBNPWv1Rp%2FWlaIMB%2BRVIrdBVcCrdMqdhJfuVvuwALJLgs5i2MRNPNv4v4jzMjaSiytTMypoGrzpsG1x%2FwObxSu3Yt9SqY95lUWK3XOG0HaXGNsWQaPloxIUnFEQ%2FEZQq6XUEuz%2FkrQF5YXPhMjH%2BpEIsM9KtEWzvoQkibfoupUnIE&X-Amz-Signature=edb6a6e4c5d59170678c1f790133778dfc0c537a987a13c50ae181bdebd06af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
