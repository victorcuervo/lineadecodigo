---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OO3HF72%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDk0q5i1jjtyT7TSSGQ3S2xJnHVc%2FxudHKsaWTKcppwKAiEA8gzZfKm%2BHUbYuXd3L0GZpr0Dqg6udMxExPmARJTBg9kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDM3%2FGERQLi0vjlbWESrcAzxN8l7mVFBjfMO3yqQyip13%2BdvUTnv8wNp7aLX9eS3zYMSQM9wd%2BmCcl5pwV2JLXGbj8NklKrcdpQAIrjaQS6FmwtkgkCuykBvn4lTUwfwBJad8QsJXR2Z%2BILP%2Fx9%2BNZpYmP7FcbDZE8CylAE4KZa9ZA%2Bf6h83dxW2mhAFSp4y9bB23g7rP3OFSxMZ92na0lBgP3kd2f6BT%2FXJdeE1loLNZqXGwMQ5xz0l1bz8q7P2imVAdai1%2FFWlfIxZlYW7Uj%2Bm7eXOldRajKPPxsZQMAfxW95jiHUeiToVikRn2cPAUCiYlrAQcUMwu33FZJ5fSH7pU6mY%2BVfQHu7N2qM61D6atud2ZSS4itFQtJLND2%2BUNh8%2F6maZt8NUOVDoybrcM%2BnDpJ9MunAZ9TrET0iFX0StE5CTLN6Y6KoQeekoQDeT4ZT4PGxqyTwSVI9x4c%2B37QRAFIiHSOb4exSczNQB7EOIiThqN22%2FG0UZvJCp%2FThJpCXqQhDc9lrIuQ2mr9Sj8p02YMIC%2FacR40Wkq%2F8z1MI8rCAoLyyPkvnj2k0zlqdlzhnIkSvME5NLLnmgGy8fc9CM%2F88Vm9fAEB9lPeLeVywVaoSn0T9QKBthkaHzfgl4htifz6OAjLu2XR7wKMMa%2FxskGOqUBsSyY6nBtkHuV%2BE6QjqgO2iU63nqNYfzwno8Bx%2BrHvRiSE%2BI6g1Fs8z2fVzdP70x3rMD00dcQCfYE3Pwe7XY7gp3GsWTnsVgQn7x%2BaG%2FITtxtbL81amS7yRztOQdPR5c9RAw3s3tIPzXwLfK1SiWVstiC3MriLKazqAombCPbohEtheHyAseSxVcQVjLif1MNMxpYikIif3%2BAmZZTG3B3C6v4K8%2BE&X-Amz-Signature=b8e4a2893d4bab768550694afe885256bf3770939a9a66504119896aa146e008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OO3HF72%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDk0q5i1jjtyT7TSSGQ3S2xJnHVc%2FxudHKsaWTKcppwKAiEA8gzZfKm%2BHUbYuXd3L0GZpr0Dqg6udMxExPmARJTBg9kq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDM3%2FGERQLi0vjlbWESrcAzxN8l7mVFBjfMO3yqQyip13%2BdvUTnv8wNp7aLX9eS3zYMSQM9wd%2BmCcl5pwV2JLXGbj8NklKrcdpQAIrjaQS6FmwtkgkCuykBvn4lTUwfwBJad8QsJXR2Z%2BILP%2Fx9%2BNZpYmP7FcbDZE8CylAE4KZa9ZA%2Bf6h83dxW2mhAFSp4y9bB23g7rP3OFSxMZ92na0lBgP3kd2f6BT%2FXJdeE1loLNZqXGwMQ5xz0l1bz8q7P2imVAdai1%2FFWlfIxZlYW7Uj%2Bm7eXOldRajKPPxsZQMAfxW95jiHUeiToVikRn2cPAUCiYlrAQcUMwu33FZJ5fSH7pU6mY%2BVfQHu7N2qM61D6atud2ZSS4itFQtJLND2%2BUNh8%2F6maZt8NUOVDoybrcM%2BnDpJ9MunAZ9TrET0iFX0StE5CTLN6Y6KoQeekoQDeT4ZT4PGxqyTwSVI9x4c%2B37QRAFIiHSOb4exSczNQB7EOIiThqN22%2FG0UZvJCp%2FThJpCXqQhDc9lrIuQ2mr9Sj8p02YMIC%2FacR40Wkq%2F8z1MI8rCAoLyyPkvnj2k0zlqdlzhnIkSvME5NLLnmgGy8fc9CM%2F88Vm9fAEB9lPeLeVywVaoSn0T9QKBthkaHzfgl4htifz6OAjLu2XR7wKMMa%2FxskGOqUBsSyY6nBtkHuV%2BE6QjqgO2iU63nqNYfzwno8Bx%2BrHvRiSE%2BI6g1Fs8z2fVzdP70x3rMD00dcQCfYE3Pwe7XY7gp3GsWTnsVgQn7x%2BaG%2FITtxtbL81amS7yRztOQdPR5c9RAw3s3tIPzXwLfK1SiWVstiC3MriLKazqAombCPbohEtheHyAseSxVcQVjLif1MNMxpYikIif3%2BAmZZTG3B3C6v4K8%2BE&X-Amz-Signature=2357824c688bba42ce9e233031c331a2c27ebcd989a888d3d31e2e0a4b53dfda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
