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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622HMKA3K%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj0ZX6KEV4tYihuQl8V6wViepS0LNeLx0qeHkdi1nQsAIhAPlQm9shDu2ui4xxWdRaFqCr2X7IGxN42WQfQfVuCShuKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkmHhSXaUNn%2F2BirUq3APf7MxFGziASLKWkkG%2BVjbLpdwPkoa5PvcdFCFDpa7MMmGXhQ2Lyu1mNDTIGMve1hl4XChKYwVnBOAR90zZTw21L1LRVoj5EexAzK6rMTI6c%2FLpJurPkl6kdzdkaTq2W6WO2LJfKZl9AxuOaIwQPTPZa6sz16R8efeXnpGXYVYZg4gbOEElbSBjbsSDnxPflWE8p2NOx57CIfooSAh5HaYlzKkSgwsx966mryYfbv6RcZpPQl%2BgUtP25fdxFpUSO0Hqox5M24bepM0asYa76p7Ux5G4KcL6YfVhe3ZySO6OYmUgAeGut43kf1eEdPr%2BVRJ4mPaTobga92Gr%2B1ORW73fJDYD4ij71hoW7ydVhMdQ27v9LumoakezPIjqNKCwGL9NrjLMIZOXhRmJgodQlsFeoQRQ%2FMWUS8%2BkW8qUX4Bjxz0zSDawEtjtxxVpM7265Io32DRNNJV196h4oJ9PCoNUnzFApfuVwZFiAN0vsbahNYK8ksQeuxZG4ZxN9zgKWj1z0FvPCMycvFHs2ZTVwBQk0rvLqrPwAVC1TV52PSk6ghJ7vScrzMJ2%2BM%2FxjXQbnm%2FcbnjJ%2Fyf1DkqAO0eGGzYmdoJVwGuVUXHoE0qaxFK9B0Gy0g9ZE1PkcaUsJTDo3ODJBjqkASnwgZ7Sh7B4aMPjj%2F%2FZwwlI6hhZTf8m2AUhpo6qEKfzobGzbKzMII7Sqqg2MgFegnFXFQCEqanOwYzRBWPJH3MczKRC8X57dy%2BR8xBolvayJOeDYIbVRH2f2U89M5dg4YR1Egwz7yuZilkSAcX57EaHJoO%2Bk3sqrHtdXLhyo6QnB6cbjy1eiYI%2BbccL9t0OZQRMV2dm5B1cHDXd7bTMXc9H9dsk&X-Amz-Signature=3e61a996a8810c4dc5aebcf84f2cbd62a57faffaf80f7c03182fac2af87d6d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

