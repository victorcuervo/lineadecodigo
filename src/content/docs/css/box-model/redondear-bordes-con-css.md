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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETHSMC5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYodHiHS2sA0COH8wdERV8vr5Aqol%2BV02wowIPJY37HAIgH%2FANI6MfAbTR8KQAYpcFwhBCbZPm8sosv6iVasm%2FyxEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHpqsQUqsJAYfiInyircA5Mg7ZEDdoG%2Ftcfn1q8S4MNBbWhWp%2FBQU8AIJUJmnHWIahmN0RtWTLm16xPJZDFZkMTkMDvKJbDAqV5%2FghbmwD9tZd34cAr4trmLl6j%2FsX6xkmOktVrcgsN08C7MfPD4Et%2BbRSPp%2ByoYeZ1mUrqpWUaYT%2FjTcicZrOl3wq2vweC%2B363z0LgiGiDqUC%2F%2B4xsASf%2Fb2ko3vXGtJi0n%2FVmNYeFuQdqn7NUp8rH010ZTCHQUjoqcBnWcJLddPVSF5fYmJMTHbb0sFTiaSJGolDnmZuzrYFhw59pAo6m%2BY81n6LxWHl%2BwjvlD4cLzKhWXZQJhjOiXbFyjBZyftQKpUewZlO66SB98JC7JZpVkeGIkDCz06%2F6G33ThwJfrZL2LntOCqV2n8eNzeCa35N3n0NN4H%2BeI4WtiXkSrU2gROvn0n3%2BRjarC1zNwjjJ9zPHzHIL143aUBD%2BIexm%2F8KE36%2BBR4No4jynE7pK%2BHQ%2FuXQLCJmI1uxH2z1gquORl7LNveJgynaXiks5ccIGxZ0BY9z2Vfz%2BlNzJF5zSH%2F%2BYTvehg0QjiZ%2BdlJx%2BLFlLxK1Ih0cHMOY1e0YxC4qzTDh5zbhJ%2FCIE5qlF%2BERWRJMRBZ7sMURBxSc6G1c1w5W6yECfIMLSXiMoGOqUBMOflm3Mcy%2BhS7ROs%2F70qfbseeSM3gu6yeYS1rFN%2B4OHRuWF0NiozOVguaWQCiKWPkijKhgCX3abgqifGYTk3UQ9P29lcVbitvZFFeXo3cli2q%2Fxxw5jCm7XiKNFoC2MrOgnmeByUhJ%2BRrjI1J1gCQCqTRj5amomacZq13TEFZegFyGiEFP%2FWRuRmWSfCDneIix2EyiDkuceQveyUmiWgBzUoubF8&X-Amz-Signature=285ffcaf0fd2be43bbbecc2a9f046cbe5b2cbf56a51446a3b27e49d4ec7f3f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ETHSMC5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYodHiHS2sA0COH8wdERV8vr5Aqol%2BV02wowIPJY37HAIgH%2FANI6MfAbTR8KQAYpcFwhBCbZPm8sosv6iVasm%2FyxEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHpqsQUqsJAYfiInyircA5Mg7ZEDdoG%2Ftcfn1q8S4MNBbWhWp%2FBQU8AIJUJmnHWIahmN0RtWTLm16xPJZDFZkMTkMDvKJbDAqV5%2FghbmwD9tZd34cAr4trmLl6j%2FsX6xkmOktVrcgsN08C7MfPD4Et%2BbRSPp%2ByoYeZ1mUrqpWUaYT%2FjTcicZrOl3wq2vweC%2B363z0LgiGiDqUC%2F%2B4xsASf%2Fb2ko3vXGtJi0n%2FVmNYeFuQdqn7NUp8rH010ZTCHQUjoqcBnWcJLddPVSF5fYmJMTHbb0sFTiaSJGolDnmZuzrYFhw59pAo6m%2BY81n6LxWHl%2BwjvlD4cLzKhWXZQJhjOiXbFyjBZyftQKpUewZlO66SB98JC7JZpVkeGIkDCz06%2F6G33ThwJfrZL2LntOCqV2n8eNzeCa35N3n0NN4H%2BeI4WtiXkSrU2gROvn0n3%2BRjarC1zNwjjJ9zPHzHIL143aUBD%2BIexm%2F8KE36%2BBR4No4jynE7pK%2BHQ%2FuXQLCJmI1uxH2z1gquORl7LNveJgynaXiks5ccIGxZ0BY9z2Vfz%2BlNzJF5zSH%2F%2BYTvehg0QjiZ%2BdlJx%2BLFlLxK1Ih0cHMOY1e0YxC4qzTDh5zbhJ%2FCIE5qlF%2BERWRJMRBZ7sMURBxSc6G1c1w5W6yECfIMLSXiMoGOqUBMOflm3Mcy%2BhS7ROs%2F70qfbseeSM3gu6yeYS1rFN%2B4OHRuWF0NiozOVguaWQCiKWPkijKhgCX3abgqifGYTk3UQ9P29lcVbitvZFFeXo3cli2q%2Fxxw5jCm7XiKNFoC2MrOgnmeByUhJ%2BRrjI1J1gCQCqTRj5amomacZq13TEFZegFyGiEFP%2FWRuRmWSfCDneIix2EyiDkuceQveyUmiWgBzUoubF8&X-Amz-Signature=c4977607aeb13f290609f099aaa943deaf06c24a4263b0479cbad42fef25f572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
