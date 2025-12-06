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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUGF6NP7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T120620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyh%2BUuuS7emyycJMovMo2J%2B%2BjqABXK2nvVFm28InQE2AIgQ5cDuE3hSS29fKiOBizI4pIa1a47ZxnNenDnY9UCV5Qq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPjds%2Bvmcv%2FZL014NircA7oqR8U2zz%2FZjr88R3Xkd0MGzgQYDcEP%2F9SD2Au0f4iOiWspTcTN4aPsBTNi9QuibYaQQo%2FW2ILBYCw5Zj84t1rV2dtSEY15st%2FKA%2FLZtEuhT15g2MUkDZSwLW5dwjxBbedAxJ68ulPFHN%2FR0UGVXX%2FmfNXvEbAbjrlAh5C1TpIJUvbb2qluNZbH1FOgy5b%2FpcQN4sZQx9VGNbIiWYVFMwzV3qaRym%2BgOSn%2BtSIAKAyZqx%2B8mNjq7KaKQ3ojvQUUP%2Fdm8fGbg2wNIDmCQaIOoudpPY3RYWChpnycz3%2FBXXHVCaSR%2F7pYRssANDNyGz2R4lawRzes7Avc7yBqJCkzgUnsh19MP2hOc6ykSUvsW2NkwK7C6jllXI86fc1GmFvlNV3idqFlrNpPBlwrzvbytF0FR21EaZyq2ikXC4ucADPzrMNgT8ea6zl6fB5sSswGKwwp43TBw7jUEN5fcCDStAKaGIIESK%2FrAVFDG5JpBI0hahVMHf%2F5T56heG%2FE44a7275nj%2BeLdcNLKV%2BWJcRkTtRdDGEHtW2Js1wHD0sOA32DLM9%2BjrQpL90M3zhfG2kspA78hMhAqyXAAVQwgFC%2FYkjxs2cHh%2BXGMMybFlXuBy2LaAg%2Br3AX0FuPEf3sMIGn0MkGOqUBoayxC7Y3jX46VumjHLcwcGQLnfirze3ngiSCi%2B9eWIi%2FOeIVNKT3KDBP6xFLlfI03hbxUvjK9KyA6DAIHdKsgjj%2B7mHgMzuOrRcRDFtYQhgQfqNbxU3QnRDhvEDYZ%2BZSZMrekw5HaP6sXyd5G2L2gWBQ5Y%2BNbL019lSFPZRRDGFKmXE0rHVmMt5B8myp9OOz8ksHpgh92l3MWGGv%2BmotceKS6S7U&X-Amz-Signature=f2836fa3f268449b7522cdfbea7fc5cfc518e15eb6fee70a4ca79a55e322604f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

