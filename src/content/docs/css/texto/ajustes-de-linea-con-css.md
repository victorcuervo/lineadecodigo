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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LW2IRF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7K0xwnifH2eNvo33NmoRPJIYglXeart38J%2F8diOxnQIhAPjkeOQVNLi76RivC1OSyVg3twSUv2NK0UgcbDIVzQkzKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6tbzH0XvS6QdhLSsq3APDQ4804US3CCsesd3iGeuaFMdqg857fhi7JvvrjvdsM0CHfiO%2BChwYeqhQUkT9nqrrD%2BWncrReQ3wD4CcMRI%2Fu5Bx3lEhr%2F0aW74sHN%2FZEX7rqgyP%2FoZQrq5CGKKA%2BWU8HMBt%2BoCHIvxulYz6y%2BvvS2yMudQ2nP%2FdkE960o0zfVp0odu4XlO4wh25ix%2F71fH%2FEJzXElI0uIQ0zGxIWu2c7MMey%2Bj3itDy8OPxggWR786DMjsEPsVufLUb1Wl7ZOTcoC2Cq2XFCcSBhcplHKa6gbcidKRWZexjQsPR4yDxC9ogHerYP%2BUJp7cG%2Bv1Ak0ojwn6mUAGBiQrNog9VSqOhuUjyUAknED6KWl8u%2FBfnbfCgJ38IcCUnufHtZqKSWuYOCQD%2B%2B1t9VvlkTQxk4%2FVzK1PuMXqkGYrlJlTkur5o%2BzcDYVBoTUkGYgNB7uQahiJNqio1FfINrE66x%2FTh7crwtBgZmCE4xjlAfFGbNqY%2B6CJp1XRXlDTt%2B15zlxBAh5cFEU%2F9XsAI9ru%2FHMwIvFVamd0qnhgsUUGqIzwvi1YveaWnvhqhw4oofN6uKy8AHpi%2Bmj49EIMnZAZ4R%2BZzU833QCJzlhdqjsdT5fBDhShtLdiNltlBaBS4JgGQzOzC0i4zKBjqkAXSbG%2Fwmpfln4SrV5cg5DR2kjhoqbUDtvT2yivBObghsGCYPlB3JyLXtVKzFHOcEHbOOnF%2Baf04CzmiI7YMwQ5k3yZ8HoNQSXsVbuCiN20kFM%2BTesMoUUuLWs0v8Nj2RlhFf3LmTTUVkoZDbWoAWbOTzvj3o6avgSAQYtO0DOlksvEyqYMBbx%2FWa4lXQZ6Esb30oZlVnVJ2tirMGEYH6FDWFfRoA&X-Amz-Signature=dca35a4c5972dfc739d78051bcc055955f13a595c838878bffc99a6c60986398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5LW2IRF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ7K0xwnifH2eNvo33NmoRPJIYglXeart38J%2F8diOxnQIhAPjkeOQVNLi76RivC1OSyVg3twSUv2NK0UgcbDIVzQkzKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw6tbzH0XvS6QdhLSsq3APDQ4804US3CCsesd3iGeuaFMdqg857fhi7JvvrjvdsM0CHfiO%2BChwYeqhQUkT9nqrrD%2BWncrReQ3wD4CcMRI%2Fu5Bx3lEhr%2F0aW74sHN%2FZEX7rqgyP%2FoZQrq5CGKKA%2BWU8HMBt%2BoCHIvxulYz6y%2BvvS2yMudQ2nP%2FdkE960o0zfVp0odu4XlO4wh25ix%2F71fH%2FEJzXElI0uIQ0zGxIWu2c7MMey%2Bj3itDy8OPxggWR786DMjsEPsVufLUb1Wl7ZOTcoC2Cq2XFCcSBhcplHKa6gbcidKRWZexjQsPR4yDxC9ogHerYP%2BUJp7cG%2Bv1Ak0ojwn6mUAGBiQrNog9VSqOhuUjyUAknED6KWl8u%2FBfnbfCgJ38IcCUnufHtZqKSWuYOCQD%2B%2B1t9VvlkTQxk4%2FVzK1PuMXqkGYrlJlTkur5o%2BzcDYVBoTUkGYgNB7uQahiJNqio1FfINrE66x%2FTh7crwtBgZmCE4xjlAfFGbNqY%2B6CJp1XRXlDTt%2B15zlxBAh5cFEU%2F9XsAI9ru%2FHMwIvFVamd0qnhgsUUGqIzwvi1YveaWnvhqhw4oofN6uKy8AHpi%2Bmj49EIMnZAZ4R%2BZzU833QCJzlhdqjsdT5fBDhShtLdiNltlBaBS4JgGQzOzC0i4zKBjqkAXSbG%2Fwmpfln4SrV5cg5DR2kjhoqbUDtvT2yivBObghsGCYPlB3JyLXtVKzFHOcEHbOOnF%2Baf04CzmiI7YMwQ5k3yZ8HoNQSXsVbuCiN20kFM%2BTesMoUUuLWs0v8Nj2RlhFf3LmTTUVkoZDbWoAWbOTzvj3o6avgSAQYtO0DOlksvEyqYMBbx%2FWa4lXQZ6Esb30oZlVnVJ2tirMGEYH6FDWFfRoA&X-Amz-Signature=e94b364f903d26d649509e71e395d3f0504577c3bcad3ed1b5cde1379c1b29f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

