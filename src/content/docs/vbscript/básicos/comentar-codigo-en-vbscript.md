---
title: "Comentar código en VBScript"
description: "En VBScript, puedes comentar usando REM o una apostrofe para mejorar la legibilidad del código."
date: 2010-05-29
updatedDate: 2026-01-08
tags: ["comentario","rem","script"]
slug: vbscript/basicos/comentar-codigo-en-vbscript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_vbscript/blob/master/basicos/comentarios-vbscript.html
topic: vbscript

---

Si estás programando en VBScript y quieres comentar tus programas (una práctica muy recomendable). Tienes dos formas de hacerlo. La primera es anteponiendo la palabra REM. Forma de hacerlo que se viene utilizando desde los lenguajes Basic más antiguos. La segunda es anteponiendo una apostrofe. Esta es la opción más cómoda y extendida.


```visual basic
REM Comentario
' Comentario
```


Un programa general con comentarios quedaría de la siguiente forma:


```html
<script type="text/vbscript">
  ' Mi primer comentario
  ' Y mi primer programa en VBScript

  document.write("Ejemplo que enseña a poner comentarios en VBScript")

  REM También podría haber sido con la palabra rem
</script>
```

