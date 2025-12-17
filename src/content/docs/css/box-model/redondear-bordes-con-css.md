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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJSJM2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BtZY1HKT7ibONXlORnH1UYfFBQ%2Bz1qFTJZVJrS%2FQjXAiEAsuxDUalfuvIcOTAviwZ%2BNgfjs281AQsF4ifB7%2FIcwrIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeJHN6CJzX8Zucj9SrcA261Q4SwsBBCxRoLdxcE6Inzlm9Lct%2FVOd79ElL%2B4jAqkxMmEqVfw7QD3Cyi2JVZVcy6q8aP%2BLPcf9oPtMoJ%2FngfguEtr0s%2BUN%2B6GDxl8bt1InILK4%2FS2pq0I0tiq5T%2BIKBw01GYmR%2FDvw%2FkcY4n%2BzoJSXvXOGF5VCPCb1MqLHfnfSAxI5yeB44wLgVdQfgyiULapQTbJKuCFDZGeTGNlEL8Hb6Wzx53pY3CbAtIWmMiFLcVQ9AFAps%2BPHZ46OjFS6BY3L9YrXHFHdseY6%2BsHR8AuD2SiY17gKkv2cg8TfdYDafwWHWcgETxHZy7tlumJM%2B7fDRBI7J2z0LHZEbQi89YS1tUvytlduPS%2FYKA54EOoNZtu6AK5%2BH9kvsgv0CWITTnxUSyfEJfNYQGgaU55MyYK54klSjRoitoqs42moOzRckml7uNPkIIilh7dM4WU%2Bkd5wBGVomn5ViTuX6HCqz%2FrpO4JHPD3Pbppd5WmKAxqmlrZKpPWQ3x4wz1qpoIJU%2FD86AaI4MQ%2BC4hNYhzfAzflV5OVDLUHNp4QfleXByS1gsl6SO%2BrFDsUBm1SPv%2Fcf70ab0N6JA%2FrZ3r4oh3z%2BdTm81Dtjeixsgpj5jAfXKkTre3ponS3eVLTRSsMJyujMoGOqUBwrSgV9Ds0hNUwiFXlaPotJnzHGR%2BxvYg0xXrNFubx6OPJsithd7cekw60elGJBTK1tk0k5RAtuGDxlfeoMNIIIw8fylMT4uGzz3gikRj83mo1TArMdHEczCELQn%2Bt0iHxkwZYP7qYkBRZQec39UFCS2BWXd1PrNPSLtdJNhpYnvEhlkUyAUesK3CraABu5jE%2Bw2zHUZc2xVN2XQ1HGWD4JFjH%2B%2B6&X-Amz-Signature=cefec71704062229d5d8c5f4e8424b5ba92ee1086c722b8fdbd7121baff682a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJJSJM2D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2BtZY1HKT7ibONXlORnH1UYfFBQ%2Bz1qFTJZVJrS%2FQjXAiEAsuxDUalfuvIcOTAviwZ%2BNgfjs281AQsF4ifB7%2FIcwrIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAeJHN6CJzX8Zucj9SrcA261Q4SwsBBCxRoLdxcE6Inzlm9Lct%2FVOd79ElL%2B4jAqkxMmEqVfw7QD3Cyi2JVZVcy6q8aP%2BLPcf9oPtMoJ%2FngfguEtr0s%2BUN%2B6GDxl8bt1InILK4%2FS2pq0I0tiq5T%2BIKBw01GYmR%2FDvw%2FkcY4n%2BzoJSXvXOGF5VCPCb1MqLHfnfSAxI5yeB44wLgVdQfgyiULapQTbJKuCFDZGeTGNlEL8Hb6Wzx53pY3CbAtIWmMiFLcVQ9AFAps%2BPHZ46OjFS6BY3L9YrXHFHdseY6%2BsHR8AuD2SiY17gKkv2cg8TfdYDafwWHWcgETxHZy7tlumJM%2B7fDRBI7J2z0LHZEbQi89YS1tUvytlduPS%2FYKA54EOoNZtu6AK5%2BH9kvsgv0CWITTnxUSyfEJfNYQGgaU55MyYK54klSjRoitoqs42moOzRckml7uNPkIIilh7dM4WU%2Bkd5wBGVomn5ViTuX6HCqz%2FrpO4JHPD3Pbppd5WmKAxqmlrZKpPWQ3x4wz1qpoIJU%2FD86AaI4MQ%2BC4hNYhzfAzflV5OVDLUHNp4QfleXByS1gsl6SO%2BrFDsUBm1SPv%2Fcf70ab0N6JA%2FrZ3r4oh3z%2BdTm81Dtjeixsgpj5jAfXKkTre3ponS3eVLTRSsMJyujMoGOqUBwrSgV9Ds0hNUwiFXlaPotJnzHGR%2BxvYg0xXrNFubx6OPJsithd7cekw60elGJBTK1tk0k5RAtuGDxlfeoMNIIIw8fylMT4uGzz3gikRj83mo1TArMdHEczCELQn%2Bt0iHxkwZYP7qYkBRZQec39UFCS2BWXd1PrNPSLtdJNhpYnvEhlkUyAUesK3CraABu5jE%2Bw2zHUZc2xVN2XQ1HGWD4JFjH%2B%2B6&X-Amz-Signature=0b0b8653bf1a5bd9e45dcefbea5d952cdd28e46fb4f8c49ec571bd0da2cabdd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
