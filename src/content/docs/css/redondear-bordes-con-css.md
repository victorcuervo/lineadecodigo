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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIRJ7LK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7LszYIuyCwSWVWk3d5NOvLinOQd%2BjhcZ2QO1dzDBzTAiBkxHzPwE%2FOasO8vTD7ei1cQYbgWOJgOPNkZqaG0XJ2gyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCyWyRH%2BS56eDDBFOKtwD6hpLyAiVWnkm8596dlM%2BKa6w%2FCXC51T1Wvd2o77c7KRy7rLlQVT61Q8QfsEnIkFJTWENQYWUY5jJ7GzqATeQvIDAfgR%2BMS9Y4zbuWlHS9Ka9MlEkHCHQ1Tp6dpJgzr57WkSD5TpzAF8xqiee1fl6gsUo43QEK6p2ZH%2BB9zBKgqbpMeuuXGBrxS%2FD7Rk91w8oHGftIdzgGxMfDFeD1MBf%2B1HsxaXC2noPLeKe%2F1jAMKEfOfEth%2BaYnLcUfw8efbVB7oO0n%2BqIKgIVOgYs9NU11kiiIlQtJf%2BmduiFmqgjfGNvBdVLXF1gGabgPVjeDu81X6nyJqzXxbIfU00rjn6pGfjIqN0a2hztw1DVJso2JfqTXvNcAtDtjgjsUu6VdBihq%2B6r%2FgUe2ezJ8yrMzND8P%2BmNBjUFsVVxb9MqOFyqM9%2FfzgsO27mrhmNJ801C5icipeXcXHjG1K%2FsfoOvGfbIF6nuBCQFuOu3nRnsitdrZJyDEfJxlijUccsD%2FJScXsuUkvvm4FD7gy2HH%2B%2FGGF1%2F30JyutZUtJW5I5gzRXxsfuywNB%2F4tRk%2FGEehesTmfLpzCzMo9jncvH0bfGPnhqbq%2Bvtaz0tblZ4MHh5mWbQCYRKYderhoEhV8wUq5vQwybPWyQY6pgFytLZdHPwqDGPMgQYvwqgRqvtEqFOxCezECiVAXHSLJEtMefCr76a7e1jxgxDxgdAhGz3NlVh%2FEZXwWezEi3BsaHiJu2qTMWTAucEo6AUC2bUDBo%2FHzc%2F2r%2B0zDCqfKFgtqtNuih1vvW53eJYS80%2F%2BVVoS10mz2giDpDHdP4u3Weh7fi2baF3fg3V7zXnrkMfa0hIk0Q7o8DW5n1%2FJn1Vz5XauQA0Y&X-Amz-Signature=e6d94d235976f284028ad8def7232af4899646d7d8d4a924d8cd33a626a57ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWIRJ7LK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH7LszYIuyCwSWVWk3d5NOvLinOQd%2BjhcZ2QO1dzDBzTAiBkxHzPwE%2FOasO8vTD7ei1cQYbgWOJgOPNkZqaG0XJ2gyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCyWyRH%2BS56eDDBFOKtwD6hpLyAiVWnkm8596dlM%2BKa6w%2FCXC51T1Wvd2o77c7KRy7rLlQVT61Q8QfsEnIkFJTWENQYWUY5jJ7GzqATeQvIDAfgR%2BMS9Y4zbuWlHS9Ka9MlEkHCHQ1Tp6dpJgzr57WkSD5TpzAF8xqiee1fl6gsUo43QEK6p2ZH%2BB9zBKgqbpMeuuXGBrxS%2FD7Rk91w8oHGftIdzgGxMfDFeD1MBf%2B1HsxaXC2noPLeKe%2F1jAMKEfOfEth%2BaYnLcUfw8efbVB7oO0n%2BqIKgIVOgYs9NU11kiiIlQtJf%2BmduiFmqgjfGNvBdVLXF1gGabgPVjeDu81X6nyJqzXxbIfU00rjn6pGfjIqN0a2hztw1DVJso2JfqTXvNcAtDtjgjsUu6VdBihq%2B6r%2FgUe2ezJ8yrMzND8P%2BmNBjUFsVVxb9MqOFyqM9%2FfzgsO27mrhmNJ801C5icipeXcXHjG1K%2FsfoOvGfbIF6nuBCQFuOu3nRnsitdrZJyDEfJxlijUccsD%2FJScXsuUkvvm4FD7gy2HH%2B%2FGGF1%2F30JyutZUtJW5I5gzRXxsfuywNB%2F4tRk%2FGEehesTmfLpzCzMo9jncvH0bfGPnhqbq%2Bvtaz0tblZ4MHh5mWbQCYRKYderhoEhV8wUq5vQwybPWyQY6pgFytLZdHPwqDGPMgQYvwqgRqvtEqFOxCezECiVAXHSLJEtMefCr76a7e1jxgxDxgdAhGz3NlVh%2FEZXwWezEi3BsaHiJu2qTMWTAucEo6AUC2bUDBo%2FHzc%2F2r%2B0zDCqfKFgtqtNuih1vvW53eJYS80%2F%2BVVoS10mz2giDpDHdP4u3Weh7fi2baF3fg3V7zXnrkMfa0hIk0Q7o8DW5n1%2FJn1Vz5XauQA0Y&X-Amz-Signature=c1a6be6641e70ecc9046a45c35f63e7153e76c124e74e708c8d5e655c5931f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
