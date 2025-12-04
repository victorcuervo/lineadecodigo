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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WHJFUM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjwSMEDbJ3JbD4juTaWAZc5UqMV6Bf9NMc01PayDeSjgIge1N04KvBVVOSOFWBQkRfzmzvORIAlyCvWGpTFGMG2sIq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPIah%2B7MX5CN5XFQGSrcA%2FkGyy2iCJhKYlH9HrQ7q6wosoXn%2FesnYq%2FTHB4n673DSGNjaQJphcufV2X%2Fjup9jzzLridmbdp9LUIccS7m7Fx1baorqXMQPeDF1pq%2BqdJXOooRDWWMHIKDV1WflBnhsWWT%2Bp5DsS%2B2UsQ5JfVuRjDbnE56v0ef%2FMQGVbk%2Bjx1YoO53QyCMRlI8tFS4NNekwNRJ99YkTyDf4VHq4AZMhE2THKs4vjrOClv1kPUY2huRwLcbKoJoQ9DP6EnD3lcXcMtp1QsnhbLibEud5u2enh9nIKSuFG0NqafqDwuySXDo0SnSDuuaQElQTBQtD3qRG7c7n9%2BxsaEk1lffkFyPOd2J0%2FkZbjNJN6N2LhsmYEx%2FTj4GZRQhLY4XTRFX8invnfmdO9r%2FOjyyHC4FpQbDFSCr8Feyp0wJb5Wb%2B9KNwLYPlVRDHChUfm93tgy%2FH0fyIjgDrIaHWHU1jUaqxFhSjG6Ucl3btdy0UEO6Z%2F6%2FKhRsP3Z8wrM%2FLa3BjK7XrpwzvagG%2FYzKAOYQGWrU5HpPun%2F4eTGwhmexFMPOEyXUR15QEmlASrvs1W6cZ4poRGelwdf%2B0Q3%2BiLfsadxFDnkcoFqvcviVGVzGK2Dhznj64c3ei%2BBx8WbV556JUELCMMzcxskGOqUBle8kDAWgawe9PGOZrB5XclQwZ4tv6J5CoyoO0%2BMj%2BqVrJInmAhCgJ8d3X0VSDbQ%2FhwNudn37ZZnJv8vVMEt2hZVuxnWRT%2BtE2FO99RGPYC1n4C%2BN1OkRu0gNnR3nHZD3UbooNeV%2FffNsP5hMdPRY1DRVo%2FdJMI1liYLhakyNB%2FSRQHXTNF1zHJZEPspefg7jZC2EnzHEeO8GSh6j34G1PbDwbrzY&X-Amz-Signature=5589f5cbfd97a892cf8a055a09a0a73f56eb97fb5625a4ab40bce84a941aa164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

