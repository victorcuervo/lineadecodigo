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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IVFC7NL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHDVVe1OlxawbLJ1qCihF%2Fog15SEphPCd5jpuv7HoHOAiEAol%2F1o3ylTB%2FUvZ5kX8HyawHt45loWxbHGeBCU5neZtQqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoNtQLUIrtTXem3ECrcAx0fF7BL37EDVvjLav%2FiCKrClcxlTBYMXZ0Tu%2FfIbv9jV5m6utMYiGhvtspUeYavr6Fh4Pdds7HlKUXskPCCaDewxcmjAlcj3%2BzQiLW4i%2BFKwIwoD1o3K%2BVUxrzH47VTZ11l3Hu8X4t3%2F3dQkHY0K4s04ns4JnrOTOEoAz9hfstyNIjEsj16UCIzFpQI5G5ruDW8nIXoPCZZItj7kz2EahRLzx3t%2BQXnOInEIPI7kZ0DBrpNj25MavENgkAVhZs3yWjbYCcGC8ZYySIIb7xpgz3IK7TD52PoPmVuHrvyjkJuaULx6Hy9tF3grrtN8XlKfljJdThmh0wPV35wsYpEwu4S8SsbjlO5GVuhA1kaAlR3aus3Lx8ZkGot03o8H4EY%2Bk%2Bu7xCfbkiWIeyuZGe6EYLkKBz09lxmbF1P1LDnJ54cqy3F9CNeM5jL58RMYA%2BB7SIisPe5HIAQ7t5L1LpByhGqeYbhwuICzq10IDqXIXINri4OD6r2Kl%2BrwOIuXlhdrMgvuStPH80KhLNAe3VTAGw6HxDfkJ3Q8KmLqqB%2FggRUQdxBFNwLZby16P%2Bq8wKwkSdpcRv6Ox2mjzVQSCprdnjVeEojtKKOGW4FzwMr0dwl%2Fz66Nd%2F4U3X5PZ%2BQMK%2Fz2skGOqUB0npmFXeJDum0zUIdddkvNTioNZqsBUd14zsv%2FMmCejy8BMXRNQ3LmxZ2JDgFEiCR7tFsYoArXFpmv6ckt%2BlC%2FW6P%2F1AkxumWyIeB%2FRZ6ut5paudxHiFBKXzCKENcMICDF4qhNIDAwzJJBSkyRNAfjjdsmyPyQFRsjirS9xrEXzctIpYyirr9IDW05EquxAX81rOOSYZxe4rwyeFVDPGRXT%2BKme3%2B&X-Amz-Signature=1df5c2695e14ee923658e09c31694378a1501cfc50f1b834b73e62912ccd9ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

