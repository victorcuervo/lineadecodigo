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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCUWHP26%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHCgvXXWvtxmX4R%2Baolw0yqtuDvXzalesbuBB0Q9rlBJAiEA52vIFea0EBo2B0RfIsB06BEdieZAR%2FilL5vbUVCC9Kgq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNLleP6I9O8dQv0RSyrcA68V8uqvQE%2FQOu7rHjks4tv45auAAhYngqk0cI6el8LwpSEvjXeIc0LwiGgA%2Frb5uZrmuB9pdyT8z60GerZfej%2Ba278ITC8%2B6KhmkGwlVNpMzlxU3%2BonLHI7m7k1afZ%2Fl98R2Dcuiw8ZP9MVg9JMscZpQxaLl1ECdm%2Fr2MtOpElSQGFfLPh1Z8H52HgdSoCpB5oxS0lbXazBx%2Bb4EQ8iEY9qXrRZNZZjG7hL%2FFs%2FHvbiHWFzaDKDIHW58Hz4ZLhPWyCAhqxIvRw6CQ9a54oulp9KIBdd3WKv1pGn%2B7OW9%2BFBRAsAVl3dCZpph%2BfxVxfmxj5Vc%2BcKYTzN0pVBY%2Frew3pmzFchKg2u6xiZKOKo5UASZBRXfSRnmA%2FCWowME7JTYz2MHMN%2BJ8vFY%2BmzBkGni331PuJtVCXwKbb1nY7YlaU1NxoUIbMYVrQ%2FO1kRdQpcZZVK8c%2B%2FPuHdXOi9dB7AR4cpiuOmZ0SwhpTErfrklkRGt6tcUpGDhihoER%2FJ6z9%2FdG006HOwsd6tTIpZ4rMbRMC4gvOe7hGsRD7KG8nPDvNJMu9Y6L%2FT38EwdDPI%2FOoq%2FIf7tVDduVoyWEOxE%2BokYM9Zax3gXKjEcr0vzz4DeXahlb9%2FbpgLFbbTYBurMLqFxckGOqUBQ7COeV3ZitNUTLdlEbqUX3YgKgKTYcLe5NFYGgEUWhOpOpWwcait69TUFHfbuRQ48cwxNGcBOw7RzhbDD9DgWEIkCkt1v5F5MH5XFz9IiUjKdcsAqkY7r6KJdVUqSIXeqEAGfK7nfw0cyxVMRb7OPdGQAr4kbN0Fd5dfYsGrdXJw%2FogXzHKgrg10%2F4gtraT2q7j%2BfHT2ip%2FB4Hq4mxBVEKNDBuGa&X-Amz-Signature=fd15a55d81de36815a847944ea0689274e22cfd046d4070cc20f8a5bb3d7abdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

