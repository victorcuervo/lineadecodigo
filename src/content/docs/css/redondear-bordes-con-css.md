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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZA2PYF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXvAWeYXlnE8xH0TmQLhqHSRMVkUyXXmO9xQ5zk18aSgIhAK0A26H944Q1qmgmrPYQurvtKpV28EfqcOxEI6TYAD3HKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAUKDFJO8lYVB7rtIq3AMLP6eYQ5NV5%2FXeDT0qrkT%2BdVyXEWSb00WYce%2FiA6b6Zp6YUr3rKJe6P9LL1AVCiVmsAy1Y8%2Bl76ey6k6TUi%2BDkAUs7cymGAwINhELnMEDi20SC8%2BVLlS4AxKckt8zkud0094Hh3tb8zH86Jnk%2BBCHmprJ%2FxqAqBhnNv0wV1k2jwW0ZUp9uhvmugV7ccjelkv%2FU3Rz6OGndIyG%2BIcFIA9FJl%2F2I4ByftNOvn72Pto2Nru5BEUr2OlGGe2tS1nrm6RjXOwU5LjHKSh8D3co10fQP2p%2BbW1BG%2F5GPgEcFMvGEUB0YrBUPFP%2FoxX5H0kFR%2FYqtkZVe1MnKsKM2Y4vWyEpScrSWME44DOGqokX%2B6KCZUZZpfl8fG5ECl2FTNrc9MNExhD6t0viXk9DoKOW0by8iYm7HX4At77N1TTsEIykKzxd2fKcr9wmbb0XNNVNNj%2F8VdfAHrVG%2B6vsvHbj6mSHFIbSxgtRdGQ8auMMYjoaq8zVOI51WJIiL44AtP8kqg%2Fcuf36k710E5nfJRWuHbc%2BO1cUS925FMY35YQZ8zunu2m%2FPGvdZMxUCgJVfPrcH2%2FGJH7ExPmsuTC08agSrDdqXX%2BCygtz20%2BDW4lstLN3yqThzPVMnoT6CQ11OWDCfpd%2FJBjqkAXyvHqTWqzGsbhrcXgPf%2BFKJNXeWu0xIRvF%2FIcfvpquIkxK8Ow5QnHk1Ff5gNl1yLWnthBVVa7sT80jrsKO%2BLhp6jFjRxVxapKoqCaRzJ3xqr40pJ08qJh%2Bpn72EJUpssFlIxg1wC3nlkLHeXy8sfayNjCNiv6U2QeZXCZkYGBzBFMl5d6EuS9VY8Uoxy2sYx%2FhjSYATYNpB%2B2P7G8jZFrgOqkWR&X-Amz-Signature=8837498cf65536bc023a86884367f114137a255fdf11d1c908adf09f258879fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHZA2PYF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXvAWeYXlnE8xH0TmQLhqHSRMVkUyXXmO9xQ5zk18aSgIhAK0A26H944Q1qmgmrPYQurvtKpV28EfqcOxEI6TYAD3HKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAUKDFJO8lYVB7rtIq3AMLP6eYQ5NV5%2FXeDT0qrkT%2BdVyXEWSb00WYce%2FiA6b6Zp6YUr3rKJe6P9LL1AVCiVmsAy1Y8%2Bl76ey6k6TUi%2BDkAUs7cymGAwINhELnMEDi20SC8%2BVLlS4AxKckt8zkud0094Hh3tb8zH86Jnk%2BBCHmprJ%2FxqAqBhnNv0wV1k2jwW0ZUp9uhvmugV7ccjelkv%2FU3Rz6OGndIyG%2BIcFIA9FJl%2F2I4ByftNOvn72Pto2Nru5BEUr2OlGGe2tS1nrm6RjXOwU5LjHKSh8D3co10fQP2p%2BbW1BG%2F5GPgEcFMvGEUB0YrBUPFP%2FoxX5H0kFR%2FYqtkZVe1MnKsKM2Y4vWyEpScrSWME44DOGqokX%2B6KCZUZZpfl8fG5ECl2FTNrc9MNExhD6t0viXk9DoKOW0by8iYm7HX4At77N1TTsEIykKzxd2fKcr9wmbb0XNNVNNj%2F8VdfAHrVG%2B6vsvHbj6mSHFIbSxgtRdGQ8auMMYjoaq8zVOI51WJIiL44AtP8kqg%2Fcuf36k710E5nfJRWuHbc%2BO1cUS925FMY35YQZ8zunu2m%2FPGvdZMxUCgJVfPrcH2%2FGJH7ExPmsuTC08agSrDdqXX%2BCygtz20%2BDW4lstLN3yqThzPVMnoT6CQ11OWDCfpd%2FJBjqkAXyvHqTWqzGsbhrcXgPf%2BFKJNXeWu0xIRvF%2FIcfvpquIkxK8Ow5QnHk1Ff5gNl1yLWnthBVVa7sT80jrsKO%2BLhp6jFjRxVxapKoqCaRzJ3xqr40pJ08qJh%2Bpn72EJUpssFlIxg1wC3nlkLHeXy8sfayNjCNiv6U2QeZXCZkYGBzBFMl5d6EuS9VY8Uoxy2sYx%2FhjSYATYNpB%2B2P7G8jZFrgOqkWR&X-Amz-Signature=1138e4ff69736ba4a9fbc83bf5350e2f8288ec2b7b1ed427a17c0a6f490e7fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
