---
title: "Checkbox deshabilitados con Bootstrap"
description: "Descubre cómo implementar checkbox deshabilitados con Bootstrap y mejora la funcionalidad de tus formularios de manera efectiva y elegante. ¡Entra y aprende más!"
date: 2015-11-03
updatedDate: 2026-02-02
tags: ["checkbox","label","disabled","input"]
slug: bootstrap/formularios/checkbox-deshabilitados-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 653e4cd1-4351-471d-bcd4-8cb5cc1c4124
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/formularios/checkbox-deshabilitado.html
---

Cuando estamos creando un formulario e insertamos un checkbox podemos deshabilitar su uso incluyendo el atributo `disabled` dentro del elemento [`input`](https://www.w3api.com/HTML/input/). Este atributo consigue que no podamos marcar el checkbox.


Si bien los checkbox deshabilitados con [Bootstrap](http://www.manualweb.net/bootstrap/) nos dan la posibilidad de ampliar la funcionalidad de estos y conseguir que esté deshabilitado tanto el checkbox como el texto que lo acompaña.


## Checkbox deshabilitado en HTML


Lo primero será partir de nuestro checkbox deshabilitado en [HTML](https://www.manualweb.net/html/):


```html
<label>
  <input disabled="disabled" type="checkbox" value=""></input>
  Opción deshabilitada
</label>
```


## Adaptar el checkbox para Bootstrap


Ahora lo convertimos en un checkbox adaptado para [Bootstrap](http://www.manualweb.net/bootstrap/). Para ello lo recubrimos de una capa que incluya la clase `checkbox`:


```html
<div class="checkbox">
  <label>
    <input disabled="disabled" type="checkbox" value=""></input>
    Opción deshabilitada
  </label>
</div>
```


## Aplicar la clase disabled


Y lo siguiente será añadirle la clase `disabled` dentro de la misma clase dónde teníamos la clase `checkbox`. De esta forma habremos conseguido tener checkbox deshabilitados con [Bootstrap](http://www.manualweb.net/bootstrap/):


```html
<div class="checkbox disabled">
  <label>
    <input disabled="disabled" type="checkbox" value=""></input>
    Opción deshabilitada
  </label>
</div>
```

