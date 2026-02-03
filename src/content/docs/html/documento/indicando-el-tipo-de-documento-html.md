---
title: "Indicando el tipo de documento HTML"
description: "Indicando el tipo de documento HTML mediante el Doctype es una de las cosas más importantes que hacer a la hora de crear tu página web."
date: 2012-12-08
updatedDate: 2026-01-24
tags: ["doctype","w3c","html5"]
slug: html/documento/indicando-el-tipo-de-documento-html
author: victor_cuervo
type: doc
topic: html
id: 2c8a9dfb-adca-8102-bc73-ff684ec440c9
download: https://github.com/victorcuervo/lineadecodigo_html/tree/master/basicos/doctype
---

Cuando estamos creando un documento HTML lo primero que debemos indicar es el tipo de documento HTML del que se trata. Para ello deberemos de adjuntar en la primera línea del documento el **DOCTYPE** de dicho documento. 


Dependiendo de la versión de HTML que estemos utilizando en el documento deberemos de indicar uno u otro DOCTYPE. Así, algunos de los DOCTYPE que podemos indicar son los siguientes:


## HTML 4.01 Estricto


Este DOCTYPE nos indica que el documento es un documento HTML 4.01 y que el contenido utilizado dentro de él corresponde con elementos definidos dentro de HTML 4.01. Además los elementos no podrán estar deprecados. Por ejemplo, no podremos utilizar el elemento FONT. 


Si queremos definir un documento como 4.01 estricto deberemos de utilizar el siguiente DOCTYPE:


```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```


## HTML 4.01 Transitional


El DOCTYPE Transitional viene definido como una transición de un documento HTML sin formato a un documento HTML 4.01 estricto. Por lo cual a estos documento lo que se define es que los elementos que contengan pertenezcan a la versión HTML 4.01 y que además puedan estar obsoletos. 


Así, si tenemos un elemento de tipo FONT heredado podremos utilizar un DOCTYPE HTML 4.01 Transitional sin ningún problema. El DOCTYPE para este tipo de documento es:


```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```


## HTML5


En HTML5 el DOCTYPE se ha simplificado significativamente ya que se elimina la referencia al DTD que te valida el documento y solo tenemos que especificar que el documento es de tipo HTML. En concreto HTML5. 


Los documentos con este DOCTYPE solo podrán contemplar elementos que pertenezcan a la especificación de HTML5. El DOCTYPE para HTML5 es:


```html
<!DOCTYPE html>
```


## Validando el documento HTML


Si queremos validar si el documento HTML que hemos construido es compatible con el DOCTYPE que hemos especificado podemos utilizar el [servicio de validación de la W3C](http://validator.w3.org/).

