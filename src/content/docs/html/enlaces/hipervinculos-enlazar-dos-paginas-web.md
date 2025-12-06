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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAENQKMF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDunDUIsDk2tnzzCWv%2FYq%2BbMqgLfaASbYAzttoSzOILpwIhAJ5b05ni2ZpEESNyKk0cYWCH%2B1dg9SBg%2BWhf4jZ44VvtKv8DCH8QABoMNjM3NDIzMTgzODA1IgwV89bXmCl7uttplc4q3AOdUZXYw1%2FG1osReFZo8SppTlUq9NjuxbeTNku7817Z7k65DZKx7BiF4itiC0aWE1nvnRZo0w7%2F4la5G8paLn2m5%2BDoG3JaGCcRd2CTzCD3k2pEwV7w5XuZUU4RuzqGSX51qKsQ9PbJiDdVE%2F%2FIBXltPoi98iMOQuplSO9OUnnhQB0PT%2BVX4kplTwObG34EPv%2F3GeMnMX6GmR6AoNVQE0SxmlzXuf4FoNYV3s477dTGbFBUzV7Z%2F12MSfrO11QS9bZPrWkGWElQ%2BFH5LD2aU87G%2FoWyG2XH3%2BuLbex3JEMLk9zweimtXb6eZGFa6y4zUObA3mWY4EI40B7Qyvsci%2Bq93fful4UpuDfw%2FcONEFqjD15wfiQpWSwdUChvvFirgJc8uJgdhyigXkvbnj0a6Q5%2BXATzKQXtINow6hrquUl0B4Sn%2Btjc5UJPbk48l9mQYCOhh0HunZ8G4ScoohMVcg8BOGEMuNUSBfU%2FqzS3iF%2FxDypna2SsKGhFMHokf%2BHibuomOafEHic5karR2fDl0UfI6FTSIVFsTsdhbjTZhUrp%2B7Vxk1ufdAg%2Fd76mFiP%2BOUVCv4mLWnq86ToY6Bz33hVgR7NS9itxY0qJdpiNq1NNSjpg%2BX%2B4wK1rDxgjKjDJ1NLJBjqkAcyTuD8stxrFSMv%2ByQTlfT3LMWEukxfZFyzVOJ9xkiTXmNwpF%2BkwzhTegR%2FDCXsVD1NZazVPqphpu%2BYNynJ2YWj2ZbOBYwsh3%2BJBNh%2F15gN61rwMMc6aCngKWwzUnVeT%2BgGAO505rvcjDrwL4KHThu8ssBmbr7RVJ%2BNs4AgPYKrDjH3TmXuZTpVgdCo5QKZnaEwIfpx0xoEk1nERd6%2F3gbAqkrgb&X-Amz-Signature=b986076ad2c8052735be286cf7e72da2b1b0d595651334e80256868f1523e176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

