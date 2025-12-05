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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E42ZG2O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0j0skttEvGDYuzfKa4mggz2uxky0SuEtqCFHEB%2BqgrgIgUwSNtRShdaY%2BsDzvtRAgSj5m4RudVnsnkj%2BzzjCHI3gq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIB9h3SEeRAOuAxK8ircA7JaLvZ%2BEz%2BO8zf4suW9FZbjY3KvitD%2FN9rpo%2FNqa7N57jvoCme2dHE0qCiZFlK%2B28lyO6Z5kv7pxzQ%2BvMMulgKHZuYEJh4PiawdCsPxnz5s7vfdHeh%2Bqly%2F5tT8TCdbd19T7hAAaUlrjZh83aFF1QdWqSjJwZyf0ORXT%2B3yZgyWOdkSnBvpyrp3CfvzcOXwqITjLW9xQP%2FYcjd4wqOIexrSm%2FTmAyVwEGaexNHV5eKViuDriTIzOA2eozvi0yKopwBL6Z50kgWzQvffLROG%2FbZxjbc%2BaUSFm%2FgycgQ7083Q3JU7Cs%2F%2BkddJzNmBmuZlq7ghCb%2Fps%2FNgB1J7y%2B6NQeGiJUqVmwJnndenn8Pk26bvUQFFNCKw0P%2B0TWgoInxJEke%2Ft3FJ%2FjrNzIE%2B1rpSx5jRskVs2n0bGJE%2B7pJyeTk1zA2L%2Fu4pvu79TDJ1x7MxDb5URporSThw8Y3GkIb8VnSk08BbgSj3KyLQ4dZMN%2Bqp1bWj3YXtsGb3dnsz7B%2FeHSIP95xsV6l6YfXw2uVWFQ1QzrDtIXiOHm2RrDyaCmmiHF5HDxZom0uire0KvwMwSgplXNrZZn0TOopzAykDkCM9JH0VsEQTstIKKIq6K2r6nbdYWTUZkO10ZuokMOXFzckGOqUBtzZ2CPocpuX0nSKJw39jQGG5%2FqEzf04LcA5fMnBU255ENBNyYb09MX02aJXgHyrqs7%2BgTBzEhdMQ9strt0QoQfDlavO%2FyZNRLrmvA7MhIPuZwGFI1LY%2Bvox3RCqGZV284JC6LgTJPHfVNhU%2BD4bDyVlpCV%2BfpVPC9EhWh%2FTlmr6bohFYCISaLbCKi3cFiQ0iEZq9dh%2B%2F7KTe5XMXAbI1RxOXLXfJ&X-Amz-Signature=2cf58c47d44d74e6566dce66c452958219442d545b517d8c27bc6967130abf94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E42ZG2O%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0j0skttEvGDYuzfKa4mggz2uxky0SuEtqCFHEB%2BqgrgIgUwSNtRShdaY%2BsDzvtRAgSj5m4RudVnsnkj%2BzzjCHI3gq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDIB9h3SEeRAOuAxK8ircA7JaLvZ%2BEz%2BO8zf4suW9FZbjY3KvitD%2FN9rpo%2FNqa7N57jvoCme2dHE0qCiZFlK%2B28lyO6Z5kv7pxzQ%2BvMMulgKHZuYEJh4PiawdCsPxnz5s7vfdHeh%2Bqly%2F5tT8TCdbd19T7hAAaUlrjZh83aFF1QdWqSjJwZyf0ORXT%2B3yZgyWOdkSnBvpyrp3CfvzcOXwqITjLW9xQP%2FYcjd4wqOIexrSm%2FTmAyVwEGaexNHV5eKViuDriTIzOA2eozvi0yKopwBL6Z50kgWzQvffLROG%2FbZxjbc%2BaUSFm%2FgycgQ7083Q3JU7Cs%2F%2BkddJzNmBmuZlq7ghCb%2Fps%2FNgB1J7y%2B6NQeGiJUqVmwJnndenn8Pk26bvUQFFNCKw0P%2B0TWgoInxJEke%2Ft3FJ%2FjrNzIE%2B1rpSx5jRskVs2n0bGJE%2B7pJyeTk1zA2L%2Fu4pvu79TDJ1x7MxDb5URporSThw8Y3GkIb8VnSk08BbgSj3KyLQ4dZMN%2Bqp1bWj3YXtsGb3dnsz7B%2FeHSIP95xsV6l6YfXw2uVWFQ1QzrDtIXiOHm2RrDyaCmmiHF5HDxZom0uire0KvwMwSgplXNrZZn0TOopzAykDkCM9JH0VsEQTstIKKIq6K2r6nbdYWTUZkO10ZuokMOXFzckGOqUBtzZ2CPocpuX0nSKJw39jQGG5%2FqEzf04LcA5fMnBU255ENBNyYb09MX02aJXgHyrqs7%2BgTBzEhdMQ9strt0QoQfDlavO%2FyZNRLrmvA7MhIPuZwGFI1LY%2Bvox3RCqGZV284JC6LgTJPHfVNhU%2BD4bDyVlpCV%2BfpVPC9EhWh%2FTlmr6bohFYCISaLbCKi3cFiQ0iEZq9dh%2B%2F7KTe5XMXAbI1RxOXLXfJ&X-Amz-Signature=6f840d5573e75b131077affd82e42a1e6d2a65e3aba435e8194cd866457b078a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
