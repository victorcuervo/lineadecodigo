---
title: "XML"
description: "Aprende XML Groovy para leer, recorrer y generar documentos XML con XmlSlurper, GPath y MarkupBuilder mediante un ejemplo práctico y ejecutable."
date: 2026-09-26
updatedDate: 2026-09-26
tags: ["groovy","xml","xpath","ficheros","scripts"]
slug: groovy/xml
type: category
topic: groovy
id: 3e7a9dfb-adca-8057-8c20-ccb429c335b5
author: victor_cuervo
---

## ¿Qué es XML Groovy?


XML Groovy es el uso de las API de [Groovy](https://lineadecodigo.com/groovy/) para leer, consultar, transformar y crear documentos [XML](https://lineadecodigo.com/xml/) con una sintaxis más concisa que la API DOM tradicional de Java. [XML](https://lineadecodigo.com/xml/), o _Extensible Markup Language_, representa datos mediante elementos anidados, atributos y texto.


Para procesar [XML](https://lineadecodigo.com/xml/), Groovy ofrece principalmente `XmlSlurper` y `XmlParser`. Ambos convierten el documento en una estructura navegable. `XmlSlurper` devuelve objetos `GPathResult` y resulta cómodo cuando se desea consultar el contenido sin construir o modificar intensivamente todo el árbol. `XmlParser` crea nodos `Node`, apropiados cuando se necesita manipular la estructura en memoria.


La navegación se realiza con **GPath**, una notación de Groovy que permite acceder a elementos y atributos mediante propiedades y expresiones. Por ejemplo, `catalogo.libro.titulo` selecciona los elementos `titulo`, mientras que `libro.@id` obtiene el atributo `id`. Aunque recuerda a XPath, GPath utiliza la sintaxis y las closures de Groovy.


Para crear [XML](https://lineadecodigo.com/xml/) se puede utilizar `MarkupBuilder`. Este constructor interpreta llamadas a métodos anidados como elementos, argumentos con nombre como atributos y cadenas como contenido. Así se genera [XML](https://lineadecodigo.com/xml/) válido sin concatenar etiquetas manualmente.


## Características de XML Groovy

- **Navegación compacta con GPath.** Los nombres de elementos se expresan como propiedades. Métodos de colección como `find`, `findAll` y `collect` permiten filtrar y transformar nodos mediante closures.
- **Acceso diferenciado a texto y atributos.** `nodo.text()` devuelve el contenido textual y `nodo.@atributo` selecciona un atributo. Usar `text()` hace explícita la conversión desde un nodo a una cadena.
- **Dos modelos de lectura.** `XmlSlurper` favorece consultas y procesamiento con evaluación diferida; `XmlParser` construye un árbol de nodos más directo para modificaciones estructurales.
- **Creación declarativa.** `MarkupBuilder` genera elementos, atributos y jerarquías a partir de closures. También escapa caracteres especiales del texto, evitando producir [XML](https://lineadecodigo.com/xml/) mal formado por concatenación manual.
- **Compatibilidad con fuentes habituales.** Los analizadores pueden recibir cadenas, archivos, `Reader`, `InputStream` o URL según el método empleado. Esto permite integrarlos con las API de entrada y salida de la JVM.
- **Soporte para espacios de nombres.** GPath puede trabajar con [XML](https://lineadecodigo.com/xml/) que utiliza _namespaces_, es decir, URI que distinguen vocabularios con nombres de elementos coincidentes. En esos casos conviene declarar y usar los prefijos de forma explícita.
- **Interoperabilidad con Java.** El resultado puede combinarse con colecciones, clases y bibliotecas Java, mientras que las closures simplifican el filtrado y la construcción de resultados.
- **Tratamiento consciente de entradas externas.** Al procesar [XML](https://lineadecodigo.com/xml/) no confiable deben mantenerse deshabilitadas las declaraciones `DOCTYPE` y las entidades externas, o configurar el analizador de forma segura. Esto reduce el riesgo de ataques XXE y de expansión de entidades.

## ¿Por qué aprender XML Groovy?


Procesar [XML](https://lineadecodigo.com/xml/) sigue siendo necesario en integraciones empresariales, configuraciones, servicios SOAP, feeds, informes y formatos documentales. Con Groovy se pueden extraer datos de esos documentos sin recorrer manualmente listas de nodos ni escribir gran cantidad de código auxiliar.


`XmlSlurper` es especialmente útil en scripts de automatización y pruebas. Permite validar valores, seleccionar registros por atributo y convertir resultados en listas o mapas con las mismas operaciones que se utilizan en otras colecciones de Groovy. Esto facilita, por ejemplo, comprobar una respuesta [XML](https://lineadecodigo.com/xml/) o migrar datos entre sistemas.


Aprender GPath también ayuda a separar la selección de datos de su procesamiento. Una expresión localiza los nodos relevantes y una closure aplica el filtro o la transformación. Cuando el resultado debe volver a escribirse como [XML](https://lineadecodigo.com/xml/), `MarkupBuilder` conserva esa estructura declarativa y evita errores frecuentes de comillas, cierre de etiquetas y escape de caracteres.


Conocer la diferencia entre `XmlSlurper` y `XmlParser` permite elegir según el trabajo: consultas concisas sobre documentos para el primero y cambios estructurales frecuentes para el segundo. Para documentos muy grandes, donde mantener un árbol completo sería costoso, puede ser preferible un analizador por eventos como SAX o StAX.


## Ejemplo de XML Groovy


Este script lee un catálogo, selecciona los libros disponibles y crea un nuevo documento [XML](https://lineadecodigo.com/xml/) con sus identificadores y títulos:


```groovy
import groovy.xml.MarkupBuilder
import groovy.xml.XmlSlurper

String xmlCatalogo = '''
<catalogo>
    <libro id="g1" disponible="true">
        <titulo>Groovy práctico</titulo>
        <precio>29.90</precio>
    </libro>
    <libro id="j1" disponible="false">
        <titulo>Java en la JVM</titulo>
        <precio>34.50</precio>
    </libro>
    <libro id="x1" disponible="true">
        <titulo>Procesamiento XML</titulo>
        <precio>24.00</precio>
    </libro>
</catalogo>
'''

def catalogo = new XmlSlurper().parseText(xmlCatalogo)

def librosDisponibles = catalogo.libro.findAll { libro ->
    libro.@disponible.text() == 'true'
}

StringWriter salida = new StringWriter()
MarkupBuilder xml = new MarkupBuilder(salida)

xml.resumen(cantidad: librosDisponibles.size()) {
    librosDisponibles.each { libro ->
        libroDisponible(id: libro.@id.text()) {
            titulo(libro.titulo.text())
            precio(libro.precio.text())
        }
    }
}

println salida.toString()
```


El método `parseText` analiza la cadena y devuelve la raíz navegable. La expresión `catalogo.libro` selecciona todos los libros; `findAll` conserva únicamente aquellos cuyo atributo `disponible` contiene `true`. Llamar a `text()` convierte cada valor seleccionado en una cadena normal.


La clase `MarkupBuilder` escribe el resultado en un `StringWriter`. La llamada `resumen(cantidad: ...)` crea el elemento raíz y su atributo `cantidad`. Dentro de la closure, `each` genera un elemento `libroDisponible` por cada coincidencia.


El resultado esperado es:


```xml
<resumen cantidad='2'>
  <libroDisponible id='g1'>
    <titulo>Groovy práctico</titulo>
    <precio>29.90</precio>
  </libroDisponible>
  <libroDisponible id='x1'>
    <titulo>Procesamiento XML</titulo>
    <precio>24.00</precio>
  </libroDisponible>
</resumen>
```


El ejemplo mantiene separadas las tres operaciones esenciales: analizar el [XML](https://lineadecodigo.com/xml/) de entrada, seleccionar datos con GPath y generar un documento nuevo con `MarkupBuilder`. En una aplicación real, `parseText` puede sustituirse por `parse(archivo)` o por una fuente de entrada adecuada.

