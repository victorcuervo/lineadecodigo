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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IQN7DL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB36GwiCYNV3lvinOGoPINTX6FF9iLPele8Qn0DHTq0xAiAckhgzU7O213wOatfCIIH7ZYtsSq1Yj0T5DHug2TaRdSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM3DG4Zk8a3%2FJwm8UwKtwDMEfPG532jSb4jRu9tG9RVOtKerITRVFIh82if2oMpMXqhlScyVTudbYrLjOguc3yd6EZbFfJVsRWeRMcPULLYoiLjG33oI87qONV7LLjzepI3Df7b6kqGmhlroy%2BiyCRVa2ENAKRIrD%2B%2FZN8eYS%2Bbc%2FsLoCuIbkqurkI%2Bz4EY2K%2BjE8Zf9D3HtX3WyF6NT2pzyoEZihex%2BG1%2BmYC09g8ZhUdNal7050zj85M5fZ5r%2Bs3FJoifUE85vagIF3r2ccRpHSx3DX7DQaopVfhEJMkNSPQwE6o6TJL9efUb%2BFZ170fGe9kZ0YIOb2oAA0TfbmJPagg0LxrGZ7mddCQbLR1uBDLt3y%2BUIDEaVn0FANpPt6oZM%2BD2hOKBXMZggIWXOKt98p2Kor206dzESjO4wlA1J3PVQJO8xGmkKYYbW5O0QrtE7jjKxqrfkqS80no1zl5cWmxs88NWurRefs7NxEiJ5KoQp18CFpS0d0bAc%2F3qCfMn5NlQ0QGgiGQdL8SbjnFUavOZ3ppyjDE7mTTjJJH7ho1F5ICsdx%2Ft24xAWyuzJJk9JeSz6AVoKx626hLzVnIJYEpltNJxb96578eKKYFD4WDc%2Bd%2BaO8RB%2B%2FYC6sMXm5Q%2BksuL6FWi0nfx8Uw4LKIygY6pgHTiKUoqW4ytvN%2BNTgPkGw2iyc02TC%2B%2BIT%2FEAqtIQYR89IvM6RPAzohFVTty%2BssOlsi7W9jZabNyoCLOetQVAyfvtMtddQfLLKN%2BBDOQKgGGy%2B3nbpBkKq9LtkS6s5MzV1gdA0roh%2FdH6hKjvl6y5IonyINVFmcyNIeglOdrEVROrzTgTivVhlaM0jXNxqI552VKqDZUz0XPR5X8slIOyU4PggbIDF1&X-Amz-Signature=a938014ea1d88cf134d89fead31e07ac1e5a6ea87bade5377648f6932a8ef919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667IQN7DL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB36GwiCYNV3lvinOGoPINTX6FF9iLPele8Qn0DHTq0xAiAckhgzU7O213wOatfCIIH7ZYtsSq1Yj0T5DHug2TaRdSr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM3DG4Zk8a3%2FJwm8UwKtwDMEfPG532jSb4jRu9tG9RVOtKerITRVFIh82if2oMpMXqhlScyVTudbYrLjOguc3yd6EZbFfJVsRWeRMcPULLYoiLjG33oI87qONV7LLjzepI3Df7b6kqGmhlroy%2BiyCRVa2ENAKRIrD%2B%2FZN8eYS%2Bbc%2FsLoCuIbkqurkI%2Bz4EY2K%2BjE8Zf9D3HtX3WyF6NT2pzyoEZihex%2BG1%2BmYC09g8ZhUdNal7050zj85M5fZ5r%2Bs3FJoifUE85vagIF3r2ccRpHSx3DX7DQaopVfhEJMkNSPQwE6o6TJL9efUb%2BFZ170fGe9kZ0YIOb2oAA0TfbmJPagg0LxrGZ7mddCQbLR1uBDLt3y%2BUIDEaVn0FANpPt6oZM%2BD2hOKBXMZggIWXOKt98p2Kor206dzESjO4wlA1J3PVQJO8xGmkKYYbW5O0QrtE7jjKxqrfkqS80no1zl5cWmxs88NWurRefs7NxEiJ5KoQp18CFpS0d0bAc%2F3qCfMn5NlQ0QGgiGQdL8SbjnFUavOZ3ppyjDE7mTTjJJH7ho1F5ICsdx%2Ft24xAWyuzJJk9JeSz6AVoKx626hLzVnIJYEpltNJxb96578eKKYFD4WDc%2Bd%2BaO8RB%2B%2FYC6sMXm5Q%2BksuL6FWi0nfx8Uw4LKIygY6pgHTiKUoqW4ytvN%2BNTgPkGw2iyc02TC%2B%2BIT%2FEAqtIQYR89IvM6RPAzohFVTty%2BssOlsi7W9jZabNyoCLOetQVAyfvtMtddQfLLKN%2BBDOQKgGGy%2B3nbpBkKq9LtkS6s5MzV1gdA0roh%2FdH6hKjvl6y5IonyINVFmcyNIeglOdrEVROrzTgTivVhlaM0jXNxqI552VKqDZUz0XPR5X8slIOyU4PggbIDF1&X-Amz-Signature=9bf49d3cb6cfbc2880e921d5589c219274a5566a634a1aee0d05d0e6cb4d8830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

