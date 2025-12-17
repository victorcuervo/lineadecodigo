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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EHUFBR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTUv5ko6cWoARVXXeYJUoV7I77VJPe1dLNiqgV4XPg3QIgJ%2FanoBYnJRsMRkbkPfDGO9tOxuuKjLohGrgLtWDiqfsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA64wkz7W2NmH0N25SrcAzK3cPBTofXiwTSd%2F0Hbd5Ywbm%2FK%2FdFuWGpebQtsoLZ%2FTqnSCQZLl%2FLi%2Fxd1YId9SieYAseZmcNn6Ur9JcPGS6tXcPvb6TXIStFhIbrFeVw%2BnTPwfAGMn4ELUPqAW8xqsMasCQIU6%2FL2rsTWQJcid8blypLsw6%2BrChmfGqYxa1F%2FgfjSfYHB8H7619kp2SZ8TYAESpjqXpvpnypdW3rFe0IkcYP6pyrI9l7%2Fw%2F%2BQwAEE7%2BGshaQnQcrM8s6OCbwnZ6Fkd3rZrgpk9C%2FtelKktgVO5YVKF%2B19yECWFfpRsWmVMoIo6Zz%2BJDsShcct3WiGKetgastXvF7Du%2B5Lsw6Hn%2BQjwdyZ%2BYtipvUAMmvUmBIAfaVmSZODzcGZGlbrl1PRBA%2FdDcMB8CjBwD1TV6K4l0aVXJsApUGlDfMNE5BIPlktQ64v0IhO10PCmq%2Bzkrkm2o0IJ3mz7UDZgpcuLcIUE2nyvZ0fIQEn5HsEjelMnL1Bu0TgMlzExSPms%2B3zmzaZgqZMw7fd4y36CTeGgpYEx78DaFfoqxbgrbF7mIx7H%2BXcDyIuDuD2b9xCvObVkob8DVzSR2MSdhbU6fCIpG7FnoNd7mY0o3NeoPYursj593JF4Y9N3B%2BBUYAWiGV6MKSrisoGOqUB%2FwjBCeyqOsmZkzAWk3y7iLx4o6MrJ1uF7iBlXKYaXo4BraYzE2QgaXi7B%2FdSns5n3Qe%2FCHnmgUY4fbQL8J%2BEKMGx%2BKkmz3rDSqnradzxAQfk5uQnQJPprPSpgB1DrJNRqd11v%2FWMvf5wTes4%2BekXaINXrqi0%2FgtHmOaGqC57G6oXwPXuJlY3sa6z6a4avHRvsQeoEAUjYrLlWl0OjPilH3%2FxzQzW&X-Amz-Signature=a302f508b90fe7cc408e94261aac877a61076edd8bd452466fb41e07dfc33e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672EHUFBR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTUv5ko6cWoARVXXeYJUoV7I77VJPe1dLNiqgV4XPg3QIgJ%2FanoBYnJRsMRkbkPfDGO9tOxuuKjLohGrgLtWDiqfsq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDA64wkz7W2NmH0N25SrcAzK3cPBTofXiwTSd%2F0Hbd5Ywbm%2FK%2FdFuWGpebQtsoLZ%2FTqnSCQZLl%2FLi%2Fxd1YId9SieYAseZmcNn6Ur9JcPGS6tXcPvb6TXIStFhIbrFeVw%2BnTPwfAGMn4ELUPqAW8xqsMasCQIU6%2FL2rsTWQJcid8blypLsw6%2BrChmfGqYxa1F%2FgfjSfYHB8H7619kp2SZ8TYAESpjqXpvpnypdW3rFe0IkcYP6pyrI9l7%2Fw%2F%2BQwAEE7%2BGshaQnQcrM8s6OCbwnZ6Fkd3rZrgpk9C%2FtelKktgVO5YVKF%2B19yECWFfpRsWmVMoIo6Zz%2BJDsShcct3WiGKetgastXvF7Du%2B5Lsw6Hn%2BQjwdyZ%2BYtipvUAMmvUmBIAfaVmSZODzcGZGlbrl1PRBA%2FdDcMB8CjBwD1TV6K4l0aVXJsApUGlDfMNE5BIPlktQ64v0IhO10PCmq%2Bzkrkm2o0IJ3mz7UDZgpcuLcIUE2nyvZ0fIQEn5HsEjelMnL1Bu0TgMlzExSPms%2B3zmzaZgqZMw7fd4y36CTeGgpYEx78DaFfoqxbgrbF7mIx7H%2BXcDyIuDuD2b9xCvObVkob8DVzSR2MSdhbU6fCIpG7FnoNd7mY0o3NeoPYursj593JF4Y9N3B%2BBUYAWiGV6MKSrisoGOqUB%2FwjBCeyqOsmZkzAWk3y7iLx4o6MrJ1uF7iBlXKYaXo4BraYzE2QgaXi7B%2FdSns5n3Qe%2FCHnmgUY4fbQL8J%2BEKMGx%2BKkmz3rDSqnradzxAQfk5uQnQJPprPSpgB1DrJNRqd11v%2FWMvf5wTes4%2BekXaINXrqi0%2FgtHmOaGqC57G6oXwPXuJlY3sa6z6a4avHRvsQeoEAUjYrLlWl0OjPilH3%2FxzQzW&X-Amz-Signature=05edf9307c481dea70e78016eb6fecfe9bbbe26f42874f49670c32489dcdeb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
