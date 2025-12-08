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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQROABYP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T031646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2YWMfXpgY0hkfW8kLTBXXvSAvHITm%2BpNG%2Bu7VunwAoAIgdCpHC5grxs8lpmXycH9aozMsAxPOz0FyPl0GzOE7GtcqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJLoTaeW%2FdPXU%2Fq%2BtyrcA181V7rK0MlDTyWe%2FsVzCIN1VCVC6USxgJaY%2BZs5dJUeE9cQcjSDX9muMLo1knTdW4o8JCogjOY8iKgjobcmJNmGTm4oqmtkEZ0XPobhwfQ6GbCXSVg%2Fnm0%2BTviJpQrC%2BUbpDjzOqEfkO9VUaW3uK47I94QtiQ8vBviC%2B42oS1S9mO3HtTdtTAeC6jroZY50ve%2Fo2RWJfiSeLF%2BzviLV%2BAuqK24%2BMRjmMXlp2jo5gG6dNAW8KfNt5b%2BbF6DK%2FO2lvUgdFsvgUfSysmx0ogr5DKwDIBFFGU%2FiTmQpVxy82xsQ9xNsbayXmIER7XbGtIl69MFc8kaRl%2BLvPX%2FPNZFud%2BZnGaA4TPIAQV%2FC%2BMUtksitD1pSrcTEZIAI6TztODiEMWizhynM%2FAbFBeQE0OyUvjpKDm7odHX6nkwKbjhGW0AY79Yh1BARfsjsJhlG2V4Vyr8FLffz5PYEBnjsIKnnPKyPLxYej%2BmLuSHowP5lgWPergdGGU%2Fsuk02rGTLHqhgM89A33R5uUVdS07SHISZE6TRyCY69md95aKmr5El1I7BPl2l7pHMRxDk8XeR3zYHe%2FUVUIXnx6wGkkGvYa3qirTasUlP4zOtRjZBrlPOgajrtxVN%2Bu89Vymx2hc8MI7v2MkGOqUB7jq1M0E6wl6Siedn1DR4a1sqZ8gjCu1gWt4Yoxoxj3BaZ84S7JgduVsXFOUOEBoujJ6IA38cbAL12Iif53gB%2Byh0UIuyHmuML%2BiSHIufKAR4dOiQv6I6JX%2FPlDVGe0tUam%2BQz0ES4kveJS%2FU59dvLxyqSkbXldNEHuwYoz63so1oMBohYekpjIcJ4Tjg1CxNqboSjomipOczFZqFHcBxuMKYhjB%2F&X-Amz-Signature=953b31871d1f1fe30e9e4fc757680243819f9f5722aa14cd516e006fde23695f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

