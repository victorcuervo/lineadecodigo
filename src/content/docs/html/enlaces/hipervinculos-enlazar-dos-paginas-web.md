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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBZTCWDZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T112343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbTbUYPLx6J%2FXtoR0BTu3FmjcTlskfeSQm8vGMHy58%2BgIgQbXcGEJWiU6GyDVxwOvPiBlfPX%2F3Yg2DXV5%2Fu2BEaisq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDKn%2BFy0R4FXkVgFUuSrcA8cmldVpn30M8CI1P3ZUE9TMJfQVYGJl4YFLY0LDBYbFX0X2NoSJDkmWWv%2FfdNsanpJV3gCDwo5WmScJVNsAIJ%2F9gqMOmOAyVZNYN2Z6ny4v7N5GcsWKnK5s8KL3tT5EudTgsdak4NGM4x1vG8mYVUc%2FKd3Up8F129lgy%2BG6aQdymowLQARWzAD0PWLAgJwqubQktl2aZgY%2FbReT%2B%2FsW9Aq6%2BBCJSujIkYrxUrvjH4zrkckn3vdVPjNrwwf430Es3RLHcg3f98v%2BaFOVXrBTRrHdLLzbMZ69GT%2FyKBdwvL7PDjzvsdGkm4Ylm5fQCYFe7APXfHsoKJDcBO3YyR6mRIRwjxuW4r2bf%2FhlOilpZEyHEyGXA6OeO%2FFNOlU%2BHgqOgZ6gjFuPBQx3iY%2FwsBxosUvd5gMgQMfoBQiB9PCGI%2FKzsRdbEbaW5QA2oCtWfTjghC%2FgOhH6wx31dOPqQw4x4%2BdNhK3hIvUJS403PQX30Efz7R2uM2XY%2BC9npNFBV%2Falpj3eG3oBvbkibfWk22ttiNhq0ZkFtSFzCWI7QHO8TsrniEc481gujnvYqUkQ9WPAeulEKl4AhZEbbNf095zgFSWFY7RuMmfl8lc1iW%2BjKp8DbWeSnmkOveCMqdlDMN6J0MkGOqUBIgDAfaLC8eejDjKH5Cp%2F4RP3vZTL%2ByHMQ8Pc5L3ibXqlZA3ipg2vapJ0m3VxWytAjzrnnvo%2Br7cPeQWuvxbnH4cFqsHA70wxWacPIvrGU%2FsD5Uq9reuobtDeNU0Xwam4J816SZ4nJEBVi9zWpvg27oEUf1MMXk9EgM%2F43TPaX5UEMbf04s%2Ba7EStPwSCYsMHon84QFwvD1lkWnHEkC4ICf%2FfmXSv&X-Amz-Signature=b81c370d51320d380d38bba56a2af77ccbd7675ed838bc5a8f15ea0e6dba1d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

