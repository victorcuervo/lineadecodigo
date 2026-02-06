---
title: "Uso de @Grapes en Groovy"
description: "Descubre cómo usar Grapes en Groovy para manejar dependencias y crear documentos PDF fácilmente, optimizando tu flujo de trabajo y ahorrando tiempo."
date: 2013-01-29
updatedDate: 2026-02-06
tags: ["classpath","grapes","itextpdf"]
slug: groovy/grapes/uso-de-grapes-en-groovy
type: doc
topic: groovy
id: 2c8a9dfb-adca-8181-a517-d5472f6b2dd5
author: ARIEL
download: https://github.com/victorcuervo/lineadecodigo_groovy/blob/master/src/com/lineadecodigo/groovy/grape/DefinirGrapes.groovy
---

Supongamos que tenemos la necesidad de conectar una aplicación a una **base de datos**, crear un **documento PDF**, etc., pero no tenemos las **librerías** necesarias para ello. Entonces la solución sería usar **Grapes**.


## ¿Qué es Grapes?


Se trata de un **gestor de dependencias** que nos permite usar **librerías** sin la necesidad de agregarlas a nuestro **CLASSPATH**.


## Ejemplo: Crear un documento PDF


Vamos a crear un **documento PDF** mediante la **librería iText** (itextpdf) usando **Grapes**.


### Importar Grapes


Para usar esta herramienta es necesario importar lo siguiente:


```groovy
import groovy.grape.Grape
```


### Definir la dependencia


Se deben cumplir estas convenciones:

- **group**: grupo de módulos a usar, la librería o librerías a usar
- **module**: un módulo en específico de la librería
- **version**: la versión a usar

Entonces quedaría así:


```groovy
@Grapes(@Grab(group='com.itextpdf', module='itextpdf', version='5.1.2'))
```


Defino qué **librería** se va usar, el **módulo** y la **versión**.


### Importar librerías de iText


Por lo tanto también debemos importar las **librerías** necesarias para crear el **documento PDF**:


```groovy
//para crear el archivo
import java.io.FileOutputStream
import java.io.IOException

//librería itextpdf para crear el documento PDF
import com.itextpdf.text.Document
import com.itextpdf.text.DocumentException
import com.itextpdf.text.Paragraph
import com.itextpdf.text.pdf.PdfWriter
```


### Crear la función principal


Ahora creamos una **función** "principal" del programa y le agregamos la **anotación @Grapes** y **@Grab**:


```groovy
@Grapes(@Grab(group='com.itextpdf', module='itextpdf', version='5.1.2'))
def principal() throws DocumentException, IOException {
  //nombre del documento
  def documento="micodigo.pdf"
  Document document = new Document();
  PdfWriter.getInstance(document, new FileOutputStream(documento));
  document.open();
  //el contenido del PDF
  document.add(new Paragraph("Usando Grapes en Groovy"));
  document.add(new Paragraph("www.lineadecodigo.com"));
  document.close();
  println "Se ha creado el documento PDF"
}
```


### Invocar la función


Ahora solo falta invocar esa **función**:


```groovy
//método principal del programa
principal()
```


## Compilar y ejecutar


**Compilamos:**


```bash
groovyc UsoGrapes.groovy
```


**Listamos las dependencias:**


```bash
grape list
```


**Finalmente ejecutamos el programa:**


```bash
groovy UsoGrapes.groovy
```


Si todo salió bien obtendremos un **documento PDF**.

