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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OICJPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsPqwKbf3%2BuCRtEFWgKxhtO8g8I3bqHwxed86oniFwJwIhAM%2FxlzBV6oxkDjiJ2VbWplYarUY4I%2BgILualIQvWhKWNKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlxaAz%2BDGt1GArNjcq3AOM3m68aM%2FqZxYkFWb5fb659jpoBdMXA62VI83obPrvkjq49V1YQ7Qja4%2BMFwFgjEUUjL6GOQ9TrvceT4EUD9i9YTto5E3mWhT1UIB2cRO3Pr4bM2q2%2FufrXCdpiBzrL67nKTXwP6iJCzkld5Jvv7TcnrPh6As1YlEK6LogZXIWFUUkDdaXEtLUMtz9h9%2Br7dpz78uZjvBA88DmmrzkwjWU3wCh5GrU4VUq%2FzypCQ2vEJRLTBmutYUTfwRiX9t6tlH7szFgA1Im0l%2FvPbDV3kY3Ussb1i5WmakIDkTEr23jHOU8YUuAOJATRYVcQPNn8llXZL%2FpyzgMUZoEG2qWQUntjJzebjUg8wEt2GYxjnUHFzA%2FGN4gNgXATy2LmXUkYdlMyWu5qluS3MNusljOobKDetRCwqsXi9cJa7dY8mljnK4IImc7LgCFC7hky8RrmJVpsCQBpvHV7tND3ehPDGelLBROuIAvXiRRo1JoLAj38Y4L0EBesfhd%2B6hdy3gpR5%2BI2%2FZhQEHDDXStwERhwZFwVy9NSDqGpUyW9pnYvY8w86MZBfHnQQRtSVxMs5m2WEhfyIq5VERG8%2F398lGAU%2B9lftdmK6bIZfNBfVh7osqHRl5hxjhX2sx4BK5oQzDCiozKBjqkAVNmTyCIQh3LZnGBQsJhdQVByoov8CXVnMwEAAzTbNWc3a7dBAykEJ0d7hX9m1QIoyjY50rQXi4Baxcvs%2BqLQ9ht5YkM5jd0lK2tZPHL24PByJPgEU3xf0G9%2FOFFnwV89DDnCidd6QHCuiGunj3Et6%2FZDhKv7UCMaYthqFWXUnygYua%2FUN8xvQS61Ki%2Bp89%2BfvizrWK0CHxQUM8vzI0%2BMTTmIknq&X-Amz-Signature=5db98a1ad901d6b244279495bc1be2b65b56b35665906dbf6976e33cbd1409ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5OICJPI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T193522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsPqwKbf3%2BuCRtEFWgKxhtO8g8I3bqHwxed86oniFwJwIhAM%2FxlzBV6oxkDjiJ2VbWplYarUY4I%2BgILualIQvWhKWNKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlxaAz%2BDGt1GArNjcq3AOM3m68aM%2FqZxYkFWb5fb659jpoBdMXA62VI83obPrvkjq49V1YQ7Qja4%2BMFwFgjEUUjL6GOQ9TrvceT4EUD9i9YTto5E3mWhT1UIB2cRO3Pr4bM2q2%2FufrXCdpiBzrL67nKTXwP6iJCzkld5Jvv7TcnrPh6As1YlEK6LogZXIWFUUkDdaXEtLUMtz9h9%2Br7dpz78uZjvBA88DmmrzkwjWU3wCh5GrU4VUq%2FzypCQ2vEJRLTBmutYUTfwRiX9t6tlH7szFgA1Im0l%2FvPbDV3kY3Ussb1i5WmakIDkTEr23jHOU8YUuAOJATRYVcQPNn8llXZL%2FpyzgMUZoEG2qWQUntjJzebjUg8wEt2GYxjnUHFzA%2FGN4gNgXATy2LmXUkYdlMyWu5qluS3MNusljOobKDetRCwqsXi9cJa7dY8mljnK4IImc7LgCFC7hky8RrmJVpsCQBpvHV7tND3ehPDGelLBROuIAvXiRRo1JoLAj38Y4L0EBesfhd%2B6hdy3gpR5%2BI2%2FZhQEHDDXStwERhwZFwVy9NSDqGpUyW9pnYvY8w86MZBfHnQQRtSVxMs5m2WEhfyIq5VERG8%2F398lGAU%2B9lftdmK6bIZfNBfVh7osqHRl5hxjhX2sx4BK5oQzDCiozKBjqkAVNmTyCIQh3LZnGBQsJhdQVByoov8CXVnMwEAAzTbNWc3a7dBAykEJ0d7hX9m1QIoyjY50rQXi4Baxcvs%2BqLQ9ht5YkM5jd0lK2tZPHL24PByJPgEU3xf0G9%2FOFFnwV89DDnCidd6QHCuiGunj3Et6%2FZDhKv7UCMaYthqFWXUnygYua%2FUN8xvQS61Ki%2Bp89%2BfvizrWK0CHxQUM8vzI0%2BMTTmIknq&X-Amz-Signature=910fd9ab3d4df2b3856f74e1d0a1e10199d8da6fba5c6407aebe1c986d6e1c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

