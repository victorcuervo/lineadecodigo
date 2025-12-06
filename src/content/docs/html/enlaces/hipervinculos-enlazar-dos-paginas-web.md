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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZM5CJU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeNgVNpdbiQqpr5xdQrEfN6wsagkFIB%2F%2F0VrMYHfIyoAIgSg4tg4UO0UEap%2FDmg%2FgTVo4QQq911jLIx2sRR9gcJyYq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDQgBoS%2BuNMqEEij2ircA%2BVE%2FJ3bpeYR99jfJhhLE2M2oPRh89nbHNt6y7ZLl0xb6pDbiTBhfZfiiNybALbUyfK5wste9wMoN7u9l8oJJSNngO5IC2V8eszKbj%2F8V9%2BowYO%2BCcFEfjNUA7WFw7GkVwAQbkyIPmc%2BSlljCfkkvK5ECBp8JQabmoRQj1r6XlQ8UJx22O9yRt9UdbymeTndNhxvYL17DmXbz95zD0RpmVdvVCDfbGOLHyfoN3pNVW8JjseHRg%2Barae3Kf0nQ2EbOUfy9%2FV1hkdjdCouid58uFcvjFIg88WYAY2fJOFmdUtpnOytuRbBBIDj00itw2DtFuVxXIKSYLoWDG5N2JFAh68LArWMZjiZorF93v1Xb7%2BVyYJzpO5YGY7%2BvFp%2F%2FR%2FO2Ym8uYa%2B202g0HnwSSDEXE86HMumUZUuK0RMj1ieDlUweL05bRN5s%2BGDYmJ%2Bjws6lovPEjl5qNf3Ir5eCAdYhSEfmCepWL1Vo6GsDPI27OiOx%2BxqssF9GhQbtKDKtWhzae93iijTbPjROXlzVBG%2B%2BMo3yYrQPxp3ozVWjcVcNj9WEXv3hsJhFDpsUaWmiWFcO7dnYQ1jwgtS690UQRQMDIz7N9swVwpaq7d%2B%2FDb6ts8U61oteVhF5Iv9ZtsSMICn0MkGOqUBW7KO37ZR0smAZS67M6NwPPXPB9CBtbC0XX%2B%2FwRIy%2FUz0j58PmmiP0a7CVrUyGYjd9p8MzL%2BsW0gu%2FYHf2NIWl%2BfFkz1%2Fj0kilUe0Gz%2FfPUdzAnSM5skVZg954Eg7UZt9vVXTHVAqai8DsFPdt3K3pypq3lHfmx%2FqDVoXYMCy3y2UV6G3rGhJWThDLhh9kzxuhcbLsB0UY%2BO3XVcpDJO0xM%2F86MBR&X-Amz-Signature=e3eb4b669f9703c97e3dd75ddc6d5daac676017e5fde8bff42891e657f318d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

