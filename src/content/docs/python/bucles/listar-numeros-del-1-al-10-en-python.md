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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OSUKBN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICWntV4FFHjs9ZkErm0GeJTn13ReyvC5JiZs5reS9KzjAiEA%2B3Vum6k0JpDZw7TCxIE%2FpGP20BCSb1NliA3VZCW6jIgqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTUGYdbPEaqXdyB%2FCrcA12rZzx2ND7rZz9fGC4fiabFqUFCpmfIwakr3aLbAKZvuVAH96PNHP0EM3PEk5afS4GpjTYEx3RJbD20HbWHzsY8fE0eKqEvVvJ0HP87FvT0FAbFs5pqxPfyfTJEk1TbqkgKkjem5AI7CIJUpcgNBvf6A0kUZy%2FaxYJt26KKeelxSzCvx7DH2%2FcIzEFCsFhzcBh6MlGsK6M23MyJRTzA1F0hNuGiKlhXad4JX6%2FvvMbn0eynB54z%2F9g7AuN%2Byrx%2BEexrMO%2FWlGsW%2BMxikjmb9pkokjkrv7hluPUMKR5AbPogIKFK306J4vtIsxzPtSHNRFXhK6WTagXoUlh62zksjGB00vdMaBPPX%2B3IiHpbhWhCMMSyDyHvVS97dq2sG86YWzAfGGvNXJ%2BXzFaganHeYnNQ1eTY9Zck8uxIQwisiLpF4F%2BHJUWhoPLbkRlhxZaON7Ex6%2B7XJ8k5tciGMCK3h0WpQ%2FrSRdiorcLo3wUuETo%2Bk9zCxA30aphNFy5u0SXAMr%2FMPC813XhPQ3HizwsPsKpwyKBhgDr%2FWP7tQoX5G9QkjhQG2oVZnNbOOAMMhkOTfkCdbQFAUed9AqPHF4g2FaVqmD1bILLhKqohMgUxQyPyRNG4A8uty8qxBXuoMKDJ3skGOqUBJBYNWa4Cyrz4SEjqEW5iyaqYuinuxlMM0WTzXJjjiii7GAuFIdbRN%2Fz87Ay4DvmCvuSv4AWEKYylv%2Fd2vfAzPcRvSXFn9bapWMgaK1eEDDjHhjWnpDk9opP%2BstvPPJnrNgZmPyp4O%2Ftjl78%2BjX%2BVedbb%2FHSaNT%2BZGZXm8nAeAROF%2BqaS9U5HP%2BG5JnujMsaLDcLVZA3o6hbjOkBpvFGQyeJo97z%2F&X-Amz-Signature=592249930fd1a9b5996a5a08a5add7b4a0bb2e117e4aef4476826fb6fa162051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

