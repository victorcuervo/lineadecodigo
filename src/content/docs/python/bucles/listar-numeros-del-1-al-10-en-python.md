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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663VNQGPI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWFdNLlpFc0dHQB8BthLDclPydTsjwhLgphkzL7v9RcwIhALk4Jad9qR%2F9V2TlulLY6SWUSfAW0R7ubG%2FL8WwM1BWqKv8DCHoQABoMNjM3NDIzMTgzODA1IgwLvpwvo3jpGxC5g8oq3AO8AorpHU%2BZwFnV7BK%2FYCnhWwFabjB%2Fyz6P0OvuUz%2BxLrTUM4Km1BSsNsbhzYOmli90vwsixEINBGI4yKYM7HdTlecIFgsQNMxYJ6YSWuy2CyMcayoJEVMBB1L20t6t9Ika%2BCeLbaLDrjZMQwsyv48uCujiS15gZnR1acl%2BvUi%2F3nrKyycCigEm2%2BHOIUHkRmmlbSpOyutsM2DuIhqyzXIXEAzzfT7u%2BS6WvoIv9faoNh1DzHrk0jrKdIE9aplP08VL5sbG6lfYthPUt02WN2eTaKYmQT2Q%2FcknIHjWkFG8YYrdwSY2sYdwXT%2BtHLOVe7yjmHDCxkNs02gflwzwSlX%2FdCvphEl0zZpn4%2FMFsAGZVk12XY%2FZ9SCGoVXHFNnLBgHm5bXmeGKwz%2BJ06Lv6wF8qXQUbBx3u5uxK6Xhipx3lwu2HbKXm%2FpTcot8Q6cE%2FKe6mi%2BEPLIThRdejvKiyebm9Y6cgJO0TrUvGi7n970EeAJUSfQz06396MW35AuTt%2F1nTkaQo5cqvfaQl3h6CkCh52NEK7p58q9xOYXibtgYADAc7Qutgsi8zraDp%2BlQg1sO8w%2BiqPoaMOefJj7NbnvraXJ9wWyxLOZK4e6zwVoI6xBQqsWv%2Bvk3egv0LUDDPzNHJBjqkAdVvS3r%2BkBm2jvfeg%2FlBKIlKxPflBl1gX%2F4I3T7WlKww4iKy7jwu17FapAtzCOpCJq8vZNAztnJumYDgssdvNSopqiRuDVbU6zfeKsuEbybRvlhNLHzRDzKcidAkmULHZ6bjXxFHMsmBKKMk3%2FKU5C8IG48VsUjjrpjnvw8nPshPZhEsCmqhmIVBpbquOLs5RS5fLEgHG4BK%2BdXK%2Bu3%2BOHJE2yBi&X-Amz-Signature=ad6d0973c51c5244c377a58bbecf94416c85f044fcb3b560c2dbc0d5888c5009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

