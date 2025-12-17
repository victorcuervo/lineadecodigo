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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWINGHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLGvbTvc7dKHH4O%2FEH2A253HOrKNJtZdLLDsTtzqH7gIhAMkN5kjLROK%2Fq%2FzuY3tDnPVeJcbxau8tq7tEIE4EFBZcKv8DCHYQABoMNjM3NDIzMTgzODA1IgwHofeAmssKhx2KTYEq3AP0s4D9cbx4Z8uMw7NGWV69GgwcknLeZKPgp1ZjVcIv9oadonqfRCeKqp8HnSZIxXw4S3CBZhQfpgLM1VisflaLNEA1TLlt4R7zfOeKPhUI5%2F4UuFfwJ7ULsd8WMMkilUi5mhFjvez0c71mhRPdv3y%2BgpVP3VVPOKcPhbivqoMf%2BOFYTWa3RCNdBn77x7p84xeUrusYL6798T7XdM%2BbsbtCI8y7nfE8YeFmN1lP0i5WSxuOnip8497eegSbMlZplNXlkrUbZ4ekiUiQREVZdlJTE9h%2FgRbTWfYN6KD3NNXmGpHNX%2Be7Sq%2FrUZ2Kz2JF8Vm7WVn4j6BKYzex3lY5W6rQ5prviHppilpZmx869HfEQPUilPraEgtpD1VXYi9cduf9vBDeA%2FOOLA8olG2EmHMGsdyntF5yHwXX1Duv9DnuWbLp57H%2Fwk0fqI82KH8eUTl0Ruq54i3IdLmt1B2CZYngt0oQ6ncUnMmKLQ7v2GUcvYM87MhysiGjChDscOzE1%2FgTb4PT9J6E2VbhZsJWoUqF09Kx6u5sHscCi8h5WB2Y5TmxKofoC5lLm5r0EBSc%2BZto1oWA1fP6kv3jAou7JuEOXoSrb%2F71iZRcJf21FCqao1kOYNttHBBgIT0NozCE6ojKBjqkAemODoph3F0qNz46%2BGUQYrjFnmgcOyYDHZAHm4KBmREkTjk57J30xEhhqqZZjDwLKsiPx0OFE8kNNa%2Bnb%2B7jgpCDdTU03z0ziB5V%2FqW5mWI%2FTZo1LTMKrXGgdZ4aaGDwu%2FPnf8gm5LFwlUZhliIjimd9UUI0uwjcoPodoCj5UespUScJ42Hjn2QlLFVZVRtpQMyKV3MAN6kACTOhTddQHnlNXQ5B&X-Amz-Signature=3e7b17232219ef0a5c83b8dd99072831b821fcbd2f8939c2c87ce0fca2cf981e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEWINGHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqLGvbTvc7dKHH4O%2FEH2A253HOrKNJtZdLLDsTtzqH7gIhAMkN5kjLROK%2Fq%2FzuY3tDnPVeJcbxau8tq7tEIE4EFBZcKv8DCHYQABoMNjM3NDIzMTgzODA1IgwHofeAmssKhx2KTYEq3AP0s4D9cbx4Z8uMw7NGWV69GgwcknLeZKPgp1ZjVcIv9oadonqfRCeKqp8HnSZIxXw4S3CBZhQfpgLM1VisflaLNEA1TLlt4R7zfOeKPhUI5%2F4UuFfwJ7ULsd8WMMkilUi5mhFjvez0c71mhRPdv3y%2BgpVP3VVPOKcPhbivqoMf%2BOFYTWa3RCNdBn77x7p84xeUrusYL6798T7XdM%2BbsbtCI8y7nfE8YeFmN1lP0i5WSxuOnip8497eegSbMlZplNXlkrUbZ4ekiUiQREVZdlJTE9h%2FgRbTWfYN6KD3NNXmGpHNX%2Be7Sq%2FrUZ2Kz2JF8Vm7WVn4j6BKYzex3lY5W6rQ5prviHppilpZmx869HfEQPUilPraEgtpD1VXYi9cduf9vBDeA%2FOOLA8olG2EmHMGsdyntF5yHwXX1Duv9DnuWbLp57H%2Fwk0fqI82KH8eUTl0Ruq54i3IdLmt1B2CZYngt0oQ6ncUnMmKLQ7v2GUcvYM87MhysiGjChDscOzE1%2FgTb4PT9J6E2VbhZsJWoUqF09Kx6u5sHscCi8h5WB2Y5TmxKofoC5lLm5r0EBSc%2BZto1oWA1fP6kv3jAou7JuEOXoSrb%2F71iZRcJf21FCqao1kOYNttHBBgIT0NozCE6ojKBjqkAemODoph3F0qNz46%2BGUQYrjFnmgcOyYDHZAHm4KBmREkTjk57J30xEhhqqZZjDwLKsiPx0OFE8kNNa%2Bnb%2B7jgpCDdTU03z0ziB5V%2FqW5mWI%2FTZo1LTMKrXGgdZ4aaGDwu%2FPnf8gm5LFwlUZhliIjimd9UUI0uwjcoPodoCj5UespUScJ42Hjn2QlLFVZVRtpQMyKV3MAN6kACTOhTddQHnlNXQ5B&X-Amz-Signature=938d6b559c814df1be879bba0febc3dd9832ac73b2cf2bac98d7e3b74d237766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
