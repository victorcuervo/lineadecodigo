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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWH7TDH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8%2B7qlIfQvNZPoxZ2jvRXb%2FNOGRRkxfF2Pi5LKTTA4gIhAJv3lhK1t5ZvdhXZ7GZoqLiRuSvmNouMtBnZTMyoOc1wKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8RzgRNJQhZ1aZVJAq3AOcGS%2FGmxlsi5ebYvBO0I1IxL9ycxJ1Pw3LZgPPpYoHy4aeeadBIHbHtcCL8e50K%2FT%2BZvSFNNvAF9A%2FU4hRk2WOrulOUtE90JtT4%2FFXF2AXFB73haqEvupkQI%2BjNZ1I%2F4kLwujMhjtk9Z118Jgi7a0wXJQNHyfp1LxMtRU565ZPUTKtjw%2F9meLJ4RZqUrMHPnJ5w48M%2BLbRt6EL%2BY%2FU2tDf66oxqHpsMp%2BTlJq%2F9iqWOKp2P8H04NC3Mu0usYG2zJS5%2Ff7rOtT7ahmyr%2Bi7rEkjXThCf18FJaKGvjR0DamctCLHpa4hQ%2BvNxlGUDne4xTwBEyjUOYRgn6meM58QKs0xTtFG0eG3X9rfTdmZjhMc37ekxSye6WLxH2evA3dYEamSyyIj0ADkRKSORcTumxOxxLxPg3GbKphHYD44mWM3pJwtW%2BhoRSjsCb5lXUud%2BowiC7vlGhx934yTmN%2Fl3qKyBmWIJE5pYBNk8HMRufZIGaAh704Iko5e%2FwHMEJ812wsv%2By8CYMbZH8dnmMrHDtAIn7Ln%2BvAlN5RmWbE%2F7uuqwUNqeK%2FqnaUeutOgnPf83ph%2FcWz7Ra7Xv9qotBcKnlXRT1oKVXIvVKoSlSvhQZjbp%2B0zexY7UbfShS0HnzDKmtXJBjqkAcuuQkZQ9FpovolMEaGxKDbRhdWAaoTqTnxCgukFPuUVJ5H0uGNEMOx4TfcFgi3BGCND8CJQgPw6jMYKy7sely7T%2B%2BKcgROyLkuAUOBuP%2Be7kqK3uNckLgl46jaYqZJPEPN%2BiVbOxY3Zk7ge84TVff9kOlxI7rMJMtIVq7tmiFA8A2azA6ag%2Bu2euuu6k3BJuHhq2rjIgJ5FqxjOL32Z8fU2%2F7v3&X-Amz-Signature=5dabe55ae0fb5a8badf2b8835317da51268fac57914c910f12f758f0193e1d1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CWH7TDH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA8%2B7qlIfQvNZPoxZ2jvRXb%2FNOGRRkxfF2Pi5LKTTA4gIhAJv3lhK1t5ZvdhXZ7GZoqLiRuSvmNouMtBnZTMyoOc1wKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8RzgRNJQhZ1aZVJAq3AOcGS%2FGmxlsi5ebYvBO0I1IxL9ycxJ1Pw3LZgPPpYoHy4aeeadBIHbHtcCL8e50K%2FT%2BZvSFNNvAF9A%2FU4hRk2WOrulOUtE90JtT4%2FFXF2AXFB73haqEvupkQI%2BjNZ1I%2F4kLwujMhjtk9Z118Jgi7a0wXJQNHyfp1LxMtRU565ZPUTKtjw%2F9meLJ4RZqUrMHPnJ5w48M%2BLbRt6EL%2BY%2FU2tDf66oxqHpsMp%2BTlJq%2F9iqWOKp2P8H04NC3Mu0usYG2zJS5%2Ff7rOtT7ahmyr%2Bi7rEkjXThCf18FJaKGvjR0DamctCLHpa4hQ%2BvNxlGUDne4xTwBEyjUOYRgn6meM58QKs0xTtFG0eG3X9rfTdmZjhMc37ekxSye6WLxH2evA3dYEamSyyIj0ADkRKSORcTumxOxxLxPg3GbKphHYD44mWM3pJwtW%2BhoRSjsCb5lXUud%2BowiC7vlGhx934yTmN%2Fl3qKyBmWIJE5pYBNk8HMRufZIGaAh704Iko5e%2FwHMEJ812wsv%2By8CYMbZH8dnmMrHDtAIn7Ln%2BvAlN5RmWbE%2F7uuqwUNqeK%2FqnaUeutOgnPf83ph%2FcWz7Ra7Xv9qotBcKnlXRT1oKVXIvVKoSlSvhQZjbp%2B0zexY7UbfShS0HnzDKmtXJBjqkAcuuQkZQ9FpovolMEaGxKDbRhdWAaoTqTnxCgukFPuUVJ5H0uGNEMOx4TfcFgi3BGCND8CJQgPw6jMYKy7sely7T%2B%2BKcgROyLkuAUOBuP%2Be7kqK3uNckLgl46jaYqZJPEPN%2BiVbOxY3Zk7ge84TVff9kOlxI7rMJMtIVq7tmiFA8A2azA6ag%2Bu2euuu6k3BJuHhq2rjIgJ5FqxjOL32Z8fU2%2F7v3&X-Amz-Signature=094289c201dfa40f45a4be2a33bcbd6de527ab8a959f873d5b6e7c21f1e1fc31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
