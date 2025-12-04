---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C57MYVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDcopt2m5Xc8E5S4CURkMBQNob1nxyXjM0AUTvErAgesQIgeaujJJ3BueSbDorQ%2BihZqPxI2BpLnleECk6H27VQRKMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAt66%2BcGjBGUijJO3ircAwmJe6vmIegoGyXXM8eTGq0d7BnLDvPL6cntn56PY1QUIIiTmrQx8D1J0%2FcH0PTqFH88aPwyj9vWQjNabCzh8cdR5VDDmeoDC6vf2NUEhy6KjpjIoFh5zpr5lvOyxLhin%2BNtRfdiEBkOMS6MBJP5mqCFaIdtTQ9jyqO7U4ZHiU%2FcLPlGUjSg7Pg2cAfpt0rbtxX14wE2dj7V%2FynwSQfdjYzO46Dt1BiE6n1Vi2TAeKSiPTQTi7xTQA3G%2Bh%2BzQE%2Fu230WGG6yytnaqawnYYej%2Bs36%2B7q9OdNuj1Qz61amDDRMPvU4Ysj9QZiehCiYxj6exoRcOeFS1mrKtW4ETBnZuyUz6V8Vh3Bw%2B5lDyi01bVO4bzCyg%2FdrGJVSdEQY4QY0GgWHR2B6NrGT4buyo8yr3FqoNr6KbZ83ER%2FYYdYcpR%2F8c0hxm9S3ajZrdYGJSF5qa7s7nSVD2zdhQdku4mbJY0t%2Ft3WHmzzqKo8G2FMKuhEb3oWk0G2atwmvnaCEY9L4LlUCIKhmlKHPyo6xnbqaDlZkpb6nF1PYMzxTtXyKoT9eQ275SnXKKtrYxMwfxaMfSegEHInbD1HxSi4FRhqdfE1bJchSKEzl2cC%2F77JBuP8mXs81BVd3tE8z6VbRMMeQxMkGOqUBPMn6iVkf%2BcA4WmDsR5JkTcm5OQi%2FT6qoiGPgOEMZcbmYLqIEqENpi5YcN5sNXbtTVqpRjUMmcopSPDKsrkhrW3s3uXg4b%2BpNFz65VXsMIiIY3Alc8XvIIC4QkHMOBqiCRAJecqqrmyFCBhoFhFCsN1A%2BcZgoPNm3EuNfKR56P9CWlwmdPOs0gO6tT8NY%2BvEXgh5T1%2F%2F0QE%2F2MBge1VwJryaTZtam&X-Amz-Signature=06799a27d72cb55392e7eb7f91c7c5fa841161a5b162837c45ebe4d061cb46e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C57MYVI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDcopt2m5Xc8E5S4CURkMBQNob1nxyXjM0AUTvErAgesQIgeaujJJ3BueSbDorQ%2BihZqPxI2BpLnleECk6H27VQRKMq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDAt66%2BcGjBGUijJO3ircAwmJe6vmIegoGyXXM8eTGq0d7BnLDvPL6cntn56PY1QUIIiTmrQx8D1J0%2FcH0PTqFH88aPwyj9vWQjNabCzh8cdR5VDDmeoDC6vf2NUEhy6KjpjIoFh5zpr5lvOyxLhin%2BNtRfdiEBkOMS6MBJP5mqCFaIdtTQ9jyqO7U4ZHiU%2FcLPlGUjSg7Pg2cAfpt0rbtxX14wE2dj7V%2FynwSQfdjYzO46Dt1BiE6n1Vi2TAeKSiPTQTi7xTQA3G%2Bh%2BzQE%2Fu230WGG6yytnaqawnYYej%2Bs36%2B7q9OdNuj1Qz61amDDRMPvU4Ysj9QZiehCiYxj6exoRcOeFS1mrKtW4ETBnZuyUz6V8Vh3Bw%2B5lDyi01bVO4bzCyg%2FdrGJVSdEQY4QY0GgWHR2B6NrGT4buyo8yr3FqoNr6KbZ83ER%2FYYdYcpR%2F8c0hxm9S3ajZrdYGJSF5qa7s7nSVD2zdhQdku4mbJY0t%2Ft3WHmzzqKo8G2FMKuhEb3oWk0G2atwmvnaCEY9L4LlUCIKhmlKHPyo6xnbqaDlZkpb6nF1PYMzxTtXyKoT9eQ275SnXKKtrYxMwfxaMfSegEHInbD1HxSi4FRhqdfE1bJchSKEzl2cC%2F77JBuP8mXs81BVd3tE8z6VbRMMeQxMkGOqUBPMn6iVkf%2BcA4WmDsR5JkTcm5OQi%2FT6qoiGPgOEMZcbmYLqIEqENpi5YcN5sNXbtTVqpRjUMmcopSPDKsrkhrW3s3uXg4b%2BpNFz65VXsMIiIY3Alc8XvIIC4QkHMOBqiCRAJecqqrmyFCBhoFhFCsN1A%2BcZgoPNm3EuNfKR56P9CWlwmdPOs0gO6tT8NY%2BvEXgh5T1%2F%2F0QE%2F2MBge1VwJryaTZtam&X-Amz-Signature=c6419bef04933042afe95b04ccdf54d000c0b7acc70079b8791bbf102f5ef9a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
