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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O4MIYDK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4nrv8OTbxPooa2STnvzaMuTCKxpZrFiFnOs%2FQPVnAFQIhAObg5c05joSBWORpTZt1fpvK0tm3VsACYEEb6EPPIe8zKv8DCGgQABoMNjM3NDIzMTgzODA1IgwmpSMHtIn5jir55b0q3AOiRvoOFFkC9OTtBvUAY01A9WHXn7JyV%2BiUJMWi5k%2BLPf9LoEZw%2BpIsJ%2FZm5Jn%2FsNf3koYxrXj8H5TTA0A%2FaHYzlveh130vRz17x9HX%2BCycPQw3s7tTsivaKfFHEsxqA72ACBUpFXYk6%2BudvGlIqex%2FdZOz0PLH12GlPcdQmYjMMTUL1Cof2AhEo%2BHyOaohNXxk5fcbQwBYeMo3LpBLODd4Uc02w1uUZIy6W4SaLmDWcmlXwH6E4FKP8uFAzIunVM1OGemO5F4DRXhWTlQE8QLHAamhucBBdkerB%2Fsq3OhzCpxGrVltC0SAoPpyBVKBAck6dqRkFiwVSNGolbsGUuXHeixuG5%2FJTmAfdKEYkpyfGwiiUO%2BN8E69EvOoAJEv%2BsJXvGrHAZKUSZ87A%2FvWZww6UIG3Zgdts7HdgVun9NW3C1xYqfrYrhsIRJfCENPM%2FDokxWW237wH5pwQTHJXtKmOd73j2aFeBQAs7%2BUy5ClE%2BizMla3kpnfZTUpxS2rMSOuOmI%2B1qI1SdSKwFYtiz05rnjIVWvbKgMoTP%2BLyz%2FKQvODyZE8TZeceUK114YsnPqcNGnkvABlvMulqWo6WvELv%2F%2FBchxFz7Xxz6XNHsJrC0koGpxSr86u0PQrn%2BTDZxs3JBjqkAeq3N6h5shnYH2niYGQKvYLlx%2Bu%2BeYIy3RN7ex6qfZRa16t7pDPDVLmZSbsqfx%2Fupei%2BQlsRRYFmCyqIfhjkDgAv9esM%2FozNp%2BktArlqB5zRvxWxpBXc4LV2HaKYkSt8w0G5%2BQPxHlswczTnHpANGjxVTvNI1EoDKMMWuFE%2B8DLgfH8qkq%2BLmTlA39WFfjs%2FAYJaPRl1Ro0lHlG5uxaO3PPy6QBA&X-Amz-Signature=eedc63261d0c84c0da04cecde6d01eb35f5af6ded8a42807581d377e5b6dcd1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

