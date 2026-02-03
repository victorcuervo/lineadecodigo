---
title: "Documento XML bien formado y documento XML mal formado"
description: "Descubre cómo crear un documento XML bien formado y los errores comunes que lo convierten en mal formado. Aprende a optimizar tu estructura XML para un mejor rendimiento."
date: 2013-03-13
updatedDate: 2026-01-24
tags: ["doctype","element","encoding","standalone","version","dtd"]
slug: xml/sintaxis/documento-xml-bien-formado-y-documento-xml-mal-formado
author: xhrist14n
type: doc
topic: xml
id: a8f78ba5-c604-4cb6-8f8a-d08c5185715a
download: https://github.com/victorcuervo/lineadecodigo_xml/blob/master/xml/basicos/documento-bien-formado.xml
---

Antes de ver qué es un documento [XML](http://www.manualweb.net/xml/) bien formado y un documento [XML](http://www.manualweb.net/xml/) mal formado primeramente debemos saber cómo es un documento [XML](http://www.manualweb.net/xml/). Para poder tener en claro cómo funciona esto, el documento [XML](http://www.manualweb.net/xml/) es lenguaje descriptivo en algunos casos de información o bien de elementos con algún uso específico.


## Documento XML bien formado


Lo básico que debemos hacer para que tengamos un documento [XML](http://www.manualweb.net/xml/) bien formado es lo siguiente:


Al hacer la escritura del documento tenemos que incluir un DTD en su declaración inicial caso contrario debemos hacer uso de una declaración de documento StandAlone (esto significa que no haremos uso de un DTD).


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
```


O, en el caso que queramos que el documento [XML](http://www.manualweb.net/xml/) bien formado tenga DTD:


```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE micasa SYSTEM "micasa.dtd">
```


Los valores de los atributos de un documento [XML](http://www.manualweb.net/xml/) bien formado deben estar contenidos entre comillas dobles de inicio y fin de valor de atributo.


```xml
<habitacion id="comedor"> 
</habitacion>
```


Los elementos vacíos de un documento [XML](http://www.manualweb.net/xml/) bien formado deben terminar con `/>` o en todo caso con el elemento de cierre `</elemento>`.


```xml
<habitacion id="comedor"> 
<puerta a="balcón"></puerta> 
</habitacion>
```


Los elementos dentro de sí deben anidar propiedades u elementos.


```xml
<habitacion id="comedor"> 
<mueble>aparador</mueble> 
<mueble>sofá</mueble> 
<puerta a="balcón"></puerta> 
</habitacion>
```


En todo fichero bien formado sin DTD está permitido hacerse el uso de atributos para sus elementos. Todo documento [XML](http://www.manualweb.net/xml/) bien formado solo tiene una única raíz de documento.


Finalmente un ejemplo completo sería:


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<micasa>
<habitacion id="comedor"> 
<mueble>aparador</mueble> 
<mueble>sofá</mueble> 
<puerta a="balcón"></puerta> 
</habitacion>
</micasa>
```


## Documento XML mal formado


Para conseguir un documento [XML](http://www.manualweb.net/xml/) mal formado bastará con no tener en cuenta ninguna de las anteriores reglas y obtendremos algo como esto:


```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<micasa>
<habitacion id="comedor"> 
<mueble>aparador
<mueble>sofá</mueble> 
<puerta a="balcón"> 
</puerta></mueble></habitacion>
</micasa>
```

