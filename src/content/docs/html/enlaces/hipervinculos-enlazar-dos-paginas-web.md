---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BCTLC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZWMud4q9%2F4I2Tk%2BSEGTwjBMTb2sOyvLoGckTVfXxTgIhAI%2FIyvoP%2BQzn1Eojh%2FIhns1dz%2FlM60Wtyu3sEjO9VuAcKv8DCHoQABoMNjM3NDIzMTgzODA1IgyBfPv7wFFZlIakHxAq3ANTYBss1nyENpohni5V%2FskDKtIMvKcKcYQ1lH2m4T14lRcKPCFXke91lwmZIZm5qQzI%2FtsLR89hxdJFXHtYplAoCGreiHNDP4kZLo%2FDQ%2FYL7YKjzklsajqNtwlruXShCux6jQn6YSuwNldB9yTTS6aTAGFtNa3iHNMf0A9THG9fXn0VID%2BtIErWPOQVwAGs1DuIN1H6I5lbw2yI%2Bgw719Ay0sgCV9IAmctKxcIwE3dGz4L84TNCJkmqNFnR09PC4xSATDwgXQrmtqLD6VIwiCcVO91sSl0%2BhEXeXXRz6r7z7GBK8fkhSzvgoYBTk9HcEGbtRQYH0FbNTloAHPu0DpMgJB2MU96T7UE9KvdARBQrm7tghb%2FEs7puveohFpFLl86BNV9G31HsS7cd8%2BwORRMyjPj9jviRFQdGJwVVsDVq08YbQYRxXiXXWEi%2F83r8GgQVXvwtbQbSFZywm2L7VpIwdjbVQgWjObzz13hGDvwhsdDLdUZ0xEfLRKjdM%2FQbEDSFJZzll26ncpCJC1cz%2B0mS4DG68PIeiZt7Lh3B4YOXw3eAny%2F5B%2BRNoqRGUdSsvnMxV3zDR1Wq1BKTSyVVNyndl19AUdX653pZiQRI4w1HRRpo%2BhOH6VWmgCRKIzCOxtHJBjqkAeHhUbnv0rPIwFKzEXzYyDVCqgbcJDFEcqQZBPRpS%2BZQTP1qtidec63TVJJ%2Bt6Do7qWDCxZfk7Bnso3FLzXHO5FlCBZq4n3um4Q7YPhIGFneF%2BqYJMM6tFBSyt%2BoOnsD%2BzTXFhvwZBKNNDzUr%2Ffv7KpHy28pJ%2F0fN%2FIbd4IJhUPY95s2OCs0CwoHdi1V8SpMCYhh5p36srLRrX%2Fez95WE6MiIMcw&X-Amz-Signature=842daf900d9c3b578c89dc209245182e7b6bcfb5d187a1f116b0b8353934c1ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

