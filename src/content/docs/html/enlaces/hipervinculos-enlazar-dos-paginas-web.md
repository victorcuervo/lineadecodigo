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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GP7KRDL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCx0cOnMzJsqAycBTw3w5g%2FElJpRG3DGs0lNr6t15Y2lgIhAKM%2BGB2mp12Ya3En7yJAak4Xap%2BPhqeKp6htBs0O%2BsdmKv8DCDkQABoMNjM3NDIzMTgzODA1IgzKFFb9nRyWwdgPTKsq3AOUlKxO%2FzveA5POMYc8fkCOSKKuPqu652cinGVmSSN%2BpmW22aNg6vRciXJVG6PWp%2F4fcikcH7pqbapzz7%2BSZQonakt1FY3kqv8GquWqfJrT%2BSXlyfCj1MclLYz229prmRZtvJhJ7MOMsjq8W%2Byj8IhPnE5zJNV%2FUhIKANb2ochw37wMBOVIrkQHb2ZhB0P5tIhy61Ih4wIRNXYzdyrl1jOS7MKvFQsArQ7eiw4GE%2F89eBc1fja822fE9VusTRZzIo4WNrm7TxPu29lSVTQfm%2FMDl11o4EbUO5Je3LmY%2FllE8h2yEzJuzk3SFcaD%2BIQOSdVh69mzl0ZU%2BPcdQwg0J6l7xKSATwg%2F351zUgc%2ByYnZXaUu2Kc%2F%2F4qG0ScP%2B9%2FaK4PTyfvi4tkijDM%2FxfAcdg7Q7W7lbagCahFXGxB%2BeIqwu%2FijYhZe4%2FgNALAoYvMTQCnwszYbXBjYZ57YOpOxroYvWE10MCf26qpq4Ctgw57xsoR3A9RI0frMrCMZFBSWtTOIK6ovTP2uWY6FKwDq1H%2BDcB30WuBb9RuebJDNG%2Frr9EcmszTQsbYCC0QhfH3QIF%2B%2F8ix3IJPCMyrnBvDYdYjmErfgsPreiTFq1J1KcFDwfHHSxp0CqI0pY7f89zD%2BlMPJBjqkATjkW6dxTb3Ngl70cI0xqqO%2FldABbTU2CHyQ5A5rGabIL2NcPdujLtWxkFTD8Vd3dDfyzna%2F6FWhpX3oWCTrMJvVh6ebiTN6xK8LXMlqPtYKJk2RGRFOfCYtK77RcApzB36zMj9C2Af4mWGqJjCC875OmsWriZvEA%2F%2BIFX0zvxNkIngYrdqcRSz5o4FBRPp%2FfGt73hBXpjbdrC3hB%2BoW7XXpTyW9&X-Amz-Signature=ba3a042009fe8c729346ab106887f404becbcb4e3fcf3eebb57079586524c17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

