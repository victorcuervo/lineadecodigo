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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ7EUINC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T093913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoe0qOsRZDO5AJtNONxmTx0m9L3IFpX12Y0csv0KlfdQIhAMiQo2e5uhBaDiLvETZJY70Tdc32zi6gjF%2BtKNeWLgr4KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzKvBcZ%2F5h%2B42wsdnsq3ANRZqDoE75eA%2BOYuijOveagsLgT0r%2Fxc4piQ0bZblEQp7sBfVxXztqFa7jsFbOoaCGoiqJ9AA86qEtbzpimefDsfYs7AwCGPv4kWDUW39kX30t4Sp4c%2FEzwQnIKNEOlCWbhqSdSgCmMlYlfg7Ri94SwYVjB0bZjMgBCuENtGQk0Pa0dHlzRLRDGfH2QExfk4anKtqUv9N%2FSBL7okzpbPFlVxsknsSr4hcXddzy6h3NG843RgpZe3Xim0N47%2Fh4UU7jY3%2BpCI7DnC8clOVQAK4pGDskpiNYxMmWYfDIm4O3Vxw5FmFnoRX4qZYYmuS9NvJHmjv0hMsh4018w6I6JnPQfDcYb0SU5E63q1joZd0KKUaMy7b%2BNbKjXVl02nzhOJd2g%2F%2FuZqZ%2Fp2TR0%2FP0JH2I63ogz%2FZJP9wb00C04LZbxALQox1zXIoO1Hb2emKiXoc2e7U3yuhoQXxxKhEsvimaE9ZWjrkRKFfdR1TRBYHXsu2u81N88lZERKN%2FPC0amyp%2FuxpXbm4oinaDXlrrp0%2Bl9wPtSt%2F3EX47N1uVTWY4qyBh%2FQlEcX3x0nVGjfX7okqeiRCFILH%2BYRIfym1lubK7JYwnQTyC1qY7Wrf488ZzNddV8Vo2v%2BomI1koO3DCrxN%2FJBjqkAVAgQmJweuycKhZzPGzRbQemakUDYejRHcXEg4dcsrpPzdeDTcmln5UsrM5nBDDoBC%2Bop90Fgzc0OErEK2ThqQ7tTiRDgInQvFfGNYuRech1MTbeRx%2FV3wpF%2FkCphg93e50RwQupP2KEwREq2rl2bal%2Fl%2BiPU8AGqRUvLX5lWPICjaoCrI5CI0%2B0Fy613CCq1poh4%2BQwoWDiwr8ZaZi8YVM1XXjj&X-Amz-Signature=29da0310c4791b7fe26197c0ab455ff5bfdb32762346d83b0958b0d96e8a9225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

