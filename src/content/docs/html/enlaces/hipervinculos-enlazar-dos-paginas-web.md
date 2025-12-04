---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HB4J3J2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDDOg00iPy3zUH0nHEgW6bZYX53BkaKz%2FB%2B53vHBpdKfQIgKj9ii2TL0tQKWMP91tQvrHCPIaMwvOyuBsOh2F6w5VIq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDDFmwlYsGSw0uMWS9CrcA3uMfL9u%2F6p%2BPHsTzawlx9Xv2Bv662CH2aGO7Aa2%2FeV5LTF9dWvQnNHf3nI4cWQeuKlZOo%2BWkOFDi81qL4J9t%2BbKFjZqGMRIYcIrjGg%2FRyOSPiwBjPmO8ADEsPvt5rQ5BYwixWHnO15%2BIZihVMc0GZyJiQTBYbCPf8SUrwVENrTqsX1PseIf1DMgz2U7eX0%2Fl%2F4SwbobF71yhIxDYx8ABne62LVDIt9wnobj7N1Tuto7AywEUXFjXtC5lpWCvY1If9jH0K%2FfbWY3YAxEgCKnbcCnxtXz06bLABeBS0KYFVX%2FsuV205qU2xjOP%2FyC9H1YNIz78NB0jl7iJxzJ8xc5fApelKLn%2B6E1bJ5D71aeMnUBaDDhDdJ3WiltraI5qZfSUsE43GpTEnBViENZVg9m9OODilEPcSmWLE5%2BMnSaRfM%2BfgIz7lvctfvEUwGxVapNSMNe4xUbJXDOV5y8eqAFOG6PnQMEajb1LFDJLCVKzMewAAw8FL0lUU9qrIqe5dmFXEcVAHWsfVaCZqVfH%2FcFlJHAlkrCXCuWrxX30lZmaA6UW%2BH0AjzMC7wb4RXtS0wHvPHba31SGiHhjqZFgc0LcI7C4zWgKjMOWoMPJFY7orjN36r07LE1VxZH7%2Br1MOTKxMkGOqUBWZNe47WBRNToYGB%2Bb32lpWYMH2gkA%2FVIIcqvCQ%2BtTp0E94idpedyx8zpQxyhbBYhSVJMfD%2BfMh4g0Us3NflhBA1icNrQNPVyr%2BDhkeST0G7Y9evO3FM7cX46VZ79o5RyPPE%2BqdhjcIIOagcqyX1GUfLHrd7aGvlVENU4NUpDH0AyRk2NJpv4uSCaK7ajPYDDx2VIpseJ%2BBIuu%2B6%2FwoCDqM5y7OLe&X-Amz-Signature=9cfcb7e6e87310ddd8bc8d57a8a5b6749d7dc4c37d5342ef63bd0119c2948f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

