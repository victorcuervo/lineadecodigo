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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSMPIAVR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt6o1vs9u7oF3Qh1CkVZYO%2F1aFKv927KJh7VbDGC4dGAiAj6aVXAJ6n95Axh1qqURFVkAr7hBe%2Fvzx105IRqAIVuyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMNiUYVDUuPmngrGDmKtwDVlvmOPDmJZPHLLDTuSmipiBbN0taxzuCBdWuDtsRYYboUeSlwPkT4n1w6%2BCO7hTTC5HyCG9bNgaKWmgR9N2T%2Bm7Kk5zDC7hG%2FzfrVMP1UieKgxO5ylh4ZDY0U5Hw39UkGKSXTcRuWBylWh1WfkBto09HF7WHhTDUpLLCyf00Pg9DGlsp9TNo4Hn250NMwIEvHfClpyoRvTwxtYIvH8Xd0WMyg%2BnIGza0R3BFpFNMVnozrwSejhc2hgQHUvZr9JTjCMsWZ3lxmsVqFfLyhiLg3Y3%2FOVg1NU5bvuFU2Nn2FqXQ1w%2FaH6cGncnYEC20rsWaRBkwNKMVOodooFPaIY5g5BOf9zwt%2B7u6Q8B7AfBQvMoiqoFYN8ruLCTSCbWb%2Be3KTYWXDu%2ByRUdarK%2BGDOCBy83KW9SQfRPT9Ti28MPZlEWZCNYxe9bZJsl3Ts%2BhTpe2gOdHevh0Pok8%2Ftr3n%2FdRq4WSu4QyNRqKlJVNYkJgrZajMqnny7JM634fj5l016TL0XOQbb8fzLM%2BWo9F3nyUnteCVpduYucb63Q7DtLxUrVF9KYd3l2n9K%2BQwLkvl8HuA389iFPIzEAZ%2BaeSs1RtZQ88LC6TeJ7sDqjLR1P3f9JsuJYSxXebwx8qBskwndPSyQY6pgEpGRNhodoYqbJD2%2BDqobRbaWvXcbj4HhoJ9NFVddrPM%2BgO%2B%2FXyTP3E%2ByWquKB6Qieyeq%2FuHft%2B8%2BKKL8SvfM7B2T8OKPi3T6Ti0GWHbXuz%2BVt9EAd7SEJrrJ4n48lU2y74L%2FZ9Vl%2BLrgVK5ErdZJG%2BycN8qgwIjIGq4RYSI6x62Vt9fnAwKB%2FmtEkEDEeMtILiYYcYGoWpfgLlx9AenA%2Fvai5mrNew&X-Amz-Signature=dfb9d11e7ce89b3f2f21fc596e56f5d93b48252b201e2d5076aea2ee9a70197c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

