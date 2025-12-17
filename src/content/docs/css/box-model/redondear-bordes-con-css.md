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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTIFRBE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZUJSDC1BSAXB7L8lIY1kbMWsBSHzRHTp4%2BVWGQ1DRrAiAcO1%2FSdcrxc%2BKFG%2B9FYtrzNRjY27LtZOENqKiIruUUDSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMT45CiBbzLe2hw0iNKtwDbn1qIapqGmdUcMR1g%2FTMXVWbGxo1N2SKXBehv7SxAZF2q3bj45PLFrJefk6Kcziag%2FGY6fmMMTeznBWHb5JW6Tf75h9iGx771i%2BFvYlkMXIHLHncvKM18OoiQO6e8%2BshF0M%2FzHCSujkB71xVriPMGO6T4deuhIa15TR7hHKzdpFkU%2Bl1vux4eRdMtCbHtXFtY2Ecfz0PYbLqZDHOsKktVK17DyxXqOB0d4hy4zuikM8Xi8GeY0V5Lqmqp0qiCNK5%2Fe24ZmibXZcKOrFJc%2B%2BDofpf6jy54j0Olp9oj54pxsTM2klBRvRV9JxGDX4OM%2F78pzwQiX97FEeF6AsMFdkC%2F05xrrR440v5lvdL8gzwtjPMEKQpT4Nck6Wyz%2BpWQDUAbaiu6C3Hqla%2FCMMYQq8sa%2FXemLUaSNvoPhfHsgBvERsXEX6SyiwXWlkhKvzbPFR3gh8aOYWf4WFxpWgZr9sjWU%2BfM6dZhysg0Bjc3IpcBVTDqKxNYxIEnOIQLtdrZrhs67sEDj49HBpNpZuSgVI9K9WQRUOjpr87xucUJ4I2zKC3DIe29P90wCRe8HHaBnFdCB7UFs5f2qEEYlducaWTN6Z3jKfAalVzQm92KE3GjTf8jvkFMM33tfGpmDowgtGJygY6pgGqvyOK4fQs24iM0BvyiIaf1KjMDZsEECtR0jtp%2FmEnbYkP0mIUjMLhGQxJzOPXx2BVEOAHozqji6Ufhuk2mu%2FgvIloX0KF4bv%2B58dlYapWMxdFEahHh8T4gqTaECxbQTHgn6XTMJ%2FxuzpMaPYlhlrjvk9HFtHg7AF83wtKl%2B09hVJTwlW3fFGt0aXAo1TmCs4egvNAm%2BucHeAAXZSeEH4fVxVOwIK%2B&X-Amz-Signature=7770045f5c5e42f59b15d57c48132495afef403ff51eaad8a13f29b2d29e6de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTIFRBE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZUJSDC1BSAXB7L8lIY1kbMWsBSHzRHTp4%2BVWGQ1DRrAiAcO1%2FSdcrxc%2BKFG%2B9FYtrzNRjY27LtZOENqKiIruUUDSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMT45CiBbzLe2hw0iNKtwDbn1qIapqGmdUcMR1g%2FTMXVWbGxo1N2SKXBehv7SxAZF2q3bj45PLFrJefk6Kcziag%2FGY6fmMMTeznBWHb5JW6Tf75h9iGx771i%2BFvYlkMXIHLHncvKM18OoiQO6e8%2BshF0M%2FzHCSujkB71xVriPMGO6T4deuhIa15TR7hHKzdpFkU%2Bl1vux4eRdMtCbHtXFtY2Ecfz0PYbLqZDHOsKktVK17DyxXqOB0d4hy4zuikM8Xi8GeY0V5Lqmqp0qiCNK5%2Fe24ZmibXZcKOrFJc%2B%2BDofpf6jy54j0Olp9oj54pxsTM2klBRvRV9JxGDX4OM%2F78pzwQiX97FEeF6AsMFdkC%2F05xrrR440v5lvdL8gzwtjPMEKQpT4Nck6Wyz%2BpWQDUAbaiu6C3Hqla%2FCMMYQq8sa%2FXemLUaSNvoPhfHsgBvERsXEX6SyiwXWlkhKvzbPFR3gh8aOYWf4WFxpWgZr9sjWU%2BfM6dZhysg0Bjc3IpcBVTDqKxNYxIEnOIQLtdrZrhs67sEDj49HBpNpZuSgVI9K9WQRUOjpr87xucUJ4I2zKC3DIe29P90wCRe8HHaBnFdCB7UFs5f2qEEYlducaWTN6Z3jKfAalVzQm92KE3GjTf8jvkFMM33tfGpmDowgtGJygY6pgGqvyOK4fQs24iM0BvyiIaf1KjMDZsEECtR0jtp%2FmEnbYkP0mIUjMLhGQxJzOPXx2BVEOAHozqji6Ufhuk2mu%2FgvIloX0KF4bv%2B58dlYapWMxdFEahHh8T4gqTaECxbQTHgn6XTMJ%2FxuzpMaPYlhlrjvk9HFtHg7AF83wtKl%2B09hVJTwlW3fFGt0aXAo1TmCs4egvNAm%2BucHeAAXZSeEH4fVxVOwIK%2B&X-Amz-Signature=f8d90c33063903c374f208af45080f73e2f9a675f9a994fd1d46f3c1cd341811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
