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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYH6HUBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKrztB%2FVfxYsdR9RZuxpwppfKzXa0MGrFnh9DecNkPrAiAqEsCR8GqoZtdWh2cYBsqPqyd50IjBcCyg8Zt9d9AzYSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1e5YrAAU5RRzfn%2FTKtwDKGbrUbQ39JtRaqHetzJj5ecPqGEbviMhtDa8cRLOx4eDjf0irfKIOpQensLDPxpLm0YJ66thJJ33magXJ41A1XJ1kTOvABPYLseX7xRKcRc8aZattHCU6hH%2FUoU%2FtzJCoaizSV8pFBDTy%2FJfHh3YiNZr%2B2TSs%2FxFbH9GJJt%2Ff7FYo80OFqZBPxQiB%2BgsIgapYXc%2FcB%2Bz2E1UWqoqLCzaiGP5NRhAu06CuAk0KI%2BpCZJxVvcKuZ5Uzi09udL2J5brdIXVluO0qOlmw8ePkBNk8b1qs6oh6BVp04EuYkyqDoEboYAsDw4hjnsJC6dNR26KS0b%2FH1H0L3zXzJoflQxlNvNWXYn2wq3iy8bExuuQMDPyW%2Fqul1tpmycl%2FIY%2Bc1Yvuo6aTTtQEkxNALsq3ClMvRNIflTIrz0B%2Fgc95c0ItLt3P9qZQFpOFElqSWO5luKHLMz9vkUqORLgJo0uxbQSLtLptHJPeSxjxx6zMJYHiYQ%2BfjwkqUVZXWmiUDtgISNcoTeGB%2BZrma4PoGT8k%2FBIBoZIv%2BHIPFNpxVRMuzKLQDMPDf8FzlO01CN1m4MLrT%2Fu5s1U6D0oR59BwdPhgoDKhGo2jvzfoBtZBIHNPaK%2FEyxmojO9lz358DWBnosws8zRyQY6pgERbvAuSCEPwKq2qxqfc%2FGyFM5uFTjygxiNRxukbsDJmNV4l9%2BlsklYfI%2F5LHs4hzBjO1T3L%2B0tUhAFhxed6QkhXQcajcLfxZ%2FNbh5bAgLNggjKzT7kuYbqTKNja%2FDfiTUu%2BZ2NNHnvy8hr0qOwk%2BjVPMkOZtxhkRUd7vqi9AC3ewu%2Fk7ZBsyRjDnJSIZNbS3okR7pTUhctnHhcELKSj1zM%2FqI2oULB&X-Amz-Signature=188252050f0b5d0eda8232370ce6eaca9b8d341691d5d7d4ea37d8cca3558aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYH6HUBV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICKrztB%2FVfxYsdR9RZuxpwppfKzXa0MGrFnh9DecNkPrAiAqEsCR8GqoZtdWh2cYBsqPqyd50IjBcCyg8Zt9d9AzYSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM1e5YrAAU5RRzfn%2FTKtwDKGbrUbQ39JtRaqHetzJj5ecPqGEbviMhtDa8cRLOx4eDjf0irfKIOpQensLDPxpLm0YJ66thJJ33magXJ41A1XJ1kTOvABPYLseX7xRKcRc8aZattHCU6hH%2FUoU%2FtzJCoaizSV8pFBDTy%2FJfHh3YiNZr%2B2TSs%2FxFbH9GJJt%2Ff7FYo80OFqZBPxQiB%2BgsIgapYXc%2FcB%2Bz2E1UWqoqLCzaiGP5NRhAu06CuAk0KI%2BpCZJxVvcKuZ5Uzi09udL2J5brdIXVluO0qOlmw8ePkBNk8b1qs6oh6BVp04EuYkyqDoEboYAsDw4hjnsJC6dNR26KS0b%2FH1H0L3zXzJoflQxlNvNWXYn2wq3iy8bExuuQMDPyW%2Fqul1tpmycl%2FIY%2Bc1Yvuo6aTTtQEkxNALsq3ClMvRNIflTIrz0B%2Fgc95c0ItLt3P9qZQFpOFElqSWO5luKHLMz9vkUqORLgJo0uxbQSLtLptHJPeSxjxx6zMJYHiYQ%2BfjwkqUVZXWmiUDtgISNcoTeGB%2BZrma4PoGT8k%2FBIBoZIv%2BHIPFNpxVRMuzKLQDMPDf8FzlO01CN1m4MLrT%2Fu5s1U6D0oR59BwdPhgoDKhGo2jvzfoBtZBIHNPaK%2FEyxmojO9lz358DWBnosws8zRyQY6pgERbvAuSCEPwKq2qxqfc%2FGyFM5uFTjygxiNRxukbsDJmNV4l9%2BlsklYfI%2F5LHs4hzBjO1T3L%2B0tUhAFhxed6QkhXQcajcLfxZ%2FNbh5bAgLNggjKzT7kuYbqTKNja%2FDfiTUu%2BZ2NNHnvy8hr0qOwk%2BjVPMkOZtxhkRUd7vqi9AC3ewu%2Fk7ZBsyRjDnJSIZNbS3okR7pTUhctnHhcELKSj1zM%2FqI2oULB&X-Amz-Signature=960ca2bf76f425cdd234bc0f0aa9f86908de54f28acc56794524615e73c194fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
