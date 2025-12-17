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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INP3E5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzR8LpdWlh78ULMRt73xiqTx98K3Kfi40vc1kaCQcrFAiEArHx2XS7%2FB3A%2FJS9248J3BmTmAINwyiUoiCuaOgctorcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdCv123gDQFFzNzaircAzmZiQgO%2F%2B1kcFcMxV%2BUHXYm5%2FaKlSmoYf6hETsKvq3pfTq8kDp%2BGhAdaokxDDgPawnRTo8bZsjSwRsl0k6f1Icbimr84Jx1Ccio0U5K5duf2l6%2FGPUhQHD2EiegynaZMIhcWU4snXlnkphDK5aeUsAnpH70GUKQsd5TQF%2FWMkkpxJYaLHX%2B%2BRZU9zpXMD%2FmBzAS7C9MZRitR2cIQL3l7v5ZyDEdBu4WqoA1HbTYxuVLN0DZGtCxQpA5DiQS3ehrw9lxsmqb1fePx%2Bvnh%2BazmYXpPRiryZgpDNUqk9udojiMdDNJUEAlgZo2EkH9wVaSWgwyo2uNuFslHQQ4wqDJOD10uzDbDtcWiB4BfRTZUTBWUuoAIWBWqbXRsoNo3supUfucmAKfgCTx4ZOGVAxK1O%2B7WHvwCaknHhgC73EwyNkr0EGPM246u8C7Vsb6kUCzo7EMVzzmDHaeEXKqUyC5kqqVwU%2BoPyjT3fgO%2FWZUQDBq%2BLan%2Beph8gEBNp%2B3vMgk0l9MKwTPsVgXlVf8RcCQq6yym1oXoNBvRI9R6ztgMSNgH55pTBpvq8hpBlv2N%2FGXH7Gy8ryGU%2BiKijCEdELxXtCb43dr0a4PiGIj9aSrA%2F8c7TIrfQPX%2FeEmBX6pMO2gi8oGOqUBJE7G%2Bg%2FzfSL2qBFZLJL%2Ft91F13kbYYP0UTV5wdlubo9gBmL5evxEGtSxmoBX0esaUMw5ahY5Bbyo9cuO4hpOPoENtwssAXiC7X9PgXPyTCuWGfeo7H4ztcxVDVhFDzn063ij7C9E%2FQiG4cJB3JuFAoT4s75Mgb8TRAuVg%2FYfFsJvrBVFti6kDejtfgLY7SCEHnZaMyW3BneFL%2BxDVoSNNsjZOAiC&X-Amz-Signature=2b7708cb004a89be1d386a18824ed78ba65cb5b8fa03ef5f069614906c2c3e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663INP3E5N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGzR8LpdWlh78ULMRt73xiqTx98K3Kfi40vc1kaCQcrFAiEArHx2XS7%2FB3A%2FJS9248J3BmTmAINwyiUoiCuaOgctorcqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdCv123gDQFFzNzaircAzmZiQgO%2F%2B1kcFcMxV%2BUHXYm5%2FaKlSmoYf6hETsKvq3pfTq8kDp%2BGhAdaokxDDgPawnRTo8bZsjSwRsl0k6f1Icbimr84Jx1Ccio0U5K5duf2l6%2FGPUhQHD2EiegynaZMIhcWU4snXlnkphDK5aeUsAnpH70GUKQsd5TQF%2FWMkkpxJYaLHX%2B%2BRZU9zpXMD%2FmBzAS7C9MZRitR2cIQL3l7v5ZyDEdBu4WqoA1HbTYxuVLN0DZGtCxQpA5DiQS3ehrw9lxsmqb1fePx%2Bvnh%2BazmYXpPRiryZgpDNUqk9udojiMdDNJUEAlgZo2EkH9wVaSWgwyo2uNuFslHQQ4wqDJOD10uzDbDtcWiB4BfRTZUTBWUuoAIWBWqbXRsoNo3supUfucmAKfgCTx4ZOGVAxK1O%2B7WHvwCaknHhgC73EwyNkr0EGPM246u8C7Vsb6kUCzo7EMVzzmDHaeEXKqUyC5kqqVwU%2BoPyjT3fgO%2FWZUQDBq%2BLan%2Beph8gEBNp%2B3vMgk0l9MKwTPsVgXlVf8RcCQq6yym1oXoNBvRI9R6ztgMSNgH55pTBpvq8hpBlv2N%2FGXH7Gy8ryGU%2BiKijCEdELxXtCb43dr0a4PiGIj9aSrA%2F8c7TIrfQPX%2FeEmBX6pMO2gi8oGOqUBJE7G%2Bg%2FzfSL2qBFZLJL%2Ft91F13kbYYP0UTV5wdlubo9gBmL5evxEGtSxmoBX0esaUMw5ahY5Bbyo9cuO4hpOPoENtwssAXiC7X9PgXPyTCuWGfeo7H4ztcxVDVhFDzn063ij7C9E%2FQiG4cJB3JuFAoT4s75Mgb8TRAuVg%2FYfFsJvrBVFti6kDejtfgLY7SCEHnZaMyW3BneFL%2BxDVoSNNsjZOAiC&X-Amz-Signature=0b65b6f13688a1d99245d4a13bc94adfd95a7962caeb86d3e2b0bd522e20e785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

