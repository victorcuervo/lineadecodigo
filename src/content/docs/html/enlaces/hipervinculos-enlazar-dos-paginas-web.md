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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665P66KY3Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzUem3lVGj6vEpSzUHGS6Akz2GMs6fokdWjuiDrMJj0QIhAMdWMCGOw4SYurRBY0mG7qLrn0cbAlZmK3xDnw0F3mDfKv8DCGYQABoMNjM3NDIzMTgzODA1Igzr%2BhYENpILlX5iTDQq3AMx0DgG%2Bvt11w9UwlssYZSg%2B9tYUk%2Bi2pOZwCGudk19r7%2BxlEkRUHe0u92dVP6ZHFQ9NZeJJbCwmqFjtf7LPPyMYJk%2FNiMDWMxMm%2Fm0KjAZk7lCgdW03YmoWyUzNIlUj4LsYqqSEfMQbgArFMI77J8bnBlhrIHZM%2BE85FPCkkdkru7pBeO8TeS6t%2BOiZbu5tRxETn0Xkua%2FfaWL25rx3d9tz8guVvvuXo48xE%2FjklPH0uM0UbB8fcJs4RrlXDuEU7g8ejs%2Bcqy3QVbbXsTR5T3AO%2F9OBlL2I11qCNH5hlCpINyCVvx6yroGzTmeGxMM6JPp2DS6AKMLChpecThJtAtl%2B7mWN53cZHpdzSfOV91XqYoTtTi%2FJ2EQi56DItA0mvWBqyiCmv04psg0lPgl%2B5UXQ93ZNgJVE3MVi1URwoB07h1UfOEi%2FzWX6mVi9Px8XUEge0r43l5iW7XkEAYVtzlfjjIjumlQJqGoU8IGigLTU3%2FNKEweFpUsFuEf9qejX%2FVmqjZJjf0BrxWUZRKXwWws7k9iWql6RAk5uoV21nLS5MEnlg9ujGS9KakTHiK9Njagxm9LjCNLHwG01%2Bqrlp3tzEzCQIxRh04JJoaChKV%2B8LLEysz3DOBqj0Vn2jCwks3JBjqkAQQ4MMTLhJBnPMHXkRSg9SzUGMHcPRMvLdUXp%2B3spjO%2FUyZBb2MeqGe6r6B2oavTSB%2FY20L%2FMLpXGLbpOOvrghpct%2FXs9paSExDPRll%2FaLDpKM3XJnXtgyfZOvKLyAukyFBizq5DKUgSViqXtPWTUt5ozGJJjwDaXjR6MKLJppXmg%2BsdVUGpibxvKbCyfwHfzNWgsDzViu7pRPy4%2BM%2BGk9ENlHLq&X-Amz-Signature=644e8b40ea573dc48f7ee2dd28db9020b1dbeb30fbc5899dc157e5b6cd04014d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

