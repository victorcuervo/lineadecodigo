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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFKHMITP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPSZrTQDRrU88yv%2BXkiypPrP26u9w9pS5evK787S4sDAiBP3gHFEdVBpl%2BySzzopalWU0wNqwzXyScggayb2vV39Sr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMGg4BE%2BaM8Toi7kFFKtwD338cYi8wPjBMz14ag59OFFkdF6xXt8RKaaP0XLa6IKF0vhM3IO92x4RO4IuRshbZ9gzIcodxe%2BIwGVSLbx9mAjNz0s1x1HW8D6sOiI8By0%2BMRRmdaRetr2fDvq%2FXxPtegp7uSVAKRE4oK%2BUG3lK5fm70egA6bQp8cPQb6wtPfC8y968G4t9WTu9L8i4cHNxADV0xT0adt0O19ecZFHxKetUfd5v5y5d0HjK31YSHLqWrYsTI0k4W3W7wtZ2aQzx1nP%2F8v%2BrnbKij%2FV9eWMJePtCzYq4T2ORYuKS04uFs33VRUAfpBbVcunn1R3fwUvjU6%2BORVpQmwI%2BNojudexgonjxoDdrt788ub3xF%2FhxTr1lPG7jpV4wZCdsW%2F0JjxP3kEld3yw6pgVNts5IfYdUtXDVvshJIr8OfBqWEJ6fOgxnkrAGl%2BRWLnBd2FLkrWV3%2F4qoafMXPxHEm4Nvou5G%2FbLHBAp8XZsQa0ZsfBw3kFnTihr6CsQOsiaB6W9TL9VJUwvpgT6274E5ksOd%2FmdmviJFMudp1JNa550ubfsNSkc0MMnIhAg5jvhGjM%2F%2FEokOaTp4UBIojlG1CH1T2FuSKXvfK%2BPkBnIAU%2BV%2Fd8QB7vHdn5xxVQDq4AoeE3acwoPnGyQY6pgGGPGKYuXyscxffa0A2LXRWZTvYOnp0cA%2B%2Fqdc89FJQcnKUxraL4X4qdZ6U21rXh572akm0DqbcQnDoQ7ln3b7N072ICy5greqS%2BZQef3qkggwwVMBFNAdaBh3cyDzE00qZLYtu4dtOnDZ8wtKoMW8qaneaLxkA000revBuApgtv%2ByTpT4pGQfaVYGVouybT93WLAJ61qYa2iKeKxYNPKCnsnNrsktl&X-Amz-Signature=6c7cd2eef33a657ef226da16bd59b258223b7286063300e39533c666c3f9a330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

