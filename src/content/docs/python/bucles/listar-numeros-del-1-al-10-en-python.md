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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOZRWULB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDq8Fo41GO2hUr499oT9V3hxy6VW%2F3DQjDNqKXTe0K1sQIhAODAH0swf8dP8fKmXW4PYaVcoWBrtA%2Fd0qM9x02QjZlKKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwscmr4oY9aqh3Y2FIq3AMtMiywJB58jMgxLE3fb7OPxp7OIu5Qh%2FeJolemhBbNNaE%2FgC9ap4iT5%2Fo8JcjaQRR6ryloL8M1C6cgiwSA9HDJFv3llVWLVBmTvq6CKmV8ydRaNG1RSv0bxoTH67fabNmyib4TD7AYsFaS%2FT0VKXwQyCGINymxvxbdy%2F8O1NIey%2FxnbDaGS80stLlxKuf9bMDd9YsIL4GBQe5eVKqWm9IeNXbrltNQElCLkt2wGGZa3zXmB4Sp0nQXbBR1EVjLGUL1PvGHulmB5Eae8TRLCT5S%2B7c1jQDCrUWjIpB468LCipb4fDZ8v7%2FO30F1bW82949sryY8So%2BBWzVmGfu8%2FnMhJr2TR9dq7l4Ncgwmi%2F4D%2Bs8c7DKS61Eu5Gygp12KywAk52zJLqeUHfxhCcD9suBo5Z3XEb%2FML%2FU57kgxawQThhZweIYaAkejN3u59V%2FfPS6iFy7luyafKQ9TryG%2B5M2BcABh9gHHjfyLg0JmG8t47pvrAADMWby0PAG6%2BhBO6bVXO5sudG0I8cbj%2BtW5lTjHrmDCFiElOdAMt4UlizusHjmLSZ1DJaNMDQxwJWrfXeieaRiiURyVJRa%2FGIaCnjsyAPK%2FddpUmymYp7vPR1afsMj6GKb%2FW6LCllixrjDmvdbJBjqkATgrj15Xx8kvy%2B8ihnPZA%2FT1DHpGX8zPNul3hiUt9Xr6vzhMuqpnIowEmxp%2BaWa54sUimGNG9gMh%2Bbh7%2BlNglZziDJjGGwVtM5kGplow%2FOWCPhHOTQ8SjkOgz2SCUlGEKYiKVkMjei8tieFMjOQhDp09ZPO%2F3Tga7M7sCJY3Wcvd2jZyZOakbdIk3NHgvcrKg190I24QauT98lXuGjCYSEUaRpn5&X-Amz-Signature=1fc3379213aa1ead35c1a60649e421ccd07721ca9e68e597062dc7bd7f013615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

