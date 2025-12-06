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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QX45AGBL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICCo7wnC13C5oDSvACFHEEAUpGnM4xc2fcjuY0M1Y1%2BGAiEA5DRMKCndOTxul7hDwnscQno2XoYo8YSsOFPpdAVjjGMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDGllJ9YfHFoM56S3CircA54OwO85s03zs09vNIQ57R8lhfFzB3HrGbEoSFbAUCOFwgynOBhkug1iIijC39XvXzq3K6QxmZMWRi3XVgpQdB8JM90mxC3Q47dj6tTaSPEyQXUTAOscskqz1z111B7aOR36WOdctc%2Bw8FOnvNbDQupJ1eI2ceCWMdr14asRg%2BKLJ5LoquMADTvayPSUzmxSHdwl1TpxztXfqdJVJUjek1A%2Bm%2BWlbrRSnEFuBaAxFufJvT3bpLWdyX%2F5hG0hW5QrHnD3evpd1aphrpECPshchMn2kIpROinbZ4eivuRe7keXjZzqdrp8HVUaK3ND8IQTeqPQwVXPLCzIyCk6ONsa2brmbkifIMbdiAC13r5nwffNjrg4ORBgmH5%2FuzHKlrvumUndV9WpkHmEKAWGwfsqajHUpXYwRJVIvKffqgVKGM%2Bagh3Q7Nx7mgL6pe5P0rc7DCuKi5d%2BbpVLDavSbv8%2FiKioSpEiMHh6wSq%2FCwkuLlqK%2BmI8HuIe9jQObDKelCo6agGm8%2BjOb%2FgAczZsCd54IHzyiOMssfSLzjZ8ttWoIeCIEYBLQlDxwSi%2BPdlB%2B%2B7C%2Fm13D3mDq54tyYyqkOFjKiibA00jLBjQEtzOH6lOXhllJDlCQ6tI%2FlbtAgORMPWm0MkGOqUBsLTtmZI%2FFTSUtrbjs2A8RZlVKy5QbbScOcCogLxSw21H2Q47Pgx2BHUlWduDGvk4kDTpnqa2vji%2BFEBW3WvtSiDUhSSpucHiRHDQhqmwZa4ruIKoYMJqVhef%2FY%2FE3%2BziR%2BvGZDhWDTwhvYVQfccQEbfYjA2SBLrLFTyH%2FGMUYnqveUWexazLWNG33S3a1YVY%2BWYA2Tjzprshe%2FC8OVCof76EaXDN&X-Amz-Signature=d07bbb92f4162dcb48e070ef04986019e3b03e14caaaf1fc0c410fdd198eff5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

