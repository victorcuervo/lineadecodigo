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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGZUWI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH9uWpqvNt6FfIeh0aNHJ%2FTMbAcWhcANdKEJbrx%2FGn5AiBpO1B%2BgBsNOxLoXt5HW5k0MWwtB8LZZrVI3MXCR2ln%2Fir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0Xv1kvYKVP7wXLF%2BKtwDBEwYTLaQCat8PGKOfWjy7b8tQgxzuchEnom2wHMyGzWn2lYeZLnsGFbDuKUAjNOt0hgGqn4y6T69TWJprQOBnJflBZRdT0CoisbaoCSg3u1OvVK9wKjX5WZCche9z%2FNSyuQY9qTjz6jmsAI8VHP5AaDGb9K2nMFeuRGx84K32vGYR6Tt6zj1rhAqV6BWrLPgVc9FxLByWKbx3s%2F0iOrBT%2F9n0%2BBWBAunOg1VAFZu6Z8ZFBisujKiTcVsP%2BTDe1BBd2Zcy35pkxpgr8FEmUA3mOIDvV%2FZSetCouJAPQtaUMcZzeRCVd1QwTLAg21ofwyQZH6jx5zZ2noms%2FhkHPDr403ll3lR%2FsAiBQUup%2FAOdYul7HPdp4YvR07hkumtinhEnVrSrQI16zClTJ7Cu%2FoPPPAdyfsWmF81WGYh8Kr1m6%2FIiiViNDKEQAqKf%2Fy6A%2Frce3gdG6KyMAJZuZoQ22fHl5bmR0ustXYgWWc6orZqOYyYuTlxz%2BNsFdyFNB2xmRVDAc33DvCP8pGcLHC20a%2B0eTii1i9IwdtA%2FZlQxb2hI9Kg3KevdNJAdEQoO0StJqpUmvK2NZmjnNqsU4ip3bJBANawgs1R7l3b6obuTD29Zu58lbxHmOS86F%2Ffhx0w1LKIygY6pgGmDHEnrA%2Fl5Vn00V3gqj8IgDKG8tSZFl2RLZ88GnrZThFBjsf%2BCPaIfBHNf%2BS6gc4HIhNB%2FcjLn2V%2BCjHfaDGutBiiw93xnckpvmDy9aiHEaP898w7wQCR1Upp%2Bsb7MBhd4ukso3wT%2FpzO0DFwncm6z96VZEFkRZr904SguctRH9Gv8c6WqQeav3vxq%2FPzK4jQuTsIP70ylvucOdkOUexV5rFpNMAi&X-Amz-Signature=e30119600c4a6a2f42bb94f5c2ab6a351c0f84184bee299700f5b603acce9d40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGZUWI6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEH9uWpqvNt6FfIeh0aNHJ%2FTMbAcWhcANdKEJbrx%2FGn5AiBpO1B%2BgBsNOxLoXt5HW5k0MWwtB8LZZrVI3MXCR2ln%2Fir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIM0Xv1kvYKVP7wXLF%2BKtwDBEwYTLaQCat8PGKOfWjy7b8tQgxzuchEnom2wHMyGzWn2lYeZLnsGFbDuKUAjNOt0hgGqn4y6T69TWJprQOBnJflBZRdT0CoisbaoCSg3u1OvVK9wKjX5WZCche9z%2FNSyuQY9qTjz6jmsAI8VHP5AaDGb9K2nMFeuRGx84K32vGYR6Tt6zj1rhAqV6BWrLPgVc9FxLByWKbx3s%2F0iOrBT%2F9n0%2BBWBAunOg1VAFZu6Z8ZFBisujKiTcVsP%2BTDe1BBd2Zcy35pkxpgr8FEmUA3mOIDvV%2FZSetCouJAPQtaUMcZzeRCVd1QwTLAg21ofwyQZH6jx5zZ2noms%2FhkHPDr403ll3lR%2FsAiBQUup%2FAOdYul7HPdp4YvR07hkumtinhEnVrSrQI16zClTJ7Cu%2FoPPPAdyfsWmF81WGYh8Kr1m6%2FIiiViNDKEQAqKf%2Fy6A%2Frce3gdG6KyMAJZuZoQ22fHl5bmR0ustXYgWWc6orZqOYyYuTlxz%2BNsFdyFNB2xmRVDAc33DvCP8pGcLHC20a%2B0eTii1i9IwdtA%2FZlQxb2hI9Kg3KevdNJAdEQoO0StJqpUmvK2NZmjnNqsU4ip3bJBANawgs1R7l3b6obuTD29Zu58lbxHmOS86F%2Ffhx0w1LKIygY6pgGmDHEnrA%2Fl5Vn00V3gqj8IgDKG8tSZFl2RLZ88GnrZThFBjsf%2BCPaIfBHNf%2BS6gc4HIhNB%2FcjLn2V%2BCjHfaDGutBiiw93xnckpvmDy9aiHEaP898w7wQCR1Upp%2Bsb7MBhd4ukso3wT%2FpzO0DFwncm6z96VZEFkRZr904SguctRH9Gv8c6WqQeav3vxq%2FPzK4jQuTsIP70ylvucOdkOUexV5rFpNMAi&X-Amz-Signature=33ec721e1eb158bb016559decd12f6064664584489d44fad3de14db952ad4110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

