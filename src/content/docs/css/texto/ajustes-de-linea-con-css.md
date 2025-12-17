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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7IQR4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9JMN27TkBsDzpRvT1UBLOntBzBJ2p%2FvXeUeK40cIxRAiB9Gab8kHLsPvrUbhStYPvRr6nqrtaFDF6FhyyvjFjQTir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM6NvBsAGJxCnCV74xKtwDcVm7nsPmyWY49J1YkoEG8RNBRGVXXPZbnLx0%2F0F0OPpdxOEcwoS7eJpM%2Fc7X65PT%2Fe00CYJ9xL4M7cvgWwUD%2Fk5EiOCuXjv9X7snrHu8G%2BBM1%2FqAl2mSd0Q%2B%2Bl5NlTNl7wE0yV%2FZrRu68hpAl7cksRdgVnupiSf1isjamIudtmEDi4Gv46KyYOZgwiptcLt8fdN%2B5QTIsD4vItXISsUXqnSZ7ERXLC5ogyBR4bDSd5ZyxFX36XuCt6zfycqC7d7zOAG7%2FKOOlnoHsHMx6O3sHlH3M7ir891Qb%2BDqqh7Nq1e9qvG%2FP36KtmZH%2BGqLpYJAW1xBvzvWf%2BXWmPOd14kz2erFaY9%2FmO8389xKDYiWts9FeVt6gYMmuwMXJkc%2FwWaCoznZL%2BDSzczC0l5JJud7IZ3E3aUDbVtE2qNOi%2B61z%2FmWgLPlElbtMVEEeej3vx8%2Fjl%2FPCGWPhwIy8daur6%2F%2BcaaSBypioO71K8bwG4RkOQmpqC5MXIHeRo1M%2BpAgpg1Y7ZmIt9pKzG5IqMtBWLLckd8uPUzcrz%2B%2Bmq5PeYHjkHIb8EGDmgu8hoxOfZf%2BsZVdCo%2B8yrBguIGGMAOTOys6GxV32QJz%2B1MFsGhu9%2FRMJI%2FkScy6nhmf5DZcBUIwi86IygY6pgExb3m5oxFWAr88L1otBBTyB5lWX0%2FIuTNBcOeXBut%2B2%2Fjc9OODssL35%2BydggorSPyY8pfW4lj7PfDx5Oqe13iWUNNBb7Yff%2BA4Gag2WD6Ia2GXg0odPSMiew6KF13U4oJOsoFxsXj4nrmb34wmQ9FyAVfh4eCkQelVYIEUhaNB47yjGNJjudqvEFYAK4%2BIXEPdpVltvUZew7Re2%2FZnIl8xLtEtlgy6&X-Amz-Signature=220157afcad4b9cb5b6dfa034518dd2ccd04f0bbc6d16eba163f2c08686ec4e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W7IQR4E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE9JMN27TkBsDzpRvT1UBLOntBzBJ2p%2FvXeUeK40cIxRAiB9Gab8kHLsPvrUbhStYPvRr6nqrtaFDF6FhyyvjFjQTir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM6NvBsAGJxCnCV74xKtwDcVm7nsPmyWY49J1YkoEG8RNBRGVXXPZbnLx0%2F0F0OPpdxOEcwoS7eJpM%2Fc7X65PT%2Fe00CYJ9xL4M7cvgWwUD%2Fk5EiOCuXjv9X7snrHu8G%2BBM1%2FqAl2mSd0Q%2B%2Bl5NlTNl7wE0yV%2FZrRu68hpAl7cksRdgVnupiSf1isjamIudtmEDi4Gv46KyYOZgwiptcLt8fdN%2B5QTIsD4vItXISsUXqnSZ7ERXLC5ogyBR4bDSd5ZyxFX36XuCt6zfycqC7d7zOAG7%2FKOOlnoHsHMx6O3sHlH3M7ir891Qb%2BDqqh7Nq1e9qvG%2FP36KtmZH%2BGqLpYJAW1xBvzvWf%2BXWmPOd14kz2erFaY9%2FmO8389xKDYiWts9FeVt6gYMmuwMXJkc%2FwWaCoznZL%2BDSzczC0l5JJud7IZ3E3aUDbVtE2qNOi%2B61z%2FmWgLPlElbtMVEEeej3vx8%2Fjl%2FPCGWPhwIy8daur6%2F%2BcaaSBypioO71K8bwG4RkOQmpqC5MXIHeRo1M%2BpAgpg1Y7ZmIt9pKzG5IqMtBWLLckd8uPUzcrz%2B%2Bmq5PeYHjkHIb8EGDmgu8hoxOfZf%2BsZVdCo%2B8yrBguIGGMAOTOys6GxV32QJz%2B1MFsGhu9%2FRMJI%2FkScy6nhmf5DZcBUIwi86IygY6pgExb3m5oxFWAr88L1otBBTyB5lWX0%2FIuTNBcOeXBut%2B2%2Fjc9OODssL35%2BydggorSPyY8pfW4lj7PfDx5Oqe13iWUNNBb7Yff%2BA4Gag2WD6Ia2GXg0odPSMiew6KF13U4oJOsoFxsXj4nrmb34wmQ9FyAVfh4eCkQelVYIEUhaNB47yjGNJjudqvEFYAK4%2BIXEPdpVltvUZew7Re2%2FZnIl8xLtEtlgy6&X-Amz-Signature=f1b8f34659eaa3dc6e00d8a55e74da7eed3fa1d719597c309b07cdc6aa34a995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

