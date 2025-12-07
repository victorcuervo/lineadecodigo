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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCOQN4YM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzxPcGhYopvvDZftCCg5eTWrerMysnyhZLyDJE9ZF7ZAiAeiop7sczJvOvPx1JhiBXsEJ%2B6KuwysygDK45P4GitqyqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw7SIdOU9U%2FrNB8qpKtwDCmaI8DBiM7nWxQrPkE8ILypx1umQ1JOhZA%2BJDCLL%2B6JV1%2FVIG4B7PYENesyfkFggOhYjvF9VMHCH6xMtixL3vpy1fop0Hjpmv%2BgYTkXuM8C4Jh1CWwoERUvEINpEosRdutHDa7qbL6i%2BptdvPSeu02a9TtkaD%2FtSfJ6sINodDDoBA4Tb5e5mIzGDz%2FUHGrurL%2Bud77xYcWzh1hN9JtJAgzgdl9iCM0D7S%2FsIpf04JYWbZoXTqsBURmUWpLiOy7NM4oshnNjud8a4xCgbnUTnlM5kS1ONm9AZSXr%2Bb3OwZttNnGjY1aSE0AlxtITMLjApOo8Nm%2FImZn3HLj6WYQatEm3zG6LHHEivEtZMTqXOz5J7h3wnZ4YSq5LNqueyUtin%2BM1OGIpqv28dxvarDGCBkjH9Y%2Ftfr5lO4I2pJ3ayvFlHecNM%2FVs5o21sES2WPLiHrpQhtbbfd0NraHo4od1D0UYyWMs79st3n7fMZmnWm92DKCJmsaoEtbAlDEnB8Gon%2FyvD%2B1Krcz4qNBkcnRxYBBTG%2BgeD2aLlo7QLsbrv2NjP5sgh%2FxclVjxQHjneg%2BWXeMzWcIIoE5pXZgICfqw8wUdBt4kt7BBl%2BYj1%2BnZQO5DiuK7kx%2By8%2FzBxHIYw9qjXyQY6pgEqedYa%2B3ZaYsnt3rxf43g5TmM3X%2F%2FyTMZ1x5TBv3ATDs2TAiZnbOO2mXmmtfH3bL%2FYb4PjfjZhi%2FOO0u3NcSu7eO4J48l9RsQX7JUVsh8e62xEY8jyxqZO7kvLvJlRwdkswDyfgT%2FZkCxLO8eSFkgvw5xZhrx6vVaHbAeaTKCPkskJb6O%2BUMMJ4zvFIaPdK3M%2FOxheUaTFBe1hQ%2Byi6Y0Ut%2FHk9LNd&X-Amz-Signature=8523f37880fdcf5baedfe1deee8c069b215af85c64573c87870b65ddbee8404d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

