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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672I3EN6Q%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIASG0uNUPRWlAk2fXtq1H%2FJqR9F949KYceje7CJsPJa4AiEAsVhGIQwGJnyW4vmAueq2JeVWA2QuZzrVQLa38Ja0fGQq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPE4kMtO5%2BoEqp4X8ircA%2B6cZKt28sjQjIfcUZP8TTO9PLjNh2FRXFwy5fZsQz9Wewxn6l28UfpRcNuOePPY%2FbxNGWuUkbSOPTQJwA3AhsSVyM6dDrLEgMjrEBtNo8%2B1MeUoyQyas10V2I8NtT69vTLVJjfz7Gxe9rwoo%2F1fvqYBfWZgD2Q1NHMYhDoEVoszkSnJjV6Mlu4IKwYKBuGIVyjrurOUYe%2FBnGeYUh3JCTQDO8Ggrfz8j%2FDRRGzasRccFrJnitf9GRbruSM5fqEydrhiibsCcVZC3dB40wuPEIeeZ0fiW8CTIhhc%2ByRj9wVZhu7l3KNqvrpqa1MnigoH%2BSXhw4bY5dTzABFIskCDSQn9tEgJwdRt3Kb%2BWpecrUiEUFVmKJYLS2NOR%2FtEMn3eozvUEWfB8mgNasDOmYhZrSE8FQ7ZMJGpBapubSg3WVngAYsaUlmlQwFaj21Ha0GWxU%2FH9Pdes7ik0lE%2BDrW39Qk6u25SaFki5Kj8hdnJ7sgITUrXioXpJVMMjcC4lnGjBvE23iJtwGstjvDe3VUi81ynH5R8zu0hgcuIpMdrmaW9p7aNUJTBmbphz3oYlxPl2Ty8Hez2pIC3rpjks4U65DDobvI%2B2MFigKVge6p3wZj34fr%2FJ2A0dDIVN5eeMJTGzckGOqUBHfEyqqaGOqxi5e1sy3EYg%2Fnid4TCAXk%2BfinbjcwQEbh8l62412jP2RN3MshPu%2BDAi2gQ6xq1KnKvjxaNFE4cixyORE3X4sulDvugRCEJolDUxK6pM3O1snDxKTr866jnwKYMmXuKiWa9tFjQ2pahXU9xEi9gHvQ2FdjCgEWG2O3%2FR7CfwrCxWv9PRzvlLlfUcJfdb1LWenSNAiP%2B3wkVQfSEg1sl&X-Amz-Signature=68adaea6d7cc34cf2feb66407e6c89f4c53b704e6fccc8a77f52032af1807ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

