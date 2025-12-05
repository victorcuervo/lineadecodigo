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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ST5TWPW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T065223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAspt%2FTcoI%2BOXDW7dPrhPl%2F%2B8hVmbeuPiHTVIU9naJ3mAiAOCGhmACexwJTsESxeT9PK6odvsGr3EoHsBWuvfxT8OCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMqcz3gqLGA3g9EVsrKtwD%2Fq3vjtbcMNLDWO3Oew%2B6a2JIxu66EXsc%2BRw7YrmQQaqxCRL5h4I8BTQl7V5fJHWC6zLdwHwgau7xxWD9P0eFFUi4SWs%2FST5dWb5a4HnUlpI%2BmRQ1T89p58RaLilDoJWf7lVmHYVJMGDucOAEPBTWLATXpVIuJYMRyz6%2BjCsX5Izg4vMyG35ez4tGvUXgIGzzGJnJ%2BzjFIUt1fuXMsx%2FyELUNqc7hNWyfOt644X9hd2A%2BDVzzYrybzT3cpwUUnZDA4Nz2NPsqObSzllFnrcxh3TSiWzBZdd7CA5uj0%2FEPSxE5HNlyigW86WtZnCfZgcSKXSIJPaRoD4cr0QeXygR1hpAMRyPcqHctujRahsvdDMskVACArjd008F1dONO6zxfBECf1fbrKXaf9pwWmbiSMtLHOxFj1nDlKKmSTw7z%2B4AFqsB4rrOt083UsKN9FDoODHQdWCRhFNnOjNoBw9wWyDols0cm7l5hU6nUzQ%2BkcEba0ykDT3D3SgPQb6z8miADtBQUQuVRt7bCqPpLCEOs0ysqhQy%2F2Txf52ikzBXKxr1fB7rj25IuDjNb3zj%2FxnyveMZ7hdxOY5Al83qnz6TWSwszGQgv8Sj95pScdLAI4EOCyvSipbvkVekBdoIwi7HJyQY6pgEU%2Fwj4jVLdZu8CTv%2BdC0YEskHBLEb%2BH5o9Fhd23rs619iRHDXuZRCMz5rmpiXQY%2B1WQyYvJ9ZNyqgmp38Lh1%2FP5iCXJPk6GOEkd3NHVeLUkD%2F2zMeoNBCvrFTnurtWK%2FFP4PpKV4aD9XkF32RwWfSeqW7440ksB%2BRUY%2BDrtcPl3YFM6wy8eYUsfwAckouDToUdzIU7CQ4fERVGWzcgKPlGrUNPV5l7&X-Amz-Signature=de521e4ac91df86951c3db2bc684978f56404dd2aea599d1d487f0122ae69c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

