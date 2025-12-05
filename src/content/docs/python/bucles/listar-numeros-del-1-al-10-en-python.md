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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH2VPECC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T114832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoqsCEARWsPNROJgJGDKzbBboYkcBIE06beLLE8%2FWRjQIhAJf3xfr9XQSZo%2FXdqlwE21n1794EaX3N5rxnK44B7H%2BQKv8DCFoQABoMNjM3NDIzMTgzODA1IgxgsqJzWFphNoWb0aYq3AOHLk3TvjsS%2FD2XT2veR3QzZOO03QAuqmX%2FtBXF7Inkf7JsL42zdvZ54VlAlq37qxE4MwzY%2FZdNztGIWauiIO%2BAVAI%2BzZ801YWIJnTnsMMGE8Cr7PPe6%2BRnqk22X29Y1EMUEFYZoYxTybgLvUe5hb5Sns1VpXa%2Bx0RJBZ50xnWJLAzjODLcp%2BNphnCITa%2FlfwtuR0ji6d19iCfxKlepkNrLvUgCz6WWnGbn6lQ0TjQCWX0DLtoAa2ks%2FFoDGud4MaXWf3n5icI0CuLZDYurCckV52sL7zkNLe5xhCHqoMNnqAA%2BsKoh98D6ELlB7BxGzK0lUzRzjuYPjbrT1iupxiDnuxRiENiVwEU6Mvm3%2BknFR3QxCpGXgwCw9w2KwCiDYY6fTD4KZBknQ0BkzwTZrbVb1lDAOSQXTC6sJ%2BkQDc8DsMvl4GFyqqXHy54DHBfBxipYK2XMhr%2F3ybvfi0Tbcvw3SkjIeCCiCdUnH8xsRj1XYZ4EmLUNnk7diMbl6%2BZDi%2BNz%2BwkvqvYbEc71oYcKWNBxV0xR3%2BBrzOz8FJ8KH1XH37ZKZOXKIfRIua4%2BHM17RrmLudwHX2v6OR%2F%2Bn5PXyIDLfehmkBO%2FALVngkfimg0e0U05ZvJJITm0l3ivBTCKy8rJBjqkAXy4rFZ281b2uVRC1nvY0ID4QDGZmHDIX728NBm6xgVB5x1FZwtgSCNiY3k1pLE7Mujwrie%2F01znfq18WM%2BbTvsxtdH5zvMb0Jg9%2Fv453Cg14rF5M0uQLH%2BNuTOPK9YoAnt8x5UgOkt8SvuIzYm7SoGHq4izfqpjTsyRbYbOPNTjKSHPBbjNkmots5irouqO%2FypaArtJOEVAqOTUq5SZs3PzWTL0&X-Amz-Signature=6f42483b6482b838476d0060ca3c436f2b1bc9e11696d133ac44850cdc437078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

