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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBGLQVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2%2BG%2FDzQY76uGgbYpXw0YrdXmfiYenvpK9IGF%2FtAbRTgIgB8uc%2FFjXVF2%2BMkhD3jJJJ%2BCLJDXAR9qoaOoS25MwVgYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo4x3ZUKJr2LU%2Fk5SrcA2SizPOtSl0STp6RPoa1I4a%2BkzrkrxXwxPD3fc0R0FQhOK8JyeJZJHVJ7sVwTr2lxeEb5Jmq9XxcIdaq5MGXJ%2BcfDSfUv1D3W9k0SNWYacivPjZlWYluDcYAhNic6fWU6M0LbsibSNODgwo6It3%2Faka1KOpLHIu6j9L%2FWt%2BpFcupC6mRoZxJwEs4NEc6M2b5ZOP%2BdPNIYkkIPOmgAn%2F%2B7ROyw3HR7VVAgzVcNmIuQvY27DPf2KEe8z1HEdhtlHW7ahTjLzaL%2F6KhXgaqK54u1CzZE4cUEBAjSt2xuXs%2FV6t%2F75kgCxEqXxKKQpkpfRBJqhGjWCKs88NN0WC01AAFrpMcqOyt0Om%2FyVX1y2a24XJ3UbKBYV2vYsCrtpOfyYOE3okWlT6j2HOfM8u9r8kmb%2FBCPPh7DWcEw5UhLbGuSWppGSNz2Q4l1BTQPB2rgIETT0I6N9L8s41mEy4AWL5nSQbyh%2Bl7HjUm9Z5fTggP%2BsNHq0JpmOYgLwNHwRQ8cVNM5NFVycQmx%2FEkEPod7ZzlMmHA88g6jaW4Y7XZhKndL81F56wR7uL9GWR8K9ZUZaP4YE0yOPi2%2BD6LKTUDLiC7BmGDOxs3Ap2yeT1AlTHqJ%2F1SQGnZ0i7HILr4mai8MKK11skGOqUBOjyQzgom6T4PmmcCSGvQnIFHYIYpSHxuAV3zLIF284tIQDSmGwPHw5ED0dtetlCkmGI1fCtTWutDsvb70E800wknuK5jyiqLrxAY0RIAQRRAPmpnmImE%2FjgsCXTpBES4kCOnmLLEw5%2BDPRT%2FslRILrA38HKvfmqHPjT6MKiEgAEz5%2FlNnLIsGljR38VelDH2gPnDB0Yau%2FNe4zz70CSYcWIP8gWr&X-Amz-Signature=a57e1e57f3ec629d81c7c60060aded05392bf2ce53bf1ee6de728deb15e9344f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

