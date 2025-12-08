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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYMNTZW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwr6yiwtDeO5%2FX%2FtBocrogIbz%2FXvUCFIclCCJuwlB8SAIhALHmWC%2FFuH4GAN2PvT2DZ0jYHodYdoQ7f1CiLB0W5SlwKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpAIgm2SsOPVbtOf0q3ANtAAJ1XR9Ga8Ec8bra%2FH%2Bq43k9RE4zHbTzJBRSLLIHal7P2sxSewd%2FZrdlTVAknF%2BWa7FrMl0jQRmpOnNgXwJOktNuDR0aonJZjtZ7yC2Uc6UKepC%2FJYB3dVRbNro5uAR%2Bbz8t2swbwE%2BRdF%2F5dxt7VlR6tC83Wx8l%2B%2B%2F%2FmFVB2QFdycVMTWwyFglbpkzcQHwtEL3iAHmJE7JWNPpJHgBOFKhRNsm8aIDiyiMkjGIKf4M9I9f5PDF1GEhv1nMFfD7kHEIkWtDnbN3vXVRecmr%2B5ikzGzmTIwHfhAGZMynmCyI9FzseA3g69p0sFzKJ0HpSBZWtq%2B%2BJzRocQ1xJpmomiuQobJwtmE6zHCicX6GXn5d2fwXIUWbf0ZBKr%2BoF3a0%2Fb7iQn%2FhtCFo8ZclgtKTTQr0JZQSd4SzVM7ozavOivEym7WO0QDRpdF80%2BIcpQ8fv25bn67gQHzXQFgzU365wpcrbFwS88yxBgVXd%2F%2BxWYVjdSLiXnr9pYpaT3ATmrldogM5jSgBXY%2BbEELdtrtPqZQEe6eO87%2BfDMtgU1AMRUfjHHPWAHZ1ZAvZlfz0QL7n7aFbRJOIBsHX8Nnd5grocgwNK8aNAxFKa27D2hucwMwgCZDukQ7ZZ0LOxiDC7tNnJBjqkAW2K8IYiqN7bFEtIBVR87xYF7bjQSdZOxfNr9u3PzaIFYXhj1AKWdP4v4En7XiSwJ0Bm6IntjtWCqEgoM3WdoH8bHh08wt%2BxfTHdcqWpecFat9xedd2gFu5VETkjiSrFKU1pm%2BuuSIbiHYKdQblLRIDYZf5lXUb7Pi6Qxb0cpNwQufee5dYU%2BlncOKPqmY%2BpRcUvTOEbDu%2FJ4RKAm8p2Akn0xJQF&X-Amz-Signature=531544de0c3c712c29e044ede4030056636d06cf3052c613c8957ff6d78dfbd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRYMNTZW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwr6yiwtDeO5%2FX%2FtBocrogIbz%2FXvUCFIclCCJuwlB8SAIhALHmWC%2FFuH4GAN2PvT2DZ0jYHodYdoQ7f1CiLB0W5SlwKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpAIgm2SsOPVbtOf0q3ANtAAJ1XR9Ga8Ec8bra%2FH%2Bq43k9RE4zHbTzJBRSLLIHal7P2sxSewd%2FZrdlTVAknF%2BWa7FrMl0jQRmpOnNgXwJOktNuDR0aonJZjtZ7yC2Uc6UKepC%2FJYB3dVRbNro5uAR%2Bbz8t2swbwE%2BRdF%2F5dxt7VlR6tC83Wx8l%2B%2B%2F%2FmFVB2QFdycVMTWwyFglbpkzcQHwtEL3iAHmJE7JWNPpJHgBOFKhRNsm8aIDiyiMkjGIKf4M9I9f5PDF1GEhv1nMFfD7kHEIkWtDnbN3vXVRecmr%2B5ikzGzmTIwHfhAGZMynmCyI9FzseA3g69p0sFzKJ0HpSBZWtq%2B%2BJzRocQ1xJpmomiuQobJwtmE6zHCicX6GXn5d2fwXIUWbf0ZBKr%2BoF3a0%2Fb7iQn%2FhtCFo8ZclgtKTTQr0JZQSd4SzVM7ozavOivEym7WO0QDRpdF80%2BIcpQ8fv25bn67gQHzXQFgzU365wpcrbFwS88yxBgVXd%2F%2BxWYVjdSLiXnr9pYpaT3ATmrldogM5jSgBXY%2BbEELdtrtPqZQEe6eO87%2BfDMtgU1AMRUfjHHPWAHZ1ZAvZlfz0QL7n7aFbRJOIBsHX8Nnd5grocgwNK8aNAxFKa27D2hucwMwgCZDukQ7ZZ0LOxiDC7tNnJBjqkAW2K8IYiqN7bFEtIBVR87xYF7bjQSdZOxfNr9u3PzaIFYXhj1AKWdP4v4En7XiSwJ0Bm6IntjtWCqEgoM3WdoH8bHh08wt%2BxfTHdcqWpecFat9xedd2gFu5VETkjiSrFKU1pm%2BuuSIbiHYKdQblLRIDYZf5lXUb7Pi6Qxb0cpNwQufee5dYU%2BlncOKPqmY%2BpRcUvTOEbDu%2FJ4RKAm8p2Akn0xJQF&X-Amz-Signature=5989e739ebbf51a727eda6f576c7febd0c204b2717dc31e2a8495cc56d843015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
