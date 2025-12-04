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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUWHP26%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHCgvXXWvtxmX4R%2Baolw0yqtuDvXzalesbuBB0Q9rlBJAiEA52vIFea0EBo2B0RfIsB06BEdieZAR%2FilL5vbUVCC9Kgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNLleP6I9O8dQv0RSyrcA68V8uqvQE%2FQOu7rHjks4tv45auAAhYngqk0cI6el8LwpSEvjXeIc0LwiGgA%2Frb5uZrmuB9pdyT8z60GerZfej%2Ba278ITC8%2B6KhmkGwlVNpMzlxU3%2BonLHI7m7k1afZ%2Fl98R2Dcuiw8ZP9MVg9JMscZpQxaLl1ECdm%2Fr2MtOpElSQGFfLPh1Z8H52HgdSoCpB5oxS0lbXazBx%2Bb4EQ8iEY9qXrRZNZZjG7hL%2FFs%2FHvbiHWFzaDKDIHW58Hz4ZLhPWyCAhqxIvRw6CQ9a54oulp9KIBdd3WKv1pGn%2B7OW9%2BFBRAsAVl3dCZpph%2BfxVxfmxj5Vc%2BcKYTzN0pVBY%2Frew3pmzFchKg2u6xiZKOKo5UASZBRXfSRnmA%2FCWowME7JTYz2MHMN%2BJ8vFY%2BmzBkGni331PuJtVCXwKbb1nY7YlaU1NxoUIbMYVrQ%2FO1kRdQpcZZVK8c%2B%2FPuHdXOi9dB7AR4cpiuOmZ0SwhpTErfrklkRGt6tcUpGDhihoER%2FJ6z9%2FdG006HOwsd6tTIpZ4rMbRMC4gvOe7hGsRD7KG8nPDvNJMu9Y6L%2FT38EwdDPI%2FOoq%2FIf7tVDduVoyWEOxE%2BokYM9Zax3gXKjEcr0vzz4DeXahlb9%2FbpgLFbbTYBurMLqFxckGOqUBQ7COeV3ZitNUTLdlEbqUX3YgKgKTYcLe5NFYGgEUWhOpOpWwcait69TUFHfbuRQ48cwxNGcBOw7RzhbDD9DgWEIkCkt1v5F5MH5XFz9IiUjKdcsAqkY7r6KJdVUqSIXeqEAGfK7nfw0cyxVMRb7OPdGQAr4kbN0Fd5dfYsGrdXJw%2FogXzHKgrg10%2F4gtraT2q7j%2BfHT2ip%2FB4Hq4mxBVEKNDBuGa&X-Amz-Signature=91b312e6f426c14718c9c419cbcf2901d947021792c77e61a8ab7d701fd7a7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

