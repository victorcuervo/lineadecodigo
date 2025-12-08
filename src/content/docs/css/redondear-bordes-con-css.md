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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZCH4G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHzfywWzI%2FlhW0%2BbpBDA78O8XiVZW0KulySuuM9QaoMAIhAKC1h3DkpX1Ji3p%2Bf7w6O6LGCWn09AeB4mW8m8jJdTNSKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrB6CKzRHVt0mZW1Qq3ANx2gamtw66IJd1LrQ8nzwFgxTqFYlakZVer%2BktVKmJs896jU899%2FrVIK0uKeSwxbYyQUsJzd1rRo3U0bRzr6lHPdkoFdYw2iyXKwKOlmsT9dG2I%2BSLOZMh3Pt%2Bb6xPyAc7Nigho1nEufX%2BNbAHy43WNej15Zx5tucCxl8JuJDvHV%2Bo28Yb0gjhAYexbxpGLQlvsrnfioJHGQ2rAVhmCeBKQj4hk1auTkSa2JyGujus5QA7sb9TpO0THGhElZvSs7UpaHSM6X9z2fkDU%2BKpaisllpmvjqof75wl29%2F1vD7u1hagP5hTHUmMeeTGZUoPiWjjivfAPIC6usprLjcfg0IqYBwFVFfTYUqdKflODK1Bieee3lAfvyYI0qXZ1OO5M7mcGhV93UsARYAr3xPOkHwirX7AoV7xi2uAOvkibmQlMWuYmJuAN%2BRaJWtezcz6fhuowEeK%2Bd2hXhQoU9EE7jBYefP%2BVuNR43QrmW5JzkdX6oJdMov2pXzWUwV6WDSKvaIPkWjkiN4ktdrpe4T3vAHT3gVxACAuzmfzc77wO2Cl82L35WGz1NDLssX3dS%2FUnQBsM6JaISHgWKjC1ylzKbj2oQ92GmuNX85NxXlR9aUk1HjG4ZaBdPn38Vc7gTCu7tjJBjqkAfvQe8P0GTvr9EnXQ%2BBxxFUzwYI5g4YGm0XgFEsLhtDTv4992hwpF%2FxO8dkOR3ip7DHTpH6NPKz7NTtK7mquUd6wFersgWlLbXYbfw4%2FndX3PePcciOWw%2FJTx86Vsemaql%2Fu%2B24wlcdzSEVF2poInTILzV6z%2B4pHuuUIV57FRL7%2B9vd5%2B2pmWIGI6WyISDYEtyhWsEvtjVDSWHDgQmJ4UwdbfodZ&X-Amz-Signature=0297627c0627e17d3a1b08662c830563de5138d85a4f11c32017be1209b6f4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BCZCH4G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T024608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHzfywWzI%2FlhW0%2BbpBDA78O8XiVZW0KulySuuM9QaoMAIhAKC1h3DkpX1Ji3p%2Bf7w6O6LGCWn09AeB4mW8m8jJdTNSKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrB6CKzRHVt0mZW1Qq3ANx2gamtw66IJd1LrQ8nzwFgxTqFYlakZVer%2BktVKmJs896jU899%2FrVIK0uKeSwxbYyQUsJzd1rRo3U0bRzr6lHPdkoFdYw2iyXKwKOlmsT9dG2I%2BSLOZMh3Pt%2Bb6xPyAc7Nigho1nEufX%2BNbAHy43WNej15Zx5tucCxl8JuJDvHV%2Bo28Yb0gjhAYexbxpGLQlvsrnfioJHGQ2rAVhmCeBKQj4hk1auTkSa2JyGujus5QA7sb9TpO0THGhElZvSs7UpaHSM6X9z2fkDU%2BKpaisllpmvjqof75wl29%2F1vD7u1hagP5hTHUmMeeTGZUoPiWjjivfAPIC6usprLjcfg0IqYBwFVFfTYUqdKflODK1Bieee3lAfvyYI0qXZ1OO5M7mcGhV93UsARYAr3xPOkHwirX7AoV7xi2uAOvkibmQlMWuYmJuAN%2BRaJWtezcz6fhuowEeK%2Bd2hXhQoU9EE7jBYefP%2BVuNR43QrmW5JzkdX6oJdMov2pXzWUwV6WDSKvaIPkWjkiN4ktdrpe4T3vAHT3gVxACAuzmfzc77wO2Cl82L35WGz1NDLssX3dS%2FUnQBsM6JaISHgWKjC1ylzKbj2oQ92GmuNX85NxXlR9aUk1HjG4ZaBdPn38Vc7gTCu7tjJBjqkAfvQe8P0GTvr9EnXQ%2BBxxFUzwYI5g4YGm0XgFEsLhtDTv4992hwpF%2FxO8dkOR3ip7DHTpH6NPKz7NTtK7mquUd6wFersgWlLbXYbfw4%2FndX3PePcciOWw%2FJTx86Vsemaql%2Fu%2B24wlcdzSEVF2poInTILzV6z%2B4pHuuUIV57FRL7%2B9vd5%2B2pmWIGI6WyISDYEtyhWsEvtjVDSWHDgQmJ4UwdbfodZ&X-Amz-Signature=fa8a19cc3c376e946094fcae38644fcae249cb6db4345ed39a9db300c4930185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
