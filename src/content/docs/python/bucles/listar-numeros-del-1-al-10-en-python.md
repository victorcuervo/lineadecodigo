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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DKXGI7T%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T235401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTtxtuqjI7h3cmYC27yiCYDtpFLOfjSiJ%2BnjG%2FS6%2FeiwIhAPsg1pVa1EktiD2GRJNQwUllDFZzxIK%2BUMI3B%2FJAA9s%2FKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwefvFnihevG%2Bhe6xIq3ANVtu04Zn6%2FqA52bD2uj5Zp8HXpXYQBY44KrcXG12IgexBFoRrJUsARwJAmQLEQmfr7GcekW1lDxnei%2FQBP18WrLQ8KlBPiu%2BwOfXg8gUJ%2FEr9Ov1fTQ40FaDG6nNpvUaUHhDuI3LH8%2FHC3J6Rkz59gSAQ43PhWNp6jD%2F3EoyQcRXehv7VBRDdDsjh6e%2FWjq8ky%2FGQZDqIwivtAE6uiUN%2BSjavPUfAPfyfRZbCLkh7AubTl3tyfC6fqTajBGJHlH0Gr36RZyGVclx0xO6K8kyttEsmWBc5iRcK%2Bt5%2BAyrnBs6zTHHrsC0svUZu7X%2BZ3%2B4SMBiXnwPYyxu0VpUXUX9SN6V4h2DTUwa1AiF%2BQL%2Bn61ZmWIomygqhFYoKkvNiKfp3gOfwQm1vYAq9%2B2eu5%2FVjspV1%2FI4ebuzmXPo1AGzRrp%2FpUz1BRP0BNl3otEyu%2FA%2FypFMsBSa4cEr1JXEaWMv8KS9XiA2KEVk%2F9rV%2BOjWrZ3NleO1yft3qwZ7rlWKtpaOueSMTeX1zHTSc7Krsej8JXjmuMKY5GuJ07%2F%2B%2BgFObQzfZQZek5xPs37Kuw1ll2XzR1jTZqZ5osVhZrjWr6b0d3gaVv9Dmn6Kxl%2B1kXAn4NLmBm8P4hM6KDS%2BQWwDDl%2FdLJBjqkAS44iJRa7f1zlI3ZXmIbZHDd6HyFG2XogHtzVOFu01QCGv0f7r4CXoth8VV0K%2Bki0z5G%2Fv8OkU3uxBAzPDfuXtFnuy8oth%2FnIIcjc076g2odWjVcKtb2Da%2FGjMer6UL9BBXiSjKXDmQPKCGNi%2BOLi1NUXXziu%2FasXvjivxo1%2BITg%2FkNR1KvK1wpjgbtVYnHC0HMum%2FdrR43MvHBfqHBQh5FRwby8&X-Amz-Signature=65a4bdc984784f139bd1a49edf2782c6ac55a1b312644a73710ff8fa7881e903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

