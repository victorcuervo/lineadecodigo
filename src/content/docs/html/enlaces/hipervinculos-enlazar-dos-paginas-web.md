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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFHQFV7N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T163209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHZYc6YjZdRv51KiqBSEecdIdV1MRw1Uu0fyl%2BmcnEkQAiAjtzidhzA4pm3ztz0LHap5jiJDdSN3utkAqlfUTp0dICqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM84EBMiojio%2FWI%2BydKtwD1J4QHzYmglo2oCTdnuje9KPP75NXcUOwFKM74Cf6ay06BI3Eb7GZZLqRLSwW9E76PGAt9jjgmBvoz9mgP9iNt5WYGT4naUmJLpAmrrE3l%2FOrh8w9Nc97ztRBT4akgfWrfp%2Fym3c%2FyJRHTRa9ForxhaYcA7s6wCog0pg6KEKjVrgIJOy%2FCjWxcRj4nG8vB09IFIlvwFBYqROOa%2BavLsHs%2B8Kd1vQRCFdSBejO3%2FHJ5%2BcjYn6P8KG8F4kLxbyepWj21QTuoFEGYH6pJP%2FaJiZr3mcdzdWJv6QIVS7iHL1vxkTmkmxylPI5g9Ir0HKC5ZT7iCiUK1Lsxq0NPH%2BqV8AcIudz%2FivboUSEG%2F34pdzwmlTliH4CqYkMRxSAETAexDXnJDviU9uw1cEuvT5yLmzpzlIkDTfZWSFylWHkxhK9O8r9M%2F7wrRq6aWvmLDG0ClIPsEJ8YekHU8n10yhiRdHQ%2FMiOro6RSLQr6nFnH54q7eBfCID1qOekZNZy5BkHr%2BawX06ZZ%2Fpg123aHYZgcmW3YOVayagRuNOvqtKnjtEvnLStLBMZi3e0787w8o5iu6YCZsZLlqNlNhQZKjduEev36hWhhvKX%2BndE%2FasSOaJk45rBfXH9%2BcF4Yuae3kcwppfhyQY6pgHfOWTzRIbZlENb4J7keRH66Kbz0GT16WAcBl3%2Frs2vtliKlG4gkR%2BU4G1SqoYnQCkzkIZb3M%2FX8s86Oh6iLz3Gt2lhG%2BAqD8zJZ3ZB%2FK%2BKcfyFwTmWVkXGzudvf9jWfe0VrQToYjRuUzv3272CwigKR5Ko4kjibNsV%2BomWlv8VVz049uriYbrUV3ZnJK321SsrZQPVs66sxPIVGn7iaph5Zy%2BCiu3f&X-Amz-Signature=0045767890474066693b3eb31da6d1e6c1721a4b9f322f7ca0424e7fb3b302b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

