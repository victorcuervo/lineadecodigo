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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJYOLTQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5u68aHubHJxKuXna0LRDsx9gJ5QdkDT6lXKA6ZwixaAIgV8CU9KI%2Btn7Fo0F8HllsYI28hUQJo8m430IbPu4LBfsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMIBNuOzeF8gC4OiQyrcA7NZC3DVQS95H%2BVEQc7NBir13OZNn9tfoEiWczmgyAn1wrkStDQzn9D58k%2BCXVrDjOOxYn9l3nx0BK5%2Fz2mO9bc%2FzMMdjcUtTb9usVGoPUZv3E1zi7DHspKvZmJUeA5dyYfOrCmJznQ866bPk66WqnQ8Mx8PdQGSbmSi4KzNzeOUZn178pJjsDjdfYCD0qu1bGUgzCy%2FvPXHfe8CSVi40onAsCRP5VOExlADivpuqyAD5mMfdYcknBtJJjNAgPJM7YaGzgA1CW77dOxTpvdqgQJSZPnPP7GRuRUX%2FOqh056zPrTu%2Bd8kT9eaRRe4jwLBd8ZMlFhkYR9BL%2BN5%2BV7ZBR9XN6PETtP8iBasxUXtsob5FOVOSnMiVtdlYZKWiOKeT8BpfHrQRUzsASNPWLIO%2BLHydMv7Xr2g%2F5xBJhI6yHotPuheeTfWu2EJ%2FIYmihiazGlygOqe0EyQMPTRCt6RDZf6Is%2BHI5jXQm8crKPqADWhsVqCcIYwB7flCbV8GoSi1q39gfhPrKddLhrQa1PtpG4F37FUTVIA5N%2F%2Bq1IlzOMdQ5YrtuI99jzTWOA5sU4Y6CKt4olQr6WzzcDFjq0XVf%2FA60sqBsruiqRAd3itmNvqRidb9w8sOIUmXAPMMIKMyMkGOqUB5NaI6Fh%2FicGcpQZDgfo1BoVOmJ4opop0evNNvfYPOWMX%2FAND4JepR1w7akARD8cYp3v9dbrsq23HeLc1lWNE0%2FYfQ%2BAFoo7ZU9l02U4jPwEEcEorxbyRm7hAqch3Um0RcQAx74WjOxAP9%2FhghsiaH1UNMKxs64unqgYY76mSTOYQvj%2FlXozfnFh8aaPbVpf%2F%2B4LQNAERuy4ZmWZeC%2Bli4l8wnwjc&X-Amz-Signature=f1ff45c6b6a09f13998a407050327ff3445a67824d392101ef08f0678c5a7777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

