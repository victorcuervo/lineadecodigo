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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNX5UQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCK%2BGrlYEPW8zUKsm8nvDoGlgt1SP%2FO%2BsDlxQflu9DaAiEAxwsbPoyExVEc2EIdiuEbmrghZTT7c8gt7sRamkN65uQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsviTBR90DLRUTUQyrcA3v0ccLkBrKXypy5PnbYDbc4OAGaTsXyR%2F%2BeDFBD5E%2FXLwMvl8LgxZmhAcHafsCx5yBhGjZjAyU4hZZ43wLnkNzc269A4j0OmvA4%2FZ86sX%2F2mJB7jgted9h8VK0EjbJ9EqXKfZkQNcdAmOORFxd0zyCKYAX10VMY4HdGzKQ%2BJzrpDWJn9lthETcj%2BXVhyq08mHqM8H16No1uRH%2FcYKiZDAnOQGpb2EHgeOWx8RKJ67kiHVdpV%2FK2ExkM3FlpULoRxw%2F%2FVOYAj1O1ZrnucDzTk%2BQmtmVLFAGJRKZbjbKMgve6IXxEbLIYh11jMuukOkxkxDi5QJx1cAagf4%2FcELz9igP7t%2BFqNGOHAuzqQ7KNAyg8ClCiL%2BURlhm7vRh5YU5GqjxP2SggKufnOopG9qnbtCMF74ZzlURisLS%2BZn175ZaxEHLk%2BdE6r80vzR8AyCWK3RiWI0w6watS9%2BNDxvGWaAkffbzxroal9GtVQT0Ram9ZgSfNm4UVLte%2B0OefwmAoxHY9G0tVEpB3eYYBvUYc3OET0yOfmmVFxmoFqcmBQPz%2FsZrQc53fsceCuZZnHMGEE8MeChXq71j%2FBZMikBFzfuuxfnyQ1KeAg1KIeFFuWwDtgZUofI%2F6mD6GA0VkMMuei8oGOqUB2FMM3jVdPUGKLrxvCjwl%2BauDuCb6532rbMExHrxDDgG8DKALoqvIZ%2FVsLMCuPJuhBtcJMzknGCNYZwGDGsuw7tove1pa264NUsSZWkIrJd1UrnNQhviyMvdk6S7AaSw8GF2sbfq6ngoaDh589EyX%2Bv6ern2FTJkw0ytwzb9ALX1cBob6SAazU1Bj9FUqGzYL%2BrA6cDK2BxqaqyPSUpUPwwDRBDij&X-Amz-Signature=28aa4986f11ac3af019f63bece6694b8c55bd53f4983eefe1b42b24d99301635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KNX5UQY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T164056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDCK%2BGrlYEPW8zUKsm8nvDoGlgt1SP%2FO%2BsDlxQflu9DaAiEAxwsbPoyExVEc2EIdiuEbmrghZTT7c8gt7sRamkN65uQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDsviTBR90DLRUTUQyrcA3v0ccLkBrKXypy5PnbYDbc4OAGaTsXyR%2F%2BeDFBD5E%2FXLwMvl8LgxZmhAcHafsCx5yBhGjZjAyU4hZZ43wLnkNzc269A4j0OmvA4%2FZ86sX%2F2mJB7jgted9h8VK0EjbJ9EqXKfZkQNcdAmOORFxd0zyCKYAX10VMY4HdGzKQ%2BJzrpDWJn9lthETcj%2BXVhyq08mHqM8H16No1uRH%2FcYKiZDAnOQGpb2EHgeOWx8RKJ67kiHVdpV%2FK2ExkM3FlpULoRxw%2F%2FVOYAj1O1ZrnucDzTk%2BQmtmVLFAGJRKZbjbKMgve6IXxEbLIYh11jMuukOkxkxDi5QJx1cAagf4%2FcELz9igP7t%2BFqNGOHAuzqQ7KNAyg8ClCiL%2BURlhm7vRh5YU5GqjxP2SggKufnOopG9qnbtCMF74ZzlURisLS%2BZn175ZaxEHLk%2BdE6r80vzR8AyCWK3RiWI0w6watS9%2BNDxvGWaAkffbzxroal9GtVQT0Ram9ZgSfNm4UVLte%2B0OefwmAoxHY9G0tVEpB3eYYBvUYc3OET0yOfmmVFxmoFqcmBQPz%2FsZrQc53fsceCuZZnHMGEE8MeChXq71j%2FBZMikBFzfuuxfnyQ1KeAg1KIeFFuWwDtgZUofI%2F6mD6GA0VkMMuei8oGOqUB2FMM3jVdPUGKLrxvCjwl%2BauDuCb6532rbMExHrxDDgG8DKALoqvIZ%2FVsLMCuPJuhBtcJMzknGCNYZwGDGsuw7tove1pa264NUsSZWkIrJd1UrnNQhviyMvdk6S7AaSw8GF2sbfq6ngoaDh589EyX%2Bv6ern2FTJkw0ytwzb9ALX1cBob6SAazU1Bj9FUqGzYL%2BrA6cDK2BxqaqyPSUpUPwwDRBDij&X-Amz-Signature=dd7e6d4b68e0fba100b5ff9cdc0521f82ef0c9eedb410f415bebf672076b3b1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

