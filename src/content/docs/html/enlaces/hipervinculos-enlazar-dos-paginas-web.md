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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBCGVITZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoKaq2zHcrPyinurUUIdzEUwpJUGhj8Cg15yJmSqMhFQIhAI0kokhGpeNf4TQOuCQ8dWS5YFSeWGU6jAIZMHC2JWjiKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxi%2FgFcDa%2B3l4AsTbAq3APLCECkJC4QX4VGpmnXay2qdzvOYUGus%2BsSsfb%2BKvJTpujiY5N9dn%2FWqLOT74TbBN0HTK00PKEawmZbqKEqI9vRlXR3jrPXtvZYpALVFyckUAeECojyrO7eFR03aXF%2FK08189aQBkRurpg5m1QzbXGUkyJfshWP68ai0okCMc2qFWtep0%2FZ5e9f8QqmRlidmRNAJz8ztK6Gy0ZwK3oaZLEtBfBY422E9RF1JWyRRMF1i6e6HvRn1MFZ8YVIt43KoK78u0xBZdUSsqWbA41RffTwvTPYNpLLFdW%2FiW8DezBDe%2FTF7vue6h9IVIdgAts5lwDIC9xfIP1VMO5Ux0PMtGjwFGfQ3mUyENvhRgdkcxGwaRaflAlqqiXzP82MqkHdddx%2FRr82D0hH3tTf7nUyA9songZrEXfTolgC4QJrnMEEyQ5XtPzDpgWRK6PdDZf95RxaKYMVjh0fLxMYVXCqRAu317hfZ%2BUdpLxk9FxVj7dsZx%2BkPMoyljylDnP8ANKDcmC3cbF%2BVvT24jff1psxCcJQnTcHj%2F%2BPYaHCxM5nOwtNuTbFNkNyZJ4XOcvNw3pf6F9L0FxJVa%2BDWt6pAyWOKCPITgUNV2DDEnJ6Jh8gZxNcIrYlR8m7%2BNXAOs656jDuxtfJBjqkAdocONN7uUFIalJ%2BjbvOSzkUq%2Ba%2FoWTFuuUk5%2FuqjmZOAtrBVg7QRsksBbh1O1xLsTDVdFAN64LbpQ1UTpdqVhCGPcdDXMNL2lzdS6gx9mjKF7JJG9AwTNsR8YyTw99XbnE1BqT0khnHies8zzHHXtEGnAcJ%2FBytaNQfe4ZKa1quVDpvTbDi5%2FlheM2QfdaiuhDIHMQMVAUDzisYYPgXmeWozl2Q&X-Amz-Signature=8fe834869bdf35db12bc7d334480defaa5c22fce0004499daee1f60abbaa8aab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

