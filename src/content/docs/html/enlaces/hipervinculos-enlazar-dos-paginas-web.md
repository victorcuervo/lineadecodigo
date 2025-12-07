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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXS5SW4%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrclm7CORKDl8lWvIjpZjKArmEGfz7zM2sBNorc2tW4gIhAP2HR3E0ZV9pXt6s3bJsx0J2bmBDSbQ3jDmCVEmH2MO3KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuB6c2jOcJg6O%2BCl8q3AMjNPWWnCwv0RgeajDZStU3pdD8TwBBNym6He%2F5IUhyt6HS2IGjEPPvu3%2B7UlkT2hFKtuyJUNtO4xKlRh4V2nTJikFDHLwLMSeITKqZrEDtK2nAEsgc%2FDLDsQm3OxZvtgN8ygqFtZn%2F9xXV2QIXM7%2B0VbRbfrdYK1OX7PjHlCjLK8uOUHFzw0Py7W483CcyXjXJZ0317kXcFfBSQniv%2FfLqSA3rXYKEhEdpmi18p8OTrFX2qpJCYyp80htxWOmutBv%2FOZlYMCxNn%2FJIuV6De0INbCwkvIP3qeuq7LJ4EmW908JNcSV541RnnMfAKmxWAOsWMDhvkHwRc3%2FcmX6ataBKnMlHj1EvyXdv2RA5%2FkQrv6WM6CzFaOBG5U5SUrx1bi3AxJyOl63UPW3ASvmYpCAwGFAY23lID1k7E7ZUSBvhzOscrTpg9PxCfmtXaBvXF0O6j7WtL0yBGrVkEFeks1JvSTNvZ2H0g1rsKMVBSPS3tJ1HjU1eUOqQ2XgPQNIcCing9tmoQQHP726ojVVPXAGh3tGd68taBpymB9f%2Bc4XOk%2FQoQXvTnYM%2FIGWE19fGV7BtUsLyq8W5btPakffGYoABTzDBv0IeiuaIWMNZll%2Be3ONeox%2B5yXzxCb5MyzCKqdfJBjqkAStM2PLAEoVp5oSuFitmnVrBKmHADJZJYjv1JQklTWhEg7WRDF4GFEmrmk0ZKBeEGeNKO67XP76PuBOpLT8%2FS33B6yuT3qHkNL15F0UxAgubWggvfvk%2BiexvIgMZnbS%2BEaXp9AxuaocQ%2Bp59QumY2ZnUO5RHCNnlmJBN654OcPCAI%2B82cMX3E0mqwwJJprwN0WRJGqfwpwEnRB42%2FbU9QYEsGj%2Fi&X-Amz-Signature=bc108f0f1dd96662d32aa7d9998b5c38df6ea4695a46d654050b733b41e95b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

