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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656WLAJON%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDh1yfg6BBTtA%2FlVZa1HZCH72tEVKFNtWZU84dz%2B8f9wAiEAzJ%2BK%2FVy%2FrGGMU%2BxZIPMv6Xg0JvfBwZmPU5Ykx%2BiMZUYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA6oJ057qXJR%2Bmh4CrcA3uGXpf8VXiE3BAoVtsVjR80iatrhstHT4B762JX4Sccxklgi%2BCu3yJYO3Jm8%2BZYzrhUFt%2BY7%2Bft4iiSMEdsW5X0h2r%2BhbfgnWoCsWxUg1%2FiQMgP8veMW9HOegxhqlmqr8aeZK%2BOh5NVASQzGxiCv84B1J%2Bk6uEBvkIuFY%2FwXY0SN8VMZWmBhbUWCDLTakvDcK2cAb8tT8opPSw7%2FBmEvKgfHksEANeytkZUPzNFRfKgw9kllaKZdcK0IQgs3829xZIahGyaesvckI9nhxTPIHPh4T1AY7%2Fnxn9MGFvgVAcCkUUMT0rnFWNK8yTjXJh%2FjvHnmOHbr%2BEJLmK2AGYYiHGOKeBRiEwLQrF9JoOkXwIMzxLiNUfmrvkMZuqxVE4VzWw7CNtWY356akL2fteORGHpCb9G7%2FnLJMIdnZQ7ubrsO1GwofA8smwOwHat4RJWxc3a%2BhrknDx%2BUn%2BoBH1UbA%2BotEoVAznY%2Bpu8MJCFIq5oDadTzD%2FKDgVU1OXZZvFPOaLTlHTddBS0k7nqRkDKmNTLux31sXHBuQmWz273o9FbH5nAehcGuNGIAhWC%2BXwVkuw8kDNHMSDI2QnkqeQAXl21vmxOkKyLutIyfOuCYFc77oswi0vKGFt8JlfWMOeZ1ckGOqUB%2Flaj7AauSpYwRpLNZRMA68k3v400EgLBGqUNSFQolxSm%2BmxiRwm1Ofb9jQTLzvmG2D%2Fg6SKFu%2BoPygbo2FiMzSX8oRnf559ljX4AigtQNR9fb7y8T0LjPuat1KXDmdEcERpoMQzPwhqnO7eITwm7TFSFKYiihchfBwc8ct4TmsHk2ZEV8U6pYYyMD1FQh76RCLFsKIUfO8R4tST%2Fg9EeVduEpWlA&X-Amz-Signature=b95a65456bb0ca3ba327ab22d039f7ec7fafa79ca5335b57b9e49c6d810a891d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

