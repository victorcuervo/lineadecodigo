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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI7NY7P3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDlmz5lXlE%2BtIu6fPKQets%2B4fADcfqnj9h4WRVqHDghVAIgPqKUzBAkksGYIOHjdB5OaBsAMzJp9V5ybprwtdUoo0kq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOtKhhZqqJ1Ddu5UpircA8i5I6jEn3HJwSKqJi4MOPYhBWSV1JLm9kRZ8LhyhifKtz9sBVyNygGdKFwZO2wl4UTvuAUmZd%2Bfi7BcvCf%2FmmmGxPLAAZL5Chl%2Fo0G97%2BmAT9z6UgG12x1rs8LBla1EcX2KEyP5rKUCwO0hg3SRUof6qWFCzerld%2FnINZQwdXjZjPJiW22Ru9dlMp7cDKRLF1Gvga%2Br6nAzD3mOdtzxCvzwf7UNeYPI4DPH0l123gyKzYLRXTJSPIO2AfrQY1%2F9p2NoA%2BcwfJdQjm45UKswnljkTnzA1gOxJtNQG0eqEO0mxhT8NR5V%2BhxgmIGeTtju4Rhp8CADYW%2BxIZLnB97k1x2vee%2BrhUl%2BTVg%2F8fe2A1mULmwaChV0HqKcMLx16xnIBFLDLIr09QILcaYqaUkjjA5snnKzNvTgbrkiC6m2XokYJ9NRPFFgWe1TSvppBH8dLaoDs5RzcF4TCLAkhdkObL1EMx8wneXJGpTJRtpx%2BpJrgWQb932K9BMbOyIF0u7JSeyZBKkOT7mHbJqKhrENjbCGdc0vekoDomxnksXB%2FIugxUodAEKp1LRZ2etZkO%2FS9FFVs9uMTI27Bp30MZsNpXP%2BOz8vNiAp1vIpan2I46E7kFC1Qp1tSKWzQZUnMPTKxMkGOqUBNQ6Ht5EM3iNN%2B%2FvqKP1q4EPciNFa1SML9DcmDsSlWiyNL8v7q8sYgkVslWTL10fnLDCHjYNCidtkDsPdLtIWEfrmR%2Fush9Zslm87MaVLst%2FjigH%2BiDnugtjiS%2FtzV0cjQzZPoBkmFGUfaWrjqR7m3zzIji0APSHckDS1VfbRroMme%2BJfdYxXFgk%2Ftm3JbrtRtnElYtzN5xJWNtAvTmbMnC%2FDb%2Bun&X-Amz-Signature=90e45fe1e1c034326a00a979aebb96c59d4f325f0fe0fcd43ef358ebc49c64ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

