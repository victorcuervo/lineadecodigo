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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZFHM62K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T130459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUFeOb5TntR%2FI4ngqZqyvTCDkRBwnxXKJNZHG%2Ft9zwZgIgRiwffQUDqYuOuOHHR%2FF0RchDfqbhlO%2Bwu107doeMk%2BAq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDDI7vQsku1bXVIAjyrcA8WsYopr6nRq4VWWWl8I12%2BWR9PSxx26w%2B2MWHV%2FKPHX9TnqclgxXiiUWpXnPI4LNDeppU3eaaShvfOpyVyS0RA%2F69cnZJYJ%2BglHqdEkb%2FWvb0Tcckgr1RP%2B1hVkJJhKXVolgwvMcIefyriEz7WG%2FWXA7Xv7YatvssTym%2F%2FONah17YWA39eYhf8UNeht%2BvpAJqkLabDCOHmosP3t74XwVfb0Ux%2FmyweAvZF9CVvkdXKtnDQxQx24Ilqy726J78bGuNv4R2VWFs%2BFXFtWUNJeqvUlfm8SAb4idxWza3xUCrfng9QCcsIwAx%2FHeUoeLiefSADXp06ztm%2BW%2Fc8avwvVLT6kNx6vv5WiEKNy9tDDFkFTCbsHsQ5VxUXeMTpvFEqJOxNJqj%2B0pqi%2Fj6xYjoz16MO56%2FE%2Bvw380dCbx3bgIGrKhRkHCPDKdtvhMgL%2BfPWUNp0VpmtSHHhZOs5FUjKzKdIzRDXW0J764xh%2FvH91wiRK98UMO%2FqwplZHm6jHAou5yLh7rwtWws6umeU1Wes9pvMW6wy6KgIsBsIrOTIZ84gaPDzp6Q%2FPVc8pfOnEZyh3ThOtFr13fCcyv3YyvKVYCLwY5R3uAWAS6e6J1fXzW1UQOtXuB%2FmJ2qhYnUQxMLim0MkGOqUB9%2B5E4fkvG229IJtjUPOFLxxKuqfkzPR70fqsWQNn4XUirZ1MFVQVZHNKZcLKX5%2BJiHakMwa1llNyxjoeDHk6xgc%2FOLLKrd9LwBhUaQGVlbsSifWOTkNzlPczVcX%2BxpoS3ko%2FKiTubUbnUAncJL9qIqxTXSZYrfX1r3FsahfxxM2tBf%2Bq4%2FZfE95LziRJOtmfR9PloC3G4oeB2MaNutq1D%2FzpvaeM&X-Amz-Signature=ea98b09c1620c5b3e23f2cb8ea97480025bf22d9e8031ba2a124676d622a9f12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

