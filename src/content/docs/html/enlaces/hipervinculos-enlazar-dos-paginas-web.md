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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWNJTO7Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhWc0zCSVrWAUEAgypzcQWl0SvDNpPPe6aS9spKGUB7AIgO56in8Y%2B%2B5MmqMNTfQrmjrTMAB4aYQehOKJF5jqchLYq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDLOhuLi18NUXSa5uuyrcA6%2FOPKArshRMFIhrV1odD8nF2bU3lCSHyTPzqZ45qiuiztn1JiYiXvu2ReNj7GioKIndF3XV1qsOcFlSKtbfB%2FMdgXtyOHNkzowXpJmRcQrN1ScPxlVrm0gpvMrhoI6h%2F%2FF1L2vObJmPRgeQ%2BbhTeqAzrcdX0B2l%2BNqD1opKSNwXF4vBaAS58whZm6Zlh%2F%2BcAClZOQySrUGc97AG7%2Bo2urTtLRU%2FYW9Mu5Jdygqu3GJFaq2VIp8GVmVhI0ba5GdCHHfqushhhTCwLqkIoQwGNXRxQLtXMmX2%2FxP%2BHFdRo%2FXuiMukl%2FZiS9mJAQQk8dqCTBsmEOMR3FIGU3RLf17bIhFG3O1rgiX6SFz5I0%2FBZJJtNpWbNwNhv3BxgTAlkqvBwM8Va0Gx74m27n%2BbFM2UgTuDnhorfEZR4Jn5DmgOSD84c1txDYKYfOjTzL35emEsKZPZDEuQ%2BzTtWHUPl%2Fu8bdYl3SRzMKu%2FlB5lgZO8WlkiUkDHmHFYLLgfJW2Z2BU8B85DIl8DgdpcUFU8QLk64%2FCB5k40mNTqk%2FOflNw9vE%2F1mnpcNvVB%2ByGrBZNNJ54%2BEboL6tgySw113fYEte9Hj7y%2B6u%2FnNYVk3EljZ0xZuW%2Bp7GdJ2PMM3ReZ%2FJwbMKrozckGOqUBM1SHqI%2BRrnkC%2BK6FJedmVXiOe2o5uOMFBKbAhCdfABTNw2KC6zVFEDs40fOoNzNzwaqcGm99NZAWPRSgEEvqPF%2F7ObeNctaSDjmPfug4i69KDWw%2F8zK4iyvTfazcpMOfyTEFqd%2FU8wWijBL2%2BB13iPD7WSRjPZJGtVj9ckyYQBgAMa8g5QNv9bW%2BnDpiZdFB1XNR3wQVAbkVv3dRvuDkbqJhd0va&X-Amz-Signature=e453887f5c852a82af80f4019fba4d50718c4b3b7e7d67e9b4fb4af6c01dce41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

