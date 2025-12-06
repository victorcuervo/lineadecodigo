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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZWHPEBW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBz3z7qy7gQmBqyytW2FAbE%2BVuKhwC2c8TR%2BHFfMQH8jAiEAw3OVz5j5VMCDGpm6BP81MCr1t0fqA%2BbF8zV3rFk4ChUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDJvvKAwOZNuxM6BacCrcAwZA1IpybAOGC2c50hBthbUJJkfAebQHoW7R0CwuXBngQNa3opnT7EhO1UXohN%2BwV8dNWgtmzC23AY%2Fun%2Fyks%2F%2Fk3Cwi2CrQ6xyS1oEG9vq4AOJdJ1DSpTc90APeKaxKhV0scPcEbF3Cwwqx0hESU0PhE9%2B2aL%2BoknXtfPgvKD%2BSaLJoKA3%2FgBXQtTlJ2nQW04sU7hC50ntv1mgZo3TPD8fmajc9Tfux6fUhTVBvSz1MWfRZKFo9dpVYV04aoQBrq4%2B1t8vxMLBMkn749iDCU3wqnqL8j3CV1%2F3UiVMrCcC5%2FCaBzCq7vdr8d%2F4T%2FSeaE0JlHBguOaS6rP%2BIrEl7jJZ%2BkK172UMkG%2BTxvL3lRrqKqMX3TKVHgdKVqW10s8SA5UEf2imcXEoVfaWBHCj5%2FXtGTHF42aT%2BN9P0RDosqBQl9kO%2BoDsiWz8ODKmjWfj0gGE1zQXZwemBlHceuLwhWQasRpVhxHMpuujlKHmh6CkzKXYG7Sj2Wpy2OpW3n%2BQIdFFiO4HYFWdeHGT%2BTt6Ry%2F4sMm9YQWH6z2G6Zd1Rtjt0s3sJ9BJjDqyaFR8iMBU4G5p6ShMx%2F8D0nSZvRiqavaLugQ2jj8Rg42mDexi9U%2BfFqt%2BUNgQLUv32yJxKMJTG0ckGOqUBHrNnvVPUf2WXK6VFrBY%2BPxSi5Qh9EJNlDjmTIs6bylwEfa1pMZ9h0T5swFr%2B6eVZBKXpMr0Vg9fmUXopXqcBE9uYo6f6dq7X%2BCTVAyhkKQumjeGF6ddwJNOh2pFFUGoF1JTgr%2B6HFizbek%2BiVc3Dvvh0zcXGgUx9V0B3lJQskwsja4lMDAUbCfU6H1If3dsBcSuDWkAtoeZrHALMZlEXXH4DmzEs&X-Amz-Signature=3b9d1d6c9ad6dd59025e2f80d02874c8d08377190acb7ada4a45951e59490dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

