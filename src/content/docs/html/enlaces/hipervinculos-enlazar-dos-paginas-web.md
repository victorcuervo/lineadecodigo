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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674MLH32P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcroW0PbMG6E30ZLFOBJJ73f20b2SSSzV25zqs8ZMEyQIhAPFj2EX86rFyMyznyTaAcJLEUoWDVeSCBra6AxpHNGfkKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzVEbdayzySJeCg3MMq3AMeabe5VSrou2IF6dsgur26ZFps9NCfZFmlJAJw%2Fpm%2FsR2rRcx25%2FcBDAWpy0EdxdaZqyytS7p58rwX7TqZCN2BQyOSINy2L1l%2ByQWnqbIYCW6OWNNVzVmTj%2FiUySVGYPmH%2FYUitlWtBIZJi7gCLeTz%2Fey5MJbyO8F9dqra1wbwF2XvARDkL8Cy18STKEdf6NuJWRymqGSSR7syPnWIZeL2vNmryvVBfpaGCCn0EdC42AR9RJM%2FVNjMbia%2FzIT8LAd7CBhZDBHryHf%2BiYUBIrWWvPy3dCxm9oQjblK2g3jn1lWawofauq8vWnLh5shnt0AQBMNtej9XSRTODEnOcXUlhTWGlC1tCONXYDvjRV14doTese87%2BRJC%2F7S62K81VpWuzHb7Symau9%2FNSIt7Jy1GeG%2FuBqtxrBR8qLvZXesUQ63%2BPeZ4%2FVHejwSq1laDO9rb5VyCJBS4HmACRZ2HeymCoP%2Fdpg1eDP2hsHdfEc1dSFR3BAu%2FPYfQz1IZo4r8C6MXDhshKy2NLoWUaaytc2fmnOtf7gpULZqQBND5jqd0d1T%2BzmwxqqJGCDOiO1714W%2BAibZ9uzyVEOOfAGS2iZsghCVxZZwmi3j0h2Hh3zp3wuXAAdhGUfSwFkH5OzC7ttbJBjqkAc83chl7e0S6eGJ35E07GFBOYEnaSwIXHnvfiKrJsRV82mVyboyjU8f0ky%2FKFqXc2svSwV3vWWLY%2B18HvEA0TobLkiBPLpi%2BIIV8XiMyfoorpxrpNKG18EJnv1LsSgbodoVXg3LqkhMNF70%2FxB8V%2FGuR%2FUYDVaiy9i0iM0D5wGEcJwv8ejrBFL%2FgAAp5c%2BKPhVO6bnRKwcNKXudORyVsJ3S08T%2Br&X-Amz-Signature=0442adcbaaf189b18233cefb24838403466103fb7b6177e2b9bffe0a7bee0f49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

