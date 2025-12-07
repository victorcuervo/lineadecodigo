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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4ABVJ5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PL%2FdppYXm5NOfKZlOCtbJWbY%2F%2FVScr0lxVS0WmKxrwIhAJT2aiaVe1BjOLZDPmwLcSmI%2BVQpBdLd1bzMjenxhnAFKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkszkJgRxfkSye4B4q3AMIpIc8At2E0j0nSTHltA7e%2Bjhlqm2%2B7o2cudJH7GgQi32x0y7xFeX2iKaU1H2a6csAsePT0eUUKmHp4CpwZts2w32W0uDN7UQ7k1Ywg%2B10Ioy3S1Ryw%2BHZHbAOJW1AfEpzXQq4rc0WMdhzGOpx0y8SIuD%2B4rfS1Eb5DKDiebZBTULDyH4S7rKb2j%2BVwm6kialj4n%2BJ7UzQmsBg1o%2FYQbB9LDPCfq2KnDRR1sbDmz9gLqRLrp6TUTrkZRpQbdoX3mbMH9e1G7BASTuhVwssU5SuX3Fbt8bOAKfG6W2ztIKgQ41bV8dHH3BPB9j6AJvqWIRMCUgfjtdmK6kWccDSfQpHUkLxvW38T%2BKsRLuIgQeOwntbGiyYVcuaftqjw%2F3M9eTxRe2xcWBah6HS4Jq36cHOk94eC3YUvBdWfVCj8cfYB9qgAUT6jn4jodoV0I6rojns4M%2FgdUgm4YUG8sOCRswgBfayAyXjUta0qxJo35FsNlO4jWdlHSURGoX8zb%2BHqj1DETH%2FaI%2FqK8bPCgsIS3FOwFJiFelE5JfH9O0yHfCdPiryWsCX1baMwDCvkKN1MmT3AdgxNCSOBknGYFQ%2F%2FuW2rvg%2BzPNOtXCNICfRweo%2FOZAoNcH7P2vgzqqVGzC9x9fJBjqkAUaHRn78bsp9FuOfLIo%2FKuKk7rWuAa6SODT6kgdP0uIEwoTSLUbkSlk%2FIysm51Ys6eqMyOVa529d5b13gZaRdXnH9mG1Xx64zbtG5EsTjRxkHesThF%2Ff5m9tvhi%2FLhapCBr9tCUyLxdFh20MoHd4TiVwpAwoqKGag%2BJ4KRLh5ajFKruLjVtuFk336EDEbXYqvTXYQ3DqDxFbj%2BF3Kqxd5VTnJog4&X-Amz-Signature=526b88ca9ec37e449f97480a9ff7f96637b5c4a0c72bd928f668d2081456eaf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

