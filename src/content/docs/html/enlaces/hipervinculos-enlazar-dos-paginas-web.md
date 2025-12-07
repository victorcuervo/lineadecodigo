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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSLVLU3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqvS811ILBOgLgKN4UXBiXCBM9csvno2lLmPFcv7s2IAiEA%2FhQtguz2769D%2B2%2BwdaCann08wb4p%2BnlbpLLxS8wogBYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKNTVkQXhwMHWSncyrcAzpN0j6YbyoIIhpQa1PV6IkmRl86%2FWdVUXo73OUixdpHryHiWl07g5Z3skkKpaKfNg2c6Oq7FqmnO22Dmnc%2B4Os%2FUnnJeb8bX%2Bn5OF8rJcXnZe3z0NiHDJUseKLq7OnwYVTYPxN7kCBzx3I8xSz2TbdT8%2Fl%2FQKjhJYrvQ1qvPEbZmtZnSPstPWSIvErigid5%2Bqz7sfJKEJelxACz%2FYjfDBg%2FoaVUfUh6CeZJ1M2fR60XYXApYPJIUpwhT60OTZUwp1D%2BA7Xa3033%2FO0Jguc%2BsYqINztrQKibsk60DRQGmtYH4w%2ByPuUcPX8W3td2jbZ%2FP2Xha7CqkA7BzG2qoWQSh8IrF1ikX%2F5quamBpBaEhtm0Hds46aT3yO5Oc8AEBWz9Vv5y7cMrEdSirZ4QqzdUkctMFdW3lJeONUhh0OAUcWyBYHM7UgN%2BfGQhsrY%2F4OURyRdXExGLSmIPxaiQWtnr6ogU4lcDsRaLrEjNwik%2FFfq6CUbRPSrTlDMzgye3UB4qS63bZPQZSAQoM153w1ndSCEP9Ur7mwWhMM%2Bt%2FLDSyzWFJJFpgC6WXRTHEZXBCnH7PiwDNU5nhHJgklRaztiAC4go48qz28Cb2o3pOEYs34TGW9F3fgExaIrCnBf8MPSF2MkGOqUBKFd3UYPZ5CBI9HDXjIbMZfeW8a2xzvDJbMRfKnuazM8VgMRYCyZUonqlAuWNUZe5zhbdJ186bebwl0NIVBYFa1bwIEz6z%2FyXsHU%2FIpBiBdH39GcVMHxeQLl7QewbRZ0elD3%2B7PHCOKg4TGVRB3b8AM6uNQyOnBdzwGxYNzRo%2B4sLREhw%2BXF9BJVDk5ZQCZ7lFcihHIhSrDqlhN5pRuggudOo92xd&X-Amz-Signature=0962148db738c5ed23686cddfd7ee46cf084608a823c2ca7d5cfeebb03b203c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

