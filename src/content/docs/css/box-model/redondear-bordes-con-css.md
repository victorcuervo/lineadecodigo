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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCTSZKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYXmBUS5bOO0vrcpNyhmh8xGMyOBwNc2LVpyQ20UI8XAIgbZLOUEZr8jHzp5DFNed4BY0dMBdEm5eO1dYKWxU1HA0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN1x2TSQ3XJcC6iZfyrcA43LzzuGTDgIN9qxDHxHzLrl8HU%2BeACa4La4ZZQOxc5WkK0WgOaIjX3FapTm1EYi3HSVUFrjUjI83ujOS5nBqETDKo8IJzqQsbZCdi5sXm%2Byrs2Y1O2afQ4SyGnMMWFUfcKeplcTsH2AsNFtXVtumWy1p5mxxA5PtCxkFNgFvbcZtw13t66wgNOaYg1D%2FMeosSHrZLK2%2BhcwH2DbzPJJBJLnvHSOBNq2U3zYmqEk680a4uZef%2FadXUFwLt75PQE5Y3t51CS5s5TR8%2B92aOjxL23ry2r0uGEb%2F3W4fmzCoPXxjRsBgPRe%2FOqrps9zEogrpahpunNdINy%2BC%2BlYUK0G6vshRzqnLoKG7ZkE746pMS9PckJacHyI45cOU6q5kWtF%2FsYc464ncA%2FM4Q5LqwQAPMuimUiOgEBZBf8B%2FspBY65DizwFKLg17uj5nwQWAPG2nlxS91w4Rh5%2BR8iV5xmnvMKjXw2KSlZci8zj3FsfKKx4WvuqmMxNxJxdsIJrPah90bqDCJI81%2FMxXyZguJ%2BInKTfTA%2FekTbFcr34kyBo4arIJ%2F%2FK8LN8765hR0AsyZ6YgauLaDeWC%2FCP4dEvLWRzGe%2BbNT7iFF3LnSKK4%2BgHHDoiBorOS8Kx9Anq%2F7faMIrwicoGOqUBo1ZwpwYf7g8ZdCqMnHmwSoM3kWqCRMo2Wzb2rkCbYVjr0Aaxh7kgNomHyTaqdtcVtMH8a2C7qHtbrutzztwXfNbfUdSsr7PIvGUczc9lt7J2j2rFHrwI4x%2BIZPafhzN50WamtYk9RuSGYomXoM16JWRPdH%2FjlxWL5scfxq%2F77UzmtVZUdynJ%2BE8rphFkqNbKKWgatgNmJ3FaaYfs2xLZgvC6ZBZr&X-Amz-Signature=f2304dc12fc8703967db84ee5fea915495e1a40e061170b625156e48391d6ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HCTSZKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYXmBUS5bOO0vrcpNyhmh8xGMyOBwNc2LVpyQ20UI8XAIgbZLOUEZr8jHzp5DFNed4BY0dMBdEm5eO1dYKWxU1HA0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN1x2TSQ3XJcC6iZfyrcA43LzzuGTDgIN9qxDHxHzLrl8HU%2BeACa4La4ZZQOxc5WkK0WgOaIjX3FapTm1EYi3HSVUFrjUjI83ujOS5nBqETDKo8IJzqQsbZCdi5sXm%2Byrs2Y1O2afQ4SyGnMMWFUfcKeplcTsH2AsNFtXVtumWy1p5mxxA5PtCxkFNgFvbcZtw13t66wgNOaYg1D%2FMeosSHrZLK2%2BhcwH2DbzPJJBJLnvHSOBNq2U3zYmqEk680a4uZef%2FadXUFwLt75PQE5Y3t51CS5s5TR8%2B92aOjxL23ry2r0uGEb%2F3W4fmzCoPXxjRsBgPRe%2FOqrps9zEogrpahpunNdINy%2BC%2BlYUK0G6vshRzqnLoKG7ZkE746pMS9PckJacHyI45cOU6q5kWtF%2FsYc464ncA%2FM4Q5LqwQAPMuimUiOgEBZBf8B%2FspBY65DizwFKLg17uj5nwQWAPG2nlxS91w4Rh5%2BR8iV5xmnvMKjXw2KSlZci8zj3FsfKKx4WvuqmMxNxJxdsIJrPah90bqDCJI81%2FMxXyZguJ%2BInKTfTA%2FekTbFcr34kyBo4arIJ%2F%2FK8LN8765hR0AsyZ6YgauLaDeWC%2FCP4dEvLWRzGe%2BbNT7iFF3LnSKK4%2BgHHDoiBorOS8Kx9Anq%2F7faMIrwicoGOqUBo1ZwpwYf7g8ZdCqMnHmwSoM3kWqCRMo2Wzb2rkCbYVjr0Aaxh7kgNomHyTaqdtcVtMH8a2C7qHtbrutzztwXfNbfUdSsr7PIvGUczc9lt7J2j2rFHrwI4x%2BIZPafhzN50WamtYk9RuSGYomXoM16JWRPdH%2FjlxWL5scfxq%2F77UzmtVZUdynJ%2BE8rphFkqNbKKWgatgNmJ3FaaYfs2xLZgvC6ZBZr&X-Amz-Signature=156dc0d4dac23a2b9b8c3d385737dffe2e8bd2e801f96823c7e37473c95d4dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
