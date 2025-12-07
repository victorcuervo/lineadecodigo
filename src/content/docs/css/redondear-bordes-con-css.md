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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQDAUGO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3nG6U5ffOpPaaiFLIU7cPF7rVZPx%2Bq9g%2B00v%2BiS%2F6zAiBB3poEDEzahiDINS4h5%2Fmpb45pKGFNjKhtiX7NukjS7CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx8HN3vxAHEeMoD9MKtwDyQqNt5ra51zDKoFkGrkEb8z5igOWyTAd742hilbXMI%2Bz%2FIx7GyD5Za84WRcralZfoF54kCqdrdkbsuLcb6nR2mcf4wHmJdNfC6qvPrOzLUOH0xmfLdlQ%2Fu286RPhI5qhK9m0wATl%2FqKG%2FXSF5wcMQGauXVEqDVzV%2F%2BfW8wT52a5bWL4BN91uK51Vnw7ef3qGYW16z9NzsvyOgz29Xfx2Cur8MckdUYmtUpxDo65pAYqXfzfpfx3ep8Y0PyypDaS%2F5VsRo6ZL0jkhlyfncak9XuM2JFDUp3oZmwV3j41cYz8Z6ih435uU5NeSkqe%2FyB412AOo5jCGUEXjqO6V0RGDxv%2BR%2BA8bkO6Z7XboXB4AtCPf7ZXwusR5V7%2F8enYFyyBeqIxSOBkf%2FK5pCxkrrMmK2msQXu9JJFoHGBvqJSOal5wA9Gx1H7qFEVckzXBaKqYEMc65M4YcofCDztgnnBWswwFK%2BED%2FjiyZ2b%2B35T2n6DtwAqfqgu0jbPs1zhdP0XUXnhXtVkr2FNWlWjz7nHibp539qKPQzq91VNFyuT4rIAZJgJmwLr%2Fhv%2FXbe3kdXd8xmZeU8UxKnDCXkIBAgedEFnIjXrBqrE%2FgvHGgMg3vDrFVhAeAfT3oyfm1noAw2%2F3SyQY6pgHMgzern%2BZU1V7ncZFWY5Dbe3eiPkRLjDuGR2z68slcDO0CCc5gY4SFxnvnld%2Fi%2F04sMmuniGGDNUMll%2Fcfp36Mo974bRrlI6ht2LCBfjvEObJ5%2FKW8O6dOrbXVzqlFdotpuSDzq313bQ4b8I1MeJGsZHfUzc60zIONDKzwOHEloLr5ez7Catep%2BWXaciUfr7C8hgewcpEerMw3FjXkfnq7IsIpnEIT&X-Amz-Signature=c480e109971e2cf264fa9792344bed932033d8232e56ac4fd1d1b7faf57ac790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QQDAUGO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T040719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC3nG6U5ffOpPaaiFLIU7cPF7rVZPx%2Bq9g%2B00v%2BiS%2F6zAiBB3poEDEzahiDINS4h5%2Fmpb45pKGFNjKhtiX7NukjS7CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx8HN3vxAHEeMoD9MKtwDyQqNt5ra51zDKoFkGrkEb8z5igOWyTAd742hilbXMI%2Bz%2FIx7GyD5Za84WRcralZfoF54kCqdrdkbsuLcb6nR2mcf4wHmJdNfC6qvPrOzLUOH0xmfLdlQ%2Fu286RPhI5qhK9m0wATl%2FqKG%2FXSF5wcMQGauXVEqDVzV%2F%2BfW8wT52a5bWL4BN91uK51Vnw7ef3qGYW16z9NzsvyOgz29Xfx2Cur8MckdUYmtUpxDo65pAYqXfzfpfx3ep8Y0PyypDaS%2F5VsRo6ZL0jkhlyfncak9XuM2JFDUp3oZmwV3j41cYz8Z6ih435uU5NeSkqe%2FyB412AOo5jCGUEXjqO6V0RGDxv%2BR%2BA8bkO6Z7XboXB4AtCPf7ZXwusR5V7%2F8enYFyyBeqIxSOBkf%2FK5pCxkrrMmK2msQXu9JJFoHGBvqJSOal5wA9Gx1H7qFEVckzXBaKqYEMc65M4YcofCDztgnnBWswwFK%2BED%2FjiyZ2b%2B35T2n6DtwAqfqgu0jbPs1zhdP0XUXnhXtVkr2FNWlWjz7nHibp539qKPQzq91VNFyuT4rIAZJgJmwLr%2Fhv%2FXbe3kdXd8xmZeU8UxKnDCXkIBAgedEFnIjXrBqrE%2FgvHGgMg3vDrFVhAeAfT3oyfm1noAw2%2F3SyQY6pgHMgzern%2BZU1V7ncZFWY5Dbe3eiPkRLjDuGR2z68slcDO0CCc5gY4SFxnvnld%2Fi%2F04sMmuniGGDNUMll%2Fcfp36Mo974bRrlI6ht2LCBfjvEObJ5%2FKW8O6dOrbXVzqlFdotpuSDzq313bQ4b8I1MeJGsZHfUzc60zIONDKzwOHEloLr5ez7Catep%2BWXaciUfr7C8hgewcpEerMw3FjXkfnq7IsIpnEIT&X-Amz-Signature=a01deeb351db3947cffb3dd708879c36a248b5618e5dfe98dcc5e2f5ad6a42ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
