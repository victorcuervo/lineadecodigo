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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTBZWWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI1%2FwKrW6rOCs4J54s8pwf9cJmGtme2vYdfn54hf95HAiBatenGUjo6BAb1jip9dTh0kCB3nYIMk1%2BjaZ7ff%2BTvOyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyf1SrmGCzvL%2FL6%2FKtwDMW8%2BuOnThPFKERGxaY3D%2F9KiZup%2FKI8kwPs4KHSFPG95MyprwsmNChPFmoak2h6EErcxjHPeE7zg1Afd%2F0E%2Fo0CftGHjdGiurTjQ9vQu4kCWxRSKXFDfF3tkDr%2B3dlKWyQS0PJFW8%2B97umSVQfBu0juw9SxwN%2BHl7SAR8aAKNydfr%2BYumKUf781tusoXhhS0WYESUAR3wpJ%2Fsrexg48tsYAFo6SXtBJ1o1cX5xQ3wfWUfD18f0CGnP53KvXxMVhgAFZAcAiJdsBdhSda%2B42%2FicnC7Jp4X5jgYL%2ByxuPb3pjK1oRG4ePQvvIsU02gHQfgjUZOEg6%2BrvV6%2FgkCKwjzpJRkF5VZVAe%2FY%2FL3wLXfKKd7bBkZLGCBy1ZTBBgoabwpozxNAYgpkRd1gKHo5yB7tZSMB8w2stb6sIdXf%2F9UMsPHj8RGT2MtA8hyxk9tjxstcZjpkkgAHAZAJ89UcqiEfYFiznPwiDzU6SWs51Cq0tDkUmBkYCI8nsKZLZUpdBUn4j6UIx74ADFEXOXXxsTkIFBPOvuolbmM%2FnpT%2F9j33sND768iqnaf2bBD%2B82%2FA1438d27kT%2FtIMNElIDAVIS%2B9Bcx7UDfDNN5FIBgPuoJuVrdE7Rvw%2Fx0JcQGgr0wzICLygY6pgGxJHx3llMjTCWnRHuF58ebOzJwNw03etpQwM%2FJ44tRzzJiIQDIlz8I%2FOLAQeAPFpO5qVCvqPFPr3WaS8LTNYHBbZqf2gem4%2FF8wbpwZ2Kvj%2BAR8%2FNEy5v8QpQ9rj5Ass9lsOeHRsgOp0tvXbkaIyq3ICcxg%2FxdhvARLOxYXdALXQsqCN7mZG7FLLDu2ADpGnbAYUwgFI9g6f8LQtkqjW8u3KMjqbnz&X-Amz-Signature=a5c52b015d1a8460fdbface4d8071120681b8a4d8ab42eca9d25a8238bc5d764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYTBZWWA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDI1%2FwKrW6rOCs4J54s8pwf9cJmGtme2vYdfn54hf95HAiBatenGUjo6BAb1jip9dTh0kCB3nYIMk1%2BjaZ7ff%2BTvOyqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUyf1SrmGCzvL%2FL6%2FKtwDMW8%2BuOnThPFKERGxaY3D%2F9KiZup%2FKI8kwPs4KHSFPG95MyprwsmNChPFmoak2h6EErcxjHPeE7zg1Afd%2F0E%2Fo0CftGHjdGiurTjQ9vQu4kCWxRSKXFDfF3tkDr%2B3dlKWyQS0PJFW8%2B97umSVQfBu0juw9SxwN%2BHl7SAR8aAKNydfr%2BYumKUf781tusoXhhS0WYESUAR3wpJ%2Fsrexg48tsYAFo6SXtBJ1o1cX5xQ3wfWUfD18f0CGnP53KvXxMVhgAFZAcAiJdsBdhSda%2B42%2FicnC7Jp4X5jgYL%2ByxuPb3pjK1oRG4ePQvvIsU02gHQfgjUZOEg6%2BrvV6%2FgkCKwjzpJRkF5VZVAe%2FY%2FL3wLXfKKd7bBkZLGCBy1ZTBBgoabwpozxNAYgpkRd1gKHo5yB7tZSMB8w2stb6sIdXf%2F9UMsPHj8RGT2MtA8hyxk9tjxstcZjpkkgAHAZAJ89UcqiEfYFiznPwiDzU6SWs51Cq0tDkUmBkYCI8nsKZLZUpdBUn4j6UIx74ADFEXOXXxsTkIFBPOvuolbmM%2FnpT%2F9j33sND768iqnaf2bBD%2B82%2FA1438d27kT%2FtIMNElIDAVIS%2B9Bcx7UDfDNN5FIBgPuoJuVrdE7Rvw%2Fx0JcQGgr0wzICLygY6pgGxJHx3llMjTCWnRHuF58ebOzJwNw03etpQwM%2FJ44tRzzJiIQDIlz8I%2FOLAQeAPFpO5qVCvqPFPr3WaS8LTNYHBbZqf2gem4%2FF8wbpwZ2Kvj%2BAR8%2FNEy5v8QpQ9rj5Ass9lsOeHRsgOp0tvXbkaIyq3ICcxg%2FxdhvARLOxYXdALXQsqCN7mZG7FLLDu2ADpGnbAYUwgFI9g6f8LQtkqjW8u3KMjqbnz&X-Amz-Signature=56d0204e114c2f0693d36db41035de98c4f973613fc0ea0e1fe13294c0841dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
