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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWMYLVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeUo3%2FrQsjKK%2FN06sgqMnEW1pEn%2FKPjqeAVorgwyCUJAIhAOVXdoZg6%2FOFlpPC4bFELtPWgGR83N4%2FhH7DdHaNfSyAKv8DCHoQABoMNjM3NDIzMTgzODA1IgwqCs3QvShsVR7XaY8q3AP32tC9tlJuY%2FtHAHyzLw6R8UGK1jhwEghZVd1b4dd2am10TbT7wTa9DC6BcuwVLuN2EA3UUg2XT7tceZntvt%2F7coydcF8cHIQ7JYLrVuOPoUxEm65kYfN%2FhJPgWQt0sOmR3eIB3A4CO5BWZPu3PTPF7iGMDZ0l0w42t9krwxGj8I3%2Bo1wKsNjEFeLjvxPoSZ83L3ibrhl%2FFlCCv4nSm%2BXhVH694i3C%2BYCnpW7wGzcGRjpwQ8Kp0fbdKsdE4%2FzLsZLr3aSmNdFFhHqVkWkEnpBSc0MnS87dx3rWh4RKMOCUb1PZemhR2k8Ow1o35JyIvd%2FkNsFb8cOC8PRIkFD2iAXydg1j%2B9Hx85eMLPSf69sS166Wjsxqo5o57hc%2FETfXLi6HDfrHxEPgkDCZsApbXyGy0eeDCg%2BzoN9sRrxQZPMrBsaSdtC0%2BvE9i36GcyHncCXXzB4QFV8o8Qc0OZQv0IufEwV314KKFKoFjNWfreJ5BwY2wWFrVPUIyZcG6iYY2Qy0tp2YK64YoloxyAueb8%2BgCBKYojLgol55wS9t1x3Iqdd80P8%2FlEobwnQqfUwpTzTHuc6lsEiZkQiTKB6Wg2sIViy3Mlb8fFQW1EQDMa%2BxwMQZjcDc%2FRGFxEO4SzCp0onKBjqkAZ%2F3iCHWT3d7PKYuwLM5PCNCk8%2FhoFhhKuTLEDtGYZ1BU9MHCX1bAqSlU%2BOjd%2BtBepHTI3ZR0zz3nHSgnDgjGNhK4yldyayN9vXYx5PMA5d3bfpMlLaGJX5%2FAsW6ntJaWgaeKsVZIaYyUFGQ0w0Epd1fc35ghLkhvUtlW8tBIMZU2QNs3E88Nav%2FBp%2F7vQwUNHvYlRW6hYYcm63bCdjXZIaQP6Tg&X-Amz-Signature=f01d018de9b007a3ab0df8f0c34c0e0fc31af03305417c7af9abafb22816db98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAWMYLVL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeUo3%2FrQsjKK%2FN06sgqMnEW1pEn%2FKPjqeAVorgwyCUJAIhAOVXdoZg6%2FOFlpPC4bFELtPWgGR83N4%2FhH7DdHaNfSyAKv8DCHoQABoMNjM3NDIzMTgzODA1IgwqCs3QvShsVR7XaY8q3AP32tC9tlJuY%2FtHAHyzLw6R8UGK1jhwEghZVd1b4dd2am10TbT7wTa9DC6BcuwVLuN2EA3UUg2XT7tceZntvt%2F7coydcF8cHIQ7JYLrVuOPoUxEm65kYfN%2FhJPgWQt0sOmR3eIB3A4CO5BWZPu3PTPF7iGMDZ0l0w42t9krwxGj8I3%2Bo1wKsNjEFeLjvxPoSZ83L3ibrhl%2FFlCCv4nSm%2BXhVH694i3C%2BYCnpW7wGzcGRjpwQ8Kp0fbdKsdE4%2FzLsZLr3aSmNdFFhHqVkWkEnpBSc0MnS87dx3rWh4RKMOCUb1PZemhR2k8Ow1o35JyIvd%2FkNsFb8cOC8PRIkFD2iAXydg1j%2B9Hx85eMLPSf69sS166Wjsxqo5o57hc%2FETfXLi6HDfrHxEPgkDCZsApbXyGy0eeDCg%2BzoN9sRrxQZPMrBsaSdtC0%2BvE9i36GcyHncCXXzB4QFV8o8Qc0OZQv0IufEwV314KKFKoFjNWfreJ5BwY2wWFrVPUIyZcG6iYY2Qy0tp2YK64YoloxyAueb8%2BgCBKYojLgol55wS9t1x3Iqdd80P8%2FlEobwnQqfUwpTzTHuc6lsEiZkQiTKB6Wg2sIViy3Mlb8fFQW1EQDMa%2BxwMQZjcDc%2FRGFxEO4SzCp0onKBjqkAZ%2F3iCHWT3d7PKYuwLM5PCNCk8%2FhoFhhKuTLEDtGYZ1BU9MHCX1bAqSlU%2BOjd%2BtBepHTI3ZR0zz3nHSgnDgjGNhK4yldyayN9vXYx5PMA5d3bfpMlLaGJX5%2FAsW6ntJaWgaeKsVZIaYyUFGQ0w0Epd1fc35ghLkhvUtlW8tBIMZU2QNs3E88Nav%2FBp%2F7vQwUNHvYlRW6hYYcm63bCdjXZIaQP6Tg&X-Amz-Signature=9cf7fe51d27939264c9b222473b1c70922d3a4551e3985418d0d8c63ff1f1d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

