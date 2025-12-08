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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGYJARA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvgzUYIbmEbBDDL9mqkJQw%2FQMyuND7NJ2XyZOP2EVd8AiBP9q%2F9jc3pSl7s21fLOp3jnLneqZPaaQCrsIrRqyx5pyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfXNGAI9xiOL5I5AnKtwDWDSMDt5WW9QpEqeoVcNaGLtj5i7rSAFv1E519c7o9YVq0Cs%2BtEkBq3TOTbo4H%2BlKXUFhojgwTw6KKcCLy7UPf4hasBG4XPlNkwm6oUK2Eq6K61lx%2BcWjaKisBDVNFV8pcY1I1QCaoCZW2vHHkGOkEIO%2BaHA8MrDnC7mp6vMgiBGGA2%2FNhmEpfKPuPcGRmMl9TsIir0netKoqnNboAZULu45T2eDWxJdWWcmTqSTKXR0dIKzdoK7f3DfiWc4Fbcu%2FNG21mWK09upxwFkUSCN8ivapuCcEcFKfV1CJaHAVOjQYIDUhv7wwfIF%2FhZoTLI8FJ91sbxmeniGn4AkmM7%2FbXfHOPSmlEP9YqvTIvjJaKVTe1iEW1LMvBjk9JiCAtYfMoafhgsa32DvWS1%2FwjFxwUkflAQBE8eAnFcOwzpB1yjDWElvHHoE9RN53p%2FIajt1%2FlH7rRM9M8vr1ouIANS5FxjXcXw3SHHey%2B%2BknImSPbmptOXl0CTavpd8KLg94e4yabEKCEiS6vPN9EJHX7XFCARwMNI%2FSFk0M%2BzxT9QXbsy240CzSJyJK1rnUAbwhGvWeN4Y4P2pqbfkpeFbP1xfKnU44pF%2FYF3uj5FmHqnk6uv3ZfF00vSkKCJK94ycwo6HYyQY6pgEwt%2FcYrQbjkVuxzPDOEFUbn1rtlkXBV14RPgfNed3jWQHi2vXqJvzJUQnRMHzOiuODAAUebStBnR28O897X9DB8zXdBEjUmYPd9NrnCIcG%2BNsRd6u7gbq%2FtSJAoWpHJTLpOBTRJm3IMg2GKL8SqM0a1eS9Zh8R%2FdfYb%2BCPjGS4JSaq1nhBF%2FHhGkE1A%2BaefLUQQ7wQPFyXFOjgAUnf7pY9lAw7H%2FA0&X-Amz-Signature=ba90f1108c69e9df5c002a3e236603407e699bc2c4c9c0e9c3c938438a43ecb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQGYJARA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICvgzUYIbmEbBDDL9mqkJQw%2FQMyuND7NJ2XyZOP2EVd8AiBP9q%2F9jc3pSl7s21fLOp3jnLneqZPaaQCrsIrRqyx5pyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfXNGAI9xiOL5I5AnKtwDWDSMDt5WW9QpEqeoVcNaGLtj5i7rSAFv1E519c7o9YVq0Cs%2BtEkBq3TOTbo4H%2BlKXUFhojgwTw6KKcCLy7UPf4hasBG4XPlNkwm6oUK2Eq6K61lx%2BcWjaKisBDVNFV8pcY1I1QCaoCZW2vHHkGOkEIO%2BaHA8MrDnC7mp6vMgiBGGA2%2FNhmEpfKPuPcGRmMl9TsIir0netKoqnNboAZULu45T2eDWxJdWWcmTqSTKXR0dIKzdoK7f3DfiWc4Fbcu%2FNG21mWK09upxwFkUSCN8ivapuCcEcFKfV1CJaHAVOjQYIDUhv7wwfIF%2FhZoTLI8FJ91sbxmeniGn4AkmM7%2FbXfHOPSmlEP9YqvTIvjJaKVTe1iEW1LMvBjk9JiCAtYfMoafhgsa32DvWS1%2FwjFxwUkflAQBE8eAnFcOwzpB1yjDWElvHHoE9RN53p%2FIajt1%2FlH7rRM9M8vr1ouIANS5FxjXcXw3SHHey%2B%2BknImSPbmptOXl0CTavpd8KLg94e4yabEKCEiS6vPN9EJHX7XFCARwMNI%2FSFk0M%2BzxT9QXbsy240CzSJyJK1rnUAbwhGvWeN4Y4P2pqbfkpeFbP1xfKnU44pF%2FYF3uj5FmHqnk6uv3ZfF00vSkKCJK94ycwo6HYyQY6pgEwt%2FcYrQbjkVuxzPDOEFUbn1rtlkXBV14RPgfNed3jWQHi2vXqJvzJUQnRMHzOiuODAAUebStBnR28O897X9DB8zXdBEjUmYPd9NrnCIcG%2BNsRd6u7gbq%2FtSJAoWpHJTLpOBTRJm3IMg2GKL8SqM0a1eS9Zh8R%2FdfYb%2BCPjGS4JSaq1nhBF%2FHhGkE1A%2BaefLUQQ7wQPFyXFOjgAUnf7pY9lAw7H%2FA0&X-Amz-Signature=0c5e8dad2e814831d06692e1f4121288eba657b36554854195f31e2a156339d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
