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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBY6SIB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHU1ktxFAoCW%2F5L6UuO0Ah4Da%2FNTpoksmm%2BPh1VaDab1AiEA%2FDeEOJMMidHpj4NYRmRe1g2KPzFOHQm6A%2FG1J2P8puAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFidAO%2BGARuA1StCiircA0%2FhcIxtPpdaoGdKzaCxJ%2BPD%2Fm6TbfSlcNNWF8GeR%2BIjX2nprEEfu4glpfM%2BfA6rfUDAn5iiysWlFMYBrL2OnYceI%2FQLGyfXebCYVLdyTM1YaD046EleMl%2FPHAddYFRFbJfx7ojBmA7pV93K%2B0SiiwXxnlG3EfwbBxQ8PnjrdE9Fmsz%2BougwUvpgKx%2Fcz4tGZLfz%2BVDPScfaS0PF%2BVJI0T%2FzkQUFvTe6R2NWp3J7Zbbs7Nwymosu1lSgqGWwEjd7c5Mn3ti9TmEqjXn%2Fh2OTu%2FCLK4vG2VSsTfpektQ%2B%2FfVNR6x%2FWM%2FYuvZ8IR1xCZmTTUqpSvNJLlW7eZeFXXmEgXs3DaCTmmQIRBmkONImG%2BJ2z%2Fbijd949A50VYgEAuh%2F4VrRTufWq5uqfOIMHsKXPzx6nQN9dPSBujwAsmT1O1H5kRI%2FqnVt6fsO8%2B6n%2F1CQBg5YmaLhqMGOC2igSf5A%2Bvm%2FAOTRkXSz1tRRy5Cv6pfwG1KGJTXcGMGl3pkMZUaWqfxYJj8cmoNa4On7Mz3ZWyfEfR1EfTHbHzFE%2Bhnj52hrpF1LtvuZngaJFDOUgLiw6S6iFgZoqXXdrEhCOkSIdzkileijJ%2FUElWBVfWwWMACcwki1ag%2BjtnZluLODMKPLxMkGOqUBdnBVjtWvxYk1aoFFkb2D5cO15O6haxGWHwGkVqPc0W%2F%2BG8lMEHkTLLwlJjAjjc3tVIgjj3msnYiEMva56RWhjKfbFudKMcgoO1UJzyEpn%2F6BxI2tIaGaPRJAK%2BM9%2Bg%2FynFTOM%2F91KIMUopYa7m%2B28s0WnxJCf40NlJsNuuhogRixs7bcyiuNkEsMAXG8Wr4hFmB0hnHYHiEsVMla1YDSmDqi3mdd&X-Amz-Signature=da29bb290c59fcef887ef5a5441f4417a7e48b21dedceff733c860e098e43e41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

