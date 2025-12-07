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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKKVOFQR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T213137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBTToHVw8IVMrV%2FuiMNmhInsKpJ%2F0EQ5RasZsm5HdDhAIhAPbgKWqrh0Y%2F%2FmVhxwFcjc8jW2qryTorM3kX9SdiDNGFKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcdWdpLJmvbm18VD0q3ANa3nj%2BFNLy43GiGxxHZRnPHauVvBt9v7fFriqNBW0z6mZk7bqyHLm5qImb3NTECL%2FXxwLCosLuHrlYiUlJt5hbJKb5B3ZbTWjzxtIEJJQapMCKeJGJldtF9RgBn%2BXmCNKsIvg6atS%2B91%2FIAbHHSaXHbL%2BEu8zt9yFufIWSgazXUbTKmXMxX1f98FlyVYfnfr2E288yfGdSkzwDvKxcpj2px0hmvE76B9hQFH4fNNAHz2oo82TxRKYazcmwgMmYpa7ls3hvwhdfS2VvT%2BqivqKy6l5L4K0wF2JpbzJkDAzVybt4ABlt1S3Spuf19KUk8gAnPQ8DHsYZqD18no%2Fot4ZUgeJLhImpnBeiARQebQB4aqBPZLW0LtXCuxMmWeUM16U%2B4Oj3KuPHu4Lq1zqAuZqgz6Dy6JdANtIpP7I8Fc4j2kSXdd0iw1sSHhVc6CrfBJuVP%2FBJkQo%2BmedrJ1Oi%2FcUXHOk%2F%2FW6No%2FOrhJZzDf14WvLxTe3%2BBLckTkqWjmqWOoGka2DjzgFma7ruSXtOXmwFzAp38QDBlYT7%2BxmtxxbNBPCKoITPWbKBZ%2F7IIb507W2uhmDbpH8mD0MsYdCZLJxcoEzP%2BD%2BuLBAvKqW3oMJ5DIqV6LOiHQsziPovtTC7x9fJBjqkAR0DsAJ8tNPzpwiNNxIbPHETHUxEeDYdYNtqxGAhoDeCQ4%2FhsDbWI6pFFxzN%2FhNrUQ4RIJGMHnAKEgx%2BVakdvolB7%2FqNd5HLZN5lrE2G07w9S4l5ZtevSNL2KfHmUlBMDRvkdtLcrpk2MFy97i%2FWhNZRmBEMnpGRMgLkL0g99Sn0rQri1MB1JCgTT3wzGYi1hJ72WuYjXC8B%2FujqxyHBoOZZH2ki&X-Amz-Signature=631833d73fd3b5234bb33c880b61969d508e156f8cb691ba280a633f8ee6d89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

