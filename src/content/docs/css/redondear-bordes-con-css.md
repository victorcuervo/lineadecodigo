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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF5VXCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4%2FPj8%2BRDAXe3DJLPR8Y7zGlEWVb2dL6LhVoJ%2B2z7QXAiEAupTnQYgDkV2UL11XEvIHpoHeXf7HZexS803Wj%2FB8Taoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKMSOq%2BAhGHEpzIdxircA6B%2FW6H%2BPmlAnmX5hNL6IoBSkshW0eITM1tWx7t7J3XJ1HfZm%2Box44DoAx7Vwp7awJTrn8z5t413SBm2Hfogp7yUFMJxQrRmByCiS7pXl36lnuaWKRTvoJnXlVRYRINBQXIFWnT4Myy%2FXw7rFOL9Q%2FIvIwuciBPQG8Ar72nIroQ95xWErLngpgKDg8W7BgpqtB5b1G7sw2y%2FaH1wznRZtB7iFJ4XO6VU9Uud7DnlkLnRG3liuh27%2BtdE0Sq1Lp45JI62ZzElsJWo6DUsFgl80cCi5o5RFBYi7oHo9UeGvN3aoi8ySW8BjplQAjjMG1e5%2FuNUeg2%2FR090RzUIHF90MqxSKT0W8JlT7bvdrlxGunDHq4C2%2FSU2%2BdMiTb0vzMzTo0XPVZm9dbL1EDyut8o%2B75r6DcdkrwyAHRGcWU9B5kcCT6SLnlFsCEmUST11lFmfWyefYlxLxf7%2FRuGJ%2FpFV37P1WTErwhfnq%2FOqMroBIH%2FXiq6PnxhU24HClvZsPwfG6NDV9hoeFMb0kUqFuepeG%2BF936nzQCVxDLLpnViUY0PUxwgALi5EZLIjGrzb8l6%2FPGurr3g2ylLLk0Q2uqOfJbzzvwgYROL67lMR7eW7hEeE7LhRdB2QHUflYPpNMMbT0skGOqUBrTN%2B69QPMf3wjAkApqpX7yNbrQR1or0OJ3%2BrnKBK90hcDSbfuE8s1rSCXsIn75SiH3mUNCJ1lZEyxAJd7vpYUj5B10NcnL8SVxugDowoGjta0D%2FouCsV7LMHAkU9FFjQrNqy9rW03nZNjePuri8gTNt2wmpsc5tAKBenTsppjP8MLRZ8yrfC4NhU4MOwXHfb7ANm6wXxSZ%2F3lvIa8UlKS8Z8kCeb&X-Amz-Signature=54e094ef6b4d7fc8548ff1568e6f797ed9509bbf2f254a13b8d9530037b2ba8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBF5VXCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE4%2FPj8%2BRDAXe3DJLPR8Y7zGlEWVb2dL6LhVoJ%2B2z7QXAiEAupTnQYgDkV2UL11XEvIHpoHeXf7HZexS803Wj%2FB8Taoq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDKMSOq%2BAhGHEpzIdxircA6B%2FW6H%2BPmlAnmX5hNL6IoBSkshW0eITM1tWx7t7J3XJ1HfZm%2Box44DoAx7Vwp7awJTrn8z5t413SBm2Hfogp7yUFMJxQrRmByCiS7pXl36lnuaWKRTvoJnXlVRYRINBQXIFWnT4Myy%2FXw7rFOL9Q%2FIvIwuciBPQG8Ar72nIroQ95xWErLngpgKDg8W7BgpqtB5b1G7sw2y%2FaH1wznRZtB7iFJ4XO6VU9Uud7DnlkLnRG3liuh27%2BtdE0Sq1Lp45JI62ZzElsJWo6DUsFgl80cCi5o5RFBYi7oHo9UeGvN3aoi8ySW8BjplQAjjMG1e5%2FuNUeg2%2FR090RzUIHF90MqxSKT0W8JlT7bvdrlxGunDHq4C2%2FSU2%2BdMiTb0vzMzTo0XPVZm9dbL1EDyut8o%2B75r6DcdkrwyAHRGcWU9B5kcCT6SLnlFsCEmUST11lFmfWyefYlxLxf7%2FRuGJ%2FpFV37P1WTErwhfnq%2FOqMroBIH%2FXiq6PnxhU24HClvZsPwfG6NDV9hoeFMb0kUqFuepeG%2BF936nzQCVxDLLpnViUY0PUxwgALi5EZLIjGrzb8l6%2FPGurr3g2ylLLk0Q2uqOfJbzzvwgYROL67lMR7eW7hEeE7LhRdB2QHUflYPpNMMbT0skGOqUBrTN%2B69QPMf3wjAkApqpX7yNbrQR1or0OJ3%2BrnKBK90hcDSbfuE8s1rSCXsIn75SiH3mUNCJ1lZEyxAJd7vpYUj5B10NcnL8SVxugDowoGjta0D%2FouCsV7LMHAkU9FFjQrNqy9rW03nZNjePuri8gTNt2wmpsc5tAKBenTsppjP8MLRZ8yrfC4NhU4MOwXHfb7ANm6wXxSZ%2F3lvIa8UlKS8Z8kCeb&X-Amz-Signature=37267f47cb071d1ae9fe03d643553844ebb0c59b5f3298edb0346b3cd4873970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
