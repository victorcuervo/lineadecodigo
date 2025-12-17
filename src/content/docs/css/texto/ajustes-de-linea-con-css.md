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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7LZJ3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEYhLJMoeNJWOVhpghanTM3%2BB1pxyn5kFsi3V04qe06AiB9CcJAtIVfSDiAS09qdSSLv3zH7ZMps5hzDq%2BEtSTAVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMED52ipRkuT67RUhpKtwDyKHdRtg6hzgy3z1XpWUb%2FA5iewh1AS3eDWLn3cX22PDB6G9xM0nOkG2Jmw8yyxFImzL6QhLECYirvv4OuBoJwdPkJgwMRFYgZWzqeBM6bLb%2FeJwWNeSNrY%2F1kNikMTxlhZeSC41I5uzSUwEYTXq7xQhNi1nIh9KZhYdu6KumaRXdVwhAbExXO8af1PCdT%2BznhiN4eOEwhBRiZK0RP8rbfzQ0A9sKMN9CXgU9ykHgOAAl8EQhHTn%2FY3mdtk95mVKtsPj3P5xELuQfOsnfnb5UwqfciUN6MKAYUbACprI1aChDsASg00KPTA%2FhKUx7Y1wkYNWDhmL%2F3Aj1YzZW62q%2BUi%2B23EU0%2BKvDAMpVIXu7%2Bq7YyRFlPutIOhGqI%2F2Tm4tHnSnpHN0LLmimKiBIBvGjNX22vAszoa9gw6y8aqSGgFnPNDFz2%2Fb4AH977U8p%2FmQYVsVr7KnDkucPRaId05aEEPOHEw7pYZnbbBHXDKusM%2BA9Gk0Qeg7AgHTtoyoGCyL48xxr77%2FgjuQKM74TOJIC47zoJz7aflkVd42oKefe8ik5ZSNB83ZezD8RZnCXiK%2BEQq%2F7B32ueeSJ41O2afi%2FgQTJzSL%2BBk%2Bf6kqMuPftBQ%2BtJTW4qIJrSVbVjqYww%2FuHygY6pgEKFu8vHu%2FYsrNyhMHgIcVZ%2FV32yQwtHozuNYj9T82R7DUSS4o6Suipe%2F5c6xSjyWPuJqLX0jYlcO9wWuQM0V36clho9Ua3CpnLzjApqrfusQAEMMmxL%2Bsuxg0UIGP22xQF7Q%2BknZSMgm8zJpALTzeN7xuseX32r6mQLIop0G%2FWbtxrombeNcjaVXrWaXMfT88dIMGr%2Bc7nnn7dEt53Qw8CX6noiPH8&X-Amz-Signature=09e2183922de630435c7eda7852f109a40531c8a033f47e64540ece29b93f213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TR7LZJ3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAEYhLJMoeNJWOVhpghanTM3%2BB1pxyn5kFsi3V04qe06AiB9CcJAtIVfSDiAS09qdSSLv3zH7ZMps5hzDq%2BEtSTAVSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMED52ipRkuT67RUhpKtwDyKHdRtg6hzgy3z1XpWUb%2FA5iewh1AS3eDWLn3cX22PDB6G9xM0nOkG2Jmw8yyxFImzL6QhLECYirvv4OuBoJwdPkJgwMRFYgZWzqeBM6bLb%2FeJwWNeSNrY%2F1kNikMTxlhZeSC41I5uzSUwEYTXq7xQhNi1nIh9KZhYdu6KumaRXdVwhAbExXO8af1PCdT%2BznhiN4eOEwhBRiZK0RP8rbfzQ0A9sKMN9CXgU9ykHgOAAl8EQhHTn%2FY3mdtk95mVKtsPj3P5xELuQfOsnfnb5UwqfciUN6MKAYUbACprI1aChDsASg00KPTA%2FhKUx7Y1wkYNWDhmL%2F3Aj1YzZW62q%2BUi%2B23EU0%2BKvDAMpVIXu7%2Bq7YyRFlPutIOhGqI%2F2Tm4tHnSnpHN0LLmimKiBIBvGjNX22vAszoa9gw6y8aqSGgFnPNDFz2%2Fb4AH977U8p%2FmQYVsVr7KnDkucPRaId05aEEPOHEw7pYZnbbBHXDKusM%2BA9Gk0Qeg7AgHTtoyoGCyL48xxr77%2FgjuQKM74TOJIC47zoJz7aflkVd42oKefe8ik5ZSNB83ZezD8RZnCXiK%2BEQq%2F7B32ueeSJ41O2afi%2FgQTJzSL%2BBk%2Bf6kqMuPftBQ%2BtJTW4qIJrSVbVjqYww%2FuHygY6pgEKFu8vHu%2FYsrNyhMHgIcVZ%2FV32yQwtHozuNYj9T82R7DUSS4o6Suipe%2F5c6xSjyWPuJqLX0jYlcO9wWuQM0V36clho9Ua3CpnLzjApqrfusQAEMMmxL%2Bsuxg0UIGP22xQF7Q%2BknZSMgm8zJpALTzeN7xuseX32r6mQLIop0G%2FWbtxrombeNcjaVXrWaXMfT88dIMGr%2Bc7nnn7dEt53Qw8CX6noiPH8&X-Amz-Signature=bf743a07ef518628d025e283db887bf48fcc24480457ac7cff515ad3eb78f72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

