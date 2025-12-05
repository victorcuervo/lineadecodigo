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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VC5JON7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4DmQ%2FVN226kZJ0Hyhk7jbc17jb768x0FSiA8kuXNqUAiAAnS9dscaY7%2BMR11xrIxt2V1ZJh4q0fU70gq%2Bdd6sRmyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMmOQBI8Q5tQOimIvuKtwDzqzaIy1FS0PFMbPxXtD6R8rmzVzNWQWUKP%2BTUo28r4VSywuF8uZCQX1l4QbFRKRKvrosudp%2F7AUgSbSh%2FRcgWKT%2FmHSVC09lkFr6xorE65Q7UZIBRSC%2FU60vw4dluPvYsWrhYHWxnZu0Ki6UTpELHH9wGypTSaGxRu%2F4N78nRV9m1nJDh4QPeXo6Gwj9cNGEYx9uH2CwSMaclGVyARWdK%2B7xnw5UKJLz3pKyJFmLULCbcV5qPvyIsRAKKmvcZqXb%2Bw37bSd1kWSs88JvdAznOc%2FneQObb4Bzm6zmetuaxAKoYTXBqOHJ6im%2FW7DM9%2Fg5lisrdLBuUk7l0io4MZXy2qEpNfPMQGoa5MFFxPkx7LrzpRSaUXlQHra9yW2o7pw%2BthACP0mirmeMuAqDtbPfen5muGEBO93Yo74ZqP3LDIJwjteVQ6lmMrQnVGMxB73ig00Wz6dBBofnFfn9s3G%2Fv3yAR1m7Xsdpj9lX7XJXluCq9FRKv7q4Pxeuaigts0iM0X5BN%2FERYFQ9vgN1aJyAvewWaotKNJs7MPtZTB0dUaOH1x9R%2BqQ3KcmReI3BvADHdJIg6pT7uDfKyOT2K2DnluIGu7tG2ZFLVD4oQXZNIIBs2VGuFFrOyayBa14w%2Fa%2FJyQY6pgFGKxr21Idhtxo9TrR%2B7%2BSerHYgoy%2FANc5BIgZ%2Bu%2Br9WxYvcEcowQR1Uz9UZ5aKWcMEqqARb9mu0IMDxdsvwCKKBgglCKPvV9xnIhA53y9NplJhCo6UQl7Tbs1vC9ic2Ldiw7VWcirkqoYC8enNkLXpeTZTtAzF4dhS30cLXXy3MgaaB8KlrUrETTmlJSSVpaglGQgAgqwnWnG25v%2FtOnEEqtiMwZuc&X-Amz-Signature=97f2d10485a0bb9bf99d925886cc9516bd26b803e4ccbf761fec88e8e3ab28da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VC5JON7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH4DmQ%2FVN226kZJ0Hyhk7jbc17jb768x0FSiA8kuXNqUAiAAnS9dscaY7%2BMR11xrIxt2V1ZJh4q0fU70gq%2Bdd6sRmyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMmOQBI8Q5tQOimIvuKtwDzqzaIy1FS0PFMbPxXtD6R8rmzVzNWQWUKP%2BTUo28r4VSywuF8uZCQX1l4QbFRKRKvrosudp%2F7AUgSbSh%2FRcgWKT%2FmHSVC09lkFr6xorE65Q7UZIBRSC%2FU60vw4dluPvYsWrhYHWxnZu0Ki6UTpELHH9wGypTSaGxRu%2F4N78nRV9m1nJDh4QPeXo6Gwj9cNGEYx9uH2CwSMaclGVyARWdK%2B7xnw5UKJLz3pKyJFmLULCbcV5qPvyIsRAKKmvcZqXb%2Bw37bSd1kWSs88JvdAznOc%2FneQObb4Bzm6zmetuaxAKoYTXBqOHJ6im%2FW7DM9%2Fg5lisrdLBuUk7l0io4MZXy2qEpNfPMQGoa5MFFxPkx7LrzpRSaUXlQHra9yW2o7pw%2BthACP0mirmeMuAqDtbPfen5muGEBO93Yo74ZqP3LDIJwjteVQ6lmMrQnVGMxB73ig00Wz6dBBofnFfn9s3G%2Fv3yAR1m7Xsdpj9lX7XJXluCq9FRKv7q4Pxeuaigts0iM0X5BN%2FERYFQ9vgN1aJyAvewWaotKNJs7MPtZTB0dUaOH1x9R%2BqQ3KcmReI3BvADHdJIg6pT7uDfKyOT2K2DnluIGu7tG2ZFLVD4oQXZNIIBs2VGuFFrOyayBa14w%2Fa%2FJyQY6pgFGKxr21Idhtxo9TrR%2B7%2BSerHYgoy%2FANc5BIgZ%2Bu%2Br9WxYvcEcowQR1Uz9UZ5aKWcMEqqARb9mu0IMDxdsvwCKKBgglCKPvV9xnIhA53y9NplJhCo6UQl7Tbs1vC9ic2Ldiw7VWcirkqoYC8enNkLXpeTZTtAzF4dhS30cLXXy3MgaaB8KlrUrETTmlJSSVpaglGQgAgqwnWnG25v%2FtOnEEqtiMwZuc&X-Amz-Signature=86850c631dc557329fd624adf319861d44473b6d12112d076a26ac18a7be32fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
