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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAKD54LK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFH8MfjrLXcLJfp8pm8HuqZmqZPuOmtJDJK1kv4l6l8gAiBd%2B02p9wOJIzH7WEWVHm0o3xsH4vFQgNc53ryLOqAhiyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqzSmqRJ7QcN9ri%2FKtwD90TioBIGYpCtwbOnGi1x2upNGI%2FbUFc1%2BigVU0Dqy07niZ%2Bb%2BcXD7KNQCNYfpEPoIgasWJytxHgE79hZJNTzkifAtTJrTKNKD%2BnzmZ4t8MNVQvNa%2BCkrU8pyU9LG5NUrP%2Bq6Qlqy8yjqwnkFfe7sFQXTnE%2BEg9Pwfp8%2FSY73pWONJni0YainhqO3V90hsjR2cxrFIBnH8c332LDIt9lngc9tnHOIcsrLLvWQ52YMudMs5iDuYVR7GfmKKGn%2BEFeidVCVBlxAbAgeb0NM71m3%2B1HfvNwFYZLV%2Fqim6ac3DqSYbNaRri%2Bo%2FqCF94FQRMGP0bBjVKEBO1aUv4G%2FHoyYt8Nq5XyxSz%2Bz%2Bq6zaLXHoWd6MnuxOeT01d%2BLIhwzxCX9jMP5yKlI6WqnRcHqR6B6s3bjVj6m62%2BMIVZsKhrhkZkzoM5xWsW3E0RUFrIei9KXO46v5XCncP%2FRwt4NSir50rsIZdbXVQudzDxG2z777WeYU2RXcUma6pRJieEMga3hPzvVkFk6zrTQ2iQt65PAZoD0YkTLUDFFsE0caRUV3yiijD9epJTBBTxALo7okN15Z5SRif4kQEURDzFOc3i5xhWNROE4RLgBsye27SoQfsHMvse53EtyVgKcYAQwhr3WyQY6pgGOGgAttcvrdFSUwoqxgqSskab%2F3LSwtPtVwEJzc6jzrDQL8MlSI%2B%2BlpGsfDK33qll4dIWpoqQmyB1wobuOy4MKa2KGKX2FGWm4Ggu1DKOOtJU643I6cxpEgkg91tq4q6DeZo0VkJhmr0QEH4I1%2BiZXX4fNmby9d%2BXA8VrgFhS9t3dWS9WZ479LvjRIzd1HN9F9vuY5KjB7Ni8sv5E61t89nbuQgQCu&X-Amz-Signature=e2384350e9d655e1877a4371b06d4f2be350f5c31d4d85bc91eb2935008d9887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

