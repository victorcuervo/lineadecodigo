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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVJNGRE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN61hlNwqE07RU4%2FI0zygU04un%2BvOnVE4P4GPtsw5FNwIgHtvE6BkU%2FG%2FFSlBdzUq26PwjNMy360BmrxZrKFe2buYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDh1LCU3NIe1ofvwLCrcA8aJzIa%2BjLCRpR%2FCerJ5qxR8zaqGWZ02VJnC4nNa45befDK0nyFiEXfZZ4rEQXbkyAYajWdAXIlfQvSmm2xjN3IG5G3lF7bapxPCNpne%2F3oGlrUjBkKq1BqSzSFOAHP6LV9uUku768VMoAr3vTLmRnFBgfVfJRAMOZ9D%2FhAJJd15koJSE9e9BbEsaCDAOgFWL%2BcJL3U38QNqKlbrv%2FVIsm%2BxREh1lvzd5D6QcNRPM%2Fe1dtPcHjZrE1ImFQoD7oR%2FXhMO7JoaLSVW2tiTsW%2Fa3papP2v9ymPBigXfS6%2Ff26%2FXtMHWVTki%2BtKVD9k64Leu0lLA6kywvQ0YjjSOjwTqL7kYvBrs6NdkG06Ng43UQ3KWvXkki%2Bs97Ui%2BaPyCejXw2ADDww5cIfG0JWD7C1C6%2BpHS%2FKhb1LOCAoBalNYiFl6l1TJi2h9ZwdLySyjPkULnfrPhKSl%2BHd1iCFLYKzzF2Rc%2B%2BINsRvnAadfIKB5sFnD4P%2BgHEfMq%2FJYYtPqz9A683woDGe1q%2BWHBbzFZuB6a2dylPEHFXEZouBH6gSXLNS08EEteYdGJDAKpNupYc857n5iD69iAztS9akoeu0kHTZosyvPzd4CdRYHZbnjpwjwu5ZZYVWQGSEibwcr0MN%2BOisoGOqUBY7evzBOTOvdWs2f3uMziv8meNvkj4ZamEPhjsjlL9vev2vwRVoGwy9MR%2F31JxjSfpdhFhvhKPoNNKF4XwqyeWjgqFXE899FCGizU8HSZnutSTONfIFTFGiT3iIMWUxjMPntvxQRu5%2FHqQ1%2Bi6872ldbg3LeOASlLJp1AxbtZNLdloF37nq4bPTGevY0yfr%2FoAvuT2AmD7JVihCIBWdq1FvFcDr%2B%2B&X-Amz-Signature=14d844f07c806844da484c8f7aab0047915ba94dd78ac569e206de0367d5e710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OVJNGRE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T110130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDN61hlNwqE07RU4%2FI0zygU04un%2BvOnVE4P4GPtsw5FNwIgHtvE6BkU%2FG%2FFSlBdzUq26PwjNMy360BmrxZrKFe2buYq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDh1LCU3NIe1ofvwLCrcA8aJzIa%2BjLCRpR%2FCerJ5qxR8zaqGWZ02VJnC4nNa45befDK0nyFiEXfZZ4rEQXbkyAYajWdAXIlfQvSmm2xjN3IG5G3lF7bapxPCNpne%2F3oGlrUjBkKq1BqSzSFOAHP6LV9uUku768VMoAr3vTLmRnFBgfVfJRAMOZ9D%2FhAJJd15koJSE9e9BbEsaCDAOgFWL%2BcJL3U38QNqKlbrv%2FVIsm%2BxREh1lvzd5D6QcNRPM%2Fe1dtPcHjZrE1ImFQoD7oR%2FXhMO7JoaLSVW2tiTsW%2Fa3papP2v9ymPBigXfS6%2Ff26%2FXtMHWVTki%2BtKVD9k64Leu0lLA6kywvQ0YjjSOjwTqL7kYvBrs6NdkG06Ng43UQ3KWvXkki%2Bs97Ui%2BaPyCejXw2ADDww5cIfG0JWD7C1C6%2BpHS%2FKhb1LOCAoBalNYiFl6l1TJi2h9ZwdLySyjPkULnfrPhKSl%2BHd1iCFLYKzzF2Rc%2B%2BINsRvnAadfIKB5sFnD4P%2BgHEfMq%2FJYYtPqz9A683woDGe1q%2BWHBbzFZuB6a2dylPEHFXEZouBH6gSXLNS08EEteYdGJDAKpNupYc857n5iD69iAztS9akoeu0kHTZosyvPzd4CdRYHZbnjpwjwu5ZZYVWQGSEibwcr0MN%2BOisoGOqUBY7evzBOTOvdWs2f3uMziv8meNvkj4ZamEPhjsjlL9vev2vwRVoGwy9MR%2F31JxjSfpdhFhvhKPoNNKF4XwqyeWjgqFXE899FCGizU8HSZnutSTONfIFTFGiT3iIMWUxjMPntvxQRu5%2FHqQ1%2Bi6872ldbg3LeOASlLJp1AxbtZNLdloF37nq4bPTGevY0yfr%2FoAvuT2AmD7JVihCIBWdq1FvFcDr%2B%2B&X-Amz-Signature=4460137290e79bd2a1b190df49d70970b9915b529bc3a119c4bb8e5354c4f140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

