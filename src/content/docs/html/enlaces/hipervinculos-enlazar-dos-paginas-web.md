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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT55TDJZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrXic8aXo2eFvz0AUqeoLdN7x0NeGoJoTXuAgfG7FcWAiEAorErymRytdFdbdtKpVW4fA9Q9uxGWr4NskhZlb7BOFwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2BK9ynsKhMdN026CrcA%2BTeVoP6mxbKu%2FMps0L7aKvdQ0Im7a7RaXpxz8zbxqOp1mrDPoBeOw796vrkDLcTzZd2sICy7ifihjG3lydEEcnlxL34uEmB9mOGLxZynqE8w%2FDHiUN%2FpDByMv%2BCEUnUs1p4DvfKPfNqFuwataqxkOCwiQu6hSiA7n1BOTxPZKvBC031ZN6heAkqz8VbZTibutjAZ7G5eWkyeAyQl%2FKVhkbwt2oSifJ7Ekbie7lzfNbFYCv7n390wPvZtASyeQXp47ZY1ocDVVY4kgcm9Pje8V6gdcmrV4BbhF%2F6XPBKPWf1QBhM96NcKbRo7hoRUN51FOxXMstpQTlNQQjPTP0LhnGpYxfuHEAcoCmptIMVJ8%2B7AwZTtol7MjKxjCKPhu%2Fwu9UHrbixDJzRKSlic7EnnMBBcGqwAjHE21FgoLeYRKFcZM5%2Fz7Lb5doqK9F5xxbiCgClZ3EA4N8dAAB%2BNMMpe5nNGVpCJ3GU%2F%2Fv6RIprJD%2FvUkJukvhVlWoGwXrzrgkTzW1q%2BZOTwiXPLYJ%2BO08RDo%2FBcC5YoACF57T1JO39pdkOt7fly11pHIeXr%2F9djczB%2BcQzKf1N%2FzgJB201VOK%2FAIi15kG1PAzd%2F%2BFkaFPnjHhqO5I16YvD5VyysS6LMKG03MkGOqUB4cjlQSc2w4FpbD1RtFsEq0lzMkk1wemYBuUzdJ%2BdOp5s3r9kAbCy8FoiwBRSejhdI266zJcg%2BPh1zdB%2FMvzTRNjb8C8cwGDNcuACEXOdYuyBps%2Fw%2FJM0pwAPYLpI3Mkw9Ym%2B5PYtzMVgPTV2xTNBgQksRPLwHUpp287Xuu9rm64jqtuQFxfnQXnfxTnKBKvwo9GgaZK4wIuJ4%2FAS6Z27QqTS%2Fiiq&X-Amz-Signature=23491d9e8178ceecd1a9789289d8022746318513f12c453b1f44973b3f5d8370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

