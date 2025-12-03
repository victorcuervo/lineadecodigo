---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCK7XFH2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPxPKlRI4isLhTqCFFmRnf59sI4lsfVAqH6y1L6zcQkwIgMq3%2Bravrs9%2FcU4gB9tWqTNkYxsmt9yCy21D3KLfFo7Mq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIdiYcXnkh%2BNo2XiESrcA5PetcTc%2FgofkSUcuzWJ1DYllfwlMHqieDm%2FiYPDAmkiUCvzw3aKW5tXT0Ij2RjhOj88nOv6XruV67wn2w%2FLi0hk9gzQxd0XXok89gsJ5tIKZIJeEZxcAbcwJ3mbOUMz1yDpIdZ3GVff9um4wHNiG12LYsqcuE0HmNhT0QnXw8ZKjRi%2BXbA2CIghaZYK%2FyH2%2Fm9ZS8SdKAi56Q4hM3iLKbcvcLU%2B2hJrwpqXVPc2ZrrImaY%2F0Yd%2F%2Fhc%2B366ISx6iBVeSXZmAfghHIv8jAIYCW60CkGH9UsNAjPG5dy0zXM0OiNaYlhHOuNmH1NmDNqeNZrAbZ5SAfjdjvZn%2BhW6v2SAxvtdRtHoaQ9TFZnZ17ZVq5c%2Bl319IKuYxAsEP9G113YIfceU3oAoeVdYZHkI54WK7kiA8yWIzHLKD7KpS8m6H%2BfR5XnjVijANFw3rSicYTsZiQzh2XWsI5i%2BwVsCz4gQuBKNEEC%2BFZ%2FgTeHs4%2FeGTgXodWK5aMpCSheFadbgZpV9u9Tfy7Q%2Bx1c8SrXEAHuZdWNyAdjFT%2FIxY27xbpXxTaRx4j8cdVhV9roaUI2VvmqkwQ%2Bg%2BtVoPLQQj4Sf6Pbz0GqHJByEO9Mt%2BibYEynIejGGZmy6feeqaroaUML6RwskGOqUBvxFCQLyw6FbAfIOuZTZ7HcETgZ7TK9zK6Vk1ksPP94qLpQCq%2BZDbhQlJE%2B1%2FD%2FDcocGH9dMni0MqPh%2BppnWSeTjPSxmE93%2BDRQ9b8ngcOyjv9sFdMb2vktAjljYbiAM%2B7TppFPFHWUot7Mzsrd5j7%2FVmyxeiqVI1MygsCqS9Jr9pak9auHk73PclY9x1BEyD25V%2BnFqqCt5kYnAb7EIlBtIUuU4i&X-Amz-Signature=c8422966e36443558d135a49fb0c2a146025d81bbaa837435a1b245f37aef443&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

