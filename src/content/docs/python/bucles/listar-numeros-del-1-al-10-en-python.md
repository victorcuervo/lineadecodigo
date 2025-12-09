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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HPN27W%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvcddusxo%2BqWVlNZz9UggvJ7SXKOvwaeUeXYXKoOrM0gIhAKZHFYl%2BEuokdMvjRmL8OoaE6ochhIiHWxHcf3jMGb6ZKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwUjFcB5s%2FxyaEFRTwq3APEMNSqiyl7%2FpIFYTgXV4rTFhkWK3rOOW9W9pvz5c3UmJoAAHdDGb7Wuqrgiimnf2341%2Fpwvpp%2BiAxTMBotsBYExYd8yyy57j4nW7QDFFbm3Az7Hbghg1XcRE5ECAoWuJvllnOnVCdqsUXV618Lg1GecZD8EJtFzDBiYk%2B%2BQfibUyuCw2kYvmBZ47no9F5haS8AS%2FO4IwG%2ByTpBlA568STFTVSaYEcmnLRUVqaSKJVFowNt26FYDZkyNpr7F01rbBimYXnIHnY8%2FgBNGLX0f4Av3q6xt8idl8nADsvw9djf0pDsyDvxRJOpJ7Em5HihVQ3nN0NFFb3viQCKzXSM%2BB35srz2xx8otmmYLCWNm14ampZNbua1V6LEI56Rk2x%2F1jhwdkCK3070SCyN4Ne%2FfD6x76muwnwd190dJQ6PqZPKXm5fxlmhWMph8UTXMhPIo5CaoySKvx%2FEb4fJyKC4iB9b%2BJK7e9cy8sXvJovO%2Boo%2BVE662cdjsM05HCHOUhs7H%2BAAVzDC0olyWmfHIlFeRC46aDMy9v4Fn3EBPRJDFwQZ3SnbOrjd4bDc6I6bbbmUE2m8CyHZ167R%2BtBLBS5jWNoIcvCxuc91%2FfeQmkhlQ34yRo27hBds6VDlc6NYNTC2iN%2FJBjqkAda9WhXoEYa0izFDzBUyKgBQ0d9Q5qhdlf7jbCKzM6BDC7LCFh2%2FHoqEyT8Osli2DlD%2FpT%2BvuheFTM%2FYe5IAPvQ7wRhK7qzvfpB74xYp%2BJu3zhdIdPVcHHsElMJ79x4L8%2FHDV5br7MU9c2fjpRU61jbR0lQl7B3%2FGlX90TkiHCiQzMQZmVelfYVGgXth1S7%2BrdxUrpOAhERri6ufcDFtZw72%2B3JK&X-Amz-Signature=16343978c52926a2438aa359cc73612812c4ff7762e49eb8099180f9dbc06af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

