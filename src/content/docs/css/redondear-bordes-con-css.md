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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQERNSA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK40zu810isgGtgCIydlY%2Boi5ajA1frQW8y03xXeTggQIhAI15zARGLoII4ed7bqpbSF6cT9Y6dF7czmTW3UIHnALzKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFwzeWRzbpDtUlLt8q3ANYzjz6ZjSeD7GHeMSbiRdEC7GO8fC%2BOpS%2BKwhGayJJjlEYUBrADMfAGnlSpM%2FrKFXtGL8G%2F3SAkO9nEVpSjRoVfd9YhlCrgKjsy8RRrEOPWVmKWbH3cNIvMNG1MbXoA89hMY%2B5zRIzN112ayAl2Z3vm4kxq5TqbKbWtfNxDs7%2FL3rw5mNygNsi%2BGMU7QrZj7z%2FfRtaBJfI8CR51M0lPKYGZIMhZ6kRKTjmexUARBHxlXLrsYksq%2F5a2YVgPR0JpKx9dVb9a1O%2FpML9yegSgoAf2wGcWDXEFi%2Fgk7DHWawYWzESMvQUSZwXCsMge7da3YqjA%2FdKzWLhoDmKBNB6zrostlj7ncnoz%2Bl0Mtm3TjQtoebpR0frsQW0cT3iPjpWgGHU8GWIjJ3oXhQz%2FOaaG1zYItgOTK%2FNUKzm8%2F8EUfKWJdwKLNYhYc761lruSaNkjJjVrJ9d9SxF2pbAZBnxCHxnYuLb2JTNwZpnV9Nr6oyz8srAzGhNbg5MuwzmHHBgwl2idLe1CbOqzl8TUUEtSbI0o8j9ljPqFg%2BCprbXTWPDNmWCZeevpQmScm0Tk55MMajLbHo0H%2FqRZ2zJMDEfXCOUfuweX3lbHEvmKgxxf7V3OM7QU3oGmSMJBn4JtTD53MbJBjqkAbYYUxt3v4zVd34XQfgPewAfUl4IX1w05PDt3iuNtdvzYdHg5B6LrPEegNBm3rbDTcg%2BP7EKeoT9aMug2W1UT2kjdWDW9%2FdI059aOqdQxYSAOYOnYuH2aqtjWxFCCTVBd1v2jCQ23Q9Bcb3y1Pyx8w4ZqvR0k7HoV7FNa9kYAp%2FszrU4jMI4sPqFctp8ZOUOc0bhVWPwtFrV66AwaYgwdZIhEiH3&X-Amz-Signature=1d445d156a317adc08dac3e9eb6b3d74fc233188e206d95b28f4fe8b0e55f854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQERNSA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK40zu810isgGtgCIydlY%2Boi5ajA1frQW8y03xXeTggQIhAI15zARGLoII4ed7bqpbSF6cT9Y6dF7czmTW3UIHnALzKv8DCEkQABoMNjM3NDIzMTgzODA1IgwFwzeWRzbpDtUlLt8q3ANYzjz6ZjSeD7GHeMSbiRdEC7GO8fC%2BOpS%2BKwhGayJJjlEYUBrADMfAGnlSpM%2FrKFXtGL8G%2F3SAkO9nEVpSjRoVfd9YhlCrgKjsy8RRrEOPWVmKWbH3cNIvMNG1MbXoA89hMY%2B5zRIzN112ayAl2Z3vm4kxq5TqbKbWtfNxDs7%2FL3rw5mNygNsi%2BGMU7QrZj7z%2FfRtaBJfI8CR51M0lPKYGZIMhZ6kRKTjmexUARBHxlXLrsYksq%2F5a2YVgPR0JpKx9dVb9a1O%2FpML9yegSgoAf2wGcWDXEFi%2Fgk7DHWawYWzESMvQUSZwXCsMge7da3YqjA%2FdKzWLhoDmKBNB6zrostlj7ncnoz%2Bl0Mtm3TjQtoebpR0frsQW0cT3iPjpWgGHU8GWIjJ3oXhQz%2FOaaG1zYItgOTK%2FNUKzm8%2F8EUfKWJdwKLNYhYc761lruSaNkjJjVrJ9d9SxF2pbAZBnxCHxnYuLb2JTNwZpnV9Nr6oyz8srAzGhNbg5MuwzmHHBgwl2idLe1CbOqzl8TUUEtSbI0o8j9ljPqFg%2BCprbXTWPDNmWCZeevpQmScm0Tk55MMajLbHo0H%2FqRZ2zJMDEfXCOUfuweX3lbHEvmKgxxf7V3OM7QU3oGmSMJBn4JtTD53MbJBjqkAbYYUxt3v4zVd34XQfgPewAfUl4IX1w05PDt3iuNtdvzYdHg5B6LrPEegNBm3rbDTcg%2BP7EKeoT9aMug2W1UT2kjdWDW9%2FdI059aOqdQxYSAOYOnYuH2aqtjWxFCCTVBd1v2jCQ23Q9Bcb3y1Pyx8w4ZqvR0k7HoV7FNa9kYAp%2FszrU4jMI4sPqFctp8ZOUOc0bhVWPwtFrV66AwaYgwdZIhEiH3&X-Amz-Signature=8f63866f9c976263b74473fccf3d066654289aaf00e4ff1ca2452503bdd0398b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
