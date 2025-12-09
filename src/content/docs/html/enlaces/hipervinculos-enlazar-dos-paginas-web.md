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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWI6EMTL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1vaFnPUiTjbi%2FHTZAhhtJeiTicvNML%2Fpo1FjpN3y9XQIhAI5mQDQl4oixSrzlKBsDf8g320tzhrFkMOC2NL9qWe%2BuKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWFgGh%2BUIg2Z0y4oIq3AOQf6uymezdECQWV7XMAwOQ2Db%2FTk9AnvCGvoII843IT1uP0VPhr7nDjkL0S%2Bo4cQCuy83XqktoSywWOT3OiOmkNQ7W4p4hmgRQzcGiTmuEZSQDi48lMjAK8NePpqSLV8OGhQR2MkM4Nc0iu560Ir4obW6%2Fx0VWxPNdTaL42PZqoo5az6U0B43UlFil6sOD11ggXyP4zHntc%2BTb4a0ymfVoJmPoolK%2FqTOvoCWpS6VP9WDmrLyoEu5C8Nug3BZ2DW4iX2HxyI2tLocg3kfp6wPZjRPss13xBNbCpiqUgWjUXEQGTtm%2FmPad4DnnKYcnoursHaqK8KJCOmGHZQyhkp9vB4QFrYnpftPmpaUguRhphIj2Yd%2F%2FlspbA%2FOpVcGWWPdFMnV6HfH8un%2BV%2BU1XtpACvRM36sqAARftrvZ%2BpUEEf8txhKBCREvn9ymEJTpJ%2BcXNG1VZVFV9drpR783NovaNxg8ucI%2Bd7kgEyFjx6rXHX2c7SjyEEfftR3%2BpgMWDq2tXv9rDRhjdFmc1chZ4tsDXmaMMR8dviSmVzKwMF2v670eYw%2FD2J1wiPp6zlFBk5QJt4pWS1RlXbJB3yLpAF2m2%2BMCqmipNirzUN7%2B%2BOw8%2FKM08e6fszgfUkkMP0TCRmOHJBjqkAW0Xs4jbzAW7opBMWc3domjgXYVD8CGYiypKHqRZy9Zg7nwEXH0Gb9ju0kMrMb3jS2%2BbpQo7Ytpk5CEypprT8NkEiYbwml435ChE9sunf2On6G%2BcKBjTCT4CM8H5d40kj0oZFqF7EMW%2F40aWqAMk6N%2BtbpwXg5hjuc7B9WRP%2BfYLX54s9fbbZCvt%2BsTguZu9%2BoigVwlEsmzV6FYoL%2B7ng9Obmshh&X-Amz-Signature=0a1a1fad5911623361d0cc11938b7419ddb285b75100d4d3d895cd68bd7b4c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

