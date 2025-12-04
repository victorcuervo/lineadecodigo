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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ2HKW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICYTzRRKrhqHTHVdybl57AGscXeHx6lHhFwVZ6FmQwBxAiBbQxw6canSQUtFrxZR67pzYF7%2BI36Rr9k5QjtlHQTPbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM5yyKEtyZ7XOODru0KtwDXQUpKdcs%2FfW1oAWUhUQgOQJ5uXftniYP2v0tYsw4D2q1j%2FAVyzaDKBcMiLfbgsBd4eryKopKudychgY9fuRB8nznCbnyRk8Lc93qGCAjkXYKN%2F6bzpPAuJSlwe9rnTnCI%2FhOrJ%2BOdXghpDky%2B6ip63xtTeDCe8a4Nrfjkmd84qfgl0UU1pv1lIGXUL%2FSogSgMXYC8e0rogSEfN%2F9x0Qxr6yNcBsoFrIqqANP9ZdiDuvIIuXIvVJILO2Hxh89HXNtEQr9z6gzZLw1nxYfkVI3RBacb2eY18FVfDSjoyd%2FIMR915b23Wh4mBO2N9Iazvu4iD5pTlk7%2Bl11cAwwDT3m5RYsPs8Xj18rU4DuIHmP6j54i%2BaxiRrw3dVMldK4cA%2FBa9%2F58Sz3z7kUt1%2BN7v5gvGvD7MD%2F4hL9okeDea7ngldn4RQiavKGalQuKebWsAtoE%2F9iYS1yQ79ts4fUqOeXVIHsCf56w7gpTotAvD%2FTNIsD28EvXet1axm3PgGjudQA8u5kA2AvzaYYryZutrQnA92GK%2BS4ma6mNnCGDdpvI6Wpm3S6yKpFBooN2MnxpFc%2BqrolJyeJXPeiQpJqon3aUc0ow9%2BJ1JF0UOEfNcWLlws3AnrCeAQUWQf3nfAwpZHEyQY6pgFc4HtH0tNLQ9iaVoaDtkdXAfJKo5BBVfqL7qbS%2Be6tQuCrMNgRidSEqqM%2BjQ8Yi281BZw1RZ85xl4lUNEjSSIxtWP3cV%2BCVWLV9YLmRJZdV%2F08Gt6rCnUzWkDnRkeqZNSgcKHyge8BALzjRnYPtzo%2BLLPYWXVkCGOTlTMRfiOG48cnNwMvHvI20JLzVo%2BiofK06WXGguK9EYsoULWMT0b%2FXL8SsWYn&X-Amz-Signature=0c0ca362f15ebfa1b623f15967cb420c51d173d4825a163e4995573d2e4ab998&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQ2HKW6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T050002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCICYTzRRKrhqHTHVdybl57AGscXeHx6lHhFwVZ6FmQwBxAiBbQxw6canSQUtFrxZR67pzYF7%2BI36Rr9k5QjtlHQTPbyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIM5yyKEtyZ7XOODru0KtwDXQUpKdcs%2FfW1oAWUhUQgOQJ5uXftniYP2v0tYsw4D2q1j%2FAVyzaDKBcMiLfbgsBd4eryKopKudychgY9fuRB8nznCbnyRk8Lc93qGCAjkXYKN%2F6bzpPAuJSlwe9rnTnCI%2FhOrJ%2BOdXghpDky%2B6ip63xtTeDCe8a4Nrfjkmd84qfgl0UU1pv1lIGXUL%2FSogSgMXYC8e0rogSEfN%2F9x0Qxr6yNcBsoFrIqqANP9ZdiDuvIIuXIvVJILO2Hxh89HXNtEQr9z6gzZLw1nxYfkVI3RBacb2eY18FVfDSjoyd%2FIMR915b23Wh4mBO2N9Iazvu4iD5pTlk7%2Bl11cAwwDT3m5RYsPs8Xj18rU4DuIHmP6j54i%2BaxiRrw3dVMldK4cA%2FBa9%2F58Sz3z7kUt1%2BN7v5gvGvD7MD%2F4hL9okeDea7ngldn4RQiavKGalQuKebWsAtoE%2F9iYS1yQ79ts4fUqOeXVIHsCf56w7gpTotAvD%2FTNIsD28EvXet1axm3PgGjudQA8u5kA2AvzaYYryZutrQnA92GK%2BS4ma6mNnCGDdpvI6Wpm3S6yKpFBooN2MnxpFc%2BqrolJyeJXPeiQpJqon3aUc0ow9%2BJ1JF0UOEfNcWLlws3AnrCeAQUWQf3nfAwpZHEyQY6pgFc4HtH0tNLQ9iaVoaDtkdXAfJKo5BBVfqL7qbS%2Be6tQuCrMNgRidSEqqM%2BjQ8Yi281BZw1RZ85xl4lUNEjSSIxtWP3cV%2BCVWLV9YLmRJZdV%2F08Gt6rCnUzWkDnRkeqZNSgcKHyge8BALzjRnYPtzo%2BLLPYWXVkCGOTlTMRfiOG48cnNwMvHvI20JLzVo%2BiofK06WXGguK9EYsoULWMT0b%2FXL8SsWYn&X-Amz-Signature=4636f638cfe01f64648556e6853e222469c9f0944543539390823e17db4aa1bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
