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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMYCSUP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7EksxtvQcQQj6fTFCfVoMv4gzEwhFRvHlozzVT6fGaAIgQ7q%2BYObvJZtPugP1rQPlPLGjkEqv%2FBOdVZFd1PVXr2Mq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDPpdd80Ns%2BVYRNooPSrcAz37t8LYY%2FaonLQPBDRS9ylKiCQ3sqzClXBUAfimYfQP1Ncs8jasL1%2B8pBTw9zx0byZghAtX%2BnzEgxuiSCMCpNo4BCUcl%2B13Shv%2BErlSnc5T8AG5c%2BWkJTlBK5S8wooUYbWh5I5jZoDH2Aadyl%2FkIIIINt43G62KO%2B9fU2XLw%2BGETMpdNhp3s%2BxWCdN94NKqwt1K8Ufw3WWF6Lb8wreZXLCxQgVfZmXbGx4sV1%2F0OZITy6DEyWdgEaJu3ehx7FbMSym4gUqjwmgJVJ4zNcpukz%2FxPc1sk2Et6g3YVmUwyflBdQ%2BWNWINiSDdM1M9a21nC68MjMB7isgaU1jDLqY7x6VyHO3PFfhWtb2PQhaqczmcHNkPxuaVEY7j5z9K9rBos4WAecdOgzBiQgCd3t%2B3X7JhVYKp%2FX%2Bt%2FOgFY9cCtT2fWDaZdNsfS%2FSiisMCfrJ8j78Zh7TclJUP1hFVrYs9%2B%2Fh%2FsrGrOV5QrdKiMW1YlC%2F3XFR%2BueTeSoewI%2BWp8PQPPlki4xxinIWKM5IH7e0atpLJxDQw8Pn%2BXlukFfdYSe9ZOXpKcofQKLVC3qfFyzSszpAQWLHtNItMp8Uw2cUCYAo98EGwzrhDhGdifIHkpi48UvcH9Q7EWqb4KynsMJD9zskGOqUBiUVSJ6oOSq6FdCVVVh3OyWYggNK8FE9h6IDZJLwesZry3hYErpF9HPFBSz22%2B9nCNPtcvdEOABf8svPrYIDz6tDcVI%2BYaFl9OPNJI2XRtbwPRGc2xS%2F24MChzaqArfgrReKmITty91UlpTkTCXjHeEHqYuzAxcGkoEMNOCDSKH2W75l2an2KeoWklMYcvpZvol69ODTnqeHCtXn6QBJewpIpFc%2Fo&X-Amz-Signature=9e742f7b1a3bf3391fe7ac71211f68c0a214220947ff91e66f7a9f59f74d32c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

