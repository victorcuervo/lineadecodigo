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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMZ7QTD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVBWARwcKD6JD7ByJmnv4UpOGPvsGo4IRu3L%2F7khElqAiEAt%2BvnAqp63Q4qJNj7fcNhTbEidTnFXg85BWnxhv9BhQgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIMYwQas7MjG%2BS9cUyrcA%2BgLEH96LcmJZZ4PwhRnD4MNcagemwEkedCCDa0gcsMFI5Cfh7vc%2BZKMWWEr6DJqxDcWGN5N52jnXWBwMvJ1nMU72BNc6QhSM%2By%2BTgVlBf2P9xumZjgS9oZ74zY3PQCkdPY1EoTCoAaqjjDQPK2gfUgRK54TJ%2BnJiHsAKJu%2FTqELESKFJVblQyQLY%2F76fYeF3ROulq5sl1L924UQouv090nmKnh%2Bm81Axe6e6jn7mVfpbOxNA7thRyRBMbf313CuT%2Bqxh%2FlhsRbN2umUkTaM2wsm8yfbfkiaXHDyyazDLk8HP5ukPXbtjWjHSklfrX0BKl124T4Mh17PgYphrwx%2BPKGHCtNQZcJWC1eTkrl2KJvgkVWRsfK2kL6SrONki9CdFMWa9O1vCI1pmvUR552fbOMaNGjmE7Y4RCDrK6O5EWaTpyV78YPxqo5AIhtyWhO%2F5FJu4g%2FzuS5pSAkdu2cdLEjn7UEDheDy%2FSEt1WrSQ%2FxrgN8%2BJ56iYigDw40%2BBMgLKa1RPhoSVFmF7xexxxAnqBxXpyG3EWNI8bhslcu%2FpCsVbwaHaPFcULlDOzPWvW3fEajDciT6Ld3f1Reg%2F7JWd5bLLg0w44Un6psb6X%2FmMJe8FJIAG449G%2FHrkdTyMO7hisoGOqUB9ke9F%2FAFDca7JeUfW8bAKYoO75PAgN6U%2BEkNUVDUT0qWXwPyVV56F%2BD2I2iBKjxth5WAtJPLrEYE5SMtKGoUJGn18uj%2FhVO8IzGF6%2BaoJwolrkxrTAklOjsQbcVoiBnxzTa%2BVEcWNk0bcOB22Gr18%2BlVr%2F66Qvf9f%2BJYlWgSgy5nFdKqM7zJR15%2FNa3NTU58%2FVoS2xBaT1%2BDQkObYfJmB3SSzBw1&X-Amz-Signature=61abfe888aec2415a9f47fbeb0d300ec3953e3e252aaaed7c1c8d82335f31f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMZ7QTD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAVBWARwcKD6JD7ByJmnv4UpOGPvsGo4IRu3L%2F7khElqAiEAt%2BvnAqp63Q4qJNj7fcNhTbEidTnFXg85BWnxhv9BhQgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDIMYwQas7MjG%2BS9cUyrcA%2BgLEH96LcmJZZ4PwhRnD4MNcagemwEkedCCDa0gcsMFI5Cfh7vc%2BZKMWWEr6DJqxDcWGN5N52jnXWBwMvJ1nMU72BNc6QhSM%2By%2BTgVlBf2P9xumZjgS9oZ74zY3PQCkdPY1EoTCoAaqjjDQPK2gfUgRK54TJ%2BnJiHsAKJu%2FTqELESKFJVblQyQLY%2F76fYeF3ROulq5sl1L924UQouv090nmKnh%2Bm81Axe6e6jn7mVfpbOxNA7thRyRBMbf313CuT%2Bqxh%2FlhsRbN2umUkTaM2wsm8yfbfkiaXHDyyazDLk8HP5ukPXbtjWjHSklfrX0BKl124T4Mh17PgYphrwx%2BPKGHCtNQZcJWC1eTkrl2KJvgkVWRsfK2kL6SrONki9CdFMWa9O1vCI1pmvUR552fbOMaNGjmE7Y4RCDrK6O5EWaTpyV78YPxqo5AIhtyWhO%2F5FJu4g%2FzuS5pSAkdu2cdLEjn7UEDheDy%2FSEt1WrSQ%2FxrgN8%2BJ56iYigDw40%2BBMgLKa1RPhoSVFmF7xexxxAnqBxXpyG3EWNI8bhslcu%2FpCsVbwaHaPFcULlDOzPWvW3fEajDciT6Ld3f1Reg%2F7JWd5bLLg0w44Un6psb6X%2FmMJe8FJIAG449G%2FHrkdTyMO7hisoGOqUB9ke9F%2FAFDca7JeUfW8bAKYoO75PAgN6U%2BEkNUVDUT0qWXwPyVV56F%2BD2I2iBKjxth5WAtJPLrEYE5SMtKGoUJGn18uj%2FhVO8IzGF6%2BaoJwolrkxrTAklOjsQbcVoiBnxzTa%2BVEcWNk0bcOB22Gr18%2BlVr%2F66Qvf9f%2BJYlWgSgy5nFdKqM7zJR15%2FNa3NTU58%2FVoS2xBaT1%2BDQkObYfJmB3SSzBw1&X-Amz-Signature=bab10840ac72951ec18b0e3a9fe59cbc4b6d209020eb8e8359949721b4bdaa7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
