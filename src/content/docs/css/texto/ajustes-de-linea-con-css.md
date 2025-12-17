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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRQGYLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW3CfWKTTMfI5AJcPQCCu8%2Bu5EH17givp3WGcl47cxlAiEAx6cQ4xKaZP5NjblBkvD%2FrZ7wY5izvKJ4qT%2F9TkaKMRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKp4hqSr2CcepeDLyrcA9Mrz3AcPADx9qZc8uF4n8hbhvBBDxVohfh7MzMrSSAkxTBh14gzIpE%2BUydmBGoDPfgFPbffMQNHM7ZDY90e0JXOeKhd32kVUt871RTRpNhDfU8G05Dki3q1LwVSOSIDFKzuHldlJK%2BnxfskUqu%2BAl1bH8a646%2FAMjlZLnwDmLKMxaU%2BK%2BEYur2MoWiLUlYKHPyaYAYo5qCy4e4xNjFqexFpSy28W8W68sbqMRMuEl3oznyUxiOuyJq9JtIbfLr%2BiT%2B7yjIu92ks64%2FClTqA1BhSCMs%2BjmGm29vwAlavBUZIF4XhWXnftO5NxnTlKuq7cr6GZMc79vzJCryazyLj9aab1ly%2FH9FmEHQDpQP0unGEKnSs%2BwsFWS%2FTN3f3xsf2Lzg3mIS%2BAdINwgr8FYpoa3O2JtfxmbNd9R6hm%2FqaEjx11w%2BqePtbezyazYWSEauVBSfl9NVF%2F6uZr2FstKI3SmqX4BxktDLhYwuny4yUB8DFFs7UBiiotlOznV8AJn42s%2Bx1qFR%2F6S0sbYztYEPftQcRA%2Bp51GtqeEMq64gh3eJzIx6uMzqgEPTy0ZhFcL0y8hY0nmtuzNgDZB4H05J%2F83C9QFASPk%2Bk%2BpfPz9KewFfWt7AnittKuTuW33yCMLifi8oGOqUBIHMlXlPV0jUyhd0pAQxAeY1s6tMebV6NtI%2Bo8kr8FqrYt6iRcDRwY0ZndflIDp2SVu8W28aXbS3LJ7zmxSsnYlIoWdkDLNpxAmPAgpGDi60SeGUGNwSiK7yY3BsXXIay825av%2FUhVFmheVHTIqNmb%2Bxjk%2FwNgX%2FOkfqqAsU%2Frnaj4nup0z1lrJSU4AfWv9PfJXmKSgZLGclb%2FMknNe8uUSBfVDhX&X-Amz-Signature=0fa83139e82acdf67dd98a0e94a0dd70bf71d796b2e25a60ecb2d3b51935da56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMRQGYLF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFW3CfWKTTMfI5AJcPQCCu8%2Bu5EH17givp3WGcl47cxlAiEAx6cQ4xKaZP5NjblBkvD%2FrZ7wY5izvKJ4qT%2F9TkaKMRQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKp4hqSr2CcepeDLyrcA9Mrz3AcPADx9qZc8uF4n8hbhvBBDxVohfh7MzMrSSAkxTBh14gzIpE%2BUydmBGoDPfgFPbffMQNHM7ZDY90e0JXOeKhd32kVUt871RTRpNhDfU8G05Dki3q1LwVSOSIDFKzuHldlJK%2BnxfskUqu%2BAl1bH8a646%2FAMjlZLnwDmLKMxaU%2BK%2BEYur2MoWiLUlYKHPyaYAYo5qCy4e4xNjFqexFpSy28W8W68sbqMRMuEl3oznyUxiOuyJq9JtIbfLr%2BiT%2B7yjIu92ks64%2FClTqA1BhSCMs%2BjmGm29vwAlavBUZIF4XhWXnftO5NxnTlKuq7cr6GZMc79vzJCryazyLj9aab1ly%2FH9FmEHQDpQP0unGEKnSs%2BwsFWS%2FTN3f3xsf2Lzg3mIS%2BAdINwgr8FYpoa3O2JtfxmbNd9R6hm%2FqaEjx11w%2BqePtbezyazYWSEauVBSfl9NVF%2F6uZr2FstKI3SmqX4BxktDLhYwuny4yUB8DFFs7UBiiotlOznV8AJn42s%2Bx1qFR%2F6S0sbYztYEPftQcRA%2Bp51GtqeEMq64gh3eJzIx6uMzqgEPTy0ZhFcL0y8hY0nmtuzNgDZB4H05J%2F83C9QFASPk%2Bk%2BpfPz9KewFfWt7AnittKuTuW33yCMLifi8oGOqUBIHMlXlPV0jUyhd0pAQxAeY1s6tMebV6NtI%2Bo8kr8FqrYt6iRcDRwY0ZndflIDp2SVu8W28aXbS3LJ7zmxSsnYlIoWdkDLNpxAmPAgpGDi60SeGUGNwSiK7yY3BsXXIay825av%2FUhVFmheVHTIqNmb%2Bxjk%2FwNgX%2FOkfqqAsU%2Frnaj4nup0z1lrJSU4AfWv9PfJXmKSgZLGclb%2FMknNe8uUSBfVDhX&X-Amz-Signature=76d912cd70c75cb7b3439bb296b608284f8a59e60dbc1f981efd50fcd1559c2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

