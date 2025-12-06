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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTERC4Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9ppAQ2BaLUqkt7xPCGAYjQ90kdOehU4OI8K5eDXwIyAiBrFo9O590VVXyX7sXzzmCVJYqZSPPKY6bvUV%2Ff%2FvhRVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqp9VqqdKK6Gbot3NKtwD0At9Kkh2%2BMHzWdFASXPFjSsgoJ5dc4m7yEAU3neNvFXt3pl6eQAfTy%2BWp8X%2BiCBORdhLOd5AIbuyJaD2LTWD2eu%2BPHZjiDhyilm%2FHrhW2xgsHwVgc34O83yjgytPV7xnSmfMmJDDm7JY1IzWyD%2BTKGW1QKcWCkGholTdxl%2Bfr4TgfktK%2BrNUpHWnuTEh3xIp%2BWvbXLfWCc%2BTQj7xy4pmKLxC0EaGoQfOOAvx8LWMtInes0wSCrZeaypHtdvfaSGcrgkkk%2B628afd6tJaLBToF%2F%2FNY2OA%2BDb4EzFZaNa8UxIjl%2BvC242eYvrReG0yMqYNQy99GGqpD2CIT7bJIQ7OtB1wP1sTSzeGXkTGm6wPRtHA8MwL0KJ1IZ1BsbxiFx3IOCanc6dRO%2FId33HkLJThu5jGf5PlnWHyr%2B2J3MBLliHb6Z%2FTHn%2B3FNZmyTgDnWE10miAc0jyLnaL7v6DAdDFOF6w1KeZCUSrjZMg8TABfJLXYHpgCPDlruzpdC%2Bry4KQORAP3NmHMyX1C31Ro8wJJjjzvLh1NHucX%2B415bVwQi%2BPoKoIhan3QqX2%2FmMsqUKumUJbBDL9MhkiIiM%2FwPBOI445ecYv7%2BY%2BCSgRDRlEPcyxglKSh%2BRpel%2FGMXYwnKbQyQY6pgERNZBW%2BAJ1cUGWhfD9FRNUxOojLzm1ke3EzGKZ4DSs%2BLHSF%2FvKpl8fZIWkjX%2Fj95EAjcKTXyTROPb4CEPqnjxRGRvthwZ6K3j8uuy1Pj5NssAOFtduWmdLz%2Fmhx8t56RRpn8JvVPOPU9RK5AiKrWXd2%2FAIM%2Be7hCTtfjUwYeixFnbb0QYvfWiD7rWzssLsLgnl4QiRP0arRGkR%2BCHWPpl04Ee%2Bjw%2BV&X-Amz-Signature=bc275fc519e7e614cbe7984c9eefd0c8ec48d10281214f1d6f0c6067f5795f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZTERC4Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9ppAQ2BaLUqkt7xPCGAYjQ90kdOehU4OI8K5eDXwIyAiBrFo9O590VVXyX7sXzzmCVJYqZSPPKY6bvUV%2Ff%2FvhRVSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMqp9VqqdKK6Gbot3NKtwD0At9Kkh2%2BMHzWdFASXPFjSsgoJ5dc4m7yEAU3neNvFXt3pl6eQAfTy%2BWp8X%2BiCBORdhLOd5AIbuyJaD2LTWD2eu%2BPHZjiDhyilm%2FHrhW2xgsHwVgc34O83yjgytPV7xnSmfMmJDDm7JY1IzWyD%2BTKGW1QKcWCkGholTdxl%2Bfr4TgfktK%2BrNUpHWnuTEh3xIp%2BWvbXLfWCc%2BTQj7xy4pmKLxC0EaGoQfOOAvx8LWMtInes0wSCrZeaypHtdvfaSGcrgkkk%2B628afd6tJaLBToF%2F%2FNY2OA%2BDb4EzFZaNa8UxIjl%2BvC242eYvrReG0yMqYNQy99GGqpD2CIT7bJIQ7OtB1wP1sTSzeGXkTGm6wPRtHA8MwL0KJ1IZ1BsbxiFx3IOCanc6dRO%2FId33HkLJThu5jGf5PlnWHyr%2B2J3MBLliHb6Z%2FTHn%2B3FNZmyTgDnWE10miAc0jyLnaL7v6DAdDFOF6w1KeZCUSrjZMg8TABfJLXYHpgCPDlruzpdC%2Bry4KQORAP3NmHMyX1C31Ro8wJJjjzvLh1NHucX%2B415bVwQi%2BPoKoIhan3QqX2%2FmMsqUKumUJbBDL9MhkiIiM%2FwPBOI445ecYv7%2BY%2BCSgRDRlEPcyxglKSh%2BRpel%2FGMXYwnKbQyQY6pgERNZBW%2BAJ1cUGWhfD9FRNUxOojLzm1ke3EzGKZ4DSs%2BLHSF%2FvKpl8fZIWkjX%2Fj95EAjcKTXyTROPb4CEPqnjxRGRvthwZ6K3j8uuy1Pj5NssAOFtduWmdLz%2Fmhx8t56RRpn8JvVPOPU9RK5AiKrWXd2%2FAIM%2Be7hCTtfjUwYeixFnbb0QYvfWiD7rWzssLsLgnl4QiRP0arRGkR%2BCHWPpl04Ee%2Bjw%2BV&X-Amz-Signature=c9b9de36dd5fdab63a914768177582109faf4031bf634559debe4f3be25aa329&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
