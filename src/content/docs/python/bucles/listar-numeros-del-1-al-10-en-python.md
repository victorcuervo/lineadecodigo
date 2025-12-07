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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ATHKUZG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T095226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYMlrcO25Qfq5UcJqNfZYiFtcueAb%2BILv9plgdSVDVgQIgS1m9n1EiJyFZZyySleua1UiWa9gN%2BO5msP5D%2Fu1BdQkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4BCyVQfkNOIsSdKyrcA31yUrYPOUsyDdkLtbSR6SUbq7iRluI1K8APvQemNys1C5iv%2F4LObTdQ1uSIqV2BCG6pthXcdFr8o0w1uR%2F8n0h%2B81LbIrb18fTfDSrGJKLGPVf%2B70TCvl7Cwle%2FwJRykmspSn7c9XF%2Br2f3%2Bm3DB7sdlKPqQ%2B2qsRVRZZnNchTctKRKxcBZTGEEIqQLUbnD60VH%2FVptnKRSiZcibGTF0toVi%2BQeLGd%2FPTQ%2FhF41CTPPRUp0tujbmEioZkHebe0W64OJmLlYfCNOGdWXpqdwgPk3MLTdAJ7nn7d%2BAgmv%2Fep1e7zUFHW3ZWmc6q2NX9g4UJt3PV8TcylJ993A4op3%2FMmDrguviGjzTD%2FvuKje8vYr0EnNKPbQNG8NmhsjoQXRq%2B1QlDtg9tGlwbJoTmbtivFiBsWNxN9dObhgt93%2BL8dW6OTEmcc9xvxhMT8uDx6VelqhBRg2RcXgkvZIGC1D%2FY9Z4zCMwSmFi%2BzUi%2FhzYLB%2B54xxhTRzvWuRjqvDtpTkllxpIqg2RhaXL9Nrv%2FjRVNINRPkQHxz1NYomGyWWyyGRIg6IDO1qnxtuJelJOU98%2FHsVRdLZo9r%2Fh6bI741msXgm%2BohlJb9kbR9r1e6y6bUsfZUoHne3ICOIqkSWMKOa1ckGOqUB91C266O%2BD4%2BL4qcHewNlMAC7oJbtHxdl9XTB0QKoQxEsIpO%2BiIqWnOTw5QMvKb2XUivkzv0j34vSlUhfoKLf4UcjelaJrAdebLRbMcWtd1rZ%2F%2BZSNqm9xkZM5%2FUoNSxsMG0xdKDJo9RnJfrCWeFkjvohPdrDd2JHhYeHSs7i7CUS%2BStAOkwNcA5sLywwDsRayBCj0w3Wt2NMWdIVHq%2FJUkinLA0B&X-Amz-Signature=78777b3e2fe7ebf79faa28be3a2c907f704a60442edf62682bc3e465535e4fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

