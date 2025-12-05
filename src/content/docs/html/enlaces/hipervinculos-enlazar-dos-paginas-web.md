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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFXBZB7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEWamLf5Vn4RZGBT%2FcCLSJc7wnI6%2FMo2MBIiuUHTca8AIgTsbqR%2BOmitYe80d3%2BUCWLrQBtNDrPyF82f%2Bh6488tnkq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAxqrHEiAOLOTncbByrcA%2Fu4%2BhWvgEbSJJOYrudoa%2F%2Fpv4AN52TW7F2kBIEFhgTYKoHwMW73%2BoRcibf9luidGkqM7jkONiXqvCKlE2rXiM91y%2BF48YBzu4aEDInHv3wcRwR%2BI5kJr4pVxZAOcdAULQij7v2qO88%2BXpLnZoutKJhGh0l4QdzzOxQ%2BmiBani30VevNfsSr1bMFXmhQLX7tgd5Tj7Tmn64yxU8x%2Bh3F8DOBODvmQwWuEMZOk8ViJGkbu6RK3NJTkvs08L5YT4a7gZbpr7rksF%2Bxw52TMyjcoljkao%2Bvz8%2FyVkp6HFY8igexEXa1loM%2FemJ20sIHxg1NxDu%2FPAxxYP4v7AkyWlOiYDmPaL7YrA1VJrCApmy9nzMmmDl7b%2FFe3e2j4hlT98wiMHpGoRHZ7nydQ3Kcw6nYJFbQHP9S4Y99rkozonVDlx4OXmVT%2FF5U3a9bxNx6x1%2Bt4DR%2FqZv%2BLeAsZfrpSj4%2BrNj8fBCfkk1op%2Fr4aznHf6a%2BpWVbGgQ5AEEy0Hc0%2FxjrYeZqK0Onw2Yw5gW3%2B4dJNR7BXmu8LvcDfxem0EVoL0ttI9aBNHJ1ywO3e9UEOyclfgXbxUFcPGzxKjFWjewbY4%2Btzdc3fa984nmDJldkJ590TfBfV5G6WMCGPWbrMPXXyskGOqUB9qK7AxvJAu0Uk6lTPCvDqRNnlgfcdKDu66ekj9Eylgvc%2Fmo2HxadtGaozVs7rbhINKzm%2BxOhm%2FjXra0VIUbG9i%2BYTvzpJylOVLPABaFXW7hduLIXjnak3qRscsdhJqotOirUQarbALyWOA%2BqTbbsTaxIiVIzFdNOzSn5oYZAW%2BaSp7%2BjQ682NF6pRf0YG82LwwO0eGW%2FE3j81BQKtmXGoJ7qWQMw&X-Amz-Signature=8685f25646f30e264b9208aaa5208e623d98b4700412b066ef7be5163f2abcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

