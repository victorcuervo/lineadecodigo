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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HCQ6SHX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T074632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJeeb5DQ01KgXYY2v3rMnt1vrR%2BdekjYLuwoRniTvhOgIhAM5%2Bkf6WsH%2BoelZw8LjLcTOotg%2FRhGToDt0iWl%2F%2FDR5VKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igya21k4e3uRuaildfAq3AMl6hs98PpbyIYPOfSXAK%2BfdbSHCxt8ncbayWm%2FxSXNlHDLmZYeHrVcpPV8eYMAEn%2Fx84nG0nATgLqPNRVK3bUhEtuAvw%2B934tBczHIWYkm06xJO0p3DJ%2FNJdUXiSyPtXLT63Y0g4zZkl048AjdwJlRW%2Be7qVCRSPQf7WMXY77oMDl579hrhhuRzkeexcmAqzRWTg6TUboetXNp%2B0fXt0DTvXmIOxDfl9HYZwzQm3MuF9xGFgUJ6F2IwPePjG8vnl4oJvdCX30QqI%2BhwkXIIkh8f3UBUcK%2F%2BTjmTf7iV39UYAsRpOIDj6mGiv4oj4icvKImizHFl%2Fp%2FDc8rvLBktF6cSRyMVt4cX5mv6JMQQuaPIZmsP50Lq6g0ow3DCIJCrfPm4tvv9KrRBZF94Yjp0zMJuFetPFCvp1DA%2BLduR%2F%2FGJmy5pK4VhMdkMI%2BRtuD7OLmDJA9NhKKHJkaM8c0KSHPvEfIb2LhNlQIruxIMhEB5JrTgHekwb7aQPuu2MUN5YLqG8TzTVg35MURawb8BEYBYHaJH7P28Q6Pgb2mmLsqlQ%2FH7HBo5Bn2gVytuoMOaQqg4c5KeMK3uv1tN63E4M8hg%2BLcVrailHhnJYCq%2BLgxbAqdhwa%2FVXy00F27b%2BTDHpd%2FJBjqkAVVOW3O%2BXF7nKXdr3lFP6oEbn9wqRm%2FDRI%2Fk5JSzqFIWMzs0pogvFZqiIIHhxZ3IdKba8Dh0TTlFB78DcBawIkzAHeJN2ZkAZi0Bvq4qvp8gkKWwbIX6Zkjh5GZ6nhp1pVk0EGks0h6pV6Fo9q3s8x461IXwFcjUxejsjGlCmn202rBWQUNLolSYtMqYI6Egcda1X%2F1tMsmsXtdwkiRo9ogNWm0O&X-Amz-Signature=f6917dd75c985d347bdc387371959800899b2547519f7b8b0685b4d7bc0db3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

