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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXIAKRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxkBci5D235WXqJHDyx9S6ByipeKNSIiFt%2Bj6mpB3fwAiEA6ltjh3bA7ThfIdOLj8dKxvQEa2h4onidLA8%2Bn9tIAvYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIDs67ttWC58lJJyXircA9ZeGwuNOobStedPgggje6A3UguoeDl%2FgOyr62cWvGJqa502m7Gf6F037K1PmR8q%2Fa44MyYn8UFzWxXyDSbDdsQpU%2Fi890Y5Rvmkf6stPwoZbPBYWUX8BctzlxYQPhniXTS%2FtoA2OncvOKcuVykzYkv34vw8vgrQ6Gzf6GRWdfPTNobOZ6ZxnZKozbKSsFweRxTIMVeCPOC8NzFEXVjZIZUvKob3o3fxC5zygUb8Y7S32UZ70UsT%2FwuJNoyZYFLGpGeSiYaTJtWXTWVK74lNs6BshJUj1D%2BQIaG2EjthsZRe448vKWOJgW6Izs0QubSd2PiIUMtHZrlKh1KAfag7B184iKDIwipgg48JbWqm9ocjD1UdUjyYZi77ZqdX0AyIXLIpPgmxrpEd9IKkF8372O5Iz3DLevZeCQy3%2Bw5yIpkT9Q0LXkQlIb9V%2BBM4ziNl41Ap9Q8ojCaysXZ8QrUVXXeHI3WCzXy5iKVVW1kNNKDCe2WuG75d5LALCG2vVTDsGKbA%2FftFQLODjbEbTDD6oKJazrL4CdbibjMlbjqdMNbFTL8dLVVQ%2BI4%2Bmg%2FeeuysL%2B73SaNYFBOuem56bTND4WnTyxFw6knQN8%2FU2HlZcv69tZj78TK761pjR6r6MLHOiMoGOqUBv%2BI88AvWL5%2FKBLAGiq7Uinn6mCwJs5hFagH9xQoE%2BhVYQsbVrep%2BH6wzk6qf5LhRS4M4LDzymWsls%2BlF5x5KGM9G7OTQrUwcQ0aUg7vGNbCJR53Zja3z1b1B5MxlNL9pBT%2BuL9EUqJ19HFG9RmwdW6Fw5eVclKUIRhN8yoJY7mTxh%2FL3M8WsFb3Qp%2BJjuhk1Kyt%2FQyTs%2B27Q8JZGpORbRuyLE0vc&X-Amz-Signature=5d5b52aedc157d01cbfc31dc450d272472c494970e142eb20b4e341cb2715bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZXIAKRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDxkBci5D235WXqJHDyx9S6ByipeKNSIiFt%2Bj6mpB3fwAiEA6ltjh3bA7ThfIdOLj8dKxvQEa2h4onidLA8%2Bn9tIAvYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDIDs67ttWC58lJJyXircA9ZeGwuNOobStedPgggje6A3UguoeDl%2FgOyr62cWvGJqa502m7Gf6F037K1PmR8q%2Fa44MyYn8UFzWxXyDSbDdsQpU%2Fi890Y5Rvmkf6stPwoZbPBYWUX8BctzlxYQPhniXTS%2FtoA2OncvOKcuVykzYkv34vw8vgrQ6Gzf6GRWdfPTNobOZ6ZxnZKozbKSsFweRxTIMVeCPOC8NzFEXVjZIZUvKob3o3fxC5zygUb8Y7S32UZ70UsT%2FwuJNoyZYFLGpGeSiYaTJtWXTWVK74lNs6BshJUj1D%2BQIaG2EjthsZRe448vKWOJgW6Izs0QubSd2PiIUMtHZrlKh1KAfag7B184iKDIwipgg48JbWqm9ocjD1UdUjyYZi77ZqdX0AyIXLIpPgmxrpEd9IKkF8372O5Iz3DLevZeCQy3%2Bw5yIpkT9Q0LXkQlIb9V%2BBM4ziNl41Ap9Q8ojCaysXZ8QrUVXXeHI3WCzXy5iKVVW1kNNKDCe2WuG75d5LALCG2vVTDsGKbA%2FftFQLODjbEbTDD6oKJazrL4CdbibjMlbjqdMNbFTL8dLVVQ%2BI4%2Bmg%2FeeuysL%2B73SaNYFBOuem56bTND4WnTyxFw6knQN8%2FU2HlZcv69tZj78TK761pjR6r6MLHOiMoGOqUBv%2BI88AvWL5%2FKBLAGiq7Uinn6mCwJs5hFagH9xQoE%2BhVYQsbVrep%2BH6wzk6qf5LhRS4M4LDzymWsls%2BlF5x5KGM9G7OTQrUwcQ0aUg7vGNbCJR53Zja3z1b1B5MxlNL9pBT%2BuL9EUqJ19HFG9RmwdW6Fw5eVclKUIRhN8yoJY7mTxh%2FL3M8WsFb3Qp%2BJjuhk1Kyt%2FQyTs%2B27Q8JZGpORbRuyLE0vc&X-Amz-Signature=0fa0e3486cb3fd945ea2ef0a8726b39589ed92b1d064be6b674c203a1b18c3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
