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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ5PGX4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T224646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2KENLGDDBRECm%2FQ8ovm9Hy97lnUz4OKWY1k2MfP%2FSoAiEAuqczSRkphT7iKgpKbZwf7bPHNMz4DFI2T8kdGu3O0mMqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJp2%2BT9hnDv%2FfkpkfSrcA%2BSe3TY6%2BgrCjmpmYQU7PHku9Gq%2B%2BsSVgyZR4d2R2VRDYS5rK9j3UGRMSZYvSfG%2Fg2eszz8rXxvKMS7oJaVu68Pgl2TCklLgfXbdK%2F1SfPLDQhYvkAU47U1bV4dtrqkcAtPZQGpySFABwfzh2Z7G2gGw17Qj0iK7QWQLDqBMTF10PrQCXM4bSSmVdd66i39jskA1BBSo2TP6wc8aqbSUYqFk9ccZ8Tj0%2FcmJJL1tP5I%2FDxDny%2F9RrhV%2BySbonlOsIae6NHm8Pg25QBAajCRCLiglg7dxldXLxmMcTixzL1qeNtePl9ybfEIFEo0zjQPI7mgJgLSMQw4SmfwGCEAme1neJGzXP3X41YhhHDZM9n42SxZGOJpv4TSftOZRH9hbLsuxcouAlUH6EcARZEA6ojbl8xXXjOU6EiX%2FgkBaRK8n0nd%2BdXXP5pmrnwsfklqgTXtwq%2Bs%2BE17%2BFrhkIT1h1Z24yJiOB3cGPjBLswgA9C9qy21jlSki3y%2F0kiaRZ90nyFg%2BQWZoTEUCuQzyiGznY5z%2F1j7euS8KiPXSzJWsakEO5mxznWdfHMkJygJyjidgTmmT%2F7pO%2BGeJoN09iPL0Ziw94a7cx%2BDcGYl05OSox7cPDFjknHoR9EFDRm8iMIGF2MkGOqUBFQgvvcUEyoDKfm%2Fqnz2UwiPjX5uXyCQUihUdoy%2Bxeonc%2BzD0qFNir2FGxKvSfDqTBiA51ME%2FOKZMYEkBoLkvvs1EUJb5XBixUD%2FYbVv0hBeHYcCu5aTgVaJZOhgvC618rIrbOxXPN6T8RaEB1X%2BRb0WV5EJqLT9CXrVcjM58K%2Btu8OccVa1IXDBUGF0vzodaowS01%2BpkX4enb1FlrAItkO%2BHtQOB&X-Amz-Signature=8da28386b22d2ebab07c902767649a03003ed4ae4fc991f09cf1cc53445dc839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

