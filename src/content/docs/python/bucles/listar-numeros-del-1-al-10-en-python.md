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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXQWAS6I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T234341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFADGKhfy8YXYk8OqAC3KCoqblhb77Mm5PsZOSmnzwwZAiEAzgg5NcJUtEe2EeC11EhdVKsKWZe7BhYr96ERiweUPh4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPGfrrAOfVTM3NiMASrcA%2BIL1%2FUqGw8weS0F4lE3uR%2B6nfADlKJ9I0bp03y37wn6dAjxgQMxPxJg80z0hLQS%2BLqH%2FApVrNOk6X%2FZuocIoOKYpilMao%2BEYpjHXVVU9uH9Fjyo7MQ7fG1n%2BuMiV7o0QUhnglwEPBj5CAeE9qI7ANvJoZlLfWdg0Y2pNU9%2F%2F%2FtUkBQvauL7A4f7Uypx4q6LRcNrN%2FEKtqvMyq%2FWR9YZ9AxO6aiUu4b%2BBBXd45%2BWMHM9dHqFCh%2Bi5nF23W5KIMj4XhjgEak8UrOKD9iWeDDvmxbkJnOMvEkMsm8fZkCGEYVSBxvznJg%2BNBSyw7BGNWvcbSelRLfi8zYomxwDxxCc6TDnCK%2F9Zvtl%2Bt07KjJpmqWb843sTXqBH%2FfLgK58ZchQ1XgFlhFd2of%2B937V2HzhJeEmziK42AZwIJerchf8H3FlXJRZy%2FWMc55Sx8UxN5KbbdfzRn5sv95Qs3pF7N0%2BAF2KKFWf3xhfhZhZDITaa%2FRstitlH4eA2ifM%2BYcCdiIWqca7fIhyaY1AIQCpyMStF9pmqEp4ERo1WkTCzRlh%2BpM1Gc0k9ChjufRQ%2B6TTVTfkYTpOFEpJdfMlAt%2BCZCnL6gSLEnDsHKq5EcvWadUsmTBAsJvLcOD2olAOpWSeMKCMyMkGOqUBsu0bVAbz5wt5EfntPT0c6orQExcSmhyaOQtvJ5aea5X5%2B1OmNN9Om7H8QX8O102jeO9xDtAujnv0xXdbHtDNm0zUw%2BifhAQZ2I2sJcX%2BrZ%2BXiEikn8Xy5V2hALnl48zOMcIYa%2FahMrORaUwL1EjnfHyLsMU8%2BJGC6q8ajbmi9805IX%2FdahnO2fOWgAwaXwOu8tRmhRj%2F46J%2BCgMySqfSBE17xeJ%2B&X-Amz-Signature=1c24b187f6a3730ac33563f56eac4198bae74f5149a1edbe107013ba9ca6148e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

