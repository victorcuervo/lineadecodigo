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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEKLRML%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIdCf5jOKMMupBJ9b8%2FqwGPVK7pZ74e%2FZSLDeITmPbtAIhAP9nDZwqLAwKWqd%2BED4oVQqQrOoBFWRreOTIxJ1VCZc5KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5cyhzcqHuTqwVab4q3APH%2FpeF76TowOX5Zv4rk0sJCsv1%2F3H12qgwb8c7tZu%2Fb19qw8LdlBsDjlZoAlDR3cKHtkutxubTLnparFTjEFklvcuBV7GQLnOs5fHmfFer3tzneSHHWKepe8Zg6y%2F55Jvva6tWlGIogHGA21nwHxk9K%2BgdaBtwcJpoYejsk%2F%2BhRpbGx%2FoYTV64Ko1TpQIJdOoxS7Jp8XCtSByrD1Jg8PvQcJQhvuupUf8hKCyR8laQscVD5jPeuhm%2BoHe3YWhMZfvYz4jhwqzwJ0FsHGFRp4NXgj6fVTQWOy%2BlWVJN%2FantXlDjs03ImNFSvkDoRscHN0xIAK6BMpsFlneraPonLPcWTiKaVux4oWYQZQ82gpwcATtg0EqNCbbLk5AEv6iwjDVD2vMx76mp9VhVrfNUBZdmNDrgTopJSxh6PjdyFODu0GXQ7ojEqGW9BZabBQEuGZLGk7WYagy8xEMVFM1LqnXMW00Lo4L8L9JPmKfstsDbgYqh0r4ZY%2F2N6rWsSL%2FyOkYK7p%2FfE1pP%2BRgBSS0HBaIo%2F2awjWJ9CCEtPffeACAiZe%2FWJR5b6HP1oJsX4LZj7f9LXFnV3xondjbV8s%2B1S13LSsewD1U0KwFe5OPM88ewM%2FWdIVMPk5ln7AA%2BWjD1i4zKBjqkAWNDC6YxMZwzqq22VAhSjUkErFviVy21XhRt64Z%2BXfTtDceFJpiAI2fUKLeRUz84dPgWVl0g%2B35%2F9EykA4oe8Rc3qXaHom9ERD09Y%2FMfTJEkVpRoQhPWVexxEwgdMbVwWkE4rw1HqK%2B3HI6tMGo7qxpd1zPSZAYN5offI3IKMNkQu4kVaoOe6jI426SikeN%2FDLb8RlsQE2PzBS%2FVqFfiyUCQafT3&X-Amz-Signature=19efa1733027ad2c53a884196f8a917a3bf9232eefee1ba44c52cb70ad89fa61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZEKLRML%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIdCf5jOKMMupBJ9b8%2FqwGPVK7pZ74e%2FZSLDeITmPbtAIhAP9nDZwqLAwKWqd%2BED4oVQqQrOoBFWRreOTIxJ1VCZc5KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5cyhzcqHuTqwVab4q3APH%2FpeF76TowOX5Zv4rk0sJCsv1%2F3H12qgwb8c7tZu%2Fb19qw8LdlBsDjlZoAlDR3cKHtkutxubTLnparFTjEFklvcuBV7GQLnOs5fHmfFer3tzneSHHWKepe8Zg6y%2F55Jvva6tWlGIogHGA21nwHxk9K%2BgdaBtwcJpoYejsk%2F%2BhRpbGx%2FoYTV64Ko1TpQIJdOoxS7Jp8XCtSByrD1Jg8PvQcJQhvuupUf8hKCyR8laQscVD5jPeuhm%2BoHe3YWhMZfvYz4jhwqzwJ0FsHGFRp4NXgj6fVTQWOy%2BlWVJN%2FantXlDjs03ImNFSvkDoRscHN0xIAK6BMpsFlneraPonLPcWTiKaVux4oWYQZQ82gpwcATtg0EqNCbbLk5AEv6iwjDVD2vMx76mp9VhVrfNUBZdmNDrgTopJSxh6PjdyFODu0GXQ7ojEqGW9BZabBQEuGZLGk7WYagy8xEMVFM1LqnXMW00Lo4L8L9JPmKfstsDbgYqh0r4ZY%2F2N6rWsSL%2FyOkYK7p%2FfE1pP%2BRgBSS0HBaIo%2F2awjWJ9CCEtPffeACAiZe%2FWJR5b6HP1oJsX4LZj7f9LXFnV3xondjbV8s%2B1S13LSsewD1U0KwFe5OPM88ewM%2FWdIVMPk5ln7AA%2BWjD1i4zKBjqkAWNDC6YxMZwzqq22VAhSjUkErFviVy21XhRt64Z%2BXfTtDceFJpiAI2fUKLeRUz84dPgWVl0g%2B35%2F9EykA4oe8Rc3qXaHom9ERD09Y%2FMfTJEkVpRoQhPWVexxEwgdMbVwWkE4rw1HqK%2B3HI6tMGo7qxpd1zPSZAYN5offI3IKMNkQu4kVaoOe6jI426SikeN%2FDLb8RlsQE2PzBS%2FVqFfiyUCQafT3&X-Amz-Signature=14ebd2173e28d7a72b6845002a615d92501aaeea59ace41225461c15442ac0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

