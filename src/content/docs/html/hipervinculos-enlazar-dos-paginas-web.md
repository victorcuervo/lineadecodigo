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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643EQRI7F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIHIgCx9%2FkBXnObX6jSWQ%2B12jSxveFxy%2F7huJzgtpcGGZAiBZUqBTpTbLnyyXuc7Nfjb5NNEKOkKGXLbwSPf1NX2Hyir%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMXkdp1AFo79QNzOToKtwDQJhCgk5JlCrWEBbSvel7OrXl8fa00%2B5Ku27Zx1LVmzkjCffSxEJZGxiAWDK3wynTmOGwDxisgtU0KhiC%2B6Sb3MM0TWetcWyj2dqmMnyHAJM1rVC7LjUnRGJUpksLJqn4EhMt5spKl%2F2uIoR5LppBMF9yZmtWIuSziznEyNIj2Gdt6X861USdUxqNU75UpsgyoUDQ1YCfOKtEEFUj%2FX1dl9r%2FmwpcYkbvTGBl9boo19vVb4up7G5Jo7Vd6Vx3gzKQ8pEuqj525z9tQGUKpRDJVN9zgXrx29yFBmvBnpfn0E0OEFWmVy%2FRt5Z8l%2FOpTkt549N1CphQyFWch9oH68ynCaxoTPB07yTYSA8fsXRfrQi3HzU2oGbgLvLBP837lcq8RLKZfG2RNn8O5k4DqZSa%2FAC3%2F33LXeenK1%2Bu9BSxzVlDuH2vfQb%2F2kAMN680RyQHebmtXOtafJdCkaH0f%2B2lYPtwbC7LFljfo8iay5yO1zR39Ae1PPuK2fqnrPh5fOGIPvOfDWehUPwwyzYXBOIaJnd%2BjGuQkg883c%2FF5tnFRwT3HP%2FXzLukyHdh1iCNrCyFNvHI02cl4hzhcdPQOixahXAEshTAjxUTyTyUAZDY%2Fl1lmRhgnZUmYdcolKgwi9zCyQY6pgHEJpq4G8CN5xvaREilS8034FORtY4YLXunnhsmqemifYawc1z6xviurwrrWpaxIG2jNs%2Fly0MlQnp9RJ%2B40hq1poLWzc02KsJeGnvEcZXkPSo9AaE26KVf8buzd8QH71m6pVAwyM7xJv9TlIw2GKXjKnqBGmQtPaMR5aktS9i4slgPB8Mks1TtGTyqpFxGm7qz5N9C0llRJvbDP36Mx1S%2FraiYawEL&X-Amz-Signature=d92227ba771423f542aca9cfe8273745eab7db8b20e95a0d19c640616a17b020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

