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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVIVKZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6indg0gNRE%2F5MXBrN50GE6jdc%2Fkk9fdHk%2FuY6R15qAiEAtVrI6CEgCIZSiv9Ey721Pw4wfjSpt%2F88WsyNmBJpmAoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGU1Sy9ij9ooQBoFyrcAzpL2lwkgoS19f95TT%2F3Fu9AgJzgnnvP0Cq0JHGLFwE%2F09ON1r7wjuxiNHluewWQY0dBlwcBLOYxbyI0pcRtJv6Xuv2jduLAvHuxXN14BD4thb28dbsHnZRlU0%2Bi2lGXM1zP%2F2BxfSlGlmmoZBwqU81HEVN22Jo1tX2z%2FgEanMWWuMBFHGteKY9VNPBIuet%2BNbTo2v9mHPrusjwCB35nL7bOj1VCH3%2BzNcQAHiMYPb2BaFQx83h7SfHJwQM4Ob%2BdaRjg6GeC2WOpXGOmFWeDSbl8yEHYbR1Rvqjre6YdMeBKUQ9K%2B1RVZAUo6XXr1rE22wE%2FqEAQi6euuz81MbsGtd6bwEiS%2Bt4W8scsb1qcQ67fzPBSfjv4GQ2Tiu7%2FkNvwt723Gx5neY4NOtJN6DobEmICutZt0DxsfLP3dyHiYdDt0Dsp4M%2B7%2BwkYhQyFduc7j4x2TynRtaV954YjG173HL9Rj%2BqwBHm3bwi%2FXZzYd7FYCnNwjVPGmhr3XVlXLwr9JTCl5txjWaXblTCzIdDzWlIXQESSsUHxB6k3fCwH2AWJH1tS2ZcUpQwnbhBT%2FD1rjlJwwg8K3UqAruFPdTZPxs7R7S1cJ8LoGjXmYrBGQ0cigCLwgV4U5TQUDny1MLCfi8oGOqUB3TDH68ZAJX1YbgfVddmbGNG%2BQERfo%2FTvo9yix9xNdooXt4v32haj6JHGfwUIVxU0OHuNnJbePqAWtSRUv0EvifqC5QDZJV1PkJv%2FP0nWxSBaJsEh%2BHoWzr%2F5%2FDId%2BHI7fGC0rlPQmpMim3LRI2MNcA6wbcrpC%2FMWw600T9f5%2BHtHOSo7PrsTp5JDKNZWuV1Uy8WZt7%2BJ1a36xnBwqCIrVIHbSutM&X-Amz-Signature=1569d371fcc357f72bc6c24437fa2304e6d5e70f08bf1110235fe34722414146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VVIVKZ5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGa6indg0gNRE%2F5MXBrN50GE6jdc%2Fkk9fdHk%2FuY6R15qAiEAtVrI6CEgCIZSiv9Ey721Pw4wfjSpt%2F88WsyNmBJpmAoqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFGU1Sy9ij9ooQBoFyrcAzpL2lwkgoS19f95TT%2F3Fu9AgJzgnnvP0Cq0JHGLFwE%2F09ON1r7wjuxiNHluewWQY0dBlwcBLOYxbyI0pcRtJv6Xuv2jduLAvHuxXN14BD4thb28dbsHnZRlU0%2Bi2lGXM1zP%2F2BxfSlGlmmoZBwqU81HEVN22Jo1tX2z%2FgEanMWWuMBFHGteKY9VNPBIuet%2BNbTo2v9mHPrusjwCB35nL7bOj1VCH3%2BzNcQAHiMYPb2BaFQx83h7SfHJwQM4Ob%2BdaRjg6GeC2WOpXGOmFWeDSbl8yEHYbR1Rvqjre6YdMeBKUQ9K%2B1RVZAUo6XXr1rE22wE%2FqEAQi6euuz81MbsGtd6bwEiS%2Bt4W8scsb1qcQ67fzPBSfjv4GQ2Tiu7%2FkNvwt723Gx5neY4NOtJN6DobEmICutZt0DxsfLP3dyHiYdDt0Dsp4M%2B7%2BwkYhQyFduc7j4x2TynRtaV954YjG173HL9Rj%2BqwBHm3bwi%2FXZzYd7FYCnNwjVPGmhr3XVlXLwr9JTCl5txjWaXblTCzIdDzWlIXQESSsUHxB6k3fCwH2AWJH1tS2ZcUpQwnbhBT%2FD1rjlJwwg8K3UqAruFPdTZPxs7R7S1cJ8LoGjXmYrBGQ0cigCLwgV4U5TQUDny1MLCfi8oGOqUB3TDH68ZAJX1YbgfVddmbGNG%2BQERfo%2FTvo9yix9xNdooXt4v32haj6JHGfwUIVxU0OHuNnJbePqAWtSRUv0EvifqC5QDZJV1PkJv%2FP0nWxSBaJsEh%2BHoWzr%2F5%2FDId%2BHI7fGC0rlPQmpMim3LRI2MNcA6wbcrpC%2FMWw600T9f5%2BHtHOSo7PrsTp5JDKNZWuV1Uy8WZt7%2BJ1a36xnBwqCIrVIHbSutM&X-Amz-Signature=76252ad51fd314aaff764e790d257e31706c5f4a3bc82c3ad0e8f5f0c17a94dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

