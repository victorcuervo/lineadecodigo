---
title: "Modificar el contenido de una capa con Prototype"
description: "Se explica cómo modificar el contenido de una capa utilizando Prototype y JavaScript mediante una función simple."
date: 2007-02-25
updatedDate: 2026-01-07
tags: ["form","input","innerhtml","id"]
slug: prototype/capas/modificar-el-contenido-de-una-capa-con-prototype
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81cf-8e5e-d6dbaec6effe
download: https://github.com/victorcuervo/lineadecodigo_prototype/blob/master/capas/obtener-el-contenido-de-una-capa.html
---

En los últimos años de la web estamos tendiendo a interfaces de usuario con muchísima funcionalidad y mayor dinamismo. En todo este flujo de información, los elementos se van modificando y actualizando. Normalmente en forma asíncrona.


Es por ello que es bueno que sepamos como podemos hacer esto vía código y utilizando el framework [Prototype](http://lineadecodigo.com/categoria/prototype/). [Prototype](http://lineadecodigo.com/categoria/prototype/) nos ayudará mediante sus funciones a llevar a cabo nuestro cometido.


Lo primero que tenemos que saber es como acceder a una capa (asumimos que ya existe la capa). Para ello utilizaremos la función $() pasándole el id de la capa como parámetro.


```javascript
$("idcapa");
```


Como queremos reaprovechar el código vamos a crear una función [JavaScript](https://www.manualweb.net/javascript/) que reciba el texto a poner en la capa y actualice el contenido de la misma. El contenido de una capa se puede modificar mediante el atributo .innerHTML. De esta forma nos quedaría la siguiente función:


```html
<script type="text/javascript">
  function modificarCapa(texto){
    $('micapa').innerHTML=texto;
  }
</script>
```


Ahora solo nos quedará utilizar esta función desde alguna parte de la página. En nuestro caso hemos utilizado unos simples botones. Los cuales, mediante el evento onClick lanzarán dicho método:


```html
<form action="#">
  <input type="button" value="Texto Uno" />
  <input type="button" value="Texto Dos" />
  <input type="button" value="Texto Tres" />
  <input type="button" value="Texto Cuatro" />
</form>
```


Todo muy sencillo. Y recordar el instanciar el framework [Prototype](http://lineadecodigo.com/categoria/prototype/) al principio:


```html
<script
  type="text/JavaScript"
  src="http://lineadecodigo.com/wp-content/uploads/2007/02/prototype.js"
></script>
```

