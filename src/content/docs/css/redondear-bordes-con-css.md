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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCEYM2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ3vaWVM4k5a8gRp9jJHBHUK7nwgFWJ9n82KHvGoOiUgIgE%2B32KTh%2B6w2HL%2F2YgZt%2BKldd3RmUAIT%2BM0lgp7VhkTwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFd9FDirhQwPsMu79SrcAx4zxWZc5WKHM4rWpEdlSTyVKIbM5hTqm24XS%2BEhc6vz3p9IDFZnf%2FzJZWBSFm3FuB7niQZF5%2BxPk843NLdbllyrnkJ83gFuIZCEe1o6JxxmGBE4YA37CJgj2J6i8tUNX9Lu2vgjwFbrba46Y%2BVjA8oekxQQdHTymej322LNL0KOPCSboeYVYjeePKNNRX6UHqBjdvx%2BmKAWlGxWNCXjDoFKYW0w%2Bs3S5t0pBeV0yczkE9h6lUfO1RO17lQHY6KvEf2X1lsU6GIs6SA7CM5cI2TarI6rsN%2BJ2%2B6yX8%2FeA2WI%2B1JvZJ0uhBcGlfw%2BKfDrnK0DkgO4Z4w0E%2FNgYej%2Fz%2FguhpEyvc6WdlnFfX61eDW4KaG7dCof8nsFU0AX4sqppprzWa6aGsfOW%2FT6Y3uVW9CRwaJCJkI5ZsUkDDQJ2ySXuOMnjY2Ka2EpNAEmXmCg6zo0DZI5pS3FQ6Vo9JBy4tozf%2Fh%2BM9rglHbyIjxtDqMu4B4LR8VB5autV742I1yXwRm9MWw2Y3amPd1a%2F3LSKP3hjiC0pINDjyDKQqqtvnA1MWzWp9E6slZjxNXAX8CumFz2YFMf6IgMkxBPeQhW9UkmWCq9Qbj049ER3PrLvy30MLAI%2FlXY%2FKm4Li9CMOe8z8kGOqUBvirXNRMLb4de5vpL01p63XIF7u4hLf%2Ffv%2FWWl9xH%2BjCiZr4hIgcY7Wd2TaH82fGCHx%2BQGoJIdpTuTqBYZcXspJ%2ByjJN7XBim8QlDHlvgAqx6%2FLqIBLe5TCSRVuvT5gmCzNHY6P3YCJQxMGQCxMIKcvkNvUKwX7NDdqy4XFBb%2Bp32f8yj1qjglqk%2BaqAcGoEEx2VBrVbd8yHfuuxtk%2BMorVRjR9v%2F&X-Amz-Signature=ee62709d8c12feb8b596baf96b8831b3814496d61bb84783a93cf410a01f6bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKCEYM2P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T075609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ3vaWVM4k5a8gRp9jJHBHUK7nwgFWJ9n82KHvGoOiUgIgE%2B32KTh%2B6w2HL%2F2YgZt%2BKldd3RmUAIT%2BM0lgp7VhkTwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDFd9FDirhQwPsMu79SrcAx4zxWZc5WKHM4rWpEdlSTyVKIbM5hTqm24XS%2BEhc6vz3p9IDFZnf%2FzJZWBSFm3FuB7niQZF5%2BxPk843NLdbllyrnkJ83gFuIZCEe1o6JxxmGBE4YA37CJgj2J6i8tUNX9Lu2vgjwFbrba46Y%2BVjA8oekxQQdHTymej322LNL0KOPCSboeYVYjeePKNNRX6UHqBjdvx%2BmKAWlGxWNCXjDoFKYW0w%2Bs3S5t0pBeV0yczkE9h6lUfO1RO17lQHY6KvEf2X1lsU6GIs6SA7CM5cI2TarI6rsN%2BJ2%2B6yX8%2FeA2WI%2B1JvZJ0uhBcGlfw%2BKfDrnK0DkgO4Z4w0E%2FNgYej%2Fz%2FguhpEyvc6WdlnFfX61eDW4KaG7dCof8nsFU0AX4sqppprzWa6aGsfOW%2FT6Y3uVW9CRwaJCJkI5ZsUkDDQJ2ySXuOMnjY2Ka2EpNAEmXmCg6zo0DZI5pS3FQ6Vo9JBy4tozf%2Fh%2BM9rglHbyIjxtDqMu4B4LR8VB5autV742I1yXwRm9MWw2Y3amPd1a%2F3LSKP3hjiC0pINDjyDKQqqtvnA1MWzWp9E6slZjxNXAX8CumFz2YFMf6IgMkxBPeQhW9UkmWCq9Qbj049ER3PrLvy30MLAI%2FlXY%2FKm4Li9CMOe8z8kGOqUBvirXNRMLb4de5vpL01p63XIF7u4hLf%2Ffv%2FWWl9xH%2BjCiZr4hIgcY7Wd2TaH82fGCHx%2BQGoJIdpTuTqBYZcXspJ%2ByjJN7XBim8QlDHlvgAqx6%2FLqIBLe5TCSRVuvT5gmCzNHY6P3YCJQxMGQCxMIKcvkNvUKwX7NDdqy4XFBb%2Bp32f8yj1qjglqk%2BaqAcGoEEx2VBrVbd8yHfuuxtk%2BMorVRjR9v%2F&X-Amz-Signature=ab8517275dd8ae6928eca36248a42b63302274eb0659395f1755131c7e8f2afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
