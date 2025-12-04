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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3Z7EMRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDFXh6g%2B9nWezxayNaSTk1F%2B6eKN0BU9E0PS7Fc3zQftQIgfsDTTxUlUG8JVSn5JS0lz83UEr2%2Be7I9PnFQIoF6Drsq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDLPCKo9r3ls4lmeIeyrcA4irI9EdQDU7%2BPOfamItRWZ1XCk%2BEh0zEU6Ur1NY6UE5K1NUhqlx3Uu5hHZJOmyXXH6FuxYHXhpG9d2IP78yuQ%2FP3XpequA10jm2CHxwL3h5mvb3IHHulDAumXPr6NSR548AMPy%2BENa%2BLWBhK9W6lqnQs%2BmXyTgzSI72YlghOOFLLbWOR4wrAV4n4dIg3ESREpoSQdWUibdkWM6agESayUj9PNfjDla%2BupTlQ%2FchmZLLM6Xc7S1O5hVc7yA6%2BX0rnT1DI9DLlAq%2FV%2BSoPsjdVdKDOPMslUJdakkC1X0Kr2IFlVjeoFlKXAeOeazmw7uEUoxtjZo78dvMc%2FcGgfzIcMZd0m4KSsXQsnmXOlPVFvkem%2BFDs0uJ5jYiwJrxDFp8y5YItKoGEz2cVv2U5PmVUIA2oOqwMCdlheVaxunwMJy3N%2BO87sNt8kkUUeAT1Wz%2BuCR1zQFBB7sbkzT874QeTARCRSOtF7NUqEQk5uMPohHXXQ2WdnmJGnjRzgz9Yo2o%2FVWvdYnMfJ%2Fr5s921T4261Gfi6Qihy06MeeamKmmBmaBSPzSS1vp8U%2BLncXBRsjKf3jEhEyz3bhrUz0LTJMjvF5RuV5a35WePbVsbwsQ3dkggCVBnY0eK%2BbiPHcxMMW1w8kGOqUBq3g9Rw%2BzRR6gP6POhtUHpaj%2BaJni38kLDPINKkcmB6XnneWlh7Tg7oMA1NwyYFdklUJ1xK%2B%2F8AnKaF0ZQchWozzfPzn11yNeft%2FGroTNsthrxOlbNQwOebreT7Ru7L2qw9WtBGwiK7qbeWhIiVmmHR0b6H0a4skFeh%2BpnMJWS1lTDE8iTRv%2FLduxvr53b%2FmHwcvn%2BzNUlIs3e1P6%2BtoN61tW4dVm&X-Amz-Signature=d8bd74b09cfafe2f5be8b5624a2ea353314b191b77342050a5d932ca5a603898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

