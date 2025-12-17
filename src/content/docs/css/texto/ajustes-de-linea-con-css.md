---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMP7ITY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUJn%2Bbqct17yyWcJk2vWaFodY9BbfUG%2FHX%2FOJ%2BpGWayAiA3MkkSmKa0EF9tO0t1%2FfogTaoSTUgosbrrmJu5oaOdKir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMsGe7PNvKjE%2Bm7g78KtwDrwLuFV4PcExcWq9YaiAjUfVy81yO%2F29MDYSowjBA7E5jkuNL5xum1DmUY9dHq45PLvQWQy0HtRxkBtK2JKIxWhPlWsl8CzCuZxErm58Q90vO97%2FvRmio3h%2F9H6vGccgqNckKxIu%2Bg%2FriNkqJtd4sM37RWq6OnsAorrFyO1%2FwbTDZ9B5DIQWoLRPo4tzwx%2FKJlvPW%2Ffp7liiF59RKfw6ptJaQPFPqMgLUKU5R%2BFD7VmyvcNSIx7SuSEH0kqxsOmJQ9VoGNhqYjsVfIriNyrOwNQHJLg%2Bwir9BzkBADe94DxeEP%2FOKl1PrYZnyHz2H%2FdQpztddizF8CiA3BHS8W%2B0G%2FBr6GhQDXu6SUtpJgBIcusa9yYo%2Fu3qlCwDL5SA5yFTLM6JGNvFlsLn2YFNjhTT851VL7JBBpzzju0b3Rm40YgEpZ9FfBNR2e3%2FF6k2MZlXHwcsflYrSFEQvHna25po1UnY0t7rypTAvgzW07sCLubat56XSIaNk30xEQn2Wmyl48msWrk3es4VbSaQELv40w8%2F3F8tJEE9fLqZaUduDh6J4whOMAEMpOTTkZl6mKTcNn%2BvHxw0Z8zpMht2RHefiCm7i35166kUw%2BiSEwx5JtL7SsM07HK0Md9v%2B7TMwwLKIygY6pgHWV3fvWdnWpcJENNjB9CrsSyBsWzJNSvM714llRzgIPJy2NbE6ko9GX90DOSq%2Br7pog8wZHrOcf6i6Q%2F%2FUH8DZD9PkKxZZ5wsjLbY3jtc2UJIVJplAVe6OU%2FS67zWluNRBr7MVPuG43waKmT2yqbLqDAMjfbVwnVH32iWVPqJELcU0p3MZOMI3rWLYJOFS%2BeyLVhq9M4LL95ykbHXNtquUVYZblmcZ&X-Amz-Signature=3a4c0fffbd6543984fb9bdf6e47220726c99e45a4d11b35314c0bee4aa909623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMP7ITY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUJn%2Bbqct17yyWcJk2vWaFodY9BbfUG%2FHX%2FOJ%2BpGWayAiA3MkkSmKa0EF9tO0t1%2FfogTaoSTUgosbrrmJu5oaOdKir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMsGe7PNvKjE%2Bm7g78KtwDrwLuFV4PcExcWq9YaiAjUfVy81yO%2F29MDYSowjBA7E5jkuNL5xum1DmUY9dHq45PLvQWQy0HtRxkBtK2JKIxWhPlWsl8CzCuZxErm58Q90vO97%2FvRmio3h%2F9H6vGccgqNckKxIu%2Bg%2FriNkqJtd4sM37RWq6OnsAorrFyO1%2FwbTDZ9B5DIQWoLRPo4tzwx%2FKJlvPW%2Ffp7liiF59RKfw6ptJaQPFPqMgLUKU5R%2BFD7VmyvcNSIx7SuSEH0kqxsOmJQ9VoGNhqYjsVfIriNyrOwNQHJLg%2Bwir9BzkBADe94DxeEP%2FOKl1PrYZnyHz2H%2FdQpztddizF8CiA3BHS8W%2B0G%2FBr6GhQDXu6SUtpJgBIcusa9yYo%2Fu3qlCwDL5SA5yFTLM6JGNvFlsLn2YFNjhTT851VL7JBBpzzju0b3Rm40YgEpZ9FfBNR2e3%2FF6k2MZlXHwcsflYrSFEQvHna25po1UnY0t7rypTAvgzW07sCLubat56XSIaNk30xEQn2Wmyl48msWrk3es4VbSaQELv40w8%2F3F8tJEE9fLqZaUduDh6J4whOMAEMpOTTkZl6mKTcNn%2BvHxw0Z8zpMht2RHefiCm7i35166kUw%2BiSEwx5JtL7SsM07HK0Md9v%2B7TMwwLKIygY6pgHWV3fvWdnWpcJENNjB9CrsSyBsWzJNSvM714llRzgIPJy2NbE6ko9GX90DOSq%2Br7pog8wZHrOcf6i6Q%2F%2FUH8DZD9PkKxZZ5wsjLbY3jtc2UJIVJplAVe6OU%2FS67zWluNRBr7MVPuG43waKmT2yqbLqDAMjfbVwnVH32iWVPqJELcU0p3MZOMI3rWLYJOFS%2BeyLVhq9M4LL95ykbHXNtquUVYZblmcZ&X-Amz-Signature=0e7a5bd806723a939601051a8deac00bb3cbc2f5f33948e74bf446c04f45d5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

