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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WM3DKXQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwuvM3m%2FYh2YbERpajFEOLuoOxjxYlHG8cnK0nsr%2FxQIgHXH3DUfLU%2BkMQkmqlH67e6RzFwEXyJFcv6E6Q7F%2FgSkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFEcyWSlKEC6mf8nKircA4CB%2BOf5O4S1fpGkBt4P5s2%2BmudKv8vTNv2eMqtfl6XD1edpFO2iUZcyinrFNq4csW6dTBzeHwN4kXMfrNz6zNHs9STfnyUjJsUFdEBQCIXU99LRkLPGcSPFF8WmBFOfxa7jSDWwPXheW6UK3dZOB9fJrUm%2BXbImeEOBLDvq7A%2FSAMRiV2xR72LZnqvX2PRRiXPpEZuFMhV5oTn9sofrovBtAvqKoHvqO8Poc7WbXwMGI9MRupJgzz8xVR5P4RlV0X99Nwk5JPExEBVXol1mgNp%2B%2BuRVbzl%2BIp1L5DmHFpFV%2F8s2NXXsUM2LVcPyddAj7s37TZNMLGWSC805VtHJRIUQLXTFP4QATgPP6qMHFNdBl60VehS334flGil7H7EJUqdeQcPcIdNZqO5Ji%2BnyT%2BrnL%2FMIzTvXqduGtejrez9PWGoj0fkgeV7EAoqTh1JGb5E8L2ccpsx1cjO9Vx83ECtz5TyCzws6UdfyFoHSZ%2BhL1ir6I38WGap%2FU4U2CTMsdvtTAHpgbTuzyVeUqf5ZOiiIIZgneyYad05%2FrNeKTPQAtW6lLPozxoxUg08Q8nx9mDpGzi0i4MX7GJC3WMJhcRiXwHqFVvoIwLgudUpDS7fdMQVbod3XxOsbZpPyMLWoyskGOqUBhE3cfXC7ICvdtynpvSzd%2Bn1XnitS%2F95i%2Fu36FUjbomjW91sEi2UK8TILBrYxZDm4C%2FwJ6YERLctTWcZDKaSVBqW%2BFdcLwnRIYl3GrKPKRK4eBz%2F%2FiiHUc3lpjnHLHgq6%2FqFeQaO%2Bk7Y0c5tSV9o45Zsy9wm76MgZPFvj%2FqsAUFKfPTfua3DbG3L39d2ZVe4dORuIiGfpR5mOLxASUKSzdQmKCaAN&X-Amz-Signature=c22c8a15a9e17a8562ba551062d17024264d1f91ee9955a3f0e1f1eb2a6a7a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WM3DKXQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDwuvM3m%2FYh2YbERpajFEOLuoOxjxYlHG8cnK0nsr%2FxQIgHXH3DUfLU%2BkMQkmqlH67e6RzFwEXyJFcv6E6Q7F%2FgSkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDFEcyWSlKEC6mf8nKircA4CB%2BOf5O4S1fpGkBt4P5s2%2BmudKv8vTNv2eMqtfl6XD1edpFO2iUZcyinrFNq4csW6dTBzeHwN4kXMfrNz6zNHs9STfnyUjJsUFdEBQCIXU99LRkLPGcSPFF8WmBFOfxa7jSDWwPXheW6UK3dZOB9fJrUm%2BXbImeEOBLDvq7A%2FSAMRiV2xR72LZnqvX2PRRiXPpEZuFMhV5oTn9sofrovBtAvqKoHvqO8Poc7WbXwMGI9MRupJgzz8xVR5P4RlV0X99Nwk5JPExEBVXol1mgNp%2B%2BuRVbzl%2BIp1L5DmHFpFV%2F8s2NXXsUM2LVcPyddAj7s37TZNMLGWSC805VtHJRIUQLXTFP4QATgPP6qMHFNdBl60VehS334flGil7H7EJUqdeQcPcIdNZqO5Ji%2BnyT%2BrnL%2FMIzTvXqduGtejrez9PWGoj0fkgeV7EAoqTh1JGb5E8L2ccpsx1cjO9Vx83ECtz5TyCzws6UdfyFoHSZ%2BhL1ir6I38WGap%2FU4U2CTMsdvtTAHpgbTuzyVeUqf5ZOiiIIZgneyYad05%2FrNeKTPQAtW6lLPozxoxUg08Q8nx9mDpGzi0i4MX7GJC3WMJhcRiXwHqFVvoIwLgudUpDS7fdMQVbod3XxOsbZpPyMLWoyskGOqUBhE3cfXC7ICvdtynpvSzd%2Bn1XnitS%2F95i%2Fu36FUjbomjW91sEi2UK8TILBrYxZDm4C%2FwJ6YERLctTWcZDKaSVBqW%2BFdcLwnRIYl3GrKPKRK4eBz%2F%2FiiHUc3lpjnHLHgq6%2FqFeQaO%2Bk7Y0c5tSV9o45Zsy9wm76MgZPFvj%2FqsAUFKfPTfua3DbG3L39d2ZVe4dORuIiGfpR5mOLxASUKSzdQmKCaAN&X-Amz-Signature=29e441654648af5ad654457bbd0fd71aaba36f4663d9fce498ff9470e67c73e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
