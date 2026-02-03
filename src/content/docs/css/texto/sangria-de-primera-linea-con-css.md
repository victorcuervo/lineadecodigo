---
title: "Sangría de primera línea con CSS"
description: "Código fuente que nos enseña a cómo hacer una sangría de primera línea con CSS mediante el atributo text-indent y un tamaño de sangría."
date: 2007-11-28
updatedDate: 2026-01-08
tags: ["sangria","text-indent"]
slug: css/texto/sangria-de-primera-linea-con-css
author: victor_cuervo
type: doc
topic: css
id: f066ac28-fa06-428c-a867-3f36cfa9bb11
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/sangria-primera-linea.html
---

En tipografía, una sangría es la introducción de uno o varios caracteres en blanco delante de una línea. Se suele emplear en textos que están alineados a la izquierda. Este ejemplo vamos a ver cómo crear una sangría de primera línea con [CSS](http://www.manualweb.net/css/). En el caso de la sangría de primera línea, los caracteres en blanco solo se introducen en la primera de un párrafo. Un ejemplo de sangría de primera línea sería el siguiente: 


```shell
			En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.
```


Si queremos utilizar la sangría de primera línea en nuestra página web lo podremos hacer mediante hojas de estilo [CSS](http://www.manualweb.net/css/). En concreto necesitamos manejar una de las [propiedades que manipulan texto en CSS](https://lineadecodigo.com/tag/css-texto/) que es la propiedad [`text-indent`](http://w3api.com/CSS/text-indent/). Esta propiedad establece una separación entre el borde y el inicio de la primera frase de un párrafo. El valor que le podemos dar a la propiedad puede ser un valor absoluto o porcentual. Así su sintaxis es la siguiente:


```text
text-indent : [ <length-percentage> ] && hanging? && each-line?
```


De esta manera nuestro código [CSS](http://www.manualweb.net/css/) quedaría de la siguiente forma:


```text
p.primeralinea {
  text-indent: 40px;
}
```


Hay que ver que la propiedad se la estamos aplicando a un párrafo que se representa mediante un elemento [`p`](http://w3api.com/HTML/p/), pero cuando este aplique la clase **"primerlinea"**. Es decir, que funcionará cuando incluyamos un párrafo, dentro de nuestra página [HTML](https://www.manualweb.net/html/), cuyo valor para el atributo [class](http://w3api.com/HTML/class/) sea **"primeralinea"**. El párrafo sería de la siguiente forma:


```text
<p class="primeralinea">En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.</p>
```


Así ya tendremos configurada nuestra sangría de primera línea con CSS. ¿Utilizas este tipo de sangría en tus diseños de texto de la web? Compártelo en comentarios para que entre todos nos enriquezcamos con las experiencias.

