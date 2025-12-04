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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF6PNGDM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQC3jedd4Cn7Z9nerJz784NoSdwrRG1bo5m5%2FPRSHjvklAIgOxG7kMyxg80HWfnN7FQSZZjuMuE7l9nIGkwvGqe0WZoq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN6nNpBiiObiPWH34ircA0M%2BMmPX%2FYNkcCkQDCuW3HSsgGlHCEmho2M%2Fj22%2FXlRljzADh4fVcOCCYYRG23VZCg4Dy1CXiT96fB%2BH9EMnpZOh8vUUlSNdl5e5PabRMvMJeNnjPPgq%2Bkf2WBfGftDG7j8R%2B11BcAGrFCVXaRWS1YJEpAgyIMo5BgyVy8scbfrIoStE2MBHMioD3YFcLQsFHKhiFJeRQunRXBOClJYOqWVmCOvgoHecMPypnL3ZJuGc0bQA3UE2uEyuxz3muWX9HEYf2wc%2BOtiaX5BjBb9kOLseFsGTXoEf7UpcC5%2F3EIdXM4UTdUrvHYWwmGtoS70shickqlhjpzfi%2BOnb1BLbthGHALsxCu8W0S8n%2B7ElQgxQKN4psXqssqabiUeCgYJBq2IROXuHFyEUvRr0romshq8GMXg67cLgJvKWox9LP%2Fbbh5xYWlIfMy7pjOfuPyIEab%2Fa2a%2BAleK88Ymcp2iHsRn2u1VhRaqPVbB1ATyOZknUh2EMJPlqYzpeiK8LwGTuDVyxJhupWVtCK7KmQyLfaFDE5d4%2BqPF45ISCypOOOz%2FyCBsr3%2F1m1eFF58GCHjjnvRBIFPH0Tt8%2B8lTw4Sk2U2NBnGZCfGtkX%2BakqjgcqqmNyvve%2FjeRkrsGzEG5MLXnxMkGOqUBiC3EO%2F5Jt9P7reAGhTDDJ06miu1%2FM%2Fi22pE7s3NqCy1%2FIUa2RNkqoo0S9JVrWEr%2FWssYs7J%2BP%2BUXA5Ixljufv87vQbXboURICkPrEjYlKm3oPueRK6y1Y%2Bi1s5nHPFcXyHy%2BPkrW6sYfxKRycCk4CniY78ZCNL5yIm%2Fy3SAy8Jlh3PJuqYysbPTG3KoW2jIO64vyNA8I24AvFnvaS9Mh%2BFieN%2BDJ&X-Amz-Signature=866e7ee0f724d4a2b41fbfca470c70ef8c20d6638750e86d493c632a9342a35c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

