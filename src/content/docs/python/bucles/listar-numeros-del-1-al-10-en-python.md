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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXCFFPKQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCoiHgG4l3XWy7Nm7p2iLc54%2FFIvyY8vc4%2BeMw17sSKEAIgPQOtybJ%2BosnZv9SB7rL4POz9%2F%2BcO6mKiInYmhv3WtYsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMbfmg6OFAHedgFfYircA4b94Lm5zXsW0XVYN%2F78bgT55v4ixOu8sc2RKS44IZ0ka8djc6v8xKuCs%2FNQ%2BOK2M%2BhlkO%2F8qK6aYX5g3wlJQnQUvrcz2516ZKRfDiBUNKx2OYc%2F5SmoERiM5e18K4IBTWp%2Bu%2FNfhoKCgIARBbSYXXlWkec8gNl%2FLjZHMi7yrRHNetKa1dGONg3fTDOesLJjvLpDdnaAj9YT2zdR7IXhMJq2yA5MIY0HTQ0Qvk%2Bycz%2FWAuvjXFDcPOhSot0PyG4ONRTeueQxEEJHsTrGsB66nz%2BWnbenJckiWpBlfEOKsT4%2BH%2Bxd%2BS7pULGluH4GOJDAv4VEDaMIwZJ0mD6c6lCUf5PqIPLOqEyS2CKV34RPlxpCf47ZRW5wrkxAd2upuh9ma5AYoyTTisUX9vHQUICnoXbTNkD7H62OHf%2FMZeQ%2F2CZHkmvl7JOgOPyJ%2FGuiNdisuJDGWo8fwlKfWB8Oj0CxdKVke9rf8N%2FA0RmmdeiPAXsBd1epUzcZbi9l%2Fo5Ftewr%2F3hf2kZpZ1NyxTJ6IRKJFaPugBF%2FlUwLKMFXI6YHU5TmcPnpFgt0wSBDIke5%2Bu0Hf%2BfqumXvYSz%2FDJgmUiii3kmNGxAqEoC2JL7jNjv1V56TSmISiy3nsYgHF%2Bx1MPSUw8kGOqUBM5uSwsnCBM5NN8uimav6jyBUVzuYJQ5T9YG2ud0XSPX0W%2F%2BlntCrFWq79KLH2dV8ugegjprvVIy2uEv6s735e2irXQHrn%2FXAkpBhYd%2BW6wP40OPo2h5ayzdMOrVzLZZ90DSJ8WQLvAt0IgFiNjNosN0VQCZIvfRzKxL5kcu5pacWjw%2FQeUnQgQemgsu0x%2F5SdHM4VrRUaPzGND5q3SMWeZWDopLP&X-Amz-Signature=8582fa17760c225d8003984053e742dcce4e89aee59ba3f799f65d140a0c439c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

