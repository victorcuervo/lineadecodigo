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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2SW4LW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T023229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIALjIDeL2VPVY2raLIQBC7M2i%2Fi62hsvyMeXzRIgF2PEAiBBuM9te41QelLgECHbL5gT7XlxGNG97%2BFoYn8WnVyP2SqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeA9QIEiaJqzlTtPqKtwDBLuSQNA2byCXwnnZatkC1EixrsZlkiA1rjs36qZ74PjLhU%2BbZhTWZ1GMnGAW0p9XkR11jmemgphnxyqca5tHKQirrwCMZ77J6qLK8vm9g10l2XnEpwjOMPToixkwUSjJ%2BngWFqLDOf%2B7%2BIB0I0MVEKRF3IeCj59McgGQxIgLFgXw6cyohTZOaCnSHJgueV8D1IdTl%2BPTdSW6cnFs5LHSZSe%2BiNoK9PvPZ9Ong%2FMV6YYxD5eoOscGsqIN%2FYorj4%2FOB%2BUTQEpT21b2E25dnBHz6Ym0Vv68p580EzIZraqBYDwGEIhWwdxsQRKv%2F70cAWcWJUspAkYajeQ%2BD8OfRgGWVaoCmecNcc77oCkc%2BqBwbnWNkO7WeoT55qAj45KCK2L2v%2FDz62eWMEToux7XDAYU%2BWD8xdV3s%2FKWzUTWV0leMGb1CmK3FTzeOPNwYmKn5CPi7lWcSuxDwNHyPiMFZFp7dIeGvnpgAsDukmZXXHRioevT7%2F2g%2B0tPhhDzuakWIkNxYvbi6PNIjc0rfTSNgx96LX1ttg388jmYHy2Egc7HUZM6T7XQDV%2B%2Br0xQx6zLd5CGSIhyxD7aQruHrl9FdmdajGdHiksyoIMdrNRnneY3A3iIAdZREyQqLLYCNocw8%2F3SyQY6pgEIgC4b3CfDfZeSwa1KKuWJg%2BkkGDo4QzAlkoiPPhehVkYtkI%2FZMYsq20Acuk53pZaC0oJ88YAQuqRsQqiggTftWAAhJA3UG2GzDcfUpJJKEGRoPxIy2KTYK3XgjIQwPVoDuPMcyfsCAk%2BWw6A4nwrBvBJoR2QUNijtDH%2Bq4FAJjS%2Fm6cC0O0o%2BNwuW8Prf9N2vF%2FraA3Vwye%2FrQijnxZrSgF%2BvVdai&X-Amz-Signature=18876044a33441baf4c7bad82b5c463412f893d21b30d01e0ff27328760eb0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

