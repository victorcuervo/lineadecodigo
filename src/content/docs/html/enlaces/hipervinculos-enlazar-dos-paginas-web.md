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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XU7KMLFQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkRTcGManE5%2BXJSDopD5PAoA2JMXP6b4Xe5a3rAEFi5AiEA%2F2a09F1WCo7SZMlWJMHsEfDskodHYAefirSAqDEVyvwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BN0Iu%2FKqlvTSNOYSrcA4QfS17FCtVamKzEJZpfyCkPUzQoJa3p9ceRSIuuB5DGwwAuPgxeUKUuGoHZMNVF2akNZPUhcfTgg%2FwJ0POdbtgLHqgyfprMwo1JcCeatOc13P%2FrTG4iohKIWPf6bj5DGqIIHl21zHes4WLUdo4Tnrk1ls8dLW6e1bjEp1BKhvRufAhS2%2BQOIuRW%2BvfSk5WacsgG8R%2BQh1AzlxNbFkYYtSOqQG9uah3%2FKpoCoAF3WZW40TGkRTGVsCoBXPJLdNIkV8%2FEzIjbIX7ruJPzovSVhiq4Q1X2gpJeMVWtBIT1cHBbHhqkfCfUUW%2Ff3OjpzMcbKlY%2Bqnb7lof4JXudCgQe4%2BH5cSpOYmQtRd%2FX5%2FOQK5irPLxMsvGfePz7x8w44b%2BswI0BSpsSkJ%2FRvvOgodD66jgcDRB33C8YcZbbl%2BM9cUnsAS22p0dN%2BS9lqcmNBd7UW7%2FmexR%2B1i4rNFQgkkk5DCsmJMcdztjppCXjfPymVkPn3EFxKoVt9v6vnbmmHrqpaeGkUeu80fVQ9lEBwEg0sg3%2BtOWy3EM%2FgLCTZtjSZuL1JGXWIzPAFi%2FC9V7OatxyTFbCam3G%2FIBVhRD9tthjfO51lx4mcfB%2FP53Bni%2B4e2fLFTPsotJuq7e6u9DZMOyZ1ckGOqUBIGJa70vABhvfx67od3odmTDabEnQfZi%2BCcWn%2B64mRE%2F0f0Ik0BZ5AT9lv4ZwFKb3UwLs57yJrViiu4dOUMKVeMug5Msd8FhoiQ6uHUWUQTnXpIfu3tkLzqkJuBYG1cT7mMhWniUHJNzAWQ9lD4c01T0fsxB0zi2zXqNslm3YDO8%2BaPAlOpHPUf4ofd8W1KzYVuVFz5%2Fn8cG131m3mo%2B2uDOngwby&X-Amz-Signature=ad54cc6496ff0a94f7b2c2caac715ce51bba653dcd0bc52d5989e80e0efe011e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

