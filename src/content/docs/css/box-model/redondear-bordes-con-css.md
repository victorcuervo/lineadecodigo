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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C27IGWY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMWAsGD7EXSmnVq%2BRfsnWqP%2BkjmLznr87ChzQ0tOSBmAiA9ShDzB9aBeVz6S%2BObGtpDnqv2Enbcpj227KDf%2FYSNrir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMik4xH%2BbjnaBy4lJvKtwDP5cRE%2BhLFof4gS6%2FBICBZM6ZBtO8HZg0vS0u0R4iWdWLAZq9LEhLKC%2FbBtqb%2Fbfbu5De7DzcQ%2FJ%2BCCLn9kMuvcWbO4WepW0%2BcafbqiGXyh3jw9WhXMSbZSp29jayKfSU6R23cQq4fEh7rtlK1iQ04yPB9PiXCUcD5Xw6sLXAzjyGkafXVnOPOn1E0sUjk55Ki%2BE09XPFWxGB8aZ9Auqj%2BcA6%2B1HxwYr2LjC%2BAzio%2B1jjBzb9Le2DHCXz0jbQMrWmnDEo9IejnJhLK5i0esR284z9qCixasPPYS3FJH8Fc5A73ZZl2NL7DTaXaM47a%2BBbmid0ehYgZ0DEB7AlaPfsMDM%2Fa4mDrMbehF0dpgpP6Lh57JSvFoW%2FA9tnfJH6tdlOi5fnKhDuxXz4ifm59RZtGrpJwmfz9vZtQfujQ1bJ3E%2B5qW%2BLPGcFUHz%2FpFwnMNs2pKlfg6YDMorqzaJ8FEwPrT3k4Trhk7DmGN4q6e8YdUDBkhQbJLjqFepSDt4%2BoevxTmikU%2Fw4zVyUXO9QnOK8tuOLRZggKRPorMsknCScovtADGq3Gsz0hhNSDXEw4awgj6piqydZVrrl6fZJOVbHUda60bLD4r%2Fk2XpRpgRi8euLFBOJ9%2Ffuj9p68WQw052JygY6pgHf0zrfrE%2FTggGVvtpyOOgXslLZYQgCV6vZjrxITd19osJ1Pjqn4ZztX01nYiONZVlQL5nDIuUvXUU17IgJmHX2lPKy0dm5py3JnhMYcnw0srfUB0cPx9GvNjy61XUb8EPrHe37AlTMJ99OnCYUSOms5KSxJhzuBwbBVs3zI65%2F5yfR7PI9gQ1f3xd2W0W%2FomWuD2XUxEZwVrDHyjA%2Ff7m8sjKzhEwT&X-Amz-Signature=a0f66cb357f808ede04b709a736615334ad92338b702cb93d8eef8b2b9190d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C27IGWY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDMWAsGD7EXSmnVq%2BRfsnWqP%2BkjmLznr87ChzQ0tOSBmAiA9ShDzB9aBeVz6S%2BObGtpDnqv2Enbcpj227KDf%2FYSNrir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMik4xH%2BbjnaBy4lJvKtwDP5cRE%2BhLFof4gS6%2FBICBZM6ZBtO8HZg0vS0u0R4iWdWLAZq9LEhLKC%2FbBtqb%2Fbfbu5De7DzcQ%2FJ%2BCCLn9kMuvcWbO4WepW0%2BcafbqiGXyh3jw9WhXMSbZSp29jayKfSU6R23cQq4fEh7rtlK1iQ04yPB9PiXCUcD5Xw6sLXAzjyGkafXVnOPOn1E0sUjk55Ki%2BE09XPFWxGB8aZ9Auqj%2BcA6%2B1HxwYr2LjC%2BAzio%2B1jjBzb9Le2DHCXz0jbQMrWmnDEo9IejnJhLK5i0esR284z9qCixasPPYS3FJH8Fc5A73ZZl2NL7DTaXaM47a%2BBbmid0ehYgZ0DEB7AlaPfsMDM%2Fa4mDrMbehF0dpgpP6Lh57JSvFoW%2FA9tnfJH6tdlOi5fnKhDuxXz4ifm59RZtGrpJwmfz9vZtQfujQ1bJ3E%2B5qW%2BLPGcFUHz%2FpFwnMNs2pKlfg6YDMorqzaJ8FEwPrT3k4Trhk7DmGN4q6e8YdUDBkhQbJLjqFepSDt4%2BoevxTmikU%2Fw4zVyUXO9QnOK8tuOLRZggKRPorMsknCScovtADGq3Gsz0hhNSDXEw4awgj6piqydZVrrl6fZJOVbHUda60bLD4r%2Fk2XpRpgRi8euLFBOJ9%2Ffuj9p68WQw052JygY6pgHf0zrfrE%2FTggGVvtpyOOgXslLZYQgCV6vZjrxITd19osJ1Pjqn4ZztX01nYiONZVlQL5nDIuUvXUU17IgJmHX2lPKy0dm5py3JnhMYcnw0srfUB0cPx9GvNjy61XUb8EPrHe37AlTMJ99OnCYUSOms5KSxJhzuBwbBVs3zI65%2F5yfR7PI9gQ1f3xd2W0W%2FomWuD2XUxEZwVrDHyjA%2Ff7m8sjKzhEwT&X-Amz-Signature=d9e6dd493944ddd1f916f827e25752a89b170294aba9544061ecdb910abee620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
