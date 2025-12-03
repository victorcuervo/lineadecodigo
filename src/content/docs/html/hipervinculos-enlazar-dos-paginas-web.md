---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUBZ3BEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIETkMA0k5nnWp3vKbVksfj3g4iEU%2BavjuGmTJcBxFYDKAiEAyrObtJ7uHkNIGTIVGFp8n62%2BsMluqSmo8t2AWgsTTewq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPs7ene9a6tPEJOmcCrcAzJjMffrIWHPeKRt%2BJhgbg2CbPVMS%2BUwaABZSgdT3J1mTEJjeiKOzwi19FuPooYT2Jv4EqnA0tvEfekfqy9khKbfA3kwyFz34BzBygc7VZboet%2FnzG9ktMNQdtKMG0%2F1Pz73KhPqQ9gDvZrMOu9LbEBlpYWpl2ucsArvV2NLcqX1zEgog9eg8H%2BPNOOk%2F2Uk2PQzYVi%2BV6do%2FcMTBu2cykx%2FRDfbgj0tLC0CixL1qigKj02e7dAAF4Rmmbv7rxx6aC8mhIoU53NiZAnx8iHi%2Fm5V0e2c6CUltk%2FcjWcy3bWIl5X2itf6imptLPd8Iah1mf5nt1PdGSnIkehr61uRZdra0CF7W7tyKZQhjTSv1Js%2B47SOK7rmG13QktkwtsO%2FwAMrow2OfnJRh7YGzx2YF8Kaoa0Xkx%2FFgONsFM68kwdatHhA0eP%2FsEScZ5TfrKvz7BreBY99ShRk3sbL%2Fr3uCJNip6bGDcTzSIkorqquWSwLezGT6R8R6qbSOOihkAz%2BhRti8tuDTTLIpgDMxYeMgtYBAXYxZHuvjVpdX9y3s3K9Qw3Vn%2FiRxPlT06N1xBRoUIm9qZdUjoewIeWriPGsv1kfrFOnaSjbi2UpypFxSDk88Z3CWjd8s5tfNuwmML%2B9wskGOqUBku60BcvaYNqx43vudFHCQCYCwYshKiOt9P11gWvEWybMGX6pPGEH6C13wr8cFuogQ%2FAK42qACtl7hTR6rvfZPLfKxJHVKbhm3hlwd4tPM9YOXIFfBldn%2B5LywIlTmYxE1zKh%2BsNGPl6%2FloskfLxbWkgZNLHw8en808MDKT8Jutb9Ep5iRV0NBWJoX8WistP2mjB3luhHB1hnlH92SkbPllaH1n8F&X-Amz-Signature=d87df90e7e57f58de023e8070fc6fc044c316f67581f888b2814fae9d9d161f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

