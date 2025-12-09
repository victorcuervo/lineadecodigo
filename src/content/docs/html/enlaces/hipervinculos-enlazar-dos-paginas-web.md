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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7DGJMJB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8xvHTbuRTr2OUSETInaZsWwufOcDG5j6daL1IcrSAJgIhAMxcF0WAPp1P72rSwVMfsCI6i4dKxcML6xedYi0wEdxUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyux1mXxxsEBbeMdWoq3AMfqrtEoDWCqfZ6lXrgCHmeqEX164ztCy7TR9BRkdwhmg8%2FiIgrvH0fvwTNDvAsPop698RRVd%2BoGSuqtg19lMn2A2x49zlHpY8zbepeyr9vkvbsUjE%2F7LApfFh15s87VW32puMS8PMRKYMXMn7rB12%2BZiUxNWSuv2ILj4bht85gromNaa3WyO03ogDfNs%2FYZG1MVbSiNj0OQ5puOcMFdvD6zGIyzzdZKBv2i5OwBe5cTtU9b%2BHDnVqwXdDm4E4ZrHHpI5Qv5PhcEbTW%2FwEZarZCGgC3pkY%2B26BK2grhB8JUakm88UX17OA1f29Bh0YEjQ1VtYcqMfA1YK5Xcc71pavC5Q6t%2BB9hIItWyQOKAKc2TR%2FlBkUcjs8kh8bCrDBbh7sS5gsZMSGsjaOS4WQgyfZDf37XhQ3cLWapvOQp8dhmpXk2gELwNJboV8Vax%2FJ%2BfGMzBfGhqRKlRqELccaVbbu49c8RGsdlGjIrOfdDQrNVn8agCKMAy2L5CEIhSGgXYFFTJYpXTShuX1ynqi1yplLe94GMalmrRnHZ7lJVUTghgXdNRIMel1Lkq%2B0Vgk1%2FyYPbioxkEBx2YWBzMCVSb9mfzIZtOAFOd6BKoO9qXzV3g8IaP9IAggf84p7o2zDbh9%2FJBjqkAQPlfN2z9KbZBd%2FBmlMbdtDAkE5T4EF58rvqNZHYA%2BsKAdAnNntrMn9sx1CQfs4sRNuscXF5v0SJ7t%2FNNC%2FhGXUJBoa0p78wjPJlJIwMZscNNd7sOm8rlRhdL%2FUYrt60xH%2Fr%2FuPOfLBBZ6RSHirK5ONPSuRC3wprZMQydcs6k0%2Bji60bqwnJr3dDV5Z0OAXtzTuJ9ZZqWqQRcy%2F0rBL07hkZHIJT&X-Amz-Signature=8936f445dd55d734157575f7224dfe485832d4c8e4a16e959ef65e0f62e33a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

