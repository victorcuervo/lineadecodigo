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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H4PLVIO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T214333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGz8EfIPpJ1ROxFTAOVbXLp19JAAa0e8VcJtqo9Lq%2Fr9AiBrGf5p8LhTYhgJpYRYL2qNn%2FMpYZcoA%2B%2F5zC3xBmeUVyr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMX3wOVrAtm5cojIQ9KtwDJogzdaaEM1sm9b7%2BSGVbKL0lRKre1J8NbllLEhEjtx3v5kZkxafT6fJP5tApSuuO2FSPqeAqDcIUYTmxHby0vTphxwJAczvX%2BfOqqmSn3sKB8t61AxQsUwg0GvBkwmG%2BXITzN1WU2IXKSNBzK2l6iPuT9FKqnrORQ2O2AUJ8OdrJOUazDFLyhg6ajH2QQeB6hArbjrOil4K89xTxCXBUkeeCgI7OdjHL0KEYvVOiYclkSQSETzwBmzB4Yzx09U5IjOWfFqrQhUxG5TA5Q294f%2Fu9%2BEckv%2BsZIDsogPPbTRuUpcYPo5F0iq5%2BAilm0Q8dESjYAf5D%2BK9GkVfajfxz1vD2EyTTCAmq8eQuRY0SIoT2EeuFh9B57k5AxuwIxsaSICnNugEp3JYEZk2N71pFM9rAPq5A%2Ff2ILYxHTu56ff09%2BollV6CZrZIr8pJMVqYqsJuf63jJy%2F0iKQ65l%2Bjwvs1cWFzoISNu4R4iUcBQpKx7TBNc%2FtZI6EHF1Q8WBeFiuWA931tTgqNRrfTg9lE1OufwKGGg7zkJghdLrUp4PrN%2B8Y4D2%2FLf7npnayOp4VgPF4iN%2FBKfSMpP21DbHappu8%2BIRlbHlIHGDwCfCCl0bqG8LY9XhnANsEz%2FGCcwk4vNyQY6pgFD7FgfgbVBKoyC%2FrkiwBzpVBuvJaD19xrTuje6iaJUvbhl%2B0meTIYWddQKjE5QWQMZHaF1I64AtM3g56PhU1wOW3raLWH2gKXJIWgwVuMKe0%2Bl94zN3XaGWKjMGjiiXRFeHSHROfy5%2FD0mGy%2BaFNuqLk%2BFOR0hVabGblLxBynR7u3%2BvlGpAAJE%2Bppt9%2Bsr9MpRYv8zxDyGfySWLrblKIyfDYlLnZN6&X-Amz-Signature=25b58734d681696e6023811ee4fb8bc4a88e1985776120eb3724ceddbc350ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

