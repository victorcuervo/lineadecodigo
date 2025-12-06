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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR2SU5KP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEGPgwiyBsZPXRXnGabPnbbhQdNqkpZlM9eqcOnYWSs7AiA0Iv%2BiuBm5E0Sn3urdOeGa9bRaPencBtW7sjf8kGc%2BFSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMYBc1tBglwB4QGlSCKtwDDeZrcU4riX1N7Wi%2BRB5fA80OghBx5XPOi3sPPHrbh3mOOdB34C%2BNABDtod24Addj0qIDjpYBUt2Gvu1Do73qWG85CP01G9HK8tTZ0A%2FQFgE6gzPI2dN%2F%2FVy69kyX%2FGk3STg3mXvBUNpYFanE9l965m7v2obfKv5V6zvOfUWqrdIGvK%2F9YrWQn6n4NELQ5IO119GtSrj2Qj8YP4uI5pI%2FaSs%2BYBpe1i42zNpJfuE6kKEpS%2B4eV9GxDE5zvkFeK84q9wIwCzF21Yh57%2BF2TVcq5o1MKOAwTIUiVHJzXTeC1Y8VBtQGWAOPeQygzV7zxW9BHWaKkXZGhS6mqLvKeO1sdsw28pE38su9BfbO11HaFQG%2FKtH2KdVL08hIDHix0LjU5EZU12XRy2Sr1KcX%2FS4i7zd%2FnzscgzgnLrqGm9chAvgWUJy2LqTfIl2uKc8YjP%2Fbqlh3ss%2F%2BToeR30mXiHHA3zjQYjezuEVkIdmaMA5rZnqG8jWdqw7MgvDQQ%2FiY1000LwnxxYDNOgMux9piSvA2i08KkhVtrhrHn9qKReUHBTFe8RNYJLgBpPbrvG1P1dyiUirQYYd9Eh8cYKyVv%2FlTbc5gsz6HNsO7V5nMeLp%2B4tQbtdon9VPVzSIpNbgw1uvPyQY6pgFTuPFCU2gTPFPW8PAikrtxU7wZB1kkXOW1FlfqVkFMjqXa734Mhtdllp4qceEiEAUlbOAI8C%2Fe6CnMEwt6BgrnBi85PDNyfp2SWvIEhTgRw8XXab90s%2Bzwpv2vH38WcyUO4FDOmNSaFD%2Fgp73ZZQRr8b7R0fjubgbLbaiLgMGrq9LIVPknwxwdV6vnJo4UKrzu3rf7775k9ZBp5i9JVepXDAuSykag&X-Amz-Signature=55c729191415c3c79c1923b1c956aa65ccb02f70b5b829376e6558aeca44d048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

