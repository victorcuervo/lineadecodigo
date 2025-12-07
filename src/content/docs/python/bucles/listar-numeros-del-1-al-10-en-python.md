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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LEY44R5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCp%2Bnh%2BREoQcOlgtdoVLpQ%2BrIN%2BUTXeFt9u9X%2BYqfG5gQIgTiIc7GDhphFvq9Ej7xyLMDSO1k8gPD4FC%2BpAkxYLGs8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBXQumwkJ7x5RfKqoCrcAwrpIZQOKikrdGOrEaFnUDRPjx0jpDTGdpHb27JGyReDum01NYCJZOo4nSVjuaGLfolflrFHqmDwSxlylIKsyuVBE6mJSI%2BE5AcF8XRdoFTGsfczpeQ0PjSS5OnJgOB1v%2FPTJ66nm8yK4kb8Ia7QSFCTjbkPMJDD8yJChWccln74z%2FJ%2FAXA5HYJ8gB5btjf%2FpaCLGZPM3UpT2FzfcOhwyI2ZIfHx6nxKFBUsGdjIeiOccopMwRy3aJpsyHW%2BySnxnJxC6O%2FBdeY7UaTzFWB%2BdNal7k12RM5UOUu55NZvN8GGOyl%2FBPxoXtR8irQLsk5K0wgWmZwbw29yv9Nr8jmdTTv%2F6hhl9OezUkCXsB39s%2BRaor1HdOr9dWd%2FVlgnIAGZgqL5WhMVAXsXSx7nRVXrO2S%2FMGCPzQSCMfou360PPQpO%2FqV%2FzMFViemVwpv5ptt9VoiyYZLVvFN7GGYL3%2Bxp4lIXStXIYZXLQ3GBZ2Ccl5iS%2BJlqOJdI5HxSJxKzuNIbKnPnHSirsDfkvMPtu8IiYqmCgkbFwXO2TsM4TARhCxtfE8kXu7JM8rDTAYQhq8eQx%2FobDJHEMQkHKFLBkrj3Rx9qotKiTr6LsSTcitEM%2Fu%2BAWmR81D4z%2BWabZfM0MKqd1MkGOqUBYjxRJ8uZcwS5pFXvmY5yJvWjXx%2BlZBQQ%2BI3wQ2ObJzE%2B7x8cYBuOAyrILv4gjV5q5YPc3I8o7eBidqUOrOeYjCdFQL3aE1a%2BJ68TC6yC5zyONbRH7901XXCxaxKDGUUMFJ%2B8ZG%2BhIdpder%2BWpzjSOEr9ccyIQCys1jGMqcektgMLVt%2FD7shp%2BgV%2Bxgyte9FpK32Kw5iLSTreWr7DCmFO9qpYWZr5&X-Amz-Signature=0a90b6e54326000f138f8aa5487f9f74b63b07f6f0607c4e72233b873ad14243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

