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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7CYOFR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7QGxbVcM5Eitk0d2NozT3M58NTAfHF%2B4XC06u38h6YQIgJYUJEtMhppjyguwXGVARYqjASE0SMkwvMo5OJtQfVTYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDClZrIRe2RtrEqauKCrcAz%2F1r%2FQ7KjBz8HWukV6EXiXXlwBwRjecNCXbnDhgpOqyCOgLvN61N7RBPMWqcYA3Y6OwP33rFh58MUpNjPVxdf3TpWDHV5jJEx5b62KuAFQuQNQTxqXTG5A2TKUp67f91k3eTuRypH8CXUb9R8wEa6yk6qocMIuB8MX88boznbdGlFoUKdzR0wmBXRZg%2FywsQobnCc2E3nna%2FVPjpaHv%2Bi6obZb1RD%2FKTOhZ5x8iK0yi1gTl%2FmhIR9%2BS0y1A2sIpFPSXj2rFKjZNR%2FiDdcFjqFYJ8VO5TKTQIHBOfy8SlL1Gvy12rJOimPA7TCh0JhDqWfxgP%2F19Yl2DUrG3iVrYOED%2FUnp1jm2vH%2Bwra5SnqoSgeMjvzuR2klAJyGmqTV4Ni0Zfh2qjsoVNXV28mP6T5gbE1uHhuCqdLtMKgi01frgM%2B0fVYzIiuSMkqipMhxPsrNa075jmcgsrvo2Lt7gJucKregymEBtxhST9z5x3Dz5Dh2Du%2FDsR2H65JnXxOxY6SIi%2FtYRRsrGJxKh9m5RgsVRDNJUa0WUo9M3uKOiVnGcOhY3SA1wZUi6p5j4VhjS%2BcnDwbx4kd7nQMzFsMcfJ%2BJ2E01qXwjKkFFINeELvL8tqp9hEDFJwQrywFBfbMMzUyskGOqUB5KfMsFXUEUqnl3EYU%2BCfzrX31SudEWraPDMzvXIbjesQky0Wbe9PwNXuM948WyR9wNZnv6dJxt9ni%2BDpBvxM6gltWdx8CV1rX7EtHfpgSMWX3sDRNHoAIfDWLxmKkZfFd%2ByJ%2FZH6afu7iNgmz4ijbiIBtW4zS45Ceupu8Ks9iw0T6dLHekVRHpD%2FT%2FMtqk3iNS%2FzTh51GsEwKcwDB9%2BRf6aVbIXp&X-Amz-Signature=013af9315c4da93573ea02f1649dc5196fb816d50d62479d51ce1dcdbc7688b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7CYOFR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7QGxbVcM5Eitk0d2NozT3M58NTAfHF%2B4XC06u38h6YQIgJYUJEtMhppjyguwXGVARYqjASE0SMkwvMo5OJtQfVTYq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDClZrIRe2RtrEqauKCrcAz%2F1r%2FQ7KjBz8HWukV6EXiXXlwBwRjecNCXbnDhgpOqyCOgLvN61N7RBPMWqcYA3Y6OwP33rFh58MUpNjPVxdf3TpWDHV5jJEx5b62KuAFQuQNQTxqXTG5A2TKUp67f91k3eTuRypH8CXUb9R8wEa6yk6qocMIuB8MX88boznbdGlFoUKdzR0wmBXRZg%2FywsQobnCc2E3nna%2FVPjpaHv%2Bi6obZb1RD%2FKTOhZ5x8iK0yi1gTl%2FmhIR9%2BS0y1A2sIpFPSXj2rFKjZNR%2FiDdcFjqFYJ8VO5TKTQIHBOfy8SlL1Gvy12rJOimPA7TCh0JhDqWfxgP%2F19Yl2DUrG3iVrYOED%2FUnp1jm2vH%2Bwra5SnqoSgeMjvzuR2klAJyGmqTV4Ni0Zfh2qjsoVNXV28mP6T5gbE1uHhuCqdLtMKgi01frgM%2B0fVYzIiuSMkqipMhxPsrNa075jmcgsrvo2Lt7gJucKregymEBtxhST9z5x3Dz5Dh2Du%2FDsR2H65JnXxOxY6SIi%2FtYRRsrGJxKh9m5RgsVRDNJUa0WUo9M3uKOiVnGcOhY3SA1wZUi6p5j4VhjS%2BcnDwbx4kd7nQMzFsMcfJ%2BJ2E01qXwjKkFFINeELvL8tqp9hEDFJwQrywFBfbMMzUyskGOqUB5KfMsFXUEUqnl3EYU%2BCfzrX31SudEWraPDMzvXIbjesQky0Wbe9PwNXuM948WyR9wNZnv6dJxt9ni%2BDpBvxM6gltWdx8CV1rX7EtHfpgSMWX3sDRNHoAIfDWLxmKkZfFd%2ByJ%2FZH6afu7iNgmz4ijbiIBtW4zS45Ceupu8Ks9iw0T6dLHekVRHpD%2FT%2FMtqk3iNS%2FzTh51GsEwKcwDB9%2BRf6aVbIXp&X-Amz-Signature=716de7b80bc5dfb8e7e2ca431a198ac7c0465ee532058f66e1fb12c4e7419a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
