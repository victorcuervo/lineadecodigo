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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R7IXP7A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTK2ulBsigurk2KClxKgchWSf9nvEYI61Ww74pHN3eIwIgDpUHEiwDsEKoAk2jjCzqUFm4mjemnqFXUZcElgMdOtsqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7EUVsa2dTj%2B0AN5SrcA7hzS8ACSPZ7Yg%2BTRBV%2FhyNhKkzOEfMia5x9r6yHm271FcTq1Ro7dtxpXKyGvvE2idzqCe3Ha%2F5cHBAQJ8HQMCUwky2CapGMyFJ9VebyhI6OEs8k0g6TIEj14ndn62HTyoSXtSpIAg46cYO0t1KpxHE4w%2B2PpwD8mNR9u3CqiF8D5FcnEB4VRhyEVi4P069UjN8nGTPz2i%2FAEMU92jddVLE0%2Fjv31EntKwjw7LlOmZiSeBYZj1p1YYOfUM5AX%2BovQ659MqMFTvcVYJtlw0Ut%2BEgW7AKRLiQ1GEYZn079JFcfjLem403UckP3nKYUeKieAMQWwGvJdbhtYz%2Fc7UJjR6eMFH2pSvsV6AtYKs3IpiJzgdW0e4mu6MN%2Fz4hot0%2FCbMbvM01CooQhU%2Bo4oJBDBz5RN9E%2Bs2iI0TEePkbpMWYEnxOrwk%2BOEs7pihv%2FO4RbCkwuCK1sWGb7UAQ8zTax22Ff96A0jqPvjLiOPpEHP7%2F477SBjIW7Feief6j9sWSI0hdTKnNhE0d0ufVCGzyIGM%2B%2Bm6sdFtUg0L%2BE0Ca5oeF%2BXE%2FR%2BFZnnmrsr5%2Bt25DuBNLUEFWguY%2B2xcwp0nNf3XsGwbJVe6KKJu9NeWeZ%2Bln%2BnUXRTrMaIDWZdmdOMI%2F90skGOqUBAy3hpEB2lScduYqQflVhrTPkGbbGw8NF3JjDp%2FmbDIH6o%2FtYvhFipkZFmL4E5pun5cAxYBif4UDk1w3bnTDQNlhemulXn74d3%2FxFmcRXTX7DUaa1twb39%2F7g1YpU1b9IzLWLlujzdqYvjCGC6i4dDRJv1SAYcbUF211eMAlWqkdDkkQG2wrN%2F5NCUP%2BYTytqAwUs6mvnga0Q7szDdhw4te2onZXP&X-Amz-Signature=d07a4dd0664f6df199e1481192cb30a06c8bb653e962b206a07052f6814c2d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

