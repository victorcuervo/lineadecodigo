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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE7OO4QY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD249%2FzxSfxzjlIrOp9helBVj0FZF3BTtPvjUvJY2gjQQIgL7k9pAbqxOgeEm95C%2FGHxldYXNQ3Q3mkiuGZ0sqQDfsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEFmezdvFKCIxiJ%2FLyrcAzgo4El8My1nk5OSpQ0a3nnRODQlA9uomQbC%2FWPF1ePBJ09WvKUAgxT6izlByw0qZ%2F361NeqelRSsnvm1E5FpGsXxdpQi62I%2FIyOyMmAWDN%2BNrMOcox4ZP8D3qst4YrqFVGT1SzNl7dBDm%2FUEe%2BA2v4RdfsQGZEPsxHAhMW3cF1CN%2BrcL4hT3Xc32rldJF8t240zlj3FHtlrawbPG%2FkCqJFWSngtrEEV5ckeFMCtNemVZM%2FqEvxXj9aQUP2DGr65qllmvjzoqPEAof%2F3LJB%2BUy9nnaWftpI0qWf2tj6YyO%2BBPGrp2a%2BeVZEi2LG16EngH8v2HjH6D19zQNxZSqJpHNGk1YgbbusYyBbmvWXPpNiKa5%2FL4VaUBycKQtFedIDDcn3spZ8k8mIRiyZJFV3ztozBjPdRh%2B076hswapNkmP8v0%2ByPitzoHMDjQ5ZKmxlWiM2UW95l2qf6Jqu%2B1Fq2d6JG8lv3jY%2FC6RHRrT%2FhzVTPKwund%2B2PZa6ratzqh%2FGtgtWrYhEQOQJOYPpI%2F8RNOnf%2F8kjHqLmRj1v0vDnvaTAAaxLqBEQrCgn%2B%2FbALumHvcvGOb7FyHROa2zQm84BY14MlZSZK1y1vLuqXV57%2Bj5oCtydGKcjDFp3FHDx6MIXfh8oGOqUBmVrgI33NzFUiD7QDQWqDFSROVUFOFDGUn%2FhCU2m7iBB1Fz1vySSM0lB4fWNFLFB8%2BPHlYReFRCqKcauE1huhS%2Bp%2FAAvAlagHVbj8RybEcxhc%2FNGcCIXU%2FJnF%2B6g30F2cyHBtJ4ZPHOfNWQHyH%2BxNF4ghlgs%2BNbRl75tnHE59RqglC0sUKoO4qZ0PW4LlqYMCrEXo83kgBYI4s%2BsOyyeSVbdhKk%2Fh&X-Amz-Signature=f9ab0360df8867accee1de3c800dd844e981ac3b2a386e7aadcf648f47ba6e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE7OO4QY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD249%2FzxSfxzjlIrOp9helBVj0FZF3BTtPvjUvJY2gjQQIgL7k9pAbqxOgeEm95C%2FGHxldYXNQ3Q3mkiuGZ0sqQDfsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDEFmezdvFKCIxiJ%2FLyrcAzgo4El8My1nk5OSpQ0a3nnRODQlA9uomQbC%2FWPF1ePBJ09WvKUAgxT6izlByw0qZ%2F361NeqelRSsnvm1E5FpGsXxdpQi62I%2FIyOyMmAWDN%2BNrMOcox4ZP8D3qst4YrqFVGT1SzNl7dBDm%2FUEe%2BA2v4RdfsQGZEPsxHAhMW3cF1CN%2BrcL4hT3Xc32rldJF8t240zlj3FHtlrawbPG%2FkCqJFWSngtrEEV5ckeFMCtNemVZM%2FqEvxXj9aQUP2DGr65qllmvjzoqPEAof%2F3LJB%2BUy9nnaWftpI0qWf2tj6YyO%2BBPGrp2a%2BeVZEi2LG16EngH8v2HjH6D19zQNxZSqJpHNGk1YgbbusYyBbmvWXPpNiKa5%2FL4VaUBycKQtFedIDDcn3spZ8k8mIRiyZJFV3ztozBjPdRh%2B076hswapNkmP8v0%2ByPitzoHMDjQ5ZKmxlWiM2UW95l2qf6Jqu%2B1Fq2d6JG8lv3jY%2FC6RHRrT%2FhzVTPKwund%2B2PZa6ratzqh%2FGtgtWrYhEQOQJOYPpI%2F8RNOnf%2F8kjHqLmRj1v0vDnvaTAAaxLqBEQrCgn%2B%2FbALumHvcvGOb7FyHROa2zQm84BY14MlZSZK1y1vLuqXV57%2Bj5oCtydGKcjDFp3FHDx6MIXfh8oGOqUBmVrgI33NzFUiD7QDQWqDFSROVUFOFDGUn%2FhCU2m7iBB1Fz1vySSM0lB4fWNFLFB8%2BPHlYReFRCqKcauE1huhS%2Bp%2FAAvAlagHVbj8RybEcxhc%2FNGcCIXU%2FJnF%2B6g30F2cyHBtJ4ZPHOfNWQHyH%2BxNF4ghlgs%2BNbRl75tnHE59RqglC0sUKoO4qZ0PW4LlqYMCrEXo83kgBYI4s%2BsOyyeSVbdhKk%2Fh&X-Amz-Signature=635043fb74db99c2fc2179fb71e6e41c5643bbc3ee8845ad640bdb7f1c464b6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
