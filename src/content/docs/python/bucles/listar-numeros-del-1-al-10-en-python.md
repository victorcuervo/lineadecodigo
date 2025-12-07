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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643K7G3XU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXbJSLcBEA6klYojF9ZQ6NGt3UDtqVlkrdctvbn7HPMQIgdELvOQdyvYMpVgh4Rbo%2BcIbSYCi03VbymiYcdUJuzM4qiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDID0110AcWnghvyyaCrcAw0gN%2FDVkG%2BP8x5obTd%2BdcpeKQzGwB387KCH76ckgdGJQRHlw7CzO06XTHz3baQAy1aDZ5G2YbLC7YGT5Z61t5lWxJ0Qz32UjGRJipk%2BK5wh%2FXAlPFX3x94WMmwUxz%2BA9utwChXfAr8lDMsaYFxs3u%2B1OSn%2BPs8y8SNj%2FmBXBxIkY7Q7KqwYhrSdcxXYC3AFgnX0GVfkhnUGGGegd02uqS%2BlNZrWNIsW93EQFGccH2eOPqg8O1JRQCP2JQZ1DKLaI8hQ99QE1iElIPgvRYkBlzLqUM6sYj1wQ2YjVesZcgGTC1JSJPSNYuq4HZoHPa1E%2FKw7b7Ew5nGZPm7%2F1eYuemH8U3EaZZlELz%2FypD6kiGS%2F7OPXX8gsPDb%2B2c8sh68BLB0WYZvSOdDNphMYLmVfIR7XLvHaZdX0S%2B%2FCn%2Fij63bzo6hPjJ8BNWo6aGU6mDBOTdImc0zTNymzMYSmT42boqQZBoqUKX0N16IJ%2BIQWi6KukitqMaDBdsN56aDjrNq%2B6IZKIBFHwvi1ULWWJcrh1qtmVbMX8f4%2BvQfDX6y0EQ2Sin%2FNIzzG90EJJJeS0U99vctcu6VLK4ctOZN09gWivN1EVH9V%2Br%2BCQR88JBDhqrGH7bmzd6pdEcPtN2CwMNyo18kGOqUBxkGX2HWcn9x6CZI8IDtKrrz59CsZSAqcTDVqsoUpYydckFMcBJzRFpYondPGjl33Ocq%2FKpCcTXTwbPFUG1vaVLBGSz1AO7C9DDUXPGacv%2BgUU%2FXKw5nqyarVzXv2s3lu3unDwZhga2R%2By9ZnOS1kUzAXv3jE6zuuylecMrDmDY4OvImHjeY%2FHERH1g2DDsBUDaSQ6bzvhCrpPrnEEt2INAeBue49&X-Amz-Signature=6dc0efa618fa9608a0ad89c7c874f9772b99a3e0509225c5e154cc2d923ad571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

