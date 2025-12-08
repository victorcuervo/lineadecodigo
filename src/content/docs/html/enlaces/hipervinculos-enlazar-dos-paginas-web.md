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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4I3XUAL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqIDkn6Slr0Z9GX0%2BJOt79EYH8UitM2pCQ69OsNc%2BdmgIhAM2FaJqIs9dTieaF3agxoURZxO8q6imIxXp3dDGesMv%2BKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpFXdmB9JZFy8Aeskq3AN8cIJqcOzjpu4sYqKf8dn1Vyoc5%2B4OjOq6E3ibvtfFbjppEbxsOCkwpu4A1QKhKKLkDdbMhk1dfcyHNj0uR9gXbR7NuWadimttMOYjCX58dW9vj70Qdy9LrV2BWQQtRpzckHibqO9BafEYIocXQsjv2Epbtnw8eiSFEJry6PwHF6rDUrgGY7m2DWIEkD4Jf7EwX3Y5t3k5ajwPv2IJqS2zQNbWQ30%2FB%2F4su6EI%2BnRQ6aHYoz%2BBmA%2BKiHMezwj9FgkKXqOeoNUhdCsSyfYpsidV%2Fr3gVN7h%2BUpxRXeEIK2Xv7gaqfH5%2FKjagWe2nyWOsTZxZ7XiqTCtq8pLVN3WL0eL33DVSEjWTqFBYWXl8JvlWqbnkvVqNDDpeSIzaGVwEKujHd5IYrS%2F7Xya32lBbp0fZh3Q8vTNshJQ6xznsgwHF1TM1dPSmcQ%2FqJvzme5Q%2Fx6N%2FkKvaCfLMRqzbDyUnRC5FTbrxdE7TsCRVekYDpdbLsA5fyzhgpg1ig0sHlawE8qBK3x8lwKh%2FNRWmGbB6A%2FYQ2OpGMBCTMiI%2FUzdEbLSEUazosybU%2FJexhxBQSTpxtBoRNuBIGbwDrwBBgLrOslFkmyLDz1SyxHB2SAXqBy73QwzGt0xeuEej0LCXjCc7tjJBjqkAb5SQii%2BHEJyVKfWVAWLkHrXq3DqfCUqKxbawhzlgNA2gh6hhbS9X8lO4sEZGCpyBStdsPvgN4vvEwVhhmX15qBczIJI8AjrFq0HHELf8emekwjOxUUTvqSCoi%2Fa26TzwqpmtCeAnI%2B0qJi5hcZSesJ4o251rc9eCGseuzm%2B7zfWobJbCrxsFXOitL4cCCRFRb0W%2B2NOa0VXUdDrAweJcp%2BzOH6c&X-Amz-Signature=d9f02fd65ac229fec3cb2cb4ecb92ba7c88e5d79b46371c0e455c7c5aef9fbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

