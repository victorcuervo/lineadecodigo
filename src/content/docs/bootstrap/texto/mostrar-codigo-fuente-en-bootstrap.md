---
title: "Mostrar código fuente en Bootstrap"
description: "Aprende a mostrar código fuente en Bootstrap de manera efectiva con scroll y manejo de caracteres especiales para mejorar la presentación en tu web."
date: 2015-08-10
updatedDate: 2026-02-02
tags: ["pre","class","pre-scrollable"]
slug: bootstrap/texto/mostrar-codigo-fuente-en-bootstrap
author: victor_cuervo
type: doc
id: 90e10933-0aa2-4739-bae7-dbb3ac29498f
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/codigo-fuente-scroll.html
---

Bootstrap nos permite mostrar código fuente dentro de una página web de una forma sencilla. Para poder mostrar código fuente en [Bootstrap](http://www.manualweb.net/bootstrap/) simplemente tendremos que apoyarnos en el elemento `pre`.


## Usar el elemento pre


Lo utilizaremos de la siguiente manera:


```html
<pre>
Código Fuente
</pre>
```


## Tratamiento de caracteres especiales


Aunque el uso es sencillo cuando vayamos a mostrar código fuente en [Bootstrap](http://www.manualweb.net/bootstrap/) tenemos que tener especial atención si escribimos código fuente que sea [HTML](http://www.manualweb.net/tutorial-html/). Ya que se mostrará la visualización de los elementos, en vez del texto de los elementos en sí.


Para evitar esto deberemos de cambiar los símbolos mayor y menor por las entidades [HTML](http://www.manualweb.net/tutorial-html/) `&gt;` y `&lt;`.


Así podríamos volcar código fuente [HTML](http://www.manualweb.net/tutorial-html/) de la siguiente forma:


```html
<pre>
  &lt;html&gt;
  &lt;body&gt;
  &lt;h1&gt;Hola Mundo&lt;/h1&gt;
  &lt;/body&gt;
  &lt;/html&gt;
</pre>
```


> Con el lenguaje [HTML](http://www.manualweb.net/tutorial-html/) es recomendable que utilicemos los caracteres especiales como entidades. Aunque puede darse que también tengamos que hacerlo con otros lenguajes que utilicen caracteres especiales.


## Mostrar código con scroll


Además a la hora de mostrar código fuente en [Bootstrap](http://www.manualweb.net/bootstrap/), si este es muy grande, podemos acotar su visualización y mostrarlo en una ventana más pequeña mediante un scroll. Para poder conseguirlo deberemos de utilizar la clase `pre-scrollable`.


Así codificaremos de la siguiente manera:


```html
<pre class="pre-scrollable">
Código Fuente
</pre>
```


Por ejemplo podríamos escribir el siguiente código Java:


```html
<pre class="pre-scrollable">
import java.applet.Applet;
import java.awt.event.*;
import java.awt.Label;

public class DobleClick extends Applet {

	private static final long serialVersionUID = 1L;
	private Label label1 = null;
	
	public DobleClick() {
		super();
	}

	public void init() {
		label1 = new Label();
		label1.setText("Haz doble click o triple click sobre el applet");
		this.setSize(300, 200);
		this.add(label1, null);
		
		// Añadimos el manejador
		ManejoClicks mC = new ManejoClicks();
	    this.addMouseListener(mC);

	}
	
	class ManejoClicks extends MouseAdapter {
	       public void mouseClicked(MouseEvent evt) {
	         if (evt.getClickCount() == 3) {
	           showStatus ("Se ha producido un triple click");
	         } else if (evt.getClickCount()==2) {
	           showStatus ("Se ha producido un doble click");
	         }
	       }
	}

}
</pre>
```


Veréis que aunque es un código muy grande, la visualización quedará reducida en nuestra web. Y así habremos conseguido mostrar código fuente con [Bootstrap](http://www.manualweb.net/bootstrap/).

