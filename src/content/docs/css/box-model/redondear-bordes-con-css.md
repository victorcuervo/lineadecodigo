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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663733WQZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2t5IpRMQ2ly8PW1BnyD4xpMLZeZ%2B5vNDg%2Bmx9d0yfnwIhANngc0vyPla4z2T1tpctQsya%2Ft%2BnebjM6y4IVY0bj1VLKv8DCH0QABoMNjM3NDIzMTgzODA1IgxgtTgQzHsAHS0EXQcq3APuXSCH7sk%2BL%2Fb26bfoS247qQj0DwZREmCv93ory7LF02Txqsg3wfc1JJEWHdOUyn%2BvCMldtm3zQmn73%2FStNfRX0VrDnhxCUrpUd3lBRK8i0BudCI1E9APN641C%2BYrK9wL10iReN4WZcPtfV1aIrvQles485IAPqpWbEuK8Yvwt9taAzoalJzMOVOq7CSLCe2B2d1dm1mtTO7TAKIRbwlTNNqWHd%2BdwVPxbge4WdKhM3i20RydC%2BlirvhVkUxvrnMu7kk%2Fo9nYLqlEtXLlWbMog1g%2FEQjWFWvNenRLqZpjxwMmfaad3MRD3dXWNDfooAws8ZvunOJ7FiuNFNq%2FkUe25v1Smgnvqsp%2B0dAaYIlo6MSUknFqlhQ%2BRYUpew%2B5AC8WUQEnC80N8Fpls6pi4MlDXQ6ULkuUZPqGL1mG1HCm390vPXcjQVEfq%2B1B0aNLnKvOWmQ7ZkBkasrQ0JWXHvuNF2609pSSGnNB6A%2BORFD7piaLSWgYjV%2FY4GIOjaBTA4b2%2BNNFwn2R%2F7%2FQ6Hd2TuhiSo68XdFtXjiVrmxOTEhlM8BD%2BbWBwI2IBlblHaze5%2BVJjvLBJFK9bmZ7Ft%2FVPk8D%2FgZ%2BxsIEfKFDeCywgS5xLBJLhqYLgZpfFyyeq0DDvqorKBjqkAWldZkGStaO8YDA1FZPX333RvLjEwFkTR%2BE9dDPyHRaFYbQixiIvo6LleSE%2Fv%2BfqDCWoKhGJMsjigtQHf7p3jXWnQDIB5YXnFPUrYBBZo4dzdYPWW6pDT77L8Kjbad%2FuAVJAzUF8YCLoFoF%2BnnD0TtzaqvgY2%2FggDS0vK4S2N6jRB4UQz4FaP72Wzye4AwC6uBkg2KFDXOmXtYt%2FQ4POUYx2%2Bw%2Bp&X-Amz-Signature=90eb2d484a03ca068c855d0c8d8bba4705e9ad52ba40a256160a65fe9f152261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663733WQZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2t5IpRMQ2ly8PW1BnyD4xpMLZeZ%2B5vNDg%2Bmx9d0yfnwIhANngc0vyPla4z2T1tpctQsya%2Ft%2BnebjM6y4IVY0bj1VLKv8DCH0QABoMNjM3NDIzMTgzODA1IgxgtTgQzHsAHS0EXQcq3APuXSCH7sk%2BL%2Fb26bfoS247qQj0DwZREmCv93ory7LF02Txqsg3wfc1JJEWHdOUyn%2BvCMldtm3zQmn73%2FStNfRX0VrDnhxCUrpUd3lBRK8i0BudCI1E9APN641C%2BYrK9wL10iReN4WZcPtfV1aIrvQles485IAPqpWbEuK8Yvwt9taAzoalJzMOVOq7CSLCe2B2d1dm1mtTO7TAKIRbwlTNNqWHd%2BdwVPxbge4WdKhM3i20RydC%2BlirvhVkUxvrnMu7kk%2Fo9nYLqlEtXLlWbMog1g%2FEQjWFWvNenRLqZpjxwMmfaad3MRD3dXWNDfooAws8ZvunOJ7FiuNFNq%2FkUe25v1Smgnvqsp%2B0dAaYIlo6MSUknFqlhQ%2BRYUpew%2B5AC8WUQEnC80N8Fpls6pi4MlDXQ6ULkuUZPqGL1mG1HCm390vPXcjQVEfq%2B1B0aNLnKvOWmQ7ZkBkasrQ0JWXHvuNF2609pSSGnNB6A%2BORFD7piaLSWgYjV%2FY4GIOjaBTA4b2%2BNNFwn2R%2F7%2FQ6Hd2TuhiSo68XdFtXjiVrmxOTEhlM8BD%2BbWBwI2IBlblHaze5%2BVJjvLBJFK9bmZ7Ft%2FVPk8D%2FgZ%2BxsIEfKFDeCywgS5xLBJLhqYLgZpfFyyeq0DDvqorKBjqkAWldZkGStaO8YDA1FZPX333RvLjEwFkTR%2BE9dDPyHRaFYbQixiIvo6LleSE%2Fv%2BfqDCWoKhGJMsjigtQHf7p3jXWnQDIB5YXnFPUrYBBZo4dzdYPWW6pDT77L8Kjbad%2FuAVJAzUF8YCLoFoF%2BnnD0TtzaqvgY2%2FggDS0vK4S2N6jRB4UQz4FaP72Wzye4AwC6uBkg2KFDXOmXtYt%2FQ4POUYx2%2Bw%2Bp&X-Amz-Signature=e98f388bd6970d1c705aa09474d054bec60fd92e10b4eafd78a4d6987bca2ac0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
