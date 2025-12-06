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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KS7K4K7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD1EQ3NhzBWuXXolxW32iqF8IB6hhWOAeULx5dN02BNAAIgXZLE0EIMr7dJp7IjPwh%2B0mn%2FRaXioblIIVarPDAAAXMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDElFYMC%2FbIkifPqxmircA8xWtFB41OFqmOrxzbry1frRNwXfZBW9z1YknW9ixF3OODz2EXIfNI2yWUdnD1Df6128k7hrKt8JrRuD7VrtR1rP%2FoEIGE7u%2F0UwAUS3KCU31Yd9CswAr3roIHI361BmVBRGj%2Bgp0%2BboyJeuujES1rc1H7ZUyp7AWwHwictVC6K2D4bobzFBvD7yZ1NLtdhH8XvqjyGDWUPYKuwX2KrgblVZ0yE50%2Fjsa4q0dmtidy3oUCe1JJMXDwTi76f%2B10rHEmUKyunOdsd9Ydr6WYQovMJvdeGPZpHzElwTxLuJ1Dr1OdeBv%2Fg7QU42PgZQX%2BsvSkNQpBQ4EdyCZi6vPXUZ0bmN%2BcoTHAINUPtrD7tHl5Z9pDjGsFTKF5XZOfEBXXlAzOupT5%2BpdoP3Gtg5AW%2BVQ04D9S5Jivdcm6d8w6f4q%2FgVmPW0vET5RoH83xQPjUlcwK18flr3JZic5W32ptBw9ge87J3b%2FwiheSCrRpyI8DC%2FLFCqmiXt3kaWt9mnYBdz3bEEzR6cBDrxVbl9cpUCOUg%2B3%2FezK6T24hMJ9wShSk%2B9vYGSMrCTpZg6YdEb75ShPuc7lnol3zVRPlv11rpIFmInmKpso6wx0%2B8KrWi3BYai5mjhRb2yDrnDZrP7MMKm0MkGOqUBXlLP14WVC%2B04qhlUGs62pnE%2FW7VC4uLLx891VgKEH%2FOv5EONy5%2FqAuxTeg5wbsuTa7oN48ftR%2BcIsw9djv7EeBA91fH7s4AiZ7ymb%2FrX3Xqkg3teTdT%2FCdE2nKKO09m2rvtDEL9v4Ad%2BmFihCe6MOL%2FMW8xmzy0ljx77OMkI%2FLoAoIw72Pem3DbpyUFdCUR7YY%2BnDggGkbGISA4sqTocOQcoa4eb&X-Amz-Signature=f41e477b41cc4516c854e5e4850ce93a912190742378b4a945462f5ac3a4b807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

