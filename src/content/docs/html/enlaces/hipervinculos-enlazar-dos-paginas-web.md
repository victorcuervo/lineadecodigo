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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBPLO7TV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwB7NnwkSaD5LCm5o1JR1UgnOjE7CvmMiMRasIQsU69AIhAIRYYsKtKfyFeLincC2Dwy3O6v%2B1tL3U4IHGUCzRwxAaKv8DCGkQABoMNjM3NDIzMTgzODA1IgymRzgetlijSLWZuN8q3AOQ%2BNl6H1%2Bw6Mx38%2BW3lOO5pLhVxQBlj3KQQpOuDD18tOzcSCqVLakYqqcKupKKqFlWstDvBI52CN8j9xa334OpJPDQmCHc2DuUR0rCdA%2FgrFp3Yrb4uYoTF617wpVFGyS2esyBwNoViNnN%2F4AS1bOYaXvaV%2F1hM44Lx8hddV09Gpzab%2FdZo6iTiSBoltbkdd5QJFVxB%2Bqw9%2B1g85biNKg%2FRw8VYlA3qxvAsQ6f00YGx5HlXCXZXtzg%2FI78aIdSalTa%2Fdtt66GC8dXaLKYfqJfocuDxkQdcXr0%2BEiQpkfJbwEiDWHoVqeyZYdUWn4D6bj5%2FIXggwkN1ScHtl2FL19O2mRS9MwJJRLQ1nnJnQAOz0RpN02S0aro3r2dhy6gWF5FvzBih140DDGTHmr%2FATTmuiOiTxFOj6NZoVHIYNgf%2F6iS%2Br0on4wtJGSQT7fijngeoVggeirSAPfaiRZv9ba7VVcHZNVewErMsTlSDpH5geaVeE21ZjCgr6h5fNMMSiuX72D%2FfeE55Soj%2Fc4IayZCrHEtyxi2gmIU0dJXFS0WJuFeMN5Eagq4jqyyemXihzU48HB6tmxBLdrwvwG7DISwoFgfle3PDSqgjc5Gm%2Bwvzgr%2BaTDEuzbAp%2FeaCFDCp6M3JBjqkATh1cuseiFueNZjOIkbEOg7da2YfBJEn1ofHGM3O60xE5%2Fx7IrAaLVyq5MQ15Ri9%2BkEtYW6Bne73vg2SyZSG3wBRXJNyLN0e2WtPyRXyUrjvrwMJdc26l4l%2BrEnvzjWQZqPY6TU6RR3vMeo0UdrmkyBldtEAovdfKas5rqb5bwEpvDZ05cLREs7DLz9fg%2BX61FqjyWbGjE4KCoDPZpkL9HXE6X0e&X-Amz-Signature=58e45fd9c0fa4a72e17345ed4af0d0f7d4fea1bc40ff7f8204817f21bd6a8944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

