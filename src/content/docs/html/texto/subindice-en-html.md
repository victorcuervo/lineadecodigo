---
title: "Subíndice en HTML"
description: "Descubre cómo utilizar el elemento SUB en HTML para crear subíndices de manera sencilla y efectiva, ideal para fórmulas químicas y notación matemática."
date: 2009-01-15
updatedDate: 2026-01-19
tags: ["sub","subindice"]
slug: html/texto/subindice-en-html
author: victor_cuervo
type: doc
topic: html
id: 3a4f64f6-3ae6-4cd7-bbc6-2163a75fe67e
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/texto/subindice.html
---

Y si tuviésemos que escribir la fórmula del agua en un artículo [HTML](https://www.manualweb.net/html/)... Nos encontraríamos en la necesidad de saber cómo se crea un subíndice en [HTML](https://www.manualweb.net/html/).


## El elemento SUB


El elemento [HTML](https://www.manualweb.net/html/) que sirve para poner subíndices es SUB. Este elemento se compone de dos etiquetas. Su contenido será el texto que queramos poner como subíndice.


```html
<sub>texto en subíndice</sub>
```


## Ejemplo de uso: Fórmula del agua


De esta forma, para escribir el símbolo del agua tendríamos el siguiente código HTML:


```html
<p>H<sub>2</sub>O</p>
```


Que se visualizaría como: H<sub>2</sub>O


## Más ejemplos


El subíndice es muy útil para:

- **Fórmulas químicas**: CO<sub>2</sub>, H<sub>2</sub>SO<sub>4</sub>
- **Notación matemática**: x<sub>1</sub>, y<sub>n</sub>
- **Notas al pie**: Referencia<sub>1</sub>

```html
<!-- Dióxido de carbono -->
<p>CO<sub>2</sub></p>

<!-- Ácido sulfúrico -->
<p>H<sub>2</sub>SO<sub>4</sub></p>

<!-- Variables matemáticas -->
<p>x<sub>1</sub> + x<sub>2</sub> = y</p>
```


Con el elemento `<sub>` puedes añadir fácilmente subíndices a tus documentos HTML, especialmente útil para contenido científico y matemático.

