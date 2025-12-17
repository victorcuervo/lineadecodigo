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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5655K3F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID50mXtbvV4qZu3tfX8Zu%2F65vRA7wcExaS6DWB%2BZ12bIAiEAyFtiMxmkJiuVOvayttI%2Fz7Q0euR3saY7y0N%2FcgecPb8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOXz2AzCYB6vxJ0blSrcA%2F6bcwMH22Ou7IcZah%2B1o6FIh8O%2BmZgHXvelUg3vdMSostS9Svi09q3%2Fsh0aF3DYGzqu%2Bn0CRbgD8Hk4uzPh8VMF0VBSm4PdyyInYDrp0LWwQJ87A3xvlvygzQVi73wvO21vaxIZtWkpaK3FZk0bSqfNATXdywIrhY1QiokVcFUopPTsnyjxzIEd1mQ4o%2Fs03DoGI4t%2FkVcB9H0rhiXOev1EPeLlbojR3IglPn8KJnNS6uiAFhBC9gjgwgfYIKcr1WlDHkULIhbRWXwFMri%2Fd3r1ZyszmxoKifyqP%2BavHStjDsb%2BS9Mv1GjMWPnd257FpSjPS4Xyuy3XGHrB4Ecnh9nD17IhK9DvKFhIAc7hZRKPEUbNuxc9EOjcm8S8X%2FklpxwM1pDv1P4%2FOFoLBu2AVxsu9O4avJIDxT5aby1SBIqW%2FKoo02XNOBNY7X%2FB%2B1SZZzoViDxt5%2FNxxxgD7JQa8yxSUe16XNaqyOTL3jo3zfcHiNbNL53r%2Bij%2FqvVDG1uYYTczXNa4wLgG2dP3QKHh58XiD4nxRlGJOAdSvreLFFEafl8wOw8N%2FLtSnsijbNHT97PY5h7JnonhPBMFM7DtQC244FjXQxqu4WyLSC%2F%2BagPML92Vfi1lKrqO0Z3JMOnpiMoGOqUBkEDgRRSTtB8F3XKI9cdl0rgo3O1Xg2twCmrLTltm3KKfqKO7AbeGdfSEeHK3sVu%2BH8%2F3d4FLMs%2F18JxIMQ3YxN%2FHLbPWz40x5KmYn5py3eTJJ1GauWf4ko8qHnRFjlOqyCrxjFlic%2FL9c5fVYAg%2F5O%2BWCDgrCRmPPbB6FMLuZ5BwOGNcNsZYWgM5%2F0aOLxBj9UXeF5hae9aDpay2lSb3qShLGSqn&X-Amz-Signature=59eac59ea02501917404b6fd744d7f04a1f306efd573ddc3d14eba783422378f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5655K3F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID50mXtbvV4qZu3tfX8Zu%2F65vRA7wcExaS6DWB%2BZ12bIAiEAyFtiMxmkJiuVOvayttI%2Fz7Q0euR3saY7y0N%2FcgecPb8q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOXz2AzCYB6vxJ0blSrcA%2F6bcwMH22Ou7IcZah%2B1o6FIh8O%2BmZgHXvelUg3vdMSostS9Svi09q3%2Fsh0aF3DYGzqu%2Bn0CRbgD8Hk4uzPh8VMF0VBSm4PdyyInYDrp0LWwQJ87A3xvlvygzQVi73wvO21vaxIZtWkpaK3FZk0bSqfNATXdywIrhY1QiokVcFUopPTsnyjxzIEd1mQ4o%2Fs03DoGI4t%2FkVcB9H0rhiXOev1EPeLlbojR3IglPn8KJnNS6uiAFhBC9gjgwgfYIKcr1WlDHkULIhbRWXwFMri%2Fd3r1ZyszmxoKifyqP%2BavHStjDsb%2BS9Mv1GjMWPnd257FpSjPS4Xyuy3XGHrB4Ecnh9nD17IhK9DvKFhIAc7hZRKPEUbNuxc9EOjcm8S8X%2FklpxwM1pDv1P4%2FOFoLBu2AVxsu9O4avJIDxT5aby1SBIqW%2FKoo02XNOBNY7X%2FB%2B1SZZzoViDxt5%2FNxxxgD7JQa8yxSUe16XNaqyOTL3jo3zfcHiNbNL53r%2Bij%2FqvVDG1uYYTczXNa4wLgG2dP3QKHh58XiD4nxRlGJOAdSvreLFFEafl8wOw8N%2FLtSnsijbNHT97PY5h7JnonhPBMFM7DtQC244FjXQxqu4WyLSC%2F%2BagPML92Vfi1lKrqO0Z3JMOnpiMoGOqUBkEDgRRSTtB8F3XKI9cdl0rgo3O1Xg2twCmrLTltm3KKfqKO7AbeGdfSEeHK3sVu%2BH8%2F3d4FLMs%2F18JxIMQ3YxN%2FHLbPWz40x5KmYn5py3eTJJ1GauWf4ko8qHnRFjlOqyCrxjFlic%2FL9c5fVYAg%2F5O%2BWCDgrCRmPPbB6FMLuZ5BwOGNcNsZYWgM5%2F0aOLxBj9UXeF5hae9aDpay2lSb3qShLGSqn&X-Amz-Signature=f8124b5107bf5092283049954855265ce8d9e3e786c649ae018069806787b7b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

