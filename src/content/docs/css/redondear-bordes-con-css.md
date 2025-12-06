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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NT2WS7J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNuDf5gcwRHtpnsfBf9buJ0phv47dt4qfKxDNiZCz5SAiEAiLWLu9JWxdcz3UA5sHL14uJpa2fl2RZUz6qvbmmgNIIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE%2FMHVEXAWywuyu%2BFCrcA%2FwS1CJh9LBA1suGQTXiSj5ijdku1nvtL3VJ4kkeC4DDXdGNVe3WweCebtGGBAcXC6hlE%2BzlSKUGn%2Bk2BT4ndCdZMBKSjz1FJrzODU2JT34tBU8jnuvUSYwcs3wMZezg9KQlORqtcJOLJbfnIWq3mRDrjYg4u06ki0FUAtZd8XoeXWIgoeCehqNa0RzYYxrGjCUzC2DxyKr%2Fj%2F8MX4lA8%2FZgYjytOYXvNDgCG%2Bg8jw%2BcLaY4YFww5mHqroE6jnEEZhJAWdRMtXI%2BmiTPkMNSDbalqLmPJFY1yPfO8QoPk1wpVHFUEmOcoBO11irV%2Fom2QE5wSMpoap8jvo%2BYnJJmcrsoe%2BrDk%2F486i%2BNdcBBgnQUdcvik9BydjVjqZzO5teuD1OhmSD1JJoGZn%2B4ZFya1opwx681pvbgrOmW%2B4ereaBd6AvFw%2Fu6YpfNk6m9oe3feoM3vRNYs6qVyCQWsG2OO8YizTA11x%2Frgv632UDvJJgxs8ORKTPighTX7kFXBNEbgLmxMp0gfONDklYZpZ0vY44uU3bY%2FTBnjph%2FbiAjp2%2BhLl719YJ%2F7qkfnbHMALZ1LU7CV%2B4JgP%2BxTZeGNRDqKdyedIaNmVyI4iDIauXVCzYCzmBj3GjniuDwG4niMKSm0MkGOqUBlVkdY2hvJNrG%2BkiU2iv1eIaF5vtycaHfIqh1W3uJaj08VDO2v%2FOUaJSfuLB8TxztC4vPIONTrF8a7If1MggLTMgTfdB64vkGnp9wneFHvJ3%2FFhGl9Vz01iqtJovEH%2F%2FUaehUr51dcwVklgZZlJgJPsrI2O0pgU5c32bs8XXry8XGT2rBUpR9vuQuuUZr979f1jZ1g5yBso3nRbyNOxSjk%2BLeo6w%2F&X-Amz-Signature=e01959cd688429bb64ae64e61a43c4b9ce3f20689af0048fed764f8c43f3f656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NT2WS7J%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T161215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNuDf5gcwRHtpnsfBf9buJ0phv47dt4qfKxDNiZCz5SAiEAiLWLu9JWxdcz3UA5sHL14uJpa2fl2RZUz6qvbmmgNIIq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDE%2FMHVEXAWywuyu%2BFCrcA%2FwS1CJh9LBA1suGQTXiSj5ijdku1nvtL3VJ4kkeC4DDXdGNVe3WweCebtGGBAcXC6hlE%2BzlSKUGn%2Bk2BT4ndCdZMBKSjz1FJrzODU2JT34tBU8jnuvUSYwcs3wMZezg9KQlORqtcJOLJbfnIWq3mRDrjYg4u06ki0FUAtZd8XoeXWIgoeCehqNa0RzYYxrGjCUzC2DxyKr%2Fj%2F8MX4lA8%2FZgYjytOYXvNDgCG%2Bg8jw%2BcLaY4YFww5mHqroE6jnEEZhJAWdRMtXI%2BmiTPkMNSDbalqLmPJFY1yPfO8QoPk1wpVHFUEmOcoBO11irV%2Fom2QE5wSMpoap8jvo%2BYnJJmcrsoe%2BrDk%2F486i%2BNdcBBgnQUdcvik9BydjVjqZzO5teuD1OhmSD1JJoGZn%2B4ZFya1opwx681pvbgrOmW%2B4ereaBd6AvFw%2Fu6YpfNk6m9oe3feoM3vRNYs6qVyCQWsG2OO8YizTA11x%2Frgv632UDvJJgxs8ORKTPighTX7kFXBNEbgLmxMp0gfONDklYZpZ0vY44uU3bY%2FTBnjph%2FbiAjp2%2BhLl719YJ%2F7qkfnbHMALZ1LU7CV%2B4JgP%2BxTZeGNRDqKdyedIaNmVyI4iDIauXVCzYCzmBj3GjniuDwG4niMKSm0MkGOqUBlVkdY2hvJNrG%2BkiU2iv1eIaF5vtycaHfIqh1W3uJaj08VDO2v%2FOUaJSfuLB8TxztC4vPIONTrF8a7If1MggLTMgTfdB64vkGnp9wneFHvJ3%2FFhGl9Vz01iqtJovEH%2F%2FUaehUr51dcwVklgZZlJgJPsrI2O0pgU5c32bs8XXry8XGT2rBUpR9vuQuuUZr979f1jZ1g5yBso3nRbyNOxSjk%2BLeo6w%2F&X-Amz-Signature=ceca2d37fe6fabb468bbb1b7201d263677088ba8ca00919fe251c32495e89d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
