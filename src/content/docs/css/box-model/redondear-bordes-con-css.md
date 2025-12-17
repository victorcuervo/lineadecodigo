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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IZDC4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUKm6xNoWOZdaFfel4T5fyMYvKHHJm1nW8MMC103smIAiEAhbbYsI2m3xpM8f1ZGyJjBXcbJAzoPjgcmpbuUj9Ncscq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLkHBotKUlcPx29DJCrcA72ndcPNJwtN7YV6xrwYc68YZr0kiWOrzVySYKlhupCjbutlUuDqOe7OdG9JHc8ygDZRjYGUpRe10ZcZ1PH8AKx4FkfLoTseJ3h01cYuJngUkZEr9AOcQnO5a8uZ737jSCR%2B%2FO1QoIkZCdrr7tC72w0sYpr%2Fj7MVipuik9dCdl98sUeZkCqATbL8RDW91O7E6F3MFX3I5HdhXtXKL8vZ1w%2BsBrgFkH3CCwpecwvF9w4xB%2BS%2FdJq6fSVYEhlB9q2tLpG7HNwmoKdzY3ftj4CIjUhQ8A4FqR7hOJo%2FA91GopNVY7o2gbcc6vxIQIqEuEDMoMm%2B81mkXHYNwe56mOXf2Z69kv3jW1DgIr95BKSrFuj6Zni5ekI2f0vJlfHIkvHmHhaX868t5Djmwj1zRkyevBG1gA4B89%2B4r4FL5sYI3lvPREKwfiG9A5zkZ39IGmHUFmX7TGBmeHF6PHLXU5EHTnXQmBAiWLchtoPFA2Bb6KKucLvS9BzykgxkCTGIkFCJlJWRpHuqFHqEw89wgI9JI2IVbsiK%2BHN3KY7X94s0J0Kxaa2optnd%2Fgx0VoVFwokCqK020%2F%2BX6ilA%2F8PcpPwS%2B39nYWudkYmyfVn3cuE2ZQsIvqOppdF%2BUmiyJUKvMMjGisoGOqUBob7%2F5ZZATY2wIvQeyMi3uomyXQ43WQJD2d4dhyQ2R65ukm0jlYTJqziLNrYxuWhRAoe3K6RzGcuH89QBbIiTWwD0tpGkJadsNctm7xCQpPs4oYThWHdnQG%2B804RUyzmp9z3E4UHhrSefxHNz41X3n639EOcy8JjVde56gMulG06wlwdN3s5CaQUS7XQ9I54zqXGfUUpX%2FvJLzSFDhkKHzFtOYo9K&X-Amz-Signature=e7e64fefb0ed8b1c0c983aaab3164b38e7f782f65a82db972dd852004ad73e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2IZDC4N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUKm6xNoWOZdaFfel4T5fyMYvKHHJm1nW8MMC103smIAiEAhbbYsI2m3xpM8f1ZGyJjBXcbJAzoPjgcmpbuUj9Ncscq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDLkHBotKUlcPx29DJCrcA72ndcPNJwtN7YV6xrwYc68YZr0kiWOrzVySYKlhupCjbutlUuDqOe7OdG9JHc8ygDZRjYGUpRe10ZcZ1PH8AKx4FkfLoTseJ3h01cYuJngUkZEr9AOcQnO5a8uZ737jSCR%2B%2FO1QoIkZCdrr7tC72w0sYpr%2Fj7MVipuik9dCdl98sUeZkCqATbL8RDW91O7E6F3MFX3I5HdhXtXKL8vZ1w%2BsBrgFkH3CCwpecwvF9w4xB%2BS%2FdJq6fSVYEhlB9q2tLpG7HNwmoKdzY3ftj4CIjUhQ8A4FqR7hOJo%2FA91GopNVY7o2gbcc6vxIQIqEuEDMoMm%2B81mkXHYNwe56mOXf2Z69kv3jW1DgIr95BKSrFuj6Zni5ekI2f0vJlfHIkvHmHhaX868t5Djmwj1zRkyevBG1gA4B89%2B4r4FL5sYI3lvPREKwfiG9A5zkZ39IGmHUFmX7TGBmeHF6PHLXU5EHTnXQmBAiWLchtoPFA2Bb6KKucLvS9BzykgxkCTGIkFCJlJWRpHuqFHqEw89wgI9JI2IVbsiK%2BHN3KY7X94s0J0Kxaa2optnd%2Fgx0VoVFwokCqK020%2F%2BX6ilA%2F8PcpPwS%2B39nYWudkYmyfVn3cuE2ZQsIvqOppdF%2BUmiyJUKvMMjGisoGOqUBob7%2F5ZZATY2wIvQeyMi3uomyXQ43WQJD2d4dhyQ2R65ukm0jlYTJqziLNrYxuWhRAoe3K6RzGcuH89QBbIiTWwD0tpGkJadsNctm7xCQpPs4oYThWHdnQG%2B804RUyzmp9z3E4UHhrSefxHNz41X3n639EOcy8JjVde56gMulG06wlwdN3s5CaQUS7XQ9I54zqXGfUUpX%2FvJLzSFDhkKHzFtOYo9K&X-Amz-Signature=34e206b2fbfefee8d090792310510470def3e5882b907539b6b2060715bdf0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
