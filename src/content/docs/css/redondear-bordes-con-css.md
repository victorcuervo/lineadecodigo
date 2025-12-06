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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXU6EBZG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQWJyzaLHQpCYlP1OrLpTy7hlaPI3Obc1pou0NpUQjdAiEAicTgj%2F%2F3xAgtnfQhmsqNsZhJaAYz5UxV%2BfWoCYKPQ5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDH7EUeP93NF5ig3aiyrcA4o0Q3EsnR%2F4p5GksVgndyBzsQRmYqoK0bVgpf1%2BzlNiuDRmG1OuH%2BrM1gyx0blhE%2F2tPI8tYB0gR1JdosiV6OOuqPkSvFuz1sTDW4MW20BKHihRUAvRpTrLW6BXmDqYjfm%2Bw94voOf6TJ38mES4AP64O03RsH2DKi6DoL7H%2FlkwV9oX4MODGqVp%2FuxSI6Vabj6ZOG2YumR2Qz%2B8IM0INheW11EWspc%2FZ25nXOSn0qPBAauChR8dkTLJx%2BueVfvwVNVvuHt%2Fi97qfUrigO%2FYKUH3g7%2BKO5QD2qnM%2FyyCXrTSUfnh7X8UmGSW7QbIF7zOP9lFVcZ6w6Oelcqelq5%2FYNUTU2m2F7mKwQ30gqTRj15srQrU522YRng%2FJrJRm6Sk1Zk8OlgDawCM1r3Lk%2BCwZvE4I7b1%2BAyZnGqm5XduxmjSUpzS8zkvjX4pVMgb81L%2BZxgia73WoAWFRX%2FdYZgkynU9Umo4ctd%2Fjswfn1fx5aK66PecPe8qTCYC1lgQqWH%2Bqkux9Fm%2BJJWaMM9mZgfvfcIH1SpZV09qKk1kSzApt3%2FRNuL3lpUGSWC2zbjVR5IdanNEEJFkJwq0hHogHsG9Ch3qGp4gqd5fq9YgdKeDe9q2qVUzYK2%2B2LrkIbN7MIjezskGOqUBkP68QnJ8iJg1F9TWfxx0OueOlbuW0irxVnvrrMCiybos42Tj4wAqgdR%2F8NCH6rF%2B3nkFh8GNe5GaLFz9kfYwMzEb1v3l7J3IjmmFVdJij%2BxVMo%2B9J7JKq5TIcR0aa9D5Or53FsdU3H%2FeyxObySFqufuAFEDI0YmgfLMy5cjcbpxRnjUMf2R49VVEJVzfsuomXcJjn5u340yjv6HQXoYfWg8EhMOn&X-Amz-Signature=54f59549404c5c47c56032b5c464e76bab42f676f4072ef586cf84324d58bf56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXU6EBZG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T042516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQWJyzaLHQpCYlP1OrLpTy7hlaPI3Obc1pou0NpUQjdAiEAicTgj%2F%2F3xAgtnfQhmsqNsZhJaAYz5UxV%2BfWoCYKPQ5wq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDH7EUeP93NF5ig3aiyrcA4o0Q3EsnR%2F4p5GksVgndyBzsQRmYqoK0bVgpf1%2BzlNiuDRmG1OuH%2BrM1gyx0blhE%2F2tPI8tYB0gR1JdosiV6OOuqPkSvFuz1sTDW4MW20BKHihRUAvRpTrLW6BXmDqYjfm%2Bw94voOf6TJ38mES4AP64O03RsH2DKi6DoL7H%2FlkwV9oX4MODGqVp%2FuxSI6Vabj6ZOG2YumR2Qz%2B8IM0INheW11EWspc%2FZ25nXOSn0qPBAauChR8dkTLJx%2BueVfvwVNVvuHt%2Fi97qfUrigO%2FYKUH3g7%2BKO5QD2qnM%2FyyCXrTSUfnh7X8UmGSW7QbIF7zOP9lFVcZ6w6Oelcqelq5%2FYNUTU2m2F7mKwQ30gqTRj15srQrU522YRng%2FJrJRm6Sk1Zk8OlgDawCM1r3Lk%2BCwZvE4I7b1%2BAyZnGqm5XduxmjSUpzS8zkvjX4pVMgb81L%2BZxgia73WoAWFRX%2FdYZgkynU9Umo4ctd%2Fjswfn1fx5aK66PecPe8qTCYC1lgQqWH%2Bqkux9Fm%2BJJWaMM9mZgfvfcIH1SpZV09qKk1kSzApt3%2FRNuL3lpUGSWC2zbjVR5IdanNEEJFkJwq0hHogHsG9Ch3qGp4gqd5fq9YgdKeDe9q2qVUzYK2%2B2LrkIbN7MIjezskGOqUBkP68QnJ8iJg1F9TWfxx0OueOlbuW0irxVnvrrMCiybos42Tj4wAqgdR%2F8NCH6rF%2B3nkFh8GNe5GaLFz9kfYwMzEb1v3l7J3IjmmFVdJij%2BxVMo%2B9J7JKq5TIcR0aa9D5Or53FsdU3H%2FeyxObySFqufuAFEDI0YmgfLMy5cjcbpxRnjUMf2R49VVEJVzfsuomXcJjn5u340yjv6HQXoYfWg8EhMOn&X-Amz-Signature=533e8e26ff8eaf115e7f5a78dddb2a132cbb07b543ec576a652594e56c0de9bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
