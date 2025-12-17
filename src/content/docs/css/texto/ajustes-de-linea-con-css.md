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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LO4YE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkYf3B%2BvzLJhffyJGm6eK0coUs810NN3aHHSt5dSnKPAiEAqxeTY%2Bxx9nx1GnZi6y%2FNeBD6UpLDssBTKtWD3yxPgL8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuiuYnpM61JeZwL8CrcAz6%2BlXbuFVuDuPtTn3tmPQkKp3b6nC7WiuNdNdGkT%2FcIxiCNecR9AUKXT3aajDpYOBM%2FVTUxFjb7hLhAu0GOMptCAIArPRzReXaTraf1k4FLsLP0ITx5pfunrq0sRBWChPJbJVDVRx3hjoX0rjimwirQTgBimwf6Tvig1Cr9cDipazsp3Me20HaqFng4iYvgkePcIP1dIXRRFxojYrQ1tZGxszrOBdX7fszP4XonVmAEhrxBvEEbXEmg2JC1GAaWApA02w83TCr63Y2GOVBgzSRY4LDle0yQMSbE0xbhARCRUqvy%2B1IykTsAYErm0pDjCBAi1Brla1NHaZjt5YuviK1bEJ3b3CXFUwYAhRdT%2Bof6umaQMb4jZmEJST9ARMwUGId8Pds7wirk66cw8VXElIiFh2PXpsC3UP6Iwb4UOXnGCjR8ArkEnLlNTtZo4TrAMib9FTs1oHnxoLdYupz96u3skitPVWOysWnazdGtrD3d9cByU6l5IyP7Q45NltorIt7FzojyCpPf9e5TWdu9Je0IgtVNznucgyt732Ed7%2F%2BgTKGe7GOk7OYjD%2FrBg23kl9SnMWvxzNZ8aIEZv2LpBa7cU0su3VXO6nKa5VATuBNvujexc35OJmwQZo5TMPOdicoGOqUBcdAf%2B02pez2akICBtFDE6L1CGwzHhLs%2BCIsJvS5AEtd4j1eK%2Fxz%2BhU8HG4t5Uk%2Ft%2FBHNVgb%2FpGu6s8zzgOrdWmo57dJVZc8d8PPty3vTAEXnLw6QvbHGhP5AWs5buYff7CEmKOAXyEOaUhlH4yplVoCxV8iv07L5tsk8iF7Te7Fl62kYXxvSboSdpXJQH3qe%2B2zMSXKD%2FoGFAOBtvA9S%2B2P4oNrW&X-Amz-Signature=6ea10b8ab7c958c914735c6fd174496521d3ed93c70ba5db0126429ccb2b7b56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643LO4YE3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkYf3B%2BvzLJhffyJGm6eK0coUs810NN3aHHSt5dSnKPAiEAqxeTY%2Bxx9nx1GnZi6y%2FNeBD6UpLDssBTKtWD3yxPgL8q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDLuiuYnpM61JeZwL8CrcAz6%2BlXbuFVuDuPtTn3tmPQkKp3b6nC7WiuNdNdGkT%2FcIxiCNecR9AUKXT3aajDpYOBM%2FVTUxFjb7hLhAu0GOMptCAIArPRzReXaTraf1k4FLsLP0ITx5pfunrq0sRBWChPJbJVDVRx3hjoX0rjimwirQTgBimwf6Tvig1Cr9cDipazsp3Me20HaqFng4iYvgkePcIP1dIXRRFxojYrQ1tZGxszrOBdX7fszP4XonVmAEhrxBvEEbXEmg2JC1GAaWApA02w83TCr63Y2GOVBgzSRY4LDle0yQMSbE0xbhARCRUqvy%2B1IykTsAYErm0pDjCBAi1Brla1NHaZjt5YuviK1bEJ3b3CXFUwYAhRdT%2Bof6umaQMb4jZmEJST9ARMwUGId8Pds7wirk66cw8VXElIiFh2PXpsC3UP6Iwb4UOXnGCjR8ArkEnLlNTtZo4TrAMib9FTs1oHnxoLdYupz96u3skitPVWOysWnazdGtrD3d9cByU6l5IyP7Q45NltorIt7FzojyCpPf9e5TWdu9Je0IgtVNznucgyt732Ed7%2F%2BgTKGe7GOk7OYjD%2FrBg23kl9SnMWvxzNZ8aIEZv2LpBa7cU0su3VXO6nKa5VATuBNvujexc35OJmwQZo5TMPOdicoGOqUBcdAf%2B02pez2akICBtFDE6L1CGwzHhLs%2BCIsJvS5AEtd4j1eK%2Fxz%2BhU8HG4t5Uk%2Ft%2FBHNVgb%2FpGu6s8zzgOrdWmo57dJVZc8d8PPty3vTAEXnLw6QvbHGhP5AWs5buYff7CEmKOAXyEOaUhlH4yplVoCxV8iv07L5tsk8iF7Te7Fl62kYXxvSboSdpXJQH3qe%2B2zMSXKD%2FoGFAOBtvA9S%2B2P4oNrW&X-Amz-Signature=675ae7a1bef355eda4487b730730372f6437a76939f22e997370cb533881951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

