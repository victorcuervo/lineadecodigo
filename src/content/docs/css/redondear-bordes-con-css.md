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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSM6IDB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8V46xRoSUbnWk9OyGjZh%2FB%2BCPctqXf0FbMUD4wHcW1AiBZqu7lrx26p2rzENse%2FB%2F%2FpsMEO0vCYGUDNaXYYCFxqiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeoqx84V%2FRX%2BFfgACKtwDEbAh9BP%2Bq6RYUGO%2Ba4n8sqoAgB6beHPMXREY27dr4xu6NeVReqS%2Bg2IGWWEqN44SM0drE4JjlkXRDdJ1m1ToOzXgWgNFHl8VOZXWqfnnVeOZANksYXs%2B1gMvhagBUpoTnwGt5Bbi%2BOUGWrTTP0m4FOcfSC1hcbVvcuex3Lu6ftsnXbQKDM1kGjTKAduLdtwF0sQhfMgjVXVncx20f%2BNh%2F7cUarCw%2FCRrS3NKeS2IIVLq1FXSNb6kXzwGmAe1UV%2FsC8yXqbhW1%2BhUSc5MI8VFNK7dIDkCsmyqpkqJHZhIvScVbLveO010rGidfMZJfabWEKWJ7PBKpv1vgwH2O2BtEE5CJqxkF5lBntULbDY0rBGcr2nmQ8ohsjysuaBEoUOCEnsKYY9FAVw9gCfVA7SXcQlk89XRevSxn9NpJPVuID%2Fv5yVwT19p35adssso5x2jOGLKLM8Y28Ip5BuafF%2F8TKhEjU4WDhWL%2FsfABW%2Fo%2Fz4%2FVoBIwc%2Btb1vEo3%2FX6S6C1FNj7qNBpy81R6QpKB9aP1t7VKXSY291xep%2BWZAxbYVdoSeRr%2BqciJigvXisD4T52pNlcVZwPAdQ%2BB7f32wRSdD%2B00%2BNQE4aGfrHqVImQjPPUh7oKC%2FtXk96EWcw%2F5TZyQY6pgFLFoQLIhWXV33qQmnNqVYeCsi%2BHbOzTIOxS%2FbwjxEir8GdUzaUOjwBU4h81E1GCgraMX7MXfDyHby0sfmG7pbz4WGqKYlhZptLLAqg2fPEyNicYR4UKwr3XwUBXoMRNIr3KLMcDFUNhAl3GbNu4rlumrrWCQnfe2AjJykWjoKDTYtig3jXVlFojLNnSYci2VArUtYKvkf%2FFPAvdZPxZKU8QyZ5lMDL&X-Amz-Signature=9fd722a187ed7e2409edeae9cc15003956962ce76942b89e843486d0bcc05ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSM6IDB%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE8V46xRoSUbnWk9OyGjZh%2FB%2BCPctqXf0FbMUD4wHcW1AiBZqu7lrx26p2rzENse%2FB%2F%2FpsMEO0vCYGUDNaXYYCFxqiqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeoqx84V%2FRX%2BFfgACKtwDEbAh9BP%2Bq6RYUGO%2Ba4n8sqoAgB6beHPMXREY27dr4xu6NeVReqS%2Bg2IGWWEqN44SM0drE4JjlkXRDdJ1m1ToOzXgWgNFHl8VOZXWqfnnVeOZANksYXs%2B1gMvhagBUpoTnwGt5Bbi%2BOUGWrTTP0m4FOcfSC1hcbVvcuex3Lu6ftsnXbQKDM1kGjTKAduLdtwF0sQhfMgjVXVncx20f%2BNh%2F7cUarCw%2FCRrS3NKeS2IIVLq1FXSNb6kXzwGmAe1UV%2FsC8yXqbhW1%2BhUSc5MI8VFNK7dIDkCsmyqpkqJHZhIvScVbLveO010rGidfMZJfabWEKWJ7PBKpv1vgwH2O2BtEE5CJqxkF5lBntULbDY0rBGcr2nmQ8ohsjysuaBEoUOCEnsKYY9FAVw9gCfVA7SXcQlk89XRevSxn9NpJPVuID%2Fv5yVwT19p35adssso5x2jOGLKLM8Y28Ip5BuafF%2F8TKhEjU4WDhWL%2FsfABW%2Fo%2Fz4%2FVoBIwc%2Btb1vEo3%2FX6S6C1FNj7qNBpy81R6QpKB9aP1t7VKXSY291xep%2BWZAxbYVdoSeRr%2BqciJigvXisD4T52pNlcVZwPAdQ%2BB7f32wRSdD%2B00%2BNQE4aGfrHqVImQjPPUh7oKC%2FtXk96EWcw%2F5TZyQY6pgFLFoQLIhWXV33qQmnNqVYeCsi%2BHbOzTIOxS%2FbwjxEir8GdUzaUOjwBU4h81E1GCgraMX7MXfDyHby0sfmG7pbz4WGqKYlhZptLLAqg2fPEyNicYR4UKwr3XwUBXoMRNIr3KLMcDFUNhAl3GbNu4rlumrrWCQnfe2AjJykWjoKDTYtig3jXVlFojLNnSYci2VArUtYKvkf%2FFPAvdZPxZKU8QyZ5lMDL&X-Amz-Signature=c86c4813fea03aee5e2ba9a606dfcd6bdfd9655d3a2eb940ce5461f71f31c244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
