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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKRCOYM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwmSOFNapSRYpemx9Ou9ouOAt%2BN%2BUA0WHnaMuindpnVgIhANZcTF3Mf0SCEB9wL%2F0eDO%2BTUoYcMSjHH0GlVO%2BJvMIVKv8DCE8QABoMNjM3NDIzMTgzODA1IgwwdHUeSMuWW3UuJnwq3AP4JHAej1qKy%2FBlnNXZBmTVQOVmuwy7M%2F1OwfGNk0%2FpUu4WzkauMvY7hCx4UkcoTvG9ibger4TCW493t6uObGDfW6gsmRL8975%2FXSUzXvVfK0y8EhitTyZjCt7j0AqJVw%2FN8Ye8Dtn8AQAdswxfJEfLIpqB7AHxx7M%2B6JFGbphM5yJQesuHy3vQ%2FlIcNsnLPFoHOOLXp2U1G3JCJOoCq52xUfqc8IZVQC8dGn6pyWgSWvxiH2bnzjC2fnY1LkgEFm4oPS6Fz0LWxMcntTatg6bqH7YiIn1t3h1OXHL9tw%2BNzqiUb3KCsuryCP3MAoMMsFADbFWZ0KD3E6%2B9VcHKduBJ36kjUGgWneDEuiwDtJw6htyZoWBWCApHhFNUwDC1ojpqvF5gKetqS0s%2F0N1NOKZxfquWqMd59LJxuYamJcP1lqJ1G6k2Q0YVBPNESvd%2FwUj5fHodsLU0i1ngimNTk0pIc5mAVut%2FklnvywLvQHtXkWd1cxE009Qijb6URFydm2iWR28r3CANO8Fk0B0ushDTeHLHAOyNHoJ7MHs01QZNNepiZxEJca5LWhY6UdqclbloIthOln1yNJ06bV9cercXel0lPnb4AnQkTBE5u%2F6YOx280HQYTIDBl982MzDDjMjJBjqkARzFTAQNjGYLxu9HZGoYoEOCRETH0KcM914KTQkO0%2FABnN7IZzX03zfMTWpvnyHn7Lvo%2BUgiG%2B6ITlVyROTs1OS1Hkqvfb2rHAymwfWW8GjU%2Fca2Nc9ugQ1w%2FSUb%2FqL4STqs8bWBtZSD6iwrQ%2BIYUD%2BDRXXeBOcZ5aBNZ9X40LE61Y0esxxKPrR7JiekAEXWoBmQ%2BAyaOivj0XYQyYMVAVkPl4%2Bq&X-Amz-Signature=9049e9fbe9485da24b5e3ff119d7c4681b384b3b6602ca533fe8ee88e60eac9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FKRCOYM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwmSOFNapSRYpemx9Ou9ouOAt%2BN%2BUA0WHnaMuindpnVgIhANZcTF3Mf0SCEB9wL%2F0eDO%2BTUoYcMSjHH0GlVO%2BJvMIVKv8DCE8QABoMNjM3NDIzMTgzODA1IgwwdHUeSMuWW3UuJnwq3AP4JHAej1qKy%2FBlnNXZBmTVQOVmuwy7M%2F1OwfGNk0%2FpUu4WzkauMvY7hCx4UkcoTvG9ibger4TCW493t6uObGDfW6gsmRL8975%2FXSUzXvVfK0y8EhitTyZjCt7j0AqJVw%2FN8Ye8Dtn8AQAdswxfJEfLIpqB7AHxx7M%2B6JFGbphM5yJQesuHy3vQ%2FlIcNsnLPFoHOOLXp2U1G3JCJOoCq52xUfqc8IZVQC8dGn6pyWgSWvxiH2bnzjC2fnY1LkgEFm4oPS6Fz0LWxMcntTatg6bqH7YiIn1t3h1OXHL9tw%2BNzqiUb3KCsuryCP3MAoMMsFADbFWZ0KD3E6%2B9VcHKduBJ36kjUGgWneDEuiwDtJw6htyZoWBWCApHhFNUwDC1ojpqvF5gKetqS0s%2F0N1NOKZxfquWqMd59LJxuYamJcP1lqJ1G6k2Q0YVBPNESvd%2FwUj5fHodsLU0i1ngimNTk0pIc5mAVut%2FklnvywLvQHtXkWd1cxE009Qijb6URFydm2iWR28r3CANO8Fk0B0ushDTeHLHAOyNHoJ7MHs01QZNNepiZxEJca5LWhY6UdqclbloIthOln1yNJ06bV9cercXel0lPnb4AnQkTBE5u%2F6YOx280HQYTIDBl982MzDDjMjJBjqkARzFTAQNjGYLxu9HZGoYoEOCRETH0KcM914KTQkO0%2FABnN7IZzX03zfMTWpvnyHn7Lvo%2BUgiG%2B6ITlVyROTs1OS1Hkqvfb2rHAymwfWW8GjU%2Fca2Nc9ugQ1w%2FSUb%2FqL4STqs8bWBtZSD6iwrQ%2BIYUD%2BDRXXeBOcZ5aBNZ9X40LE61Y0esxxKPrR7JiekAEXWoBmQ%2BAyaOivj0XYQyYMVAVkPl4%2Bq&X-Amz-Signature=19c665395a63fbee686d32c9bfa3727632a007159dad6e55f5e4bf5fcfa2bb4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
