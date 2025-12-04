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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLGJP7X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLpDKxroj9yhQ38WawGR6iyv8cezM24%2FZtUad3dxNQgIgYTX9Ok2xG%2BqwJlcO1exygu3Vj78gAX4EMasuCmPX6vkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBccDu7BRQ%2FIWJ6tiSrcAyV%2FMWQUfWAKOnAied9LhFUxNK4vmkP1ewVocktmyiWF0g21%2B%2BcjbJksq8Zsb238QjzvpTnVDJMzqAm1LJ945Q3jSRCTvjf%2BaPskAy1TxTLTNbWn06fBYuxBkwX0kwbw0lR61OlC7vHMIYERW8coh3z76YrCV4R2FZv5Cx8uYTHpVtynb1yogjhIrTqoovUZ6Lqx46ziag8Sl06nOGjWMqx4Cy1LSpyg5A3mTwp5FBGHRtJxJN6RTTDL2U5AS5annIMhT6uQTmjnA0xydwMBj7aGLMwFzvPZzgVNxv527%2FCr%2BlL8KTrYd4Nw3774RGdK6vQyUhfHOC%2F4cgECYZ%2B8EO%2BPwtXUnsOL8N9wEtRNR6j2EQ2Y4ktb1wG696sZhTqAmmTXygvr8nSxcAy%2BG4S5zQr1HQePpc6vnipwrDL5l5xYNTO9XgqGabyih5kS1HYJtBYmFvOii6r5d9deUmQIZhj5oGjEAQK%2BIqoRl2v1GsE37ir%2Bnx3JtVPAS8jE3nus3ITBDXEj3t8bkxJsmgNfWoPNy5ZmYCbZljoJ5dLu4idd9JdiGTstx605Sn1oLV1gGc5s%2FEg1xrmg9Kc0j2fHNSNyZQiJjNdNcSxnJabGaNyCt9L14AoEwz8RTc9sMMqMyMkGOqUBHJl79K%2B7XDu8XaZGb9caxXLJu2Zd7%2FTyjiSV5YJvJ6xYBPYm9Q5HuQVMuqB2rYGJgAsOVLxkl1Ge5IhRyPJvKcMTBo%2FUVeiatTC0YMKOVO%2Bms2bXqEG4ycnmyBZwjOes5%2BE8S62kzVZd%2F9M9ZTR1Tw3MUzeKChLsulvcePsLDtj%2BW4TMow21ZzCnR8jXDOoznsZsivtAr4W5toe3bJ5hIe6EAg9d&X-Amz-Signature=e88eae61bb189516733235739d351661960b7b3305e5444b77eecf1df82d09c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMLGJP7X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJLpDKxroj9yhQ38WawGR6iyv8cezM24%2FZtUad3dxNQgIgYTX9Ok2xG%2BqwJlcO1exygu3Vj78gAX4EMasuCmPX6vkq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDBccDu7BRQ%2FIWJ6tiSrcAyV%2FMWQUfWAKOnAied9LhFUxNK4vmkP1ewVocktmyiWF0g21%2B%2BcjbJksq8Zsb238QjzvpTnVDJMzqAm1LJ945Q3jSRCTvjf%2BaPskAy1TxTLTNbWn06fBYuxBkwX0kwbw0lR61OlC7vHMIYERW8coh3z76YrCV4R2FZv5Cx8uYTHpVtynb1yogjhIrTqoovUZ6Lqx46ziag8Sl06nOGjWMqx4Cy1LSpyg5A3mTwp5FBGHRtJxJN6RTTDL2U5AS5annIMhT6uQTmjnA0xydwMBj7aGLMwFzvPZzgVNxv527%2FCr%2BlL8KTrYd4Nw3774RGdK6vQyUhfHOC%2F4cgECYZ%2B8EO%2BPwtXUnsOL8N9wEtRNR6j2EQ2Y4ktb1wG696sZhTqAmmTXygvr8nSxcAy%2BG4S5zQr1HQePpc6vnipwrDL5l5xYNTO9XgqGabyih5kS1HYJtBYmFvOii6r5d9deUmQIZhj5oGjEAQK%2BIqoRl2v1GsE37ir%2Bnx3JtVPAS8jE3nus3ITBDXEj3t8bkxJsmgNfWoPNy5ZmYCbZljoJ5dLu4idd9JdiGTstx605Sn1oLV1gGc5s%2FEg1xrmg9Kc0j2fHNSNyZQiJjNdNcSxnJabGaNyCt9L14AoEwz8RTc9sMMqMyMkGOqUBHJl79K%2B7XDu8XaZGb9caxXLJu2Zd7%2FTyjiSV5YJvJ6xYBPYm9Q5HuQVMuqB2rYGJgAsOVLxkl1Ge5IhRyPJvKcMTBo%2FUVeiatTC0YMKOVO%2Bms2bXqEG4ycnmyBZwjOes5%2BE8S62kzVZd%2F9M9ZTR1Tw3MUzeKChLsulvcePsLDtj%2BW4TMow21ZzCnR8jXDOoznsZsivtAr4W5toe3bJ5hIe6EAg9d&X-Amz-Signature=a43c1ffa7ccad66767f88256e4ab5e334dff47954ab81adf3720a60a85e87761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
