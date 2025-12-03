---
title: Eliminar espacios en blanco con Python
description: "Artículo que nos explica en detalle tres formas diferentes de eliminar espacios en blanco con Python mediante strip, replace y splict/join."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Seguro que hay muchas formas de eliminar espacios en blanco con [Python](http://www.manualweb.net/python). Pero en nuestro caso se nos han ocurrido tres formas de hacerlo que veremos a continuación. Analizaremos cuáles son sus pros y sus contras. Las opciones que vamos a analizar son:

- Uso del método [`.strip()`](https://www.w3api.com/Python/str/strip/)
- Uso del método [`.replace()`](https://www.w3api.com/Python/str/replace/)
- Uso de los métodos [`.split()`](https://www.w3api.com/Python/str/split/) y [`.join()`](https://www.w3api.com/Python/str/join/)

Así que vayamos viéndolas en detalle. Lo primero será [definir una cadena de texto en Python](https://lineadecodigo.com/tag/python-cadenas/) que contenga espacios para que los podamos eliminar. La cadena será la siguiente:


```python
cadena = ' \tSoy una cadena\t\n\tSoy una cadena tabulada \n Soy otra cadena'
```


Como se puede ver en nuestra cadena, utilizamos tabuladores y saltos de línea para poner estos espacios. Si la volcamos por pantalla, tendremos algo parecido a lo siguiente:


```python
        Soy una cadena
        Soy una cadena tabulada
 Soy otra cadena
```


### Eliminar espacios en blanco con Python mediante strip


En el primer caso vamos a utilizar el método [`.strip()`](https://www.w3api.com/Python/str/strip/) para poder eliminar espacios en blanco con [Python](http://www.manualweb.net/python). El método [`.strip()`](https://www.w3api.com/Python/str/strip/)  nos permite eliminar los espacios en blanco que haya al principio y al final de la cadena. Simplemente tendremos que invocar a este método sobre la cadena de la que queramos limpiar los caracteres en blanco.


```python
print ("---Cadena con strip---")
cadena_uno = cadena.strip()
print (cadena_uno)
```


El principal problema de este método es que no nos eliminará los espacios en blanco que existan en medio de la cadena. Por lo que, podríamos decir, la eliminación es parcial. La cadena quedará de la siguiente forma por consola:


```python
Soy una cadena
        Soy una cadena tabulada
 Soy otra cadena
```


### Eliminar espacios en blanco con Python mediante replace


En este caso vamos a utilizar el método [`.replace()`](https://www.w3api.com/Python/str/replace/). El método [`.replace()`](https://www.w3api.com/Python/str/replace/) recibe tres parámetros, aunque nos vamos a quedar con los dos primeros. Estos son, en primer lugar, la cadena que queremos buscar y, en segundo lugar, el valor por el cual queremos reemplazar dicha cadena. Por lo que para eliminar los espacios en blanco pasaremos como primer valor dos espacios en blanco y como segundo valor una cadena vacía.


```python
print ("---Cadena con .replace---")
cadena_dos = cadena.replace("  ","")
print (cadena_dos)
```


Mediante el método [`.replace()`](https://www.w3api.com/Python/str/replace/) conseguiremos eliminar los espacios en blanco de cualquier parte de la cadena. Si bien no eliminaremos los espacios en blanco producidos por el salto de línea ni por los tabuladores.


La salida por pantalla será la siguiente:


```python
        Soy una cadena
        Soy una cadena tabulada
 Soy otra cadena
```


Cierto es que podríamos buscar las secuencias _**"\t"**_ y _**˝\n"**_ para eliminar esos espacios en blanco, mejorando notablemente esta opción. Aun así tendríamos situaciones en las que podrían seguir apareciendo espacios en blanco.


### Eliminar espacios en blanco con Python mediante split y join


En esta tercera opción, y opción que nos vamos a quedar por su simplicidad y efectividad. Lo que vamos a hacer es coger la cadena y extraer los tokens o palabras que contenga, pero sin los espacios en blanco. Esto lo conseguimos invocando al método [`.split()`](https://www.w3api.com/Python/str/split/). Ya no tenemos ningún espacio en blanco, solo las palabras.


Una vez que tenemos este array de elementos, lo que vamos a hacer es juntarlos a todos. Y para juntarlos vamos a apoyarnos en el método [`.join()`](https://www.w3api.com/Python/str/join/) este método itera sobre un array de elementos y nos devuelve una cadena de caracteres separada por el carácter pasado como parámetro. En este caso, un espacio en blanco.


```python
print ("---Cadena con join---")
cadena_tres = " ".join(cadena.split())
print (cadena_tres)
```


Al haber eliminado todos los espacios en blanco con [`.split()`](https://www.w3api.com/Python/str/split/) y solo metiendo los espacios en blanco necesarios mediante [`.join()`](https://www.w3api.com/Python/str/join/) tenemos la cadena perfecta que quedará de la siguiente forma:


```python
Soy una cadena Soy una cadena tabulada Soy otra cadena
```


Con esto ya hemos visto tres formas diferentes de eliminar espacios en blanco con [Python](http://www.manualweb.net/python) y cuál es nuestra preferida. En vuestro caso, ¿cómo eliminaríais los espacios en blanco con Python? Cuéntanoslo en los comentarios.

