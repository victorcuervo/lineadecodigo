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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFA7EFN3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8eXrsocp7lKP4EjDQMihUXzdHo9w6GaI4WxZ7Yt7HmgIgOB94AVkVoCVcc63QXTA%2Bu0rgQFiRAU5lKJc%2FCKIVwE0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNmziOnJRxWjm4UT%2ByrcA8CFKIgsTA5GjYb3DwIPgZ5BDJERxGTccTYa0WUdu8WADsLJMX8rJ%2BeiuszZpEn4uwJJcTP4qWQhXAnQdhpEJQKbgE4uYIUGNt8K%2F53WFrdbB5WT73LOJfvxVIi447wvtvCRx%2B6vhNaAJFYqQ0ouuNh7ZreyUrujCxH9oLRWR2a5h8VMKmjC%2FzB0rVHaCdvgFRhda13y5OC5nV44nJjVkO3adhnmUYM8yj%2FJlH4vr3qnKDl56hKEX9y3kOV8yYA3%2FA8KNvWddRuYCpJWaFy4Tx1300GyRLR5cWJ1MIRAZVEp6mdCEd930ghYMvlO826rQLx16yudxgCl1d4pnPaLsCqIXnLVevlG5pgMIvInU4Q17h8tBzg27dJOnv8tB79luM%2F0c6KNy4yFHnMDWJlA%2BjHsi8KhW0Gduc8nOmDCXKXS2NnLuncdle8wPxLxFIvSdLaKeqPka%2FBtZ1mmA5QTYJdL7kF%2BD6QvVc3IR3z94274mQ4L80pVCek1MH9IZCY4HphQATyOoR4KknQoaQ7qRfT3DETq50MSG4cXHXf790X8xMHZmKoghPrtBBO3PLNHmTWseBT8v%2FleTyrETIa9j8Ky4VgV97ScYm4R9Fv9EJQfIzIKlb12l3pj1NICMITSicoGOqUBWFXcJ32PQa3lxF2yhE5ZUZMqbWFra1PomZF0ZnbollWQ95qVtTGO3WKGijM748Rr7NNgC8DMRZmkYp0IQAAAL6BJRb70toU8DDLjAAw4bQEvwC9LLibDZsFhF%2BRTUmZJsM3ecin8VWtjNfJrvfy0dFF%2BNGyX1Yw7IVxk7Ft4Wjyks%2BhuyiAQttm3iUeqDpBoJb2TXvwB5lfSDEYoiKNnwUoHBbVt&X-Amz-Signature=a3c114909d73d84755a8b0abc6b3ab06fe15070335158c2cfd6519c2befcc537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFA7EFN3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8eXrsocp7lKP4EjDQMihUXzdHo9w6GaI4WxZ7Yt7HmgIgOB94AVkVoCVcc63QXTA%2Bu0rgQFiRAU5lKJc%2FCKIVwE0q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNmziOnJRxWjm4UT%2ByrcA8CFKIgsTA5GjYb3DwIPgZ5BDJERxGTccTYa0WUdu8WADsLJMX8rJ%2BeiuszZpEn4uwJJcTP4qWQhXAnQdhpEJQKbgE4uYIUGNt8K%2F53WFrdbB5WT73LOJfvxVIi447wvtvCRx%2B6vhNaAJFYqQ0ouuNh7ZreyUrujCxH9oLRWR2a5h8VMKmjC%2FzB0rVHaCdvgFRhda13y5OC5nV44nJjVkO3adhnmUYM8yj%2FJlH4vr3qnKDl56hKEX9y3kOV8yYA3%2FA8KNvWddRuYCpJWaFy4Tx1300GyRLR5cWJ1MIRAZVEp6mdCEd930ghYMvlO826rQLx16yudxgCl1d4pnPaLsCqIXnLVevlG5pgMIvInU4Q17h8tBzg27dJOnv8tB79luM%2F0c6KNy4yFHnMDWJlA%2BjHsi8KhW0Gduc8nOmDCXKXS2NnLuncdle8wPxLxFIvSdLaKeqPka%2FBtZ1mmA5QTYJdL7kF%2BD6QvVc3IR3z94274mQ4L80pVCek1MH9IZCY4HphQATyOoR4KknQoaQ7qRfT3DETq50MSG4cXHXf790X8xMHZmKoghPrtBBO3PLNHmTWseBT8v%2FleTyrETIa9j8Ky4VgV97ScYm4R9Fv9EJQfIzIKlb12l3pj1NICMITSicoGOqUBWFXcJ32PQa3lxF2yhE5ZUZMqbWFra1PomZF0ZnbollWQ95qVtTGO3WKGijM748Rr7NNgC8DMRZmkYp0IQAAAL6BJRb70toU8DDLjAAw4bQEvwC9LLibDZsFhF%2BRTUmZJsM3ecin8VWtjNfJrvfy0dFF%2BNGyX1Yw7IVxk7Ft4Wjyks%2BhuyiAQttm3iUeqDpBoJb2TXvwB5lfSDEYoiKNnwUoHBbVt&X-Amz-Signature=0082856be04778c908ab9f2a4d9315f2af5d06e3bcfbb31cf10db141c70ef846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

