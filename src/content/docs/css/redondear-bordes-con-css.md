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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMKITF7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzu3YLwJCz4YO2nr0wK0FxT2DQBC1YdeJPmbl1oC2DAiAp4xYoAQJpxu0xwuPck4t5RZPXSeiE0KQbfIWLZzrTgiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkm%2Fk2x0kWRzS9hSKtwDci9rWR%2FUXWlU%2F3P32kiPVqV3PCJI9Clg54ybhlzvy6V2Apwqu0WNWQF0Wn8WcStY0DQbfhcpDr2GYFBffzdml3CljYLY8GIdf18iiUToABW3ehHKvlb6cOtY1mPXXjMTo%2FW0xFUWQeOtworyt3Jy9gUowm6iJCclvO7G%2Bld7b2RHMoex%2BYnHpD%2FKXYOspkmKBRhvWc61R%2BeR0%2FSxjmcHXTkQIvPAdiQt7vBh%2FKiuk4I6O%2BwhToSVHMzH3mUbIy8PSmok6BF8%2FZ3QQdG68QCCqStU%2Fmt2YzLtj8xMH7mrUvOeOsvWN%2FdDfsiPXIcKCVR9%2FXof4IA%2Fkon1Tv7Cbb7um21NyYy7EVGyceyulK7j016O3JI1VFHUZw6Od3Hz4aPQFGTG7QDBzTGZd1C8nso73nkcHFwFFgLaVag6o9HixfWkE9doQEOEuyNu1nTfiNZC5uDjVKZravbtvLtbXO8vKhBpJEP9u6%2BOubzJQoKeARA9%2BkfL1Fb5rU9tRBtYCH90hIcsUQT%2Bc0xC8NP5Miz4Or%2BrKQtLvWeG61vlgkK1GWlrxJRgdBMcrD6FGRxONLTBMbYBo5DtRQsS5%2BMZunqKk1t03bAladQGePQTLG7h1VgYqIsZimTFR%2BqKi6Mwg6nXyQY6pgGYIMqe6AOVPEzFL%2Bv6kUCA3FPhTT1MEPPbZpugxHXqZn7Qk%2Bk2hOlDMxc56lZeIH%2BOx8HxY7COxwBP41anPR3vWHoEdIFDbuwmXgZz%2BtPNQ%2FEF1hau%2Fys1Gw9NZT%2BR6oTbpHK9pkkeJi2TMo6ql8zso6RgpVzUDfH2%2BEmkW8Sni4EJVM0aes2W2yaItuf7iMzwtFmfSMj63FpUJ55r93H%2BpSOZ%2Fg2d&X-Amz-Signature=e6b9b1fa63bd4910545b7d5186af27ee6197de7bc94d7fdd2ecedbbe9930e502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIMKITF7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T195308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDBzu3YLwJCz4YO2nr0wK0FxT2DQBC1YdeJPmbl1oC2DAiAp4xYoAQJpxu0xwuPck4t5RZPXSeiE0KQbfIWLZzrTgiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhkm%2Fk2x0kWRzS9hSKtwDci9rWR%2FUXWlU%2F3P32kiPVqV3PCJI9Clg54ybhlzvy6V2Apwqu0WNWQF0Wn8WcStY0DQbfhcpDr2GYFBffzdml3CljYLY8GIdf18iiUToABW3ehHKvlb6cOtY1mPXXjMTo%2FW0xFUWQeOtworyt3Jy9gUowm6iJCclvO7G%2Bld7b2RHMoex%2BYnHpD%2FKXYOspkmKBRhvWc61R%2BeR0%2FSxjmcHXTkQIvPAdiQt7vBh%2FKiuk4I6O%2BwhToSVHMzH3mUbIy8PSmok6BF8%2FZ3QQdG68QCCqStU%2Fmt2YzLtj8xMH7mrUvOeOsvWN%2FdDfsiPXIcKCVR9%2FXof4IA%2Fkon1Tv7Cbb7um21NyYy7EVGyceyulK7j016O3JI1VFHUZw6Od3Hz4aPQFGTG7QDBzTGZd1C8nso73nkcHFwFFgLaVag6o9HixfWkE9doQEOEuyNu1nTfiNZC5uDjVKZravbtvLtbXO8vKhBpJEP9u6%2BOubzJQoKeARA9%2BkfL1Fb5rU9tRBtYCH90hIcsUQT%2Bc0xC8NP5Miz4Or%2BrKQtLvWeG61vlgkK1GWlrxJRgdBMcrD6FGRxONLTBMbYBo5DtRQsS5%2BMZunqKk1t03bAladQGePQTLG7h1VgYqIsZimTFR%2BqKi6Mwg6nXyQY6pgGYIMqe6AOVPEzFL%2Bv6kUCA3FPhTT1MEPPbZpugxHXqZn7Qk%2Bk2hOlDMxc56lZeIH%2BOx8HxY7COxwBP41anPR3vWHoEdIFDbuwmXgZz%2BtPNQ%2FEF1hau%2Fys1Gw9NZT%2BR6oTbpHK9pkkeJi2TMo6ql8zso6RgpVzUDfH2%2BEmkW8Sni4EJVM0aes2W2yaItuf7iMzwtFmfSMj63FpUJ55r93H%2BpSOZ%2Fg2d&X-Amz-Signature=ae5638a77421304f40604bf8154a448cc526ae196dc9264cb9194aaa216cf9af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
