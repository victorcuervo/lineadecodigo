---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPLNFNIF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQD%2Bgk%2BlYaMKVDd39U%2Ba9cdcF8tZxsrQMZRI8HC8wcwbogIgON%2Fms%2BpTvlkUCIdoLBRoYejJUBmzbXUUzL7e7X89c%2Fwq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDF1yAozcMiDNbt0NICrcA61becc1h22U0acjyRZ%2B81WumFwQugcEAkndVPNRlzXvA99H2wgjPPHEY13lmBdkDSoVSAj43IpNwQylFQjGRIizec9LOrTGv3b9V71mA3yiV956LC3y6gBLZ3cEQqkJJRUR8ZepU69mv3Plb8VIjK0jyudPrBtXf2m4cDErjL4okHidADmkyL9zSa7c4zAJtKFhQCDBzh53iQYO4E%2BoiQhYbtdG0E7jN1ap8xAS8FzvpTbUxugfBVYI01CoI8Pao3ZnIPlz7P1ThwGCnyJZjdzNPU%2B1x8pROMTn5KWJ%2BLhf8k1X7LFkIn8XX7jGijUHakFDQxgnDpfvaD4WKHC5ltpfhm%2FkG2vVLL6clSDj3jP7RkL%2Bm14jwRpQDbAVhCkfo6yy1nA23QoL7YqSZVAGAdcbyY9YKxE5gF0rUYLP8EnqcCJzpCxN9G%2B410dLY31KXpghZWaElFManoD8adGS55NKuh7XLppjy079lWGUamFa4xlQlcgVWgapOvgrWuoJgOkB554sVN8BJJztjvYDHqekbiUwwMzq5jRMMhOYnRZXce7UZj62fWpKF6pLoPaTNUvonmMtnNe%2B7bekIJcaz0x5oV9k7UWugu30F%2FqbeyRZmOtpLWckt1HUKXnQMM7oxMkGOqUBgL0U89Ri%2Bz6HSbYY%2BmdHs3LxHkaDxmxCLIfTYjUqAvvwc2SCLEuT8TBNCpzU7%2FMrxjke8UppAg0Sy5%2FewFWvIoHGHAyvhzW7ufAoEVlkpJxNWoIPFBXwSyfRprGegDc9TRFXJaY3QIdp5pUpagHAc7QtqPiXIzpuELo4trjXTlvOKaIW3Jg9aISpvMX26a2UmWBlrqRPZj3TBJBuvziEx6t6iNa2&X-Amz-Signature=3c6afef3a86ec040145f811ba331142f3bc47ed4c93e37837e00c31e38edcbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

