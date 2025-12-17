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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7DYNSS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFtaFyGTYGX9oAX6pqe9CBCtskUeG7%2Fc6SBKiNqetbcwIgIJIOkHJbI7ji9lHJf%2BV9jAZepTdIl0eUYLGG0sUTeGQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLoarD3JpfzJhKHhfyrcA%2B7vxRYyGRAKiRFY2aVksYDv0fd1rp44wYdrJP7IRQ4nTTw8DqzrCje2%2BA1ecsXbPRo9lbDijSFj3UAQ%2FEjPMMFA0IfWXEL%2BwN42VCcGEo3GDJdHkOGQ7alHNUXnuGj%2BY3IowzI5N5xHiSApW84eYn7kp98c8Y7ocXis9rgij4j3orjCaqBreEUvyShtBjn1Q%2BpB8gX2oshDCxE2lXaU4UOBYyeBHY2dg5j%2F%2BXg8t6rlsIiT6T2XBtz2P538inZHMN7%2FhhyVlzt4GWPhraGz%2FKW2Rv6QXfWxgMRu189S2z4P7vEnLCZWCEzzXwGmuxO%2BNRbXGMyOGmzjp1%2B8hIi8fxmA4CKrB%2BYNhLNBfAN4fSRlb7xAtQTUZIvWsPhDGDYZCnwdP%2FYT5LD9nbYGnt9GneIisE5%2FPJ5DRS%2FwY6xl0AQ6knMeH%2FBCjC%2B0eKNUJtY7qwZNnsVJ0zQDNWh%2FFBguOpghMCKNLDc%2Bco02Q%2FcVas%2F2d4vVty3MTIEtBX9EuQGHabmYf6UCBMoBa%2F6e4DkhpmNHZ4RMvbqW1UVh2oAblvKvWySw%2FLShnj44wyUt%2FkafHB1ZpzuqN6G5nu544cmMGkHAtgqDc4SdJCaQeNCf0nKquAV4%2BaUSJ8F3otZAMLvvicoGOqUBnTGtzilKJP6dOeuEAEe052quMytzaHaRpMZmUymM7hy%2BxjP1KJfVlKmJfo9E1YIFhP4xYOURKEW9OrPbe%2BDdrtjJn%2BSC4p1Q0K93caqkVOvuxW0h%2BPoHvL0ujThKpJEZwAvLw6mim8uEWjFuHuAbGsPv9IATK0iuCfg7JWKa5yROoGAYh9NZvMArLofo2HJYUx%2BVx7Nx%2Bw9kqiKjpQV%2FPZASlET%2F&X-Amz-Signature=3b35e37d659304f1fb5a4a9cb7f4ac6f6622999226c294b8c3346d60e9c6b7de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF7DYNSS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T093321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFtaFyGTYGX9oAX6pqe9CBCtskUeG7%2Fc6SBKiNqetbcwIgIJIOkHJbI7ji9lHJf%2BV9jAZepTdIl0eUYLGG0sUTeGQq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLoarD3JpfzJhKHhfyrcA%2B7vxRYyGRAKiRFY2aVksYDv0fd1rp44wYdrJP7IRQ4nTTw8DqzrCje2%2BA1ecsXbPRo9lbDijSFj3UAQ%2FEjPMMFA0IfWXEL%2BwN42VCcGEo3GDJdHkOGQ7alHNUXnuGj%2BY3IowzI5N5xHiSApW84eYn7kp98c8Y7ocXis9rgij4j3orjCaqBreEUvyShtBjn1Q%2BpB8gX2oshDCxE2lXaU4UOBYyeBHY2dg5j%2F%2BXg8t6rlsIiT6T2XBtz2P538inZHMN7%2FhhyVlzt4GWPhraGz%2FKW2Rv6QXfWxgMRu189S2z4P7vEnLCZWCEzzXwGmuxO%2BNRbXGMyOGmzjp1%2B8hIi8fxmA4CKrB%2BYNhLNBfAN4fSRlb7xAtQTUZIvWsPhDGDYZCnwdP%2FYT5LD9nbYGnt9GneIisE5%2FPJ5DRS%2FwY6xl0AQ6knMeH%2FBCjC%2B0eKNUJtY7qwZNnsVJ0zQDNWh%2FFBguOpghMCKNLDc%2Bco02Q%2FcVas%2F2d4vVty3MTIEtBX9EuQGHabmYf6UCBMoBa%2F6e4DkhpmNHZ4RMvbqW1UVh2oAblvKvWySw%2FLShnj44wyUt%2FkafHB1ZpzuqN6G5nu544cmMGkHAtgqDc4SdJCaQeNCf0nKquAV4%2BaUSJ8F3otZAMLvvicoGOqUBnTGtzilKJP6dOeuEAEe052quMytzaHaRpMZmUymM7hy%2BxjP1KJfVlKmJfo9E1YIFhP4xYOURKEW9OrPbe%2BDdrtjJn%2BSC4p1Q0K93caqkVOvuxW0h%2BPoHvL0ujThKpJEZwAvLw6mim8uEWjFuHuAbGsPv9IATK0iuCfg7JWKa5yROoGAYh9NZvMArLofo2HJYUx%2BVx7Nx%2Bw9kqiKjpQV%2FPZASlET%2F&X-Amz-Signature=d714849c83e0efa697c0555f0824589ed9c24603cc64c1f636a4e65be2533614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

