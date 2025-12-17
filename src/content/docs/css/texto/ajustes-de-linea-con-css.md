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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYK4T7DV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcs0wDOHUA9BysUJgYoOYRn%2BwYNMwI33cqM5H5Z2JDvAiAEtkOGXENwOc%2Bq6s%2BS6iy2kgmQ1ltffKK%2Bf%2FsR7KZWbSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6g8ko3GVhTcLAsawKtwDpnlgzk8GhItN0w2Q%2Bid9uITec5oG2YdnYbrmHVsXRnYVdd4wWOXZ0Tcrt9BHUhxLZupaZ%2BULGsMuHR22pqmzZCgvIb44Enmlu%2Frmk1AnHaS27G4cGJs64bn%2BXt9Rv6aKLJ289zG1pG9bU6wN0r87xtCMc8SsjhCYVEYD8YXwX6jn8WobB1GAJw%2B5kkUuqpM9%2BJIXgKKdt9AMQ8PAZqBG39B4hA4LNIDCOiov1OaVACJrBeusehJdGNEuUPI1BXWOayh1WtVivxzz9s%2FpBCZKXvK1rYiV1yTqUICT7LUVI0iOWL9Kck2j%2BYIEttRr6IE5YGfCnP0rNmvcO%2FG8Sv5YEk%2B0qRdtBNfnQKLwlIP%2FemdNc5S2Dje5uYRth%2FlZPC8QjxuckD6QhBnaVMpXr10haWQvHQEqo9nJR3YSA3t2dI0cU5EWm%2BCjjrlYvzHSMP8C9vlGc54Uu0PAKyWO07q7V8YI5CVHno2I2rMGdhwsh8g9CcZzPsLfOUB2UVuVfGgF%2BlzdcpAMDyAxdUXMrDhVjiiggr41sZalT3pq2en811cXgjGYEWNQdW5ntCkfw6yx0EDeyRdry80PXQanlWIgBnw8XB4Kblod5i2jI2DyCuqIXV50YHuPlhVWghwwo4GLygY6pgEKykQvrt1uX7Mt6JM7zH5ElbcDPpTWrHuto7Pn%2Femx7qeUSVdmzXoQXE2239VEWPcKVhNR15mTq6vW4hm8XegnVLg7%2BnIU9O6x6rA9w43TAbz6U%2FkvjKCOmcE88EmX%2FibW4HpxUXEeUjpW3QfZcMvdLUFuy43dy4577YPqf3BjnV79OyxIrfUHCtMk%2Bj09M4C2Q7vytr44hxtvHLXIYmBo3gHrWR2q&X-Amz-Signature=15fd7490440bb782f038756636ad4e0ca4334bf07ceebe19c0d0f57813ef112a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYK4T7DV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcs0wDOHUA9BysUJgYoOYRn%2BwYNMwI33cqM5H5Z2JDvAiAEtkOGXENwOc%2Bq6s%2BS6iy2kgmQ1ltffKK%2Bf%2FsR7KZWbSqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6g8ko3GVhTcLAsawKtwDpnlgzk8GhItN0w2Q%2Bid9uITec5oG2YdnYbrmHVsXRnYVdd4wWOXZ0Tcrt9BHUhxLZupaZ%2BULGsMuHR22pqmzZCgvIb44Enmlu%2Frmk1AnHaS27G4cGJs64bn%2BXt9Rv6aKLJ289zG1pG9bU6wN0r87xtCMc8SsjhCYVEYD8YXwX6jn8WobB1GAJw%2B5kkUuqpM9%2BJIXgKKdt9AMQ8PAZqBG39B4hA4LNIDCOiov1OaVACJrBeusehJdGNEuUPI1BXWOayh1WtVivxzz9s%2FpBCZKXvK1rYiV1yTqUICT7LUVI0iOWL9Kck2j%2BYIEttRr6IE5YGfCnP0rNmvcO%2FG8Sv5YEk%2B0qRdtBNfnQKLwlIP%2FemdNc5S2Dje5uYRth%2FlZPC8QjxuckD6QhBnaVMpXr10haWQvHQEqo9nJR3YSA3t2dI0cU5EWm%2BCjjrlYvzHSMP8C9vlGc54Uu0PAKyWO07q7V8YI5CVHno2I2rMGdhwsh8g9CcZzPsLfOUB2UVuVfGgF%2BlzdcpAMDyAxdUXMrDhVjiiggr41sZalT3pq2en811cXgjGYEWNQdW5ntCkfw6yx0EDeyRdry80PXQanlWIgBnw8XB4Kblod5i2jI2DyCuqIXV50YHuPlhVWghwwo4GLygY6pgEKykQvrt1uX7Mt6JM7zH5ElbcDPpTWrHuto7Pn%2Femx7qeUSVdmzXoQXE2239VEWPcKVhNR15mTq6vW4hm8XegnVLg7%2BnIU9O6x6rA9w43TAbz6U%2FkvjKCOmcE88EmX%2FibW4HpxUXEeUjpW3QfZcMvdLUFuy43dy4577YPqf3BjnV79OyxIrfUHCtMk%2Bj09M4C2Q7vytr44hxtvHLXIYmBo3gHrWR2q&X-Amz-Signature=83140bdd6c620836fd47c259c5776a6ae6d258bd81e09bb32d3a24b5231ad87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

