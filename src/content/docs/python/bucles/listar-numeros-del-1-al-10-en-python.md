---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJNWHOG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T171750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5K7kBv%2B5QR%2B5W%2FQivYusWkscpWKkL%2FtnFsgzyQpYl%2BAIgQeUQw4psD7MCiSPO0w7FqHMnncLvF3shMevvDleWde4qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jZvX85Vr%2Fc29%2FxircA8jIGsFvyqxwwoOHK2PwC4bKrWapGeycT%2FNx7LjCu8dXAFT%2BoAJ3NsT2HwZMcAQfj8hZ0mKCDIdgRM%2BSXik9%2BgREjqb004h%2BDqeduFiawgtJ6rOVaB%2FJ3TSW2uAdLrp07HwUZxf59Yq8gjD90uBtt%2BZKD%2FgdomiStlJQBsjsFVypTzcqsdO8xx18%2B3i%2BEY8CeMeSW0AryJ1U4VVlTqVN4JTjX7x3e%2BYKdvVUEmck4AkCq%2BRA9xVd46Z7OUIm7AheVd9QbOm5FRdA7obUYt%2BRtk8AkeEpbY5X8coAXmw35L3fd%2FS1qfiG1Nxdo7FLtunONBufW2BEru5%2F7ScC4FM2kzZQxfbJov2TI9z3W%2FyjHJz8g4lTLiw44oFCgUkYwD0%2BiD3xH8sVE0OHTQoL5aUhuVMXKIlsXZtXMHqxW4YFPLnr4CC1z7c8tc3BRgZQPwp8IGX6U1wxEEWl94JcxmVSzlnb1l5diI%2BGV2Nnq8IGzGbBx2gQXBX3LWTcBMOSFDzxRlXbUfrT%2F29rmjTywUMUf4UAWPgL5ABfJKpmXm0pdW4J0ZD96raoDpAD4RZX3XspjKfdsNWHqA4jf9L%2B9xwQtLicjWm10fzV%2Fg4TKN7vZk1p48uydFijdw0SYEjuMO%2B31skGOqUB%2F%2BtPbwAa7cAzqYwv38YBIUvoQgZFRnLbPCKDZOPChQHZz4fHIJg7hPSF%2BCcLucbqlKGmr8v2hyr%2F1rxb1q%2F0IVUdFmQ%2F6tHF29wcMHQqclZascAHzxeOiGYEGmKSktPhfbg%2BmAk7FYd8ZcSR5vlqa5PdbMww6N94HwLCm3u2eE2Ecb%2BtH0mz7ws6O4TD%2F6tRzSLbYRS9TxsvodgJhc%2BV6NUa2OCW&X-Amz-Signature=8f882086be24fe7c3e0609ad3fc9b56998111ab57e10674b9591e8442f2055d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

