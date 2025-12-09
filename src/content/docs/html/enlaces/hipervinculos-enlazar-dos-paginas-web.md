---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHTXEUIT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T184339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6gPE4JCB655QkTKIW1ZdF6mE3TlcJxMz%2BSLum3g%2FImAiB5Qrai5dAdwoytEBEbar6hDp4fPtTCrqOWyAafCXHKxSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw4AKETbSuTb5rHjZKtwDO%2BNKKXBX9CxHefyXpg0okt4k7BC0Gy9MPTcKZ1HCmM3JPgN7GnXBQf1cn7oVkIO44P1TIFoP%2BFGObVgC2XQ%2FlOqDg3iPvgXQt2eLjBo2cklG1qInw5gbwKxWi%2B9tRYiiF0OM0cgE3wST9lLa40s%2BtS6LTbjKmMHsFBhv3y6UT9u4ItBNksg5odSt1XfnH%2BiYgA%2F35cGFXtF4wD910E8PjnPhivxcWI2MyrDdeidXF%2FfTeZ3KAMIPg3OucStXlR%2Bh%2Fikovo36ROBq7MZjmIubBB4GhF2sg4cEr1yktmZBln1u1tRzDB8YsMIkYdSIPsaeseFJrnq%2BnRUeS4v4kUj4OSi6c7%2Bb6548kY1CIKXSddBPiuUtTKeX9%2B8qWMPSeZ5HVCg9cf8GtBWqJhxZwadvqK2YNl36SJv9xh2QhtwHYcnERUdZJTGiqWQRfxyRoK0NLeZj6unOgi53BOHS0ztTcXlaM9hFbHZsMW18K5ft76M%2FpTmJGpl%2BT4XnKagW%2FRk1fT9Rk1hcqQ14%2FpAXKipsySO8O4dTCaNZkcojfSf4JdGCGrpecLutLsoD1g8TQZQ72YMsyf9EtPJM8evODBlcg4FtAcHiK3ick4H1DdayYTJ8VPpSgzVy%2F1iBTnMwurzhyQY6pgHSUTOPCDyW56hatVuZxD3INNFiWYjx4ByPlkYdGs5JrTwSCA2F13MEqgtTg3Z5udm0MoK4IeX7uDzIqFeCoiP9XNiANc%2BP9XKZeDrKtz6pDWmgTk%2Bk%2B8l9Pd4c9%2FW2wWhCCqhgL3A%2FoQmVAdmKBNxP1MrTQ%2BMyJxyg5xCaJJFECLtREBOwXKAyv3Hn%2FVGoxmd%2FtGCqHbYWacWqGJM5LAIk4Dj7JImK&X-Amz-Signature=f916ddb000e16445b81522e570774208f9ff21f45d557c97506ef26e2b173d47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

