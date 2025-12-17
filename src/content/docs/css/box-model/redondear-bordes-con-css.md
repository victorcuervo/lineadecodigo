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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHNUAIQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhjmZcvllo%2FnrSHoNr7j1A7Az%2BkydUOd8cYbIhWNBl6QIhAOsTjo97SBI7KWFzagigsIKN31tW%2F%2BfnBgbagBeUF0RlKv8DCH8QABoMNjM3NDIzMTgzODA1IgytlTH4oFfoYTmpj9cq3ANgyL3BRXdCt76R%2FiJIk6bGdqWyrXKGkTe4ZCRePZHl6DvJiwhbYtW9PeNcqZfflUMLVCYZ%2Bu65VIV8%2BDmLr8JhUg%2FggX2iWyQqExNuENZ11IO5TQsWS%2FSR2Q4f5ofMkx%2BNup%2BqIxqgNVTxvBBCTOZvv83H0Qimr2rZYVJJ3hoSwGHmozlW5IHuiL%2BohRvjhWBOqsDJZASOdf5FJjyAJSvwSLQ6q7XpL57YcvUs8ssq962ri9M2IHbYf6rjwWzEQ2Ker%2F%2BWjIKEaJ4a5m2lpnPWsmXv2Du5YdpAY0g8cEPU5YvFagEh8McQPBu2VEMUQYjVEN6WyKVZgtUVdLBwmYR5ZWff5UgYFVTbMOrPOzEH4fSQ2SyG9cOul8YmaIM6WnQWB8QTPjuyfBuudn2%2FDSYO%2FY4RIY2P4aXvWSBhb1FQ0Uol8lIpUkLQXo%2FYEYSVqK4zQLw0xLhDOkm2OKkpvcnEKKg4LxZI13TbfsCoXnQ%2FYZUMkWxxEGbUC%2BpSwwRtE3BZZnTtYV%2F6JszxAjUX%2FUJfWI46rrRwa91GGLNY%2BoXq2vvt2UU%2FNqRiozXK9jI2jytgmShXKCvOsB%2F5WlngXgUlvXfnCcENIovgl4PCzoNbxuOdKfGiNVBXSDM5czDX4YrKBjqkAZR7ZPePsREeeGi3knPEjlQKggIY70thMw4dE6SyIzy0Xa64HAXvZPYabDMwBrcvrTkGoO7uj%2BiHitoU4azVvjbsn4ypHOSQ7AsH1zQeeCazX%2BwtkNnQgHEH%2BJRH3zY9RUADKx1sMPe%2FZvRIrQYh%2B45gEOH68rXVDzTHLofcN1ggGcBPxiR9ygStf%2FUiiR3p2MCiSYtGQuaB5HZpCV1AaAVMVzHw&X-Amz-Signature=a97a1ff62947fc0f62f7bec6c73cb49ccbc13db26529a7c7124572b103fea4a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REHNUAIQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhjmZcvllo%2FnrSHoNr7j1A7Az%2BkydUOd8cYbIhWNBl6QIhAOsTjo97SBI7KWFzagigsIKN31tW%2F%2BfnBgbagBeUF0RlKv8DCH8QABoMNjM3NDIzMTgzODA1IgytlTH4oFfoYTmpj9cq3ANgyL3BRXdCt76R%2FiJIk6bGdqWyrXKGkTe4ZCRePZHl6DvJiwhbYtW9PeNcqZfflUMLVCYZ%2Bu65VIV8%2BDmLr8JhUg%2FggX2iWyQqExNuENZ11IO5TQsWS%2FSR2Q4f5ofMkx%2BNup%2BqIxqgNVTxvBBCTOZvv83H0Qimr2rZYVJJ3hoSwGHmozlW5IHuiL%2BohRvjhWBOqsDJZASOdf5FJjyAJSvwSLQ6q7XpL57YcvUs8ssq962ri9M2IHbYf6rjwWzEQ2Ker%2F%2BWjIKEaJ4a5m2lpnPWsmXv2Du5YdpAY0g8cEPU5YvFagEh8McQPBu2VEMUQYjVEN6WyKVZgtUVdLBwmYR5ZWff5UgYFVTbMOrPOzEH4fSQ2SyG9cOul8YmaIM6WnQWB8QTPjuyfBuudn2%2FDSYO%2FY4RIY2P4aXvWSBhb1FQ0Uol8lIpUkLQXo%2FYEYSVqK4zQLw0xLhDOkm2OKkpvcnEKKg4LxZI13TbfsCoXnQ%2FYZUMkWxxEGbUC%2BpSwwRtE3BZZnTtYV%2F6JszxAjUX%2FUJfWI46rrRwa91GGLNY%2BoXq2vvt2UU%2FNqRiozXK9jI2jytgmShXKCvOsB%2F5WlngXgUlvXfnCcENIovgl4PCzoNbxuOdKfGiNVBXSDM5czDX4YrKBjqkAZR7ZPePsREeeGi3knPEjlQKggIY70thMw4dE6SyIzy0Xa64HAXvZPYabDMwBrcvrTkGoO7uj%2BiHitoU4azVvjbsn4ypHOSQ7AsH1zQeeCazX%2BwtkNnQgHEH%2BJRH3zY9RUADKx1sMPe%2FZvRIrQYh%2B45gEOH68rXVDzTHLofcN1ggGcBPxiR9ygStf%2FUiiR3p2MCiSYtGQuaB5HZpCV1AaAVMVzHw&X-Amz-Signature=295eea956b839da272cb0036ce0f39d4cefe9ab634dfeb14bd17896a630aab20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
