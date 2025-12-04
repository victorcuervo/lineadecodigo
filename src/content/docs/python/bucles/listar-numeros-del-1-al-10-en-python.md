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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMJ4PYT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T090517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQD0e6B7SeV9Sg7rJPpzK3U%2BhOZxeMAM5xeNFJb7pvDjzgIhAPX%2FxCCs4aupqUgIBS6WW%2FRqCbrRnRATZPb2ocAjmMo9Kv8DCEEQABoMNjM3NDIzMTgzODA1IgxzpsOLA1oa%2F8VD7TYq3AOhkrKBAwgHhZ5nYz5IKzU1N6a%2FwZ%2FE2wABA0kYGPL5flLjV8Dnw48qdH1uCj2S8L%2BUIL8VUjwp19vhLBmLbazjywR8eqYiIU2DeoFYWEj4xNiEy2c%2Ftm0tGvYWdUwwBoDEACEtPlHmEDZunkJqgH8sh0MtGQMq1F15FW9VqyhbjJlSjf1lkK3p04U0oTyY7hqO1ApqeR6gfbfatuL85N4%2F%2F0p0%2Bo3IBgSGaD6odKdyGAUTa2SDNXXTLJ9h%2F%2B0jBzJNGMFTbnFKMxPMdzCa646YI0FxL6DAcTsAWRzMbqO8hjLKYJSD9cDPbJX7Gj0CPPYEWd%2BPTUhzsd1DE%2FKOP80ztJAu1Y95cKxTeawIL%2FfdEeoyr6NrSrEWqzTz1tZxquZ5ao93atgVhb72I9TPcT1lMq9TSbZ6i4zB5l17G8EKiyqAsCp8uZSiW3YsJOGUnhIwrym07vybKnA2knItyxL9iWCa9bFrq0hQccWG7ymAeXfHBKKDG49VcPCF7q2rbSOEJ54KsvWTjE2eLxOVzI3YJ0HDYSU0Of%2Fn4w4q%2FDXdjFvErSJf1WZqYdCZ7IR8fTPQ04DLn3xrKBcnlbHy6ei5ikrhiPe7psXuf0xgN0rdhg4sQ%2BGv7HVziNfe7DDyhcXJBjqkAezJ1Nc3jcpS0OYC0yhpCR60%2FSBCTRmB8tqEb6IIYh3Rr1iChraI8wU4O6MlHDK1JQD%2Bm16%2F9gGBig88GfyGoTzj7OI%2BgtEUvlA0NZlYm%2B0Iz6q1EyTH488QR8c1g82TvzeAq9I%2BImm4ub0b%2BrPQ822Cdcqou9kNNCDi66HgLydI%2FgeShlIYUsWpmWIWE41uyQXIZOBp%2FLenDJrRNVQ06R4inJzb&X-Amz-Signature=ee290ccec25cda9b4a8167b25b77063578ac94d474c30c77e8a837ea6f8597e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

