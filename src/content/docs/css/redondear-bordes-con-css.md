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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HOE4DD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCQHTk63CE%2B%2BEeuuX8VxKksTN7EGruGxHNQgxNIekKuDQIhAKFu0wh0hmiN5rewM8MVSAjK5ag%2FxPpXhMc%2BRrnZ%2BgjgKv8DCD8QABoMNjM3NDIzMTgzODA1Igyc3L8C1XBgjDvOqYMq3AN8ifY0CCiBnE7pjwpKG4%2FzIMQula4LTKbyNrRcyf7IK7T%2Bcd2aQ7go1V84oni0vqmo8PPwrr25ahumj6gYwnYO%2B%2BUwH8f0dv4s7xOYiGDERBYIJ8MFQ%2FJibEuBzpR%2FNtPN%2Bog1C5XFI1NIyNqXuKpm4%2FnLVliEq3rflEbQMSyNf20%2F5IMTbmjpKeKUd9Whmq3euUx9C76T70DjGcN%2FvaKJ5Xv6cMaFkmuo%2FYI0SVVbBNsLEFtSAwLHxjh0%2BYK6qdTS93kOq0JENkIsl9yQWlwamjJeQhjoKsQpxIR2FaG2s6l7GbTA1IXqyChY9nhFibSxasK6UwDw7PAHEKhuqG7K2CCjp52wbzWhxGsjtK0BXoGy%2FfrtXqVXOSQdzKrwXaYh87346sGdsd6ep6gzDObZJriNFjCAKQab7zSj9yKZIPKcXitkioRogycIQRJdc5qwuCAEE2OauK9kwARz3VLs7SPclHQu5BQRf3nbf%2F9rbGryJRcniPIxRX%2FISYHkjgYvHs0PRnFrg1OmzlMduYeM7AvxvajJW%2B%2BxCH%2BkD%2FjoxqldBTebxgcHmz67qAKfTprhAfnigrhJoBVDDUKJBp6%2BiuohPptjKWuPXT5qhFFgZTWDRhT66ra%2FBA%2FhSDCiy8TJBjqkAeBEXuhXZLBa1Qk1nQnm48Co5hRPJ0P%2B5QE4pgeWnsuZYd4UavzFGOdVozAr5UiuWr2uLF0VCNlLPOBKPjVAdLFOrK6A5r7qPWjgIpqE1zpbHdTWK4r0me9LFSyElibtPtq62pKSHe21KEBu%2Fmf7QJGgqdpi6688%2B8qYZoIMfVfoJsel8IcjH2QxpY53m%2BJAbviv98HQAGajmUZ1FsaOsGVajP6S&X-Amz-Signature=be412e203cd741279c672a6dc2074a47549e0edbde1a5ff33396beebc21369b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HOE4DD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQCQHTk63CE%2B%2BEeuuX8VxKksTN7EGruGxHNQgxNIekKuDQIhAKFu0wh0hmiN5rewM8MVSAjK5ag%2FxPpXhMc%2BRrnZ%2BgjgKv8DCD8QABoMNjM3NDIzMTgzODA1Igyc3L8C1XBgjDvOqYMq3AN8ifY0CCiBnE7pjwpKG4%2FzIMQula4LTKbyNrRcyf7IK7T%2Bcd2aQ7go1V84oni0vqmo8PPwrr25ahumj6gYwnYO%2B%2BUwH8f0dv4s7xOYiGDERBYIJ8MFQ%2FJibEuBzpR%2FNtPN%2Bog1C5XFI1NIyNqXuKpm4%2FnLVliEq3rflEbQMSyNf20%2F5IMTbmjpKeKUd9Whmq3euUx9C76T70DjGcN%2FvaKJ5Xv6cMaFkmuo%2FYI0SVVbBNsLEFtSAwLHxjh0%2BYK6qdTS93kOq0JENkIsl9yQWlwamjJeQhjoKsQpxIR2FaG2s6l7GbTA1IXqyChY9nhFibSxasK6UwDw7PAHEKhuqG7K2CCjp52wbzWhxGsjtK0BXoGy%2FfrtXqVXOSQdzKrwXaYh87346sGdsd6ep6gzDObZJriNFjCAKQab7zSj9yKZIPKcXitkioRogycIQRJdc5qwuCAEE2OauK9kwARz3VLs7SPclHQu5BQRf3nbf%2F9rbGryJRcniPIxRX%2FISYHkjgYvHs0PRnFrg1OmzlMduYeM7AvxvajJW%2B%2BxCH%2BkD%2FjoxqldBTebxgcHmz67qAKfTprhAfnigrhJoBVDDUKJBp6%2BiuohPptjKWuPXT5qhFFgZTWDRhT66ra%2FBA%2FhSDCiy8TJBjqkAeBEXuhXZLBa1Qk1nQnm48Co5hRPJ0P%2B5QE4pgeWnsuZYd4UavzFGOdVozAr5UiuWr2uLF0VCNlLPOBKPjVAdLFOrK6A5r7qPWjgIpqE1zpbHdTWK4r0me9LFSyElibtPtq62pKSHe21KEBu%2Fmf7QJGgqdpi6688%2B8qYZoIMfVfoJsel8IcjH2QxpY53m%2BJAbviv98HQAGajmUZ1FsaOsGVajP6S&X-Amz-Signature=9e2d42933eb6543713919698ce3c6d35d10f55db3c6085570fde05407747da29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
