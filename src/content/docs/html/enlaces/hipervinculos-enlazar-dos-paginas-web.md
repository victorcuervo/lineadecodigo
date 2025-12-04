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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E2XRGCL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T111050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAHOzah%2BumAE7lQXMq%2FRb3qqIUebmgm2z%2FxrVFFN%2BHdCAiEA2i%2BDiieG4SIfmn0NBFVEBzvNwHAxDb24VCsfHYvLeZQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDI%2BwVSzBJpkNW0lEnCrcA6KnWHvCGlFdi4i5nECMs%2BO0vWUmPm%2F1%2FpfhYgLIFBRY2ak1bzGXlMGDukLvrrrXkpU%2Bzx%2BHEcj%2FOpK6Mn7txACFdU8oKk8AE0SiGWD%2FI1otTqMrDoV2GidD2e6mw%2BjTkdyq5e5%2B%2BKcoImZFHXIQnpKIlV322pR8hmj7q3tC1dgJi6Sv2pNM4jYrvRjLP4SalmWjzsI9tmpsr6DWmyLS%2FeD4xpKsOm7m0InhudgX3t8zM3Dc15bDdQ3S8LpMjMceQ7gq8rNU%2F2%2F1U9Pd9UWoCAESa9U5BQ1qoaYiDV%2BuxDfoUrmlSC9B8PM4LBAIVvnvoRKwyGQ%2B5%2F4w5oE3J40zbn6cONuAnYlTLWHVgy6xzDwijPuVRew9teb8HNkkUhpgK6UKgcEyflAgH9A2YOUmDIz4MbTtcYiDp2B0ukO0TCQsPiBqdXWHQnBpmjvzZjT4XC7vlcLXX9vod%2FNGu19USqXR9tlDXw8Mjj7SbyrXDAumLZSU18X0GPgsZ5%2BJ3PAVFEz3vdwyco43gnqxb51CNfTTXJ3znDochpEj8GInfVeSbHV4DzBUtAbuhO3eRlrq0t31uvy64NQ1k8QOsRELkcHQ5p6em7wZ13dqxgWZwmVgRrZTzGD6ZJ5yeXAtMPXJxckGOqUBZN5GsipNCIw4BDDNkU0CJLrv3G1Hhmr7kpRG6neo7wTp4M28Pb6iYlpVtBUAesRSf4qwhuwjlD1jlD6DJ6IOSXu4Yk8WU4UUCQAdQ9TZ%2Bway8LoEyoWM3DQ%2FJxmdBLBesHFHekdppMSCQP%2BHSZhSLW2Wc6hKXOcqSbplC7MNoqrVIWptJvovK1n7ycUnR6%2BBW9T1BpmzwJWQjf63EJKCKK7fv83s&X-Amz-Signature=00d3949194b197a3f4fb8863b3cab62a661cc6d2cb83c573bd59936e9f9f7938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

