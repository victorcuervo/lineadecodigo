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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCZQCFP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T003513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFr%2B2PUoQjNsKhLjNFtR4tsvhNdLi4McGakZht10awPQAiEAmnqy9ewZmOhfG%2B3wCy4qNXHVzlJ%2Big96cLu%2FK8C2EcoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBMs5B8A9120vx65xircA9gU5rhTUMHf7q%2BUvQrqNsgJCOQgk5te9l6sWC06mhOuXr8Wgj8KjACGa4aOZ0AXsyWD%2FaVgrUepH%2FebBDvAZa6cS3lXLOu7d4ybXA9bqiXJQNsFoT5VRZj624IrSq1kLm6oB29Pn3o%2BsIPNUqUW7R7H73aUhjIK6o%2FftP164gE9RtddYuPw7fExvtqpXarplbw7P9gHpm%2FbYDU8aQGcFGO%2FxarHbxrLg8dGtEtEGi36LCdOdbB2l%2FHp4a%2FhkFETfOZjn31nfSmwRrvtJdYs2BNGAJNq85fAjr4LlKEcwYSn8IPZQCmy8vXJxlbRpGdrEDwJpJgFaJgxVpK5VaKZKfBML686%2FcBp%2FrCdCpQ1XIa0BOcqZ%2FWjANFhZi2hMSEPFBrff3W8%2BQ3ak15Zp%2Fn5bLkq%2FlSVEcQUeKLCjSZkahqMIBIauDQDCaWusDVOA5esZRiqBkFCPyVdV2CcrvvZg8l4AnFg3oqgtiMXjObL63gCcDrFJIDc7qcn8F4TLl9l79ZLDc%2BoCeaqBjoWbo%2B2ZvkyNpr3y6k%2FA6wDeFbj%2FknmaTX6fBrtsCNa71aQSJp0Q5aA2uRcZh%2FYjIlmbDD03UxJGrm%2B%2BIZpfLBDqTvObcFKb2V%2FZlBPd%2BSn7ZzwMNH90skGOqUBPH8IXV8ojFqd4hF8Rs57DE8ppj4x9v2ntLinJcUj9gDvyejKF3T7%2F76zlEoPwklhG8IgOtnc1FguVDzFyCB%2BfCCfhQ9N%2BncM%2Bw81z4%2FfuEj1IB2gzzF39fawlRTZVA%2B6VVHN1pei3wVxKUYgVi4rZx4stNdEKYMsE0oDMaNF3Jd48P%2BjDnB6wIxv%2FH%2FaqkwzqD6IIXoLI5RqbjkUypcrlAHJ7fVU&X-Amz-Signature=db72032974a4d8142d7c1341241209c17977aa3730137ca3950d4baa61d21242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

