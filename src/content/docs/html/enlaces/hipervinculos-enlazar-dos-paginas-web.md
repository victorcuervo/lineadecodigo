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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5G5VCQG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCt%2FU5eVMnigM8wosEA%2FB4Au2NkhoWQaNaspnY09XyeKwIhAJIwPJrhqYJlB9Okvgupin96Bi5oYeCSDStC4iZT0pvKKv8DCD0QABoMNjM3NDIzMTgzODA1Igyl6mKROpO5V%2F2qdxgq3AP4ZoV69mznC572389RuCXng3zZJk8%2BF5kvuZfqsItAtrsFvkyjdTy9Zykf6T7ssh0SL35dq0y5w7hdykz%2BxappswXpLb6WBIuZLi17%2FUt0hxg9yFwtSvouk4n6Su2ax6S%2FBbx1ZI0CI3LIKmqFeYsGU1j9IeO1%2FONoAYuFIMSknUir6fAqeaxbvwxVLHKNvLDczwfHiE4vJKVEA0fIrAkWoMtIwhsOVYPsiiLpvkEZraNrpCAfolZ6wsXLk%2FnFgs5%2B1CyW0CDUbNR00WQHhUDKCJl8I1VARMQjMRepLeq%2FE2sSnr199wDEXqMaksCVBH%2B5wzbA5vChjGFHU3%2B2buXqbe0WeHL1XhnNHAbijckyT0bYpAuO8MLBlaoN17V8%2F3G0gzDmoTmKehl6Zhgxjt4iU%2FvH1bjfspLdPcEiWZ3V8YZjmMfS8ffOFF88N9BMpOmNkLkis9vtrEGXbMFlVW8uAMMEpOdDe0aHVAnEFKXu8xPtG9PVrtMTRxOyCQgbAmTVlYn%2BpEQo38diUJsOsDcb3OAZldVKuq%2BG46XF0r5vEvymXM0Y%2BAgZyf5Z0lKQle76hK%2BG3buJQ%2FaXkEUp61ne%2FEiBq5RrEwLLAaa1CDjx9XGqPnVvPT0Da95bOTDjkMTJBjqkAZL4JuQAMycOgl8UbVymnkW1ZzntEyQw0nspl16mhF9J2SuIsCDVTt6JTQFYqqbsO4PN2DI1AaG6ZkbegIUjv0aeG3M1Mg3FSW%2FR%2BM2PmdFA39KpM4Hk5nwT4X%2FLUjfNx536IE4S186ghQ%2FWxJai8CXr3Lv57d0w9Y7HRplrPLn2g3sKllN4m9akPM7mStTGltxF9zgRmFh%2FpsxYhERhXOAEjFRv&X-Amz-Signature=78daa629fee19306d57553b5ee2e191f21d21281b4d9dd2a49a1a39972e07f47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

