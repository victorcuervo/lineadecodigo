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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNUWE25%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T120322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRKUuC%2FtGX16nZAU7Rp2zXcE88hdZ0K4kBqIxpmW4oYQIgJ9Vxrcix4XviiaXL3zCqOiOj8I3aw1gwPSVqLo%2F1bd8qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAygyTrPBF2Ifv7btyrcA9xxEq9ZNhLWBIS4n7Uz3vdYYj1XXctf02A9Fs%2FXJ7%2FSISNQrRImHJerR1rwCv%2FmX8sioEQk%2BjOgeM3W25Uh263r3SEcyXZRnqxX6BdOysQBxfnK8KIMJvgD6cyEis7ljXDwzux2rNQi5tI3KS76pf31AH8fEclbAkh15%2BzZFTM3y2zm6uBf1WbF83CTt77UhxgTNwOm21vxFZ6I8B2j3WqWl8lAooF87XSvLWHQANszpiIdltXdYDNFBsQMS7OyKDbTghvhoivH%2FgEUYGtGKynuYeb0ndLDL5TEQHzGHarBpNR9MCH5uABVOiY4JzlCX24WcIwJzflUk1v1iYW1d9QEZnYepMruLAdaW4u9jFdl0eo%2BkH3JnPKBI2fHCe2Kg4SyL1R%2FntjYuec2TQJ5K0tfIfAXYHHgl%2BkN%2Fkz%2B3DCVOysgBrr3jbjUOpSu%2BYrLBE4ddgqMLAUidAfqAkXjILeLnvhZkGSeG90Gn0VeJ94067W7WUufKJxF3XFptSSbPmVfuHOB1rYb0ZXS4%2FBIgTGJ1FY8ZPzRMN0AxvJHadrSBre9pjGMEJ6QiIy9wyoXJWfQ4RjalYuyzIQhqJ1RbohpIR%2F4fj0oLs7bDaSOAUohAXV9%2BsHXNAQMAlcOMJ%2Fz2skGOqUBQVBGdfigO3LKzG2tcGzMs7A3ayQhEgI8JHPiGCtyXe58F9aWcaW2H3YhXFzNWDmN%2BK4TXyAoW%2B979TBIflouXYVrdDQRFrMltBefdtYPKkzv0Fn6H60FG7bQaKDIY9nAFF0HyZ7OABHZtED14bVURlmzhqaOo0wiYnMksIaL9V3HLwivBJee84LzDusC5tAdr%2B4xO3EUUzFHoSQrPtwPJXWMTS3F&X-Amz-Signature=17ba91e416d1f3789a7e7badd0dd8fcf1e424b597a59b335873e28cad52786d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

