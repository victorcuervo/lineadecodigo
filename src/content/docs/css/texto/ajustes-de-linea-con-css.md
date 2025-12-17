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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ2OPJFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0C%2FH%2BmeDig%2FlUu9dVuaJu5x%2F635pAgsbozu8MJkPHnAiEApSqp60yx8DYJyh0iJzltqm5nPTHUU2jO3nXR96qiduQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMZI%2FTx0c3KWfGjVTSrcA%2FJ5QDjg6yUNTS%2FJfhR1y04ed8zf32mGAk%2BTU43oI5gZBKpVdnB9%2BQvJXrIO9RvXNhWp7bRwnyw3WGdw2OTFLwrWbbGwKIRIVAgg%2FkGtC3CNNN1O5V4kqUwWF4t%2BGEFJju1yX0lgpnJ8wmN%2FjcwaINE5Wi9FD3%2F4TE9ndAaSJlkHkRn3psVCHSFI7AeKEdOUiowWn1wD2oE2ttrwwOVxw02R7B7gx1YwsL64fZInRoRi21baC6QKnhJ87R9C5E7TIQv%2FDUaE%2FBIQFZAHHeH6Y35ZRayCbNVAYuB3cTu3fYPkIN3XCWgcw2S9k8sRpquLtFqW1jxog68oogN8bMYejl7aH9IPbj02mZaJj8nfc0M%2Fi63hsM0EnB8g1iUXRzgjLVdZ9BXXOmjOcdMDBZTTkS7FPq40d8EZwYQ3G12NTTwjXdPoYqcUm%2BhLRbgPj5YzEAfC%2BHTT1JI96S16xpwszfMxpk%2B%2BAGOL8Wl81Nt%2F8JBDuuT7%2FZUfMEfWcy4bs6F7flDixnEclU2qP7K%2FaBY8RJtV4F4Bd19M64x1STIj1yoycV4FJ8Ey1U301oZ6J%2FYxCxJnb9%2FDsDViWXR013jiEO%2B7%2B7zwwoFnzl7RP1imGe%2B%2BTPkPhjSrRnMIgAu%2BMNKCicoGOqUBNzxgM5GyyRzxh4VRSBlj0eq0Dz%2BHeHdRbrSqfKmLxPBAXQ4WjcI%2B%2FzQZ7ASCvuzkKkcZwwMoxXiA0gQZ0ZQfxhkqvyiTvWl8Owd%2BSGvvxx9HI5y2%2FboIjjuovoJ3SLVpm%2Fzjg0tMGFKWAtsTkdardBTgsvI5c1NeZa%2BxZco3K%2BfokEZuYN9j1zTdfd5nvXgjRozfOH6PttSAtrRwIhxnI98iaJ3L&X-Amz-Signature=e3ec400d65467ef1e393931621a0247c9c8c41985ad2046a12b7eb695b3d3051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ2OPJFU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE0C%2FH%2BmeDig%2FlUu9dVuaJu5x%2F635pAgsbozu8MJkPHnAiEApSqp60yx8DYJyh0iJzltqm5nPTHUU2jO3nXR96qiduQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMZI%2FTx0c3KWfGjVTSrcA%2FJ5QDjg6yUNTS%2FJfhR1y04ed8zf32mGAk%2BTU43oI5gZBKpVdnB9%2BQvJXrIO9RvXNhWp7bRwnyw3WGdw2OTFLwrWbbGwKIRIVAgg%2FkGtC3CNNN1O5V4kqUwWF4t%2BGEFJju1yX0lgpnJ8wmN%2FjcwaINE5Wi9FD3%2F4TE9ndAaSJlkHkRn3psVCHSFI7AeKEdOUiowWn1wD2oE2ttrwwOVxw02R7B7gx1YwsL64fZInRoRi21baC6QKnhJ87R9C5E7TIQv%2FDUaE%2FBIQFZAHHeH6Y35ZRayCbNVAYuB3cTu3fYPkIN3XCWgcw2S9k8sRpquLtFqW1jxog68oogN8bMYejl7aH9IPbj02mZaJj8nfc0M%2Fi63hsM0EnB8g1iUXRzgjLVdZ9BXXOmjOcdMDBZTTkS7FPq40d8EZwYQ3G12NTTwjXdPoYqcUm%2BhLRbgPj5YzEAfC%2BHTT1JI96S16xpwszfMxpk%2B%2BAGOL8Wl81Nt%2F8JBDuuT7%2FZUfMEfWcy4bs6F7flDixnEclU2qP7K%2FaBY8RJtV4F4Bd19M64x1STIj1yoycV4FJ8Ey1U301oZ6J%2FYxCxJnb9%2FDsDViWXR013jiEO%2B7%2B7zwwoFnzl7RP1imGe%2B%2BTPkPhjSrRnMIgAu%2BMNKCicoGOqUBNzxgM5GyyRzxh4VRSBlj0eq0Dz%2BHeHdRbrSqfKmLxPBAXQ4WjcI%2B%2FzQZ7ASCvuzkKkcZwwMoxXiA0gQZ0ZQfxhkqvyiTvWl8Owd%2BSGvvxx9HI5y2%2FboIjjuovoJ3SLVpm%2Fzjg0tMGFKWAtsTkdardBTgsvI5c1NeZa%2BxZco3K%2BfokEZuYN9j1zTdfd5nvXgjRozfOH6PttSAtrRwIhxnI98iaJ3L&X-Amz-Signature=e862c6ee91e708889000a8266bcdd3ae344885e5186424db6de1543c25be20b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

