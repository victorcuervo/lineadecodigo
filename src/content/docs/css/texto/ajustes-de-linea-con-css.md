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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5N7M6D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F0upAQNl7ieL8m5SmhCXByxjFr%2FavXAEHBcZhDv%2FPTAiAl4TQnp3Ss%2FpswF%2BHf1w8jtlnV6uNoQC3l7Id6ISZKpyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMugWdTxC%2FXnZMbDxAKtwD1cnH5qJN274R6Us7e5X8fgrgoWYl4MKqi5lVXNjmR83oQd6GBaB%2BZXs2WOEcNDtNOcHWr9yM7bn7OhZF5yK6icboipYeTLZeSn0gvdso4guxzB6dwxwvnhpnlUL96ZfHVdnQUUfkmxrY9V53byI%2FCS%2F%2FciHRB17O9%2Fil7Ba1TlILsiFGkt3%2BjA22BYw1tkTlb1p%2F4NWjnPlkgxAJBlIh11EHHHOOEAdSw962pCMrlOsO2u2V%2F31bcb97Etl%2Bs0dEEEzVcCCYNQAt4jD1s6uoq5fhoyhggwXv1NX3hr5jU4JFMN3YBLYmcBdkRW5M7zaIgNYdJ567W3TQ3DzeRlUCvgVbG7KyvqxUQuWDm%2Bs3f0zrhkrt7GvBjXjYHtgesotXxJxZGnEiGgBhmIbvXA9YgO8Vnvd%2FlKUSEJ%2FX78yidtPkmTeWXVYXKmbANsRVObiKPNqhDuIUImhZHsjkzWu1zlN6lxNV59RyIg2d%2B1mUiOtaSAuRzFcMj3jUuJ3qqbt22T2H0iSR%2B74QOhL524M1Zm0PF1NE7FFw26%2F7L7DnLC784bK7IGbxIwhxQa%2Flfxp4ESSyVTSdd2upgmbL2MJk4MR9Y41BdaEziZ6LvyKj5v0ulRq4BCWve1Wg4PIwgPGJygY6pgEZIfsaJivyJLi5HUpuWVpixmgoJGsHH3RnJvhTzKw1Ooq4xXdUZtBiwLZclwVeU8SEph4h9qUDfKz09vT80N8ubKIexJ9pajDwg9ifGu3jMk76yk5vpSfn7cJ6ESxPYaaS0uM%2F338f8RlydvQRpaga0nm0LiLxXrOU0s26rpb3txgLYy%2BcaU0lWLVl6DUWYaFrExeo%2BTWF9leMs19fgWOPyvnI%2FuZX&X-Amz-Signature=54ae14e2ccbf6102258b9dcab5bc41acb1cec547c6648d09770e3532a6543759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS5N7M6D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2F0upAQNl7ieL8m5SmhCXByxjFr%2FavXAEHBcZhDv%2FPTAiAl4TQnp3Ss%2FpswF%2BHf1w8jtlnV6uNoQC3l7Id6ISZKpyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMugWdTxC%2FXnZMbDxAKtwD1cnH5qJN274R6Us7e5X8fgrgoWYl4MKqi5lVXNjmR83oQd6GBaB%2BZXs2WOEcNDtNOcHWr9yM7bn7OhZF5yK6icboipYeTLZeSn0gvdso4guxzB6dwxwvnhpnlUL96ZfHVdnQUUfkmxrY9V53byI%2FCS%2F%2FciHRB17O9%2Fil7Ba1TlILsiFGkt3%2BjA22BYw1tkTlb1p%2F4NWjnPlkgxAJBlIh11EHHHOOEAdSw962pCMrlOsO2u2V%2F31bcb97Etl%2Bs0dEEEzVcCCYNQAt4jD1s6uoq5fhoyhggwXv1NX3hr5jU4JFMN3YBLYmcBdkRW5M7zaIgNYdJ567W3TQ3DzeRlUCvgVbG7KyvqxUQuWDm%2Bs3f0zrhkrt7GvBjXjYHtgesotXxJxZGnEiGgBhmIbvXA9YgO8Vnvd%2FlKUSEJ%2FX78yidtPkmTeWXVYXKmbANsRVObiKPNqhDuIUImhZHsjkzWu1zlN6lxNV59RyIg2d%2B1mUiOtaSAuRzFcMj3jUuJ3qqbt22T2H0iSR%2B74QOhL524M1Zm0PF1NE7FFw26%2F7L7DnLC784bK7IGbxIwhxQa%2Flfxp4ESSyVTSdd2upgmbL2MJk4MR9Y41BdaEziZ6LvyKj5v0ulRq4BCWve1Wg4PIwgPGJygY6pgEZIfsaJivyJLi5HUpuWVpixmgoJGsHH3RnJvhTzKw1Ooq4xXdUZtBiwLZclwVeU8SEph4h9qUDfKz09vT80N8ubKIexJ9pajDwg9ifGu3jMk76yk5vpSfn7cJ6ESxPYaaS0uM%2F338f8RlydvQRpaga0nm0LiLxXrOU0s26rpb3txgLYy%2BcaU0lWLVl6DUWYaFrExeo%2BTWF9leMs19fgWOPyvnI%2FuZX&X-Amz-Signature=74038e7ef815eaf67413fb103d20e2a21f47e870cb80b15d08613b85bb17eee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

