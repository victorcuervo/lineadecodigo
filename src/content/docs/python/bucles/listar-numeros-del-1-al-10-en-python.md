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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YSK34S%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T051513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1b7aCONcsnry%2BEna9r8IG7Q3G9tnVUKd4J91hF6zi1AIhALpkLZe6YRqpKEJlzzudzhytY%2BAvRwv4Mk3SCZv%2Fk3UqKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BA%2Bh9Yix%2BAYipQhYq3AP%2Fg4RNx7u%2BtDtN5i7kYi77y4xvv021Ye8%2Fn3M00RfYia5gPBk6cPK8dUOypgz0UAqHySsAPMBBSh4IdaZy1r%2FSs%2Bgs%2Bmp8wcJ9KphNOdcQ2YvpoyY7HsoxNmzht2wD7wWPCYgeXZEYqVx9v9ooFSegE9vqLiH80FGpruI5Ra2rtZgHbNlWnQvsyjboGMznfi0ZYj5LgdZGQ921CtH6sxgdbzb8GlJ7xwMdTbf%2BHDKJ%2FbaB7hO2kZKp80t2%2Fg7UNwfUVHe8op7qFM%2FuXY%2Fkivi5f3pbvilRAMMOJX%2BTHm965N30eh65EctI%2FITQrtNLAuEuViOb1dWVgNXLvaO70tMbR55C0I5UdnxYF5NI9dvuJIm2JkyEVXxLKYTdAD9Fnz8IYAI%2Fn0gsnqjBKn1rLgZSU8fhAcdPV98Xs%2F3s3enz900QdUfNAkrhvBZzLdTAmK9o%2BK9UhXjR0zgggYc7kdDvV8iFamfXlJ0YKku4se56dy1XOKzG%2B1SiLTtxdyZkFMNCs6PH8il%2FC1Ste4KndV%2FRiqMZ7TDLYjx19wsh8GDoBSOAk5E%2B1ZLbNUPJOD2PmYVWZ8XIAU7hcQer7WywyKaPhed4wE1EikMX%2FYMHqbfI2xEcOcjhgfvqKI9pNzDWyd7JBjqkAdJ8QGnB19pMltm4AnSZiI52jL6aPSzesER6kInJgD3NqvJv7Afo%2BtDxd%2F3x%2FIWYzkZizPvo5Oqi49d5UDt%2BVBomdbnqd39ntgxliU2nRre7QQL%2B1mwXFP1Xg6AZXhS4NAbGVqoPVODXWHsT%2FHmpNSJAqg2RjSeTBsd6nHb%2B1AVixEv1tJuTbtVievfWgnOQ5QWbKDfBhzJc%2BgWcqkE8lMQkuJah&X-Amz-Signature=68c8b4caa3581c25a3f8180c23d0f0c23f0517756480050786107831003fdc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

