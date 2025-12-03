---
title: Crear un fichero XML con Python
description: "Crear un fichero XML con Python a partir de una lista de elementos. Ejemplo detallado utilizando el módulo xml.etree.ElementTree."
lastupdates: 2023-09-17
author: victor_cuervo
---

En este ejemplo detallado de crear un fichero [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/), vamos a explorar de forma exhaustiva cómo podemos generar y crear un fichero en formato [XML](https://www.manualweb.net/xml/), un lenguaje de marcado de uso extendido en la web, utilizando el poderoso y versátil lenguaje de programación [Python](https://www.manualweb.net/python/). Lo haremos a partir de una lista preestablecida de elementos que se nos han proporcionado previamente. Esta lista de elementos será la base sobre la cual construiremos nuestro fichero [XML](https://www.manualweb.net/xml/).


Lo primero será definir una lista de elementos. En este caso vamos a crear una lista de nombres mediante una lista.


```python
lista_nombres = ['Victor','Ignacio','Elena']
```


La idea es que a partir de esta lista podamos generar un fichero [XML](https://www.manualweb.net/xml/) con la siguientes estructura:


```xml
<nombre>
  <nombre>Víctor</nombre>
  <nombre>Ignacio</nombre>
  <nombre>Elena</nombre>
</nombres>
```


Para el proceso de creación del fichero [XML](https://www.manualweb.net/xml/) mediante [Python](https://www.manualweb.net/python/) vamos a utilizar el módulo [`xml.etree.ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/), más conocido como [`ET`](https://www.w3api.com/Python/xml-etree-ElementTree/). Este módulo dentro de [Python](https://www.manualweb.net/python/) permite gestionar de forma sencilla el contenido [XML](https://www.manualweb.net/xml/). 


Así que lo primero que haremos será importar dicho módulo de la siguiente forma:


```python
import xml.etree.ElementTree as ET
```


Lo siguiente será definir cual será el elemento root o base de nuestro fichero [XML](https://www.manualweb.net/xml/). Atendiendo a la estructura que hemos definido anteriormente vemos que el elemento root es el elemento `nombre`. Por lo que crearemos dicha raíz mediante la clase [`Element`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/). El valor del parámetro de instanciación de la clase será el nombre del elemento que queremos crear.


```python
eNombres = ET.Element("nombres")
```


Una vez que tenemos el elemento base deberemos de ir creado los subelementos e irlos añadiendo al elemento raíz. Para poder crear los subelementos contamos con la función [`SubElement`](https://www.w3api.com/Python/xml-etree-ElementTree/SubElement/). La cual recibe, al igual que pasaba con la clase [`Element`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/), el nombre que queremos dar al elemento. Pero además recibe una referencia al elemento sobre el cual queremos crearlo, es decir, el recién creado elemento raíz.


```python
eNombre = ET.SubElement(eNombres,"nombre")
```


Ahora que tenemos creada la estructura tendremos que añadir el contenido sobre el subelemento, es decir, el valor del nombre. En este caso utilizamos el atributo [`.text`](https://www.w3api.com/Python/xml-etree-ElementTree/Element/text/) de la clase para poderle asignar el valor.


```python
eNombre.text = "Víctor"
```


Pero como lo que queremos es ir incluyendo todos los elementos de la lista, lo que haremos será recorrerla e ir creando subelemento a subelemento mediante la función [`SubElement`](https://www.w3api.com/Python/xml-etree-ElementTree/SubElement/).


```python
eNombres = ET.Element("nombres")
for nombre in lista_nombres:
    eNombre = ET.SubElement(eNombres,"nombre")
    eNombre.text = nombre
```


El siguiente paso será definir que el elemento nombre es el raíz. Esto lo conseguimos hacer mediante la clase [`ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/). A la cuál pasaremos el elemento que es la raíz.


```python
tree = ET.ElementTree(eNombres)
```


El último paso será el crear el fichero [XML](https://www.manualweb.net/xml/) con el contenido de la estructura que acabamos de crear. Para ello recurrimos al método [`.write()`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/write/) que nos ofrece la clase [`ElementTree`](https://www.w3api.com/Python/xml-etree-ElementTree/ElementTree/) de la raíz del [XML](https://www.manualweb.net/xml/).


```python
tree.write("new_data.xml",encoding='utf-8',xml_declaration=True)
```


Vemos, que en este caso, se incorpora información relativa a si se debe añadir la declaración de fichero [XML](https://www.manualweb.net/xml/) o del encoding a utilizar. En este caso el encoding `uft-8`.


Con esto ya habremos conseguido crear un fichero [XML](https://www.manualweb.net/xml/) con [Python](https://www.manualweb.net/python/) a partir de una lista de elementos dados.

