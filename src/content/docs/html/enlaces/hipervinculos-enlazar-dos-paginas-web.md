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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFA7GVOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T023227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZdejPji4Q2V%2FbKmWydlyVE5jODANVs1hduUTE0iuuAiEAhzJkKhqBG9g0MQFzUQIhTzqSdttoXMbltD9l3BWnjFcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPXpHbdV1j%2BSB5Nd2CrcA%2FnUbzaa8%2BRWCz%2F2qnhbZ4svbaHkJ2yr0074Nm4%2BtWcWASgfmOILVktGPYgCwVWwGGNGv%2FrMQldcnX7V3DEVTq6lTZj3KpmUX4Wivf4xgb%2FO%2BuYNfr7Mx0U3fN5kAQiAiB0f1bnFgQhOulV9ndIDON70Px%2FEKooDmm9td8aKLmhmQ7z5lC8AAjiFyxCVK8Hm0Y0J%2ByouiTE%2BvGNyttorGiAWiXClxf3Oim%2F%2BHzRH0U%2FURqR6R%2Fz4XK%2Bp4Eu1nBb16CvAxGdJmLD8FWaYFrsonFTobRdIXovOURW8m%2BTko335I%2B4r2WdAG4AnmEBpJJ7zJWT8RXrabnV0c%2FsaRDnrIe7vFWuwF9l84JRLKzmts5QcC4FiuAVR%2BVelySL9DbhwbgARLvw4q4z5bjOcO70ZuusNH7RldXe9%2BK1N24bdJgMOQfe9xJEsaY11oCTEvWJZfRpagHMzYPKyKhUax1amWdQ6OZDNatbuqsZcn4foDl45HIdNJJzjf1i8J%2BW2ACwGKlklrNBxrnRDndaSV929m53w9lL1qBW3UY6pyz8uqE94fjOg1VigWHGJ%2B40X0HRQQJTPY4dtFgng7XJf3%2F8Q79i2xTeHPWp6Te1bV9l4OkTq%2BJWofpaDN7mEUwHoMKKnzskGOqUBmZ6Yj1QXrTyB2CnawkYAcP2yEu%2F49PgzFUcq8JqaDC7lNvKUHMqXq8irm2Ld5Pt5pTyWz2zpk1cjBgRRzcCCmUqypDiN61WrUgoUivvKRpYn4xreu8VrhRWgkf89Z85Ft4xzCRwKHounmCGT6FMVNJsPnWSa09Ptq0n99XqD2qIxfmS01nr9IH1A7MGUXL9tFZqnTAWBRXJPMQNsVH72tUowwObw&X-Amz-Signature=dfaa249706b57209b60de7086c811a3d75a9804f56817dafd7480ffaacf9b00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

