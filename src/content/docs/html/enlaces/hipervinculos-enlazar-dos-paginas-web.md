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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUOFVSAY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T164757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZwaUxwX%2B7CxgAosuXI%2FuE8xi1y%2BxmLdjp15GfTgfDegIhAIAHmRTe2TvEW5oPDyB5xyDysjXbnRa7fXLARQ1vYzn%2BKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7Mvsc8ZVrQSM9yLMq3AMql7G6MBB1JxjVPjU3hUi4HVYytzxVD8DU1STMXGMTBpuWaxUbfs8JMWOpozVt8Yy46teDVJhlgKG8P4uLfC1NSfWck2Y6gudy%2FROiMrojpNOLy37sMauXqRAx9%2FoHC3H9saX5qWyGldYVNvPRjmbR5m5reavKFLVjcFvaBwcWZ1QlmtYaT9GZiOYOGWZbWjcDddeGqkPb7KvmxWg9Kwy%2BSr08yfu0NErpjyQtCkK1DLQh%2BwXuZrliyVvDpWouJtvEgE%2BtbsI0JqQOS%2FNAXy8lv%2FBVDnnLgbu%2BMIUwIrWL4VZg6e3T9zmWyaYCaAqXsha1KxctKwZyOLsUza%2FvwF%2F1yRL1zEIqDHS0aNGkzUrlMIHiS%2FRsL5ydsESdFs2%2BM9JWOORWU9cnq7YrG9GUIxjaVzC5muDKSl%2FA4bfL0oFQwMDmnxdOiaFqBql%2FDN9ZKhFesRKEA%2F5GNN86jVzdjCCoZqvr6BQDZfKjXxlszenOtZppy4Lwl7yoxtJzAbVN6frPeUcErQAV8476u5990k0lmBtdfb2nGKUDkNAW5ircc%2BpHui1qoo2osmbVt4yEXquy42Plr5qtcTEhr%2BvxDe2dx2kTBwv6ySFP75k4xr6DYMsW3jIVBzotln3CnjDDuNbJBjqkAa5D73fSZOiR7etZsJx7O0Hz5cOH8SjNF%2FJms66RsFuUMa8e6HjnYyxZRF8Tfiho9YiZFLfsBvcwQnYBTO2%2B5a6JuGJxTbClVAC4MfuPSU37CnrqIDjEz%2FQudw6JD4xSmsERFFnuZUl%2BZUNR4nbZIJwSK3c8eVEPjoc8HNJWJ6xFSs457crIrHD89UqMPU%2Ffq7xaekDQwxevtpV65vnLOuuLTD1D&X-Amz-Signature=f8115795369a1a3e47496953358d9c389b35ef2fa69328491ba89150f6f6029d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

