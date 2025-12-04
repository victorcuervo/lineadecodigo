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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662BT4ZKY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIAEuc%2BKM46HbwEyCXr7lu0p3Mu4OTWCBTnA8UQRxkKy0AiEAxzUeR2OABifWEODQMyWm4EqCd%2FfAPxaP3xSJC2qHcssq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDLK3fJYUSVuhmcofICrcA7VQX%2FSL3AxCNCe4bta20xI3diqebW7bNWeAnWpwdBl3o1d6di%2B%2BQPzeGEhCJLb37TE7yMfUwdd4xZT5eXaTxOPeUJCcb9SI2hTU1Xxzl72%2BiFWaPmmTyTs4q9tNvbfba0BqqT%2Fu%2B6DWD5v27jM58Bg1ge96GTiGzVxHdQsS0M59aWfoKBvfzsH5lltmsumzH3PlUmwphwUDBIcq7DU7l%2B6r948yRjSib4ZgpwWECfDOy%2Bi6YB0aJ66pgy865nSkBw8kU6vvWbB1WolnTUj9f1SeUAYPLg54cx4DUw8KQ38tyfDAE5jQh3roX7793Wu3%2FbtzDgshAPHgIAGc6sbkFnKJCEQN%2FMP%2BwSewOx%2FaKHqDAyVAjyS98rGY5%2ByKitjsVEzDFpuya8%2BhggHiS2cscBxOB9q5blMNTKEe4tL4BTPmJiTjziHaVGILb%2BigQWpuW%2BEIE00hgGRuCdKhwSapnj7P0%2Bx3RhL426cKrYQ6Xo1MUFYL9gr%2BUerFWcxWuBgntDbTRIhEbxjqG1c9mQLZMYFVKtxlhI30GApF8hr9wlK7JjmxMcDwazxQoimI4lvavwsu8LK0tq2Dw3s5xCItMbsJLW3i1Kh0N7tDVo87Nd4Sf%2Fjn%2FVwT5h8PrZ7TMODMxMkGOqUBD8EIGqL4QG2UbTdu21ZsWygK5rE5e5s7SlTTrURMsh1UFhFQ%2BJQhs5pkFHF%2Fcb1%2F8u%2BU8lSzj1Doetya2zTsy0Fc1Ax1huIe7D%2F6IKTrUE4vYxjW3myasFB82VZcaJJFVDkHD4SDqoTyKoXPWYPnoajzBgkGWWYrgZMfI5gOAmE4jKKEb7cOKVk%2B13CnS7MUayssMKZq66L6d93CINhZdedPd8Lg&X-Amz-Signature=ef4f403e7cd3d9f80b2a3781e31d70d10ad02e56d45fdb7ce4861a0953161ed7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

