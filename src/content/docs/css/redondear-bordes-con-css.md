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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAASETA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmN51%2Fu12Wp%2BWFuMC4v2CmRwhDPhvHY%2FN3fQCySy8gTAIgSLxYOMxLG0oEyU0U1WWOiQO%2FP1zCf5c0HhGagL9mrYoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsjXUYH%2FmsY%2BOUaCrcA4mvH79BCFt82cqXoC6o0sA%2BbHHyiOrOT0e1LsvTabMryJd1X%2FRdtZalke6zKEeCyLtKc79Cr5bKuI7Xx7YYEUJhGJT9jAqllLw8T6lrHtAp0zFoKcgBqfjb028uZTFM66a0V08gGjHL9v32pcd2NLUNKdkMNAXU6fSg6mkMnsLeocRBTGuOjAbJ%2FjkfzJplIyxL1FcV08ven%2FtfXwri6bJJPhr%2FKdLRwtB%2BQK%2FikSnk90lFbKy9mlu6SKrTLQfXwwtH4TszawUBMByWQ2jyToapTNnDUg8FMmRgbiJjhHbdkLBBuefu3WsyNwr1%2FxFgZuygLcBTyZrneBJ4allvJJQ6%2BFXLpq%2FsLrjd6d14O7goTSKdiQBfCDCd%2FeMmhJm0KeeXssuKZptNijSyQynurB0xTDm5fRkeQ8lAs%2B9yqPQrZ3T6DtzBBQomaQ%2BFuKtWa6%2FJrazQnzVP1iyTO24CXs8emeYLb3YwN3eFCnAOqBg1%2BRgQWose25AwRY10dHazl3TiRJMDSiwhLPdLw5N2nsPU6zAX%2B3m6repJhnlh4OL7yPChY3KwhTW9%2B2lYC0sVmKe2s1XPJpdDFQdUFxUCu6rgDEpK2hEM4mTVC6VPZBotgZecqhnBPLWs%2FVZzMNXt2ckGOqUB0o5KIgVpzahLyogNAsH6Yga3b3LjFsSM2QkrltNUWq1EA6beMZYIRI2DH%2FL1WRzLxbsV8fallX3jAqAuJH63c9lFMZCfgTtEueXwNk1i7R3BYQBg0IjUWX36WgReYaYKKhH6FWq5xIpwJdM8von5VNvcoMUBt2N6IXO61MAIQPcwi2nMJ%2FUIlfkazIFUqXRamNAuyDSdtvpFyfK0Ih%2Ft4XMUMiLw&X-Amz-Signature=92b6fcb35a540d2d1c4fc5c19b55eaac55575175ebf77afae22d2b01d6898257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXAASETA%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmN51%2Fu12Wp%2BWFuMC4v2CmRwhDPhvHY%2FN3fQCySy8gTAIgSLxYOMxLG0oEyU0U1WWOiQO%2FP1zCf5c0HhGagL9mrYoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKGsjXUYH%2FmsY%2BOUaCrcA4mvH79BCFt82cqXoC6o0sA%2BbHHyiOrOT0e1LsvTabMryJd1X%2FRdtZalke6zKEeCyLtKc79Cr5bKuI7Xx7YYEUJhGJT9jAqllLw8T6lrHtAp0zFoKcgBqfjb028uZTFM66a0V08gGjHL9v32pcd2NLUNKdkMNAXU6fSg6mkMnsLeocRBTGuOjAbJ%2FjkfzJplIyxL1FcV08ven%2FtfXwri6bJJPhr%2FKdLRwtB%2BQK%2FikSnk90lFbKy9mlu6SKrTLQfXwwtH4TszawUBMByWQ2jyToapTNnDUg8FMmRgbiJjhHbdkLBBuefu3WsyNwr1%2FxFgZuygLcBTyZrneBJ4allvJJQ6%2BFXLpq%2FsLrjd6d14O7goTSKdiQBfCDCd%2FeMmhJm0KeeXssuKZptNijSyQynurB0xTDm5fRkeQ8lAs%2B9yqPQrZ3T6DtzBBQomaQ%2BFuKtWa6%2FJrazQnzVP1iyTO24CXs8emeYLb3YwN3eFCnAOqBg1%2BRgQWose25AwRY10dHazl3TiRJMDSiwhLPdLw5N2nsPU6zAX%2B3m6repJhnlh4OL7yPChY3KwhTW9%2B2lYC0sVmKe2s1XPJpdDFQdUFxUCu6rgDEpK2hEM4mTVC6VPZBotgZecqhnBPLWs%2FVZzMNXt2ckGOqUB0o5KIgVpzahLyogNAsH6Yga3b3LjFsSM2QkrltNUWq1EA6beMZYIRI2DH%2FL1WRzLxbsV8fallX3jAqAuJH63c9lFMZCfgTtEueXwNk1i7R3BYQBg0IjUWX36WgReYaYKKhH6FWq5xIpwJdM8von5VNvcoMUBt2N6IXO61MAIQPcwi2nMJ%2FUIlfkazIFUqXRamNAuyDSdtvpFyfK0Ih%2Ft4XMUMiLw&X-Amz-Signature=7699c82e53cf3e8cf804ceef08d6b1e0dc476ddab7dbd2e2f66976792731047d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
