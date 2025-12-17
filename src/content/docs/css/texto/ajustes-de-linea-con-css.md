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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXMSSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe02d%2Ffj6YKAYGMooG7M9u%2BajuE61%2BGWrfWG1llqhsZQIhAKHQ8hPNMFuqSU39Zxa8dRDU7Hh28QmGWjBvKlG0CtrWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjGCAhG0qBE5OEKSgq3ANGCY6T6UwU%2FmL7ytq%2FQqOgIKn7JEAV9X%2FhTNhCDArvqTho%2Bcdst7PJGbDc4DPRYeSxOIS5NE%2Bn0%2Bhuo9yQsG8E%2Fil%2Bcok1JyHJMaGbSyGdhNeLxm7UZ8USPczub%2F0ChQaF%2B6IUl0SrnlPW5bRZ65iOQrOzWpnNSjQXXbb1BXSAwVRfKdugmZg%2FJExspnU7uGUIgN%2FzJEEJScwQIpzrizS473%2FnYwRzSfKERO51EQek1IQh4VC2ej%2F6D4D5L%2F6u9t0x%2BEJioP3%2BGo6xwnuqkYX0QrbQh72pG7i92%2FLDZJYDXqT2WIRx%2F6xHqAKysoo9RUYdgrXfO4rA7f7v4smgzHUO0hW4ElHPomsxAF3GQGj2qFnSJFRr3ayUKP4e5drf5AvOY6RPHloRKn3X8HOGF9NvXFvIajzy4Lni46CVGrEEsGQWvOpqWel6nAO3GYCONVvYg3ddwQD0lZRF2kVoH2e7oEisumfhcku%2BNukppFvDEEZdnUoKCpAfh0b5qdr5tPV700A6qFbXZMjeU9Wc7EQWQ5UFA4GXe5Zbz6Ww42l5QbkXHyZE7towUep6DLBRGthO3%2B5x5Yi8xOPWgybnEmm23UpDvG6iBr3SJnO5tzriQjolpAvpUl9lANk4RDC3%2B4fKBjqkAcl8HkluWKdmqoNKdgPaSFLTSlDKZnyoefe8OV1LdWn6mVAoRj8lJqUCB5yr1eZTcY1Oo3RllUAw0kpbpzmyppq3xjvzcgnBZUa2J9%2BSprtKRnd%2Fi9WDyxzXFUSooiuECCS7T806QBT4aMkca3jmY4OpARlvHIScw%2FcRF70a9k3726toDLtbkCbnKGjmUNzToaicIKYnP%2BYdOL5eZDN%2B5x%2B%2BMZhB&X-Amz-Signature=a49639621f786a75606135abfbe178dca7696380b7aeefaab0e979f67c9e7549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPXMSSY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe02d%2Ffj6YKAYGMooG7M9u%2BajuE61%2BGWrfWG1llqhsZQIhAKHQ8hPNMFuqSU39Zxa8dRDU7Hh28QmGWjBvKlG0CtrWKv8DCHIQABoMNjM3NDIzMTgzODA1IgzjGCAhG0qBE5OEKSgq3ANGCY6T6UwU%2FmL7ytq%2FQqOgIKn7JEAV9X%2FhTNhCDArvqTho%2Bcdst7PJGbDc4DPRYeSxOIS5NE%2Bn0%2Bhuo9yQsG8E%2Fil%2Bcok1JyHJMaGbSyGdhNeLxm7UZ8USPczub%2F0ChQaF%2B6IUl0SrnlPW5bRZ65iOQrOzWpnNSjQXXbb1BXSAwVRfKdugmZg%2FJExspnU7uGUIgN%2FzJEEJScwQIpzrizS473%2FnYwRzSfKERO51EQek1IQh4VC2ej%2F6D4D5L%2F6u9t0x%2BEJioP3%2BGo6xwnuqkYX0QrbQh72pG7i92%2FLDZJYDXqT2WIRx%2F6xHqAKysoo9RUYdgrXfO4rA7f7v4smgzHUO0hW4ElHPomsxAF3GQGj2qFnSJFRr3ayUKP4e5drf5AvOY6RPHloRKn3X8HOGF9NvXFvIajzy4Lni46CVGrEEsGQWvOpqWel6nAO3GYCONVvYg3ddwQD0lZRF2kVoH2e7oEisumfhcku%2BNukppFvDEEZdnUoKCpAfh0b5qdr5tPV700A6qFbXZMjeU9Wc7EQWQ5UFA4GXe5Zbz6Ww42l5QbkXHyZE7towUep6DLBRGthO3%2B5x5Yi8xOPWgybnEmm23UpDvG6iBr3SJnO5tzriQjolpAvpUl9lANk4RDC3%2B4fKBjqkAcl8HkluWKdmqoNKdgPaSFLTSlDKZnyoefe8OV1LdWn6mVAoRj8lJqUCB5yr1eZTcY1Oo3RllUAw0kpbpzmyppq3xjvzcgnBZUa2J9%2BSprtKRnd%2Fi9WDyxzXFUSooiuECCS7T806QBT4aMkca3jmY4OpARlvHIScw%2FcRF70a9k3726toDLtbkCbnKGjmUNzToaicIKYnP%2BYdOL5eZDN%2B5x%2B%2BMZhB&X-Amz-Signature=691a7c362d654d560256e64b450366a329502473613d44bfc84f30af6c189cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

