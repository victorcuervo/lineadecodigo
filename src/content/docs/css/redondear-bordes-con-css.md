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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUALBPC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrAaikhJ36tjQ6%2FAmq%2BpWU7VJF7p74gKPUCXO7fz8djAiEAq6d6vFY4QVAP6yZSo2rqpshgKAW3UI0DUQ2V3H231hMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF0VyTcRaaP%2B7xI6SyrcA3hEI%2FWDkJ4HzqoKXI6Aen%2Fk9M%2FD9LdiVSiAcZM8dKpteiJ5VmdHYpBXQwNEh5YKcZKT3NWWHakmefQB%2B0lHNg%2B1M5RKgs%2F%2FNDAxbCU1Fg6s20ooPjVcwaNa1SzKZu4K3FP%2BZVdqUPFpUo0NhjprWa3OAcePmO8MinsX0tkzUUl4rxr9C3%2BzQ%2FR2mSSxxcHSVoIWamDGiRF3VQtgZItT%2B1xR5Gkx0vj55gIxIhz%2F7PU%2Fb1VFzrl12Vx7DbaMihTXfoVdlxPz%2FSvCj%2F7oVKGwzguIEfVqAuyEggrHsFhSNjgcE9qdwM4WV9Rj%2FNKMhG%2F4m5m7nP4Bp2hnJcxO%2Fz8vsPVH65F6kmIQ8rFlXeY1Yydtzt%2FdfJOh%2F9p%2FgVPpmOCJTcIiUPk%2BwDtG1WySR59n%2FX6Bhckt33vMH3g7qTFMO60NLCmwtj4U4v0Hqaz%2BW44P0aqO2JMPJoO0cqam9npgHc%2B%2FmlGjAniP5zKFoLfkbPKm4Ne090zmhMpukAVFx%2B9mNFcW6dwnJt6vVqi3SPYPn2GpC%2BUeY4%2BP4opxhbBUGhf1TmGVewJFkCN379P9v3FJp2vIV04aPI5jJIsWbDhp0ZyX6O%2BDCh82I0n2RpXU4Xev7j7g8rvVxlzqL2FqMPivyckGOqUByHXrrmH6qMHdsCHSq1%2BK0hTex01zVAFRDjOn%2B03KWfyKfHqROacV2xHnRMT3auwJYw%2BpKmAJpve3%2BrSsnoygDQ71YVwgDLzpoj42FJpatSbwZPBa%2FLp%2B2iGmaxKeqbFOiMyynSpv7HV%2B0oWTP4HrYL%2F%2B6wwoU7lblkb5bV5cRcifKjRjoHIcerJYatFDVW%2BUUC1dpPVphTxPrk46DXpIc9N3GI8n&X-Amz-Signature=a4e805551462b48eb986aa6ec43b3ca8a2fda889d5ebe0e7d93d7be5b86f5a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOUALBPC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrAaikhJ36tjQ6%2FAmq%2BpWU7VJF7p74gKPUCXO7fz8djAiEAq6d6vFY4QVAP6yZSo2rqpshgKAW3UI0DUQ2V3H231hMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDF0VyTcRaaP%2B7xI6SyrcA3hEI%2FWDkJ4HzqoKXI6Aen%2Fk9M%2FD9LdiVSiAcZM8dKpteiJ5VmdHYpBXQwNEh5YKcZKT3NWWHakmefQB%2B0lHNg%2B1M5RKgs%2F%2FNDAxbCU1Fg6s20ooPjVcwaNa1SzKZu4K3FP%2BZVdqUPFpUo0NhjprWa3OAcePmO8MinsX0tkzUUl4rxr9C3%2BzQ%2FR2mSSxxcHSVoIWamDGiRF3VQtgZItT%2B1xR5Gkx0vj55gIxIhz%2F7PU%2Fb1VFzrl12Vx7DbaMihTXfoVdlxPz%2FSvCj%2F7oVKGwzguIEfVqAuyEggrHsFhSNjgcE9qdwM4WV9Rj%2FNKMhG%2F4m5m7nP4Bp2hnJcxO%2Fz8vsPVH65F6kmIQ8rFlXeY1Yydtzt%2FdfJOh%2F9p%2FgVPpmOCJTcIiUPk%2BwDtG1WySR59n%2FX6Bhckt33vMH3g7qTFMO60NLCmwtj4U4v0Hqaz%2BW44P0aqO2JMPJoO0cqam9npgHc%2B%2FmlGjAniP5zKFoLfkbPKm4Ne090zmhMpukAVFx%2B9mNFcW6dwnJt6vVqi3SPYPn2GpC%2BUeY4%2BP4opxhbBUGhf1TmGVewJFkCN379P9v3FJp2vIV04aPI5jJIsWbDhp0ZyX6O%2BDCh82I0n2RpXU4Xev7j7g8rvVxlzqL2FqMPivyckGOqUByHXrrmH6qMHdsCHSq1%2BK0hTex01zVAFRDjOn%2B03KWfyKfHqROacV2xHnRMT3auwJYw%2BpKmAJpve3%2BrSsnoygDQ71YVwgDLzpoj42FJpatSbwZPBa%2FLp%2B2iGmaxKeqbFOiMyynSpv7HV%2B0oWTP4HrYL%2F%2B6wwoU7lblkb5bV5cRcifKjRjoHIcerJYatFDVW%2BUUC1dpPVphTxPrk46DXpIc9N3GI8n&X-Amz-Signature=a01d1bdf46f2f3f317d291189f02ffd62632fa8c8c747ecffdceb685fefbf5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
