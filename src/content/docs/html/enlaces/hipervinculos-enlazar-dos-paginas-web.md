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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WV3DRSQZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC4lEFVyVATdEwX2vKPgR6PQ6zA0NzngfdV2mEcHsZh0gIgJRccE5Y%2F0D6kqcSCjYYKHh7bBC83Is0JCgNm%2BsXm2Tcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDMh3LjmMsRHK0dLk0CrcA5aO5arxSqhuijceXexAGy%2FIRnQ1iuJuH2bwiXzUpXKk40RbSubwEHqHnabpAO2efUqCH7MpnKZOWD7G7vIIx4%2FxcHm%2FBrY7jd1GX%2FEZQ3gXvUm4%2BHKmCYjtV2zfXwABNNcYcdXYq%2Fl9eoS52nfTYn4TxDa%2B6Oyd4X5dHYDbbZxOC8J%2FTQyvsVDeb4zHp5%2BSI28fR1w0RY9NAgEr%2FWIDY07GCN0G4r4X6RapCnyrCUbUonPEkwDjDHsjfasidr7%2B%2FvfbLcnPV6%2BQAdUPzP50Y2LUgbQtg3JM84QgHAqe5aOuYKmpHtldaidwgpcQ58bBrjTn9NUtQgJIT8bIYR7XxPwsZwe4QNV6XGSsDZKXdwIW10uWyjA6Uy0N6WX8J1YO3Jq2VMQazNTtyXC91FDg5aspvLh0SsMCCniyG21RcQIUe4VF51%2FJVckdIyKdTDowyg5Kmn6IUxIJNK%2BwSrg5EbUxo3JU1v2kUUJg0BPxvLpmBRvfs6uT%2BKjGSCI3tIStEP9w8q9V%2Fjy1VFCfZWaxQhP%2BSxJlL2t%2B2NfXjLy07yfI0efMgysQCWDtBWP2u55dXsWZc%2FHngimziP478mMaom3dIk%2FzPx58ugQkKhzZlMDQP7rhnWPTzhKEHq6YMMb3wskGOqUBfsibXH7S8R1FpQ5vvt22rZ7aBvaRH9Vk77isKFjNyqTUk9JntvFOn2a%2F8khC%2F5gRyHPpwv1VCOmFvfIuEnIGeZ8EFuAJQi80KOcQFJDiVLUkkVxWLk8I0jIEBZe466z1lhF7T8IHC5GQGVjY7%2B8FJ2uixCeDBlNXoULbh83kVkMtNUhx%2Bh6i4U953QlNdLpG4zpbq4RfIwdr%2Fw4sWGOoZzyVbt70&X-Amz-Signature=a04f87a046d55b4e0897c8e5c871507728ed3993186d1347290294e88b2d6495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

