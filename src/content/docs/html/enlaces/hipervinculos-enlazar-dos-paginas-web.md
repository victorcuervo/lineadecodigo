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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VCW7DAC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDM0vSdFdD2y%2FcQ7qOs2blkeinV2h%2FT%2B8J6VzT6fXD5mAiEAngi2BgWpQDAhFAMc2AoT5LEUHMg7fXEav4cG0KSEZjAqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL92KzIf7OhmSGJ7RircA0CwWdj5Hq4xXBP3W3SZ%2FmHiP615%2BWPW54xmDEbZs34Ou7hBGSBy8xK23qYiyZINT99eKqtydOvPL9ROr%2Bf1k3WdOu3MlpH39VjzmJIzxY0zEPKsEAqbQxA5Cohyv7ApqMthEX2qX7hZkFyc%2F85xdqMuzQWmPbd0RlbEWOs3qILglS5CmID%2BJxNl4aQo803sPTFmXbFBHMo%2FDIhVKQ2KReMpmLcD4UCmNTfTJD7dNrwMx%2F%2B2cnA%2Bjw7opEJuEBDXubdQe2lUUvExKDtJKeSVSmEIyi3UuVKgtSCjOrBqQtjqc%2FVWPStBn1LV4tTL2IiOY0BfGeFGL7HjqbJ2KNCT%2FhT2%2BZDbZI9rAXET1fbWekUvFw4TnkOt6WJuUEV5w6pZSTxLwaxGwgFptiA%2BvY9vPwTMLufQa7JJG3EDGmlUgPtCDRTb9ozOw%2FyyDdMJ8Z7RhRuDREQhd99cmdEEd41n%2BoLC6kdGXZzDx48ebbtejFtiF9q1msnzMiQkGVPqp0FgWEkbyNSSbNnd5cq2aVecPPIOKsEN55DhzWf5ckyURHSekesgN0FqMrc88iDAZonMhBds30VGjUaCuw8%2F44EVbKeZpgzkemohs6rE5kOymd1oypDuaf9sDTa6jY0RMOWU2ckGOqUBeXT6F4o6Y9FoAL3JAQwJIoKnUVxZH7EEOXE%2Bn72Vp%2FHZtmWDz8OVTERRtXe98%2B2WGyqTZ32YRLLI2dcWUNQn4pgkmuj8uQYLJAtJfr2eaNdqhNqoU3gx4c2Q4En0eOSONNGTlVlVVjcjeJ%2Fi6EaGsmZxiDU3kvh4EYFyR%2FbD6MPzWF5ccIW0GSV9S%2B3gqokPSQpPv3lmJYX5Nl2veFOvjmjIPPK1&X-Amz-Signature=20310a0804d14857d77a4cbded5369b3d78205268c59a054bb0cad162a8600c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

