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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJOHHCA3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T163136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGa3Fia63Z8LEYFpBNbsL8dutqjHCs%2Fgo90P0MB3GhkAIhAP%2BFS0tW8ZmZ6tbNPMZoDpGh%2FlLZbdMplDWg4FYTnjwOKv8DCGAQABoMNjM3NDIzMTgzODA1IgwpIoPz2Mgzolzh9moq3APxb9OmmfWZJY9SjI814C2YyZUaYvKn82r7HybLsTPN%2FfnUL6TMcyB9j9SXSY8YbKL3HJIjf%2BUNpIK2J3vhZSKF94dvMTX6j6w1XGHHIwQ2wC5WnVMJQZ5osCKC5vWwqrrpxx1Qkis0cxcqqiUOI7m%2Fr3QtMdUVnAwsWLkiQVL%2B8tDGiXIhGNwHgyIOrjOfVZDTIIIiMA0Lf%2FOGDxT%2FmkH6jkHr7rtxjguPRvAvFBbo7c9ExkwbGa1MUXfZmHo4s5eVSjiXkII6f8tplEBf7oZX5crz%2BgYrGX5yYjrwsNZ7eCY%2FnjqX2QhzFb48SSJZWt%2FAWG7Y16x4McP4ibC3778XQb1URFPWAKxbXS2W9IU16bDeeO%2FSggHa4%2B4dKKaaC9vyygLJUbRWsDJX6e7JoqvinhuRqoNpwfSbyc5unNu%2F8%2BoEf7O5SkMSbL2yCBDBUlpuXbQkiMrZA8cOco3GeYkRIVW339r5Xd0dWPiOL7ZApNrRqbrxJCbV3CifiTc%2B7z8ooaZhML5jwA%2FDO6wmLRjaMtbkC2PM0DyjuQTJjFuFurK5k2SG86F9re7iNyFuvwFNgzUk%2FJZ7XCW6cOD9aAUY0PMTV7hT0LUFrTiy6pR5aB4zeOjRcbtbH4Px2DCl4cvJBjqkASEMZ9MahX%2B4rzAr%2FttZMvDPBybzdr1JF2uMFXEkWxbjhOll%2FAcl4uiyubIrGf4FPCdKLKI275pvXCarOtzbDU7i5Dfyd5h7lVGM3oaMoEzYg%2Fxvaulkp1dVQFpverro0zS2DH1j6jWb796DW18I9oqnY%2F9m5nof7h4OJK8jTVhJRMHmXrdf5ya9eFDYZ%2Boq1hUrdBv%2FQLjuXZYOjFHeH44mFdxl&X-Amz-Signature=ad3c639c37d4b1e6a5b9603ba64578d5152718d3fce4a58dca2e18024c1ac85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

