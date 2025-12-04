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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672HBFAZS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIDGFO5%2BOw6XWv6GKLRAQOG%2FkzqidsDCt5T%2FVRgF6mqLTAiEAixXMfBwEQbxySlsXn7XpxIFhiASJFEHvyju53kOkVUAq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMYTYj2%2B7RV4m4F6FyrcA7eW1lruJIx%2B%2FvL6A3%2FFiy2HEJPwqW1emY8SjvOGCPrJFSQ%2FYK5Z92d46rEFrJhQhBG0aAvr%2ByN0JcSv%2Bv0dIYJmQMttsJDAxalw1MRGL7XjfNKWzIR%2Frg4%2FrUz1SFgc6JRcALo4oPdiyq0atRhG1Or8b6BjqWn%2F4vKWeXIe99bQdtPLRgvJ4nVZyjeVeY78vCsd2CVJShONYx5QO0Qb8dVNenG4WQ4RBzzeW8ZwQrzU5DRFU5D86TtKnPgOk0mgsW37Gpve7wKbaT0clFMkwMf71fxQOmyPrO%2FsO%2BhaNkXKakc2jzgIJW85%2FFUK3O3D2Mz7PTpGTd5YEHr3OHaY3LikbDV%2BPB%2BRB9ro4zlIA10ygm8miZZfpgDlItyXah180uUYjbm78lLl4FMW0PUQRuizNteMnepJ44SWDs2Wh7PLvG%2BzuBh5QBNFHz08iSKn0KGfj8RLRKxhSXers8QMHxydBEl5AYuoiZTzcTvage13e%2BHK%2Br5dKJjZ%2FWJB2o7nn3TG0lYjcC%2BWySsU0VgjDTY59KuvqQOalc%2FDbveSu34fjBxw8JdiGWoTde1NdtL2cH5s%2F81QlKjVl51OWm%2BtyMwq%2FKHTWnf9X4zX%2FlnQVE2hObzLKoZBekjdYtgbMJ2Vw8kGOqUBA1vkW4lEx%2BxRA%2FqQdNIQjN21B4HJJfrbt8NWDczeoemm%2BeH6jNbqzdo3ZeTa0APWv%2BZh43%2FYY%2FdxQk2FumcNwyG%2BZ4I%2F7PcDSWbPOcV4I6TU6%2FYN9eHSa7Zde6nH6r3ZGoFqEU2w7ja4C1XuR3ItjjGof%2FJBeOSO0%2FtH8Q%2F%2FJgmNVfCRFacz2FC8SkE2TsBE92G2bb3eLR%2Ff0%2Ba22tHusKG1KHOb&X-Amz-Signature=fa49276c81076d43444f1bdcba14ef4ce4cffb6d724ad32918574476d763e1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

