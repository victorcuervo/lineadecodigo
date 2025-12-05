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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCJE65X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB9HxWWnsV4WLbpxJCwescJjKl4jMAn7e9QrM2R1FSjwIgeEE7%2BZ%2BfPEd6ttiZ%2BAbeZbnaTe3KOtkkMUaYoebYM9Aq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDjzYKh%2B2L7KxJBOoyrcAxnYTuWBmlH%2BQjugLHX%2Bra2wdkUJBAqTmTRicjytfkmjOtlcGG%2BytwUFfJXd92r9marvN3eYN9NO8ApBViK1Uy%2FP8CgfjgBuc41O0wXgvmsm79lzeKIoYYdF66Wxg4pk7kEqpzgWVmrWc85oH9qW253gWW2WKVhB%2F2HGjbdhdTYEpeOuvxyvMH2A8R8RMqJA%2Bxiq3tM6FD%2FBmfaGJVMeVf2vIQJiycKQOZfJs9155MApxo20M%2F7hgrfCYCVFEOMTHo2iBL9xd7K47t%2B0RTnZ2iZtUIKWs2ovdoNp%2FCb1H%2BpmvB%2Bc1lN6BaE3QNcHpuBsjA1lvrYITEDPIYaUe5HIkQ2WwjsMcJul9p6rrxs%2FAXFD4kr2iMND3kr7%2Fc%2FJ92HTCdOeU6q0bwW7duKGvhAaG6jZV6EDjAoOdQnOqmDAc45akYhothFeq5g7n3UnYIvigy2OKJqw11V%2BUEonkXFxrFAewq2Z0%2B6yTDgKPWI5jCL1DuAlXZ9iuw8KUQXT5ecPj30GCMYvPHcjklRemhIFdLW7hkVTUd6Rg3yWxMicPF%2FOroeYRlAuezvubPZs7NvgjEkkzZxRGW%2B2EPKop5D2InYNIEaT3M%2FQfiYj2VvXbA1p%2FRkc44q2UEvUbFo6MK%2FQyskGOqUBlJ6XoBg0QxGxpOgX1lCWJJ%2FL5fS%2FDLd3PItcoG1pdoRdc5EPRvWKmnvmajlaag3l0rygOl6JBdKnqbqEXUYWaz0T8gVzEA1TwqXKNVBgzvgwz2iCgPpW8CXnRPFXqQzb2RoO9drt7NdcZM%2FQCU7TVnw%2FP%2F62OBd8LVg0rzuBgUvqZp5lfhA3CjDLZdCXTdL%2BQt7qtOM2qfy2RB0%2BO5Vnako487k6&X-Amz-Signature=79b2335d3bb9f162fd00904a358bf15b9d15c10b6378bbe7478f391a28df59cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

