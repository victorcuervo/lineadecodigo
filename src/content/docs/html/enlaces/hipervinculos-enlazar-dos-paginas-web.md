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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NK7HGJ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T180300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZBNKsudENo6Nh1Eh9w8YUDUtPgx07HqTnWu0asrVfNAiEAtr5cO5WFCv0uTvATbez%2FuEWaAjmeStkY54vy2NsSnYUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDC4BLfoaOLNz46COmircA14zEkaIZOKBV%2BJITEPoz%2FBX0MmjyUsSuixFNzctX8WJftdQR2bUAUuwLyrrpDmFsnZCP96sYUqwaMI6X1XNx8BV6gzQ1FCHAnKJE4wimACt3OKhiJGL7qbS7t0sdtWZi3oNBRk15svJK1JateZ3rprcuEAVWyla1ZcLEX8z97xY6i5Rvd8s1DqCvTd4Vw328Sn0gmRpoSPk2m0aOZ3pbXSxWEozshMnCYzEH%2Bbo8xg85RTJ%2FEYFyuMz%2BXylCQtITl8ggap0oXERUNvjA%2FAQjGwqrMAoNqckNpJrd2ZAb7JBmtKkC76KAse6%2BTK6osRk6xUm8z0%2BWE%2B78SfdJL0QHgF8rwvNF%2BlXE%2FGbuhbF2pByMcQqVeB4tMhIvsfTpr0ZWLE%2BY8wSi190YurQ8OHO3B8DgLWj0MKY9G6GZdIwMf7UU%2BBi7gGEsGELvyKjhB8xfjT7k3d3UbmLAESYt3nNazPbcGIS3FLsEPt6sP1NGa4jn2NmahJVWjC2fxUZ%2FRPsyTAw0DFvqP9VK6VX1SPodu7MKocXb5GaPBioSW2ch1%2BJyacuUTHZ3eDXZZoXDoi%2BZII60cO9dPfqSxoafBN15WXUY4RF0zr0lq6T5tYdVh5%2FN3Y5QQOBXWU4WkjVMOnwy8kGOqUBaWGxYV%2FPH03hoLCCouf%2BLzF%2F9Y39SKlTiMgoaqZFAUPJ%2Fe%2FCpSwrQbyQ1rzyo623QXz3TiAgGZK2f4eZ6tBcpScLunKe8tTKvwvkMo69b0VFFzrv9m%2FJQiNMfdng2TVIVNhsop%2Fq5wm0%2BaU7N%2F8mmTSyOfO2eoILwPr83pGfw3tPHnd3h5DiDKnj0Sz%2F9OeS%2FixFrLKu127jKpoG5SzEpBpLoQ7z&X-Amz-Signature=bd903aa29874834a78d8a2c22271cce9ae102bd56a2db3459c7e8d728807c24a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

