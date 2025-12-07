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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DWVKSEW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FomY%2Fc68NvdcZm3RxAXu3rC%2B8LlRg%2F2GlptMCzHCaBQIhAMEu1URJPOamtnvpBOWkfxghIJLJXTTSBQuTmrbsJrJUKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYugnFkvWMcYEH6Okq3AM0b7wpES%2BwIKWMjUMxCMBOVTfepno8dDbdpg52f5ao3BwJtIxE3MK5Od6sEf%2BMjjpQSs%2BhBWIDv%2B311%2BhkC4gXdO1oGMXHtSNY4y%2FinSyBuZBE4%2FZUaiblXdSCq0VevJurofhms4C8B1brgErDvbNxavWIkbYBJOkjPNIPL%2FCMLTRG82H%2Fc0kMSQqK4njalZA7ID7xHI5%2FqKYE7Pj0Q20UIuF2cECRHXvAQLnkDhp1eFmef2vg%2BeGXt5p9u%2FQ9s8dE1i8xvipacZIB6HP0s47OYMpHAvwSUzGkorE96YiG9EZLIE68tnRiR4eBoobu90Q%2B4Gac5BsUKJOJhIzmKJFKp%2BsgNVrbYEk%2F%2FpVwGIOEROyQAfhAUHWN5AOHiUKWt8%2BEUfcPi%2FzKzvGnXPaktZ7HKsvuqBFVsCk8WWVrq7NWPHhvb1zulpQUtFG6C1nei23TY%2F0omO1iOqVOcyKMYdmAMVMcWGw3LN1pynLYR5eYb24RKhZqw0uA8aGdn9Ehh0sFrOV7dnH0OTEXiQCWna1Sqf0VZxq5jYFANcIJ7Luy%2Fj4bOtBOjW3lDmle3p%2BSiJKK9nIO0QvWmNTP1c1E1dpQixUrz5%2FTUpwomWl9EG522UW2r1Igq1B6%2FvQmzDDy%2FdLJBjqkARe2%2BCFbeO2NyOiMtbzT7ewmPpiNIyvxtqcJmk0gYnJ6KtWmUlB1ToZXkz8Im38c8s%2BOsyFVXG3MxGkChXD71cXiFn8FTNt6MkBHMuW6T%2F3Henz6Hvcb6JRI7UM5w2nj6BB1SADRTHZH1vBnX7is42sxf%2F1tlwMBbDgTv7NEf%2Bgqp9nndJtFaZaJ4vga3jISB%2FSRUVr0mPBj7%2FBv9ica60Y2G7ki&X-Amz-Signature=7fc39dbf94d4d78f4451d5de7066001034d02da17b0fd6ff535180bb47fd7b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

