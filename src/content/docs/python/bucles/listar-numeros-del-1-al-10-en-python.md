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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTPIEKG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGCWbVuBc%2B37nBNKAL5L%2FDXfSf0FhIzTzhaHfpMz54foAiBlu2OwJlAWJt2aq%2FnuIMhqJV8la5gWJiU7%2FmM1N4rLLyr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMT6tyNNhnGdS2BSWxKtwDYKRQt6f8KtCXa6SizspY9AehhOE6OjPJNNf0xLwM7oXTXqhrR7fzkBXfb028MHa%2B0kcXUIy8l5Qrh7u5hdqyVoLZphZuenfDjrMxIVGlT6Hoz3sUrn08IqiKHQTWgNCWz%2F0%2FsKQyanPhwvMvrYAUUBOVjlMc9QHxsXXAZo3IaE0BupIR1YjfY8Ih5%2Boo%2FnCBKQIpsm993dpnnAu4t7nZSkoMPokAOTf0J8ooU9pSQ0g2sJ7tBOZLWpHikVFamFTh5jxk9mlqOZaCZMaIys5Wdxo3bhMzR7XNhkWb%2F9xZ5MI6ebB4TDB32dnCtNCE1LRByeeBUoKLWi8W3NjKzYyDYSun1p80iy%2BMwvVarf8AQUo7qJH52aawK9h%2BCT898httfwwRVtxKqlLqyXCkpeYiOa5BaUc05LTkwbqbieSxKFx2k%2FIaCVmnBTY7H4m2tz%2FDvEorlfXa3RF6ntMb04WMAtlaLl3%2FjHxK%2B%2BP8ZuVUoE6WnyflWGnf0cX8Hf65qY8cx6BGw4kh1Dmnh9XK9B0KfmfpfpmHwMzEErh9Uc8Vj1mR52Qyg1c9ShoSi21Orz7NrnNmXYyXy0l6jlrbbo3CpSl%2Be15spIRiVXRv5MvvWNMtmUZ0dCMM1O41NFIwsfjCyQY6pgEU9CXQf3CgFnphyHWavDMK%2Fc%2BmE3w9Csw6G%2BhPgXKNtBTjw8EO2IvNlJvLWhVbnpX5%2FjR%2BppN%2F8%2FrGCZSke2jP9JMfvIqq68j8y9L8CRssA4KXQCLKZU5PgdcpsZ20fAlhS9cA5S%2BoMaMUpSP%2FwaJ1Q1XT4ZYnlm636lvQlw4frSRO3ofDr6bc0omSKE8BV9hoRLTGoMxoQF7rOdsZYlbBFhNWRa0E&X-Amz-Signature=ca81f3f9ed017eba84be9251dc9e1b7fdb6465859db314b7e4f43f6885613304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

