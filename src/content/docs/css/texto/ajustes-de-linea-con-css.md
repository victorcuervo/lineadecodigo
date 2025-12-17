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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJLDGDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8p2fxwmPqC9qd6pZN0PQq%2Bf7EuADQ4dEGiarGLt3mrQIgUCRmUk6ofbAw7R87hAFubojSRaw%2BzxQQ0V%2FewXhgDIUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGHlYNclNf%2BlJldGircA2qdBpd2FloGaQfCHHJJZXULuT48OALIZMGxy2Hw5ZBpd8ao%2FX%2FW7V%2B6xAzwvoEnsir1xgNhHRpSfiFikJrbPym3L5glP9XlXUFByzwKdizjAwpNZFOyp6R3EA%2FAL6nexCJoszqf3NsYHzpGJM7l0sjeDyhkIRW3zEEuZPbwU7Br36XjogUKCmoqQpYsSu613xL0XWpf9pErAds28Am69Vzf3OwGFK33KcxHSHc10pEtca%2FNF5FGDyyLDoC2KfkzKmJvmJ%2FJnsk%2FDB%2BoHRN%2BasyR2lwz08qgNCpvZgnS1wDehXm32p6x7tPAVH6xFla22pIHVgdnv%2FYUXlMF5F0Yq5uxao5GSrr0IHdMmmGF0Mae5RbOlysd72cOgh7ha2R1SS1ZCe9LFKiG%2Fc7SUGfCPZwEjU4AOV07Wu135jJLgMqcg2WUD2Z5Xhx9XphqM6i7l0XHp%2F3u6ST23G3gpRzAmw1trqg9huxuPvXColPjHVXWi7%2FUd7MOyW6X3JKbGyWoYianqH%2B5q0VCabjTcWinzOcLGALg68Qis%2B%2FbCoIEMao0XM3TipWPJBbPshWcJUXQcYQweSbqYP0xMvs5Re9WugZhbpe3N5QWFEHWepxb%2Fq5q4H7SugaqsGkCU8C4MN%2BAi8oGOqUBMfzF2PhWVXiX%2FMoNLhwsYkiTobz1oQ37xgIhx9pN%2BcILsxAxVPiwxgQz%2F5ocy5wYPJr7VP7Xhkcs6CqAv6FryHzlP16IBdtGW%2B60KftGlM5vnw4Zjk2MGeB1EgPIq3l%2BpKFFJGMXs50ENFGUnWykKRT39%2Fhh10JxKX3E3FhSMV45P%2FmERFNgBrcb%2FGPi4tTo%2B66CxNx7EtvIWTiNxxwtHcLlYKH4&X-Amz-Signature=f4c676826093c91cb01d06527f9ee7b94c9766da0ec9f9693c8a2e82c3ecb28b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJLDGDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8p2fxwmPqC9qd6pZN0PQq%2Bf7EuADQ4dEGiarGLt3mrQIgUCRmUk6ofbAw7R87hAFubojSRaw%2BzxQQ0V%2FewXhgDIUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBGHlYNclNf%2BlJldGircA2qdBpd2FloGaQfCHHJJZXULuT48OALIZMGxy2Hw5ZBpd8ao%2FX%2FW7V%2B6xAzwvoEnsir1xgNhHRpSfiFikJrbPym3L5glP9XlXUFByzwKdizjAwpNZFOyp6R3EA%2FAL6nexCJoszqf3NsYHzpGJM7l0sjeDyhkIRW3zEEuZPbwU7Br36XjogUKCmoqQpYsSu613xL0XWpf9pErAds28Am69Vzf3OwGFK33KcxHSHc10pEtca%2FNF5FGDyyLDoC2KfkzKmJvmJ%2FJnsk%2FDB%2BoHRN%2BasyR2lwz08qgNCpvZgnS1wDehXm32p6x7tPAVH6xFla22pIHVgdnv%2FYUXlMF5F0Yq5uxao5GSrr0IHdMmmGF0Mae5RbOlysd72cOgh7ha2R1SS1ZCe9LFKiG%2Fc7SUGfCPZwEjU4AOV07Wu135jJLgMqcg2WUD2Z5Xhx9XphqM6i7l0XHp%2F3u6ST23G3gpRzAmw1trqg9huxuPvXColPjHVXWi7%2FUd7MOyW6X3JKbGyWoYianqH%2B5q0VCabjTcWinzOcLGALg68Qis%2B%2FbCoIEMao0XM3TipWPJBbPshWcJUXQcYQweSbqYP0xMvs5Re9WugZhbpe3N5QWFEHWepxb%2Fq5q4H7SugaqsGkCU8C4MN%2BAi8oGOqUBMfzF2PhWVXiX%2FMoNLhwsYkiTobz1oQ37xgIhx9pN%2BcILsxAxVPiwxgQz%2F5ocy5wYPJr7VP7Xhkcs6CqAv6FryHzlP16IBdtGW%2B60KftGlM5vnw4Zjk2MGeB1EgPIq3l%2BpKFFJGMXs50ENFGUnWykKRT39%2Fhh10JxKX3E3FhSMV45P%2FmERFNgBrcb%2FGPi4tTo%2B66CxNx7EtvIWTiNxxwtHcLlYKH4&X-Amz-Signature=2791f5b80504a5a2f669dca52c0a225ca8320a48f2b367f7d53329264e6fca13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

