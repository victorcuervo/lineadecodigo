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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QYMXP7K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcKWisI3f3eqB7E1jEfC6SEk1Bcndyp%2FMaP0V3h7l2OAiEA6x%2FXJqGWh7h5Qpx98sIWGMR81seVvjrBo1Y2L7jrgjcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLLeQbfcHAsQhzrh3yrcA%2By7igSfMF%2FYK7Ci6qdfnSEYEJqCfs7h1EMlLh8UGvW%2Fwg73Fd73Oagfo6XO4bXH2vHQqYM4n0NUBfRddrP4W%2B5wUSH26Rmr3phHqyEV%2FgeLHPOpVvNsaSw5XtAoKBgzH4cHXgV1gh24UNXuLyFZ7fLZCR2J1smuHymk%2BOMz3ENAbE2rSYCi%2Fr14LlJvc%2BcK2D9ZvV2Bebo8l111UzFTrfc6lVSCz1dOcxX2O%2F7m1PC7SrlurnpHlVNStbOIheqisUcCK24DLefP3jGBuL%2FvuRaqy2ycJadEh38UxkrIDY8JblmT%2B70l3MbKqeL5SgOoAxEHKDtxWwhTPPk9IXA9RrgItkQVQGAVG2NqZPiEjNBj1ghMLd1DbouLyVX%2BHYE%2BRhPxevGYC869rNruLWTdUM6oZr0GPKrLNNVSvSGGtvlSg%2BhQpH7ssY85wtk2a5hx2AvIc20ZChsPBVijS2oI3WMpmjXNcoUaiRAL0iohFi3bax154zow9X5E09Lo0K4MJIqAGdbl5iprDyHuru%2FeKsNTen5SiVSa0jiAhQhxafFcbYzSPjOkfRY%2FkeR5hQ6pkQ5cZF8HKYBlYWyswyZbE4FpQVtsXbqWSh2KPpohm8rE8po0jvxfmL%2FyX6SIMJT4y8kGOqUBlOkHPFyKVJOpYwbWzTziskckuHG%2B%2BStIDy1F%2FnxFgstQQLCrL3CU8glzcs%2FtMu9wlkRuEyhrqtCFfpLaTVIHA%2FegTflPO6MIT8aw%2Fmpl%2FJ14gyQqpWb98VIK4NnBYWO6witZm0HmtEahSmjot%2F%2B5QJfq%2BlQIqp9E%2FsHFbXh5a4hqg%2FH3N513DOc%2FjXVt5Mm1xZDiqwrPMTplHZ5LDwWJW%2BtB4PCY&X-Amz-Signature=63ca6734215b54b5737ee6b1e023dc9d929997204c6511aab63b308caa2413c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

