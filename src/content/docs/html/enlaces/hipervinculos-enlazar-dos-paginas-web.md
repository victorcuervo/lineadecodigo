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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JIL37SC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T144456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA7hG8y8EBJTO0FSpdMYUVqqGLjPTyUq9Fdi%2B2dRND7QIhAIV7DOS07imwWtyDYwjJUYiOmwfVcMixa%2B%2FVbuQxBWLbKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsJRhYwcFCjQFSpoAq3AN%2BKSTGMqmYqjwaeIpndh9PfkldhUfVliYmx6%2B9VOlnyappcndsz%2BdG7seXHAGY%2Bbvx%2FjqFg13Q6IwlqejNVZtgQ3pDpqONF%2BDVTkcgVq80xAzqPstavNCLEmGgTrebFu1RK1rmuoxIJtYn6kpP1cc%2F0M%2BivOgori8M7GEtBTU%2B9TucSMvMaGit3wWSYe%2Bwo34Np6Gz03%2FWWbAiqVB0XJeXtEsSmS74WVgpuoWc8IhqiJTKOVkDolA3Du54iag6z44ekHV60ccuFvnNLzhS5GB8lfJJisjBCqf1IfYrP%2FmXs0r7hz4OjFQANlx7MXpGVJj4fOsO%2Boy2UI9DsL81Ap2U6wllhKaR4rlF%2B8cJICEaApJriWo%2B6JwG%2FprcVjgI%2FuC0jcMHXhO5iw%2Fbn3uzABrF3lyhxVNAaKMtxC3pkSKmkIEHoqSvG2lMAfNR8L6j8kpIiMDbKmj0vNdvITrEw%2BHRmcQcvR9RlaiHUzQr10pvg9GueY3RdTMlwsQFmnXdi3yFDeJtG9%2BulYcIoXj%2FIN%2F%2BwWMvPVb7Z4ZYghOBqWLYReiUEyq7zfCpPCxW1tey1Uk3Ay48z%2B3eK1B5KCeRMJXz2yAUCEfbLHlJr7QwkBMomJWpQoUow%2F5AeHBqZTDCmtXJBjqkASqfn4jx7iZ16fac%2B67Cd9mRf6sU2kf7F9eyEiWIQvmx9Wrkt1dWyNUP4yoPlgoElyqwZrJBepnd%2FfadYiM8Rh1nW7bIoCffkH83OO6B42J%2BbP%2FdkriUvGTuRv8h9p%2BCHU1qkZVc2RhVtjqwHOWF%2FLU%2BoIfhSxdp%2BYJuDzWaIgHER%2F52bE%2Bz8ICQIq7HMER88W2QGATgV5FHWCCCuQy7FRtjbsDY&X-Amz-Signature=a103c169052892b9a8ae06d4265333491d0ce0d36b41e81caecbd8ab62f10a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

