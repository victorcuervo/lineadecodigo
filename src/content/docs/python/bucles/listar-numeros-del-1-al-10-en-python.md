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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWHRZXW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFasC%2FHqBNC2Oyyi%2BdAJyly21Q%2F7dUAEgnBTWCjXBgGXAiBUG1BsvckV%2B6StVD3IBKqHJrh4Ud%2FRLHByjL%2F1RViBZir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRLVpmg7aPlI4JJOOKtwDya1CADgpSc16sje5KLhVg%2BKZfecU1cXEQmcjh3EXcdKRMOZOwE%2FQYasBO%2FmA2LbvpEJQi6A36tNanOPniHh8jhIltV2NX6dI3b3Kdz8bS%2FUsYVdxib2N5XFMDf%2FvlUOdx6jF4rmtzlEQmRGzk0Pm9cyamho8%2FRzw0l3YBWeapMlfWGgjK5XPSFZpVJmstUA7VyoZ2aqOZiKaBkofZW6I1kbQOOLhc199J1d2n9RiUqRWYRyk%2Fj9sFFip8mg5lfMdxbaNOKB7jzfxS2kuHE4hcNXguPLJs%2BL3JqSyED%2FeF3SjhUEHtSLc3RTmoBhBoqwEXh3QYyL4Nup5WB1dY88Vyfakhv4NpBBCLxtQmNBoM6J162WWuF0aQT8XD%2FcA%2BKHmcSeb%2FWu%2FzXuqSncmM785cmzFpe%2F1o1LZU1nskH532WSAwpTuRScTv2ai7kAhSK1nKYMmQvdGFOjICwPppuC90XdBSY%2F3IHCYaoLPz714fVj7AMu7%2F6TBNcmf7hrekT11FL9MTXblwgsd4SQo%2B03081hoRgl%2B4ZMBjIRPJqLt21OAc8A06qEcCRM4HGS25DxaGdIg2QWgr%2BawW0M1PWQ9qnaRHp5bXKr98vDGMlz2DUe9975X8cLOzCu0gEcwtbDJyQY6pgGwIwngxpkBKQFlZfWDZhlw1QUnVdSXV0yvaJswlWutEvhUBbE2X%2Fg9dF%2FSAZaa9qrg0fsW6gDxr2OIK7nyxxPQAopBYdct4zKwaqVbyJXGRmNYLBkMQPsQMUs4sE0QEIyxKv6oaJY6bViD6qnCaPkScUIVf8nvx6eeYjHPfKRgV3RYVN%2BAFUkOjnkkejJo1BUICuTHmDlGWwJCarFtYbI9IH4BWJAq&X-Amz-Signature=1ba79a0a7ed89ef6c7523fd31541d5f7b49843427d14502634941eb7f1038418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

