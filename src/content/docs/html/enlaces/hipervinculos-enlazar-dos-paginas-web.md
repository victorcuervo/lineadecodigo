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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRYZT5T6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BQsL3FE%2FDeJD8GPLnb2z1z0PgJBgR0pbMH9aeoCWW0AIgUqQimxwTrobrNeYFH1c1T9VCaFjyUN28mFeEIlF%2FBWAq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDEIOiQbcAvq4J2OS0yrcA8wfbXu15nT5Uup8wAHGIuPqIEb00N2Ghho9%2Fo3%2Byh7NpFa2JW0HCx66wES3hdWoyCdlAQvn8d%2BXOdabJvVNI0MKbaiy9HRTXjXhtT1QRvKRKzwfDoYrtfMNMI5fB3ZAd%2BoDcXFJ6opfTcNLQ0n6csRJ9Au40NdMa53QW6hxSAMhsBe8i3zOB%2F30Zt97EwbL5W5VpmL9MxQH5KfEy7XRBtBjOcFCWVEd5ag7Ghw8tvtw6IXbQrGCZ8ec5uwF%2F81DruUxi%2FjNOYV9CzAOQXk9CIg5Tr9cXKorkDC59v3EaPM9tXWAY6UgE0axixheV%2ByNDuEBvSMc4BjBVRR%2F6BrraEOWyDYMPVBrNqTnPL5AQvNnrNki83F8AR%2FoD9zJXjTbIvg%2FsGZoJlGxcJjYmrraS8HT5JhbCrGveQzWmNOSvPGAio5642ogci2C8y9D%2BaBAHHJOt7OeFujI5bXgieCW6h3wIB7O4LyjBQxkJgx%2F4GU7caHBX9s6Nx%2FsjEslEJ3elquxrlu%2BXdhaP12iR5UY2MMR7NdUy74w%2Bfnk2tA3HzmIjLS8P8nO6LhTf4v2nT0hnVpbspvHEADaIp0xIJrmnNBF%2FqmlwxrBLAB25ueUKXR2d4vCKo0oWw3urLWxMPHvy8kGOqUBjsaCsq93JeUH5yu1ASdVrXEBVsnJ0TjuhHHipWnmT92GRFavLLMN4luSq2Rgf7PiFHGeNQab8V6bOBhZNydWMjVQn7Gshe28QqyIVAGAejXyRIOAbX%2FkHGYTIMdQ2iNUld4T73Ndj5pBzsoPj4Z6YbqXQR3%2BEoHZaYLqkvkDT1rUYjSNmKbPt2D4eKDHz%2Fdr7dUiDGBS%2B%2Fypy1ZkzBLwSmb6yScS&X-Amz-Signature=83e08201b937773e169e40bfacb4c1a78bbf2421a666824da188fd10dc3c5e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

