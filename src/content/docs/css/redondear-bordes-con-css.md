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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRRPUJE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7V9GcGMr7KnreG5eJ29ozVq4oVjA3xvO7DeVWTTAL0AiAvMnA%2F59xeJnujZh4m4d9fzoRjjbNaOxQA5WgFIkXFviqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2FB414Yeke%2FVcJcDKtwDtPmlli6or1cTMr0Oe2hYGpMidLKwzDzmWaGarowa%2Fc7m2rAxuuNs1l8nDf5UzlLyxly1xzzT4iZ9lYKANNd7LF47H30fgX2PIRxQeZ1M7XxJRRhqYNTguWxrVjQtQQQryvN5erUY023Diqo0VxjFd0xR2CEuRp7P3qdtf%2BWlocZsA3LMayzvYJdJoUkHSsBzJMgW875aipih%2BU6hufyId%2BMu4hfQUacfaDbdtz9UPVNTcNmZ12rdg0z%2F0k7SiL8K7btYPMwhjSwSlZyojZm5A6oh4sBdZogEW7hxtJ66Cac%2B9lsjtwqJZDRMULbPG0iEZouppOOlXlBpWOVQk6vpb8hgzns5QbTkvmrHuA%2FTATFjua3SlFz629nI4ol4zd%2FGbT6ASirJoIj34nMKe9r%2FgHLOyFtL7nCzOQO9CbeGpYoGVW2YFjCBuOMppnaE%2F%2BfuKJ4PuLURIAtEeD9fhPN7nqbWNtJt6zDmywVMiBBzXr1q0%2FjGLArrNXGUQBJ3eYsVQ6yeQTx%2FiylHTmtPild%2BQp%2FvNeepjjupB2%2BFkyrC5gcel2MlkBur7TdcBpuGo4AUT0ctC67VLiYokUtu4DlAMeeKhns1GIfc8vWrnPv%2BkmjIuu8FUhzaX3iBFw0wxLjWyQY6pgEpWiHp5EQ3XdMmOzchcSIwzrN2Yei1fuZYA1JqzSL8gs5AAv8uhfksD7%2BX4dChHn5fCvadaei6n0NeQ7F%2FksFhoxNoQQXTAFedK8Ptd55L5qtpGVCnVs7eA0ovtR6j1%2BRplvx51r9%2Feg%2Bt8GUC7bUcmdDtE9E5BqAbONXsTRZNft61LlAKwcXrxOAsdQN6uNkLVEPTxRD1TSVBggW9NfOo4QHneFxT&X-Amz-Signature=2c9f4b3b95ba52ce99ae484e99c25c3058d5723444e083a18f3190b2551afbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBRRPUJE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7V9GcGMr7KnreG5eJ29ozVq4oVjA3xvO7DeVWTTAL0AiAvMnA%2F59xeJnujZh4m4d9fzoRjjbNaOxQA5WgFIkXFviqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8%2FB414Yeke%2FVcJcDKtwDtPmlli6or1cTMr0Oe2hYGpMidLKwzDzmWaGarowa%2Fc7m2rAxuuNs1l8nDf5UzlLyxly1xzzT4iZ9lYKANNd7LF47H30fgX2PIRxQeZ1M7XxJRRhqYNTguWxrVjQtQQQryvN5erUY023Diqo0VxjFd0xR2CEuRp7P3qdtf%2BWlocZsA3LMayzvYJdJoUkHSsBzJMgW875aipih%2BU6hufyId%2BMu4hfQUacfaDbdtz9UPVNTcNmZ12rdg0z%2F0k7SiL8K7btYPMwhjSwSlZyojZm5A6oh4sBdZogEW7hxtJ66Cac%2B9lsjtwqJZDRMULbPG0iEZouppOOlXlBpWOVQk6vpb8hgzns5QbTkvmrHuA%2FTATFjua3SlFz629nI4ol4zd%2FGbT6ASirJoIj34nMKe9r%2FgHLOyFtL7nCzOQO9CbeGpYoGVW2YFjCBuOMppnaE%2F%2BfuKJ4PuLURIAtEeD9fhPN7nqbWNtJt6zDmywVMiBBzXr1q0%2FjGLArrNXGUQBJ3eYsVQ6yeQTx%2FiylHTmtPild%2BQp%2FvNeepjjupB2%2BFkyrC5gcel2MlkBur7TdcBpuGo4AUT0ctC67VLiYokUtu4DlAMeeKhns1GIfc8vWrnPv%2BkmjIuu8FUhzaX3iBFw0wxLjWyQY6pgEpWiHp5EQ3XdMmOzchcSIwzrN2Yei1fuZYA1JqzSL8gs5AAv8uhfksD7%2BX4dChHn5fCvadaei6n0NeQ7F%2FksFhoxNoQQXTAFedK8Ptd55L5qtpGVCnVs7eA0ovtR6j1%2BRplvx51r9%2Feg%2Bt8GUC7bUcmdDtE9E5BqAbONXsTRZNft61LlAKwcXrxOAsdQN6uNkLVEPTxRD1TSVBggW9NfOo4QHneFxT&X-Amz-Signature=060be5aa48d4e50dfab14331a361dac4e2d8fc4005728593b778adf8c0507bbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
