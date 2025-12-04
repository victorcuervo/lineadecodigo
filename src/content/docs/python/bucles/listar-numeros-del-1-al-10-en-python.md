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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHFT3USL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQDP8S1dwzihsuODZBT7bOu%2FcB0qmnlZhhJ37%2FLV4vnxigIhAMvz7P6NSPh4nUoj2emoi1zk0lkz2%2BG8bY6hbNoNQo6OKv8DCEgQABoMNjM3NDIzMTgzODA1IgzGROshy4ELuZI%2BY8Yq3AMwIJGZ3u2yznD5kkL8oVKd5YxTbZIrYdhbz9yEaF8YbGhcI2PpN%2B6CAJkACbJTEh5NbRXLXmnHvR9j9Tyi26rI4pSQYIGVTDSyq39Cu7jOsoRTgG6LfK7hZdsBLJXXWSFWEUkDpLELz6M9iI254uAGKS3YHZYqZg%2B7tpOlbu86c6HWfov%2BOokc55rbCjxX%2FqDuvi%2BuwRi6mx3Pl%2BDng%2FyU3H0Ikm8ScfV1YZndZckLLSdXUE%2B28Qk9aCo%2Blth3U%2FXGMAp27O%2FhDOYU%2B%2BRFquQ%2BUuf0TBT%2BOtkEulV%2BG4GTPypkdoknvjPHtjEg2r80AdVLDtrGEVXMGW%2BYXXe9LnlpbBsL3r345o1iOuFX8WViuscvX5GRE4VRrgDBvFb0e42Xs%2FhaokJ2NNH5lDK6OziTsnSijUDf%2F8cKZZml%2FvBcQFJZORvJNmvj3doQy6PZYnN7Bce9Fg29EvT00JBbsewKbi7%2BbNZY5ccxPUykQ6GRPISEWFIPm8ivvVmDVM0lukum2Zxd3j7XN1SyfGf%2B0%2F5Ms3IOz5%2BKi7Oes1P4Gdxs3Vy74EFyHLMf0rHVq8Ti%2FbLmbq2hLFLH3Li8qcQp387Kyg53J3rJ7ILpDJiZogxNOMJ1N5Ot0U4wmz1EtjDEvsbJBjqkAWHO67J9um1QYJ2wdDrK%2FASKTc20EScLVQ3J7A%2FiNhmJeZFC7aLk%2BNYyAjIJd8yXYrVYLeD6t%2FXAgBMkFT2lPpDZMszp70NcwHxuOaYr0MSA5skKMxAmG1BCmu6gHIfJYux%2BkOMiHqABb%2FsjEu6LQ1lZwnY9DB5tw9v%2Fpgvm9i5rHDoHONv6wAEHAUMOZ5usuI2JvzkdYS4jHTApwwvw8og9ypvH&X-Amz-Signature=b82e50bc66f1acf3e18d4518db3639a970e12193a1e4f72d504ef92fe47bd01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

