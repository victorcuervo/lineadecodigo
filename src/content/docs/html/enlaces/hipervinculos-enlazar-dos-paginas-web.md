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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663X7HNSTY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAcYNsGLceigswC98tAe3nwQAfglSky7T%2BDFsNyiAfduAiEAnaqnxkxLBOLpQaQd6o0KDsUx5g4Z6ssluid%2B6%2FNMd50qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNACv8mnFntO0R90jCrcA%2FK5lbm4q0Q3w8Ac1CkdqmjKz5JMhVMffqOpYM4lLU73IvnNsZX18o4FBEQv2jmIGyt38IFAWKKvZrdkoVDK%2FhzjOjtTlSWnidJt42syQMaQ1hvO1%2BeaNOPVPQwLBOdVQWET5xGho3rjOKlPRSLjMsR0pIVsazgqQELvkwNorTlkhnvoc8oHDVehysTVkkgfmMO7potiSacZHwyRiRzax8n1sS7TYxKw7Zw1bChLZepItqOKkB4Tt%2B30eFEWZgnh63hwqgeZMeCfPajQRpBdRA6jstdMIgySWOnqQ3xSUtB4Qz0KxLJur2HZ9k%2B2XVa4UZAaWD2btAl2kadRIpfcokab9ENzQkCx5T%2F%2FPfnWQ7zDu%2FcJjNBO0zJqoipWpGnaojdl1huDNVxV6K3lvxK67Vt35hhszrigf44lwUvWlnsXxScNK2ubr%2FyjsMqgufkrdo68Nj1oAP%2FdMWTCbVUevCnSngXbrZxc0qpIF7OCIyLovptPt8o5MuFaQpPD9dKQMWlSsjDTfwTGzKfRPs%2BCNUAkHjIUdIpHiJZFmdOSNTTUomPCL6z2rzITkfjQYdxBAHJ7kBTWRl5GKy4wRh8M6jsh4Hnt9rtwJCn3owc%2B5m1Iy%2Bov5d8sB8X34opiMIXu2ckGOqUB9h%2BaC%2BEXpQLCz3zEOG8JKrMOIYWpsV71ZvNpWb3pp7HOuM772m%2FcqFkaY3YkcvXtwCYgmrXWnR9zlqusYn6Ig9LBTd5f%2F0tBZnxH2T1YU%2F%2BXpERq3VnuyMHegg7DXy3EDpW4%2FtlEc%2BSi6Nfg%2Ff3JwhJQAc3vrG1BmHGGtdlLbPN7S6bVq2OszJFyTBQf6ujnIYu9vX%2BjOrgzYrYupsgMIBVX71Ek&X-Amz-Signature=a2e7ad4dc16fd2c1274d10646e7c632660ad6bcf2ca383e25c6f5543085b3cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

