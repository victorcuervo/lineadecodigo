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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RAVKG6E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T152203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEcAnvWxs%2Fp%2BScCmd%2FZkz1N3drGoBDZ3bxwsjgqramdAIhAN7oqI9bXfL6Q5cvtLCEMtCzRl1NFeVptO12J6MF0WkxKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BT7wyaCiUqOIUEGAq3AOTFEU5nIg0eM5bZlah7S8xhs65WkanUvp4OdWW5Sndcx6fA2Tp34Ep%2Fk3aOSxCuSmTaJxu%2FT1F1oZN4DsSDlJ%2FNZPteJiPO9mwWiYObrlQNwjglTle%2FBWp9F7Emma%2BPvufJzfSfsArqqKKvOUv7pT7WW4zYrdpqXo0qehJpMSxhB%2FQ0Da5FtRrGKzGfIZlt2mDJ68inbNaWp7V6%2Fb8oObhlqXCmrhLm%2FIHCv5SU7XiXaLImM%2FcqsDeN6uYEM1hYtIFRxY2iH2eO1uIfmpZ67q9fCdrVQc%2FfgD5VsEhTZm3%2F2AFigUUxv8qtNXLIkWAiD92%2F9IXEmAQsiCTWHcUzTx2RXs%2FV2EW2%2F18NFWaW7FiO%2BdMg%2BePEi81NHkzXnOoIHpm3bjZ7vFIf1prYqsn6gKbzfhDf71fwilRRNNXWnVFsnx9wY0HPdWTRgs4PtJk9%2F5EfKSwDkukn%2BjxqFY9WgTonHlfop3CIY9ACfZz7y4VOBAopiOnDpP%2FgVmmO67VTmCofdNbh91rIfqFbd30TCeq20JctmTI%2FFZNoaXX1OFMfYh0wLS%2BFfzQAnDVfsoNOUFo9Hx1%2BskYSAx%2FKsM6Nd5pMe6jyOi%2BPeCQwT%2Biy%2Bu5N60MCNYpmU9bBpQKzzDD3ODJBjqkAV8S6nw3hnJ1hPRJzFoXuI%2FSGrCJ%2BatbDZna%2Fq5jyveoLI4t5aFjrcUgVGaE5dMMdGU4vSNeGQomLSs8IXSCChm6FTkA4AbZ7eLLA%2BjD1lTEBvYOKXUFm0JIsJ%2BjeSBbaWF8uNqvhQCg8s3li7BsVabkg7DCM4mR9u2fEZe7nITsXGr%2FxSShCyuDplM0ckouawJZNC7RVBlyT5hUMQqewrSQt9ev&X-Amz-Signature=8e7d85ae926f3aa7867977b71c0631191e03780fc5e2d31e94caeaf30f683977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

