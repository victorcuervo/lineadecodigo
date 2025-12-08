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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRCDXMJH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T132849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpE%2BAKzUH8y8w0ZKTQMRmoa%2Bd1NnvCFxGGZOEk%2F2lyZAIhAKRRRxBM4lU%2BnOisAh7rchP872%2Fd7XrNpyOyswhxYzL5KogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxK5ir9evf7jmVTj0oq3ANIuSY6Q%2B4DfffZ2UMonbpQ1lylGQCCjTXASsApI1gOkOA4HczhlcE2lU2MHh6v228B5S5tM9LXxEvU2VPqBXmeWM6t8S6OeKQDHXIwF5ONoEXE5uGVz6qH1nRVPRGZdXIRy8d3R5mn27FHjTvguVJXQJhzsfqaktYuoW1D%2FuMjKW6RIN8tiNAEgeDYupjSZ913P1L0yuNChvAizhrl6uFM2roV7rmjf6TXNV%2FKsvL9WXZWYSt%2BErpBvaZ4s5FyZDUdkR3mk8ywSSPAm6tt03RbU3S5BX%2BdwokDDhwswkWUXFSKs6fPGr%2B999OafplpNmd8JvCZSiu7S1Vxw7DkaS64%2BskJLaHpt5hWDQYm2a4AwfNUu4ef34oZqpfzRySRSUBqk9438WPBXv3%2BhpQT4T4JWpth%2FoC7NHvu5G12sxS7Z%2BpYyjuq1t%2Bx%2FdOse4UOBYEJs8CSJaLmcsiukCQ9RxWVIDmAsV6itIy31jPMjhaTPXQYJSJmmB%2FUum3yjNaE9jJ737M3kML6vJ0CodJhseHB4GPcYaVsa9BUplDPS%2B4I5an6aGC8VtxU1BSbwO4R6BX7YsjHyxoVnc6iVN3rG3JyUCtJroiQBwK0WiDaV0%2B4HQon7xkZ4m9%2BvGkRfzDJj9vJBjqkASZPzYoOwa2ul8U%2BvS5qIiR%2Bgqr1gb3pfyUGG6zmOPyoMXWBMQHX4Zaf3kGBmE3TKxiPZM4A%2Fim9qf%2BX2zPqw5d1k3G4zACxSI2kQZ94qbWXp%2B6UWgOxdCwUCpOwX%2FiIKo7oaSfKod6wBNALpd8ss546%2BvgUziLvl54d709Fd2tjATtqdjPQa7jjyS1v1twFG2naIzkBRUwfFM1%2BQIgOLYC5sm1y&X-Amz-Signature=c434ab16625da4691886e4d2bcbd8f6f89a5daf343cbe46b3e7887dcf48ead39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

