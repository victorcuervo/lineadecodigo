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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PR3PKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQfiH1VaSmWWLP6ebMl7HKgGJ41lbKHmspe8Q6YcQg8AiAlJjov27BOG1QObrtYe9Lah5NR0yazcoFplT7r8KRNtSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMoiXyjVQwKk7M77HRKtwDc%2BvJg%2FcxYgkd43rdE4VGuuIUbeV3ouqyZ%2BfdypukhSZF9PTJH1jyjz%2FZK24Hn9OxdVK2tk3LzG3fB2TkzPkyJe77AS56A0V%2BpddWbJjPzPLmduhFEnegQX5BWl8tXlIegKQHlzTVYSCoErQSfat685OjdpESD218iPUuTUCuw12RwoggNneaoIAgLSaou%2Fzjfb3cPfwdg%2FHcc7Xx2bkqqihIUMGZprNBAW3D32hzZqAPwYE8hjP7bYuRWygEIW7peuTWFpJUxIgN8%2BUIp2VMQ1KwqiHB3JW9qUVNdhwIVXzE1xV13YO2GHkU7Zp5sandeGFI4NoCxqz%2BBRo0fivlLfIo5T%2BTl9rIgYr1bTJX4XE7zcApm5wE9Fz%2F0ErjjXEJmbMG1Fd01ZhSC%2Fx1G46hFOarsWf%2BV8VjTn26HapV9h2dC0E3n45ystChBC%2FOt9la3P84%2FvjXHWpDxnm41ckRwZKo%2BJDxHcxsjeGqJncIi8vUcXixKUGPPqKiGAhZSFjXYgPKt1TeIxDJzVegRZNDj42GUJDMgXMTYbnlZbxi20YjD%2BalsdA4VozxH8U6I1w6YF0PogtvFV619Lefcvjc13STVlUEb2tV8dvMJaZRiksn4Z28bevh3v8XFycwoeqIygY6pgHYONznKN26JyqgYKv5zKr6ZIrRNtfioHlL%2Be6Tu0U3I40baH7vcFYn0nz09LEXWHRcbUvkVA6qXlzrvKmUwgt7%2BqW0S7Ekzb3Pt%2BZ8kfRPE8X7nUXf%2FztHdlJEnnPH8I1sTCi8WQrFufmuevSntNewHJtZAhc%2BF8Idi%2Fz7lBqdk%2Fisxa5glBS15%2BYM0NuUyQb9d%2Bu5M%2BCS0mvVyi%2FWk1K5cFxE5Uko&X-Amz-Signature=b7f7901fdf13577e80a04ccc13413d085bc5c76ac56d16a23908585c97639968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5PR3PKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQfiH1VaSmWWLP6ebMl7HKgGJ41lbKHmspe8Q6YcQg8AiAlJjov27BOG1QObrtYe9Lah5NR0yazcoFplT7r8KRNtSr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMoiXyjVQwKk7M77HRKtwDc%2BvJg%2FcxYgkd43rdE4VGuuIUbeV3ouqyZ%2BfdypukhSZF9PTJH1jyjz%2FZK24Hn9OxdVK2tk3LzG3fB2TkzPkyJe77AS56A0V%2BpddWbJjPzPLmduhFEnegQX5BWl8tXlIegKQHlzTVYSCoErQSfat685OjdpESD218iPUuTUCuw12RwoggNneaoIAgLSaou%2Fzjfb3cPfwdg%2FHcc7Xx2bkqqihIUMGZprNBAW3D32hzZqAPwYE8hjP7bYuRWygEIW7peuTWFpJUxIgN8%2BUIp2VMQ1KwqiHB3JW9qUVNdhwIVXzE1xV13YO2GHkU7Zp5sandeGFI4NoCxqz%2BBRo0fivlLfIo5T%2BTl9rIgYr1bTJX4XE7zcApm5wE9Fz%2F0ErjjXEJmbMG1Fd01ZhSC%2Fx1G46hFOarsWf%2BV8VjTn26HapV9h2dC0E3n45ystChBC%2FOt9la3P84%2FvjXHWpDxnm41ckRwZKo%2BJDxHcxsjeGqJncIi8vUcXixKUGPPqKiGAhZSFjXYgPKt1TeIxDJzVegRZNDj42GUJDMgXMTYbnlZbxi20YjD%2BalsdA4VozxH8U6I1w6YF0PogtvFV619Lefcvjc13STVlUEb2tV8dvMJaZRiksn4Z28bevh3v8XFycwoeqIygY6pgHYONznKN26JyqgYKv5zKr6ZIrRNtfioHlL%2Be6Tu0U3I40baH7vcFYn0nz09LEXWHRcbUvkVA6qXlzrvKmUwgt7%2BqW0S7Ekzb3Pt%2BZ8kfRPE8X7nUXf%2FztHdlJEnnPH8I1sTCi8WQrFufmuevSntNewHJtZAhc%2BF8Idi%2Fz7lBqdk%2Fisxa5glBS15%2BYM0NuUyQb9d%2Bu5M%2BCS0mvVyi%2FWk1K5cFxE5Uko&X-Amz-Signature=2d0cf9c8d75ca5c2e052a156e39db7365f6f3ce1e5d2d28dc5b75bac4bd0aa51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
