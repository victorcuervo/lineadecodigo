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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDEC3W2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FVNmDbtslK5mhZd7TYh%2BTa7h2LvEB%2F1V4AGNMdFS8mAIgWeBkMuFyJ8NinYEvLC3lc0xmGGfm1JQv8AxtEMOdCr8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE78qGS%2FRr%2FLWJ4UkCrcAxVZLLs9MSh2fOAAOG8zWXsn7ZB9M%2FDwkzz8gejkoo68fMyA8KngOOKdX%2B3tJFG6ocNB7%2B9ElPwETsEJdUIEWZ0kGsh59wr965SctdA2cT7S4FBbtDq6amO6SwHwV4C2tgUsx6Pp6iPSRhUqNgmg3gepbBFhNKDo7y8Klaxgnc5jmF5yL4kGH910LszguDTlaIoMJVzZl67WQZia40Mq%2BSwo%2BJM%2FlrCW%2BC2BiUrEW0VcFdp867ivKl8xBkrgAPKKuzap7Kxss7%2B4pI%2F7ov0xVbalA2NZaQ4B66u0Ohf1cQhLEVPeQuy%2F%2BwB0ICTtV%2FvUU3TlIOOc3h1y1ZyVI8cWokjvoLaOpXt1v2fdkLAdH9VWVoSkYyqYEdttPKkO%2FanZWBu3FIwfSbcPQglH3IIgfZuLdhqFDWYMRH6k5pB5Ifu%2BaYPrvXjkXBZnX%2FP5iZ5%2B2DESScnN8rHvh4V6MhyqjJAOxsQzRuS4RJ3tSdJrUBE3gCCxnSun%2BRc27Ue2Fw4Mw59q0OPn7U7Rz2U4skGaDTmdK3%2Biew3%2BR2dz2BtEvYC4Zvh5rI%2B3h6YcPX8W25FM6%2F12tmMNBz5T5QrQsayZf9AvEZ4oxTV0krjtYeH87MW9dbEhFlnfhjFoBYfeMPHFisoGOqUBYiIE4HBaZR0hYQE0YCFuIOWI4EB%2FKAd16ZDq6iWWnRxBZmZDZ%2BWmC2uV%2B0SkXSDCQ9xeW12k0ReqNRxd8fmPNQEx9ln%2BtInu21G2qSxsvvbeuaDU3Zw7y98Iz6Rovr2xtKgYUSEwqQqPZboRpOuUd3aXMJRApYBsPF1UcH14rIsTtOBlc2deEZVuSA1eHtH%2FQimVz5fMuDXlAvcM9N8ve%2FV5%2B6p6&X-Amz-Signature=9fe5d25e4e298f02ad3e611d2f09b34cfd13e12e14c113a08e2d42eb9ae44710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXDEC3W2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FVNmDbtslK5mhZd7TYh%2BTa7h2LvEB%2F1V4AGNMdFS8mAIgWeBkMuFyJ8NinYEvLC3lc0xmGGfm1JQv8AxtEMOdCr8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDE78qGS%2FRr%2FLWJ4UkCrcAxVZLLs9MSh2fOAAOG8zWXsn7ZB9M%2FDwkzz8gejkoo68fMyA8KngOOKdX%2B3tJFG6ocNB7%2B9ElPwETsEJdUIEWZ0kGsh59wr965SctdA2cT7S4FBbtDq6amO6SwHwV4C2tgUsx6Pp6iPSRhUqNgmg3gepbBFhNKDo7y8Klaxgnc5jmF5yL4kGH910LszguDTlaIoMJVzZl67WQZia40Mq%2BSwo%2BJM%2FlrCW%2BC2BiUrEW0VcFdp867ivKl8xBkrgAPKKuzap7Kxss7%2B4pI%2F7ov0xVbalA2NZaQ4B66u0Ohf1cQhLEVPeQuy%2F%2BwB0ICTtV%2FvUU3TlIOOc3h1y1ZyVI8cWokjvoLaOpXt1v2fdkLAdH9VWVoSkYyqYEdttPKkO%2FanZWBu3FIwfSbcPQglH3IIgfZuLdhqFDWYMRH6k5pB5Ifu%2BaYPrvXjkXBZnX%2FP5iZ5%2B2DESScnN8rHvh4V6MhyqjJAOxsQzRuS4RJ3tSdJrUBE3gCCxnSun%2BRc27Ue2Fw4Mw59q0OPn7U7Rz2U4skGaDTmdK3%2Biew3%2BR2dz2BtEvYC4Zvh5rI%2B3h6YcPX8W25FM6%2F12tmMNBz5T5QrQsayZf9AvEZ4oxTV0krjtYeH87MW9dbEhFlnfhjFoBYfeMPHFisoGOqUBYiIE4HBaZR0hYQE0YCFuIOWI4EB%2FKAd16ZDq6iWWnRxBZmZDZ%2BWmC2uV%2B0SkXSDCQ9xeW12k0ReqNRxd8fmPNQEx9ln%2BtInu21G2qSxsvvbeuaDU3Zw7y98Iz6Rovr2xtKgYUSEwqQqPZboRpOuUd3aXMJRApYBsPF1UcH14rIsTtOBlc2deEZVuSA1eHtH%2FQimVz5fMuDXlAvcM9N8ve%2FV5%2B6p6&X-Amz-Signature=8be59033c0c52a71f68bc191cb0d3e809978aa230cb0ed8754b2ce6e299fa3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

