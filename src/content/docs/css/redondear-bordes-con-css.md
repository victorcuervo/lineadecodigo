---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKPV2JN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD6EgBs2uCzfVcXobO6BU3Tt3%2FSPrpjVJ48Z3hdFH057QIhAKR2U%2BLZO3AVkKshF7oWMCl7EezucUK%2FmJeQugsF6MeGKv8DCDcQABoMNjM3NDIzMTgzODA1Igyp0PRK0dm06j%2BbuL4q3AMUqfiIG939x4z9TB%2B6Dtj8ISFYc%2F8tyEX3uG%2Bd1zvuJ7DQwVAxh%2F5DXv%2BSlpqLDzHN8taWK7gowgHd9JhPOdkSUmRrrxqMUBQnsqWTEu%2BCf1cGarxhpXQ4Avvm4OItNbH%2Fc0GGeVdyzCYEi6r%2Bdrbhsw5uU0jEWSfxQXsldQKkJ7qbdYTtIXQA86VMyeETal1Sx%2FgXuDUmyX98Qxve00OADqw0DgkqMzTP1Cd1yKyNz1L1De%2FViB9W4CgpmKg7gtJVJE0FZOCpgTkeOuOedqn4QQB3D2JN79LdRI%2By7jElpiMYGC7sxxXMMvw6AfncQKnxshtsiwQFIE4iol5nqTcELRJxiH9sofbMNsBdAxM62aBh%2BK9lJftK%2ByQ0aREjYgSY6J%2Bd9iQRBcEyfZcNo2vGAPPWTrPZE7Cb01EgBXgWR%2Fzu7BPieLjsmdkmGzTKMFcuq2xMg%2F1xeg08%2FZQcTK70aU3O5%2BNxGKKTrN5hB3ZG7rxM1%2FJuAtbXYabLYKKyccYA3OcRvY1zH1jpHD7RkxUnzOWpkcOKmphTZ2ac%2BkomMHC6%2BnEbVUJsiUQvB6iJB5jEgi19ixOu0qsK2DIskvrN3%2BtugGfzAh9SVmBsMlGMDbKTqAh4rygSEdZRLDCq3cLJBjqkAZw%2B6h028Hfpw2XZyPsMJ%2FvP5yIm0GoVPxjjj7svDSLLsOxF5LY2bGO2SO1%2BiAKEE35dSkql4vWhudSxXohwSbAQ%2FwwBhRMOapg1QnjzR%2B%2BlOavVOqpjVqlxQF%2FO058fFsju1VXk5R%2BFAKiTvlsoXfh8WhjYsajtZ39e9RSOp2r5ZhcC6w5E7yt4qjbAmfuOlw1f1XvZZxxBHMvVqv5eQxnHT%2Fgw&X-Amz-Signature=abb980d7c5117bd099b01c1f2e0fc0ace9687224613525234625c8faad02603b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDKPV2JN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD6EgBs2uCzfVcXobO6BU3Tt3%2FSPrpjVJ48Z3hdFH057QIhAKR2U%2BLZO3AVkKshF7oWMCl7EezucUK%2FmJeQugsF6MeGKv8DCDcQABoMNjM3NDIzMTgzODA1Igyp0PRK0dm06j%2BbuL4q3AMUqfiIG939x4z9TB%2B6Dtj8ISFYc%2F8tyEX3uG%2Bd1zvuJ7DQwVAxh%2F5DXv%2BSlpqLDzHN8taWK7gowgHd9JhPOdkSUmRrrxqMUBQnsqWTEu%2BCf1cGarxhpXQ4Avvm4OItNbH%2Fc0GGeVdyzCYEi6r%2Bdrbhsw5uU0jEWSfxQXsldQKkJ7qbdYTtIXQA86VMyeETal1Sx%2FgXuDUmyX98Qxve00OADqw0DgkqMzTP1Cd1yKyNz1L1De%2FViB9W4CgpmKg7gtJVJE0FZOCpgTkeOuOedqn4QQB3D2JN79LdRI%2By7jElpiMYGC7sxxXMMvw6AfncQKnxshtsiwQFIE4iol5nqTcELRJxiH9sofbMNsBdAxM62aBh%2BK9lJftK%2ByQ0aREjYgSY6J%2Bd9iQRBcEyfZcNo2vGAPPWTrPZE7Cb01EgBXgWR%2Fzu7BPieLjsmdkmGzTKMFcuq2xMg%2F1xeg08%2FZQcTK70aU3O5%2BNxGKKTrN5hB3ZG7rxM1%2FJuAtbXYabLYKKyccYA3OcRvY1zH1jpHD7RkxUnzOWpkcOKmphTZ2ac%2BkomMHC6%2BnEbVUJsiUQvB6iJB5jEgi19ixOu0qsK2DIskvrN3%2BtugGfzAh9SVmBsMlGMDbKTqAh4rygSEdZRLDCq3cLJBjqkAZw%2B6h028Hfpw2XZyPsMJ%2FvP5yIm0GoVPxjjj7svDSLLsOxF5LY2bGO2SO1%2BiAKEE35dSkql4vWhudSxXohwSbAQ%2FwwBhRMOapg1QnjzR%2B%2BlOavVOqpjVqlxQF%2FO058fFsju1VXk5R%2BFAKiTvlsoXfh8WhjYsajtZ39e9RSOp2r5ZhcC6w5E7yt4qjbAmfuOlw1f1XvZZxxBHMvVqv5eQxnHT%2Fgw&X-Amz-Signature=91019df2c35aabbec18e93b5788b05b28c9ca41c32adb55c1577cd5273f483d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
