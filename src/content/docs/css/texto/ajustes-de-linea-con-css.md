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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAE3WEL7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt8DsDL%2B3TNyzfaP%2Bqe%2BxGvMgIWhvIZuaEF90IErurZAIgHO9Djt9TXCtp4w9UbeNT5VmzetrGl8%2BMlyknoRqq6vcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEOnWzfoxLKj19XPfSrcA%2FdOHJYX1MdxdD70%2BX9qN3oaO8hEFO4YVlE7tPWrskJ%2FdJQqqYGKoNT2XI9MXiTWQZtAtRGxhW2rcClVG3IA2feDy0EfdAEvjRNY%2B%2BE%2Br%2FISkeWPeh2nrhZRxfTc3AE08Nwq0PTAuq72X0Vd06WFD%2B5mdu9Ua5LBnCEU0sqaGveuEv50C9VmllVie5kh9Kq%2FtY%2FYQ0j3%2FthHYtSOX6IXkEpB4bjWgoD0KWDJfJBIXri7Kdf12TZuU2EkkWXxYMsqcFuZOyjW517iAoVjD3FPb2cPe5AHZHa581aZZKEX%2BX4KIvMLS8qDxQvWTGFgGsla0f3qX8g1vzvFxxUoBOPRiDv0saS6Hc92DjL1i4Uk7H1zUQNpzNxOxQenBEbTQ1SkoC1j9Resg%2BzDyHSA4tYCwq9HZ5TNq7hf4mOD7aItjFqaJn%2Ftsdmws2YkTst8%2FhjFvTNqNwzNUc6dChzg%2FpWveLHKUhBumdSopM9JF4rdcocjWxO1ujKiknxFhOIjHtB7frnKZa7uQun%2Fgg%2BP2rVnmqSAOXx80KYbpXAhAJnrG9qw0w5uSbGOMeEa54NnqLgNHE8XAwOyryeWu0QubVSKcuzg63Bwxs4%2B5bB6NY7%2BHRzjEM20mmDYhevEN3pFMKGcicoGOqUBC3Bpy6nj%2B3W4Zui%2BkrMXwrynA9SvCpc3IbrBByds6ubyJqUEE2zwugQdlDQffcLDBz7Yg57M8Nncs6bKBykYt3j9hsk2qfrNzUgEwGXldhuTptaVUEZVy6DsmiWXFIkqTamGrEgiJS10JVH6w3d%2FcpsOKvfa0tk34yNqVl%2BLpIQkN9FdjkZv3J9P74a%2FcKDX%2BxChAwcH3Gxe5GcUML1hcSMWl2of&X-Amz-Signature=46d47d695fb1e5297bcbb54bbc9a35f66a1ce5c46bbf9cea9659c7d9b8010bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAE3WEL7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt8DsDL%2B3TNyzfaP%2Bqe%2BxGvMgIWhvIZuaEF90IErurZAIgHO9Djt9TXCtp4w9UbeNT5VmzetrGl8%2BMlyknoRqq6vcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEOnWzfoxLKj19XPfSrcA%2FdOHJYX1MdxdD70%2BX9qN3oaO8hEFO4YVlE7tPWrskJ%2FdJQqqYGKoNT2XI9MXiTWQZtAtRGxhW2rcClVG3IA2feDy0EfdAEvjRNY%2B%2BE%2Br%2FISkeWPeh2nrhZRxfTc3AE08Nwq0PTAuq72X0Vd06WFD%2B5mdu9Ua5LBnCEU0sqaGveuEv50C9VmllVie5kh9Kq%2FtY%2FYQ0j3%2FthHYtSOX6IXkEpB4bjWgoD0KWDJfJBIXri7Kdf12TZuU2EkkWXxYMsqcFuZOyjW517iAoVjD3FPb2cPe5AHZHa581aZZKEX%2BX4KIvMLS8qDxQvWTGFgGsla0f3qX8g1vzvFxxUoBOPRiDv0saS6Hc92DjL1i4Uk7H1zUQNpzNxOxQenBEbTQ1SkoC1j9Resg%2BzDyHSA4tYCwq9HZ5TNq7hf4mOD7aItjFqaJn%2Ftsdmws2YkTst8%2FhjFvTNqNwzNUc6dChzg%2FpWveLHKUhBumdSopM9JF4rdcocjWxO1ujKiknxFhOIjHtB7frnKZa7uQun%2Fgg%2BP2rVnmqSAOXx80KYbpXAhAJnrG9qw0w5uSbGOMeEa54NnqLgNHE8XAwOyryeWu0QubVSKcuzg63Bwxs4%2B5bB6NY7%2BHRzjEM20mmDYhevEN3pFMKGcicoGOqUBC3Bpy6nj%2B3W4Zui%2BkrMXwrynA9SvCpc3IbrBByds6ubyJqUEE2zwugQdlDQffcLDBz7Yg57M8Nncs6bKBykYt3j9hsk2qfrNzUgEwGXldhuTptaVUEZVy6DsmiWXFIkqTamGrEgiJS10JVH6w3d%2FcpsOKvfa0tk34yNqVl%2BLpIQkN9FdjkZv3J9P74a%2FcKDX%2BxChAwcH3Gxe5GcUML1hcSMWl2of&X-Amz-Signature=fcca6df4e53789deef605c43372d3d4e5a32a67a5b471199f6d9f738b066eaf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

