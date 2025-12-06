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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672V6QIHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcuwTZ3eJnt8ndFBbNUQemoTwWFF8KHbx1YDN%2BINNVNAiEA%2Bv2lgFSpdOyMQu77jZ%2FEk2X5qNxmDuDO65Dj9k%2FMgW0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDAfwbX2AnGchzLMSgyrcAwjgJ099WgXf2%2FYEKL72%2FSLPJGuRAbDzzXnmtJ%2BGQxYR5cPP700ObDFfW%2Fz9VDXZHXxw23GIdRu4NfzN7pkheZ%2BFwSvN4hi2hfXbMcFghr5NnOTJV%2BqATGQ7xu1lOAb1zrNfOTPiE8Lcts0H4atPVAmWfxCEfkkYcxZPxSOYm9jKgywOsNbglNqCkJc%2Bb3RB9PIqvZcnOLy%2BpYL4gj6Wrd4PT6oZbVIWdsPLboDzjtDPlsyh26DrPOcYvyLFIdCkQQ6cHVOdx1R%2FifvjO4jF99%2BMjYN2XktciLzL6bw3ro2c2P3D%2F2menD9W70%2B%2ByyOtkVimtrX8h%2BK9eA%2Fs5n5AuV8bbDpFZNlCNKgbS3TvI2LsqpMzn4TTR3Izs0UqmuRwZ1oKj9PeAHnSDhNlB3ULaH5X2HgMFUcnMMXkcBYJHgXuTHmjX%2FQ5kiU9CNnr6rGQDlaZ2GdinZ6293XwerVTL5XLiKGgKjMn4zFqCdyRRFo3pu2kfK3VEukMyV9NxnvoeSyWKMs0VlK28RilpLAzvwUC8xVT1E81lhWEbLtziTklAS4D%2FDi4kxhHUVO%2FXQh8%2BInXg%2BHHdyV7m%2FBX%2FMf5463jndu8CjvJQS%2Fx%2BeWczI4FwvRVt%2B4vojA6SLEgMNf9zskGOqUBdw8xiD2MgUT1o7eGQQU%2FVFdY9Mkg7aB%2FA58Nnlfy2TQo6Pv43b1ZV5fXa0SXY0CTPe%2B1TsCpJYR7X8hvcO2u3nszVfg3D%2FJXd99vBIapRK02uZt6sB6uZzBU1rg5FlYPWh63qxpx3Y2bQRKnL63tqoXuT7xp%2BBHzBnIF35BCzYbIIAtYiorpFTnsL8Vu5Fi3DYpTZ%2B0UD%2Ba0yTSIHAr9AtE3M%2FaY&X-Amz-Signature=715453b4a9497db0ae39fc8126f0ad5bee0e32466bc8d67fac3e98d419a178ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

