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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWPZPSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAcgUxdJy8AcxOjB9EhP9n2XFKTQHvwKhqP7goQ68CSAiEAjNZzW5N1Wf0KIetnzeCgPYidRPhlHHvSjx6mNaSOs9Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNY62Kq4w0MdmppXMircA9To1QFeLhX630w53jf6xztT%2BX7XYmQKQviFEeHienTzlsE37VSQd69Oj7H4MdkUhVNROry09tigfkEilZ8AQBoGJPRrfcLjJiZNl%2FMO4JM39wdpu7wi354dzFsWIw2gjPM%2FJ7uBpvqnuvFZQWT4lndDwyp%2BMsiWtZh3RdQSQI18SPfiuXZAl4pBgJpj%2FyCO%2BDIyZ99ppd69K55aZpMO2OAyP7DDdPnDtu9lb8mcPVnQr%2B5ZXpo22y%2BVssysIu5wNVtH%2B%2BAgxrnHysITy4QQYN10x2g0rFa6%2BKdNR0LKpkuzs8ZubgDRKcuD5oHjX%2FRj0SDRsf4%2FiD7N0%2B2rbbQ3iq7vFWSciUMZAvpc6FyJBKXrCJBetmPz2xRztZ%2FLHG7t8QmzTXSeU10Bm1aMp9Flhxf5vWYrl%2BRZaZLUEOBOHqW36owWb6uppep4ZMrBzFlEa6utS9Sj5ORIG04jF5aSFB0jQi4YN%2B3LKzFxc25%2By%2BJtzoHI%2BVLv9XpWV3u1ZPbgOgvnfSvubjcjLh3g%2B3V5TMoBm1eh6ZaDPnKMp3DFd2F3gJ8KKoKiMJ%2FecoaulLx7iwZoNNhD%2BJ7h9LSYpLU7pA98ZSQoPCwSuk8GcGqw%2FDL4SN2cDy5mnkaRsYQ0MLvty8kGOqUBWDavk2vWZos72R4B2gjKNZvnq1iR%2FTe5vEZG9ChZncCxlpvZpBvdAOK9zq4238lD9DQWVyvgPUZNIJUiRkncmvxAmzYwHcgMlWEZpfWUXGfBtQ%2BjzLh0caUiCFJ6VCNesDP86mcxuaBNI4iFthZ%2F2h9iMo4GllWuStfhT3ssL0DlZsCYxaPzRi36krbmEk2w5rPJdA4dqWi0ftGb3jJgmRxx9%2Bqi&X-Amz-Signature=4f5eb988d69a3f75b8ac8d66a88a0f69d7f8968425ff697375565ca76b277552&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZWPZPSQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T155759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAcgUxdJy8AcxOjB9EhP9n2XFKTQHvwKhqP7goQ68CSAiEAjNZzW5N1Wf0KIetnzeCgPYidRPhlHHvSjx6mNaSOs9Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDNY62Kq4w0MdmppXMircA9To1QFeLhX630w53jf6xztT%2BX7XYmQKQviFEeHienTzlsE37VSQd69Oj7H4MdkUhVNROry09tigfkEilZ8AQBoGJPRrfcLjJiZNl%2FMO4JM39wdpu7wi354dzFsWIw2gjPM%2FJ7uBpvqnuvFZQWT4lndDwyp%2BMsiWtZh3RdQSQI18SPfiuXZAl4pBgJpj%2FyCO%2BDIyZ99ppd69K55aZpMO2OAyP7DDdPnDtu9lb8mcPVnQr%2B5ZXpo22y%2BVssysIu5wNVtH%2B%2BAgxrnHysITy4QQYN10x2g0rFa6%2BKdNR0LKpkuzs8ZubgDRKcuD5oHjX%2FRj0SDRsf4%2FiD7N0%2B2rbbQ3iq7vFWSciUMZAvpc6FyJBKXrCJBetmPz2xRztZ%2FLHG7t8QmzTXSeU10Bm1aMp9Flhxf5vWYrl%2BRZaZLUEOBOHqW36owWb6uppep4ZMrBzFlEa6utS9Sj5ORIG04jF5aSFB0jQi4YN%2B3LKzFxc25%2By%2BJtzoHI%2BVLv9XpWV3u1ZPbgOgvnfSvubjcjLh3g%2B3V5TMoBm1eh6ZaDPnKMp3DFd2F3gJ8KKoKiMJ%2FecoaulLx7iwZoNNhD%2BJ7h9LSYpLU7pA98ZSQoPCwSuk8GcGqw%2FDL4SN2cDy5mnkaRsYQ0MLvty8kGOqUBWDavk2vWZos72R4B2gjKNZvnq1iR%2FTe5vEZG9ChZncCxlpvZpBvdAOK9zq4238lD9DQWVyvgPUZNIJUiRkncmvxAmzYwHcgMlWEZpfWUXGfBtQ%2BjzLh0caUiCFJ6VCNesDP86mcxuaBNI4iFthZ%2F2h9iMo4GllWuStfhT3ssL0DlZsCYxaPzRi36krbmEk2w5rPJdA4dqWi0ftGb3jJgmRxx9%2Bqi&X-Amz-Signature=969519b896d17470ff96fe8f0d192f1a4d97f872a46bb5d3e311724b3d224415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
