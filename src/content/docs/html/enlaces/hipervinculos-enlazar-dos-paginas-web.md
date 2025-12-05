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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MTM657B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBCjFN4Mpr7qcqUbYYB9HQgKCxqUBlAScwcJc0fClYo%2FAiBAJeGzMP91VsuB4SdCqDKYZeoUoVPnAp7byVJ0Uorcbyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMQM3Doc7kwYaYAb8EKtwDboXjPJJBupkqhLXJPstyEJsHVxnQ581Rbz6h6Q5tj%2FuUrBFyai7II%2FEEU6K0rJ%2FFaVcjzCKIguhXmG1p3iA48DqpM1O%2Ff8nVD5B2gZ94BDf3UvzgZ%2B2gQXtyTr2TziFnn%2BE2%2FHd9S8OuoBXbb3Wq3pWu%2FhUu0b0c2%2FFTt9AwHcLdZ75KNtMTKTg0QntsZFy%2F5mKtwDwHdcb8gI%2BBDRXRQHRq0JQL%2B7EVihVDyzpTvLhyhXL7hOvxoOTt1U9hS4CygnhuJAksjycgzzXpf8PNuFzVm8AH76%2BjljXfaIjwTWxBxYTmXGZLSr%2F4KfiG%2B9ouT3mZ5E514FbWnpq1dKYSfyUWMb5glLXIFmtMCv07wZXRfBUM%2BaOWTlrPrJJ6F%2BZXIdwk%2BoGfomJ2W39TW1wtc2%2F60ESOwbJDjwkOdEpraHmXzmtjgFBwr1MUNTumQz0Yb%2F9%2F3yMPX9bDMZ7fl50kreS1vpr86%2Bwg5zmEwqWX3oyB6B1W393b38QS35J9T63AFIpTSnLeSlLfTt3Uc4its8yovX9v%2FiCf67kKmzlioCR1dHLtF%2BtZCCeXVFk7X7nb%2FdhsnhZ9c4fpd8TlA8MlPFaVDl8fn8ntBn6%2B3bdFGQiU4a4LIdyKjbHk56ownejLyQY6pgHMhLAL4Gh1sk8P4GNQU4KAcGkSer0t%2B7ZKYCZteDt8h%2F4Tvy%2FmFfxt3eflTcbD8I1%2BhOmxU0DN1GBh45Yl7kmpGp%2FyKw%2FDZsHdplimTbitrGeXyAbioc9LpAhN8GHHLielIbMYtqjecirNwgR7uqPFSMh105Oj2URFVDZ8nNfAbkgPnJTYPobH4qCv1Jlhs%2BJ2K0Cn931rzb9R35tUxPAXcyBluWmg&X-Amz-Signature=96b2004ec3aebe3bb8f6fcaadb870ddd03db44698f1fe858ae263cb5441cf666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

