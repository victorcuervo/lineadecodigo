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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3AIWE6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF%2BSJRMtqQsLyrL3NPC1JtI0DXU7O8AqsT5swbvvEjMHAiEAnmkG07aoXcnjVf1ptw54hXjsFKvg0ForLsVqKNWUEK4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDD9TdMnHmLIPvcmc%2ByrcAxiQGM1tj%2FUkB4InfzMZIWQS4vLg5lvqhGHJ8LRVqweJuGoyMpMAN158IvgYxowdsgyA2d%2FyAVJTpi0APWAD8MxjHJVIIDGDLokeCWkzRUCCDwK0TpPXB1fUdHODMFJG9dor%2FhWY2NKkHRn82qWsdjkYuzBnnNCYWrni0F404UX5TRAjYDJ6RI4gjAnnKdpfY0pGDBfEa6BeLOcy03QUDRjSeKT3No5%2Fz1vb%2BPLbqkx1Y41VltYY0Da%2B%2BQuWry6DJp6uTDcX%2Fj6EjwVObvWkjvaOG1qGmx82PLfyHoWpmPH7PrR9RIZgiq8Eb8H69tPnfQo%2B8w4BRsVlQkk6NPhCSAjOcrZhnTq8OrXbhqMQ3CZUEua%2BmDBNccMaWCnoE0ehAzOMw%2BKuM8FpV9Cnl9omo03vxhVRKy2N02cDcUsyfdP3AtzjbHC3EoXIHOt7rwJcQr67URxDDWJyJDOnrIwsq9G15LfGnlcrnbZiiBGMo1%2FLera%2BjMSybyHdrPsrBzlaWhmIAATlWYmosc%2FdIEuXBlkydtuZ8KAv4thWIZzfqGX4oIEAFhnq1JtwClKF1Fc4Ms34PlGPNG4HUFE3jP9U3KGVSWkuo3%2BoKE3Fcqv6qS5vEgpPRHCXJqZ%2FMXkFML6MyMkGOqUB0bzSQJVPcT21%2FzYdDgfgPmr9NX5wzhgXdQLjX3WvGaKAfgqfkeadiodRrktUei%2FKqykIn18DM9lxlrCbxhjVtQV14KkwiwuwHhD%2FHNZgmRmX3%2F8mhg1TtG09E8s2MKzxuWMjmh5ApS3r1i9ROkrEyILakYFsMe1JKCI%2Bozb6CngU1RHmDFUS7Ni4q6P1tRfAdIb1nSp0%2BDEnr9Pm%2BKTPIUSVmw%2Bs&X-Amz-Signature=4904f8055047aac47fd42f83b563920baae150344b3bbb8726a5a259bea779db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

