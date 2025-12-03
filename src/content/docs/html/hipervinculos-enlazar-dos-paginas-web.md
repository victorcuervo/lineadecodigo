---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH4NC7QF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIAJeOJPjMtLkFZhEscv7syVehJfmpQY6gmUcKq2WJwAiAiBOqU7o5TSQhnFgd3zsfeel9fyj96DKPv2wHOwg8ZCfNCr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMqeCpQp5cA4PslPS3KtwDHO4TNhRAfAr94qdR%2BFAZPc%2B6cnq%2BYGl5Ii5gZ%2FJBrZPHEPE4Ej%2BbQS4rDbFB7eyaAk2YqfhtJa2T8rM%2FdubcItnTXCE%2Fqbv7ZZePdHTR%2BIB2GQ3Cp%2FhhuIeCtDQT53JxZDhwz1DIUOcHCxxizdAKvLBsQyQYIq1iQXTOB%2FGmY%2FB%2FfLH2zZOl9%2Boemf%2FQdVmxOWoLSoWNnUWkNt41FmxCl1jP6zrrK72KYW%2F1mkbWmVODI8D%2FxLLuwJn%2BjgyKewYMPssxZ2mLHDwn07%2Bu9e%2BZoWTA6hOUKb3aPH5iEoqLG5bKEbPvstPDpDPsad3jeA9mPBN6Mh6xdvDQW4LChdbkKTsUUc%2FQzMpkj8TarvTqkb0Q29QXF%2F4hFe6YvNvpHEgGKhS23qgFxPTCLSJgViFEk9Zudo92DftUBpD9D34LZMHh70vG%2BQNAb1wCPvcIWDviknedQphAhaH8T8A%2F7hfDnP1x86P7dOVNewEvofyGPyoMxEXU7WQflz38qOKNCLa8AZtHDoS7q3qy%2FnD%2F%2FNnZDB7RPJYgO30S7FxW2JcuZM2eNoyMddz%2FYBffraGYbKESBQ7zQuOCCTudAcC0k%2FDcE%2BFgf0KN6E85DHHEgHmG0eV02KqvbC0%2BZZ10tjAwqt3CyQY6pgFF7Q6%2Fz%2FC69%2BQsA26UvDCI1VvFesRMne8kcTAxfM9Ba9SzJvqpRnukFv1AaiAMDFYCTl8UCqQeyXkZXtMdMWEqnjMovDyVvba2tPGfylbO8SN6RU4AeayGanr42rywYMwjkSg9LiiTzlNBVBgBuBLhx%2BAzEmV7vNG3Grnd5sCuFbPBlp64hIFUhklXF3Y6L5vhZoH7UVSkQ%2BMXEDAGnO5AQJ4CYe6A&X-Amz-Signature=f528b87eb839e0f67ae92e82ac6c40ad2659b68e38a3d47cad82275ff9611821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

