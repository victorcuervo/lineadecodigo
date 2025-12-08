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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MBNTUXH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHc1IWACsiTr1JEC8keCrUSycSX0JD1uXg03ZGiWp8pNAiEAjVKWiUjRTq1QhE%2BiABXvVtjsefDWAfnFw%2F58s4ePTqwqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3NfCm368FtgZEf5yrcAx6aCGoLLoRTOo6k8MiEzNELwdeKO7Q2%2FtV%2B3WN%2FLEUo%2Be74gJiNjSbZp0o3J%2FJ59qvJfWaHR50tmZPKJr6j1u1te2huy5tboRiWOSS%2Bfzx1oIqIBPyqfW2WJnmAmlfBK7h7QeWoDWVwqpjFA3YDXgkmr%2BQjJUh7HgcxLlylsFUBCndi5RZoCvv%2BLMNcvlM6CjmCUxxozsBKhL8mBqLf2J30qC5mjkTfnCfkLeDzOBMGCFUZ7HuEM02qXBPz4yBsDbfmzbfjjciu5MyOyhKp9bQqLTMYnbE2oKFLFX74tus87cqMLZlwPWaMl0qrHJcsUsy7tOIN83qypCG5MBRJV7IpxOcLurT1UbyYHch1Pdd4AfgxhkOcwYQiWI4FlY0VrKK85aj8jQ1Yid4s1tHLzECKBDuA6yUsyRhFgEdtixvV7VJKTVPT2Cz5LAadk9sh9yGGgziz5rZzfboRWWyCDHLuidksTD6K9VoGjDgqLNF4aAAlyqjCAQJsE6h%2Bz9vHcQkROxOuilba8kEkMbR%2FPcF9RZflrwu9CF%2BRkwXa21Iy43fBwyVA3sXW0y4Je2l7NqiaShnqLX5JV2hbEeuQz%2FQzpgIZp6RZ3kp71hSKlysLLu5br3xtLm3pmoTUMJ%2B03MkGOqUBEB1QraTjiqlDUiiAGG%2Ft1DzeXEpdoiOtAzonmq%2BEzl07I2duWarhG61vMjmOkoJhaRwzOOdU91w0%2B6nQIc9F7j8jk%2FAz9i%2FfWG1gg7djkhCNTfkFEK9pZhm5ldMPIKciZMOS98Kdtc9nbp4SsdThATKWaq2sVUI9IHgTqIlMvZDTXtLviXo5K6xOm8gHa04cVjQbXYqGtCazlG3BRR4KyejNfzJs&X-Amz-Signature=dce0bd9e8563b156864974e6629c4b47db3e3801a7f638c71f4793a14fd8d9dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

