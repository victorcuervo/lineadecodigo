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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ67PC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdN1rY4Ab4WLUYdKMZixKd4ItXlk%2BEAQnItU4PiPs5bQIhAJJwfz4oPGT9%2BWHKwvh1JJHefoBao2le3B8AZfQddr4VKv8DCHUQABoMNjM3NDIzMTgzODA1IgwN4h15oXnOwbdq1YIq3ANQrKq3kCIgFA5HcBx8sonbepwWaVzMdtE0oZrBftDMFweZWqpvBs2gO34BtSzN%2B5lM4V5PG5WsQNn1xPRKJq1WyiaPNbAhBWtCwOWck7HQSuEnoi4J3AK19Py4cNiJLnAUnTkXpy4h3L74NT6wAo44MaN3E%2Fx2ld%2F2Zsg9EBqW9PfpAep4KbzV32rF61hamGXGtLbOXom0ZRexhGcpOBYNPA19NC8ZBX9cYlH7zgnn9Q3SoaAskLVzSPZ3yOQavmL%2FLFmF5%2FtxT5xtxOvfBpmtUE3PpLVtlJ4L0e69SKpTY36FeDq9%2BjogQLGYS1MQzCSpxF%2Fd45vO2aNskhk7IUCJOkHo0DHLLTwrXZ2Aj2HsMIdWLFSrfNmCao3bHZKjKtdIS4yj1buB11tnX8AOijKChWAKMAuWc1JvtafJJQBSmngTPu2olh4j8NUrLep6enaFZwQOwzP5O4AfRRgWaVBcMETkA6o%2FvmGVJjaJyS052rZjIxC6pVRW6Lb7mClvxr5Vi6h23HQ2ODdk%2F6K1xCBx5XpeuWsrYsfHXurnO0%2FtBqx7I%2BHzbEJOPxTen9ahVyK%2FVdCugX72WO22poOpgxoc1YkTXoVDB9o5aWwnVib4YQ%2FK2x6D4f5BRtl1vDD8zYjKBjqkAV0zxmbeBDdtr8BH6UE%2BNrU7h4WRtNCv8T8n30OiJtpCxUtxCTIRXJrR4xSOpVHZFn1yOHAojfPBJ%2BiRachtrP%2Fb3RbOjB93%2BL%2BgZX%2Bjb%2Fz%2FHHQk0l2NRRfNjZuVqB37IeoupDPRv9CG5vypC6W0%2FQDJvZcBoO5vsPyq9%2FxdeAqap%2FpliiSriV3dj8g3NwvaKWxKEXzl6jjnJ3jC1e0%2BbzjkqQkR&X-Amz-Signature=695190148192857d4f37046dcd4778428399604878d7b177a070d6dc87a80cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHJ67PC4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdN1rY4Ab4WLUYdKMZixKd4ItXlk%2BEAQnItU4PiPs5bQIhAJJwfz4oPGT9%2BWHKwvh1JJHefoBao2le3B8AZfQddr4VKv8DCHUQABoMNjM3NDIzMTgzODA1IgwN4h15oXnOwbdq1YIq3ANQrKq3kCIgFA5HcBx8sonbepwWaVzMdtE0oZrBftDMFweZWqpvBs2gO34BtSzN%2B5lM4V5PG5WsQNn1xPRKJq1WyiaPNbAhBWtCwOWck7HQSuEnoi4J3AK19Py4cNiJLnAUnTkXpy4h3L74NT6wAo44MaN3E%2Fx2ld%2F2Zsg9EBqW9PfpAep4KbzV32rF61hamGXGtLbOXom0ZRexhGcpOBYNPA19NC8ZBX9cYlH7zgnn9Q3SoaAskLVzSPZ3yOQavmL%2FLFmF5%2FtxT5xtxOvfBpmtUE3PpLVtlJ4L0e69SKpTY36FeDq9%2BjogQLGYS1MQzCSpxF%2Fd45vO2aNskhk7IUCJOkHo0DHLLTwrXZ2Aj2HsMIdWLFSrfNmCao3bHZKjKtdIS4yj1buB11tnX8AOijKChWAKMAuWc1JvtafJJQBSmngTPu2olh4j8NUrLep6enaFZwQOwzP5O4AfRRgWaVBcMETkA6o%2FvmGVJjaJyS052rZjIxC6pVRW6Lb7mClvxr5Vi6h23HQ2ODdk%2F6K1xCBx5XpeuWsrYsfHXurnO0%2FtBqx7I%2BHzbEJOPxTen9ahVyK%2FVdCugX72WO22poOpgxoc1YkTXoVDB9o5aWwnVib4YQ%2FK2x6D4f5BRtl1vDD8zYjKBjqkAV0zxmbeBDdtr8BH6UE%2BNrU7h4WRtNCv8T8n30OiJtpCxUtxCTIRXJrR4xSOpVHZFn1yOHAojfPBJ%2BiRachtrP%2Fb3RbOjB93%2BL%2BgZX%2Bjb%2Fz%2FHHQk0l2NRRfNjZuVqB37IeoupDPRv9CG5vypC6W0%2FQDJvZcBoO5vsPyq9%2FxdeAqap%2FpliiSriV3dj8g3NwvaKWxKEXzl6jjnJ3jC1e0%2BbzjkqQkR&X-Amz-Signature=229268685f803daaea879886f19a2ed6497491a785080b04c24810dd1a45ca0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
