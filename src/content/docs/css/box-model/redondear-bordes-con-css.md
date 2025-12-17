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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHTAE4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvS0qLTb1V%2BcLPVQhs6nXdF8qiazCimYf3IePHR5QvgIhAMY2vzoMyiZWqO%2Fbm6ctwX%2BlzLrZs%2B9mQg5JVEf%2BUlGtKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9HS8LUkhvfegKuOAq3AOk%2FXVIAbq3UN6N9j79IxV00qof1rSIKpeRhCQIEMFCVA2RSw353pIYvDpss7%2BAErU4JeYjLR5v8zwKxFLEeYkkpRstI7OxTsVQrg0RE%2BtkOhXiRvkilBZIO1YOJFqywKbeBakM4umcJJFfyEZDAkNIMCr0pDaGZSfvFJ3SVk3zUF1bLArfosdrnrTFLTXcADCAF0THOES7WLJQoFdap1VgSPv0OluTxf4ZkwZkoEDbyJlGBmeNG2LgZVTcIS4huk8NIJi%2Frqa%2BBwgK9zbOA5KYPYsfD9h706oU0gzi9arc5dTD1O5p7aZTTzeSR%2Bl16SuUt1Yxog0G%2F8WMz3ZWqmZ9r8mcI65k7SStwUjf0M9QhsgjQMs%2FyXyo7ykehzJbHupvziCXyviAqiP2qEagx3Rz91S%2FOCParOYsLBnJKHQvcOsktGx3bzJpJo7iqCNGOWk3emD4qnaLPq9rOR8vfu2pY93gurP9G%2BeG8tAa3lTb5NsHygscykRJCQPd9sIBTD24tU7BNupExrsHsiTLbqXe8cBsC0oeygosFOfot2gZ5smncykKErPCG7QK6Yqs95nx7pgECBic%2FSIS0mZ5b%2BHPvU1o%2BsrDyMN3zhogCpU1JBZN5hu2PBmrAFzCMDDo%2F4rKBjqkAXESPwV5y4HoED82%2BAUmnB%2FW7sofU7JwmYbtyPjaIKTL4PQ8%2Ff0Mp2B53wlYqsbK%2BiLvRoA9YuYJlgkBHZGwkR40D9WrAQe3Nl6%2BxiYXmjCA8Uv99p%2BejUBNnsG7jgJLhMzSzwZDD4NJCSHjQTC4wSXuNl8RpNOiYW9hArJabqqaIQNO2b%2BSEXL5KqFxttArKg6ohuhvuGDh0dynMONEPLHKTzjM&X-Amz-Signature=06c3ec98dbaa3b8196b45c04efe3768d210e2d1428ca5057b5464a3e2b1d536a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GHTAE4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvvS0qLTb1V%2BcLPVQhs6nXdF8qiazCimYf3IePHR5QvgIhAMY2vzoMyiZWqO%2Fbm6ctwX%2BlzLrZs%2B9mQg5JVEf%2BUlGtKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9HS8LUkhvfegKuOAq3AOk%2FXVIAbq3UN6N9j79IxV00qof1rSIKpeRhCQIEMFCVA2RSw353pIYvDpss7%2BAErU4JeYjLR5v8zwKxFLEeYkkpRstI7OxTsVQrg0RE%2BtkOhXiRvkilBZIO1YOJFqywKbeBakM4umcJJFfyEZDAkNIMCr0pDaGZSfvFJ3SVk3zUF1bLArfosdrnrTFLTXcADCAF0THOES7WLJQoFdap1VgSPv0OluTxf4ZkwZkoEDbyJlGBmeNG2LgZVTcIS4huk8NIJi%2Frqa%2BBwgK9zbOA5KYPYsfD9h706oU0gzi9arc5dTD1O5p7aZTTzeSR%2Bl16SuUt1Yxog0G%2F8WMz3ZWqmZ9r8mcI65k7SStwUjf0M9QhsgjQMs%2FyXyo7ykehzJbHupvziCXyviAqiP2qEagx3Rz91S%2FOCParOYsLBnJKHQvcOsktGx3bzJpJo7iqCNGOWk3emD4qnaLPq9rOR8vfu2pY93gurP9G%2BeG8tAa3lTb5NsHygscykRJCQPd9sIBTD24tU7BNupExrsHsiTLbqXe8cBsC0oeygosFOfot2gZ5smncykKErPCG7QK6Yqs95nx7pgECBic%2FSIS0mZ5b%2BHPvU1o%2BsrDyMN3zhogCpU1JBZN5hu2PBmrAFzCMDDo%2F4rKBjqkAXESPwV5y4HoED82%2BAUmnB%2FW7sofU7JwmYbtyPjaIKTL4PQ8%2Ff0Mp2B53wlYqsbK%2BiLvRoA9YuYJlgkBHZGwkR40D9WrAQe3Nl6%2BxiYXmjCA8Uv99p%2BejUBNnsG7jgJLhMzSzwZDD4NJCSHjQTC4wSXuNl8RpNOiYW9hArJabqqaIQNO2b%2BSEXL5KqFxttArKg6ohuhvuGDh0dynMONEPLHKTzjM&X-Amz-Signature=09593184112d9b704193f50a146c4fcd7a049de2188fe3ac6cc3371458306246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
