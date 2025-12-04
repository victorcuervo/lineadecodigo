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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKJ7TCXV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDlchYMzRYPTn5Z8JIODa7isIT7caK%2F0%2BQSuOCSobv5FAiAxKBowQo%2B%2FqIqXWQP2qeq7V9Z2SuAIHYZLjhWFyr%2BrrCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMvr04wZOkWA6Ht3BiKtwDlHoc0Wj4HaKZLay6Ro%2F3OIMouZ3CF8I2jRPsSc9s9UdNLl5SfRKIMtl6O5uqjChdz7OWUQOm0AHIb1gj%2BNkmdT3EFqqzL%2B%2B8JgkXe%2BKKGTjsJUZdjTxKR1s3IA6uDVCEu72%2BHQVKWE%2Bmu6EhKr%2BO1NUqJgKCwMYVvfX6D6F%2FKi56TB%2FpvPlENQUqnaMc1taFYL2bXs9pYCYRrgn9Jk7YvHX%2BAFir35W%2B85Rw0JErjGUj3pN1bGRmzgzhh8RaRQDM%2BkhsUoZP4r6nRJvWn3x10hPhcw3gbzK%2BLaFhKVBtD%2B2oWGrfLgSPSbcixil1AI%2FkRz0i4tblZD8QY42lUbddxi1bhb8BFcd8tZgeXbvhNpcVu9nJqY7s9CwzJwI%2BvoYiDp%2BlGLc20hyRkbuia1ww5QIZdTPo%2FfrVjActBBBR8IWXLyapz29IaZK%2B1xWZ0jOghXjEq6vTd19%2FYGI959CmkwHGA%2FVtNB59r1AJIzCnszu7oWtjHfIlLyI%2Bzn%2BVnrC4DKok%2BOrDeIq3euUA5oV4eD0Lv0M0TXmavRJhlRzubCr8TmxDwlehUJ0V2RvklQXBkpHQHMornZRWyrTbIAyKpEaQL5BSI8p7Stg31yO1cdOmtKgm3%2BfkZEjs06gw%2B8rEyQY6pgGgOW5%2BpRp1FI12EkrSQ7kNIXqaON7Re%2Fa5cBuJ9UiYEU6QLegtO9EtPgME40%2BNbJaEFnPds3V6ZEWooyDAWzVQ7i879zsmAj7PyphpsMUoTWgvF5MWuNQlRszfXXtCDpr2gOWR5n1KgShoJ%2BprhetN7et7gjgi6S5dnK8b6ThzoHkHOGV%2BeqDx71fPwonVgNHvm7ASFhE0%2BZDtHowuC36KYIo5CQDp&X-Amz-Signature=37bd3fdec86e09a18003c0bdb0173268056d9b9bcd4945b3026a8f7b7aa97842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

