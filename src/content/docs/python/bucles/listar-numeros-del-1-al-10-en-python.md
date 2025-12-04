---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6FSJJWX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fqceba3uHcMntmDTcFuCT7ryKCIbG8nyIujQj7WO7rAiBY58ipxOH8xn%2BxD85aWrHrKVioP6xrRkKNYzFMdmsRSSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMMRxVRhY31PsarWmIKtwDf5dGa0RPP%2FR1swM4Isgszq1y0x5KTndj8jrLfsOxumcyWk6L0ym6BYhhTtpPBzdU0G4Sb8fN2wLp9ahWFkIDzRmVZMCRK%2BS857mZrz8K8bgqrGSCLCnQo%2BdnHFLvoxTroyPjpF%2FvT%2BRHQNqxtgKaaLQJvSvo0oLhhSnpB%2Bohvo3jXsDgNcp%2BB0Eto8YZ4z%2F6YQcwfWdaZvsAh3hPxgQB4pzhRFZjadJvsY9W33DKvmM%2F7FPXOUqDMot%2FsgEYcbSblgWDMN845rLupVi8fPgr2azZUuo093ojRKX1YHiRb90eNJKLyX8rvS6h8SgLgf8Du%2BILL9uWzTe9In2jylh11aru9LtMviPwj0przLnwDUktdJpud1oEv2afEfLm270VEe74bP%2BZixftD%2BqINBueARyG7nI3MQEYcF9gaKS%2B%2B9dTr1%2Fc3Io1nKfoT5jSIor5dyVXBeCcL9SnaJ980xelbpFmMNzHi%2FzHKpakhSbSak8Jim%2BRtFaRqW8JUFytwSe8Ab8C1i5Kr4HR0KsjkUl47S0g7W4NezLKNetaEJicpsInxU3l3EnhN4adWCd6QpFJo6xpZa3VoZqKXfw4t4icWmzUsrcFaVTQwvjg1%2BFeHnl%2BysBd%2F5WT5UQa0fEwzfrGyQY6pgF%2FNqpmaQBlUAb756Ipu%2B3Qy%2Fpb8RS3k0R8uO8j2arsThjssXWQBfvNFTT1GP2tc5N%2BgJQ1pBy%2FF074Pr1XCsUnRtEI2GXS%2BxWjjWEIVPmydKlssv2N%2BwQPsv9RreQidK9guFChRzI2WK9%2Fom5CJg1Y5n5TLx72QI%2Ftvk762aTPFbzeIQ3sKdQdxqx6KpHzrOMzjLW0gmOvCURiULkX9%2FknF8ESKTyU&X-Amz-Signature=4317cc73705ee35a28a77d1383431426472d4fcd3f9caf4cbd01f56f4c73d1b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

