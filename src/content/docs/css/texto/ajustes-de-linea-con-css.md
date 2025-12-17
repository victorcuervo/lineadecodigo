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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNMMMNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Rl%2FUrfueFeAjdUMyypUtHnTb1IUCdNjswfrCzNScYQIgDx2diSqiRYsQDmcnnmvZiz6AUwiQoUSFhuLmo6glcbQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCoKcqQzsthYfRVA4ircA1GNQgtSSv8rBMixRhlSJn568h42XBKMC9A2BaljrGPJEQcUMbhZo1KQU3Vmgad7jvJgIak%2BanyTdiX3jgRHHkxqVNNdTY0zr2n1n76lO7xlMGskoNarsGgyUZMvz1S4hTSEomCa%2BxwpCtt3AWEn653sPxuElzPHFyxKx05XnAK5%2FDJ%2FLEKkd5kFnm8EiwLLnwSkx5RUvr4GCDrG5ag0%2FCbtDM01LgKDNcjuSl01VrIH0PM%2FOXNPXTlA4njz7b2v4BUZZZzedNUt1TeDYWie0NvvicJB9ENxw4dF3HWgz4hC92SNfQ%2F8ZqH88e9ocohBNIqbEqBYKpNjgjcs7xv%2Ff4C9q6uy57v7w%2FjXg1v%2BvpZDErQn%2FNHwxI5tPYYu31vIGqWMdD31YnafoW4XzGOLLpB9HEaKCd1G7UTa3wouIzGLxza0fKivJyPNzn3mCIoRbjonVChVpR07bkfXBWD2aPDLsemJAHJkNMyYrfVPXkvFnmnrcI%2B6ewIt2LXVX1c2CW2VbGe%2FymiPWCvL1bzDxBgl99UxMS2tgKIRrDiOcb%2FjjciVxu5MKaBezDA3mwMf5hgk1nQy5c0B2M%2BlkGYc9wxxEEH2s93%2F0QM68azEwi9n8V%2FIlHpArzayvCNIMMOqisoGOqUBKzyvcPCyhhB%2F%2Biz7jWmHq6XohCnpZInsFHf3WlMuW5s%2F%2FfbdgUwv3rNpyhDjB1MFjgmW1BE%2FiPKivhnXmWsZLldzxMiamaRwRC2lCo1YHVXzKuXT53Il75pci0FkEldGhrfOqYU0gOlRTLPC0rOIYu8OCzBUIuillT6M7nFKduwGpqMWidBBmr3j9tlxyGf0fZB63SLcdlWo7T3Jv0qBnLpXGMg%2B&X-Amz-Signature=23445ac801dd6eb28bfa5d7d8009054db7b32576f798f55582fbf11d8e07cd2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCNMMMNH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2Rl%2FUrfueFeAjdUMyypUtHnTb1IUCdNjswfrCzNScYQIgDx2diSqiRYsQDmcnnmvZiz6AUwiQoUSFhuLmo6glcbQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDCoKcqQzsthYfRVA4ircA1GNQgtSSv8rBMixRhlSJn568h42XBKMC9A2BaljrGPJEQcUMbhZo1KQU3Vmgad7jvJgIak%2BanyTdiX3jgRHHkxqVNNdTY0zr2n1n76lO7xlMGskoNarsGgyUZMvz1S4hTSEomCa%2BxwpCtt3AWEn653sPxuElzPHFyxKx05XnAK5%2FDJ%2FLEKkd5kFnm8EiwLLnwSkx5RUvr4GCDrG5ag0%2FCbtDM01LgKDNcjuSl01VrIH0PM%2FOXNPXTlA4njz7b2v4BUZZZzedNUt1TeDYWie0NvvicJB9ENxw4dF3HWgz4hC92SNfQ%2F8ZqH88e9ocohBNIqbEqBYKpNjgjcs7xv%2Ff4C9q6uy57v7w%2FjXg1v%2BvpZDErQn%2FNHwxI5tPYYu31vIGqWMdD31YnafoW4XzGOLLpB9HEaKCd1G7UTa3wouIzGLxza0fKivJyPNzn3mCIoRbjonVChVpR07bkfXBWD2aPDLsemJAHJkNMyYrfVPXkvFnmnrcI%2B6ewIt2LXVX1c2CW2VbGe%2FymiPWCvL1bzDxBgl99UxMS2tgKIRrDiOcb%2FjjciVxu5MKaBezDA3mwMf5hgk1nQy5c0B2M%2BlkGYc9wxxEEH2s93%2F0QM68azEwi9n8V%2FIlHpArzayvCNIMMOqisoGOqUBKzyvcPCyhhB%2F%2Biz7jWmHq6XohCnpZInsFHf3WlMuW5s%2F%2FfbdgUwv3rNpyhDjB1MFjgmW1BE%2FiPKivhnXmWsZLldzxMiamaRwRC2lCo1YHVXzKuXT53Il75pci0FkEldGhrfOqYU0gOlRTLPC0rOIYu8OCzBUIuillT6M7nFKduwGpqMWidBBmr3j9tlxyGf0fZB63SLcdlWo7T3Jv0qBnLpXGMg%2B&X-Amz-Signature=b8d34e6ba5129228d6b9ccde09c1534f9efabe1297021ef63adf9044d34ad8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

