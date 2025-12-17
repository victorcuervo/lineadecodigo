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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4L4GRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGStfgSHSW1HEBlV5D57kQr9sqFUWtmq4RfdDwXEY7SFAiEA3%2BmPoKZ9JeCC0706L8Oe9yRNwvuoTjHx1qaBYT%2FEWScq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNGhku3gUvUegivIeCrcAyUfxG3SaP5cdY%2B8l9Ocm%2FhZYzzgkGnFbecGkaZC79rI6HwF%2F9WVvyqATTVH80kok8w%2FopUgcZLLb7KNccMCveWQrGLkr1ZjZD%2Fws1%2Bo9zVD8FygM2GYKzmoiUoww%2BqgxCS5nMsS9mSqeY%2FEgYpyKxGepLmDhjXzSzKSSxES7A3S%2BT9oeKC%2Flx0zOY8uLUHE%2BtcQnH2%2BOc1FCG7XiQTQt3OeL9ysYm2ehPg0kJ421JKmyhdUX9RheLNxjNuB6WVlpQT5MhokfYwPyEjWeZqdbjpl9tw00M3ap2id8Erxeg2lozCLuC4%2B8xmPF%2B7dI2XIXnORn8bXyOUj2sf4w4FaIekLcw3nK8LH1n3hclJMDzPboKVQMeznDPesSjojftA8%2BVVDwP1Cdxcu1APkll5gy677zNZ9Q0obFOsAY9%2Bm9bvVxBruwG0SWJs%2FR2L58ni%2FLFub5GwMXao2xen6MoDmUY4ykCPKlw2QEBCX2U6Ftn2j0VbKQO3%2FQJYzqTZj3kNBOYtQQoOO%2BtiZFqrVeypdvi1Iuz1AbZO3ZUUPQonrE8vapP%2B8QWsiVsiE4erakh6ESUAdcgAAcfxAVMzzBUat6oxwM92O8A6ZzyeNIwFVS%2BRkIokx2Io29m79CpFkMNOViMoGOqUBFJkVJLVyNaakkhFsMMMG6FYT4OROtA6cRXgOuuVPm%2FqhS%2BJrJtwKtFdjutta6cKzd1Dd3kFTjmFATHUzM5MkCt4h6MI0qsHhplbx%2F%2FYQjI0ycmlDK%2BGMwxADweScNrgEmpl7TiYjICMV0ERKYJy7Ul8L37sS3pyHroPOMmNIOTxAnpvvyR9wjwltckhxh9%2BxoqcUDfeVR5Kx3bfj74wwhsPmSmeh&X-Amz-Signature=1f6a0da0e3dd3611959888359d1ae549708df52c40fd498536cb19c07151ae8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R4L4GRL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGStfgSHSW1HEBlV5D57kQr9sqFUWtmq4RfdDwXEY7SFAiEA3%2BmPoKZ9JeCC0706L8Oe9yRNwvuoTjHx1qaBYT%2FEWScq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNGhku3gUvUegivIeCrcAyUfxG3SaP5cdY%2B8l9Ocm%2FhZYzzgkGnFbecGkaZC79rI6HwF%2F9WVvyqATTVH80kok8w%2FopUgcZLLb7KNccMCveWQrGLkr1ZjZD%2Fws1%2Bo9zVD8FygM2GYKzmoiUoww%2BqgxCS5nMsS9mSqeY%2FEgYpyKxGepLmDhjXzSzKSSxES7A3S%2BT9oeKC%2Flx0zOY8uLUHE%2BtcQnH2%2BOc1FCG7XiQTQt3OeL9ysYm2ehPg0kJ421JKmyhdUX9RheLNxjNuB6WVlpQT5MhokfYwPyEjWeZqdbjpl9tw00M3ap2id8Erxeg2lozCLuC4%2B8xmPF%2B7dI2XIXnORn8bXyOUj2sf4w4FaIekLcw3nK8LH1n3hclJMDzPboKVQMeznDPesSjojftA8%2BVVDwP1Cdxcu1APkll5gy677zNZ9Q0obFOsAY9%2Bm9bvVxBruwG0SWJs%2FR2L58ni%2FLFub5GwMXao2xen6MoDmUY4ykCPKlw2QEBCX2U6Ftn2j0VbKQO3%2FQJYzqTZj3kNBOYtQQoOO%2BtiZFqrVeypdvi1Iuz1AbZO3ZUUPQonrE8vapP%2B8QWsiVsiE4erakh6ESUAdcgAAcfxAVMzzBUat6oxwM92O8A6ZzyeNIwFVS%2BRkIokx2Io29m79CpFkMNOViMoGOqUBFJkVJLVyNaakkhFsMMMG6FYT4OROtA6cRXgOuuVPm%2FqhS%2BJrJtwKtFdjutta6cKzd1Dd3kFTjmFATHUzM5MkCt4h6MI0qsHhplbx%2F%2FYQjI0ycmlDK%2BGMwxADweScNrgEmpl7TiYjICMV0ERKYJy7Ul8L37sS3pyHroPOMmNIOTxAnpvvyR9wjwltckhxh9%2BxoqcUDfeVR5Kx3bfj74wwhsPmSmeh&X-Amz-Signature=afdcfa77a1bfea9b673c5eb67defa47d88ecac097660d05d2b29526446c02ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

