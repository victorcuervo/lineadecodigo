---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDGLFVI7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T051327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQD78ZOeNL28k%2F9a1cNE10w2HuH5go0iZIcAY%2BaEx%2FawAQIhAIBZVx%2Bo4VK%2BZaMcSmtmHsJARhsS2CoFteqqlEVTv4b5Kv8DCD4QABoMNjM3NDIzMTgzODA1Igxq6hnaWAXA7y%2B9lV4q3APMJrkwPTlscTek0rPyAv4xf8kJkNZWltnBQTqit4t%2Br0%2Blt8149tLA8TFU2EYws6X3YhhmSLENgyvfa%2FWNqS3TtoLkmOBvmvBBWl6E5%2Bwc%2B86zll6fexmtFFYju8QvJdM7ciIh2DvIVtBM9X58Ox2nwy5SKqzUVO%2Bz7QJliNo3JBX70b%2FzTsE%2FFvDbHqMJIMnrwqgv8a6qCgMQdorMNgggOlbtEQQ1GsSzWUdWxbQ5ab7ZDXT2h5hjV%2BwKBCNEcU6bo2zLMWfh1PYYSplovIGiZNmPyGMj%2FxpcHNY0DOw0Ikk8rq2X%2FGo9tobB5%2FpgRnKL0E9yZ6fofMDgeX8pFL%2BT8N5%2FA%2F2TnB6OV7ZMdbkgqkwPWapnL1uCDuGI28h%2BNi1bEc84v7t4gBR8mikuUJJrzP4c8aJWWG5MzVwfd%2F66gcl2djwBcs%2FZA%2FMIfxya2Ri%2F949yfUeOmNMuAjjepF74o8KPJAV%2B82m1i9kM5SjEJbPqM%2FwJiVWQwF0ZboTnN%2FyUz3IPxuYUllGrLJ3TMzDOODUNKVl17yqwc0qgWAsK9p3Gpqs6lcdmuaChDcKYC1er5azBAO4L5ejImrFIGWesPWCXeRjkfm%2BYJSTCdenGfUcUWWS4dPqKTv6pVTDkrsTJBjqkARbD25z97aJlua1n5bBedDSDIcNxF9gYPN7iT4OnvxcMF8penykcVt8SHr%2BdIhdlad43GS3ENslOBYWX3llO0%2BwUXswwvYvq1O3AQZ6VepTgK5zmLgrQj5ctUkZwO7HAZGN0OKsNrHQdNe7IJ1sujFyB7UCrcPwYEyvGg8%2BavdwK4DoR8sie6sieu4Ye0LvRJKaJWy78zgBMzLcPEArHuT1CDKtq&X-Amz-Signature=d4a631b7dea8f3ed8f1343876594a994ae23d05a7b03b5f060ced7fab4c2eac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

