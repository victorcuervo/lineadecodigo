---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3SNOS7Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDm2nUfeswoJcD590cxKTt%2FB%2BgiROzDAafKSu2ddtN1JQIgIay%2BMmQwh1FA4ORC0yl2JU9w%2FdwdLO8XTETWV303VZYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF3CcfGeFc5nhWcmmyrcA7NKoV8kBfnb3ZS0r7UqX3lJPoQ7u8mnN08aodc0TxF58ygmd4UwDfakootwBwBB9Z%2BGCpFZQF1kpfK88lF9XDAXYLEeoYkNWhcg2RnMFKlBy9esCuXdbLGJAmhPD7m8CkCbBqvQwi3Jk7YOsV0pnCudmN1VQYLJf0rkIUkKiIvr30cF4c35Z8KVpaUUm2eZLsOtXC1NTPkT%2FD879Nv70uRx4qPnq5bMv2ZGLYuUCK2XFB8m5ncR6IilbcVFUCnY%2F10MzbGr%2FaapDou8M%2FNNNL1jDVleFsuW9cODuWPc%2BG%2Fmu%2BU3ra3WuXdXCrvDYFo6wIduUs1imgFF%2BARmoEFKaRaT1NsutRJTCVof7JVHMuN732yzUHhAmHhgmsMT9W1kXLCQKEZry35Zta7MTxOZo61pvg77zpjEeVWDNY14nAMF3idG6hCRVF%2BgAnt9dpd40tL4sfzAUt4mRxRUZQe0zkKMxmuAhGrdLsEK5LKpI5vkvijsUL66quatcHFyWNc2LB52VT9Tu93upFlQ0mKp63QXHAGI85wj3gRDsBsmXKl823svZH0Y53Y7ytZp1ho8R1PiVF5dqxRXAFIAGVF1bsG6xIUJSypuafGuDg4OZ8%2FQOPZFE8E62r%2BfplIWMMa9wskGOqUBDtVh2MC9dMlCKGHBZv7oWlNZNDQAysh0MsX%2F8qgy0pm5uaZR8onxBuoYN19LZHOE7dQoO3hcgyNGsY9r4ZaqKALLM99RwMb223aV3sfF6MKfahPbfbLhR3Mh8XG7LYKBGnJCuyk6mbU7sMoDsk0CzbXwxi9iewWcrFOk8ELzyO4js5LHAMS5bqcKZR7IeKP45FV8WHtpDcI1DJnuAau%2BHB5daARl&X-Amz-Signature=59d0493f6e09a83c5d49b087bfcadf78d71b06bbdee90e8ca4293c27ba99b316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

