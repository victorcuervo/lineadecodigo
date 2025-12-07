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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKXC2ED%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERDPT4K8FhwfOYPkMLmUI5ZNDMLIkk4liSf8MekHQO4AiA00vo%2Bov6jd5LwGmV5HXTr2SR6rHWF1rHEn697woA%2F2CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMftgHM74%2FQFqeqUMsKtwDpl%2FhzXMlYZs5QXEDJepYXAORayXuYzIeerR51cMLvjH1kzjECXpqyifaJlB5MYz%2Fnh9jkicVAMSsZndZGNrRNr9Lw%2BzL3apGwB%2FyNi0ew5yacXuev6hwyzID6%2BhtDSMdTE2LBYuOQBU6Nl1xJNNIm2xQ8Rs2%2FnF2ydwin%2B0KEJyTI8%2Fu32erKZ5qa3lXIBEM%2F%2FOwCNKSOHGwPVL939d8DKdK%2B19hqCvOD1YDYmnCDLzgQvSFqnuaQyfA0WLjtO7goBZrVfW92l3%2FTwp1i2LPFzdp75%2FlLTMcY1DwMmoc9KLe7jpobJmFgt1tI1crLQV%2Bw3RYrVGNN5M70BI8SUCHZpSqHCVwJzTwe9frXaZtv1kZ7Boi6kfkZUfsxysYrIYhIsqDj%2BBhqgffV9qMkTd5zYcyppSLmOT3Jcp09Zm0981sJEvYsXwx9KzDerjxf33U1wgG2GPe9P49%2B8rmIxtro%2BrapuSwcN136%2FshYGMhxffBt97lqWf6N%2FaRx6BlaoG9RDcN8lhxVmbKAhgOwycFN0xS7QKilOpFzrmkLth2l5jWWwU4v39Ragd%2BwNeo3tO1v5nw4Fx3mLb%2FvB%2F%2BW7NBGJDRsfkoQzTQwjLft61Mzjbg4gaYhgDj%2FoBEl7Uwk6jXyQY6pgFxQ1RPSZ4Vb%2BvtcV79fLFaKkOgMoYRq4SezLtFE%2FvRb86eN2q%2B3D%2FJd9VDheWp1MKyJy%2Fuwn41ql8g7hs2FCESJ2sqdlYooOOn%2ByHxT%2FOVIaMIR9aI0%2B%2BboIqcAENPIYMyyk1RmFnRiud5rV0VUTWfyfYGio96wE3yJhRc77R0l%2BhwSq6uZhz0CDI6zN7U6k9dITB4d4KE7IhUdqOzBwqhdkxAohTu&X-Amz-Signature=a62a77d6a5f0c2a8e8d445655fc002ee00bddd5d40d6ed4501b2f53b32070b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIKXC2ED%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIERDPT4K8FhwfOYPkMLmUI5ZNDMLIkk4liSf8MekHQO4AiA00vo%2Bov6jd5LwGmV5HXTr2SR6rHWF1rHEn697woA%2F2CqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMftgHM74%2FQFqeqUMsKtwDpl%2FhzXMlYZs5QXEDJepYXAORayXuYzIeerR51cMLvjH1kzjECXpqyifaJlB5MYz%2Fnh9jkicVAMSsZndZGNrRNr9Lw%2BzL3apGwB%2FyNi0ew5yacXuev6hwyzID6%2BhtDSMdTE2LBYuOQBU6Nl1xJNNIm2xQ8Rs2%2FnF2ydwin%2B0KEJyTI8%2Fu32erKZ5qa3lXIBEM%2F%2FOwCNKSOHGwPVL939d8DKdK%2B19hqCvOD1YDYmnCDLzgQvSFqnuaQyfA0WLjtO7goBZrVfW92l3%2FTwp1i2LPFzdp75%2FlLTMcY1DwMmoc9KLe7jpobJmFgt1tI1crLQV%2Bw3RYrVGNN5M70BI8SUCHZpSqHCVwJzTwe9frXaZtv1kZ7Boi6kfkZUfsxysYrIYhIsqDj%2BBhqgffV9qMkTd5zYcyppSLmOT3Jcp09Zm0981sJEvYsXwx9KzDerjxf33U1wgG2GPe9P49%2B8rmIxtro%2BrapuSwcN136%2FshYGMhxffBt97lqWf6N%2FaRx6BlaoG9RDcN8lhxVmbKAhgOwycFN0xS7QKilOpFzrmkLth2l5jWWwU4v39Ragd%2BwNeo3tO1v5nw4Fx3mLb%2FvB%2F%2BW7NBGJDRsfkoQzTQwjLft61Mzjbg4gaYhgDj%2FoBEl7Uwk6jXyQY6pgFxQ1RPSZ4Vb%2BvtcV79fLFaKkOgMoYRq4SezLtFE%2FvRb86eN2q%2B3D%2FJd9VDheWp1MKyJy%2Fuwn41ql8g7hs2FCESJ2sqdlYooOOn%2ByHxT%2FOVIaMIR9aI0%2B%2BboIqcAENPIYMyyk1RmFnRiud5rV0VUTWfyfYGio96wE3yJhRc77R0l%2BhwSq6uZhz0CDI6zN7U6k9dITB4d4KE7IhUdqOzBwqhdkxAohTu&X-Amz-Signature=99f5e9a5aacb0cab7e97882e756b6d8fc75ab5fb7722fefc38deb4deb1642307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
