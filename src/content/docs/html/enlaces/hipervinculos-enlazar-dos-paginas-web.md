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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRXX225R%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHIBRQt6PY%2Bx%2F0hq2GVdx%2BQVRlHcAbwrjix4yNCvUkyFAiEA%2BBJAg1GznCwHV5RnkMm%2Bk9i7PNZoack9U32A15x%2Ff3Mq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOY4ZM0%2F0zkES%2BM2vSrcA6ZWRsb3WS3dt%2Bh9YgiQwhesWueYlkYqKjMdz1hkOvIlP1kOIAC6OpPXktJDGvnaSlaHqnnOc1aF3xRpwesleRSlTPGsaf3CsfNDl8ECyuvs4NGPii8fBwFENMUaYWBd36bdAsNQmJ03jmUHeHb2Ec%2BgOMzqX0vqx5CokI%2BnSR9xCoA7JPDl%2BrWi1G8n9q3UdYXn7gt6WGe56cV0OK8AVDd28fa7nrS4hSMf0r8tVVIjOzRGx3%2BW2ydVgUkK93IXRW56X2%2F10vMmb%2B%2Fwuuq%2FW%2BdLU8AvtL1uBGfWiYHxtkp3uDWLeZTI8yL%2F98ud7Z6OqcVjF%2BL6u2onmw8RN4mAGKeKpNhw4dx9aieZ4At3cb%2BFcXZ%2Foiejdd5Q2xVi9CkZ0ZFYnIjZ%2BeHTBQ2rKsA5kb7c1bee1gI3nt4R0S2fnQwXnwvvp7Oot%2FfwA9W9N%2FJHLIi3MuAVlk%2FgttoDMi550cLLENmqnUM%2BhmQawBTbNb6Nqe29D4poH27H463nfBYi7DWCm4WadKqRirJi4Urh42pbGR%2FepqvkPKJlAmnCDybSM7EwYxHz%2F5Bs4mqaTCu3rzFgX8s8q3V873tmXaGu89uSOBTL3tIC%2BPuU14P3oGrZmiPquK5SAvhPWtSeMPSrxckGOqUB3ToCJj0qj6J1k82cVywMQldqent4IbLSPgxgKQAuKoJXVCH63NAb1ar%2F77SOs1H4AqPY6CWmtP%2BeuGzUjhtfzPV17%2BrmbNxw21C9fCuSCJ1OSq3%2BIZ%2BShpALLcArNnGnaAbaEzmQDmCjHfW90m3DEs8YaF8a%2BdsmAwvi2zJFVdmr6CRfo%2B%2FmnCzV05VwI8horqYbpgEdFxmSBuNTAklwc9iaZVvd&X-Amz-Signature=ca068bb44b4d837ffb123b3bb18470461aa8d129babceb7bb3f815cc5b3ccbf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

