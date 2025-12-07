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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCEA7XGU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGjuRs%2FMa8khX31LEP1KCenlLpModeLQEz368QxeksIHAiEAmsSnvGtLjdO2gGcgXu3qTni%2FmhyDSt4dv0VYqs3nv9QqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXDB97qExLdmWQgaircA%2B2Rrs9hl915hOtDGWmMBIAWDzCX78SMMwqU7LVXLwlnnjRkIHZMo7IQW%2Bw4AjQz23hoNbRbwxyjBNIksyGwUVDaI9jDBRSwBbSdPkcHu51kLLr9RQmnEBmFETy3qaH6n0sJ9SlOXQhZV5fvTFhQ7WxsCRQYfB8XgmFpKc2%2F7dbs54NCV5BwH4shaXe9VR27DHS76jGttuBdS%2BQO9KWLB1%2B4q7N0DPV96mSh1DsMgPxa%2BGQse1wsbG7pV0EG8ugTySMeMXW2tCsTjA23VpaQM%2FXKVK8BL5DoNS2UM6NZEtrlwEp2BP5Ax7gFbLtPlUgY%2Bmssym1%2Bf%2B5dTMT2RM1nfQh6ikwWA2jK6%2FeMlZJTR7egu0rrKwAVtVol9pJyy%2BCwk0AoyfftWNmpx9mzsJepJJa66c1QhjPQKw2SSn%2Fw%2FxmVlPzjua%2BaX%2BTWfeGrVZhxC5hukMl07SeffgulgWJVK%2BRDJaWzMHVrKWkpeRUjbtwO%2FWfsn92ZLFK4gvmPa3vnmt%2FXjKjoXp7MiIn3ojg026OQcOqqesLYJODtjoaUBcUDiYWd1Q45%2FIMzRqmbj68PWdoTVZWEWu9GR65qqHWw0Pw3w2B32IIStdE1uYljxBNQpwg2xmH4wXNdqIasMOT90skGOqUBszmI9LyRMtHzpEAZ6DgKuXS3MmvjH9N4RsrznBH2ttZpMM3zW%2BVsyYmwnNbjOOmPDX8Xm50mZ6VuIgOn52QDiK%2BW1E5ZITmVAVicxxjA%2FQPtw6ckXcuMFtGR7tWuSR%2BlM9CBTPaacvvvwGI7x8ESCAqtp0XG%2Fctr%2B1unY03H%2FFU9cG%2FpvXt9PPoUyW5sSs8pU8pwBWTkVUC5eLY83TWN8ULeWfDO&X-Amz-Signature=6ff571cc25c1d4d9e90bca96f6ec11ebcf947a9f1b49cd72b296bf65981f9ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

