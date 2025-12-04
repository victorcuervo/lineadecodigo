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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6THR5MJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T140428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCahsrzXKl%2B0%2FIxjAwm9fjVje7WEo0EH6UWuBP1PcnaCAIhAP24wgz427bx9YH%2BttOXAeseTQZwpW2rXYkkarjmbOR6Kv8DCEcQABoMNjM3NDIzMTgzODA1Igw7HOX23NzniR%2BAJH8q3APuwNyyMSb152m7CGC1ZGKKLLkP9e7NIABMxoPCU8Ssw0SUnXVQE2ZAD6OUuReF7RdIO1YbHVI9swlH9WXCEqTHsbP9AmI8i8V1YWmYpa1T6GcFS44i9WLJPd6k4T1BjHziKA9anhwDwms8Pm7m3uAo4zOiUz50vQAjKnbeAG9GhOSoFPcMcpYUz1keVDiM7K4xQZ4YAJPqvyl6LBxs89Sk2e0K4tzZAuQ7mt%2ByH64Ck1RpG8NGh%2BtKwmidllMP78ExD9jJW6yPrYToPCNF0Mn0AfNDNKAodL2caD2lz9woFJ2S4hIIQcf%2B6QvarH%2BAMckC7QyLzM2idUUaV9mWkfiUfplsk9ATuL%2BK4jx2L%2B7zBJ425m6LM0brgdgjToBlqjFUQRz5%2BJh0yEUyJvQ2%2FJ%2BUiLJhtmo0Io0hMBmldh3XRl0dFaLBMJKSoRwS8mGHp0w0un3P3usqgMAT3pHsXukdNoBG2Rh22wLQ%2FQu2oKx%2BhkoZapbez2x3N9kTab%2BIMqjvEEdXF5tVYmkPCvibbyzLAEtdO8%2BXCV3jXndji0bmV4BgTRraUO%2BWB4xnVgQzBqEWJz0NOjji9Hm9GdIeRG244W%2FwfE4pq%2FTazubg3uYrIku2Z4dMskX4BD1OXjDFoMbJBjqkAaZIQjRds5CjKhLxzmTTO0cQcDg2xLhZFJa7tyqM5%2F%2B%2BQN%2B%2FRAHvY7C0fPEEGPY4rSfmCU4TA%2B%2B573uLVIoPtkv05j6l7JthMv%2BKCiP9rIYiTy20Ft%2FcAypK8D6DD6uuqb3IP7BW4kIVybjf4fNQ7mtMdij10kJbl56zjbQZBxXmDyzptx1npEcbPOTP0sQVeJe%2B2WXDIfyrXtR5NIm6U34OYbSk&X-Amz-Signature=f86780a5ef1eb6f5a73b4efc6497538ed4f6add66e69f9fc40eec8137785a76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

