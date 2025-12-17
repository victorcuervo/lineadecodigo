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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5EPD46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELAyq5fnTQnIeZuXf3yizxKXrVrIJ8SKQdQkUohJxZBAiEAj9Wv1iqUoDkrf73alYzW4RJA7z2mAtJtMvtctpzRRUMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLDu%2BTFWfj8E482GqircAzUSeCuYbF41UnUQ%2Fi4BWXlf%2FV7D%2BEwaZ2RR13%2BAhUsSQbvLs5gGX5AmQ4bRJ6FF8ahYrnNuLsEIbVokDSylcrswsZbLsGHtNWTMLGPSQ2MAlWIczd1Ydi6p1TKas09KQKV%2BRL9tWEmB5HgCLNLoZgmb58VncgGZNHr7MlZoxdI9V7pybU5Qz1fEB4q0keYKm4sdMBRNUnNZGiGKqcHB%2FLp0p9N5J39SBaEIRbRovjP4WZ8QYKUbcHl%2B%2FIkezp9saWYN30w0ga1W14ynzA37FNVIKoYGhLjvL%2Ft5t2MRe1fC7hPTNWqjewcR6vJIs%2Fdtgegez%2B%2BEhUrrcW8Hbl4W2gD4ERuYU6Ur5Gu9H0330QBgAAEuoP2pl6%2BfuILccyKtgDmXW1m8aPjpBXl7F2s3PQbSs5Vtzh2TBmRXjstKhVB4qQPn4bopVVAYYla8lSqFtRRcikB8CPtui2oqu1kJkvFFPLihDyvV%2BrWtLY4l%2F%2FHkD5WFqWFBYMyIlX8zE64UjOWTcSnNBhDpQJwTWUHekyDENrBd7xL4K7YENz%2F%2F11P5Brj5EEdfm8JNW5PHub5pN9O4Zt3uzefsip447ejabk1aXxwpUBCoRQ4F4bBX%2B6%2FmKfMg%2FcriXL1Cvb0FMPOOisoGOqUBRxyvAhf%2BkS%2BjhIyY408hztEMM71VkqIPFbdmmFlkMlRTFlpzZ0OlrdY4XPep6VdOKLRKl1Q3%2F0qmhuXGoDZgLtqfy1RjiEigNhes4bk1rTjjfyZi3B9S2ubuZujEG%2BzX5X5bUhVG%2BMPq46xqMTz7ciBbP5PCKMmZVQfq9f36XbcBND%2Bl31p8ZwB8yP3yz8vMbvM%2Fq75zPkF3y0oZcQxRP2qVAYZ5&X-Amz-Signature=7b1b38d69adab0906d72285d88070984f82ee73276dbdbde2a4c958914fbe4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ5EPD46%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELAyq5fnTQnIeZuXf3yizxKXrVrIJ8SKQdQkUohJxZBAiEAj9Wv1iqUoDkrf73alYzW4RJA7z2mAtJtMvtctpzRRUMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLDu%2BTFWfj8E482GqircAzUSeCuYbF41UnUQ%2Fi4BWXlf%2FV7D%2BEwaZ2RR13%2BAhUsSQbvLs5gGX5AmQ4bRJ6FF8ahYrnNuLsEIbVokDSylcrswsZbLsGHtNWTMLGPSQ2MAlWIczd1Ydi6p1TKas09KQKV%2BRL9tWEmB5HgCLNLoZgmb58VncgGZNHr7MlZoxdI9V7pybU5Qz1fEB4q0keYKm4sdMBRNUnNZGiGKqcHB%2FLp0p9N5J39SBaEIRbRovjP4WZ8QYKUbcHl%2B%2FIkezp9saWYN30w0ga1W14ynzA37FNVIKoYGhLjvL%2Ft5t2MRe1fC7hPTNWqjewcR6vJIs%2Fdtgegez%2B%2BEhUrrcW8Hbl4W2gD4ERuYU6Ur5Gu9H0330QBgAAEuoP2pl6%2BfuILccyKtgDmXW1m8aPjpBXl7F2s3PQbSs5Vtzh2TBmRXjstKhVB4qQPn4bopVVAYYla8lSqFtRRcikB8CPtui2oqu1kJkvFFPLihDyvV%2BrWtLY4l%2F%2FHkD5WFqWFBYMyIlX8zE64UjOWTcSnNBhDpQJwTWUHekyDENrBd7xL4K7YENz%2F%2F11P5Brj5EEdfm8JNW5PHub5pN9O4Zt3uzefsip447ejabk1aXxwpUBCoRQ4F4bBX%2B6%2FmKfMg%2FcriXL1Cvb0FMPOOisoGOqUBRxyvAhf%2BkS%2BjhIyY408hztEMM71VkqIPFbdmmFlkMlRTFlpzZ0OlrdY4XPep6VdOKLRKl1Q3%2F0qmhuXGoDZgLtqfy1RjiEigNhes4bk1rTjjfyZi3B9S2ubuZujEG%2BzX5X5bUhVG%2BMPq46xqMTz7ciBbP5PCKMmZVQfq9f36XbcBND%2Bl31p8ZwB8yP3yz8vMbvM%2Fq75zPkF3y0oZcQxRP2qVAYZ5&X-Amz-Signature=b30a8bb8aaaf250a38605037ac0a6b573ffee9c8abf0db6ff86113dc3e67cb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

