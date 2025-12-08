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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7WXYZBK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDu0%2BPGvEDNkh%2BsFMTQLR84JZt5ymdRbfd20dDdK4KwGAIgQWWebD5LMhZai8ubIKgJkKr8OaFL41wZwv5EyUrqRmcqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ8NJDpHECjWPN9LyrcA%2B%2B%2BCzckvGW11fqR1uMb47Uy9JnmDJCtQ49eQJ3KmSd3SCmntec%2FKZLWaNpVXKdCBJrahbN71xYLxF%2B0JgKHM9Kpv7tRXvsb7hu1J%2FEUpj4RO7lreSFHUxSRyBQEj4ra7dDZBThYGXtZTx4vn80yqlX9ixpFQMGy4dvFmi4WUO%2BdG9JNPPV8znL2X9Ri5EOhMDY%2BvsvYddv2dmDf0TedwqmELySR%2FtTiqdYBVnpqE94TyJNweaphsMPEPFyu2Y%2ByFgmz2UFfHK6Mpx%2FcbhmzDYcL6R4Pzy4en5MFOZFzmLe8A3fl2%2BShsriZRFSCBLrRAh4fx5d%2BgL80px81cfxj0r5uQXHQXViUsxekxBTEL2NrU8gHx1XfxWZyIt2Mor4E8ookCPf3Q1RK%2FYcSvTayCWic97XNOtErYt1Fu7eLK%2F%2FndkjAbEDjF0AgLbPLO3THngUC%2BjuAnWdzSm8mgyWvo3PO%2FvIIGv7DTyySGamlh%2F7Ae6AFl56fMNgZAoL2p7Rp3ieEi%2FjFy5UK9HPLwvdxDh2egoabFGwX1irv1r71Er0MyWjPcjy7UU7Nym2OzGkTHE1h8YWmY%2BYzGjTMptgRxii0uWMCynmvt1ke%2Bf1WAVkEjytYvt%2Fx%2FP5BpxZJMOXR2MkGOqUBywSXgl79111QyXlO5INqu4UEiDaU7%2FpZRbiQTvnBOH2v758wkgBjC55dPIr0ziqb3Jb2yZJiRTQDAdloXnbxdn8Mu1M1eUoLgh0VVBu1LEtOwEPi2KOll2nECJ2%2FL1vNAFB%2FRchbnK8%2B2MByp5zc4vW9KTiHYFmWgWnfJQS%2BBHN9otOF1dTO%2FvfWu1VOXslv1ZCxkeEl1CANjlE2lNKMQK0Yduur&X-Amz-Signature=a394fd02341c6eb6036c964cac9fbc4b1944e078308fced49ff21ca0ba7349ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

