---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XAHLRTI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T173726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHOKHQtzse%2FCu6u1zLUEJUmOkrLXf9dRWaoKR8zF2ZK3AiAclPiPcCGqcK4oTwAHtcmrjXD3o5hddS5nU6GVM4N7nSqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdwwCpcgfZUCtopbhKtwD3lK9QLt6PdL9QqvVjsPan0pjt7B3ocPFW6jtpT%2BTOYVRd5%2FgpHeHTvUsxOzDto2c8cLn%2FQ5%2B%2BH9VQjxI3WVal6rhm%2Fv1u0xgG6psKzY5vK3HApAzzU0HXUqEf2NPRBqB5N7F1dMnbnCecCJHSHie4Lo9wU%2BM5Dm8mXR5vM0bPumg06Q1r8oxuzvMNYf97O27L0cx3RP1yAhJGb4UYO%2BodzsV6DXUUM7qM4MleNXPj896VSFxjKk7iBRuEC9WdCQUs8xx1RvXiMbrLvzvb01VRXCe2Q5SpgPckr%2BGpzHBIMgncZllUyCOFnlGrCbt9MHLRlJETkU8LqaOnx1jaxhd9RiPe%2FpzxNZ4n0xBK1SONEOznB1XmL2BMTq5rCaCH1oMiznvdnZ%2B5SOIjPS7hJAC554uUYayUQE2mOrA%2FZ5mTZ%2FWdgluW5a2svsFCb35HDLTIjzS7yg2Yd7J26r6nS0eR56nIKEcPtKhittl7vppfL94Np1kHwSsTecOxkkIr11s23CtoCw8FvwQgbNhGPQwSKFuSRKDV78x6Oru4KEI4NDyLmNyctZIWBt1X%2Bj5l2IYA5FXhSf1med4soN0e1UQCDESe%2F%2FWRtg0PEbbSfSyKoQtjudhlU9y2cHMwCcw65fhyQY6pgE2MUi%2BuaLSt2dCsX7HTs7LEqBnSfkFxbFSbVohxzYKK%2FqGe6%2B5WzzhoFtTCRyGQWEdQkFu9W3VTxP0EOe3j9nc2kRYwfgPGOh7kaNFqQh%2FFP7YjCVQFry%2BNN0nyOzWvLhtxFskWm%2F5es1Gsr8O0W7W0sFdy0gsaX94dPg4WNTVXS5bS9%2BP02ke9MMA2eDuehTvhCC%2F9yQgZpH0rgpDs%2FLuwq2XTqKZ&X-Amz-Signature=294bc2c3bfde87c9995b1047b15ab205f298dec7db6e676d12724c9800d59993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

