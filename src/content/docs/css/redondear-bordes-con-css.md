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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQJWT32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZ5k%2FJ%2Fq8OPDHXEJksI8AE1kTJkTXkOsW6ihi9oRIzAIgInC17ko%2Bjo%2F9RA0a8Gwu3zZkbw9i9W8MU8f1%2BAcRLWoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDA%2BnsCRvxsDDDwggGCrcA%2Buk6j5nw5UhZ5nno6QBI4VTBkWrdALgxb3KLJ849pVPFw%2FelljFPHIjd4WOuO0rAKTMo6r0TgvHglsX4hdFCYqQSRyb%2FoLFarq7GnZfeJCZaTYGa2XVy5Q5cPYsFxJLyI6zWxYaaPYz93AES0%2Fp%2FewRRUo5WQNWfduv8%2FMAI5TVxycdZlatYPoLQTXFq7BEB%2BkPJIuczVUrQdws39cV07h5bfuCA2%2BuEdXo7mLcfq8J2YqLnbAnmOTUB1Vao9SEYYqdgy6guhqK2p5sr5JSDEGr%2Bldac988w1%2Fhn78NUfIQx8RL97ng%2BNk4n%2BT46lzC8WrGH1sCo63%2BRdCFg9mun8Mq6bHrkpHa8QZ%2Fe53IlQxQDt7vyH9NiwSo5GId6324ELrzK%2FKuQ%2FeEKfCBOrQbIRnWEu6d5bsPhdILnPlYVTBjj0RAL0Xr5dJl2RkTOh1DC0ys72799BGjt475mUHTEu7W%2BIhYsW96LvG7rk6SmTxqLeJTt29oGy%2Fs7ocdD6LEaNKdocZazVVaXmX0RnSha5RXlF%2BHjpp3ig5DfPiblBmE6TtqxMBOxZkJDvFxlar2R8bKJ26jlfuQagDL%2Fi8O9Vvm48U3zvUQ3RUD%2FRz7Gq14I2E9nKWYVFGHQlg7MI6syckGOqUBS%2F%2F%2FvRz7mt16DwOQdZs8kn84iy53ze1x5EY0TkPGtUe510tn5p%2F63kpFCjVODTOcfgZOhfrcZ5vFopf2qK4QJo1pOthdc1Kltgec31JGkyTTD13%2FhuJBr7cMuiiQK9FvXBaK4jrhF%2FxwVltPxCK%2Fjf5FuQPA%2FJIBtkxnBTIbKP89PegeZE9Luuo0Ddjbl%2B0IxbumcS%2B1L6ACcLzxgqTJ881mMDus&X-Amz-Signature=c1750d7994f28f82ac40abba6963aac575a6daeebe1a95763cb5cbc35526e4c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJQJWT32%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnZ5k%2FJ%2Fq8OPDHXEJksI8AE1kTJkTXkOsW6ihi9oRIzAIgInC17ko%2Bjo%2F9RA0a8Gwu3zZkbw9i9W8MU8f1%2BAcRLWoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDA%2BnsCRvxsDDDwggGCrcA%2Buk6j5nw5UhZ5nno6QBI4VTBkWrdALgxb3KLJ849pVPFw%2FelljFPHIjd4WOuO0rAKTMo6r0TgvHglsX4hdFCYqQSRyb%2FoLFarq7GnZfeJCZaTYGa2XVy5Q5cPYsFxJLyI6zWxYaaPYz93AES0%2Fp%2FewRRUo5WQNWfduv8%2FMAI5TVxycdZlatYPoLQTXFq7BEB%2BkPJIuczVUrQdws39cV07h5bfuCA2%2BuEdXo7mLcfq8J2YqLnbAnmOTUB1Vao9SEYYqdgy6guhqK2p5sr5JSDEGr%2Bldac988w1%2Fhn78NUfIQx8RL97ng%2BNk4n%2BT46lzC8WrGH1sCo63%2BRdCFg9mun8Mq6bHrkpHa8QZ%2Fe53IlQxQDt7vyH9NiwSo5GId6324ELrzK%2FKuQ%2FeEKfCBOrQbIRnWEu6d5bsPhdILnPlYVTBjj0RAL0Xr5dJl2RkTOh1DC0ys72799BGjt475mUHTEu7W%2BIhYsW96LvG7rk6SmTxqLeJTt29oGy%2Fs7ocdD6LEaNKdocZazVVaXmX0RnSha5RXlF%2BHjpp3ig5DfPiblBmE6TtqxMBOxZkJDvFxlar2R8bKJ26jlfuQagDL%2Fi8O9Vvm48U3zvUQ3RUD%2FRz7Gq14I2E9nKWYVFGHQlg7MI6syckGOqUBS%2F%2F%2FvRz7mt16DwOQdZs8kn84iy53ze1x5EY0TkPGtUe510tn5p%2F63kpFCjVODTOcfgZOhfrcZ5vFopf2qK4QJo1pOthdc1Kltgec31JGkyTTD13%2FhuJBr7cMuiiQK9FvXBaK4jrhF%2FxwVltPxCK%2Fjf5FuQPA%2FJIBtkxnBTIbKP89PegeZE9Luuo0Ddjbl%2B0IxbumcS%2B1L6ACcLzxgqTJ881mMDus&X-Amz-Signature=b766a051d6e1d5ba0cd3a017d0700594e254f74727306c519619278c9abf37f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
