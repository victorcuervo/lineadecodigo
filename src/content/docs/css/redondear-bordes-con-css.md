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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTO7A2X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU4WiFnoskxBVEIsEHXZQ%2BNCmbBBQQyBxZOBV6si3AJwIgducleXTCQvLeNPQp7cq9Hx5qVoIHnVCoG6JKZ7E26YMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDELKpTQdQvjhOLM2CircA%2B%2BvVFNVxhs60nOdYmFRmfb8RdpLcX7oYggx9n9iKuiYYSLgNurnpR5E1dfiue0CajMe3DgoNrBqI4jZClFINmUubFjY3%2BeLr4XQNBWzhkkS5MqdN9iivgE0NtRwZ8bw%2F%2BktnaFqU8GPIaB9geoKkj0kL4Zjlp5yitNk%2B4lvUiyYqIEQ6Ckt%2B%2BqCXAgNyCKOuJ2YsmHtgeVabThCbNoZ%2Fec4z6zMb0rRDbkrM%2B3Oh8Si0IQseZ0WNlr0cJoud5qwpF7kvhaCxCiA2LHLur38dgVBeoVlqyMmrgLFb5q9oTgzdlJcYfKDIbqgAJ3bPDG78ZBLJ%2Fb4BCGcJitK9rl%2FaVr7p1qSVwmBsbuRwST7aoPRLft0nuw1pHzxLpIKLLL%2FUotFa9YlUDepTkY4TuH43iJ%2Bx5sa3Kuq4JNSMXg9rAy697%2Bt8Xawej0406TR1i21Y4Li%2B4hU1JddLKgptfdpD%2BQ%2B18KxCbz9W5Mr%2Bj0OuFG7p1GSSCpjxXbB1MgHJSH8etUcACBpcaOZ3JjrMxvcDH0NvVj4cJ%2Fj8CU3I8hkOzLiBpL9p9qoGUh0sM9NMtbtqRKUmfy9%2FLGAEFI0LQsRrv8waCotbEWVBBjgFdCq4LJdTz3I0amzpPZ0jgMaMIfcxskGOqUB8mT8Jh0WRArgDWKo6%2FOKtZLc4wSJYm1oapOpEtDilBTG6tf%2BRL7lGCxqgLOKbtLyxatXI1MhIvOYik5RFHaybZSZV1dNsnbuORsYuhCbl%2FVqpmubBaRd8Wr6pUaZY3GH4gTw8Ck3d%2Bsd6sBNXOvw64U8bMq2WJugho%2FtORaklyEaREfAOmiknlGH5jvrUgEvnr%2FHcdhN4%2FLkbh1Db2vFphVjk8Je&X-Amz-Signature=7d04676253955986d82b14cd60653cc8f89e983233cc0357a6d5756c001db4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSTO7A2X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU4WiFnoskxBVEIsEHXZQ%2BNCmbBBQQyBxZOBV6si3AJwIgducleXTCQvLeNPQp7cq9Hx5qVoIHnVCoG6JKZ7E26YMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDELKpTQdQvjhOLM2CircA%2B%2BvVFNVxhs60nOdYmFRmfb8RdpLcX7oYggx9n9iKuiYYSLgNurnpR5E1dfiue0CajMe3DgoNrBqI4jZClFINmUubFjY3%2BeLr4XQNBWzhkkS5MqdN9iivgE0NtRwZ8bw%2F%2BktnaFqU8GPIaB9geoKkj0kL4Zjlp5yitNk%2B4lvUiyYqIEQ6Ckt%2B%2BqCXAgNyCKOuJ2YsmHtgeVabThCbNoZ%2Fec4z6zMb0rRDbkrM%2B3Oh8Si0IQseZ0WNlr0cJoud5qwpF7kvhaCxCiA2LHLur38dgVBeoVlqyMmrgLFb5q9oTgzdlJcYfKDIbqgAJ3bPDG78ZBLJ%2Fb4BCGcJitK9rl%2FaVr7p1qSVwmBsbuRwST7aoPRLft0nuw1pHzxLpIKLLL%2FUotFa9YlUDepTkY4TuH43iJ%2Bx5sa3Kuq4JNSMXg9rAy697%2Bt8Xawej0406TR1i21Y4Li%2B4hU1JddLKgptfdpD%2BQ%2B18KxCbz9W5Mr%2Bj0OuFG7p1GSSCpjxXbB1MgHJSH8etUcACBpcaOZ3JjrMxvcDH0NvVj4cJ%2Fj8CU3I8hkOzLiBpL9p9qoGUh0sM9NMtbtqRKUmfy9%2FLGAEFI0LQsRrv8waCotbEWVBBjgFdCq4LJdTz3I0amzpPZ0jgMaMIfcxskGOqUB8mT8Jh0WRArgDWKo6%2FOKtZLc4wSJYm1oapOpEtDilBTG6tf%2BRL7lGCxqgLOKbtLyxatXI1MhIvOYik5RFHaybZSZV1dNsnbuORsYuhCbl%2FVqpmubBaRd8Wr6pUaZY3GH4gTw8Ck3d%2Bsd6sBNXOvw64U8bMq2WJugho%2FtORaklyEaREfAOmiknlGH5jvrUgEvnr%2FHcdhN4%2FLkbh1Db2vFphVjk8Je&X-Amz-Signature=cf4297a017780d97deabbb8a44f262ad65230d6485a00b723101fdb865d02a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
