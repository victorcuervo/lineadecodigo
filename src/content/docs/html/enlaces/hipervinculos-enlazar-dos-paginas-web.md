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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVN754AV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T180139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGcXUVaG%2BomQEIIlbbZt623AUX7oDS%2FFp0mAQQ48nQxTAiEAuiu0dON%2BUj%2BfjZQ2osULr8VWgERzLY63G%2Beyjj43z6YqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2BKtGb3W63pu%2FioaircA%2FZX8pKDlQhAFvxQxBX8QFukLqv4yXxhVMrVPP8e9QLHn1MYsR4ScnSIihRkrSJgoxHOCsVI7uQwB%2Bhl9Z4VGbVLfvb%2FCDpoBoHZZ1glMPkdbg3k9LCC%2FJKUCB12YqMDSMUTkLS2OgPo6O5ahY2h%2FcLM1tKjiHASNxyAN1FXSdyDZ7yB7PidkpgwsmEdv4SjdIEF9rQ14yQzvDnUOeIET%2BCCT0OX5ycpBA9mbYhEy%2F72NWdlyZiXYmZ21FSe1FHKt0eBp1kmu1O7bjBfEbDWAg3q6EBzqnx6KL%2BIQ%2FNmQh7d7L4vnLKFaM0ybso7hVhIIc511597cD4ee7rgXHfxKgdK80B9GU7CXJXcj9vS6ZlreTiX%2BTIdr4B5E3CrwUQJzClJZaXBwAZ3M5t%2BiC1ADhoT1bxiqRAweoEkqLsgf9R1RMIyx1nJIJz68tzuDV%2F2%2BznlXkCMUzi6aZUzoAyw%2F%2Fn%2BXEFfyXia4TXPCHRwXlvtLgVndl9fwQeqLHk53KOgt64VrewFxZM3eeqOcamUm8G%2B6k%2Bzkk%2F%2B8W2U8gM%2FH0%2FepoyctqNhdMRcBvaA12xqM%2BJ0OrantqDxbpErDJSOozsx%2FhymZddPrmi0j5KMWee7QqHhIQRQnUJ91NWGMM621skGOqUBAkyj1LGK0G7j0gy5iHu%2FECjFwKTxVaFRdtWU%2BMGRU8l49OhdV2BWy24LXl4%2BuVRv6Sqpgbn94jetRcioM9DHNtutVwZ16mjW7Cd1%2FW5t5zlF57o75GIqI0OkCyF4Y01XBaIySAgpdPWny9rf8oCWs1G0Ho7T4%2F4AS5U%2BvjZMF20qFL1%2FaflouWbmf2SJVrxvzXHQx%2FzcGtwf7Kgz%2FLVCEASjSeTV&X-Amz-Signature=88ea201a2ba8032a332f503adff22f5d1d823c4e737ff41953ededc09ab0c3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

