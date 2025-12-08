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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5HNCYP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmGU0f49AE%2B2zsfHDt6KOvpPCz4oIeL3lfZ656yOrlkAIhAJoxzljTCs5DuLG0%2BLC%2F8kYRY43BW3E6KQnSZaZJK%2FLnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx66fT%2B1YUmhxDJiPwq3APjhloZg2vS82pT7tDQ7mfbzWzqqULcisujKzVYysHOTOpty1M%2BY5nMr7GtLeuDHmnBEpvrakSpstvm4ahmoptf4BHGjq8I52M0maTLbTulQM3DevcXqVseBlCYzQ7Ek6RyN9IPp0ImM4R9cW3Uog3ODHR4kv6vDtYdIkWnFu1jOtV2gO%2BjE9J%2FwcsT0qsMYk8sQX19eXpSvQQpp4vlUUVoHeW1hzvaYnURVdjc8d%2FthZjv20e%2BhuvcVmRPaPc%2FqLyYdvzbmned1FkkuhkygU03rbEug4RKZeNpHT6mavpAS15A%2Bg3xqB%2BmBDiFfuQKxPJf4zHUE05peKq5h%2F5uOj79V%2Blutr0lzQJu8bBwz55Zz8etAAClBDc4%2FLCMAgDUdpsdt91zBV2bYYDNxYSXzWw2%2FHQehbyiP5xnTJd8Kh0UdfijfVrZvstohvCECUWbLO%2FLddEbwPhURiXHQKEqv%2BpqK7wwwrBq0Q%2FrDtt624QaMCOeMvfDefVUA7kaSgIPTe46IFKhCrDc2e12z1JoQBmRKcebRLiJ3Z40BIxwG6yLECoOFYt7AYDyd20fWN1iyPM1Zk10abhyQPhbr47jI%2B1zbhW3r4XmveDyiSjbX2C%2B5HXRImSMdEsLOhwnsTC7j9vJBjqkAZM3GLa3nel8MOsng04bJUlkel385DC7Rw%2Fu%2BKwMo1eshBmAx%2B33rPQf7H0AG8RrZo%2F%2BJm%2BgqWF5qlnmWZC6ZU403n2RVl9VDJX8kM6zn9in6jhlWPTNp%2Be1j7wyED%2FqRtwnArU9%2FXAMdMF%2F5GOp70D9pha0hJYILoVvTrK%2FDHwbaNBAuitFPxsKUwhrJYSdjQbDH3O7DPw1U7XsF%2FEJ0HE0C2o9&X-Amz-Signature=3b206fef7fe502db3d60353e87ba49f6942d14e4b497a6a12ad76fd4cfec2f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E5HNCYP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T134530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmGU0f49AE%2B2zsfHDt6KOvpPCz4oIeL3lfZ656yOrlkAIhAJoxzljTCs5DuLG0%2BLC%2F8kYRY43BW3E6KQnSZaZJK%2FLnKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx66fT%2B1YUmhxDJiPwq3APjhloZg2vS82pT7tDQ7mfbzWzqqULcisujKzVYysHOTOpty1M%2BY5nMr7GtLeuDHmnBEpvrakSpstvm4ahmoptf4BHGjq8I52M0maTLbTulQM3DevcXqVseBlCYzQ7Ek6RyN9IPp0ImM4R9cW3Uog3ODHR4kv6vDtYdIkWnFu1jOtV2gO%2BjE9J%2FwcsT0qsMYk8sQX19eXpSvQQpp4vlUUVoHeW1hzvaYnURVdjc8d%2FthZjv20e%2BhuvcVmRPaPc%2FqLyYdvzbmned1FkkuhkygU03rbEug4RKZeNpHT6mavpAS15A%2Bg3xqB%2BmBDiFfuQKxPJf4zHUE05peKq5h%2F5uOj79V%2Blutr0lzQJu8bBwz55Zz8etAAClBDc4%2FLCMAgDUdpsdt91zBV2bYYDNxYSXzWw2%2FHQehbyiP5xnTJd8Kh0UdfijfVrZvstohvCECUWbLO%2FLddEbwPhURiXHQKEqv%2BpqK7wwwrBq0Q%2FrDtt624QaMCOeMvfDefVUA7kaSgIPTe46IFKhCrDc2e12z1JoQBmRKcebRLiJ3Z40BIxwG6yLECoOFYt7AYDyd20fWN1iyPM1Zk10abhyQPhbr47jI%2B1zbhW3r4XmveDyiSjbX2C%2B5HXRImSMdEsLOhwnsTC7j9vJBjqkAZM3GLa3nel8MOsng04bJUlkel385DC7Rw%2Fu%2BKwMo1eshBmAx%2B33rPQf7H0AG8RrZo%2F%2BJm%2BgqWF5qlnmWZC6ZU403n2RVl9VDJX8kM6zn9in6jhlWPTNp%2Be1j7wyED%2FqRtwnArU9%2FXAMdMF%2F5GOp70D9pha0hJYILoVvTrK%2FDHwbaNBAuitFPxsKUwhrJYSdjQbDH3O7DPw1U7XsF%2FEJ0HE0C2o9&X-Amz-Signature=6ab1ee571bee3f726876f43d99ae75e210951bd5227c7d0f2eee38918a2223a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
