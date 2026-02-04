---
title: "Lista CSS de números romanos"
description: "Aprende a crear una lista CSS de números romanos de manera sencilla y efectiva. Mejora la presentación de tus listas en HTML con estilos personalizados."
date: 2008-01-05
updatedDate: 2026-01-17
tags: ["ol","list-style-type","upper-roman","lower-roman"]
slug: css/listas/lista-css-de-numeros-romanos
type: doc
topic: css
id: 5d9fa38d-1050-4d70-acc5-4fc3258b7d55
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/listas/lista-numeros-romanos.html
---

## Listas ordenadas en HTML y CSS


Las listas ordenadas en HTML se representan mediante la etiqueta `<ol>`. Mediante el uso de CSS podemos alterar el tipo de lista ordenada que queremos que sea. Para ello tenemos la propiedad `list-style-type`.


Con ella podremos indicar que los números de la lista sean romanos. Además podemos indicar que sean en mayúsculas o minúsculas.


## Valores para números romanos


Es por ello que tenemos dos valores para la propiedad `list-style-type`:

- **upper-roman** para las mayúsculas
- **lower-roman** para las minúsculas

## Definición de estilos CSS


Lo que vamos a hacer para definir una lista CSS de números romanos es definir dos estilos: `romanos_upper` y `romanos_lower`, los cuales utilizaremos con las listas de nuestra página web.


La definición de los estilos quedará como sigue:


```css
.romanos_upper {
  list-style-type: upper-roman;
}

.romanos_lower {
  list-style-type: lower-roman;
}
```


## Aplicar los estilos a las listas


Ya solo nos quedará utilizar el atributo `class` del elemento `<ol>` para asignarles un estilo u otro. Veamos como quedaría el código:


```html
<ol class="romanos_upper">
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>

<ol class="romanos_lower">
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
```


Y de esta forma tan sencilla tenemos una lista CSS de números romanos.

