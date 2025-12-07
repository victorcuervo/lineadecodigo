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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFT7VCCO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2B9gZM8vNWCr4Kg9MM%2B9djfnborSL8xkb4hXWxwhaVwIgRd3R9Uq8yxj%2BygpnT0zlfqRybCXJ30%2FLfT5l6w3wNZsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3hb%2Bu%2FbA1l7OAjVCrcA4Y%2FqK5BM7YuDJ589fEJg4w4hYqfUdS5bF8Ta4T%2BW8%2FWiyineDHuUzFs1roQ7V3ACVjRpFMsxP19T%2B9Bh0VgtG02Mz%2BE0KcdzDkDjt2gaIeoMAieBQ%2BXdlXOsczR%2BX4ixoBgeODFUTa4Od2VxO3ELh5WQvS5xu9plLdcekuAs7d7BJM1CdK%2Fl2WyNR62OZnHeHEGMm5LOyjvv8oSieGBXFKPfJlXYc6080SlzjPIUj2V924l1EoMj4wiH27uPlwKzagYiKFw9ZYFBampyyFLzMB0i9eIInAY3ygk1blijwbOEjvG6M3GTfExpe68cRID57dtz%2BjlGYwJJPal1kdaL289n6GvpUa87qncg%2Btf7jfrUel3S4BqRXO3wtWSz6uaWauu460%2FXjjG3zeYNNZQBP4lGLM5mNcejAFdYGqD0Tg%2FYGr8etWnNPM4qku%2FkkHNSm3F6E3kUg9aGIw%2FAgA%2F0Gk9hRelA3n8BNgmjEt2aJRVEVa5nhtbFDNNdlpQ9M1oQXEuCdNeU0d1F1QYVKyWaozuhTEcnA3Agq0WESUu9%2BTHIacpgQPnPpa3ZIRm1KRmwtT5OxXEmT2i4Tis8Fq5jI7S%2B%2BQ1BPZcwcqEPO6a7l9ChBKo2Qxajg1rAlugMNHH18kGOqUBsBO1Ydi%2B8rJ96jk7%2FSjO4iDqUvz56bZzkLgDF%2FistKFnmBXj4ZFtiDO6WuqBqF8%2FaUBpfn1dgH1dC9L6VvXxN651MijUvb4iu%2BHecZJD4NIwpth9xaqargUuLwOUwud1RXbesvE7FJDZQxNxuUmesabHmgexP%2F8AApH4%2B8U8pQRMdqpfIslYEjk%2BpAmHUcdfDQwuEwixtzZJ9eF7c%2FNKhooThIAF&X-Amz-Signature=0ac25fb861dff313580196c25a3b35462faee6b209fc11fd8c8502974ad376e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFT7VCCO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T215744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDS%2B9gZM8vNWCr4Kg9MM%2B9djfnborSL8xkb4hXWxwhaVwIgRd3R9Uq8yxj%2BygpnT0zlfqRybCXJ30%2FLfT5l6w3wNZsqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3hb%2Bu%2FbA1l7OAjVCrcA4Y%2FqK5BM7YuDJ589fEJg4w4hYqfUdS5bF8Ta4T%2BW8%2FWiyineDHuUzFs1roQ7V3ACVjRpFMsxP19T%2B9Bh0VgtG02Mz%2BE0KcdzDkDjt2gaIeoMAieBQ%2BXdlXOsczR%2BX4ixoBgeODFUTa4Od2VxO3ELh5WQvS5xu9plLdcekuAs7d7BJM1CdK%2Fl2WyNR62OZnHeHEGMm5LOyjvv8oSieGBXFKPfJlXYc6080SlzjPIUj2V924l1EoMj4wiH27uPlwKzagYiKFw9ZYFBampyyFLzMB0i9eIInAY3ygk1blijwbOEjvG6M3GTfExpe68cRID57dtz%2BjlGYwJJPal1kdaL289n6GvpUa87qncg%2Btf7jfrUel3S4BqRXO3wtWSz6uaWauu460%2FXjjG3zeYNNZQBP4lGLM5mNcejAFdYGqD0Tg%2FYGr8etWnNPM4qku%2FkkHNSm3F6E3kUg9aGIw%2FAgA%2F0Gk9hRelA3n8BNgmjEt2aJRVEVa5nhtbFDNNdlpQ9M1oQXEuCdNeU0d1F1QYVKyWaozuhTEcnA3Agq0WESUu9%2BTHIacpgQPnPpa3ZIRm1KRmwtT5OxXEmT2i4Tis8Fq5jI7S%2B%2BQ1BPZcwcqEPO6a7l9ChBKo2Qxajg1rAlugMNHH18kGOqUBsBO1Ydi%2B8rJ96jk7%2FSjO4iDqUvz56bZzkLgDF%2FistKFnmBXj4ZFtiDO6WuqBqF8%2FaUBpfn1dgH1dC9L6VvXxN651MijUvb4iu%2BHecZJD4NIwpth9xaqargUuLwOUwud1RXbesvE7FJDZQxNxuUmesabHmgexP%2F8AApH4%2B8U8pQRMdqpfIslYEjk%2BpAmHUcdfDQwuEwixtzZJ9eF7c%2FNKhooThIAF&X-Amz-Signature=b74a3eab463fa9b19f26164e19f36d91a66ebe2877d20c94f0b97fc586dff0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
