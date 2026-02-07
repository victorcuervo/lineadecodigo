---
title: "Crear un PDF con iText y Groovy"
description: "Crea un PDF fácilmente con iText y Groovy. Aprende a cargar bibliotecas y escribir contenido en tu documento PDF de manera sencilla y efectiva."
date: 2013-01-31
updatedDate: 2026-02-07
tags: ["pdf","itextpdf","pdfwriter"]
slug: groovy/documentos/crear-un-pdf-con-itext-y-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-8179-ab36-eb848f7cfe4a
author: ariel
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/docs/Generarpdf.groovy
---

En este ejemplo vamos a ver **cómo podemos crear un documento PDF mediante la librería iText y el lenguaje Groovy**. Es un código que ya vimos por encima en [la carga dinámica de librerías con el uso de @Grapes en Groovy](http://lineadecodigo.com/groovy/uso-de-grapes-en-groovy/).


## Cargar la librería iText con @Grapes


Así que podemos cargar dinámicamente nuestra librería iText mediante el uso de los `@Grapes`, así no hace falta tenerla en el Classpath.


```groovy
import groovy.grape.Grape

@GrabResolver(name='itextpdf', root='http://maven.itextpdf.com/')
@Grapes(@Grab(group='com.itextpdf', module='itextpdf', version='5.1.2'))
```


## Importar las librerías necesarias


Ahora importamos las librerías necesarias para la creación del documento PDF en Groovy con iText:


```groovy
import com.itextpdf.text.Document
import com.itextpdf.text.DocumentException
import com.itextpdf.text.Paragraph
import com.itextpdf.text.pdf.PdfWriter
```


## Crear el documento PDF


Lo primero será crear el documento. Para ello utilizamos la clase `Document` de iText:


```groovy
def documento="micodigo.pdf"
Document document = new Document();
```


Y obtener un `PDFWriter` que apunte a dicho documento:


```groovy
PdfWriter.getInstance(document, new FileOutputStream(documento));
```


## Escribir contenido en el PDF


Una vez hecho esto, abrimos el documento y empezamos a escribir contenido sobre el documento PDF. Para ello utilizamos el método `.add()`, el cual recibe como parámetro el texto que queremos insertar en el PDF:


```groovy
document.open();
document.add(new Paragraph("Usando Grapes en Groovy"));
document.add(new Paragraph("http://lineadecodigo.com"));
```


## Cerrar el documento


Ya solo nos quedará realizar el cierre con el método `.close()`:


```groovy
document.close()
```


Vemos que de una forma muy sencilla, mediante la librería iText y Groovy podemos generar un fichero PDF.

