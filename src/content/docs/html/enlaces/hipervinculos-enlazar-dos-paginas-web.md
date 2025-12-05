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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGBDUJXH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICYWvsxsMRRBFj7HfbEuS%2BlfZ7h5xiIHna7t4riUSs%2B5AiEAkWzvruVKwybFsw7VEsMJ7RAWIp2JVcNPwo2O9UsC9Qoq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDI4iQGn58%2B1e6q%2Bn4ircAzxrVxIE0wtxuVzoy9EXlEtD4BHrLgu4XhvvqOZcItjX0ozR7euhPiDAbthPvxoY0xds%2BE6udfl0FDhQXvyRyPAheE%2BwbvJV7aEBQvdFc3kzb9y4gO%2BAW5sOf0vrmHWFHzzRUmeexjDWpHyPkCrD5J0bbDIKFzZY3isZj9%2F8rcmGyFRxDiB0O82hadGc7h8xHb7SBWuOMWJB%2BHaXJcTgIIH472ssVRW9n%2Ff2chfMyIIC042FyuaaOcb22606pWAfHuscfeQOTvNlLkjRdf%2BQTjgNcWRy9yRdFtrnCpvBL061oKcXN8boRoFWtbqU1orcgxVzs3SkwNvBMxO9%2BDT%2FoCIojRtwTX3AH5A3bURTWJXPkbdj%2Fr6p64jacx3OkiS1LciAF5P1jAOvKMucG5YjCRMgyA%2BhZmgrx83nWA1qz%2FY5fy0mXfJrkYuaVzhZ0vRW3k2KGhK15L9gMdN%2B2wug8BeAQb4lOZpVYd08lxQmYmiiydgguRV5elwA4Rc0roVtZNUZCPmUbgf1TUOFl1Cu0GQuCoHx7LdAzvSaoGZ4V4BP7mZW8MtqilqK8Di7CyceisxEfVtQFyfu96c0tPbMDdy%2BFYErfBUzgtFVJeu0oj46WKMlYpRTZf%2FzWN0vMIaNyMkGOqUB7IbD996FXuPUMQUAucLAbNEjZ68Szi3ls0sOcv9H1z5ikOQuOUJgqj8x%2BsS1LMkU6Mk6kHPqsd0aAphSUDzQCEYUQap2MI5fLeNy%2FEMGXJbOLU648ng9iXS1SmkGEvUgg4UIxqMRRbHeBwokCGWFYml8psldxzCAfsGwACYLvh9Apij%2FwdeSfIB68ohRzGAklCvNTP1cSNTUh7pfOjUI7hMhG%2B1h&X-Amz-Signature=795ef202726ed22a68c7cf33ffb1e5019bce28e278a98295bc07be02af08a0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

