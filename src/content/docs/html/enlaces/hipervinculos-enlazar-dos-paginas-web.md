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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZA5TUJ6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIFQ6Vkmdym1RHDu%2Ben5F%2FIj2fsHgEtzJyVLZqOjEyz41AiEA%2FhYkbs624TG2L5SpfynompYIjjNMS2FbS2wGfj%2B08Woq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDPbYjOpwHhnXbdDYBSrcAyJGJEJLmiPJQxukRRbeslMCHMuQ0f4glwQFtl3uBZm8%2B4zPYETH2rBtoTtMiwedNGBqRW5VGve0DLCCMOoO%2Fez7skp4nBTXvkPQR7aa98dNQPB7crvPuRWgoXf44CALYaJr%2B%2BdtX5KmCxf45os8V%2Bg60F6dhGc6wW5HoQd0j4jqWiu6s8WbVIXrmh%2BJorjegi7VgtshZ68zdwOGyKxp%2BCidzCyL6Gn%2F%2BB0SwMj3ocgzPVOJDoyzntCG59syFFJM0y9QJOEInTJWffSFOprjNznfe55hakIDiwRHTFZyOyyZ0uBp2xNnVKx1pptVjWItKeSOHbBi2MD2Uo660JCucTgCowduEQpwi5ol5MgSH2z1fDGqL7zNU2j8P6F%2BXkdq85VYViO0OvhxNOd1FNapsWQViMticOs90zu0yDT7kh8XGWU83%2FLWcLmpE0%2FJJCSluU3FgsnQtZeVFawXDtAwmylZfp641gbQDU6IfHlivHjT5q2JxmW0y7aKlhje1BTCfgMJj8rQ2OCy%2BAW6zsDxQBUhBOtea1%2Fd8qKldP1GAdNQYIr%2FtqtCCcPPGUmmLIDZiOaKvgvFNre8ld2Q8hnx%2BVWFdfiJMOsQN%2Fph1iie6sLM%2BkKxBqXdcvabeMdUMJyIxckGOqUBXUk%2BLXAWHpeEqlW4ytcF%2BLhlj%2BzZ0Oud7xiAtRcGZNSnHfBC7isL4FDdhJxqJ%2B9ISaOEGAKHwd15ylXDwNMomWwPPo5nt9VmoVLT%2FGLJIfc03PPvlzO3Tw7m5PCrgGfBREeU7UGEpLsUOKYDDK4s%2Bcyr9bOe0%2FzmSszCa4aeKg5%2BOAlOfoG05rodf%2Fs3MMtsnPpArnTLj0fZjKdWqf4wnZ6Z%2FWcl&X-Amz-Signature=6c306dac277aced753a247d428825f82331682376d3abee639dadcb6235d4aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

