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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KXJUDF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyKfglm%2FzOhkXXg0jvnHvfzLEFLkM1NlAQ02nvKBzyYgIgGSgkFJp4GZGJwQbIk7gac%2FABp3KcDR7KwtEJJlJtKhgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDE7q42gMwqw5GeOWECrcA8aY3iU4FPAXX%2Bm8cvKs9f7tDDXR3av3%2ByUpHqELPJRsT4%2FB8m7Kx2TPi9Eq6FzAG3AO215ro8NeXYxdNfAlP%2BKSPYqpB7UP3bKZJmPWTXoh%2FwXFI5uBVyOkTYGHdx1QDl1%2FWcYiXD7142zVhftLDXMoKDBKwZHwgt%2FAkRKk600JfJlE9hvakDmLqImA7xa0DmfhKC%2FsgzOw3w%2BP%2FHXHsZQ%2BfxYfC59GZBcGDG7gdksFQFAwH0ecxW9NhOPdSg5rocb%2BC5AV7Fys0KctApl4qwLHau5S4QHYe0hkuPM4T5QPzpTgZMKtiE%2B0p0ETAQ%2BPJmXGkjOXtXRGJf8cyinXQ3zpQzEDJezKiBGhZDUDyf1qOSk7gDL%2BPgaI0cMaHzdJV9xS6F4srM8gDQxsDfSK641RlUCQkzbTKna3bwtWsZ%2B34wUzS6CS1V5GkovXQiAOGlsBUiWUw7HGcdYRw5jCxFFFh8ZM2ngfEEz3ySjdVYIQvPn8sosCDfjp11KoHS%2FyDPJBULYifiJ%2FiaM4mgHXscF7%2Bax1%2Bo%2FoUv8UJT5LxJpAUuyvi1%2FQ1FLu7SNVsg1MYNQcLFYfAiEVP7jZFO6V9k3R8Ibg1tyoeAMcB7LemZ3tUSKr8t0tHH8HAVKKMKOqisoGOqUB3cHahCV8dyX%2BMI%2Bky%2Bpq6HMZV40Lavwuo9cdJ9hBQ2taYX8fqf18erGAovZ5anAP0B8FU9DXPHOBImjTyxiHyL8022PU4ko2LFb0GGRcAKndxvMBZLKJbaeLzc51psqx%2Fhbc%2FNYO1Iwk62QlTOnOYIDHOp1PjXcakGmmoBr%2F79QcjvaBsyKwD3vRVA40puU39%2FR%2F%2BEaboGeLM8HXOOi%2B6kVVbRU7&X-Amz-Signature=980d3b5f00b5e72db16183c42b2540a865655e2c613ec35f5cf580f508783d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654KXJUDF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyKfglm%2FzOhkXXg0jvnHvfzLEFLkM1NlAQ02nvKBzyYgIgGSgkFJp4GZGJwQbIk7gac%2FABp3KcDR7KwtEJJlJtKhgq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDE7q42gMwqw5GeOWECrcA8aY3iU4FPAXX%2Bm8cvKs9f7tDDXR3av3%2ByUpHqELPJRsT4%2FB8m7Kx2TPi9Eq6FzAG3AO215ro8NeXYxdNfAlP%2BKSPYqpB7UP3bKZJmPWTXoh%2FwXFI5uBVyOkTYGHdx1QDl1%2FWcYiXD7142zVhftLDXMoKDBKwZHwgt%2FAkRKk600JfJlE9hvakDmLqImA7xa0DmfhKC%2FsgzOw3w%2BP%2FHXHsZQ%2BfxYfC59GZBcGDG7gdksFQFAwH0ecxW9NhOPdSg5rocb%2BC5AV7Fys0KctApl4qwLHau5S4QHYe0hkuPM4T5QPzpTgZMKtiE%2B0p0ETAQ%2BPJmXGkjOXtXRGJf8cyinXQ3zpQzEDJezKiBGhZDUDyf1qOSk7gDL%2BPgaI0cMaHzdJV9xS6F4srM8gDQxsDfSK641RlUCQkzbTKna3bwtWsZ%2B34wUzS6CS1V5GkovXQiAOGlsBUiWUw7HGcdYRw5jCxFFFh8ZM2ngfEEz3ySjdVYIQvPn8sosCDfjp11KoHS%2FyDPJBULYifiJ%2FiaM4mgHXscF7%2Bax1%2Bo%2FoUv8UJT5LxJpAUuyvi1%2FQ1FLu7SNVsg1MYNQcLFYfAiEVP7jZFO6V9k3R8Ibg1tyoeAMcB7LemZ3tUSKr8t0tHH8HAVKKMKOqisoGOqUB3cHahCV8dyX%2BMI%2Bky%2Bpq6HMZV40Lavwuo9cdJ9hBQ2taYX8fqf18erGAovZ5anAP0B8FU9DXPHOBImjTyxiHyL8022PU4ko2LFb0GGRcAKndxvMBZLKJbaeLzc51psqx%2Fhbc%2FNYO1Iwk62QlTOnOYIDHOp1PjXcakGmmoBr%2F79QcjvaBsyKwD3vRVA40puU39%2FR%2F%2BEaboGeLM8HXOOi%2B6kVVbRU7&X-Amz-Signature=4b08f1b5e3b58d8ad8941d12df0e72541911eed3fd3da4d7380a28c89d847c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
