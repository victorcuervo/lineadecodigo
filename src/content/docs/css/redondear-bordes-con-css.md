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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL26244D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFoOS4jzEWQu3yrI9Gpgvb%2BPseafMZ%2BgWjQMweysbtOfAiEA0lxxT7CrTGYDnoGWJQLqLmJSMX351DYjsxS%2BnkzAYAsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCjSrK2d%2BI%2BvzlfM2ircAzWFm3i9jq1fAHr2GEkwrrDKL7ysUlPYqHBrzUgvk%2B6EILUDv1LAyDThSpcKEf%2Fv9ZXq21NFSq%2FH8dpGdQpLzFLTKaBvnjKMi58YFljy8J7FJwKGYBBozLI0JyzhXFMPXjXSDfXXC47D1nv8Fh5lpZ5Ic4OETI%2Bi%2BjrTWCRlfGGUSIHpxTOA1yajAJoa22iOS11kZ9q3XXzMxxhIfB7sYTKX648WqJQcB5UkALx%2Bev2yXEPpycRIPldQaTSxbK%2BXktnRSIlEfJN6swY%2BKwFfe%2Fc6wN0u8FZ%2BM2opikzzjn%2B4Eoi59aX0zgBJmP%2Ber3lKl8fEnW7qYJFGg11V3PMUCmvaLYiTn4Vh044Gu0I5sKmVcXS0guXgObM2wF%2BWcxNdkZ8cJ2kMyHhERMS8MiO530ud%2FPmGa9Esj2ox25ZiQ8caxRbOm0AI3Ak95SMbbq2X2HIjhthxFEB9DuAs4JuPT3pqBHNRzCOxBjd5Y03PpX4HzTAVW5ptsrQ87tGLljuMsMNnEZ58fEUm3TgphDqxbZdPzCm97em5rhS6DaGN5YVelvljf0t6zLm9HIBAB18a2NpGUCdO%2Fv%2BeVA5mcsv5uDtmXXjfshyJ4ZuX9IHxG9Y9lNnxMwWoDoW3jRN8MNiUw8kGOqUB0l5l51Ivmoc1SfLz79PvKpS2gH1yjceCSYFhxt95uB6V6KULW%2B486gJvP2bznh7OVKxd0kaa2yPiyLJp5tbT3pyUyb4bsgRcojKVfw9r5t9RyHGxM2HR3wlCprhf%2BKkoKUXn%2BibqKBXp1sqRnU%2BnVBcbGp%2Bccgzj6pMg8ne69X97Aw3%2FQsoVheXgJUzTnJnm%2BpESf2tLtoKNlmNjN5kq5bJRbR7l&X-Amz-Signature=a36cd46c357b25dd05236b5b0a4c271a2e8a6edbfebe1d08f0f7acb93374ad28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL26244D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIFoOS4jzEWQu3yrI9Gpgvb%2BPseafMZ%2BgWjQMweysbtOfAiEA0lxxT7CrTGYDnoGWJQLqLmJSMX351DYjsxS%2BnkzAYAsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDCjSrK2d%2BI%2BvzlfM2ircAzWFm3i9jq1fAHr2GEkwrrDKL7ysUlPYqHBrzUgvk%2B6EILUDv1LAyDThSpcKEf%2Fv9ZXq21NFSq%2FH8dpGdQpLzFLTKaBvnjKMi58YFljy8J7FJwKGYBBozLI0JyzhXFMPXjXSDfXXC47D1nv8Fh5lpZ5Ic4OETI%2Bi%2BjrTWCRlfGGUSIHpxTOA1yajAJoa22iOS11kZ9q3XXzMxxhIfB7sYTKX648WqJQcB5UkALx%2Bev2yXEPpycRIPldQaTSxbK%2BXktnRSIlEfJN6swY%2BKwFfe%2Fc6wN0u8FZ%2BM2opikzzjn%2B4Eoi59aX0zgBJmP%2Ber3lKl8fEnW7qYJFGg11V3PMUCmvaLYiTn4Vh044Gu0I5sKmVcXS0guXgObM2wF%2BWcxNdkZ8cJ2kMyHhERMS8MiO530ud%2FPmGa9Esj2ox25ZiQ8caxRbOm0AI3Ak95SMbbq2X2HIjhthxFEB9DuAs4JuPT3pqBHNRzCOxBjd5Y03PpX4HzTAVW5ptsrQ87tGLljuMsMNnEZ58fEUm3TgphDqxbZdPzCm97em5rhS6DaGN5YVelvljf0t6zLm9HIBAB18a2NpGUCdO%2Fv%2BeVA5mcsv5uDtmXXjfshyJ4ZuX9IHxG9Y9lNnxMwWoDoW3jRN8MNiUw8kGOqUB0l5l51Ivmoc1SfLz79PvKpS2gH1yjceCSYFhxt95uB6V6KULW%2B486gJvP2bznh7OVKxd0kaa2yPiyLJp5tbT3pyUyb4bsgRcojKVfw9r5t9RyHGxM2HR3wlCprhf%2BKkoKUXn%2BibqKBXp1sqRnU%2BnVBcbGp%2Bccgzj6pMg8ne69X97Aw3%2FQsoVheXgJUzTnJnm%2BpESf2tLtoKNlmNjN5kq5bJRbR7l&X-Amz-Signature=a350154330ddeaf57b49a113b0e7eae9324741826c403bf031d184c069bcb987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
