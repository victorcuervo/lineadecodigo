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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSABVAI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdvY1S7E4nHJyOc1szFmpyNu%2Bnxd6sWIjw45M3J8M2gIhAN6gOW60tWcF%2FhZkJu5KWNX5JflOJkDsrsW6JWfaW9ZhKv8DCFUQABoMNjM3NDIzMTgzODA1Igxu99AWXHilgkyrZUgq3AMTatRota8hFX7SlrE2FZbCTPhtIQ99UrvitpAVzKFLAk81wo0Y8U%2Bt1v%2BinmpjjKthUBAUypDiAFYE5mMbyIx1qjPMrXeulHYMrQ2LqkP%2B4POu6KrOUPiqTqXPYN%2B0szL2%2FbbvDhIY%2FiAMZXaEZyrJe1E1WRoJzuBmV5%2FsTbMC%2FaPFXwrM4Jt65e%2FSZEY35e%2FvPuQAvyAZeBpYSlM19%2Fnz2bQ6Tjl3bGmT%2FmgIAMcv6dszanG7Yv1iuFaaHCwOMXJvyjjGnhzPnTtkSA7Xv0XLJXb1e%2Fc35P%2BMiWSUDLvgAfurwOyQLbyAy%2FYJBaYhblH9COT14a3fRY6UVdklE%2BAhs0Is5W7OGjRioFlAuyoI256%2BuErtoM6mWkK%2FTiRIzn8TnWf%2Brrmm5GBqF93EIJxO34IfKbqpWN8FtJRjmGskRV4u6j5g38aWI2FOxrAdSWkxzwc8XC0Y0TlIVmgUKyoeAOXQdD9vbwDH4Gp%2BO%2F%2BP1pZpVro%2FPwI1YNFhDAyi%2BrqEQbg3gHiJ8HXgYYW2MPCiZN441Z4Il8LcuFArqvGz5FNscXKcVogH8dyLkT%2Bz45PQ1kvkW9LNjrzTQTK9sVJ6QY5BEATnY0tnchorhRVTKUOE4jRIrS%2Fyqf7hRDDipsnJBjqkAVCTSte7oUPm5e5SxlRJgNfWjYx50nrbXL%2FVvZ3KhyOnMvEWxryUW6iw95Da6rGD3NdwtAUdkk5qKjNjXI8xhuj7BztD%2FjA30XLvq0YsauqIJbyoNym2W%2BjVtzs9i9kyN%2BP7yuWpyPgb3%2B3svDp4iGMjsA3O%2Bm1ELUK4DPSrvJJMTNEWaEvGBGqNmZ1IS%2Blb1Te3QRnnFS6DwIWsTrowb80Ro3k5&X-Amz-Signature=ae2ceb9eb635c878e424594f71db45e0b1cfbeb10ab135c1fe661024dc041105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSABVAI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUdvY1S7E4nHJyOc1szFmpyNu%2Bnxd6sWIjw45M3J8M2gIhAN6gOW60tWcF%2FhZkJu5KWNX5JflOJkDsrsW6JWfaW9ZhKv8DCFUQABoMNjM3NDIzMTgzODA1Igxu99AWXHilgkyrZUgq3AMTatRota8hFX7SlrE2FZbCTPhtIQ99UrvitpAVzKFLAk81wo0Y8U%2Bt1v%2BinmpjjKthUBAUypDiAFYE5mMbyIx1qjPMrXeulHYMrQ2LqkP%2B4POu6KrOUPiqTqXPYN%2B0szL2%2FbbvDhIY%2FiAMZXaEZyrJe1E1WRoJzuBmV5%2FsTbMC%2FaPFXwrM4Jt65e%2FSZEY35e%2FvPuQAvyAZeBpYSlM19%2Fnz2bQ6Tjl3bGmT%2FmgIAMcv6dszanG7Yv1iuFaaHCwOMXJvyjjGnhzPnTtkSA7Xv0XLJXb1e%2Fc35P%2BMiWSUDLvgAfurwOyQLbyAy%2FYJBaYhblH9COT14a3fRY6UVdklE%2BAhs0Is5W7OGjRioFlAuyoI256%2BuErtoM6mWkK%2FTiRIzn8TnWf%2Brrmm5GBqF93EIJxO34IfKbqpWN8FtJRjmGskRV4u6j5g38aWI2FOxrAdSWkxzwc8XC0Y0TlIVmgUKyoeAOXQdD9vbwDH4Gp%2BO%2F%2BP1pZpVro%2FPwI1YNFhDAyi%2BrqEQbg3gHiJ8HXgYYW2MPCiZN441Z4Il8LcuFArqvGz5FNscXKcVogH8dyLkT%2Bz45PQ1kvkW9LNjrzTQTK9sVJ6QY5BEATnY0tnchorhRVTKUOE4jRIrS%2Fyqf7hRDDipsnJBjqkAVCTSte7oUPm5e5SxlRJgNfWjYx50nrbXL%2FVvZ3KhyOnMvEWxryUW6iw95Da6rGD3NdwtAUdkk5qKjNjXI8xhuj7BztD%2FjA30XLvq0YsauqIJbyoNym2W%2BjVtzs9i9kyN%2BP7yuWpyPgb3%2B3svDp4iGMjsA3O%2Bm1ELUK4DPSrvJJMTNEWaEvGBGqNmZ1IS%2Blb1Te3QRnnFS6DwIWsTrowb80Ro3k5&X-Amz-Signature=cea8443d5d1de499fac244fc410387d95bac360864b90068f64cbca2a9f1757c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
