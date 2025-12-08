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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EFNOX7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9RejwSwMJmnYLUnjioEXPSeQKTcc99qJR%2BUgdAr9o5AiEAl3%2F1kkJVQ%2BnnQNOKkVtf5gtQbfKh2V3ke4bmaRtNnXEqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF5Np7xQsbJAoC8KjyrcA0nBDUNCE2WhFntiNj3yZ1yFIAVvxkT%2FRHTw1qizgUCqAz%2Bx9aRfvNhRQIicyGrcVfpZ8jNz4VUqdJgD5WkWHmRaWbwf9jCWsEHay%2B3MUxzGjqInhXnalyKjE7Bu4aBOQsJJcav6wNGwK0PoWAqEhG9z9ieQSCSJyfqqUxHAMF6Dvwmz0xs6gIgm5ezyYylKjSY5bgkpPMouRHW0HkuWXN5u4ckOTNYPcsvDc0KYUs1oc%2F007DLqCrCN37b12sRZGCKMenzbZIDuOi96xR63qqHkiuzPkf56P0Abccj8IidUwfiEq1sVDTnxDJO3uS%2BRKG5JslgTwqP6YOYjRGqAbv9hNS1IBrx%2BtvQH1g0CFqSzfHy8uaZPvNM9SjbSKG3Jd%2FfY85poslZ1kfz5oNg%2B%2FYRb09NEdRFLJQgPOV%2F%2FiLFgn2TqjMC6zvqQ%2BbWxtFxEja70MIKajDNqgcs5KWYM9kvM9SkzJHVv6%2FZltODgDwmyDLd9SD3k2Yq9qrm973pWYrUajz7zU7lPW3sVOdB2aJfsTPFKY8XfxpJhFnoUArDEzNGv3vEC4p8lXn1PwAKKFbxpHB3fbPLlpPSY8M7b%2BxPcehdH%2BB%2FHhKQ1ChiX7zwu5f0ExEDhS5vis3W3MKzR2MkGOqUBCmi%2FPDe0OeNm9%2B3Z3r3lXviyhJYJ9HAk43zjNsTWDi4FL0LdeCHCXie1PokROHgJssQnTWWTW6HpCzwiGGNlLgKXDRVSGkmS3TAckd9tzoW1vFNhUYfA8yQkklB9Kx9Eb1tRBo2IuV%2B4P0O0vGH3N6fGzpw8DGorWzY5DlozwFvZEi2lHuCLUqAod4%2BctPEN5Kh2l4%2F5I4U%2Fp8QKhAoJ3rlBjz7d&X-Amz-Signature=0d9d04ef19801d4a8638b056acd23223dcdd29a6439c2a02c41be34bc0a5714c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

