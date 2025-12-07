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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6OBRNRA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDIrjbKbifZpHEx5aqHF2D4tDyCHGxEf%2B9m9rYXSSbGAiEA2ejLLss4X5Ie7CsGrm9MIRPAXHTuMc0vMruGN4%2B0d1QqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJaLdvekXD1xpLXi8yrcA7%2BttXMeDKWRlG9%2Fb94WNtkst9RphiK0LFTU1zlRi1J9ZRyXVkKDHgLbBnKzFe7jy1wVxercq1TpQk8ZMsB%2FBIw7lvkTXZ1SlVC1WZwxtti5zWhCkmNJOvBJDneZDvA0m6WOZatqq6SqweW0w2ec5U%2B%2BAgyu02XqlvACO0SdyWkeC8SHLesCiHbsUtzkBzOvIxChDv7FIumFMSknj0czjtni6UhrW%2B8RsCfC3jEZxFYUrQ9KFFN0tgbUtl9wFNCEM6qg3THqe7r7WDFtY4J1xq5Myvl%2FsyPUotQ5tTXh4UAI3w1%2FcQNFXWcVI54dJq1fm4CSxURfN%2F8jXm0Ewo4fna53T4hyx%2FEFe6cSN4oMomMeeG7uGk15zEvb2B3BecbZdPZys8GDvq3ENr%2FitJwI%2FVDouEbDKMO9D9yqOeXv3wyY8VjMdTtL5%2FpL7%2B349vDraAw%2BZRhfRxOXVQXUufzjSbgj%2FVTMUR67jet%2F8vmZpJE5IPsOb7CzVvSPaHpF3Jur3xBydDavO%2BqgN5pztcyYV9yCr5H2%2BV%2FhV7hG1jl1ikpFRmVM6ZMiIHQNPMr3S%2BIMUk5OGhJgUsf5GKJhV1iEU6kZynnjpLVd%2BDkgKszMUuSXFX9q3LJzPHkMb23sMLW91skGOqUBHOpJNkAxHqBv9qy8Cdzx6k7CTaqwJRKGE%2FBhtXvRWCtXqmZL29pgkaEiVQKZt98yHHWBQYir6yofpB5JZqq1X73h%2BuesopXEP8r2ZD9vqiK1cITmosqjWp2mEf8oeSKbBG290%2FL6l7x9E6%2FJiXRUmOQkg%2FnsWZTFWCo8tEsI4F2eY4ZZSE9iMBInvOEqz87AecrCtAfrxbswIlpUs2yyKBP8q4ic&X-Amz-Signature=3d9bb601f0c82f7a5b890963a6ff46fe8663b4231298e22aac20f2a418ddafd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

