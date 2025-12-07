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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQSE7T7T%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMswZea7SD686JmMKB%2Fq6wDqhwfU0%2FWRwatWkeghCKFAIgHC8SDyRXcLPf6My3q%2FAvBj%2FTeVObkrn1pGI%2FfyX15f8qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlPTohOryMRMbVNiCrcA%2FG55LEI72DJB82WiC%2Blt7L3r9h53amklBtP6fVM3SF%2FUdDFtCvqUCYOVYl30woywL7cM4ioeIgOamx6Lirz5N5RBeu72imGDsIwHoUzv0LJVVkl5TN%2FJCDGr4tXDDGTY5fH7Rb5Qx8wbXIKVkNBgqPn5LRkp3EJNy3dMM1q%2BofRLe1um%2BTZDtWnlC3pGEWiL12LZ3Y6EV35cKlnZ%2FkylSOnmT1KgubooFTgEBbYHlnfQLdS9sGNnZwX2zDj5DdZ1GopmVkUHdPxRrxmIGc4OWBKfCB2fmft7CE%2BcDEFjdG9fU7K92dBmWJLNYDEmp6VeK7EJu%2FS49MxZrgGc%2B7fx7GpZb6ggh9mChWCA9HihNgGSqK0MmCQt9Z3yngeeCf6Poa72Eb9FMHkjZbJNtBFu%2BJ53bTAYx4U13zX3V0D7lybFFlNlUO0GoGW9nXP1ZpRmW80mvdwtT30RtyPDsJmzqzMLpfw5vwlpbtmmEdNSesYpyHmNDGQofxjRcoek6FhljGpBmsmgWYOxU1QOSzepwGQhY0GOJFx7TyLG14gskTA9RVhESt9OR1ZT8LGbLf6LyyRdowKgbL3mfdvAD57fv9OWa1KKSuvUXrPY6Wm%2BOUNmzKNJTR4tPJFupy2MIX90skGOqUB3w0HvURYiX2ytAm66uYfbIDir1W5oIciZc8ITmNaKeutHbiWWgMu%2FIhz8l5Xjgamg4Kv4ec4p8RmDqDm3c4XkaDhlRKqysZyvwmJVmWkUTMzSFrLc%2Ft3ToJ2dj2FnhMzZsKbBb%2Bkhb0Pt8ylAAeCZi%2BrC3BjrFru7MkDVZ1Yao66epmWULlE%2FmqWG%2FTNTZBNa4GFrp7fVgX0xg%2FN5Gy7Q3fIaIrh&X-Amz-Signature=aefb6ef047804f6123d4befa8c6a160746e492ebed6138717e7355ae27f630eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

