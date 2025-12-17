---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZEF2TU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE86sAIsqj81rR49sC5eOFSw7uAx7wdK6lF2NSIqQBLAiAk7TUxt8cwKnIRoHqAoXLwB7Da6a7zR5mRtPOyAFPlcir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMO9M1qpqeAqFrMDU5KtwDFmhWgGYAqRaVLHY14INUH275CudIxHUsxP8avFdk6QgAlDy4shXqPg3%2BM2mMmF84WaxtBBjcw2lhbRIktG1ia5qpPdxICDXyJnmp0Z3iR7FMnWPvi0iUK5qWs1sGElcdxcV7rF2mW3JpOqLl39Wj%2BClFxHmk3EC0MZEQw5ADN7CEtXBbSLINvFepcMbacnm8zz93LEwzIjOVfsQrTQKuouBwJlQ0mv53CEl8LR1WRpd2dRLhz5IoQ5n2e%2F1JMyYiND99zLMoLXgzg5oGt2SNmGnMl2ncxNXXvrowgTI3XhhhwhDlmOF7Fz0%2Ftgw2DMnJ2lCufIInF25XACYtQ9lSz%2Bimd0rYU%2B3AxhKjF0eY1yioCOsM3eD3NAPZ766o1%2F3Wq4kQjwE4Sq9pcKZ1XnvgTIjLzLK5WGSB%2FPrvnShdXHnrgGWm1BzWEXUMhnnvBySL76lzsFzxztLuGLqfcWhrpmZ0Tr7v%2B25jNthQZUjGaiddOr%2BeFeFfi8%2Fd%2Bmb2kVwzdkkAsM0vGFcOK0xA47QW0mKJOX7IEZp8jXxGQkiesJ4C%2BiW3DzOx46MF%2BKtKUqMRrJE5MzeqDtJuq%2FjH0FpG4PElkzc7cLrij1fzDxYI1wCQTnvk6KUv4a8%2FQNcwxaqKygY6pgFGj896UFIRMQqVjqvYIPpFFDynKS%2F%2FYPS33Zs3tsMQsLgCfzSUIkQp1KZiVQ4xQeuWHfkZ%2F9MWMXgg%2F1khtiJeX1sQJpYWnoPJtZYhtSGV%2Bfqy1Jwbn%2BdzXIF7Jdy48e1F3C9Y8BGYNrQUjYuDYUpLvPZsLC1zBJ9D0Wxh24qKQaKy9B2YT%2B5LFUL6HAhBocg5l2bvzCNE8hjiHUSfxebcbua2IK4D&X-Amz-Signature=9c0718e6272f6028aec6933a85371fc6dd29cb1ca16f1a4e574a8bbda110e28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNZEF2TU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICE86sAIsqj81rR49sC5eOFSw7uAx7wdK6lF2NSIqQBLAiAk7TUxt8cwKnIRoHqAoXLwB7Da6a7zR5mRtPOyAFPlcir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMO9M1qpqeAqFrMDU5KtwDFmhWgGYAqRaVLHY14INUH275CudIxHUsxP8avFdk6QgAlDy4shXqPg3%2BM2mMmF84WaxtBBjcw2lhbRIktG1ia5qpPdxICDXyJnmp0Z3iR7FMnWPvi0iUK5qWs1sGElcdxcV7rF2mW3JpOqLl39Wj%2BClFxHmk3EC0MZEQw5ADN7CEtXBbSLINvFepcMbacnm8zz93LEwzIjOVfsQrTQKuouBwJlQ0mv53CEl8LR1WRpd2dRLhz5IoQ5n2e%2F1JMyYiND99zLMoLXgzg5oGt2SNmGnMl2ncxNXXvrowgTI3XhhhwhDlmOF7Fz0%2Ftgw2DMnJ2lCufIInF25XACYtQ9lSz%2Bimd0rYU%2B3AxhKjF0eY1yioCOsM3eD3NAPZ766o1%2F3Wq4kQjwE4Sq9pcKZ1XnvgTIjLzLK5WGSB%2FPrvnShdXHnrgGWm1BzWEXUMhnnvBySL76lzsFzxztLuGLqfcWhrpmZ0Tr7v%2B25jNthQZUjGaiddOr%2BeFeFfi8%2Fd%2Bmb2kVwzdkkAsM0vGFcOK0xA47QW0mKJOX7IEZp8jXxGQkiesJ4C%2BiW3DzOx46MF%2BKtKUqMRrJE5MzeqDtJuq%2FjH0FpG4PElkzc7cLrij1fzDxYI1wCQTnvk6KUv4a8%2FQNcwxaqKygY6pgFGj896UFIRMQqVjqvYIPpFFDynKS%2F%2FYPS33Zs3tsMQsLgCfzSUIkQp1KZiVQ4xQeuWHfkZ%2F9MWMXgg%2F1khtiJeX1sQJpYWnoPJtZYhtSGV%2Bfqy1Jwbn%2BdzXIF7Jdy48e1F3C9Y8BGYNrQUjYuDYUpLvPZsLC1zBJ9D0Wxh24qKQaKy9B2YT%2B5LFUL6HAhBocg5l2bvzCNE8hjiHUSfxebcbua2IK4D&X-Amz-Signature=d08969c9a0b5005cce3ab5c39a4bd87f3ba367de7479e24586ffebbfad723fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
