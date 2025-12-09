---
title: Incluir una parte HTML en un JSP
description: "Cómo utilizar la directiva jsp:include para poder incluir una parte HTML en un JSP y de esta forma evitar el repetir código en las páginas."
lastUpdated: 2025-12-09
slug: javaee/incluir-una-parte-html-en-un-jsp
author: victor_cuervo
---

Cuando nos pongamos a codificar páginas [JSP](http://lineadecodigo.com/tag/java-jsp/) nos vamos a encontrar en muchos casos con que parte de nuestro código se está repitiendo. Es por ello que vamos a ver cómo podemos incluir una parte [HTML](http://www.manualweb.net/html/) en un [JSP](http://lineadecodigo.com/tag/java-jsp/) y de esta forma optimizar nuestros desarrollos. La repetición de código se nos puede dar por ejemplo en cabeceras, botoneras, menús,… En esta situación no parece de recibo el que tengamos que poner este código en todas las páginas. Sobre todo porque tenemos que pensar en que una modificación a dicho código habría que tocar todas nuestras páginas. Y dependiendo de lo grande que sea nuestro site, esto podría ser inmanejable. Es por ello que podemos utilizar la inclusión de código [HTML](http://www.manualweb.net/html/) en las páginas [JSP](http://lineadecodigo.com/tag/java-jsp/). Para ello lo primero que tenemos que hacer es crear una página [HTML](http://www.manualweb.net/html/) con el código. En nuestro caso vamos a codificar un pie de página, con un copyright,… Este sería nuestro código, el cual salvaremos como **piedepagina.html**:


```html
<hr/>
<p align="center">
&copy; Copyright 2006-2011.
<a href="http://lineadecodigo.com">Línea de Código</a>
</p>
```


Como podemos ver el código no es un código [HTML](http://www.manualweb.net/html/) con sus elementos [`html`](https://w3api.com/HTML/html/) y [`body`](https://w3api.com/HTML/body/). Sino que es una parte de un código [HTML](http://www.manualweb.net/html/). Lo siguiente que tenemos que hacer es utilizarlo en todas las páginas [JSP](http://lineadecodigo.com/tag/java-jsp/) donde lo necesitemos. Para ello tenemos que utilizar la directiva `jsp:include` de la siguiente forma.


```java
<jsp:include page="piedepagina.html" />
```


Esta directiva puede ser incluida en todas nuestras páginas. De tal forma tendremos el [HTML](http://www.manualweb.net/html/) centralizado en dicho fichero [HTML](http://www.manualweb.net/html/). Además de con ficheros [HTML](http://www.manualweb.net/html/) podemos utilizar ficheros [JSP](http://lineadecodigo.com/tag/java-jsp/) para hacer el include


```java
<jsp:include page="piedepagina.jsp" />
```


Aunque esto será otra historia… Pero de momento ya sabemos lo sencillo que es incluir una parte [HTML](http://www.manualweb.net/html/) en un [JSP](http://lineadecodigo.com/tag/java-jsp/) y así optimizar los desarrollos de nuestras páginas web y sus sucesivas modificaciones.

