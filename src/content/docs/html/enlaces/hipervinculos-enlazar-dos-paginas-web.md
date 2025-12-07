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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AJFZBTQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T125904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLNo44H42EUULx%2BVygrgoSzSSyuvH2hk8RbElMnM%2F3EAiEAmOavkgdLBDVYM3dhixG1AbQmUWalR%2FmWP%2FD%2FOyn%2FY4UqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNKgPy0zX4dtQR8BkSrcA650GzE4vQIFM3LGo6QoDy6gF1KHCLLw8xiOi4xZVbgnp5ku332QG5VM%2B4AlVuJMqqaSUnJa3UitM5FP7obvUMYhsCLfTcpg0aN0cwwunVoOu19hj6wg9zHxOVNzC%2FjlV0EMopcmrQzMebNMOaIB48jC10kI3MAIkw8%2FuiK1%2FriDVhNH7J1FpBklICvljuTY76vc1k8bsT5I%2FB5YNYucy1Kx83eS2LC83AAgwHtNCuE4inhRO1%2B4qWfkLQCsiUiQBR7OC8KbuALQzLo2xtQpSuFCae2Ziq2bw6MM3OfzsY2AFS770rEIkWwX5v8%2FewXhFV1oLwrGMUS5Zo7fHkSplfW6lOVMInpUcU6FT5DX8DiGToCi6D4w7eM%2B52lfp4Mycw6xWZQePqtRD1W6epm7c%2FXWPrgKcYRQMRnG8liC2w3n3McQw62%2FCUqTtmBJDNUrsLIfm9MYaPANdrMj96w37G5u1Jq9cmiNta6xJPT71EW59a7xP5Gig%2FyaHV1%2FsBVbtxdx%2FJPbu7y%2BPK4G6FlYG8ywCpg4ksadFbBUhjK5RysJFHA4kEghbzO0u%2BibU%2BUuISb%2FzJ%2BNfFlUHwHAzPCmRt4hM7YdWiPK7vpe3NYCnwDejwHQzGer7xXFfdbHML6a1ckGOqUBkO63S2cHp%2BvQH6MypQP%2B%2BWIeEjm02jVootqvQcKw3y8OpieCG33GK9hRNShgRe%2Bo5OLgOTdxSm6L7dPzWC8MvVZ8F%2FvnwxvpL4W8LMH%2F4Sx%2F2RATC1Wqwg0ObbXdTFrXSzNGVuTURfZDpwkL6RSgysD8O32xy7oEqQFf9j1iYZpO3A%2BJEI3BXBConynfBjB3jxuCZIMqUD3HC%2F%2FRnskH31pHbKa6&X-Amz-Signature=43e72f8e0fcda2b237085c5e5b772bb985f21238185b5cedea93ff50adddc3c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

