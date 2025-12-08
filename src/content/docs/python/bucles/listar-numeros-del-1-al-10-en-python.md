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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653L2WSAD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T070029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgKsDKnUvDjAkCZvIWQw%2BSpxr%2B7VOo1%2Fy00FfPnJfZBAiAg9iHj2L7ghXHbrCEc3fmbHkBagZB4ryGzxH5MFlgd8CqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkjecEXJw2gN4NFO1KtwD0jlFY%2FpEhll3eM3xHu86NXAky96eK69zB4tEAnEGwiAkmsfpHj8ZSH7GOJH8NaBYdWrvVyfyo60tw%2BrueMCpnEvMe%2Bpx%2ByMkh%2FS8fnhvj7%2F53vq6A0l4jpoyG70frKnIM24wW%2F3IEEdIYya5zOtZJYbL41ggZ5YqbrXz53m48DXp61eJCYbrjngQpwF2Ds8ReLmYZSqGBqyQKtGdgjqxwUHHnWkE1JBlW6Kx04aDB36x0cN5jAL%2FnTA6W1%2B%2FqYJCcXjgNOK7HWoRVSOuZsteuyRk1Lh8YIm1k6WJzB%2FqXlx7heK7x2mx4AhXldyqZk808rxu1dVNNYl0rn4Sk9nt9bq3x4WAqcuzvi3PNnm4ZSGkm0YWHTFymJyvSMeZ2YD8zdbjrd2%2FE158Ndao7liiUSRRqJbJwgUrBmz5w%2BFEyrRPw126lnbWOzG4mXe3hHTPM0UA5hOPp0bhwlxum3wz8osxCwaN17Sp9%2FTk3cg5Wgp5cmcRy9%2FZcNp0w84C091K31I4E3gWDQTXvNwqwuyBcZ4mEpt7DhwjYUEq1Gd3TH%2Fbk5vnJ%2FhDXQq34Smyfn23bv7ATdstxJpjSVvncVkEx5hLpQsG9CPEqDxJGS8%2BPkR3ucfmIQocOX0yXGcwvO3ZyQY6pgG4VTF%2FT%2FgFN4QfG%2FXUBU0X4zWCZpM%2BmmCuHLPctQWpDjdDqjs%2FQWBGK12i6QPCNhsloPHG75LFrdm%2F8%2BZfNMFVmWMMQYKNh8P4vman9eRY2FTK%2B531JIlWsePSuKdCAqR%2B9WXs8irmmCwuxyu6Ps63f67mkAh8SHIdMasNCoTtK6XzhQz13%2B5prt7iLu4AEH2iZvLrnjo%2FDJ2zedMlLRYkwKVT%2BGLd&X-Amz-Signature=348acff8ca0ae612708e489cc1da3ace5e773ef0ce01cb624b022cd619898d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

