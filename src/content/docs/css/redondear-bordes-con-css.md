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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHQ2YSG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCC9JZwqp7MOJUjcP6AOQ9zFuRQKFEhdvK6cXiBKbrDCQIgdstgKjKIzveP8HfbFXe1rvIs4%2BTw1ROaFq3ZBS6bskoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCbA256o6YphdMUyJyrcA%2B8NxwH2Jy3NcrbHUIjJ5oNZrOMQmogokUvbYSq%2BFxbILminMB0ksvv7kdegCr%2BYLROuXDVDG%2B7veopvQWOKg9LW08%2B4unI47Td9Zrlc3AykmDfiAyNOLbQjB%2BLPzf0CfI3cD509fY%2Fa7ItRNS4zqqeXB%2FEqUjuHbhc76gF6UM3xwGYfAY%2BjBYCC3E%2F0BRLgC6B3tpE4IRzZysKy0O4aowioyFwBDHNVqhKrLqi9tNbpDXFqUki3n0%2FVTRKFlQHWl0DBrKgxZJSiLHPKwCvvMngyZwA9j8zBIc7jYIZtoJeQ1brMkH7NPa2hTWmFByDZQCmKdBUAMg4WzAbNR6T%2BJCgjCO7g4QVLQrSQpp55DKi7d5a5Vbhn5gYGANsoLwKXWi8nEan3erYpjZXmCH7J%2BD2MEiI1hijELjfJC%2BQEFzaGoHDN7VrlRdjUmga%2BqZOo9GHjsfpMUNFL%2BPxKlAwljtgx%2BCuHCv1YFPaaDGjGNJcgJhH7XY1oLaMuqSCB95zflUICs61iNboj22aNhYFVgVdu4ZOrgHmCgmo47NPdR4C5fNr6C4tOYLSsq6g4G1crYNx5NVEOegOEqO0hnGXeNE0bZRcRzrVFhCOCyClpF0H9iSmcQZcvI1V9KjSxMPvyw8kGOqUB%2B9svVCVJinx7mvf2nYX3FfaNtAdIf5LjeJemKJyeU2nwSd%2BIFU8voEpeGvNqimbDIAmIAx3Lx6kBgJ4UlpJpZ4%2B8XieqBlwQGdztYnuaUjt6d5rlQubBbQGgQApunQmfY%2B0Unr2h5V0v%2Fowe%2FCd%2BhgAr%2F1Bci91LEagT0SeR7y56VZlpfkUl2zFpX9sX6oNLIbTnHRPmqotUCvhdgeLdeR8%2F5JqY&X-Amz-Signature=629c883f474c8bf9a2c8b392f767391a58d597231cec6828790d15a9bc7e9159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHQ2YSG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCC9JZwqp7MOJUjcP6AOQ9zFuRQKFEhdvK6cXiBKbrDCQIgdstgKjKIzveP8HfbFXe1rvIs4%2BTw1ROaFq3ZBS6bskoq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDCbA256o6YphdMUyJyrcA%2B8NxwH2Jy3NcrbHUIjJ5oNZrOMQmogokUvbYSq%2BFxbILminMB0ksvv7kdegCr%2BYLROuXDVDG%2B7veopvQWOKg9LW08%2B4unI47Td9Zrlc3AykmDfiAyNOLbQjB%2BLPzf0CfI3cD509fY%2Fa7ItRNS4zqqeXB%2FEqUjuHbhc76gF6UM3xwGYfAY%2BjBYCC3E%2F0BRLgC6B3tpE4IRzZysKy0O4aowioyFwBDHNVqhKrLqi9tNbpDXFqUki3n0%2FVTRKFlQHWl0DBrKgxZJSiLHPKwCvvMngyZwA9j8zBIc7jYIZtoJeQ1brMkH7NPa2hTWmFByDZQCmKdBUAMg4WzAbNR6T%2BJCgjCO7g4QVLQrSQpp55DKi7d5a5Vbhn5gYGANsoLwKXWi8nEan3erYpjZXmCH7J%2BD2MEiI1hijELjfJC%2BQEFzaGoHDN7VrlRdjUmga%2BqZOo9GHjsfpMUNFL%2BPxKlAwljtgx%2BCuHCv1YFPaaDGjGNJcgJhH7XY1oLaMuqSCB95zflUICs61iNboj22aNhYFVgVdu4ZOrgHmCgmo47NPdR4C5fNr6C4tOYLSsq6g4G1crYNx5NVEOegOEqO0hnGXeNE0bZRcRzrVFhCOCyClpF0H9iSmcQZcvI1V9KjSxMPvyw8kGOqUB%2B9svVCVJinx7mvf2nYX3FfaNtAdIf5LjeJemKJyeU2nwSd%2BIFU8voEpeGvNqimbDIAmIAx3Lx6kBgJ4UlpJpZ4%2B8XieqBlwQGdztYnuaUjt6d5rlQubBbQGgQApunQmfY%2B0Unr2h5V0v%2Fowe%2FCd%2BhgAr%2F1Bci91LEagT0SeR7y56VZlpfkUl2zFpX9sX6oNLIbTnHRPmqotUCvhdgeLdeR8%2F5JqY&X-Amz-Signature=2da0889ae15c0c172fca25dc5e5171318bf229bc6716964cbdf3fbb4bec71ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
