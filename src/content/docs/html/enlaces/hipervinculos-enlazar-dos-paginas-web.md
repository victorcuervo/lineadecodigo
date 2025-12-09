---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOYKNLWR%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T165458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtjdDLM70IOWaSf1d5E3pwtRWikOGDqUq97OXj0cVAPgIhAJ8XBtfrIe2gCviLGdva%2BzlUWJliuw%2BkM4d9FN0V0HEHKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMph25sONEY2loujEq3AMkvVQtqNMaF2ojUCWYbM1q78ROO%2FOMoDNkTsRJKJnLTvcXkjm%2FoN3n7Zuh3QMhxK03cpGIRJfMMLevcNg1HEqIUuF4WX30ZQa0kzIxqJbWLwNCkivOCacyi22mv3s9IuwRHYYMETx1lsPjBPbpPnP77qP%2B9u4WQRL2yE7o9LUvQ%2FxK4QGIK9sDt4IskriEqQnl0vpSgsmfvMFNJUHrBWnQoKp2eGSX94dATVp5D%2BUTbt19i5usMBdYy%2Bxid7PQcTl%2F5SGMf9nuqaAg4NoV64fZsMxh6OYJtQo3g4H9VWOnA%2BaSNp7VXoF3AHpKonfuehpXbZK1dYQfXR3MPjYboe0vD%2FTZJ0zML73tTBXzqiX29LBWCQcL7jPuUSLXzEAM1G01ZK%2Bo%2FEDBt9TBTD0utVsIw6gZb27nwWKAFtNxKkSbN4TR32QRyHh20tDkG0H63egC%2F5VZj9AMBnWfvDRDFteR75bzkTsh%2FQHdqZdypVCZtZpWxdNGc4kVC5eBLyogxNcLi2ynWE7eYMA8cLCle9dR1MPgzyAvIc1OOENq02J35xWpAJJ%2FmP95CIGffjwWyVZzYAuaPKPcGBYoXqMBODLBf5PrubUJd3GoZv35V%2BtgeFbYhteknZyki7S2%2FzCbl%2BHJBjqkAZ%2BOoT%2BqKwMYXBTPdxuugegH7dZqQKEWjmLELG%2B%2FV4Jg%2B2SVfcSA7XuwcXZIjx7lNfGaeDqJ8Wubp3CpUPllyekX1e4hn%2F5BlWl2U87OnI7W5UHUzhf8QL57XnEfm400r3iuYEfC%2FI5s18eK4QmcFhk%2FUypVNvDvP9fqsg1AjdbObUw7AtD2xBiqnFgCYUU9dYBnd0PdyEo1jl8TeQCCUp5wBOx%2F&X-Amz-Signature=cd5e7323b63093652ecee7c3e5309b51169bb75b5bfef00557c3f0a2da2be50b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

