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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DQLSF2K%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFGx4ay%2F4LkdRXD3Ul5a3CKVFatruZe7JoWmzCF%2FB0zGAiAZ6wTzmgX8Zu%2BGry5%2BsEIC2qmOP3sugrr01S5iyNmdSSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMU16KeFq8%2ByOCuqQaKtwD0eWTZYBlWTBLVDMvQ1Rm5TXX4afJQ0%2BPjEP5HgRyC9qBFme4atVMzj00NXndj9y44GhGoWBTPFC8%2BnrkdVSUdr67fNQ9ZybGuU6kmIRcIjJIz4bvLJI3zQ3VOEpnRfsS04qRyJ56%2FXIf8fhPk%2F7iDD%2FNL8DVh8T0R27eHLeffR494Sc5BGWGJwjbH6ctUcT77GiEjU6R7%2BkGn4ZwGFXzbc2yb0midzeW4ASa1zKp%2FbWIn2stNUdFSZRWeHCL4nmN9zYS9tnNBnqWHXKJk87eK%2FawQ12Q0SYbUw7e8J9fPsaFWqW%2BoUY%2B8dprtY4oyXmIcSHcQ%2FT31wdEWsRCfPXN5E7d2lHBOl26rSZW5qODF4GXj%2B%2BVIYswSs6lf%2F2REM7Llun9moYs0h4LaT6F2wAIWLXg1LlsCsSEWrOULKyFkcWpjpyPKn8r948QnJcvG14TQRun06rmBJWfruKVqhwJbrN%2FihnK%2FDvp4c9WfD%2F4%2B70tjvTep7i53xMTzmMJKgAr1AHE7g6Bz03ZOUrRCtYyinzB2Z8sH6y8lhji3G4KnMD6k1ILWpmDf%2BGkpSYVWQ7%2FNM%2B8Dx5%2Fn%2BQKjjuHNtJfMwUpzFvJ%2Bvsp12FSTDcVCGa%2B25GoVkJC7eAkU98w8ZDEyQY6pgGx7zksr8EdcQVAUXGUrgnY%2B5W2xnQY1brUnjj8eILGFxTaM8xmA%2FTfhvroaqHjySl01WZIUru05VWtC%2FOXfbQLS3XAThupEXoCYSpdrBZBuw4ZOaIvvr07v8ngn6IkRuPxwFzeEoL9nnTV6Xn%2F%2BrL2u%2Fihzrgeq5WSKNyTcV1O6GEwN2yblN98My3k2iO%2BnJHSrid9OVqMNitY5ho2k9jjJ7PGvnvB&X-Amz-Signature=8b88c71b1441aaaedff70069d9d5b6528a88766e12bb170d86780eb43c46daea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

