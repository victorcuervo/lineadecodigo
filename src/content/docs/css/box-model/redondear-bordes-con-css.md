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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3PU5PY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOCNpfYVTni15LKzMEbSdh%2BinOduT6khWOX4VNF8MoxAiEAu%2FrQkaboziu4lyqj0W%2B6b9Bbvmf1EwLQ2wknktkMH10q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGA3rcyocaRTwVUQCircA6cIhfTevzT8DUGbdF6bfj517a6mnPxBT%2FtY43CWTHNRwTLGrnof4kbKWbQ8WYsSb%2F%2B5GZmKOthMoEfYoFuS68P8mHg5Vl3eq6kT7zfAj2FUesABzJwHuPu4R7Za4PxEjw1SYuX6k6%2BizJ7%2BcUm8sGaygzT6D9dBJ5dLRdZWtcoSTrQqxEO4HonLQN6BkwBkTuDkpKXIVE8RV%2BHxPoOMR856kPXxw8L%2FWbGl0UC4KvsNi8neA7YxGQXYpWJRI%2BxApjjVESb9qQ0VPFr5WVsn5nbx%2FJh4wH1hsQvbRkT%2BNEvz2WrH6gCLH1cS%2BkKo896VsQDwxeiRkkDmtYyu6OKjXy9BU%2BiRr%2Bqj8S3d4mmycbZ8ZJ255vwFx4IkW8LbATQE5PPLtEhWnmLdhIIEF%2FUcF6VQmfV12fZNHgBUHyYgXEe7Sw%2F4cFcv5eMQ6dhOYXA0wJzuwdOLyU%2FbhKEpG79c8BWUGwuhmS9xA2EoTQTe68VG2%2B%2FarJ8PWFl6qH8hajvPyJH7BVsLqbZlfplFN7%2B7fOp3n1aI41dklCi9Tq8ELWne%2F%2Ftxt3%2FJ%2B93h0rYL2byX45MY7zjh2VHYPomW5PaHxNkY6LvauxIHtTJE21MduHTxdC8TSJL1kw2qHz5yMMGdicoGOqUB6kUA0jRZC06r4qLhVGoQLF7V4%2F4ZzEo3V5XesSTPlufBenPzfPH7kb6h%2BwFxPYYxO19dppF2hq2CPOAXUiMefurY7o4hjc3HxH8nwJbBynyQ2cdOaNh4g5FpEHxITlCkLtOnJxPuu5O9407c%2B%2BfLaa1s88nqGSClIU%2Bne3NhFl0MnQ9UnVfAmaKEQAe41RJPV9yqfGLvMiJUydtQRCHt5yC8%2F7sK&X-Amz-Signature=986e2bd90d3901d3d21a0cbd25aad9206c0c414bde56f3f8ae8c9f4a73828549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N3PU5PY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOCNpfYVTni15LKzMEbSdh%2BinOduT6khWOX4VNF8MoxAiEAu%2FrQkaboziu4lyqj0W%2B6b9Bbvmf1EwLQ2wknktkMH10q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGA3rcyocaRTwVUQCircA6cIhfTevzT8DUGbdF6bfj517a6mnPxBT%2FtY43CWTHNRwTLGrnof4kbKWbQ8WYsSb%2F%2B5GZmKOthMoEfYoFuS68P8mHg5Vl3eq6kT7zfAj2FUesABzJwHuPu4R7Za4PxEjw1SYuX6k6%2BizJ7%2BcUm8sGaygzT6D9dBJ5dLRdZWtcoSTrQqxEO4HonLQN6BkwBkTuDkpKXIVE8RV%2BHxPoOMR856kPXxw8L%2FWbGl0UC4KvsNi8neA7YxGQXYpWJRI%2BxApjjVESb9qQ0VPFr5WVsn5nbx%2FJh4wH1hsQvbRkT%2BNEvz2WrH6gCLH1cS%2BkKo896VsQDwxeiRkkDmtYyu6OKjXy9BU%2BiRr%2Bqj8S3d4mmycbZ8ZJ255vwFx4IkW8LbATQE5PPLtEhWnmLdhIIEF%2FUcF6VQmfV12fZNHgBUHyYgXEe7Sw%2F4cFcv5eMQ6dhOYXA0wJzuwdOLyU%2FbhKEpG79c8BWUGwuhmS9xA2EoTQTe68VG2%2B%2FarJ8PWFl6qH8hajvPyJH7BVsLqbZlfplFN7%2B7fOp3n1aI41dklCi9Tq8ELWne%2F%2Ftxt3%2FJ%2B93h0rYL2byX45MY7zjh2VHYPomW5PaHxNkY6LvauxIHtTJE21MduHTxdC8TSJL1kw2qHz5yMMGdicoGOqUB6kUA0jRZC06r4qLhVGoQLF7V4%2F4ZzEo3V5XesSTPlufBenPzfPH7kb6h%2BwFxPYYxO19dppF2hq2CPOAXUiMefurY7o4hjc3HxH8nwJbBynyQ2cdOaNh4g5FpEHxITlCkLtOnJxPuu5O9407c%2B%2BfLaa1s88nqGSClIU%2Bne3NhFl0MnQ9UnVfAmaKEQAe41RJPV9yqfGLvMiJUydtQRCHt5yC8%2F7sK&X-Amz-Signature=be8b0cccde3a882ab6d433483ccedc01fb5db54bb4e34b93982016ebf950ff94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
