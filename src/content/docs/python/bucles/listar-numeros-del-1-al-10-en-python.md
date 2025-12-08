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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OU4BC3A%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxJt88I1OU7X8ykIySsuxILV2orAcoF767v0%2FLGs5vUAIhAPmUygJy7Y%2BkL76qppLIFkkUbiMSUVApkC%2Fu7wNd0v8yKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXxaA742RNwUBElE8q3AP5Ca8I%2F0nKxRet9RYjMUXHaAiW00%2F4d0Gol%2FVwFeueP1Zm%2Bmr4uHK33kdar3gt6lBVeKA%2BmqcUish9eW75cTanbOiClXnnD%2BqE6z1RdgY%2Bg4r5sF5nRfkuaIY3LM0FggbwMnEvdDkg%2F2RFAK1BbJt4it787nPC5kkBusWBehfhwSNYGTKdAI7Y%2FdyaBXvmU%2FqcfpdFjGI2dHv5qS5CFKgz6n%2B%2FPxqHksC2fSE5%2FDuAkjMBOkFtSj8JjRmWCxV%2B8yCMTZOsBxFt%2BNZqNizse3ScFjzxgsBbDk9gWV4sjpRIaeCNxgbOcTSV6JartSX8eEz7tjNZgLOOhOuLgYypDtxbg3ZdS1VCTbwlpOJ%2FDYNlQFKmgVz9E9y3lCZ63l6fViTlGL85rSY2Ocf8PAjrq%2FUI%2BFVymZQk%2FSrH7sqGEblc0lyxuJwfeLdKr%2B9wjCZSiGvkNVG4%2F6PXCVPNps6HagZJn4RyKsEuX1PFFJ8YFTWk79wQ%2Brk5OAH0NN7gW0OMZ%2BCIrXnbXX0XbqhWQ0jpN47UIxx6GcUxfw61w0bz5pXg3yAqhpk8uPo5eG3jOHRNmVXfdPGwp5QPMAvxHI%2BSBToeoEPgYzpsTLBWnKtftg%2BHxoF3Mo%2F8LudZ9PXqZTCk7dnJBjqkAb05TE9X%2B7jX2gaNwKSwXIdmTzkZvitjp2KFCYdx7x%2F5040vz2pRuzqAcvaB2Wm%2FIYLyy4f7dC2L9NMgNB1RjTeAdPuiV1kPmvgIWWj4MAvhP%2FY%2Bgn8wYqRCOBRwMDImqcyMmfR3T9%2FMhocZXObQLtiK8uAo6BWAbK6hjNAff9uVpuZfB4ZMnQTWFZcuEikrbso1fYw23qDPfURI0Uox%2FKYa9cu6&X-Amz-Signature=7f155db076cc4ecb77b43219bedc0681b039051a752082b8b193c1b61e4785ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

