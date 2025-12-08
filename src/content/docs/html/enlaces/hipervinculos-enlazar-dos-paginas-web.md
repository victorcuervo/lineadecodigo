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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM62GHXJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T143300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGw9TWKocVFHJzUAJTICObE7%2BikE4cTbGaGJxxdLDSMeAiEAm%2BbqLpTDiU0eytpPSPiy6iqhb5g683W9FptELPO%2Bb3oqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9QLp3En3EwV46AjircA%2Fp5Lcc5%2Ff4vayl1RmoxpH2w0bNF7LjyJUaqseiSQ7kCaSl%2FIHB2ep6p1X0HDw75y7OJSkZ1U8MmlcVt6WIjM7cRn63Uf5oPwn786fCJZJ9nWdySKT80q6qFbaaq0skfJjtwRwAIxJn3Kw7uNNn7aYhlSBFtubH6CyHcbgNSBbA03dDKD8Kr68BaPjwqGUYd0W6HQoJ1Hxa5j48EC%2Bhmj6YsHKrnWhxU3t58Nbqk2I5I5m93Kr0LV4X%2FhzckIEUgvHIXgBK1Kgw2W4fmk4iDIeJYWFpC9DKAKvABmevmYlM%2BkVAPtvDCTOeupmW6HdDAqvWfJpI2j8gQzhYqzTzame0HALfb7983zvMhexKqZTcBdYsSznw9s2e7z11KL5w0YxS0z0H5GM6hq33QhsPXNlbD0adctprlWFbjSBo5J%2BL8xY%2B76gc8xIiSW22rFBec7moEj7L1K40YxOijUa1ciSE2pq2lasnG7p41z1NRSvlDR0lv3TRXrJs0f5kDLJRAodhGCWXCXLziGLPzNK2551TXqdt%2F6qSv0VyQPmisYYRhii7CJ%2F7QmYqerEWpzZDz2oTmXWiReL8auPyvpfxu3wG4WqFAnwiPegZshs4Bihy6z54wQhdNvh%2F1BrvgMPrB28kGOqUBV%2F3xk%2FG%2Fne5KQdwy4V5EDE56j5boizwwy9dZ%2F3hv7RLf0iM15VE1GtcZCYbAmwKqiKIwjjYfrHDHrgO3jyiHcD1MG3EQ%2FRiR%2B6lWeyX7CYlc6NxXSLDe33rzv5cChfdYq48ocG7SldQEjLuPQkqCYJRDADwgVDg4oQlF0WQgMwQ54UfyLv9HBZLO8BZk5fDEY1p11OzrVQg55TrIdL8E%2B6Kc3%2BIx&X-Amz-Signature=bd05816ba77563fee59b2e5d783c7bafc546c874d6e2c08f27b28515a30b6dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

