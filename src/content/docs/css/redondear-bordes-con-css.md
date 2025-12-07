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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TFPC4UT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgMJfrhJ96tCp%2BlmZlUC%2FTUSWT8mge7ztlgt8lCCAZfQIgd96fyp8oI1uxErvw1rNF0%2FqCG6OGhx6CTZKI%2FBqf52cqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5VEngoGWMv%2BbMpUyrcAxMa87DO%2Fy56ltCbM9jltfKuo9SxgAflIidG5ttb5rscyA2qy11Z6ti0b1N%2FfBEiYNf28NLARqBfQORl%2FbkmYfcuwuQOWZf7CKLgv2utdWED3mvppvfEEWphnyag%2BVDkXrUw7WYpZmJ6ZffvR30L%2BPmUl045lD%2BoHFD3BhC%2BWFfNkbXD8xiW9RxRvZMXiY9TrEaszfRnu%2BJC4YSllBjUQwo5SMGFkIcZtJXQYr%2FA7VHuCl0uqOkMNfKz6Lo6wcJugb1o%2BvamOIJHSPqAMvicJ3u9dA6y9U2KS7N%2Fx030guY01MforDbe39GeGgTtUMKDXrs%2FlPUJkGSLqtA9%2FOGm2kSi%2BIHfJLeX7gso0nL9isT034YzZRAY8RN%2BXiLyhvjdX51dzlQQpumKNYmMu0xaGqBrWbGkk5U%2BUmrUANprvw0ENwf5bJ4H3lrQxwUvb5PUBiLwICccnDnj%2BgW5Q4h2A9MzTefqwowfaPmYlMYk7ILo%2Ftf7%2BHUSdwWol%2Bjkq3hcuHU%2FiL1nozYqFhsVq1%2F6pfAXM0uBpkF2L6ArNkc7kNEFr5tBNn6MdeRWI0ayN0%2FRW2dQb5JYKj3GplKiryy7HEiGO5%2B%2F6wo5zUEayhRcdIK8Ix7bvyGs2G7vCSBlMM271skGOqUBdqsm2cilmpMHcHY1EWrFjT1qNMdBro1YfVJyjtfuJqzTjiaBRYT2c1MDfT7tMguwZajEEQI1RGrvS%2BOep1wOMBSs1k89mqb%2BHZsGjkZTgeBxvIA3hEfRCrxAdr%2BEP38UGnrKKmWq8uqtwx01af3h9Vn2xvUkai4Kjm%2BJcZzGWhGra%2BhbGx9M06tpdB9b%2FELFKI%2FCQtzrH2cxWtWKaPxyR%2BTGLRIx&X-Amz-Signature=46400e010a5b7a1d9c0f482f70f432f558f557ddcb8bdb55dd37172b4fbe5a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TFPC4UT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgMJfrhJ96tCp%2BlmZlUC%2FTUSWT8mge7ztlgt8lCCAZfQIgd96fyp8oI1uxErvw1rNF0%2FqCG6OGhx6CTZKI%2FBqf52cqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5VEngoGWMv%2BbMpUyrcAxMa87DO%2Fy56ltCbM9jltfKuo9SxgAflIidG5ttb5rscyA2qy11Z6ti0b1N%2FfBEiYNf28NLARqBfQORl%2FbkmYfcuwuQOWZf7CKLgv2utdWED3mvppvfEEWphnyag%2BVDkXrUw7WYpZmJ6ZffvR30L%2BPmUl045lD%2BoHFD3BhC%2BWFfNkbXD8xiW9RxRvZMXiY9TrEaszfRnu%2BJC4YSllBjUQwo5SMGFkIcZtJXQYr%2FA7VHuCl0uqOkMNfKz6Lo6wcJugb1o%2BvamOIJHSPqAMvicJ3u9dA6y9U2KS7N%2Fx030guY01MforDbe39GeGgTtUMKDXrs%2FlPUJkGSLqtA9%2FOGm2kSi%2BIHfJLeX7gso0nL9isT034YzZRAY8RN%2BXiLyhvjdX51dzlQQpumKNYmMu0xaGqBrWbGkk5U%2BUmrUANprvw0ENwf5bJ4H3lrQxwUvb5PUBiLwICccnDnj%2BgW5Q4h2A9MzTefqwowfaPmYlMYk7ILo%2Ftf7%2BHUSdwWol%2Bjkq3hcuHU%2FiL1nozYqFhsVq1%2F6pfAXM0uBpkF2L6ArNkc7kNEFr5tBNn6MdeRWI0ayN0%2FRW2dQb5JYKj3GplKiryy7HEiGO5%2B%2F6wo5zUEayhRcdIK8Ix7bvyGs2G7vCSBlMM271skGOqUBdqsm2cilmpMHcHY1EWrFjT1qNMdBro1YfVJyjtfuJqzTjiaBRYT2c1MDfT7tMguwZajEEQI1RGrvS%2BOep1wOMBSs1k89mqb%2BHZsGjkZTgeBxvIA3hEfRCrxAdr%2BEP38UGnrKKmWq8uqtwx01af3h9Vn2xvUkai4Kjm%2BJcZzGWhGra%2BhbGx9M06tpdB9b%2FELFKI%2FCQtzrH2cxWtWKaPxyR%2BTGLRIx&X-Amz-Signature=759b23389a9e69b5a119487269763c76b557f130e8e70ada6620100fef5efdc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
