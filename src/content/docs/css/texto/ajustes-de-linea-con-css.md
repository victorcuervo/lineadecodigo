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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEN4IGV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuvvzGWGLWErK1H5nL0TM6E598heTuMq4iH%2BpBaPGGewIgOn6LAfSD8rLdIwsa6vLMuFqxT04cv76oQURISbWsMVkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECes5eLku9Kg4wP%2BCrcA9Uh3JUKqxzPMxweK1EvFATXfB6%2FaSKXQZMsSp0V30%2B%2BuY3f%2B7Rr1uE4ndRZW0UEIHV2bcfRapXyebqd2Bx0trxG2B7%2Bzm1P4ExPJySYPTRPxDJvBx%2BYJKOyN%2FJ5LudAguW48Gszi7SjpMkO1i6vXUuC4Q5mlHZ4affqN6lXE9oOBofaEyvKDoaFTV83W6EHpdokbl%2BJ%2FdvfxXikr6fLej%2BmZy9p1eOmVgcP%2FPpT94g%2FFApuS33NSMXGOaESyTYqANonQMRjSUHHEe6yYZwghJ7Hqg7rfi319D2oB3W5kW1KOl9siZ0qMstmucXPkkBs%2FBDjYeD67btZNJLXwgvNszDqfVf4moiMG1YwPNkTUvScXEjoaVYQJAIIUPu128TE6vH%2FsEW2C3h1iL9BQ8voiaZh7rsWCuPJ33505v0zblikPqXmhf%2Fx%2B7YfAukZ5Bd65WH1db3hydVqc2TKZiIICg82dD%2FWcr4larsfC8S0sUXZIzCkvLY1X8FL2K4KumcjEP%2BOyILgFNTNWbLZaoQiJpPFvz6tbNGUk9RaIam1r7C99SxhYeFkNtMFzF1Y3k7ITT0JtZ6yaEvSvXIsiXWooebbdW2HMlJGSw1X54Ad%2BT9s30194a14vBLA5n2FMICgi8oGOqUBuOPQPp7%2Fzvd8jOvxoXNvAAQ0HTlAfNCw7cOdEktGZOItzHaplGGKl2GgxvoLqvGuSynhFrFOKmrphv1c6gLsoRzKHw6Z5PJahTl6MTv7WCyfPJiHtrnyLNzqaWWvl087QXcdYRbDWDchKH2tJi9abPFchKAWF88dX%2BNYO%2BmSFvgRNuyBjTS1VteX5LpKwBAILIBkSB9K0LOQznpFcoMmcK9euUX7&X-Amz-Signature=d2617ad076ac4e5a603421696f3f0c11b2874c60196970c4c4906e3bcb6f8469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZEN4IGV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuvvzGWGLWErK1H5nL0TM6E598heTuMq4iH%2BpBaPGGewIgOn6LAfSD8rLdIwsa6vLMuFqxT04cv76oQURISbWsMVkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECes5eLku9Kg4wP%2BCrcA9Uh3JUKqxzPMxweK1EvFATXfB6%2FaSKXQZMsSp0V30%2B%2BuY3f%2B7Rr1uE4ndRZW0UEIHV2bcfRapXyebqd2Bx0trxG2B7%2Bzm1P4ExPJySYPTRPxDJvBx%2BYJKOyN%2FJ5LudAguW48Gszi7SjpMkO1i6vXUuC4Q5mlHZ4affqN6lXE9oOBofaEyvKDoaFTV83W6EHpdokbl%2BJ%2FdvfxXikr6fLej%2BmZy9p1eOmVgcP%2FPpT94g%2FFApuS33NSMXGOaESyTYqANonQMRjSUHHEe6yYZwghJ7Hqg7rfi319D2oB3W5kW1KOl9siZ0qMstmucXPkkBs%2FBDjYeD67btZNJLXwgvNszDqfVf4moiMG1YwPNkTUvScXEjoaVYQJAIIUPu128TE6vH%2FsEW2C3h1iL9BQ8voiaZh7rsWCuPJ33505v0zblikPqXmhf%2Fx%2B7YfAukZ5Bd65WH1db3hydVqc2TKZiIICg82dD%2FWcr4larsfC8S0sUXZIzCkvLY1X8FL2K4KumcjEP%2BOyILgFNTNWbLZaoQiJpPFvz6tbNGUk9RaIam1r7C99SxhYeFkNtMFzF1Y3k7ITT0JtZ6yaEvSvXIsiXWooebbdW2HMlJGSw1X54Ad%2BT9s30194a14vBLA5n2FMICgi8oGOqUBuOPQPp7%2Fzvd8jOvxoXNvAAQ0HTlAfNCw7cOdEktGZOItzHaplGGKl2GgxvoLqvGuSynhFrFOKmrphv1c6gLsoRzKHw6Z5PJahTl6MTv7WCyfPJiHtrnyLNzqaWWvl087QXcdYRbDWDchKH2tJi9abPFchKAWF88dX%2BNYO%2BmSFvgRNuyBjTS1VteX5LpKwBAILIBkSB9K0LOQznpFcoMmcK9euUX7&X-Amz-Signature=b5ebdac1af2d74632d668a7c42d0a6f4e8a4d34f8df409ae48f20df72957008e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

