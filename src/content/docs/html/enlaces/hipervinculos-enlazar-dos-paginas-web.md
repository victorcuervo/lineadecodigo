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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXTVGYSR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDI79ztpipa65gSx98PR7J3BFuiAoT6ypfhVSH%2FDsOwowIgQAFa%2F5Czawvixh4h6gsL%2BWKn8JTCgau5hJO249embTwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDNCMWfxJSlF0m3e6FircA8A5vIjbbiFl65PRj0cr4LrjptgWIoGIbOlDBEub%2BIJzKz%2BPv%2BwEmElGr4yZZB%2B3lZP0tC1DpKpVfLQu7p%2FP1PHExmc4aOKvkqQ4tUjd6CwJLg5EeUXLRx4yCnyAP31zS8t9F8VOvjXkad%2F99%2FduyLssZgU4MuXMoXemxtttHY9PXKOi%2FPcLmZwPjdDmnoyK0ItHpZjkw7kFvn%2FWNUa8KvOFpuJKXOOK10q35Gc41NSKB3aKLl8qtGF%2FJ6gAigrDDInb5KpgOwEFJgZ43XbSQBni56517dQFxUunHa%2BvZ8Q5RV43NSZD0htX47AYzjQ9PTccNR1Q3m%2BB4QFaUASDq6maamEaMTAIJNigmVqt%2FSk8CYZ0yG1ZHw8XAB8IpQFTkKxSMuZIT1BFY1DSEKVLuans5lRuV8NpXHWl2ZKjd6OC0%2FoM5xetqQT8NL0JWWtDviobAjxtjaQsokNeiMp1k8dmsmIrqoYb4bTYL4fNa1ESqM7SjKYO3DLYpG%2BbjjLTIyZgkWir3LBXx4s1XZrjSQxk9qIL%2Flrc%2FunXXSetpe4wtYUBftK4Yrz2J3qZS4yeTKAhqssiaD%2F%2FX6pL2xwc4M0O%2FTAu%2BWNl2PEJDYf9IdLDzdO%2FVBQzCeUkyE90MLiDxskGOqUBbVWOHlrh7I8e078Q2EF5g0D6uPqMsT5Xsl38xmVZ8PxPaSwgBYuaQ2Mo7tmC20YFCieZbz03klO%2BAqQU%2B3GKgFs8bEterZAXBtj%2BY%2F0FcTsrjwXKr2L0T5F0AxyDNajc4DcatQQXdWA7R5smerU6VjZILxlnA1DJb5%2FEjpwEAQA%2Bz3bXclXWNLRWoONAcTZJvWEJ5gTP0%2FHGEmoOIOqVJHIvb2Ki&X-Amz-Signature=f4acf295d899b9599ffbfef74656d55b3c494dbdbe5d51cc9d1896281d29597a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

