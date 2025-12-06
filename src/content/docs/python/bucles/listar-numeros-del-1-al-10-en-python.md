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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5A5F7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T160147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6yGAOmGYXvqFHrhz4lvAVpKblRYZa%2BIpFgNQUT4ByzAIhANlY%2BREuAZ3jbj0GTlaBkUOBOe%2BlSx4r%2BsGijcN6S87VKv8DCHQQABoMNjM3NDIzMTgzODA1IgyK5JmkyZrG5LAtjmQq3AOHSvBi9FRHXgHDYdC4fQltYGCO%2B2T6FtIqXiQlf0eitqfYjXFAF4p7zuRayKpvWft2wpUsfW2lWXvWbpBVykNQktcnzhJbwMxiW%2FagbsgHU%2BsGE6AWbpsLUQFXz2ek%2F2nJYmL%2Bgb8ePpAwHLO68ZDK29A6LGL79ussgMgw2OeYELWCVTeH%2FT1sGJfiu8%2FhUo5HhnaqgT60rvwq2NvjGMqnWz%2B9PgIIpIqkdJyH0nrk4gBNKlKWPPDyGUP23XFpvAMc%2FnAiCTImpJGAikjDMfsJgoYa6kTjtYxecCp64Xvx5WuQeGx2Xda8AeCiz5cWfRx1vC2QJVNCE7aPqDEMI6inzXvyukuO55hfoCwqlLis2QL59E2tDUqkUapUUv5Coo%2BD2zpY7EZFkrPagcyyjTycHsTFhGUaW2G%2B039RCu1Wuo6KUm7R%2FFrV0LkSFyitZetB7X5%2FxZTIUYuG4ZDv8KipH8FYIjPiCXhWZQ%2FVbwmEtl6gXOf16eU%2BR0qzKwnI6MxDQWNE8yoK8Hdg6Du0MxTcrFjQP8QUuUVviGSk0qZaZpXlIcyDtlC7YliAXeNBp%2FQiUmgNWcmrrRhNUeXwBpCB8nY0WtlysPbfgsEVqOeW3pz4vwzMj4lDekju2zCjptDJBjqkAbzcJQ7Gr5VZN15gB%2FLfNEV42YrRDqAQ1hqfxmvi8Ajm6taxCljbe6b2Rm1mBKmD49K8CO65RhtH%2B1HOd0KDqEhEfNwEgErxL%2BJ4wEI6VoJu1rD9STOFxXPeWUFtqpld7MuebuZxobOz2W0iuXHYNqTLEODdsM8JwXheM6Xs3E8Z0uvF1V%2FbAYb%2FH21Pt738CgRHHsqY%2BH%2FEuSBgo9kiXTsuhanO&X-Amz-Signature=994a0fd6283a6e63b81b354dcf7e4b1be7e8e36c5a690c142a098c002804d37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

