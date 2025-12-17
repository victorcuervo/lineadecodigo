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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWKJVSI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVrlHiaOlSksjbgRYJNhJ2LoFlThfWhUn40dFffgON5AiEAl0oyf2v1%2BZNN%2FC3YeQMN9pCFvwBx0i7v6gntNwIGA%2BMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJFBua%2BkGHrhrpdm4yrcAw38Eyqr8eIoNs0SCem4YnrZirvK1kfg%2FHLMCIByGL%2BrHDGg5rynDLqRuxOi3forC8BKIzykox6l5bNsdIpt5BI8RAjRnQ0zkHJx4XyDjUh1APeLs1ACbYD2Z0MOuLxr%2BPYRpdtxzVMbSoK3JcSYbr8fWudRGY9NSbakq8gk0keZMeY3atpjsopK%2BjHol0giQVmO%2FIlMiuyBO8Fg0KQ%2FDycsrGz83bLFMuZxXUwL%2Fj%2BFW7wuXcrhlIbL5%2FRd%2FEUeoor4b55twvRP1MJhoklE98Vrl7m8N7g3oD79j7ZYFVUI3tTkkOEvVN7rCDBCS4k5bEx5ZoAXxeznCjwAB4nBEcoUqr3J9srjYG43QSJ9TPEo5tVohASUgjTG72cwn%2BAVdlFA64YRxCn7gtM0z3f4QaGvOzd8tLKrkKq6o6bFSVSxMcIIyN%2BtUEOYb%2Fl07OdBAhvxjDoi31m3vexlXlwb%2BggdwPibUyUGEaQD45AJ6aa7saOiFMgymX1U0QTiCAvcmPYlD4FYoeBZJV43G6DPCBdyFH6AObLyLuUnbwJ71mlYVhWqVAKg636hUluI592XJ2TkG30ewQMHgaeGKxq%2FGwOwcmOUzwTY3Nvi80o0UTNaVFjlDAose7MBmA0VMI3piMoGOqUBGSpLbX%2B8FAvpEdQ5BzOkdyGQK8jiTYlr1BmdRDF0BuPFrEh5TjoYiVz%2FPn%2FryvZhKGFO%2Ft7yRkYsClPjjoVmRfzhcEyklrLbOjxksYPePWEpkbHWLG6WtBay3r5FIlP6aSRv8B0KB3dd97Jmgv%2FGWrpkiN5v9PuYi5TS1jxAT4lJEnsC2TOpZlpMUNM%2FZq2g9H0Et7jEA4%2FrODyD0nEwjRRzNGkl&X-Amz-Signature=ca82c94557ec93dc3bc875fb7bba76ef10da2aba88656e82901d7a507839536b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BWKJVSI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVrlHiaOlSksjbgRYJNhJ2LoFlThfWhUn40dFffgON5AiEAl0oyf2v1%2BZNN%2FC3YeQMN9pCFvwBx0i7v6gntNwIGA%2BMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJFBua%2BkGHrhrpdm4yrcAw38Eyqr8eIoNs0SCem4YnrZirvK1kfg%2FHLMCIByGL%2BrHDGg5rynDLqRuxOi3forC8BKIzykox6l5bNsdIpt5BI8RAjRnQ0zkHJx4XyDjUh1APeLs1ACbYD2Z0MOuLxr%2BPYRpdtxzVMbSoK3JcSYbr8fWudRGY9NSbakq8gk0keZMeY3atpjsopK%2BjHol0giQVmO%2FIlMiuyBO8Fg0KQ%2FDycsrGz83bLFMuZxXUwL%2Fj%2BFW7wuXcrhlIbL5%2FRd%2FEUeoor4b55twvRP1MJhoklE98Vrl7m8N7g3oD79j7ZYFVUI3tTkkOEvVN7rCDBCS4k5bEx5ZoAXxeznCjwAB4nBEcoUqr3J9srjYG43QSJ9TPEo5tVohASUgjTG72cwn%2BAVdlFA64YRxCn7gtM0z3f4QaGvOzd8tLKrkKq6o6bFSVSxMcIIyN%2BtUEOYb%2Fl07OdBAhvxjDoi31m3vexlXlwb%2BggdwPibUyUGEaQD45AJ6aa7saOiFMgymX1U0QTiCAvcmPYlD4FYoeBZJV43G6DPCBdyFH6AObLyLuUnbwJ71mlYVhWqVAKg636hUluI592XJ2TkG30ewQMHgaeGKxq%2FGwOwcmOUzwTY3Nvi80o0UTNaVFjlDAose7MBmA0VMI3piMoGOqUBGSpLbX%2B8FAvpEdQ5BzOkdyGQK8jiTYlr1BmdRDF0BuPFrEh5TjoYiVz%2FPn%2FryvZhKGFO%2Ft7yRkYsClPjjoVmRfzhcEyklrLbOjxksYPePWEpkbHWLG6WtBay3r5FIlP6aSRv8B0KB3dd97Jmgv%2FGWrpkiN5v9PuYi5TS1jxAT4lJEnsC2TOpZlpMUNM%2FZq2g9H0Et7jEA4%2FrODyD0nEwjRRzNGkl&X-Amz-Signature=9dca748d6c50a2c9cbbd492d981074be8d94d34fcbd1770a698e571e05d963b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

