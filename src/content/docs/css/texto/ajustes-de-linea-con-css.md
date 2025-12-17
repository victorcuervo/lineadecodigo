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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XANH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC2rDwY8O30YBw59Gs%2BvQkZZs39GrsovJcwEqAYH6a8AiAFQQg%2FFrKLGS%2FeM%2F%2BniSuZkfAUB1%2FFr5rYBKwezrnibSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMDmn4SzzOdY6al6t%2BKtwDPb%2B%2F4ysO0u0joMiNvzvpBfc%2BGlQx92lj8YL9mRM7djfbRm1xHMfVPn2p2ATGjpiOZM9qtW9wVJSdHNwDGwWp%2BrMRZ47RMnXUg7UTFO7UjPizrac9SLuE3YdGqpNR57a9AAH9rDUMwGmifoiOEa5zsbUlzZ%2FIYF92ZdvE4WFCzEqtu2oXJUih8BerwHp1Iulv8zvG4c7FBEJz%2F4qVbQsIiuG1WEYUtntDwBHxrEGDAbKtc11FJCnM8E6HUnN2ElarBebkdDMoZCDTmBsYZ7t1jLa7YW7as0GWOi%2FR37ojgJAdlYH3noTHqYrHxTVLHh31i5qErePb8BJL5DCfJu6F65lpmpm48e14pu%2FigEN%2B9OjBrIVkAL49ZaPkrQmVRh9N%2FN0sAi2KxvhhAn61dYlJHk3JUn%2F%2F4KyJh7tpA%2F0hmU5OteUP1Iy3wuced%2B9xhupjVpBKGudcRpx0vP6soDwWd%2Bxs1C%2BxjqHDoLnnn5zPKFiu1Vn7dszPLl0sS4dTkZAa0xumtSUgnV%2B5JIzVM8OvHlHQz6aN1QLM0KaErnDH0aU5nTC15CnvhP0glc2iDFXJf8ItGKOPJnTNfHYEm85rAaIJNtEVi57SLsPi4QYFiqxJ3PCM6Aod%2B%2FzRlxMw1eGKygY6pgFtkx7H%2FlsEULy658Dk4zq4siv2atNqx6YvPHlvlaFJ%2BIHVgt1LtonuQrwtK90%2FG8sQtIjrJnBm8XHPhmKJ70jvAG%2FjsRk1f%2BdStbF7BsWRf4bQ2wusnEUaFnUFkZmaknr7IZ%2FbhXwjrhmULej8qi1AWAp9b6BEeZzJwqKz4Z7RAm6wu1USckUpko%2Bz3wji5A4XERqghciLBF8tL5sTFGtOrxcRlHXk&X-Amz-Signature=2aec2e231b54e6512f48847adc629a0695394da7208fe2272038a0bf320c65aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY2XANH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAC2rDwY8O30YBw59Gs%2BvQkZZs39GrsovJcwEqAYH6a8AiAFQQg%2FFrKLGS%2FeM%2F%2BniSuZkfAUB1%2FFr5rYBKwezrnibSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMDmn4SzzOdY6al6t%2BKtwDPb%2B%2F4ysO0u0joMiNvzvpBfc%2BGlQx92lj8YL9mRM7djfbRm1xHMfVPn2p2ATGjpiOZM9qtW9wVJSdHNwDGwWp%2BrMRZ47RMnXUg7UTFO7UjPizrac9SLuE3YdGqpNR57a9AAH9rDUMwGmifoiOEa5zsbUlzZ%2FIYF92ZdvE4WFCzEqtu2oXJUih8BerwHp1Iulv8zvG4c7FBEJz%2F4qVbQsIiuG1WEYUtntDwBHxrEGDAbKtc11FJCnM8E6HUnN2ElarBebkdDMoZCDTmBsYZ7t1jLa7YW7as0GWOi%2FR37ojgJAdlYH3noTHqYrHxTVLHh31i5qErePb8BJL5DCfJu6F65lpmpm48e14pu%2FigEN%2B9OjBrIVkAL49ZaPkrQmVRh9N%2FN0sAi2KxvhhAn61dYlJHk3JUn%2F%2F4KyJh7tpA%2F0hmU5OteUP1Iy3wuced%2B9xhupjVpBKGudcRpx0vP6soDwWd%2Bxs1C%2BxjqHDoLnnn5zPKFiu1Vn7dszPLl0sS4dTkZAa0xumtSUgnV%2B5JIzVM8OvHlHQz6aN1QLM0KaErnDH0aU5nTC15CnvhP0glc2iDFXJf8ItGKOPJnTNfHYEm85rAaIJNtEVi57SLsPi4QYFiqxJ3PCM6Aod%2B%2FzRlxMw1eGKygY6pgFtkx7H%2FlsEULy658Dk4zq4siv2atNqx6YvPHlvlaFJ%2BIHVgt1LtonuQrwtK90%2FG8sQtIjrJnBm8XHPhmKJ70jvAG%2FjsRk1f%2BdStbF7BsWRf4bQ2wusnEUaFnUFkZmaknr7IZ%2FbhXwjrhmULej8qi1AWAp9b6BEeZzJwqKz4Z7RAm6wu1USckUpko%2Bz3wji5A4XERqghciLBF8tL5sTFGtOrxcRlHXk&X-Amz-Signature=1b3c5004deb4c76c946fc7c53b85f48f33b99d30cfcfa5f312ac921fa23a2890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

