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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EM6GKIG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T061547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYnCEG02nuy6bdmxUUrYI%2Fll5FKQjTabxJY4PXO0Qk3gIgKwKH4a1zISHee%2B6YMV8bXeL%2FO4ELlsalwxIcMqvaLZ4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGRz5UfQQ5797XLMWircA6WmrFHtu5v9E%2Fm%2Bsm%2BUZoJslGSe13hmhdhtUk3i7zvQH5%2BFWb0mF03eIUf0mCcAPfPJG3mj97PKNU44NwgiySYqOYcehBw3t%2FsgUdaEDPrn16I0x1bJz8rtUDTJLEei7b1%2BEdY%2F8RsQXvNAfojQYcqzlvWLgb48n5920LL194ZToFZFksOqrO6Je3LcEwhnwkvOpzxDh7v6%2BIl402Tlpztdqm%2F6iXRpzwT6Sp8to8yCgNsHDZnX4SE57ovsL1mXeUIaGDTsun%2Fn1oAb98yfPAXncp93jWPEnzflI1jpMlwPhM0GyNaGvTYdoxIcuRPwQzG5jLhOBbD%2Fp32cSMHe2HMuTLuqm5HGB5AY4y8BtK60qdAGARkB96kMX6%2B46NfF65lOz5mHZE%2BQhuro%2FdNXSJBLvnmb%2FzseUSbhDMq0iKfc0reoI0gs5cWICNn15rDKG%2BcLHjw8mUxCuSVdk3Wv%2F4RXH3Rs0uEjgEgaWa5Jum0Udsekb%2BQdLtvxJ49V%2BKpazNA3i8%2FWzfvL6R9thW%2FZ4IP%2BNhr2UM9ROxnO7KOj8Qg1mE1uLPTgEJxjp1iM5D%2BkhfZTfPTQ4BnRtyIXBsAyhVw12r3wPIqhhjAUKEagUUgfAY3nHPXxbmoxQYrPMLvQ2ckGOqUBILNF%2Bd5OrMd0xfcuCjsbFYpmyCmxoZfaVd6WHUFG1ByGZ5Ea9K8WSkQhZAAov%2BEJsS%2ByXdkxEUtvH46I4SBoHUbJYYtNTdP5CIQF3j9BcELEl1ANbmDLS99%2B0g%2F8QMHXQ9%2BPgfKpV4AiYigbE8bGJcuhR7AJVmmSpsNWI%2FSlamgD6hfAwKku%2FHV6xxS0mroJLRv8YnoQ%2FAp1oIstsnrH7inB4run&X-Amz-Signature=941787b466fb2195190f7599b73718d0cc8bb46fb14b2de10d8df5050a6ba7ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

