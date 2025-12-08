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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622YGXORL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfzrTltF%2Fggwi7QdGZKIL5VDKP7YC%2F2DOjxiK3F4OwAwIhAJyfovdxDMhS5HrvNJOs2yeoEiXENSPTbtHAMqUKQaX1KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBYh9TFzZf7yDT7cwq3AOo4Dpcak402cpoXDVGzkAA4WSRSudlqLeFNLwsspZV65oI5zNNBFPSFV8joJqsDTnU9ODZqyO%2Bly39XLoEnGoGO1VWG%2Fty7oNo6qTV1YfXNVE6JK%2Fi%2FsNYxSup9DAdsCueSsa5ErlgULJvUy5nj3MANqJs1F86D1GntTUg4Axgx4mSke%2B9taj%2BFeuCRjkAbZOcsHhkBzhnlksD5rGXOjwaSIfROTbvfR7aGfV5j3TCGmCLYko6bLiNzVDd3sbOreU%2BztkuzvhvuV571ocZfosxqkdks76xYehrLrxWQDjomtPtoFUoAYd2mO%2B6Wpqxu3JgbnHi0aUZGA%2FilqmOMg%2B5nazDI4%2FWaqPGy3FPua0scypN4b5OS0dOz1FaGcVnem%2FnV%2FAGrKMWjH46DK9gEZHc1jX4LHX2njnGkCjEL8P6w0kJO6HMv9Y07hfM3zyNwqYSusgZB%2B%2F2gEzexQILhL7buhRl%2BKNO5mfHfbZoN5KPojq1ISNnkbnYz0grkwXhAxOVMSQhjqCmIn4xaNUv5bS8%2BjYrdTvz8I3o4XTvssS%2B%2Bi7sv0%2Bo5njKJP82Ii0sh9VKHHn%2B7cofNaItvyoS4O8Oo49DyDYuXFGSuPO%2BXxefqUHrgSJmmVOLYtiexjCA89rJBjqkATAf7uu%2Bm4OFMsaObxC%2BxLeDoLPWURgtXqPBUtNjgOuNPAfp1l%2BwJxTc%2FXKbLs%2BMY7bGnAlOK9PY1bz5NryDJ4lAKaFt%2Ffk%2FdN9OL1LcYnV2UzNJJMgq0C6U%2BJvM2MFendVuZUk2SclcXjHpxkS6xYE9a5hYO149XSY07p3f40UvSfllXIfB8SXvnexBSPiU1VUfVW0nzSkXc7ELDHNZKliG8GO0&X-Amz-Signature=4b7c14c9c0f30461eca019ee1aeba005b3599a030b46a34ec1cca610b7eb8550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

