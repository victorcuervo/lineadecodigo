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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OX4FIGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLJ%2Fhsw28IRuKeilMGAq%2Bn7s97E0p%2FwQxHQvgiQozeAiBSF7V%2FIoPXRvqfaHTRFj7yZEP0QToQKlsWI0%2F11gez5Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMoDiAxX5oscaoTM%2FTKtwD23Bxmwh5ztWlzKAg55nYsh8sdfz0Bvr8Px9M9zCO8%2BK6C28MSFmud14DXjgufPpRIRxlMVt3fn1M6MeaRKZ%2FDNXKwVwu0%2Bo4GsSyN0NtDdbfVQkcHk0b6phvtxApciqsw9PN7pwFAWHFE4vKMWh7sRQeW3QQlEj%2BT%2BHRx7pV94sX5bpj%2F0s0IsZmPkHXcntz2jrTVYypWWpyZkxIuepmmQjTk3jX5LgR5U0f1w4osi9p4emg%2F%2BUpeLGFTdMDjriX6w4NlUsbRObz%2FeqfUGdvg4AFwD37PbNybH82jQyLkMiE%2Fk9T%2BWY%2BowxFqVfzNvCBM4tyKI5NYbwaktghWa%2F2UcG1zQUZgyg4Q5Ur4hjrvjW5O4mBlYlRxlwFiLlsSdXkeVKmH2pczdKY%2FMNES%2Ftbil7LNWFA0F4vIEEB%2BnpcHv7b%2FAfXGRXxNEBIeA4cihvskqxi4EZQVlSOSShBCSOgaRc6i%2B4Zeb6PL2mkR%2FA0KeOVZCU7UlEtzx8HUzUTfGm49XcafMJff9LKT3%2Fr3tgCo3dlBX2tCxjcMju%2FN%2FU6Aegw91ywupI7TA0y7y7jhlXLDWYf%2BleBIJn%2BJuZzGm8vShMvfgOnQOc%2BF7Tj39zvDm3yPiYFmiGQPU%2FNbHUw2LKIygY6pgEWlapt%2FIIM9GlssFr6AKCPj4izkfa9r%2BZTXl2OIYVIetkv546XNLpxOgTJu45nzoFbd1ZYpYRZS9J28OUKWrsISk792OSccF6DYDKfr2TY9QrUz7%2F0Iwuv6xC1%2BEzLklUD4y5QMTtj1BRUdS31JPNcQKgQwC1qPfoZiBEYvZAMt0IujBDhHZFYyo8Psx4a5N4h%2FCjLUPNrfYhDnG%2F%2Fto3A4BxFVDur&X-Amz-Signature=41d6bb2404f6ba2c2249025e41310847e3c86cb6f63310a69055f05321e911dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OX4FIGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYLJ%2Fhsw28IRuKeilMGAq%2Bn7s97E0p%2FwQxHQvgiQozeAiBSF7V%2FIoPXRvqfaHTRFj7yZEP0QToQKlsWI0%2F11gez5Sr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMoDiAxX5oscaoTM%2FTKtwD23Bxmwh5ztWlzKAg55nYsh8sdfz0Bvr8Px9M9zCO8%2BK6C28MSFmud14DXjgufPpRIRxlMVt3fn1M6MeaRKZ%2FDNXKwVwu0%2Bo4GsSyN0NtDdbfVQkcHk0b6phvtxApciqsw9PN7pwFAWHFE4vKMWh7sRQeW3QQlEj%2BT%2BHRx7pV94sX5bpj%2F0s0IsZmPkHXcntz2jrTVYypWWpyZkxIuepmmQjTk3jX5LgR5U0f1w4osi9p4emg%2F%2BUpeLGFTdMDjriX6w4NlUsbRObz%2FeqfUGdvg4AFwD37PbNybH82jQyLkMiE%2Fk9T%2BWY%2BowxFqVfzNvCBM4tyKI5NYbwaktghWa%2F2UcG1zQUZgyg4Q5Ur4hjrvjW5O4mBlYlRxlwFiLlsSdXkeVKmH2pczdKY%2FMNES%2Ftbil7LNWFA0F4vIEEB%2BnpcHv7b%2FAfXGRXxNEBIeA4cihvskqxi4EZQVlSOSShBCSOgaRc6i%2B4Zeb6PL2mkR%2FA0KeOVZCU7UlEtzx8HUzUTfGm49XcafMJff9LKT3%2Fr3tgCo3dlBX2tCxjcMju%2FN%2FU6Aegw91ywupI7TA0y7y7jhlXLDWYf%2BleBIJn%2BJuZzGm8vShMvfgOnQOc%2BF7Tj39zvDm3yPiYFmiGQPU%2FNbHUw2LKIygY6pgEWlapt%2FIIM9GlssFr6AKCPj4izkfa9r%2BZTXl2OIYVIetkv546XNLpxOgTJu45nzoFbd1ZYpYRZS9J28OUKWrsISk792OSccF6DYDKfr2TY9QrUz7%2F0Iwuv6xC1%2BEzLklUD4y5QMTtj1BRUdS31JPNcQKgQwC1qPfoZiBEYvZAMt0IujBDhHZFYyo8Psx4a5N4h%2FCjLUPNrfYhDnG%2F%2Fto3A4BxFVDur&X-Amz-Signature=85f540b5ab944999f1138f58ef77d377c318f2186eeb4efed1c47c3cdab28a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

