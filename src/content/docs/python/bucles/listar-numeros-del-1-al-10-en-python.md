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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTGJCLU3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T105221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BFCjiEZ5x0OjY5FY%2F3y%2BbkrU03vZmnJG3O1Zaupy2yQIhAL6Sh2m72MmZ4HLrSwpE5Vw3wswi7WnMNBuArSmv%2FeZSKv8DCFoQABoMNjM3NDIzMTgzODA1IgxNnZlZnsoc3YfL3Ucq3AOEiu0qIrxr4r1TkikToDjrcdI2k8PadbHn0w5cxpAGs84xHkSCSwQ%2FMYoA66yxsmhZlwNMvoe3LtAm5AAQx2HJTqdarqjGS7Wj7eKKh%2FDdzZy9NwyjqTDoGxUBpn8bfYBwmBDIKGI27FUF%2FO0Negh5%2BvblRI0qOKw1ce%2F5SP6VrM2bJNsOP51n1FF6qd0Goa%2F%2BhEoLcCcwt8Lq4M4%2FPTTK%2BTK7HkVXGXCusa%2BObsL15KF0BIsMklnLXw%2Bw1IbLucWLJMFquWnP8mX8RlnWr75VFiT1FdQbWsXkIyGYdebZL1TUnMBeAcf7nRZo7VqaiC8HHpcujfOpaRafCj7Xy%2BJj1a556N4q8KzDb%2FnUC9DGWcT0cCdEqMPfpFmfUt%2BR4v%2FQ4q1FTB%2BDbrCaTKHeO0y%2Bk9eTNPziU%2FzM1WdxLLG%2Fm2ob6%2F5ItyPh8cprWYk%2BTFbTyWP%2BDb1%2FViRVcha7yXk9mkdnLg1%2FCTPX3EEGrNeaW1zv8oyUFwhEyPp5G6rcUykvMZ6MZT0byspOqKn8hHrzHUxLqfO1Ay2aLgt4wV%2FCc2JEQdjrdHaUFJNZIAgl9aLNnNaYQKlTg1yZSP8CyK2EV1%2FGTaLc6TTbyqs4XpApXxj3N2wA45WEgEG9oTDbxsrJBjqkAZV3F%2FNmvLWPp8ASxqyGFEseFwkNIOa1mKZTFSDBLmIU9toxDPI3KiIqJwNFK%2FM0o8aieMcPliYFODptJs%2FLFD4i0vTDyc%2BOS4dQQVQrX5uzXTEz%2BQYNUFT4grSKLVrAEVeKTNEgAcqN%2FgGX8ZmrGOzF7CY7B%2FOphwOfgoelg5%2FjLYliUC3AvoegwwyKxuwLwxbwXFzGDhgQftCsL5e3iS%2Bs7dch&X-Amz-Signature=d0feb31812ff6d39e378607bfc55fb869daeea56fb7388ebacba9b67d6673fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

