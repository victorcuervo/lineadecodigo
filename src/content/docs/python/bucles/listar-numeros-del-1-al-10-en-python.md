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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KCBVZFM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfqrjyOxO1TOJ0bA1kEjD2e%2Be2vi8g6soYO6zjx1h4QIhAKk5TcyVvpgB4hAARFg6XoB0gDQPtDr5T0zHOlj9hc4WKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwDB7oLstbJ%2FlfXWBEq3APRcYE4jZ8lr%2BCfLactI7J3Xv%2Fi7gut7AoWWLnOZhYttmNREpV%2BGK%2FMYu1DJPpC53roSsdExAJpmT1HnLzGCFzcBcKS51HM%2BR5hJyjylAQObyW2DJHhBH7d6DCJsD6EVl3X4yR8H0HdxkVU6z4sMz5234JQqB%2FqenBAZLxI19T5dcZ7EFl%2BPUfqwYNNouwrAIiSlhnD4E2mA8eHHdqvgqjWDxpIXXf%2FNowpoDatnMHi0JFrPr7yfrMBO39LZ868pPDdo%2BN5QL%2FePCJUquoHbj%2FdoWnDNtWSvcIbZ9Zd88aLs4mVCjWYP%2BOMNnf2fCKF8OEkh9QW%2B4Os5iZT7oV6UKv7CXg1CciQhixAbLV06xL6eXYP5FzLIhFI5kxAaKY5NANhmfz2nYdwClV%2F%2Fa46LwWF3BIvMvMy%2FC4wiZliNLr4PRn8icaKgOoqw%2FOdu1zEBhv%2BZbGXETMV2pk4Pz%2BicKTQojQ8oSyjRDPMGTnp3GaaE%2FxbMTLJBUEO70kHlpSfrICF3LJ4heoDNJiu1sUbvTlDvF0n%2FlUozXQZxfJnvGPYaPXNguGPlj55o0%2FS3qXZzD1jJn8eTCAQJpTsS0yXHz7fOB6gCmwK9RFZXZ2O4Y1ZZ2GfKDXaB6KbeAf0wDC4rt7JBjqkAQoSpccwWQ4g6x6MDOygSrbgW7opi9aN1japJiTYhlwGABZI%2BXTxrYgoJ7%2FZkduC6KKjcHGb2Z2XWQFr44T67r3wj9Adwv4yL1PP9H8wJ51a2DUVgwK7GFlbBjsAFZlgYb5PZkBNzWLBaGHVl8KLNmdua9PlGj1HkeS9bIa5e7DexqIE8EH6N7a4BOMfo8cmVLOwzvvUvsB7OLHSzB8tm3ELabF%2F&X-Amz-Signature=78c6e4aa49512f1f8131ddabe76e5808cb39bee18308b89fdc48eabd798be3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

