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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKG3WLQY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC4lSmmlZQ3s8lUyW6J%2FdkikoqRTNJLXGQj9q22DqpgYgIhANDGwZErAIaJDEVpwN8CW6145RIGW4n99lUOb%2BUS28dmKv8DCEgQABoMNjM3NDIzMTgzODA1IgzaqBsxfA4%2BMtLQDsgq3APzWmiSwOi%2BrmrvA9P6qoBrPyjoNrPFIAM7CjF4MYoE8fL8r9DHg4rZoD6npAS0jLdGf3FiInDZ3lAcIBiFgxvNsPu9EaoIzhJ2lt4%2BUyINZ6zsOkdsIuY73BxiEYKo5wszgmyvdWBUc3rajs%2Bnd%2Fx%2BTU11pF1OVru14rfP9sZOebsywKlY9toM15j8JutWSR6QSWub1rZT%2BeNVDd8TJGXnyYkCE47%2BJcKYz5cBZZ4K9baFlgiNREz%2ByPaWLp6eGmq%2F%2BGZ4kbYMHUhep1a%2F0vilRQXggx%2BLkkiDqAmvkpGuUbmMvRVC3cd0XvfQZ%2B8PZTiMqaLtKrgfkp7OQ1PdhzOkduMx1YiNXVDVfGgq%2BMbNKk2raRN2WdkTdCXl1YHqN99E7kJmTfmqZP%2F5rIHpEHYJ6plUoZu1Edqy42dBMSQAfo0uEBgs3TazkdJQPesS5G5Ztrut5%2B7XDCt5%2FCaqfJbOC15A%2Fu8C%2BwqFIHmhx0bTYgTIrc3yD9jLb0AXx%2F8LEZFrazFxoLJvXwGm70%2B8sT%2FnAXo5mIbK8gHAvGWFNl5L8BQnXcJ0f%2FzbLl%2FOYZThUZpASA3vIwGbY%2BpRvNICNqarwdGKNcqFEkizJPLQ3sNKiRMu2AD3MJjaHPKlmTD1vsbJBjqkAd%2B6QXGlzjqcUb8StH7hbeVQ9XzvR3294eqkTiK3o73%2BsAdtED%2B8k4%2FuRuRIzd0PPCzI2gByCKL7pwc%2BFCRz04B8pRmmQk5I300cwquAbYhpQZPoMbdrMip%2BayExt14N%2BybkOrkj4SdJryz7Ou67slq1lHJvOfgzgeWq9Z90%2Br1%2Ba4qtQY1fpkkiyOts1TmpCV57chqmoxrPMkc9IMzcBy1FGjcX&X-Amz-Signature=fbae492040ae643d5278c90a96318981b912873fe9ef55e887d8e8b924e220f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

