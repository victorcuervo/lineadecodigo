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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHU7VF4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIES6YjoJ2ixBK5XgzQ3TSf13qmoazXwvm0pY56zRAXgFAiBcSrdAx9F%2BxaFu9BdrZxRFW4t8CPF8ZkDfs7BWE6mVHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM9Ysp4b0Zg0M6quQjKtwDocOQYnaTBaORo4HNp72tVCXKLYQ2VjBfNQAQULxSvXK%2FHpZM%2F6ix1P6a9Kc48UJ71CtBB9aL5DRkdRYBn2fOJStfIv3qNON%2F2EBNvuTNpCGMdZyskZ%2BD%2BZNJSXsqOTzRLpShKqL%2BP5YJ%2BlUHiXgKyrIBAA3qp3QoNe%2F03ViSahT8EM9s%2FIpa1npblAcelXoY62g1DpU7xfE%2BpM18P8zlWj3mS8FtDzu2uj7J4UMkvbgCTullcnjppUO%2B35fEUcAa7yv3uCfwNaW0USPgjs7U6RL85cOWFj0cA1tT1NSTFkBu7cqIsu42LcWyWX56DF5pRdEtxoxRn1kR2%2BJbaxsyhG84P1r53V7oAAsWbNrvcKskbeqKtUmmFj20e%2BMaCX7eqTCmeSzS0WOl5M%2F8LcD%2Bxh9SebY3sggVHzfHelVqadqV2%2Fvp%2FG1h6Hu6XM4LedE%2FL3WE5G0Z8cE4gC4htTOMXvAda67jgqpgYkMVvDUXz7yTZZcixwzGLxvyGhZLwIeoiJYQUHom5mN7eYvBPagSooJGGZSjAxEHLIUSn%2Ff%2FpWWem8uUovPfV%2Byo9i4ilmvTNaieuB0JuEU0RkbO7xlfGjBvfgcMQEMNeHFomKyVUPb9Q8QjoCkgPQJgH9Iw8onQyQY6pgHtLIDJxGfLyc5WQgmIlpfFgeRY%2BjwjqVeOIqpwJ03aJ8hloNKtBMjrkwzfT%2BCUi9Fycc0pdsJNWF5llkxABd4G2%2Bwc77PrBIHq7YOYjb0PWl7SYXh9QfcJnQs2rXFOKCIXehdA%2BS1%2FA9638ByU7TAWntLTet%2Bm%2F1ooRpdY8mWD9WiLzuU%2F5QDvT3oRKPyGTy5tH8qAG8%2Ft%2FfOd%2FUFPAVmJ9g4twzdm&X-Amz-Signature=eb042c2630cb7d2d67a51fcbb38644476d1821652884f2116e3dbed127f12be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGHU7VF4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T103647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIES6YjoJ2ixBK5XgzQ3TSf13qmoazXwvm0pY56zRAXgFAiBcSrdAx9F%2BxaFu9BdrZxRFW4t8CPF8ZkDfs7BWE6mVHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM9Ysp4b0Zg0M6quQjKtwDocOQYnaTBaORo4HNp72tVCXKLYQ2VjBfNQAQULxSvXK%2FHpZM%2F6ix1P6a9Kc48UJ71CtBB9aL5DRkdRYBn2fOJStfIv3qNON%2F2EBNvuTNpCGMdZyskZ%2BD%2BZNJSXsqOTzRLpShKqL%2BP5YJ%2BlUHiXgKyrIBAA3qp3QoNe%2F03ViSahT8EM9s%2FIpa1npblAcelXoY62g1DpU7xfE%2BpM18P8zlWj3mS8FtDzu2uj7J4UMkvbgCTullcnjppUO%2B35fEUcAa7yv3uCfwNaW0USPgjs7U6RL85cOWFj0cA1tT1NSTFkBu7cqIsu42LcWyWX56DF5pRdEtxoxRn1kR2%2BJbaxsyhG84P1r53V7oAAsWbNrvcKskbeqKtUmmFj20e%2BMaCX7eqTCmeSzS0WOl5M%2F8LcD%2Bxh9SebY3sggVHzfHelVqadqV2%2Fvp%2FG1h6Hu6XM4LedE%2FL3WE5G0Z8cE4gC4htTOMXvAda67jgqpgYkMVvDUXz7yTZZcixwzGLxvyGhZLwIeoiJYQUHom5mN7eYvBPagSooJGGZSjAxEHLIUSn%2Ff%2FpWWem8uUovPfV%2Byo9i4ilmvTNaieuB0JuEU0RkbO7xlfGjBvfgcMQEMNeHFomKyVUPb9Q8QjoCkgPQJgH9Iw8onQyQY6pgHtLIDJxGfLyc5WQgmIlpfFgeRY%2BjwjqVeOIqpwJ03aJ8hloNKtBMjrkwzfT%2BCUi9Fycc0pdsJNWF5llkxABd4G2%2Bwc77PrBIHq7YOYjb0PWl7SYXh9QfcJnQs2rXFOKCIXehdA%2BS1%2FA9638ByU7TAWntLTet%2Bm%2F1ooRpdY8mWD9WiLzuU%2F5QDvT3oRKPyGTy5tH8qAG8%2Ft%2FfOd%2FUFPAVmJ9g4twzdm&X-Amz-Signature=6ef693735ae3c56f7c2521147d5da8a72db83a0ce69b9ca54527f5a319c3f590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
