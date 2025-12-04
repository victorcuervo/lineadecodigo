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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX6YZBWM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T165037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzP58DzXZohKzP2eawhVRbHrPXmr5C2kPkoQ1Pt7VPTAIhAM%2FlEAUP3BBt9AzzMQxQixVTg0z2VezZ2ukm%2F9yHoXnJKv8DCEkQABoMNjM3NDIzMTgzODA1IgwX12%2BWfy9M6i7JaOEq3ANFLi7eVB%2FJmCdn6RT6MxKsAdG7RCfjq0wDegoMgvkn8KVzKHtFEBSwtLyJ0t%2F8IDHdz0%2BaPvUe28QCqjme8553ysqR7rBybAYcNMfC57QamlTvSg3NRuwGdoUdQTR8CU2dCcbKe1l782czaq60F94pXhwkbQjo7b8MLrhsajwE6rOchLEL0l2RHC5YuL1pSyV%2F%2Bfqz7AYQrh3j5bTuqDZs0Ys%2BlGMe0sULU1RA6WpdpI4sbjPL9Xi8ZZTae79zLBko2VOndy3H%2FRFkYxUXFRsUdshBYgnvMLozEBdkxOCpbfFmhOAIhZXnNeNojbuWm5tRu97JpeHbQSzVKKrtytn%2FcDQT7smRCkFYe5mU%2BixTyG7IbgPDVJ9GkiPLwjgr09%2BzjjE5iFqdp7ABx5cY2mTCLEtyQIeAm9Lms5xTlK5POxLaPVpgm9S%2FTfYr7i%2FEJo6PYBnUTuEA9M%2FWOJnSp2w41EWDPK7hBy1%2FDk2h28%2BgQTL3%2BSRgpEf2jdIVtP7RkFlw5ePq1FRE1FQcNcPjLgICSgolYq0Nz1bDN0i3qyv%2BaIhnq0XNyUE%2Bdmii41%2FlW1prO%2BC0lB1T62gAnt196TAs9oThJJMBRcdn5DCQ2X2AXM1m4ZEwBf6qTW7lmzDX3MbJBjqkAVGTzldDCv7Y9ZhZprf1Kv9i%2B8ijNyEZ%2Bq95WZWdAMrf9NvXMGp1FT%2FIJqJi8tPpAYAchm%2BA%2BzwcO6StrPxeD4Fl8zqza1icd3ZQLRsidH6q8mMmZOckJUIOqmWJPzPvef8KQrLLeOczocCSfZ5QYojNpg%2BZOo47MDF0j6VXPJ%2B%2BeFIdVN%2FijCExjpqRHUIKyNk6mNasAV3kLekGcjIdPfsp%2Beb%2F&X-Amz-Signature=8df9581bdc1ccbc5ce8778dc4cded4f09db520b70a9ed7017dbee1fcbdabb68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

