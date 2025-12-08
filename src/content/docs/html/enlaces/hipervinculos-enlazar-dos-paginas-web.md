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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CKMH6G%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T095434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlYz9SdTPJSE5hdzwHhF6SowMPad5p37JNZDCTSsFrkQIgZ7UiUiA7gZ%2FT%2B2gwGDZ%2BOXH4gq4%2FI69kwIW8r1ginOkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfyl95KAxllOxvKSyrcA1NseVlU2NKlbZI5fG2%2FsTh8T%2Bqrw0QoKWurRbQmnrBLusmOMkZ%2FMV1Y%2FFwB1gvv9OT9Wxz9uQptJol9uVS23VbCZ6zNP9XveeDKZUH10gp0wdGwPNaRo%2FCt9xLXa%2FpemaAo4WbETR4%2BtEqN4aamLzVOkQYrg60iNo4TyIdFwAHU7S5B4lgbFOmwMzC1kvCd1bu7bY3u82CjN%2Blwvd37eyOxxhEQV4w%2BVNvibEUnFbpk8c0aBIPDlHn4qu7KGgutIguhF%2FqutI7r5gXHXB4pV7Ypop6jcH8yX8lILTN1I588fF83eFBoyoPJo%2B9Xiyt5vyIL1xoduCn3EN1nqZaHRwnw3cchNbDUiDXPejqV4FLG9LVta7RxRIWWF0WO%2FB912tUY9Sf8wbsTv63Gvdu6lC533pgcLdYIAuksbsbSGYMxDKa96k9MNFGVxr6zuO7AoWy0JxoMp%2BqK4FqHDkCWf4FISlqIjB%2BUEh7CB5bxsF6sQwSjIot6kaNCg3gyt8euMOS6NIWz2Fgg69kuo8L%2FmjGoSntdCZPhI%2Be2UFqxWRUUSkKtcUnQ3R82PVUcsFsMJDplo4QtSuvYdhYI29ZnE53K0kTiS5edtlELO42alzb%2FOyfFo4CI4W1purOzMLHt2ckGOqUBue4keS8Rem682Y5pTWvGVSR1FtZ7lgSo71vbh3%2BORKl6NIJbFqR5EYGdNY43Zzbgodc5vYIdlQXOep3JxpZEsBJTtVAhmIrp1uS8FUZJcdKDQtjg4jBXsCZQQF%2F2vXtFUrhgFTw1R24fQyR8gCB2Nb278kkbtK1EhVTWOjUtQyi1tFnFBBhVWU%2BTDNPY%2FPUNWeDE9rjN01qu0LxrjIVpOPtUDlVH&X-Amz-Signature=7898427a92a7570635e4d145a0ff43797cb4142ebaf0a807af71b6179bf8c4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

