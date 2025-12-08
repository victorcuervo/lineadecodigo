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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C25L4UH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB95Y4TudVnSsfHCFllCn%2FbsVsze3XZdlBZhzSJ0tvcBAiEAqvUZ1DhgEZ%2FJ6cJK1l%2BeDgP3TUYQp3xRfBbXlG8V%2BbIqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKle%2B3gTe8t9Op3uAircAzZfU2O0ZkL4jfqX8XXJZJRZGt%2F1IFNQBesoSV4bEASvHI4lXUBErzqcm0mLjV%2FsY33sj4etfNyZQW6epe8hY7AZSRXEKUVW1gIqoOw731lvSB9g7C7gmtpDl%2Fh2rp%2F9Rzj3r%2BxQOHaYrBA5PKYEoi2GmrUbzQK6yQDwTmQCv2aoZ9CfwoNQgrEVAZnNZy2TV2jOt7UMXllA2ryHvnCTojbW4YLDVDr13SjoC8O1dM4DsFFCodslZQEkvcXUMaMW3C9c1UqY%2BjY2pW2qvvZUmADs6SePg5%2B7S8S1MMQdVQ2UjH%2Fi9LKz6cEgOgcKNOc7oOZXHR0DWcGXjfjuM%2FEYL7xMWCHoQIVyQ9CFjbPG5efmdvePi0cPcVoKrP4V%2FPBYNgOrUF9tBuw%2F7eD5GKqfLlhBWD3MojRYydeLCDBro3of1QhUSAz7o9iw8%2Fm7H0186n9aB%2BdpHOpFyk%2BOba7eLtVWGrpgowdyrVIcFnxIGURAds87pVFpRNTSPIkVkwCrte3m8LoERpWlIJ0EldXwhDBdT75xjJo9JNvfb5iCmBuxMqTnxUA540s2OUL2%2FP3SuysURHVup4zr7Ob1Vvg5NbTNAIR4pN3%2BCSoRRLpsZOaMCLehKPQ9Y8Xy0y5ZMJui3ckGOqUBHLIQ4ISpiDjAeEubb9WbDmBfP1sXzDCAN51L%2Fg9XH4Lb2Rg4vIJEW0q1jWBe9%2Br9s92xb550uZdhJUYqSHwMwKoICrG%2FJjhVcuDlpVz94V%2FOkk1FLZjIdoh9IGQqdneIoQL0i42OmVznKS%2Baji3PT7lOiO5%2Bhsey8BtYgrMU8CDZMY0Mc%2BQWvX1DeYDYlBPf7xp%2BzYK57rvVr4O3HkEGdWdf3OWO&X-Amz-Signature=c0d4b1d3749a58ff18fe5c1647bd0fee512981b766d22ea99072bc0eac52c53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

