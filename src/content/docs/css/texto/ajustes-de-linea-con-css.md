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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYRNO3I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGLeZBwfd7VcQaFiHcFG9YKLuVX8nlnIimGeeiZwt%2FhAiAWTpJnhNRi8FwR1SJmyf09sEqsp2%2Bf29nQjtT7hEy9XCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMTUCp6uxsJnbHWApQKtwDY6lmLq169gh%2BoSiBYiO9I%2B%2B2IM7Ixkg5BeNqaLUEeT7B1I5R7Y6A9h%2Fp0YoqZ3mjkpLJKfpgwyFvAZbxfKmMocPXUc2vzfqecI5nUB%2F0E3iZbEO%2FyxXk%2B1bA%2FwrS%2BH8nhfnftus5u771Q5lmwMnpGqCFt4tKsjXUrUMLnDy%2FUma3WgQOuH%2FPAaFFeDg0L0t54NQ6iqhRQ%2BAvRgYIkCGZc4YtB1%2Fec0FFtlHARUa7Ed6C28Su7PiBCYz1TbJQLodx9QsPwinMKmwVx%2F75j450ZjTQ%2FyEKvwMb%2FAXY6R%2FUr0ttvWRc9bobRCeviPWmLISaPu0f60Z%2FfJt8ZmVoA5JDN3HgO%2FS8B9UcfU4haS%2BdGeIM4I4ua3SHpVMVQ4K1rrJ608URZZ%2Bk81ELPccgpn%2FyUw56sYojb1EApac7GfbftLSvOcpRn0UXDQ1UZUDQEgKdGjop46CsZHjK%2FiuHN%2BxJX5zWseZx80VHQIZlKF6StXcnVLwaDEzJVsXrtTImKfLviexyc0bVTa2wmNgS286672%2BfSw8wFwT7HGfb3Ff3Tnw9%2BLkFsfnvc6FqoXFiF79NPWd5MII1%2Fk64j4tkCu%2BvorWOPoTzh53HXUGOn0BGS45HFOxf6A8SyW9WypYwxJ2JygY6pgFsrz3RR86zIRwlpNz3H9FT0olhAqTNfPJ0CfxERmN5uJk0ntTXIiJ8FMq8HcBqKwBIXxTCqJ48k0qmbbcU9SHxPYlCfUOitS9f5T8C01pjRNKi9YVtULujYvpWuKkOocr5s52jKNYXCWUs3HyQCmIogG0783GYxX4jVKGMybH03cWeLuxpfCrZG5LOqujKfaBXnvl%2FxCirpTqy5mKzzEtKi3CZWdjj&X-Amz-Signature=ebc3eac7945c7ad9df2b28601ce35eea176f98622dfba97df48698ea6c5968e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EYRNO3I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHGLeZBwfd7VcQaFiHcFG9YKLuVX8nlnIimGeeiZwt%2FhAiAWTpJnhNRi8FwR1SJmyf09sEqsp2%2Bf29nQjtT7hEy9XCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMTUCp6uxsJnbHWApQKtwDY6lmLq169gh%2BoSiBYiO9I%2B%2B2IM7Ixkg5BeNqaLUEeT7B1I5R7Y6A9h%2Fp0YoqZ3mjkpLJKfpgwyFvAZbxfKmMocPXUc2vzfqecI5nUB%2F0E3iZbEO%2FyxXk%2B1bA%2FwrS%2BH8nhfnftus5u771Q5lmwMnpGqCFt4tKsjXUrUMLnDy%2FUma3WgQOuH%2FPAaFFeDg0L0t54NQ6iqhRQ%2BAvRgYIkCGZc4YtB1%2Fec0FFtlHARUa7Ed6C28Su7PiBCYz1TbJQLodx9QsPwinMKmwVx%2F75j450ZjTQ%2FyEKvwMb%2FAXY6R%2FUr0ttvWRc9bobRCeviPWmLISaPu0f60Z%2FfJt8ZmVoA5JDN3HgO%2FS8B9UcfU4haS%2BdGeIM4I4ua3SHpVMVQ4K1rrJ608URZZ%2Bk81ELPccgpn%2FyUw56sYojb1EApac7GfbftLSvOcpRn0UXDQ1UZUDQEgKdGjop46CsZHjK%2FiuHN%2BxJX5zWseZx80VHQIZlKF6StXcnVLwaDEzJVsXrtTImKfLviexyc0bVTa2wmNgS286672%2BfSw8wFwT7HGfb3Ff3Tnw9%2BLkFsfnvc6FqoXFiF79NPWd5MII1%2Fk64j4tkCu%2BvorWOPoTzh53HXUGOn0BGS45HFOxf6A8SyW9WypYwxJ2JygY6pgFsrz3RR86zIRwlpNz3H9FT0olhAqTNfPJ0CfxERmN5uJk0ntTXIiJ8FMq8HcBqKwBIXxTCqJ48k0qmbbcU9SHxPYlCfUOitS9f5T8C01pjRNKi9YVtULujYvpWuKkOocr5s52jKNYXCWUs3HyQCmIogG0783GYxX4jVKGMybH03cWeLuxpfCrZG5LOqujKfaBXnvl%2FxCirpTqy5mKzzEtKi3CZWdjj&X-Amz-Signature=0432658ff92f250c147dc07e74f6e66757f04110b294697f702986aa0e6fe20f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

