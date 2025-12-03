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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RJYDFXM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCSqhHOsSQ8imjwNL0SeVitxWZ16aaAOkjbuepFq%2FeLXQIgY5Qy6jPVGwtZssqmyJEZVBFZFfhZUoeywP84W4DhQfYq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDNXo59bcbPcqglifuCrcA6umuX5G%2BZ3Mz%2B7aeADB8FrhCMTKKSMhpck6F8Aa8SN5STCJ3L%2BTQ3DBycw4DzQcxQ8yB2XEVCs8Rhazy2bInkJc1jujZyc8iN3soIK8uewA8XkqyxqqHaZ1M9vzMG3hg%2BxSZnzjWzzLN8qvx%2Fd6thXop6nMR%2Bk779Ks5gLC6jpYv7d%2F93VFvxpPWKta%2B2YwpSzFlojF%2F7juuM6TuTqqYQ%2BqgVNEX8ZaG7HhQkLLeE%2BQrm24yVmGSdi%2F5ikKFQsJmIofTNbKtW4kaxSU2UEEjhg4tYfGgpQSdLUZYjfoKKHNmXfJnwhK9BM2UTHsl5Z5atWS41Df5R9PPVMU8aWz07x1MFTamr2%2BdWPa87KOYWj6bnlqVzNYzE4GKPHt%2FT1uqqe%2BXVX2H%2BKLSkCKQrhf4sgZMX1oM9UrU1DOgXlBv4yS21e2LEk%2F8%2FwLSh%2BSuLYKIHSNSXY%2BpvtYKJ34dpSqstxhqP8ds5Uar%2B104XjxaU33isqsjipwO7Yy5ozzFM9PfhuZvPjQsp%2FzB9p%2FUmgaXqNnTpNdRSodT25ALehJ2ClPlskhUvJeRtBSdNCuHEy%2Br93P1wNVBjZP9A2jz89fQOlsM3BzcleZQuBRz8zcPkO90dNgRD3bimjC9lAzMLPdwskGOqUBe2OqcsdnautiZfX9f3enxhY5i9BHtfg%2BZD2zjG239c8weKn%2Fw6OgqEF6%2FybouDVUvVZ4rq7SCHgvMgSgXcsLuNZQp35ID2WoGfjiRORrAHMaWx1L2KCAqQokyMxelKqIULlVo4COnHwNhgAHRb19R7rBTcCBR2mRyRM271l42K6ErdQliLwB9KQu9Z4XYFYC8htFLhasgqeqIi90A%2BvjYki2rTxb&X-Amz-Signature=397c6c083c410af92fdf86f47baef49eb0a8bc7bef78854fbfbe097c160f52de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

