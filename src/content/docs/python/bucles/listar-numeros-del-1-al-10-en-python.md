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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLRUV4HR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1g5ZN8WswO%2BPavwayhWPrqEll0uzPTfwYKdugfVgvuAIhALIDLI5sE5WrfUffm77C1Sl4%2FT8yadvZd%2FG6MPpl6XCjKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz7hu%2F1B6ZW5TkrEFgq3AM7fQ2rD0TyaM13T%2FcDlNOOxrJGDnPctoSaTgO%2F5iwBJ22%2B2wj4We7UTtFkovunkdNLpF9K7bo1hCyNaAvXxZOnOEqhZynjtJjyaSNrXxkFgKuRO22zWkX085GqTCkzAqIC113nBfcfFuAk0hCE2AkXcguu6thVWcYVm8x4DlOC2FMmGkJgg1PzDdT8HonzMpgX6yZTsHdsZ3ZQuwWGBhgH8XVZS2tjhAQ5BbCxbqDfb%2FZ7Qv42roVdw9xzcjlGsReUH%2FcaCdjPb6awvjOsRZqeCpeTtkE5OBxDv%2BrZiEAUCVWkROovqE3U4bHTPjUJuW7loKYEBWv63uGvm8DvxR5DRJ6%2BIhQhW4nT7Eb1IMWfNMj68KeeQQD6L71s8aYi4wQFh3%2B7dlrYirpntAyM4C5fhZyp0piHHxx9XFwOXTH2Les2%2FLWBGlMkZis9gss%2BfVFnt5YaD4TsAZAbO87ajTt9a3904L7RpD8SIib9RJ8JF27Kx5JGtwKA07w3LuiVHaSkg6Zu2w7Cezbm0aHsxsr%2B4Ly3QOU4VbSwGxKUJS9H%2Bdyfw8jUeKGXY0vpM%2Fdjrb6Fs9B8vdo0xa8uPf7AovlrGP7KE1REzsxDJatH4wEqhPCqvz69t%2BJJ%2FuKjYzCRxd%2FJBjqkAcek6Wcd0OJhU1W8j70nkE276hRyKdAdlBnc%2FibrwiM%2Fqakm4i6NqrFwXgPp3V7YECiu1mIQ0B%2BBp7H5qY4wCpEvQBFuOzz2jTJw4nizhxq0mJiShbW1SFtbAxV2N53FwpM0JNpGNz3ZLNaQDR65SGEpSFQtTjdGOZTWSZyqI32Oip2FpSbFOWCX3L4WapUFOFSvTtN3UQjMZz9EtMpoBSte8f8d&X-Amz-Signature=bf4935226b389f0e2811bd695c1c11a8327d12cb755fb7aaf48c2682968cad91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

