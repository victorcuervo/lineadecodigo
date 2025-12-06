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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ZKWG6D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJxDimHtCM7MjUaQ%2FNqN%2FzYhswNrtpXzq1h10cU8n0eAiEAzaQAnyqhhxDtc6SjBTGZ%2ByCLOhRwwpauZmW2tRIf%2B1Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGKbddM2cYaD82%2FRcCrcA9OPqrw6IsYU1fsJIZSRwTQ7vG27NdM2glk%2FC4sO3UQFFCDUKWmZX7x5cqISs4nQhTyNyhP%2BQQcN0XG2T6xBr5u9hL1T4s7gOuATANcY%2BtNLL3nx8NlNi8vOtTv%2FQJsxbyVPMbDaC%2F1xniEFtI7jwiYsjmdU%2B7X9Gm%2FSnK9mDfb7FfqeFneDmvHYOIWo3dvfOoS19mi0es7c%2B69J4Zrsp%2BbInjoGHqYDjus8QWC6M3fWlHIkCBrnFoG2LvNYKBPZv82H4UugbtiS6H%2Flc%2Bzh%2FNRnuvuHILtGF2%2Fga7Ik4V5qOULWQaEm6WR7FCBJZAsV27MRPTVsZ14Vu8RmX5d3Azc1tVaKXXeU%2BD3dhXNiKW5f9UawuKXqwUiOLwGp3KV2Whk3B9kUtP0gEqblbb5L6Jj23FYKZgj8nDOS%2FryXJmX9%2BCRiBDRJGBYAKsSsNohlEyfkU3ZAyyC07blRBg%2F4vLT4vBA2W9JcxsyN9PxC7K5Y23OypT8Cda762V82UfshEg7HHebHfNvrQc6YgDPLeGrAQ5XOCoc2Rj2eVzWQK8KcuibWSGwRq5Gw2zvYEo9gt2rBUHelx6tw8kXz7AFZYFHrQDO1zCY9%2B26J0SlM%2BG1JNhYHDmbPEDav2YNjMKam0MkGOqUBd1PP0kXL5xRgTvRksbLmEG5335CWiCNcVG%2BNetnUm4hF93l6z%2B26qwXrfh68xwrYL7O%2Ffk7qTnK25VtmEQ%2FGjtOqepUaO7W0p%2Bb0Zw7ObTtjuWxgrLLJdEH0DUw7nAvMujw%2BYxmPnjzxj7wGY68Jr4mmzGlaozRYCk5YTiMKzmUxa8KX7OfzXVGYQWHaWEvVmYJX%2BGwrHvzPj7pynq%2FWbvWGb%2BZ1&X-Amz-Signature=771fa7ad34ca6a43219afa44554e463e6a5a4ee07d6d6613756ade196dc57e30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

