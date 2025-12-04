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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLAHYZLS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIFRZ00RSo%2B6Eipv8NUJOEa86sfte3GgqFva3wMpbPm4VAiBpmywfskUpXC8a5ZXQd1F3pRAjp7d9NtSs34PW6TKeiir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMQld0%2B51cd7K%2FadQTKtwDpsnfEe7UNacFLL7vadj7qk3Ztejzn823qyqaNnBo713yYTDQuUQtCFGsAElWI%2F68Ve8s41c3RXoDzVykvdEnoX8cT%2BK%2BR03BtUtyaxKrDEMB0kaGOJwf%2BRNw2zE%2BTrTWiGtpAuh%2Fscqwuas3TVt0sDc9e99SlOatDhqXbOI32ONz2EuVslSIYSsmLVHQVbQfWGT9NRRRntiwP%2BMZ3Jhuhc0LXyohM6lOkPfqYAX8aM%2BRYq012atfaJloRQ9fk6dee6DZR0o21NS%2F%2BV%2BYEtOBCy%2FoS7yguzEjhR9r6cgauz7ubCzEZgwZJYGOxPKA2ysgE9qqJCZczcb2kd2maNumklenk1HGbYmxVYX5JB4pjDG9XZqNZdH4zDD6n9eSnD6CCRgEy9tGIywxekTrnwrYWqcvgKpd%2B2QhHkHXIdYAnjVcD3n9R3vJoVx4HhM7IqDHhoVHeVvFdGpaja2hUShId81DrblPZWNQv8tVpacHQqVnzYoV4ncIjzX%2FKTBiZvykSmKID0tLGO%2B38Qf3PuCzrOy43%2BPoWDeVlg%2BhLzpZQRkbvY%2FO1u6JIta1d6Lwyn4PWoWt2y7gQVDNkcwvTnV9jZd0gyWYVOQRdpJikJXCt4oTjVtvHeiUZ1HfW%2Fcwta7EyQY6pgFKDgvWIu7NrTFWeot9KmrWSty7bkjwfNI%2B7fM%2BXmoODW24IlE6KBn76KI3qewSE4OddSug9gCmGvN1qD%2F%2B6MFzDJZDlHXAdEq96iLb7NnD6ja%2BxfDwbXM29nlqaFsBkjEGp4t5UiO3jfXusR9PIPR8p3%2BTYnLBX4zN2ETTb5%2FAQZoCyrDLtoZIBkVrsv0CygEHChr63EIVZhtlpj2wx9nIR3%2Bs4nIb&X-Amz-Signature=88ba3cc01a2f7913eacbb643d2c42e2089252502ee632ba92cd86355b2280f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

