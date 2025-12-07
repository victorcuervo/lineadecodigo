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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI4MWFHV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T052741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYdDIZbOI5yRNq3Lj3Y73fJF0W4aTpCmlm8iOWr5LHBAiBPE%2BFs%2FxVRZKpQmpFqWeH0XPw0o%2FBRKCp39uDbUtVnbCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcJGk3baYTmHa6Q2xKtwDvJw4s0eiVWhT7rJUGUjkkD16FSvStLqPt7UKDtnNQJzbaysem8aFh8IWKl4EfVtLBEESQO%2F3r2IsMERxN%2BiGlM%2FAVLZ2eMHN1HXx%2FQVFAH49e0xp%2Fu3SgqkEdjgYI235SG8X30a7322lx8%2BJ4oZXOc3wLZZX7j9i2neaTAFtURd5uqk9K7WHKBeqzCWOAyzp2ufY2Ct1r5OlPipb55ZM2AQzadSnFicNYxj1HyAoAe05KNOqG%2BxWTXn4MNoMk4kTf1EhJyIsEiJo4UyfbB5rprOdyO%2BDkdk5vRamEX7HNVPyyfle3HbAVLSbkGdhrlJQtmQaH1nPnVQvLMzxPVCB6NfBp%2FEN4ALAjsd%2FUtVzya%2Bw2N2%2FnDWRzsswP9N4ivFRtYjrT80WyE07lh03sHZBLRq0wf2%2FlbmYYZ92GhTYOlOqb2mVb%2FIl1xjqSYo0wlMTo6Hypz6%2BWJKANQvYo8S1j0dqjzPC6A6Sms0o9GZ3msBqCyzHnDg7PComaOcP%2Bp6XtMytWNgwCG36sbHtxkcKoktDLEPHDOdd6pC2skN8j3OwBn2EZaaCIKjvjsjOJ4RCRfwtQcXdnsjmOQv4QkAgCLl4OLqHl1gb5aTkrBa91N5IYXJOX0ovZ7HNkKkw3f3SyQY6pgGKfEff8SRmfHzZw2%2BqAi%2F5N8t5PxE2wP9K5kOcIdVl5ez4COGxeMIut%2F%2BswGi3XOzORRQHrlP5xjtRg6PNadX88TuncgZjcs4%2Ft5puVSQFVAGD6EFROSg961KC8rlfMMMeJiu55HT%2BcKvOYrqk9nffJOMnT%2Fp87LdVFSb7%2FrQYHssg7nDXsCT2vrhWoVYVwBqBmJzT4MUyncgXroS0NHcHhpcQ0br3&X-Amz-Signature=3bbf6e2fe2bfc1ee91ac621f2a6b5e27dd83003b741ed8204604f385326eb43f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

