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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIG7LTSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkbjI%2FvKYZNsGFP3qsHsEzq7JenrGaGOqt9%2FwcJFhhQIgemF%2BmVHgvhlCzhD1feEyhjU4zxOCKj7ObmUnJplQSbgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHqKzUNQA93YPJpuvCrcA9D53pmXKMqzL4jT5BHtazybqJCB5cdB2OprHzWgQJ89t6w%2FNdadpXnNNPq7eBNJHadpI0TZxTVVL%2BTz7jfV2OtgSooUxuvj8R14CUiytDs%2BDW2Dso%2F%2Bq23jHoTKJEGY7nVi366ejC4ekMAgn07WSgyBrZKx3GrYQmUxStBQhU7NFsoHpt%2FZchhCqCBg5e32JZ5ZCCM5HtrOIZoqY91e7h1sr%2FLwiw3T9V7tJJq1owAumttbRoTzbiMS1MBd8HFAicyoFAnvo%2FKxaG2E6v4RgCfhfYPclcnv4ZlfavjGwzajQGpKJRiV3qO6%2BkfkmyB0XaQOV3nYVJU1PqIg2xUtFza8WxlnBnWKU4LqjM5aUwW79vY2xlr0Ldx3s8EpNhBtwYWMe64ASnNh8p5It88HEhadxtZNRaibYPjEQPaxwnpaURulZrsQa9JUiNgC5USq90LUrMvbkyiE5GwzUGBevyotXxE9QwRxq3%2F8cSm8rQHRiBnhmVWl4KtnGi%2FLhnZzoaa239NuggjmnXGTeGvuiNh%2FO1zw1iCC2bWYXe6Mlil4SuEfrpMsEgZmA0RcF0GLjRx8wD7H8DNixebX9q%2FF%2BMIq%2FOu3ciFta8pNyycyp2OJAgTZ7w3MSVHU8OJUMPG3icoGOqUBUZcH0%2BH57sftwhCC9TVJAxdakTBpzxtcI%2BuNmi8uVc946E5sxmSrvgSh3crOE5QqZXcfnmhkav5bl2ITsvgk6omvezxPFe1rug2XpDR5rRIketHOJGDar8Dr4LaI5Qw4MstoeggB5TO%2FU%2FWBgyIgSEBZFcRXCY%2FRlGjFMuZQUSzxSGC33g94KwenBfI3Mg9p19OZDj5lxnn999IAUl7cG1nSeryj&X-Amz-Signature=dc1f94017aa8031553be147dd143b7bbcc2b4dac28db4fcbb9d299b6b81aa4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIG7LTSF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtkbjI%2FvKYZNsGFP3qsHsEzq7JenrGaGOqt9%2FwcJFhhQIgemF%2BmVHgvhlCzhD1feEyhjU4zxOCKj7ObmUnJplQSbgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHqKzUNQA93YPJpuvCrcA9D53pmXKMqzL4jT5BHtazybqJCB5cdB2OprHzWgQJ89t6w%2FNdadpXnNNPq7eBNJHadpI0TZxTVVL%2BTz7jfV2OtgSooUxuvj8R14CUiytDs%2BDW2Dso%2F%2Bq23jHoTKJEGY7nVi366ejC4ekMAgn07WSgyBrZKx3GrYQmUxStBQhU7NFsoHpt%2FZchhCqCBg5e32JZ5ZCCM5HtrOIZoqY91e7h1sr%2FLwiw3T9V7tJJq1owAumttbRoTzbiMS1MBd8HFAicyoFAnvo%2FKxaG2E6v4RgCfhfYPclcnv4ZlfavjGwzajQGpKJRiV3qO6%2BkfkmyB0XaQOV3nYVJU1PqIg2xUtFza8WxlnBnWKU4LqjM5aUwW79vY2xlr0Ldx3s8EpNhBtwYWMe64ASnNh8p5It88HEhadxtZNRaibYPjEQPaxwnpaURulZrsQa9JUiNgC5USq90LUrMvbkyiE5GwzUGBevyotXxE9QwRxq3%2F8cSm8rQHRiBnhmVWl4KtnGi%2FLhnZzoaa239NuggjmnXGTeGvuiNh%2FO1zw1iCC2bWYXe6Mlil4SuEfrpMsEgZmA0RcF0GLjRx8wD7H8DNixebX9q%2FF%2BMIq%2FOu3ciFta8pNyycyp2OJAgTZ7w3MSVHU8OJUMPG3icoGOqUBUZcH0%2BH57sftwhCC9TVJAxdakTBpzxtcI%2BuNmi8uVc946E5sxmSrvgSh3crOE5QqZXcfnmhkav5bl2ITsvgk6omvezxPFe1rug2XpDR5rRIketHOJGDar8Dr4LaI5Qw4MstoeggB5TO%2FU%2FWBgyIgSEBZFcRXCY%2FRlGjFMuZQUSzxSGC33g94KwenBfI3Mg9p19OZDj5lxnn999IAUl7cG1nSeryj&X-Amz-Signature=d1ef918c7e6381c980a02a4d7f62c1cce82187934d6ed211075e25dc6abe3496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
