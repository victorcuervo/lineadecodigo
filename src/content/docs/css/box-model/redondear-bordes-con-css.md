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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWKGWQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNigD9U30jAhX%2FR8UdFCrSN%2FrcfyBNIFy%2FxDvc%2FYWEzgIhAI%2Fp9OUEn3wTf%2FssV8gZqteGJdS%2BCZgq9sUuDR7tHORHKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5h937zo2LXYokjs4q3AOq9pBmc0N5nrjTWi9qRShBfR68zrjS9udknNPdoXDpWTnw6cJq6mryn4W6QaKA2RXoOctim6WIIjWm4%2BiMQTHqIgZzVYgFt3%2FemvTpswRHkJZCAjCbFRFV0FZHA%2B%2BrI5DVo4AwIl8hYm6ZZ8Q3X9VyBxPQsKfEOAkhRDXdLToFZFR0jcTfkB8VxnrciubKigjFUdw2YEF4q%2FYQjdtKHhMzyII8LGuO39uNMSHZj6esvkWrRVmgFNOsko6ONAQXu1AEFVnxNResXV2wUkn8rZR%2BtNYjKcfZMemeewnNyqMrX0N0zPKozdxJRVwOb3Ph%2FWkZhpguh5tJS7sO5uKJpFjfG7ir0rndmKK9CA88xWmd8qM8BG5Od0GKP72vYTBYKxJx4Tae7%2BhzKyeU1zmgtteKyibrW6AUPBIGS5wHpY4EV0AiQzAdgvzDpmULH1%2FxYeYPQX51S%2BO4YZzTxJCWlVzuymDMuJbqX%2Bjioj1ZmwWwqBIex%2BHadZ0rxVQlwz8dJQdVyHLypwtuvT91IrE3tGwGCNxPemW9rxdmRrToHnJA%2B8jdn81yjle2DQE8jNMP9CjMIFlty0wO%2FPXwkSayLrjPxeyOcg9QsdtbE1bsFlC8givCBH%2BbWFc12HVvxzDNxYrKBjqkAXPCjeOpgcYZojlNXMX2cmg8%2BUJ2hjGA2Ybp3dWV0C2Pg3ZSzG%2FG%2BTfRHsEadgGG0eaq83UTLSCQeR2CALCBAyayIf18kK276QbYctRFwX433JWKPg5wihDiTxZrAoRTCvi9%2FPxNVXCkAKrx015Lh2vesAaUfvAI6DRkhTLPWED8h%2BPQQEhFnWadPwXs4dVnLCsBj1i27jROBluh2RGuZn9zvuE0&X-Amz-Signature=ac14d73ce3b8e3f25b508fa4c51f45e89ec5b98f0e073c2251fc8bc9d23d6a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWKGWQ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNigD9U30jAhX%2FR8UdFCrSN%2FrcfyBNIFy%2FxDvc%2FYWEzgIhAI%2Fp9OUEn3wTf%2FssV8gZqteGJdS%2BCZgq9sUuDR7tHORHKv8DCH4QABoMNjM3NDIzMTgzODA1Igw5h937zo2LXYokjs4q3AOq9pBmc0N5nrjTWi9qRShBfR68zrjS9udknNPdoXDpWTnw6cJq6mryn4W6QaKA2RXoOctim6WIIjWm4%2BiMQTHqIgZzVYgFt3%2FemvTpswRHkJZCAjCbFRFV0FZHA%2B%2BrI5DVo4AwIl8hYm6ZZ8Q3X9VyBxPQsKfEOAkhRDXdLToFZFR0jcTfkB8VxnrciubKigjFUdw2YEF4q%2FYQjdtKHhMzyII8LGuO39uNMSHZj6esvkWrRVmgFNOsko6ONAQXu1AEFVnxNResXV2wUkn8rZR%2BtNYjKcfZMemeewnNyqMrX0N0zPKozdxJRVwOb3Ph%2FWkZhpguh5tJS7sO5uKJpFjfG7ir0rndmKK9CA88xWmd8qM8BG5Od0GKP72vYTBYKxJx4Tae7%2BhzKyeU1zmgtteKyibrW6AUPBIGS5wHpY4EV0AiQzAdgvzDpmULH1%2FxYeYPQX51S%2BO4YZzTxJCWlVzuymDMuJbqX%2Bjioj1ZmwWwqBIex%2BHadZ0rxVQlwz8dJQdVyHLypwtuvT91IrE3tGwGCNxPemW9rxdmRrToHnJA%2B8jdn81yjle2DQE8jNMP9CjMIFlty0wO%2FPXwkSayLrjPxeyOcg9QsdtbE1bsFlC8givCBH%2BbWFc12HVvxzDNxYrKBjqkAXPCjeOpgcYZojlNXMX2cmg8%2BUJ2hjGA2Ybp3dWV0C2Pg3ZSzG%2FG%2BTfRHsEadgGG0eaq83UTLSCQeR2CALCBAyayIf18kK276QbYctRFwX433JWKPg5wihDiTxZrAoRTCvi9%2FPxNVXCkAKrx015Lh2vesAaUfvAI6DRkhTLPWED8h%2BPQQEhFnWadPwXs4dVnLCsBj1i27jROBluh2RGuZn9zvuE0&X-Amz-Signature=3663c87500f0ae0620890e352d0819f07ff8ad66c68e614aa76460e7e805d1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
