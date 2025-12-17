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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIHGS3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGscmXxGSa2zrCLkxfkVD7w21bbsCbAZiQUeAqUslvgAAiEAnBQyJBEao3VYmSQ7I13PuxxrrFNOPEglgdZnIxtaTh0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDFao3C4fJ2IaA%2BGSSrcA9ezTMiGSrSDF%2B6x7JtwaFyoH1b2e1F508qDhyjqDFbOIjfP47KTainYDP%2BUjKiAbAYhUWa8A6X0NP2Bp8Qo9sdFXH5cAKhKV27XUzSq88x27f4zFV2YR6%2BcWQEc7rBLGlooQ%2FIXPYgzDqGsd8aSLEbdHlXb8MRcV08Z7iEd9sqzMUmwaNHSDv4QGE4pH5PK32xRXpyDdKuFfqhtxeixF85kCP3L9d3SeCVq%2BC11P9wm1MJfC60es0%2BzdnwmaPGJTZp8qheeuMkdtGm9pmQiw2itR0gjtlGgKR%2FUhu5CjIVFGwXxpuctKgnnsn8%2BxU6niFKnpR9f3tpgvvTVRq4TKqR9lzBC1Hu5HoMT%2BbXAzNbGtja8vDS21zMCEa%2FKxSKGMHqdboAWjl7Txwj0iK2QLYgR%2B0krkMxrVP1YYcCAHzKNHNJKjMD06fdD66FNyhYNAIztb236wTZqXtavVTDvEXzXvWSIM1hBOgaPqlB4Jh6kDOAc4tU5sSbmSkN4olJsus%2F%2FUcg2WO2p4ny7XGfAAYaAo5daYolheNTX5U4syy5Lge7Q1DUTphpoPXoS6Czw7kcp9MOF%2FUPCKl%2BllRAGsEqWcks5VlmXNGKQpVAmkUhkpK20wmlUT3040JQjMOzOiMoGOqUBFIZaVbLlcEumbmkLbVX8CVwZ6mA2w%2BR6w8Noq3hSoR8gUgCJ3Wa6BXiMVh8QmebS3i1nNgYl5Yejw1ntnp5iBi8s%2B%2BucfRvklvh0AaBuDY3bmjCyZKBIgr21Uwle6XmbEi4EArCL%2FELbGCjHoRhcJ1XFi87HbZWh%2F3JObU97V7RhZrxw5dhfPlERG9Te8iY5oqdOlzPzFI%2FLKqF1oRrjxy7kUApw&X-Amz-Signature=1f204b58678592e3256ff8f058e57edacb59442ca18df95841bbb12b2e7e1ad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHIHGS3O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGscmXxGSa2zrCLkxfkVD7w21bbsCbAZiQUeAqUslvgAAiEAnBQyJBEao3VYmSQ7I13PuxxrrFNOPEglgdZnIxtaTh0q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDDFao3C4fJ2IaA%2BGSSrcA9ezTMiGSrSDF%2B6x7JtwaFyoH1b2e1F508qDhyjqDFbOIjfP47KTainYDP%2BUjKiAbAYhUWa8A6X0NP2Bp8Qo9sdFXH5cAKhKV27XUzSq88x27f4zFV2YR6%2BcWQEc7rBLGlooQ%2FIXPYgzDqGsd8aSLEbdHlXb8MRcV08Z7iEd9sqzMUmwaNHSDv4QGE4pH5PK32xRXpyDdKuFfqhtxeixF85kCP3L9d3SeCVq%2BC11P9wm1MJfC60es0%2BzdnwmaPGJTZp8qheeuMkdtGm9pmQiw2itR0gjtlGgKR%2FUhu5CjIVFGwXxpuctKgnnsn8%2BxU6niFKnpR9f3tpgvvTVRq4TKqR9lzBC1Hu5HoMT%2BbXAzNbGtja8vDS21zMCEa%2FKxSKGMHqdboAWjl7Txwj0iK2QLYgR%2B0krkMxrVP1YYcCAHzKNHNJKjMD06fdD66FNyhYNAIztb236wTZqXtavVTDvEXzXvWSIM1hBOgaPqlB4Jh6kDOAc4tU5sSbmSkN4olJsus%2F%2FUcg2WO2p4ny7XGfAAYaAo5daYolheNTX5U4syy5Lge7Q1DUTphpoPXoS6Czw7kcp9MOF%2FUPCKl%2BllRAGsEqWcks5VlmXNGKQpVAmkUhkpK20wmlUT3040JQjMOzOiMoGOqUBFIZaVbLlcEumbmkLbVX8CVwZ6mA2w%2BR6w8Noq3hSoR8gUgCJ3Wa6BXiMVh8QmebS3i1nNgYl5Yejw1ntnp5iBi8s%2B%2BucfRvklvh0AaBuDY3bmjCyZKBIgr21Uwle6XmbEi4EArCL%2FELbGCjHoRhcJ1XFi87HbZWh%2F3JObU97V7RhZrxw5dhfPlERG9Te8iY5oqdOlzPzFI%2FLKqF1oRrjxy7kUApw&X-Amz-Signature=d36e3f3dbcdea2e3f5a93cb24216cfae2a9ffafbbd8a976c608690d89480d714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

