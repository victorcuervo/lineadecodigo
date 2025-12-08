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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ELEELUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjECbPpfYRPy3p2fheyjw87lVMqIVo45N27FfS1gORQIgY9YMxkg0jZxJZLcUUSJKlXv5J7UwbuBWnInQQKOAVBQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoObgJKsETLKqTW7CrcA2af71qmvXHSaSf4d2Yrv3xlrkHjuO3ZQhzeunrXJiNcTLmZlZxiiH7KkX3dn3lzFSEA7AItzdzbOojGKYnY9F17%2FJ6yIreSSBriTWvyVM%2FuYURVYUL66oesXJBGeklpV6%2Bz07126bWewzfVbW3Ho0l4%2ByqsKk8e546Im1LLRON8VmCdvGQlSlxU8NnV9XNgKaQhoAmh21pYrT%2FALhXexxNdkzcviGM7ZFVWqshny8dLs83PKY6L4yNId8pvf7r1ZshYnZwt%2BL9QsqgQ8TmF%2BbyshH2R2fDdXYavJzlrWMV8YRU3xY8S8HScExouUgCMcooJTiRwW9ERG9GhVjKWQlnoaIYBNJ1%2BXgn2BYsEYKV8rOpaaCbilHeilJj8Rq5RP21d%2Fk61l2wRcwIzOR3GmS5CZEXW2fKZN%2BXq1v4%2BY88mE7BXm5LDXoFJckSpcZHi0oFeeLZqCtjxlaHBwpeiSQo%2BbXr%2BL7gHov%2BImo0VdBFgF2dhBsCbnOPU55pH3qQgnWYBZoAllWMQzDr7kHVhKFn1xU2mIyhohp6IunOqLeHkyo%2Fa63TS5HGRdPJfhQDxUUjCObfmDmmKEFum91oCwG%2FoossKDAPmphdJ9rYnyk8O9GkxLnWFdMx4TUJtMM%2Bh2MkGOqUBtBxXRwgm36Iy2aZxekMcfNY%2BvSEr8rXXSATuhvdEKPyHFYmSCBXNRfpW4f0sDvjTeokVMdszsJY%2BwLDaEcVOLwPyVe4%2BPfUT5ckYhBP7j58qFFpT45zz8XDgu3HHx4UEirHXt1PRr1Ustj6UVL0sV70oQtBPQzCsP9wyyaT2bfCCy2telQsegxRmMxXa72Vc1Xo%2F2pdN%2FEV98zq0bQ5rm05m3DwV&X-Amz-Signature=d911ca308ed6a950007f3381ab6c1ebc53d90108ad9349b06dd04977a5e3ad47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

